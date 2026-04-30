import type { MoneyThirtyRulingDecisionCardConfig } from "./moneyThirtyRulingContent.types";

/** Starting-point scenarios — links resolved from keys at build time. */
export const moneyThirtyRulingDecisionCards: readonly MoneyThirtyRulingDecisionCardConfig[] = [
  {
    id: "sp-comparing-offers",
    situation: "I am comparing a Dutch job offer",
    whyItMatters: "Gross alone hides ruling, pension, allowances, and extras.",
    nextAction: "Job offer comparison → 30% calculator → salary net for budgetable take-home.",
    relatedToolKeys: ["jobOffer", "ruling", "salaryNet"],
    relatedLinkLabels: ["Open job offer comparison", "Check likely 30% ruling impact", "Compare net salary"],
  },
  {
    id: "sp-have-offer",
    situation: "I already have an offer",
    whyItMatters: "The letter ≠ payroll setup. Who applies and by when decide the slip.",
    nextAction: "Working in NL → 30% calculator → Eligibility section here for threshold context.",
    relatedToolKeys: ["workingNl", "ruling", "guideEligibility"],
    relatedLinkLabels: ["Working in the Netherlands (offer & payroll)", "Open 30% ruling calculator", undefined],
  },
  {
    id: "sp-already-ruling",
    situation: "I already receive the 30% ruling",
    whyItMatters: "Labels differ by payroll. Caps and rules move with the tax year.",
    nextAction: "Payslip decoder → Salary & caps here → Tax year changes section.",
    relatedToolKeys: ["payslip", "guideSalaryNetCaps", "guideTaxYearChanges"],
    relatedLinkLabels: ["Decode payslip", undefined, undefined],
  },
  {
    id: "sp-less-than-max",
    situation: "My employer offers less than the maximum",
    whyItMatters: "Less than max is often policy, not necessarily a mistake.",
    nextAction: "30% calculator (custom %) → Employee & employer tab on this page.",
    relatedToolKeys: ["ruling", "guideEmployeeEmployer"],
    relatedLinkLabels: ["30% ruling calculator (custom %)", undefined],
  },
  {
    id: "sp-partial-year",
    situation: "I moved part-way through the year",
    whyItMatters: "Months in scope affect proration. Cross-border years add return questions.",
    nextAction: "30% calculator (months) → Tax return guide → optional scoped help below.",
    relatedToolKeys: ["rulingToolInputs", "taxReturnNl", "guideRecommendedServices"],
    relatedLinkLabels: [undefined, undefined, undefined],
  },
] as const;
