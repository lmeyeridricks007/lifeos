export const MORTGAGES_NETHERLANDS_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/housing/renting-in-the-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type MortgagesNetherlandsExpatsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const mortgagesNetherlandsExpatsPage = {
  slug: "mortgages-netherlands-expats",
  path: MORTGAGES_NETHERLANDS_EXPATS_PATH,
  publish: true,
  publishDate: "2026-07-15",
  seo: {
    title: "Mortgages in the Netherlands for Expats | Dutch Mortgage Guide",
    description:
      "Learn how mortgages work in the Netherlands for expats, including eligibility, borrowing limits, mortgage types, costs and the Dutch home-buying process.",
    keywords: [
      "mortgages netherlands expats",
      "expat mortgage netherlands",
      "dutch mortgage expats",
      "mortgage netherlands foreigners",
      "highly skilled migrant mortgage",
      "buying house netherlands expat",
      "dutch mortgage system",
      "mortgage advisor netherlands",
      "mortgage rates netherlands",
      "expat housing netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Housing · Mortgage planning",
    pageTitle: "Mortgages in the Netherlands for Expats",
    subtitle:
      "Understand how Dutch mortgages work for expats, including borrowing capacity, mortgage types, eligibility, costs and what international professionals should know before buying property.",
    primaryCta: { label: "Understand Dutch Mortgages", href: "#intro" },
    secondaryCta: { label: "Explore Housing Guides", href: HOUSING_HUB_PATH },
    chips: ["Expat eligibility", "Borrowing capacity", "Fixed vs variable", "Buying costs"],
    image: {
      src: "/images/heroes/netherlands-mortgages-expats-hero.png",
      alt: "Premium editorial photo of an expat couple reviewing mortgage documents on a laptop beside Dutch canal-side residential architecture.",
    },
  },
  visuals: {
    eligibility: {
      src: "/images/infographics/netherlands-mortgages-expats-eligibility-premium-v1.png",
      alt: "Premium ExpatLife infographic showing whether expats can get a Dutch mortgage, with residency, income, savings, valuation, bank approval and adviser checks.",
      caption: "Eligibility is a combined picture: residency, contract, income, savings, debts and the property all matter.",
    },
    process: {
      src: "/images/infographics/netherlands-mortgages-expats-process-v4.png",
      alt: "Detailed ExpatLife infographic showing the Dutch mortgage process from budget and advice through offer, valuation, approval, notary and keys.",
      caption: "A Dutch mortgage process usually connects income checks, advice, offer strategy, valuation, approval and notary transfer.",
    },
    borrowingCapacity: {
      src: "/images/infographics/netherlands-mortgages-expats-capacity-premium-v1.png",
      alt: "Premium ExpatLife infographic showing Dutch mortgage capacity factors, including salary, partner income, contract, debts, savings and property valuation.",
      caption: "Borrowing capacity is not salary alone: household income, debts, contract stability and affordability norms all interact.",
    },
    fixedVariable: {
      src: "/images/infographics/netherlands-mortgages-expats-fixed-variable-premium-v1.png",
      alt: "Premium ExpatLife infographic comparing fixed-rate and variable-rate Dutch mortgage choices with relocation scenarios and risk fit.",
      caption: "Fixed and variable rates are a risk trade-off, not a universal recommendation.",
    },
    costs: {
      src: "/images/infographics/netherlands-mortgages-expats-costs-premium-v1.png",
      alt: "Premium ExpatLife infographic explaining mortgage costs beyond the monthly payment, including buyer costs, valuation, adviser, notary, inspection and savings buffer.",
      caption: "Upfront buyer costs can sit outside the mortgage itself, so expats should budget beyond monthly repayments and verify current fees with providers.",
    },
    buyRentCities: {
      src: "/images/infographics/netherlands-mortgages-expats-city-stay-geo-v2.png",
      alt: "ExpatLife infographic showing Dutch city mortgage decision factors on a Netherlands GeoJSON outline, with Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven and Groningen markers projected from latitude and longitude.",
      caption: "City choice and stay horizon shape whether buying or renting is the more practical next step.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Eligibility" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#hsm", label: "Highly skilled migrants" },
    { href: "#borrowing", label: "Borrowing capacity" },
    { href: "#rates", label: "Fixed vs variable" },
    { href: "#structures", label: "Structures" },
    { href: "#temporary-contracts", label: "Temporary contracts" },
    { href: "#costs", label: "Costs" },
    { href: "#tax", label: "Tax deduction" },
    { href: "#process", label: "Process" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#cities", label: "Cities" },
    { href: "#buy-or-rent", label: "Buy vs rent" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Related" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  snapshotCards: [
    { label: "Expats", value: "Can obtain Dutch mortgages" },
    { label: "Salary", value: "Strongly affects borrowing power" },
    { label: "Timeline", value: "Often 6-12 weeks to keys" },
    { label: "Advice", value: "Mortgage advisors are widely used" },
    { label: "Transfer tax", value: "2% owner-occupied baseline" },
    { label: "Contracts", value: "Temporary contracts may still qualify" },
  ],
  snapshotUseTips: [
    "Use the snapshot to decide what to check first: income, contract type, savings and residency documents.",
    "Treat mortgage estimates as planning ranges until a lender reviews the full application.",
    "Separate monthly affordability from upfront buying costs before you book viewings.",
  ],
  introPoints: [
    "Yes, many expats successfully obtain mortgages in the Netherlands. Dutch lenders commonly work with highly skilled migrants, international professionals, EU citizens and long-term residents.",
    "Eligibility is personal. Lenders look at income, employment stability, residency situation, debts, savings and the property being purchased.",
    "This guide is practical orientation only. It does not provide mortgage advice, financial advice, tax advice, investment advice or approval guarantees.",
  ],
  introChecklist: [
    "Check your contract status before viewing: permanent, fixed-term, probation or employer intent statement.",
    "Estimate own-funds needs separately from the mortgage: buyer costs, valuation gaps, moving costs and emergency buffer.",
    "Ask a licensed adviser which lenders are realistic for your residency, income type and document profile.",
    "Keep the buying decision separate from approval: an indicative budget is not a binding lender offer.",
  ],
  adviserCallMilestones: [
    { title: "Before viewings", body: "Confirm indicative budget, savings needed, lender fit and whether your contract or residence status creates extra conditions." },
    { title: "Before bidding", body: "Ask how valuation gaps, financing conditions and deadlines should shape your maximum offer." },
    { title: "After accepted offer", body: "Coordinate adviser, valuation, documents, notary and financing-condition dates so the file does not stall." },
  ],
  conceptCards: [
    { title: "A loan secured on the property", body: "A mortgage is a long-term loan used to purchase a home. The lender assesses whether the property and your household finances support the loan." },
    { title: "Affordability first", body: "Dutch borrowing capacity is tied to gross income, household obligations, interest assumptions and regulatory affordability norms." },
    { title: "Different from home", body: "The Dutch system may feel different from the US, UK, South Africa, Asia or other EU countries, especially around advice, valuation and tax treatment." },
  ],
  hsmCards: [
    { title: "Visa and residence context", body: "A valid permit and credible stay horizon help lenders understand continuity, but permit type alone does not guarantee approval." },
    { title: "Employment profile", body: "Banks may evaluate your employer, contract type, probation status and documented income stability." },
    { title: "Future earning capacity", body: "Highly skilled migrant roles can be viewed positively when income is stable, but each lender uses its own policy." },
  ],
  hsmPrepChecklist: [
    "Confirm whether your employment contract is permanent, fixed-term or still in probation.",
    "Keep residence permit, employer sponsorship context and recent payslips ready.",
    "Ask the adviser how each lender treats highly skilled migrant status and contract length.",
  ],
  documentReadinessExamples: [
    { situation: "Permanent employee", documents: "Passport, residence permit, contract, payslips, annual statement, savings proof", watchOut: "Check probation status and variable-pay treatment." },
    { situation: "Fixed-term contract", documents: "Contract, renewal history, employer intent statement, payslips, sector context", watchOut: "Some lenders may discount short contract history." },
    { situation: "Two-income household", documents: "Both contracts, both payslips, debts, savings and residence documents", watchOut: "One weak contract can still affect total capacity." },
    { situation: "Foreign income or bonus", documents: "Employer letters, income history, tax documents, currency details where relevant", watchOut: "Variable or foreign income may not count fully." },
  ],
  borrowingFactors: [
    { title: "Gross salary", body: "Base salary is central. Variable pay, bonuses or foreign income may be treated differently by lender." },
    { title: "Partner income", body: "A partner's income can increase household capacity when it is stable and documented." },
    { title: "Debts and obligations", body: "Loans, student debt, alimony or other obligations reduce what lenders may consider affordable." },
    { title: "Employment stability", body: "Permanent contracts usually simplify the application; temporary contracts may require more evidence." },
    { title: "Interest assumptions", body: "Affordability calculations react to the interest-rate environment, so capacity changes over time." },
    { title: "Household situation", body: "Family size and household costs matter because lenders assess monthly affordability, not just headline salary." },
  ],
  borrowerScenarios: [
    {
      title: "Single highly skilled migrant",
      profile: "Gross salary €85,000 · permanent contract · no consumer debt · €35,000 savings",
      takeaway: "Usually a cleaner file: lender still checks permit, probation, employer and property valuation.",
    },
    {
      title: "Couple with two incomes",
      profile: "Gross salaries €70,000 + €45,000 · one partner new in role · €45,000 savings",
      takeaway: "Partner income can help, but each contract, probation period and debt position is assessed separately.",
    },
    {
      title: "Temporary contract expat",
      profile: "Gross salary €65,000 · 12-month contract · employer intent statement · €25,000 savings",
      takeaway: "Possible routes may exist, but lender choice can narrow and documentation becomes more important.",
    },
    {
      title: "Strong income, extra debt",
      profile: "Gross salary €95,000 · €400/month car loan · €20,000 savings",
      takeaway: "Recurring debt can reduce affordability even when headline salary looks strong.",
    },
  ],
  capacityPlanningExamples: [
    { profile: "Single HSM, stable file", incomeSignal: "€85,000 gross salary, permanent contract, no consumer debt", planningFocus: "Own-funds buffer and property valuation gap." },
    { profile: "Dual income, mixed stability", incomeSignal: "€70,000 + €45,000, one partner recently started", planningFocus: "How much of the second income the lender accepts." },
    { profile: "High income with debt", incomeSignal: "€95,000 salary plus €400/month car loan", planningFocus: "Debt may reduce capacity more than expected." },
    { profile: "Temporary contract", incomeSignal: "€65,000 salary, 12-month contract, employer intent statement", planningFocus: "Lender selection and whether waiting improves options." },
  ],
  salaryLinks: [
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark income before modelling purchase power." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Understand international-professional salary ranges." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Translate gross salary into realistic monthly cash flow." },
  ] satisfies MortgagesNetherlandsExpatsLink[],
  rateCards: [
    { title: "Fixed-rate mortgages", body: "The interest rate is fixed for an agreed period, giving more predictable monthly payments during that period." },
    { title: "Variable-rate mortgages", body: "The rate may change over time, which can increase or decrease monthly payments depending on lender terms and market conditions." },
    { title: "Personal trade-off", body: "Some buyers value stability; others value flexibility. The right choice depends on risk tolerance, stay horizon and adviser guidance." },
  ],
  rateDecisionExamples: [
    { preference: "Payment certainty", mayFit: "Longer fixed-rate period", tradeOff: "Potentially less flexibility if plans change or repayment rules matter." },
    { preference: "Shorter stay horizon", mayFit: "Shorter fixed period or flexible terms", tradeOff: "You still need a buffer for sale timing and market risk." },
    { preference: "Can absorb payment moves", mayFit: "Variable or shorter-term option to discuss", tradeOff: "Monthly payment may rise; do not rely on best-case scenarios." },
    { preference: "Family stability", mayFit: "Predictable payment profile", tradeOff: "Check total ownership costs beyond the mortgage payment." },
  ],
  structureCards: [
    { title: "Annuity mortgage", body: "Monthly payments are usually level at the start, with the interest share declining and repayment share increasing over time." },
    { title: "Linear mortgage", body: "Principal repayment is more even, so payments often start higher and reduce over time." },
    { title: "Interest-only structures", body: "May exist in limited contexts, but availability and tax treatment can be restricted. Get regulated advice before assuming fit." },
  ],
  repaymentStructureExamples: [
    { structure: "Linear", example: "€400,000 over 30 years", firstYearPrincipal: "About €13,333 principal repaid in year 1", pattern: "Principal repayment is steady; total monthly payment often starts higher." },
    { structure: "Annuity", example: "€400,000 over 30 years", firstYearPrincipal: "Lower principal share at the start", pattern: "Total monthly payment is usually steadier; repayment share rises over time." },
    { structure: "Interest-only", example: "Partial or limited contexts", firstYearPrincipal: "May repay little or no principal on that part", pattern: "Rules and tax treatment can be restricted; do not assume availability." },
  ],
  structureQuestions: [
    "Ask how monthly payments change over time under each structure.",
    "Check whether the structure affects mortgage interest deduction eligibility.",
    "Understand early repayment rules before choosing flexibility over predictability.",
  ],
  temporaryContractPoints: [
    "Temporary contracts, fixed-term employment and recent relocation history do not automatically rule out a Dutch mortgage.",
    "Lenders may ask for an employer statement, employment history, sector context, probation confirmation and stable income documentation.",
    "Options vary by lender. Some buyers wait until probation ends or contract status improves before bidding.",
  ],
  temporaryContractDocuments: [
    "Employment contract and any renewal or intent statement from the employer.",
    "Recent payslips, annual statement and documented variable income where relevant.",
    "Residence permit or EU status proof, plus savings evidence for buyer-side costs.",
  ],
  temporaryContractScenarios: [
    { contractType: "Probation period", likelyIssue: "Many lenders want probation resolved before final approval.", practicalMove: "Ask whether waiting a few weeks changes lender access." },
    { contractType: "One-year contract", likelyIssue: "Lender may ask for intent statement and employment history.", practicalMove: "Prepare employer letter before bidding." },
    { contractType: "Agency or contractor income", likelyIssue: "Income may need history and may be assessed differently.", practicalMove: "Ask adviser which lenders accept your income type." },
    { contractType: "Recent relocation", likelyIssue: "Short Dutch income history can create extra checks.", practicalMove: "Bring foreign employment records and savings proof." },
  ],
  costItems: [
    { title: "Mortgage advisor fees", body: "Advice and application coordination are commonly paid separately from the mortgage." },
    { title: "Valuation costs", body: "The lender often requires a valuation report; the valuation can cap the financeable amount." },
    { title: "Notary fees", body: "A civil-law notary handles property transfer and mortgage deed registration." },
    { title: "Technical inspection", body: "A building inspection can reveal structural risks before final commitment." },
    { title: "Transfer tax", body: "Overdrachtsbelasting depends on property use and buyer situation; verify current rules with Belastingdienst." },
    { title: "Application costs", body: "Arrangement, administration or guarantee-related costs may apply depending on the lender and structure." },
  ],
  buyerCostExamples: [
    { purchasePrice: "€350,000", transferTax: "€7,000", otherCosts: "€4,500-€7,500", totalPlanningRange: "€11,500-€14,500" },
    { purchasePrice: "€450,000", transferTax: "€9,000", otherCosts: "€5,000-€8,000", totalPlanningRange: "€14,000-€17,000" },
    { purchasePrice: "€600,000", transferTax: "€12,000", otherCosts: "€5,500-€9,000", totalPlanningRange: "€17,500-€21,000" },
  ],
  appraisalGapExamples: [
    { askingPrice: "€400,000", offer: "€420,000", valuation: "€410,000", gapFromSavings: "€10,000" },
    { askingPrice: "€500,000", offer: "€540,000", valuation: "€520,000", gapFromSavings: "€20,000" },
    { askingPrice: "€650,000", offer: "€700,000", valuation: "€675,000", gapFromSavings: "€25,000" },
  ],
  taxLinks: [
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Start with the broader Dutch tax map." },
    { label: "Property Tax Netherlands", href: "/netherlands/taxes/property-tax-netherlands/", status: "live", description: "Plan WOZ, municipal taxes and recurring owner costs." },
    { label: "Payroll Tax Netherlands", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "Understand salary withholding before mortgage budgeting." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Plan around take-home pay, not headline gross income." },
  ] satisfies MortgagesNetherlandsExpatsLink[],
  taxVerificationTips: [
    "Verify mortgage interest deduction rules for the tax year you buy.",
    "Check transfer tax classification before signing, especially if the home is not owner-occupied.",
    "Model affordability on cash flow before any expected tax refund.",
  ],
  processSteps: [
    { step: "1", title: "Determine budget", body: "Estimate purchase range from income, savings, buyer costs and conservative monthly affordability." },
    { step: "2", title: "Speak with mortgage advisor", body: "A regulated adviser can explain lender options, documents and indicative borrowing capacity." },
    { step: "3", title: "Gather documents", body: "Prepare passport, residence permit, employment contract, payslips, employer statement and savings evidence." },
    { step: "4", title: "Receive mortgage estimate", body: "Use the estimate for search boundaries, but treat it as indicative until lender approval." },
    { step: "5", title: "Search for property", body: "Compare cities, commute, property type and maintenance obligations before bidding." },
    { step: "6", title: "Make offer", body: "Submit an offer with conditions and deadlines that match your financing risk." },
    { step: "7", title: "Arrange valuation and inspection", body: "The valuation supports the mortgage file; the inspection helps identify property risk." },
    { step: "8", title: "Final mortgage approval", body: "The lender checks the complete file before issuing a binding offer." },
    { step: "9", title: "Sign at notary", body: "The notary handles property transfer, mortgage deed and registration." },
    { step: "10", title: "Receive keys", body: "After transfer, arrange utilities, insurance, registration updates and ongoing housing budget." },
  ],
  timelineExamples: [
    { phase: "Adviser intake", typicalTiming: "1-3 days", whatCanDelayIt: "Missing payslips, unclear permit or contract questions" },
    { phase: "Document gathering", typicalTiming: "2-7 days", whatCanDelayIt: "Employer statement, translated documents, foreign income proof" },
    { phase: "Valuation", typicalTiming: "3-10 days", whatCanDelayIt: "Busy market, unusual property or incomplete property information" },
    { phase: "Lender review", typicalTiming: "1-3 weeks", whatCanDelayIt: "Temporary contract, debt questions, extra compliance checks" },
    { phase: "Notary transfer", typicalTiming: "4-8 weeks after agreement", whatCanDelayIt: "Seller timeline, financing conditions, notary availability" },
  ],
  processPlanningTips: [
    "Prepare documents before bidding so deadlines do not compress after an accepted offer.",
    "Use financing and inspection conditions carefully; understand expiry dates before signing.",
    "Keep the notary, adviser, agent and employer aligned when documents are time-sensitive.",
  ],
  mortgageTimelineRisks: [
    { risk: "Employer statement delay", effect: "Lender file cannot progress", mitigation: "Request it before serious viewings." },
    { risk: "Valuation below offer", effect: "Extra savings may be needed", mitigation: "Model overbid gaps before bidding." },
    { risk: "Financing condition expires", effect: "Contract risk increases", mitigation: "Track deadlines with adviser and agent." },
    { risk: "Missing foreign documents", effect: "Extra compliance questions", mitigation: "Translate or explain documents early." },
  ],
  mistakeCards: [
    { title: "Underestimating additional costs", body: "Many buyers focus on the loan and miss buyer-side cash needs such as notary, valuation and tax." },
    { title: "Ignoring temporary contract implications", body: "Contract timing can affect lender options, documentation and approval confidence." },
    { title: "Focusing only on monthly payment", body: "Maintenance, VvE fees, taxes, insurance and moving costs also affect affordability." },
    { title: "Not understanding fixed vs variable rates", body: "Payment stability and rate risk matter, especially if your stay horizon is uncertain." },
    { title: "Overlooking city differences", body: "Amsterdam, Utrecht and Haarlem can create different affordability pressure than Groningen or Maastricht." },
    { title: "Not using independent advice", body: "An AFM-regulated adviser can explain options without relying on forum anecdotes." },
    { title: "Assuming home-country rules apply", body: "Dutch valuation, tax, notary and lending practices may differ sharply from your previous market." },
    { title: "Ignoring tax implications", body: "Mortgage interest deduction and transfer tax rules need current official confirmation." },
  ],
  mistakeGuardrails: [
    "Set a maximum bid that includes buyer costs and possible valuation gaps.",
    "Do not waive financing or inspection conditions unless you understand the risk.",
    "Compare city pressure and commute alternatives before stretching affordability.",
  ],
  cityCards: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", affordability: "Very expensive", competition: "Very high", expatDemand: "Very high", commute: "Strong rail, bike and tram network; parking pressure." },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", affordability: "High but often below Amsterdam", competition: "High", expatDemand: "Growing", commute: "Good rail and road links." },
    { label: "Utrecht", href: "/netherlands/utrecht/", affordability: "Expensive", competition: "Very high", expatDemand: "High", commute: "Central national rail hub." },
    { label: "The Hague", href: "/netherlands/the-hague/", affordability: "High", competition: "High", expatDemand: "Diplomatic and international", commute: "Strong Randstad links and coastal suburbs." },
    { label: "Eindhoven", href: "/netherlands/eindhoven/", affordability: "Moderate-high", competition: "High in tech corridors", expatDemand: "Strong among tech workers", commute: "Car and regional rail often matter." },
    { label: "Haarlem", href: "/netherlands/haarlem/", affordability: "Expensive", competition: "High", expatDemand: "Families and Amsterdam commuters", commute: "Fast rail to Amsterdam." },
    { label: "Leiden", href: "/netherlands/leiden/", affordability: "High for city size", competition: "High", expatDemand: "Academic and life sciences", commute: "Good Randstad links." },
    { label: "Groningen", href: "/netherlands/groningen/", affordability: "More moderate", competition: "Local pressure", expatDemand: "University and healthcare", commute: "Self-contained northern city." },
    { label: "Maastricht", href: "/netherlands/maastricht/", affordability: "More moderate", competition: "Local and cross-border", expatDemand: "International and EU-linked", commute: "Cross-border Belgium/Germany context." },
  ],
  buyReasons: [
    "Long-term residence plans and stable employment.",
    "Families wanting school and neighbourhood continuity.",
    "Buyers who can absorb upfront costs, maintenance and market risk.",
  ],
  rentReasons: [
    "Short assignments, probation periods or uncertain plans.",
    "Newcomers still learning cities and commute patterns.",
    "Households needing flexibility before committing savings.",
  ],
  cityMortgageExamples: [
    { cityType: "Amsterdam or Utrecht", mortgageImpact: "High purchase prices can stretch capacity quickly.", planningQuestion: "Would a nearby commuter city protect your savings buffer?" },
    { cityType: "Rotterdam or The Hague", mortgageImpact: "Broader stock, still competitive in popular neighbourhoods.", planningQuestion: "Does commute and school choice change your max bid?" },
    { cityType: "Eindhoven", mortgageImpact: "Tech salaries can support demand in specific corridors.", planningQuestion: "Is your employer location tied to a particular side of the city?" },
    { cityType: "Groningen or Maastricht", mortgageImpact: "Entry prices can be lower, but local liquidity differs.", planningQuestion: "How easy would resale be if you leave the Netherlands?" },
  ],
  expatQuestions: [
    { q: "Can expats get mortgages?", a: "Yes. Many expats obtain Dutch mortgages, but approval depends on income, employment, residency, debts, savings and lender policy." },
    { q: "Can highly skilled migrants buy homes?", a: "Yes, many highly skilled migrants buy property and use Dutch mortgages. A valid permit and stable employment help, but approval is not guaranteed." },
    { q: "How much can I borrow?", a: "Borrowing capacity depends on gross income, partner income, debts, employment stability, interest assumptions and household situation." },
    { q: "Do I need permanent residency?", a: "Not always. Some lenders consider valid temporary residence situations, but policy varies and documentation matters." },
    { q: "What if I have a temporary contract?", a: "You may still have options, especially with an employer statement and stable income history, but lender choice may narrow." },
    { q: "What costs apply?", a: "Budget for adviser fees, valuation, notary, inspection, transfer tax and possible application or guarantee costs." },
    { q: "How long does approval take?", a: "Timelines vary by lender, property and documentation. Build in time for valuation, document checks and final lender approval." },
    { q: "Is buying better than renting?", a: "Buying may suit long-term stable situations. Renting may suit short-term relocations, probation periods and uncertain plans." },
  ],
  questionPromptTips: [
    "Bring these questions to a mortgage adviser before viewing homes seriously.",
    "Ask which answers are lender-specific, tax-year-specific or dependent on your contract.",
    "Save written assumptions so you can update them when salary, city or contract status changes.",
  ],
  relatedGuides: [
    { label: "Netherlands Housing Hub", href: HOUSING_HUB_PATH, status: "live", description: "Start with the full housing ecosystem for expats." },
    { label: "Buy vs Rent Netherlands", href: "/netherlands/housing/buy-vs-rent-netherlands/", status: "live", description: "Decide whether ownership fits before applying for a mortgage." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Property search, bidding, costs and transfer process." },
    { label: "Property Tax Netherlands", href: "/netherlands/taxes/property-tax-netherlands/", status: "live", description: "WOZ value, municipal taxes and recurring owner costs." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Renting alternative while your plans settle." },
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Tax context for deductions and transfer tax." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Income context for borrowing capacity." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Monthly cash-flow context." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Relocation timeline around housing and registration." },
  ] satisfies MortgagesNetherlandsExpatsLink[],
  relatedGuideUseTips: [
    "Start with salary and net salary if you do not know your realistic monthly headroom.",
    "Read buying-house guidance before making offers or comparing notaries.",
    "Use the moving guide if mortgage timing overlaps with BSN, banking or relocation setup.",
  ],
  affiliatePlacementId: "nl-housing-mortgages-expats-support-providers",
  services: [
    { label: "Mortgage advisors", href: "/netherlands/services/mortgage-advisors/", status: "live", description: "Regulated advice, lender selection and mortgage application coordination." },
    { label: "Banks", href: "/netherlands/services/banks/", status: "live", description: "Compare Dutch banks if you want mortgage and everyday banking under one provider." },
    { label: "Real estate agents", href: "/netherlands/services/real-estate-agents/", status: "comingSoon", description: "Buying agents and search support in competitive markets." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "comingSoon", description: "Broader planning around cash flow and major purchases." },
    { label: "Property lawyers", href: "/netherlands/services/property-lawyers/", status: "comingSoon", description: "Contract review and purchase-risk context." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Housing orientation and move logistics alongside mortgage planning." },
  ] satisfies MortgagesNetherlandsExpatsLink[],
  serviceSelectionTips: [
    "Contact at least one licensed mortgage adviser before relying on bank calculators or headline product pages.",
    "Compare bank eligibility, documents, appointment flow and English support directly on official provider sites.",
    "Compare adviser fees, independence and lender access before choosing support.",
    "Use property lawyers for contract or VvE concerns, not mortgage product selection.",
    "Relocation services help with orientation, but they cannot guarantee mortgage approval.",
  ],
  providerContactChecklist: [
    "Ask whether the provider is giving regulated mortgage advice, bank-product information or general housing support.",
    "Confirm fees, commission model, cancellation terms and what is included before sharing documents.",
    "Ask which lenders or products they can compare, especially if you want independent advice.",
    "Keep written assumptions from each provider so you can compare like-for-like.",
  ],
  faq: [
    { q: "Can expats get mortgages in the Netherlands?", a: "Yes. Many expats can get mortgages in the Netherlands, but every application is assessed individually based on income, employment, residency situation, debts, savings and lender policy." },
    { q: "Can highly skilled migrants buy property?", a: "Yes. Highly skilled migrants can buy Dutch property and may qualify for a mortgage when their income, permit, employment contract and financial profile meet lender requirements." },
    { q: "Do temporary contracts qualify?", a: "Temporary contracts can still qualify in some cases, especially with an employer statement and stable employment history. Some lenders may be stricter during probation or short contracts." },
    { q: "How much can I borrow?", a: "Borrowing capacity depends on gross salary, partner income, debts, employment stability, interest assumptions and household situation. A mortgage adviser can estimate capacity, but only a lender can approve." },
    { q: "What deposit do I need?", a: "Dutch buyers often need savings for costs beyond the mortgage, such as transfer tax, notary, valuation, inspection and advice fees. Overbidding above valuation may also require extra savings." },
    { q: "What mortgage types exist?", a: "Common structures include annuity and linear mortgages, with fixed or variable interest-rate periods. Interest-only structures may exist in limited contexts and require careful advice." },
    { q: "What costs apply?", a: "Common costs include mortgage adviser fees, valuation, notary, technical inspection, transfer tax and application-related costs. Rates and tax rules can change, so verify officially." },
    { q: "Is buying better than renting?", a: "Buying may suit long-term residents, families and stable employment situations. Renting may suit short assignments, probation periods or newcomers who are still choosing a city." },
  ],
  faqUseTips: [
    "Use the FAQ as a pre-call checklist, then verify personal details with a licensed adviser.",
    "If an answer depends on tax rules or lender policy, assume it can change.",
    "Keep approval, tax and investment decisions separate; this page is planning guidance only.",
  ],
  officialSources: [
    { label: "AFM", href: "https://www.afm.nl/en", description: "Dutch financial markets authority and consumer information about financial products and advice." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information for housing, residency and public services." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Official tax information, including transfer tax and mortgage-related tax topics." },
    { label: "Kadaster", href: "https://www.kadaster.nl/", description: "Dutch land registry and property-registration information." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official practical information for living and working in the Netherlands." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Official Dutch government information with international context." },
  ],
  sourcesDisclaimer:
    "Mortgage rules, affordability calculations and tax regulations may change. Always verify current requirements with official sources and licensed professionals.",
  sourceVerificationTips: [
    "Use AFM for financial advice and consumer-protection context.",
    "Use Belastingdienst for transfer tax and mortgage-interest deduction rules.",
    "Use Kadaster and the notary process for ownership and registration checks.",
  ],
  exploreNextCards: [
    { label: "Buy vs Rent", href: "/netherlands/housing/buy-vs-rent-netherlands/", status: "live", description: "Compare renting and buying before moving deeper." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Understand offers, costs, notary transfer and Dutch purchase steps." },
    { label: "Property Tax", href: "/netherlands/taxes/property-tax-netherlands/", status: "live", description: "Plan WOZ and recurring local ownership costs." },
    { label: "Housing Costs", href: "/netherlands/housing/housing-costs-netherlands/", status: "comingSoon", description: "Future guide to recurring housing costs." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Plan mortgage capacity from realistic salary ranges." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare city pressure before choosing where to buy." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Connect mortgage planning to relocation timing." },
  ] satisfies MortgagesNetherlandsExpatsLink[],
} as const;
