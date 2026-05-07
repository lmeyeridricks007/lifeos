import type { MoneyTaxGuideRelatedToolGroupConfig } from "../tax-guide-for-expats/taxGuideContent.types";

/**
 * Tools for the expat taxes page — short blurbs, plain English.
 */
export const moneyExpatTaxesRelatedTools: readonly MoneyTaxGuideRelatedToolGroupConfig[] = [
  {
    eyebrow: "Guides",
    description: "Longer reads that go well with this page.",
    items: [
      {
        title: "Netherlands Tax Guide for Expats",
        description: "The big map of Dutch tax topics for expats — open when you want the full tour, not just one story.",
        cta: "Open tax guide",
        tool: "taxGuideForExpats",
      },
      {
        title: "How Taxes Work in the Netherlands",
        description: "Simple base: monthly pay vs yearly form and common words — before expat-only angles.",
        cta: "Open foundation guide",
        tool: "howTaxesWorkInNl",
      },
      {
        title: "Tax Residency in the Netherlands",
        description: "Where your life is centred vs your permit — helpful before savings-abroad or two-country questions.",
        cta: "Open tax residency guide",
        tool: "taxResidencyNl",
      },
      {
        title: "Tax return in the Netherlands",
        description: "What the yearly form is for and how it ties to your pay — orientation, not a login to file.",
        cta: "Open tax return guide",
        tool: "taxReturnNl",
      },
      {
        title: "30% ruling in the Netherlands (guide)",
        description: "How the benefit works, how your employer fits in, and how it shows on pay.",
        cta: "Read 30% ruling guide",
        tool: "thirtyPercentRulingGuide",
      },
      {
        title: "Tax advisors for expats (guide)",
        description: "When paid help might be worth comparing — calm read, not us picking a firm.",
        cta: "Open tax advisors guide",
        tool: "taxAdvisorsExpats",
      },
    ],
  },
  {
    eyebrow: "Calculators & tools",
    description: "Numbers for planning — each tool page says what it assumes.",
    items: [
      {
        title: "30% ruling calculator",
        description: "Try how changes affect taxable pay — not proof you qualify.",
        cta: "Check 30% ruling",
        tool: "ruling",
      },
      {
        title: "Dutch salary (net) calculator",
        description: "Rough gross to net for budgeting — not the same as your employer’s payroll system.",
        cta: "Estimate net salary",
        tool: "salaryNet",
      },
      {
        title: "Payslip decoder",
        description: "Explains wage tax, pension lines, and holiday pay on a slip once you have one.",
        cta: "Decode payslip",
        tool: "payslip",
      },
      {
        title: "Double tax awareness tool",
        description: "A question list for two-country situations — early heads-up, not a final legal answer.",
        cta: "Check double-tax awareness",
        tool: "doubleTax",
      },
      {
        title: "Healthcare allowance estimator",
        description: "See if government healthcare help might apply to your household premiums.",
        cta: "Estimate healthcare allowance",
        tool: "healthcare",
      },
      {
        title: "Childcare cost estimator",
        description: "Plan childcare next to rent and take-home for family budgets.",
        cta: "Estimate childcare costs",
        tool: "childcare",
      },
      {
        title: "Job offer comparison tool",
        description: "Compare offers beyond gross pay — cash flow, extras, and risk flags.",
        cta: "Compare job offers",
        tool: "jobOffer",
      },
      {
        title: "Cost of living calculator",
        description: "Put tax questions next to realistic monthly costs in a city.",
        cta: "Open calculator",
        tool: "col",
      },
      {
        title: "Employment type scenario tool",
        description: "Employee vs contractor vs mix — see which questions show up first on a form.",
        cta: "Open scenarios",
        tool: "employmentType",
      },
    ],
  },
  {
    eyebrow: "Hubs",
    description: "Jump to wider Money and Taxes pages.",
    items: [
      {
        title: "Money & tax tools hub",
        description: "Browse calculators grouped for expat money planning.",
        cta: "Browse Money tools",
        tool: "moneyTools",
      },
      {
        title: "Taxes tools hub",
        description: "Tax calculators and checklists in one Taxes pillar list.",
        cta: "Browse taxes tools",
        tool: "taxesTools",
      },
    ],
  },
] as const;
