# Remediation: SERP-P1-MISSING-H1 + SERP-P2-CANNIBALIZATION-TITLES

**Issue IDs:** SERP-P1-MISSING-H1, SERP-P2-CANNIBALIZATION-TITLES  
**Date:** 2026-09-06  
**Scope:** Deterministic on-page semantics only (no broad CTR title rewrite; no GSC-driven changes)  
**App:** `apps/expatlife-web`  
**Sources:** `reports/seo-audit/05-SERP-CTR-AUDIT.md`, `metadata-audit.csv`  
**Note:** `search-intent-overlap.csv` was not present in the repo; intent judgment uses the SERP audit + route/code behavior.

---

## PART A — Missing H1 (19 pages)

### Root cause

All 19 URLs render through shared `ClusterTopicScaffold`, which passed `entry.title` into `Section` as `title`.

`Section` always rendered that title as **`<h2>`**, so pages had a visible page title but **no `<h1>`**.

Affected routes:

- `app/netherlands/culture/[slug]/page.tsx`
- `app/netherlands/living/[slug]/page.tsx` (cluster scaffolds such as rental-market / government-portals-overview)

### Template / code changes

| File | Change |
|------|--------|
| `components/ui/section.tsx` | Added optional `titleAs?: "h1" \| "h2"` (default `h2`) so section titles stay mid-page H2s unless opted in |
| `src/components/content/ClusterTopicScaffold.tsx` | Passes `titleAs="h1"` so the existing visible title is the primary semantic heading |

No per-page copy changes. H1 text = existing `entry.title` (already used as the visible heading and meta title core). Design (typography/spacing) unchanged.

### Affected URLs (old H1 → new H1)

| URL | Old H1 | New H1 |
|-----|--------|--------|
| `/netherlands/culture/communication-style/` | *(missing)* | Communication style in the Netherlands |
| `/netherlands/culture/dutch-language-basics/` | *(missing)* | Dutch language basics |
| `/netherlands/culture/dutch-social-calendar/` | *(missing)* | Dutch social calendar |
| `/netherlands/culture/health-system-culture-basics/` | *(missing)* | Health system culture basics (Netherlands) |
| `/netherlands/culture/dutch-traditions/` | *(missing)* | Dutch traditions |
| `/netherlands/culture/family-and-school-culture/` | *(missing)* | Family and school culture in the Netherlands |
| `/netherlands/culture/kings-day/` | *(missing)* | King's Day in the Netherlands |
| `/netherlands/culture/learning-dutch/` | *(missing)* | Learning Dutch in the Netherlands |
| `/netherlands/culture/national-holidays/` | *(missing)* | National holidays in the Netherlands |
| `/netherlands/culture/practice-scenarios/` | *(missing)* | Dutch practice scenarios |
| `/netherlands/culture/hierarchy-and-flatness/` | *(missing)* | Hierarchy and flatness in Dutch organizations |
| `/netherlands/culture/time-and-boundaries/` | *(missing)* | Time and boundaries in the Netherlands |
| `/netherlands/culture/sinterklaas/` | *(missing)* | Sinterklaas in the Netherlands |
| `/netherlands/culture/invitations-and-planning/` | *(missing)* | Invitations and planning in Dutch social life |
| `/netherlands/culture/what-feels-normal-in-dutch-daily-life/` | *(missing)* | What feels normal in Dutch daily life |
| `/netherlands/culture/meetings-and-consensus/` | *(missing)* | Meetings and consensus in Dutch workplaces |
| `/netherlands/culture/written-follow-ups/` | *(missing)* | Written follow-ups in Dutch work culture |
| `/netherlands/living/government-portals-overview/` | *(missing)* | Government portals overview (Netherlands) |
| `/netherlands/living/rental-market/` | *(missing)* | Rental market in the Netherlands |

**Titles for these 19 pages:** unchanged (H1 now matches the existing title core).

### Remaining missing H1 count

**0** among the audited 19 live indexable scaffold pages (template-level fix covers the set). Sitewide re-crawl not re-run in this remediation; no other missing-H1 URLs were listed in the SERP audit.

---

## PART B — Duplicate titles (2 pairs)

### Pair 1: Homepage ↔ Netherlands hub

| | Homepage `/` | Netherlands hub `/netherlands` |
|--|--------------|--------------------------------|
| **Role** | Brand/product entry | Country relocation hub |
| **Current behavior** | Server redirect → `/netherlands` | Renders portal with H1 “Move to the Netherlands with a clear plan” |
| **Intent** | Distinct in purpose (brand vs country hub) | Distinct |
| **Overlap** | **Material in practice** because `/` does not render its own body — redirect-follow audits see the hub document for both URLs |

**Decision:** Do **not** consolidate routes further (redirect already aliases home → hub). Differentiate **source metadata** so brand vs hub positioning is clear when `/` metadata is evaluated before/without treating them as one document. Do **not** invent a second homepage body in this pass.

| Field | Old | New |
|-------|-----|-----|
| `/` title | `ExpatCopilot \| Move to the Netherlands` (absolute) | `ExpatCopilot \| Guides and tools for Netherlands relocation` (absolute) |
| `/` description | Practical relocation platform with guides, tools, and routes… | ExpatCopilot helps you plan a Netherlands move with practical guides, calculators, and country-specific routes… |
| `/netherlands` title | `Move to the Netherlands` → `… \| ExpatCopilot` | **Unchanged core:** `Move to the Netherlands` |
| `/netherlands` description | Practical relocation platform with guides, tools, and country-specific routes… | Netherlands relocation hub: step-by-step guides, planning tools, city routes, and origin-country paths… |
| `/` H1 | N/A (redirect; follow shows hub H1) | Unchanged hub H1 after redirect |
| `/netherlands` H1 | Move to the Netherlands with a clear plan | Unchanged |

**Code:** `app/page.tsx`, `packages/content/src/home.ts`, `app/netherlands/page.tsx`

**Residual:** A crawl that **follows** `/` → `/netherlands` will still report the hub `<title>` for both URL labels. That is redirect architecture, not two competing bodies. Fixing that would require a real homepage document or stricter home de-index/canonical policy — out of this semantics-only pass.

---

### Pair 2: Living hub ↔ Survival guide

| | Living root `/netherlands/living` | Survival guide `/netherlands/living/survival-guide` |
|--|-----------------------------------|------------------------------------------------------|
| **Role** | Living pillar / cluster entry | First-weeks daily-life field guide |
| **Current behavior** | `permanentRedirect` → survival-guide | Full indexable guide |
| **Intent** | **Conceptually distinct** (hub index vs field guide) | Distinct |
| **Overlap** | **Implemented as an entry alias today** — redirect-follow made titles identical |

**Decision:** Intents are distinct enough that we **do not** merge content or delete the survival guide. We also **do not** rebuild a full Living hub page in this pass. We **do** reposition the living root as an alias (distinct title/description + `noindex` + canonical → survival-guide) and keep the survival guide as the indexable document with a tightened description.

| Field | Old | New |
|-------|-----|-----|
| `/netherlands/living` title | *(after follow)* Netherlands Survival Guide for Expats | `Living in the Netherlands for expats` (+ brand template) |
| `/netherlands/living` description | *(after follow)* Practical Netherlands survival guide… | Daily-life orientation… start from the Living Survival Guide hub |
| `/netherlands/living` robots/canonical | inherit / none on redirect page | `noindex, follow`; canonical → `/netherlands/living/survival-guide` |
| `/netherlands/living/survival-guide` title | Netherlands Survival Guide for Expats | **Unchanged** |
| `/netherlands/living/survival-guide` description | Practical Netherlands survival guide for expats: … | First-weeks field guide for expats… bookmarkable arrival sequence |
| Survival H1 | Netherlands Survival Guide for Expats | Unchanged |

**Code:** `app/netherlands/living/page.tsx`, `app/netherlands/living/survival-guide/page.tsx`

**Residual:** Redirect-follow HTML for `/netherlands/living` still loads the survival-guide body; indexing should prefer survival-guide via canonical + noindex on the alias. A future Living hub with its own body would make the intent split fully visible in SERPs — not done here.

---

## Remaining counts (after this fix)

| Metric | Before (audit) | After (expected) |
|--------|----------------|------------------|
| Missing H1 (listed live indexable) | **19** | **0** |
| Exact duplicate title groups (source metadata) | **2** groups / **4** URLs | **0** exact duplicate title cores in source metadata |
| Exact duplicate titles if crawl **follows redirects** without honoring living `noindex`/canonical | 2 groups | **1 residual pair:** `/` ↔ `/netherlands` (same hub document after redirect). Living pair mitigated by alias metadata |

---

## Explicitly not done

- Broad rewrite of the ~122 CTR-risk titles (needs GSC)
- Restoring a full Living hub page body
- Replacing the homepage redirect with a standalone brand landing
- Other SERP issues (H1↔title soft mismatches, year opportunities, description templates)
