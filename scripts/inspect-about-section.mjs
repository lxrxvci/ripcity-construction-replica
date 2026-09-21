/**
 * One-off inspector: dumps the original homepage's about section markup.
 *
 * Why it exists: answered a specific extraction question (about section
 * structure) during the clone.
 * How it works: Playwright loads the original homepage and prints the
 * section's HTML snippet.
 * How to change it: throwaway research tooling kept for reference; not
 * part of the build.
 */
import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  
  const html = await page.content();
  const idx = html.indexOf('About Rip City Construction');
  if (idx === -1) {
    console.log('About section not found');
    await browser.close();
    return;
  }
  
  const snippet = html.slice(Math.max(0, idx - 500), Math.min(html.length, idx + 3000));
  console.log(snippet);
  
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
