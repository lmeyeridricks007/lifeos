# ExpatCopilot Full Production Review — OLD vs CURRENT

**Audit type:** Production comparison (audit only — no code changes)  
**Production:** https://www.expatcopilot.com  

| Field | Value |
|-------|--------|
| **AUDIT START TIMESTAMP** | `2026-09-07T11:44:34.114646+00:00` |
| **AUDIT COMPLETED** | `2026-09-07T11:45:26.028298+00:00` |
| **Deployment-state reference** | [`../live-deployment-probe/LIVE-DEPLOYMENT-PROBE.md`](../live-deployment-probe/LIVE-DEPLOYMENT-PROBE.md) (probe `2026-09-07T11:36:05Z`) |
| **OLD PRODUCTION baseline** | [`../production-validation/EXPATCOPILOT-PRODUCTION-VALIDATION.md`](../production-validation/EXPATCOPILOT-PRODUCTION-VALIDATION.md) — **comparison only** |
| **CURRENT metrics source** | Fresh network probes this run only (not copied from prior validation CSVs) |

### NEW DEPLOYMENT DETECTED: **YES**

Confirmed by independent live probe + this run’s fresh fetches: no-slash sitemap, noslash canonicals, H1s, country-tool mesh, health/education hubs, authority APIs.

---

### Deliverables (this directory)

| File | Role |
|------|------|
| [`EXPATCOPILOT-FULL-PRODUCTION-REVIEW.md`](./EXPATCOPILOT-FULL-PRODUCTION-REVIEW.md) | This report |
| [`sitemap-validation.csv`](./sitemap-validation.csv) | Fresh sitemap probe |
| [`canonical-validation.csv`](./canonical-validation.csv) | Fresh canonical matrix |
| [`indexability-validation.csv`](./indexability-validation.csv) | Classification |
| [`production-link-graph.csv`](./production-link-graph.csv) | Fresh HTML link graph |
| [`orphan-pages.csv`](./orphan-pages.csv) | Orphans / near-orphans |
| [`onpage-validation.csv`](./onpage-validation.csv) | Fresh on-page matrix |
| [`performance-validation.csv`](./performance-validation.csv) | Fresh **LAB** NL hub Lighthouse |
| [`google-reprocessing-priority.csv`](./google-reprocessing-priority.csv) | Recrawl queue |
| [`remaining-issues.csv`](./remaining-issues.csv) | OLD → CURRENT classifications |

---

## Executive verdict

**CURRENT remediated production is live and materially better than OLD production** on sitemap convention, canonicals, H1s, hubs, country-tool linking, orphans, authority APIs, and hub TBT.

**Remaining P0 on CURRENT live sitemap:** 8 Nigeria/Philippines staged tool `/from/` URLs still listed (404 + noindex). A code fix (`reports/remediation/11-NG-PH-FINAL-SITEMAP-FIX.md`) exists in-repo but is **not yet reflected** in public `/sitemap.xml` (still 456 locs / 8 NG/PH tools as of this audit).

| Question | Answer |
|----------|--------|
| Remediation deployment live? | **YES** (per live probe + fresh checks) |
| OLD vs CURRENT: remediations effective? | **YES — major gates** |
| Sitemap free of staged 404/noindex? | **NO** — 8 NG/PH tools remain |
| Ready for selective Google reprocessing? | **YES** (Tier-1; exclude NG/PH) |
| Ready for GSC-led traffic work? | **YES WITH CONDITIONS** |

---

## OLD PRODUCTION → CURRENT PRODUCTION

OLD figures are from the pre-remediation production validation baseline. CURRENT figures are from **this run’s** fresh HTTP/HTML probes.

| Metric | OLD PRODUCTION | CURRENT PRODUCTION | Class |
|--------|---------------:|-------------------:|-------|
| Sitemap URLs | 455 | **456** | — |
| Sitemap trailing-slash locs | 454/455 | **0** | RESOLVED |
| Sitemap first-hop 3xx | **455** | **1** (`/` soft-307) | RESOLVED* |
| Sitemap 4xx | **8** | **8** (NG/PH tools) | UNCHANGED |
| Sitemap noindex members | 8 (tools) | **8** (same tools) | UNCHANGED |
| Canonical→redirect | **447** | **1** (`/`) | RESOLVED* |
| Unexpected hub noindex | health/education | **0** | RESOLVED |
| Indexable orphans | **116** | **4** | RESOLVED |
| Country-tool orphans | **112** | **0** | RESOLVED |
| Near-orphans | 15 | **14** | UNCHANGED |
| Internal links → 3xx | **932** | **931** | UNCHANGED |
| Internal links → 404 | **163** | **161** | UNCHANGED |
| Missing H1 (prior live set) | **19** | **0** (18 live fixed; 1 URL now 404) | RESOLVED |
| Duplicate titles (indexable) | — | **0** | IMPROVED |
| Explore destinations ≥400 inlinks | **47** | **29** | IMPROVED |
| Country-tool related links (8-country sample) | **0/8** | **8/8** (3 siblings each) | RESOLVED |
| Health hub | noindex shell | **indexable hub** | RESOLVED |
| Education hub | noindex shell | **indexable hub** | RESOLVED |
| Authority APIs | **404** | **200 JSON** | RESOLVED |
| NL hub LCP (lab) | 3.7s | **3.4s** | IMPROVED |
| NL hub TBT (lab) | **1380ms** | **191ms** | IMPROVED |

\*Residual homepage soft-307 prevents a literal zero on sitemap 3xx / canonical-to-redirect.

---

## CURRENT production — fresh findings

### Sitemap (fresh fetch)

- Total locs: **456**; trailing-slash excl. root: **0**
- First-hop: **447×200**, **1×307** (`/`), **8×404** (NG/PH tools)
- NG/PH tool URLs still present (all 404 + noindex in this probe)
- NG/PH **origin guides** remain 200 and appropriately listed

### Canonicals

- Indexable pages: self-canonical noslash
- Canonical→redirect: **1** (homepage soft-307 only)
- Canonical→404 / →noindex among intended 200s: **0**

### Prior 19 H1 set (fresh)

- **18** still live + indexable → **H1 present on all 18**
- `/netherlands/living/beach-towns-netherlands` → **404**, not in sitemap (REGRESSED as URL, not as missing-H1)

### Health / education (fresh)

Both **200**, `index, follow`, self-canonical, H1 present, in sitemap, with child links (11 / 5).

### Country-tool mesh (fresh)

SA / IN / US / UK / BR / TR / ID / AU: parent link + **3 related tools** each → mesh **live**.

### Link graph (fresh HTML)

- Indexable: **447**
- Orphans: **4** (culture pages + government-portals-overview)
- Country-tool orphans: **0**
- Edges → 3xx / 4xx: **931 / 161** (still legacy alias/stub debt)

### Explore equity (fresh)

Destinations with ≥400 unique inlinks: **29** (was 47). Still sitewide-heavy at max **446**.

### Authority (fresh)

`/api/authority/official-figures`, `city-cost-seed`, `city-comparison-profiles` → **200** JSON.

### Performance (LAB only — fresh)

| Page | Perf | LCP | TBT | FCP | SI |
|------|-----:|----:|----:|----:|---:|
| `/netherlands` | 89 | 3.4s | **191ms** | 1.2s | 1.8s |

Do not equate with field CWV.

---

## Google reprocessing

See [`google-reprocessing-priority.csv`](./google-reprocessing-priority.csv).

- **Tier 1:** small set — NL hub, health/education, official-figures, restored-H1 guides, key tools  
- **Tier 2:** country-tool cohort via sitemap recrawl (do not bulk Request indexing)  
- **KEEP_EXCLUDED:** NG/PH tool 404s + staged calculators  
- **NO_REQUEST_NEEDED:** homepage soft-307 until fixed  

---

## PRODUCTION REMEDIATION STATUS:

# PASS WITH MINOR ISSUES

## TECHNICALLY READY FOR GOOGLE REPROCESSING:

# YES

## READY FOR GSC-LED TRAFFIC OPTIMIZATION:

# YES WITH CONDITIONS

### Remaining blockers / conditions

1. **Deploy TECH-P0 NG/PH sitemap exclusion** (remediation `11`) so live `/sitemap.xml` drops the 8 staged 404/noindex tool URLs.  
2. **Fix homepage `/` soft-307** (no `Location`) before treating `/` as healthy.  
3. Treat residual **internal 3xx/4xx HTML links** as crawl-budget noise until aliases/stubs are cleaned.  
4. Use **Tier-1 Request indexing only**; rely on sitemap for country tools.  
5. Import **GSC exports** before CTR/query prioritization.

---

*CURRENT metrics: fresh network requests this run. OLD metrics: baseline comparison only from prior production-validation. Deployment fingerprints: live-deployment-probe.*
