import type { MoneyTaxReturnChecklistCategoryConfig } from "./moneyTaxReturnTypes";

/**
 * Document-oriented checklist — `items` are prompts, not filing rules.
 * `relatedLinks` resolve via registry (tools) or explicit internal paths.
 */
export const moneyTaxReturnPreparationChecklist: readonly MoneyTaxReturnChecklistCategoryConfig[] = [
  {
    id: "identity",
    title: "Identity / admin",
    description: "Basics the return and portals usually ask for first.",
    appliesWhen: "Always relevant once you intend to file or respond to a letter.",
    items: ["BSN and identity basics", "DigiD / login — follow official help if you file online", "Address / registration if you moved during the year"],
    relatedLinks: [{ kind: "tool", key: "howTaxesWorkInNl", label: "How taxes work (foundation)" }],
  },
  {
    id: "employment",
    title: "Employment and salary",
    description: "Year-end employment evidence — the backbone for many employee returns.",
    appliesWhen: "You had Dutch employment or hybrid payroll in the year.",
    items: ["Jaaropgave from each employer", "Payslips for odd months you need to reconcile", "Employer names and date ranges", "Pension / benefit statements if relevant"],
    relatedLinks: [
      { kind: "tool", key: "payslip" },
      { kind: "tool", key: "salaryNet" },
    ],
  },
  {
    id: "personal",
    title: "Personal situation",
    description: "Household and allowances sit next to return prep in real life — keep systems separate in your notes.",
    appliesWhen: "Partner, children, housing, or allowance questions touch your year.",
    items: ["Partner / family fields the return actually asks for", "Allowances (e.g. healthcare) — different system from some return lines", "Housing / mortgage only if you know they apply"],
    relatedLinks: [
      { kind: "link", href: "#partner-family-allowances", label: "Partner, family & allowances (this page)" },
      { kind: "tool", key: "healthcare" },
      { kind: "tool", key: "childcare" },
    ],
  },
  {
    id: "assets",
    title: "Assets and cross-border",
    description: "Wealth and foreign lines — often where return prep widens beyond payslips.",
    appliesWhen: "You held accounts, investments, or property (including abroad), or had foreign income.",
    items: ["Savings and investments — including abroad", "Foreign income or property evidence", "Prior-country papers in overlap years"],
    relatedLinks: [
      { kind: "tool", key: "doubleTax" },
      { kind: "tool", key: "taxResidencyNl" },
      { kind: "tool", key: "expatTaxesGuide" },
    ],
  },
  {
    id: "special",
    title: "Special situations",
    description: "Extra timelines and paperwork when the year is not “one employer, full year”.",
    appliesWhen: "Ruling, move, multiple employers, or self-employment might apply.",
    items: ["30% ruling paperwork + payroll context", "Arrival / departure timeline", "Multiple employers simple table", "ZZP invoices / summaries if relevant"],
    relatedLinks: [
      { kind: "tool", key: "ruling" },
      { kind: "tool", key: "employmentType" },
      { kind: "link", href: "#arrival-departure-year", label: "Arrival / departure year (this page)" },
    ],
  },
];
