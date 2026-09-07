# SEO Audit Methodology — ExpatCopilot

**Phase:** Audit only (no production or codebase changes)  
**Production URL:** https://www.expatcopilot.com  
**Codebase app:** `apps/expatlife-web`  
**Audit date:** 2026-09-06  
**Output directory:** `/reports/seo-audit/`

---

## 1. Audit scope

This audit covers technical SEO, indexability, content discovery architecture, URL inventory, and organic-growth readiness for the **public production website**.

**In scope**

- Public HTML routes and their App Router definitions
- Sitemap (`/sitemap.xml`), robots (`/robots.txt`), canonicals, robots meta / `X-Robots-Tag`
- Redirects (`next.config.js`, middleware stub redirects)
- Metadata / Open Graph / JSON-LD generation patterns
- Internal navigation, breadcrumbs, related-content and live-link filtering
- Content systems: guides, tools/calculators, city hubs, origin-country pages, services, comparisons, hubs
- Publishing / staging gates (`LIVE_PATHS`, `COMING_SOON_ROUTES`, scheduled guides, tool `placeholder` vs `live`, country `enabled` / publish dates)
- Distinguishing intentional non-indexation from defects

**Out of scope (this phase)**

- Implementing fixes, route changes, metadata edits, canonical/sitemap/robots changes
- Rewriting articles or enriching content
- Adding/removing `noindex`, deleting legacy routes, changing redirects
- Paid media, social SEO beyond crawlable tags, offline brand search
- Full Google Search Console / Bing Webmaster historical performance (may be referenced later if access exists)
- Exhaustive link-graph crawl of every internal edge (sampled + code-derived in inventory phase)

---

## 2. Methodology

Evidence is gathered from **three independent layers**, then reconciled:

| Layer | Source | Purpose |
|-------|--------|---------|
| **A. Code / config** | `apps/expatlife-web` App Router, registries, middleware, `next.config.js`, publishing libs | Declared intent and generation rules |
| **B. Production fetch** | Live HTTP against `https://www.expatcopilot.com` | Observed status, redirects, robots, canonicals, sitemap membership |
| **C. Content registries** | Tools JSON, countries, scheduled guides, moving/living clusters, services | Page-type and publish calendar |

**Process for inventory (this deliverable set)**

1. Document methodology, classifications, and limitations (this file).
2. Map architecture: routes, SEO systems, staging mechanisms.
3. Enumerate URL universe from code + registries + production sitemap.
4. Classify each URL’s **indexability intent** from explicit signals only.
5. Sample production HTTP for representative INDEXABLE / STAGED / REDIRECT / UTILITY / NOINDEX URLs.
6. Emit `01-SITE-INVENTORY.md` + `site-route-inventory.csv`.
7. Record progress summary only — **no fix recommendations** in this phase.

Later audit phases (not started here) will cover deeper duplicate analysis, content quality scoring, internal-link graphs, and prioritized remediation — still gated on review of this evidence base.

---

## 3. Assumptions

1. **`apps/expatlife-web` is the production site** for expatcopilot.com (brand in metadata / schema: ExpatCopilot).
2. **Canonical origin** is `https://www.expatcopilot.com` (`lib/site-origin.ts`); preview hosts must not appear in crawler-facing absolute URLs.
3. **Route existence ≠ index intent.** Many App Router pages are staged, scheduled, placeholder, or redirect aliases by design.
4. **Primary “should this be in the sitemap?” signal** is `collectLiveSitemapNormalizedPaths()` (`isRouteLive` + exclusions), verified against live `/sitemap.xml`.
5. **Content cadence** (~every 3–4 days) means scheduled/`publishDate` gaps are expected, not automatic defects.
6. **Trailing-slash policy:** internal normalization prefers trailing `/` (`normalizeSitePath`); production HTTP may strip trailing slashes via platform redirects. Both forms are recorded as evidence; conflict analysis is deferred.
7. Where code and production disagree, both are logged; classification prefers **explicit code intent** labeled with production observation in `notes` / HTTP columns.
8. Query-parameter calculator states and affiliate `/out/[provider]` are utility/parameter surfaces unless proven otherwise.

---

## 4. Production URL

| Item | Value |
|------|--------|
| Primary origin | `https://www.expatcopilot.com` |
| Homepage behavior (code) | `app/page.tsx` redirects to `packages/content` `redirectTarget` (`/netherlands`) |
| XML sitemap | `https://www.expatcopilot.com/sitemap.xml` |
| Robots | `https://www.expatcopilot.com/robots.txt` |
| HTML sitemap | `/sitemap/` (human) |

---

## 5. Crawl rules (audit crawl)

For production sampling and any later full crawl:

1. **User-Agent:** identify as audit client (e.g. `ExpatCopilotSEOAudit/1.0`); do not impersonate Googlebot for access-control tests unless separately scoped.
2. **Respect** `robots.txt` disallow paths for *discovery* of public SEO surfaces; still **inspect** disallowed utility paths once for classification (API/dev), without mass-crawling them.
3. **Do not** follow infinite parameter permutations; treat tool query states as `PARAMETER_STATE`.
4. **Record** first hop status **and** final status after redirects (max small hop count).
5. Prefer **HTTPS www** origin; note apex/non-www only if encountered.
6. Skip binary assets except where broken images affect crawl waste (middleware image rewrite is noted in architecture, not exhaustively crawled here).
7. Cap concurrent requests; prefer sequential probes when parsing HTML for canonical/robots to avoid mixed responses.

**Sitemap as seed:** production `/sitemap.xml` is the authoritative list of URLs the system currently *claims* as live indexable candidates.

---

## 6. Classification system

### 6.1 URL intent states

| State | Meaning |
|-------|---------|
| `INDEXABLE` | Intended to be crawlable and indexable when live (typically in sitemap + indexable robots + publicly visible). |
| `INTENTIONALLY_HIDDEN` | Exists or is gated so it should not be publicly reachable (e.g. disabled country, middleware 404, hidden registry). |
| `INTENTIONALLY_NOINDEX` | May return 200 but must not be indexed (placeholders, explicit noindex, preview hosts). |
| `STAGED_NOT_LAUNCHED` | Planned / scheduled / coming-soon; not yet for organic discovery. |
| `REDIRECT` | Permanent (or stub) alias; canonical value lives on destination. |
| `LEGACY` | Historical URL retained only for redirects or compatibility (use when clearly legacy beyond active redirect map). |
| `UTILITY` | Functional page (search, etc.) not meant as ranking landing page. |
| `PARAMETER_STATE` | Query/hash/state variant of a base tool or guide URL. |
| `DUPLICATE_VARIANT` | Alternate path/slash/case/param that duplicates another URL’s intent. |
| `UNKNOWN` | Insufficient evidence — **do not treat as broken**. |

### 6.2 Audit outcomes (for later findings docs)

| Outcome | Meaning |
|---------|---------|
| `PASS` | Behavior matches declared intent. |
| `EXPECTED` | Non-ideal optically but intentional (e.g. scheduled 404). |
| `INVESTIGATE` | Conflict or incomplete evidence. |
| `FIX` | Defect relative to declared intent (assigned only after evidence review). |
| `ENRICH` | Indexable page weak for organic competition (content/IA). |
| `CONSOLIDATE` | Multiple URLs should collapse to one. |
| `REDIRECT` | Should permanently point to a canonical target. |
| `REMOVE_FROM_DISCOVERY` | Drop from sitemap/nav/internal links while keeping or deleting URL per product decision. |
| `UNKNOWN` | Cannot conclude. |

This inventory phase primarily assigns **intent states**, not outcomes/`FIX` labels.

---

## 7. Severity system

Used when findings are logged in later phases:

| Severity | Definition |
|----------|------------|
| **P0** | Critical technical issue affecting large portions of site/indexability |
| **P1** | High-value organic traffic blocker |
| **P2** | Meaningful optimization opportunity |
| **P3** | Minor / hygiene improvement |
| **INFO** | Expected / intentional behavior |

**Rule:** Staging, deliberate noindex, and pre-publish 404s default to **INFO** / `EXPECTED` unless they leak into the sitemap, nav as live links, or indexable 200s contrary to code intent.

---

## 8. Route / indexability states (system model)

Production indexability is **multi-gated**. A path is effectively “live for SEO” only when relevant gates pass:

```
App Router page exists
  → registry / LIVE_PATHS / pattern helpers
  → publish / publishDate / scheduledGuides (middleware may 404)
  → tool status live vs placeholder (placeholder → noindex)
  → country enabled + publish (origin + /from/{country} tools)
  → cities hub publish gates
  → sitemap inclusion (isRouteLive − excludes − redirect aliases)
  → page robots / publishGate metadata
  → host robots (Vercel preview → X-Robots-Tag noindex)
```

**Nav vs sitemap vs HTTP**

| Surface | Live scheduled-but-not-yet | Placeholder tool | Redirect alias |
|---------|----------------------------|------------------|----------------|
| Mega-nav | Often “Coming soon” | “Soon” | May still resolve via 301 |
| Middleware | 404 (NL publish gates) | 200 + noindex | 301/308 to canonical |
| XML sitemap | Omitted | Omitted | Omitted (`SITEMAP_PERMANENT_REDIRECT_ALIASES`) |

---

## 9. Evidence standards

Every non-`UNKNOWN` classification should cite at least one:

1. **Code citation** — file + symbol (e.g. `COMING_SOON_ROUTES`, `SCHEDULED_GUIDES`, `XML_SITEMAP_EXCLUDE`)
2. **Production observation** — HTTP status, `Location`, canonical link, robots meta, or sitemap `<loc>`
3. **Registry field** — `status`, `publish`, `publishDate`, `enabled`

CSV columns:

- Empty `production_http_status` / link counts = **not yet measured**, not “missing”
- `intent_source` records which system(s) drove the intent label
- Conflicts → prefer `UNKNOWN` or keep intent from strongest explicit signal and note the conflict

**Do not** infer “should be indexed” solely from a `page.tsx` file on disk.

---

## 10. Limitations

1. **Inventory is not a full sitewide HTML crawl.** Internal inlink/outlink counts are mostly blank pending a later graph pass.
2. **HTTP sampling is partial.** Most CSV rows rely on code + sitemap; only a representative sample has live status/canonical/robots filled.
3. **Trailing-slash / host normalization** may be applied by Next.js or the hosting edge; first-hop `308` slash changes are observed and recorded, not judged here.
4. **Parallel HTML fetches can cross-contaminate** if sharing one body file; sequential unique temp files are required for canonical accuracy.
5. **Search Console / index coverage / rankings** are not included in this phase.
6. **Content quality and E-E-A-T** scoring is deferred.
7. **Dynamic `[slug]` / catch-all** expansions are incomplete except where registries or sitemap enumerate concrete URLs.
8. **Date dependence:** scheduled visibility uses UTC calendar dates; this inventory is frozen at **2026-09-06**.
9. **Dev/preview bypasses** (`CONTENT_PREVIEW`, local date bypass) mean local `next dev` behavior ≠ production SEO behavior.
10. External third-party SEO reports are **not** treated as ground truth; they may be cross-checked in later phases.

---

## Artifact index (this phase)

| File | Role |
|------|------|
| `00-AUDIT-METHODOLOGY.md` | This document |
| `01-SITE-INVENTORY.md` | Architecture + inventory narrative |
| `site-route-inventory.csv` | Per-URL inventory table |
| `_prod-sitemap.xml` | Snapshot of production sitemap (working evidence) |
| `_prod-robots.txt` | Snapshot of production robots (working evidence) |
| `_prod-http-samples.json` | Sampled production HTTP/canonical/robots |
| `_inventory-build-stats.json` | Build counters for the CSV |

Working `_`-prefixed files are evidence snapshots for the audit trail; they are not recommendations.
