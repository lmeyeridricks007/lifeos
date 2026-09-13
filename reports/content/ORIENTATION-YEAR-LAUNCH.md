# Orientation Year (Zoekjaar) — Launch Report

**Route:** `/netherlands/visa/orientation-year/`  
**Reviewed:** 13 September 2026  
**Site:** ExpatCopilot (`apps/expatlife-web`)

---

## Page role

Authoritative **post-study / post-research** residence-purpose guide for the Dutch **orientation year (zoekjaar)**.

Fills a real gap: before this page, zoekjaar appeared only as IND deep-links (student guide), a table row without an internal guide (`eu-vs-non-eu`), and country-guide prose. No pillar competed with HSM / student / compare.

**Not** an audience clone of the student visa page or HSM page — it owns:

- eligibility windows (3 years)
- 1-year non-extendable validity
- free work rights / no TWV
- reduced HSM salary criterion relationship
- switch to HSM / other purposes after or during the year

---

## Official sources (verified 13 Sep 2026)

| Topic | Source | Notes / effective |
| --- | --- | --- |
| Permit rules, who can apply, timing, work | [IND — Residence permit for orientation year](https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year) | IND page last update **12 June 2026** |
| Plain-language process, validity, HSM switch, second year | [Business.gov.nl — Orientation year](https://business.gov.nl/coming-to-the-netherlands/permits-and-visa/residence-permit-for-orientation-year/) | 1 year; **not extendable**; second year only after **new** qualifying study/research after prior zoekjaar |
| Fee | [IND — Fees](https://ind.nl/en/fees-costs-of-an-application) | **€254** first application / change of purpose for “Looking for a job after study, promotion or scientific research (orientation year)” · from **1 Jan 2026** schedule |
| Fee exceptions | Same IND fees page | Turkish nationals: lower work-route rates under Association Agreement EC-Turkey (orientation year listed among work purposes); San Marino / Israel: MVV/TEV fee relief — **verify on live fees page** |
| Reduced HSM criterion | [IND — Required amounts](https://ind.nl/en/required-amounts-income-requirements) | **€3,122** gross/month excl. holiday pay · calendar **2026** · three IND cases tying orientation year / meeting zoekjaar requirements within **3 years** |

**Editorial stance:** No legal-advice framing; eligibility restated from IND/Business.gov.nl with “confirm on IND” language. Partner/family: may apply separately; must meet family conditions — no invented income floors on this page.

---

## Implementation map

| Artifact | Path |
| --- | --- |
| Content | `apps/expatlife-web/src/content/visas/orientation-year.ts` |
| Guide adapter | `apps/expatlife-web/src/lib/visas/orientationYearToGuideData.ts` |
| Page | `apps/expatlife-web/app/netherlands/visa/orientation-year/page.tsx` |
| Live registry | `VISA_GUIDE_PATHS` in `src/data/site/route-registry.ts` |
| Nav | `src/lib/nav/config.ts`, `config/nav.ts` |
| Search index | `src/lib/search/buildSearchIndex.ts` |
| Visa checker | `types.ts`, `routes.ts`, `recommendationEngine.ts`, `VisaCheckerClient.tsx` |
| Compare visas | `route-comparison-data.ts`, `situation-cards.ts`, `compare-visas/page.tsx` |
| Instructional figure key | `visasResidencyInstructionalRasterAssets.ts` (reuses status-changes raster) |

Hero reuses existing student-visa hero asset (no new generative image).

Journey UX (table): Graduate / researcher → Orientation year → Job search → HSM / other route.

---

## Internal links added

### Links IN (contextual)

| From | Change |
| --- | --- |
| Student visa guide | Hero/overview/after-study links → `/netherlands/visa/orientation-year/`; alternative + relatedGuides |
| HSM guide | Related guides + FAQ salary / no-job-offer copy |
| Compare visas | Related guides strip; study situation blurb; new “after study” situation card |
| Visa checker | Route entry + secondary for study purpose and work-without-offer |
| Visas & residency hub | Study/family block + FAQ links |
| Status changes | Study→work card + study section related links |
| EU vs non-EU guide | Visa-routes section link |
| Official figures | `hsm-reduced` related guide + related-guides list |
| Moving checklist tool strip | Orientation year related guide |

### Links OUT (from orientation-year page)

HSM guide · HSM salary checker · compare visas · visa checker · official figures · student visa · finding jobs / English-speaking jobs · document readiness · moving checklist · IND / Business.gov.nl / fees / required amounts.

---

## Search intent

Natural coverage (not stuffed): orientation year Netherlands · zoekjaar · orientation year visa · search year · zoekjaar highly skilled migrant · reduced salary criterion.

Short-answer / at-a-glance / FAQ blocks are structured for AI/search extraction.

---

## Freshness-sensitive fields

Re-check when IND indexes or amends:

| Field | Current value | Source | Content stamp |
| --- | --- | --- | --- |
| Content last reviewed | 13 September 2026 | Editorial | `ORIENTATION_YEAR_CONTENT_LAST_REVIEWED` / `dateModified` `2026-09-13` |
| IND orientation page last update | 12 June 2026 | IND | `ORIENTATION_YEAR_IND_PAGE_LAST_UPDATE` |
| Application fee | €254 | IND fees | `ORIENTATION_YEAR_IND_FEE_EUR` · effective from 1 Jan 2026 |
| HSM reduced floor | €3,122 / month excl. holiday | IND required amounts · shared `HSM_SALARY_THRESHOLDS_EUR.reduced` | Calendar 2026 |
| Validity | 1 year, not extendable | IND / Business.gov.nl | Prose |
| Apply within | 3 years of qualifying event | IND / Business.gov.nl | Prose |
| Reduced-criterion cases | 3 IND cases | Required amounts | Prose + FAQ |

---

## Launch checklist

| Requirement | Status |
| --- | --- |
| Page returns complete guide (H1, short answer, sections, FAQ, official sources, last reviewed) | Yes |
| `200` / indexable (`robots.index`) / self-canonical | Yes (`page.tsx` metadata) |
| Title + description | Yes |
| Official source links on page | Yes |
| Live in `VISA_GUIDE_PATHS` (sitemap-eligible) | Yes |
| Nav + search | Yes |
| Compare + visa checker | Yes |
| Contextual internal links in/out | Yes |
| Typecheck (`tsc --noEmit`) | Pass (13 Sep 2026) |
| No legal-advice overclaim / eligibility invented | Yes — IND-aligned with verify language |
| Premium unique raster | Optional deferred — reuses existing instructional asset |

---

## Scorecard

ORIENTATION YEAR GUIDE:  
**LAUNCH_READY**
