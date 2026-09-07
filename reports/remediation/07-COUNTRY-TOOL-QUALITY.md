# Remediation: Country×tool landing quality (live indexable)

**Issue:** Country-specific tool pages must have legitimate standalone value (not token-swapped shells)  
**Date:** 2026-09-06  
**Scope:** Live indexable `/netherlands/moving/tools/{tool}/from/{country}/` only  
**Staged / out of scope:** Nigeria & Philippines (guides exist; **no** `/from/` tool landings). No staged-by-date origins among the 28 supported tool countries as of this date.

**Companion:** [`country-unique-content-matrix.csv`](./country-unique-content-matrix.csv)

---

## Inventory

| Dimension | Count |
|-----------|------:|
| Tools with country landings | **4** (`moving-checklist`, `arrival-planner`, `document-readiness`, `first-90-days`) |
| Supported live countries | **28** |
| Indexable landings | **112** |
| Staged tool countries touched | **0** |

### Live countries (tool landings)

argentina, australia, brazil, canada, chile, denmark, france, germany, india, indonesia, ireland, italy, japan, kenya, mexico, new-zealand, norway, pakistan, singapore, south-africa, south-korea, spain, sweden, switzerland, turkey, uae, united-kingdom, united-states

---

## Pre-enrichment findings

| Tool | Pattern |
|------|---------|
| `moving-checklist` | Best curated depth (~20/28 with doc extras); intros often origin-specific |
| `document-readiness` | Mixed; ~15/28 richer |
| `arrival-planner` | Mostly boilerplate (“registration, BSN, banking”) with country noun swap |
| `first-90-days` | Near-universal DigiD/GP boilerplate |

**EU/EEA/Swiss peers** (germany, france, spain, italy, ireland, denmark, sweden, norway, switzerland) share free-movement framing. Inventing visa differences would be dishonest SEO padding — flagged for **manual review**, not consolidation in this pass.

---

## What we implemented

### Reusable structured country data

| Module | Role |
|--------|------|
| `src/lib/tools/shared/countryToolMovingFacts.ts` | Builds facts from existing `CountryRecord` JSON (region, travel, visa awareness, documents, shipping, official contacts/sources) |
| `src/lib/tools/shared/composeCountryToolLanding.ts` | Merges facts + curated `country-landing-pages.json` into page context; classifies quality |
| Extended `CountryLandingContext` | `taskExplanation`, `visaPathwayDifferences`, `officialReferences`, `informationAsOf` |

**No invented deltas:** only fields already present on country records / curated landing JSON / verifiable region framing (EU/EEA/Swiss vs immigration-first).

### Template / page wiring

- `ToolCountryContextBlock` renders task explanation, visa/stay pathway, documents, travel, **official references**, guide link, information date
- All four `from/[country]/page.tsx` routes use `composeCountryToolLanding`
- H1 pattern unchanged (clear topic): `{Tool} for the Netherlands — from {Country}`
- Titles unchanged pattern; meta description prefers composed intro
- Canonical via existing `buildToolCountryLandingPageMetadata` → self-canonical path `/netherlands/moving/tools/{tool}/from/{country}`
- Related strip already links parent country guide + sibling country tools

### Tests

`composeCountryToolLanding.test.ts` — all 112 compositions produce intro, guide, official refs; SA vs DE visa framing differs.

---

## Quality classification (after enrichment)

| Class | Count | Meaning |
|-------|------:|---------|
| **STRONG_UNIQUE_VALUE** | **47** | Curated intro depth + curated extras and/or immigration-first route depth + official refs |
| **ADEQUATE** | **65** | Standalone usable page with record-backed framing, docs/travel, guide, official refs |
| **NEEDS_ENRICHMENT** | **0** | — |
| **INSUFFICIENT_STANDALONE_VALUE** | **0** | — (none after composer; do not consolidate) |

### By tool

| Tool | STRONG | ADEQUATE |
|------|-------:|---------:|
| moving-checklist | 21 | 7 |
| arrival-planner | 12 | 16 |
| document-readiness | 13 | 15 |
| first-90-days | 1 | 27 |

`first-90-days` remains the weakest curated layer (expected): Netherlands-side DigiD/GP work is legitimately similar across origins; uniqueness comes from arrival framing + travel distance + upstream immigration notes, not fake “first 90 days visas.”

---

## Content-delta matrix (topics)

For each live country, structured facts expose these topics **when present on the country record** (see CSV columns `visa_routes`, `document_notes_sample`, `official_refs_sample`):

| Topic | Source | Notes |
|-------|--------|-------|
| Visa / stay pathway | `visaAwareness` + regionGroup | EU/EEA/Swiss = free-movement framing; non-EU = immigration-first |
| Document / legalisation | `documents.countrySpecificNotes` + starter list | Document-specific; points to NW/IND verification |
| Translation | Only if record notes imply it | Not invented |
| Travel / distance | `travel.typicalFlightTime` + notes | |
| Shipping / import logistics | `shipping` when present | High-level; not customs-code invention |
| Banking / healthcare / pets / licence | **Not fabricated** | Appear only if already in curated landing bullets or future record fields |
| Official links | `contacts.official` + `documents.sources` | IND, Netherlands Worldwide, origin authorities |
| Parent guide | `countryGuidePath` | Always |
| Related tools | `CountryToolLandingRelatedStrip` | Always |

Full per-URL matrix: `country-unique-content-matrix.csv`.

---

## Manual review queue (do **not** consolidate yet)

### A. Low visa-differentiation peers (36 URLs)

Countries: denmark, france, germany, ireland, italy, norway, spain, sweden, switzerland  
Tools: all 4  

**Why review:** Pathway copy is correctly similar. Remaining uniqueness should stay in documents/language/travel—not padded visa text. Decide later whether all 36 deserve separate index entries or a thinner hub model.

### B. Thin curated `first-90-days` JSON (sitewide)

Almost all first-90 curated intros were DigiD/GP boilerplate. Runtime composer now supplies honest framing; curated JSON can be deepened later **only** with verifiable origin-specific settling notes (e.g. long-haul banking friction), not invented DigiD variants.

### C. Still-stronger candidates for editorial polish

Non-EU origins with rich guides (India, Indonesia, US, UK, UAE, Brazil, etc.) — many already **STRONG** on checklist/document tools; arrival/first-90 can gain curated extras when editors have sourced notes.

---

## SEO checklist (live pages)

| Requirement | Status |
|-------------|--------|
| Country-specific introduction | Yes (composer + curated) |
| Clear task explanation | Yes (`taskExplanation`) |
| Genuine country differences | Yes where record-backed; peers flagged |
| Official references | Yes (from country records) |
| Link to parent country guide | Yes |
| Links to related country tools | Yes |
| Correct H1 / title | Yes (existing pattern + composed meta description) |
| Self canonical | Yes |
| Information date | Yes (`informationAsOf` = 2026-09-06 pack date) |

---

## Explicitly not done

- No redirects / consolidation of ADEQUATE peer URLs  
- No staged country tool pages created (NG/PH)  
- No invented apostille/tax/pet/customs deltas  
- No broad rewrite of `country-landing-pages.json` prose (composer overlays records instead)

---

## Follow-ups for editors

1. Review the 9 EU/EEA/Swiss peers for index strategy.  
2. Optionally deepen curated JSON for `arrival-planner` / `first-90-days` where country guides already have unique settling notes.  
3. Add structured fields to `CountryRecord` only when verifiable (e.g. driving-licence exchange pointer, pet import link) — then facts module will surface them automatically.
