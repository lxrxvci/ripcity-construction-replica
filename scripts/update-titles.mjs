import fs from "fs";
import path from "path";

const ROOT = "src/app";

/** @type {Record<string, string>} */
const titles = {
  "about": "Portland Remodeling Contractor | Kitchens, ADUs & Additions | Rip City Construction",
  "contact": "Contact Portland Remodeling Contractor | Rip City Construction",
  "services": "Remodeling Services in Portland, OR | Rip City Construction",
  "portland-remodeling-projects": "Portland Remodeling Projects | Rip City Construction",
  "new-build": "ADU Builder Portland OR, Home Additions Contractor",
  "basements": "Basement Finishing & Remodeling Portland | Rip City Const.",
  "bathrooms-tile": "Bathroom Remodeling & Tile Portland | Rip City Const.",
  "kitchen-remodeling-portland": "Kitchen Remodeling Portland, OR | Rip City Construction",
  "adu-home-additions-portland": "ADU Builder & Home Additions Portland | Rip City Const.",
  "project-photoshop": "Commercial Remodeling Portland | Rip City Construction",
  "se-portland-kitchen-home-renovation": "SE Portland Kitchen Remodel & Home Renovation | Rip City Construction",
  "sw-78th-detached-adu-portland": "SW 76th Detached ADU Construction | Portland ADU Builder",
  "nixon-adu": "Nixon ADU | Transform Your Space Today – Get Started Now",
  "clay-basement-remodel-portland": "Portland Basement Remodel | Finished Basement Renovation & Living Space Addition",
  "southeast-hawthorne-addition": "Southeast Portland Home Addition & Whole Home Remodel | Rip City Construction",
  "projects/ne-36th-primary-suite-bathroom-remodel": "NE 36th Primary Suite & Bathroom Remodel | Rip City Construction & Remodeling",
};

for (const [dir, title] of Object.entries(titles)) {
  const filePath = path.join(ROOT, dir, "page.tsx");
  if (!fs.existsSync(filePath)) {
    console.log(`missing: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, "utf-8");
  if (content.includes("export const metadata: Metadata = {")) {
    // replace existing title line
    content = content.replace(/title:\s*"[^"]+",?\n/, `title: "${title}",\n`);
  } else {
    // add metadata import and export before default export
    const importLine = 'import type { Metadata } from "next";';
    if (!content.includes(importLine)) {
      content = importLine + "\n" + content;
    }
    content = content.replace(
      /export default function/,
      `export const metadata: Metadata = {\n  title: "${title}",\n};\n\nexport default function`
    );
  }
  fs.writeFileSync(filePath, content);
  console.log(`updated: ${filePath}`);
}
