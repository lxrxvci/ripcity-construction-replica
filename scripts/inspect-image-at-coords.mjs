import { chromium } from "playwright";
import fs from "fs";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
  
  // Click or inspect element at coordinates where the living room image is
  // Based on screenshot: image is around x=1000, y=3600 (in full page)
  // But viewport is 900 height, so scroll to that area
  const targetY = 3500;
  await page.evaluate((y) => window.scrollTo(0, y), targetY);
  await page.waitForTimeout(1000);
  
  // Get element at center of image area (x=1050, y=400 relative to viewport after scroll)
  const element = await page.evaluate(() => {
    const rect = document.elementFromPoint(1150, 350);
    if (!rect) return null;
    // Try to find the image inside the fluid image container
    let container = rect;
    for (let i = 0; i < 5 && container; i++) {
      if (container.querySelector('img')) {
        break;
      }
      container = container.parentElement;
    }
    const img = container?.querySelector('img') || rect.closest('img') || rect.querySelector('img') || (rect.tagName === 'IMG' ? rect : null);
    if (img) {
      return {
        tag: img.tagName,
        src: img.src,
        dataSrc: img.getAttribute('data-src'),
        dataImage: img.getAttribute('data-image'),
        alt: img.alt,
        className: img.className,
        parentHTML: img.parentElement?.outerHTML?.slice(0, 500),
      };
    }
    return {
      tag: rect.tagName,
      className: rect.className,
      html: rect.outerHTML?.slice(0, 500),
      computedBg: window.getComputedStyle(rect).backgroundImage,
      parentTag: rect.parentElement?.tagName,
      parentClass: rect.parentElement?.className,
      parentHTML: rect.parentElement?.outerHTML?.slice(0, 500),
    };
  });
  
  console.log(JSON.stringify(element, null, 2));
  
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
