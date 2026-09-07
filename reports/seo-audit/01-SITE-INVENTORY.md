# Site Inventory — ExpatCopilot

**Phase:** Audit only  
**As of:** 2026-09-06  
**Production:** https://www.expatcopilot.com  
**App:** `apps/expatlife-web`  
**Companion CSV:** [`site-route-inventory.csv`](./site-route-inventory.csv)  
**Methodology:** [`00-AUDIT-METHODOLOGY.md`](./00-AUDIT-METHODOLOGY.md)

---

## 1. Executive inventory snapshot

| Metric | Count (evidence) |
|--------|------------------|
| Production XML sitemap `<loc>` URLs | **452** |
| Inventory CSV rows (code + registries + sitemap + redirects) | **742** |
| Static `app/**/page.tsx` (non-dynamic) | **361** |
| Dynamic App Router page patterns | **22** |
| Permanent redirects in `next.config.js` | **230** rules (~114 normalized alias paths in sitemap exclude list) |
| `COMING_SOON_ROUTES` | **136** |
| `SCHEDULED_GUIDES` | **80** (23 past go-live date; **57** still future as of 2026-09-06) |
| Tools in `registry.json` | **60** (33 `live`, 27 `placeholder`) |
| Origin countries (`ROUTING_ORIGIN_COUNTRY_SLUGS` / index) | **30** (all `enabled` in index.json) |
| City hub datasets | **15** |
| Nav/footer `href`s extracted | **103** |
| CSV rows with live HTTP sample filled | **35** (representative; not exhaustive) |

### Intent distribution (CSV)

| `indexability_intent` | Rows |
|----------------------|------|
| `INDEXABLE` | 452 |
| `STAGED_NOT_LAUNCHED` | 141 |
| `REDIRECT` | 110 |
| `INTENTIONALLY_NOINDEX` | 28 |
| `UNKNOWN` | 10 |
| `UTILITY` | 1 |

`INDEXABLE` rows are aligned 1:1 with production sitemap membership in this build (`in_sitemap=yes`).

---

## 2. Product / architecture overview

ExpatCopilot is a **Netherlands expat information + tools** site. Content is primarily **TypeScript/JSON registries and page models**, not a headless CMS. A thin Contentlayer MDX slice exists under `packages/content` for a few moving guides.

**Brand / SEO origin:** metadata, canonicals, sitemap, and JSON-LD use `https://www.expatcopilot.com` (`lib/site-origin.ts`). Preview `*.vercel.app` hosts get `X-Robots-Tag: noindex, nofollow` in middleware.

**Homepage:** `app/page.tsx` always `redirect()`s to `packages/content` `redirectTarget` = `/netherlands`. Production: **307 → `/netherlands`** (200). `/` remains listed in the XML sitemap with trailing slash.

---

## 3. Route definitions

### 3.1 Top-level / trust / utility

| Pattern | Role |
|---------|------|
| `/` | Redirect entry → NL hub |
| `/netherlands/` | Country hub (effective homepage) |
| `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/cookies/`, `/disclaimer/`, `/editorial-policy/`, `/methodology/`, `/sources/`, `/affiliate-disclosure/`, `/how-this-site-works/`, `/how-we-rank-services/` | Trust / legal |
| `/search/` | Site search — **UTILITY**, noindex, excluded from XML sitemap |
| `/sitemap/` | Human HTML sitemap |
| `/sitemap.xml` | Machine sitemap (`app/sitemap.xml/route.ts`) |
| `/robots.txt` | `app/robots.ts` |
| `/tools/` | Tools hub |
| `/dev/*` | Dev preview; robots Disallow `/dev/` |

### 3.2 Netherlands static tree

Large static App Router tree under `app/netherlands/**` covering living, money, taxes, jobs, housing, health, family, citizenship, integration, leaving, visa, utilities, practical-life, business, culture/life migrations, etc.

### 3.3 Dynamic route patterns (complete)

| Pattern | Purpose |
|---------|---------|
| `netherlands/[...slug]` | Catch-all guides / coming-soon stubs |
| `netherlands/best/[slug]` | Monetization “best” pages |
| `netherlands/culture/[slug]` | Culture cluster (many aliased via redirects) |
| `netherlands/living/[slug]` | Living cluster dynamic |
| `netherlands/services/[slug]` | Service category pages |
| `netherlands/moving/guides/[slug]` | Moving guides |
| `netherlands/moving/moving-to-netherlands-from/[country]` | Origin-country guides |
| `netherlands/moving/tools/[slug]` | Moving tool placeholders / aliases |
| `netherlands/moving/tools/{arrival-planner\|document-readiness\|first-90-days\|moving-checklist}/from/[country]` | Country-scoped tools |
| `netherlands/{money\|housing\|health\|family\|citizenship\|integration\|leaving\|work\|transport}/tools/[slug]` | Category tool placeholders |
| `netherlands/tools/advanced/[slug]` | Advanced / premium-later placeholders |
| `api/checklist-pdf/[slug]` | PDF API |
| `out/[provider]` | Affiliate outbound |

### 3.4 Non-HTML

Multiple `app/api/**/route.ts` handlers (search preview, PDF, tool extract, etc.). Robots disallow `/api/`.

---

## 4. Content / data sources

| Type | Primary source | Route mapping |
|------|----------------|---------------|
| Cornerstone / pillar guides | `src/components/**/*PageModel.ts`, `src/content/**`, static `page.tsx` | `/netherlands/{cluster}/…` |
| Scheduled App Router guides | `src/lib/publishing/scheduledGuides.ts` | Same paths; gated until `publishDate` |
| Moving guides registry | `src/content/guides/netherlands/moving/registry.json` | `/netherlands/moving/guides/[slug]/` |
| Living/culture cluster | `src/content/guides/netherlands/living-culture-cluster.json` | living/culture paths + static pages |
| Tools / calculators | `src/content/tools/registry.json` + `categories.json` | Canonical `tool.route` |
| Origin countries | `src/content/countries/index.json` + builders | `/moving-to-netherlands-from/[country]/` + `/from/[country]/ tools |
| City hubs | `src/data/cities/*` → `netherlandsCityHubPages.ts` | `/netherlands/{city}/` (15 cities) |
| Cities overview / comparisons | `src/data/cities-overview/` | `/netherlands/cities/…` |
| Services | `src/data/services/categories.ts` + company views | `/netherlands/services/[slug]/` (+ some static service pages) |
| Visas | `src/content/visas/` + static visa pages | `/netherlands/visa…`, `/netherlands/moving/…` |
| Best-of / affiliates | monetization data + `/out/[provider]` | `/netherlands/best/[slug]/` |
| MDX (minor) | `packages/content` via Contentlayer | subset of moving guides |
| Legacy sample MDX | `content/posts`, `content/pages` | Not primary publishing path |

**Route readiness registry:** `src/data/site/route-registry.ts`  
- `LIVE_PATHS` (built from `EXTRA_LIVE_PATHS` + cluster/tool/service/visa contributors)  
- `COMING_SOON_ROUTES` (planned; UI “coming soon”, not normal links)  
- `PLACEHOLDER_TOOL_PATHS`  
- `ROUTING_ORIGIN_COUNTRY_SLUGS`, `MOVING_TOOL_FROM_SLUGS`

**Live vs soon vs hidden:** `src/lib/routes/routeStatus.ts` (`getRouteStatus` / `isRouteLive`).

---

## 5. Publishing / staged / unpublished mechanisms

| Mechanism | Behavior when not live |
|-----------|-------------------------|
| `SCHEDULED_GUIDES` + middleware | Production **404**; nav “Coming soon”; omitted from sitemap; metadata `publishGate` → noindex if reached |
| Tool `status: "placeholder"` | 200-capable placeholder UI; **noindex**; nav Soon |
| `COMING_SOON_ROUTES` | Not in `LIVE_PATHS` as launched content; roadmap rows only |
| Country `enabled: false` or pre-publish | Middleware **404** for guide + `/from/{country}` tools |
| Cities hub publish helpers | Hub paths gated similarly |
| `isPubliclyVisible(publish, publishDate)` | UTC start-of-day gate; bypassed in local/preview unless `?preview=true` |
| Preview hosts | `X-Robots-Tag: noindex, nofollow` |
| XML excludes | `/search/`; all `SITEMAP_PERMANENT_REDIRECT_ALIASES` |

**Audit implication:** absence from sitemap, nav suppression, or production 404 on a coded route is often **intentional staging**, not an error. Marked `STAGED_NOT_LAUNCHED`, `INTENTIONALLY_NOINDEX`, or `INTENTIONALLY_HIDDEN` when evidence supports it; otherwise `UNKNOWN`.

---

## 6. Sitemap generation

- **Handler:** `app/sitemap.xml/route.ts` → `collectLiveSitemapNormalizedPaths()` in `src/lib/sitemap/liveSitemapPaths.ts`
- **Include:** `LIVE_PATHS` candidates + enabled origin countries in routing set × origin guide + 4 moving-tool `/from/{country}/` URLs, filtered by `isRouteLive`
- **Exclude:** `/search/`; permanent redirect alias paths
- **Production snapshot:** `_prod-sitemap.xml` — **452** URLs, all under `https://www.expatcopilot.com/…` with **trailing slashes**
- **lastmod:** generation time for most URLs; city hubs may use editorial `publishDate` (many identical timestamps expected)

HTML sitemap: `app/sitemap/page.tsx` (live-filtered).

---

## 7. Robots generation

Production `_prod-robots.txt`:

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /_vercel/
Disallow: /dev/
Disallow: /test/
Disallow: /preview/

Sitemap: https://www.expatcopilot.com/sitemap.xml
```

Page-level robots (examples from production samples):

| URL class | Observed / coded |
|-----------|------------------|
| Live tool (COL calculator) | `index, follow` |
| Search | `noindex, follow` |
| Placeholder tools | `noindex, nofollow` |
| Dev components | `noindex, nofollow` |
| Coming-soon shell (`/netherlands/housing-netherlands`) | `noindex, nofollow` (200) |
| Many guides | No explicit robots meta in HTML sample (default indexable when live) |

---

## 8. Metadata & canonical generation

- Root layout: title template `%s | ExpatCopilot`, `metadataBase` = SEO public origin
- Helper: `lib/seo/metadata.ts` `buildSocialMetadata` → `alternates.canonical` absolute URL, OG/Twitter, optional `publishGate` → `robots: { index: false, follow: false }`
- Canonical origin locked to production domain even on preview deploys

**Production observation (samples):** HTML `rel=canonical` consistently uses **trailing-slash** absolute URLs on `www.expatcopilot.com`, while the edge often serves the **non-trailing-slash** URL as the 200 response (trailing slash → **308** strip). Sitemap locs use trailing slashes. Recorded as architecture evidence only.

---

## 9. Structured data

Builders/components include Organization, WebSite, AboutPage, BreadcrumbList, Article, WebPage, FAQPage, HowTo, SoftwareApplication (tools). Sitewide schema via root layout; breadcrumbs often paired with visible crumb UI on guides/tools/services.

---

## 10. Navigation, breadcrumbs, internal linking

| System | Location |
|--------|----------|
| Mega-nav | `src/lib/nav/config.ts` — filtered by route status |
| Footer / HTML sitemap groups | `src/data/site/footer-links.ts` |
| NL layout cross-links | `ExploreNetherlandsCrossLinks` in `app/netherlands/layout.tsx` |
| Related guides / explore cards | Page models + `filterLiveInternalLinks` / `mapRelatedGuideLinks` |
| Search quick links | Live-only (`src/lib/search/*`) |

Internal inlink/outlink **counts** in the CSV are largely blank pending a later crawl/graph phase. `linked_from_navigation` reflects href extraction from nav + footer configs only (~103 hrefs).

---

## 11. Middleware & redirects

### Middleware (`middleware.ts`)

- Missing guide image rewrite → placeholder PNG
- Stub hub **308**s: `/netherlands/moving/` → move pillar; survival-guide; digid-awareness
- NL publish gates → **404** when not publicly visible
- `?preview=true|false` simulate-production cookie
- Preview host noindex header
- Matcher skips `sitemap.xml` / `robots.txt`

### `next.config.js` redirects

- **230** permanent redirects: cluster renames (work→jobs, culture→life, living→housing/utilities, visa aliases, tool path aliases, country `us`/`uk` → full slugs, etc.)
- Sources mirrored into `sitemap-redirect-aliases.ts` so aliases stay out of XML sitemap

---

## 12. Page-type inventory (CSV `page_type`)

Approximate mix in the 742-row universe:

| page_type | ~Rows | Notes |
|-----------|------:|-------|
| guide | 275 | Broad NL informational pages |
| tool_calculator | 197 | Live + placeholder + country-scoped variants |
| STAGED / redirect overlap reflected in intent, not only type | | |
| redirect_alias | 110 | From next.config sources |
| service_directory | 40 | Categories + static service pages |
| moving_guide | 32 | Registry / guides slug space |
| origin_country_guide | 31 | 30 countries + hub-related |
| city_page | 22 | 15 hubs + cities overview/compare-style |
| trust_legal | 13 | |
| comparison | 7 | e.g. amsterdam-vs-rotterdam |
| visa_guide | 8 | |
| hub / homepage / search / country_hub / best_of / dev | small | |

---

## 13. Production HTTP sampling (evidence, not conclusions)

Source: `_prod-http-samples.json` (41 probes).

| Observation | Examples |
|-------------|----------|
| Effective homepage | `/` → 307 `/netherlands` → 200; canonical `…/netherlands/` |
| Trailing slash | `…/path/` → **308** → `…/path` (200); canonical still `…/path/` |
| Live indexable | `/netherlands`, city hub, move pillar, COL calculator, SA origin guide, cities compare → **200** |
| Scheduled future guides | Multiple `/netherlands/jobs/…` paths → **404** (matches middleware + `SCHEDULED_GUIDES`) |
| Coming-soon registry path | `/netherlands/housing-netherlands` → **200** + `noindex, nofollow` |
| Coming-soon service | `/netherlands/services/temporary-accommodation` → **404** |
| Redirect aliases | `/netherlands/moving`, survival-guide, work→jobs, partner-visa → **308** to canonicals |
| Utility | `/search` → 200 + `noindex, follow` |
| Dev | `/dev/phase2-components` → 200 + `noindex, nofollow` (also Disallow in robots) |
| Placeholder tools | e.g. buy-vs-rent calculator → 200 + `noindex, nofollow` |
| Sitemap / robots | `/sitemap.xml`, `/robots.txt` → **200** |

**Note:** `/netherlands/services/moving-companies` sampled **404** and is classified staged/scheduled in CSV — **not** in production sitemap (consistent with non-live gate).

---

## 14. CSV column guide

| Column | Meaning |
|--------|---------|
| `url` | Absolute production-style URL (trailing slash normalized in inventory build) |
| `route_pattern` | App Router pattern or concrete path |
| `page_type` | Coarse content/IA class |
| `content_source` | Registry/file provenance when known |
| `status` | Registry/publish status string |
| `production_http_status` | Sampled only when probed |
| `indexability_intent` | Intent state (see methodology) |
| `robots_directive` | Meta or header when observed/coded |
| `canonical` | Declared or observed canonical |
| `canonical_http_status` | Final status after redirects (samples) |
| `in_sitemap` | Membership in production sitemap snapshot |
| `linked_from_navigation` | Present in nav/footer href extract |
| `internal_inlinks` / `internal_outlinks` | Reserved (mostly empty this phase) |
| `published` / `publish_date` / `updated_date` / `staged` | Publishing fields when known |
| `intent_source` | Which system(s) drove intent |
| `notes` | Free-text evidence |

Empty cells mean **not measured / not determined**, not failure.

---

## 15. Intent classification rules used

1. In production sitemap → `INDEXABLE` (unless stronger redirect/noindex evidence overrides in notes).
2. `next.config` permanent redirect source → `REDIRECT`.
3. Tool `placeholder` / explicit noindex utility → `INTENTIONALLY_NOINDEX` or `UTILITY`.
4. Future `SCHEDULED_GUIDES`, `COMING_SOON_ROUTES`, pre-launch country/tool variants → `STAGED_NOT_LAUNCHED`.
5. Disabled / gated hidden → `INTENTIONALLY_HIDDEN` when clearly evidenced.
6. Otherwise → `UNKNOWN` (10 rows in this build).

---

## 16. Working evidence files

| File | Contents |
|------|----------|
| `_prod-sitemap.xml` | Full production sitemap fetch (2026-09-06) |
| `_prod-robots.txt` | Production robots fetch |
| `_prod-http-samples.json` | Structured HTTP/canonical/robots samples |
| `_inventory-build-stats.json` | Build counters |

---

## 17. Audit progress summary

**Completed in this phase**

- Methodology, severity, intent states, and outcomes vocabulary documented
- Architecture mapped: routes, registries, middleware, redirects, sitemap/robots, metadata/canonicals, schema, nav/linking, staging gates
- URL inventory CSV produced (742 rows) reconciled to **452** live sitemap URLs
- Production robots + sitemap snapshotted; representative HTTP/canonical/robots samples collected
- Intentional staging distinguished from “missing page” where code signals exist (scheduled 404s, placeholders, coming-soon, redirect aliases)

**Not done yet (by design)**

- Full-site HTML crawl / complete internal link graph
- Exhaustive per-URL HTTP and content-quality scoring
- Duplicate/canonical conflict adjudication and severity-tagged findings
- Recommendations or any production/code changes

**No recommendations in this phase.** Next audit steps should start from this evidence base after human review.
