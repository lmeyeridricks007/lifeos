# 11 — NG/PH final sitemap fix (TECH-P0)

**Date:** 2026-09-07  
**Scope:** Remove staged Nigeria / Philippines country-tool `/from/` URLs from sitemap generation and live-route discovery eligibility.  
**Do not:** Delete origin-guide routes/data or future-launch tool landing capability.

---

## Production state (live probe before fix)

All eight sitemap-listed tool URLs were checked on `https://www.expatcopilot.com`:

| URL pattern | HTTP | robots | canonical | Content | Country-specific | Intended state |
|-------------|------|--------|-----------|---------|------------------|----------------|
| `/netherlands/moving/tools/{arrival-planner\|document-readiness\|first-90-days\|moving-checklist}/from/nigeria` ×4 | **404** | `noindex` | *(none)* | Soft 404 shell only | No | **Staged / not launched** |
| same tools `/from/philippines` ×4 | **404** | `noindex` | *(none)* | Soft 404 shell only | No | **Staged / not launched** |

**Contrast — keep in sitemap:**

| URL | HTTP | State |
|-----|------|--------|
| `/netherlands/moving/moving-to-netherlands-from/nigeria` | **200** | Live origin guide |
| `/netherlands/moving/moving-to-netherlands-from/philippines` | **200** | Live origin guide |

Eligibility for live tool landings is already defined as `SUPPORTED_ORIGIN_COUNTRIES` (28 countries). Nigeria / Philippines are in `ROUTING_ORIGIN_COUNTRY_SLUGS` for **guides**, but are **not** in `SUPPORTED_ORIGIN_COUNTRIES`, so `generateStaticParams` never builds tool landings and `countryToolLandingPath()` returns `null` (links fall back to base tool `?from=`).

**Decision:** REMOVE the 8 tool URLs from sitemap generation. Do **not** launch incomplete 404 pages. Preserve guide routes + country data for a future tool launch.

---

## Root cause

`collectLiveSitemapNormalizedPaths()` added `/moving/tools/{tool}/from/{slug}` for every enabled country in `ROUTING_ORIGIN_COUNTRY_SLUGS`, including nigeria / philippines, then `isRouteLive()` treated those paths as live because `isMovingToolFromCountryPath()` only checked the routing slug set—not whether a tool landing actually renders.

IA linking (`countryToolLinkModel`) was already correct; sitemap / route-status were not.

---

## Implementation

### 1. `apps/expatlife-web/src/lib/sitemap/liveSitemapPaths.ts`

- Still emit origin guides for all routing-enabled countries (including NG/PH).
- Emit tool `/from/{country}` locs **only when** `isSupportedOriginCountry(slug)` (same source of truth as page generation + IA).

### 2. `apps/expatlife-web/src/lib/routes/routeStatus.ts`

- If path is a moving-tool `/from/{country}` and country is **not** in `SUPPORTED_ORIGIN_COUNTRIES` → status **`hidden`**.
- Effect: sitemap filter, `filterLiveInternalLinks`, and related live-link helpers will not treat staged landings as indexable/live discovery targets.
- Routes/data for future launch remain; pages continue to `notFound()` until added to `SUPPORTED_ORIGIN_COUNTRIES` + content packs.

### 3. Tests

- New cases in `liveSitemapPaths.test.ts`: NG/PH tool paths absent; NG/PH guides present; ZA tool landing still present.
- Existing `countryToolLinkModel.test.ts` continues to assert no NG/PH landing exposure.

**Unrelated SEO behaviour unchanged** (canonical convention, explore equity, hubs, etc.).

---

## Validation (build / offline)

Commands run after the change:

```text
node --import tsx --test src/lib/sitemap/liveSitemapPaths.test.ts
node --import tsx --test src/lib/tools/shared/countryToolLinkModel.test.ts
node --import tsx --test lib/seo/site-url.test.ts
npx tsx scripts/validate-canonical-urls.ts
```

Results:

| Check | Result |
|-------|--------|
| Unit tests (sitemap + country-tool + site-url) | **Pass** |
| `collectLiveSitemapNormalizedPaths()` count | **448** (was 456 = 448 + 8 staged tools) |
| NG/PH tool URLs in collected sitemap paths | **0** |
| NG/PH origin guides in collected sitemap paths | **2** (retained) |
| Trailing-slash / shape failures | **0** |
| Staged tool URLs intentionally in sitemap | **0** |
| Sitemap URLs that would be 404/noindex for NG/PH tools | **0** (removed) |

`validate-canonical-urls.ts` offline run also refreshed `reports/remediation/canonical-validation.csv` (448 convention-ok rows; NG/PH **guides** only).

---

## Discovery exposure

| Surface | NG/PH tool `/from/` landings |
|---------|------------------------------|
| `/sitemap.xml` generation | **Excluded** (this fix) |
| `countryToolLandingPath` / mesh / versions lists | Already **null / omitted** |
| Guide CTAs | Base tool `?from=nigeria|philippines` only (interactive, not separate indexable landing) |
| `isRouteLive` for staged tool paths | Now **false** (`hidden`) |

---

## Deploy note

Production sitemap will drop the 8 URLs on the next deploy of this change. Until then, production may still list them (known pre-fix P0).

After deploy, re-check:

```text
curl -sS 'https://www.expatcopilot.com/sitemap.xml' | grep -E 'from/(nigeria|philippines)' 
# expect: origin guides only (moving-to-netherlands-from/...), zero /tools/.../from/...
```

---

## Status

**RESOLVED in code** for TECH-P0 NG/PH sitemap 404/noindex members.  
**Requires production deploy** for public `/sitemap.xml` to match.
