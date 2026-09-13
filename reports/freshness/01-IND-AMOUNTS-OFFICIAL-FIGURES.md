# IND amounts → official-figures spine — statutory freshness remediation

**Site:** https://www.expatcopilot.com  
**Date:** 13 September 2026  
**Scope:** P0 stale IND partner/family + self-employed required amounts; shared statutory module; official-figures spine.

---

## Official values verified

| Figure | Value | Period | Authority |
|--------|------:|--------|-----------|
| Partner/family sponsor (excl. holiday allowance) | **€2,337.00** / month gross SV | 1 July 2026–31 December 2026 | IND |
| Partner/family sponsor (incl. holiday allowance) | **€2,523.96** / month gross SV | 1 July 2026–31 December 2026 | IND |
| Self-employed required profit (incl. holiday allowance) | **€1,766.77** / month gross profit | 1 July 2026–31 December 2026 | IND |

**Source URL:** https://ind.nl/en/required-amounts-income-requirements  
**Effective from:** 2026-07-01  
**Effective to:** 2026-12-31  
**Retrieval / review date:** 2026-09-13  

Verification method: live IND “Required amounts income requirements” page (English), sections for residence with partner/family and residence as a self-employed person. Values match the agent-report expectations; H1-2026 figures (€2,294.40 / €2,477.95 / €1,734.57) are superseded for this window.

---

## Old values removed

| Route | Old (H1 2026) | New (H2 2026) |
|-------|---------------|---------------|
| Partner/family excl. holiday | €2,294.40 | €2,337.00 |
| Partner/family incl. holiday | €2,477.95 | €2,523.96 |
| Self-employed monthly profit | €1,734.57 | €1,766.77 |

Stale literals cleared from:

- `src/content/visas/partner-family-visa.ts`
- `src/content/visas/self-employed-visa.ts`
- `src/lib/visas/visaToGuideData.ts` (fallback `"€1,734.57"`)

---

## Shared module used

**Canonical module:** `apps/expatlife-web/src/lib/statutory/indRequiredAmounts.ts`

Each figure models:

- `id`, `label`, `value`, `unit`
- `effectiveFrom`, `effectiveTo`
- `officialSource`, `sourceAuthority`
- `lastVerified`, `notes`
- `audience`, `category`

Helpers / selectors:

- `getIndRequiredAmount(id)`
- `formatIndEurMonthly(amount)`
- display constants (`PARTNER_FAMILY_SPONSOR_*_DISPLAY`, `SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY`)
- `IND_REQUIRED_AMOUNTS_GUIDE_LAST_UPDATED` (visible Last reviewed + Effective line)

**Preserved unchanged (separate domain modules):**

- HSM / Blue Card floors → `src/lib/tools/hsm-salary-checker/thresholds.ts`
- 30% / 27% preview → `src/lib/tools/thirty-percent-ruling/assumptions.ts`
- Minimum wage / eigen risico / premium band → `src/components/jobs/minimumWageNetherlandsRates.ts`

---

## Pages updated

| Path | Change |
|------|--------|
| `/netherlands/official-figures` | New dated rows for partner/family + self-employed; as-of / last-reviewed → 13 September 2026; related-guide links; changelog entry; `dateModified` 2026-09-13 |
| `/netherlands/visa/partner-family-visa` | Amounts from shared module; FAQ income answer; Last reviewed + Effective ATF; official-figures cross-link; schema `dateModified` aligned |
| `/netherlands/visa/self-employed-visa` | Amount from shared module; FAQ; Last reviewed + Effective ATF; official-figures cross-link; schema `dateModified` aligned |

Surfaces checked for stale amounts: tables, callouts, At a glance / quick answers, FAQ, JSON-LD `dateModified`, related guides, sidebar, official sources.

HSM salary checker and 30% calculator **not** changed (already on shared modules; figures unchanged).

---

## Cross-links

| From | To | Anchor intent |
|------|----|---------------|
| Partner/family visa | Official figures | “Netherlands official figures (dated citation table)” |
| Self-employed visa | Official figures | same |
| Official figures rows | Partner/family guide | “Partner & family visa guide” |
| Official figures rows | Self-employed guide | “Self-employed visa guide” |
| Official figures related guides | both visa guides | Related-guides strip |

---

## Tests added

- `apps/expatlife-web/src/lib/statutory/indRequiredAmounts.test.ts`
- npm script: `npm run test:statutory` (in `@expatlife/web`)

Assertions:

1. Module values = IND H2 2026 amounts  
2. Visa content + FAQ use shared display strings  
3. Guide adapters expose amounts + official-figures links  
4. Official-figures rows mirror module values + related guide hrefs  
5. No H1-2026 stale literals in guarded files  
6. Numeric literals `2337` / `2523.96` / `1766.77` live only in the statutory module (not in visa/official-figures source)

**Result:** 7/7 pass (2026-09-13).

---

## Regression results

| Check | Result |
|-------|--------|
| Canonical strategy | Unchanged |
| Sitemap strategy | Unchanged |
| Routing | Unchanged |
| Indexability / robots | Unchanged |
| HSM floors (€5,942 / €4,357 / €3,122) | Unchanged |
| 30% norms (€48,013 / €36,497 / cap €262,000) | Unchanged |
| Adult minimum wage (€14.99 from 1 Jul 2026) | Unchanged |
| Partner/self-employed amounts current | Pass |
| Drift test | Pass |

---

## Remaining duplicated hardcoded statutory values

**Remediated figures (partner / self-employed):** **0** independent hardcodes outside `indRequiredAmounts.ts`.

**Pre-existing HSM / 30% prose duplicates still outside their canonical modules (out of P0; flagged for follow-up):** **9** files:

1. `src/lib/visas/visaToGuideData.ts` (HSM comparison markers)
2. `src/content/visas/highly-skilled-migrant.ts`
3. `src/content/visas/hsmProposedReforms2027.ts`
4. `src/content/money/thirty-percent-ruling-nl/moneyThirtyRulingFaq.ts`
5. `src/content/money/thirty-percent-ruling-nl/moneyThirtyRulingEligibilityFactors.ts`
6. `src/components/taxes/thirtyPercentRulingPageModel.ts`
7. `src/components/taxes/averageSalaryNetherlandsPageModel.ts`
8. `src/components/jobs/minimumWageNetherlandsPageModel.ts`
9. `src/components/jobs/MinimumWageNetherlandsView.tsx`

Scorecard number below uses these **9** residual out-of-scope duplicates (remediated IND amounts = zero).

---

## Scorecard

STATUTORY DATA REMEDIATION:  
PASS

PARTNER/FAMILY CURRENT:  
YES

SELF-EMPLOYED CURRENT:  
YES

OFFICIAL-FIGURES SPINE:  
IMPLEMENTED

DUPLICATE HARDCODED VALUES REMAIN:  
9
