/**
 * Proposed Highly Skilled Migrant reforms — not yet law.
 * @see https://business.gov.nl/amendments/rules-highly-skilled-migrants-change/
 */

export const HSM_PROPOSED_REFORM_BUSINESS_GOV_URL =
  "https://business.gov.nl/amendments/rules-highly-skilled-migrants-change/" as const;

/** Cabinet letter to parliament — 4 July 2025 (proposal, not yet law). */
export const HSM_PROPOSED_REFORM_GOVERNMENT_NL_URL =
  "https://www.government.nl/latest/news/2025/07/04/government-to-tighten-up-highly-skilled-migrant-scheme" as const;

/** business.gov.nl lists a possible effective date; parliamentary approval still required. */
export const HSM_PROPOSED_REFORM_POSSIBLE_EFFECTIVE_DATE = "1 January 2027" as const;

export const hsmProposedReformsWatchTitle = "WATCH — proposed HSM tightening (not yet law)" as const;

export const hsmProposedReformsWatchSummary =
  "The Dutch government is working on stricter Highly Skilled Migrant rules. Nothing below has entered into force. Current IND salary thresholds and sponsor rules on this page still apply until parliament passes legislation and it is published in the Staatsblad." as const;

export const hsmProposedReformsWatchBullets = [
  "Higher salary floors — especially for hires under 30 (government materials discuss raising the under-30 minimum toward roughly 1.1× average gross annual salary, which would mean a materially higher gross monthly threshold than today's €4,357).",
  "Stricter recognized-sponsor requirements — financial health, stability, and trustworthiness checks; applications may be denied when compliance history raises concerns.",
  "Stronger market-conformity review — salary versus role may be scrutinised more systematically to prevent inflated offers used only to meet entry criteria.",
] as const;

export const hsmProposedReformsWatchDisclaimer =
  "Effective date not final. business.gov.nl flags a possible 1 January 2027 start date pending passage through the Tweede and Eerste Kamer and publication in the Staatsblad. Re-check the IND and business.gov.nl before you rely on any future figures in contract or relocation planning." as const;
