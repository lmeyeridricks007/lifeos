import type { MoneyTaxGuideStartCardConfig } from "./taxGuideContent.types";

export const moneyTaxGuideStartCards: readonly MoneyTaxGuideStartCardConfig[] = [
  {
    id: "withholding-not-final",
    title: "Payroll tax is not the full story",
    intro:
      "Your employer withholds tax through the year — that is real cash — but it is still a running estimate tied to payroll assumptions.",
    keyPoints: [
      "An annual return can still change the outcome (refund, payment, or neutral).",
      "Your payslip can look scary even when the annual picture is ordinary — learn the labels, not just the totals.",
      "Big life changes (partner income, property, cross-border days) may not be fully reflected monthly.",
    ],
    cautionNote: "",
    relatedTools: [],
    officialSourceKeys: [],
  },
  {
    id: "gross-not-net",
    title: "Gross salary ≠ net salary",
    intro:
      "Offers advertise gross because it is simple — your household budget runs on what hits the bank after payroll lines.",
    keyPoints: [
      "Payroll tax, social contributions, and pension can move the line sharply.",
      "Holiday allowance timing can make some months look misleading.",
      "30% ruling can change taxable wages when eligible — see the dedicated section and calculator.",
    ],
    cautionNote: "",
    relatedTools: [{ kind: "tool", key: "ruling" }, { kind: "tool", key: "salaryNet" }],
    officialSourceKeys: [],
  },
  {
    id: "situation-matters",
    title: "Your situation matters",
    intro:
      "Dutch tax questions are rarely answered from salary alone — residency timing, family, and assets steer which topics apply.",
    keyPoints: [
      "Arrival/departure years can look unlike a stable full year.",
      "Partner and children can change credits, allowances, and filing choices.",
      "Assets abroad can trigger questions people do not expect on day one.",
    ],
    cautionNote: "",
    relatedTools: [],
    officialSourceKeys: ["bd_international_en"],
  },
  {
    id: "tools-plus-official",
    title: "Tools help — official confirmation matters",
    intro: "Calculators are best for ranges and trade-offs, not for proving an outcome to the tax office.",
    keyPoints: [
      "Use tools to compare scenarios and build questions for HR or an adviser.",
      "Treat Belastingdienst guidance as the reference frame for deadlines and definitions.",
      "If the mistake would be expensive, buy scoped advice early rather than guessing.",
    ],
    cautionNote: "",
    relatedTools: [{ kind: "tool", key: "taxesTools" }],
    officialSourceKeys: ["bd_income_tax_individuals", "bd_filing_return"],
  },
] as const;
