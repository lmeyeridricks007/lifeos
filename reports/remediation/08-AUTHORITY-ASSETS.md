# Authority asset enhancement — Phase 1

**Phase:** Remediation (product changes + citeability scaffolding)  
**Date:** 2026-09-06  
**Scope:** Five Phase-1 assets only (not the full linkable-assets portfolio)  
**Audit inputs:** [`08-AUTHORITY-LINKABILITY-AUDIT.md`](../seo-audit/08-AUTHORITY-LINKABILITY-AUDIT.md), [`linkable-assets.csv`](../seo-audit/linkable-assets.csv), [`master-opportunity-matrix.csv`](../seo-audit/master-opportunity-matrix.csv)  
**Production base:** https://www.expatcopilot.com

---

## Evidence boundary

| Claim type | Status |
|------------|--------|
| Observed backlinks / DR / referring domains | **Not claimed** — unknown without a link index |
| Proprietary surveys, participant counts, endorsements | **None invented** |
| Official statute amounts (IND / Belastingdienst / Government.nl) | **Attributed and cited** — not presented as ExpatCopilot original research |
| Editorial planning seeds (`CITY_COST_SEED`, city scoring profiles) | **Owned editorial estimates** — redistributable with attribution and as-of date |
| Curated official-figures table | **Citation mirror** of primary authorities — downloadable with source URLs |

---

## Shared scaffolding (new)

| Piece | Path | Role |
|-------|------|------|
| Citation UI | `apps/expatlife-web/src/components/authority/AuthorityCitationBlock.tsx` | Subtle reference block: suggested name, updated, sources, methodology, page URL, optional downloads |
| CSV/JSON helpers | `apps/expatlife-web/src/lib/authority/downloadHelpers.ts` | Serialization for datasets we may redistribute |
| Official figures dataset | `…/officialFiguresDataset.ts` + `/api/authority/official-figures` | Machine-readable citation table |
| City cost seed dataset | `…/cityCostSeedDataset.ts` + `/api/authority/city-cost-seed` | Editorial COL midpoints |
| City comparison profiles | `…/cityComparisonProfilesDataset.ts` + `/api/authority/city-comparison-profiles` | Editorial 1–10 scoring attributes |

**Indexation note:** Calculator query strings preserve user state client-side via `router.replace`. Canonical metadata on tool pages remains the clean path (no parameter spam for crawlers).

---

## 1. `/netherlands/official-figures/`

### Assessment (pre → post)

| Dimension | Pre | Post |
|-----------|-----|------|
| Unique value | Strong dated multi-topic table | Same + explicit “canonical citation table” framing |
| Underlying dataset | In-page rows | Same rows + JSON/CSV API |
| Methodology | Implicit | Visible methodology section |
| Sources | Per-row primary URLs | Unchanged + citation block |
| Freshness | Last reviewed stamp | Unchanged (`30 August 2026` / As of August 2026) |
| Shareability | Static page | Downloads for editors/devs |
| Citation value | High | Higher (reference naming + downloads) |
| Embeddability | Table only | Table + machine-readable |
| Journalist / HR / relocator / expat | Already useful | Clearer how to cite and reuse |

### Implemented

- Methodology: sources, maintenance approach, assumptions, limitations, last reviewed
- Canonical wording across tools (HSM / 30% link here)
- `AuthorityCitationBlock` with suggested reference name
- Downloads: `/api/authority/official-figures?format=json|csv`
- Hero links to machine-readable formats

### Not done / boundaries

- No fabricated historical time series beyond existing changelog
- No claim of original research — amounts remain authority-owned

---

## 2. `/netherlands/moving/tools/hsm-salary-checker/`

### Assessment

| Dimension | Notes |
|-----------|-------|
| Unique value | Deterministic IND floor comparison for offers |
| Dataset | `HSM_SALARY_THRESHOLDS_EUR` (2026) mirrored from IND |
| Methodology | Now explicit bullets + threshold table |
| Sources | IND required amounts + link to official figures |
| Freshness | Aligned to official figures last reviewed |
| Shareability | URL state already; **Copy share link** added |
| Citation / HR usefulness | Citation block + structured floors table |
| Download | **Not** redistributing IND amounts as “our dataset” — cite IND / official figures |

### Implemented

- Visible methodology (source, calculation, assumptions, limitations, last reviewed)
- Copy share link for current inputs
- Floors table + official figures cross-link
- `AuthorityCitationBlock` (copilot variant)
- In-tool note pointing at official figures

### Boundaries

- Not an IND decision; reduced criterion only when user claims it may apply
- No CSV of “HSM floors we invented” — floors stay attributed to IND

---

## 3. `/netherlands/taxes/tools/30-ruling-calculator/`

### Assessment

| Dimension | Notes |
|-----------|-------|
| Unique value | Eligibility self-check + allowance + optional net wedge |
| Dataset | `THIRTY_PCT_RULES_2026` (norms/cap/%) — Belastingdienst-oriented planning figures |
| Methodology | Expanded under Official sources |
| Shareability | Was localStorage-only → **URL sync + Copy share** for **active scenario** |
| Citation | Citation block added |
| Download | Existing HTML/print summary retained; no fake “official norms API” |

### Implemented

- `urlState.ts`: serialize/parse primary scenario inputs
- Hydrate from URL when params present; else localStorage
- Debounced `router.replace` for active scenario (compare mode remains local-only)
- Copy share link
- Methodology bullets: norms, assumptions, eligibility boundaries, 2027 preview caveat
- Link to official figures; citation block

### Boundaries

- Multi-scenario compare not encoded in URL (avoids parameter sprawl)
- Indicative tax model remains simplified — not loonbelasting tables
- Not Belastingdienst approval

---

## 4. `/netherlands/money/tools/cost-of-living-calculator/`

### Assessment

| Dimension | Notes |
|-----------|-------|
| Unique value | City × household planning budget with shared seed |
| Dataset | `CITY_COST_SEED` — **editorial midpoints we own** |
| Methodology | Categories + at-a-glance methodology list |
| Freshness | Seed as-of `2026-04` surfaced |
| Shareability | Already had URL + Copy share |
| Citation | Citation block + seed downloads |
| Journalist usefulness | Improves if honesty about editorial seed is clear |

### Implemented

- Methodology at-a-glance (sources, approach, assumptions, limitations, last updated)
- JSON/CSV downloads of city cost seed
- Citation block under methodology SEO section

### Boundaries

- Seed is **not** CBS/NVM; downloads labeled as editorial planning estimates
- Redistribution permitted with attribution + as-of (stated in dataset meta)

---

## 5. `/netherlands/tools/city-comparison/`

### Assessment

| Dimension | Notes |
|-----------|-------|
| Unique value | Weighted multi-city fit with COL bridge |
| Dataset | `NORMALIZED_CITY_PROFILES` (editorial 1–10) |
| Methodology | Existing scoring copy + **on-page profiles table** |
| Shareability | Already had URL + Copy share |
| Citation | Citation block + profile downloads |
| Scoring transparency | Explicit attribute table + download links |

### Implemented

- `CityComparisonProfilesTable` (rent, living, career, expat ease, family, nightlife, calm, commute hub, intl schools, language ease)
- JSON/CSV of profiles (`as of 2026-08`)
- Citation block with methodology pointer to `#how-the-tool-works`

### Boundaries

- Profiles are heuristics, not survey research or official rankings
- Commute labels remain deterministic heuristics, not NS live data

---

## Audience usefulness (Phase 1 summary)

| Audience | Best Phase-1 surfaces |
|----------|------------------------|
| Journalists | Official figures table/downloads; dated HSM/30% norms via figures + tools |
| HR / employers | HSM checker + share link; 30% calculator export + share; official figures |
| Relocation companies | COL seed download; city comparison profiles; COL/city tools |
| Expats | Shareable calculators; transparent assumptions; official figures as truth table |

---

## Embeddability / shareability rules applied

- Preserve meaningful input state in URL where appropriate
- Copy share CTAs where missing (HSM, 30%)
- Canonical paths stay clean for indexing
- No “link to us” outreach copy — citation blocks are reference-oriented

---

## Verification checklist

- [x] Methodology visible on all five assets
- [x] Citation blocks on all five
- [x] Official figures positioned as canonical site reference
- [x] Downloads only for redistributable editorial/curated tables we control rights for
- [x] No fabricated research participants, backlinks, or endorsements
- [x] Lint clean on edited surfaces (IDE diagnostics)

---

## Follow-ups (out of Phase 1)

- HSM floor history by year (latent dataset from audit)
- Origin-country document matrix download
- Payslip decoder glossary companion (audit §4.1)
- Outreach / pitch kits (explicitly out of scope here)
- Confirm robots/canonical behavior for tool query strings in production crawls

---

## Key file map

```
apps/expatlife-web/src/components/authority/AuthorityCitationBlock.tsx
apps/expatlife-web/src/lib/authority/*
apps/expatlife-web/app/api/authority/{official-figures,city-cost-seed,city-comparison-profiles}/route.ts
apps/expatlife-web/src/components/official-figures/OfficialFiguresView.tsx
apps/expatlife-web/src/lib/tools/thirty-percent-ruling/urlState.ts
apps/expatlife-web/src/components/tools/city-comparison/CityComparisonProfilesTable.tsx
```
