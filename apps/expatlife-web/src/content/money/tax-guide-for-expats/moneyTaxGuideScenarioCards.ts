import type { MoneyTaxGuideScenarioCardConfig } from "./taxGuideContent.types";

export const moneyTaxGuideScenarioCards: readonly MoneyTaxGuideScenarioCardConfig[] = [
  {
    id: "dutch-employment",
    pickerLabel: "Dutch contract",
    title: "I have a Dutch employment contract",
    intro:
      "Your contract gross and monthly payslip are the front door to Dutch tax for most expats — but withholding is not always the same as your final annual position once the full year is known.",
    recommendedNextAction:
      "Estimate take-home from your gross, read how payroll tax (loonheffing) fits the annual picture, then decode a real payslip when you have one so line items match your mental model.",
    keyPoints: [],
    cautionNote: "",
    relatedTools: [
      { kind: "tool", key: "salaryNet" },
      { kind: "link", href: "#how-dutch-tax-works", label: "Understand payroll tax" },
      { kind: "tool", key: "payslip" },
    ],
    officialSourceKeys: ["bd_payroll_taxes"],
  },
  {
    id: "thirty-percent-ruling",
    pickerLabel: "30% ruling",
    title: "I may qualify for the 30% ruling",
    intro:
      "The ruling can change taxable wages in eligible cases, but eligibility is not automatic, employers are in the loop, and what you read online is not the same as an approved decision on your file.",
    recommendedNextAction:
      "Use the 30% ruling calculator for indicative checks, clarify what your employer will actually do (documentation and payroll), and keep expectations separate from guarantees until the facility is confirmed for you.",
    keyPoints: [],
    cautionNote: "",
    relatedTools: [
      { kind: "tool", key: "ruling" },
      { kind: "tool", key: "workingNl" },
      { kind: "link", href: "#thirty-percent-ruling", label: "30% ruling overview on this page" },
    ],
    officialSourceKeys: ["bd_30_percent_facility"],
  },
  {
    id: "foreign-assets-income",
    pickerLabel: "Foreign income / assets",
    title: "I have foreign assets or income",
    intro:
      "Cross-border income, accounts abroad, and foreign employers often trigger questions people do not expect in their first Dutch tax year — treaties and timing matter, and assumptions spread fast on forums.",
    recommendedNextAction:
      "Run the double tax awareness planner to surface flags and vocabulary, then confirm facts with official guidance or scoped professional advice if stakes are high.",
    keyPoints: [],
    cautionNote: "",
    relatedTools: [
      { kind: "tool", key: "doubleTax" },
      { kind: "tool", key: "taxAdvisorsExpats", label: "Tax advisors guide (optional paid help)" },
      { kind: "link", href: "#double-tax", label: "Double tax section on this page" },
    ],
    officialSourceKeys: ["bd_international_en", "gov_income_tax_allowances"],
  },
  {
    id: "family-costs",
    pickerLabel: "Family & household",
    title: "I have children, a partner, or other family costs",
    intro:
      "Household composition changes which allowances, premiums, and budget lines matter — healthcare allowance and childcare are often the first non-salary cash flows internationals model.",
    recommendedNextAction:
      "Check whether healthcare allowance could matter for premiums, estimate childcare if it applies, then place both inside a wider monthly budget with cost of living.",
    keyPoints: [],
    cautionNote: "",
    relatedTools: [
      { kind: "tool", key: "healthcare" },
      { kind: "tool", key: "childcare" },
      { kind: "tool", key: "col" },
    ],
    officialSourceKeys: ["toeslagen_portal"],
  },
  {
    id: "mid-year-move",
    pickerLabel: "Arriving / leaving mid-year",
    title: "I am arriving or leaving mid-year",
    intro:
      "Partial years rarely behave like a clean twelve-month template — income may span countries, registration dates matter, and your first or last Dutch return can need extra care.",
    recommendedNextAction:
      "Read return basics on this page for how the annual cycle differs from monthly payroll, then follow Belastingdienst guidance for your year or speak with an adviser if your facts are split across borders.",
    keyPoints: [],
    cautionNote: "",
    relatedTools: [
      { kind: "link", href: "#tax-return-basics", label: "Tax return basics (this guide)" },
      { kind: "tool", key: "taxesHub" },
      { kind: "tool", key: "expatTaxesGuide" },
    ],
    officialSourceKeys: ["bd_filing_return", "bd_income_tax_individuals"],
  },
] as const;
