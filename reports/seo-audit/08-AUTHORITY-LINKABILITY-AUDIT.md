# Authority & Linkability Audit — ExpatCopilot

**Phase:** Audit only (no outreach, no backlink creation, no product changes)  
**Date:** 2026-09-06  
**Production:** https://www.expatcopilot.com  
**Companion CSV:** [`linkable-assets.csv`](./linkable-assets.csv) (70 rows)

---

## 1. Evidence boundary (critical)

**This audit does not include verified backlink metrics.**

| Claim type | Status in this package |
|------------|------------------------|
| Ahrefs / Moz / Majestic / Semrush referring domains, DR/DA, link velocity | **Not available** in repo or audit evidence — **not invented** |
| Which pages already have external links | **Unknown** without a link index export |
| Competitor backlink gaps | **Not measured** |
| Asset *potential* to earn links | Assessed from **content/tool uniqueness, citeability, audience fit** |

Scores in `linkable-assets.csv` (`citation_value`, `outreach_value`, `competitive_moat`) are **editorial judgments of linkability potential**, not observed link counts.

---

## 2. Executive verdict

ExpatCopilot’s authority upside is concentrated in a **small set of citeable tools and reference tables**, not in the long tail of guides or country×tool URL variants.

**Genuinely link-worthy today (highest potential):**

1. **`/netherlands/official-figures/`** — dated STATISTICS_RESOURCE (HSM floors, IND fees, 30% norms, min wage, eigen risico) with official source URLs  
2. **HSM salary checker**, **30% ruling calculator**, **COL calculator**, **city comparison tool**, **payslip decoder** — differentiated calculators/tools with NL-specific engines  
3. **Moving / documents checklists** (including PDF-capable guide variants) — evergreen practical magnets  

**Structural gap:** There is **no published ORIGINAL_RESEARCH** asset (no primary survey, no longitudinal study, no unique scraped market index presented as research). Official figures and COL city seeds are **curated / editorial planning data**, not original research — and should not be marketed as such.

**Latent moat:** Versioned **public datasets** could be created from data already in code (`CITY_COST_SEED`, city-comparison scoring profiles, official figure rows, country document matrices) — these are flagged as `#dataset-opportunity` rows in the CSV, not live downloadable resources.

---

## 3. Classification model

| `asset_type` | Meaning on this site |
|--------------|----------------------|
| `REFERENCE_CONTENT` | Methodology, sources, ranking policy, tool hubs |
| `CALCULATOR` | Numeric estimate / eligibility math tools |
| `INTERACTIVE_TOOL` | Planners, checkers, scanners, decoders |
| `DATA_RESOURCE` | Downloadable/API datasets (mostly **latent** today) |
| `CHECKLIST` | Action lists / readiness lists (static or generated) |
| `COMPARISON` | Side-by-side city/product/employment comparisons |
| `ORIGINAL_RESEARCH` | Primary research — **none identified live** |
| `STATISTICS_RESOURCE` | Dated figure tables suitable for citation |
| `GUIDE` | Longform educational pages |
| `GENERIC_ARTICLE` | Lifestyle / thin unique-data pages unlikely to earn links |

Portfolio in CSV (includes placeholders + latent rows): calculators 18, interactive tools 14, comparisons 9, guides 9, checklists 6, plus reference/stats/data/generic/research markers.

---

## 4. What is genuinely link-worthy

### 4.1 Tools with backlink potential

| Asset | Why linkable | Caveat |
|-------|--------------|--------|
| Payslip decoder | Rare NL payslip PDF/text decoder with real pipeline | Privacy/YMYL; needs glossary companion for journalists |
| Visa checker | High-intent interactive routing | Crowded; needs shareable/exportable results |
| Job offer comparison | Unique for NL expat offer tradeoffs | HR blogs more than newsrooms |
| Employment contract risk scanner | Differentiated clause spotting | Not legal advice; careful citation framing |
| Document readiness / arrival / first-90 / visa application plan | Useful for relocators & HR onboarding packs | **Utility ≫ citation**; planners rarely get news links |
| Integration / PR / citizenship / dual-citizenship tools | Niche community + advisor use | Accuracy burden; IND remains source of truth |

### 4.2 Calculators with backlink potential

| Asset | Why linkable | Caveat |
|-------|--------------|--------|
| HSM salary checker | Employers/HR constantly need IND floors | Must stay year-synced with IND |
| 30% ruling calculator | Persistent press + employer demand | YMYL; pair with official-figures |
| Cost of living calculator | Classic link magnet class | Seed is **editorial midpoints**, not CBS — honesty is the moat |
| Visa cost calculator | Fee aggregation citeable | Fees change; archive matters |
| Dutch net salary calculator | High demand | Many competitors |
| Healthcare allowance estimator | Thresholds can be cited | Needs dated official rule links |
| Relocation / repatriation cost estimators | Relocator RFP utility | Assumptions must be transparent |
| Rent affordability / childcare / banking / transfer | Secondary | Common patterns / specialist competitors |

### 4.3 Evergreen reference pages

- **Official figures 2026** — strongest live reference  
- **Moving checklist** + **documents needed** (+ PDF paths for checklist-style guides)  
- **HSM** and **30% ruling** guides (as companions to tools, not as unique data)  
- **Sources** / **methodology** — support trust, rarely earn links themselves  

### 4.4 Original datasets that could be created (from existing data)

Already in codebase / page models — **not** yet public citeable downloads:

| Latent dataset | Source in product | Audience |
|----------------|-------------------|----------|
| City cost seed CSV/JSON | `CITY_COST_SEED` in COL calculator | Journalists, relocators, HR |
| City comparison factor table | City-comparison scoring profiles | Location strategy, press |
| Official figures machine-readable | `officialFiguresRows` | Devs, HR systems, citations |
| Origin-country document matrix | Document readiness + country guides | Universities, relocators |
| HSM floor history by year | Extends current thresholds module | HR, journalists |

These are the clearest path to **STATISTICS_RESOURCE / DATA_RESOURCE** authority without fabricating research.

### 4.5 Audience fit

| Audience | Best assets |
|----------|-------------|
| **Universities / international offices** | Documents checklist, HSM guide/checker, arrival/first-90, official figures, document readiness |
| **Employers / HR / mobility** | HSM salary checker, 30% calculator, job offer comparison, payslip decoder, official figures, EU vs non-EU comparison |
| **Relocation companies** | Relocation/repatriation cost tools, moving checklist, document readiness, COL, city comparison, exit readiness |
| **Expat communities** | COL, city comparison, visa checker, checklists, payslip decoder, health insurance comparison |
| **Journalists** | Official figures, 30% / HSM tables, COL **if** methodology published, health premium/eigen risico bands, (future) datasets |

---

## 5. Weak tools (need more utility before outreach)

Treat as **not ready** for authority campaigns:

- All **27 placeholder** registry tools (CSV samples: KNM quiz, buy-vs-rent calculator, health insurance comparison tool, mortgage eligibility, AI benefits finder, etc.)  
- **Affiliate-adjacent comparisons** with low unique methodology (bank comparison, Wise vs Revolut, transfer-cost vs specialist FX sites)  
- **Awareness-only** tools (dual citizenship awareness) — educational, low citation value  
- **Country×tool `/from/{country}/` variants** as a class — mostly template expansions; weak individual magnets unless unique country deltas exist  

Also: tools with weak mobile performance (see Phase 7) can undermine link *usage* even if the idea is linkable (e.g. visa checker lab LCP risk).

---

## 6. Generic articles unlikely to naturally attract links

Examples classified `GENERIC_ARTICLE` or low-moat `GUIDE` in CSV:

- Lifestyle (e.g. dating in the Netherlands, family activities)  
- Broad survival / culture hubs without proprietary data  
- Thin city hubs and many origin-country pages without unique document/legalisation data  
- Service directory hubs  
- Commercial “best banks” style listicles without unique tests  

These may earn **traffic or community shares**; they are poor bets for **authority backlinks**.

---

## 7. ORIGINAL_RESEARCH status

**None identified as a published research asset.**

Do **not** rebrand:

- Official figures → research study  
- COL city seed → national statistics  
- City comparison scores → scientific ranking  

Without primary data collection + methodology + release notes, outreach claiming “original research” would be inaccurate.

---

## 8. Priority map (linkability investment — not outreach execution)

### P0 — Protect / productize citeability

- Official figures page  
- HSM salary checker, 30% calculator, COL calculator, city comparison, payslip decoder  
- Latent: publish COL seed + city-comparison factors as versioned data  

### P1 — Strong secondary magnets

- Visa cost calculator, visa checker, net salary calculator  
- Moving/documents checklists  
- Healthcare allowance estimator, job offer comparison, contract scanner  
- Relocation/repatriation estimators  
- HSM/30% guides as tool companions  
- Latent: official-figures JSON, document matrix, HSM history  

### P2 — Useful, selective

- Planners (arrival, 90 days, visa plan)  
- PR/citizenship timelines, integration checkers  
- Editorial city/employment comparisons  
- Exit readiness  

### P3 — Low natural link expectancy

- Lifestyle/generic articles, service hubs, thin origin variants  
- Banking FX tools vs specialists  
- Placeholders  
- Trust pages (important, not magnets)  

---

## 9. Competitive moat (honest)

| Moat source | Assessment |
|-------------|------------|
| Breadth of NL expat tool suite | **Medium–high** — few competitors match planner+calc+visa+payslip breadth |
| Official-figure curation with dates | **Medium** — reproducible; moat is freshness + packaging |
| Proprietary COL / city scores | **Medium if published transparently**; **low if opaque affiliate-feeling** |
| Payslip decoder rules/pipeline | **High differentiation** among expat content sites |
| Longform guide volume | **Low** for links — content parity is common |
| Brand / verified link equity | **Unknown** (no backlink index in evidence) |

---

## 10. Abandonment of false authority signals

This audit explicitly **does not**:

- Invent referring-domain counts or “DR”  
- Recommend buying links or launching outreach  
- Treat sitemap volume (452 URLs) as authority  
- Treat `/from/{country}/` multiplication as 100+ link assets  

Authority will come from **a few durable, dated, honest, reusable assets** — not from generic article count.

---

## 11. Deliverable schema (`linkable-assets.csv`)

Columns: `url`, `asset_type`, `current_quality`, `unique_value`, `target_audience`, `citation_value`, `outreach_value`, `competitive_moat`, `improvement_needed`, `priority`, `notes`

Includes: all **33 live tools**, key guides/comparisons/checklists/reference pages, latent dataset opportunities, placeholder samples, and an explicit **ORIGINAL_RESEARCH = none** row.

---

## 12. Limitations

1. No third-party backlink crawl or GSC links report in evidence.  
2. Quality ratings are qualitative (code + prior audit phases + production URL roles).  
3. Latent `#dataset-opportunity` / `#history` URLs are **markers**, not live endpoints.  
4. Placeholder routes must not be treated as live assets for any link campaign.
