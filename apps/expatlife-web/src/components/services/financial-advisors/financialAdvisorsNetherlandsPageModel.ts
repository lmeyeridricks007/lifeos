export const FINANCIAL_ADVISORS_NETHERLANDS_PATH = "/netherlands/services/financial-advisors/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const MORTGAGES_FOR_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const PENSION_NETHERLANDS_EXPATS_PATH = "/netherlands/jobs/pension-netherlands-expats/" as const;
export const EXPAT_TAXES_PATH = "/netherlands/money/expat-taxes-netherlands/" as const;
export const DOUBLE_TAXATION_PATH = "/netherlands/taxes/double-taxation-netherlands/" as const;
export const FOREIGN_INCOME_PATH = "/netherlands/taxes/foreign-income-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type FinancialAdvisorProvider = {
  name: string;
  slug: string;
  city: string;
  region: string;
  summary: string;
  expatFocus: string;
  languages: string[];
  onlineConsultations: boolean;
  inPersonAvailability: string;
  website: string;
  consultationType: string;
  advisorType: "Expat-focused" | "International" | "Wealth management" | "Independent planner" | "Boutique" | "Private banking";
  focusAreas: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type FinancialAdvisorLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v6";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-financial-advisors-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const financialAdvisorsNetherlandsPage = {
  slug: "financial-advisors",
  path: FINANCIAL_ADVISORS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-12",
  seo: {
    title: "Financial Advisors in the Netherlands for Expats | Find Trusted Advisors",
    description:
      "Find trusted financial advisors in the Netherlands for expats and international professionals. Learn about financial planning, pensions, investing and cross-border finances.",
    keywords: [
      "financial advisors netherlands",
      "expat financial advisor netherlands",
      "financial planning netherlands expat",
      "wealth advisor netherlands",
      "expat financial planning",
      "retirement planning netherlands",
      "international financial advisor",
      "expat wealth management",
      "dutch pension advisor",
      "expat investing netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Financial advisors",
    pageTitle: "Financial Advisors in the Netherlands for Expats",
    subtitle:
      "Find trusted financial advisors who help expats and international professionals navigate pensions, investments, taxes, wealth planning and long-term financial decisions in the Netherlands.",
    primaryCta: { label: "Compare Financial Advisors", href: "#directory" },
    secondaryCta: { label: "Learn About Financial Planning", href: "#dutch-context" },
    chips: ["AFM-regulated context", "Expat financial planning", "Cross-border awareness", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-financial-advisors-hero-v6.png",
      alt: "Photorealistic editorial scene of an international professional couple reviewing pension projections, mortgage notes and multi-currency savings at a modern Amsterdam home office, with Dutch canal houses and the Zuidas skyline visible through the window.",
    },
  },
  visuals: {
    whyExpats: visual(
      "why-expats",
      "Infographic explaining why expats in the Netherlands seek financial advisors: unfamiliar Dutch systems, relocation planning, cross-border finances, property timing and pension gaps.",
      "Use this overview to decide whether you need planning support, tax filing help or both before shortlisting providers."
    ),
    role: visual(
      "role",
      "Infographic showing what financial advisors typically help with: retirement planning, investment planning, budgeting, pension guidance, relocation transitions and cross-border wealth planning.",
      "Financial advisors may help with long-term planning — but scope, regulation and fees vary significantly by provider."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about financial advisors in the Netherlands for expats.",
      "Use this snapshot before shortlisting providers: advisor models, fees and service scope differ widely."
    ),
    advisorServices: visual(
      "advisor-services",
      "Infographic showing common financial advisor services: retirement, investments, expat planning, budgeting, pensions, relocation and estate discussions.",
      "Confirm which services are included before engaging — not every advisor covers every topic."
    ),
    advisorModels: visual(
      "advisor-models",
      "Infographic comparing independent planners, expat-focused boutiques, wealth-management firms and private-banking models.",
      "Different advisor models compare different product sets and fee structures."
    ),
    dutchContext: visual(
      "dutch-context",
      "Infographic explaining financial planning in the Dutch context: pensions, tax structures, housing, allowances, healthcare costs and long-term savings.",
      "Dutch systems may differ significantly from home-country frameworks — planning should reflect local rules."
    ),
    pensionsRetirement: visual(
      "pensions-retirement",
      "Infographic explaining Dutch pension concepts for expats: employer pensions, AOW, private retirement planning and cross-border pension issues.",
      "Pension planning is informational here — verify personal outcomes with qualified advisers and official sources."
    ),
    investingWealth: visual(
      "investing-wealth",
      "Infographic explaining investment and wealth planning topics expats may discuss with advisors, without product recommendations.",
      "This page does not recommend investments — advisors should explain scope, regulation and fees clearly."
    ),
    propertyPlanning: visual(
      "property-planning",
      "Infographic connecting property decisions to financial planning: affordability, mortgage impact, budgeting and relocation stability.",
      "Property and mortgage decisions often overlap with broader financial planning and tax context."
    ),
    crossBorder: visual(
      "cross-border",
      "Infographic showing international financial complexity: assets abroad, overseas pensions, foreign income and international investments.",
      "Cross-border planning can become complex quickly — credentials and experience matter."
    ),
    challenges: visual(
      "challenges",
      "Infographic showing common expat financial challenges: Dutch pensions, cross-country planning, tax residency, foreign investments, property abroad, retirement uncertainty, currency and mobility.",
      "Use early advisor conversations to identify where your situation needs specialist support."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing financial advisor city coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Many advisors work online nationwide; city networks can still matter for in-person planning."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral provider directory workflow: shortlist, compare, verify credentials and decide.",
      "Provider discovery should lead to verification, not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for financial advisors showing cities served, expat focus, languages, online availability and focus areas.",
      "Compare advisors by scope, credentials and process quality before comparing marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask financial advisors before choosing one.",
      "Good questions reveal independence, fee structure, cross-border experience and regulatory credentials."
    ),
    financialGuides: visual(
      "financial-guides",
      "Infographic connecting financial advisor research to mortgages, pensions, expat taxes, buying a house and double taxation guides.",
      "Financial planning connects naturally into tax, pension, housing and relocation decisions."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist financial advisors before booking: pick providers, ask scope, check fees and verify AFM credentials.",
      "Turn provider discovery into a structured shortlist before sharing sensitive financial information."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common financial advisor FAQ topics: need, scope, cross-border support, pensions, fees, online consultations and credential verification.",
      "FAQ answers should help users identify the next fact, document or verification step."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official trust sources for financial advisor checks: AFM, DNB, Government.nl and Business.gov.nl.",
      "Verify credentials, licenses and advisory agreements before proceeding."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around expat financial planning: financial advisor, tax advisor, mortgage advisor, bank, pension fund and relocation support.",
      "Financial advice is one part of a wider money and relocation ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing financial advisors: taxes hub, mortgage guide, pension guide, foreign income and cities.",
      "Continue from advisor discovery into tax, pension, housing and city context."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting financial advisor research to mortgage advisors, pension guide, expat taxes, buying a house and double taxation.",
      "Financial planning connects naturally into mortgages, pensions, taxes and relocation decisions."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#advisor-role", label: "What advisors do" },
    { href: "#advisor-models", label: "Advisor models" },
    { href: "#dutch-context", label: "Dutch context" },
    { href: "#pensions", label: "Pensions" },
    { href: "#investing", label: "Investing" },
    { href: "#property", label: "Property" },
    { href: "#cross-border", label: "Cross-border" },
    { href: "#challenges", label: "Challenges" },
    { href: "#cities", label: "Cities" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#questions", label: "Questions" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Use Financial Advisors in the Netherlands",
    paragraphs: [
      "Many expats seek financial advice when Dutch pension statements, Box 3 reporting, mortgage capacity and long-term savings targets feel unfamiliar — especially after a mid-year move or when assets remain in another country.",
      "A financial advisor may help translate your household goals into a structured plan: pension gaps, investment horizon, property affordability, emergency reserves and what happens if you leave the Netherlands again.",
      "This directory is not investment, tax or retirement advice and does not rank providers. Use it to understand advisor models, compare real firms and prepare better questions before sharing sensitive financial information.",
    ],
    reasons: [
      { title: "Unfamiliar Dutch systems", body: "Pension funds, AOW, Box 1/2/3 and buyer costs (k.k.) use terminology and rules that may differ sharply from your home country." },
      { title: "Relocation changes the plan", body: "Arrival date, contract type and a possible departure within a few years can reset priorities for property, pensions and savings." },
      { title: "Finances span countries", body: "Overseas pensions, foreign investments, rental property and multi-currency income often need coordinated planning — not isolated decisions." },
      { title: "Major decisions need structure", body: "Buying property, investing a bonus, pre-retirement reviews or inheritance planning benefit from a written household view before you act." },
    ],
    advisorMayHelpWith: [
      "Retirement and pension gap projections",
      "Investment structure and risk horizon (not product picks on this page)",
      "Relocation transitions and departure scenarios",
      "Property affordability versus mortgage capacity",
      "Tax-aware planning context — with tax filing often handled separately",
      "Cross-border asset and pension coordination",
    ],
    links: [
      { label: "Expat Taxes", href: EXPAT_TAXES_PATH },
      { label: "Pension Guide", href: PENSION_NETHERLANDS_EXPATS_PATH },
      { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH },
      { label: "Taxes Hub", href: TAXES_HUB_PATH },
    ],
  },
  snapshotCards: [
    { label: "Planning scope", value: "Long-term", note: "Pensions, savings, investments, property timing and major life transitions — not day-to-day tax filing." },
    { label: "Expat relevance", value: "Common", note: "Internationally mobile professionals often need cross-border pension, asset and relocation planning." },
    { label: "Typical fees", value: "Varies", note: "Fixed planning packages, hourly rates or asset-based fees — confirm scope and payment timing in writing." },
    { label: "Regulation", value: "AFM context", note: "Investment advice and certain wealth services fall under Dutch financial supervision — verify credentials." },
    { label: "Advisor models", value: "Multiple types", note: "Independent planners, expat boutiques, wealth managers and private banking serve different profiles." },
    { label: "Guarantee", value: "None", note: "No advisor can guarantee investment returns, pension outcomes or tax results." },
  ],
  snapshotUseTips: [
    "Decide whether you need planning support, tax filing help or both — they are related but not the same service.",
    "Gather pension statements, asset summaries and your relocation timeline before shortlisting providers.",
    "Treat cross-border complexity as a signal to ask about country experience and regulatory licenses.",
    "Directory inclusion is neutral discovery, not a ranking or recommendation.",
  ],
  advisorRoleUseTips: [
    "Confirm whether the advisor provides planning only, investment advice, product placement or referrals to specialists.",
    "Ask what is explicitly outside scope — tax returns, legal wills and mortgage mediation are often separate services.",
    "Match the advisor's strengths to your priority: pension gap, investment structure, property timing or departure planning.",
    "Request a written summary of recommended next steps after an introductory call.",
  ],
  advisorModelsUseTips: [
    "Independent planners may suit broad household planning; wealth managers often focus on higher-asset portfolios.",
    "Expat boutiques frequently emphasise English support and internationally mobile client files.",
    "Private banking typically has asset thresholds — confirm minimums before investing time in onboarding.",
    "Compare fee models and independence disclosures, not just brand recognition.",
  ],
  feeExamples: [
    { item: "Introductory consultation", typicalRange: "Often free to paid", whatToConfirm: "Whether the first meeting is no-obligation and what documents you should bring." },
    { item: "Financial plan package", typicalRange: "Provider-specific fixed fee", whatToConfirm: "Whether pensions, investments, property and cross-border topics are all included." },
    { item: "Ongoing advisory relationship", typicalRange: "Annual or asset-based", whatToConfirm: "Review frequency, investment monitoring scope and what triggers extra charges." },
    { item: "Investment implementation", typicalRange: "Separate from planning", whatToConfirm: "Whether product fees, platform costs and custody charges sit on top of advice fees." },
  ],
  documentChecklist: [
    { document: "Recent payslips and employment contract", why: "Shows income stability, contract type and whether planning should assume a fixed departure date." },
    { document: "Pension statements (NL and abroad)", why: "Employer scheme projections, AOW context and overseas pension rights shape retirement planning." },
    { document: "Asset and account summaries", why: "Bank balances, investments, property equity and debts define starting net worth and liquidity." },
    { document: "Mortgage or rent overview", why: "Housing costs and buyer plans affect cash flow and long-term affordability." },
    { document: "Tax residency and 30% ruling context", why: "Planning assumptions may differ for new arrivals, ruling holders and people with foreign income." },
    { document: "Relocation timeline", why: "Arrival date, expected departure and family plans change whether property, pensions or investments should be prioritised." },
  ],
  expatPlanningProfiles: [
    { profile: "Highly skilled migrant, first 2 years in NL", whatCanMatter: "30% ruling, employer pension accrual, emergency fund, property vs rent horizon.", exampleQuestion: "Should I maximise pension contributions now or keep liquidity for a possible move?" },
    { profile: "Dual-income household with children", whatCanMatter: "Childcare costs, school fees, housing space, insurance and long-term savings targets.", exampleQuestion: "How much should we reserve monthly after fixed costs and pension contributions?" },
    { profile: "Remote worker with foreign employer", whatCanMatter: "Income currency, cross-border tax context, pension gaps and investment platform choice.", exampleQuestion: "Can my current investment accounts stay open while I am Dutch-resident?" },
    { profile: "Pre-retirement expat in NL", whatCanMatter: "AOW accrual, employer pension payout options, overseas assets and healthcare cost planning.", exampleQuestion: "What income mix should I expect from AOW, employer pension and private savings?" },
  ],
  advisorVsTaxAdvisor: [
    "Financial advisors often focus on long-term planning, pensions, investments and household goals.",
    "Tax advisors focus on filing positions, residency, treaty relief and compliance with Dutch and foreign tax rules.",
    "Many expats need both at different stages — planning conversations may reveal tax questions that need a specialist.",
    "Confirm whether your advisor gives tax-aware planning context or whether they will refer tax filing to another firm.",
  ],
  directoryUseTips: [
    "Start with expat focus, languages and online intake — then verify AFM/Wft status.",
    "Confirm fee structure, independence disclosures and what is outside advisory scope.",
    "Use provider websites to check current city coverage and consultation format.",
    "Shortlist two or three providers before sharing sensitive financial documents.",
  ],
  comparisonUseTips: [
    "Use the same questions and scenario assumptions for every provider call.",
    "Compare written scope, exclusions and fee timing — not marketing claims alone.",
    "Check whether the advisor can support your languages and cross-border file if needed.",
    "Verify all table details directly; coverage and focus areas can change.",
  ],
  questionUseTips: [
    "Write answers down so you can compare providers side by side.",
    "Ask what happens if you leave the Netherlands during the planning relationship.",
    "Request clarity on independence, product access and conflict disclosures.",
    "Confirm whether pensions, investments and property are in scope or referred out.",
  ],
  faqUseTips: [
    "FAQ answers help you identify the next fact, document or verification step.",
    "Use them to decide whether you need planning support, tax advice or both.",
    "No FAQ answer replaces verifying credentials and advisory agreements directly.",
  ],
  sourceVerificationTips: [
    "AFM — check financial advice and investment firm registers where relevant.",
    "DNB — understand banking and institution supervisory context for wealth services.",
    "Government.nl — pension and consumer information for Dutch residents.",
    "Business.gov.nl — regulated service-provider context for professional firms.",
  ],
  sourcesDisclaimer:
    "Official sources help you verify regulatory context. Confirm credentials, licenses and advisory agreements directly with each provider before engaging.",
  advisorServices: [
    { title: "Retirement planning", body: "Project pension gaps using employer statements, AOW estimates and private savings targets — often with scenario modelling for different retirement ages." },
    { title: "Investment planning", body: "Discuss risk tolerance, time horizon and portfolio structure. Confirm whether advice includes product selection or planning-only guidance." },
    { title: "Expat financial planning", body: "Align plans with relocation timing, contract type, residence status and whether you may leave the Netherlands before retirement." },
    { title: "Budgeting and cash flow", body: "Map net income against fixed costs (rent, insurance, childcare), emergency reserves and monthly savings capacity." },
    { title: "Pension guidance", body: "Explain Dutch pension building blocks and how they interact with overseas pensions — outcomes still depend on fund rules and personal history." },
    { title: "Relocation transitions", body: "Plan around arrival or departure: when to move assets, adjust savings rates or delay major purchases like property." },
    { title: "Cross-border wealth planning", body: "Coordinate assets, pensions and income across countries — often alongside tax advisors for reporting and treaty context." },
    { title: "Estate planning discussions", body: "High-level review of beneficiaries, wills and cross-border estate complexity — legal drafting usually sits with notaries or lawyers." },
  ],
  advisorTypeComparison: [
    {
      type: "Independent financial planner",
      scope: "May offer broad planning advice with transparent fee models and varying product access.",
      usefulWhen: "You want a planning-first conversation about pensions, savings, investments and major life goals.",
      questions: ["Are you independent and how are conflicts disclosed?", "What licenses do you hold?", "Which topics are outside your scope?"],
    },
    {
      type: "Expat-focused boutique",
      scope: "Often positions around English-language support and internationally mobile client files.",
      usefulWhen: "Your planning questions involve relocation, foreign income, overseas pensions or cross-border complexity.",
      questions: ["How often do you work with expats?", "Which countries have you supported?", "Can consultations happen remotely?"],
    },
    {
      type: "Wealth management / private banking",
      scope: "Typically serves higher-asset clients with integrated banking, investment and advisory services.",
      usefulWhen: "You need institutional-grade wealth management and may already meet asset thresholds.",
      questions: ["What are minimum asset requirements?", "How are advisory and investment fees structured?", "Which regulatory licenses apply?"],
    },
  ],
  dutchPlanningTopics: [
    { topic: "Pensions", body: "Employer schemes (often via pension funds), AOW state pension and private savings may all appear on one household plan — accrual rules differ if you arrived mid-career." },
    { topic: "Tax structures", body: "Residency, Box 1/2/3 context and the 30% ruling can change how planning assumptions should be framed — tax filing itself is usually a separate service." },
    { topic: "Housing affordability", body: "Rent versus buy, mortgage capacity, buyer costs (k.k.) and mobility plans should sit in the same cash-flow conversation." },
    { topic: "Allowances", body: "Toeslagen and childcare benefit eligibility can affect monthly budgets — verify official rules rather than relying on informal estimates." },
    { topic: "Healthcare costs", body: "Mandatory basisverzekering plus optional aanvullende verzekering are fixed monthly costs that affect disposable income." },
    { topic: "Long-term savings", body: "Emergency funds (often 3–6 months of fixed costs), investment accounts and pension gaps are commonly reviewed together." },
  ],
  dutchContextUseTips: [
    "Bring your latest jaaropgave, pension statement and health insurance premium to the first planning call.",
    "Separate Dutch-specific rules from home-country habits — what worked abroad may not fit NL residency.",
    "If you may leave within 3–5 years, say so early; it changes property, pension and investment priorities.",
    "Use our pension and expat tax guides for background before discussing numbers with an advisor.",
  ],
  dutchBudgetExamples: [
    { item: "Net household income", example: "€5,800/month after tax", planningNote: "Confirm whether figures assume 30% ruling, partner income and bonus timing." },
    { item: "Fixed housing", example: "€1,950 rent or €2,100 mortgage", planningNote: "Include VvE, OZB, insurance and maintenance reserves if you own." },
    { item: "Health insurance", example: "€135 basis + €45 aanvullend", planningNote: "Mandatory monthly cost that reduces investable surplus." },
    { item: "Pension contributions", example: "Employer + employee via salary", planningNote: "Check pension portal projection, not payslip line alone." },
    { item: "Investable surplus", example: "€600–€900/month target", planningNote: "Split between emergency fund, pension gap and long-term investments." },
  ],
  pensionTopics: [
    { topic: "Employer pensions", note: "Many employees accrue rights through employer schemes — check jaaropgave, pension portal projections and what happens if you leave before retirement age." },
    { topic: "AOW state pension", note: "AOW accrual depends on years resident in the Netherlands — late arrivals may receive a reduced entitlement unless topped up." },
    { topic: "Private retirement planning", note: "Some households supplement employer and state pensions with investments or annuities — suitability depends on horizon and risk tolerance." },
    { topic: "Cross-border pensions", note: "UK, US, EU or other overseas pensions may have transfer restrictions, currency risk and tax treatment that need specialist review." },
  ],
  pensionExamples: [
    { profile: "Arrived in NL at age 35", scenario: "15 years of AOW accrual possible before age 67 if resident throughout", planningQuestion: "How does a partial AOW affect my target retirement income?", usefulRecord: "SVB AOW estimate, employer pension projection" },
    { profile: "Employer pension + UK workplace pension", scenario: "Two pension pots in different currencies and regulatory systems", planningQuestion: "Should I consolidate, leave separate or adjust savings rate?", usefulRecord: "Both pension statements, transfer rules summary" },
    { profile: "Temporary contract, uncertain stay", scenario: "Limited employer pension accrual and possible departure within 4 years", planningQuestion: "How much should I save privately if employer accrual is low?", usefulRecord: "Contract end date, pension fund rules, current savings rate" },
  ],
  pensionUseTips: [
    "Download your pension portal projection before any retirement conversation — assumptions vary by fund.",
    "Treat AOW as one layer, not the whole plan — many expats need employer plus private savings to hit targets.",
    "Ask whether the advisor can explain payout options or will refer you to the pension fund directly.",
    "Cross-border pension transfers are often restricted — verify rules before moving money.",
  ],
  investingTopics: [
    { topic: "Investing while abroad", body: "Some expats keep home-country brokerage accounts; others open Dutch or EU platforms — residency, reporting and platform terms differ." },
    { topic: "International portfolios", body: "Multi-currency portfolios may need coordination with tax residency, estate planning and future repatriation plans." },
    { topic: "Tax-aware investing", body: "Box 3, foreign withholding and home-country reporting can affect net returns — planning context is not the same as tax advice." },
    { topic: "Long-term wealth goals", body: "Retirement, property purchase, education funding or business exit each imply different risk, liquidity and time horizons." },
  ],
  investingScenarioExamples: [
    { profile: "First-time investor in NL", exampleFigure: "€500/month surplus after costs", issueToCheck: "Emergency fund size, platform choice, risk profile and whether advice includes implementation", usefulRecord: "Bank statements, fixed cost overview, existing debts" },
    { profile: "Existing portfolio abroad", exampleFigure: "€120,000 in US/UK accounts", issueToCheck: "Whether accounts remain accessible, reporting obligations and currency exposure", usefulRecord: "Broker year-end statements, account terms, residency date" },
    { profile: "Windfall or bonus planning", exampleFigure: "€40,000 bonus after tax", issueToCheck: "Liquidity needs, pension gap, property timing and whether lump-sum investing fits risk tolerance", usefulRecord: "Payslip, bonus letter, current asset allocation" },
  ],
  investingUseTips: [
    "Confirm whether the advisor recommends specific products or provides planning-only guidance.",
    "Ask how fees are charged for advice versus platform, fund and custody costs.",
    "Do not assume home-country investment logic applies while you are Dutch-resident.",
    "This page does not recommend investments — verify regulatory scope before acting on any suggestion.",
  ],
  propertyPlanningTopics: [
    { topic: "Affordability assessment", body: "Advisors may help test whether buying fits your relocation horizon, emergency reserves and monthly cash-flow buffer." },
    { topic: "Mortgage impact", body: "Monthly payments, interest deductibility context (for owner-occupiers) and buyer costs affect how much you can save or invest elsewhere." },
    { topic: "Long-term budgeting", body: "Maintenance, VvE charges, insurance, municipal taxes (OZB) and mobility plans belong in the same household model." },
    { topic: "Relocation stability", body: "Temporary contracts or a likely departure within 3–5 years can make renting or delaying purchase the more flexible option." },
  ],
  propertyUseTips: [
    "Share your realistic stay horizon — advisors cannot judge property timing without it.",
    "Use our mortgage advisors directory for borrowing capacity; use financial planning for whether buying fits goals.",
    "Include buyer costs and moving expenses, not just the purchase price.",
    "If you own property abroad, mention rental income, mortgage and local tax context.",
  ],
  propertyScenarioExamples: [
    { profile: "HS migrant, 3-year contract", scenario: "Renting €1,850/month, considering €450k purchase", planningQuestion: "Does buying fit if I may leave in year 3?", usefulRecord: "Contract end date, mortgage quote, buyer cost estimate" },
    { profile: "Dual income, planning to stay", scenario: "€520k target home, €2,050/month mortgage estimate", planningQuestion: "Can we keep investing €800/month after buying?", usefulRecord: "Mortgage capacity letter, fixed cost overview, emergency fund balance" },
    { profile: "Owner abroad, renting in NL", scenario: "UK rental income + NL salary", planningQuestion: "How does foreign property affect NL cash-flow planning?", usefulRecord: "Foreign mortgage statement, rental summary, NL net income" },
  ],
  crossBorderTopics: [
    { topic: "Assets abroad", body: "Property, investments and bank accounts in other countries may need coordinated reporting, currency planning and estate considerations." },
    { topic: "Overseas pensions", body: "Pension rights from previous countries may affect retirement projections, payout timing and tax treatment in the Netherlands." },
    { topic: "Foreign income", body: "Salary, dividends or rental income from outside the Netherlands can shape cash flow and may overlap with tax advisor work." },
    { topic: "International investments", body: "Cross-border platforms, US-person rules and treaty context can make investment structure more sensitive for mobile residents." },
  ],
  crossBorderScenarioExamples: [
    { profile: "US citizen resident in NL", exampleConcern: "US filing obligations plus Dutch residency and investment reporting", practicalMove: "Confirm whether the advisor coordinates with US-specialist tax support or refers out." },
    { profile: "Rental property in home country", exampleConcern: "Foreign rental cash flow, mortgage and Dutch reporting context", practicalMove: "Bring lease, local tax return and annual mortgage statement to planning calls." },
    { profile: "Planning to leave NL in 3 years", exampleConcern: "Pension preservation, property sale timing and investment account portability", practicalMove: "Ask how the advisor models departure scenarios and what triggers a plan review." },
  ],
  crossBorderUseTips: [
    "List every country where you hold assets, pensions or income before the first meeting.",
    "Cross-border planning often needs a tax advisor alongside a financial planner — confirm handoffs.",
    "Keep annual statements and withholding certificates organised by country and tax year.",
    "Do not assume one advisor covers all jurisdictions without checking credentials and experience.",
  ],
  challengeCards: [
    { title: "Understanding Dutch pensions", body: "Employer schemes, AOW and private savings use terminology (e.g. franchise, uitkering) that may feel unfamiliar without a walkthrough." },
    { title: "Planning across countries", body: "A move to or from the Netherlands can reset assumptions about retirement age, tax residency and where assets should sit." },
    { title: "Tax residency changes", body: "Becoming or ceasing to be a Dutch tax resident can change reporting, allowances and which planning priorities matter first." },
    { title: "Foreign investments", body: "Home-country accounts and platforms may have different accessibility, fees and reporting expectations once you live in NL." },
    { title: "Buying property abroad", body: "Some expats own property in multiple countries, which adds cash-flow, currency and estate complexity to one household plan." },
    { title: "Retirement uncertainty", body: "Unclear departure dates make it harder to judge pension gaps, savings targets and whether illiquid investments are appropriate." },
    { title: "Currency considerations", body: "Income, assets and future expenses may sit in EUR, GBP, USD or other currencies with exchange-rate risk." },
    { title: "International mobility", body: "Frequent moves can make long-term planning feel provisional — advisors may help structure flexible milestones instead of fixed assumptions." },
  ],
  challengeUseTips: [
    "Pick the two challenges that match your situation and prepare documents for those topics first.",
    "If three or more challenges apply, treat the case as higher complexity and shortlist advisors with cross-border experience.",
    "Use challenges to frame intro calls — good advisors will say clearly when a topic needs a tax or legal specialist.",
  ],
  cityUseTips: [
    "Many advisors serve clients nationwide online — city labels show where firms are based, not exclusive coverage.",
    "In-person meetings may still matter for complex estate or wealth discussions; confirm format before shortlisting.",
    "Open city guides to compare housing costs that affect your monthly planning assumptions.",
  ],
  adviceTriggers: [
    "You cannot interpret your Dutch pension statement or AOW estimate confidently.",
    "You hold investments, property or pensions in more than one country.",
    "You are deciding whether to buy property within the next 1–3 years.",
    "You received a bonus, inheritance or equity payout and need a structured allocation discussion.",
    "You may leave the Netherlands before retirement and are unsure how to preserve pension and investment flexibility.",
    "You want a written household plan linking pensions, savings, insurance and property goals.",
    "You are unsure whether you need a financial advisor, tax advisor or both.",
  ],
  advisorBriefExamples: [
    { situation: "New expat, first planning call", numbersToBring: "Monthly net income, fixed costs, current savings, pension contribution rate", documentsToBring: "Contract, recent payslips, bank statements, BSN registration date" },
    { situation: "Cross-border household", numbersToBring: "Assets by country, pension values, foreign rental income, planned departure window", documentsToBring: "Pension statements abroad, property summaries, latest tax residency evidence" },
    { situation: "Pre-retirement review", numbersToBring: "Target retirement age, desired monthly income, current pension projections", documentsToBring: "Employer pension portal export, AOW estimate, investment account statements" },
  ],
  mistakeCards: [
    { title: "Confusing planning with tax filing", body: "Financial planning and Dutch tax compliance are related but different — confirm who handles each part." },
    { title: "Skipping fee and independence questions", body: "Product-linked advice, asset-based fees and referral commissions can affect recommendations." },
    { title: "Assuming expat marketing equals expertise", body: "English-language websites are helpful, but credentials, licenses and case experience still need verification." },
    { title: "Sharing everything before scope is clear", body: "Use an introductory call to confirm services, fees and confidentiality before uploading sensitive documents." },
    { title: "Ignoring departure scenarios", body: "If you may leave the Netherlands, plans built only for permanent residency can misallocate savings or property timing." },
    { title: "Treating directory order as quality", body: "Neutral listings are not rankings — compare scope, languages, fees and fit for your file." },
  ],
  mistakeUseTips: [
    "Use mistake cards as a pre-engagement checklist before signing an advisory agreement.",
    "If more than one mistake describes your risk, slow down and verify credentials on AFM registers.",
    "Write down fee quotes and scope exclusions from each provider call for side-by-side comparison.",
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "Large expat community and international finance networks." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Port city with diverse professional and entrepreneurial residents." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International organisations and diplomatic community." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Central hub with strong commuter and family demand." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Tech sector and highly skilled migrant concentration." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam-area alternative with affluent commuter base." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "University city with international researchers and families." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern city with student and professional communities." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Cross-border region with international residents." },
  ],
  providers: [
    {
      name: "Black Swan Capital Europe",
      slug: "black-swan-capital-europe",
      city: "Amsterdam",
      region: "Netherlands / Europe",
      summary: "Financial planning firm focused on internationally mobile professionals and expatriates in Europe.",
      expatFocus: "Public materials emphasise expat financial planning, cross-border complexity and English-language advisory support.",
      languages: ["English"],
      onlineConsultations: true,
      inPersonAvailability: "Amsterdam-area and remote meetings; verify current options directly.",
      website: "https://www.blackswancapitaleurope.com/",
      consultationType: "Introductory planning conversation and ongoing advisory relationship",
      advisorType: "Expat-focused",
      focusAreas: ["Expat planning", "Retirement", "Investments", "Cross-border"],
      citiesServed: ["Amsterdam", "Netherlands-wide", "Europe"],
      featured: true,
      verificationNote: "Verify AFM registration, advisory scope, fee structure and current credentials directly with the firm.",
    },
    {
      name: "Octas Capital",
      slug: "octas-capital",
      city: "Amsterdam",
      region: "Netherlands-wide",
      summary: "Wealth management and financial planning organisation serving international clients in the Netherlands.",
      expatFocus: "Positions around wealth management and financial planning for internationally oriented households.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Amsterdam office and remote consultations; verify availability directly.",
      website: "https://www.octascapital.nl/",
      consultationType: "Wealth planning intake and advisory relationship",
      advisorType: "Wealth management",
      focusAreas: ["Wealth management", "Investments", "Retirement", "Financial planning"],
      citiesServed: ["Amsterdam", "Netherlands-wide"],
      featured: true,
      verificationNote: "Confirm regulatory status, minimum asset requirements and fee disclosures before proceeding.",
    },
    {
      name: "Holland Financial Centre",
      slug: "holland-financial-centre",
      city: "Amsterdam",
      region: "Netherlands-wide",
      summary: "Independent financial advice provider offering planning support for residents in the Netherlands.",
      expatFocus: "May be relevant for expats seeking independent planning conversations in English or Dutch.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Amsterdam and remote options; verify directly.",
      website: "https://www.hollandfinancialcentre.nl/",
      consultationType: "Financial planning consultation",
      advisorType: "Independent planner",
      focusAreas: ["Financial planning", "Pensions", "Investments", "Insurance context"],
      citiesServed: ["Amsterdam", "Netherlands-wide"],
      featured: true,
      verificationNote: "Verify AFM/Wft status, independence disclosures and current service scope directly.",
    },
    {
      name: "VWP Wealth Planning",
      slug: "vwp-wealth-planning",
      city: "Netherlands",
      region: "Netherlands-wide",
      summary: "Wealth planning organisation offering structured financial planning for households in the Netherlands.",
      expatFocus: "Public pages include English-language wealth planning information for internationally oriented clients.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Multiple offices and online meetings; verify nearest location.",
      website: "https://www.vwp.nl/en/",
      consultationType: "Wealth planning intake and advisory process",
      advisorType: "Wealth management",
      focusAreas: ["Wealth planning", "Retirement", "Investments", "Estate discussions"],
      citiesServed: ["Netherlands-wide", "Online"],
      featured: true,
      verificationNote: "Confirm licenses, fee model and whether your profile meets their planning scope.",
    },
    {
      name: "Van Lanschot Kempen",
      slug: "van-lanschot-kempen",
      city: "Amsterdam",
      region: "Netherlands / international",
      summary: "Private banking and wealth management group serving affluent households and entrepreneurs.",
      expatFocus: "International private banking and wealth management; may suit higher-asset internationally mobile clients.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Private banking offices; verify relationship requirements directly.",
      website: "https://www.vanlanschotkempen.com/",
      consultationType: "Private banking / wealth management relationship",
      advisorType: "Private banking",
      focusAreas: ["Private banking", "Wealth management", "Investments", "Estate planning context"],
      citiesServed: ["Amsterdam", "Multiple cities", "International"],
      featured: false,
      verificationNote: "Private banking typically has asset thresholds; verify DNB/AFM context and fees directly.",
    },
    {
      name: "MeesPierson",
      slug: "meespierson",
      city: "Amsterdam",
      region: "Netherlands-wide",
      summary: "Wealth management brand offering private banking and investment services in the Netherlands.",
      expatFocus: "May be relevant for affluent expats seeking integrated wealth management; English support varies by team.",
      languages: ["Dutch", "English availability varies"],
      onlineConsultations: true,
      inPersonAvailability: "Office network; verify language support and meeting format directly.",
      website: "https://www.meespierson.nl/",
      consultationType: "Wealth management relationship",
      advisorType: "Private banking",
      focusAreas: ["Wealth management", "Investments", "Private banking"],
      citiesServed: ["Amsterdam", "Multiple cities", "Netherlands-wide"],
      featured: false,
      verificationNote: "Confirm asset requirements, regulatory disclosures and advisory scope before engaging.",
    },
    {
      name: "FINEX Wealth Management",
      slug: "finex-wealth-management",
      city: "Amsterdam",
      region: "Netherlands / international",
      summary: "Wealth management firm serving international professionals and entrepreneurs.",
      expatFocus: "Public positioning includes support for internationally mobile clients and English-language services.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Amsterdam and remote meetings; verify directly.",
      website: "https://www.finexwm.com/",
      consultationType: "Wealth management intake",
      advisorType: "Wealth management",
      focusAreas: ["Wealth management", "Investments", "Financial planning", "Cross-border"],
      citiesServed: ["Amsterdam", "Netherlands-wide", "International"],
      featured: false,
      verificationNote: "Verify regulatory status, fee structure and minimum engagement requirements directly.",
    },
    {
      name: "Expat Investment Advice",
      slug: "expat-investment-advice",
      city: "Netherlands",
      region: "Netherlands-wide",
      summary: "Advisory service oriented toward expats seeking investment and financial planning guidance in the Netherlands.",
      expatFocus: "Dedicated expat positioning around investment discussions and financial planning for internationals.",
      languages: ["English"],
      onlineConsultations: true,
      inPersonAvailability: "Primarily remote; verify current in-person options directly.",
      website: "https://www.expatinvestmentadvice.com/",
      consultationType: "Introductory consultation and advisory process",
      advisorType: "Expat-focused",
      focusAreas: ["Investments", "Expat planning", "Retirement context"],
      citiesServed: ["Netherlands-wide", "Online"],
      featured: false,
      verificationNote: "Verify AFM registration, independence and whether advice scope matches your needs.",
    },
    {
      name: "Blue Horizon Financial Planning",
      slug: "blue-horizon-financial-planning",
      city: "The Hague",
      region: "Randstad / online",
      summary: "Financial planning practice supporting internationally oriented households in the Netherlands.",
      expatFocus: "Positions around expat-friendly financial planning and long-term household planning.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "The Hague area and online; verify directly.",
      website: "https://www.bluehorizonfp.com/",
      consultationType: "Financial planning consultation",
      advisorType: "Boutique",
      focusAreas: ["Financial planning", "Retirement", "Budgeting", "Expat planning"],
      citiesServed: ["The Hague", "Randstad", "Online"],
      featured: false,
      verificationNote: "Confirm credentials, fee model and planning scope directly with the practice.",
    },
    {
      name: "NFP — Nederlandse Financiële Planners",
      slug: "nfp-netherlands",
      city: "Netherlands",
      region: "National network",
      summary: "Professional association network of financial planners in the Netherlands; useful for finding certified planners.",
      expatFocus: "Directory-style network rather than a single firm; English-speaking members may vary by region.",
      languages: ["Dutch", "English varies by planner"],
      onlineConsultations: true,
      inPersonAvailability: "Member planners across the Netherlands; search by location and language.",
      website: "https://www.nfp.nl/",
      consultationType: "Referral to member financial planners",
      advisorType: "Independent planner",
      focusAreas: ["Financial planning", "Pensions", "Investments", "Insurance context"],
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "NFP is an association — verify each member planner's credentials, fees and expat experience individually.",
    },
  ] satisfies FinancialAdvisorProvider[],
  comparisonTable: [
    { advisor: "Black Swan Capital Europe", citiesServed: "Amsterdam, Netherlands-wide", expatFocus: "Dedicated expat focus", languages: "English", onlineConsultations: "Yes", focusAreas: "Expat planning, retirement, investments, cross-border" },
    { advisor: "Octas Capital", citiesServed: "Amsterdam, Netherlands-wide", expatFocus: "International clients", languages: "English, Dutch", onlineConsultations: "Yes", focusAreas: "Wealth management, investments, retirement" },
    { advisor: "Holland Financial Centre", citiesServed: "Amsterdam, Netherlands-wide", expatFocus: "Expat-friendly planning", languages: "English, Dutch", onlineConsultations: "Yes", focusAreas: "Financial planning, pensions, investments" },
    { advisor: "VWP Wealth Planning", citiesServed: "Netherlands-wide, online", expatFocus: "International positioning", languages: "English, Dutch", onlineConsultations: "Yes", focusAreas: "Wealth planning, retirement, investments" },
    { advisor: "FINEX Wealth Management", citiesServed: "Amsterdam, international", expatFocus: "International professionals", languages: "English, Dutch", onlineConsultations: "Yes", focusAreas: "Wealth management, investments, cross-border" },
    { advisor: "Expat Investment Advice", citiesServed: "Netherlands-wide, online", expatFocus: "Dedicated expat focus", languages: "English", onlineConsultations: "Yes", focusAreas: "Investments, expat planning, retirement context" },
    { advisor: "Blue Horizon Financial Planning", citiesServed: "The Hague, Randstad, online", expatFocus: "Expat-friendly boutique", languages: "English, Dutch", onlineConsultations: "Yes", focusAreas: "Financial planning, retirement, budgeting" },
    { advisor: "Van Lanschot Kempen", citiesServed: "Amsterdam, multiple cities", expatFocus: "International private banking", languages: "English, Dutch", onlineConsultations: "Yes", focusAreas: "Private banking, wealth management" },
  ],
  questionsToAsk: [
    { q: "Do you work with expats regularly?", why: "Reveals experience with relocation timing, foreign income, overseas pensions and English-language documentation." },
    { q: "What are your focus areas and what is outside your scope?", why: "Clarifies whether pensions, investments, property, tax context and estate topics are included or referred out." },
    { q: "How are fees structured — fixed, hourly or asset-based?", why: "Helps compare total cost and whether implementation, reviews or product fees are extra." },
    { q: "Do you understand cross-border finances and multi-country files?", why: "Important if you hold assets, pensions or income outside the Netherlands." },
    { q: "Do you assist clients who may leave the Netherlands?", why: "Departure planning affects property, pension preservation and investment account choices." },
    { q: "What licenses or credentials do you hold under AFM or related frameworks?", why: "Verifies regulatory scope for investment advice versus general financial planning." },
    { q: "Do you provide independent advice and how are conflicts disclosed?", why: "Surfaces product ties, referral commissions and limitations on provider comparison." },
    { q: "Can consultations happen remotely and in my preferred language?", why: "Confirms practical fit for international schedules, document sharing and follow-up meetings." },
  ],
  relatedGuideUseTips: [
    "Read the pension guide if retirement projections or AOW accrual are your main unknowns.",
    "Read expat taxes and foreign income guides when assets or salary span multiple countries.",
    "Read mortgage and buying guides before asking a financial advisor to model property purchase timing.",
  ],
  relatedGuidesUseTips: [
    "Start with the taxes hub if residency, Box 3 or foreign income are your main unknowns.",
    "Read the pension guide before long retirement conversations — it explains AOW and employer schemes in plain language.",
    "Use city guides to sanity-check housing costs that feed into monthly planning assumptions.",
    "Foreign income and double taxation guides help when your file spans more than one country.",
  ],
  exploreNextUseTips: [
    "If property is on the horizon, read mortgage advisors and buying guides before a planning call.",
    "If pensions feel unclear, read the pension guide and download your portal projection first.",
    "If taxes drive your questions, pair financial planning with our expat tax guides — they answer different problems.",
  ],
  serviceSelectionTips: [
    "Use financial advisors for long-term planning, pensions, investments and household goal-setting.",
    "Use tax advisors when filing positions, treaty relief or Box 3 reporting are the primary concern.",
    "Use mortgage advisors for borrowing capacity and lender applications — not general wealth planning.",
    "Many expats combine services over time; confirm handoffs between providers.",
  ],
  relatedFinancialGuides: [
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Borrowing capacity, mortgage types and application steps for internationals." },
    { label: "Pension Netherlands", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "AOW, employer pensions and retirement context for expats." },
    { label: "Expat Taxes", href: EXPAT_TAXES_PATH, status: "live", description: "Tax residency, returns and planning context for international residents." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Property purchase process, costs and timing for expat buyers." },
    { label: "Double Taxation", href: DOUBLE_TAXATION_PATH, status: "live", description: "Treaty context when income or assets span multiple countries." },
  ] satisfies FinancialAdvisorLink[],
  leadCta: {
    heading: "Need Help Finding the Right Financial Advisor?",
    body: "Use the directory to compare provider scope, city coverage, language support and focus areas. Then request an introduction or contact shortlisted advisors directly to verify fees, credentials and fit.",
    primaryCta: { label: "Compare Advisors", href: "#directory" },
    secondaryCta: { label: "Request Introduction", href: "/contact/?topic=financial-advisors-netherlands" },
  },
  faqs: [
    { q: "Do expats need financial advisors?", a: "Not every expat needs one. Many seek support when Dutch pension statements feel unclear, finances span countries or a major decision (property, retirement, inheritance) needs structure. Start with free official pension information and our guides; use an advisor when complexity or confidence gaps remain." },
    { q: "What do financial advisors help with?", a: "Typical topics include retirement projections, investment structure, budgeting, pension explanations, relocation transitions and cross-border wealth coordination. Scope varies — some firms plan only, others also implement investments. Confirm inclusions before engaging." },
    { q: "Can advisors help international finances?", a: "Some specialise in multi-country files with overseas pensions, property and investment accounts. Others focus on Dutch-resident households only. Ask for examples of similar client profiles and which topics they refer to tax or legal specialists." },
    { q: "Do advisors help with pensions?", a: "Many explain employer pension statements, AOW context and private savings gaps. They do not replace pension funds or guarantee payout amounts. Bring your pension portal export and ask what assumptions the advisor uses in projections." },
    { q: "Can advisors help highly skilled migrants?", a: "Yes — common topics include 30% ruling context in planning (not filing), contract stability, property timing and building emergency reserves after relocation. Ask whether the advisor regularly works with your nationality and employment pattern." },
    { q: "How do advisor fees work?", a: "Models include fixed planning packages, hourly rates, annual retainers and asset-based percentages. Confirm what triggers extra fees, whether investment products add separate charges and when payment is due. Request a written quote before sharing full financial details." },
    { q: "Are consultations available online?", a: "Most providers offer video or phone meetings and secure document upload. Confirm language support, time zones, data handling and whether complex topics still benefit from in-person sessions." },
    { q: "How do I verify advisor credentials?", a: "Check AFM registers for investment advice and relevant Wft permissions, read advisory agreements carefully and confirm DNB context for private-banking relationships. Directory inclusion here is not a credential check — verify directly." },
  ],
  officialSources: [
    { label: "AFM", href: "https://www.afm.nl/en", description: "Dutch Authority for the Financial Markets: consumer information and regulatory context for financial advice and investment services." },
    { label: "DNB", href: "https://www.dnb.nl/en/", description: "De Nederlandsche Bank: supervisory context for banks and certain financial institutions." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on pensions, consumers and living in the Netherlands." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official business information that can help users understand regulated service-provider context." },
  ],
  relatedGuides: [
    { label: "Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Central hub for Dutch tax guides affecting expats." },
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Mortgage eligibility and borrowing context for international buyers." },
    { label: "Pension Guide", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Dutch pension building blocks for expats." },
    { label: "Foreign Income", href: FOREIGN_INCOME_PATH, status: "live", description: "Reporting and planning context for overseas income." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities before making long-term financial commitments." },
  ] satisfies FinancialAdvisorLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Tax Advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Tax support where financial planning overlaps with returns and residency." },
    { label: "Mortgage Advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Mortgage advice for expats buying property in the Netherlands." },
    { label: "Banks", href: "/netherlands/services/banks/", status: "live", description: "Banking setup and account options for international residents." },
    { label: "Wealth Management", href: "/netherlands/services/wealth-management/", status: "comingSoon", description: "Future directory for wealth-management providers." },
  ] satisfies FinancialAdvisorLink[],
  exploreNextCards: [
    { label: "Mortgage Advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Compare mortgage advisors when property purchase is on the horizon." },
    { label: "Pension Guide", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Understand Dutch pensions before long-term planning conversations." },
    { label: "Expat Taxes", href: EXPAT_TAXES_PATH, status: "live", description: "Tax context that often shapes financial planning assumptions." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Property purchase guide for expat buyers." },
    { label: "Double Taxation", href: DOUBLE_TAXATION_PATH, status: "live", description: "Treaty context for cross-border income and assets." },
  ] satisfies FinancialAdvisorLink[],
};
