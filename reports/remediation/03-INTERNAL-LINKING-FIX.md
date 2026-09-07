# Remediation: IA-P1-ORPHAN-COUNTRY-TOOLS

**Issue ID:** IA-P1-ORPHAN-COUNTRY-TOOLS  
**Date:** 2026-09-06  
**Scope:** Indexable orphan / internal-link mesh for country × moving-tool pages only (no general content optimisation)  
**App:** `apps/expatlife-web`

---

## Orphan classification (before)

From `reports/seo-audit/orphan-pages.csv` (**127** rows; **124** true indexable orphans):

| Page type | Count | Country | Parent tool | Parent country guide | Cluster | Search intent | Indexability |
|-----------|------:|---------|-------------|----------------------|---------|---------------|--------------|
| Country tool landing `/moving/tools/{tool}/from/{country}` | **120** | 30 origins × 4 tools (incl. NG/PH) | arrival-planner, document-readiness, first-90-days, moving-checklist | `/moving/moving-to-netherlands-from/{country}` | moving / first_90_days | “tool from {country}” | INDEXABLE intent in sitemap; **NG/PH landings 404** |
| Culture scaffold articles | **3–5** | n/a | n/a | culture hub | culture_life | culture topics | INDEXABLE (scaffold) |
| Government portals overview | **1** | n/a | n/a | practical-life portals | netherlands_other | portals | **Redirect alias** (not a destination) |

**Near-orphans before:** 3 (culture depth pages).

**Not treated as link failures:** STAGED_NOT_LAUNCHED / INTENTIONALLY_NOINDEX inventory URLs.

---

## Root cause

Country **guides** linked tools via **`?from=` on base tool URLs**, never via the indexable `/from/{country}` landings. Base tools and hubs also omitted country-version browse links. Landings therefore had **zero contextual inlinks** despite being in the sitemap.

---

## Internal-link model

Source of truth: `src/lib/tools/shared/countryToolLinkModel.ts`

```
Moving to the Netherlands
  → Moving from [Country] guide
      → Checklist / Document readiness / Arrival planner / First 90 days (country landings)

Base tool page
  → Country versions of that tool (live landings only)

Country tool landing
  → Parent country guide
  → Sibling country tools (same origin)
  → Interactive tool with ?from= (CTA)
```

**Rules**

- Link only **live** landings (`SUPPORTED_ORIGIN_COUNTRIES` = **28**).
- **Never** link Nigeria/Philippines `/from/` landings (404 / TECH-P0).
- For NG/PH guides, keep interactive `?from=` on base tools only.
- Do not add country URLs to global nav or ExploreNetherlandsCrossLinks.
- Do not expose staged routes.

---

## Implementation

| Piece | Role |
|-------|------|
| `countryToolLinkModel.ts` (+ tests) | Path helpers, live landing enumeration, sibling/guide/base lists |
| `ToolOriginCountryVersionsSection` | Base tool → country versions |
| `CountryToolLandingRelatedStrip` | Landing → guide + siblings |
| `ToolCountryLandingTemplate` | Renders related strip |
| `countryModelToGuideData` / `buildCountryPageModel` | Guide CTAs → landings when live |
| 4 base tool pages | Mount country-versions section |
| Culture hub cards | Parent links for sinterklaas / what-feels-normal / communication-style |

---

## Metrics (audit before → model after)

| Metric | Before | After (model) |
|--------|-------:|--------------:|
| Indexable orphans | **124** | **9** |
| Near-orphans | **3** | **6** (mostly culture with 1 hub inlink) |
| Avg indexable `href_inlinks` | **59.09** | **60.33** |
| Live country-tool landings | 112 (28×4) | each ≥ **guide + base tool** inlinks; typically + sibling mesh |

Method note: `internal-link-graph-after.csv` / `orphans-after.csv` apply **code-model edges** onto the audit graph (no production crawl of undeployed HTML). Re-crawl after deploy to confirm.

---

## Country-tool coverage

- **4** tools × **28** live countries = **112** indexable landings now wired.
- **8** NG/PH sitemap landings remain **unlinkable** until TECH-P0 creates pages or removes them from the sitemap.
- Every supported country guide now points at the four country landings (when live).

---

## Pages intentionally left orphaned (or near-orphan) and why

| Path pattern | Reason |
|--------------|--------|
| `/moving/tools/*/from/nigeria\|philippines` | **TECH-P0** soft-404; linking would send users/crawlers to 404. Guides keep `?from=` only. |
| `/netherlands/living/government-portals-overview` | **Intentional redirect alias** → practical-life government portals; not an indexable destination. |
| Culture scaffold near-orphans (`hierarchy-and-flatness`, `time-and-boundaries`, …) | Thin scaffold cluster; hub now links primary orphans; deeper mesh is out of this issue’s scope. |
| `/netherlands/tools/advanced` | Near-orphan utility hub; not part of country-tool mesh. |

---

## New link components / patterns

1. **`countryToolHref` / `countryToolLandingPath`** — prefer landing, fall back to `?from=`  
2. **`ToolOriginCountryVersionsSection`** — contextual country list on base tools  
3. **`CountryToolLandingRelatedStrip`** — parent guide + sibling tools  

---

## Tests

```text
npx tsx --test src/lib/tools/shared/countryToolLinkModel.test.ts
→ 5 pass
```

Report builder:

```text
npx tsx scripts/build-ia-orphan-remediation-report.ts
```

---

## Deliverables

- `reports/remediation/03-INTERNAL-LINKING-FIX.md` (this file)
- `reports/remediation/internal-link-graph-after.csv`
- `reports/remediation/orphans-after.csv`

---

## Success criteria

| Criterion | Status |
|-----------|--------|
| No high-value indexable country-tool landing orphaned (28×4 live set) | **Met** in link model |
| Residual orphans documented with legitimate reasons | **Met** (NG/PH 404s, redirect alias, scaffolds) |
| No staged URLs linked; no mega-nav dump | **Met** |

AUDIT REMEDIATION COMPLETE FOR IA-P1-ORPHAN-COUNTRY-TOOLS — NO GENERAL CONTENT OPTIMISATION
