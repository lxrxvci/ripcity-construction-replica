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
