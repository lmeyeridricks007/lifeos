export const BUY_VS_RENT_NETHERLANDS_PATH = "/netherlands/housing/buy-vs-rent-netherlands/" as const;
export const BUY_VS_RENT_NETHERLANDS_LEGACY_PATH = "/netherlands/buy-vs-rent-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const MORTGAGES_NETHERLANDS_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/housing/renting-in-the-netherlands/" as const;
export const PROPERTY_TAX_NETHERLANDS_PATH = "/netherlands/taxes/property-tax-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type BuyVsRentNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const buyVsRentNetherlandsPage = {
  slug: "buy-vs-rent-netherlands",
  path: BUY_VS_RENT_NETHERLANDS_PATH,
  legacyPath: BUY_VS_RENT_NETHERLANDS_LEGACY_PATH,
  publish: true,
  publishDate: "2026-07-22",
  seo: {
    title: "Buy vs Rent in the Netherlands | Expat Housing Guide",
    description:
      "Trying to decide whether to buy or rent in the Netherlands? Learn the pros, cons, costs and lifestyle considerations for expats and international professionals.",
    keywords: [
      "buy vs rent netherlands",
      "buying vs renting netherlands",
      "rent or buy netherlands",
      "should expats buy house netherlands",
      "renting vs buying property netherlands",
      "expat housing netherlands",
      "mortgage vs rent netherlands",
      "housing market netherlands",
      "buy apartment amsterdam",
      "renting house netherlands expat",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Housing · Decision guide",
    pageTitle: "Buy vs Rent in the Netherlands",
    subtitle:
      "Understand the financial, lifestyle and relocation tradeoffs between buying and renting property in the Netherlands as an expat or international professional.",
    primaryCta: { label: "Compare Buying vs Renting", href: "#intro" },
    secondaryCta: { label: "Explore Housing Guides", href: HOUSING_HUB_PATH },
    chips: ["Stay horizon", "Upfront costs", "City pressure", "Flexibility vs stability"],
    image: {
      src: "/images/heroes/netherlands-buy-vs-rent-hero-v2.png",
      alt: "Photorealistic editorial image of expats comparing renting and buying options in a Dutch urban apartment setting.",
    },
  },
  visuals: {
    financial: {
      src: "/images/infographics/netherlands-buy-vs-rent-financial-premium-v1.png",
      alt: "Premium ExpatLife infographic comparing total cost for buying versus renting, including upfront cash, monthly flow and exit risk.",
      caption: "Buying and renting have different cost shapes: upfront cash, monthly flow, risk and responsibilities all matter.",
    },
    upfrontCosts: {
      src: "/images/infographics/netherlands-buy-vs-rent-upfront-costs-premium-v1.png",
      alt: "Premium ExpatLife infographic comparing upfront cash needs for renting versus buying in the Netherlands.",
      caption: "Before comparing monthly costs, separate one-off cash needs: deposit and furnishing for renting; transfer, notary, advice and inspection costs for buying.",
    },
    flexibility: {
      src: "/images/infographics/netherlands-buy-vs-rent-flexibility-premium-v1.png",
      alt: "Premium ExpatLife infographic comparing rental flexibility with long-term homeownership stability by stay horizon.",
      caption: "Renting usually preserves mobility; buying usually increases permanence and control.",
    },
    marketReality: {
      src: "/images/infographics/netherlands-buy-vs-rent-market-reality-premium-v1.png",
      alt: "Premium ExpatLife infographic showing Dutch buyer and renter market pressure points and preparation checks.",
      caption: "Both sides can be competitive: buyers face bidding pressure and valuation gaps, while renters face limited inventory and screening.",
    },
    cities: {
      src: "/images/infographics/netherlands-buy-vs-rent-cities-geo-v2.png",
      alt: "ExpatLife infographic showing buy-versus-rent city factors on a Netherlands GeoJSON outline, with Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven and Groningen markers projected from latitude and longitude.",
      caption: "City choice changes the decision because rent pressure, purchase competition and commute options differ sharply.",
    },
    hsmReadiness: {
      src: "/images/infographics/netherlands-buy-vs-rent-hsm-readiness-premium-v1.png",
      alt: "Premium ExpatLife infographic showing highly skilled migrant housing readiness gates, including visa, job, savings, city confidence and exit plan.",
      caption: "Highly skilled migrants should weigh visa stability, contract type, salary path, savings and relocation uncertainty before buying.",
    },
    checklist: {
      src: "/images/infographics/netherlands-buy-vs-rent-checklist-premium-v1.png",
      alt: "Premium ExpatLife infographic showing a buy-versus-rent self-assessment checklist with rent first, compare both and buy when stable paths.",
      caption: "A good decision starts with stay horizon, job stability, savings, city fit and relocation risk.",
    },
    mistakes: {
      src: "/images/infographics/netherlands-buy-vs-rent-mistakes-premium-v1.png",
      alt: "Premium ExpatLife infographic showing common expat housing mistakes and checks before renting or buying.",
      caption: "Common mistakes cluster around rushed timing, misunderstood contracts, weak maintenance buffers, commute blind spots and overcommitting.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Intro" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#buying", label: "When buying fits" },
    { href: "#renting", label: "When renting fits" },
    { href: "#financial", label: "Financial comparison" },
    { href: "#upfront", label: "Upfront costs" },
    { href: "#flexibility", label: "Flexibility" },
    { href: "#market", label: "Market reality" },
    { href: "#cities", label: "Cities" },
    { href: "#hsm", label: "Highly skilled migrants" },
    { href: "#investment", label: "Lifestyle vs investment" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Related" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  introPoints: [
    "There is no universal answer. Buying can create stability, control and long-term housing continuity; renting can preserve flexibility while you learn the market.",
    "The right choice depends on stay horizon, career stability, savings, family plans, city choice and the current housing market.",
    "Many expats rent first, then buy once work, city preference and long-term plans are clearer. This guide is orientation only, not investment, mortgage or financial planning advice.",
  ],
  snapshotCards: [
    { label: "Buying", value: "Often suits 5+ year stay horizons" },
    { label: "Renting", value: "Often suits 0-3 year uncertainty" },
    { label: "Upfront cash", value: "Buying can require €15k-€35k+ outside mortgage" },
    { label: "Rental deposit", value: "Often 1-2 months' rent" },
    { label: "VvE / maintenance", value: "Can add €150-€800+/month equivalent" },
    { label: "City pressure", value: "Amsterdam/Utrecht differ from Groningen/Maastricht" },
  ],
  buyReasons: [
    "You expect to stay in the Netherlands for at least five years and want neighbourhood continuity.",
    "Your employment, residence status and household plans feel stable enough for a long commitment.",
    "You can pay buyer-side costs, valuation gaps and maintenance buffers without draining emergency savings.",
    "You want more control over the property than renting usually allows.",
  ],
  buyingDecisionChecks: [
    "Ask a mortgage advisor for a borrowing-capacity estimate before viewing homes seriously.",
    "Keep buyer costs, valuation gaps and emergency savings separate in your budget.",
    "Stress-test whether you would still be comfortable if repairs, VvE fees or taxes rise.",
    "Compare at least one commuter city or neighbourhood before assuming your first-choice city is the only option.",
  ],
  rentReasons: [
    "You are still in probation, on a temporary contract or unsure whether your assignment will continue.",
    "You are comparing cities, commute patterns or family needs before choosing a long-term base.",
    "You may relocate internationally within one to three years.",
    "You prefer liquidity and flexibility over ownership responsibility right now.",
  ],
  rentingDecisionChecks: [
    "Use the first rental period to test commute, neighbourhood, school fit and work stability.",
    "Track rent, service charges, utilities and savings each month to see whether buying readiness improves.",
    "Confirm registration eligibility, deposit terms and notice periods before signing.",
    "Set a review date after 6-12 months so renting does not become autopilot if your plans settle.",
  ],
  financialComparisonRows: [
    { costArea: "Monthly cash flow", buyingExample: "Mortgage example €2,000-€3,200/month", rentingExample: "Rent example €1,600-€2,800/month", decisionPoint: "Monthly cost alone is not the full decision." },
    { costArea: "Upfront cash", buyingExample: "Example €15,000-€35,000+ buyer costs", rentingExample: "Example 1-2 months' rent deposit", decisionPoint: "Buying usually needs much more cash before moving in." },
    { costArea: "Annual owner costs", buyingExample: "Example €2,300-€8,200+/year", rentingExample: "Often lower direct maintenance exposure", decisionPoint: "Owners absorb repairs, taxes and VvE/maintenance." },
    { costArea: "Exit cost / risk", buyingExample: "Sale timing, transaction costs, market risk", rentingExample: "Notice period and moving costs", decisionPoint: "Short stays usually make buying harder to justify." },
  ],
  monthlyBudgetScenarios: [
    {
      profile: "Single expat in a Randstad apartment",
      rentingMonthly: "€1,650 rent + €200 utilities/service costs",
      buyingMonthly: "€2,050 mortgage + €300 VvE/taxes/maintenance reserve",
      usefulTakeaway: "Renting may preserve cash if you are still city-testing or job-testing.",
    },
    {
      profile: "Couple considering a €450k apartment",
      rentingMonthly: "€2,100 rent + €250 utilities/service costs",
      buyingMonthly: "€2,350 mortgage + €450 VvE/taxes/maintenance reserve",
      usefulTakeaway: "Buying may create stability, but the owner reserve changes the monthly comparison.",
    },
    {
      profile: "Family comparing suburbs",
      rentingMonthly: "€2,500 rent + €350 utilities/service costs",
      buyingMonthly: "€2,900 mortgage + €500 insurance/taxes/maintenance reserve",
      usefulTakeaway: "Space and schools may matter as much as the monthly euro difference.",
    },
  ],
  upfrontCostExamples: [
    { scenario: "Renting €1,800/month", depositOrTax: "€1,800-€3,600 deposit", otherCosts: "Furniture/move €1,500-€5,000", initialCashNeed: "€3,300-€8,600" },
    { scenario: "Buying €400,000 home", depositOrTax: "€8,000 transfer tax at 2%", otherCosts: "Notary/advice/valuation/inspection €5,000-€8,000", initialCashNeed: "€13,000-€16,000+" },
    { scenario: "Buying €550,000 home", depositOrTax: "€11,000 transfer tax at 2%", otherCosts: "Notary/advice/valuation/inspection €5,500-€9,000", initialCashNeed: "€16,500-€20,000+" },
  ],
  cashBufferExamples: [
    {
      situation: "Rental path",
      cashBeforeKeys: "€4,000-€9,000",
      bufferAfterMove: "1-3 months of expenses",
      whyItMatters: "Deposits, furnishing and first bills can land close together.",
    },
    {
      situation: "Buyer path with no overbid gap",
      cashBeforeKeys: "€15,000-€25,000",
      bufferAfterMove: "3-6 months of expenses",
      whyItMatters: "You still need money after notary, advice, valuation and moving costs.",
    },
    {
      situation: "Buyer path with valuation gap",
      cashBeforeKeys: "€25,000-€45,000+",
      bufferAfterMove: "3-6 months of expenses plus repair reserve",
      whyItMatters: "If the valuation is below the accepted offer, extra cash may be needed.",
    },
  ],
  stayHorizonExamples: [
    { horizon: "0-2 years", likelyBias: "Renting usually fits better", reason: "Transaction costs, market risk and relocation uncertainty can dominate." },
    { horizon: "3-5 years", likelyBias: "Depends heavily on city, costs and job stability", reason: "Buying may work, but exit timing and buyer costs need modelling." },
    { horizon: "5-10+ years", likelyBias: "Buying may become more attractive", reason: "Stability and control can matter more when plans are settled." },
  ],
  exitRiskExamples: [
    {
      scenario: "Leave after 18 months",
      rentalExit: "Notice period + moving costs, often €2,000-€6,000",
      ownerExit: "Sale timing, agent/notary context, possible market loss and moving costs",
      decisionUse: "Short relocation assignments usually need extra caution before buying.",
    },
    {
      scenario: "Leave after 4 years",
      rentalExit: "Move-out costs and possible deposit dispute",
      ownerExit: "Transaction costs may still matter, but longer ownership can reduce pressure",
      decisionUse: "This middle zone depends heavily on purchase price, city and sale timing.",
    },
    {
      scenario: "Stay 8+ years",
      rentalExit: "Less exit risk, but rent may have continued for years",
      ownerExit: "Sale risk remains, but stability and control may have delivered lifestyle value",
      decisionUse: "Longer horizons make non-financial benefits easier to weigh.",
    },
  ],
  marketRealityCards: [
    { title: "Buying competition", body: "Overbidding, limited supply and valuation gaps can affect how much cash buyers need." },
    { title: "Rental competition", body: "High demand, income checks and limited inventory can make renting stressful in popular cities." },
    { title: "Not just Amsterdam", body: "Commuter cities and regional hubs can change the affordability and lifestyle equation." },
    { title: "Timing matters", body: "A good choice in one year or city may not be the best choice after a job change or family decision." },
  ],
  flexibilityPlanningTips: [
    "If your next role may move you abroad, renting usually protects mobility.",
    "If schools, family space or neighbourhood roots matter now, ownership stability may carry more weight.",
    "If you are unsure, price the cost of waiting: rent paid, savings growth, market risk and lost optionality.",
  ],
  cityCards: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", affordability: "Very expensive", rentalPressure: "Very high", buyingCompetition: "Very high", commuteNote: "Buying often needs strong income, savings and willingness to consider neighbourhood tradeoffs." },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", affordability: "High but broader range", rentalPressure: "High", buyingCompetition: "High", commuteNote: "Can offer more property variety than Amsterdam, but local differences are large." },
    { label: "Utrecht", href: "/netherlands/utrecht/", affordability: "Expensive", rentalPressure: "Very high", buyingCompetition: "Very high", commuteNote: "Central rail access increases both rental and buying pressure." },
    { label: "The Hague", href: "/netherlands/the-hague/", affordability: "High", rentalPressure: "High", buyingCompetition: "High", commuteNote: "International community and coastal suburbs create varied options." },
    { label: "Eindhoven", href: "/netherlands/eindhoven/", affordability: "Moderate-high", rentalPressure: "High in tech corridors", buyingCompetition: "High", commuteNote: "Tech employment can support buying, but car/rail commute choices matter." },
    { label: "Haarlem", href: "/netherlands/haarlem/", affordability: "Expensive", rentalPressure: "High", buyingCompetition: "High", commuteNote: "Often attractive to Amsterdam commuters and families." },
    { label: "Leiden", href: "/netherlands/leiden/", affordability: "High for city size", rentalPressure: "High", buyingCompetition: "High", commuteNote: "Academic and life-science demand supports strong housing pressure." },
    { label: "Delft", href: "/netherlands/delft/", affordability: "Moderate-high", rentalPressure: "Student and tech pressure", buyingCompetition: "High", commuteNote: "Small-city supply can make both renting and buying competitive." },
    { label: "Groningen", href: "/netherlands/groningen/", affordability: "More moderate", rentalPressure: "Local pressure", buyingCompetition: "Moderate", commuteNote: "May suit long-term northern plans more than Randstad commuting." },
    { label: "Arnhem", href: "/netherlands/arnhem/", affordability: "More moderate", rentalPressure: "Moderate", buyingCompetition: "Moderate", commuteNote: "Can be a regional alternative if work and lifestyle fit." },
    { label: "Nijmegen", href: "/netherlands/nijmegen/", affordability: "Moderate-high", rentalPressure: "University-city pressure", buyingCompetition: "Moderate-high", commuteNote: "Good fit depends on work location and cross-region travel." },
    { label: "Maastricht", href: "/netherlands/maastricht/", affordability: "More moderate", rentalPressure: "Local/cross-border", buyingCompetition: "Moderate", commuteNote: "Cross-border context matters for internationally mobile households." },
  ],
  cityScenarioExamples: [
    {
      cityType: "Amsterdam / Utrecht core",
      rentExample: "€2,000-€3,200/month for many expat-friendly homes",
      buyingExample: "Higher purchase budgets and possible overbidding pressure",
      practicalUse: "Compare nearby cities and commute before stretching the budget.",
    },
    {
      cityType: "Rotterdam / The Hague / Eindhoven",
      rentExample: "€1,600-€2,700/month depending on size and location",
      buyingExample: "More varied purchase options, but popular areas remain competitive",
      practicalUse: "Neighbourhood choice can matter more than the city average.",
    },
    {
      cityType: "Groningen / Arnhem / Maastricht",
      rentExample: "€1,200-€2,100/month in many non-luxury segments",
      buyingExample: "Lower entry budgets may be possible, with local-market tradeoffs",
      practicalUse: "Check whether work location and long-distance travel still fit.",
    },
  ],
  hsmConsiderations: [
    { title: "Visa and stay horizon", body: "A valid residence permit helps with planning, but the real question is whether your Dutch stay is likely to continue." },
    { title: "Salary growth", body: "Highly skilled migrants may see salary growth, but future raises should not be the only reason to stretch today." },
    { title: "Mortgage eligibility", body: "Lenders assess income, contract, debts, residence situation and the property. Approval is never guaranteed." },
    { title: "International mobility", body: "If your next promotion may move you abroad, renting first can preserve optionality." },
  ],
  lifestyleInvestmentPoints: [
    "Buying for lifestyle can make sense when you want control, schools, neighbourhood roots and stability.",
    "Buying as an investment is uncertain: prices, interest rates, taxes, maintenance and selling costs can all move against expectations.",
    "Do not assume appreciation. Treat any investment analysis as separate from relocation and lifestyle needs.",
  ],
  lifestyleInvestmentChecks: [
    "Write down your lifestyle reason for buying before looking at listings.",
    "Model a downside scenario where you sell sooner than planned or prices do not rise.",
    "Separate emotional readiness from mortgage eligibility; being approved does not mean buying is automatically right.",
  ],
  checklistCards: [
    { q: "How long will you stay?", buySignal: "5+ years", rentSignal: "Under 3 years or unclear" },
    { q: "How stable is employment?", buySignal: "Permanent or clearly stable", rentSignal: "Probation, temporary or changing employer" },
    { q: "Can you handle upfront costs?", buySignal: "€15k-€35k+ buffer after emergency savings", rentSignal: "Limited cash or savings needed for relocation" },
    { q: "Are you still exploring cities?", buySignal: "City and commute are settled", rentSignal: "Still testing neighbourhoods or work location" },
    { q: "How do you feel about market risk?", buySignal: "Comfortable with long-term ownership risk", rentSignal: "Need low commitment and liquidity" },
    { q: "Do family plans need stability?", buySignal: "Schools, space and roots matter", rentSignal: "Household plans are still changing" },
  ],
  selfAssessmentScenarios: [
    {
      profile: "New arrival on probation",
      signals: "0-12 months in NL, city still uncertain, savings still rebuilding",
      likelyNextStep: "Rent first, track costs and revisit after probation or first contract renewal.",
    },
    {
      profile: "Highly skilled migrant with stable job",
      signals: "Permanent contract, 5+ year plan, €25k+ cash buffer after move",
      likelyNextStep: "Check mortgage capacity and compare at least two cities or neighbourhoods.",
    },
    {
      profile: "Family planning schools",
      signals: "Need space, school area and long-term neighbourhood stability",
      likelyNextStep: "Compare rental scarcity against buying costs, commute and owner reserves.",
    },
  ],
  mistakeCards: [
    { title: "Buying too quickly", body: "Newcomers sometimes buy before understanding city, commute, schools or contract realities." },
    { title: "Underestimating ownership costs", body: "Property taxes, VvE, insurance, maintenance and repairs can change the monthly picture." },
    { title: "Assuming home-country rules apply", body: "Dutch mortgages, notaries, valuation and bidding practices may differ sharply from home." },
    { title: "Ignoring contract implications", body: "Temporary contracts or probation can affect mortgage options and timing." },
    { title: "Renting too long without reviewing", body: "Long-term renters should periodically compare rent, savings, city fit and mortgage readiness." },
    { title: "Overcommitting financially", body: "A maximum mortgage is not the same as a comfortable household budget." },
    { title: "Focusing only on Amsterdam", body: "Nearby cities or commute alternatives can change the tradeoff." },
    { title: "Ignoring commute realities", body: "A cheaper home can become expensive if time, transport and quality of life deteriorate." },
  ],
  expatQuestions: [
    { q: "Is buying cheaper than renting?", a: "Sometimes, but not automatically. Compare upfront costs, mortgage, taxes, VvE, maintenance, expected stay horizon and exit risk." },
    { q: "How long should I stay before buying?", a: "Many expats use 5+ years as a practical signal, while 0-2 years often favours renting. The middle depends on city, costs and stability." },
    { q: "Can highly skilled migrants buy homes?", a: "Yes, many do. Mortgage eligibility depends on income, contract, residency, debts and lender policy." },
    { q: "What if I leave the Netherlands?", a: "You may need to sell, rent out subject to rules, or carry the property from abroad. That creates tax, mortgage and management questions." },
    { q: "Is Amsterdam too expensive?", a: "Amsterdam is one of the hardest markets. Some buyers still proceed, while others compare Haarlem, Utrecht, Rotterdam or regional cities." },
    { q: "Is overbidding normal?", a: "It can be common in competitive markets, but it can create valuation gaps that require extra savings." },
    { q: "Are Dutch mortgages attractive?", a: "Dutch mortgages can be structured and competitive, but product choice and approval require regulated advice. Do not assume rates or approval." },
    { q: "Should I rent first?", a: "Many expats rent first to learn cities, commute, job stability and household needs before buying." },
  ],
  questionUseTips: [
    "Use the question cards to identify which uncertainty is actually blocking your decision.",
    "If most blockers are about job, visa or city fit, resolve those before focusing on property listings.",
    "If most blockers are financial, move next to mortgage capacity, upfront costs and recurring owner costs.",
  ],
  relatedGuideUseTips: [
    "Read the mortgage guide before assuming a purchase budget.",
    "Read the property-tax guide before comparing mortgage cost with rent.",
    "Use the city guide before committing to a postcode or commute tradeoff.",
  ],
  serviceSelectionTips: [
    "Use mortgage advisors for borrowing capacity and product eligibility, not property-market predictions.",
    "Use real estate agents for local buying process support, bidding context and viewing strategy.",
    "Use relocation or rental support when you need speed, temporary housing or city orientation.",
  ],
  faqUseTips: [
    "Use FAQ answers as orientation, then verify current rules with official sources or licensed professionals.",
    "If an answer depends on your income, contract, tax position or residence status, treat it as a personalised advice question.",
    "Keep a shortlist of unknowns to resolve before you sign a lease, make an offer or book a mortgage meeting.",
  ],
  relatedGuides: [
    { label: "Netherlands Housing Hub", href: HOUSING_HUB_PATH, status: "live", description: "Start with the full housing ecosystem." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Buying process, bidding, notary, taxes and transfer." },
    { label: "Mortgages for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Mortgage eligibility, borrowing capacity and application steps." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Rental search, contracts and tenant context." },
    { label: "Property Tax Netherlands", href: PROPERTY_TAX_NETHERLANDS_PATH, status: "live", description: "WOZ, municipal taxes and ownership costs." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Relocation timing, address, banking and setup." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities before committing." },
  ] satisfies BuyVsRentNetherlandsLink[],
  services: [
    { label: "Mortgage advisors", href: "/netherlands/services/mortgage-advisors/", status: "live", description: "Borrowing capacity and mortgage-route context." },
    { label: "Real estate agents", href: "/netherlands/services/real-estate-agents/", status: "comingSoon", description: "Buying-agent support and bidding strategy." },
    { label: "Rental agencies", href: "/netherlands/services/rental-agencies/", status: "live", description: "Rental search support while you compare cities." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "City orientation, temporary housing and arrival setup." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "comingSoon", description: "Broader household planning and cash-flow context." },
  ] satisfies BuyVsRentNetherlandsLink[],
  faq: [
    { q: "Should expats buy or rent in the Netherlands?", a: "It depends on stay horizon, job stability, savings, household plans, city choice and risk tolerance. There is no universal answer." },
    { q: "Is buying cheaper than renting?", a: "Not always. Buying has upfront costs, taxes, maintenance, VvE and exit risk. Renting has ongoing rent and less control, but usually lower upfront cash needs." },
    { q: "How long should I stay before buying?", a: "A 5+ year stay often makes buying easier to consider. Short stays often favour renting, while 3-5 years requires careful modelling." },
    { q: "Can highly skilled migrants buy property?", a: "Yes. Many highly skilled migrants buy Dutch property, but mortgage approval depends on income, contract, residency and lender assessment." },
    { q: "Is Amsterdam too expensive to buy?", a: "Amsterdam is expensive and competitive. Some expats still buy there, while others compare nearby cities and commute options." },
    { q: "What are the upfront costs?", a: "Renting may require 1-2 months' rent as deposit. Buying can require transfer tax, notary, valuation, mortgage advice, inspection and possible overbid gaps." },
    { q: "Is renting more flexible?", a: "Usually yes. Renting generally makes relocation, city testing and career mobility easier than owning." },
    { q: "Should I rent first before buying?", a: "Many expats rent first to understand the market, commute, contract stability and city fit before buying." },
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information about housing, living and public services." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Official tax information, including transfer tax and home-related tax topics." },
    { label: "AFM", href: "https://www.afm.nl/en", description: "Dutch financial markets authority and consumer information about financial products and advice." },
    { label: "Kadaster", href: "https://www.kadaster.nl/", description: "Dutch land registry and property-registration information." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official practical information about Dutch rules and government processes." },
  ],
  sourcesDisclaimer:
    "Housing regulations, mortgage conditions and property taxes can change over time. Always verify information through official resources and licensed professionals.",
  sourceVerificationTips: [
    "Use AFM-regulated mortgage advice before relying on mortgage estimates.",
    "Use Belastingdienst for transfer-tax and property-tax context.",
    "Use Kadaster and notary information for ownership and property-registration checks.",
    "Use Government.nl or the relevant municipality for current housing rules and local process context.",
  ],
  exploreNextCards: [
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Go deeper on the purchase process." },
    { label: "Mortgages for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Check mortgage eligibility and borrowing factors." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Compare the rental path." },
    { label: "Housing Costs Guide", href: "/netherlands/housing/housing-costs-netherlands/", status: "comingSoon", description: "Future guide to total housing budgets." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities before deciding." },
  ] satisfies BuyVsRentNetherlandsLink[],
} as const;
