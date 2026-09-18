/**
 * One-off inspector: full image inventory of the original homepage, saved to qa/original-images.json.
 *
 * Why it exists: the complete image audit (post-scroll, so lazy-loaded
 * images are included) used to plan downloads.
 * How it works: Playwright at 1440x900 scrolls to the bottom, collects
 * every image, writes qa/original-images.json.
 * How to change it: throwaway research tooling kept for reference; not
 * part of the build.
 */
import { chromium } from "playwright";
import fs from "fs";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);
  
  // Scroll to bottom to trigger lazy loading
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
  
  // Get all images including srcset and data-src
  const images = await page.$$eval('img', imgs => imgs.map(img => ({
    src: img.src,
    srcset: img.srcset,
    dataSrc: img.getAttribute('data-src'),
    dataImage: img.getAttribute('data-image'),
    alt: img.alt,
    width: img.width,
    height: img.height,
    className: img.className,
  })));
  
  fs.writeFileSync('qa/original-images.json', JSON.stringify(images, null, 2));
  console.log('saved qa/original-images.json');
  console.log('Total images:', images.length);
  
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
