export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;

export type TaxesHubLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const taxesHubPage = {
  slug: "taxes",
  path: TAXES_HUB_PATH,
  publish: true,
  publishDate: "2026-05-10",
  seo: {
    title: "Netherlands Taxes Guide for Expats | Income Tax, 30% Ruling & Dutch Tax System",
    description:
      "Learn how taxes work in the Netherlands for expats, including income tax, the 30% ruling, Box 1/2/3 taxes, payroll tax, tax returns, freelancers and more.",
    keywords: [
      "netherlands taxes for expats",
      "dutch tax guide",
      "taxes in the netherlands",
      "netherlands tax system",
      "expat taxes netherlands",
      "30 ruling netherlands",
      "dutch income tax",
      "box 1 box 2 box 3",
      "tax return netherlands",
      "dutch payroll tax",
      "freelancer taxes netherlands",
      "zzp taxes netherlands",
      "tax residency netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes",
    pageTitle: "Netherlands Taxes Guide for Expats",
    subtitle:
      "Understand how the Dutch tax system works - from income tax and the 30% ruling to freelancers, tax returns, payroll deductions and expat tax considerations.",
    primaryCta: { label: "Explore Tax Topics", href: "#tax-topics" },
    secondaryCta: { label: "Find Tax Services", href: "#tax-services" },
    chips: ["Income tax", "30% ruling", "Tax returns", "Freelancers"],
    image: {
      src: "/images/heroes/netherlands-taxes-hub-hero.png",
      alt: "Cinematic Dutch tax planning workspace with laptop tax dashboard, documents, calculator, notebook, coffee and Amsterdam canal backdrop.",
    },
  },
  sectionNav: [
    { href: "#how-taxes-work", label: "How it works" },
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#tax-topics", label: "Tax topics" },
    { href: "#system-explained", label: "Box system" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#employees", label: "Employees" },
    { href: "#freelancers", label: "Freelancers" },
    { href: "#international-tax", label: "International" },
    { href: "#tax-return", label: "Tax returns" },
    { href: "#tax-services", label: "Services" },
    { href: "#official-sources", label: "Sources" },
  ],
  snapshotCards: [
    { title: "Main tax authority", body: "Belastingdienst" },
    { title: "Key system", body: "Box tax structure" },
    { title: "Common expat topic", body: "30% ruling" },
    { title: "Annual filing period", body: "Yearly tax return" },
    { title: "Common worker taxes", body: "Income tax + payroll tax" },
    { title: "Common freelancer taxes", body: "VAT + income tax" },
  ],
  infographics: {
    boxSystem: {
      src: "/images/infographics/netherlands-tax-box-system-infographic.png",
      alt: "Infographic explaining the Dutch box tax system with Box 1 for work and primary income, Box 2 for substantial interest, and Box 3 for savings and investments.",
      caption:
        "Use this as a simple mental model for the Dutch box structure. It explains categories, not rates or personal advice.",
    },
    employeeFreelancerFlow: {
      src: "/images/infographics/netherlands-employee-freelancer-tax-flow-infographic.png",
      alt: "Infographic comparing employee tax responsibilities with freelancer and ZZP tax responsibilities in the Netherlands.",
      caption:
        "Employees usually follow a payroll rhythm, while freelancers and ZZP workers manage invoices, VAT and income tax responsibilities more directly.",
    },
    taxReturnTriggers: {
      src: "/images/infographics/netherlands-tax-return-triggers-infographic.png",
      alt: "Infographic showing common expat tax return triggers in the Netherlands, including moving mid-year, 30% ruling, foreign income, freelance income, partner or family situations, and mortgage or home topics.",
      caption:
        "These are common reasons expats look more closely at annual filing. Always check official guidance for your tax year.",
    },
  },
  taxTopics: [
    {
      label: "Expat Taxes in the Netherlands",
      href: "/netherlands/taxes/expat-taxes-netherlands/",
      status: "live",
      description: "A practical pillar guide for tax residency, income tax, payroll, returns and cross-border topics.",
    },
    {
      label: "Average Salary in the Netherlands",
      href: "/netherlands/taxes/average-salary-netherlands/",
      status: "live",
      description: "Salary benchmarking guide by city, industry and experience with expat context and tax links.",
    },
    {
      label: "Salary Negotiation in the Netherlands",
      href: "/netherlands/jobs/salary-negotiation-netherlands/",
      status: "live",
      description: "How expats negotiate Dutch job offers: culture, benefits, gross vs net and total compensation.",
    },
    {
      label: "Minimum Wage in the Netherlands",
      href: "/netherlands/jobs/minimum-wage-netherlands/",
      status: "live",
      description: "How Dutch minimum wage works: age bands, gross vs net, take-home pay and living costs for expats.",
    },
    {
      label: "Expat Salary in the Netherlands",
      href: "/netherlands/jobs/expat-salary-netherlands/",
      status: "live",
      description: "Salary expectations for international professionals by city, industry, taxes and the 30% ruling.",
    },
    {
      label: "Employee Benefits in the Netherlands",
      href: "/netherlands/jobs/employee-benefits-netherlands/",
      status: "live",
      description: "Pension, holiday allowance, leave, remote work and expat compensation packages explained.",
    },
    {
      label: "Pension in the Netherlands for Expats",
      href: "/netherlands/jobs/pension-netherlands-expats/",
      status: "live",
      description: "Dutch pension system for expats: AOW, employer pensions, salary deductions and portability.",
    },
    {
      label: "Net Salary in the Netherlands",
      href: "/netherlands/taxes/net-salary-netherlands/",
      status: "live",
      description: "Gross-to-net salary guide with payroll tax, 30% ruling context, examples and calculator access.",
    },
    {
      label: "Gross vs Net Salary",
      href: "/netherlands/taxes/gross-vs-net-salary/",
      status: "live",
      description: "Beginner-friendly explanation of Dutch gross salary, net salary, payslips and payroll deductions.",
    },
    {
      label: "Income Tax",
      href: "/netherlands/taxes/income-tax-netherlands/",
      status: "comingSoon",
      description: "How Dutch income tax fits salary, employment income and filing.",
    },
    {
      label: "30% Ruling",
      href: "/netherlands/taxes/30-percent-ruling/",
      status: "live",
      description: "Eligibility framing, employer involvement, recent changes and where the facility fits.",
    },
    {
      label: "Tax Residency",
      href: "/netherlands/money/tax-residency-netherlands/",
      status: "live",
      description: "Residency concepts for expats, without pretending to decide your case.",
    },
    {
      label: "Box 1 / Box 2 / Box 3",
      href: "/netherlands/taxes/box-tax-system-netherlands/",
      status: "comingSoon",
      description: "The box structure for work income, substantial interest, savings and investments.",
    },
    {
      label: "Payroll Tax",
      href: "/netherlands/taxes/payroll-tax-netherlands/",
      status: "live",
      description: "What employers withhold, why loonheffing reduces net salary and how payroll fits the Dutch tax system.",
    },
    {
      label: "Freelancers & ZZP Taxes",
      href: "/netherlands/taxes/freelancer-zzp-taxes/",
      status: "comingSoon",
      description: "Income tax, VAT and bookkeeping topics for independent workers.",
    },
    {
      label: "VAT (BTW)",
      href: "/netherlands/taxes/vat-btw-netherlands/",
      status: "comingSoon",
      description: "VAT basics for freelancers and business owners.",
    },
    {
      label: "Tax Returns",
      href: "/netherlands/money/tax-return-netherlands/",
      status: "live",
      description: "Annual filing orientation, preparation and common expat triggers.",
    },
    {
      label: "International Tax Considerations",
      href: "/netherlands/taxes/expat-taxes-netherlands/",
      status: "live",
      description: "Cross-border topics to understand before discussing specifics with an adviser.",
    },
    {
      label: "Business Taxes",
      href: "/netherlands/taxes/business-taxes-netherlands/",
      status: "comingSoon",
      description: "High-level business tax topics for entrepreneurs and company owners.",
    },
  ] satisfies TaxesHubLink[],
  faqCards: [
    { label: "Do I need to file a Dutch tax return?", href: "/netherlands/money/tax-return-netherlands/", status: "live" },
    { label: "How does the 30% ruling work?", href: "/netherlands/taxes/30-percent-ruling/", status: "live" },
    { label: "What are Box 1 / Box 2 / Box 3 taxes?", href: "/netherlands/taxes/box-tax-system-netherlands/", status: "comingSoon" },
    { label: "Do freelancers pay VAT?", href: "/netherlands/taxes/vat-btw-netherlands/", status: "comingSoon" },
    { label: "Am I a Dutch tax resident?", href: "/netherlands/money/tax-residency-netherlands/", status: "live" },
    { label: "What happens if I work remotely?", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live" },
    { label: "Can I keep investments abroad?", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live" },
    { label: "What taxes are deducted from salary?", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live" },
  ] satisfies TaxesHubLink[],
  serviceLinks: [
    {
      label: "Tax advisors",
      href: "/netherlands/services/tax-advisors/",
      status: "live",
      description: "Compare tax advisors, expat accountants and international tax specialists.",
    },
    { label: "Expat accountants", href: "/netherlands/services/accountants/", status: "comingSoon", description: "Accounting support for returns, business or cross-border situations." },
    { label: "Payroll providers", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Employer and business payroll support." },
    { label: "Bookkeeping services", href: "/netherlands/services/bookkeeping/", status: "comingSoon", description: "Records and bookkeeping for freelancers and small businesses." },
    { label: "Business setup services", href: "/netherlands/services/business-registration/", status: "comingSoon", description: "Registration and setup help for entrepreneurs." },
    { label: "Freelance accounting tools", href: "/netherlands/services/freelance-accounting-tools/", status: "comingSoon", description: "Tools for invoices, VAT and administration." },
    { label: "Mortgage advisors", href: "/netherlands/services/mortgage-advisors/", status: "comingSoon", description: "Mortgage advice where tax and housing questions meet." },
    { label: "Financial planners", href: "/netherlands/services/financial-advisors/", status: "comingSoon", description: "Financial planning support for broader money decisions." },
  ] satisfies TaxesHubLink[],
  relatedGuides: [
    { label: "Expat Taxes in the Netherlands", href: "/netherlands/taxes/expat-taxes-netherlands/" },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/" },
    { label: "Open a Dutch bank account", href: "/netherlands/open-bank-account-netherlands/" },
    { label: "Health insurance Netherlands", href: "/netherlands/health-insurance-netherlands/" },
    { label: "Banking in the Netherlands", href: "/netherlands/money/banking/" },
    { label: "Services", href: "/netherlands/services/" },
    { label: "Cities", href: "/netherlands/cities/" },
  ],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/" },
    { label: "Government.nl taxation and businesses", href: "https://www.government.nl/topics/taxation-and-businesses" },
    { label: "Business.gov.nl", href: "https://business.gov.nl/" },
    { label: "Netherlands Worldwide", href: "https://www.netherlandsworldwide.nl/" },
  ],
  exploreNextCards: [
    { label: "Expat Taxes in the Netherlands", href: "/netherlands/taxes/expat-taxes-netherlands/", description: "Understand Dutch taxes through the situations expats most often face." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", description: "Understand the expat tax facility and eligibility context." },
    { label: "Tax Returns", href: "/netherlands/money/tax-return-netherlands/", description: "Prepare for annual filing and common expat return triggers." },
    { label: "Freelancers & ZZP", href: "/netherlands/taxes/freelancer-zzp-taxes/", status: "comingSoon", description: "Future guide for ZZP income tax, VAT and bookkeeping." },
    { label: "Opening a Dutch Bank Account", href: "/netherlands/open-bank-account-netherlands/", description: "Banking setup for salary, refunds, rent and Dutch payments." },
    { label: "Business Setup", href: "/netherlands/business/", status: "comingSoon", description: "Future hub for company and freelance setup." },
    { label: "Netherlands Services", href: "/netherlands/services/", description: "Browse provider categories for expat setup." },
  ] satisfies TaxesHubLink[],
} as const;
