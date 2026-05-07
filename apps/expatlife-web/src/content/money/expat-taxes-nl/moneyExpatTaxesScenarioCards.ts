import { taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import type { MoneyExpatTaxesScenarioCardConfig } from "./moneyExpatTaxesContent.types";

/** Eight common stories — plain language; year rules live in tools and the Dutch tax office site. */
export const moneyExpatTaxesScenarioCards: readonly MoneyExpatTaxesScenarioCardConfig[] = [
  {
    id: "dutch-employment",
    situation: "Dutch job",
    title: "I have a Dutch job contract",
    whyItMatters:
      "Most expats first see Dutch tax on the payslip: gross vs net, holiday pay, pension lines, and wage tax taken out. That monthly picture helps — and it is **not always** the same as the final picture after your yearly form.",
    whatToCheck: [
      "What kind of contract you have and when it starts.",
      "Which country payroll treats as “home” on the paperwork.",
      "Whether the payslip lines match what HR told you in words.",
    ],
    recommendedAction:
      "Estimate take-home pay for planning, then use a payslip explainer once you have a real slip. When you are ready, read how monthly pay connects to the yearly form.",
    cautionLevel: "simple",
    relatedToolKeys: ["salaryNet", "payslip"],
    relatedGuideKeys: ["howTaxesWorkInNl", "taxReturnNl"],
    relatedAnchors: [{ id: "employment-payslips", label: "Your job & payslip (this page)" }],
    officialSourceKeys: ["bd_payroll_taxes"],
  },
  {
    id: "thirty-percent",
    situation: "30% ruling",
    title: "I may get the 30% ruling",
    whyItMatters:
      "It is not automatic: who qualifies, forms, and what payroll does sit outside any quick “tax-free” headline. Calculator numbers are for trying ideas — **not** approval from the tax office or your employer.",
    whatToCheck: [
      "Whether your role and pay band match what your employer said in broad terms.",
      "Whether your payslip shows what you expected if the ruling applies.",
    ],
    recommendedAction:
      "Read the 30% ruling guide, try a few numbers in the calculator, then align with HR and payroll before you rely on a number in a contract.",
    cautionLevel: "worth_checking",
    relatedToolKeys: ["ruling", "salaryNet", "jobOffer"],
    relatedGuideKeys: ["thirtyPercentRulingGuide"],
    relatedAnchors: [{ id: "thirty-percent-ruling", label: "30% ruling (this page)" }],
    officialSourceKeys: ["bd_30_percent_facility"],
  },
  {
    id: "partial-year",
    situation: "Arrived / left",
    title: "I arrived or left during the year",
    whyItMatters:
      "First and last Dutch tax years often overlap another country’s income, when you registered, and family moves. That overlap is normal — **dates and letters** matter more than one blog template.",
    whatToCheck: [
      "Move dates and when pay started or stopped.",
      "Any income still taxed in another country.",
      "Big money moves in the same window.",
    ],
    recommendedAction:
      "Read the arriving or leaving section here, then follow the Dutch tax office for your tax year — consider paid help if your story is split across countries.",
    cautionLevel: "worth_checking",
    relatedToolKeys: ["taxReturnNl"],
    relatedTools: [
      { kind: "link", href: `${taxGuideRoutes.taxGuideForExpats}#tax-return-basics`, label: "Tax guide — yearly form basics" },
    ],
    relatedAnchors: [{ id: "arrival-departure-year", label: "Arriving or leaving (this page)" }],
    officialSourceKeys: ["bd_filing_return", "bd_income_tax_individuals"],
  },
  {
    id: "foreign-assets",
    situation: "Assets abroad",
    title: "I have savings or investments abroad",
    whyItMatters:
      "The savings-and-investments part of the yearly form can matter even when monthly pay felt “done”. “Foreign” does not always mean “ignore on the Dutch form” — your situation and the rules still matter.",
    whatToCheck: [
      "What you still hold outside the Netherlands and whose name is on the account.",
      "Whether the amounts are big enough that official guidance or a short paid review makes sense.",
    ],
    recommendedAction:
      "Read the savings abroad section, then open the tax residency guide if you are unsure how this fits your year.",
    cautionLevel: "consider_support",
    relatedToolKeys: ["doubleTax"],
    relatedGuideKeys: ["taxResidencyNl", "taxAdvisorsExpats"],
    relatedAnchors: [{ id: "foreign-box3", label: "Savings abroad & Box 3 (this page)" }],
    officialSourceKeys: ["bd_income_tax_individuals", "bd_international_en"],
  },
  {
    id: "remote-foreign-income",
    situation: "Remote / foreign income",
    title: "I have foreign income or messy remote work",
    whyItMatters:
      "Where the employer is, where you live, and tax agreements can all land in the same inbox. Online threads rarely match your exact country pair — a simple list of facts first beats late panic.",
    whatToCheck: [
      "Who employs you on paper and where you actually work.",
      "Whether any income is still reported in another country.",
    ],
    recommendedAction:
      "Use the double tax awareness tool for a question list, then check official guidance or a tax adviser if the stakes are high.",
    cautionLevel: "consider_support",
    relatedToolKeys: ["doubleTax", "employmentType"],
    relatedGuideKeys: ["taxResidencyNl"],
    relatedAnchors: [
      { id: "foreign-box3", label: "Foreign income & Box 3 (this page)" },
      { id: "double-tax", label: "Two countries (this page)" },
    ],
    officialSourceKeys: ["bd_international_en"],
  },
  {
    id: "partner-family",
    situation: "Partner / kids",
    title: "I have a partner or children",
    whyItMatters:
      "Who lives with you changes benefits and sometimes what you put on the yearly form. Benefit tools give estimates — they do not replace the official benefits site or a government letter.",
    whatToCheck: [
      "Household income together and insurance premium levels.",
      "Childcare use and how benefits differ from lines on the yearly tax form.",
    ],
    recommendedAction:
      "Try healthcare allowance and childcare tools next to rent and living costs so tax questions sit next to real monthly money.",
    cautionLevel: "simple",
    relatedToolKeys: ["healthcare", "childcare", "col"],
    relatedAnchors: [{ id: "family-allowances", label: "Partner & benefits (this page)" }],
    officialSourceKeys: ["toeslagen_portal", "gov_income_tax_allowances"],
  },
  {
    id: "self-employed-mixed",
    situation: "ZZP / mixed",
    title: "I am self-employed or have more than one kind of income",
    whyItMatters:
      "Invoices, business registration timing, and years that mix a job with freelance work can change which parts of the form matter — often a good time to think about paid help if the numbers are large.",
    whatToCheck: [
      "Whether you are mainly self-employed, side income only, or a mix.",
      "Which country each income stream belongs to for the year.",
    ],
    recommendedAction:
      "Use the employment-type tool for vocabulary, read the tax return guide, and open the tax-advisers guide if you might hire help for a focused question.",
    cautionLevel: "consider_support",
    relatedToolKeys: ["employmentType"],
    relatedGuideKeys: ["taxReturnNl", "taxAdvisorsExpats"],
    relatedAnchors: [{ id: "employment-payslips", label: "Your job & payslip (this page)" }],
    officialSourceKeys: ["bd_income_tax_individuals"],
  },
  {
    id: "tax-residency-unsure",
    situation: "Residency unsure",
    title: "I am not sure which country I am a tax resident of",
    whyItMatters:
      "Tax residency is about **your life facts over the year** — not the same label as your residence permit. When two countries might both care, treat online tools as **orientation only**.",
    whatToCheck: [
      "Where home, family, and money ties sit across the year.",
      "Any long cross-border commute or second-home pattern.",
    ],
    recommendedAction:
      "Read the tax residency guide for plain words, run double tax awareness if borders are involved, then use official guidance or a tax adviser for a binding answer.",
    cautionLevel: "consider_support",
    relatedToolKeys: ["doubleTax"],
    relatedGuideKeys: ["taxResidencyNl"],
    relatedAnchors: [
      { id: "official-sources", label: "Official sources (below)" },
      { id: "double-tax", label: "Two countries (this page)" },
    ],
    officialSourceKeys: ["bd_international_en", "bd_income_tax_individuals"],
  },
] as const;
