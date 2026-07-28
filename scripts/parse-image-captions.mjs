#!/usr/bin/env node
/**
 * Parse sitemap.xml and build an image-caption mapping.
 * Output: docs/research/image-captions.json
 *
 * Maps each downloaded local image path to:
 *  - original URL
 *  - page URLs where it appears
 *  - title and caption from the sitemap
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const SITEMAP_PATH = "docs/research/sitemap.xml";
const MANIFEST_PATH = "docs/research/asset-manifest.json";
const OUT_PATH = "docs/research/image-captions.json";

function normalizeImageUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "images.squarespace-cdn.com") {
      u.searchParams.delete("format");
      u.searchParams.delete("content-type");
    }
    return u.toString();
  } catch {
    return url;
  }
}

function sanitizeFilename(url) {
  try {
    const u = new URL(url);
    let pathname = decodeURIComponent(u.pathname).replace(/[^a-zA-Z0-9_.\-/]/g, "_");
    pathname = pathname.replace(/\/+/g, "/").replace(/^\//, "");
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "asset";
    const hash = require("node:crypto")
      .createHash("md5")
      .update(url)
      .digest("hex")
      .slice(0, 8);
    const base = lastSegment.includes(".") ? lastSegment : `${lastSegment}_${hash}`;
    const ext = path.extname(base).toLowerCase();
    const name = path.basename(base, ext) || "asset";
    return `${name}_${hash}${ext || ""}`;
  } catch {
    return `asset_${require("node:crypto")
      .createHash("md5")
      .update(url)
      .digest("hex")
      .slice(0, 8)}`;
  }
}

async function main() {
  const [sitemapXml, manifestJson] = await Promise.all([
    fs.readFile(SITEMAP_PATH, "utf8"),
    fs.readFile(MANIFEST_PATH, "utf8"),
  ]);

  const manifest = JSON.parse(manifestJson);
  const urlToLocal = new Map(manifest.assets.map((a) => [normalizeImageUrl(a.url), a.localPath]));

  const urlBlocks = sitemapXml.split("<url>").slice(1);
  const results = [];

  for (const block of urlBlocks) {
    const pageLocMatch = block.match(/<loc>([^<]+)<\/loc>/);
    if (!pageLocMatch) continue;
    const pageUrl = pageLocMatch[1];

    const imageBlocks = block.split("<image:image>").slice(1);
    for (const imgBlock of imageBlocks) {
      const locMatch = imgBlock.match(/<image:loc>([^<]+)<\/image:loc>/);
      const titleMatch = imgBlock.match(/<image:title>([^<]*)<\/image:title>/);
      const captionMatch = imgBlock.match(/<image:caption>([^<]*)<\/image:caption>/);
      if (!locMatch) continue;

      const originalUrl = decodeURIComponent(locMatch[1]);
      const normalizedUrl = normalizeImageUrl(originalUrl);
      const localPath = urlToLocal.get(normalizedUrl);
      if (!localPath) continue;

      results.push({
        localPath,
        originalUrl,
        pageUrl,
        title: titleMatch?.[1] || "",
        caption: captionMatch?.[1] || "",
      });
    }
  }

  // Group by localPath
  const grouped = {};
  for (const item of results) {
    if (!grouped[item.localPath]) {
      grouped[item.localPath] = {
        localPath: item.localPath,
        originalUrl: item.originalUrl,
        pages: [],
        titles: [],
        captions: [],
      };
    }
    const g = grouped[item.localPath];
    if (!g.pages.includes(item.pageUrl)) g.pages.push(item.pageUrl);
    if (item.title && !g.titles.includes(item.title)) g.titles.push(item.title);
    if (item.caption && !g.captions.includes(item.caption)) g.captions.push(item.caption);
  }

  await fs.writeFile(OUT_PATH, JSON.stringify(Object.values(grouped), null, 2));
  console.log(`Wrote ${Object.keys(grouped).keys} image-caption entries to ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
