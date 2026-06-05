export const DOUBLE_TAXATION_NETHERLANDS_PATH = "/netherlands/taxes/double-taxation-netherlands/" as const;
export const DOUBLE_TAXATION_NETHERLANDS_LEGACY_PATH = "/netherlands/double-taxation-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const BONUS_TAX_NETHERLANDS_PATH = "/netherlands/taxes/bonus-tax-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;

export type DoubleTaxationNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const doubleTaxationNetherlandsPage = {
  slug: "double-taxation-netherlands",
  path: DOUBLE_TAXATION_NETHERLANDS_PATH,
  legacyPath: DOUBLE_TAXATION_NETHERLANDS_LEGACY_PATH,
  publish: true,
  publishDate: "2026-07-26",
  seo: {
    title: "Double Taxation in the Netherlands | Expat Tax Treaty Guide",
    description:
      "Learn how double taxation works in the Netherlands, including tax treaties, foreign income, tax residency and common expat tax situations.",
    keywords: [
      "double taxation netherlands",
      "double tax treaty netherlands",
      "expat taxes netherlands",
      "taxed twice netherlands",
      "international tax netherlands",
      "dutch tax treaty",
      "foreign income netherlands",
      "tax residency netherlands",
      "remote work tax netherlands",
      "cross border tax netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · International mobility",
    pageTitle: "Double Taxation in the Netherlands",
    subtitle:
      "Understand how double taxation works for expats in the Netherlands, including tax treaties, foreign income, tax residency and common international tax situations.",
    primaryCta: { label: "Understand Double Taxation", href: "#intro" },
    secondaryCta: { label: "Explore Expat Tax Guides", href: TAXES_HUB_PATH },
    chips: ["Tax treaties", "Foreign income", "Residency", "Remote work"],
    image: {
      src: "/images/heroes/netherlands-double-taxation-hero-v2.png",
      alt: "Photorealistic editorial image of an international professional reviewing cross-border tax documents in an Amsterdam canal-side workspace.",
    },
  },
  visuals: {
    treaty: {
      src: "/images/infographics/netherlands-double-taxation-treaty-premium-v1.png",
      alt: "Premium ExpatLife infographic explaining double-taxation treaty logic through countries, income type, residence, treaty route and proof.",
      caption: "Treaties can help coordinate taxing rights, but each treaty and personal situation is different.",
    },
    residency: {
      src: "/images/infographics/netherlands-double-taxation-residency-premium-v1.png",
      alt: "Premium ExpatLife infographic showing Dutch tax residency facts to map, including home base, family, work location, timing and evidence.",
      caption: "Residency is usually a facts-and-circumstances question, not just a passport or nationality question.",
    },
    foreignIncome: {
      src: "/images/infographics/netherlands-double-taxation-foreign-income-premium-v1.png",
      alt: "Premium ExpatLife infographic sorting foreign income types and record requirements for Dutch tax reporting questions.",
      caption: "Foreign income may still need attention in Dutch tax filings, even when treaty relief may apply.",
    },
    remoteWork: {
      src: "/images/infographics/netherlands-double-taxation-remote-work-accurate-v1.png",
      alt: "ExpatLife infographic mapping remote work tax questions across residence facts, physical workdays, employer payroll and supporting records without applying a shortcut rule.",
      caption: "Remote work can quickly create cross-border questions about employer location, workdays and residency.",
    },
    ruling: {
      src: "/images/infographics/netherlands-double-taxation-30-ruling-premium-v1.png",
      alt: "Premium ExpatLife infographic explaining how the 30% ruling fits alongside foreign income, tax residency, treaties, assets and remote work.",
      caption: "The 30% ruling can affect Dutch taxable income, but it should be viewed alongside foreign income, treaty and reporting questions.",
    },
    treatyCountries: {
      src: "/images/infographics/netherlands-double-taxation-country-treaties-premium-v1.png",
      alt: "Premium ExpatLife infographic showing Netherlands tax treaty regions and treaty-use checks by income type, residency, source country and dates.",
      caption: "Treaty coverage is country-specific. Use region examples for orientation, then verify the actual treaty and your facts.",
    },
    freelancers: {
      src: "/images/infographics/netherlands-double-taxation-freelancers-premium-v1.png",
      alt: "Premium ExpatLife infographic mapping cross-border freelancer and business tax factors, including clients, VAT, residency and records.",
      caption: "Freelancers and entrepreneurs often need to consider clients, VAT, business presence, residency and treaty concepts together.",
    },
    foreignAssetsAdvice: {
      src: "/images/infographics/netherlands-double-taxation-foreign-assets-premium-v1.png",
      alt: "Premium ExpatLife infographic showing foreign assets, advisor-file records and professional advice triggers for expats.",
      caption: "Foreign assets and multi-country income are often where organized records and professional advice become most useful.",
    },
    mistakes: {
      src: "/images/infographics/netherlands-double-taxation-mistakes-premium-v1.png",
      alt: "Premium ExpatLife infographic showing common double-taxation mistakes and pre-filing checks for expats.",
      caption: "The biggest mistakes are often assumptions: about treaties, residency, reporting duties and timing.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Intro" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#treaties", label: "Tax treaties" },
    { href: "#residency", label: "Residency" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#foreign-income", label: "Foreign income" },
    { href: "#remote-work", label: "Remote work" },
    { href: "#ruling", label: "30% ruling" },
    { href: "#countries", label: "Treaty countries" },
    { href: "#freelancers", label: "Freelancers" },
    { href: "#assets", label: "Foreign assets" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#advice", label: "Advice" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Related" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  introPoints: [
    "Double taxation generally refers to situations where the same income could potentially be taxed in more than one country.",
    "This is a common concern for expats, remote workers, freelancers, business owners and internationally mobile employees.",
    "Many countries, including the Netherlands, use tax treaties to help reduce or avoid double taxation. This guide explains the concepts, not your personal tax outcome.",
  ],
  snapshotCards: [
    { label: "Issue type", value: "International tax issue" },
    { label: "Treaties", value: "May help reduce double taxation" },
    { label: "Residency", value: "Often drives the analysis" },
    { label: "Reporting", value: "Foreign income may still need reporting" },
    { label: "Remote work", value: "Can add workday and employer complexity" },
    { label: "Advice", value: "Often valuable for cross-border cases" },
  ],
  snapshotUseTips: [
    "Start by identifying the countries involved, the income type and the tax year.",
    "Separate three questions: where you are resident, where income is sourced and where tax was withheld.",
    "Use the rest of this guide to decide whether you need treaty research, reporting checks or professional advice.",
  ],
  treatyPrinciples: [
    "Tax treaties are agreements between countries that may allocate or coordinate taxing rights.",
    "Treaties can include rules for employment income, business profits, dividends, pensions, real estate income and other categories.",
    "The treaty text, local tax law and your facts all matter. Do not rely on a generic summary for a personal filing position.",
  ],
  treatyExamples: [
    { situation: "Dutch resident with foreign salary", possibleIssue: "Two countries may consider employment income taxable", treatyConcept: "Treaty may allocate taxing rights based on residence, work location and employer facts", whatToVerify: "Workdays, employer location, residence status and payroll withholding" },
    { situation: "Foreign rental property", possibleIssue: "Property country and residence country may both be relevant", treatyConcept: "Real estate income is often treated separately in treaties", whatToVerify: "Where the property is located and how Dutch reporting applies" },
    { situation: "Pension from another country", possibleIssue: "Pensions can have country-specific treaty rules", treatyConcept: "Private, public and social-security pensions may be handled differently", whatToVerify: "Pension type, source country and treaty article" },
  ],
  treatyReliefExamples: [
    { example: "Foreign withholding on dividends", amount: "€10,000 dividends with €1,500 withheld abroad", possibleReliefQuestion: "Whether treaty relief or credit may apply", whatToBring: "Dividend statement, withholding certificate, broker annual report" },
    { example: "Employment income split", amount: "220 workdays: 170 in NL, 50 abroad", possibleReliefQuestion: "Which country can tax which workdays", whatToBring: "Calendar, travel tickets, employer letter, payslips" },
    { example: "Foreign rental income", amount: "€18,000 rent received, €5,000 costs paid", possibleReliefQuestion: "How property-country income is reported in Dutch filing", whatToBring: "Lease, local tax return, mortgage/maintenance records" },
  ],
  residencyFactors: [
    "Where you actually live and spend time.",
    "Where your family or household is based.",
    "Where your work, business or economic life is centered.",
    "Where you keep long-term ties such as housing, banking, registrations and social life.",
  ],
  residencyScenarios: [
    { profile: "Moved to NL in July", factPattern: "Six months abroad, six months in NL, job and home changed mid-year", risk: "Split-year questions and dual filing obligations may arise", nextStep: "Confirm Dutch residency start date and foreign-country exit rules." },
    { profile: "Family still abroad", factPattern: "Employee works in NL while spouse/children remain elsewhere", risk: "Residency facts can be mixed", nextStep: "Review family, housing, workdays and economic ties with an advisor." },
    { profile: "Remote worker in NL", factPattern: "Lives in NL while employer and payroll remain abroad", risk: "Payroll, social security and residency issues can overlap", nextStep: "Check employer obligations and personal tax filing position." },
  ],
  residencyTimelineExamples: [
    { timeline: "Arrive 1 March", nlDays: "306 days in NL during the year", commonQuestion: "Was residency created from arrival or another date?", usefulRecords: "BRP registration, lease, employment start date, travel records" },
    { timeline: "Arrive 1 July", nlDays: "184 days in NL during the year", commonQuestion: "How should split-year income be reported?", usefulRecords: "Prior-country payslips, Dutch payslips, moving date proof" },
    { timeline: "Leave 30 September", nlDays: "273 days in NL before departure", commonQuestion: "What happens after departure?", usefulRecords: "Deregistration, final payslip, new-country residence evidence" },
  ],
  scenarioCards: [
    { title: "Working for a foreign employer", body: "Payroll country, work location, Dutch residency and employer obligations can all matter." },
    { title: "Remote work across countries", body: "Workdays, employer location and where you physically work can affect tax and social security questions." },
    { title: "Moving mid-tax-year", body: "Arrival and departure dates can create split-year reporting and foreign filing questions." },
    { title: "Foreign rental income", body: "Property income may be taxed or reported differently from salary income." },
    { title: "Foreign investments", body: "Dividends, interest and investment accounts may need attention in Dutch and foreign reporting." },
    { title: "Freelancing internationally", body: "Clients, VAT, business location and residency can interact in complex ways." },
    { title: "Home-country assets", body: "Bank accounts, property and pensions may remain relevant after relocating." },
    { title: "Pension income abroad", body: "Pension type and source country can affect treaty treatment." },
  ],
  scenarioUseTips: [
    "Pick the scenario that matches your facts, then gather documents for that income type before reading treaty summaries.",
    "If more than one scenario applies, treat the case as higher risk and consider professional help earlier.",
    "Keep a simple timeline of move dates, workdays, payments received and tax already withheld.",
  ],
  foreignIncomeExamples: [
    { incomeType: "Foreign salary", commonConcern: "Will both countries tax my wages?", practicalCheck: "Where work is physically performed, payroll withholding, residence status and treaty rules." },
    { incomeType: "Rental income abroad", commonConcern: "Do I report the foreign property?", practicalCheck: "Property location, Dutch reporting rules and treaty treatment." },
    { incomeType: "Dividends / investments", commonConcern: "What about withholding tax?", practicalCheck: "Source-country withholding, Dutch reporting and possible treaty relief." },
    { incomeType: "Freelance income", commonConcern: "Which country taxes my client income?", practicalCheck: "Business presence, client location, VAT and residence status." },
    { incomeType: "Pension income", commonConcern: "Is pension taxed in source or residence country?", practicalCheck: "Pension type, payer, source country and treaty article." },
  ],
  foreignIncomeScenarioExamples: [
    { profile: "Foreign salary continues after move", exampleAmount: "€72,000 annual salary, 4 months paid abroad and 8 months paid while in NL", whatCanGetComplex: "Payroll withholding, residency start date and workday location", usefulNextStep: "Ask payroll for annual statement and workday allocation." },
    { profile: "Foreign rental property", exampleAmount: "€1,500/month rent, €18,000/year gross income", whatCanGetComplex: "Property-country tax, Dutch reporting and mortgage/expense records", usefulNextStep: "Collect local tax return and annual property statements." },
    { profile: "Investment portfolio abroad", exampleAmount: "€80,000 account value, €2,400 dividends, €360 foreign withholding", whatCanGetComplex: "Asset reporting, withholding and treaty relief documentation", usefulNextStep: "Download broker year-end statement and withholding proof." },
  ],
  foreignIncomeUseTips: [
    "Do not assume foreign income disappears from Dutch reporting just because it was taxed abroad.",
    "Keep annual statements, withholding certificates and account summaries before filing season.",
    "Classify each income stream separately because salary, property, pensions and dividends may follow different rules.",
  ],
  remoteWorkScenarios: [
    { pattern: "Living in NL, foreign employer", complexity: "Payroll withholding, employer registration and tax residency questions", practicalMove: "Ask employer/payroll and a tax advisor before assuming remote work is simple." },
    { pattern: "Hybrid international work", complexity: "Workdays in multiple countries may create allocation questions", practicalMove: "Track workdays by country and keep travel records." },
    { pattern: "Temporary work abroad", complexity: "Short assignments can still affect tax/social-security obligations", practicalMove: "Confirm rules before the trip if work will be performed abroad." },
    { pattern: "Digital nomad setup", complexity: "Residency, permanent establishment and visa issues can overlap", practicalMove: "Avoid relying on generic country lists; get advice for the full itinerary." },
  ],
  remoteWorkdayExamples: [
    { pattern: "Mostly Dutch workdays", workdaySplit: "200 NL days, 20 foreign workdays", likelyQuestion: "Do the foreign days need separate treatment?", recordsToKeep: "Calendar, travel tickets, employer approval" },
    { pattern: "Regular cross-border hybrid", workdaySplit: "120 NL days, 80 foreign workdays, 20 travel/admin days", likelyQuestion: "Can income be allocated by physical work location?", recordsToKeep: "Daily work-location log and payroll statement" },
    { pattern: "Three-month remote period abroad", workdaySplit: "65 workdays abroad in one block", likelyQuestion: "Do temporary work, payroll or social security obligations arise?", recordsToKeep: "Assignment letter, accommodation, flight and work calendar" },
  ],
  remoteWorkUseTips: [
    "Track physical workdays by country, not just employer location.",
    "Ask whether payroll, social security and visa/work-authorisation questions need separate answers.",
    "Confirm remote-work arrangements before they become routine, especially if your employer is outside the Netherlands.",
  ],
  rulingPoints: [
    "The 30% ruling can affect taxable income and some expat tax structures.",
    "It does not automatically remove international tax obligations, foreign reporting duties or treaty questions.",
    "If you have foreign income, foreign assets or cross-border workdays, treat the 30% ruling as one part of the wider tax picture.",
  ],
  countryTreatyCards: [
    { region: "Europe", examples: "UK, Germany, France, Belgium, Spain", note: "Neighbouring-country workdays and cross-border employment can be common." },
    { region: "North America", examples: "United States, Canada", note: "Citizenship-based or state/provincial issues may need specialist review." },
    { region: "South America", examples: "Brazil, Argentina, Chile", note: "Foreign income, investments and source-country withholding can vary." },
    { region: "Asia", examples: "India, Singapore, Japan, China", note: "Remote work, equity, dividends and pension questions may differ by treaty." },
    { region: "Africa", examples: "South Africa, Morocco, Egypt", note: "Residence, pensions and asset reporting deserve careful review." },
    { region: "Middle East", examples: "UAE, Qatar, Saudi Arabia", note: "Low-tax or no-tax contexts do not remove Dutch reporting analysis." },
    { region: "Oceania", examples: "Australia, New Zealand", note: "Departure timing, pensions and investments are frequent expat questions." },
  ],
  countryComparisonExamples: [
    { countryContext: "US citizen / green-card holder", exampleConcern: "Dutch residency plus US filing can overlap", typicalDocuments: "US return, Dutch return, wage statements, investment statements", adviceSignal: "Usually specialist advice is sensible." },
    { countryContext: "UK or EU remote employee", exampleConcern: "Workdays and payroll may span two systems", typicalDocuments: "P60/P45 or local equivalent, Dutch payslips, workday calendar", adviceSignal: "Useful when workdays exceed occasional trips." },
    { countryContext: "Low-tax or no-tax previous country", exampleConcern: "No foreign tax paid does not mean no Dutch reporting", typicalDocuments: "Residence evidence, income statements, bank records", adviceSignal: "Verify residency date and income period carefully." },
  ],
  countryTreatyUseTips: [
    "Use region cards to find the likely treaty topic, not to decide the tax treatment.",
    "Check the current treaty text and official Dutch guidance before relying on any country-specific rule.",
    "When countries disagree, collect proof of residency, withholding and filing positions before seeking advice.",
  ],
  freelancerPoints: [
    "International freelancers may have tax questions in both the country where they live and the country where clients or business activity are located.",
    "VAT, invoicing, permanent establishment, registration and social-security questions can overlap.",
    "Professional advice is commonly recommended before structuring cross-border freelance or company income.",
  ],
  freelancerScenarioExamples: [
    { profile: "Dutch resident with foreign clients", exampleRevenue: "€60,000 annual invoices, 70% clients outside NL", issueToCheck: "Income tax, VAT, client location and business registration", usefulRecord: "Invoice register by client country and VAT treatment" },
    { profile: "Company abroad, owner in NL", exampleRevenue: "Foreign company pays €4,000/month to owner", issueToCheck: "Management location, salary/dividend split and residency", usefulRecord: "Company accounts, board decisions, payment records" },
    { profile: "Short freelance project abroad", exampleRevenue: "€12,000 project over 8 weeks", issueToCheck: "Where work is performed and whether local obligations arise", usefulRecord: "Contract, workday calendar and travel records" },
  ],
  assetReportingPoints: [
    "Foreign bank accounts, investments, pensions, real estate and crypto assets may have Dutch reporting implications.",
    "Reporting does not always mean the same amount is taxed twice, but ignoring assets can create filing problems.",
    "Keep annual statements, acquisition dates, valuations and source-country withholding records organized.",
  ],
  foreignAssetExamples: [
    { assetType: "Foreign bank account", exampleFigure: "€25,000 balance on 1 January", whyItMatters: "May be relevant to Dutch asset reporting", recordToKeep: "Year-end and 1 January statements" },
    { assetType: "Foreign home", exampleFigure: "€300,000 estimated value, €12,000 annual rent", whyItMatters: "Real estate can have separate treaty/reporting treatment", recordToKeep: "Valuation, lease, local tax assessment" },
    { assetType: "Crypto account abroad", exampleFigure: "€15,000 portfolio value", whyItMatters: "Asset classification and valuation can be sensitive", recordToKeep: "Exchange statements and valuation date screenshots" },
  ],
  mistakeCards: [
    { title: "Assuming treaties remove everything", body: "Treaties may reduce double taxation, but they do not erase all filing, reporting or documentation duties." },
    { title: "Ignoring foreign income reporting", body: "Income may need reporting even if relief or exemption is available." },
    { title: "Confusing residency with nationality", body: "Tax residency depends on facts and ties, not only citizenship." },
    { title: "Overlooking remote work", body: "Physical work location can matter even when your employer is abroad." },
    { title: "Missing filing obligations", body: "A foreign filing or Dutch filing may still be required even when no tax is ultimately due." },
    { title: "Assuming home rules still apply", body: "Your home-country tax logic may not match Dutch or treaty concepts." },
    { title: "Ignoring pensions", body: "Pensions can have special treaty rules and reporting considerations." },
    { title: "Delaying advice", body: "Cross-border tax questions are often easier before payroll, invoices or returns are already wrong." },
  ],
  mistakeUseTips: [
    "Use the mistake cards as a pre-filing checklist before submitting a Dutch or foreign return.",
    "If one mistake describes your situation, write down the missing document or unanswered question.",
    "If several mistakes apply, pause before filing and get qualified support.",
  ],
  adviceTriggers: [
    "You have income from more than one country.",
    "You moved to or from the Netherlands during the tax year.",
    "You are self-employed, invoicing internationally or operating through a company.",
    "You work remotely for a foreign employer while living in the Netherlands.",
    "You own foreign property, investments, pensions or crypto assets.",
    "You believe you may be tax resident in more than one country.",
    "Your employer, payroll provider or foreign tax authority gives conflicting information.",
  ],
  advisorBriefExamples: [
    { situation: "Mid-year move with foreign income", numbersToBring: "Move date, days in each country, income before/after move", documentsToBring: "Payslips, annual statements, BRP registration, previous-country return" },
    { situation: "Remote work for foreign employer", numbersToBring: "Workdays by country, salary, withholding already paid", documentsToBring: "Employment contract, employer letter, travel calendar, payslips" },
    { situation: "Foreign assets and investments", numbersToBring: "1 January values, income received, tax withheld", documentsToBring: "Broker statements, bank statements, property valuations, withholding certificates" },
  ],
  expatQuestions: [
    { q: "Will I be taxed twice?", a: "Not necessarily. Double taxation can often be reduced through treaties, local relief mechanisms or foreign-tax credits, but the result depends on your facts." },
    { q: "What is a tax treaty?", a: "A treaty is an agreement between countries that may coordinate taxing rights and reduce double taxation for certain income categories." },
    { q: "Do I need to report foreign income?", a: "Foreign income may still need to be reported even where treaty relief may apply. Check Dutch filing requirements and source-country obligations." },
    { q: "What if I work remotely?", a: "Remote work can affect tax, payroll and sometimes social security. Track where you physically work and get advice for cross-border patterns." },
    { q: "Does the 30% ruling help?", a: "It can affect Dutch taxable income and expat tax structure, but it does not automatically remove foreign income or treaty questions." },
    { q: "What if I move during the tax year?", a: "A mid-year move can create split-year questions, foreign filing obligations and residency-date issues." },
    { q: "What is tax residency?", a: "Tax residency is a facts-based concept about where your personal and economic life is centered." },
    { q: "Do freelancers face more complexity?", a: "Often yes. Freelancers may need to consider residency, client location, business registration, VAT and treaty concepts." },
  ],
  questionUseTips: [
    "If your question involves two countries, identify the income type first: salary, business, pension, investment or property.",
    "Write down your dates, countries worked in, employer/client location and withholding already paid.",
    "Treat generic answers as orientation only; personal facts determine the outcome.",
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Start with the broader Dutch tax ecosystem." },
    { label: "Expat Taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "General tax guide for international residents." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Understand the Dutch expat tax facility." },
    { label: "Payroll Tax Netherlands", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How Dutch payroll tax and withholding work." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Gross-to-net salary context for employees." },
    { label: "Bonus Tax Netherlands", href: BONUS_TAX_NETHERLANDS_PATH, status: "live", description: "How bonuses fit into Dutch payroll and tax." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Relocation timing, registration and setup context." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "comingSoon", description: "Salary planning and compensation context." },
  ] satisfies DoubleTaxationNetherlandsLink[],
  relatedGuideUseTips: [
    "Read the expat tax guide first if you are new to Dutch filing.",
    "Read the 30% ruling guide if you are employed and eligible for expat tax benefits.",
    "Read payroll and net salary guides when the issue starts with employer withholding or pay slips.",
  ],
  services: [
    { label: "Expat tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Personal tax filing and cross-border tax support." },
    { label: "International tax specialists", href: "/netherlands/services/expat-tax-services/", status: "comingSoon", description: "Specialist help for treaty, foreign income and residency questions." },
    { label: "Payroll specialists", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Support for employers and employees with payroll withholding questions." },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Useful when visa status and work location interact." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "comingSoon", description: "Broader cross-border financial planning context." },
  ] satisfies DoubleTaxationNetherlandsLink[],
  serviceSelectionTips: [
    "Use tax advisors for filing positions, treaty questions and foreign income reporting.",
    "Use payroll specialists when withholding, employer registration or workdays are the issue.",
    "Use immigration lawyers when work permission, visa status or remote work legality is unclear.",
  ],
  faq: [
    { q: "What is double taxation?", a: "Double taxation generally means the same income could potentially be taxed in more than one country." },
    { q: "Will I be taxed twice in the Netherlands?", a: "Not automatically. Treaties and relief mechanisms may reduce double taxation, but your facts and income type matter." },
    { q: "What is a tax treaty?", a: "A tax treaty is an agreement between countries that may clarify taxing rights and help reduce double taxation." },
    { q: "Do I need to report foreign income?", a: "Foreign income may need to be reported even where treaty relief applies. Verify Dutch and foreign filing duties." },
    { q: "What is Dutch tax residency?", a: "Dutch tax residency is based on facts such as where you live, work, maintain ties and center your economic life." },
    { q: "Does remote work create tax issues?", a: "It can. Physical work location, employer country, payroll and social security can all become relevant." },
    { q: "Does the 30% ruling prevent double taxation?", a: "No. The 30% ruling can affect Dutch taxable income, but it does not automatically solve treaty or foreign-income questions." },
    { q: "Should expats use tax advisors?", a: "Professional advice is worth considering when you have foreign income, assets, pensions, remote work or dual-residency concerns." },
  ],
  faqUseTips: [
    "Use FAQ answers as orientation, not as your filing position.",
    "If your answer depends on treaty text, income type or residency date, verify it with official sources or an advisor.",
    "Bring the FAQ question, your timeline and supporting records to a tax advisor if you need personal guidance.",
  ],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Official Dutch tax information and filing guidance." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information about living, working and public services." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official practical information for businesses, freelancers and entrepreneurs." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Official international information for Dutch citizens and residents abroad." },
    { label: "OECD Tax Treaties", href: "https://www.oecd.org/tax/treaties/", description: "International treaty context and model tax convention resources." },
  ],
  sourcesDisclaimer:
    "International tax treaties, residency rules and foreign income obligations can vary significantly depending on personal circumstances and treaty provisions.",
  sourceVerificationTips: [
    "Use Belastingdienst for Dutch filing, foreign income and treaty-related starting points.",
    "Use OECD resources for general treaty concepts, not personal treaty interpretation.",
    "Use NederlandWereldwijd when your situation includes time abroad or cross-border government questions.",
    "Use professional advice before relying on a treaty position in a tax return.",
  ],
  exploreNextCards: [
    { label: "Expat Taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Build the broader Dutch tax foundation." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Understand the expat tax facility." },
    { label: "Payroll Tax", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "Connect tax concepts to salary withholding." },
    { label: "Net Salary Guide", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Compare gross and net salary planning." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Plan relocation timing and registration." },
  ] satisfies DoubleTaxationNetherlandsLink[],
} as const;
