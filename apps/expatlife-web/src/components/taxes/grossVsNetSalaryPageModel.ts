export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;

export type GrossVsNetSalaryLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const grossVsNetSalaryPage = {
  slug: "gross-vs-net-salary",
  path: GROSS_VS_NET_SALARY_PATH,
  publish: true,
  publishDate: "2026-05-27",
  seo: {
    title: "Gross vs Net Salary in the Netherlands | Dutch Salary Explained",
    description:
      "Learn the difference between gross and net salary in the Netherlands, including payroll tax, deductions, pension, social contributions and take-home pay examples for expats.",
    keywords: [
      "gross vs net salary netherlands",
      "gross to net salary netherlands",
      "net salary vs gross salary netherlands",
      "salary after tax netherlands",
      "dutch salary explained",
      "payroll tax netherlands",
      "take home pay netherlands",
      "netherlands salary deductions",
      "dutch payslip explained",
      "gross salary meaning netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Salary",
    pageTitle: "Gross vs Net Salary in the Netherlands",
    subtitle:
      "Understand why your Dutch take-home pay is lower than your gross salary - and how payroll tax, pension contributions and the 30% ruling affect what reaches your bank account.",
    primaryCta: { label: "Estimate Net Salary", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Learn About Dutch Taxes", href: "/netherlands/taxes/" },
    chips: ["Gross salary", "Net salary", "Payslip basics", "Salary examples"],
    image: {
      src: "/images/heroes/netherlands-gross-vs-net-salary-hero.png",
      alt: "Premium editorial salary planning desk with Dutch-style payslip, salary offer letter, calculator, laptop salary breakdown and Dutch canal backdrop.",
    },
  },
  infographics: {
    grossToNetFlow: {
      src: "/images/infographics/netherlands-gross-vs-net-salary-flow.png",
      alt: "Infographic showing Dutch gross salary moving through payroll deductions into net salary.",
      caption:
        "Use this flow as the basic mental model: Dutch salary usually starts as a gross offer, then payroll deductions are processed before net salary reaches your account.",
    },
    payslipAnatomy: {
      src: "/images/infographics/netherlands-dutch-payslip-anatomy.png",
      alt: "Simplified Dutch payslip anatomy visual highlighting bruto loon, loonheffing, pensioen, vakantiegeld and netto loon.",
      caption:
        "This simplified visual helps you recognize common payslip terms. It is not an official payslip and the figures shown are illustrative.",
    },
    salaryPackageFactors: {
      src: "/images/infographics/netherlands-salary-package-factors.png",
      alt: "Infographic showing pension, holiday allowance, tax credits and 30 percent ruling as factors that can change take-home pay.",
      caption:
        "The same gross salary can lead to different net outcomes because pension, holiday allowance, tax credits and 30% ruling assumptions vary.",
    },
  },
  calculatorToolCta: {
    title: "Estimate Your Net Salary",
    description:
      "Once you understand the difference between gross and net salary, use the dedicated Dutch salary net calculator to compare offers with your own inputs.",
    supportingText:
      "The tool supports gross salary, holiday allowance, pension, 30% ruling scenarios and side-by-side offer comparison.",
    primaryCta: { label: "Open Dutch salary net calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Net salary guide", href: "/netherlands/taxes/net-salary-netherlands/" },
    disclaimer: "Calculator results are planning estimates, not payroll guarantees.",
    prepItems: [
      { label: "Salary basis", body: "Know whether the figure is monthly or yearly." },
      { label: "Allowance setup", body: "Check whether holiday allowance is included." },
      { label: "Pension and ruling", body: "Confirm pension and 30% ruling assumptions." },
    ],
  },
  sectionNav: [
    { href: "#intro", label: "Gross vs net" },
    { href: "#simple-example", label: "Simple example" },
    { href: "#gross-salary", label: "Gross salary" },
    { href: "#net-salary", label: "Net salary" },
    { href: "#deductions", label: "Deductions" },
    { href: "#payslip", label: "Payslip" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#examples", label: "Examples" },
    { href: "#allowance", label: "Holiday allowance" },
    { href: "#pension", label: "Pension" },
    { href: "#questions", label: "Questions" },
    { href: "#calculator", label: "Calculator" },
    { href: "#sources", label: "Sources" },
  ],
  simpleExample: {
    grossMonthly: "EUR 5,000",
    estimatedNetRange: "EUR 3,200-3,800",
    deductions: ["Payroll tax", "Pension", "Social contributions"],
    dependsOn: ["Tax bracket", "Pension setup", "30% ruling", "Tax credits", "Benefits", "Personal situation"],
  },
  conceptCards: [
    {
      title: "Gross salary",
      body: "The contract or offer amount before payroll deductions. Dutch job offers are usually quoted gross.",
    },
    {
      title: "Deductions",
      body: "Payroll items such as wage tax, social insurance, pension and employer-specific deductions.",
    },
    {
      title: "Net salary",
      body: "The amount that reaches your bank account after payroll has processed the deductions.",
    },
  ],
  grossSalaryItems: [
    "Salary before deductions",
    "Usually shown in contracts and job offers",
    "Often quoted annually in the Netherlands",
    "May include or exclude holiday allowance depending on wording",
  ],
  netSalaryItems: [
    "Salary after payroll deductions",
    "The amount paid into your bank account",
    "Affected by payroll tax, pension and contribution settings",
    "Useful for rent, savings and cost-of-living planning",
  ],
  deductionCards: [
    { title: "Wage tax", body: "The employer withholds wage tax through payroll before salary reaches you." },
    { title: "National insurance", body: "Contributions can be combined with wage tax calculations." },
    { title: "Employee insurance", body: "Some payroll taxes include employee insurance contribution categories." },
    { title: "Pension", body: "Employer pension schemes may deduct an employee contribution from monthly salary." },
    { title: "Health-related contribution", body: "Payroll tax definitions can include health-insurance-related contributions." },
    { title: "Employer-specific items", body: "Benefits, mobility budgets or other arrangements may appear differently by employer." },
  ],
  payslipItems: [
    { label: "Bruto loon", value: "Gross salary before deductions" },
    { label: "Loonheffing", value: "Payroll tax withholding" },
    { label: "Pensioen", value: "Pension contribution, if applicable" },
    { label: "Vakantiegeld", value: "Holiday allowance accrual or payment" },
    { label: "Netto loon", value: "Net salary paid to your bank account" },
  ],
  salaryExamples: [
    {
      grossSalary: "EUR 40,000",
      estimatedNetRange: "Lower-to-mid monthly net range",
      explanation: "Tax credits, pension setup and holiday allowance treatment can noticeably change monthly cash flow.",
    },
    {
      grossSalary: "EUR 60,000",
      estimatedNetRange: "Common expat comparison range",
      explanation: "Useful for comparing Dutch job offers, but do not assume pension and benefits are the same across employers.",
    },
    {
      grossSalary: "EUR 80,000",
      estimatedNetRange: "Higher gross, lower take-home percentage",
      explanation: "Progressive taxation, pension contributions and 30% ruling eligibility can materially affect the result.",
    },
    {
      grossSalary: "EUR 100,000",
      estimatedNetRange: "Highly package-dependent",
      explanation: "Bonus timing, taxable benefits, stock, pension and ruling status can make two offers behave differently.",
    },
  ],
  expatQuestions: [
    "Is salary in the Netherlands quoted gross or net?",
    "Why is my take-home pay lower?",
    "What is loonheffing?",
    "How much tax do I pay?",
    "Does pension reduce my salary?",
    "Does the 30% ruling increase net income?",
    "Is holiday allowance included?",
    "Why do online salary calculators differ?",
  ],
  relatedTaxTopics: [
    { label: "Average Salary in the Netherlands", href: "/netherlands/taxes/average-salary-netherlands/", status: "live", description: "Salary benchmarking by city, industry and experience with expat context." },
    { label: "Salary Negotiation in the Netherlands", href: "/netherlands/jobs/salary-negotiation-netherlands/", status: "live", description: "How expats negotiate Dutch job offers beyond headline gross pay." },
    { label: "Net Salary Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Calculator-led guide for estimating take-home pay." },
    { label: "Expat Taxes", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Wider expat tax context for residency, returns and foreign income." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Understand the expat tax facility and salary impact." },
    { label: "Payroll Tax", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live", description: "Guide to loonheffing, salary deductions and Dutch payroll withholding." },
    { label: "Income Tax", href: "/netherlands/taxes/income-tax-netherlands/", status: "comingSoon", description: "Future guide to Dutch income tax basics." },
  ] satisfies GrossVsNetSalaryLink[],
  services: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Compare tax advisors and expat tax specialists." },
    { label: "Expat accountants", href: "/netherlands/services/accountants/", status: "live", description: "Bookkeeping, BTW filings and accounting support for expats." },
    { label: "Payroll specialists", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll help." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Help with setup, housing and arrival tasks." },
  ] satisfies GrossVsNetSalaryLink[],
  faq: [
    {
      q: "What is the difference between gross and net salary?",
      a: "Gross salary is the amount before deductions. Net salary is what remains after payroll deductions and is paid into your bank account.",
    },
    {
      q: "Is Dutch salary quoted gross or net?",
      a: "Dutch job offers and salary ranges are usually quoted gross unless the employer or recruiter explicitly says otherwise.",
    },
    {
      q: "How much salary reaches my bank account?",
      a: "That depends on payroll tax, pension, tax credits, holiday allowance treatment, benefits, 30% ruling status and personal circumstances. Use calculators for orientation, not guarantees.",
    },
    {
      q: "What deductions reduce salary?",
      a: "Common items include wage tax, national insurance contributions, employee insurance contributions, pension contributions and employer-specific deductions.",
    },
    {
      q: "What is loonheffing?",
      a: "Loonheffing is payroll tax withholding. It is one of the main reasons your net salary is lower than your gross salary.",
    },
    {
      q: "Does pension reduce net salary?",
      a: "If your employer scheme requires an employee pension contribution, it can reduce monthly net salary while adding long-term retirement value.",
    },
    {
      q: "Does the 30% ruling increase take-home pay?",
      a: "If you qualify and your employer applies it correctly, part of compensation may be paid tax-free. Eligibility is not automatic and should not be assumed.",
    },
    {
      q: "Is holiday allowance included in salary?",
      a: "It depends on the contract. Some offers quote salary excluding holiday allowance, while others include it in the annual package.",
    },
  ],
  officialSources: [
    {
      label: "Belastingdienst payroll taxes",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/you_are_not_established_in_the_netherlands_are_you_required_to_withhold_payroll_taxes/what_are_payroll_taxes/what_are_payroll_taxes",
      description: "Official explanation of payroll tax categories.",
    },
    {
      label: "Belastingdienst wage tax calculations",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/you_are_not_established_in_the_netherlands_are_you_required_to_withhold_payroll_taxes/when_you_are_going_to_withhold_payroll_taxes/calculating_payroll_taxes/calculating_wage_tax_national_insurance_contributions",
      description: "Official guidance on wage tax and national insurance calculations.",
    },
    {
      label: "I am Expat Dutch tax system",
      href: "https://www.iamexpat.nl/expat-info/money-taxation/dutch-tax-system",
      description: "Plain-English supporting context for the Dutch tax system.",
    },
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Guide", href: "/netherlands/taxes/", status: "live", description: "Central Dutch tax hub for expats." },
    { label: "Net Salary in the Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Estimate take-home pay and compare scenarios." },
    { label: "Bonus Tax in the Netherlands", href: "/netherlands/taxes/bonus-tax-netherlands/", status: "live", description: "Why bonuses seem heavily taxed — withholding vs final tax." },
    { label: "Expat Taxes in the Netherlands", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Tax system guide for international residents." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Eligibility and payroll impact of the expat scheme." },
    { label: "Open a Dutch Bank Account", href: "/netherlands/open-bank-account-netherlands/", status: "live", description: "Banking setup for salary payments and direct debits." },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", status: "live", description: "Relocation planning around work, salary and setup." },
  ] satisfies GrossVsNetSalaryLink[],
  exploreNextCards: [
    { label: "Dutch Salary Net Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Move from concept to an estimate with your own inputs." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Check how the expat scheme can affect take-home pay." },
    { label: "Expat Taxes", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Understand broader expat tax questions." },
    { label: "Tax Advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Find specialist help for complex cases." },
    { label: "Open a Dutch Bank Account", href: "/netherlands/open-bank-account-netherlands/", status: "live", description: "Prepare for salary payments and Dutch bills." },
  ] satisfies GrossVsNetSalaryLink[],
} as const;
