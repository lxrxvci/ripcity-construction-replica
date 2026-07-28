import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  
  // Find the section containing the ChatGPT Apr 29 image
  const html = await page.content();
  const idx = html.indexOf('ChatGPT+Image+Apr+29%2C+2026%2C+01_16_18+PM');
  if (idx === -1) {
    console.log('Image not found in HTML');
    await browser.close();
    return;
  }
  
  // Extract surrounding HTML
  const start = Math.max(0, idx - 2000);
  const end = Math.min(html.length, idx + 2000);
  const snippet = html.slice(start, end);
  console.log(snippet);
  
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
