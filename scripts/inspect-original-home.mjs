/**
 * One-off inspector: counts homepage images and lists the ChatGPT/CTA images on the original site.
 *
 * Why it exists: separated generated/CTA graphics from photos during the
 * clone's image audit.
 * How it works: Playwright loads the original homepage and prints image
 * counts plus the filtered CTA image list.
 * How to change it: throwaway research tooling kept for reference; not
 * part of the build.
 */
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
