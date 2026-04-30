import type { MoneyTaxBasicsStartHereConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsStartCards = {
  id: "start-here",
  eyebrow: "Start here",
  title: "The Dutch tax system in plain English",
  intro: "Four ideas that keep people oriented before they dive into forms and calculators.",
  keyPoints: [] as const,
  cautionNote: "This section stays at national income-tax level — municipal charges are out of scope.",
  relatedToolKeys: [] as const,
  officialSourceKeys: [] as const,
  cards: [
    {
      id: "not-one-thing",
      title: "Tax is not just one thing",
      intro: "National income tax sits alongside other mechanics you may meet in real life.",
      keyPoints: [
        "Payroll withholding during the year",
        "Annual income tax reconciliation",
        "Allowances (toeslagen) as separate household support",
        "Local or municipal charges can exist — this page stays focused on national income-tax basics",
      ],
      cautionNote: undefined,
      relatedToolKeys: [] as const,
      officialSourceKeys: [] as const,
    },
    {
      id: "employer-withholds",
      title: "Your employer may withhold tax monthly",
      intro: "Most employees see tax first through the payslip, not through a letter from the tax office.",
      keyPoints: [
        "Payroll withholding reduces cash paid each month",
        "The payslip shows gross, premiums, and net",
        "Deductions at source are not always the same as your final annual outcome",
      ],
      relatedToolKeys: [] as const,
      officialSourceKeys: ["bd_payroll_taxes"] as const,
    },
    {
      id: "annual-settles",
      title: "The annual tax return can settle the difference",
      intro: "A return reconciles what happened during the year with your full personal picture.",
      keyPoints: [
        "You might see a refund, a payment, or little change",
        "Partner, children, assets, and cross-border facts can all matter",
        "Foreign ties often add questions — not always complexity, but extra documentation",
      ],
      relatedToolKeys: [] as const,
      officialSourceKeys: ["bd_filing_return", "bd_international_en"] as const,
    },
    {
      id: "situation-matters",
      title: "Your situation changes the answer",
      intro: "The same rule book produces different outcomes when facts differ.",
      keyPoints: [
        "Employment vs self-employment vs mixed income",
        "Partner and family structure",
        "Savings, investments, and property",
        "30% ruling when it applies",
        "Arrival or departure year timing",
      ],
      relatedToolKeys: [] as const,
      officialSourceKeys: ["bd_30_percent_facility"] as const,
    },
  ],
} as const satisfies MoneyTaxBasicsStartHereConfig;
