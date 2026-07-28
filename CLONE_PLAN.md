# Rip City Construction — Website Clone Plan

**Project goal:** Produce an exact visual and functional replica of the Squarespace site `https://www.ripcityconstruction.com`, including the full sitemap and all media, using the `ai-website-cloner-template` as the foundation, and deploy it on Vercel.

**Status:** Research & planning complete. No code has been written yet.

---

## 1. Research Findings

### 1.1 Template Repository (`lxrxvci/ai-website-cloner-template`)

- **Base:** Next.js 16.2.1 (App Router, React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui).
- **Branch:** `master`.
- **License:** MIT.
- **Clone mechanism:** The repository is a *scaffold*, not a one-click script. The actual clone is executed by an AI agent through the `/clone-website <url>` skill defined in `.claude/skills/clone-website/SKILL.md`.
- **Pipeline:** Reconnaissance → Foundation Build → Component Specs → Parallel Builder Agents → Page Assembly → Visual QA Diff.
- **Prerequisites:** Node.js 24+ and a browser automation tool (the skill expects a *browser MCP* such as Chrome MCP, Playwright MCP, or Browserbase MCP). **No native `npm run clone` script exists.**
- **Asset paths:** `public/images/`, `public/videos/`, `public/seo/`.
- **Build commands:** `npm run build`, `npm run check`, `npm run typecheck`.

### 1.2 Target Website (`www.ripcityconstruction.com`)

- **Platform:** Squarespace, template/theme identifier `cameron-taylor-tmzg`, using Fluid Engine sections (`page-section full-bleed-section`).
- **Sitemap:** Single `urlset` with **17 URLs**.
- **Pages:**
  - Home (`/` and `/home`)
  - About
  - Services
  - Contact
  - New Build
  - Basements
  - Bathrooms & Tile
  - Project Photoshop
  - Portland Remodeling Projects
  - SE Portland Kitchen Home Renovation
  - Southeast Hawthorne Addition
  - Clay Basement Remodel Portland
  - NE 36th Primary Suite Bathroom Remodel
  - SW 78th Detached ADU Portland
  - Kitchen Remodeling Portland
  - ADU Home Additions Portland
  - Nixon ADU
- **Images:** ~266 unique image URLs, primarily on `images.squarespace-cdn.com`; ~239 listed in the sitemap. Estimated **~300 MB** at displayed resolution (`?format=1500w`).
- **Fonts:** 30 Poppins `.woff2` files served from `file.squarespace-cdn.com`.
- **Scripts/CSS:** ~25 external scripts and ~32 inline scripts per page; Squarespace-specific bundles and Fluid Engine CSS from `definitions.sqspcdn.com`.
- **Forms:** One contact form on `/contact` with Name, Email, Subject, Message; currently submits to Squarespace backend. reCAPTCHA referenced.
- **E-commerce:** `/cart` exists but is empty; `/shop`, `/products`, `/store` return 404. No checkout flow to replicate.
- **Redirects:** `http://ripcityconstruction.com` 301s to `http://www.ripcityconstruction.com`; `https://www.ripcityconstruction.com` works; bare `https://ripcityconstruction.com` fails SSL.
- **Canonical:** Declared as `http://www.ripcityconstruction.com` (HTTP, no trailing slash).

### 1.3 Environment Readiness

| Requirement | Status | Notes |
|---|---|---|
| GitHub CLI (`gh`) | ✅ Ready | Logged in as `lxrxvci` with `repo` scope. |
| Vercel CLI (`vercel`) | ✅ Ready | Logged in as `lxrxvci`. |
| Node.js 24+ | ✅ Ready | `v25.9.0` installed. |
| npm | ✅ Ready | `npx` available. |
| Browser MCP (Chrome/Playwright/Browserbase) | ⚠️ **Not available** | No browser MCP tool in this Kimi Code CLI environment. Playwright 1.62.0 is installed but no browser binary is present. |
| `wget` | ❌ Missing | `curl` is available. |

> **Critical gap:** The template's skill requires a browser MCP for reconnaissance, extraction, and visual QA. This environment does not expose one. The implementation must either (a) run the workflow in an agent that supports browser MCP (e.g., Claude Code with `--chrome`), or (b) adapt the reconnaissance phase to local Playwright scripts and manual extraction.

---

## 2. Strategic Decision

**Approach:** Use the template as the project scaffold and follow its five-phase pipeline, but adapt the reconnaissance/QA phase to the available tooling. Because the target is a 17-page, ~300 MB Squarespace Fluid Engine site, the clone will be staged to avoid overload and ensure quality.

**Recommended workflow:**

1. **Create the project repo** from the template via GitHub CLI (`gh repo create --template`).
2. **Bootstrap locally:** clone, install, verify `npm run build`.
3. **Install local browser automation** (`playwright install chromium`) so the reconnaissance/extraction scripts can run without a browser MCP.
4. **Download all assets** (images, fonts, favicons) using a Node.js script before component extraction.
5. **Run reconnaissance** with Playwright: full-page screenshots, design-token extraction, interaction sweep, and section topology for each page.
6. **Write component specs** in `docs/research/components/` per the template's required format.
7. **Dispatch builder agents** (parallel where possible) to reconstruct each section.
8. **Assemble pages** in `src/app/`, preserving the 17 routes from the sitemap.
9. **Replace the Squarespace form** with a working form backend (recommendation: Formspree or Vercel Edge Function + Resend).
10. **Run visual QA** with Playwright screenshots side-by-side.
11. **Deploy to Vercel** with `vercel --prod` and configure the custom domain.

---

## 3. Detailed Implementation Plan

### Phase 0: Project Setup (GitHub CLI)

```bash
# Create the new repository from the template
cd /Users/lxrxcvi/ripcity-replica
gh repo create ripcity-replica \
  --template lxrxvci/ai-website-cloner-template \
  --public \
  --description "Exact replica of ripcityconstruction.com built from ai-website-cloner-template"

# Clone your new repo (not the template itself)
gh repo clone lxrxvci/ripcity-replica ripcity-replica
cd ripcity-replica

# Install dependencies
npm install

# Verify the scaffold builds
npm run build
```

> Per the template README, **never** push the replica back into the template repo. Use the new `lxrxvci/ripcity-replica` repo for all work.

### Phase 1: Browser Automation Setup

Because no browser MCP is present, install a local Chromium for Playwright:

```bash
npx playwright install chromium
```

Verify with a quick smoke test:

```bash
node -e "const { chromium } = require('playwright'); (async () => { const b = await chromium.launch(); const p = await b.newPage(); await p.goto('https://www.ripcityconstruction.com'); console.log(await p.title()); await b.close(); })();"
```

### Phase 2: Asset Discovery & Bulk Download

Create `scripts/download-assets.mjs` (per the template's pattern) that:

1. Parses the sitemap to collect all 17 page URLs.
2. Crawls each page with Playwright and extracts:
   - every `<img>` `src`/`currentSrc` and `alt`,
   - every `background-image` URL,
   - every `<video>` `src`/`poster`,
   - all font files referenced in CSS (`@font-face src`),
   - all favicon/OG/meta image links.
3. Deduplicates URLs and writes a manifest to `docs/research/asset-manifest.json`.
4. Downloads files in **batches of 4** with retry logic to:
   - `public/images/` — preserve original filenames, organized by page or CDN path.
   - `public/fonts/` — self-host Poppins `.woff2` files.
   - `public/seo/` — favicons, apple-touch-icons, OG images, webmanifest.
5. Rewrites URLs to local paths during component build.

Estimated storage: **~300–320 MB** of images, **< 5 MB** fonts/CSS/JS.

### Phase 3: Reconnaissance (per page)

For each of the 17 URLs, run a Playwright-driven extraction script that produces:

- `docs/design-references/<page>-desktop.png` at 1440px.
- `docs/design-references/<page>-mobile.png` at 390px.
- `docs/research/<page>/DESIGN_TOKENS.md` — colors, fonts, spacing, breakpoints.
- `docs/research/<page>/BEHAVIORS.md` — scroll/click/hover/responsive findings.
- `docs/research/<page>/PAGE_TOPOLOGY.md` — ordered list of sections, interaction models, dependencies.
- `docs/research/<page>/computed-styles.json` — per-section computed CSS.

Special attention:
- **Global sections** repeat across pages (same `data-section-id`). Identify them once and reuse components to avoid duplication.
- **Fluid Engine coordinates** — sections use absolute/relative positioning; extract bounding boxes and layout ratios.
- **Image effects** (`image-effect-film-grain`, `image-effect-parallax`, etc.) — decide which are worth reproducing and which can be simplified.

### Phase 4: Foundation Build

Update the scaffold to match the target:

1. `src/app/layout.tsx` — load Poppins via `next/font/google` (or local self-hosted fonts) and set metadata/favicons.
2. `src/app/globals.css` — replace default tokens with extracted colors, spacing, keyframes, and global scroll behavior.
3. `src/types/` — define interfaces for sections, cards, galleries, nav items, form fields.
4. `src/components/icons.tsx` — extract inline SVGs (social icons, logo marks, etc.) as React components.
5. `src/components/ui/` — extend shadcn primitives if needed (Button, Input, Textarea).
6. Verify `npm run build` passes.

### Phase 5: Component Specs & Parallel Build

Break every page into sections. For each section:

1. Write `docs/research/components/<Page>-<Section>.spec.md` using the template's required format (overview, DOM structure, exact computed styles, states/behaviors, assets, verbatim text, responsive behavior).
2. If a spec exceeds ~150 lines, split the section further.
3. Dispatch builder agents to create the corresponding `src/components/...` file.
4. Builders verify `npx tsc --noEmit` before finishing.
5. Merge worktrees and run `npm run build` after each batch.

Suggested batching to manage complexity:

- **Batch A:** Global components (Header, Footer, MobileMenu, shared CTA sections).
- **Batch B:** Home + About + Services + Contact.
- **Batch C:** Gallery pages (New Build, Basements, Bathrooms & Tile, Project Photoshop).
- **Batch D:** Individual project pages (5–6 project detail pages).

### Phase 6: Page Assembly & Routing

Create Next.js App Router routes for all 17 pages:

```
src/app/
  page.tsx              # Home (mirrors /home)
  home/page.tsx         # Alias (or redirect)
  contact/page.tsx
  about/page.tsx
  services/page.tsx
  new-build/page.tsx
  basements/page.tsx
  bathrooms-tile/page.tsx
  project-photoshop/page.tsx
  portland-remodeling-projects/page.tsx
  se-portland-kitchen-home-renovation/page.tsx
  southeast-hawthorne-addition/page.tsx
  clay-basement-remodel-portland/page.tsx
  projects/ne-36th-primary-suite-bathroom-remodel/page.tsx
  sw-78th-detached-adu-portland/page.tsx
  kitchen-remodeling-portland/page.tsx
  adu-home-additions-portland/page.tsx
  nixon-adu/page.tsx
```

Use nested `projects/` route for the NE 36th project to match the original URL structure. Add `next.config.ts` redirects if needed for canonical HTTP/HTTPS handling.

### Phase 7: Form Backend Replacement

The original contact form submits to Squarespace; the clone must use an independent backend.

**Recommended options:**

1. **Formspree** (fastest): `https://formspree.io/f/YOUR_FORM_ID` + reCAPTCHA v2/v3.
2. **Vercel Edge Function + Resend:** send emails to `info@ripcityconstruction.com`. Requires `resend` API key and a verified domain.

Implementation:
- Replace the form `action` in `src/components/ContactForm.tsx`.
- Add success/error states matching the original "Thank you!" message.
- Register new reCAPTCHA keys for the new domain.

### Phase 8: Visual QA

Use Playwright to capture screenshots of the clone and the original at the same viewport widths and compare them. For each discrepancy:

- Re-extract the computed style from the original.
- Update the spec file.
- Fix the component or dispatch a builder agent.

Repeat until the clone is visually indistinguishable at desktop and mobile.

### Phase 9: Vercel Deployment

```bash
# Link the project to Vercel (run once)
vercel

# Set production environment variables if using a form backend
vercel env add RESEND_API_KEY
vercel env add RECAPTCHA_SITE_KEY
vercel env add RECAPTCHA_SECRET_KEY

# Deploy production
vercel --prod
```

Then configure the custom domain in the Vercel dashboard or via CLI:

```bash
vercel domains add ripcityconstruction.com
vercel domains add www.ripcityconstruction.com
```

Because the original canonical is HTTP, the new deployment should enforce HTTPS and redirect `http://` to `https://`, plus redirect non-www to `www` (the opposite of the current Squarespace behavior, which is acceptable for the new host).

---

## 4. GitHub CLI & Vercel CLI Commands Reference

| Task | Command |
|---|---|
| Create repo from template | `gh repo create ripcity-replica --template lxrxvci/ai-website-cloner-template --public` |
| Clone repo | `gh repo clone lxrxvci/ripcity-replica` |
| Create issue for tracking | `gh issue create --title "Clone ripcityconstruction.com" --body "..."` |
| Link to Vercel | `vercel` |
| Add env vars | `vercel env add <NAME>` |
| Deploy production | `vercel --prod` |
| Add domain | `vercel domains add <domain>` |
| Deploy preview | `vercel` |

---

## 5. Risk Register & Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| **No browser MCP in this environment** | High — template skill cannot run as designed. | Install local Chromium via Playwright; or run the `/clone-website` skill in Claude Code with `--chrome` and sync code back to this repo. |
| **~300 MB of images** | High — long download times, large repo, potential Vercel limits. | Download displayed-resolution versions (`?format=1500w` or original if requested); optimize to WebP; keep videos under Vercel's file-size limits. |
| **Squarespace Fluid Engine absolute positioning** | High — complex coordinate-based layouts. | Extract bounding boxes with Playwright; reproduce with Tailwind/CSS Grid/Flexbox; accept minor layout shifts if exact coordinates are impossible. |
| **Global repeating sections** | Medium — duplicate work or inconsistent edits. | Build shared components for header, footer, and recurring CTAs first; reuse on every page. |
| **Image effects (parallax, film grain, liquid)** | Medium — performance/accuracy trade-off. | Reproduce parallax with CSS; simplify or omit heavy canvas effects if they degrade performance. |
| **Contact form backend** | Medium — form will break if not replaced. | Implement Formspree or Vercel + Resend before launch. |
| **Font licensing/subsetting** | Low — Poppins is open-source via Google Fonts. | Use `next/font/google` for Poppins to avoid self-hosting 30 font files. |
| **Squarespace scripts/tracking** | Low — many scripts are platform-specific and can be removed. | Replicate only visible behavior; remove commerce/analytics scripts unless required. |
| **Domain cutover** | High — DNS/SSL changes needed. | Plan cutover with the client; keep original Squarespace site live until Vercel deployment is verified. |

---

## 6. Estimated Timeline

Assuming 1–2 AI builder agents working in parallel and the browser automation gap is resolved:

| Phase | Estimate |
|---|---|
| Setup & Playwright install | 2–4 hours |
| Asset download & optimization | 4–6 hours |
| Reconnaissance (17 pages) | 8–12 hours |
| Foundation build | 4–6 hours |
| Component specs + parallel build | 16–24 hours |
| Page assembly & routing | 6–10 hours |
| Form backend | 2–4 hours |
| Visual QA & fixes | 8–12 hours |
| Vercel deployment & domain cutover | 2–4 hours |
| **Total** | **52–82 hours** (spread across several days) |

The biggest variable is the number of unique Fluid Engine sections and how many builder agents can run in parallel.

---

## 7. Decisions Made

| Decision | Chosen Path | Rationale |
|---|---|---|
| **Browser automation** | **Local Playwright (Option B)** | Keeps the entire workflow inside this toolchain, avoids dependency on a separate Claude Code session, and gives full control over extraction scripts. |
| **Image fidelity** | **Highest publicly available resolution** (`?format=2500w` or `original` if exposed) | Best balance for an "exact replica with all media" while still allowing build-time optimization to WebP/AVIF for delivery. |
| **Form backend** | **Formspree** | Fastest to stand up for staging; no domain verification or custom server required. Can be swapped to Vercel + Resend for production if desired. |
| **Deployment** | **Staging domain first** | Verify the full replica before any DNS cutover; lets the client review pixel-for-pixel before going live. |

## 8. Recommended Next Steps

1. ✅ **Decisions approved** — proceeding with local Playwright, full-resolution assets, Formspree, and staging-first deployment.
2. **Create the repo and begin implementation.**
3. **After staging QA**, plan production cutover with the client.

---

*Prepared for: Rip City Construction website replica project*  
*Template: github.com/lxrxvci/ai-website-cloner-template*  
*Target: www.ripcityconstruction.com*  
*Date: 2026-07-28*
