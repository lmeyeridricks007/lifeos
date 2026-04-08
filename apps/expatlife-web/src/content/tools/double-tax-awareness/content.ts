import type { IncomeType } from "@/src/lib/tools/double-tax-awareness/types";

export const DOUBLE_TAX_CANONICAL = "/netherlands/taxes/tools/double-tax-awareness-tool/";
export const NL_BASE = "/netherlands";

export const DOUBLE_TAX_FAQ_ITEMS = [
  {
    id: "tax-resident-two-countries",
    question: "Can I be tax resident in two countries?",
    answer:
      "Yes, this can happen. Two countries may both treat you as resident under domestic law, especially when time, home, family, and work are split. That still does not automatically mean final double taxation, because treaty tie-breaker rules and relief methods often apply. Use this tool as a planning view, then verify your facts with official sources or an advisor.",
  },
  {
    id: "file-two-countries",
    question: "Does filing in two countries mean I pay tax twice?",
    answer:
      "Not always. Filing in two countries is common for expats, and many systems reduce overlap through exemption or tax-credit mechanisms. In practice, whether relief applies depends on your income type, work location, residency facts, and treaty rules.",
  },
  {
    id: "foreign-rental-nl",
    question: "Do I need to declare foreign rental income in the Netherlands?",
    answer:
      "Often yes, if you are likely Dutch tax resident. Foreign property income may still need declaration context in a Dutch return even when the property country usually has primary taxing rights. Keep rental statements, tax assessments, and proof of tax paid abroad.",
  },
  {
    id: "ruling-and-double-tax",
    question: "Does the 30% ruling prevent double taxation?",
    answer:
      "No. The 30% ruling may reduce part of taxable salary in Dutch payroll, but it does not replace treaty analysis, foreign-source income review, or foreign filing obligations. Cross-border scenarios may still require declarations in more than one country.",
  },
  {
    id: "when-advisor",
    question: "When should I speak to a tax advisor?",
    answer:
      "Escalate early when you have dual-home signals, mixed payroll, self-employment across countries, pension/business income, or unclear treaty tie-breakers. Getting advice before filing deadlines is usually cheaper than fixing late errors.",
  },
];

export const DOUBLE_TAX_OFFICIAL_SOURCES = [
  { label: "Belastingdienst — Income tax (individuals)", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/income-tax" },
  { label: "Belastingdienst — Foreign income and assets", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/income-from-abroad" },
  { label: "Business.gov.nl — Taxes for entrepreneurs", href: "https://business.gov.nl/regulations/taxes/" },
  { label: "Government.nl — Income tax", href: "https://www.government.nl/topics/income-tax" },
  { label: "Your Europe — Taxation and cross-border basics", href: "https://europa.eu/youreurope/citizens/work/taxes/" },
];

export const DOUBLE_TAX_TOC = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Calculator" },
  { id: "tool-results", label: "Results" },
  { id: "start-here-summary", label: "Result summary (start here)" },
  { id: "pay-twice-likelihood", label: "Pay tax twice?" },
  { id: "what-this-means-summary", label: "Plain-English summary" },
  { id: "residency-assessment", label: "Residency assessment" },
  { id: "income-tax-map", label: "Income tax map" },
  { id: "double-tax-risk", label: "Double-tax risk" },
  { id: "relief-methods", label: "Relief direction" },
  { id: "what-to-do-next", label: "Action checklist" },
  { id: "how-tool-works-user", label: "How this tool works" },
  { id: "professional-review", label: "Professional review" },
  { id: "when-tool-not-enough", label: "When this tool may not be enough" },
  { id: "scenario-compare", label: "What-if scenarios" },
  { id: "records-to-keep", label: "Records to keep" },
  { id: "escalation-flags", label: "Escalation flags" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "download-summary", label: "Download summary" },
  { id: "example-scenarios", label: "Example scenarios" },
  { id: "how-the-tool-works", label: "How this tool works (page)" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
] as const;

export const DOUBLE_TAX_QUICK_LINKS = [
  { label: "Start tool", href: "#tool-inputs" },
  { label: "Result summary (start here)", href: "#start-here-summary" },
  { label: "Pay tax twice?", href: "#pay-twice-likelihood" },
  { label: "Residency assessment", href: "#residency-assessment" },
  { label: "Income tax map", href: "#income-tax-map" },
  { label: "What-if scenarios", href: "#scenario-compare" },
  { label: "Recommended services", href: "#recommended-services" },
  { label: "Download summary", href: "#download-summary" },
] as const;

export const DOUBLE_TAX_RELATED_TOOLS = [
  { href: `${NL_BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator (eligibility planning) →" },
  { href: `${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator (gross-to-net context) →" },
  { href: `${NL_BASE}/work/tools/payslip-decoder/`, label: "Payslip decoder (understand payroll lines) →" },
  { href: `${NL_BASE}/taxes/`, label: "Dutch taxes hub (filing and residency guides) →" },
  { href: `${NL_BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator (budget context) →" },
  { href: `${NL_BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator (housing budget planning) →" },
  { href: `${NL_BASE}/tools/city-comparison/`, label: "Netherlands city comparison tool (where to live planning) →" },
] as const;

export const DOUBLE_TAX_RELATED_GUIDES = [
  { href: `${NL_BASE}/taxes/`, title: "Dutch taxes hub", description: "Residency, filing obligations, and expat tax fundamentals in one place." },
  {
    href: `${NL_BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Eligibility-first planning tool for 30% ruling assumptions used in salary and payroll context.",
  },
  {
    href: `${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Use alongside this page to compare payroll take-home assumptions with and without 30% ruling settings.",
  },
  {
    href: `${NL_BASE}/work/tools/payslip-decoder/`,
    title: "Payslip decoder",
    description: "Translate Dutch payslip lines so you can spot withholding or payroll setup issues earlier.",
  },
  {
    href: `${NL_BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands guide",
    description: "Relocation checklist and first-month admin steps that affect tax setup timing.",
  },
] as const;

export const TOOL_MODE_OPTIONS = [
  { value: "moving_to_netherlands", label: "Moving to the Netherlands" },
  { value: "already_in_netherlands", label: "Already living in the Netherlands" },
  { value: "working_cross_border", label: "Working cross-border" },
  { value: "remote_foreign_employer", label: "Remote work / foreign employer" },
  { value: "multiple_country_income", label: "Multiple-country income" },
] as const;

export const INCOME_TYPE_OPTIONS: Array<{ value: IncomeType; label: string }> = [
  { value: "salary_dutch_employer", label: "Salary from Dutch employer" },
  { value: "salary_foreign_employer", label: "Salary from foreign employer" },
  { value: "salary_remote_work", label: "Remote work salary" },
  { value: "freelance_self_employed", label: "Freelance / self-employed income" },
  { value: "rental_income_nl", label: "Rental income from property in Netherlands" },
  { value: "rental_income_abroad", label: "Rental income from property abroad" },
  { value: "dividends_investments", label: "Dividends / interest / investments" },
  { value: "foreign_business_income", label: "Foreign business income" },
  { value: "pension_income", label: "Pension income" },
  { value: "other_mixed", label: "Other / mixed" },
];

export const COUNTRY_OPTIONS = [
  { value: "none", label: "None / not applicable" },
  { value: "NL", label: "Netherlands" },
  { value: "ZA", label: "South Africa" },
  { value: "ES", label: "Spain" },
  { value: "GB", label: "United Kingdom" },
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "BE", label: "Belgium" },
  { value: "FR", label: "France" },
  { value: "IT", label: "Italy" },
  { value: "PT", label: "Portugal" },
  { value: "PL", label: "Poland" },
  { value: "IE", label: "Ireland" },
  { value: "IN", label: "India" },
  { value: "CN", label: "China" },
  { value: "JP", label: "Japan" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "New Zealand" },
  { value: "CA", label: "Canada" },
  { value: "BR", label: "Brazil" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "SG", label: "Singapore" },
  { value: "other", label: "Other country" },
] as const;
