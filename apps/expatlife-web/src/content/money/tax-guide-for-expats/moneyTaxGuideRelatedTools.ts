import type { MoneyTaxGuideRelatedToolGroupConfig } from "./taxGuideContent.types";

export const moneyTaxGuideRelatedTools: readonly MoneyTaxGuideRelatedToolGroupConfig[] = [
  {
    eyebrow: "Banking (Netherlands)",
    description: "Pair everyday Dutch banking with how you send money and what fees can look like in practice.",
    items: [
      {
        title: "Bank comparison tool",
        description: "Editorial fit scores for traditional banks, app-first banks, and transfer specialists — not live prices.",
        cta: "Compare banks",
        tool: "bankComparison",
      },
      {
        title: "Banking cost estimator",
        description: "Monthly and yearly euro planning bands — same fee categories as our Banking fees guide; confirm on each site.",
        cta: "Estimate banking costs",
        tool: "bankingCostEstimator",
      },
    ],
  },
  {
    eyebrow: "Salary & offers",
    description: "Turn offers into monthly realism.",
    items: [
      {
        title: "Dutch salary (net) calculator",
        description: "Gross-to-net with common toggles — indicative planning, not payroll.",
        cta: "Estimate net salary",
        tool: "salaryNet",
      },
      {
        title: "Job offer comparison tool",
        description: "Compare packages beyond gross: cash flow, support, and risk flags.",
        cta: "Compare offers",
        tool: "jobOffer",
      },
      {
        title: "Payslip decoder",
        description: "Understand what each line is trying to say once you have a payslip.",
        cta: "Decode payslip",
        tool: "payslip",
      },
    ],
  },
  {
    eyebrow: "Tax facilities & allowances",
    description: "Facilities and household support that interact with tax life.",
    items: [
      {
        title: "30% ruling calculator",
        description: "Model ruling impact on taxable wages in scenarios — confirm eligibility separately.",
        cta: "Check 30% ruling",
        tool: "ruling",
      },
      {
        title: "Healthcare allowance estimator",
        description: "See if allowance mechanics might matter for your household premiums.",
        cta: "Estimate healthcare allowance",
        tool: "healthcare",
      },
      {
        title: "Childcare cost estimator",
        description: "Budget childcare alongside rent and net salary — especially for families.",
        cta: "Estimate childcare costs",
        tool: "childcare",
      },
    ],
  },
  {
    eyebrow: "Cross-border & housing context",
    description: "Pair tax planning with where and how you live.",
    items: [
      {
        title: "Double tax awareness tool",
        description: "Surface likely cross-border tax questions before they become surprises.",
        cta: "Check double-tax awareness",
        tool: "doubleTax",
      },
      {
        title: "Cost of living calculator",
        description: "Translate net salary into monthly life pressure in a city.",
        cta: "Open calculator",
        tool: "col",
      },
      {
        title: "Rent affordability calculator",
        description: "Stress-test housing cost against take-home cash.",
        cta: "Check rent",
        tool: "rent",
      },
    ],
  },
  {
    eyebrow: "Guides",
    description: "Broader orientation when you want narrative, not sliders.",
    items: [
      {
        title: "Tax residency in the Netherlands",
        description: "Tax vs immigration residency, ties, and cross-border orientation — not a determination tool.",
        cta: "Open tax residency guide",
        tool: "taxResidencyNl",
      },
      {
        title: "Tax return in the Netherlands",
        description: "What the annual return does, prep checklists, and payroll vs filing — orientation, not a filing portal.",
        cta: "Open tax return guide",
        tool: "taxReturnNl",
      },
      {
        title: "How taxes work in the Netherlands",
        description: "Foundation map for payroll, return, and boxes before you zoom into expat angles.",
        cta: "Open foundation guide",
        tool: "howTaxesWorkInNl",
      },
      {
        title: "Working in the Netherlands",
        description: "Connect tax to permits, payroll timing, and the first months of a work-led move.",
        cta: "Open guide",
        tool: "workingNl",
      },
      {
        title: "Money & tax tools hub",
        description: "Browse all calculators in the Money category in one place.",
        cta: "Browse tools",
        tool: "moneyTools",
      },
    ],
  },
] as const;
