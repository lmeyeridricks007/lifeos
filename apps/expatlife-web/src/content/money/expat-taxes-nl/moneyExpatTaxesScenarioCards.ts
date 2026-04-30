import { expatTaxesNlRoutes as R } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";
import type { MoneyExpatTaxesScenarioCardConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesScenarioCards: readonly MoneyExpatTaxesScenarioCardConfig[] = [
  {
    id: "first-dutch-job",
    situation: "First Dutch payslip",
    title: "I am new to Dutch payroll and payslips",
    whyItMatters:
      "Your first months are where gross vs net, holiday allowance timing, and withholding labels become real — before you have intuition for what “normal” looks like in NL.",
    recommendedAction:
      "Estimate take-home, decode a real payslip when you have one, and skim employment type if your contract language is not a plain indefinite employee story.",
    cautionLevel: "medium",
    relatedToolKeys: ["salaryNet", "payslip", "employmentType"],
    relatedAnchors: [],
    relatedServiceKeys: [],
    relatedTools: [],
    officialSourceKeys: ["bd_payroll_taxes"],
  },
  {
    id: "ruling-thread",
    situation: "30% ruling",
    title: "I am negotiating or living with the 30% ruling",
    whyItMatters:
      "The ruling can change how taxable wages are discussed in offers — but eligibility, employer process, and policy-year details are easy to misread in headlines.",
    recommendedAction:
      "Run indicative scenarios in the ruling calculator, align expectations with payroll, and read the 30% ruling section below for what to verify beyond a blog post.",
    cautionLevel: "medium",
    relatedToolKeys: ["ruling", "jobOffer"],
    relatedAnchors: [{ id: "thirty-percent-ruling", label: "30% ruling section (this page)" }],
    relatedServiceKeys: [],
    relatedTools: [],
    officialSourceKeys: ["bd_30_percent_facility"],
  },
  {
    id: "foreign-thread",
    situation: "Foreign income / assets",
    title: "I still have income, accounts, or investments outside the Netherlands",
    whyItMatters:
      "Expats often discover Box 3 and cross-border reporting questions later than payroll questions — not because they ignored tax, but because wealth reporting feels different from payslip tax.",
    recommendedAction:
      "Read the foreign assets & Box 3 section, run double-tax awareness, and escalate to official international guidance or an adviser if amounts are meaningful.",
    cautionLevel: "high",
    relatedToolKeys: ["doubleTax", "taxAdvisorsExpats"],
    relatedAnchors: [{ id: "foreign-box3", label: "Foreign assets & Box 3 (this page)" }],
    relatedServiceKeys: [],
    relatedTools: [],
    officialSourceKeys: ["bd_international_en", "bd_income_tax_individuals"],
  },
  {
    id: "family-thread",
    situation: "Family & allowances",
    title: "Partner, kids, premiums, or childcare are in the picture",
    whyItMatters:
      "Household composition changes which allowances and budget lines matter — and can change how aggressively you should sanity-check payroll vs return-time items.",
    recommendedAction:
      "Model healthcare allowance and childcare, then place results beside rent and COL so tax questions do not float separate from monthly life.",
    cautionLevel: "low",
    relatedToolKeys: ["healthcare", "childcare", "col"],
    relatedAnchors: [],
    relatedServiceKeys: [],
    relatedTools: [],
    officialSourceKeys: ["toeslagen_portal", "gov_income_tax_allowances"],
  },
  {
    id: "partial-year-thread",
    situation: "Arrived / left mid-year",
    title: "I arrived or left the Netherlands mid-year",
    whyItMatters:
      "Partial years are where “the simple template” breaks — residency timing, employer changes, and income spanning countries can all show up in the same story.",
    recommendedAction:
      "Read arrival/departure year below, keep Belastingdienst letters organised, and consider scoped advice if your facts do not fit a clean narrative.",
    cautionLevel: "medium",
    relatedToolKeys: [],
    relatedAnchors: [],
    relatedServiceKeys: [],
    relatedTools: [
      { kind: "link", href: "#arrival-departure-year", label: "Arrival/departure section (this page)" },
      { kind: "link", href: `${R.taxGuideBroad}#tax-return-basics`, label: "Tax guide — return basics" },
      { kind: "tool", key: "taxesHub" },
    ],
    officialSourceKeys: ["bd_filing_return", "bd_income_tax_individuals"],
  },
  {
    id: "double-tax-thread",
    situation: "Double tax worry",
    title: "I am worried about double taxation or treaty relief",
    whyItMatters:
      "Worry is common; precision is what saves money and time. Treaties and timing matter — and forums are a bad place to “confirm” your country pair.",
    recommendedAction:
      "Use the double-tax awareness planner for structured questions, then confirm with official guidance or an adviser before you treat a guess as a plan.",
    cautionLevel: "high",
    relatedToolKeys: ["doubleTax"],
    relatedAnchors: [
      { id: "double-tax", label: "Double tax section (this page)" },
      { id: "official-sources", label: "Official sources (below)" },
    ],
    relatedServiceKeys: [],
    relatedTools: [],
    officialSourceKeys: ["bd_international_en"],
  },
] as const;
