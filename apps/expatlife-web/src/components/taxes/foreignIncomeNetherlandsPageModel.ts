export const FOREIGN_INCOME_NETHERLANDS_PATH = "/netherlands/taxes/foreign-income-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const DOUBLE_TAXATION_NETHERLANDS_PATH = "/netherlands/taxes/double-taxation-netherlands/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;

export type ForeignIncomeNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const foreignIncomeNetherlandsPage = {
  slug: "foreign-income-netherlands",
  path: FOREIGN_INCOME_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-07-29",
  seo: {
    title: "Foreign Income in the Netherlands | Expat Tax Guide",
    description:
      "Learn how foreign income may affect taxes in the Netherlands, including tax residency, reporting obligations, remote work and common expat situations.",
    keywords: [
      "foreign income netherlands",
      "foreign income tax netherlands",
      "expat foreign income netherlands",
      "declare foreign income netherlands",
      "worldwide income netherlands",
      "remote work tax netherlands",
      "foreign rental income netherlands",
      "international income netherlands",
      "dutch tax residency",
      "overseas income netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Global mobility",
    pageTitle: "Foreign Income in the Netherlands",
    subtitle:
      "Understand how foreign income may interact with Dutch taxes, including tax residency, reporting obligations, remote work and common expat tax situations.",
    primaryCta: { label: "Understand Foreign Income Rules", href: "#intro" },
    secondaryCta: { label: "Explore Expat Tax Guides", href: TAXES_HUB_PATH },
    chips: ["Foreign income", "Tax residency", "Remote work", "Treaties"],
    image: {
      src: "/images/heroes/netherlands-foreign-income-hero-v1.png",
      alt: "Premium editorial image of an international professional reviewing cross-border finance documents in an Amsterdam canal-side workspace.",
    },
  },
  visuals: {
    intro: {
      src: "/images/infographics/netherlands-foreign-income-flow-premium-v6.png",
      alt: "Premium ExpatLife infographic showing a foreign income file builder with income stream, residency facts, reporting checks and advisor review.",
      caption: "Turn foreign-income anxiety into an organized evidence file: country, payer, income type, residency facts and records.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-foreign-income-snapshot-premium-v6.png",
      alt: "Premium ExpatLife infographic showing six quick triage questions for foreign income: reporting, residency, treaty, remote work, worldwide income and advisor review.",
      caption: "Use the snapshot as a quick triage before forms, forums or assumptions.",
    },
    residency: {
      src: "/images/infographics/netherlands-foreign-income-residency-premium-v6.png",
      alt: "Premium ExpatLife compass infographic explaining Dutch tax residency evidence through home, family ties, economic life and timing.",
      caption: "Residency affects the scope of analysis, but it should not be oversimplified to nationality, visa status or one document.",
    },
    worldwide: {
      src: "/images/infographics/netherlands-foreign-income-worldwide-premium-v6.png",
      alt: "Premium ExpatLife infographic showing worldwide income concepts as separate scope, income sorting and relief checks.",
      caption: "Worldwide income concepts do not automatically mean every income stream is taxed twice.",
    },
    incomeTypes: {
      src: "/images/infographics/netherlands-foreign-income-types-premium-v6.png",
      alt: "Premium ExpatLife radial infographic mapping foreign income types including salary, remote work, rental property, dividends, pensions, freelance income, business income and crypto.",
      caption: "Classify foreign income by type because salary, property, pensions, dividends and business income can raise different questions.",
    },
    remoteWork: {
      src: "/images/infographics/netherlands-foreign-income-remote-work-premium-v6.png",
      alt: "Premium ExpatLife infographic mapping foreign employer, physical workdays, payroll checks and social security questions for remote workers.",
      caption: "Remote work can connect tax residency, payroll, workday allocation and social-security questions.",
    },
    property: {
      src: "/images/infographics/netherlands-foreign-income-property-premium-v6.png",
      alt: "Premium ExpatLife infographic showing foreign property and rental income records, including rental ledger, local tax file, valuation and Dutch review.",
      caption: "Foreign property needs its own evidence file: rent ledger, local tax documents, valuations and ownership records.",
    },
    investments: {
      src: "/images/infographics/netherlands-foreign-income-investments-premium-v6.png",
      alt: "Premium ExpatLife portfolio infographic showing foreign bank accounts, brokerage accounts, crypto and pensions with records to keep.",
      caption: "Foreign accounts and investments are easier to review when balances, withholding, valuations and statements are organized early.",
    },
    treaties: {
      src: "/images/infographics/netherlands-foreign-income-treaties-premium-v6.png",
      alt: "Premium ExpatLife bridge infographic showing Netherlands, source country, income article and fact verification for treaty questions.",
      caption: "Treaties may help coordinate taxing rights, but each treaty and personal fact pattern differs.",
    },
    ruling: {
      src: "/images/infographics/netherlands-foreign-income-30-ruling-premium-v6.png",
      alt: "Premium ExpatLife layered infographic showing employment setup, foreign income, assets, workdays and advisor review for the 30% ruling.",
      caption: "The 30% ruling can matter, but it does not automatically remove foreign-income or treaty questions.",
    },
    movingYear: {
      src: "/images/infographics/netherlands-foreign-income-moving-year-premium-v6.png",
      alt: "Premium ExpatLife timeline infographic showing before-arrival, move-date, after-arrival and filing-season records for moving during the tax year.",
      caption: "Mid-year moves are easier to explain when you keep one clean timeline of dates, countries, income and withholding.",
    },
    freelancers: {
      src: "/images/infographics/netherlands-foreign-income-freelancers-premium-v6.png",
      alt: "Premium ExpatLife network infographic showing international freelancer tax factors including client countries, VAT, business presence and owner payments.",
      caption: "International freelancers need to map client country, VAT, business presence, residency and payment records together.",
    },
    mistakes: {
      src: "/images/infographics/netherlands-foreign-income-mistakes-premium-v6.png",
      alt: "Premium ExpatLife risk-board infographic showing common foreign income mistakes before filing.",
      caption: "Most foreign-income mistakes start with assumptions rather than missing expertise.",
    },
    advice: {
      src: "/images/infographics/netherlands-foreign-income-advice-premium-v6.png",
      alt: "Premium ExpatLife advisor triage infographic showing when professional advice is valuable for foreign income cases.",
      caption: "Professional advice is most valuable when several countries, income types or reporting systems overlap.",
    },
    questions: {
      src: "/images/infographics/netherlands-foreign-income-questions-premium-v6.png",
      alt: "Premium ExpatLife infographic turning common expat foreign income questions into practical next steps.",
      caption: "Use common questions to identify the missing facts: income type, residency, work location, accounts, property and treaty concerns.",
    },
    relatedGuides: {
      src: "/images/infographics/netherlands-foreign-income-related-guides-premium-v6.png",
      alt: "Premium ExpatLife infographic showing a recommended related guide path from expat taxes to foreign income, double taxation, payroll and the 30% ruling.",
      caption: "Use the related guides as a reading path from broad tax context to specific cross-border risks.",
    },
    services: {
      src: "/images/infographics/netherlands-foreign-income-services-premium-v6.png",
      alt: "Premium ExpatLife infographic matching foreign income problems to tax advisors, payroll specialists, financial advisors, immigration lawyers and international tax specialists.",
      caption: "Match the professional to the problem before booking: filing, payroll, assets, immigration or multi-country review.",
    },
    faq: {
      src: "/images/infographics/netherlands-foreign-income-faq-premium-v6.png",
      alt: "Premium ExpatLife infographic showing a foreign income FAQ filter for declaring income, worldwide income, remote work, property, accounts and double taxation.",
      caption: "FAQ answers are orientation only; verify your own facts before treating them as a filing position.",
    },
    sources: {
      src: "/images/infographics/netherlands-foreign-income-sources-premium-v6.png",
      alt: "Premium ExpatLife infographic showing official foreign income source checks across Belastingdienst, Government.nl, Business.gov.nl, NederlandWereldwijd and OECD.",
      caption: "Use official sources for verification and confirm rules for your tax year and facts.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-foreign-income-explore-next-premium-v6.png",
      alt: "Premium ExpatLife infographic showing next guide options after foreign income, including double taxation, expat taxes, 30% ruling, payroll and moving to the Netherlands.",
      caption: "Pick the next guide based on the problem you actually have.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Intro" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#residency", label: "Residency" },
    { href: "#worldwide-income", label: "Worldwide" },
    { href: "#income-types", label: "Income types" },
    { href: "#remote-work", label: "Remote work" },
    { href: "#property", label: "Property" },
    { href: "#investments", label: "Investments" },
    { href: "#treaties", label: "Treaties" },
    { href: "#ruling", label: "30% ruling" },
    { href: "#moving-year", label: "Moving year" },
    { href: "#freelancers", label: "Freelancers" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#advice", label: "Advice" },
    { href: "#questions", label: "Questions" },
    { href: "#related-tax-guides", label: "Tax guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  introPoints: [
    "Foreign income generally means income that originates outside the Netherlands, such as foreign salary, rent, dividends, pensions, freelance income or investment income.",
    "Many expats keep international income streams after moving: an employer abroad, a rental home, overseas investments, a side business or remote work income.",
    "This guide explains awareness and concepts. It is not tax advice, legal advice or international tax planning advice.",
  ],
  snapshotCards: [
    { label: "Reporting", value: "Foreign income may require Dutch or foreign filing checks" },
    { label: "Residency", value: "Tax residency often shapes the scope" },
    { label: "Treaties", value: "Double-taxation treaties may apply" },
    { label: "Remote work", value: "Foreign employers can create payroll complexity" },
    { label: "Worldwide concepts", value: "Some Dutch residents must consider broader income" },
    { label: "Advice", value: "Professional review is often valuable" },
  ],
  snapshotUseTips: [
    "Separate income type, country involved, payer location, work location and tax year.",
    "Do not assume money is irrelevant because it stayed in a foreign account.",
    "Use the guide to organize questions before checking official sources or speaking with an advisor.",
  ],
  scenarioExamples: [
    { profile: "Foreign salary continues after move", example: "EUR 84,000 annual salary; 4 months paid before moving and 8 months while living in NL", likelyQuestion: "Which period, payroll and workdays need Dutch review?", usefulRecords: "Foreign payslips, Dutch payslips, employment contract, move date proof" },
    { profile: "Rental property abroad", example: "EUR 1,600/month rent; EUR 19,200 gross annual rent; EUR 4,800 annual costs", likelyQuestion: "How property income and ownership should be reported or documented", usefulRecords: "Lease, rent ledger, local tax return, mortgage and repair invoices" },
    { profile: "Investment portfolio abroad", example: "EUR 95,000 account value; EUR 3,200 dividends; EUR 480 foreign withholding", likelyQuestion: "Whether dividends, withholding and asset value need attention", usefulRecords: "Broker annual statement, dividend statement, withholding certificate" },
    { profile: "Foreign freelance clients", example: "EUR 62,000 annual invoices; 65% clients outside NL; 12 invoices across 4 countries", likelyQuestion: "Income tax, VAT, client location and business-presence questions", usefulRecords: "Invoice register, contracts, VAT treatment notes, workday calendar" },
  ],
  residencyFactors: [
    "Where you live day to day and whether the Netherlands is your practical home base.",
    "Where your family or household is based.",
    "Where your work, clients, business and economic ties are centered.",
    "Your arrival or departure timing, registrations, housing and long-term intentions.",
  ],
  worldwideConcepts: [
    "Dutch tax residency can affect the income and assets you may need to consider in a Dutch tax context.",
    "Worldwide income does not automatically mean all income is taxed twice or treated identically.",
    "Tax treaties, exemptions, credits, income categories and timing can all affect the final outcome.",
  ],
  worldwideScenarioExamples: [
    { situation: "Salary plus foreign dividends", figures: "EUR 72,000 Dutch salary + EUR 2,400 dividends abroad", whatItShows: "Employment income and investment income may need separate treatment.", avoidAssuming: "That foreign withholding settles every Dutch question." },
    { situation: "Foreign property with local tax", figures: "EUR 18,000 rent abroad + EUR 2,100 local property tax", whatItShows: "Property-country records may still matter in a Dutch review.", avoidAssuming: "That local tax makes the income invisible in NL." },
    { situation: "Move during the tax year", figures: "120 days abroad, 245 days in NL, two payroll systems", whatItShows: "Dates and work location can matter as much as totals.", avoidAssuming: "That the calendar year is automatically simple." },
  ],
  incomeTypeCards: [
    { title: "Foreign salary", body: "Salary from an employer outside the Netherlands may raise workday, payroll, withholding and residency questions." },
    { title: "Remote work income", body: "Remote work can be complex when the employer, payroll country and physical work location differ." },
    { title: "Rental property abroad", body: "Foreign rental income or property ownership may still require Dutch reporting analysis depending on facts." },
    { title: "Dividends & investments", body: "Brokerage statements, foreign withholding and investment values may need careful documentation." },
    { title: "Foreign pensions", body: "Pension type, payer, source country and treaty context can matter." },
    { title: "Freelance income", body: "International clients can create income tax, VAT, invoice and business-presence questions." },
    { title: "Overseas business income", body: "Company management location, owner payments and cross-border structures should be reviewed carefully." },
    { title: "Crypto assets", body: "Crypto platforms abroad can raise valuation, recordkeeping and classification questions." },
  ],
  remoteWorkScenarios: [
    { pattern: "Living in NL while employed abroad", complexity: "Employer location, payroll withholding and Dutch residency may not align.", practicalMove: "Ask payroll and a tax advisor before assuming nothing changes." },
    { pattern: "Hybrid cross-border work", complexity: "Workdays in different countries can create allocation and social-security questions.", practicalMove: "Track physical workdays by country." },
    { pattern: "Digital nomad setup", complexity: "Tax, immigration, social security and employer compliance can overlap.", practicalMove: "Document the itinerary and review before it becomes routine." },
    { pattern: "Temporary overseas assignment", complexity: "Short periods abroad can still affect filing or employer obligations.", practicalMove: "Keep assignment letters, tickets and work calendars." },
  ],
  remoteWorkdayExamples: [
    { pattern: "Mostly Netherlands-based", workdaySplit: "210 NL workdays, 20 foreign workdays, 10 travel/admin days", likelyQuestion: "Whether foreign workdays need separate review", records: "Daily work-location calendar, tickets, employer approval" },
    { pattern: "Regular cross-border hybrid", workdaySplit: "125 NL workdays, 85 workdays abroad, 20 paid leave days", likelyQuestion: "Whether salary allocation or payroll questions arise", records: "Workday log, payslips, employer letter, travel evidence" },
    { pattern: "Three-month overseas remote block", workdaySplit: "65 workdays outside NL while keeping NL home base", likelyQuestion: "Whether tax, social security or employer compliance changes", records: "Remote-work approval, accommodation proof, flight records" },
  ],
  propertyExamples: [
    { profile: "Home rented out abroad", exampleFigure: "EUR 1,600/month gross rent", whatToCheck: "Property-country tax, Dutch reporting and expense records", records: "Lease, rent ledger, local assessment and mortgage statements" },
    { profile: "Family home kept abroad", exampleFigure: "No rent, estimated value EUR 280,000", whatToCheck: "Whether ownership still has Dutch reporting implications", records: "Valuation, ownership proof and local tax bills" },
    { profile: "Investment apartment", exampleFigure: "EUR 18,000 annual rent, EUR 4,500 costs", whatToCheck: "Income, expenses, local tax and treaty context", records: "Annual statements, receipts and foreign return" },
  ],
  investmentExamples: [
    { assetType: "Foreign bank account", practicalConcern: "Balances and interest may still be relevant to Dutch reporting.", usefulRecords: "1 January balance, year-end statement and interest summary" },
    { assetType: "Brokerage account", practicalConcern: "Dividends, withholding and portfolio value may need documentation.", usefulRecords: "Annual broker statement and withholding certificates" },
    { assetType: "Crypto assets", practicalConcern: "Valuation and transaction records can be hard to recreate later.", usefulRecords: "Exchange exports and valuation screenshots" },
    { assetType: "Foreign pension", practicalConcern: "Pension type and source country may affect treatment.", usefulRecords: "Pension statement, payer details and country documentation" },
  ],
  investmentScenarioExamples: [
    { assetType: "Brokerage portfolio", exampleFigure: "EUR 120,000 value; EUR 4,000 dividends; EUR 600 withholding", practicalCheck: "Dividend records, withholding proof and year-end account value." },
    { assetType: "Foreign savings account", exampleFigure: "EUR 35,000 balance; EUR 700 interest", practicalCheck: "Opening balance, 1 January value, interest statement and bank country." },
    { assetType: "Crypto exchange account", exampleFigure: "EUR 18,500 estimated value across 3 tokens", practicalCheck: "Exchange exports, valuation date screenshots and transaction history." },
  ],
  treatyPoints: [
    "Tax treaties may help reduce double taxation or clarify which country can tax which type of income.",
    "Treaty treatment can differ for salary, rental income, dividends, pensions, business income and other categories.",
    "Do not rely on generic treaty summaries for personal filing positions; verify the current treaty and your facts.",
  ],
  rulingPoints: [
    "The 30% ruling may affect Dutch taxable income and some expat tax structures.",
    "It does not automatically remove foreign income, foreign assets, reporting obligations or treaty questions.",
    "If foreign income or assets are part of your situation, treat the ruling as one piece of a wider tax file.",
  ],
  movingYearExamples: [
    { situation: "Arrive mid-year", whatChanges: "Income before and after arrival may need separate timeline review.", usefulRecords: "Move date proof, BRP registration, payslips and travel records" },
    { situation: "Leave mid-year", whatChanges: "Departure timing can affect final Dutch and foreign filings.", usefulRecords: "Deregistration, new-country residence proof and final payslip" },
    { situation: "Split work between countries", whatChanges: "Workdays and payroll may need careful allocation.", usefulRecords: "Daily calendar, employer letter and travel evidence" },
  ],
  freelancerPoints: [
    "International freelancers may need to consider income tax, VAT, invoicing, client location and business presence together.",
    "Operating through a foreign company while living in the Netherlands can create management, salary, dividend and residency questions.",
    "Professional guidance is commonly recommended before structuring cross-border freelance or company income.",
  ],
  freelancerScenarioExamples: [
    { profile: "Dutch resident with foreign clients", revenue: "EUR 68,000 annual invoices; 70% clients outside NL", issueToCheck: "Income tax, VAT treatment, invoice records and client location.", usefulRecord: "Invoice register by country and contract scope." },
    { profile: "Foreign company pays owner in NL", revenue: "EUR 4,500/month owner payment plus EUR 12,000 dividend", issueToCheck: "Management location, salary/dividend split and residency facts.", usefulRecord: "Company accounts, board minutes and payment records." },
    { profile: "Short project abroad", revenue: "EUR 14,000 project over 7 weeks; 28 workdays outside NL", issueToCheck: "Where work was performed and whether local obligations arise.", usefulRecord: "Contract, workday calendar, travel and accommodation proof." },
  ],
  mistakeCards: [
    { title: "Assuming foreign income never matters", body: "Income abroad may still need Dutch or foreign reporting checks." },
    { title: "Ignoring reporting obligations", body: "A tax result and a reporting duty are not the same thing." },
    { title: "Confusing nationality with residency", body: "Tax residency depends on facts and ties, not only passport or permit status." },
    { title: "Overlooking remote work", body: "Physical work location can matter even when the employer is abroad." },
    { title: "Assuming overseas accounts are irrelevant", body: "Money staying outside the Netherlands can still be part of the analysis." },
    { title: "Ignoring tax treaties", body: "Treaties may matter, but they require country and income-type review." },
    { title: "Delaying professional advice", body: "Advice is easier before payroll, invoicing or filing mistakes are already made." },
    { title: "Assuming home-country rules still apply", body: "Your previous tax logic may not match Dutch or treaty concepts." },
  ],
  adviceTriggers: [
    "Multiple countries are involved in the same tax year.",
    "You own rental property or investment property abroad.",
    "You work remotely for a foreign employer while living in the Netherlands.",
    "You hold overseas brokerage accounts, pensions, crypto assets or business interests.",
    "You are self-employed, invoicing internationally or operating through a company.",
    "You may be tax resident in more than one country.",
  ],
  advisorBriefExamples: [
    { situation: "Mid-year move with foreign salary", numbersToBring: "Move date, days in each country, income before/after move", documentsToBring: "Payslips, annual statements, BRP registration, foreign return" },
    { situation: "Remote work for foreign employer", numbersToBring: "Salary, workdays by country, withholding already paid", documentsToBring: "Employment contract, employer letter, travel calendar, payslips" },
    { situation: "Foreign property and investments", numbersToBring: "Property value, annual rent, account values, dividends, withholding", documentsToBring: "Lease, local tax bills, broker statements, bank statements" },
  ],
  expatQuestions: [
    { q: "Do I need to declare foreign income?", a: "Foreign income may need to be reported depending on residency, income type, timing and official filing rules. Do not assume it is irrelevant because it was paid abroad." },
    { q: "Does the Netherlands tax worldwide income?", a: "In some situations Dutch tax residency can require worldwide income concepts to be considered, but that does not automatically mean all income is taxed twice." },
    { q: "What if I work remotely?", a: "Remote work can raise residency, payroll, workday allocation and social-security questions. Track where you physically work." },
    { q: "What about overseas rental property?", a: "Foreign property can still have Dutch reporting implications depending on circumstances. Keep lease, valuation and local tax records." },
    { q: "Are foreign bank accounts relevant?", a: "They can be relevant to reporting and asset questions. Keep account statements and balance records." },
    { q: "What if my employer is abroad?", a: "A foreign employer can create payroll, withholding and reporting questions when you live or work in the Netherlands." },
    { q: "What is tax residency?", a: "Tax residency is a facts-based concept about where your personal and economic life is centered." },
    { q: "Will I be taxed twice?", a: "Not automatically. Double taxation may be reduced through treaties or relief mechanisms, but the outcome depends on facts and income type." },
  ],
  relatedGuides: [
    { label: "Double Taxation Netherlands", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Understand treaty concepts and double-taxation concerns." },
    { label: "Expat Taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Broader Dutch tax guide for international residents." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Dutch expat tax facility and employer context." },
    { label: "Payroll Tax Netherlands", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How Dutch withholding and payroll tax fit salary." },
    { label: "Remote Work Tax Netherlands", href: "/netherlands/taxes/remote-work-tax-netherlands/", status: "comingSoon", description: "Future guide for remote-work tax scenarios." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary planning, compensation and tax context." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Relocation timing, registration and setup context." },
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Start with the full tax guide ecosystem." },
  ] satisfies ForeignIncomeNetherlandsLink[],
  services: [
    { label: "Expat tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Personal tax filing and cross-border tax support." },
    { label: "International tax specialists", href: "/netherlands/services/expat-tax-services/", status: "comingSoon", description: "Specialist help for foreign income, treaties and residency." },
    { label: "Payroll specialists", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Support where employer withholding and work location overlap." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "live", description: "Broader planning for assets, pensions and investments." },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Useful where work permission and remote work status interact." },
  ] satisfies ForeignIncomeNetherlandsLink[],
  faq: [
    { q: "What counts as foreign income?", a: "Foreign income generally means income originating outside the Netherlands, such as salary, rent, dividends, pensions, freelance income, business income or investment income." },
    { q: "Does the Netherlands tax worldwide income?", a: "In some situations Dutch tax residency may require worldwide income concepts to be considered. That does not automatically mean every income stream is taxed twice." },
    { q: "Do I need to declare foreign income?", a: "Foreign income may need reporting depending on your residency, income type, dates and filing obligations. Check official guidance or get advice for your facts." },
    { q: "What if I work remotely?", a: "Remote work can create tax, payroll and social-security complexity because physical work location, employer country and residence facts can all matter." },
    { q: "What about foreign rental property?", a: "Foreign property and rental income may have Dutch reporting implications depending on circumstances. Keep property, rental and local tax records organized." },
    { q: "Do foreign bank accounts matter?", a: "They can. Overseas accounts and investments may be relevant to reporting or asset questions even if the money stays abroad." },
    { q: "What is tax residency?", a: "Tax residency is a facts-and-circumstances concept based on where your personal and economic life is centered." },
    { q: "Will I be taxed twice?", a: "Not automatically. Tax treaties and relief mechanisms may reduce double taxation, but results vary by income type, country and personal facts." },
  ],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Official Dutch tax information and filing guidance." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information for living and working in the Netherlands." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official practical information for businesses, freelancers and entrepreneurs." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Official international information for Dutch citizens and residents abroad." },
    { label: "OECD", href: "https://www.oecd.org/", description: "International context for tax treaties and cross-border tax coordination." },
  ],
  sourcesDisclaimer:
    "Foreign income reporting obligations, residency rules and treaty interactions vary depending on individual circumstances and international agreements.",
  exploreNextCards: [
    { label: "Double Taxation Guide", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Treaty and double-taxation concepts." },
    { label: "Expat Taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Broader Dutch tax guide for expats." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Understand the expat tax facility." },
    { label: "Payroll Tax", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "Connect income to employer withholding." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Plan relocation timing and records." },
  ] satisfies ForeignIncomeNetherlandsLink[],
} as const;
