export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const THIRTY_PERCENT_RULING_CALCULATOR_PATH = "/netherlands/taxes/tools/30-ruling-calculator/" as const;
export const PAYSLIP_DECODER_PATH = "/netherlands/work/tools/payslip-decoder/" as const;
export const EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH = "/netherlands/work/tools/employment-type-scenario-tool/" as const;
export const TAXES_TOOLS_HUB_PATH = "/netherlands/taxes/tools/" as const;

export type PayrollTaxNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const payrollTaxNetherlandsPage = {
  slug: "payroll-tax-netherlands",
  path: PAYROLL_TAX_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-05-31",
  seo: {
    title: "Payroll Tax in the Netherlands | Dutch Salary Deductions Explained",
    description:
      "Learn how payroll tax works in the Netherlands, including loonheffing, salary deductions, social contributions, payslips and payroll taxes for expats.",
    keywords: [
      "payroll tax netherlands",
      "loonheffing netherlands",
      "dutch payroll tax",
      "salary deductions netherlands",
      "netherlands payroll deductions",
      "wage tax netherlands",
      "netherlands payslip explained",
      "payroll tax expats netherlands",
      "salary tax netherlands",
      "dutch payroll system",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Payroll",
    pageTitle: "Payroll Tax in the Netherlands",
    subtitle:
      "Understand how Dutch payroll tax works, what is deducted from salary, and why your take-home pay differs from your gross salary.",
    primaryCta: { label: "Understand Salary Deductions", href: "#deductions" },
    secondaryCta: { label: "Estimate Net Salary", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    chips: ["Loonheffing", "Salary deductions", "Payslip basics", "Expat payroll"],
    image: {
      src: "/images/heroes/netherlands-payroll-tax-netherlands-hero-v2.png",
      alt: "Photo-realistic editorial scene of a Dutch loonstrook payslip showing bruto loon, loonheffing deductions and netto loon, with payroll specification sheet, Loonheffing reference book, calculator and Amsterdam canal houses through the window.",
    },
  },
  infographics: {
    deductionFlow: {
      src: "/images/infographics/netherlands-payroll-tax-deduction-flow.png",
      alt: "Infographic showing how Dutch payroll tax is deducted from gross salary through employer payroll to net salary.",
      caption:
        "Use this flow as the basic mental model: employers calculate gross salary, apply payroll deductions, remit tax to Belastingdienst and pay net salary to employees.",
    },
    components: {
      src: "/images/infographics/netherlands-payroll-tax-components.png",
      alt: "Infographic showing wage tax, national insurance, employee insurance and health-related contributions as parts of Dutch payroll tax.",
      caption:
        "Belastingdienst groups several payroll categories under loonheffing. Exact amounts depend on payroll setup and personal circumstances.",
    },
    payrollVsIncomeTax: {
      src: "/images/infographics/netherlands-payroll-vs-income-tax.png",
      alt: "Infographic comparing payroll tax withheld during the year with final income tax assessment in the Netherlands.",
      caption:
        "Payroll tax is withheld during the year. Income tax is settled through the annual tax return. They connect, but they are not the same step.",
    },
    payslipAnatomy: {
      src: "/images/infographics/netherlands-payroll-tax-payslip-anatomy.png",
      alt: "Infographic explaining Dutch loonstrook payslip terms including bruto loon, loonheffing, pensioen, vakantiegeld and netto loon.",
      caption:
        "Use this simplified visual to recognize common payslip labels. It is not an official payslip and the figures shown are illustrative.",
    },
    grossToNetExample: {
      src: "/images/infographics/netherlands-payroll-tax-gross-to-net-example.png",
      alt: "Infographic showing illustrative EUR 5000 gross monthly salary flowing through payroll deductions to estimated net salary range.",
      caption:
        "This example is illustrative only. Exact take-home pay depends on payroll setup, pension, tax credits, 30% ruling status and personal circumstances.",
    },
    employeeVsFreelancer: {
      src: "/images/infographics/netherlands-payroll-tax-employee-vs-freelancer.png",
      alt: "Infographic comparing employee payroll tax withholding with freelancer and ZZP tax responsibilities in the Netherlands.",
      caption:
        "Employees usually follow a payroll withholding rhythm. Freelancers and ZZP workers generally manage VAT, income tax and bookkeeping separately.",
    },
    expatChecklist: {
      src: "/images/infographics/netherlands-payroll-tax-expat-checklist.png",
      alt: "Infographic checklist for expats covering Dutch employer payroll, 30% ruling impact, relocation packages and gross vs net salary planning.",
      caption:
        "Use this checklist when reviewing a Dutch salary offer or first payslip. Confirm details with payroll or a tax adviser for your situation.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "What is payroll tax" },
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#included", label: "What's included" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#deductions", label: "Deductions" },
    { href: "#gross-vs-net", label: "Gross vs net" },
    { href: "#payslip", label: "Payslip" },
    { href: "#expats", label: "Expats" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#payroll-vs-income", label: "Payroll vs income tax" },
    { href: "#questions", label: "Questions" },
    { href: "#freelancers", label: "Freelancers" },
    { href: "#calculator", label: "Calculator" },
    { href: "#related-topics", label: "Related guides" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    {
      title: "Gross salary offer",
      body: "The contract or job ad number before payroll runs. This is usually bruto loon, not spendable income.",
    },
    {
      title: "Loonheffing withheld",
      body: "Payroll tax and related contributions deducted by your employer before salary is paid out.",
    },
    {
      title: "Net salary paid",
      body: "The amount that reaches your bank account after payroll processing — netto loon.",
    },
  ],
  deductionItems: [
    { title: "Wage tax (loonheffing core)", body: "Advance withholding toward income tax — often the largest payroll line on a payslip." },
    { title: "National insurance", body: "Social insurance contributions that can be grouped within payroll tax calculations." },
    { title: "Pension (pensioen)", body: "Employee pension contributions may appear separately but still reduce monthly take-home pay." },
    { title: "Holiday allowance (vakantiegeld)", body: "May be accrued or paid separately depending on contract wording and payroll setup." },
    { title: "Employer-specific items", body: "Benefits, mobility budgets or other arrangements can change how deductions appear." },
  ],
  snapshotCards: [
    { label: "Dutch term", value: "Loonheffing" },
    { label: "Managed by", value: "Belastingdienst" },
    { label: "Collected through", value: "Employer payroll" },
    { label: "Affects", value: "Employee net salary" },
    { label: "Includes", value: "Tax + contributions" },
    { label: "Common confusion", value: "Gross vs net salary" },
  ],
  calculatorToolCta: {
    title: "Estimate Your Net Salary",
    description:
      "Once you understand payroll tax and salary deductions, use the dedicated Dutch salary net calculator to compare offers with your own inputs.",
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
  calculatorOutputs: [
    "Estimated monthly and annual net salary",
    "Side-by-side comparison of two gross offers",
    "Scenario planning with pension and 30% ruling",
  ],
  relatedCalculators: [
    {
      label: "Dutch salary net calculator",
      href: DUTCH_SALARY_NET_CALCULATOR_PATH,
      status: "live",
      description: "Estimate monthly and annual take-home pay from gross salary, pension, holiday allowance and 30% ruling assumptions.",
    },
    {
      label: "30% ruling eligibility calculator",
      href: THIRTY_PERCENT_RULING_CALCULATOR_PATH,
      status: "live",
      description: "Check likely eligibility, salary norms and indicative allowance impact before payroll applies the scheme.",
    },
    {
      label: "Dutch payslip decoder",
      href: PAYSLIP_DECODER_PATH,
      status: "live",
      description: "Paste payslip text to understand bruto loon, loonheffing, pension lines and netto loon on a real loonstrook.",
    },
    {
      label: "Employment type scenario tool",
      href: EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH,
      status: "live",
      description: "Compare employee, contractor and ZZP setups when payroll withholding does not apply the same way.",
    },
  ] satisfies PayrollTaxNetherlandsLink[],
  payrollComponents: [
    {
      title: "Wage tax",
      body: "Advance withholding toward income tax. This is often the largest payroll deduction employees notice on a payslip.",
    },
    {
      title: "National insurance contributions",
      body: "Contributions linked to Dutch social insurance systems. They can be part of payroll tax calculations.",
    },
    {
      title: "Employee insurance contributions",
      body: "Employment-related insurance contributions that may appear within payroll tax withholding.",
    },
    {
      title: "Health-insurance related contributions",
      body: "Health-related payroll obligations that can form part of the broader payroll tax picture.",
    },
  ],
  payrollSteps: [
    { step: "1", title: "Employer calculates gross salary", body: "The contract or offer amount is the starting point before deductions." },
    { step: "2", title: "Payroll deductions applied", body: "Loonheffing and related payroll items are calculated through employer payroll." },
    { step: "3", title: "Tax and contributions withheld", body: "Withheld amounts are processed before salary reaches the employee." },
    { step: "4", title: "Employee receives net salary", body: "The remaining amount is paid into the employee bank account." },
  ],
  simpleExample: {
    grossMonthly: "EUR 5,000",
    estimatedNetRange: "EUR 3,200–3,800",
    note: "Illustrative range only. Exact take-home pay depends on payroll setup, pension, tax credits, 30% ruling status and personal circumstances.",
  },
  grossVsNetTips: [
    "Job offers and contracts usually quote gross (bruto) salary — not what lands in your bank account.",
    "Loonheffing, pension and other payroll lines reduce gross pay before netto loon is transferred.",
    "Compare offers using estimated net pay and the same assumptions (monthly vs annual, holiday allowance included).",
  ],
  payslipItems: [
    { label: "Bruto loon", value: "Gross salary before deductions", example: "EUR 5,000.00" },
    { label: "Loonheffing", value: "Payroll tax withholding", example: "− varies" },
    { label: "Pensioen", value: "Pension contribution, if applicable", example: "− varies" },
    { label: "Vakantiegeld", value: "Holiday allowance accrual or payment", example: "8% typical" },
    { label: "Netto loon", value: "Net salary paid to your bank account", example: "EUR 3,200–3,800*" },
  ],
  expatPoints: [
    "Different salary structures and relocation packages can change how payroll lines appear.",
    "The 30% ruling may affect payroll calculations if eligibility is confirmed and applied correctly.",
    "International payroll setups can add confusion when comparing offers across countries.",
    "Most expats employed by Dutch companies will have payroll taxes withheld automatically.",
  ],
  expatQuestions: [
    {
      q: "What is loonheffing?",
      a: "Loonheffing is the Dutch term for payroll tax withholding. It covers wage tax and related contributions deducted before net salary is paid.",
    },
    {
      q: "Why is my net salary lower?",
      a: "Employers withhold payroll tax, pension and other payroll items before transferring salary. Gross is the offer; net is what reaches your account.",
    },
    {
      q: "Does payroll tax equal income tax?",
      a: "Not exactly. Payroll tax is withheld during the year. Income tax is settled through the annual assessment and tax return.",
    },
    {
      q: "Does the 30% ruling reduce payroll tax?",
      a: "If you qualify and payroll applies the scheme correctly, calculations may differ and net salary may increase. Eligibility is not automatic.",
    },
    {
      q: "Why do Dutch payslips look complicated?",
      a: "Payslips combine gross pay, loonheffing, pension, holiday allowance and net pay using Dutch labels that may be unfamiliar at first.",
    },
    {
      q: "Is health insurance deducted automatically?",
      a: "Health-related payroll obligations can appear within payroll tax. Private health insurance is usually arranged separately by residents.",
    },
    {
      q: "Do freelancers pay payroll tax?",
      a: "Freelancers and ZZP workers generally do not receive employee payroll withholding. They handle income tax and VAT differently.",
    },
    {
      q: "What happens if too much tax is withheld?",
      a: "Annual filing may result in a refund if payroll withholding exceeded your final tax position. This depends on your full-year situation.",
    },
  ],
  relatedTaxTopics: [
    { label: "Average Salary in the Netherlands", href: "/netherlands/taxes/average-salary-netherlands/", status: "live", description: "Salary benchmarking by city, industry and experience with expat context." },
    { label: "Salary Negotiation in the Netherlands", href: "/netherlands/jobs/salary-negotiation-netherlands/", status: "live", description: "How expats negotiate Dutch job offers beyond headline gross pay." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Beginner-friendly guide to gross salary, net salary and payroll deductions." },
    { label: "Net Salary Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Estimate take-home pay and compare salary scenarios." },
    { label: "Bonus Tax in the Netherlands", href: "/netherlands/taxes/bonus-tax-netherlands/", status: "live", description: "Why bonuses seem heavily taxed — withholding vs final tax for expats." },
    { label: "Expat Taxes", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Broader expat tax context for residency, returns and cross-border topics." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "How the expat scheme can affect payroll and take-home pay." },
    { label: "Income Tax", href: "/netherlands/taxes/income-tax-netherlands/", status: "comingSoon", description: "Future guide to Dutch income tax and annual assessment." },
  ] satisfies PayrollTaxNetherlandsLink[],
  services: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Compare tax advisors and expat tax specialists." },
    { label: "Payroll specialists", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll help." },
    { label: "Expat accountants", href: "/netherlands/services/accountants/", status: "live", description: "Bookkeeping, BTW filings and accounting support for expats." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Help with setup, housing and arrival tasks." },
  ] satisfies PayrollTaxNetherlandsLink[],
  faq: [
    {
      q: "What is payroll tax in the Netherlands?",
      a: "Payroll tax is the tax and contribution package employers withhold from employee salaries through payroll. In Dutch, this is often referred to as loonheffing.",
    },
    {
      q: "What is loonheffing?",
      a: "Loonheffing is the Dutch term for payroll tax withholding. It is one of the main reasons net salary is lower than gross salary on a payslip.",
    },
    {
      q: "Why is my net salary lower than gross salary?",
      a: "Employers deduct payroll tax, pension and other payroll items before paying salary. Gross is before deductions; net is what reaches your bank account.",
    },
    {
      q: "What deductions are taken from salary?",
      a: "Common items include wage tax, national insurance contributions, employee insurance contributions, pension contributions and employer-specific deductions.",
    },
    {
      q: "Does payroll tax include pension?",
      a: "Pension is usually shown separately on a payslip, but it can still reduce take-home pay alongside payroll tax items.",
    },
    {
      q: "Does the 30% ruling affect payroll tax?",
      a: "If you qualify and your employer applies the scheme correctly, payroll calculations may differ and net salary may increase. Eligibility is not automatic.",
    },
    {
      q: "Do freelancers pay payroll tax?",
      a: "Freelancers and ZZP workers usually do not receive employee payroll withholding. They generally handle income tax, VAT and bookkeeping differently.",
    },
    {
      q: "Is payroll tax the same as income tax?",
      a: "No. Payroll tax is withheld during the year through employer payroll. Income tax is settled through the annual tax assessment and return.",
    },
  ],
  officialSources: [
    {
      label: "Belastingdienst payroll taxes",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/you_are_not_established_in_the_netherlands_are_you_required_to_withhold_payroll_taxes/what_are_payroll_taxes/what_are_payroll_taxes",
      description: "Official explanation of payroll tax categories, including wage tax and contributions.",
    },
    {
      label: "Belastingdienst wage tax calculations",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/you_are_not_established_in_the_netherlands_are_you_required_to_withhold_payroll_taxes/when_you_are_going_to_withhold_payroll_taxes/calculating_payroll_taxes/calculating_wage_tax_national_insurance_contributions",
      description: "Official guidance on wage tax and national insurance calculation context.",
    },
    {
      label: "Belastingdienst income tax",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/nl/werk-en-inkomen/content/hoeveel-inkomstenbelasting-betalen",
      description: "Official income tax information for employees and residents.",
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
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Understand gross salary, net salary and payslip basics." },
    { label: "Expat Taxes in the Netherlands", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Tax system guide for international residents." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Eligibility and payroll impact of the expat scheme." },
    { label: "Open a Dutch Bank Account", href: "/netherlands/open-bank-account-netherlands/", status: "live", description: "Banking setup for salary payments and direct debits." },
  ] satisfies PayrollTaxNetherlandsLink[],
  exploreNextCards: [
    { label: "Net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home pay with your own inputs." },
    { label: "30% ruling calculator", href: THIRTY_PERCENT_RULING_CALCULATOR_PATH, status: "live", description: "Model eligibility and allowance impact on payroll." },
    { label: "Payslip decoder", href: PAYSLIP_DECODER_PATH, status: "live", description: "Decode loonheffing and net lines on a Dutch payslip." },
    { label: "Gross vs net salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Clarify gross and net salary before comparing offers." },
    { label: "30% ruling guide", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Read how the expat scheme can affect payroll." },
    { label: "All tax tools", href: TAXES_TOOLS_HUB_PATH, status: "live", description: "Browse calculators and planning tools in the taxes cluster." },
  ] satisfies PayrollTaxNetherlandsLink[],
} as const;
