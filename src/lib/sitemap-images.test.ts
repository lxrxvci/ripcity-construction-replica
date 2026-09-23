/**
 * Tests for the inline image lists in lib/sitemap-images.ts.
 *
 * Why it exists: sitemap image entries that 404 waste the Google Images
 * fix; the inline gallery lists are literals (no collection to derive
 * from), so this pins them to files that actually exist in public/.
 * How it works: reads lib/sitemap-images.ts as text, extracts every
 * "/images/..." literal, and asserts the file exists under public/.
 * Run with `node --test src/lib/sitemap-images.test.ts` (type
 * stripping, no dependencies).
 * How to change it: extend alongside lib/sitemap-images.ts if it gains
 * new literal lists; derived (JSON/captions) routes need no test here.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

function inlineImagePaths(): string[] {
  const source = readFileSync(path.join(ROOT, "src/lib/sitemap-images.ts"), "utf8");
  return [...source.matchAll(/"\/(images\/[^"]+)"/g)].map((match) => match[1]);
}

describe("sitemap-images inline lists", () => {
  it("only references images that exist in public/", () => {
    const paths = inlineImagePaths();
    assert.ok(paths.length > 0, "expected inline image paths in sitemap-images.ts");
    const missing = paths.filter((p) => !existsSync(path.join(ROOT, "public", p)));
    assert.deepEqual(missing, []);
  });
});
