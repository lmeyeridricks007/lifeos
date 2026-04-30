import type { MoneyTaxReturnSignalCardConfig } from "./moneyTaxReturnTypes";

/**
 * “Worth a look” prompts for annual return preparation — orientation only.
 * `relatedToolKeys` / `relatedServiceKeys` resolve via `moneyTaxReturnResolve` (no hard-coded URLs).
 */
export const moneyTaxReturnSignalCards: readonly MoneyTaxReturnSignalCardConfig[] = [
  {
    id: "signal-invitation",
    title: "You received a request or invitation to file",
    whyItMatters:
      "A Belastingdienst letter or Mijn Belastingdienst message is a strong hint to read the wording for your tax year — it may mean filing is in scope, or that you should confirm what the message asks for.",
    recommendedAction:
      "Open the message calmly, note the year and any deadlines described, and follow official next steps — use this page’s checklist only as a notebook, not as a substitute for the letter.",
    cautionLevel: "low",
    relatedToolKeys: ["taxAdvisorsGuide"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-moved-year",
    title: "You moved during the tax year",
    whyItMatters:
      "Arrival or departure often means part-year payroll, registration timing, and sometimes income or ties in more than one place — a good moment to line up dates before you assume a “normal” employee year.",
    recommendedAction:
      "Sketch move-in / move-out dates and first/last Dutch payroll months, then read partial-year orientation with those facts in front of you.",
    cautionLevel: "low",
    relatedToolKeys: ["expatTaxesGuide"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-multiple-employers",
    title: "You had multiple employers",
    whyItMatters:
      "Several jaaropgaven or overlapping roles can make it easier to misalign withholding and income lines — usually fixable with a simple table, not panic.",
    recommendedAction:
      "Collect year-end statements from each employer and reconcile gross, periods, and any overlap before you file from memory.",
    cautionLevel: "low",
    relatedToolKeys: ["payslip"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-foreign-income-assets",
    title: "You have foreign income or assets",
    whyItMatters:
      "Income or accounts abroad can sit next to Dutch payroll in the same calendar year — the return story may be wider than salary-only, even when day-to-day life feels “mostly Dutch”.",
    recommendedAction:
      "List income and accounts by country, gather year-end evidence where you can, then use cross-border orientation before you treat everything as one-country maths.",
    cautionLevel: "high",
    relatedToolKeys: ["doubleTax", "taxResidencyNl"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-savings-investments-property",
    title: "You have savings, investments, or property",
    whyItMatters:
      "Wealth-related return topics (often discussed as Box 3 language) can matter even when you do not feel “high net worth” — the useful question is whether your facts touch those sections, not a headline label.",
    recommendedAction:
      "Make a plain list of accounts, portfolios, and property (including abroad), then read official Box guidance at a calm pace rather than forum summaries.",
    cautionLevel: "medium",
    relatedToolKeys: ["expatTaxesGuide", "howTaxesWorkInNl"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-allowance-adjustments",
    title: "You may have allowance adjustments",
    whyItMatters:
      "Healthcare or childcare allowance changes can sit next to return prep in real life — toeslagen follow different rules than some income-tax lines, but income moves can still deserve a tidy check.",
    recommendedAction:
      "Separate allowance questions from return-time questions in your notes; use estimators for planning and Toeslagen / official pages for binding allowance steps.",
    cautionLevel: "medium",
    relatedToolKeys: ["healthcare", "childcare"],
    relatedServiceKeys: [],
    extraLinks: [{ kind: "link", href: "#partner-family-allowances", label: "Partner, family & allowances (this page)" }],
  },
  {
    id: "signal-family-partner",
    title: "You changed family or partner situation",
    whyItMatters:
      "Household changes can affect which sections matter and how allowances interact with your year — worth a deliberate read when something shifted mid-year.",
    recommendedAction:
      "Update a simple household timeline (who lived where, when) and skim broad expat tax language before you assume nothing changed in return prep.",
    cautionLevel: "medium",
    relatedToolKeys: ["taxGuideForExpats"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-self-employed-mixed",
    title: "You are self-employed or have mixed income",
    whyItMatters:
      "ZZP, invoices, or employee plus side work often needs different documents than a single payslip story — still manageable with structure, sometimes easier with scoped help.",
    recommendedAction:
      "Gather income summaries and business documents you already have, use the employment type tool for orientation, then consider a scoped adviser if VAT or mixed streams stack up.",
    cautionLevel: "high",
    relatedToolKeys: ["employmentType"],
    relatedServiceKeys: ["allServices"],
  },
  {
    id: "signal-thirty-percent",
    title: "You used or applied for the 30% ruling",
    whyItMatters:
      "The facility touches payroll and return language together — eligibility and caps are policy-year sensitive, and payslip lines vary by employer setup.",
    recommendedAction:
      "Model indicative scenarios in the 30% ruling calculator, then confirm facts with payroll and official 30% facility pages rather than assumptions from peers.",
    cautionLevel: "medium",
    relatedToolKeys: ["ruling"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-left-netherlands",
    title: "You left the Netherlands during the year",
    whyItMatters:
      "Departure-year returns can include last Dutch income, ties abroad, and timing questions that do not match a tidy “full year here” story — a little structure reduces end-of-year noise.",
    recommendedAction:
      "Read departure / partial-year orientation, list expected last Dutch income lines, and note what might continue abroad — pair with tax residency language if two countries could both ask questions.",
    cautionLevel: "medium",
    relatedToolKeys: ["taxResidencyNl", "expatTaxesGuide"],
    relatedServiceKeys: [],
  },
];
