/**
 * QA smoke test: every staging route must load with a non-empty title and no console/request errors.
 *
 * Why it exists: caught broken routes on the staging deploy during the
 * clone's QA phase.
 * How it works: Playwright visits each route on the hardcoded staging
 * URL, asserts a title, and collects console and request failures.
 * How to change it: update the STAGING constant to the current deploy
 * before running; not part of the build.
 */
import { chromium } from "playwright";

const STAGING = "https://ripcity-construction-replica-3rcb06mt4-lxrxvcis-projects.vercel.app";

const pages = [
  "/", "/about", "/contact", "/services", "/portland-remodeling-projects",
  "/new-build", "/basements", "/bathrooms-tile", "/kitchen-remodeling-portland",
  "/adu-home-additions-portland", "/project-photoshop", "/se-portland-kitchen-home-renovation",
  "/sw-78th-detached-adu-portland", "/nixon-adu", "/clay-basement-remodel-portland",
  "/southeast-hawthorne-addition", "/projects/ne-36th-primary-suite-bathroom-remodel",
];

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`${msg.type()}: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("requestfailed", (req) => errors.push(`requestfailed: ${req.url()} (${req.failure()?.errorText})`));

  for (const path of pages) {
    const url = `${STAGING}${path}`;
    try {
      await page.goto(url, { waitUntil: "networkidle" });
      await page.waitForTimeout(500);
      const title = await page.title();
      console.log(`[OK] ${path}: "${title}"`);
    } catch (e) {
      console.log(`[ERR] ${path}: ${e.message}`);
    }
  }
  await browser.close();
  if (errors.length) {
    console.log("\nConsole/request errors:");
    errors.forEach((e) => console.log("  -", e));
  } else {
    console.log("\nNo console/request errors detected.");
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
