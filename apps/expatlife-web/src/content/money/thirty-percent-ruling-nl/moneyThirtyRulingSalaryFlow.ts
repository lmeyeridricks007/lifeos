import type { MoneyThirtyRulingSalaryFlowStepConfig } from "./moneyThirtyRulingContent.types";

/** Six-step salary journey — tool keys resolve to hrefs in the page model. */
export const moneyThirtyRulingSalaryFlow: readonly MoneyThirtyRulingSalaryFlowStepConfig[] = [
  {
    id: "sf-gross",
    title: "Gross salary package",
    body: "Start from the full offer: base, holiday allowance, bonuses, pension text, and any ruling wording. Headline gross alone is rarely enough to compare two packages fairly.",
    relatedToolKeys: ["jobOffer"],
  },
  {
    id: "sf-eligibility",
    title: "Eligibility and employer policy",
    body: "Facts (incoming employee story, distance, timing) meet official tests for the tax year; employer willingness and payroll policy decide what is applied on slip — even when someone is broadly eligible.",
    relatedToolKeys: ["ruling", "guideEmployeeEmployer"],
  },
  {
    id: "sf-allowance",
    title: "Tax-free allowance calculation",
    body: "For planning, the 30% ruling calculator applies maintained tax-year configuration (norms, caps, months in scope) to estimate the untaxed allowance slice — not an approval letter.",
    relatedToolKeys: ["ruling"],
  },
  {
    id: "sf-taxable",
    title: "Taxable salary / payroll setup",
    body: "Payroll derives taxable wages after facility rules and employer choices (e.g. custom allowance %). Vendor lines and internal mapping determine what you see versus what you imagined from a gross figure.",
    relatedToolKeys: ["workingNl"],
  },
  {
    id: "sf-net",
    title: "Monthly net salary estimate",
    body: "Withholding and premiums run on payroll facts. Use the Dutch salary net calculator for indicative take-home once you know how taxable pay is shaped — each tool documents its limits.",
    relatedToolKeys: ["salaryNet"],
  },
  {
    id: "sf-slip-return",
    title: "Payslip and annual tax return context",
    body: "The payslip is month-by-month; the annual return can still reconcile credits, partner, assets, and other year facts. Pair slip literacy with return orientation when your year is not “salary only.”",
    relatedToolKeys: ["payslip", "taxReturnNl"],
  },
] as const;
