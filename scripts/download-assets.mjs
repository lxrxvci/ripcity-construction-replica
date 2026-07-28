#!/usr/bin/env node
/**
 * Asset downloader for ripcityconstruction.com clone.
 *
 * What it does:
 *  1. Parses the Squarespace sitemap.
 *  2. Crawls every page with Playwright Chromium.
 *  3. Collects all images, fonts, videos, favicons, and OG/meta images.
 *  4. Deduplicates assets and downloads them in batched parallel requests.
 *  5. Writes a manifest mapping every original URL to its local path.
 *
 * Run with:
 *   node scripts/download-assets.mjs
 */

import { chromium } from 'playwright';
import { promises as fs, createWriteStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createHash } from 'node:crypto';

const BASE_URL = 'https://www.ripcityconstruction.com';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

const OUT_DIRS = {
  images: 'public/images',
  fonts: 'public/fonts',
  videos: 'public/videos',
  seo: 'public/seo',
};

const MANIFEST_PATH = 'docs/research/asset-manifest.json';
const BATCH_SIZE = 4;
const RETRIES = 3;
const RETRY_DELAY_MS = 1000;

// Asset hosts we care about. Anything else is ignored (e.g., analytics scripts).
const RELEVANT_HOSTS = [
  'images.squarespace-cdn.com',
  'static1.squarespace.com',
  'file.squarespace-cdn.com',
  'definitions.sqspcdn.com',
  'assets.squarespace.com',
  'scontent.cdninstagram.com',
  'www.ripcityconstruction.com',
  'ripcityconstruction.com',
];

function isRelevantAsset(url) {
  try {
    const u = new URL(url);
    return RELEVANT_HOSTS.some((h) => u.hostname === h || u.hostname.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

function normalizeImageUrl(url) {
  // Remove Squarespace resize params to get the highest publicly available resolution.
  try {
    const u = new URL(url);
    if (u.hostname === 'images.squarespace-cdn.com') {
      u.searchParams.delete('format');
      u.searchParams.delete('content-type');
    }
    return u.toString();
  } catch {
    return url;
  }
}

function sanitizeFilename(url) {
  try {
    const u = new URL(url);
    let pathname = decodeURIComponent(u.pathname).replace(/[^a-zA-Z0-9_.\-/]/g, '_');
    pathname = pathname.replace(/\/+/g, '/').replace(/^\//, '');
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || 'asset';
    // Use a short hash of the full URL so every unique URL gets a unique filename.
    const hash = createHash('md5').update(url).digest('hex').slice(0, 8);
    const base = lastSegment.includes('.') ? lastSegment : `${lastSegment}_${hash}`;
    const ext = path.extname(base).toLowerCase();
    const name = path.basename(base, ext) || 'asset';
    return `${name}_${hash}${ext || ''}`;
  } catch {
    return `asset_${createHash('md5').update(url).digest('hex').slice(0, 8)}`;
  }
}

function categoryForUrl(url) {
  try {
    const u = new URL(url);
    const ext = path.extname(u.pathname).toLowerCase();

    if (ext === '.woff' || ext === '.woff2' || ext === '.ttf' || ext === '.otf' || ext === '.eot') {
      return 'fonts';
    }
    if (ext === '.mp4' || ext === '.webm' || ext === '.mov' || ext === '.ogv') {
      return 'videos';
    }
    if (
      u.pathname.includes('favicon') ||
      u.pathname.includes('apple-touch-icon') ||
      u.pathname.includes('webmanifest') ||
      u.pathname.includes('safari-pinned-tab') ||
      u.pathname.includes('mstile')
    ) {
      return 'seo';
    }
    // OG images served from static1.squarespace.com go to seo as well.
    if (u.hostname === 'static1.squarespace.com' && (u.pathname.includes('/logo/') || u.pathname.includes('/og/'))) {
      return 'seo';
    }
    return 'images';
  } catch {
    return 'images';
  }
}

async function ensureDirs() {
  for (const dir of Object.values(OUT_DIRS)) {
    await fs.mkdir(dir, { recursive: true });
  }
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const unique = [...new Set(locs)];
  console.log(`Found ${unique.length} URLs in sitemap.`);
  return unique;
}

async function collectPageAssets(browser, pageUrl) {
  const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' });
  const page = await context.newPage();

  const networkAssets = new Set();
  page.on('request', (req) => {
    const resourceType = req.resourceType();
    const url = req.url();
    if (
      (resourceType === 'image' || resourceType === 'font' || resourceType === 'media') &&
      isRelevantAsset(url)
    ) {
      networkAssets.add(normalizeImageUrl(url));
    }
  });

  await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000); // Allow lazy-loaded images to settle.

  const domAssets = await page.evaluate(() => {
    const results = [];

    // Images
    document.querySelectorAll('img').forEach((img) => {
      const src = img.currentSrc || img.src;
      if (src) results.push(src);
    });

    // Background images
    document.querySelectorAll('*').forEach((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none') {
        const matches = bg.matchAll(/url\(["']?([^"')]+)["']?\)/g);
        for (const m of matches) results.push(m[1]);
      }
    });

    // Videos
    document.querySelectorAll('video').forEach((v) => {
      if (v.src) results.push(v.src);
      if (v.poster) results.push(v.poster);
      v.querySelectorAll('source').forEach((s) => s.src && results.push(s.src));
    });

    // Favicons / icons
    document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]').forEach((l) => {
      if (l.href) results.push(l.href);
    });

    // Meta images
    document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"], meta[itemprop="image"]').forEach((m) => {
      const content = m.getAttribute('content');
      if (content) results.push(content);
    });

    return results;
  });

  // Also extract @font-face src URLs from stylesheets.
  const fontUrls = await page.evaluate(async () => {
    const urls = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules || []) {
          if (rule instanceof CSSFontFaceRule) {
            const src = rule.style.getPropertyValue('src');
            if (src) {
              const matches = src.matchAll(/url\(["']?([^"')]+)["']?\)/g);
              for (const m of matches) urls.push(m[1]);
            }
          }
        }
      } catch {
        // Cross-origin stylesheet; ignore.
      }
    }
    return urls;
  });

  await context.close();

  const all = [...networkAssets, ...domAssets, ...fontUrls]
    .map((u) => normalizeImageUrl(u))
    .filter((u) => isRelevantAsset(u) && u.startsWith('http'));

  return [...new Set(all)];
}

async function downloadWithRetry(url, outPath, attempt = 1) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const fileStream = createWriteStream(outPath);
    await pipeline(res.body, fileStream);
    return true;
  } catch (err) {
    if (attempt < RETRIES) {
      await new Promise((r) => setTimeout(r, RETRY_DELAY_MS * attempt));
      return downloadWithRetry(url, outPath, attempt + 1);
    }
    throw err;
  }
}

async function downloadBatch(entries) {
  return Promise.all(
    entries.map(async ({ url, category }) => {
      const filename = sanitizeFilename(url);
      const outDir = OUT_DIRS[category];
      const outPath = path.join(outDir, filename);

      try {
        await downloadWithRetry(url, outPath);
        const stat = await fs.stat(outPath);
        return { url, category, localPath: outPath, size: stat.size, ok: true };
      } catch (err) {
        // Fallback for Squarespace images: if the normalized (format-stripped) URL
        // failed, try a 2500w resize.
        if (category === 'images' && !url.includes('format=')) {
          try {
            const fallbackUrl = `${url}?format=2500w`;
            await downloadWithRetry(fallbackUrl, outPath);
            const stat = await fs.stat(outPath);
            return { url, category, localPath: outPath, size: stat.size, ok: true, fallback: true };
          } catch {
            // fall through to error
          }
        }
        return { url, category, localPath: outPath, size: 0, ok: false, error: err.message };
      }
    })
  );
}

async function main() {
  await ensureDirs();
  const pageUrls = await fetchSitemapUrls();

  const browser = await chromium.launch({ headless: true });
  const allAssets = [];

  for (let i = 0; i < pageUrls.length; i++) {
    const pageUrl = pageUrls[i];
    console.log(`[${i + 1}/${pageUrls.length}] Crawling ${pageUrl} ...`);
    const assets = await collectPageAssets(browser, pageUrl);
    console.log(`  Found ${assets.length} assets.`);
    allAssets.push(...assets);
  }

  await browser.close();

  const uniqueUrls = [...new Set(allAssets)];
  const entries = uniqueUrls.map((url) => ({ url, category: categoryForUrl(url) }));
  console.log(`\nTotal unique assets to download: ${entries.length}`);
  console.log(`  Images: ${entries.filter((e) => e.category === 'images').length}`);
  console.log(`  Fonts:  ${entries.filter((e) => e.category === 'fonts').length}`);
  console.log(`  Videos: ${entries.filter((e) => e.category === 'videos').length}`);
  console.log(`  SEO:    ${entries.filter((e) => e.category === 'seo').length}`);

  // Download in batches of 4.
  const results = [];
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    console.log(`Downloading batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(entries.length / BATCH_SIZE)} ...`);
    const batchResults = await downloadBatch(batch);
    results.push(...batchResults);
  }

  const ok = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);
  const totalBytes = ok.reduce((sum, r) => sum + r.size, 0);

  console.log(`\nDownloaded ${ok.length}/${results.length} assets (${(totalBytes / 1024 / 1024).toFixed(2)} MB).`);
  if (failed.length) {
    console.log(`Failed ${failed.length}:`);
    failed.forEach((f) => console.log(`  - ${f.url}: ${f.error}`));
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    pages: pageUrls,
    assets: results.map((r) => ({
      url: r.url,
      category: r.category,
      localPath: r.localPath,
      size: r.size,
      ok: r.ok,
      fallback: r.fallback || false,
      error: r.error || undefined,
    })),
    summary: {
      total: results.length,
      downloaded: ok.length,
      failed: failed.length,
      totalBytes,
    },
  };

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${MANIFEST_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
