export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/" as const;
export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const RECRUITMENT_AGENCIES_SERVICES_PATH = "/netherlands/services/recruitment-agencies/" as const;
export const HOUSING_PLATFORMS_PATH = "/netherlands/services/housing-platforms/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;

export const TAX_ADVISORS_AFFILIATE_PLACEMENT_ID =
  "nl-services-tax-advisors-support-providers" as const;

export type TaxAdvisorDirectoryLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TaxAdvisorProvider = {
  name: string;
  href: string;
  summary: string;
  focus: string;
  idealCustomer: string;
  region: string;
  source?: string;
};

export const taxAdvisorsProviders: TaxAdvisorProvider[] = [
  { name: "Dutchtaxadvice", href: "https://www.dutchtaxadvice.nl/", summary: "Netherlands tax advisory provider with expat-facing tax support.", focus: "Tax returns, 30% ruling and Dutch tax questions", idealCustomer: "Expats who want practical Dutch tax guidance in English", region: "Netherlands / online", source: "Provider website" },
  { name: "OrangeTax - Tax is Exciting BV", href: "https://orangetax.com/", summary: "Tax firm focused on Dutch and international tax matters for individuals and businesses.", focus: "Income tax, business tax and international situations", idealCustomer: "International professionals and entrepreneurs with broader tax questions", region: "Netherlands", source: "Provider website" },
  { name: "Taxbrella", href: "https://taxbrella.com/", summary: "Expat-oriented tax service provider for Dutch filing and relocation-related tax questions.", focus: "Tax returns, M-forms and expat tax support", idealCustomer: "New arrivals, leavers and expats filing in the Netherlands", region: "Netherlands / online", source: "Provider website" },
  { name: "Taxsight Tax Advisors", href: "https://taxsight.nl/", summary: "Dutch tax advisory firm serving private clients, expats and entrepreneurs.", focus: "Personal tax, international tax and business-owner questions", idealCustomer: "Expats with assets, business or cross-border complexity", region: "Amsterdam / Netherlands", source: "Provider website" },
  { name: "Broadstreet", href: "https://broadstreet.nl/", summary: "Advisory firm offering tax, accountancy, payroll and cross-border support.", focus: "International tax, payroll, accounting and expat returns", idealCustomer: "Expats, entrepreneurs and employers needing multi-service support", region: "Amsterdam / Netherlands", source: "Provider website" },
  { name: "BNC Tax & Accounting B.V.", href: "https://bnctax.com/", summary: "Tax and accounting provider for international individuals and businesses.", focus: "Tax accounting, annual returns and business administration", idealCustomer: "Freelancers, entrepreneurs and companies needing tax plus accounting support", region: "Netherlands", source: "Provider website" },
  { name: "Expat Service | tax solutions for expats & companies", href: "https://expatservice.nl/", summary: "Expat-focused service provider for tax solutions and company support.", focus: "Expat taxes, employer support and company-related tax questions", idealCustomer: "Expats and employers wanting specialist tax support", region: "Netherlands", source: "Provider website" },
  { name: "Studio Expat", href: "https://studioexpat.nl/", summary: "Expat-oriented provider for Dutch tax and administration support.", focus: "Tax returns and freelancer or small-business administration", idealCustomer: "Expats and ZZP workers needing practical admin support", region: "Netherlands / online", source: "Provider website" },
  { name: "Migrantic, Lawyers for Tax & Global Mobility / Van Baal Tax Services", href: "https://migrantic.com/", summary: "Global mobility and tax-focused legal/tax service provider.", focus: "International mobility, tax and cross-border employment questions", idealCustomer: "Expats, employers and mobile employees with complex cross-border facts", region: "Netherlands / global mobility", source: "Provider website" },
  { name: "Hillbrook Expatriate Tax Solutions", href: "https://hillbrook.nl/", summary: "Expatriate tax solutions provider focused on mobile employees and international tax questions.", focus: "Expatriate tax, international assignments and employer-related tax", idealCustomer: "International professionals and employers with mobility tax needs", region: "Netherlands", source: "Provider website" },
];

export const taxAdvisorsPage = {
  slug: "tax-advisors",
  path: TAX_ADVISORS_PATH,
  publish: true,
  publishDate: "2026-05-20",
  affiliatePlacementId: TAX_ADVISORS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Tax Advisors for Expats in the Netherlands | Dutch Tax & Expat Specialists",
    description:
      "Find tax advisors, expat accountants and international tax specialists in the Netherlands. Learn when expats may need tax support for tax returns, the 30% ruling, freelancing, international income and more.",
    keywords: [
      "tax advisors netherlands expats",
      "expat tax advisor netherlands",
      "dutch tax advisor expats",
      "tax consultant netherlands expat",
      "expat accountant netherlands",
      "30 ruling tax advisor",
      "dutch tax return help",
      "international tax advisor netherlands",
      "expat tax services netherlands",
      "netherlands tax consultant",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services",
    pageTitle: "Tax Advisors for Expats in the Netherlands",
    subtitle:
      "Compare Dutch tax advisors, expat accountants and international tax specialists who help with tax returns, the 30% ruling, cross-border income, freelancing and relocation-related tax questions.",
    primaryCta: { label: "Explore Tax Advisors", href: "#providers" },
    secondaryCta: { label: "Learn About Dutch Taxes", href: "/netherlands/taxes/" },
    chips: ["Tax returns", "30% ruling", "International income", "ZZP"],
    image: {
      src: "/images/heroes/netherlands-tax-advisors-expat-professional-hero-v2.png",
      alt: "International professional calmly planning Dutch taxes with a laptop, notebook, calculator, tax documents, passport and residence permit-style card beside an Amsterdam canal window.",
    },
  },
  infographics: {
    whenToGetHelp: {
      src: "/images/infographics/netherlands-tax-advisors-when-to-get-help-flow.png",
      alt: "Infographic showing when expats may need professional tax help in the Netherlands, moving from official guidance to complexity checks and scoped tax advisor support.",
      caption:
        "Use this flow as a triage tool: start with official guidance, check whether your facts add complexity, then compare scoped help only when it fits your situation.",
    },
    specialistMatch: {
      src: "/images/infographics/netherlands-tax-advisors-specialist-match-map.png",
      alt: "Infographic comparing tax advisors, expat accountants, bookkeepers, payroll specialists and international tax specialists in the Netherlands.",
      caption:
        "Different tax professionals solve different problems. Match the provider type to the work you actually need before comparing firms.",
    },
    providerChecklist: {
      src: "/images/infographics/netherlands-tax-advisors-provider-comparison-checklist.png",
      alt: "Provider comparison checklist for Dutch tax advisors for expats, covering scope, expat experience, English support, international tax expertise, ZZP expertise, pricing, security and responsiveness.",
      caption:
        "A useful comparison call should clarify scope, price, documents, language support and who will do the work. This page does not rank providers.",
    },
  },
  snapshotCards: [
    { title: "Common clients", body: "Expats, freelancers, entrepreneurs" },
    { title: "Popular topic", body: "30% ruling" },
    { title: "Common support", body: "Tax returns" },
    { title: "International focus", body: "Foreign income and residency" },
    { title: "Business support", body: "VAT and bookkeeping" },
    { title: "Language support", body: "English-speaking advisors available" },
  ],
  needHelpCards: [
    "Moving to the Netherlands",
    "Leaving the Netherlands",
    "Applying for the 30% ruling",
    "Filing an M-form",
    "Working for a foreign employer",
    "Owning investments abroad",
    "Buying property",
    "Freelancing / ZZP",
    "Running a Dutch company",
    "International payroll situations",
  ],
  specialistTypes: [
    { title: "Tax Advisors", body: "Tax planning, tax returns, 30% ruling and residency issues." },
    { title: "Expat Accountants", body: "Expat-focused filings, annual returns and international income." },
    { title: "Bookkeepers", body: "Freelancer administration, VAT returns and ongoing compliance." },
    { title: "Payroll Specialists", body: "International payroll, employer support and expat compensation." },
    { title: "International Tax Specialists", body: "Cross-border tax issues, dual residency, foreign income and structuring." },
  ],
  specializedServices: [
    { title: "30% Ruling Support", providers: ["Dutchtaxadvice", "Taxbrella", "Broadstreet"] },
    { title: "International Tax", providers: ["Broadstreet", "Migrantic, Lawyers for Tax & Global Mobility / Van Baal Tax Services", "Taxsight Tax Advisors"] },
    { title: "Freelancers & ZZP", providers: ["Studio Expat", "BNC Tax & Accounting B.V.", "Expat Service | tax solutions for expats & companies"] },
    { title: "Tax Returns & M-Forms", providers: ["Dutchtaxadvice", "Taxbrella", "OrangeTax - Tax is Exciting BV"] },
  ],
  comparisonFactors: ["Expat experience", "English-language support", "International tax expertise", "Freelancer/business expertise", "Pricing structure", "Payroll experience", "Cross-border knowledge", "Responsiveness"],
  scenarios: [
    { title: "New expat applying for 30% ruling", links: [{ label: "30% ruling guide", href: "/netherlands/taxes/30-percent-ruling/" }] },
    { title: "Filing first Dutch tax return", links: [{ label: "Tax returns", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon" }] },
    { title: "M-form after relocation", links: [{ label: "Expat taxes", href: "/netherlands/taxes/expat-taxes-netherlands/" }] },
    { title: "Freelancer becoming ZZP", links: [{ label: "Freelancer taxes", href: "/netherlands/taxes/freelancer-zzp-taxes/", status: "comingSoon" }] },
    { title: "Working remotely for foreign employer", links: [{ label: "International tax", href: "/netherlands/taxes/international-tax-expats/", status: "comingSoon" }] },
    { title: "International investments", links: [{ label: "Box tax system", href: "/netherlands/taxes/box-tax-system-netherlands/", status: "comingSoon" }] },
    { title: "Entrepreneur moving company", links: [{ label: "Business registration", href: "/netherlands/services/business-registration/", status: "comingSoon" }] },
  ],
  relatedGuides: [
    { label: "Dutch Taxes Hub", href: "/netherlands/taxes/", status: "live", description: "Start with the main tax cluster." },
    { label: "Expat Taxes Guide", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Understand expat tax situations." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Read the expat scheme guide." },
    { label: "Tax Returns", href: "/netherlands/taxes/tax-return-netherlands/", status: "comingSoon", description: "Future tax return guide." },
    { label: "Tax Residency", href: "/netherlands/taxes/tax-residency-netherlands/", status: "comingSoon", description: "Future residency guide." },
    { label: "Freelancer & ZZP Taxes", href: "/netherlands/taxes/freelancer-zzp-taxes/", status: "comingSoon", description: "Future freelancer guide." },
  ] satisfies TaxAdvisorDirectoryLink[],
  relatedServices: [
    {
      label: "Immigration lawyers",
      href: IMMIGRATION_LAWYERS_PATH,
      status: "live",
      description: "Visa and residence questions that sit beside tax residency facts.",
    },
    {
      label: "Mortgage advisors",
      href: MORTGAGE_ADVISORS_PATH,
      status: "live",
      description: "Housing finance where tax, interest and buying timelines overlap.",
    },
    {
      label: "Financial advisors",
      href: "/netherlands/services/financial-advisors/",
      status: "live",
      description: "Long-term planning for pensions and investments beside tax filing.",
    },
    {
      label: "Notaries",
      href: "/netherlands/services/notaries/",
      status: "live",
      description: "Dutch notaris for purchase deeds and estate orientation — separate from tax returns.",
    },
    {
      label: "Insurance brokers",
      href: "/netherlands/services/insurance-brokers/",
      status: "live",
      description: "Independent intermediaries for household and life package comparison.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Broader settling support beyond tax filing.",
    },
    {
      label: "Relocation agencies",
      href: RELOCATION_AGENCIES_PATH,
      status: "live",
      description: "Full-package relocation coordination for arrivals and leavers.",
    },
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Domestic NL house moves, packing and local transport.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International household removals for arrivals and leavers.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Listings and mid-term rentals while tax setup continues.",
    },
    {
      label: "Recruitment agencies",
      href: RECRUITMENT_AGENCIES_SERVICES_PATH,
      status: "live",
      description: "Provider directory when job offers drive tax complexity.",
    },
    {
      label: "Accountants",
      href: "/netherlands/services/accountants/",
      status: "live",
      description: "Bookkeeping, BTW, jaarrekening and ZZP admin — separate from tax advice.",
    },
    {
      label: "Business consultants",
      href: "/netherlands/services/business-consultants/",
      status: "live",
      description: "Strategy, KvK growth and operations consulting — separate from tax filing.",
    },
    { label: "Bookkeeping", href: "/netherlands/services/bookkeeping/", status: "comingSoon" },
    { label: "Payroll services", href: "/netherlands/services/payroll-services/", status: "comingSoon" },
    { label: "Business registration", href: "/netherlands/services/business-registration/", status: "comingSoon" },
  ] satisfies TaxAdvisorDirectoryLink[],
  faq: [
    { q: "Do expats need a tax advisor?", a: "Not always. Straightforward payroll situations may be manageable with official guidance and employer payroll, while cross-border or mixed-income cases often benefit from scoped help." },
    { q: "What does a Dutch tax advisor do?", a: "A Dutch tax advisor may help with tax returns, residency questions, 30% ruling issues, foreign income, business tax or communicating with tax authorities." },
    { q: "Can tax advisors help with the 30% ruling?", a: "Some advisors help review eligibility, documentation, employer questions and payroll interpretation, but they cannot guarantee approval." },
    { q: "Can they file my tax return?", a: "Many providers offer filing support, review-only support or coaching. Confirm scope and price before engaging." },
    { q: "What is an M-form?", a: "An M-form is commonly associated with a tax year in which someone moves to or from the Netherlands. It can be more complex than a standard annual return." },
    { q: "Can they help with foreign income?", a: "International tax specialists can help map foreign income, assets and residency questions to Dutch filing obligations." },
    { q: "Do freelancers need a tax advisor?", a: "Some ZZP workers manage with bookkeeping tools, while mixed income, VAT or cross-border work can justify professional support." },
    { q: "What is the difference between a bookkeeper and tax advisor?", a: "Bookkeepers often manage records and VAT administration; tax advisors focus more on tax interpretation, returns, planning and complex questions." },
  ],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/" },
    { label: "Government.nl taxation and businesses", href: "https://www.government.nl/topics/taxation-and-businesses" },
    { label: "Business.gov.nl", href: "https://business.gov.nl/" },
    { label: "IamExpat tax advisor directory", href: "https://www.iamexpat.nl/expat-info/money-taxation/tax-advisors-services-netherlands" },
    { label: "ExpatGuide Dutch tax advisors", href: "https://www.expatguide.nl/services/dutch-tax-advisors/the-netherlands/" },
  ],
  disclosure:
    "Provider cards are neutral discovery entries for real businesses. Website buttons use affiliate/referral tracking where available, and we may earn a commission at no extra cost to you. Listings are not rankings, endorsements, reviews, tax advice or outcome guarantees. Confirm scope, credentials, pricing and terms directly with each provider.",
} as const;
