export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;

export type NetSalaryGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const netSalaryNetherlandsPage = {
  slug: "net-salary-netherlands",
  path: NET_SALARY_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-05-24",
  seo: {
    title: "Net Salary in the Netherlands | Gross to Net Salary Guide for Expats",
    description:
      "Learn how net salary works in the Netherlands, including payroll tax, income tax, social contributions, the 30% ruling and salary examples for expats.",
    keywords: [
      "net salary netherlands",
      "net salary calculator netherlands",
      "salary after tax netherlands",
      "gross to net salary netherlands",
      "netherlands salary calculator",
      "30 ruling salary calculator",
      "netherlands take home pay",
      "payroll tax netherlands",
      "dutch salary after tax",
      "highly skilled migrant salary netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Salary",
    pageTitle: "Net Salary in the Netherlands",
    subtitle:
      "Understand how much of your Dutch salary you actually take home after taxes, payroll deductions and social contributions - and how factors like the 30% ruling can affect your income.",
    primaryCta: { label: "Calculate Your Net Salary", href: "#calculator" },
    secondaryCta: { label: "Learn About Dutch Taxes", href: "/netherlands/taxes/" },
    chips: ["Gross to net", "Payroll tax", "30% ruling", "Salary examples"],
    image: {
      src: "/images/heroes/netherlands-net-salary-guide-hero.png",
      alt: "Premium editorial desk scene with a Dutch employment offer, laptop salary breakdown, calculator, notebook and canal-city backdrop.",
    },
  },
  calculatorConfig: {
    title: "Net Salary Calculator (Netherlands)",
    description:
      "Use the embedded salary planner to compare gross salary, monthly or yearly inputs, 30% ruling settings, holiday allowance, pension and illustrative take-home pay.",
    fields: [
      "Gross salary",
      "Monthly or yearly input",
      "30% ruling yes/no",
      "Age and tax-credit context",
      "Holiday allowance included yes/no",
    ],
    results: [
      "Estimated net monthly salary",
      "Estimated net yearly salary",
      "Estimated tax burden",
      "Estimated take-home percentage",
    ],
    disclaimer:
      "The calculator is illustrative only. It does not replace payroll confirmation, official tax guidance or professional advice.",
  },
  infographics: {
    grossToNetFlow: {
      src: "/images/infographics/netherlands-net-salary-gross-to-net-flow.png",
      alt: "Infographic showing how Dutch gross salary moves through holiday allowance, payroll tax, pension and into net salary.",
      caption:
        "Use this flow to understand the path from a gross offer to monthly net salary before comparing Dutch job offers.",
    },
    payrollDeductions: {
      src: "/images/infographics/netherlands-net-salary-payroll-deductions-map.png",
      alt: "Infographic mapping Dutch payslip deductions, including wage tax, national insurance, employee insurance and health contribution.",
      caption:
        "Payroll deductions are easier to understand as categories first. Exact amounts depend on payroll settings and personal facts.",
    },
    scenarioComparison: {
      src: "/images/infographics/netherlands-net-salary-scenario-comparison.png",
      alt: "Infographic comparing illustrative Dutch gross salary scenarios and showing gross, deductions and net outcomes with 30% ruling context.",
      caption:
        "These salary scenarios are illustrative only. Use them to see why gross salary, deductions, pension and 30% ruling assumptions can change take-home pay.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Gross vs net" },
    { href: "#calculator", label: "Calculator" },
    { href: "#salary-system", label: "Salary system" },
    { href: "#deductions", label: "Deductions" },
    { href: "#payslip-lens", label: "Payslip lens" },
    { href: "#tax-brackets", label: "Tax brackets" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#examples", label: "Examples" },
    { href: "#highly-skilled", label: "HSM salary" },
    { href: "#freelancers", label: "Freelancers" },
    { href: "#cost-of-living", label: "Cost context" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  introFactors: [
    "Payroll tax withheld by your employer",
    "Income tax and national insurance contributions",
    "Tax credits and personal circumstances",
    "Pension deductions, benefits and holiday allowance",
    "30% ruling treatment if you qualify",
  ],
  salarySystemCards: [
    {
      title: "Gross salary",
      body: "The salary amount before tax and payroll deductions. Dutch job offers are usually quoted gross unless stated otherwise.",
    },
    {
      title: "Net salary",
      body: "The amount that reaches your bank account after withholding, payroll items and any employee deductions.",
    },
    {
      title: "Holiday allowance",
      body: "Many Dutch contracts include holiday allowance. Check whether the offer amount is excluding or including it.",
    },
    {
      title: "Pension and benefits",
      body: "Employer pension schemes, mobility budgets, bonuses and benefits can change the real value of a package.",
    },
  ],
  deductionCards: [
    { title: "Wage tax", body: "A payroll withholding on salary income, usually handled by the employer." },
    { title: "National insurance", body: "Contributions can be combined with wage tax withholding in payroll calculations." },
    { title: "Employee insurance", body: "Payroll taxes may include employee insurance contributions depending on the setup." },
    { title: "Health-insurance-related contributions", body: "Payroll rules can include health-insurance-related contribution items." },
  ],
  salaryExamples: [
    {
      grossSalary: "EUR 40,000",
      takeHomeConcept: "Often a moderate net-to-gross ratio, depending on tax credits, pension and holiday allowance treatment.",
      explanation:
        "Useful for entry-level or early-career comparisons. Small changes in pension or allowances can noticeably affect monthly cash flow.",
    },
    {
      grossSalary: "EUR 60,000",
      takeHomeConcept: "A common expat comparison point where payroll tax, credits and benefits start to matter more.",
      explanation:
        "Do not assume the monthly amount from a foreign country maps directly to the Dutch offer. Check whether holiday allowance is inside or outside the number.",
    },
    {
      grossSalary: "EUR 80,000",
      takeHomeConcept: "Higher gross income can mean a lower take-home percentage as progressive taxation becomes more visible.",
      explanation:
        "This is also where 30% ruling eligibility and employer package design may materially affect take-home pay.",
    },
    {
      grossSalary: "EUR 100,000",
      takeHomeConcept: "Net salary depends heavily on ruling treatment, pension, bonuses, taxable benefits and payroll settings.",
      explanation:
        "For senior roles, compare total compensation rather than salary alone: bonus timing, pension, relocation support and stock can change the picture.",
    },
  ],
  expatQuestions: [
    "Is Dutch salary quoted gross or net?",
    "How much tax will I pay?",
    "Does the 30% ruling increase take-home pay?",
    "What are payroll taxes?",
    "What happens to holiday allowance?",
    "How does pension affect salary?",
    "Is Dutch healthcare deducted from salary?",
    "How do freelancers compare?",
  ],
  costOfLivingCities: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", status: "live" },
    { label: "Utrecht", href: "/netherlands/utrecht/", status: "live" },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", status: "live" },
    { label: "The Hague", href: "/netherlands/the-hague/", status: "live" },
  ] satisfies NetSalaryGuideLink[],
  relatedTaxTopics: [
    {
      label: "Average Salary in the Netherlands",
      href: "/netherlands/taxes/average-salary-netherlands/",
      status: "live",
      description: "Salary benchmarking by city, industry and experience with expat context.",
    },
    {
      label: "Salary Negotiation in the Netherlands",
      href: "/netherlands/jobs/salary-negotiation-netherlands/",
      status: "live",
      description: "Negotiate offers with Dutch culture, benefits and total-compensation context.",
    },
    {
      label: "Gross vs Net Salary",
      href: "/netherlands/taxes/gross-vs-net-salary/",
      status: "live",
      description: "Beginner-friendly explanation of Dutch gross salary, net salary, payslips and deductions.",
    },
    {
      label: "Expat Taxes",
      href: "/netherlands/taxes/expat-taxes-netherlands/",
      status: "live",
      description: "Tax residency, payroll, returns and cross-border concepts for international residents.",
    },
    {
      label: "30% Ruling",
      href: "/netherlands/taxes/30-percent-ruling/",
      status: "live",
      description: "How the Dutch expat scheme works and why eligibility matters for net salary planning.",
    },
    {
      label: "Income Tax",
      href: "/netherlands/taxes/income-tax-netherlands/",
      status: "comingSoon",
      description: "Future guide for Dutch income tax basics and official rate references.",
    },
    {
      label: "Payroll Tax",
      href: "/netherlands/taxes/payroll-tax-netherlands/",
      status: "live",
      description: "Guide to loonheffing, salary deductions and Dutch payroll withholding.",
    },
    {
      label: "Tax Returns",
      href: "/netherlands/taxes/tax-return-netherlands/",
      status: "comingSoon",
      description: "Future taxes-cluster guide for annual filing and return triggers.",
    },
  ] satisfies NetSalaryGuideLink[],
  services: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Compare expat tax advisors and international tax specialists." },
    { label: "Expat accountants", href: "/netherlands/services/accountants/", status: "comingSoon", description: "Future directory for accounting and return support." },
    { label: "Payroll specialists", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for employer and payroll support." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Help with moving logistics alongside job and salary planning." },
  ] satisfies NetSalaryGuideLink[],
  faq: [
    {
      q: "How much salary do I take home in the Netherlands?",
      a: "Your take-home salary depends on gross income, payroll withholding, tax credits, pension deductions, holiday allowance treatment, benefits and whether a scheme such as the 30% ruling applies. Use calculators for orientation and confirm with payroll for exact figures.",
    },
    {
      q: "How do I calculate net salary?",
      a: "Start with gross salary, confirm whether it is monthly or yearly and whether holiday allowance is included, then account for payroll tax, national insurance, pension and relevant tax credits. A calculator can estimate the result, but it is not a payroll guarantee.",
    },
    {
      q: "Does the 30% ruling increase net income?",
      a: "If you qualify and your employer applies the facility correctly, part of compensation may be paid tax-free, which can increase net salary. Eligibility is not automatic and should not be assumed.",
    },
    {
      q: "What taxes are deducted from salary?",
      a: "Payroll deductions may include wage tax, national insurance contributions, employee insurance contributions and health-insurance-related contributions, depending on your employment setup.",
    },
    {
      q: "Is Dutch salary quoted gross or net?",
      a: "Dutch job offers and salary ranges are usually quoted gross unless a recruiter or employer explicitly says otherwise.",
    },
    {
      q: "How much income tax do I pay?",
      a: "The Netherlands uses progressive income taxation. Rates and thresholds change, so use official Belastingdienst information for the current tax year instead of relying on outdated tables.",
    },
    {
      q: "Do freelancers pay the same taxes?",
      a: "Freelancers and ZZP'ers calculate income differently because VAT, business expenses, deductions, bookkeeping and income tax are handled outside a normal employee payroll setup.",
    },
    {
      q: "What is payroll tax?",
      a: "Payroll tax is the withholding and contribution system employers use for salary. It can include wage tax, national insurance contributions, employee insurance contributions and health-insurance-related contributions.",
    },
  ],
  officialSources: [
    {
      label: "Belastingdienst payroll taxes",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/you_are_not_established_in_the_netherlands_are_you_required_to_withhold_payroll_taxes/what_are_payroll_taxes/what_are_payroll_taxes",
      description: "Defines payroll taxes and the types of contributions that can be involved.",
    },
    {
      label: "Belastingdienst income tax",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/hoeveel-inkomstenbelasting-betalen",
      description: "Official income tax information and current rate context.",
    },
    {
      label: "Belastingdienst wage tax calculations",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/you_are_not_established_in_the_netherlands_are_you_required_to_withhold_payroll_taxes/when_you_are_going_to_withhold_payroll_taxes/calculating_payroll_taxes/calculating_wage_tax_national_insurance_contributions",
      description: "Official guidance on calculating wage tax and national insurance contributions.",
    },
    {
      label: "Belastingdienst individuals",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/individuals",
      description: "General Dutch tax information for individuals.",
    },
    {
      label: "Business.gov.nl income tax return",
      href: "https://business.gov.nl/finance-and-taxes/filing-tax-returns/filing-your-income-tax-return/",
      description: "Government business portal guidance on income tax returns.",
    },
    {
      label: "I am Expat Dutch tax system",
      href: "https://www.iamexpat.nl/expat-info/money-taxation/dutch-tax-system",
      description: "Supporting expat-friendly overview of Dutch tax system concepts.",
    },
    {
      label: "TheTax.nl salary calculator",
      href: "https://thetax.nl/",
      description: "Supporting example of a Netherlands gross-to-net salary calculator.",
    },
    {
      label: "Arbeitnow Netherlands salary calculator",
      href: "https://www.arbeitnow.com/tools/salary-calculator/netherlands",
      description: "Supporting example of salary calculator flows that include 30% ruling-style comparisons.",
    },
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Guide", href: "/netherlands/taxes/", status: "live", description: "The central hub for Dutch tax topics." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Understand salary wording, payslip terms and deductions before calculating." },
    { label: "Bonus Tax in the Netherlands", href: "/netherlands/taxes/bonus-tax-netherlands/", status: "live", description: "Why bonuses seem heavily taxed — payroll withholding and expat context." },
    { label: "Expat Taxes in the Netherlands", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Broader tax guide for international residents." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Understand the expat tax facility and eligibility context." },
    { label: "Open a Dutch Bank Account", href: "/netherlands/open-bank-account-netherlands/", status: "live", description: "Banking setup for salary payments and Dutch payments." },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", status: "live", description: "Relocation planning alongside salary and benefits." },
    { label: "Services", href: "/netherlands/services/", status: "live", description: "Browse expat service categories." },
  ] satisfies NetSalaryGuideLink[],
  exploreNextCards: [
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Learn the salary concepts before comparing calculator outputs." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "See how the expat facility can affect salary planning." },
    { label: "Expat Taxes", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Learn the broader Dutch tax system for expats." },
    { label: "Tax Advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Find tax advisors and expat accountants." },
    { label: "Tax Returns", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon", description: "Planned guide for annual filing questions." },
    { label: "Open a Dutch Bank Account", href: "/netherlands/open-bank-account-netherlands/", status: "live", description: "Set up banking for salary, rent and refunds." },
  ] satisfies NetSalaryGuideLink[],
} as const;
