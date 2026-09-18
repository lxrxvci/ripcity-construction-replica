/**
 * One-off inspector: lists CSS background-image URLs on the original homepage.
 *
 * Why it exists: Squarespace heroes are often CSS backgrounds, which
 * <img>-only inventories miss.
 * How it works: Playwright loads the original homepage and prints
 * computed background-image URLs as JSON.
 * How to change it: throwaway research tooling kept for reference; not
 * part of the build.
 */
import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  
  // Extract all background-image URLs from elements
  const bgUrls = await page.$$eval('*', els => {
    const urls = [];
    for (const el of els) {
      const style = window.getComputedStyle(el);
      const bg = style.backgroundImage;
      if (bg && bg !== 'none' && bg.includes('squarespace-cdn.com')) {
        urls.push({
          tag: el.tagName,
          className: el.className,
          bg,
          text: el.textContent?.trim().slice(0, 100),
        });
      }
    }
    return urls;
  });
  
  console.log(JSON.stringify(bgUrls, null, 2));
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
