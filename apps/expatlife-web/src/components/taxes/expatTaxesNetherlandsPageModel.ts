export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;

export type ExpatTaxGuideLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const expatTaxesNetherlandsPage = {
  slug: "expat-taxes-netherlands",
  path: EXPAT_TAXES_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-05-13",
  seo: {
    title: "Expat Taxes in the Netherlands | Dutch Tax Guide for International Residents",
    description:
      "Learn how taxes work for expats in the Netherlands, including tax residency, income tax, the 30% ruling, Box 1/2/3, payroll tax, tax returns and international income.",
    keywords: [
      "expat taxes netherlands",
      "taxes for expats in the netherlands",
      "dutch tax system for expats",
      "netherlands expat tax guide",
      "tax return netherlands expats",
      "30 ruling netherlands",
      "tax residency netherlands",
      "box 1 box 2 box 3",
      "foreign income netherlands taxes",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes",
    pageTitle: "Expat Taxes in the Netherlands",
    subtitle:
      "Understand the Dutch tax system as an international resident - from income tax and the 30% ruling to tax residency, foreign income, payroll deductions and annual tax returns.",
    primaryCta: { label: "Understand Expat Tax Topics", href: "#expat-tax-topics" },
    secondaryCta: { label: "Find Tax Services", href: "#tax-services" },
    chips: ["Tax residency", "30% ruling", "Foreign income", "Tax returns"],
    image: {
      src: "/images/heroes/netherlands-expat-taxes-guide-hero.png",
      alt: "Calm Dutch apartment workspace with laptop tax dashboard, passport, residence permit-style documents, calculator, notebook and Amsterdam canal backdrop.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#tax-residency", label: "Residency" },
    { href: "#income-tax", label: "Income tax" },
    { href: "#box-system", label: "Box system" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#payroll-tax", label: "Payroll" },
    { href: "#tax-return", label: "Tax return" },
    { href: "#foreign-income", label: "Foreign income" },
    { href: "#freelancers", label: "Freelancers" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#tax-services", label: "Services" },
  ],
  snapshotCards: [
    { title: "Tax authority", body: "Belastingdienst" },
    { title: "Common expat topic", body: "30% ruling" },
    { title: "Main tax structure", body: "Box 1, Box 2, Box 3" },
    { title: "Employees", body: "Payroll tax is usually withheld" },
    { title: "Freelancers", body: "VAT and income tax responsibilities" },
    { title: "International cases", body: "Foreign income, assets and tax residency matter" },
  ],
  infographics: {
    residencyScope: {
      src: "/images/infographics/netherlands-expat-tax-residency-scope-infographic.png",
      alt: "Infographic explaining Dutch tax residency and tax scope for expats through life in the Netherlands, work and income, and foreign assets.",
      caption:
        "Use this visual to understand why residency, income source and foreign assets often need to be considered together.",
    },
    taxReturnTriggers: {
      src: "/images/infographics/netherlands-expat-tax-return-triggers-visual.png",
      alt: "Infographic showing common Dutch tax return triggers for expats, including moving mid-year, the 30% ruling, foreign income, freelance income, mortgage or home topics, partner or family changes, and leaving the Netherlands.",
      caption:
        "These are common reasons expats look more closely at annual filing. They are triggers to check, not automatic filing conclusions.",
    },
    employeeFreelancerFlow: {
      src: "/images/infographics/netherlands-expat-employee-freelancer-tax-flow.png",
      alt: "Infographic comparing employee payroll tax responsibilities with freelancer and ZZP tax responsibilities in the Netherlands.",
      caption:
        "Employees and freelancers can both file annual returns, but their ongoing admin rhythm is different.",
    },
  },
  topicLinks: [
    { label: "Tax residency", href: "/netherlands/taxes/tax-residency-netherlands/", status: "comingSoon", description: "Future cluster page for residency concepts and move-year questions." },
    { label: "Net salary", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Gross-to-net salary guide with payroll tax, 30% ruling context and calculator access." },
    { label: "Gross vs net salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Beginner-friendly explanation of Dutch salary wording, payslips and deductions." },
    { label: "Income tax", href: "/netherlands/taxes/income-tax-netherlands/", status: "comingSoon", description: "Future page for Dutch income tax basics." },
    { label: "Box tax system", href: "/netherlands/taxes/box-tax-system-netherlands/", status: "comingSoon", description: "Future page for Box 1, Box 2 and Box 3." },
    { label: "30% ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Detailed guide to the expat scheme, eligibility, employer application and recent changes." },
    { label: "Payroll tax", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "comingSoon", description: "Future page for wage tax and salary deductions." },
    { label: "Tax return", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon", description: "Planned taxes-cluster URL for annual filing." },
    { label: "International tax", href: "/netherlands/taxes/international-tax-expats/", status: "comingSoon", description: "Future page for cross-border tax topics." },
    { label: "Freelancer / ZZP taxes", href: "/netherlands/taxes/freelancer-zzp-taxes/", status: "comingSoon", description: "Future page for freelancer tax responsibilities." },
  ] satisfies ExpatTaxGuideLink[],
  scenarios: [
    "You moved to the Netherlands mid-year",
    "You qualify or applied for the 30% ruling",
    "You work for a Dutch employer",
    "You work remotely for a foreign employer",
    "You freelance as a ZZP'er",
    "You own property or investments abroad",
    "You have a partner or family tax situation",
    "You are leaving the Netherlands",
  ],
  serviceLinks: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "comingSoon", description: "Future service directory for tax help." },
    { label: "Expat accountants", href: "/netherlands/services/accountants/", status: "comingSoon", description: "Future directory for accounting support." },
    { label: "Bookkeepers", href: "/netherlands/services/bookkeeping/", status: "comingSoon", description: "Future directory for bookkeeping support." },
    { label: "Payroll providers", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll services." },
    { label: "Freelancer accounting tools", href: "/netherlands/services/freelance-accounting-tools/", status: "comingSoon", description: "Future directory for invoice and accounting tools." },
    { label: "Business setup advisors", href: "/netherlands/services/business-registration/", status: "comingSoon", description: "Future directory for business setup support." },
  ] satisfies ExpatTaxGuideLink[],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/" },
    { label: "Government.nl taxation and businesses", href: "https://www.government.nl/topics/taxation-and-businesses" },
    { label: "Business.gov.nl", href: "https://business.gov.nl/" },
    { label: "Netherlands Worldwide", href: "https://www.netherlandsworldwide.nl/" },
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Hub", href: "/netherlands/taxes/", status: "live" },
    { label: "Net Salary in the Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live" },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live" },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live" },
    { label: "Tax Return Guide", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon" },
    { label: "Open a Dutch bank account", href: "/netherlands/open-bank-account-netherlands/", status: "live" },
    { label: "Health insurance Netherlands", href: "/netherlands/health-insurance-netherlands/", status: "live" },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", status: "live" },
    { label: "Services", href: "/netherlands/services/", status: "live" },
  ] satisfies ExpatTaxGuideLink[],
  exploreNextCards: [
    { label: "Netherlands Taxes Hub", href: "/netherlands/taxes/", status: "live", description: "Return to the central tax pillar and topic map." },
    { label: "Net Salary Guide", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Understand gross-to-net salary, payroll deductions and take-home pay." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Learn why contract salary and bank-account salary differ." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Understand the expat scheme, eligibility, employer application and recent changes." },
    { label: "Tax Return Guide", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon", description: "Planned taxes-cluster guide for annual filing." },
    { label: "Find Tax Services", href: "/netherlands/services/tax-advisors/", status: "comingSoon", description: "Future tax services category." },
  ] satisfies ExpatTaxGuideLink[],
} as const;
