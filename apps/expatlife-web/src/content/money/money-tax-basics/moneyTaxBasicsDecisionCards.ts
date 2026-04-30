import type { MoneyTaxBasicsDecisionSectionConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsDecisionCards = {
  id: "which-tax-topic-first",
  eyebrow: "Decision helper",
  title: "Which tax topic should you look at first?",
  intro: "Pick the situation that matches your next unanswered question — each card points to one primary action and supporting links on this site.",
  keyPoints: [] as const,
  cautionNote: "Cards simplify routing — expat-specific depth lives in linked guides, not in every bullet here.",
  relatedToolKeys: [] as const,
  officialSourceKeys: [] as const,
  cards: [
    {
      id: "monthly-salary",
      title: "I want to understand my monthly salary",
      intro:
        "Offers and contracts are usually quoted in gross terms; take-home depends on withholding, premiums, and toggles like pension — modelling early reduces guesswork.",
      keyPoints: [
        "Estimate net pay with the calculator, then read how payroll withholding relates to your final tax position on this page.",
      ] as const,
      relatedToolKeys: ["salaryNet"] as const,
      internalAnchors: [{ hash: "payroll-vs-return", label: "Read payroll vs annual return (this page)" }] as const,
      officialSourceKeys: ["bd_payroll_taxes"] as const,
    },
    {
      id: "payslip-lines",
      title: "I want to understand my payslip",
      intro:
        "The payslip is where most employees first see Dutch tax in practice — line labels vary by employer, but the categories repeat.",
      keyPoints: [
        "Paste or walk through a real slip in the decoder once you have one — planning text cannot replace your actual lines.",
      ] as const,
      relatedToolKeys: ["payslip"] as const,
      internalAnchors: [] as const,
      officialSourceKeys: ["bd_payroll_taxes"] as const,
    },
    {
      id: "thirty-percent",
      title: "I may qualify for 30% ruling",
      intro:
        "The facility can change take-home planning when it applies, but eligibility and payroll setup are employer-linked — calculators are indicative only.",
      keyPoints: [
        "Run scenario checks in the ruling calculator, then confirm with payroll or an adviser before you rely on any number.",
      ] as const,
      relatedToolKeys: ["ruling"] as const,
      internalAnchors: [] as const,
      officialSourceKeys: ["bd_30_percent_facility"] as const,
    },
    {
      id: "household-allowances",
      title: "I have partner, children, or allowance questions",
      intro:
        "Toeslagen and return-time outcomes both react to household composition and income — similar words, different mechanics than a simple payslip line.",
      keyPoints: [
        "Model healthcare allowance and childcare costs alongside salary — then read allowances vs deductions above if terms feel mixed up.",
      ] as const,
      relatedToolKeys: ["healthcare", "childcare"] as const,
      internalAnchors: [{ hash: "credits-deductions-allowances", label: "Credits, deductions & allowances (this page)" }] as const,
      officialSourceKeys: ["toeslagen_portal", "gov_income_tax_allowances"] as const,
    },
    {
      id: "wealth-cross-border",
      title: "I have savings, investments, or foreign assets",
      intro:
        "Box 3 and cross-border reporting can matter even when salary feels “simple” — mapping this early keeps filing calmer.",
      keyPoints: [
        "Read the scenario-led expat guide for messy facts, then run the double-tax awareness prompts if more than one country could ask questions.",
      ] as const,
      relatedToolKeys: ["expatTaxesGuide", "doubleTax"] as const,
      internalAnchors: [] as const,
      officialSourceKeys: ["bd_international_en"] as const,
    },
    {
      id: "self-employed-mixed",
      title: "I am self-employed or have mixed income",
      intro:
        "Invoices, VAT-style concepts, and timing interact with wage income differently than a single-employer payslip story — extra clarity usually pays off.",
      keyPoints: [
        "Use the broader tax guide for orientation, compare the taxes hub for filing context, and consider scoped professional support when facts are non-standard.",
      ] as const,
      relatedToolKeys: ["taxGuideForExpats", "taxAdvisorsGuide"] as const,
      internalAnchors: [] as const,
      officialSourceKeys: ["bd_income_tax_individuals"] as const,
    },
  ],
} as const satisfies MoneyTaxBasicsDecisionSectionConfig;
