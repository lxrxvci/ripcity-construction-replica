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
