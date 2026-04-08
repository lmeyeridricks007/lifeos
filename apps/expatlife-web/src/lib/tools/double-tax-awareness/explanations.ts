import type { ReliefMethod, ReliefMethodKey } from "./types";

const RELIEF_TEXT: Record<ReliefMethodKey, Omit<ReliefMethod, "whyLikely">> = {
  exemption_possible: {
    key: "exemption_possible",
    title: "Exemption method may apply",
    plainEnglish:
      "Income may still need to be declared in a Dutch return, but Dutch tax is often reduced for income that is primarily taxable in another country.",
  },
  tax_credit_possible: {
    key: "tax_credit_possible",
    title: "Tax credit method may apply",
    plainEnglish:
      "You may pay tax in the source country first, then offset part of that foreign tax against Dutch tax where domestic rules and treaty rules allow.",
  },
  treaty_review_needed: {
    key: "treaty_review_needed",
    title: "Treaty review is likely needed",
    plainEnglish:
      "Dual homes, split work locations, or mixed payroll patterns often need treaty tie-breaker and article-by-article review by a specialist.",
  },
  unclear_or_domestic: {
    key: "unclear_or_domestic",
    title: "Domestic relief only or unclear from this input",
    plainEnglish:
      "Facts may not be complete enough for a treaty direction. Keep records and verify with official guidance or an advisor.",
  },
};

export function reliefMethodFromKey(key: ReliefMethodKey, whyLikely: string): ReliefMethod {
  return {
    ...RELIEF_TEXT[key],
    whyLikely,
  };
}

export const THIRTY_RULING_CONTEXT_TEXT =
  "The 30% ruling may change taxable salary in Dutch payroll, but it does not replace treaty analysis or remove foreign filing duties and record-keeping needs for foreign-source income.";

/** Shown near 30% ruling inputs and in results when ruling may apply. */
export const THIRTY_RULING_ADVISORY = {
  title: "Important: the 30% ruling does not by itself remove foreign filing duties or replace treaty analysis.",
  bullets: [
    "It changes Dutch payroll treatment for qualifying salary components.",
    "It does not determine treaty residency or tie-breaker outcomes.",
    "It does not automatically remove foreign tax obligations elsewhere.",
    "Foreign-source income may still require declaration and relief mapping in the Netherlands.",
  ],
} as const;
