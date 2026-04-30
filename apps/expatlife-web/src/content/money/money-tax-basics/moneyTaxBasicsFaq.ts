import type { MoneyTaxBasicsFaqConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsFaq = {
  id: "faq",
  title: "Frequently asked questions",
  intro: "Short answers — always pair with official guidance for your year.",
  keyPoints: [] as const,
  cautionNote: "FAQ text is not tax advice and may omit edge cases that matter to you.",
  relatedToolKeys: ["taxesHub", "taxGuideForExpats"] as const,
  officialSourceKeys: ["bd_income_tax_individuals", "bd_filing_return"] as const,
  items: [
    {
      q: "How does tax work in the Netherlands?",
      a: "Most employees meet tax first as monthly payroll withholding on the payslip, then optionally through an annual income tax return that reconciles the full year. Credits, deductions, and allowances are separate ideas — this page maps them at a high level.",
      officialSourceKeys: ["bd_payroll_taxes", "bd_filing_return"] as const,
    },
    {
      q: "What is payroll tax?",
      a: "Payroll tax in everyday Dutch employment usually refers to withholding (often discussed as loonheffing) — money held by your employer each pay period. It is designed to approximate your annual income tax position, but it is not always identical to the final assessment.",
      officialSourceKeys: ["bd_payroll_taxes"] as const,
    },
    {
      q: "Is payroll tax the same as final income tax?",
      a: "Not necessarily. Withholding follows tables and employer setup; your final income tax can still change after credits, deductions, partner facts, assets, and other return-time items.",
      officialSourceKeys: ["bd_filing_return"] as const,
    },
    {
      q: "Do I need to file a tax return?",
      a: "It depends on your year, letters from Belastingdienst, and personal situation. Some people must file; others file because a refund or correction is likely. Use official guidance for your year rather than a general article.",
      officialSourceKeys: ["bd_filing_return"] as const,
    },
    {
      q: "What are Box 1, Box 2, and Box 3?",
      a: "They are filing buckets: broadly work and home-related income in Box 1, substantial shareholding situations in Box 2, and savings, investments, and wealth reporting in Box 3 — always confirm definitions for your tax year on official sites.",
      officialSourceKeys: ["bd_income_tax_individuals"] as const,
    },
    {
      q: "What are tax credits and allowances?",
      a: "Tax credits reduce tax due; allowances (like certain toeslagen) are separate benefit-style supports with their own income and household rules — similar words, different mechanics.",
      officialSourceKeys: ["gov_income_tax_allowances", "toeslagen_portal"] as const,
    },
    {
      q: "Why is my gross salary different from my net salary?",
      a: "Gross is before withholding, social premiums, pension, and other payslip lines. Net is what is paid to your bank — use a calculator and then a real payslip to align assumptions.",
      relatedToolKeys: ["salaryNet", "payslip"] as const,
      officialSourceKeys: ["bd_payroll_taxes"] as const,
    },
    {
      q: "When should I use a tax advisor?",
      a: "Consider help when you have cross-border income or assets, self-employment, a messy move year, complex family facts, or you simply want a scoped professional review before filing.",
      relatedToolKeys: ["taxGuideForExpats", "expatTaxesGuide"] as const,
      officialSourceKeys: [] as const,
    },
  ],
} as const satisfies MoneyTaxBasicsFaqConfig;
