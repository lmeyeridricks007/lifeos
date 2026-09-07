# ExpatCopilot Post-Remediation SEO Audit

**Audit type:** Post-remediation comparison (no further product changes)  
**Date:** 2026-09-06  
**Production observed:** https://www.expatcopilot.com  
**Codebase under review:** `apps/expatlife-web` (remediated branch)  
**Baseline:** [`reports/seo-audit/`](../seo-audit/) (same calendar day)  
**Remediation inputs:** [`reports/remediation/`](../remediation/) `01`–`09` (no `02`)

### Deliverables

| File | Role |
|------|------|
| [`EXPATCOPILOT-POST-REMEDIATION-AUDIT.md`](./EXPATCOPILOT-POST-REMEDIATION-AUDIT.md) | This report |
| [`master-url-action-matrix.csv`](./master-url-action-matrix.csv) | Metric + priority URL/action rows after remediation |
| [`remaining-issues.csv`](./remaining-issues.csv) | Master issue register with BASELINE → CODE → PROD classifications |

---

## Critical framing: two “after” states

Remediation work exists in **code and local validation artifacts**. A fresh production probe on **2026-09-06** shows **production has not absorbed those remediations**.

| Layer | What it represents | Status |
|-------|--------------------|--------|
| **BASELINE** | `reports/seo-audit/*` production probes + inventories | Pre-remediation truth |
| **CODE AFTER** | Branch + remediations `01`–`09` + offline/local validators | Technical remediation largely implemented |
| **PROD AFTER** | Live `www.expatcopilot.com` re-probe this audit | **Still matches baseline** on slash/canonical, H1, hubs, authority APIs |

Therefore:

- **Technical remediation complete** ≠ **Google has reprocessed/reindexed** ≠ **production is fixed**
- Issue classifications use **overall** (conservative), plus explicit **code_after** and **production_after** columns in `remaining-issues.csv`
- Indexation / ranking / CTR outcomes are **REQUIRES_EXTERNAL_VALIDATION** unless proven otherwise

---

## Methods re-run (this audit)

| Audit | Method | Target |
|-------|--------|--------|
| URL inventory | Code `collectLiveSitemapNormalizedPaths()` + refreshed prod sitemap | Code + prod |
| Canonical | Offline `validate-canonical-urls.ts`; prod HTML spot probes | Code + prod |
| Sitemap validation | Loc count/slash shape; NG/PH membership; hub membership | Code + prod |
| Redirect | Prod first-hop status on slash vs non-slash samples | Prod |
| Indexability | Prod NG/PH 404+noindex; hub noindex shells; code LIVE_PATHS | Code + prod |
| Internal-link graph / orphans | `build-ia-orphan-remediation-report.ts` (code model) | Code model |
| Explore equity | `build-explore-equity-report.ts` | Code model |
| Metadata / H1 | Prod HTML sample (`culture/communication-style`) | Prod |
| Template performance | Existing `performance-before-after.csv` / `_lh-after` (local lab) | Local after vs prod baseline |
| Country-tool quality | `country-unique-content-matrix.csv` + composition tests | Code |

**Not claimed:** Full production Lighthouse batch, full SERP metadata re-crawl of all URLs, GSC index coverage, or CrUX field CWV.

---

## Executive verdict

| Question | Answer |
|----------|--------|
| Did remediations address the right P0/P1 themes in code? | **Yes** (canonical, orphans mesh, explore, H1, hub TBT, country-tool quality, health/education hubs, authority packaging) |
| Is production clean enough to trust as “fixed”? | **No — remediations not deployed** |
| Is TECH-P0 (NG/PH sitemap 404s) fixed? | **No** (code sitemap still lists them; prod still 404) |
| Safe to start GSC-led content optimization? | **YES WITH CONDITIONS** (see final section) |

**Issue classification roll-up** (`remaining-issues.csv`, overall):

| Classification | Count |
|----------------|------:|
| IMPROVED | 9 |
| UNCHANGED | 9 |
| REQUIRES_EXTERNAL_VALIDATION | 1 (GSC gap) |
| RESOLVED (overall) | **0** — none fully closed on production |
| REGRESSED | **0** |

Code-layer RESOLVED (not overall): slash/canonical, explore redesign, missing H1 template, cannibalization titles (code), hub TBT (lab), health/education hubs (code).

---

## Explicit metric comparison: BASELINE → AFTER

| Metric | BASELINE | CODE AFTER | PROD AFTER (2026-09-06) | Classification |
|--------|----------|------------|---------------------------|----------------|
| **canonical-to-redirect** | **445** (canonical → trailing slash that 308s) | **0** among convention-valid 200 paths (local historical validation 443/451; offline shape failures **0**) | Still present: e.g. `/netherlands` 200 with canonical `…/netherlands/` | **IMPROVED** (code) / **UNCHANGED** (prod) |
| **sitemap redirects** | **452 / 452** locs first-hop **3xx** | Code sitemap locs **non-slash** (**453** paths; **0** trailing slash) | Prod sitemap **452** locs; **451** with trailing slash → expect **3xx** | **IMPROVED** (code) / **UNCHANGED** (prod) |
| **sitemap 404s** | **8** NG/PH tool-from | **Still 8** in code sitemap | **Still 404 + noindex** (sampled arrival-planner/nigeria) | **UNCHANGED** |
| **indexable orphans** | **124** | Code model **9** (8 = TECH-P0 404 landings; 1 redirect alias) | Not re-proven via live HTML crawl | **IMPROVED** (model) / **REQUIRES_EXTERNAL_VALIDATION** (prod graph) |
| **near-orphans** | **3** | Code model **6** (culture residuals + tools/advanced) | Unverified live | **IMPROVED** orphans overall; near-orphan count **not better** in model |
| **internal redirect links** | **~14** alias hops | Not systematically cleared | Unchanged expectation | **UNCHANGED** |
| **missing H1s** | **19** (culture/living scaffolds) | Template fix → **0** among those 19 | Sample `culture/communication-style` still **no `<h1>`** | **IMPROVED** (code) / **UNCHANGED** (prod) |
| **duplicate titles** | **2** groups (home↔NL hub; living↔survival) | Differentiated + living alias noindex/canonical | Home/NL titles need deploy confirm; living still redirects | **IMPROVED** (code) / **REQUIRES_EXTERNAL_VALIDATION** (prod) |
| **mobile LCP** | 0/16 Good; dating ~6.9s; banks ~6.5s | Local: material transfer cuts (−47% to −63% on image pages); LCP improved but **localhost ≠ CDN** | Not re-run on prod | **IMPROVED** (lab/code) / **REQUIRES_EXTERNAL_VALIDATION** (prod/CrUX) |
| **NL hub TBT** | **~1447–1450 ms** | Local after **~139 ms** | Not re-run on prod | **IMPROVED** (lab) / **REQUIRES_EXTERNAL_VALIDATION** (prod) |
| **country-tool unique-value** | Template-thin risk / uneven | **47 STRONG / 65 ADEQUATE / 0 NEEDS / 0 INSUFFICIENT** (112 live) | Composition tests pass; HTML not re-audited on prod | **IMPROVED** |

### Supporting inventory deltas (code vs prod sitemap)

| Signal | BASELINE | CODE AFTER | PROD AFTER |
|--------|----------|------------|------------|
| Sitemap loc count | 452 | **453** (+ health & education hubs) | **452** (no hub roots) |
| `/netherlands/health` hub | missing / hidden | **live** in LIVE_PATHS + sitemap | **200 + noindex** soft shell, **no hub H1** |
| `/netherlands/education` hub | missing / hidden | **live** | **200 + noindex** soft shell, **no hub H1** |
| Authority JSON API | latent | routes in code | `/api/authority/official-figures` **404** |
| Explore links/page | 23 fixed | **~7.5 avg**; **204** distinct targets (sim) | Not HTML-verified |

---

## Remediation coverage map

| Report | Issue(s) | Code outcome | Prod outcome |
|--------|----------|--------------|--------------|
| `01-CANONICAL-URL-FIX` | TECH-P1 slash/canonical/sitemap | RESOLVED in code | UNCHANGED |
| `03-INTERNAL-LINKING-FIX` | IA-P1 orphans | IMPROVED (model) | Needs deploy + crawl |
| `04-INTERNAL-EQUITY-REBALANCE` | IA-P1 explore | RESOLVED in code sim | Needs deploy |
| `05-ONPAGE-SEMANTICS-FIX` | Missing H1 + title pairs | RESOLVED in code | H1 UNCHANGED on prod sample |
| `06-MOBILE-PERFORMANCE-FIX` | Mobile LCP + hub TBT | IMPROVED / TBT RESOLVED in lab | Needs prod LH |
| `07-COUNTRY-TOOL-QUALITY` | Country×tool uniqueness | IMPROVED (47/65) | Needs spot HTML confirm |
| `08-AUTHORITY-ASSETS` | Citeability packaging | IMPROVED in code | APIs/UI not on prod |
| `09-HEALTH-EDUCATION-HUBS` | Missing hubs | RESOLVED in code | Prod shells only |
| *(none)* | TECH-P0 NG/PH sitemap 404s | **UNCHANGED** | **UNCHANGED** |

---

## Audit-by-audit notes

### 1. URL inventory
- **Baseline:** 742 inventory rows; 452 sitemap locs; 444 true live indexable.
- **Code after:** 453 live sitemap paths (non-slash); hubs included; NG/PH tool-from **still included**.
- **Prod after:** 452 slash locs; hubs absent from sitemap; NG/PH still present.

### 2. Canonical audit
- **Baseline:** ~445 canonical-to-redirect.
- **Code after:** Offline convention OK for all 453 paths; prior local HTTP run documented 0 slash canonicals on 200s.
- **Prod after:** Confirmed pattern intact (`/netherlands` → canonical with trailing slash).

### 3. Sitemap validation
- Shape conflict resolved **only in code**.
- Hygiene failure (**8× 404 locs**) **unresolved**.

### 4. Redirect audit
- Platform slash→non-slash 308 still correct for prod URL serving.
- Problem remains advertising **slash** in sitemap/canonical, not the 308 itself.

### 5. Indexability
- Accidental non-indexable set still **8**.
- New risk if soft hub shells stay noindex after deploy without replacing them — deploy must ship real hub pages.

### 6–7. Internal links & orphans
- Code mesh + explore redesign substantially reduce modeled orphans.
- Residual orphans are mostly **TECH-P0** URLs (should not be linked or sitemapped).
- Near-orphan culture pages remain thin-link; acceptable P3 after deploy verify.

### 8. Metadata / H1
- Code fix is template-complete for the audited 19.
- Production sample proves **not live yet**.

### 9. Template performance
- Lab evidence supports large **TBT** win on NL hub and transfer wins on image-heavy templates.
- Do **not** declare mobile CWV fixed for Google without production LH + CrUX.

### 10. Country-tool quality
- Standalone value classifications are healthy for all **112** live landings.
- EU/EEA/Swiss peers remain flagged for **manual review**, not forced consolidation.
- NG/PH remain out of quality scope (404).

---

## Original issue classifications (summary)

See [`remaining-issues.csv`](./remaining-issues.csv) for full rows.

| issue_id | Overall | Code | Prod |
|----------|---------|------|------|
| TECH-P0-SITEMAP-404-NG-PH | UNCHANGED | UNCHANGED | UNCHANGED |
| TECH-P1-SLASH-CANONICAL-SITEMAP | IMPROVED | RESOLVED | UNCHANGED |
| IA-P1-ORPHAN-COUNTRY-TOOLS | IMPROVED | IMPROVED | REQUIRES_EXTERNAL_VALIDATION |
| IA-P1-EXPLORE-CONCENTRATION | IMPROVED | RESOLVED | REQUIRES_EXTERNAL_VALIDATION |
| IA-P2-MISSING-HUBS | IMPROVED | RESOLVED | UNCHANGED |
| SERP-P1-MISSING-H1 | IMPROVED | RESOLVED | UNCHANGED |
| SERP-P2-CTR-HEURISTIC | UNCHANGED | UNCHANGED | UNCHANGED |
| SERP-P2-CANNIBALIZATION-TITLES | IMPROVED | RESOLVED | REQUIRES_EXTERNAL_VALIDATION |
| TRUST-P2-YMYL-EEAT | UNCHANGED | UNCHANGED | UNCHANGED |
| TRUST-P2-HEALTH-SCHEMA | UNCHANGED | UNCHANGED | UNCHANGED |
| PERF-P1-MOBILE-LCP | IMPROVED | IMPROVED | REQUIRES_EXTERNAL_VALIDATION |
| PERF-P1-HUB-TBT | IMPROVED | RESOLVED | REQUIRES_EXTERNAL_VALIDATION |
| AUTH-P0-LINKABLE-UNDERPRODUCTIZED | IMPROVED | IMPROVED | UNCHANGED |
| TECH-P2-REGISTRY-CONFLICT | UNCHANGED | UNCHANGED | UNCHANGED |
| TECH-P2-INTERNAL-REDIRECT-HOPS | UNCHANGED | UNCHANGED | UNCHANGED |
| TECH-P3-PARAMETER-DISCOVERY | UNCHANGED | UNCHANGED | UNCHANGED |
| GSC-DATA-GAP | REQUIRES_EXTERNAL_VALIDATION | — | — |
| INFO-STAGED / INFO-PLACEHOLDER | UNCHANGED (intentional) | — | — |

**REGRESSED:** none observed.

---

## Technical remediation vs Google reprocessing

| Claim type | Allowed? |
|------------|----------|
| “Code implements no-slash canonicals / hub pages / H1 template / explore redesign” | Yes — evidenced |
| “Production serves the remediated experience” | **No** — contradicted by live probes |
| “Google has dropped slash/canonical conflict / reindexed orphans / improved CWV” | **No** — no GSC/CrUX proof |
| “Sitemap quality issue for NG/PH is closed” | **No** |

---

## Remaining blockers before “clean production”

1. **Deploy** remediations `01`–`09` to production.  
2. **Fix TECH-P0:** remove 8 NG/PH tool-from URLs from sitemap **or** ship real 200 indexable landings.  
3. **Post-deploy validation pack:**  
   - `VALIDATE_CANONICAL_BASE=https://www.expatcopilot.com npx tsx scripts/validate-canonical-urls.ts`  
   - Prod sitemap: zero trailing-slash locs (except `/`); hubs present; NG/PH policy applied  
   - Spot H1 on culture scaffolds; hub H1s live and indexable  
   - Optional: LH mobile on `/netherlands`, dating, best-banks  
4. **Import GSC** page + query exports before CTR/content waves.  
5. After crawl settles, re-run IA link crawl to convert orphan **model** gains into **observed** gains.

---

## SAFE TO PROCEED TO GSC-LED CONTENT OPTIMIZATION

# YES WITH CONDITIONS

### Why not YES
Production still exhibits the baseline **slash/canonical/sitemap 308 conflict**, **missing H1s**, **missing real health/education hubs**, and **8 sitemap 404s**. Optimizing titles/content against GSC while those signals remain live wastes effort and confounds before/after measurement.

### Why not NO
Engineering remediations for the largest P1 growth brakes are **implemented in code** with strong local evidence (canonical convention, orphan mesh model, explore rebalance, hub TBT lab win, country-tool quality, authority packaging, hubs). The site is not “architecturally stuck” awaiting invention — it is **awaiting deploy + hygiene + measurement**.

### Conditions (all required)

1. **Deploy** the remediated branch (or equivalent) to production.  
2. **Close or quarantine TECH-P0** NG/PH sitemap 404s in the same release train.  
3. **Run a short production validation** (canonical CSV + sitemap shape + hub/H1 spot checks).  
4. **Obtain GSC exports** (pages + queries) so CTR/striking-distance work is evidence-led.  
5. Treat CWV/indexation claims as **open** until post-deploy GSC/CrUX confirmation — do not mark them resolved in reporting.

Under those conditions, GSC-led content optimization is the right next wave (titles/snippets, underperforming landing pages, authority outreach packaging on live citeable tools) rather than more speculative template invention.
