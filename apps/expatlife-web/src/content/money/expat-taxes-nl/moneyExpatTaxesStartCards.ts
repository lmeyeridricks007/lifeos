import type { MoneyExpatTaxesStartCardConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesStartCards: readonly MoneyExpatTaxesStartCardConfig[] = [
  {
    id: "split-story",
    title: "Your year may be a split story",
    intro:
      "Arrival and departure years rarely look like a textbook twelve-month employee template. Income, deductions, and documentation can span more than one country in memory even when payroll feels Dutch.",
    keyPoints: [
      "Partial-year filing can need extra sections and evidence — not because you did something wrong.",
      "Registration dates and employer start dates are not decorative details.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
  {
    id: "payroll-first",
    title: "You meet tax through payroll first",
    intro:
      "Most expats feel Dutch tax on the payslip long before they think about an annual return. That is useful — and it can also hide topics that mainly show up at return time.",
    keyPoints: [
      "Withholding is a running estimate — not always identical to the final annual picture.",
      "A payslip decoder helps when labels do not match what you read online.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
  {
    id: "cross-border",
    title: "Cross-border is a vocabulary problem first",
    intro:
      "Foreign accounts, foreign employers, or travel-heavy work can trigger questions you did not budget time for — especially when forum posts mix countries casually.",
    keyPoints: [
      "Treat cross-border prompts as checklists, not shame — complexity is common.",
      "Use the double-tax awareness tool to surface questions early, then confirm with official guidance.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
  {
    id: "household",
    title: "Household economics are part of the tax story",
    intro:
      "Partner income, children, premiums, and allowances change cash flow and sometimes filing choices — similar words can mean different portals (toeslagen vs return-time items).",
    keyPoints: [
      "Model healthcare allowance and childcare when they affect monthly realism.",
      "Keep allowances mentally separate from return deductions so expectations stay sane.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
] as const;
