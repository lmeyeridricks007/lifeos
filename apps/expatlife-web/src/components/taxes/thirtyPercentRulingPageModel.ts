export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;

export type ThirtyPercentRulingLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type ThirtyPercentRulingScenario = {
  title: string;
  body: string;
  href: string;
  status?: "live" | "comingSoon";
};

export const thirtyPercentRulingPage = {
  slug: "30-percent-ruling",
  path: THIRTY_PERCENT_RULING_PATH,
  publish: true,
  publishDate: "2026-05-17",
  seo: {
    title: "30% Ruling in the Netherlands | Expat Tax Benefit Explained",
    description:
      "Learn how the Dutch 30% ruling works, who may qualify, how employers apply, salary requirements, recent changes, and what expats should know before moving.",
    keywords: [
      "30 ruling netherlands",
      "30 percent ruling netherlands",
      "dutch 30 ruling",
      "expat tax benefit netherlands",
      "30 facility netherlands",
      "30 ruling salary requirements",
      "30 ruling eligibility",
      "netherlands expat scheme",
      "tax free salary netherlands expat",
      "highly skilled migrant tax benefit",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes",
    pageTitle: "30% Ruling in the Netherlands",
    subtitle:
      "Understand how the Dutch expat tax benefit works, who may qualify, how employers apply, and what international professionals should know before relocating.",
    primaryCta: { label: "Understand Eligibility", href: "#eligibility" },
    secondaryCta: { label: "Explore Expat Taxes", href: "/netherlands/taxes/expat-taxes-netherlands/" },
    chips: ["Expat scheme", "Employer application", "Eligibility", "Payroll"],
    image: {
      src: "/images/heroes/netherlands-30-percent-ruling-taxes-hero.png",
      alt: "Premium Dutch relocation planning workspace with employment contract, passport, residence permit-style documents, calculator and laptop showing a 30% facility overview.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#150km-rule", label: "150 km rule" },
    { href: "#salary", label: "Salary" },
    { href: "#changes", label: "Changes" },
    { href: "#foreign-assets", label: "Foreign assets" },
    { href: "#application", label: "Application" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#benefits-limitations", label: "Limits" },
    { href: "#faq", label: "FAQ" },
  ],
  snapshotCards: [
    { title: "Purpose", body: "Compensate expat-related extraterritorial costs" },
    { title: "Managed by", body: "Belastingdienst" },
    { title: "Applied by", body: "Employer + employee" },
    { title: "Common users", body: "Highly skilled international employees" },
    { title: "Duration", body: "Limited period" },
    { title: "Eligibility", body: "Salary and expertise conditions apply" },
  ],
  infographics: {
    howItWorks: {
      src: "/images/infographics/netherlands-30-ruling-how-it-works-infographic.png",
      alt: "Infographic showing how the Dutch 30% ruling or expat scheme works, from being recruited abroad to employer and employee application, tax authority decision and payroll treatment if approved.",
      caption:
        "Use this as the basic process map: recruitment, joint application, tax authority review and payroll treatment if approved.",
    },
    eligibilityChecks: {
      src: "/images/infographics/netherlands-30-ruling-eligibility-checks-infographic.png",
      alt: "Infographic checklist for Dutch 30% ruling eligibility, including recruitment from abroad, specific expertise, salary threshold, employer application, 150 kilometre residence history and possible exceptions.",
      caption:
        "This checklist explains the main eligibility themes without hardcoding thresholds. Always verify the current official rules.",
    },
    changesAndAssets: {
      src: "/images/infographics/netherlands-30-ruling-changes-assets-timeline.png",
      alt: "Infographic timeline explaining recent 30% ruling changes, entry date relevance, transitional arrangements and foreign assets or Box 2 and Box 3 considerations.",
      caption:
        "Recent rules and foreign-asset treatment can depend on timing and transitional arrangements. Treat this as a prompt to check official sources.",
    },
  },
  eligibilityChecks: [
    "Recruited from abroad",
    "Specific expertise scarce in the Dutch labour market",
    "Minimum salary thresholds",
    "Employer application",
    "Distance requirement before moving",
    "Exceptions may apply for some researchers and medical specialists",
  ],
  scenarios: [
    {
      title: "Highly skilled migrant hired from abroad",
      body: "Check employer sponsorship, salary/expertise conditions, and whether the application is submitted promptly.",
      href: "/netherlands/visa/highly-skilled-migrant/",
      status: "live",
    },
    {
      title: "Internal company transfer",
      body: "Clarify whether the Dutch employer can apply and how the employment start date affects timing.",
      href: "/netherlands/taxes/expat-taxes-netherlands/",
      status: "live",
    },
    {
      title: "Tech employee relocating to Amsterdam",
      body: "Model net salary carefully and compare housing pressure before treating the ruling as guaranteed.",
      href: "/netherlands/amsterdam/",
      status: "live",
    },
    {
      title: "Researcher moving to a Dutch university",
      body: "Some scientific or specialist training exceptions may apply, but official eligibility still needs verification.",
      href: "/netherlands/taxes/30-percent-ruling/",
      status: "live",
    },
    {
      title: "Startup employee relocating",
      body: "Check employer setup, salary structure, visa pathway and whether payroll can handle the facility.",
      href: "/netherlands/services/startup-visa-advisors/",
      status: "live",
    },
    {
      title: "Employee changing employers",
      body: "Timing and continuity can matter. Do not assume the facility automatically transfers.",
      href: "/netherlands/moving/changing-jobs-netherlands/",
      status: "live",
    },
    {
      title: "Expats with foreign investments",
      body: "Box 2, Box 3 and partial foreign taxpayer changes may make professional advice more important.",
      href: "/netherlands/taxes/expat-taxes-netherlands/",
      status: "live",
    },
  ] satisfies ThirtyPercentRulingScenario[],
  relatedTaxTopics: [
    { label: "Average Salary in the Netherlands", href: "/netherlands/taxes/average-salary-netherlands/", status: "live", description: "Salary benchmarking by city, industry and experience with expat context." },
    { label: "Salary Negotiation in the Netherlands", href: "/netherlands/jobs/salary-negotiation-netherlands/", status: "live", description: "Negotiate offers with 30% ruling and total-compensation context." },
    { label: "Expat Taxes", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Scenario-led expat tax guide for partial years, foreign assets, payroll and tax returns." },
    { label: "Net Salary", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Gross-to-net salary guide with calculator access and payroll deduction context." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Beginner guide to Dutch gross salary, net salary, payslips and deductions." },
    { label: "Income Tax", href: "/netherlands/taxes/income-tax-netherlands/", status: "comingSoon", description: "Future guide for Dutch income tax basics." },
    { label: "Tax Residency", href: "/netherlands/taxes/tax-residency-netherlands/", status: "comingSoon", description: "Future taxes-cluster guide for residency concepts." },
    { label: "Box Tax System", href: "/netherlands/taxes/box-tax-system-netherlands/", status: "comingSoon", description: "Future guide for Box 1, Box 2 and Box 3." },
    { label: "Payroll Tax", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live", description: "Guide to loonheffing, salary deductions and Dutch payroll withholding." },
    { label: "Tax Returns", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon", description: "Future taxes-cluster guide for annual filing." },
  ] satisfies ThirtyPercentRulingLink[],
  serviceLinks: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "comingSoon", description: "Future category for scoped tax help." },
    { label: "Expat accountants", href: "/netherlands/services/accountants/", status: "live", description: "Bookkeeping, BTW filings and accounting support for expats." },
    { label: "Payroll specialists", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future category for payroll setup and administration." },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Immigration legal support where work status and relocation questions overlap." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Practical relocation support around arrival, housing and setup." },
  ] satisfies ThirtyPercentRulingLink[],
  faq: [
    {
      q: "What is the 30% ruling?",
      a: "The 30% ruling, also called the expat scheme or 30% facility, is a Dutch tax facility that can allow an employer to provide part of compensation tax-free for qualifying employees recruited from abroad.",
    },
    {
      q: "Who qualifies for the 30% ruling?",
      a: "Eligibility depends on official conditions such as recruitment from abroad, specific expertise, salary thresholds, distance requirements and employer application. This page gives orientation only.",
    },
    { q: "Do all expats receive it?", a: "No. Many expats do not qualify, and the facility is not automatic." },
    { q: "Does my employer need to apply?", a: "Yes. The application is generally made jointly by employer and employee, and payroll setup depends on employer participation." },
    { q: "Is the ruling guaranteed?", a: "No. The Dutch tax authority reviews the application and eligibility conditions must be met." },
    { q: "How long does it last?", a: "The facility applies for a limited period. Duration rules and transitional arrangements can change, so verify official guidance for your case." },
    { q: "Can I keep it when changing employers?", a: "Possibly in some situations, but timing and conditions matter. Do not assume it transfers automatically." },
    { q: "Does it affect foreign assets?", a: "Historically the ruling connected to partial foreign taxpayer treatment for Box 2 and Box 3. Recent reforms changed this significantly, so foreign assets should be reviewed carefully." },
    { q: "What happens when it ends?", a: "Payroll and wider tax treatment may change after the facility ends. Employees should plan ahead and confirm how payroll will adjust." },
    { q: "Can freelancers use it?", a: "The 30% ruling is generally an employee/employer facility. Freelancers should seek separate guidance for ZZP or business tax topics." },
  ],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/" },
    { label: "Government.nl - shortening 30% ruling", href: "https://www.government.nl/topics/income-tax/shortening-30-percent-ruling" },
    { label: "Business.gov.nl - expat scheme / 30% ruling", href: "https://business.gov.nl/staff/employing-staff/the-expat-scheme-30-percent-ruling-in-the-netherlands/" },
    { label: "Belastingdienst - 30% facility", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/coming-to-work-in-the-netherlands-30-percent-facility" },
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Hub", href: "/netherlands/taxes/", status: "live" },
    { label: "Expat Taxes in the Netherlands", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live" },
    { label: "Net Salary in the Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live" },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live" },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", status: "live" },
    { label: "Open a Dutch bank account", href: "/netherlands/open-bank-account-netherlands/", status: "live" },
    { label: "Services", href: "/netherlands/services/", status: "live" },
  ] satisfies ThirtyPercentRulingLink[],
  exploreNextCards: [
    { label: "Expat Taxes Guide", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Understand expat tax scenarios around residency, payroll and foreign assets." },
    { label: "Net Salary Guide", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Estimate gross-to-net salary and compare ruling impact." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Understand the salary basics before modelling the ruling." },
    { label: "Tax Residency", href: "/netherlands/taxes/tax-residency-netherlands/", status: "comingSoon", description: "Future taxes-cluster guide." },
    { label: "Tax Returns", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon", description: "Future annual filing guide." },
    { label: "Income Tax", href: "/netherlands/taxes/income-tax-netherlands/", status: "comingSoon", description: "Future income tax guide." },
    { label: "Find Tax Advisors", href: "/netherlands/services/tax-advisors/", status: "comingSoon", description: "Future tax services category." },
  ] satisfies ThirtyPercentRulingLink[],
} as const;
