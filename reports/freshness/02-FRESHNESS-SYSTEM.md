# Content Freshness / Trust Signal System — ExpatCopilot

**Date:** 13 September 2026  
**App:** `apps/expatlife-web`  
**Inventory:** [`freshness-inventory.csv`](./freshness-inventory.csv)  
**Related:** [`01-IND-AMOUNTS-OFFICIAL-FIGURES.md`](./01-IND-AMOUNTS-OFFICIAL-FIGURES.md)

---

## Principle

A **Last reviewed** date must represent an **actual** editorial or statutory review.

Do **not**:

- Stamp today’s date across every article
- Use build-day `new Date()` as `dateModified`
- Use future `publishDate` (scheduled go-live) as if it were a review date

Do:

- Classify sensitivity
- Show ATF trust strip (`GuideHeroTrustMeta`) on high-sensitivity pages
- Sync visible last reviewed ↔ Article `dateModified` when a curated ISO date exists
- Carry `effectiveFrom` / `effectiveTo` (or display label) where statutory windows apply
- Link `officialSources[]` above the fold

---

## Sensitivity classes

| Class | Examples | Freshness expectation |
|-------|----------|------------------------|
| **HIGH_SENSITIVITY** | Visa, IND thresholds, tax, 30% ruling, HSM, minimum wage, government processes, health insurance rules, banking requirements, housing regulation | Required: `lastReviewed`, curated `dateModified`, official sources; effective window when statutory |
| **MEDIUM_SENSITIVITY** | Arrival administration, education, work, municipality procedures | Recommended: last reviewed + sources; schema when reviewed |
| **EVERGREEN** | Culture, lifestyle, general city descriptions | Optional; no fake review stamps |

---

## Shared system (code)

| Piece | Path |
|-------|------|
| Types | `src/lib/freshness/types.ts` |
| Format / parse / schema resolve | `src/lib/freshness/format.ts` (`resolveSchemaDateModified` rejects future publishDates) |
| Priority registry | `src/lib/freshness/registry.ts` |
| HSM / Blue Card threshold freshness | `src/lib/freshness/hsmBlueCardThresholdsFreshness.ts` |
| ATF UI | `src/components/guides/GuideHeroTrustMeta.tsx` (+ `effectivePeriod`) |
| Guide contract | `GuideData.dateModified`, `effectivePeriodLabel`, `lastUpdated`, `heroOfficialSources` |
| JSON guides schema | `GuideBySlugPage` — emits `ArticleJsonLd` **only** when a curated date resolves |

Visible pattern:

```
Last reviewed: 13 September 2026
Official sources: IND · Belastingdienst · …
```

With statutory window:

```
Last reviewed: 13 September 2026 · Effective: 1 July 2026–31 December 2026
```

---

## Priority pages — outcomes

| URL | Class | Visible last reviewed | Schema dateModified | Effective | Status |
|-----|-------|----------------------|---------------------|-----------|--------|
| `/netherlands/visa/eu-blue-card/` | HIGH | 7 September 2026 | 2026-09-07 | 1 Jan–31 Dec 2026 | **IMPLEMENTED** (was missing ATF; build-day schema removed) |
| `/netherlands/practical-life/digid-netherlands/` | HIGH | 13 September 2026 | 2026-09-13 | — | **IMPLEMENTED** (ATF added; future publishDate not used for modified) |
| `/netherlands/first-90-days-netherlands/` | MEDIUM | 13 September 2026 | 2026-09-13 | — | **IMPLEMENTED** |
| `/netherlands/open-bank-account-netherlands/` | HIGH | 12 August 2026 | 2026-08-12 | — | **IMPLEMENTED** (ATF; kept existing review/publish date) |
| `/netherlands/housing/` | HIGH | 13 September 2026 | 2026-09-13 | Pararius Q1 2026 rent bands | **IMPLEMENTED** |
| `/netherlands/visa/partner-family-visa/` | HIGH | 13 September 2026 | 2026-09-13 | 1 Jul–31 Dec 2026 | **IMPLEMENTED** (spine already strong; `dateModified` on GuideData) |
| `/netherlands/visa/self-employed-visa/` | HIGH | 13 September 2026 | 2026-09-13 | 1 Jul–31 Dec 2026 | **IMPLEMENTED** |
| `/netherlands/visa/highly-skilled-migrant/` | HIGH | 26 August 2026 | 2026-08-26 | 2026 calendar year | **IMPLEMENTED** (pre-existing ATF; `dateModified` on GuideData) |
| `/netherlands/taxes/30-percent-ruling/` | HIGH | 26 August 2026 | 2026-08-26 | — | **IMPLEMENTED** (pre-existing) |
| `/netherlands/health/health-insurance-comparison-netherlands/` | HIGH | 30 August 2026 | 2026-08-30 | — | **IMPLEMENTED** (schema no longer uses future 2027 publishDate) |
| `/netherlands/official-figures/` | HIGH | 13 September 2026 | 2026-09-13 | H2 2026 IND amounts | **IMPLEMENTED** (spine) |
| `/netherlands/integration/inburgering/` | HIGH | 30 August 2026 | 2026-08-30 | KNM from 1 July 2025 | **IMPLEMENTED** + framing fix |

Full columns: see CSV.

---

## Inburgering “(2025)” framing

**Validated:** Content correctly describes the **KNM revised end terms from 1 July 2025**, which remain the current exam basis in 2026. Last reviewed was already **30 August 2026**.

**Changed (framing only — not year-bumping facts):**

- Meta / page title: removed trailing `(2025)` → *Inburgering … B1 & KNM*
- TOC: *Exams & KNM* (body still states 1 July 2025 effective date)
- FAQ wording: “KNM after the 1 July 2025 update”
- `dateModified`: `2026-08-30` (from last reviewed — GuideBySlugPage no longer uses build-day)

**Not changed:** Historical effective date of the KNM update, Rijksoverheid June 2025 announcement links, Wi 2021 references.

---

## Schema rules applied

1. Prefer `GuideData.dateModified` / page `lastReviewedIso`
2. Else parse display `Last reviewed: …`
3. Else past `publishDate` only if ≤ today
4. Else **omit** `ArticleJsonLd` dateModified rather than invent build-day (JSON guides via `GuideBySlugPage`)

Known scheduled future `publishDate` values (not used as review):

- DigiD: `2026-10-25`
- Housing: `2026-10-08`
- Health insurance comparison: `2027-02-19`

---

## Follow-ups (out of scope this pass)

- Roll HIGH_SENSITIVITY ATF to remaining visa / tax / banking / housing cluster children
- Add `dateModified` to `WebPageJsonLd` optionally for parity
- Editor checklist / CI assert: HIGH pages must have `lastReviewed` + ≥1 official source
- Re-verify Blue Card / HSM floors at next IND mid-year update (next window after 31 Dec 2026)

---

## Scorecard

| Metric | Count |
|--------|------:|
| Priority URLs audited | 12 |
| IMPLEMENTED | 12 |
| Fake “today” mass stamps | 0 |
| Cross-canonical merges | 0 |
| Build-day schema removed on priority set | Yes (Blue Card, DigiD, housing, GuideBySlugPage path, health comparison) |
