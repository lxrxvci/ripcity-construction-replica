/**
 * Fetches the live <title> of each original-site page for the title audit.
 *
 * Why it exists: update-titles.mjs needed the original titles; this
 * collected them.
 * How it works: Playwright Chromium visits each ripcityconstruction.com
 * path and prints its title.
 * How to change it: research tooling; re-run only to re-audit the
 * original site's titles.
 */
import { chromium } from "playwright";

const pages = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
  { path: "/services", name: "services" },
  { path: "/portland-remodeling-projects", name: "projects" },
  { path: "/new-build", name: "new-build" },
  { path: "/basements", name: "basements" },
  { path: "/bathrooms-tile", name: "bathrooms-tile" },
  { path: "/kitchen-remodeling-portland", name: "kitchen-remodeling-portland" },
  { path: "/adu-home-additions-portland", name: "adu-home-additions-portland" },
  { path: "/project-photoshop", name: "project-photoshop" },
  { path: "/se-portland-kitchen-home-renovation", name: "se-portland-kitchen" },
  { path: "/sw-78th-detached-adu-portland", name: "sw-78th-adu" },
  { path: "/nixon-adu", name: "nixon-adu" },
  { path: "/clay-basement-remodel-portland", name: "clay-basement" },
  { path: "/southeast-hawthorne-addition", name: "hawthorne-addition" },
  { path: "/projects/ne-36th-primary-suite-bathroom-remodel", name: "ne-36th-bathroom" },
];

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const p of pages) {
    try {
      await page.goto(`https://www.ripcityconstruction.com${p.path}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(500);
      const title = await page.title();
      console.log(`${p.name}: ${title}`);
    } catch (e) {
      console.log(`${p.name}: ERROR ${e.message}`);
    }
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
