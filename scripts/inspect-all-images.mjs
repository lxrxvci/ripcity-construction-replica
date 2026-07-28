import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ripcityconstruction.com/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  
  // Get all images with their nearest heading text
  const images = await page.$$eval('img', imgs => imgs.map(img => {
    // find nearest h1, h2, h3, h4, or section heading ancestor text
    let el = img.parentElement;
    let heading = '';
    for (let i = 0; i < 6 && el; i++) {
      const h = el.querySelector('h1, h2, h3, h4, h5, h6, p');
      if (h && h.textContent) {
        heading = h.textContent.trim().slice(0, 120);
        break;
      }
      el = el.parentElement;
    }
    return {
      src: img.src,
      alt: img.alt,
      width: img.width,
      height: img.height,
      heading,
    };
  }));
  
  console.log(JSON.stringify(images, null, 2));
  
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
