# ExpatCopilot Master SEO Audit

**Audit type:** Synthesis only — **no remediation implemented**  
**Date:** 2026-09-06  
**Production:** https://www.expatcopilot.com  
**App:** `apps/expatlife-web`  
**Source phases:** `00`–`03`, `05`–`08` (+ inventory/technical/IA/SERP/trust/performance/authority CSVs)

### Master deliverables

| File | Role |
|------|------|
| [`EXPATCOPILOT-MASTER-AUDIT.md`](./EXPATCOPILOT-MASTER-AUDIT.md) | This report |
| [`master-url-action-matrix.csv`](./master-url-action-matrix.csv) | Per-URL actions (632 rows; indexable + staged/noindex/utility) |
| [`master-issue-register.csv`](./master-issue-register.csv) | Cross-cutting issues with remediation *concepts* only |
| [`master-opportunity-matrix.csv`](./master-opportunity-matrix.csv) | Ranked growth opportunities (Top 25 pages + 2 pattern enablers) |

**Evidence rule:** Counts below reconcile inventory, production probes, and phase reports. Intentionally staged/noindex/hidden routes are **not** counted as SEO failures. GSC impression/CTR/position figures are **not invented** — exports were headers-only.

---

# Executive Summary

ExpatCopilot is a **large, tool-rich Netherlands expat information site** with generally solid SSR content, a deliberate publishing calendar, and a strong trust stack. Organic growth is constrained less by “missing hundreds of pages” and more by **sitewide technical URL/canonical churn**, **orphan programmatic country×tool URLs**, **mobile performance**, and **under-productized authority assets**. Search Console performance data was **not available** in this package, so ranking/CTR diagnosis is incomplete.

| Metric | Count | Evidence |
|--------|------:|----------|
| **Total discovered URLs (inventory rows)** | **742** | `site-route-inventory.csv` |
| **Sitemap locs** | **452** | `_prod-sitemap.xml` / inventory `in_sitemap=yes` |
| **True live indexable URLs** | **444** | Sitemap paths with final **200** and not noindex (452 − 8 broken) — `02` quantification |
| **Intentionally hidden / staged** | **141** | `STAGED_NOT_LAUNCHED` / `INTENTIONALLY_STAGED` |
| **Intentional noindex / utility** | **~31** | Placeholders + `/search` + related (`INTENTIONALLY_NOINDEX` / utility) |
| **Unexpected non-indexable (should be live)** | **8** | NG/PH `/from/` tool URLs in sitemap → **404 + noindex** |
| **Redirect URLs (inventory)** | **110** | Config aliases / `REDIRECT` intent (+ sitewide slash 308s on sitemap locs) |
| **Broken URLs (defect)** | **8** | Same NG/PH set (not staged 404s) |
| **Canonical defects** | **~445 pages** | Canonical points at trailing-slash URL that **308s**; self-canonical mismatch — sitewide P1 |
| **Parameter crawl surfaces** | **301** audited | Mostly tool state; low search value; P3 if canonical holds |
| **Orphans (indexable)** | **124** | `orphan-pages.csv` / IA graph |
| **Weakly linked indexable pages** | **Dominant long-tail** | Explore strip concentrates equity; orphans + weak contextual meshes |
| **Content-quality concerns** | **Mixed** | 19 missing H1; ~122 CTR-risk heuristics; template-thin `/from/` risk; no fabricated thinness purge |
| **Potential cannibalization** | **2 title groups (4 URLs)** | Homepage↔NL hub; living hub↔survival guide |
| **High-impression / low-CTR pages** | **Unknown** | GSC exports empty |
| **Striking-distance rankings** | **Unknown** | GSC exports empty |
| **Major authority gaps** | **Structural** | No original research; datasets latent; no verified backlink index; strongest tools under-packaged for citation |
| **Performance issues** | **Mobile LCP/TBT** | 0/16 mobile samples Good LCP; lifestyle/banking Poor; NL hub TBT ~1450ms; CLS excellent; TTFB strong |

**Net:** Technically **operable** for growth, but **not “clean enough” to ignore engineering** before aggressive page publishing. Primary growth lever is **make existing indexable assets discoverable, fast, citeable, and correctly signaled** — not flooding more generic articles.

---

# Site health score

Scores are **dimensional**, not a single average that hides P0/P1 failures. A low dimension blocks aggressive scaling even if others look healthy.

| Dimension | Score | Rationale |
|-----------|------:|-----------|
| **Technical SEO** | **62 / 100** | HTTPS/www OK; SSR metadata present; **sitewide slash/canonical/sitemap 308 conflict** is severe |
| **Indexability** | **78 / 100** | 444 true live pages; gates mostly intentional; **8 accidental sitemap 404s**; 1 registry conflict |
| **Crawl efficiency** | **55 / 100** | Every sitemap loc 3xx first; duplicate slash pairs; orphans rely on sitemap; param noise |
| **Architecture** | **68 / 100** | Clear NL hub + clusters; healthcare/education hub gaps; explore strip skew |
| **Internal linking** | **58 / 100** | 124 orphans; equity concentrated in ~23 explore destinations |
| **Content quality** | **72 / 100** | Many substantial guides/tools; missing H1s; template long-tail uneven; YMYL volume high |
| **Search-intent alignment** | **75 / 100** | Tools/guides generally match intent; some title mismatches; lifestyle vs transactional mix |
| **SERP/CTR effectiveness** | **50 / 100** | Metadata mostly present; long titles + 122 heuristic risks; **no GSC to validate CTR** |
| **Trust/YMYL** | **76 / 100** | Excellent policy stack; honest framing; weak Person/sameAs; large HIGH YMYL surface |
| **Performance** | **58 / 100** | Desktop strong; mobile LCP poor/NI across samples; hub TBT high; CLS/TTFB strong |
| **Authority/linkability** | **64 / 100** | Real tool moat; official-figures asset; no research/datasets published; backlinks unverified |

**Interpretation:** Do **not** average these into a comforting “~65 overall.” Crawl efficiency + internal linking + mobile performance are **growth brakes**. Indexability intent discipline is a **relative strength**.

---

# P0 Critical Issues

### 1. Sitemap advertises 8 Nigeria/Philippines tool URLs that 404 + noindex

| Field | Detail |
|-------|--------|
| **Evidence** | `02-TECHNICAL-SEO-AUDIT.md`; `indexability-audit.csv` `ACCIDENTALLY_NON_INDEXABLE`; production probes |
| **Affected URLs** | `/netherlands/moving/tools/{arrival-planner,document-readiness,first-90-days,moving-checklist}/from/{nigeria,philippines}/` (8) |
| **Templates** | Country-scoped moving tools |
| **Likely SEO impact** | Crawl waste; sitemap quality signal risk; soft-404 / exclusion patterns |
| **Confidence** | High |
| **Root cause** | Country enable/publish gates vs sitemap membership mismatch |
| **Remediation concept** | Drop from sitemap until live **or** enable consistently with parent country guides |
| **Complexity** | Low |
| **Expected impact** | High hygiene / medium traffic |

### 2. (Supporting critical hygiene) Sitewide canonical ↔ redirect loop pattern

Not labeled sole P0 in phase 2 (content still 200), but **master synthesis treats it as critical for crawl trust** alongside the 8 broken locs:

| Field | Detail |
|-------|--------|
| **Evidence** | `canonical-audit.csv` (~445); `redirect-audit.csv` (452 sitemap 3xx) |
| **Affected** | Essentially all public pages |
| **Templates** | Sitewide |
| **Impact** | Conflicting index URL signals; crawl inefficiency; plausible contributor to **Crawled – currently not indexed** |
| **Confidence** | High on mechanism; medium on ranking magnitude |
| **Root cause** | Trailing-slash normalization in code vs non-slash 200 platform default |
| **Remediation concept** | One URL form everywhere (sitemap, canonical, links, redirects) |
| **Complexity** | Medium |
| **Expected impact** | High for crawl efficiency; uncertain ranking lift |

---

# P1 Organic Growth Blockers

1. **~124 indexable orphans** (mostly `/moving/tools/*/from/{country}/` + first-90 variants) — sitemap-discovered, weakly reinforced. Prefer **IMPROVE_INTERNAL_LINKS / ENRICH**, not mass `CONSOLIDATE`/`REDIRECT` (owner preference: improve useful standalone pages).  
2. **ExploreNetherlandsCrossLinks equity concentration** (~23 URLs on every NL page) starves long-tail meshes.  
3. **Mobile LCP never “Good” in 16 lab samples**; lifestyle/banking **Poor**; **NL hub TBT ~1450ms**; visa checker weak tool profile.  
4. **19 missing H1s** (mostly culture).  
5. **Authority assets under-productized** (official figures, HSM/30%/COL/city comparison/payslip) — linkability potential without citation packaging/datasets.  
6. **No GSC exports** — cannot prioritize true CTR/striking-distance work.

Full structured rows: `master-issue-register.csv`.

---

# P2 Growth Opportunities

- Differentiate duplicate titles (homepage/NL hub; living/survival-guide).  
- CTR metadata pass **after** GSC arrives (122 heuristic risks; 125 year-candidate titles).  
- Healthcare/education **live hubs** + child backlinks.  
- YMYL trust deepening (official citations, sameAs if real profiles exist — **never invent experts**).  
- Health-insurance schema alignment.  
- Internal links pointing at redirect aliases (~14).  
- Registry conflict: `working-in-netherlands` staged vs 200 indexable.  
- Publish latent datasets from existing code (COL seed, city scores, figures JSON, document matrix).

---

# P3 Hygiene

- Parameter URL discovery (~293 HTML links) — keep canonicalized.  
- Case-variant inconsistency (`/Netherlands` 404 vs other case paths 200).  
- Soft SERP length-only issues.  
- Affiliate-adjacent comparisons with low moat (not defects; low link expectancy).

---

# Expected / Intentional Exclusions

**Do not treat as failures:**

| Pattern | Count (approx) | Intent |
|---------|---------------:|--------|
| Scheduled guides / future `publishDate` → prod 404 | subset of 141 staged | Calendar |
| `COMING_SOON_ROUTES` | large share of staged | Roadmap |
| Placeholder tools `noindex` | ~27 | Not ready |
| `/search` noindex | 1 | Utility |
| Config redirect aliases excluded from sitemap | ~110 | Legacy aliases |
| Preview hosts / `?preview=` | n/a | Dev |
| HTML links to not-yet-launched 404s | observed in tech audit | Consistent with calendar |

---

# Top 25 Existing-Page Growth Opportunities

Ranked **without GSC** using audit proxies: linkability, search-demand class, business usefulness, internal-link role, ability to improve, and page/template quality signals. **Re-rank when GSC exports exist.**

| Rank | URL | Action | Why (evidence proxy) |
|-----:|-----|--------|----------------------|
| 1 | `/netherlands/official-figures/` | ENRICH | Strongest live STATISTICS_RESOURCE |
| 2 | `/netherlands/moving/tools/hsm-salary-checker/` | ENRICH | Employer/HR citation demand |
| 3 | `/netherlands/taxes/tools/30-ruling-calculator/` | ENRICH | High-intent YMYL calculator |
| 4 | `/netherlands/money/tools/cost-of-living-calculator/` | ENRICH | Classic magnet; latent dataset |
| 5 | `/netherlands/tools/city-comparison/` | ENRICH | Proprietary scoring moat if transparent |
| 6 | `/netherlands/work/tools/payslip-decoder/` | ENRICH | Rare differentiated tool |
| 7 | `/netherlands/taxes/30-percent-ruling/` | OPTIMIZE | Guide ↔ calculator companion |
| 8 | `/netherlands/visa/highly-skilled-migrant/` | OPTIMIZE | Core immigration intent |
| 9 | `/netherlands/moving-checklist-netherlands/` | ENRICH | Checklist + PDF class |
| 10 | `/netherlands/documents-needed-to-move-netherlands/` | ENRICH | University/HR packs |
| 11 | `/netherlands/visa-checker/` | OPTIMIZE | High intent; perf + shareability |
| 12 | `/netherlands/visa-cost-calculator/` | ENRICH | Fee citeability |
| 13 | `/netherlands/taxes/tools/dutch-salary-net-calculator/` | OPTIMIZE | High demand, competitive |
| 14 | `/netherlands/moving-to-the-netherlands/` | IMPROVE_INTERNAL_LINKS | Cornerstone → orphan children |
| 15 | `/netherlands/moving/tools/relocation-cost-estimator/` | ENRICH | Relocator utility |
| 16 | `/netherlands/leaving/tools/repatriation-cost-calculator/` | ENRICH | Fewer competitors |
| 17 | `/netherlands/work/tools/job-offer-comparison/` | ENRICH | HR talent use-case |
| 18 | `/netherlands/taxes/tools/healthcare-allowance-estimator/` | ENRICH | Dated thresholds |
| 19 | `/netherlands/health/health-insurance-comparison-netherlands/` | OPTIMIZE | Seasonal + trust/schema |
| 20 | `/netherlands/cities/amsterdam-vs-rotterdam/` | OPTIMIZE | Strong comparison UX |
| 21 | `/netherlands/` | TECHNICAL_FIX / OPTIMIZE | Entry hub; TBT + slash debt |
| 22 | `/netherlands/moving-to-netherlands-from/` | IMPROVE_INTERNAL_LINKS | Origin hub → tools |
| 23 | `/netherlands/after-arriving-netherlands/` | IMPROVE_INTERNAL_LINKS | first_90 cluster fragmented |
| 24 | `/netherlands/document-readiness-checker/` | ENRICH | Latent country matrix |
| 25 | `/netherlands/work/tools/employment-contract-risk-scanner/` | ENRICH | Differentiated scanner |

**Pattern enablers (not “new articles”):** sitewide slash/canonical fix; country×tool orphan linking + unique deltas (`master-opportunity-matrix.csv` ranks 26–27).

**GSC note:** High-impression/low-CTR and striking-distance lists are **explicitly unavailable**.

---

# Indexation Diagnosis

### Likely drivers of Google’s “Crawled – currently not indexed”

No GSC URL inspection export was in-repo; diagnosis is **pattern inference** from crawl/architecture evidence (confidence: **medium**).

| Pattern / template | Mechanism | Why it fits crawled-not-indexed |
|--------------------|-----------|----------------------------------|
| **Country×tool `/from/{country}/`** | Near-duplicate shells; **orphans**; sitemap-only discovery | Crawled via sitemap; low unique value / low links → soft selection |
| **Trailing-slash dual surfaces** | 308 + canonical conflict on almost every URL | Crawl budget on variants; delayed consolidation |
| **Sitemap 404s (NG/PH)** | Advertised then soft-fail | Exclusion / error clustering near tool-from template |
| **Parameterized tool URLs** | Many discovered `?…` links | Crawled then dropped if canonicalized/thin |
| **Culture/lifestyle long-tail** | Missing H1s; thinner unique data | Lower selection priority vs tools/YMYL pillars |
| **Large similar guide volume** | 444 indexable; many templates | Quality selection among peers — not “hacked” |
| **YMYL without strong Person E-E-A-T** | Org-only authorship | Possible slower trust for competitive queries (not proven) |
| **Intentionally staged 404s** | Calendar | Should appear as **excluded/not found**, not as “want indexed” failures |

**Unlikely primary cause:** robots.txt blocking (allows site; disallows `/api/`, `/_next/`, etc.).

**Group fix orientation:** template-level (slash policy, sitemap membership rules, hub→child linking, unique country fields) — not 124 one-off tickets.

---

# Recommended 90-Day SEO Strategy

**Directional only — no implementation prompts.**

### Expected value comparison

| Lever | Expected value (90 days) | Notes |
|-------|--------------------------|-------|
| **Fixing technical issues** (slash/canonical/sitemap; 8 broken locs) | **Highest near-term** | Unblocks crawl trust for entire site |
| **Improving internal linking** (orphans → hubs/origin/checklists) | **Very high** | Directly addresses discovery→indexation gap |
| **Optimising existing pages** (H1s, titles, tool UX, YMYL sources) | **High** | 444 pages already live |
| **Improving tools / citation packaging** | **High (compounding)** | Authority path without fake research |
| **CTR optimisation** | **Medium until GSC** | Heuristics only today |
| **Strengthening content clusters** (health/education hubs; moving/first_90 mesh) | **Medium–high** | Architecture quality |
| **Link acquisition** | **Medium–high long-term** | Only after citeable assets are packaged; no fabricated DR claims |
| **Publishing additional pages** | **Lowest marginal until above done** | Calendar already full; more thin `/from/` worsens selection |

### Suggested 90-day emphasis (direction)

1. **Days 0–30:** Technical URL consistency + remove/fix 8 sitemap 404s; add GSC exports to re-prioritize.  
2. **Days 30–60:** Internal linking for country tools + moving/first_90 hubs; missing H1s; mobile LCP on worst templates.  
3. **Days 60–90:** Enrich P0 linkable assets (figures, HSM/30%/COL/city/payslip); cluster hubs; selective CTR from GSC — **not** a generic article sprint.

Publishing cadence: **hold or slightly decrease net new indexable templates** until orphans/tech debt absorb; continue shipping **scheduled quality cornerstones** that are unique — do not pause useful calendar items that are truly ready.

---

# Explicit answers

### 1. Is ExpatCopilot technically healthy enough for aggressive SEO growth?

**Partially — not fully.** Aggressive *publishing* without fixing slash/canonical/sitemap consistency and orphan programmatic URLs risks amplifying crawl/selection problems. Aggressive *optimization of existing assets* is justified.

### 2. Is Google discovering the site properly?

**Mostly yes for sitemap members** (452 locs; robots allows). Discovery of long-tail tools is **over-dependent on the sitemap** because contextual links are missing (orphans). Slash 308s waste discovery efficiency.

### 3. Is Google indexing the pages we actually want indexed?

**Largely the right *intent* set is exposed** (444 true live), with **8 false inclusions** (NG/PH 404s) and **1 investigate** staged/live conflict. Whether Google *selects* the long-tail for index is likely weaker than pillars — consistent with crawled-not-indexed risk on orphans/near-duplicates. **Confirm with GSC index coverage.**

### 4. Is content volume currently too low, sufficient, or excessive?

**Sufficient to excessive on programmatic variants; sufficient on pillars.** 444 indexable + 141 staged is not “thin site.” Constraint is **not raw volume**.

### 5. Primary constraint?

**Blend, ordered:** (1) **crawl efficiency / URL signals**, (2) **internal discovery of long-tail**, (3) **authority packaging**, (4) **mobile performance**, (5) **CTR unknown without GSC**. Not “we lack pages.”

### 6. Five biggest reasons organic isn’t growing faster?

1. Sitewide trailing-slash / canonical / sitemap 308 conflict.  
2. Orphan country×tool (and related) URLs weakly reinforced.  
3. Authority/linkable tools not packaged as citeable datasets/references.  
4. Mobile LCP/TBT drag on key templates/entry hub.  
5. Measurement gap (no GSC) + SERP metadata friction on a large subset — *possible* CTR drag unverified.

### 7. Publishing frequency: increase, same, or decrease temporarily?

**Decrease net new low-uniqueness indexable URLs temporarily; keep quality scheduled launches.** Reinvest capacity into linking, tech, tools, and enrichment.

### 8. Next engineering/content sprint focus?

1. **URL form + sitemap integrity** (slash policy; 8 NG/PH locs).  
2. **Hub → country-tool contextual links** + unique country deltas where thin.  
3. **Missing H1s** + duplicate title differentiation.  
4. **Mobile LCP** on image-heavy + hub templates.  
5. **Citation packaging** for official-figures + top calculators.  
6. **Import GSC** and rebuild CTR/striking-distance queues.

---

# Scorecard snapshot (from phase evidence)

| Area | Strength | Weakness |
|------|----------|----------|
| Inventory / gates | Clear staging model | Registry drift (`working-in-netherlands`) |
| Technical | SSR, HTTPS, www | Slash/canonical sitewide |
| IA | Strong pillars via explore/nav | 124 orphans; missing health/edu hubs |
| SERP | Descriptions present | Missing H1; long titles; no GSC |
| Trust | Policy stack; no fake ratings | No authors/sameAs; big YMYL surface |
| Performance | TTFB; CLS; desktop | Mobile LCP/TBT |
| Authority | Real tools + figures page | No research; latent datasets; backlinks unknown |

---

# How to use the CSVs

- **`master-url-action-matrix.csv`:** Operational queue. Prefer `ENRICH` / `OPTIMIZE` / `IMPROVE_INTERNAL_LINKS` over `CONSOLIDATE`/`REDIRECT` unless a page lacks standalone value. `KEEP_HIDDEN` / `LAUNCH_WHEN_READY` = intentional. GSC columns empty by design.  
- **`master-issue-register.csv`:** Cross-cutting backlog of remediation *concepts* only.  
- **`master-opportunity-matrix.csv`:** Ranked bets for existing pages (+ sitewide/pattern enablers).

---

# Audit package index

| Phase | Report |
|------:|--------|
| 0 | `00-AUDIT-METHODOLOGY.md` |
| 1 | `01-SITE-INVENTORY.md` |
| 2 | `02-TECHNICAL-SEO-AUDIT.md` |
| 3 | `03-INTERNAL-LINKING-AND-ARCHITECTURE.md` |
| 5 | `05-SERP-CTR-AUDIT.md` |
| 6 | `06-TRUST-YMYL-SCHEMA-AUDIT.md` |
| 7 | `07-PERFORMANCE-UX-AUDIT.md` |
| 8 | `08-AUTHORITY-LINKABILITY-AUDIT.md` |

---

AUDIT COMPLETE — NO REMEDIATION IMPLEMENTED
