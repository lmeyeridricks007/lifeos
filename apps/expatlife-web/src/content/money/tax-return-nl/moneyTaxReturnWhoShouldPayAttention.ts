import type { MoneyTaxReturnWhoCardConfig } from "./moneyTaxReturnTypes";

/** Scenario cards — filing attention prompts; `relatedToolKey` resolves in the page model. */
export const moneyTaxReturnWhoShouldPayAttention: readonly MoneyTaxReturnWhoCardConfig[] = [
  {
    id: "invitation",
    title: "You received an invitation or request to file",
    whyItMatters: "Official letters and Mijn Belastingdienst messages are the most direct signal that the return process is in scope for you for a year.",
    whatToCheckNext: "Open the message carefully, note the tax year it refers to, and follow Belastingdienst wording for deadlines and next actions.",
    relatedToolKey: "taxAdvisorsGuide",
  },
  {
    id: "moved",
    title: "You moved to or from the Netherlands during the year",
    whyItMatters: "Part-year patterns, overlap income, and registration timing can make the return story wider than a single-country payslip view.",
    whatToCheckNext: "Sketch dates and income lines, then read expat tax and tax residency orientation before you assume a headline label.",
    relatedToolKey: "expatTaxesGuide",
  },
  {
    id: "jobs",
    title: "You changed jobs or had multiple employers",
    whyItMatters: "Multiple jaaropgaven and overlapping payroll periods deserve a simple table so withholding and income lines stay aligned.",
    whatToCheckNext: "Collect year-end statements from each employer and scan payslip lines if amounts look unfamiliar.",
    relatedToolKey: "payslip",
  },
  {
    id: "ruling",
    title: "You may qualify for or use the 30% ruling",
    whyItMatters: "The facility interacts with payroll and return topics — eligibility and caps are policy-year sensitive.",
    whatToCheckNext: "Model scenarios in the 30% ruling calculator, then confirm facts with payroll and official 30% facility pages.",
    relatedToolKey: "ruling",
  },
  {
    id: "family",
    title: "You have a partner, children, or allowance questions",
    whyItMatters: "Household setup can affect return sections and toeslagen mechanics — similar words, different systems.",
    whatToCheckNext: "Separate return-time questions from allowance applications; use estimators for planning and Toeslagen for binding allowance steps.",
    relatedToolKey: "healthcare",
  },
  {
    id: "assets",
    title: "You have savings, investments, property, or foreign assets",
    whyItMatters: "Box 3 discussions catch people who thought only salary mattered — especially when accounts or property remain abroad.",
    whatToCheckNext: "List accounts and property by country and read expat tax plus official international topics calmly.",
    relatedToolKey: "expatTaxesGuide",
  },
  {
    id: "foreign",
    title: "You have foreign income or remote-work complexity",
    whyItMatters: "Employer location, workdays, and where you lived can each be separate data points when more than one country could care about the same year.",
    whatToCheckNext: "Run double-tax awareness as a checklist, then confirm with international Belastingdienst pages or an adviser if flags appear.",
    relatedToolKey: "doubleTax",
  },
  {
    id: "zzp",
    title: "You are self-employed or have mixed income",
    whyItMatters: "ZZP or mixed employee and business flows often need different documents and sometimes different official reading than a single payslip year.",
    whatToCheckNext: "Use the employment type tool for orientation, then seek scoped professional help if invoices, VAT, or mixed streams stack up.",
    relatedToolKey: "employmentType",
  },
];
