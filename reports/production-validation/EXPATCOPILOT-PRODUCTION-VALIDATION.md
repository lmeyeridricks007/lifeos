# ExpatCopilot Production SEO Validation

**Validation type:** Production-only (no code changes)  
**Date:** 2026-09-07  
**Production:** https://www.expatcopilot.com  
**Inputs:** [`../post-remediation/`](../post-remediation/), [`../remediation/`](../remediation/)  
**Method:** Live sitemap fetch, full sitemap URL probes, HTML canonical/H1/link crawl, authority/API spot checks, mobile Lighthouse lab re-run

### Deliverables

| File | Role |
|------|------|
| [`EXPATCOPILOT-PRODUCTION-VALIDATION.md`](./EXPATCOPILOT-PRODUCTION-VALIDATION.md) | This report |
| [`production-url-validation.csv`](./production-url-validation.csv) | Per–sitemap-URL status/canonical/robots/H1 matrix |
| [`production-link-graph.csv`](./production-link-graph.csv) | Production HTML internal edges + target first-hop status |
| [`production-performance.csv`](./production-performance.csv) | Mobile Lighthouse lab metrics vs prior baseline |
| [`remaining-production-issues.csv`](./remaining-production-issues.csv) | Issue reclassification after production validation |

---

## Executive verdict

**Remediation work from `reports/remediation/01`–`09` is not live on production.**

Production still matches the 2026-09-06 post-remediation “PROD AFTER = baseline” state: trailing-slash sitemap locs that all 3xx, canonicals that 308 to non-slash, 19 missing H1s, soft-noindex health/education shells, NG/PH tool 404s in sitemap, ~116 indexable orphans (mostly country×tool), concentrated Explore equity, authority APIs 404, and hub TBT still ~1.4s.

| Question | Answer |
|----------|--------|
| Are remediations genuinely live in production? | **No** |
| Sitemap clean (no unintended slash / 3xx / 4xx / non-indexable)? | **No** |
| Canonical targets clean (0 redirect / 404 / noindex)? | **No** (447 canonical→redirect) |
| Prior 19 missing H1s fixed? | **No** (19/19 still missing) |
| Health + education real indexable hubs? | **No** (Coming soon + noindex) |
| Safe to treat production as post-remediation baseline for GSC content work? | **No** |

---

## 1. Sitemap

**Source:** `GET https://www.expatcopilot.com/sitemap.xml` → 200  
**Artifact:** `_prod-sitemap.xml`

| Check | Result | Pass? |
|-------|--------|------:|
| Total URL count | **455** | n/a |
| Unintended trailing-slash sitemap URLs | **454 / 455** (only `/` is non-slash) | **FAIL** |
| Sitemap URLs returning 3xx (first hop) | **455 / 455** (454×308 strip slash; 1×307 on `/`) | **FAIL** |
| Sitemap URLs returning 4xx (after follow to noslash) | **8** (all Nigeria/Philippines tool `/from/` URLs) | **FAIL** |
| Nigeria/Philippines staged tool URLs excluded | **No** — 8 tool URLs still listed + 404/noindex; origin guides for NG/PH are 200 | **FAIL** |
| `/netherlands/health` in sitemap if launched | **Absent**; route is soft-noindex placeholder (not launched) | **FAIL vs remediation intent** |
| `/netherlands/education` in sitemap if launched | **Absent**; same placeholder pattern | **FAIL vs remediation intent** |
| Every sitemap URL intended INDEXABLE | **No** — 8×404/noindex tools should not be sitemap members | **FAIL** |

**Notes**

- After following the slash→noslash 308, **447** sitemap members resolve to HTTP 200.
- Intended remediation (`01`) was no-slash sitemap locs and zero sitemap 3xx; **not deployed**.

---

## 2. Canonicals

Full matrix: [`production-url-validation.csv`](./production-url-validation.csv) (455 rows; request = noslash form of each sitemap loc).

| Metric | Count | Target | Pass? |
|--------|------:|-------:|------:|
| Pages with canonical | 447 (200s) | — | — |
| `canonical_to_redirect` (canonical URL first hop 3xx) | **447** | 0 | **FAIL** |
| `canonical_to_404` | **0** | 0 | PASS |
| `canonical_to_noindex` | **0** | 0 | PASS |
| Sitemap/canonical path mismatches (noslash compare) | **2** (`/`, `/netherlands/living`) | 0 | **FAIL** |
| Path-level self-canonical (noslash canonical == noslash final URL) | 447 | — | Path match yes; **literal self-canonical no** (canonical still ends with `/` and 308s) |

**Pattern:** Live HTML still emits trailing-slash canonicals. Edge strips slash with 308. That is the same pre-remediation loop: sitemap slash → 308 → page → canonical slash → 308.

---

## 3. H1 validation (prior 19)

Re-tested all 19 URLs from `05-ONPAGE-SEMANTICS-FIX.md`.

| Result | Count |
|--------|------:|
| HTTP 200, indexable (no noindex) | 19 |
| Visible `<h1>` present | **0** |
| Missing H1 | **19** |

**Target (0 missing among those live indexable pages): FAIL.**  
Scaffold `titleAs="h1"` remediation is **not** on production.

---

## 4. Health + education hubs

| Check | `/netherlands/health` | `/netherlands/education` |
|-------|----------------------|--------------------------|
| HTTP status | 200 | 200 |
| Real hub content | **No** — “Coming soon / planned and linked in mega menu” | **No** — same shell |
| Visible H1 | **0** | **0** |
| Indexable | **No** — `noindex, nofollow` | **No** — `noindex, nofollow` |
| Self-canonical (literal) | Canonical ends with `/` → 308 | Same |
| In sitemap | **No** | **No** |
| Links to live child pages | Weak chrome only; not a real hub index | Same |

**A 200 noindex placeholder does NOT count as fixed.** Remediation `09` is **not** live.

---

## 5. Internal linking (production HTML crawl)

**Method:** Extract `<a href>` from HTML of all sitemap-derived noslash URLs (447 indexable + 8×404).  
**Artifact:** [`production-link-graph.csv`](./production-link-graph.csv)  
**Do not use code-model orphan counts** — these are production HTML only.

| Metric | Production value | Post-remediation code claim | Pass vs remediation? |
|--------|-----------------:|----------------------------:|---------------------:|
| Indexable pages | 447 | — | — |
| Indexable orphans (0 inlinks) | **116** | ~9 | **FAIL** |
| Near-orphans (1–2 inlinks) | **15** | — | — |
| Country×tool share of orphans | **112 / 116** | mesh supposed to fix | **FAIL** |
| Internal edges → first-hop 3xx | **932** (16 unique targets) | cleaned aliases | **FAIL** |
| Internal edges → first-hop 4xx | **163** (57 unique targets) | — | **FAIL** |
| Explore / cross-link concentration | **47 targets ≥400 inlinks** | ~7.5 links/page across ~204 targets | **FAIL** |

**Inlink distribution (indexable):** 0: 116 · 1–2: 15 · 3–10: 125 · 11–50: 108 · 51–200: 36 · 201+: 47.

**Country-tool sample related-tool links:** 0 on all 8 spot-checked live `/from/` pages (parent-country links exist; mesh/`03` not live).

Top 404 link targets include staged service/job/living paths (e.g. `/netherlands/services/recruitment-agencies`, CV/interview pages). Top redirect targets include slash/alias paths such as `/netherlands/living/culture-etiquette` (linked from essentially every page).

---

## 6. Country tool pages (spot check)

Sample: 8 live `/netherlands/moving/tools/*/from/{country}` URLs (ZA, IN, US, UK, BR, TR, ID, AU).

| Check | Result |
|-------|--------|
| HTTP 200 | **8 / 8** |
| Indexable (no noindex) | **8 / 8** |
| Self-canonical (path-level) | **8 / 8** (literal canonical still slash→308) |
| Country-specific H1/content | **Yes** (TR uses “Türkiye” spelling) |
| Parent-country link | **8 / 8** |
| Relevant related-tool links | **0 / 8** |

NG/PH tool URLs remain **404 + noindex** and should not be in the sitemap.

---

## 7. Performance (mobile Lighthouse lab)

**Artifact:** [`production-performance.csv`](./production-performance.csv)  
**Important:** Lab only. **Do not claim field CWV improvement from Lighthouse alone.**

| Family | URL | LCP | TBT | CLS | JS transfer | Total transfer | Baseline LCP / TBT |
|--------|-----|-----|-----|-----|-------------|----------------|--------------------|
| nl_hub | `/netherlands` | 3.7s | **1380ms** | 0 | ~550 KiB | ~676 KiB | 2.7s / **1447ms** |
| dating | dating-in-the-netherlands | 7.0s | 1070ms | 0 | ~556 KiB | ~2304 KiB | 6.9s / 154ms |
| banking | best-banks-expats | 6.4s | 5620ms* | 0 | ~562 KiB | ~2240 KiB | 6.5s / 74ms |
| country_tool | moving-checklist/from/south-africa | 5.2s | 4620ms* | 0 | ~553 KiB | ~678 KiB | (no prior) |
| culture | communication-style | 7.6s | 6700ms* | 0 | ~556 KiB | ~796 KiB | (no prior) |

\*TBT spikes vs prior lab baseline look like **lab variance / noise**; not treated as confirmed product regression.  
**Hub TBT remains ~1.4s** — remediation `06` (hub island / defer) is **not** evident. LCP element node was not present in LH JSON export for these runs.

---

## 8. Authority assets

| Asset | Production finding | Remediation `08` live? |
|-------|--------------------|------------------------|
| `/netherlands/official-figures` | 200, indexable, H1 present, official source URLs / “as of” dating | **Partial pre-existing** citation surface; **no** new JSON/CSV dataset links or `/api/authority/*` |
| HSM salary checker | Live at `/netherlands/moving/tools/hsm-salary-checker` (200, indexable); official-source copy present | **No** new methodology/dataset packaging / share APIs from `08` |
| 30% ruling calculator | `/netherlands/taxes/tools/30-percent-ruling-calculator` is **Coming soon + noindex**; guide `/netherlands/taxes/30-percent-ruling` exists | **No** |
| Cost-of-living calculator | 200, indexable; sources language present; **no** `/api/authority/city-cost-seed` | **No** Phase-1 dataset API |
| City comparison | `/netherlands/tools/city-comparison` 200 indexable; `/api/authority/city-comparison-profiles` **404** | **No** |

Authority API probes:

- `/api/authority/official-figures` → **404**
- `/api/authority/city-cost-seed` → **404**
- `/api/authority/city-comparison-profiles` → **404**

---

## 9. Issue classification

Source register: [`../post-remediation/remaining-issues.csv`](../post-remediation/remaining-issues.csv)  
Output: [`remaining-production-issues.csv`](./remaining-production-issues.csv)

Allowed classes used: `RESOLVED_PRODUCTION` | `IMPROVED_PRODUCTION` | `UNCHANGED` | `REGRESSED` | `REQUIRES_GOOGLE_VALIDATION`

| Classification | Count |
|----------------|------:|
| RESOLVED_PRODUCTION | **0** |
| IMPROVED_PRODUCTION | **0** |
| UNCHANGED | **17** |
| REGRESSED | **0** (lab TBT spikes noted but not confirmed) |
| REQUIRES_GOOGLE_VALIDATION | **2** (GSC data gap; CTR heuristics) |

All P0/P1 technical remediations that were “RESOLVED/IMPROVED in code” remain **UNCHANGED on production**.

---

## Deploy signal summary

| Remediation | Expected production signal | Observed |
|-------------|---------------------------|----------|
| 01 Canonical / sitemap no-slash | Sitemap locs without `/`; 0 sitemap 3xx; canonicals without `/` | **Absent** |
| 03 Country-tool linking | Related-tool links; orphans ≪ 100 | **Absent** (112 tool orphans; 0 related-tool links in sample) |
| 04 Explore equity | Diversified targets (~200), lower max inlinks | **Absent** (47 targets ≥400 inlinks) |
| 05 H1 + title splits | 0 missing H1 on 19; differentiated home/NL/living titles | **Absent** |
| 06 Mobile perf | Hub TBT ≪ 1s lab | **Absent** (~1380ms) |
| 07 Country-tool quality | (content quality; not primary deploy gate) | Live landings still render country H1s |
| 08 Authority packaging | APIs + dataset/citation blocks | **APIs 404**; no new packaging |
| 09 Health/education hubs | Indexable hubs in sitemap with real content + H1 | **Soft-noindex shells** |

---

## PRODUCTION TECHNICALLY READY FOR GSC-LED SEO OPTIMIZATION:

# NO

**Why**

1. **Remediations are not deployed** — every hard gate from sitemap, canonicals, H1s, hubs, orphans, Explore equity, authority APIs, and hub TBT still matches the pre-deploy baseline.  
2. **Active technical debt blocks trustworthy GSC work** — 455 sitemap 3xx, 8 sitemap 404s (NG/PH), 447 canonical→redirect, 19 missing H1s, and non-launched noindex hub shells would contaminate coverage / enhancement decisions.  
3. **Internal graph still orphan-heavy** — 116 indexable orphans (112 country tools) means GSC-led content optimization would amplify the wrong URL set.  
4. **GSC exports are still missing** — even after a clean deploy, CTR/striking-distance prioritization remains blocked (`REQUIRES_GOOGLE_VALIDATION`).

**What “ready” would require (validation only — no remediation performed here)**

1. Deploy remediations `01`–`09` (or equivalent) to production.  
2. Re-run this production validation pack until: sitemap 3xx/4xx = 0 for unintended cases; NG/PH tools removed or live; canonical→redirect = 0; 19 H1s present; health/education are real indexable hubs **or** intentionally absent; orphans collapse; authority APIs 200.  
3. Then start GSC-led optimization with page/query exports.
