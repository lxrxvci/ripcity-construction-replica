#!/usr/bin/env node
/**
 * Doc-standard gate: every code file carries the standard header, and
 * docs/CODE_GUIDE.md names every route and every collection.
 *
 * Why it exists: the self-documentation standard (AGENTS.md, doc-standard
 * block) is only real if it is enforced. This is the gate, wired into
 * `npm run check` as `check:docs`.
 * How it works: scans src/** /*.{ts,tsx} and scripts/*.mjs (skipping the
 * EXEMPT managed files), requires the first token after any shebang to be a
 * `/**` docblock containing "Why it exists:", "How it works:", and "How to
 * change it:", then verifies docs/CODE_GUIDE.md exists and names every route
 * (src/app/** /page.tsx) and every src/content/*.json file. Exits 1 with a
 * per-file failure list when anything is missing.
 * How to change it: adding a route or collection means updating
 * docs/CODE_GUIDE.md in the same change - the gate fails otherwise. Never
 * add to EXEMPT except managed vendored artifacts (preview-bridge.ts),
 * whose documentation lives in layout.tsx and the guide by design.
 */

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const GUIDE_REL = path.join('docs', 'CODE_GUIDE.md');

// Managed vendored artifacts stay byte-identical to their canonical source
// and never carry a local header. src/lib/preview-bridge.ts: canonical source
// is the client-porting skill (references/bridge-v4.js); it already carries a
// vendored-artifact note, and its documentation lives in src/app/layout.tsx
// and docs/CODE_GUIDE.md by design.
const EXEMPT = new Set(['src/lib/preview-bridge.ts']);

const HEADER_SCANS = [
  { dir: 'src', exts: ['.ts', '.tsx'] },
  { dir: 'scripts', exts: ['.mjs'] },
];

const REQUIRED_LABELS = ['Why it exists:', 'How it works:', 'How to change it:'];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function headerProblem(rel) {
  const text = readFileSync(path.join(ROOT, rel), 'utf8');
  const body = text.startsWith('#!') ? text.slice(text.indexOf('\n') + 1) : text;
  const trimmed = body.replace(/^\s+/, '');
  if (!trimmed.startsWith('/**')) {
    return 'missing header docblock (first token must be /**)';
  }
  const end = trimmed.indexOf('*/');
  const block = end === -1 ? trimmed : trimmed.slice(0, end);
  const missing = REQUIRED_LABELS.filter((label) => !block.includes(label));
  if (missing.length) return `incomplete header - missing: ${missing.join(', ')}`;
  return null;
}

function listRoutes() {
  const appDir = path.join(ROOT, 'src', 'app');
  if (!existsSync(appDir)) return [];
  return walk(appDir)
    .filter((f) => /[/\\]page\.tsx?$/.test(f))
    .map((f) => {
      const relDir = path.relative(appDir, path.dirname(f)).split(path.sep).join('/');
      return relDir ? `/${relDir}` : '/';
    })
    .sort();
}

function listCollections() {
  const contentDir = path.join(ROOT, 'src', 'content');
  if (!existsSync(contentDir)) return [];
  return readdirSync(contentDir)
    .filter((f) => f.endsWith('.json'))
    .sort();
}

const failures = [];

// --- Gate 1: headers ---
let headerCount = 0;
for (const { dir, exts } of HEADER_SCANS) {
  const abs = path.join(ROOT, dir);
  if (!existsSync(abs)) continue;
  for (const full of walk(abs)) {
    const rel = path.relative(ROOT, full).split(path.sep).join('/');
    if (EXEMPT.has(rel)) continue;
    if (!exts.includes(path.extname(full))) continue;
    headerCount++;
    const problem = headerProblem(rel);
    if (problem) failures.push(`${rel}: ${problem}`);
  }
}

// --- Gate 2: the guide exists and names every route + collection ---
const routes = listRoutes();
const collections = listCollections();
const guidePath = path.join(ROOT, GUIDE_REL);
if (!existsSync(guidePath)) {
  failures.push(`${GUIDE_REL}: missing (required - the site map)`);
} else {
  const guide = readFileSync(guidePath, 'utf8');
  for (const route of routes) {
    if (!guide.includes(`\`${route}\``)) {
      failures.push(`${GUIDE_REL}: does not name route \`${route}\``);
    }
  }
  for (const file of collections) {
    if (!guide.includes(file)) {
      failures.push(`${GUIDE_REL}: does not name collection file ${file}`);
    }
  }
}

if (failures.length) {
  console.error('check-docs FAILED:');
  for (const f of failures) console.error(`  - ${f}`);
  console.error('\nStandard: AGENTS.md, doc-standard block. Fix and re-run.');
  process.exit(1);
}

console.log(
  `check-docs OK: ${headerCount} headers verified (${EXEMPT.size} managed exempt), ` +
    `${GUIDE_REL} names ${routes.length} route(s) + ${collections.length} collection(s).`
);
