import type { MoneyTaxGuideJourneyStepConfig, MoneyTaxGuideSectionConfig } from "./taxGuideContent.types";

export const moneyTaxGuideHowTaxWorks: MoneyTaxGuideSectionConfig = {
  id: "how-dutch-tax-works",
  eyebrow: "Big picture",
  title: "How Dutch tax works in practice",
  subtitle: "A plain-language map — not a substitute for definitions in official guidance.",
  intro:
    "For most employees, Dutch income tax is a calendar-year story: monthly withholding at work, then an annual return that can still change the outcome. Resident vs non-resident labels change which obligations apply — confirm yours for your year in official guidance.",
  keyPoints: [
    "Boxes (1, 2, 3) are a filing structure: work and home-related income broadly sit in Box 1, substantial shareholdings in Box 2, and certain wealth in Box 3 — each has different logic.",
    "Deductions and credits can change the final number; some show up through payroll, others mainly at return time.",
    "Allowances (like healthcare allowance) are separate family-support mechanics — useful money, but not the same thing as a tax deduction.",
  ],
  cautionNote: "",
  relatedTools: [],
  officialSourceKeys: ["bd_income_tax_individuals", "bd_filing_return"],
  flowSteps: ["Income", "Payroll withholding", "Payslip", "Annual tax return", "Final assessment / refund / payment"],
};

export const moneyTaxGuideSalaryPayslips: MoneyTaxGuideSectionConfig = {
  id: "salary-payslips",
  eyebrow: "Monthly reality",
  title: "Salary, payroll tax, and payslips",
  subtitle: "Why the payslip is the first practical teacher of Dutch tax for employees.",
  intro:
    "Gross is the offer headline; net is what you live on after loonheffing, social premiums, and often pension. Holiday pay timing can make some months look odd. 30% ruling shows up differently per employer — compare lines to a calculator, not to a blog screenshot.",
  keyPoints: [
    "Loonheffing is withholding through the year — not always identical to your final annual tax.",
    "Vakantiegeld may be included in “annual gross” or paid separately — read the offer carefully.",
    "Payslip labels vary; use the decoder once you have a real slip.",
  ],
  cautionNote: "",
  relatedTools: [
    { kind: "tool", key: "payslip" },
    { kind: "tool", key: "salaryNet" },
    { kind: "tool", key: "jobOffer" },
  ],
  officialSourceKeys: ["bd_payroll_taxes"],
};

export const moneyTaxGuideTaxReturnBasics: MoneyTaxGuideSectionConfig = {
  id: "tax-return-basics",
  eyebrow: "Annual cycle",
  title: "Income tax return basics",
  subtitle: "Why some expats file even when payroll felt “done”.",
  intro:
    "A return reconciles withholding with the full-year rules — you might see a refund, a top-up, or little change.",
  keyPoints: [
    "Arrival or departure years often need extra sections and documentation.",
    "Partner income, foreign income, property, or Box 3 can shift what you declare.",
    "Filing windows are communicated by Belastingdienst for each year — use their letters and Mijn Belastingdienst.",
  ],
  cautionNote: "",
  relatedTools: [
    { kind: "tool", key: "taxReturnNl" },
    { kind: "tool", key: "taxesHub" },
    { kind: "tool", key: "expatTaxesGuide" },
  ],
  officialSourceKeys: ["bd_filing_return"],
};

export const moneyTaxGuideThirtyPercent: MoneyTaxGuideSectionConfig = {
  id: "thirty-percent-ruling",
  eyebrow: "Facility — not a personality trait",
  title: "30% ruling overview",
  subtitle: "What it is in one paragraph — then use the dedicated tool for numbers.",
  intro:
    "A Dutch facility for eligible incoming employees that can reduce taxable wages within rules and caps. Not automatic — employers are involved, and details change by policy year. Model scenarios in the calculator, then confirm with payroll or an adviser.",
  keyPoints: [
    "Tax impact: part of your agreed employment package may be treated as a tax-free allowance instead of fully taxable salary, so Dutch payroll withholding can be lower than it would be without the facility.",
    "It is not simply 30% extra net pay: salary level, employer setup, caps, pension choices, bonuses, partial-year timing, and policy-year rules can all change the actual take-home difference.",
    "The effect usually shows through monthly payroll first, then the annual income tax return can still reconcile the year if facts changed or payroll applied the facility differently than expected.",
  ],
  cautionNote: "",
  relatedTools: [
    { kind: "tool", key: "thirtyPercentRulingGuide" },
    { kind: "tool", key: "ruling" },
    { kind: "tool", key: "salaryNet" },
    { kind: "tool", key: "jobOffer" },
  ],
  officialSourceKeys: ["bd_30_percent_facility"],
};

export const moneyTaxGuideAllowances: MoneyTaxGuideSectionConfig = {
  id: "allowances-deductions",
  eyebrow: "Household economics",
  title: "Allowances, deductions, and common expat tax topics",
  subtitle: "Separate cash support from return-time mechanics so you do not mix categories.",
  intro:
    "Allowances (e.g. healthcare, childcare benefit) run through toeslagen rules. Deductions and credits mostly sit in the income tax return — similar words, different mechanics.",
  keyPoints: [
    "Healthcare allowance — model premiums with our estimator; confirm with Toeslagen when applying.",
    "Childcare — budget gross fees and benefit bands with the childcare tool.",
    "Mortgage interest — relevant when you buy; use official guidance when you reach that stage.",
  ],
  cautionNote: "",
  relatedTools: [
    { kind: "tool", key: "healthcare" },
    { kind: "tool", key: "childcare" },
    { kind: "tool", key: "col" },
  ],
  officialSourceKeys: ["toeslagen_portal", "bd_income_tax_individuals"],
};

export const moneyTaxGuideDoubleTax: MoneyTaxGuideSectionConfig = {
  id: "double-tax",
  eyebrow: "Cross-border",
  title: "Double tax and cross-border situations",
  subtitle: "Where people accidentally assume the wrong country’s rules apply.",
  intro:
    "Foreign income, foreign employers, and assets abroad can each change which country asks questions first. Treaties and partial years add detail — timing and paperwork matter more than forum one-liners.",
  keyPoints: [],
  cautionNote: "",
  relatedTools: [
    { kind: "tool", key: "taxResidencyNl" },
    { kind: "tool", key: "doubleTax" },
    { kind: "tool", key: "employmentType" },
  ],
  officialSourceKeys: ["bd_international_en", "gov_income_tax_allowances"],
};

export const moneyTaxGuideJourneySteps: readonly MoneyTaxGuideJourneyStepConfig[] = [
  {
    number: 1,
    title: "Job offer / salary",
    intro:
      "You start with headline pay and package shape — gross, holiday pay, bonuses, pension text, and sometimes 30% ruling language — before any Dutch payslip exists.",
    keyPoints: [],
    relatedTools: [
      { kind: "tool", key: "jobOffer" },
      { kind: "tool", key: "salaryNet" },
    ],
    officialSourceKeys: [],
  },
  {
    number: 2,
    title: "Payroll setup",
    intro:
      "Your employer applies payroll tax (loonheffing) using the details they have — contract, tax card, 30% ruling status if applicable, and your BSN on payroll.",
    keyPoints: [],
    relatedTools: [
      { kind: "tool", key: "employmentType" },
      { kind: "tool", key: "workingNl" },
      { kind: "tool", key: "ruling" },
    ],
    officialSourceKeys: ["bd_payroll_taxes"],
  },
  {
    number: 3,
    title: "Monthly payslip",
    intro:
      "Each month you see withholding and lines (wage tax, social premiums, pension) — this is where theory meets real numbers, even though the year is not finished yet.",
    keyPoints: [],
    relatedTools: [
      { kind: "tool", key: "payslip" },
      { kind: "tool", key: "salaryNet" },
    ],
    officialSourceKeys: [],
  },
  {
    number: 4,
    title: "Annual income tax return",
    intro:
      "After the calendar year, you may file (or be invited to) so income, deductions, and credits can be reconciled with what payroll already withheld.",
    keyPoints: [],
    relatedTools: [
      { kind: "tool", key: "taxReturnNl", label: "Tax return in the Netherlands (dedicated guide)" },
      { kind: "link", href: "#tax-return-basics", label: "Tax return basics (below)" },
      { kind: "tool", key: "taxesHub" },
      { kind: "tool", key: "expatTaxesGuide" },
    ],
    officialSourceKeys: ["bd_filing_return"],
  },
  {
    number: 5,
    title: "Final assessment / refund / payment",
    intro:
      "Belastingdienst issues an assessment — you might get a refund, owe a payment, or land roughly neutral. This is the closing chapter for that tax year, not the same thing as your January payslip.",
    keyPoints: [],
    relatedTools: [
      { kind: "link", href: "#official-sources", label: "Official sources (below)" },
      { kind: "tool", key: "taxesHub" },
    ],
    officialSourceKeys: ["bd_income_tax_individuals"],
  },
] as const;

/** Narrative + journey header metadata in one place for tax-year swaps. */
export const moneyTaxGuideSections = {
  howTaxWorks: moneyTaxGuideHowTaxWorks,
  salaryPayslips: moneyTaxGuideSalaryPayslips,
  taxReturnBasics: moneyTaxGuideTaxReturnBasics,
  thirtyPercent: moneyTaxGuideThirtyPercent,
  allowances: moneyTaxGuideAllowances,
  doubleTax: moneyTaxGuideDoubleTax,
  journey: {
    id: "tax-journey-flow" as const,
    eyebrow: "From offer to assessment",
    title: "Your tax journey in five steps",
    subtitle:
      "Most employees move through the same sequence — offers and modelling first, payroll through the year, then an annual return that can still change the outcome.",
    steps: moneyTaxGuideJourneySteps,
  },
} as const;
