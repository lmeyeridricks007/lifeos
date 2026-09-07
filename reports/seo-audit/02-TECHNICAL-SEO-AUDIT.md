# Technical SEO / Indexability Audit — ExpatCopilot

**Phase:** Audit only (no fixes implemented)  
**Date:** 2026-09-06  
**Production:** https://www.expatcopilot.com  
**Inputs:** `site-route-inventory.csv`, app source (`apps/expatlife-web`), live HTTP probes  
**Evidence:** `_tech-probe-results.jsonl` (1,205 URLs), `_prod-sitemap.xml`, `_prod-robots.txt`

### Companion CSVs

| File | Rows | Purpose |
|------|-----:|---------|
| [`technical-url-audit.csv`](./technical-url-audit.csv) | 1,205 | Per-URL status, chain, canonical, robots, OG, JSON-LD, slash signals |
| [`canonical-audit.csv`](./canonical-audit.csv) | 940 | Canonical vs status / sitemap / self-canonical |
| [`redirect-audit.csv`](./redirect-audit.csv) | 573 | 3xx sources, hops, sitemap/internal exposure |
| [`indexability-audit.csv`](./indexability-audit.csv) | 754 | Intent vs technical indexability |
| [`parameter-url-audit.csv`](./parameter-url-audit.csv) | 301 | Query-parameter variants |

---

## 1. Method (this phase)

1. Seeded **1,205** production URLs from inventory + sitemap + slash pairs + redirects + staged/noindex + host/scheme/case + known parameter patterns.
2. For each URL recorded: first status, redirect chain, final URL/status, canonical, robots meta, `X-Robots-Tag`, `og:url`, BreadcrumbList / JSON-LD URLs, sample internal `<a href>`.
3. Cross-checked against code: `normalizeSitePath` (trailing `/`), `next.config.js` redirects (no `trailingSlash`), sitemap builder, publish middleware, tool URL-state params, robots.txt.
4. Classified defects only when behavior conflicts with **inventory intent**. Staged / intentional noindex / expected redirects → `INFO` / expected, not defects.

**hreflang:** not implemented in app metadata (no `alternates.languages` / hreflang output observed).  
**Pagination:** no SEO pagination surfaces found in this crawl scope.

---

## 2. Executive findings (verified)

### P0 — Sitemap URLs that do not resolve to indexable content

**8** sitemap URLs for Nigeria & Philippines country-scoped moving tools return **404** (after slash 308) with **`noindex`**:

- `/netherlands/moving/tools/{arrival-planner|document-readiness|first-90-days|moving-checklist}/from/{nigeria|philippines}/`

Parent origin guides for those countries **do** return 200 and remain in the sitemap. South-Africa `/from/` controls return 200.  
→ Sitemap advertises URLs that are not technically indexable (crawl waste + soft failure vs declared INDEXABLE intent).

### P1 — Sitewide trailing-slash / canonical / sitemap conflict

Verified pattern on essentially the **entire** public URL set:

| Surface | Observed form |
|---------|----------------|
| `/sitemap.xml` `<loc>` | trailing slash (`…/amsterdam/`) |
| HTTP for that loc | **308** → non-slash (`…/amsterdam`) |
| Content URL (200) | **non-slash** |
| `<link rel="canonical">` | trailing slash |
| `og:url` (typical) | trailing slash |
| Code `normalizeSitePath` | forces trailing slash |
| `next.config.js` `trailingSlash` | **not set** (platform default favors non-slash 200) |

**Detected anti-patterns:**

1. **`sitemap URL (3xx) → 200`** — all **452** sitemap locs first-hop **308**.
2. **`200 URL → canonical 308 → non-slash 200`** — on **~445** live pages, canonical targets the slash URL which immediately 308s back to the URL already being viewed.
3. **`self_canonical = no`** for practically all HTML 200s (served path ≠ canonical path).
4. **Duplicate crawl surfaces:** **~450** slash/non-slash pairs with different first-hop status.

This matches prior external-report symptoms (canonical→redirect, trailing-slash inconsistency, 3xx in sitemap) and is **independently confirmed** against current production.

Severity for organic discovery: **P1** (sitewide). Not labeled P0 because final content generally still 200 + indexable for ~444 paths; the failure mode is redirect/canonical churn and conflicting signals, not total deindexation.

### P2 — Internal links to redirect aliases

**~14** internal discoveries (nav/HTML) hit **next.config permanent redirect** sources (not counting pure slash normalization). Expected for legacy aliases retained in `LIVE_PATHS` for nav active-state, but they are still **redirect hop tax** on internal PageRank-like flow.

### P2 — Case-variant duplicate / 404 inconsistency

| Request | Result |
|---------|--------|
| `https://www.expatcopilot.com/Netherlands` | **404** |
| `https://www.expatcopilot.com/NETHERLANDS/amsterdam` | **200**, canonical → lowercase `/netherlands/amsterdam/` |

Case handling is inconsistent (some paths 404, some serve).

### P2/INVESTIGATE — Registry “coming soon” vs live 200

`/netherlands/work/working-in-netherlands` is `COMING_SOON_ROUTES` / inventory `STAGED_NOT_LAUNCHED`, **not** in sitemap, but production returns **200** with a full title and **no robots noindex**.  
Treat as **registry vs production conflict** (stale coming-soon entry **or** accidental indexable staging)—not auto-FIX without product confirmation.

### INFO — Expected / intentional (not defects)

| Behavior | Evidence |
|----------|----------|
| Scheduled guides 404 in prod | Middleware + `SCHEDULED_GUIDES`; inventory staged |
| Placeholder tools `noindex, nofollow` | Tool registry `placeholder` |
| `/search` `noindex, follow` | Utility + XML sitemap exclude |
| Config redirect aliases 308/301 → canonical | `next.config.js` + alias exclude from sitemap |
| Homepage `/` → `/netherlands` | `redirectTarget` in content package |
| `http://` → `https://`, apex → `www` | Host/scheme probes OK |
| Preview `?preview=true` | Dev/publish simulation param |
| HTML links to staged 404s (~52) | Consistent with not-yet-launched calendar |

---

## 3. Pattern matrix (explicit)

| Pattern | Present? | Scale | Severity |
|---------|----------|------:|----------|
| `200 → canonical 308 → other URL` | **Yes** (slash loop) | ~445 | P1/P2 |
| `sitemap URL ≠ served URL form` | **Yes** | 452 | P1 |
| `sitemap URL first status 3xx` | **Yes** | 452 | P1 |
| `sitemap URL → 404/noindex` | **Yes** | 8 | **P0** |
| `canonical ≠ og:url` | Sometimes | 29 rows flagged (often with slash findings) | P3 |
| `breadcrumb URL form ≠ canonical` | Minor | 5 | P3 |
| `JSON-LD absolute URL` vs canonical | Generally same slash convention as canonical | — | INFO |
| `internal link → redirect alias → canonical` | **Yes** | ~14 | P2 |
| `internal link → 404` (non-staged) | Rare | 1 | P3/INVESTIGATE |
| `parameter URL` discoverable | **Yes** | 301 audited/discovered | P3/INFO |
| `hreflang` conflict | N/A | not used | — |

---

## 4. Canonical audit summary

See `canonical-audit.csv`.

- **Self-canonical failures** are near-universal on 200 HTML because the **served** URL is non-slash while **canonical** is slash.
- Canonical targets that **308** are overwhelmingly the trailing-slash twins—not wrong host/content aliases.
- Sitemap path membership usually matches canonical **path** (same slug), but **string form** of sitemap loc equals canonical slash form, while Googlebot’s first fetch of the loc is a redirect.

Homepage: `/` is in the sitemap, **307** → `/netherlands`, whose canonical is `https://www.expatcopilot.com/netherlands/` (itself a slash URL that 308s to non-slash). Layered redirect entrypoint.

---

## 5. Redirect audit summary

See `redirect-audit.csv`.

| Class | Count (approx) | Expected? |
|-------|----------------:|-----------|
| Sitemap locs (slash → non-slash 308) | 452 | Platform vs code policy clash — **not** product “legacy alias” intent |
| Inventory / `next.config` aliases | 110+ probed | Yes |
| Homepage `/` → NL hub | 1 | Yes |
| Host/scheme normalization | apex/http | Yes |
| Content redirects (moving/, visa aliases, etc.) | many | Yes |

**Redirects exposed in sitemap:** all slash-form locs (452). Config aliases are correctly **excluded** from XML via `SITEMAP_PERMANENT_REDIRECT_ALIASES` (good).

---

## 6. Indexability audit summary

See `indexability-audit.csv`.

| Classification | Approx rows | Notes |
|----------------|------------:|-------|
| `INDEXABLE_BUT_SITEMAP_URL_3XX` | 447 | Live content OK; discovery URL 3xx |
| `TRUE_INDEXABLE` | 3 | Rare rows where first hop already 200 (e.g. some non-slash seeds) |
| `ACCIDENTALLY_NON_INDEXABLE` | **8** | NG/PH tool-from in sitemap → 404+noindex |
| `INTENTIONALLY_STAGED` | 141 | Future/coming-soon |
| `INTENTIONALLY_NOINDEX` / utility | ~31 | Placeholders, search, etc. |
| `REDIRECT_NOT_INDEXABLE` | 110 | Aliases |
| `STAGED_OR_REGISTRY_CONFLICT_200_INDEXABLE` | 1 | `working-in-netherlands` |
| Host/case variants | 4 | Documented above |

**True indexable pages (content):** **444** unique sitemap paths with final **200** and no `noindex` (452 − 8).  
**Technically indexable at the URL Google is told to fetch (sitemap loc):** **0** locs return 200 on first hop—all 308 first.

---

## 7. Parameter URL audit summary

See `parameter-url-audit.csv` + code (`useSearchParams` / `?scenario=` links).

| Parameter family | Role | Index risk |
|------------------|------|------------|
| `scenario` | Visa/tool presets; **linked in HTML** | Low if canonical strips query (observed canonical → clean path) |
| `from`, arrival/household fields | Moving tool state | Client state; discoverable from tool UIs |
| `col`, `s` | COL / rent / healthcare encoded state | Share URLs; canonical should stay on base |
| `preview` | Publish-gate simulation | Utility; not for SEO |
| `q` | Search | noindex search page |
| `utm_*` | Tracking | Canonical to clean URL observed on sample |

**301** parameter rows (8 seeded fetches + **293** HTML-discovered). No evidence of large indexable faceted parameter indexes; classification mostly `PARAMETER_STATE` / `DISCOVERED_PARAM_LINK` at **P3/INFO**, assuming canonicalization holds (spot-checked on scenario/utm samples).

---

## 8. robots.txt & meta robots

Production robots allow `/` and disallow `/api/`, `/_next/`, `/_vercel/`, `/dev/`, `/test/`, `/preview/`. Sitemap line points at www origin.

Page-level:

- Live tools/guides: typically empty robots meta (implicit index) or `index, follow`
- Placeholders / some shells: `noindex, nofollow`
- Search: `noindex, follow`
- Soft-404 tool-from (NG/PH): `noindex` on error body

No sitewide accidental `nofollow` on indexable pillars in samples. Preview deployment `X-Robots-Tag` remains code-path only for `*.vercel.app` (not www).

---

## 9. www / HTTPS / Open Graph / structured data

| Check | Result |
|-------|--------|
| HTTPS | Enforced (http→https) |
| www | Apex → www |
| `og:url` | Usually mirrors canonical (slash form) |
| JSON-LD `@id` / `url` | Absolute www URLs; slash form aligned with canonical helpers |
| BreadcrumbList | Present on many guides; occasional slash-form vs served URL |

---

## 10. Quantification

| Metric | Count |
|--------|------:|
| True indexable pages (final 200, not noindex, sitemap path) | **444** |
| Sitemap locs | 452 |
| Intentionally hidden / staged (inventory intent rows in indexability CSV) | **141** |
| Intentionally noindexed (placeholders/utility/etc.) | **~31** |
| Accidentally non-indexable (should be indexable, not) | **8** |
| Redirect URLs exposed via sitemap (slash locs = 3xx) | **452** |
| Config redirect aliases exposed in sitemap | **0** (excluded by design) |
| Canonical-to-redirect cases | **~445** |
| Sitemap/canonical path mismatches (different slug) | **0** (form differs; path matches) |
| Sitemap string form ≠ served URL | **452** |
| Internal links to redirect aliases | **~14** |
| Internal links to unexpected 404s | **1** |
| Internal links to staged 404s | **~52** (expected) |
| Parameter variants audited/discovered | **301** |
| Duplicate slash crawl surfaces | **~450** |
| Case-variant issues sampled | **2** |
| Registry vs live conflict (coming soon but 200 indexable) | **1** |

---

## 11. What is *not* called a defect here

- Pre-publish middleware **404**s for scheduled guides  
- Placeholder calculators with **noindex**  
- Search **noindex** + sitemap omission  
- Permanent legacy aliases **out of sitemap** but still 301/308  
- Country/tool URLs not yet meant to launch when inventory says staged  
- Client-side tool query state when canonicalized to clean URLs  

---

## 12. Progress / next audit phases (no remediation in this doc)

Completed: production×code technical SEO verification, CSV evidence packs, quantified indexability vs intent.

Still open for later phases (still audit-only until you approve fixes): content-quality scoring, full internal PageRank-style link graph, Search Console coverage cross-check, prioritized remediation plan.

**No code, route, canonical, sitemap, or robots changes were made.**
