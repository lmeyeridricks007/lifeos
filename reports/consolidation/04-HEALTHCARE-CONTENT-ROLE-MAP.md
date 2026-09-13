# Healthcare Content Role + Consolidation Map — ExpatCopilot

**Date:** 13 September 2026  
**Site:** https://www.expatcopilot.com  
**Principle:** Map first. No merges/redirects from title similarity alone.  
**Related:** [`02-FRESHNESS-SYSTEM.md`](../freshness/02-FRESHNESS-SYSTEM.md), [`03-GUIDE-TOOL-ROLE-MAP.md`](./03-GUIDE-TOOL-ROLE-MAP.md)  
**Matrices:** [`healthcare-content-matrix.csv`](./healthcare-content-matrix.csv), [`healthcare-overlap-matrix.csv`](./healthcare-overlap-matrix.csv)

---

## Executive verdict

The healthcare cluster already has a **sound role split** (hub → system basics → insurance mandate → comparison → services directory → care cornerstones → zorgtoeslag guide/tool). Overlap is mostly **PARTIAL** (shared concepts, different jobs), not strong duplicates.

This pass implemented **high-confidence** hub/routing, reciprocal CTAs, ghost-link cleanup, freshness on zorgtoeslag, and a shared 2026 health-insurance figures module. **No content merges or 301s** of live guides.

---

## Target role model

| Role | Job | Canonical example |
|------|-----|-------------------|
| **HEALTHCARE_HUB** | Orient & route | `/netherlands/health` |
| **HEALTHCARE_SYSTEM_GUIDE** | How care works (GP gatekeeping, hospitals, journey) | `/netherlands/living/healthcare-basics` |
| **HEALTH_INSURANCE_GUIDE** | Mandate, deadline, basic package, costs | `/netherlands/health-insurance-netherlands` |
| **INSURANCE_COMPARISON** | Decision factors (not rankings) | `/netherlands/health/health-insurance-comparison-netherlands` |
| **INSURANCE_TOOL** | Interactive estimate | `/netherlands/taxes/tools/healthcare-allowance-estimator` |
| **SERVICE_DIRECTORY** | Providers / EHIC / commercial | `/netherlands/services/health-insurance` |
| **GP_GUIDE** | Huisarts | `/netherlands/health/gp-netherlands` |
| **EMERGENCY_GUIDE** | 112 / HAP / SEH | `/netherlands/health/emergency-healthcare-netherlands` |
| **PHARMACY_GUIDE** / **PRESCRIPTION** | Apotheek / recepten | pharmacies + prescriptions |
| **DENTAL_GUIDE** | Dentists | `/netherlands/health/dentists-netherlands` |
| **MENTAL_HEALTH_GUIDE** | GGZ pathways | `/netherlands/health/mental-healthcare-netherlands` |
| **MATERNITY_GUIDE** / **CHILD_HEALTH** | Maternity / children / pregnancy / birth | health + family URLs |
| **HEALTHCARE_ALLOWANCE_GUIDE** | Zorgtoeslag explanation | `/netherlands/taxes/healthcare-allowance-netherlands` |
| **ARRIVAL_CHECKLIST_SECTION** | Healthcare tasks inside arrival guides | first-90 / after-arriving |
| **STATUTE_MIRROR** | Dated figures | `/netherlands/official-figures` |

---

## Healthcare system vs health insurance (must stay distinct)

| | **SYSTEM** (`healthcare-basics`) | **INSURANCE** (`health-insurance-netherlands`) |
|--|----------------------------------|-----------------------------------------------|
| Answers | How care is organised; GP gatekeeping; specialists; hospitals; emergency doors; patient journey | Who must insure; when; basic package; supplementary; eigen risico; premium; switching; allowance relationship |
| Does not own | Insurer shopping / rankings | Full clinical pathway depth |
| CTA pattern | → Insurance guide / GP / Emergency | → Comparison + Services directory + Allowance |

Hub copy now states this split explicitly and adds section **1b. How the system works**.

---

## Guide vs comparison vs tool vs directory

| Surface | Role | Reciprocal CTA (implemented) |
|---------|------|------------------------------|
| Insurance guide | GUIDE | Primary → Comparison; Secondary → Services directory |
| Comparison | COMPARISON | Secondary → “Read the health insurance guide” |
| Allowance estimator | TOOL | Links to allowance guide (existing) |
| Services/health-insurance | DIRECTORY | Allowance link fixed to live guide |

**Do not** canonicalize tools/directories to guides.

---

## Healthcare allowance (zorgtoeslag)

| Item | Decision |
|------|----------|
| Canonical explainer | `/netherlands/taxes/healthcare-allowance-netherlands` — **KEEP** |
| Interactive tool | `/netherlands/taxes/tools/healthcare-allowance-estimator` — **KEEP** (GUIDE_VS_TOOL) |
| Legacy paths | Already 301 → guide / taxes tool — leave |
| Ghost `/netherlands/zorgtoeslag-netherlands/` | Retargeted from services category → allowance guide |
| Thresholds | Prefer Belastingdienst + estimator engine (`healthcareAllowanceRulesByYear.ts`); do not re-hardcode across health pages |

---

## Freshness / changing facts

| Fact | Authority | Shared module / spine | Status |
|------|-----------|----------------------|--------|
| Eigen risico €385 (2026) | Government.nl / Rijksoverheid | `healthInsuranceFigures2026.ts` + Official figures | Module added; services directory wired |
| Premium band ~€142–€159 | Market orientation (Independer) | Same module + Official figures | Documented; guide still narrative |
| 4-month insurance deadline | Government.nl | Insurance guide (source-of-record copy) | KEEP on guide; others summarize + link |
| Zorgtoeslag limits | Belastingdienst | Allowance estimator rules by year | KEEP on tax spine |
| GP / emergency clinical process | Medium sensitivity | Page models | NEEDS_GSC / later ATF roll-out |

High-sensitivity freshness applied this pass:

- Insurance guide: `dateModified` 2026-08-26 + effective label  
- Comparison: already lastReviewed 30 Aug 2026  
- Allowance guide: ATF Last reviewed + schema `dateModified` 2026-08-30  

---

## Arrival journey (practical wording)

Typical sequence for many newcomers (not legally identical for every category):

1. Municipality registration / BSN  
2. Arrange Dutch basic health insurance when required  
3. Register with a huisarts  
4. Know emergency pathways (112 / HAP / SEH)  
5. Check zorgtoeslag eligibility  

Hub + insurance guide supporting links now reinforce this chain without implying universal obligation.

---

## Overlap classifications (summary)

See CSV for pairs. Highlights:

| Pair | Class | Action |
|------|-------|--------|
| Basics ↔ Insurance guide | DISTINCT_INTENT | KEEP both; hub routes |
| Insurance guide ↔ Comparison | GUIDE_VS_TOOL / decision layer | Reciprocal CTAs |
| Insurance guide ↔ Services directory | DISTINCT_INTENT | KEEP; commercial vs rules |
| Comparison ↔ Best/health-insurance | PARTIAL_OVERLAP | KEEP; wait GSC before merge |
| Emergency healthcare ↔ Living emergencies-safety | PARTIAL_OVERLAP | KEEP (clinical vs broader safety) |
| Allowance guide ↔ Estimator | GUIDE_VS_TOOL | KEEP |
| Culture health-system scaffold ↔ Insurance | HUB_VS_GUIDE / thin | KEEP_AND_REPOSITION later; already points canonical to insurance |
| Placeholder comparison tools | STAGED | No public links; registry guides fixed |

**STRONG_DUPLICATE live guides:** 0 proven this pass.

---

## Safe changes implemented

1. Hub: role clarification + **system-map** section  
2. Insurance guide: CTAs → comparison + directory; internal links to hub/basics/allowance/GP  
3. Comparison: secondary CTA + related guides to basics + allowance  
4. Ghost/staged public hrefs fixed:  
   - `/netherlands/money/insurance/health` → insurance guide (nav)  
   - `/netherlands/health/gp-registration` → `gp-netherlands`  
   - `/netherlands/health/emergency-basics` → `emergency-healthcare-netherlands`  
   - `/netherlands/healthcare/` → `/netherlands/health/`  
   - `/netherlands/zorgtoeslag-netherlands/` → allowance guide  
   - Tools registry relatedGuides ghost removed  
5. Shared `healthInsuranceFigures2026.ts`; services category uses it for eigen risico  
6. Allowance guide ATF + curated `dateModified`

**Not implemented (documented only):**

- Merge best-page ↔ comparison (needs GSC)  
- 301 `/services/compare-health-insurance` → comparison (staged; assert scripts treat as staged)  
- Mass ATF on all 2027-publishDate care cornerstones  
- Country/city thin insurance variants  

---

## Inventory counts

| Bucket | Count |
|--------|------:|
| Primary healthcare / insurance / care URLs inventoried | **35** |
| Distinct primary-intent surfaces (retained) | **28** |
| Strong duplicates (live) | **0** |
| Merges implemented | **0** |
| Redirects implemented this pass | **0** |
| Pages repositioned (hub/CTAs/nav) | **6** |
| Stale facts found (hardcoded eigen risico / ghost hrefs) | **5** |
| Stale facts fixed | **5** |
| Healthcare orphans after fixes | **0** known (scaffold culture page still thin but linked) |
| Staged healthcare links remaining in public nav | **0** (compare-health still staged in registry asserts only) |

---

## Scorecard

```
HEALTHCARE IA STATUS:
IMPROVED

HEALTHCARE URLs INVENTORIED:
35

DISTINCT INTENT PAGES:
28

STRONG DUPLICATES:
0

MERGES IMPLEMENTED:
0

REDIRECTS IMPLEMENTED:
0

PAGES REPOSITIONED:
6

STALE HEALTHCARE FACTS FOUND:
5

STALE FACTS FIXED:
5

HEALTHCARE ORPHANS:
0

STAGED HEALTHCARE LINKS:
0

TECHNICAL REGRESSIONS:
0

RECOMMEND FURTHER CONSOLIDATION:
WAIT FOR GSC DATA
```

Further consolidation candidates (do not act without GSC): best/health-insurance-for-expats vs comparison; culture health-system scaffold vs basics; whether placeholder health comparison tools should 301 to the live comparison guide.
