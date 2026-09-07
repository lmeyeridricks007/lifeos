# SERP Presentation & CTR Audit — ExpatCopilot

**Phase:** Audit only (no metadata rewrites)  
**Date:** 2026-09-06  
**Scope:** Live indexable HTML from production sitemap (**444** pages with HTTP 200 after redirects; 8 sitemap URLs still 404 and excluded from metadata scoring)  
**GSC exports:** **Not found** in `/reports/seo-audit/` or the wider repo — opportunity-type classification from Search Console is **not invented**.

### Deliverables

| File | Contents |
|------|----------|
| [`metadata-audit.csv`](./metadata-audit.csv) | Per-URL title, H1, description, OG, JSON-LD, dates, issues |
| [`gsc-page-opportunities.csv`](./gsc-page-opportunities.csv) | **Headers only** — awaiting GSC page export |
| [`gsc-query-opportunities.csv`](./gsc-query-opportunities.csv) | **Headers only** — awaiting GSC query export |

---

## 1. Method

For each sitemap URL (non-slash fetch → final 200 HTML):

| Field | Source |
|-------|--------|
| `<title>` | HTML `<title>` |
| H1 | First `<h1>` (tags stripped) |
| Meta description | `meta name=description` |
| Slug | Final path segment |
| Breadcrumb label | Last `BreadcrumbList` name in JSON-LD |
| Open Graph | `og:title`, `og:description` |
| Structured data | First `name` / `headline` in JSON-LD |
| Dates | `datePublished` / `dateModified` (JSON-LD) + `<time datetime>` |

Heuristics (no GSC):

- Duplicate / missing / length / templated openings  
- Taxonomy-heavy or overly generic cores  
- Slug↔title entity overlap  
- H1↔title mismatch (soft vs problematic)  
- Year presence vs topic type (current year **2026**)  
- Refined **CTR risk**: material signals (missing, duplicate, generic, mismatch, short, or long+another issue)—not length alone  

**Brand suffix:** `| ExpatCopilot` is expected via layout template; analysis uses `title_core` without the brand where relevant.

---

## 2. GSC status

No CSV/TSV/XLSX Search Console exports were present under:

- `/reports/seo-audit/`
- repo-wide paths matching `*gsc*`, `*search-console*`, `*performance*` (content files only)

Therefore these opportunity types were **not** assigned from data:

`HIGH_IMPRESSION_LOW_CTR` · `PAGE_ONE_LOW_CTR` · `STRIKING_DISTANCE` · `HIGH_IMPRESSION_LOW_RANK` · `WINNER` · `DECLINING`

**To unlock prioritization:** drop GSC **Pages** and **Queries** exports into `/reports/seo-audit/gsc/` (or similar) and re-run this phase. Empty opportunity CSVs keep the required schema ready.

---

## 3. Portfolio snapshot (production metadata)

| Metric | Count / note |
|--------|----------------|
| Pages analyzed (200) | **444** |
| Missing meta description | **0** |
| Missing H1 | **19** (P1) |
| Duplicate title groups | **2** groups / **4** pages |
| Duplicate description groups | **2** groups / **4** pages |
| Problematic H1↔title mismatch | **29** |
| Soft H1↔title differences | **~339** (often OK: H1 shorter than SERP title) |
| Overly long title cores (&gt;65 chars) | **205** |
| Very short title cores (&lt;20) | **9** |
| Templated description openings | **66** |
| Year may help CTR (absent) | **125** candidates |
| Year present but likely unnecessary | **1** |
| Stale year in title | **0** |
| JSON-LD `datePublished` present | **163** |
| `dateModified` / visible time | **245** |
| Refined strong CTR-risk heuristic | **122** |
| Soft-only issues (e.g. length) | **226** |
| Clean / INFO | **96** |

---

## 4. Findings by theme

### 4.1 Duplicated titles (P2)

| Title core | URLs |
|------------|------|
| Move to the Netherlands | `/` (redirect entry) and `/netherlands/` |
| Netherlands Survival Guide for Expats | `/netherlands/living/` and `/netherlands/living/survival-guide/` |

Homepage/`/netherlands` overlap is partly structural (home redirects to NL hub) but both can compete in SERPs if `/` remains indexed. Living hub sharing the survival-guide title is a clearer **cannibalization** risk.

Matching duplicate **descriptions** follow the same pairs.

### 4.2 Missing H1 (P1)

**19** pages render no `<h1>` in initial HTML (mostly `/netherlands/culture/*` plus a few living URLs). Titles/meta still exist, but SERP/on-page alignment and accessibility suffer. Examples:

- `/netherlands/culture/communication-style/`
- `/netherlands/culture/sinterklaas/`
- `/netherlands/culture/dutch-language-basics/`
- `/netherlands/living/government-portals-overview/`
- `/netherlands/living/rental-market/`

Several of these were also **orphans** in the IA audit — compounding discovery + presentation weakness.

### 4.3 Titles vs intent / entity

- Most money/visa/tool titles **do** include the searchable entity (visa checker, cost of living calculator, city names).
- Pattern: many tools lead with **“Netherlands …”** branding (`Netherlands Visa Checker`, `Netherlands Cost of Living Calculator 2026`). That is coherent brand taxonomy, not empty generics—but it can push **intent keywords** rightward and increase truncation.
- **1** weak slug↔title entity alignment flagged; not a sitewide entity failure.
- Soft H1≠title is common (title packs modifiers for SERP; H1 is cleaner). **29** cases have low token overlap and deserve review (trust pages like Contact “Contact Us” vs “Contact ExpatCopilot” are mild).

### 4.4 Length & CTR presentation

- **205** title cores exceed ~65 characters → high **truncation** risk in SERPs once `| ExpatCopilot` is added (**274** full titles &gt;75).
- **9** very short cores — usually thin/hub labels.
- Long titles alone were **not** treated as P1; combined with other issues they feed the refined CTR-risk set (**122**).

### 4.5 Descriptions

- No missing descriptions on 200 pages (good).
- **66** open with templated phrases (“Practical guide…”, “Everything you need…”, “Learn how…”).
- **124** descriptions are long (&gt;170 chars) — Google may rewrite snippets anyway.
- Duplicate descriptions tied to the same two title-collision pairs.

### 4.6 Year in titles (2026)

| Pattern | Count | Guidance |
|---------|------:|----------|
| Year-sensitive topic, no year in title | **125** | Candidates where **2026** *may* help CTR (salary, COL, tax, insurance, fees, allowances)—**not** a mandate to stamp every URL |
| Year present, likely fine | **16** | e.g. calculators / official figures already dated |
| Year present, likely unnecessary | **1** | Evergreen-leaning page with year |
| Stale year (pre-2026) in title | **0** | |

**Do not** artificially add year to etiquette, culture, dating, “what is”, or pure how-to evergreen guides.

### 4.7 Open Graph & structured data

- OG titles usually mirror document titles; **14** soft OG≠title diffs.
- JSON-LD `name`/`headline` often present on guides/tools; not universally aligned 1:1 with `<title>` (expected when schema uses short names).
- Date signals appear on a minority via `datePublished` (**163**); modified/visible times more common (**245**). Uneven date presentation → inconsistent SERP date eligibility.

### 4.8 Breadcrumb labels

- BreadcrumbList last-node labels generally track the page topic where schema exists.
- Not a primary CTR lever vs title/description; no mass breadcrumb spam detected.

---

## 5. Likely poor CTR (heuristic only — no GSC)

Without impressions/CTR, prioritize review of pages that combine:

1. Duplicate title/description, or  
2. Missing H1, or  
3. Generic/taxonomy-only core, or  
4. Long title **plus** templated desc / year gap / mismatch  

Filter `metadata-audit.csv` where `ctr_risk_refined=yes` (**122** rows) and `severity` ∈ {P1,P2}.

**Cannot confirm** `HIGH_IMPRESSION_LOW_CTR` or `PAGE_ONE_LOW_CTR` until GSC is provided.

---

## 6. Prioritization framework (ready for GSC)

Once exports exist, map as specified:

| Priority | Rule |
|----------|------|
| **P1** | High impressions + position 3–15 + abnormally poor CTR |
| **P1** | High impressions + position 5–20 + clearly improvable title/content |
| **P2** | Position 11–30 with strong demand |
| **P3** | Low-impression exploratory |

Until then, metadata-only P1s are primarily **missing H1** (19) and any indexed **coming soon** SERP strings (0 found on live 200 set).

---

## 7. What looks healthy

- Universal meta descriptions on live pages  
- Consistent brand suffix  
- Tool/visa/city titles usually contain the query entity  
- No widespread stale years  
- Anchor/OG systems generally wired  
- Few true duplicate-title collisions (2 groups)

---

## 8. Quantification

| Item | Value |
|------|------:|
| Live pages audited | 444 |
| GSC page opportunities scored | **0** (no data) |
| GSC query opportunities scored | **0** (no data) |
| P1 metadata issues (refined) | 19 |
| P2 | 103 |
| P3 | 226 |
| INFO / clean | 96 |

---

## 9. Progress / blockers

- SERP field audit complete against production.  
- **Blocker for CTR opportunity CSVs:** supply GSC Pages + Queries exports.  
- **No metadata was rewritten** in this phase.
