import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  
  // Find all images near bottom CTA
  const images = await page.$$eval('img', imgs => imgs.map(img => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
    parentText: img.parentElement?.textContent?.slice(0, 100),
  })));
  
  // Filter images that might be in CTA section
  const ctaImages = images.filter(img => 
    img.src.includes('squarespace') && 
    (img.alt?.toLowerCase().includes('home') || img.alt?.toLowerCase().includes('project') || img.src?.toLowerCase().includes('chatgpt'))
  );
  
  console.log('All images count:', images.length);
  console.log('ChatGPT/CTA images:');
  ctaImages.forEach(img => console.log(img));
  
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
