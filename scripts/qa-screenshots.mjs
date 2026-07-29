import { chromium } from "playwright";
import fs from "fs";

const STAGING = "https://ripcity-construction-replica-ohlgq9x02-lxrxvcis-projects.vercel.app";
const OUT = "qa/screenshots";

const pages = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
  { path: "/services", name: "services" },
  { path: "/portland-remodeling-projects", name: "projects" },
  { path: "/new-build", name: "new-build" },
  { path: "/adu-home-additions-portland", name: "adu" },
  { path: "/projects/ne-36th-primary-suite-bathroom-remodel", name: "ne-36th-bathroom" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const page of pages) {
    for (const vp of viewports) {
      const context = await browser.newContext({ viewport: vp });
      const p = await context.newPage();
      const url = `${STAGING}${page.path}`;
      await p.goto(url, { waitUntil: "networkidle" });
      await p.waitForTimeout(1000);
      const file = `${OUT}/${page.name}-${vp.name}.png`;
      await p.screenshot({ path: file, fullPage: true });
      console.log(`screenshot: ${file}`);
      await context.close();
    }
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
