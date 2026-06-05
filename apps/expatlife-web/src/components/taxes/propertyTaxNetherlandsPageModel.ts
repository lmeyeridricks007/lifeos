export const PROPERTY_TAX_NETHERLANDS_PATH = "/netherlands/taxes/property-tax-netherlands/" as const;
export const PROPERTY_TAX_NETHERLANDS_LEGACY_PATH = "/netherlands/property-tax-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const MORTGAGES_NETHERLANDS_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/housing/renting-in-the-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type PropertyTaxNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const propertyTaxNetherlandsPage = {
  slug: "property-tax-netherlands",
  path: PROPERTY_TAX_NETHERLANDS_PATH,
  legacyPath: PROPERTY_TAX_NETHERLANDS_LEGACY_PATH,
  publish: true,
  publishDate: "2026-07-19",
  seo: {
    title: "Property Tax in the Netherlands | WOZ, Municipal Taxes & Homeowner Costs",
    description:
      "Learn how property tax works in the Netherlands, including WOZ value, municipal taxes, homeowner costs and what expats should know before buying property.",
    keywords: [
      "property tax netherlands",
      "dutch property tax",
      "house tax netherlands",
      "homeowner tax netherlands",
      "WOZ value netherlands",
      "municipal taxes netherlands",
      "expat property tax netherlands",
      "buying property taxes netherlands",
      "house ownership costs netherlands",
      "property costs netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Property ownership",
    pageTitle: "Property Tax in the Netherlands",
    subtitle:
      "Understand how Dutch property taxes work, including WOZ value, municipal taxes, homeowner costs and what expats should know before buying property.",
    primaryCta: { label: "Understand Property Taxes", href: "#intro" },
    secondaryCta: { label: "Explore Housing Guides", href: HOUSING_HUB_PATH },
    chips: ["WOZ value", "Municipal taxes", "Homeowner costs", "Buying taxes"],
    image: {
      src: "/images/heroes/netherlands-property-tax-hero-v2.png",
      alt: "Photorealistic editorial image of an international homeowner reviewing Dutch municipal property tax and WOZ documents beside canal-side homes.",
    },
  },
  visuals: {
    woz: {
      src: "/images/infographics/netherlands-property-tax-woz-premium-v1.png",
      alt: "Premium ExpatLife infographic explaining WOZ value with a Dutch home, municipal assessment, OZB example, budget impact and adviser checklist.",
      caption: "WOZ value is the valuation anchor many property-related bills and calculations refer back to.",
    },
    municipalCosts: {
      src: "/images/infographics/netherlands-property-tax-municipal-costs-premium-v1.png",
      alt: "Premium ExpatLife infographic explaining municipal and water bills, including OZB, waste collection, sewerage, water board charges and local variation.",
      caption: "Home ownership budgeting should separate recurring municipal and water bills from mortgage payments.",
    },
    buyingCosts: {
      src: "/images/infographics/netherlands-property-tax-buying-costs-premium-v1.png",
      alt: "Premium ExpatLife infographic comparing purchase-day property costs with recurring owner bills after transfer.",
      caption: "Buying taxes and notary-related costs happen at purchase, while local ownership bills continue after transfer.",
    },
    recurringOwnerBudget: {
      src: "/images/infographics/netherlands-property-tax-recurring-owner-budget-premium-v1.png",
      alt: "Premium ExpatLife infographic showing an annual homeowner budget stack with municipal bills, utilities, insurance, maintenance and VvE fees.",
      caption: "A realistic owner budget combines annual local bills, insurance, utilities, maintenance and property-type costs.",
    },
    ownerRenterCity: {
      src: "/images/infographics/netherlands-property-tax-owner-renter-premium-v1.png",
      alt: "Premium ExpatLife infographic comparing homeowner and renter local charges, including municipal charges, water board bills and lease responsibilities.",
      caption: "Taxes and local charges vary by municipality, property type and whether you own or rent.",
    },
    vveApartmentCosts: {
      src: "/images/infographics/netherlands-property-tax-vve-premium-v1.png",
      alt: "Premium ExpatLife infographic explaining Dutch apartment VvE costs, reserve funds, meeting minutes, major maintenance and buyer checks.",
      caption: "For apartment owners, VvE contributions and shared maintenance planning sit beside taxes in the ownership budget.",
    },
    wozObjectionFlow: {
      src: "/images/infographics/netherlands-property-tax-woz-objection-premium-v1.png",
      alt: "Premium ExpatLife infographic showing how to review a WOZ assessment through evidence, deadlines and the municipality route.",
      caption: "If a WOZ assessment looks wrong, the practical first step is evidence and deadline checking through the municipality.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Intro" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#woz", label: "WOZ" },
    { href: "#municipal", label: "Municipal taxes" },
    { href: "#owner-renter", label: "Owner vs renter" },
    { href: "#buying", label: "Buying taxes" },
    { href: "#recurring", label: "Recurring costs" },
    { href: "#cities", label: "Cities" },
    { href: "#expats", label: "Expats" },
    { href: "#vve", label: "VvE" },
    { href: "#challenge", label: "Challenge WOZ" },
    { href: "#questions", label: "Questions" },
    { href: "#housing-costs", label: "Total costs" },
    { href: "#related-guides", label: "Related" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  introPoints: [
    "Property ownership in the Netherlands involves several taxes and recurring costs rather than one single property-tax bill.",
    "Many expats are surprised that municipalities, water boards and national tax rules can all touch property costs in different ways.",
    "WOZ value matters because municipalities use it as a reference point for several calculations. This guide is educational orientation only, not tax, investment or legal advice.",
  ],
  snapshotCards: [
    { label: "WOZ examples", value: "€350k / €500k / €750k homes model differently" },
    { label: "OZB example", value: "0.08% of €500k WOZ = €400" },
    { label: "Owner budget", value: "Often €1.2k-€4.8k+/year before mortgage" },
    { label: "Buying example", value: "2% transfer tax on €500k = €10k" },
    { label: "Location", value: "Costs vary by municipality" },
    { label: "VvE examples", value: "€150-€450+/month for many apartments" },
  ],
  snapshotUseTips: [
    "Separate one-off buying costs from recurring annual ownership costs before comparing homes.",
    "Save every municipal and water-board letter in one folder; expats often receive several bills at different times.",
    "Use WOZ as a planning input, then verify exact local charges on your municipality's website.",
  ],
  wozCards: [
    { title: "Government-assessed value", body: "WOZ is the official assessed value of a property. It is set through the Dutch valuation system and communicated by the municipality." },
    { title: "Used beyond one bill", body: "The WOZ value can affect property ownership taxes, municipal calculations and some national tax contexts." },
    { title: "Not your asking price", body: "WOZ is not always the same as the purchase price, market asking price or bank valuation used for a mortgage." },
  ],
  wozChecklist: [
    "Check the property's WOZ value through the WOZ Waardeloket where available.",
    "Compare the WOZ notice with your address, property type and reference year.",
    "If the value seems wrong, read the municipality's objection process before deadlines pass.",
  ],
  wozCalculationExamples: [
    { wozValue: "€350,000", exampleLocalRate: "0.08%", exampleOzb: "€280/year", whyItMatters: "Small WOZ differences can still change recurring owner bills." },
    { wozValue: "€500,000", exampleLocalRate: "0.08%", exampleOzb: "€400/year", whyItMatters: "Useful mid-range example for comparing apartments and row houses." },
    { wozValue: "€750,000", exampleLocalRate: "0.08%", exampleOzb: "€600/year", whyItMatters: "Higher assessed values magnify percentage-based local charges." },
  ],
  municipalTaxCards: [
    { title: "OZB property tax", body: "Homeowners usually encounter onroerendezaakbelasting, commonly abbreviated OZB. It is linked to ownership and local municipal rules." },
    { title: "Waste collection tax", body: "Municipalities may charge for household waste collection. The bill may depend on household, property or local system." },
    { title: "Sewerage charges", body: "Rioolheffing supports sewerage and water-management infrastructure. Responsibility can differ by municipality and occupancy." },
    { title: "Water board taxes", body: "Waterschappen issue water-system and purification-related taxes separately from the municipality in many cases." },
  ],
  municipalPlanningTips: [
    "Look up both the municipality and the regional water board for the address; they may bill separately.",
    "Check whether the bill is owner-based, user-based or household-based before comparing it with a friend's bill.",
    "If you move mid-year, keep old and new address bills because settlement timing can differ.",
  ],
  municipalBillExamples: [
    { bill: "Municipal assessment", exampleAmount: "€450-€1,250/year", typicalRhythm: "Often annual, sometimes instalments", whatToCheck: "OZB, waste and sewerage lines can be combined." },
    { bill: "Water-board taxes", exampleAmount: "€250-€700/year", typicalRhythm: "Usually separate from municipality", whatToCheck: "Owner and user components can differ by household." },
    { bill: "Renter local charges", exampleAmount: "€200-€600/year", typicalRhythm: "Depends on municipality and rental setup", whatToCheck: "Whether waste/water-board charges are included or direct." },
  ],
  ownerRenterCards: [
    { title: "Homeowners often pay", body: "Property ownership tax, municipal charges, water-board charges, insurance, maintenance and possible VvE fees for apartments." },
    { title: "Renters may still pay", body: "Waste taxes, water-board taxes or local user charges can still appear, depending on the address and rental arrangement." },
    { title: "Contracts matter", body: "A rental agreement may specify which service charges are passed on. Ownership deeds and VvE documents matter for buyers." },
  ],
  ownerRenterTips: [
    "Renters should check which local charges are included in rent, service costs or billed directly.",
    "Buyers should ask the seller, agent or notary which annual local bills are typical for the property.",
    "Apartment buyers should separate municipal taxes from VvE costs; they solve different budget questions.",
  ],
  buyingTaxCards: [
    { title: "Transfer tax", body: "Buying a home may involve overdrachtsbelasting. The applicable rate and exemptions depend on buyer, age, use and current tax rules." },
    { title: "Notary and registration", body: "A civil-law notary handles transfer and land-registry work. These are transaction costs, not recurring municipal taxes." },
    { title: "Mortgage-related costs", body: "Mortgage advice, valuation and deed costs can sit beside tax costs. Keep them separate in your purchase budget." },
  ],
  buyingTaxChecklist: [
    "Ask the notary which buyer-side taxes and registration costs apply before the transfer date.",
    "Verify transfer-tax classification through current Belastingdienst guidance, not old forum examples.",
    "Keep one-off purchase costs separate from annual municipal bills in your cash-flow plan.",
  ],
  buyingTaxExamples: [
    { purchasePrice: "€350,000", ownerOccupiedTransferTaxExample: "€7,000 at 2%", notaryAndRegistrationPlanning: "Often €1,500-€3,000+", note: "Does not include mortgage advice, valuation or inspection." },
    { purchasePrice: "€500,000", ownerOccupiedTransferTaxExample: "€10,000 at 2%", notaryAndRegistrationPlanning: "Often €1,500-€3,000+", note: "Keep this separate from annual municipal bills." },
    { purchasePrice: "€700,000", ownerOccupiedTransferTaxExample: "€14,000 at 2%", notaryAndRegistrationPlanning: "Often €1,500-€3,500+", note: "Classification and exemptions must be verified officially." },
  ],
  homeownerCostCards: [
    { title: "Municipal and water taxes", body: "Recurring bills linked to your municipality, water board, property type and household situation." },
    { title: "Insurance", body: "Buildings insurance is commonly relevant for owners; apartment owners may see some insurance arranged through the VvE." },
    { title: "Maintenance", body: "A common planning rule is to reserve a yearly maintenance buffer instead of treating repairs as surprises." },
    { title: "VvE costs", body: "Apartment owners usually pay monthly VvE contributions for shared maintenance and reserves." },
    { title: "Utilities", body: "Energy, water, internet and local services remain separate from taxes and mortgage repayments." },
    { title: "Major replacements", body: "Roof, windows, heating systems and sustainability upgrades can create lumpy costs over time." },
  ],
  recurringBudgetTips: [
    "Create a monthly set-aside for annual bills so municipal letters do not arrive as surprises.",
    "Model a separate maintenance reserve, especially for older houses or homes with poor energy labels.",
    "For apartments, review VvE documents before assuming the monthly contribution is enough.",
  ],
  annualOwnerBudgetExamples: [
    { profile: "Apartment owner", localTaxesAndWater: "€700-€1,600/year", insuranceMaintenance: "€400-€1,200/year", vve: "€1,800-€5,400/year", annualPlanningRange: "€2,900-€8,200+" },
    { profile: "Row house owner", localTaxesAndWater: "€800-€1,900/year", insuranceMaintenance: "€1,500-€4,000/year", vve: "Usually none", annualPlanningRange: "€2,300-€5,900+" },
    { profile: "Older family home", localTaxesAndWater: "€1,000-€2,400/year", insuranceMaintenance: "€3,000-€8,000+/year", vve: "Usually none", annualPlanningRange: "€4,000-€10,400+" },
  ],
  homeownerBudgetExamples: [
    { situation: "Renter in an apartment", recurringItems: "Waste or water-board user charges, utilities, contents insurance", planningNote: "Check rental contract and municipal bill timing." },
    { situation: "Owner-occupier row house", recurringItems: "OZB, waste, sewerage, water-board taxes, buildings insurance, maintenance", planningNote: "Budget annual local bills separately from monthly mortgage." },
    { situation: "Apartment owner", recurringItems: "Owner taxes, water-board taxes, VvE contribution, insurance via VvE or personal policy", planningNote: "Review VvE reserve fund, minutes and planned maintenance." },
    { situation: "New buyer", recurringItems: "Transfer-related costs first, then annual municipal and owner costs", planningNote: "Keep purchase costs and recurring costs in separate cash buffers." },
  ],
  planningScenarios: [
    {
      title: "Amsterdam apartment buyer",
      profile: "Purchase budget €525,000 · apartment · VvE contribution visible in listing",
      takeaway: "Compare WOZ, VvE reserve, planned maintenance and annual local bills before focusing only on mortgage payment.",
    },
    {
      title: "Rotterdam family row house",
      profile: "Purchase budget €430,000 · owner-occupied family home · garden and roof responsibility",
      takeaway: "Municipal bills may be predictable, but maintenance and insurance should be budgeted as owner responsibilities.",
    },
    {
      title: "Expat renting before buying",
      profile: "Rental apartment · user charges possible · buying timeline within 12 months",
      takeaway: "Track current waste and water-board bills now so the owner budget later does not feel abstract.",
    },
    {
      title: "Newcomer comparing cities",
      profile: "Amsterdam vs Eindhoven vs Groningen · same salary · different property prices",
      takeaway: "WOZ-linked bills are only one input; purchase price, VvE, commute and maintenance can dominate the decision.",
    },
  ],
  cityCards: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", market: "Very high property values", municipalVariation: "Check borough and property type", planningNote: "WOZ and VvE review are especially important for apartments." },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", market: "Mixed housing stock", municipalVariation: "Costs vary by neighbourhood and property", planningNote: "Compare older homes, newer apartments and maintenance exposure." },
    { label: "The Hague", href: "/netherlands/the-hague/", market: "International and coastal demand", municipalVariation: "Local charges can differ by household", planningNote: "Check leasehold, apartment documents and municipality letters." },
    { label: "Utrecht", href: "/netherlands/utrecht/", market: "High competition", municipalVariation: "WOZ can move with market pressure", planningNote: "Budget carefully if stretching for a family home." },
    { label: "Eindhoven", href: "/netherlands/eindhoven/", market: "Tech-driven demand", municipalVariation: "Suburbs can differ materially", planningNote: "Compare commute savings against ownership costs." },
    { label: "Haarlem", href: "/netherlands/haarlem/", market: "Amsterdam commuter premium", municipalVariation: "Older homes can need maintenance", planningNote: "Balance charm, insulation and future repair budget." },
    { label: "Leiden", href: "/netherlands/leiden/", market: "Academic and Randstad demand", municipalVariation: "Historic property details matter", planningNote: "Check monument status, VvE and maintenance before bidding." },
    { label: "Delft", href: "/netherlands/delft/", market: "Student and tech pressure", municipalVariation: "Apartment and house costs differ", planningNote: "Look beyond purchase price to recurring owner costs." },
    { label: "Groningen", href: "/netherlands/groningen/", market: "More moderate than Randstad", municipalVariation: "Local context still matters", planningNote: "Verify municipality and water-board bills for the address." },
    { label: "Arnhem", href: "/netherlands/arnhem/", market: "Regional alternatives", municipalVariation: "Neighbourhood spread can be wide", planningNote: "Include commute, energy performance and maintenance." },
    { label: "Nijmegen", href: "/netherlands/nijmegen/", market: "University-city demand", municipalVariation: "Local rates and services differ", planningNote: "Check annual bills before comparing monthly affordability." },
    { label: "Maastricht", href: "/netherlands/maastricht/", market: "Cross-border context", municipalVariation: "Property type and location matter", planningNote: "Compare Dutch rules with any home-country assumptions." },
  ],
  cityUseTips: [
    "Use city cards as prompts for what to verify locally, not as tax-rate comparisons.",
    "Compare commute, property type and VvE exposure alongside local tax bills.",
    "Open the city guide before shortlisting neighbourhoods, then verify actual bills with the municipality.",
  ],
  expatChallenges: [
    { title: "Municipal letters are in Dutch", body: "Bills and WOZ decisions often use local-government terminology. Translate carefully before ignoring a deadline." },
    { title: "Home-country assumptions mislead", body: "US property tax, UK council tax, South African rates and Asian property systems do not map neatly onto Dutch rules." },
    { title: "Annual bills arrive separately", body: "A water-board bill, municipal assessment and VvE contribution may not arrive on the same rhythm." },
    { title: "Buying costs are not the end", body: "Transfer and notary costs happen at purchase, but ownership also creates recurring local and maintenance costs." },
  ],
  expatLetterChecklist: [
    "Translate the sender first: municipality, water board, tax authority, VvE or insurer.",
    "Check whether the letter is a bill, assessment, reminder, objection decision or payment plan.",
    "Save PDFs and payment confirmations in a property folder for future tax returns or sale preparation.",
  ],
  vveCards: [
    { title: "VvE contribution", body: "Apartment owners usually pay a monthly contribution to the Vereniging van Eigenaars for shared building costs." },
    { title: "Reserve fund", body: "A healthy reserve can reduce surprise contributions when shared repairs are needed." },
    { title: "Minutes and plans", body: "Review recent meeting minutes and maintenance plans before buying an apartment." },
  ],
  vveChecklist: [
    "Review the VvE reserve fund, monthly contribution and planned maintenance before bidding.",
    "Ask whether major works are already approved, expected or under discussion.",
    "Separate private apartment costs from shared building costs when comparing two listings.",
  ],
  vveCostExamples: [
    { apartmentType: "Small/simple apartment", monthlyVve: "€150-€250/month", annualCost: "€1,800-€3,000/year", whatToCheck: "Low fees can mean limited reserves or few shared services." },
    { apartmentType: "Typical city apartment", monthlyVve: "€250-€450/month", annualCost: "€3,000-€5,400/year", whatToCheck: "Review reserve fund, minutes and planned works." },
    { apartmentType: "Large/high-service building", monthlyVve: "€450-€800+/month", annualCost: "€5,400-€9,600+/year", whatToCheck: "Elevators, parking, heating systems and major works can drive fees." },
  ],
  challengeWozSteps: [
    { step: "1", title: "Read the WOZ decision", body: "Check address, reference date, property details and the municipality's stated process." },
    { step: "2", title: "Compare evidence", body: "Look at comparable properties, official data and any obvious property-detail errors." },
    { step: "3", title: "Watch the deadline", body: "Municipality objection windows are time-limited. Verify the current process with the municipality." },
    { step: "4", title: "Avoid generic claims", body: "If you object, use property-specific evidence. This page does not provide legal advice." },
  ],
  wozTimingExamples: [
    { received: "1 February", exampleDeadline: "Around mid-March if a 6-week window applies", whatToDo: "Check the exact date and objection instruction on the municipality notice." },
    { received: "15 March", exampleDeadline: "Around late April if a 6-week window applies", whatToDo: "Gather comparable properties and property-detail evidence early." },
    { received: "After moving in", exampleDeadline: "Use the date on the decision, not your move-in date", whatToDo: "Ask the municipality how the process works for the current owner." },
  ],
  expatQuestions: [
    { q: "What is WOZ value?", a: "WOZ is the official assessed value of a Dutch property, used by municipalities and other authorities for several calculations." },
    { q: "What property taxes apply?", a: "Common costs can include OZB, waste collection, sewerage charges and water-board taxes, depending on ownership, occupancy and municipality." },
    { q: "Are municipal taxes expensive?", a: "They vary by municipality, household and property. Check the exact address through official municipal information rather than using a national average." },
    { q: "Do renters pay taxes too?", a: "Renters may pay user-related local charges such as waste or water-board taxes, depending on the municipality and rental arrangement." },
    { q: "What is OZB?", a: "OZB is onroerendezaakbelasting, a municipal property tax commonly relevant for homeowners." },
    { q: "What are VvE costs?", a: "VvE contributions are apartment owners association costs for shared maintenance and reserves. They are separate from property taxes." },
    { q: "Can I challenge my WOZ value?", a: "Property owners may be able to object within a deadline if the assessment appears incorrect. Follow official municipal instructions." },
    { q: "How much are yearly homeowner costs?", a: "There is no single national number. Budget for local taxes, insurance, maintenance, utilities and VvE where applicable." },
  ],
  questionUseTips: [
    "Use these questions before a viewing, not after you have already stretched your budget.",
    "Write down which answers are property-specific, municipality-specific or tax-year-specific.",
    "If an answer affects a purchase decision, verify it with the municipality, notary or adviser.",
  ],
  costComparisonRows: [
    { cost: "Mortgage payment", exampleRange: "Example: €2,000-€3,200/month", type: "Recurring monthly", whoChecks: "Mortgage adviser or lender", risk: "Focusing only here hides ownership costs." },
    { cost: "Municipal taxes", exampleRange: "Example: €450-€1,250/year", type: "Recurring annual or instalments", whoChecks: "Municipality", risk: "Rates and billing differ by location." },
    { cost: "Water-board taxes", exampleRange: "Example: €250-€700/year", type: "Recurring", whoChecks: "Regional water board", risk: "Often separate from municipality bills." },
    { cost: "Utilities", exampleRange: "Example: €175-€350/month", type: "Recurring monthly", whoChecks: "Suppliers and meters", risk: "Energy performance can change the budget." },
    { cost: "Insurance", exampleRange: "Example: €20-€80/month", type: "Recurring", whoChecks: "Insurer or VvE", risk: "Coverage responsibility differs for houses and apartments." },
    { cost: "Maintenance and VvE", exampleRange: "Example: €150-€800+/month equivalent", type: "Recurring plus lumpy repairs", whoChecks: "Inspector, VvE documents", risk: "Large repairs can be easy to underestimate." },
  ],
  relatedGuides: [
    { label: "Netherlands Housing Hub", href: HOUSING_HUB_PATH, status: "live", description: "Start with the full housing ecosystem for expats." },
    { label: "Buy vs Rent Netherlands", href: "/netherlands/housing/buy-vs-rent-netherlands/", status: "live", description: "Decide whether ownership fits before reviewing recurring costs." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Understand bidding, transfer, costs and the purchase process." },
    { label: "Mortgages for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Connect property taxes to mortgage affordability and buyer costs." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Compare renter charges before deciding to buy." },
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Broader tax context for expats and homeowners." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Plan housing around registration, banking and arrival admin." },
  ] satisfies PropertyTaxNetherlandsLink[],
  relatedGuideUseTips: [
    "Read the mortgage guide before estimating affordability, then return here for recurring owner costs.",
    "Use the buying guide for process and notary timing; use this page for what happens after ownership starts.",
    "Open the taxes hub if WOZ, transfer tax or tax-return questions expand beyond property costs.",
  ],
  services: [
    { label: "Mortgage advisors", href: "/netherlands/services/mortgage-advisors/", status: "comingSoon", description: "Mortgage capacity, buyer costs and lender process context." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Personal tax questions, returns and property-related tax context." },
    { label: "Real estate agents", href: "/netherlands/services/real-estate-agents/", status: "comingSoon", description: "Buying support and local property-market context." },
    { label: "Property lawyers", href: "/netherlands/services/property-lawyers/", status: "comingSoon", description: "Contract, ownership and dispute context where legal review is needed." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "comingSoon", description: "Wider planning around ownership costs and cash buffers." },
  ] satisfies PropertyTaxNetherlandsLink[],
  serviceSelectionTips: [
    "Use tax advisors for personal tax treatment, not for property inspections or bidding strategy.",
    "Use notaries and property lawyers for transfer, title, contract or VvE concerns.",
    "Use mortgage advisors for borrowing and monthly affordability, then layer annual owner costs on top.",
  ],
  faq: [
    { q: "What is property tax in the Netherlands?", a: "There is not one single national property-tax bill. Homeowners may deal with municipal property tax, waste and sewerage charges, water-board taxes, and buying-related taxes such as transfer tax." },
    { q: "What is WOZ value?", a: "WOZ value is the official assessed value of a property. Municipalities use it for calculations including property-related taxes and some wider tax contexts." },
    { q: "What municipal taxes apply?", a: "Common local charges include OZB for homeowners, waste collection tax and sewerage charges. Exact charges vary by municipality." },
    { q: "Do renters pay taxes too?", a: "Renters can still receive some user-related local bills, such as waste or water-board taxes, depending on the municipality and rental agreement." },
    { q: "What is OZB?", a: "OZB stands for onroerendezaakbelasting, a municipal property tax commonly paid by property owners." },
    { q: "Can I challenge my WOZ value?", a: "Property owners may be able to object to a WOZ assessment within a deadline. Follow the official municipality process and use property-specific evidence." },
    { q: "What recurring homeowner costs exist?", a: "Recurring costs can include municipal taxes, water-board taxes, insurance, utilities, maintenance and VvE contributions for apartments." },
    { q: "What taxes apply when buying property?", a: "Transfer tax may apply when buying, alongside notary and registration costs. Verify current rules through Belastingdienst and your notary." },
  ],
  faqUseTips: [
    "Treat FAQ answers as orientation; local bills and personal tax positions still need verification.",
    "If you are comparing homes, use the recurring-cost table rather than relying on a single FAQ answer.",
    "For deadlines, rates or objections, go straight to the municipality or official source linked below.",
  ],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Official Dutch tax information, including transfer tax and home-ownership tax topics." },
    { label: "WOZ Waardeloket", href: "https://www.wozwaardeloket.nl/", description: "Official public WOZ value lookup for many Dutch properties." },
    { label: "Kadaster", href: "https://www.kadaster.nl/", description: "Dutch land registry and property-registration information." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official central government information about living, housing and public services." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official practical information about Dutch rules and government processes." },
    { label: "Municipal websites", href: "https://www.government.nl/topics/municipalities", description: "Use your local municipality website for current local tax bills, deadlines and objection instructions." },
  ],
  sourcesDisclaimer:
    "Property tax rules, WOZ values and municipal charges may vary and change over time. Always verify current information through official resources and municipalities.",
  sourceVerificationTips: [
    "Use Belastingdienst for national tax rules and transfer-tax classification.",
    "Use WOZ Waardeloket or your municipality for WOZ information and objection deadlines.",
    "Use your municipality and regional water board for actual local charges, payment methods and bill timing.",
  ],
  exploreNextCards: [
    { label: "Buy vs Rent", href: "/netherlands/housing/buy-vs-rent-netherlands/", status: "live", description: "Compare ownership and renting before buying." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Move from tax concepts into the purchase process." },
    { label: "Mortgages for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Connect ownership costs to borrowing and cash flow." },
    { label: "Housing Costs", href: "/netherlands/housing/housing-costs-netherlands/", status: "comingSoon", description: "Future deeper budget guide for owners and renters." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare city context before buying." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Coordinate housing with relocation admin." },
  ] satisfies PropertyTaxNetherlandsLink[],
} as const;
