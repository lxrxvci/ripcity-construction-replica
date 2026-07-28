#!/usr/bin/env node
/**
 * Reconnaissance script for ripcityconstruction.com clone.
 *
 * For every page in the asset manifest, this script:
 *  - Captures desktop (1440px) and mobile (390px) full-page screenshots.
 *  - Extracts global design tokens (colors, typography, spacing, buttons).
 *  - Extracts the page topology: header, footer, and every Squarespace section.
 *  - For each section, records computed styles, text, images, backgrounds, and responsive changes.
 *  - Writes JSON data and a human-readable topology markdown file.
 *
 * Run with:
 *   node scripts/reconnaissance.mjs
 */

import { chromium } from 'playwright';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const MANIFEST_PATH = 'docs/research/asset-manifest.json';
const OUT_DIR = 'docs/research/ripcityconstruction.com';
const SCREENSHOT_DIR = 'docs/design-references/ripcityconstruction.com';

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const STYLE_PROPS = [
  'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing', 'color',
  'textTransform', 'textDecoration', 'textAlign', 'backgroundColor', 'background',
  'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
  'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
  'width', 'height', 'maxWidth', 'minWidth', 'maxHeight', 'minHeight',
  'display', 'flexDirection', 'justifyContent', 'alignItems', 'alignSelf', 'gap',
  'gridTemplateColumns', 'gridTemplateRows',
  'borderRadius', 'border', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight',
  'boxShadow', 'overflow', 'overflowX', 'overflowY',
  'position', 'top', 'right', 'bottom', 'left', 'zIndex',
  'opacity', 'transform', 'transition', 'cursor',
  'objectFit', 'objectPosition', 'mixBlendMode', 'filter', 'backdropFilter',
  'whiteSpace', 'textOverflow', 'WebkitLineClamp',
];

function slugify(url) {
  try {
    const u = new URL(url);
    return u.pathname.replace(/^\//, '').replace(/\//g, '_') || 'home';
  } catch {
    return 'unknown';
  }
}

function compactStyles(computed) {
  const out = {};
  for (const p of STYLE_PROPS) {
    const v = computed[p];
    if (
      v &&
      v !== 'none' &&
      v !== 'normal' &&
      v !== 'auto' &&
      v !== '0px' &&
      v !== 'rgba(0, 0, 0, 0)' &&
      v !== 'transparent' &&
      v !== 'start' &&
      v !== 'static' &&
      v !== 'visible' &&
      v !== '0' &&
      v !== 'row'
    ) {
      out[p] = v;
    }
  }
  return out;
}

async function extractSectionData(page, sectionEl) {
  return page.evaluate(({ el, props }) => {
    const computed = window.getComputedStyle(el);
    const styles = {};
    for (const p of props) {
      const v = computed[p];
      if (
        v &&
        v !== 'none' &&
        v !== 'normal' &&
        v !== 'auto' &&
        v !== '0px' &&
        v !== 'rgba(0, 0, 0, 0)' &&
        v !== 'transparent' &&
        v !== 'start' &&
        v !== 'static' &&
        v !== 'visible' &&
        v !== '0' &&
        v !== 'row'
      ) {
        styles[p] = v;
      }
    }

    const images = [...el.querySelectorAll('img')].map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      width: img.width,
      height: img.height,
      loading: img.loading,
    }));

    const videos = [...el.querySelectorAll('video')].map((v) => ({
      src: v.src,
      poster: v.poster,
      autoplay: v.autoplay,
      loop: v.loop,
      muted: v.muted,
    }));

    const bg = computed.backgroundImage;
    const backgroundImage = bg && bg !== 'none' ? bg : null;

    const textNodes = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent.trim();
      if (text && text.length > 1) textNodes.push(text);
    }

    const headings = [...el.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => ({
      tag: h.tagName.toLowerCase(),
      text: h.innerText.trim(),
      classes: h.className,
    }));

    const links = [...el.querySelectorAll('a')].map((a) => ({
      href: a.href,
      text: a.innerText.trim(),
      classes: a.className,
    }));

    const buttons = [...el.querySelectorAll('button, .sqs-block-button-element, .sqs-editable-button')].map((b) => ({
      text: b.innerText.trim(),
      classes: b.className,
    }));

    return {
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      dataSectionId: el.getAttribute('data-section-id') || null,
      classes: el.className,
      dataset: Object.fromEntries([...el.attributes].map((a) => [a.name, a.value])),
      styles,
      backgroundImage,
      rect: el.getBoundingClientRect().toJSON(),
      images,
      videos,
      headings,
      textNodes: [...new Set(textNodes)],
      links,
      buttons,
    };
  }, { el: sectionEl, props: STYLE_PROPS });
}

async function extractGlobalTokens(page) {
  return page.evaluate((props) => {
    const sample = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const cs = window.getComputedStyle(el);
      const styles = {};
      for (const p of props) {
        const v = cs[p];
        if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent') {
          styles[p] = v;
        }
      }
      return styles;
    };

    const body = document.body;
    const bodyStyles = sample('body');

    // Common Squarespace selectors
    const header = sample('header, .header, .site-header, [data-section-id="header"]');
    const footer = sample('footer, .footer, .site-footer, [data-section-id="footer"]');
    const h1 = sample('h1');
    const h2 = sample('h2');
    const p = sample('p');
    const a = sample('a');
    const button = sample('button, .sqs-block-button-element, .sqs-editable-button');

    const navLinks = [...document.querySelectorAll('header a, .header a, .site-header a, nav a')].map((a) => ({
      href: a.href,
      text: a.innerText.trim(),
    }));

    const fontLinks = [...document.querySelectorAll('link[rel="stylesheet"], link[as="font"]')].map((l) => l.href);

    return {
      body: bodyStyles,
      header,
      footer,
      h1,
      h2,
      p,
      link: a,
      button,
      navLinks: [...new Map(navLinks.map((n) => [n.href + n.text, n])).values()],
      fontLinks,
      pageTitle: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content || null,
      canonical: document.querySelector('link[rel="canonical"]')?.href || null,
      viewport: document.querySelector('meta[name="viewport"]')?.content || null,
    };
  }, STYLE_PROPS);
}

async function findSections(page) {
  return page.evaluate(() => {
    const selectors = [
      '[data-section-id]',
      '.page-section',
      '.full-bleed-section',
      '.section-background',
      '.content-wrapper',
    ];
    const all = [];
    for (const sel of selectors) {
      all.push(...document.querySelectorAll(sel));
    }
    // Deduplicate by data-section-id or by element.
    const seen = new Set();
    const unique = [];
    for (const el of all) {
      const key = el.getAttribute('data-section-id') || el.outerHTML.slice(0, 120);
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push(el);
    }
    return unique.map((el) => ({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      dataSectionId: el.getAttribute('data-section-id') || null,
      classes: el.className,
    }));
  });
}

async function extractPage(browser, pageUrl, viewport) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  });
  const page = await context.newPage();

  await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  const tokens = await extractGlobalTokens(page);
  const sectionInfos = await findSections(page);

  const sections = [];
  for (let i = 0; i < sectionInfos.length; i++) {
    const info = sectionInfos[i];
    const sel = info.dataSectionId
      ? `[data-section-id="${info.dataSectionId}"]`
      : `.${info.classes.split(' ').filter(Boolean).join('.')}`;
    const el = await page.$(sel).catch(() => null);
    if (!el) continue;
    const data = await extractSectionData(page, el);
    data.index = i;
    sections.push(data);
  }

  const screenshotName = `${slugify(pageUrl)}-${viewport.name}.png`;
  const screenshotPath = path.join(SCREENSHOT_DIR, screenshotName);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  await context.close();

  return {
    url: pageUrl,
    viewport: { name: viewport.name, width: viewport.width, height: viewport.height },
    tokens,
    sections,
    screenshotPath,
  };
}

async function writeTopologyMarkdown(pageSlug, desktopData, mobileData) {
  const lines = [];
  lines.push(`# Page Topology: ${desktopData.url}`);
  lines.push('');
  lines.push(`## Viewports`);
  lines.push(`- Desktop: ${desktopData.screenshotPath}`);
  lines.push(`- Mobile: ${mobileData.screenshotPath}`);
  lines.push('');
  lines.push('## Global Design Tokens');
  lines.push('');
  lines.push('### Body');
  lines.push('```json');
  lines.push(JSON.stringify(desktopData.tokens.body, null, 2));
  lines.push('```');
  lines.push('');
  lines.push('### Header');
  lines.push('```json');
  lines.push(JSON.stringify(desktopData.tokens.header, null, 2));
  lines.push('```');
  lines.push('');
  lines.push('### Footer');
  lines.push('```json');
  lines.push(JSON.stringify(desktopData.tokens.footer, null, 2));
  lines.push('```');
  lines.push('');
  lines.push('### Headings / Body / Link / Button');
  lines.push('```json');
  lines.push(JSON.stringify({
    h1: desktopData.tokens.h1,
    h2: desktopData.tokens.h2,
    p: desktopData.tokens.p,
    link: desktopData.tokens.link,
    button: desktopData.tokens.button,
  }, null, 2));
  lines.push('```');
  lines.push('');
  lines.push('## Navigation');
  lines.push('');
  for (const link of desktopData.tokens.navLinks) {
    lines.push(`- [${link.text || 'link'}](${link.href})`);
  }
  lines.push('');
  lines.push('## Sections');
  lines.push('');
  for (const section of desktopData.sections) {
    lines.push(`### Section ${section.index}: ${section.dataSectionId || section.classes.slice(0, 60)}`);
    lines.push(`- **Classes:** ${section.classes || 'none'}`);
    lines.push(`- **Bounding box:** ${JSON.stringify(section.rect)}`);
    lines.push(`- **Headings:** ${section.headings.map((h) => `${h.tag}: ${h.text}`).join(' | ') || 'none'}`);
    lines.push(`- **Images:** ${section.images.length}`);
    lines.push(`- **Buttons:** ${section.buttons.map((b) => b.text).join(', ') || 'none'}`);
    lines.push('');
  }

  await fs.writeFile(path.join(OUT_DIR, `${pageSlug}-topology.md`), lines.join('\n'));
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(SCREENSHOT_DIR, { recursive: true });

  const manifest = JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf8'));
  const pageUrls = manifest.pages;

  const browser = await chromium.launch({ headless: true });

  for (let i = 0; i < pageUrls.length; i++) {
    const pageUrl = pageUrls[i];
    const pageSlug = slugify(pageUrl);
    console.log(`[${i + 1}/${pageUrls.length}] Reconnaissance for ${pageUrl} ...`);

    const results = {};
    for (const viewport of VIEWPORTS) {
      console.log(`  - ${viewport.name} viewport ...`);
      results[viewport.name] = await extractPage(browser, pageUrl, viewport);
    }

    const combined = {
      url: pageUrl,
      slug: pageSlug,
      desktop: results.desktop,
      mobile: results.mobile,
    };

    await fs.writeFile(
      path.join(OUT_DIR, `${pageSlug}-recon.json`),
      JSON.stringify(combined, null, 2)
    );
    await writeTopologyMarkdown(pageSlug, results.desktop, results.mobile);
    console.log(`  - Saved ${pageSlug}-recon.json and ${pageSlug}-topology.md`);
  }

  await browser.close();
  console.log('\nReconnaissance complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
