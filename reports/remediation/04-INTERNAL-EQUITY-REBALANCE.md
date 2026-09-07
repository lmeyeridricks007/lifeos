# Remediation: IA-P1-EXPLORE-CONCENTRATION

**Issue ID:** IA-P1-EXPLORE-CONCENTRATION  
**Date:** 2026-09-06  
**Scope:** Redesign `ExploreNetherlandsCrossLinks` only (no other SEO issues)  
**App:** `apps/expatlife-web`

---

## Previous behavior

`ExploreNetherlandsCrossLinks` rendered a **fixed list of 23 destinations** on every `/netherlands/*` page via `app/netherlands/layout.tsx`.

Effects (from IA audit + simulation on **437** live NL sitemap paths):

| Metric | Before |
|--------|-------:|
| Explore links per NL page | **23** |
| Distinct explore targets | **23** |
| Explore inlinks per target | **437** each (≈ every NL page) |
| Median explore inlinks among targets | **437** |
| Narrow URLs with sitewide weight | layoffs, resigning, TWV, status-changes, weather, … |

Deeper cluster pages (tax calculators, health articles, country tools, etc.) received little or no explore reinforcement unless they happened to be in that fixed 23.

---

## Desired model (implemented)

| Tier | Role | Cap |
|------|------|----:|
| **GLOBAL DISCOVERY** | Truly cross-site NL destinations | **2** |
| **CLUSTER DISCOVERY** | Semantically related to current page | **6** |
| **Total** | Hard cap | **8** |

Rules enforced in `resolveExploreNetherlandsLinks`:

- Deterministic (no rotation)
- Exclude current path + optional body `excludeHrefs`
- `isRouteLive` only (no staged / coming-soon / hidden)
- Country-origin pages inject **live** `/from/{country}` tool landings (never NG/PH 404s)

---

## Component behavior

| File | Change |
|------|--------|
| `lib/seo/exploreNetherlandsClusters.ts` | Cluster detection + relationship map + resolver |
| `components/seo/ExploreNetherlandsCrossLinks.tsx` | Server component; resolves links from `x-pathname` |
| `app/netherlands/layout.tsx` | Still mounts the strip (behavior changed, not removed) |
| `middleware.ts` | Sets `x-pathname` request header for the layout |

**Global destinations (sitewide):**

1. Move to the Netherlands  
2. Dutch cities  

**Cluster examples** (see relationship map in code): tax, banking, cities, housing, health, country_origin, moving, visas, working, jobs, first_90_days, living, culture, family, education, services, tools, citizenship, integration, leaving, practical_life, transport, utilities, default.

Pages may pass `excludeHrefs` to skip links already prominent in the body.

---

## Equity simulation (before → after)

Simulated explore edges over **437** NL sitemap paths (`scripts/build-explore-equity-report.ts` → `_explore-equity-summary.json`).

| Metric | Before | After |
|--------|-------:|------:|
| Links per page | 23 | **~7.5** avg (≤8) |
| Distinct explore targets | 23 | **203** |
| Max explore inlinks | 437 | 436 (globals only) |
| Median explore inlinks among targets | **437** | **1** |
| Top-5 share of explore equity | 0.217* | 0.359† |

\*Before, all 23 tied at 437 — top-5 share is mechanically 5/23.  
†After, two globals dominate total edge count; **median among recipients collapses** because dozens of cluster URLs now receive topical (not sitewide) explore links.

### Most-linked pages

**Before (all 23 tied at 437):** move pillar, visas, working, changing-jobs, resigning, layoffs, TWV, residence-permits, extensions, status-changes, cities, best-cities-*, city-comparison, survival-guide, getting-around, apps, daily-life, language, weather, services, tools.

**After (top explore recipients):**

| Href | Explore inlinks |
|------|----------------:|
| `/netherlands/moving-to-the-netherlands` | 436 |
| `/netherlands/cities` | 436 |
| `/netherlands/moving/tools/moving-checklist` | 105 |
| `/netherlands/taxes/tools/dutch-salary-net-calculator` | 103 |
| `/netherlands/tools/city-comparison` | 102 |
| `/netherlands/tools` | 95 |
| `/netherlands/visa-checker` | 90 |
| `/netherlands/after-arriving-netherlands` | 85 |
| `/netherlands/moving/tools/arrival-planner` | 82 |

Narrow pages (layoffs, resigning, weather, etc.) **no longer** receive sitewide explore equity.

### Cluster-level improvements

Cluster-tier explore edges are now concentrated where users need them (counts = cluster-tier edges emitted):

| Cluster | Cluster-tier edges |
|---------|-------------------:|
| tools | 465 |
| first_90_days | 402 |
| country_origin | 182 |
| culture | 170 |
| tax | 156 |
| cities | 147 |
| living | 98 |
| banking | 95 |

Tax, health, housing, and country-origin journeys now get **topical** explore links instead of a generic moving-job strip.

---

## Examples (10 representative page types)

| Page | Cluster | Explore strip (labels) |
|------|---------|------------------------|
| `/netherlands/taxes/30-percent-ruling` | tax | Move · Cities · Gross vs net · Net salary calc · Payslip · Healthcare allowance · How taxes work · Average salary |
| `/netherlands/amsterdam` | cities | Move · (cities self-excluded from global if current) · Cost of living · Amsterdam vs Rotterdam · Housing · Getting around · City comparison · Best cities… |
| `/netherlands/moving/…/from/south-africa` | country_origin | Move · Cities · **Checklist/Docs/Arrival/First90 for SA** · Visas · Documents needed |
| `/netherlands/health/gp-netherlands` | health | Move · Cities · Insurance comparison · Insurance guide · Pharmacies · Emergency · Hospitals |
| `/netherlands/housing/housing-costs-netherlands` | housing | Move · Cities · Housing hub · Rental contracts · Rent calculator · Housing platforms |
| `/netherlands/jobs/finding-jobs-netherlands` | jobs | Move · Cities · Expat salary · Workplace culture · Contracts · Gross vs net · Working orientation |
| `/netherlands/living/survival-guide` | living | Move · Cities · Getting around · Daily life · Apps · Language · Services |
| `/netherlands/services` | services | Move · Cities · Relocation · Immigration lawyers · Housing platforms · Tax advisors |
| `/netherlands/money/banking/best-banks-expats` | banking | Move · Cities · Open bank account · Fees · Bank comparison · Banking hub |
| `/netherlands/moving/visas-residency` | visas | Move · Cities · HSM · Visa checker · Residence permits · Partner visa · Moving checklist |

---

## Tests

```text
npx tsx --test lib/seo/exploreNetherlandsClusters.test.ts
→ 6 pass
```

---

## Success criteria

| Criterion | Status |
|-----------|--------|
| Component not removed | Kept; behavior redesigned |
| Global set small | **2** destinations |
| Most links cluster-contextual | Yes |
| Cap / no staged / deterministic | Yes |
| Equity less concentrated on narrow URLs | Yes (layoffs/TWV/weather no longer sitewide) |
| Deeper clusters reinforced | Yes (tax, health, country tools, etc.) |

AUDIT REMEDIATION COMPLETE FOR IA-P1-EXPLORE-CONCENTRATION — NO OTHER SEO ISSUES ADDRESSED
