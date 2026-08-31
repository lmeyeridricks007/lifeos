export const HOUSING_NETHERLANDS_PATH = "/netherlands/housing/" as const;
export const HOUSING_HUB_PATH = HOUSING_NETHERLANDS_PATH;

export const RENTING_NETHERLANDS_PATH = "/netherlands/housing/renting-in-the-netherlands/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const MORTGAGES_NETHERLANDS_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const BUY_VS_RENT_NETHERLANDS_PATH = "/netherlands/housing/buy-vs-rent-netherlands/" as const;
export const PROPERTY_TAX_NETHERLANDS_PATH = "/netherlands/taxes/property-tax-netherlands/" as const;
export const HOUSING_COSTS_NETHERLANDS_PATH = "/netherlands/housing/housing-costs-netherlands/" as const;
export const RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH =
  "/netherlands/housing/rental-contracts-and-deposits-netherlands/" as const;
export const RENTAL_SCAMS_NETHERLANDS_PATH = "/netherlands/housing/rental-scams-netherlands/" as const;
export const SOCIAL_HOUSING_NETHERLANDS_PATH = "/netherlands/housing/social-housing-netherlands/" as const;
export const TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH = "/netherlands/housing/temporary-accommodation-netherlands/" as const;
export const NEIGHBORHOODS_NETHERLANDS_PATH = "/netherlands/housing/neighborhoods/" as const;

export const UTILITIES_NETHERLANDS_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const ENERGY_AND_WATER_NETHERLANDS_PATH = "/netherlands/utilities/energy-and-water-netherlands/" as const;
export const INTERNET_AND_MOBILE_NETHERLANDS_PATH = "/netherlands/utilities/internet-and-mobile-netherlands/" as const;
export const INSURANCE_PROVIDERS_PATH = "/netherlands/services/insurance-providers/" as const;
export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration/" as const;
export const DIGID_AWARENESS_PATH = "/netherlands/digid-awareness/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const RENT_ALLOWANCE_PATH = "/netherlands/taxes/rent-allowance-netherlands/" as const;
export const RENT_AFFORDABILITY_TOOL_PATH = "/netherlands/housing/tools/rent-affordability-calculator/" as const;

export type HousingLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type ComparisonRow = {
  factor: string;
  renting: string;
  buying: string;
};

export type HousingCostExample = {
  profile: string;
  priceRange: string;
  details: readonly string[];
};

export type CityCostRow = {
  city: string;
  studio: string;
  oneBed: string;
  twoBed: string;
  family: string;
};

export type RentBenchmarkCity = {
  city: string;
  href: string;
  eurPerSqm: string;
  studio: string;
  oneBed: string;
  twoBed: string;
  note: string;
};

export type CityHousingCard = {
  city: string;
  population: string;
  href: string;
  housingProfile: string;
  affordability: string;
  internationalAppeal: string;
};

export type SetupPhase = {
  phase: string;
  tasks: string[];
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-housing-${slug}-${version}.png`,
  alt,
  caption,
});

export const housingNetherlandsPage = {
  slug: "housing",
  path: HOUSING_NETHERLANDS_PATH,
  hubPath: HOUSING_HUB_PATH,
  publish: true,
  publishDate: "2026-10-08",
  seo: {
    title: "Housing in the Netherlands | Complete Expat Guide",
    description:
      "Everything expats need to know about housing in the Netherlands, including renting, buying, costs, mortgages, neighborhoods, utilities and finding accommodation.",
    keywords: [
      "housing netherlands",
      "housing for expats netherlands",
      "living netherlands housing",
      "netherlands housing market",
      "accommodation netherlands",
      "renting netherlands",
      "buying house netherlands",
      "expat housing netherlands",
      "apartments netherlands",
      "houses netherlands",
    ],
  },
  hero: {
    eyebrow: "Housing hub",
    pageTitle: "Housing in the Netherlands",
    subtitle:
      "Everything you need to know about renting, buying and finding accommodation in the Netherlands as an expat.",
    primaryCta: { label: "Explore Housing Options", href: "#intro" },
    secondaryCta: { label: "Compare Renting vs Buying", href: "#rent-vs-buy" },
    image: {
      src: "/images/heroes/netherlands-housing-hero-v2.png",
      alt: "Photo-realistic scene of a quiet Dutch residential street with brick apartments and townhouses, bicycles parked along a tree-lined canal sidewalk, and an…",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#rent-bands", label: "Rent € bands" },
    { href: "#market", label: "Market" },
    { href: "#rent-vs-buy", label: "Rent vs buy" },
    { href: "#renting", label: "Renting" },
    { href: "#buying", label: "Buying" },
    { href: "#costs", label: "Costs" },
    { href: "#cities", label: "Cities" },
    { href: "#temporary", label: "Temporary" },
    { href: "#utilities", label: "Utilities" },
    { href: "#insurance", label: "Insurance" },
    { href: "#municipality", label: "Registration" },
    { href: "#mortgages", label: "Mortgages" },
    { href: "#life-stage", label: "Life stage" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#guides", label: "Guides" },
    { href: "#future-guides", label: "Future guides" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    overview: visual(
      "overview",
      "premium-v2",
      "Premium infographic map of Dutch housing options for expats including renting, buying, costs and city choice.",
      "Use this overview to understand how renting, buying, costs and location fit together before you search."
    ),
    market: visual(
      "market",
      "premium-v2",
      "Premium infographic explaining how the Dutch housing market works for owner-occupied, rental and social housing.",
      "Supply, demand and housing type determine how competitive your search will be in each city."
    ),
    rentVsBuy: visual(
      "rent-vs-buy",
      "premium-v2",
      "Premium infographic comparing renting versus buying in the Netherlands for expats.",
      "Monthly cost, flexibility, upfront cash and stay horizon are the core decision factors."
    ),
    renting: visual(
      "renting",
      "premium-v2",
      "Premium infographic explaining renting apartments and houses in the Netherlands.",
      "Deposits, income checks, furnished options and competition vary by city and property type."
    ),
    buying: visual(
      "buying",
      "premium-v2",
      "Premium infographic explaining buying property in the Netherlands for expats.",
      "Transaction costs, mortgage readiness and long-term planning matter before you bid."
    ),
    costs: visual(
      "costs",
      "premium-v2",
      "Premium infographic showing example housing cost ranges by property type and Dutch city.",
      "Example ranges are orientation only — verify current listings and local market conditions."
    ),
    cities: visual(
      "cities",
      "premium-v2",
      "Premium infographic map of popular Dutch cities for expat housing with affordability notes.",
      "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven differ sharply in rent pressure and commute patterns."
    ),
    temporary: visual(
      "temporary",
      "premium-v2",
      "Premium infographic explaining temporary accommodation options when first arriving in the Netherlands.",
      "Hotels, serviced apartments and short stays bridge the gap before a long-term lease or purchase."
    ),
    utilities: visual(
      "utilities",
      "premium-v2",
      "Premium infographic connecting Dutch housing setup with electricity, gas, water, internet and mobile.",
      "Utilities are usually separate from rent — budget and arrange setup early after move-in."
    ),
    insurance: visual(
      "insurance",
      "premium-v2",
      "Premium infographic explaining housing-related insurance for renters and owners in the Netherlands.",
      "Contents, home and liability cover address different risks for tenants and owners."
    ),
    municipality: visual(
      "municipality",
      "premium-v2",
      "Premium infographic linking housing to municipality registration, BSN and DigiD setup.",
      "Your registered address must match where you live for BSN, post and many official processes."
    ),
    mortgages: visual(
      "mortgages",
      "premium-v2",
      "Premium infographic explaining mortgage considerations for expats in the Netherlands.",
      "Income stability, contract type and advisor support shape mortgage eligibility and borrowing capacity."
    ),
    lifeStage: visual(
      "life-stage",
      "premium-v2",
      "Premium infographic showing housing options by life stage for students, professionals, families and entrepreneurs.",
      "The best housing route depends on stay horizon, budget, family needs and work flexibility."
    ),
    checklist: visual(
      "checklist",
      "premium-v2",
      "Premium infographic checklist for housing preparation before moving to the Netherlands.",
      "Budget, city choice, documentation and temporary accommodation should be decided before arrival."
    ),
    mistakes: visual(
      "mistakes",
      "premium-v2",
      "Premium infographic showing common expat housing mistakes in the Netherlands.",
      "Late searches, ignored utilities and Amsterdam-only focus are frequent relocation errors."
    ),
  },
  /** E4: keep only the snapshot bullet list still rendered under the intro visual. */
  visualTextDetails: {
    snapshot: {
      title: "At a glance",
      items: [
        "The rental market is competitive in major cities, especially Amsterdam and Utrecht.",
        "Home ownership is common; expats may qualify for mortgages with stable income.",
        "Monthly housing costs vary widely by city, property size and energy label.",
        "Utilities, internet and municipal charges are often billed separately from rent.",
        "Location affects commute, schools, international community and listing volume.",
      ],
    },
  },
  intro: {
    heading: "Understanding Housing in the Netherlands",
    paragraphs: [
      "Finding housing is one of the biggest practical decisions when moving to the Netherlands. Whether you plan to rent an apartment in Amsterdam, buy a family home near Utrecht or secure temporary accommodation before your first viewing week, the market works differently from many countries newcomers know.",
      "Most expats start by renting while they learn city neighbourhoods, commute patterns and Dutch rental norms. Buying becomes attractive when stay plans stabilise, income supports a mortgage and you understand transaction costs and owner responsibilities.",
      "This hub explains how the Dutch housing market works, what costs to expect, how cities differ and which deeper guides to use next. It is practical orientation only — not legal, mortgage or financial advice.",
    ],
  },
  quickAnswer: {
    summary:
      "Most newcomers rent first. Orientation bands (as of Q1 2026): Amsterdam 1-bed ~€1,400–2,200+, Eindhoven ~€900–1,550, Groningen ~€800–1,400 — utilities usually extra.",
    buyingWhen: [
      "Staying long term with stable employment or income",
      "Financially established with savings for transaction costs",
      "Mortgage eligible with documentation lenders accept",
    ],
    note: "Bands are planning ranges, not quotes. Free-sector €/m² signals cite Pararius Huurmonitor Q1 2026 — verify live listings for your neighbourhood.",
  },
  snapshotCards: [
    { title: "Competitive rental market", body: "Major cities see strong demand for apartments and family homes — speed and preparation matter." },
    { title: "Home ownership is common", body: "Many Dutch households own property; expats may buy when stay plans and financing align." },
    { title: "Mortgage options exist for expats", body: "Stable employment, contract type and advisor support shape eligibility and borrowing capacity." },
    { title: "Housing costs vary widely", body: "Amsterdam and Utrecht sit at the top of rent ranges; regional cities often offer more space per euro." },
    { title: "Utilities are usually separate", body: "Electricity, gas, water, internet and waste are typically arranged separately from the lease." },
    { title: "Location matters significantly", body: "Commute, schools, international community and listing volume differ sharply by city and neighbourhood." },
  ],
  citiesSection: {
    heading: "Popular Cities for Expats",
    paragraphs: [
      "City choice shapes rent pressure, commute time, school options and how quickly you can find a home. Amsterdam and Utrecht are among the tightest markets; Rotterdam, The Hague and Eindhoven often offer more space per euro with strong international communities.",
      "Haarlem, Leiden and Delft suit commuters and university profiles. Compare city guides alongside this hub before narrowing your search area.",
    ],
  },
  lifeStageSection: {
    heading: "Which Housing Option Fits You?",
    paragraphs: [
      "Students, young professionals, families, entrepreneurs, retirees and digital nomads often need different housing types, contract lengths and registration setups. Match your stay horizon and budget before choosing a property type or city.",
    ],
  },
  checklistSection: {
    heading: "Housing Checklist Before Moving",
    paragraphs: [
      "Use this sequence to prepare budget, city choice, documentation and temporary accommodation before arrival. The phases below mirror how most expats actually search, sign and settle in.",
    ],
  },
  mistakesSection: {
    heading: "Common Housing Mistakes",
    paragraphs: [
      "These are the housing errors expats most often make when searching, signing and settling in the Netherlands. Avoiding them saves time, money and registration delays.",
    ],
  },
  guidesSection: {
    heading: "Housing Guides",
    paragraphs: [
      "Continue into deeper guides for renting, buying, mortgages, property tax, utilities and insurance. Each guide expands one part of the housing journey introduced on this page.",
    ],
  },
  futureGuidesSection: {
    heading: "Deeper Housing Guides",
    paragraphs: [
      "These focused child guides are planned as the housing cluster expands. Use this hub for the full overview until they ship — each planned guide will go deeper on one housing topic.",
    ],
  },
  faqSection: {
    heading: "Housing FAQ",
    paragraphs: [
      "Use these quick answers for orientation before checking listings, contracts and official sources. Open the linked guides when a topic needs more detail.",
    ],
  },
  sourcesSection: {
    heading: "Official Housing Resources",
    paragraphs: [
      "Housing regulations, mortgage rules and local requirements can change over time. Always verify current information with official sources before signing contracts or making offers.",
    ],
  },
  relatedSection: {
    heading: "Related Guides",
    paragraphs: [
      "Housing connects to your wider relocation plan — moving timeline, city choice, utilities setup, municipality registration and tax topics often move together.",
    ],
  },
  marketSupplyTips: [
    "Randstad cities often have more rental applicants than available listings in peak seasons.",
    "Social housing waiting lists can run for years — most newcomers target private rentals first.",
    "Student intake periods (August–September, January) tighten room and studio supply.",
    "Owner-occupied suburbs may offer more family homes but require a car or longer commute.",
    "Temporary and furnished products fill arrival windows but may limit registration options.",
  ],
  rentingDocumentChecklist: [
    "Valid passport or EU ID card",
    "Employment contract and recent payslips (often three months)",
    "Bank statements or proof of savings where requested",
    "Previous landlord reference or employer letter if you are new to the Netherlands",
    "Copy of reservation deposit terms before transferring money",
    "Written confirmation that gemeente registration is allowed at the address",
  ],
  temporaryPlanningTips: [
    "Book at least two to four weeks of temporary stay before your first viewing week.",
    "Confirm whether the address supports BSN registration if you need it immediately.",
    "Keep receipts and booking confirmations for employer relocation claims.",
    "Use short stays to visit neighbourhoods before committing to a long-term lease.",
    "Peak relocation months are August–September and January — reserve early.",
  ],
  insuranceByRoleTips: [
    "Renters: contents insurance (inboedel) plus liability cover are the usual starting point.",
    "Owners: add building insurance (opstal) and confirm lender requirements before transfer.",
    "Shared houses: check whether your belongings and liability are covered individually.",
    "Furnished rentals: confirm what the landlord insures versus what you must arrange.",
    "Compare policy excess, water damage cover and theft limits before buying.",
  ],
  mortgagePreApprovalSteps: [
    "Gather income proof, employment contract and recent bank statements.",
    "Ask an expat mortgage advisor which lenders accept your nationality and contract type.",
    "Estimate borrowing capacity and monthly costs including taxes and insurance.",
    "Request a pre-approval or financing certificate before bidding in tight markets.",
    "Budget transfer tax, notary fees and inspection costs separately from the mortgage.",
  ],
  lifeStageDecisionTips: [
    "Students: prioritise proximity to campus, registration rules and contract end dates.",
    "Young professionals: weigh city access against rent and viewing competition.",
    "Families: combine school zones, garden space and dual commutes in one budget.",
    "Entrepreneurs: confirm address suitability for registration and client meetings.",
    "Short-stay profiles: verify visa, tax and registration limits before signing.",
  ],
  market: {
    heading: "How the Housing Market Works",
    paragraphs: [
      "The Dutch housing market combines owner-occupied homes, private rentals, social housing, student products and temporary accommodation. Supply and demand vary by region — dense cities face tight rental inventory while some commuter towns offer more family homes.",
      "Owner-occupied housing dominates many suburban areas. Private rentals include studios, apartments and houses listed on platforms, agencies and social networks. Social housing (sociale huur) has income ceilings and long waiting lists, making it less accessible for many newcomers on arrival.",
      "Student housing, short-stay apartments and shared accommodation fill specific niches. Understanding which segment you target helps set realistic timelines and documentation expectations before you arrive.",
    ],
  },
  marketSegments: [
    { title: "Owner-occupied housing", body: "Freehold and apartment ownership with VvE rules in many buildings." },
    { title: "Private rentals", body: "Market-rate apartments and houses with landlord contracts and deposits." },
    { title: "Social housing", body: "Income-capped rentals with municipal or housing corporation allocation — long waits." },
    { title: "Student housing", body: "Rooms and studios linked to universities and academic calendars." },
    { title: "Temporary housing", body: "Hotels, serviced apartments and short stays for arrival windows." },
    { title: "Shared accommodation", body: "Rooms in shared houses — check contract and registration rules carefully." },
  ] satisfies TipCard[],
  rentVsBuy: {
    heading: "Renting or Buying?",
    paragraphs: [
      "There is no universal answer for every expat. Renting preserves flexibility while you learn the market; buying can suit longer stays when mortgage eligibility, savings and stability align. Compare monthly cash flow, upfront costs, maintenance responsibility and exit flexibility before deciding.",
      "Many international professionals rent for the first one to three years, then reassess once employment, family plans and city preference are clearer. Use the buy vs rent guide for a deeper financial comparison.",
    ],
  },
  rentVsBuyComparison: [
    { factor: "Monthly costs", renting: "Rent plus utilities and insurance; no mortgage interest", buying: "Mortgage, taxes, insurance, maintenance and VvE charges" },
    { factor: "Flexibility", renting: "Higher — easier to relocate for work or family changes", buying: "Lower — selling takes time and transaction costs" },
    { factor: "Upfront costs", renting: "Deposit, agency fees sometimes, furnishing", buying: "Transfer tax, notary, advisor, inspection and moving costs" },
    { factor: "Long-term wealth", renting: "No property equity; may suit short or uncertain stays", buying: "Potential equity build; tied to market and hold period" },
    { factor: "Maintenance", renting: "Landlord responsible for major repairs in most cases", buying: "Owner responsible for upkeep, VvE and major replacements" },
    { factor: "Mortgage requirements", renting: "Income checks for lease approval", buying: "Lender eligibility, valuation, NHG rules and documentation" },
  ] satisfies ComparisonRow[],
  renting: {
    heading: "Renting a Home",
    paragraphs: [
      "Renting is the most common starting point for expats. Listings include studios, apartments and houses in both furnished and unfurnished condition. Furnished options reduce setup time but often cost more monthly.",
      "Landlords and agencies frequently require proof of income, employment contracts and sometimes guarantors. Deposits typically equal one to two months' rent depending on contract terms. Competition is intense in Amsterdam, Utrecht and parts of The Hague — respond quickly and prepare documents in advance.",
      "Read rental contracts carefully for service costs, notice periods, maintenance duties and permission to register your address at the gemeente.",
    ],
  },
  rentingTopics: [
    { title: "Apartments", body: "Common in cities — check VvE costs, energy label and storage access." },
    { title: "Houses", body: "More common in suburbs; verify garden, parking and landlord maintenance scope." },
    { title: "Furnished rentals", body: "Higher monthly cost but faster move-in for short or uncertain stays." },
    { title: "Unfurnished rentals", body: "Lower rent but requires furniture, utilities setup and time to equip." },
    { title: "Income requirements", body: "Often three to four times monthly rent in gross income — verify listing rules." },
  ] satisfies TipCard[],
  buying: {
    heading: "Buying Property",
    paragraphs: [
      "Buying a home in the Netherlands involves mortgage preparation, property search, bidding strategy, technical inspection and notarial transfer. Transaction costs (kosten koper) add materially to the purchase price for buyers.",
      "Expats should understand energy labels, apartment VvE documents and regional overbidding norms before making offers. Long-term planning includes property tax, insurance and maintenance reserves after the keys handover.",
    ],
  },
  buyingTopics: [
    { title: "Mortgages", body: "Expat eligibility depends on income stability, contract type and lender policy." },
    { title: "Down payment", body: "Savings for transaction costs and any gap between offer and valuation." },
    { title: "Transaction costs", body: "Transfer tax, notary, advisor and inspection fees add to upfront cash needs." },
    { title: "Long-term planning", body: "Budget owner insurance, maintenance, VvE and municipal charges after purchase." },
    { title: "Bidding strategy", body: "Competitive markets may require quick decisions — pre-approval helps." },
  ] satisfies TipCard[],
  housingCosts: {
    heading: "How Much Does Housing Cost?",
    paragraphs: [
      "Housing is usually the largest monthly line item for expats. Costs depend on city, bedrooms, energy label and whether utilities are included. Use the dated Amsterdam vs Eindhoven vs Groningen bands above for a first budget frame, then verify live listings.",
      "The broader city table below adds Rotterdam, The Hague and Utrecht. All monthly columns are ExpatLife orientation ranges — not quotes or guarantees.",
    ],
  },
  rentBenchmarks: {
    id: "rent-bands",
    heading: "Rent € bands: Amsterdam vs Eindhoven vs Groningen",
    asOfLabel: "As of Q1 2026",
    asOfPeriod: "2026-Q1",
    sourceName: "Pararius Huurmonitor — free-sector new lettings",
    sourceHref: "https://www.pararius.com/news/dutch-rental-prices-outpace-house-prices",
    nationalSignal: "National free-sector average ~€1,892/month for new lettings (Pararius Q1 2026).",
    methodology:
      "€/m² signals come from Pararius Huurmonitor Q1 2026 (Amsterdam and Eindhoven city; Groningen reported at province level). Monthly studio / 1-bed / 2-bed columns are ExpatLife orientation bands for private-market planning, aligned with our city guides — not average asking prices for a specific flat size. Utilities, service costs and furnished premiums are usually extra.",
    cities: [
      {
        city: "Amsterdam",
        href: "/netherlands/amsterdam/",
        eurPerSqm: "€28.53/m²",
        studio: "€1,200–1,800+",
        oneBed: "€1,400–2,200+",
        twoBed: "€1,900–2,800+",
        note: "Highest free-sector €/m² among major cities; strong competition for listings.",
      },
      {
        city: "Eindhoven",
        href: "/netherlands/eindhoven/",
        eurPerSqm: "€19.55/m²",
        studio: "€850–1,300",
        oneBed: "€900–1,550",
        twoBed: "€1,300–1,900",
        note: "Among strongest YoY €/m² rises in G5 (Pararius Q1 2026); often more space per euro than Amsterdam.",
      },
      {
        city: "Groningen",
        href: "/netherlands/groningen/",
        eurPerSqm: "~€17.69/m² (province)",
        studio: "€700–1,100",
        oneBed: "€800–1,400",
        twoBed: "€1,100–1,700",
        note: "Pararius reported province rents nearly flat YoY; university demand still shapes rooms and studios.",
      },
    ] satisfies RentBenchmarkCity[],
  },
  housingCostExamples: [
    {
      profile: "Studio — Amsterdam (orientation)",
      priceRange: "€1,200–1,800+ / month rent",
      details: ["Highest demand and competition", "Furnished premiums common", "Utilities usually extra"],
    },
    {
      profile: "1-bedroom — Eindhoven (orientation)",
      priceRange: "€900–1,550 / month rent",
      details: ["Tech / Brainport demand", "Often better space per euro than Randstad core", "Check service costs in contract"],
    },
    {
      profile: "1-bedroom — Groningen (orientation)",
      priceRange: "€800–1,400 / month rent",
      details: ["University-city cycles", "Lower than Amsterdam peaks", "Verify registration and contract type"],
    },
    {
      profile: "Family home — suburban (orientation)",
      priceRange: "€1,800–3,000+ / month rent",
      details: ["More space outside inner cities", "Gardens and parking more common", "Buying may compete on monthly cost long term"],
    },
  ] satisfies HousingCostExample[],
  cityCostRows: [
    { city: "Amsterdam", studio: "€1,200–1,800+", oneBed: "€1,400–2,200+", twoBed: "€1,900–2,800+", family: "€2,500–4,000+" },
    { city: "Eindhoven", studio: "€850–1,300", oneBed: "€900–1,550", twoBed: "€1,300–1,900", family: "€1,700–2,800" },
    { city: "Groningen", studio: "€700–1,100", oneBed: "€800–1,400", twoBed: "€1,100–1,700", family: "€1,400–2,200" },
    { city: "Rotterdam", studio: "€900–1,400", oneBed: "€1,100–1,700", twoBed: "€1,400–2,100", family: "€1,800–3,000" },
    { city: "The Hague", studio: "€950–1,450", oneBed: "€1,200–1,750", twoBed: "€1,500–2,200", family: "€1,900–3,100" },
    { city: "Utrecht", studio: "€1,000–1,550", oneBed: "€1,300–1,900", twoBed: "€1,600–2,400", family: "€2,000–3,200" },
  ] satisfies CityCostRow[],
  cityCards: [
    {
      city: "Amsterdam",
      population: "~872,000",
      href: "/netherlands/amsterdam/",
      housingProfile: "Dense rental market, canals and apartments dominate central districts.",
      affordability: "Highest rents (~€1,400–2,200+ for many 1-beds); strongest competition.",
      internationalAppeal: "Largest international job market and expat infrastructure.",
    },
    {
      city: "Rotterdam",
      population: "~655,000",
      href: "/netherlands/rotterdam/",
      housingProfile: "Modern apartments and port-city neighbourhoods with more space per euro.",
      affordability: "Generally lower than Amsterdam with varied waterfront districts.",
      internationalAppeal: "Growing international community and logistics hub careers.",
    },
    {
      city: "The Hague",
      population: "~552,000",
      href: "/netherlands/the-hague/",
      housingProfile: "Embassy city mix of apartments, townhouses and coastal suburbs.",
      affordability: "Moderate to high; Scheveningen and central zones premium.",
      internationalAppeal: "Diplomats, NGOs, legal sector and international organisations.",
    },
    {
      city: "Utrecht",
      population: "~361,000",
      href: "/netherlands/utrecht/",
      housingProfile: "Central hub with strong rental demand near station and canals.",
      affordability: "High competition; popular with commuters and families.",
      internationalAppeal: "University city with tech and professional roles.",
    },
    {
      city: "Eindhoven",
      population: "~248,000",
      href: "/netherlands/eindhoven/",
      housingProfile: "Tech-oriented city with apartments and suburban family homes.",
      affordability: "Orientation 1-bed ~€900–1,550; often better value than Randstad core.",
      internationalAppeal: "International talent and Brainport employers.",
    },
    {
      city: "Groningen",
      population: "~238,000",
      href: "/netherlands/groningen/",
      housingProfile: "University city in the north with rooms, studios and compact apartments.",
      affordability: "Orientation 1-bed ~€800–1,400 — typically below Amsterdam and Eindhoven peaks.",
      internationalAppeal: "Students, researchers and northern NL employers.",
    },
    {
      city: "Haarlem",
      population: "~165,000",
      href: "/netherlands/haarlem/",
      housingProfile: "Historic centre with commuter appeal to Amsterdam.",
      affordability: "Premium vs national average; family homes in surrounding areas.",
      internationalAppeal: "Randstad lifestyle with smaller-city feel.",
    },
    {
      city: "Leiden",
      population: "~128,000",
      href: "/netherlands/leiden/",
      housingProfile: "University town with canals, bikes and compact rental stock.",
      affordability: "Student demand affects rental pressure; family homes in outskirts.",
      internationalAppeal: "Researchers, students and Amsterdam commuters.",
    },
    {
      city: "Delft",
      population: "~104,000",
      href: "/netherlands/delft/",
      housingProfile: "Student and tech profile with historic centre apartments.",
      affordability: "Moderate; competition near TU Delft and station.",
      internationalAppeal: "Engineering, university and The Hague commute links.",
    },
  ] satisfies CityHousingCard[],
  temporary: {
    heading: "Where to Stay When You First Arrive",
    paragraphs: [
      "Temporary accommodation bridges the gap between landing and signing a long-term lease or completing a purchase. Hotels suit very short stays; serviced apartments and corporate housing help when employment or viewings start before your permanent address is ready.",
      "Short-term rentals are useful but verify registration rules, deposit terms and maximum stay lengths. Book early during peak relocation seasons in August–September and January.",
    ],
  },
  temporaryOptions: [
    { title: "Hotels", body: "Best for a few nights while arranging viewings and bank setup." },
    { title: "Serviced apartments", body: "Furnished mid-stay option with housekeeping and flexible terms." },
    { title: "Corporate housing", body: "Employer-arranged stays for relocation packages and assignees." },
    { title: "Short-term rentals", body: "Platforms and agencies — confirm registration and contract limits." },
  ] satisfies TipCard[],
  utilitiesSection: {
    heading: "Setting Up a Home",
    paragraphs: [
      "After securing housing, arrange electricity, gas, water, internet and mobile services. Dutch utilities are usually billed separately from rent unless your contract explicitly includes specific services.",
      "Check meter access, postcode internet availability and waste rules for your address soon after move-in. The utilities guide covers the complete first-week household setup path.",
    ],
  },
  utilityTopics: [
    { title: "Electricity", body: "Choose supplier and contract type; note meter type and green tariff options." },
    { title: "Gas", body: "May be separate or absent in newer all-electric homes." },
    { title: "Water", body: "Regional water company billed by household — usually fixed plus usage." },
    { title: "Internet", body: "Postcode-specific fibre, cable or DSL — order before move-in when possible." },
    { title: "Mobile", body: "Local number helps with banking OTPs, appointments and two-factor login." },
  ] satisfies TipCard[],
  insurance: {
    heading: "Housing-Related Insurance",
    paragraphs: [
      "Renters typically need contents insurance and often liability cover. Owners add building insurance and may face lender requirements as part of mortgage approval. Compare providers and policy scope — this section is orientation only, not insurance advice.",
    ],
  },
  insuranceTopics: [
    { title: "Contents insurance", body: "Covers belongings against theft, fire and some water damage." },
    { title: "Home insurance", body: "Building cover relevant for owners and some mortgage products." },
    { title: "Liability insurance", body: "Widely recommended for accidental damage to others or rented property." },
  ] satisfies TipCard[],
  municipality: {
    heading: "Address Registration",
    paragraphs: [
      "Your registered address must match where you live for BSN issuance, official post and many government services. Renters need landlord permission to register in most cases. After registration, apply for DigiD once post can reach your home address.",
    ],
  },
  municipalitySteps: [
    "Confirm landlord allows gemeente registration before signing.",
    "Book a municipality appointment with ID and proof of address.",
    "Store BSN and registration proof for employer and bank onboarding.",
    "Apply for DigiD when post delivery at your registered address is reliable.",
    "Learn local waste, parking and tax rules for your new neighbourhood.",
  ],
  mortgages: {
    heading: "Mortgage Considerations",
    paragraphs: [
      "Expats may access Dutch mortgages with stable employment, acceptable contract types and sufficient documentation. Lenders assess income, residency, nationality and property valuation. Mortgage advisors help navigate NHG limits, interest products and offer strategy.",
      "Pre-approval strengthens buying timelines in competitive markets. This section is not mortgage advice — verify terms with licensed advisors and lenders.",
    ],
  },
  mortgageTopics: [
    { title: "Income requirements", body: "Permanent or long-term contracts strengthen applications; variable income needs extra review." },
    { title: "Employment type", body: "Employees, contractors and entrepreneurs face different lender policies." },
    { title: "Contract types", body: "Fixed vs variable interest affects monthly predictability and risk." },
    { title: "Expat advisors", body: "Specialist advisors explain documentation, NHG and cross-border income." },
  ] satisfies TipCard[],
  lifeStages: [
    { title: "Students", body: "Rooms, studios and student housing near universities — book early for intake periods." },
    { title: "Young professionals", body: "City apartments and flexible rentals; prioritise commute and social life." },
    { title: "Families", body: "Space, schools, gardens and dual commutes drive suburban choices." },
    { title: "Entrepreneurs", body: "Home-office rules, registration and address suitability for business admin." },
    { title: "Retirees", body: "Accessibility, healthcare proximity and stay-horizon planning matter." },
    { title: "Digital nomads", body: "Short stays, registration limits and visa rules need careful checks." },
  ] satisfies TipCard[],
  setupPhases: [
    {
      phase: "Before you move",
      tasks: [
        "Set budget including utilities, insurance and commuting costs.",
        "Choose target cities and property types based on work and family needs.",
        "Decide rent-first vs buy-ready and prepare documents accordingly.",
        "Book temporary accommodation for arrival week and early viewings.",
      ],
    },
    {
      phase: "First weeks",
      tasks: [
        "Run active rental or buying search with prepared income proof.",
        "Attend viewings quickly in competitive markets.",
        "Review contracts for service costs, registration and notice periods.",
        "Arrange utilities and internet once your address is confirmed.",
      ],
    },
    {
      phase: "After move-in",
      tasks: [
        "Register at the gemeente and secure BSN documentation.",
        "Activate DigiD and arrange contents or home insurance.",
        "Save waste calendar and learn neighbourhood rules.",
        "Explore deeper guides for taxes, mortgages or tenant rights as needed.",
      ],
    },
  ] satisfies SetupPhase[],
  housingChecklist: [
    "Define monthly housing budget including utilities and insurance",
    "Choose target city and commute tolerance",
    "Decide rent or buy based on stay horizon and savings",
    "Arrange temporary accommodation for arrival",
    "Prepare ID, employment proof and references",
    "Understand utility setup and typical contract inclusions",
    "Plan contents and liability insurance",
    "Arrange municipality registration after move-in",
  ],
  commonMistakes: [
    { title: "Starting search too late", body: "Peak seasons fill quickly — begin before arrival when possible." },
    { title: "Underestimating competition", body: "Strong listings receive many applications within hours in major cities." },
    { title: "Ignoring commuting times", body: "A cheaper rent far from work may cost time and transport fees." },
    { title: "Focusing only on Amsterdam", body: "Rotterdam, The Hague, Utrecht and Eindhoven offer strong alternatives." },
    { title: "Forgetting utility costs", body: "Energy labels and separate bills materially affect monthly totals." },
    { title: "Ignoring municipality registration", body: "Without registration, BSN, post and DigiD setup stall." },
    { title: "Not understanding rental contracts", body: "Service costs, notice periods and maintenance duties vary." },
    { title: "Skipping mortgage pre-approval", body: "Buyers lose time in competitive markets without financing clarity." },
  ] satisfies TipCard[],
  featuredGuides: [
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Contracts, deposits, viewings and tenant orientation for expats." },
    { label: "Rental contracts and deposits", href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH, status: "live", description: "Leases, deposits, inventory lists and inspections before signing." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Kosten koper, bidding, notary transfer and owner responsibilities." },
    { label: "Mortgage for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Eligibility, borrowing capacity and application steps." },
    { label: "Buy vs Rent", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Financial and lifestyle comparison for relocation decisions." },
    { label: "Property Tax", href: PROPERTY_TAX_NETHERLANDS_PATH, status: "live", description: "WOZ value and municipal owner charges." },
    { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Energy, water, internet, mobile and waste setup." },
    { label: "Insurance Providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Compare contents, home and liability cover options." },
  ] satisfies HousingLink[],
  faqs: [
    {
      q: "Is housing expensive in the Netherlands?",
      a: "Housing costs are high in Amsterdam, Utrecht and parts of the Randstad compared with many European cities. Smaller cities and suburban areas often offer lower rents and more space. Costs depend on property type, energy label and whether utilities are included — verify current listings rather than relying on averages alone.",
    },
    {
      q: "Should I rent or buy?",
      a: "Most newcomers rent first while learning the market and confirming long-term plans. Buying can suit stable long-term stays when mortgage eligibility, savings for transaction costs and employment continuity align. Use the buy vs rent guide for a structured comparison.",
    },
    {
      q: "Can expats get a mortgage?",
      a: "Many expats qualify for Dutch mortgages with stable income, acceptable employment contracts and sufficient documentation. Lenders vary in policy for nationality, contract type and self-employment. Speak with a mortgage advisor to assess your situation — this hub does not provide mortgage advice.",
    },
    {
      q: "How much is rent?",
      a: "Rent varies sharply by city and property size. Studios in Amsterdam may exceed EUR 1,200–1,800 per month as orientation ranges, while smaller cities can be lower. Always check live listings and include utilities, service costs and insurance in your budget.",
    },
    {
      q: "What documents are needed?",
      a: "Rentals often require ID, employment contract, payslips and sometimes bank statements or guarantor details. Buying requires mortgage documentation, proof of funds for transaction costs and notary-ready identification. Requirements vary by landlord, agency and lender.",
    },
    {
      q: "Are utilities included?",
      a: "Usually not fully. Many leases list rent separately from gas, electricity, water, internet and municipal waste charges. Check the contract for service costs (servicekosten) and what they cover before comparing listings.",
    },
    {
      q: "What are the best cities for expats?",
      a: "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven attract the largest international communities for work and study. Haarlem, Leiden and Delft suit commuters and university profiles. The best city depends on job location, budget, schools and lifestyle preference.",
    },
    {
      q: "How competitive is the housing market?",
      a: "Major cities are competitive for rentals and popular purchase locations. Speed, prepared documents and flexible neighbourhood choice improve outcomes. Starting early and considering adjacent cities or suburbs often helps.",
    },
  ],
  sourceUsageTips: [
    "Use Government.nl for general resident housing and living information.",
    "Use Rijksoverheid for policy context on tenancy and ownership frameworks.",
    "Use Kadaster for property ownership research and registration context.",
    "Use your gemeente website for local registration, permits and housing rules.",
    "Always confirm current regulations and contract terms before signing.",
  ],
  officialSources: [
    {
      label: "Pararius Huurmonitor (Q1 2026)",
      href: "https://www.pararius.com/news/dutch-rental-prices-outpace-house-prices",
      description: "Free-sector new-lettings €/m² signals and national average used for dated rent bands on this hub.",
    },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on living, working and housing in the Netherlands." },
    { label: "Rijksoverheid", href: "https://www.rijksoverheid.nl/", description: "Central government site for policy context on housing and resident topics." },
    { label: "Kadaster", href: "https://www.kadaster.nl/", description: "Land registry and property information for ownership research in the Netherlands." },
    { label: "Municipality websites", href: "https://www.amsterdam.nl/", description: "Your gemeente website covers registration, local housing rules and permits. Examples include Amsterdam, Rotterdam, The Hague and Utrecht." },
  ],
  relatedGuides: [
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Wider relocation timeline connecting housing with first-month setup." },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Deep rental guide for contracts, viewings and deposits." },
    { label: "Rental contracts and deposits", href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH, status: "live", description: "Leases, deposits, inventory lists and inspections before signing." },
    { label: "Rental Scams", href: RENTAL_SCAMS_NETHERLANDS_PATH, status: "live", description: "Spot warning signs, verify landlords and pay safely when renting." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Expat guide to the Dutch purchase process." },
    { label: "Mortgage for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Mortgage eligibility and application orientation." },
    { label: "Buy vs Rent", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Structured rent-versus-buy decision guide." },
    { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Complete utilities setup after move-in." },
    { label: "Insurance Providers", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Compare household insurance options." },
    { label: "Municipality Services", href: MUNICIPALITY_SERVICES_PATH, status: "live", description: "Registration, BSN, local taxes and gemeente services." },
    { label: "Cities Hub", href: CITIES_HUB_PATH, status: "live", description: "Compare major Dutch cities for relocation." },
    { label: "Rent Allowance", href: RENT_ALLOWANCE_PATH, status: "live", description: "Huurtoeslag orientation for qualifying renters." },
  ] satisfies HousingLink[],
  exploreNextTips: [
    "Start with the renting guide if you have not secured a lease and need contract orientation.",
    "Open buying and mortgage guides when your stay horizon and savings support ownership.",
    "Set up utilities and insurance in the first week after keys — they are rarely included in full.",
  ],
  exploreNextCards: [
    { label: "Renting Guide", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Go deeper on rental contracts, viewings and deposits." },
    { label: "Rental contracts and deposits", href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH, status: "live", description: "Leases, deposits, inventory and inspections before signing." },
    { label: "Rental Scams", href: RENTAL_SCAMS_NETHERLANDS_PATH, status: "live", description: "Verify listings and landlords before paying a deposit." },
    { label: "Buying Guide", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Learn the Dutch purchase and bidding process." },
    { label: "Mortgage Guide", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Understand expat mortgage eligibility and steps." },
    { label: "Utilities Guide", href: UTILITIES_NETHERLANDS_PATH, status: "live", description: "Set up energy, water, internet and waste." },
    { label: "Insurance Guide", href: INSURANCE_PROVIDERS_PATH, status: "live", description: "Compare contents, home and liability insurance." },
  ] satisfies HousingLink[],
  futureGuides: [
    { label: "Renting Netherlands", href: RENTING_NETHERLANDS_PATH, status: "comingSoon", description: "Full rental pillar guide for expats." },
    { label: "Rental Scams", href: RENTAL_SCAMS_NETHERLANDS_PATH, status: "live", description: "Warning signs, landlord verification and safe payment practices." },
    { label: "Social Housing Netherlands", href: SOCIAL_HOUSING_NETHERLANDS_PATH, status: "comingSoon", description: "Eligibility, waiting lists and realistic expectations." },
    { label: "Temporary Accommodation", href: TEMPORARY_ACCOMMODATION_NETHERLANDS_PATH, status: "comingSoon", description: "Short-stay options for arrival windows." },
    { label: "Best Neighborhoods", href: NEIGHBORHOODS_NETHERLANDS_PATH, status: "comingSoon", description: "Compare areas within major Dutch cities." },
    { label: "Housing Costs Netherlands", href: HOUSING_COSTS_NETHERLANDS_PATH, status: "live", description: "Rent, purchase, utilities and city cost comparisons." },
  ] satisfies HousingLink[],
};
