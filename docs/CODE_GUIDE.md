# Code Guide - Rip City Construction (replica)

The map of this codebase. Read this before touching anything; update it in the same change that adds a route, section, or collection. Enforced by `npm run check:docs` (wired into `npm run check`) - a guide that does not name every route and every collection fails the build.

Next.js App Router replica of ripcityconstruction.com, partially ported to the client portal: the global chrome, homepage, /services, and /portland-remodeling-projects render from stamped content collections; the service/project detail pages replicate the original with inline copy (not portal-stamped).

## Routes

| Route | File | Sections (in render order) |
|---|---|---|
| `/` | `src/app/page.tsx` | HeroSection, RecentProjectsSection, ServicesSection, ReviewsSection (all stamped) |
| `/about` | `src/app/about/page.tsx` | AboutHeroSection (inline copy) |
| `/contact` | `src/app/contact/page.tsx` | ContactFormSection (Formspree, env-gated) |
| `/services` | `src/app/services/page.tsx` | ServicesHeroSection, ServicesFeaturedSection (stamped) |
| `/portland-remodeling-projects` | `src/app/portland-remodeling-projects/page.tsx` | ProjectsHeroSection, ProjectsGridSection, ServicesListSection, ProjectsBottomCtaSection (stamped) |
| `/kitchen-remodeling-portland` | `src/app/kitchen-remodeling-portland/page.tsx` | KitchenRemodelingPortlandHeroSection, KitchenRemodelingPortlandIntroSection, KitchenGallerySection (inline) |
| `/bathrooms-tile` | `src/app/bathrooms-tile/page.tsx` | ServiceIntroSection (props), BathroomsTileGallerySection (inline) |
| `/basements` | `src/app/basements/page.tsx` | ServiceIntroSection (props), BasementsGallerySection (inline) |
| `/adu-home-additions-portland` | `src/app/adu-home-additions-portland/page.tsx` | ADUHeroSection, AduHomeAdditionsPortlandIntroSection, ...SwProjectSection, ...NixonProjectSection, ADUGallerySection, ...BottomCtaSection (inline) |
| `/new-build` | `src/app/new-build/page.tsx` | ServiceIntroSection (props), NewBuildGallerySection (inline) |
| `/project-photoshop` | `src/app/project-photoshop/page.tsx` | ServiceIntroSection (props), ProjectPhotoshopGallerySection (images prop), ProjectPhotoshopBottomCtaSection (inline) |
| `/se-portland-kitchen-home-renovation` | `src/app/se-portland-kitchen-home-renovation/page.tsx` | SEKitchenHeroSection, SEKitchenGallerySection (inline) |
| `/southeast-hawthorne-addition` | `src/app/southeast-hawthorne-addition/page.tsx` | HawthorneHeroSection, HawthorneGallerySection (inline) |
| `/sw-78th-detached-adu-portland` | `src/app/sw-78th-detached-adu-portland/page.tsx` | Sw78thHeroSection, Sw78thGallerySection, Sw78thProjectTextSection (inline) |
| `/nixon-adu` | `src/app/nixon-adu/page.tsx` | NixonHeroSection, NixonGallerySection (inline) |
| `/clay-basement-remodel-portland` | `src/app/clay-basement-remodel-portland/page.tsx` | ClayBasementHeroSection, ClayBasementGallerySection (inline) |
| `/projects/ne-36th-primary-suite-bathroom-remodel` | `src/app/projects/ne-36th-primary-suite-bathroom-remodel/page.tsx` | Ne36thHeroSection, Ne36thGallerySection (inline) |

Supporting files:

| File | Role |
|---|---|
| `src/app/layout.tsx` | Fonts, global metadata (noindex outside production), global JSON-LD, and the MANAGED preview-bridge inject (first child of `<body>`) - see Managed files below |
| `src/app/robots.ts` / `src/app/sitemap.ts` | Crawl gates and the curated sitemap route list |
| `src/components/Header.tsx` / `Footer.tsx` | Global chrome, stamped from header.json / footer.json / sections.json / site.json |
| `src/lib/company.ts` | Business constants (NAP derived from site.json + technical SEO data) |
| `src/lib/seo.ts` | createMetadata + JSON-LD builders per page type |
| `src/lib/preview-bridge.ts` | MANAGED portal bridge - see Managed files below |
| `scripts/` | Clone-pipeline and QA tooling from the original extraction (reconnaissance, download-assets, inspect-*, qa-*) - not part of the build |

## The content chain

Portal-editable content reaches the page through this pipe:

```
src/content/*.json        CMS-editable copy lives here
        |
        v
section/component         imports the JSON, renders from it
        |
        v
data-cms stamp            every portal-editable leaf carries collection.path
        |                 (numeric segments are array indices)
        v
preview bridge            src/lib/preview-bridge.ts, injected by layout.tsx;
        |                 listens for the portal canvas, reports rects,
        |                 patches preview edits
        v
portal CMS / pipeline     registry.ts (SITE_COLLECTIONS + lossless zod) reads
                          and writes the same JSON; the update pipeline ships
                          edits via PR
```

Two consequences:

- **The portal edits what the stamps name.** A rendered leaf without a stamp is invisible to the CMS; a stamp without a registry entry fails verification.
- **The zod schema must match the JSON losslessly.** Zod strips unknown keys on parse and the save path re-serializes - a schema key missing from the registry silently deletes content on the first save. When a JSON gains a field, the registry schema gains it in the same change.

Scope honesty: page-specific hero/gallery/intro sections on the service and project pages are inline JSX replicating the original site - edit them in code. Only the collections below are portal-managed.

## Collections reference

Portal registry: `SITE_COLLECTIONS` in `agenticpnw-website/src/lib/cms/registry.ts`, key **`ripcityconstruction`** (13 collections). Collection ids below are the stamp prefixes.

| File | Collection id | Shape | Fields |
|---|---|---|---|
| `src/content/site.json` | `site` | singleton | name, legalName, telephone, telephoneDisplay, email, streetAddress, addressLocality, addressRegion, postalCode, hoursDisplay (lib/company.ts derives schema constants from this - keep them in sync) |
| `src/content/header.json` | `header` | singleton | logo, logoAlt, navLinks[].{label, href}, socialLinks[] |
| `src/content/footer.json` | `footer` | singleton | cta.{heading, body, ctaLabel, stats[].{value, sub, label}, shieldImage}, rightsReserved |
| `src/content/hero.json` | `hero` | singleton | titleLines[], sub, ctaLabel, ctaHref, image, imageAlt, shieldImage, shieldAlt |
| `src/content/sections.json` | `sections` | singleton (nested) | recentProjects.{eyebrow, support, ctaLabel}, services.{eyebrow, heading, support, learnMoreLabel}, reviews.{eyebrow, heading, support, googleCtaLabel}, about.{eyebrow, heading, paragraphs[], linkLabel, whyHeading, bullets[]} (the about block renders in the Footer on every page) |
| `src/content/projects.json` | `projects` | list | title, location, image, alt, href (homepage recent-projects cards) |
| `src/content/services.json` | `services` | list | title, description, image, href (homepage services grid) |
| `src/content/reviews.json` | `reviews` | list | text, author (typed via lib/testimonials.ts) |
| `src/content/services-page.json` | `services-page` | singleton | hero.{heading, support}, featuredLearnMoreLabel |
| `src/content/services-featured.json` | `services-featured` | list | title, description, image, href |
| `src/content/services-list.json` | `services-list` | list | title, description, icon, href (cross-sell on the projects page) |
| `src/content/projects-page.json` | `projects-page` | singleton | hero.{heading, support, ctaLabel, image}, grid.{eyebrow, heading, support, galleryLinkLabel}, servicesList.{eyebrow, heading, support, learnMoreLabel}, bottomCta.{heading, body, ctaLabel, image} |
| `src/content/projects-gallery.json` | `projects-gallery` | list | title, location, image, imageAlt, href, paragraphs[] (projects index cards) |

Shared keys: `site.*` NAP fields render in the Footer and feed lib/company.ts (schema + metadata) - one edit must stay correct in both directions; `sections.about.*` renders in the Footer sitewide, not just on /about.

## How-to recipes

### Change copy

1. Portal-managed: edit the collection JSON (or use the portal). Find the key by hovering in the portal canvas or grepping the rendered text in `src/content/`.
2. Inline sections (service/project pages): edit the section component or the props at the page call site.
3. Titles/descriptions are code: `PAGE_DESCRIPTIONS` in `src/lib/company.ts` plus each page's `createMetadata` call.

### Replace an image

- Images live in `public/images/` and are referenced as absolute `/images/...` paths straight from the JSON or inline arrays. Drop the new file in `public/images/` and update the reference.
- Portal uploads land under `public/images/cms/` and are stored as `/`-prefixed paths in the JSON - the same form, so no resolver is needed.
- Keep alt text specific and local; it carries the image SEO.

### Add a section

1. Create `src/components/sections/<Name>.tsx` with the standard header docblock, rendering from a content JSON (new or existing) with a `data-cms` stamp on every portal-editable leaf.
2. Wire it into the page in render order.
3. Add its collection row to the inventory above.
4. Portal-side: add the collection to `SITE_COLLECTIONS["ripcityconstruction"]` with a lossless zod schema.

### Add a page

1. Create `src/app/<slug>/page.tsx` (header docblock required) composing sections, with `createMetadata` + the matching `create*Schema` from lib/seo.
2. Add the route to `src/app/sitemap.ts` and to the inventory above - `npm run check:docs` fails until the guide names it.
3. If it is a service page, add SERVICE_PAGES and PAGE_DESCRIPTIONS entries in `src/lib/company.ts`.

### Add a collection

1. Create `src/content/<name>.json`. Shape mirrors the JSX structure: lists stay arrays of objects.
2. Import it in the section, stamp every editable leaf with the `<name>.` prefix.
3. Add the row to the collections inventory above (the gate checks that the guide names the file).
4. Portal-side: registry entry + lossless zod schema in the same breath, or the first CMS save strips the new content.

## Standing rules

- **No inline copy in portal-managed surfaces.** Stamped leaves render from collections. The inline sections on service/project pages are a documented scope boundary - do not expand it without porting to a collection.
- **Stamp every leaf.** Grammar: `collection.path`, numeric segments are array indices (`hero.titleLines.0`, `projects.${i}.title`). Images are stamped on the element rendering them.
- **Pointer-events discipline.** Scrims and decorative layers over stamped backgrounds must not intercept clicks - the bridge selects what the owner clicks.
- **No em dashes in strings you author.** Periods, commas, or `·` separators. Existing client copy replicates the original site and is never altered.
- **NAP flows one way:** site.json -> lib/company.ts -> metadata/JSON-LD/Footer. Never hardcode contact facts elsewhere.
- **The bridge is managed.** See below.

## Managed files

`src/lib/preview-bridge.ts` is vendored **byte-identical** to the canonical source (the `client-porting` skill, `references/bridge-v4.js`, exported as the PREVIEW_BRIDGE string). Do not edit, reformat, env-gate, or domain-gate it; that is why it is the one file in `src/` with no standard header (it carries a vendored-artifact note instead) and why `scripts/check-docs.mjs` exempts it. Its documentation lives here and in the header of `src/app/layout.tsx`. Bridge upgrades are an agency-level decision: vendor the new canonical file, bump the version note in `layout.tsx`, and keep the inject as a raw `<script>` first child of `<body>`.

## File headers

Every file in `src/` and `scripts/` opens with the standard docblock (what / why it exists / how it works / how to change it), per the agency doc-standard block. When you change a file's behavior, its header changes in the same commit; when you add a file, it arrives with a header. `npm run check:docs` is the gate.
