import type { MoneyTaxBasicsMisunderstandingsConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsMisunderstandings = {
  id: "misunderstandings",
  eyebrow: "Reality check",
  title: "What people often misunderstand",
  intro: "Eight patterns worth correcting early — so planning stays proportional to your facts.",
  keyPoints: [] as const,
  cautionNote: "Patterns are educational — your letterbox and Belastingdienst account still win when they disagree with a summary.",
  relatedToolKeys: ["taxGuideForExpats", "expatTaxesGuide"] as const,
  officialSourceKeys: ["bd_income_tax_individuals", "bd_filing_return"] as const,
  rows: [
    {
      id: "m1",
      title: "Payroll tax is not always the final answer",
      body: "Withholding is a practical estimate through the year — your final assessment can still differ.",
    },
    {
      id: "m2",
      title: "Gross salary is not take-home pay",
      body: "Premiums, pension, and tax all sit between the offer headline and what hits your bank account.",
    },
    {
      id: "m3",
      title: "The annual return can still matter",
      body: "Even when payroll felt “done”, credits, partner facts, or assets can change the year-end story.",
    },
    {
      id: "m4",
      title: "Allowances are not the same as deductions",
      body: "Toeslagen run on their own rules — do not mentally file them as “just another tax line”.",
    },
    {
      id: "m5",
      title: "Box 3 can matter even if you are not “rich”",
      body: "Reporting concepts can include smaller foreign balances — use official definitions for your year instead of assumptions.",
    },
    {
      id: "m6",
      title: "Partner and family situation can change outcomes",
      body: "Household tests and tax return sections both react to family facts — keep them in sync conceptually.",
    },
    {
      id: "m7",
      title: "Calculators are estimates, not official decisions",
      body: "Tools help you plan — Belastingdienst letters and professional advice exist for binding outcomes.",
    },
    {
      id: "m8",
      title: "Tax rules can change by year",
      body: "Treat any summary as time-stamped orientation — confirm current-year guidance before acting.",
    },
  ],
} as const satisfies MoneyTaxBasicsMisunderstandingsConfig;
