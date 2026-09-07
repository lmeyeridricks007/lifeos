# Internal Linking & Information Architecture Audit — ExpatCopilot

**Phase:** Audit only (no internal-link changes)  
**Date:** 2026-09-06  
**Production:** https://www.expatcopilot.com  
**Graph evidence:** crawl of **444** live indexable HTML pages → **43,289** internal `<a>` edges; nav/footer + `ExploreNetherlandsCrossLinks`; relatedGuides/exploreNext from page models (`_ia-code-links.json`)

### Companion CSVs

| File | Rows |
|------|-----:|
| [`internal-link-graph.csv`](./internal-link-graph.csv) | 452 |
| [`orphan-pages.csv`](./orphan-pages.csv) | 127 |
| [`topic-clusters.csv`](./topic-clusters.csv) | 30 |
| [`hub-quality.csv`](./hub-quality.csv) | 29 |

---

## 1. Method notes

- **Inlinks** counted from production HTML (followed to final 200). Paths normalized to lowercase trailing-slash form for graph keys.
- **Navigation / sitewide** separated from **contextual**:
  - Mega-nav + footer hrefs (code)
  - `ExploreNetherlandsCrossLinks` in `app/netherlands/layout.tsx` (**23** URLs injected on every Netherlands page)
  - Empirical chrome: destinations linked from ≥70% of crawled pages
- **Contextual inlinks** = unique linking pages after excluding nav/sitewide/explore classifications.
- **Crawl depth** = BFS along indexable-only outlinks from `/netherlands/` (effective home) and from each cluster’s resolved hub.
- **Orphan** = zero inlinks in the crawl graph. **Near-orphan** = ≤1 contextual inlink and not a sitewide target.
- Staged/noindex inventory URLs are not treated as linking failures when absent from the indexable graph.
- Anchor quality scored on crawled anchor text (generic phrases like “click here” / “read more” = non-descriptive).

This is a **semantic architecture** read—not a mandate to spray links.

---

## 2. How topical structure actually presents

Google/users encounter a **Netherlands hub** (`/` → `/netherlands`) plus:

1. **Primary mega-nav** (Move / Living / Money / …) — curated, status-filtered  
2. **Sitewide “Explore more on ExpatCopilot” strip** — fixed set of ~23 destinations on all `/netherlands/*` pages  
3. **In-page relatedGuides / exploreNext** — editorial, page-model driven (~753 code pairs)  
4. **Programmatic country × tool surfaces** — `/moving/tools/{tool}/from/{country}/` — largely **not** woven into contextual body links  

Major clusters **are** recognizable (moving, visas, cities, tax, banking, services, etc.), but authority is **skewed**: a small explore/nav set absorbs sitewide equity while large programmatic sets sit nearly unlinked.

---

## 3. Cluster map (discovered, not forced)

| Cluster | Indexable pages | Hub (resolved) | Hub strength | Architecture | Orphans |
|---------|----------------:|----------------|--------------|--------------|--------:|
| moving | 96 | `/netherlands/moving-to-the-netherlands/` | strong* | **fragmented** | 90 |
| netherlands_other | 39 | (weak / catch-all) | weak | weak | 1 |
| first_90_days | 34 | `/netherlands/after-arriving-netherlands/` | moderate | **fragmented** | 30 |
| culture_life | 32 | survival-guide | strong* | good | 3 |
| country_origin | 31 | `/netherlands/moving-to-netherlands-from/` | moderate | mixed | 0 |
| cities | 22 | `/netherlands/cities/` | strong* | good | 0 |
| working | 22 | working-in-the-netherlands | strong* | good | 0 |
| tax | 22 | how-taxes-work… | strong* | good | 0 |
| banking | 20 | best-banks-expats | moderate | mixed | 0 |
| visas_immigration | 16 | visas-residency | strong* | good | 0 |
| services | 16 | `/netherlands/services/` | strong* | good | 0 |
| trust_legal | 12 | `/about/` | strong* | good† | 0 |
| healthcare | 12 | *no clean live hub* | **missing_hub** | weak | 0 |
| families | 9 | family-activities | moderate | mixed | 0 |
| housing | 9 | `/netherlands/housing/` | strong* | good | 0 |
| practical_life | 8 | address registration | strong* | good | 0 |
| transport | 7 | getting-around | strong* | good | 0 |
| citizenship_pr | 6 | permanent-residence | moderate | mixed | 0 |
| tools_calculators | 6 | `/tools/` | strong* | good | 0 |
| education | 5 | *hub URL not live* | **missing_hub** | weak | 0 |
| + thinner: integration, salaries, leaving, cost_of_living, utilities, dating_social, 30% ruling, comparisons | | | | | |

\*“Strong” often reflects **sitewide explore/nav**, not deep editorial hub→child meshes.  
†Trust pages are footer-ubiquitous (high href_inlinks, **0** contextual)—chrome, not topical hubs.

Full metrics: `topic-clusters.csv`.

---

## 4. Sitewide / dominant link concentration

### `ExploreNetherlandsCrossLinks` (every NL page)

Injects the same ~23 links (move pillar, visas orientation, working, several job/permit URLs, cities hubs, survival guide, living basics, services, tools).  

**Effect:** those URLs show **navigation_inlinks ≈ page-count** and dominate raw `href_inlinks`. This is **deliberate crawl-path engineering**, but it:

- Over-concentrates authority on a fixed shortlist  
- Mixes **pillar** destinations with **narrow** guides (e.g. layoffs, TWV, resigning) at equal sitewide weight — semantically uneven  
- Does **not** substitute for cluster-internal meshes (country tools remain orphans)

### Footer / trust chrome

`/about/`, `/contact/`, legal pages: **444/444** pages link them; **0 contextual**. Expected for trust URLs; not topical IA.

### Not “spam,” but not deliberate semantic architecture either

The explore strip is closer to a **global utility nav** than spam, yet it is the main reason many “hubs” look strong while **programmatic children** stay invisible.

---

## 5. Orphans & weak linking

From `orphan-pages.csv`:

| Type | Count | Interpretation |
|------|------:|----------------|
| True orphans (0 inlinks) | **124** | Almost all programmatic |
| Near-orphans (≤1 contextual) | **3** | Sparse editorial |

**Orphan composition**

- **~90** under `moving`: almost entirely `/netherlands/moving/tools/{arrival-planner\|document-readiness\|first-90-days\|moving-checklist}/from/{country}/`  
- **~30** under `first_90_days`: overlapping country-scoped first-90 / related tool variants classified into that cluster  
- **4 editorial orphans:**  
  - `/netherlands/culture/communication-style/`  
  - `/netherlands/culture/sinterklaas/`  
  - `/netherlands/culture/what-feels-normal-in-dutch-daily-life/`  
  - `/netherlands/living/government-portals-overview/`

**Country origin guides** (non-tool) are **not** orphans (median contextual inlinks healthy)—the gap is **guide ↔ country-tool** wiring, not the origin articles themselves.

**124 pages unreachable via BFS from `/netherlands/`** aligns with the orphan set (no path through indexable links).

Sitemap-listed NG/PH tool-from URLs that **404** remain P0 indexability issues (prior report); they also have no meaningful link graph role.

---

## 6. Hub quality highlights

See `hub-quality.csv`.

| Finding | Clusters / evidence |
|---------|---------------------|
| Hub missing from live indexable set | **healthcare** (no `/health/` index; content lives at `/health/*` + `/health-insurance-netherlands/`), **education** (chosen hub not live) |
| Hub links to few children | **moving** (2/96), **first_90_days** (2/34), healthcare/education (0) |
| Children often link “back” numerically | Inflated where explore-block lists the hub—not proof of body-level parent links |
| Pages >3 clicks from hub | **culture_life** (9 pages) |
| Sitewide excessive inlinks | Most explore-listed hubs (`moving`, `cities`, `visas`, `working`, `services`, …) |
| jobs_career hub | Live finding-jobs URL exists but **0** cluster children linked from/to hub in graph (cluster pages may sit under `working` rules) |

**Cities** and **services** show healthier hub↔child reciprocity in the crawl (hub outlinks cover the set).

---

## 7. Depth & hierarchy

- Most non-orphan indexable URLs are within **1–3** clicks of `/netherlands/` **if** they sit on nav/explore paths.  
- **9** pages are **>3 clicks** from their cluster hub (culture_life deep pages).  
- Programmatic orphans are **infinite / unreachable** in the BFS sense (blank `crawl_depth_home`).  
- BreadcrumbList JSON-LD is present on many guides/tools; breadcrumbs reinforce hierarchy where templates emit them, but do not fix missing inlinks to orphans.

---

## 8. Cross-cluster & related-content

- Editorial **relatedGuides / exploreNext** (~753 code pairs) are the right *kind* of semantic linking (descriptive labels in models).  
- Cross-cluster outlink volume is high on large clusters (moving, cities)—expected for expat journeys (visa↔housing↔banking).  
- **Useful gaps (opportunities, not bulk-link mandates):**  
  - Origin-country guides → matching `/from/{country}` tools (and reverse)  
  - Healthcare articles → a single clear health hub / comparison pillar  
  - Culture orphans → survival-guide / life hub  
  - Tax ↔ 30% ruling ↔ salary pages (thin but high-intent) with reciprocal hub links  
  - Tools hub → live calculators beyond explore’s short list  

Avoid indiscriminate cross-linking of all country×tool permutations from every page.

---

## 9. Anchor text

Global descriptive-anchor ratio ≈ **0.985** on sampled internal anchors — generally strong (topic phrases, not “click here”). Explore-block anchors are descriptive (“Move to the Netherlands”, “TWV work permit”, etc.). No widespread generic-anchor problem detected.

Links through **redirect aliases** appear in outlink tallies on some pages (`links_to_redirects` in graph CSV); volume is secondary to the orphan/sitewide issues.

---

## 10. Architecture verdict (audit)

| Question | Assessment |
|----------|------------|
| Can users/Google see major topics? | **Yes** for core pillars via nav + explore strip |
| Is authority distributed sensibly? | **No** — heavy sitewide concentration + large unlinked programmatic layer |
| Clear hubs per cluster? | **Mixed** — cities/services/visas clearer; healthcare/education weak; moving hub strong in chrome but weak to programmatic children |
| Orphans? | **Yes** — primarily country-tool matrix + a few culture URLs |
| Programmatic link spam? | **Not classic spam**; explore strip is global and somewhat **indiscriminate in topical weight** |
| Child→parent linking | Strong where explore lists parent; weak as intentional body IA for deep/programmatic URLs |

---

## 11. Quantification snapshot

| Metric | Value |
|--------|------:|
| Indexable URLs in graph focus | 452 |
| Live HTML pages crawled | 444 |
| Internal edges | 43,289 |
| Orphan pages | **124** |
| Near-orphan pages | **3** |
| Explore-block targets | **23** |
| Pages >3 clicks from hub | **9** |
| Unreachable from `/netherlands/` BFS | **124** |
| Topic clusters scored | **30** |
| Descriptive anchor ratio | **~98.5%** |

---

## 12. Progress

Completed IA/internal-link graph, cluster and hub scoring, orphan identification. **No link graph or content changes were made.**

Later phases can prioritize a *small* set of semantic link patterns (hub definitions, country-guide↔tool bridges, healthcare hub clarity)—still audit/planning until you approve implementation.
