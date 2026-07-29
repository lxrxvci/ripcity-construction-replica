# Website Rebuild SEO Comparison
## Rip City Construction — New Next.js/Vercel Site vs. Old Squarespace Site

**Prepared:** July 28, 2026
**Old site:** https://www.ripcityconstruction.com (Squarespace)
**New site:** Next.js 16, statically prerendered, hosted on Vercel (currently previewing at a vercel.app URL; assumes the www.ripcityconstruction.com domain is pointed at it)

All figures below were measured live on both sites on the preparation date — not estimated. Methodology notes are at the end.

---

## Executive Summary

The old Squarespace site had a serious structural problem: **every page was mostly the same page.** The same reviews block, services grid, projects carousel, about blurb, and CTA banners were repeated on all five main pages — up to **94% of a page's text appeared verbatim on other pages.** On top of that, the homepage had two H1 headings, the contact page had none, and the auto-generated business schema listed the **wrong ZIP code** (97222 — Milwaukie — instead of 97215).

The new site fixes all of it: each page has one job and mostly unique content, exactly one descriptive H1, complete and corrected structured data on every page, a real sitemap and robots.txt, and dramatically lighter, faster pages — all on infrastructure (Vercel's edge network) that Squarespace's shared hosting can't match. Because **every URL path was preserved exactly**, existing rankings and backlinks carry over with zero redirect losses when the domain transfers.

---

## 1. Duplicate Content — the Biggest Win

Google does not issue a "duplicate content penalty," but near-duplicate pages cannibalize each other: Google clusters them, picks one to rank, filters the rest, and splits ranking signals between them. The old site was effectively competing with itself on every page.

Measured verbatim text reuse per page (share of a page's 8-word passages that also appear on at least one other main page; identical measurement method on both sites):

| Page | Old (Squarespace) | New (Vercel) | Change |
|---|---|---|---|
| Home | 93% | 6% | **−87 pts** |
| Services | 81% | 14% | **−67 pts** |
| About | 73% | 26% | **−47 pts** |
| Contact | 94% | 36% | **−58 pts** |
| Projects | 41% | 5% | **−36 pts** |

Residual overlap on the new site is intentional sitewide furniture every website has — the navigation, footer NAP block, and one conversion banner — not duplicated body content.

What was actually done:

- **One canonical home per content block.** Client reviews and the company blurb appear only on the homepage; the detailed services showcase only on `/services`; the project showcase only on `/portland-remodeling-projects` (which ends with a compact services overview band for cross-navigation). Everywhere else the repeated blocks were deleted, not hidden.
- **`/contact` is now a pure conversion page** (form + contact details) — previously 94% boilerplate.
- **Four service pages had no H1 heading at all** (bathrooms, basements, new-build, commercial). Each now has a unique, keyword-relevant H1 and hand-written introductory copy.
- The identical "What Homeowners Are Saying" block — repeated on **13+ pages** of the old site with the same three testimonials — now appears once.
- 52 duplicate page-section components were removed from the codebase, so this can't silently regress.

## 2. Structured Data (Schema)

| Schema feature | Old (Squarespace) | New (Vercel) |
|---|---|---|
| Organization / LocalBusiness | ✅ auto-generated | ✅ corrected & expanded |
| Business address | ⚠️ **Wrong ZIP (97222)** | ✅ Correct (97215) |
| Geo coordinates | ❌ | ✅ |
| Opening hours | ❌ | ✅ (Mon–Fri 8–5) |
| Oregon CCB license # | ❌ | ✅ (#197600, as schema identifier) |
| Area served (city list) | ❌ | ✅ (Portland, SE/NE Portland, Beaverton, Lake Oswego, Tigard, Milwaukie) |
| Social profiles (`sameAs`) | ❌ | ✅ (Facebook, Instagram, Houzz, Yelp, BuildZoom, Nextdoor) |
| Service schema (per service page) | ❌ | ✅ (6 services) |
| OfferCatalog (services list) | ❌ | ✅ |
| BreadcrumbList | ❌ | ✅ (all 17 pages) |
| Per-page WebPage schema | ❌ | ✅ |
| ContactPage / AboutPage types | ❌ | ✅ |
| `og:url` protocol | ⚠️ `http://` | ✅ `https://` |
| OG share image | Squarespace default | ✅ Purpose-built 1200×630 image |
| Invalid markup | ⚠️ SearchAction pointing to a nonexistent search page | ✅ Removed |

Squarespace auto-generates only a basic schema set and gives you no real control over it — the wrong ZIP in the old site's business schema was Squarespace data the owner couldn't easily fix or extend. The new schema graph is hand-built, valid, and consistent across all 17 pages.

**Why it matters:** schema doesn't directly boost rankings, but it makes the site eligible for rich results (breadcrumbs in search listings, enhanced business knowledge panel signals) and gives Google unambiguous, correct NAP data — which directly supports local-pack relevance.

## 3. On-Page SEO Fundamentals

| Check | Old | New |
|---|---|---|
| H1 per page | ⚠️ Home: **two** H1s · Contact: **zero** | ✅ Exactly one, unique, on all 17 pages |
| Unique title tags | ✅ (already good) | ✅ Preserved + fixed a "SW 76th"/"SW 78th" title/URL mismatch |
| Unique meta descriptions | ✅ | ✅ Preserved |
| Self-referencing canonicals | ✅ (http) | ✅ (https) |
| robots.txt | Squarespace-managed, not customizable | ✅ Full control, environment-aware |
| XML sitemap | Squarespace auto (no priorities control) | ✅ Hand-built with per-page priorities & change frequencies |
| Internal linking | Boilerplate grids repeated everywhere | ✅ Contextual links from unique copy into each service page |
| Indexation control | Limited | ✅ Preview/staging deploys are automatically noindexed; only production is indexable |

## 4. Performance & Hosting: Vercel vs. Squarespace

Measured on the homepage (single sample, indicative — full Lighthouse audit recommended after go-live):

| Metric | Old (Squarespace) | New (Vercel) |
|---|---|---|
| HTML document weight | 482 KB | 87 KB (**5.5× lighter**) |
| Script tags on homepage | 57 | 32 |
| Time to first byte | ~262 ms | ~112 ms (**2.3× faster**) |
| Full HTML delivery | ~642 ms | ~134 ms (**4.8× faster**) |
| Rendering | Server-rendered per request on shared Squarespace infra | **Statically prerendered**, served from Vercel's global edge CDN |
| Image optimization | Manual, template-dependent | `next/image` automatic sizing/format/lazy-loading |

Why this matters for a contractor: most leads arrive on phones, often on cellular. Page speed is a confirmed (if modest) ranking factor via Core Web Vitals, and faster pages convert measurably better — every second of load time costs real quote requests.

Squarespace restrictions the new stack eliminates:

- No control over robots.txt, sitemap generation, or per-page advanced schema (code-injection only, fragile)
- Template JavaScript bloat you cannot remove
- Limited control over canonicals, redirects, and HTTP headers
- Platform lock-in: you can't take the site with you

The Vercel/Next.js site is fully owned code in a GitHub repo — any developer can work on it, every change is versioned, and it can be hosted anywhere.

## 5. Content & UX Quality

- **Visual bug on the old design carried into the first rebuild** — a breadcrumb bar overlapping the header — fixed; the header now matches the intended design on desktop and mobile.
- **Project galleries rebuilt into uniform, symmetrical grids** (the old/migrated layouts had ragged masonry and mismatched image sizes).
- Every page now ends with exactly one clear call-to-action instead of up to three stacked CTA banners competing with each other.
- Contact page loads instantly and presents the form immediately — nothing between a motivated homeowner and the quote request.

## 6. Expected Visibility & Traffic Impact

Honest framing first: **no one can promise a specific traffic number**, and anyone who does is guessing. What can be stated confidently is what changes mechanically when the domain is pointed at the new site:

**What carries over (no loss):**
- Identical URL paths for every page → existing Google rankings, backlinks, Google Business Profile website link, and citation links all keep working with **zero redirects needed**
- Domain authority and history stay with the domain

**What improves:**
- **De-cannibalization.** Instead of five near-identical pages splitting signals for "Portland remodeling" terms, each page now has a distinct target: home → brand + "Portland remodeling," `/services` → service terms, each service page → its own "kitchen remodeling Portland" / "ADU builder Portland" query family. This is the single biggest ranking unlock.
- **New ranking surface area.** Four service pages that had no H1 and almost no unique text are now real, indexable landing pages with unique copy — they simply could not rank competitively before.
- **Better click-through rates** from corrected/expanded business data, breadcrumb display in results, and proper social-share cards when links are texted or posted (a real channel for contractors — homeowners forward links constantly).
- **Local SEO support.** Corrected ZIP, geo coordinates, area-served list, and consistent NAP across schema and footer strengthen the website-side signals that reinforce Google Business Profile rankings.
- **Crawl efficiency.** 5.5× lighter pages, a curated sitemap, and no boilerplate farms mean Googlebot spends its attention on content that matters.

**Realistic outlook:** for a local trade business with this profile, fixing duplication/cannibalization plus unique service landing pages typically produces **visible ranking movement within 4–12 weeks** of recrawl, with the service pages ("ADU builder Portland," "basement finishing Portland," etc.) the most likely early winners. The honest range of outcomes depends on factors outside the website: review velocity, Google Business Profile activity, and local competition. The website is no longer the bottleneck — before, it was.

**Recommended follow-ups (off-site, biggest levers left):**
1. Point the domain at Vercel, then resubmit `https://www.ripcityconstruction.com/sitemap.xml` in Google Search Console and use "Request Indexing" on the five main pages.
2. Collect more Google reviews — only three testimonials exist, which is why they now appear once. Fresh reviews are the strongest local ranking lever available.
3. Keep Google Business Profile categories/services aligned with the new service pages.

---

## Methodology Notes

- Duplicate-content figures: verbatim 8-word shingle overlap between each page and all other main pages, measured on rendered HTML of both sites on July 28, 2026, using the identical extraction method on both. Residual overlap on the new site is sitewide furniture (nav, footer, CTA banner).
- Schema inventory: extracted from live page source of both sites (old: 4 auto-generated Squarespace JSON-LD blocks; new: hand-built JSON-LD graph per page).
- Weight/speed: live `curl` measurements of HTML document size and timing; script-tag counts from page source. Single samples — run Lighthouse/PageSpeed Insights after go-live for Core Web Vitals.
- Heading counts: rendered DOM inspection of all 17 new pages and the 5 main old pages.
