# ExpatCopilot Fresh Production Review

**Review type:** Audit only — no code changes  
**Production:** https://www.expatcopilot.com  
**Method:** Fresh network requests only (this run). No reuse of prior HTTP responses, sitemap copies, Lighthouse JSON, link graphs, or generated validation CSVs from other report folders. No code-model evidence.

### Timestamps

| Field | Value |
|-------|--------|
| **AUDIT START TIMESTAMP** | `2026-09-07T11:15:35.844181+00:00` |
| **PRODUCTION SITEMAP FETCH TIMESTAMP** | `2026-09-07T11:15:38.038966+00:00` |
| Sitemap URL probe completed | `2026-09-07T11:18:26.638465+00:00` |
| Hubs/authority/params fetch | `2026-09-07T11:19:24.147018+00:00` |
| Mobile Lighthouse batch | `2026-09-07T11:19:30Z`–`11:22:37Z` |

### NEW DEPLOYMENT DETECTED: **YES**

Remediation fingerprints observed on fresh fetches (4/5 strong signals):

| ID | Fingerprint | Result |
|----|-------------|--------|
| A | Sitemap non-trailing-slash locs | **PASS** — 456 locs, **0** trailing-slash |
| B | `/netherlands` non-trailing-slash canonical | **PASS** — `https://www.expatcopilot.com/netherlands` |
| C | Prior culture/dating page has H1 | **PASS** — H1 “Dating in the Netherlands” |
| D | Country-tool related-tool links | **PASS** — 3 sibling tools on ZA checklist |
| E | NG/PH 404 tools absent from sitemap | **FAIL** — **8** still listed |

Because fingerprints A–D are present, this review **continued**. Old `reports/production-validation/` was **not** used as current evidence.

### Deliverables (this directory only)

| File | Role |
|------|------|
| [`EXPATCOPILOT-FRESH-PRODUCTION-REVIEW.md`](./EXPATCOPILOT-FRESH-PRODUCTION-REVIEW.md) | This report |
| [`fresh-sitemap-validation.csv`](./fresh-sitemap-validation.csv) | Per–sitemap-URL probe |
| [`fresh-url-validation.csv`](./fresh-url-validation.csv) | Canonical / indexability matrix |
| [`fresh-link-graph.csv`](./fresh-link-graph.csv) | Production HTML link metrics |
| [`fresh-orphans.csv`](./fresh-orphans.csv) | Orphans + near-orphans |
| [`fresh-onpage-validation.csv`](./fresh-onpage-validation.csv) | Title/H1/meta/canonical |
| [`fresh-performance.csv`](./fresh-performance.csv) | **LAB** mobile Lighthouse |
| [`google-reprocessing-priority.csv`](./google-reprocessing-priority.csv) | Recrawl queue |
| [`remaining-issues.csv`](./remaining-issues.csv) | OLD → FRESH classifications |

---

## STEP 0 — Deployment proof (headers)

Fresh homepage (`/` and cache-busted `/?fresh=…`):

| Header | Observed |
|--------|----------|
| status | **307** (no `Location`) |
| date | Mon, 07 Sep 2026 10:28:26 GMT (cached object) |
| age | ~2830s |
| cache-control | `public, max-age=0, must-revalidate` |
| etag | `"2mzfj6euv8a8i"` |
| x-vercel-cache | HIT |
| x-vercel-id | `fra1::iad1::…` |

Fresh `/netherlands` (cache-busted): **200**, `x-vercel-cache: MISS`, date `2026-09-07T11:15:39Z`.

Fresh sitemap: **200**, 456 `<loc>` entries, **0** trailing-slash paths.

---

## STEP 1 — Fresh sitemap crawl

**Artifact:** [`fresh-sitemap-validation.csv`](./fresh-sitemap-validation.csv) / [`fresh-url-validation.csv`](./fresh-url-validation.csv)

| Metric | Fresh value | Target | Pass? |
|--------|------------:|-------:|------:|
| Total sitemap URLs | **456** | — | — |
| Trailing-slash locs | **0** | 0 | PASS |
| Sitemap **3xx** (first hop) | **1** (`/`) | 0 | FAIL |
| Sitemap **4xx** | **8** | 0 | FAIL |
| Sitemap noindex | **8** (same NG/PH set) | 0 unintended | FAIL |
| Indexable sitemap URLs | **447** | — | — |
| Canonical→redirect | **1** (`/` soft-307) | 0 | FAIL |
| Canonical→404 | **0** | 0 | PASS |
| Canonical→noindex | **0** | 0 | PASS |
| Sitemap/canonical mismatch (path) | **0** among pages with canonical | 0 | PASS |

### NG/PH tool URLs (prior TECH-P0)

All **8** remain in sitemap and are **404 + noindex** — neither absent-as-staged nor live 200 indexable:

- `…/tools/{arrival-planner,document-readiness,first-90-days,moving-checklist}/from/{nigeria,philippines}`

---

## STEP 2 — Previous 19 H1 failures

Fresh retest (`_prior19-h1.csv`):

| Result | Count |
|--------|------:|
| Live indexable with H1=1 | **18** |
| Missing H1 among live indexable | **0** |
| Now **404** / not in sitemap | **1** — `/netherlands/living/beach-towns-netherlands` |

**Expected “19/19 live indexable have H1”:** **met for all URLs that are still live indexable** (18/18). Beach-towns is no longer a live indexable page.

---

## STEP 3 — Health + education

Fresh intent: **launched** (not intentionally staged).

| Check | `/netherlands/health` | `/netherlands/education` |
|-------|----------------------|--------------------------|
| HTTP | 200 | 200 |
| Robots | `index, follow` | `index, follow` |
| H1 | Healthcare in the Netherlands | Education & childcare in the Netherlands |
| Real hub | Yes (11 children) | Yes (5 children; some *future* cards say coming soon) |
| Self-canonical | Yes | Yes |
| In sitemap | Yes | Yes |

---

## STEP 4 — Fresh production link crawl

**Artifacts:** [`fresh-link-graph.csv`](./fresh-link-graph.csv), [`fresh-orphans.csv`](./fresh-orphans.csv)  
HTML extracted from this run’s sitemap body fetches + fresh first-hop probes of 219 non-sitemap outlink targets.

| Metric | Fresh |
|--------|------:|
| Indexable pages | **447** |
| Indexable orphans | **4** |
| Near-orphans (1–2 unique inlinks) | **14** |
| Country-tool orphans | **0** |
| Internal edges → 3xx | **931** (18 unique targets) |
| Internal edges → 4xx | **161** (57 unique targets) |
| Internal edges → staged sitemap NG/PH | **0** observed in HTML mesh |

### Orphans (complete list)

1. `/netherlands/culture/communication-style`  
2. `/netherlands/culture/sinterklaas`  
3. `/netherlands/culture/what-feels-normal-in-dutch-daily-life`  
4. `/netherlands/living/government-portals-overview`

### Country-tool mesh spot-check (fresh HTML)

| Country | Parent | Related tools | Next steps |
|---------|--------|---------------|------------|
| South Africa | YES | 3 | YES |
| India | YES | 3 | YES |
| USA | YES | 3 | YES |
| UK | YES | 3 | YES |
| Brazil | YES | 3 | YES |
| Türkiye (`/from/turkey`) | YES | 3 | YES |
| Indonesia | YES | 3 | YES |
| Australia | YES | 3 | YES |

**Country-tool remediation is live on production.**

---

## STEP 5 — Explore equity

| Metric | Old baseline | Fresh |
|--------|-------------:|------:|
| Destinations ≥400 unique inlinks | **47** | **29** |
| Max unique inlinks | sitewide | **446** |
| Avg non-chrome outlinks / page | — | **34.37** |
| Unique destinations ≥10 inlinks | — | **227** |
| Pages with Explore/cross-link signal | — | **378** |

Contextual Explore/cross-link implementation is **live** and **more distributed than old production**, but global rails still concentrate equity.

---

## STEP 6 — On-page audit (indexable sitemap set)

**Artifact:** [`fresh-onpage-validation.csv`](./fresh-onpage-validation.csv)

| Check | Count |
|-------|------:|
| Missing H1 | **0** |
| Missing title | **0** |
| Duplicate titles | **0** |
| Missing descriptions | **0** |
| Canonical defects (missing / non-self) | **0** |

---

## STEP 7 — Performance (LAB ONLY)

**Artifact:** [`fresh-performance.csv`](./fresh-performance.csv)  
**These are Lighthouse lab results — not field CWV.**

| Family | Perf | LCP | TBT | CLS | FCP | SI | JS transfer | Total |
|--------|-----:|----:|----:|----:|----:|---:|------------:|------:|
| nl_hub | 88 | 3.5s | **174ms** | 0 | 1.2s | 2.4s | ~534 KiB | ~640 KiB |
| cities_hub | 88 | 3.6s | 161ms | 0 | 1.4s | 1.8s | ~535 KiB | ~724 KiB |
| dating | 88 | 3.3s | 204ms | 0 | 1.4s | 2.1s | ~515 KiB | ~745 KiB |
| best_banks | 90 | 3.5s | 112ms | 0 | 1.4s | 1.5s | ~541 KiB | ~745 KiB |
| salary calculator | 90 | 3.5s | 83ms | 0 | 1.3s | 1.6s | ~558 KiB | ~688 KiB |
| city comparison | 90 | 3.5s | 130ms | 0 | 1.2s | 1.2s | ~590 KiB | ~738 KiB |
| moving checklist ZA | 95 | 2.7s | 111ms | 0 | 1.2s | 1.2s | ~534 KiB | ~637 KiB |
| culture communication | 92 | 3.2s | 113ms | 0 | 1.1s | 1.1s | ~530 KiB | ~629 KiB |
| health hub | 99 | 1.8s | 118ms | 0 | 1.3s | 1.3s | ~533 KiB | ~637 KiB |
| education hub | 91 | 3.4s | 72ms | 0 | 1.2s | 2.4s | ~533 KiB | ~636 KiB |

Old NL hub lab baseline: LCP ~3.7s / TBT ~**1380ms** → fresh TBT **IMPROVED**.

---

## STEP 8 — Authority assets (fresh)

| Asset | Fresh state |
|-------|-------------|
| `/netherlands/official-figures` | 200, indexable, methodology + as-of + disclaimer + official links + API/download mentions |
| HSM salary checker | 200, methodology/as-of/disclaimer/official links |
| 30% ruling **guide** | 200 indexable |
| 30% ruling **calculator** | Coming soon + **noindex** (**intentional staged**) |
| Dutch salary net calculator | 200 live |
| Cost-of-living calculator | 200 + `/api/authority/city-cost-seed` **200 JSON** |
| City comparison | 200 + `/api/authority/city-comparison-profiles` **200 JSON** |
| `/api/authority/official-figures?format=json` | **200 JSON** |

APIs verified live because production returns them; not inferred from repo.

---

## STEP 9 — Parameter / duplicate surfaces

Sampled tool query states canonicalize to clean base URLs:

| Pattern | robots | canonical |
|---------|--------|-----------|
| moving-checklist `?from=` / `?step=` | inherit / empty | base tool URL |
| first-90-days `?week=` | inherit | base |
| visa-checker `?nationality=` | inherit | base |
| COL `?city=` | index,follow | base |
| city-comparison `?a=&b=` | index,follow | base |
| visa-cost-calculator `?visa=` | **noindex** | base |

Parameter states remain crawlable but are largely self-canonicalized → residual crawl noise, not duplicate-index primary risk.

---

## STEP 10 — OLD baseline → FRESH production

Old baseline = prior production validation state (pre-remediation deploy: trailing-slash sitemap, canonical→308 loop, missing H1s, soft-noindex hubs, orphans, API 404s, hub TBT ~1.4s).

| Metric | OLD | FRESH | Class |
|--------|----:|------:|-------|
| Sitemap 3xx | **455** | **1** | RESOLVED (residual homepage soft-307) |
| Sitemap 4xx | **8** | **8** | UNCHANGED |
| Canonical→redirect | **447** | **1** | RESOLVED (residual `/`) |
| Unexpected noindex hubs | health/education | **0** | RESOLVED |
| Indexable orphans | **116** | **4** | RESOLVED |
| Country-tool orphans | **112** | **0** | RESOLVED |
| Near-orphans | 15 | **14** | UNCHANGED |
| Internal links → redirects | **932** | **931** | UNCHANGED |
| Internal links → 404 | **163** | **161** | UNCHANGED |
| Missing H1 (prior live set) | **19** | **0** | RESOLVED |
| Duplicate titles | concern | **0** | IMPROVED |
| Explore ≥400 dests | **47** | **29** | IMPROVED |
| NL hub LCP (lab) | 3.7s | **3.5s** | IMPROVED |
| NL hub TBT (lab) | **1380ms** | **174ms** | IMPROVED |
| Health hub | noindex shell | **launched** | RESOLVED |
| Education hub | noindex shell | **launched** | RESOLVED |
| Country-tool linking | absent | **live mesh** | RESOLVED |
| Authority APIs | 404 | **200** | RESOLVED |
| Beach-towns URL | 200 missing H1 | **404** | REGRESSED (URL removed) |
| 30% calculator | staged | staged noindex | INTENTIONAL |

Full register: [`remaining-issues.csv`](./remaining-issues.csv).

---

## STEP 11 — Google reprocessing plan

Technical validation **passes with minor issues** → queue generated: [`google-reprocessing-priority.csv`](./google-reprocessing-priority.csv).

- **TIER_1_REQUEST_INDEXING:** small set (~14) — NL hub, health/education, official-figures, restored-H1 guides, key tools  
- **TIER_2_SITEMAP_ONLY:** country-tool cohort + bulk noslash canonicals via sitemap  
- **KEEP_EXCLUDED:** NG/PH 404s + staged 30% calculator  
- **INVESTIGATE:** homepage soft-307; beach-towns 404  

Do **not** manually Request indexing hundreds of country-tool URLs.

---

## PRODUCTION REMEDIATION STATUS:

# PASS WITH MINOR ISSUES

## TECHNICALLY READY FOR GOOGLE REPROCESSING:

# YES

## READY FOR GSC-LED TRAFFIC OPTIMIZATION:

# YES WITH CONDITIONS

### Conditions / remaining blockers

1. **Remove or launch the 8 NG/PH tool URLs still in `/sitemap.xml` (404 + noindex).**  
2. **Fix homepage `/` soft-307** (no `Location`) before treating `/` as healthy.  
3. **Stale internal 3xx/4xx HTML links remain** (~931 / ~161) — interpret crawl stats cautiously until aliases/stubs are cleaned.  
4. Use **Tier-1 only** for Request indexing; rely on sitemap for the country-tool cohort.  
5. Bring **GSC exports** before CTR/query prioritization.

---

*Audit only. No fixes implemented. All production facts above come from network requests executed during this run.*
