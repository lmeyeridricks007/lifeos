import type { MoneyTaxBasicsPayrollReturnConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsPayrollReturnCards = {
  id: "payroll-vs-return",
  eyebrow: "Core distinction",
  title: "Payroll tax vs income tax return",
  subtitle:
    "During the year: your employer applies withholding (often discussed as loonheffing) so take-home matches tables as closely as practical. After the year: the return (when you file) can still add or correct items payroll never saw.",
  intro: "Two timelines, one tax year: monthly payslip cash flow plus a possible year-end filing layer — compare them instead of picking one as “the whole truth”.",
  keyPoints: [
    "Withholding ≈ planning, not a promise of the final assessment.",
    "Return is where many credits and unknown facts first fully enter the picture.",
    "Read payslip and return together — they answer different slices of the same year.",
  ],
  cautionNote: "Treat withholding tables as employer-side mechanics — your return still depends on full-year facts.",
  relatedToolKeys: ["salaryNet", "payslip", "expatTaxesGuide", "ruling", "doubleTax"] as const,
  officialSourceKeys: ["bd_payroll_taxes", "bd_filing_return"] as const,
  timingHighlight: [
    {
      id: "during-year",
      title: "During the year",
      kicker: "Cash flow",
      body: "Payslip story — gross, premiums, withholding, net. This is what most employees feel first.",
      keyPoints: [] as const,
      relatedToolKeys: ["payslip"] as const,
      officialSourceKeys: ["bd_payroll_taxes"] as const,
    },
    {
      id: "after-year",
      title: "After the calendar year",
      kicker: "Reconciliation",
      body: "Return + decision — partner, assets, credits, and other facts can sit here. Outcome may be refund, payment, or little change.",
      keyPoints: [] as const,
      relatedToolKeys: [] as const,
      officialSourceKeys: ["bd_filing_return"] as const,
    },
  ],
  comparisonCards: [
    {
      id: "payroll",
      title: "Payroll withholding",
      body: "Held each pay period from wages — payslip lines reflect employer setup and tables.",
      keyPoints: [] as const,
      relatedToolKeys: ["payslip"] as const,
      officialSourceKeys: ["bd_payroll_taxes"] as const,
    },
    {
      id: "return",
      title: "Annual tax return",
      body: "Structured filing for the full year — may be required or voluntary-but-useful depending on letters and facts.",
      keyPoints: [] as const,
      relatedToolKeys: ["taxGuideForExpats"] as const,
      officialSourceKeys: ["bd_filing_return"] as const,
    },
    {
      id: "final",
      title: "Final assessment",
      body: "Belastingdienst decision after processing — this is the binding story for that year’s income tax thread.",
      keyPoints: [] as const,
      relatedToolKeys: ["taxesHub"] as const,
      officialSourceKeys: ["bd_filing_return"] as const,
    },
  ],
  payrollCtaToolKeys: ["salaryNet", "payslip", "expatTaxesGuide", "ruling", "doubleTax"] as const,
} as const satisfies MoneyTaxBasicsPayrollReturnConfig;
