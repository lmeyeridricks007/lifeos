# Guide vs Tool Role Map — ExpatCopilot Moving Cluster

**Reviewed:** 13 September 2026  
**App:** `apps/expatlife-web`  
**Principle:** Keep useful guide + tool pairs. Clarify roles for users and search. Do **not** merge or cross-canonicalize merely because topics overlap.

---

## Role pattern (site-wide)

| Surface | Job | Typical search intent |
|--------|-----|------------------------|
| **GUIDE** | Explains what / why / when, edge cases, narrative phases | Research, “what should I expect” |
| **TOOL** | Interactive / personalized execution (checklist, planner, estimator) | “Generate my plan / checklist / estimate” |

**CTA pattern implemented**

- Guide → prominent **Use the interactive …**
- Tool → prominent **Read the … guide**
- Tools thinned of duplicated long-form education; how-to-use kept
- Titles / H1 / meta titles made distinct (guide vs planner/generator/estimator/checker)
- Both URLs remain **self-canonical** when both are live and intent-distinct

---

## Scorecard

| Pair | Decision | Canonicals | Implemented |
|------|----------|------------|-------------|
| First 90 Days guide ↔ Settlement Planner | **KEEP_DISTINCT** | Both self-canonical | Yes |
| Moving Checklist guide ↔ Checklist Generator | **KEEP_DISTINCT** | Both self-canonical | Yes |
| After Arriving guide ↔ Arrival Planner | **KEEP_DISTINCT** | Both self-canonical | Yes |
| Cost of Moving guide ↔ Relocation Cost Estimator | **KEEP_DISTINCT** | Both self-canonical | Yes |
| Documents guides ↔ Document Readiness Checker | **TOOL_CANONICAL** (guides 308 → tool) | Tool only | Clarified tool role; no restore |
| Survival Guide / Financial checklist | **GUIDE_ONLY** | Self-canonical | Documented; no peer tool |

**MERGED:** 0  
**REDIRECTED (this pass):** 0  
**CROSS-CANONICALIZED guide↔tool:** 0  

---

## Pair 1 — First 90 Days

| | |
|--|--|
| **Guide** | `/netherlands/first-90-days-netherlands/` |
| **Tool** | `/netherlands/moving/tools/first-90-days/` |
| **GUIDE role** | Educational 90-day settlement narrative: phases (1–30 / 31–60 / 61–90), delays, admin health check |
| **TOOL role** | Personalized week-by-week settlement planner (interactive checklist) |
| **Search intent** | Guide: “first 90 days Netherlands what to do”. Tool: “90 day planner / checklist Netherlands” |
| **Unique value** | Guide = context & edge cases. Tool = personalized timeline from inputs |
| **Duplicated copy (before)** | Tool carried multi-section educational body overlapping the guide |
| **CTA relationship** | Guide primary → tool. Tool secondary → guide |
| **Decision** | **KEEP_DISTINCT** — both self-canonical |

**Copy / metadata**

- Guide H1 / meta: *Your First 90 Days in the Netherlands | Expat Setup Guide*
- Tool H1: *90-Day Netherlands Settlement Planner*
- Tool meta: *90-Day Netherlands Settlement Planner (Interactive Tool)*

**Changes**

- Tool `meta.json`: secondary CTA → guide; explanatory sections reduced to how-to-use + handoff
- Tool FAQ: usage-focused; points to guide for narrative answers
- Related guides list: companion guide first

---

## Pair 2 — Moving Checklist

| | |
|--|--|
| **Guide** | `/netherlands/moving-checklist-netherlands/` |
| **Tool** | `/netherlands/moving/tools/moving-checklist/` |
| **GUIDE role** | Educational relocation checklist: before move, documents, costs, arrival, first 90 days, mistakes |
| **TOOL role** | Personalized pre-move / travel / arrival-essentials task generator |
| **Search intent** | Guide: “moving to Netherlands checklist”. Tool: “generate moving checklist Netherlands” |
| **Unique value** | Guide = comprehensive education. Tool = situation-filtered task list |
| **Duplicated copy (before)** | Tool explanatory sections duplicated mistakes / audience / after-arrival education |
| **CTA relationship** | Guide primary → tool. Tool secondary → guide (was weak: pointed at pillar only) |
| **Decision** | **KEEP_DISTINCT** — both self-canonical |

**Copy / metadata**

- Guide H1 / meta: *Moving to the Netherlands Checklist Guide*
- Tool H1: *Netherlands Moving Checklist Generator*
- Tool meta: *Netherlands Moving Checklist Generator (Interactive Tool)*

**Changes**

- Tool secondary CTA → checklist guide
- `MOVING_CHECKLIST_RELATED_GUIDES` now leads with checklist guide
- Tool FAQ thinned; registry relatedGuides updated

---

## Pair 3 — After Arriving ↔ Arrival Planner

| | |
|--|--|
| **Guide** | `/netherlands/after-arriving-netherlands/` |
| **Tool** | `/netherlands/moving/tools/arrival-planner/` |
| **GUIDE role** | First-week / post-landing hub: registration, BSN, DigiD, insurance, banking context |
| **TOOL role** | Personalized first-week and first-month prioritized plan |
| **Search intent** | Guide: “what to do after arriving Netherlands”. Tool: “arrival planner / first week plan” |
| **Unique value** | Guide = why order matters. Tool = sequenced personal plan |
| **Duplicated copy** | Low (tool already thin); guide under-promoted Arrival Planner |
| **CTA relationship** | Guide primary → Arrival Planner (was First 90 + Checklist). Tool secondary → After Arriving guide |
| **Decision** | **KEEP_DISTINCT** — both self-canonical |

**Copy / metadata**

- Guide meta reframed as first-week **guide**
- Tool H1: *Netherlands Arrival Planner*; meta: *(Interactive Tool)*

---

## Pair 4 — Cost of Moving ↔ Relocation Cost Estimator

| | |
|--|--|
| **Guide** | `/netherlands/moving-to-netherlands-cost/` |
| **Tool** | `/netherlands/moving/tools/relocation-cost-estimator/` |
| **GUIDE role** | Cost categories, ranges, budgeting narrative |
| **TOOL role** | Personalized one-time / monthly / first-year estimate + PDF |
| **Search intent** | Guide: “cost of moving to Netherlands”. Tool: “relocation cost calculator / estimator” |
| **Unique value** | Guide = education. Tool = numeric personalization |
| **Duplicated copy** | Moderate educational sections on tool; guide CTAs pointed at checklist instead of estimator |
| **CTA relationship** | Guide primary / mid → estimator. Tool secondary → cost guide |
| **Decision** | **KEEP_DISTINCT** — both self-canonical |

---

## Pair 5 — Documents ↔ Document Readiness Checker

| | |
|--|--|
| **Former guides** | `/netherlands/documents-needed-to-move-netherlands/`, `/netherlands/moving-documents-checklist/` |
| **Tool (live)** | `/netherlands/document-readiness-checker/` (also legacy `/moving/tools/document-readiness/` → same) |
| **Status** | Guides **308 →** checker in `next.config.js`. App Router guide pages remain as dead shells behind redirects |
| **GUIDE role (historical)** | Long-form document education |
| **TOOL role** | Personalized document readiness checklist / score |
| **Decision** | **TOOL_CANONICAL** — do **not** restore guides in this pass; do **not** invent a new parallel guide URL |
| **Implemented** | Tool title/meta clarified as interactive checker; explanatory copy thinned; related links avoid self-redirect loops (point to translation / legalization / checklist guide / pillar) |

**Follow-up (out of scope):** Either delete unreachable guide routes or revive one educational documents guide with a distinct URL if long-form SEO demand returns.

---

## Non-pairs (documented)

| URL / topic | Notes | Decision |
|-------------|-------|----------|
| `/netherlands/living/survival-guide/` | Living hub; adjacent calculators only | **GUIDE_ONLY** |
| Money / financial checklist style guides | No 1:1 move-cluster tool peer | **GUIDE_ONLY** |
| First 30 / First 60 day guides | Adjacent narrative slices; tools remain Arrival + First 90 planners | Keep guides; link to tools where relevant (unchanged this pass) |

---

## Files touched (implementation)

**Guides**

- `src/content/guides/netherlands/moving/first-90-days-netherlands.json`
- `src/content/guides/netherlands/moving/moving-checklist-netherlands.json`
- `src/content/guides/netherlands/moving/after-arriving-netherlands.json`
- `src/content/guides/netherlands/moving/moving-to-netherlands-cost.json`

**Tools**

- `src/content/tools/first-90-days/meta.json`, `faq.json`
- `src/content/tools/moving-checklist/meta.json`, `faq.json`
- `src/content/tools/arrival-planner/meta.json`
- `src/content/tools/relocation-cost-estimator/meta.json`
- `src/content/tools/document-readiness/meta.json`
- `app/netherlands/moving/tools/first-90-days/page.tsx`
- `app/netherlands/moving/tools/moving-checklist/page.tsx`
- `app/netherlands/moving/tools/arrival-planner/page.tsx`
- `app/netherlands/document-readiness-checker/page.tsx`
- `src/lib/tools/shared/toolInternalLinks.ts`
- `src/lib/tools/documentReadinessRules.ts`
- `src/content/tools/registry.json`

---

## Verification checklist

- [x] No guide↔tool merge
- [x] No tool canonicalized to guide (or vice versa) for KEEP_DISTINCT pairs
- [x] Reciprocal CTAs for pairs 1–4
- [x] Distinct titles / H1 / meta for pairs 1–4 (+ document tool framing)
- [x] Tool long-form education reduced; how-to-use retained
- [x] Document pair documented as TOOL_CANONICAL via existing redirects
- [ ] Manual spot-check in browser: hero CTAs + secondary CTAs on each pair
