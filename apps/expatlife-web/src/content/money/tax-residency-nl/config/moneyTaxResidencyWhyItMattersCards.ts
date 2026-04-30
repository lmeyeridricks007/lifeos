import type { TaxResidencyRelatedLinkDef } from "./moneyTaxResidencyTypes";

export type MoneyTaxResidencyWhyItMattersCardConfig = {
  id: string;
  title: string;
  body: string;
  impact: string;
  examples: readonly string[];
  relatedLinks: readonly TaxResidencyRelatedLinkDef[];
};

export const moneyTaxResidencyWhyItMattersCards: readonly MoneyTaxResidencyWhyItMattersCardConfig[] = [
  {
    id: "income",
    title: "Income reporting",
    body: "Residency facts can affect whether the Dutch return is a simple salary story or needs wider income context.",
    impact: "Impact: you may need to line up income by country and date before deciding which return sections deserve attention.",
    examples: [
      "Dutch salary starts in August after foreign salary from January to July.",
      "You keep freelance invoices or rental income from another country.",
      "You receive a Dutch jaaropgave, but it does not describe the whole calendar year.",
    ],
    relatedLinks: [
      { kind: "tool", key: "howTaxesWorkInNl", label: "How taxes work in the Netherlands" },
      { kind: "tool", key: "expatTaxesGuide", label: "Expat taxes in the Netherlands" },
    ],
  },
  {
    id: "box3",
    title: "Assets / Box 3 awareness",
    body: "Savings, investments, property, and accounts abroad are a common reason people revisit assumptions after moving.",
    impact: "Impact: even if payroll is simple, assets can create return questions that do not appear on a payslip.",
    examples: [
      "You still hold a brokerage account in your previous country.",
      "You own foreign property or keep significant savings abroad.",
      "You moved countries but did not close old investment or crypto accounts.",
    ],
    relatedLinks: [
      { kind: "tool", key: "expatTaxesGuide", label: "Expat taxes (foreign assets section)" },
      { kind: "tool", key: "doubleTax", label: "Double tax awareness tool" },
    ],
  },
  {
    id: "allowances",
    title: "Allowances and household situation",
    body: "Toeslagen and return-time household concepts run on their own rules, but residency timing and household facts can sit beside them.",
    impact: "Impact: partner, children, income changes, and move dates can affect what you estimate, apply for, or later repay.",
    examples: [
      "Your partner arrives later and household income changes mid-year.",
      "You apply for healthcare allowance before your annual income is settled.",
      "Childcare starts before the whole family situation feels administratively complete.",
    ],
    relatedLinks: [
      { kind: "tool", key: "healthcare", label: "Healthcare allowance estimator" },
      { kind: "tool", key: "taxGuideForExpats", label: "Tax guide for expats" },
    ],
  },
  {
    id: "dt",
    title: "Double tax risk",
    body: "Two countries may each have questions in some years; treaties exist to reduce double taxation, but facts and wording matter.",
    impact: "Impact: you need to identify the overlap before assuming one country automatically steps back.",
    examples: [
      "You worked remotely from abroad while Dutch payroll continued.",
      "You received income from a foreign employer after moving to the Netherlands.",
      "Both countries issued forms or annual statements for the same year.",
    ],
    relatedLinks: [
      { kind: "tool", key: "doubleTax", label: "Double tax awareness tool" },
      { kind: "tool", key: "howTaxesWorkInNl", label: "How taxes work (foundation)" },
    ],
  },
  {
    id: "complex",
    title: "Annual return complexity",
    body: "Arrival, departure, and overlapping income years are where a normal-looking return can become harder to read.",
    impact: "Impact: organised dates and documents can save time; a scoped professional review can be worthwhile when several facts stack together.",
    examples: [
      "You arrive mid-year, start Dutch payroll, and keep old-country assets.",
      "You leave the Netherlands but receive final Dutch salary or bonus later.",
      "You have partner timing, allowances, foreign income, and Box 3 questions in one return year.",
    ],
    relatedLinks: [
      { kind: "tool", key: "expatTaxesGuide", label: "Expat taxes guide" },
      { kind: "tool", key: "taxesHub", label: "Taxes hub" },
    ],
  },
] as const;
