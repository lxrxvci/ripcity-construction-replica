/**
 * One-off: full-page screenshot of the original homepage to qa/original-home-current.png.
 *
 * Why it exists: the visual reference for pixel comparison during the
 * clone.
 * How it works: Playwright at 1440x900 loads the original homepage,
 * scrolls to trigger lazy load, screenshots to qa/.
 * How to change it: research tooling; re-run to refresh the reference
 * screenshot.
 */
import { chromium } from "playwright";
import fs from "fs";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "qa/original-home-current.png", fullPage: true });
  console.log("screenshot: qa/original-home-current.png");
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
