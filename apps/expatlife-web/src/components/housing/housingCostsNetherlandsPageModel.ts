import {
  BUYING_HOUSE_NETHERLANDS_PATH,
  BUY_VS_RENT_NETHERLANDS_PATH,
  HOUSING_HUB_PATH,
  MORTGAGES_NETHERLANDS_EXPATS_PATH,
  RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH,
  RENTAL_SCAMS_NETHERLANDS_PATH,
  RENTING_NETHERLANDS_PATH,
} from "./housingNetherlandsPageModel";
import { UTILITIES_NETHERLANDS_PATH } from "../utilities/utilitiesNetherlandsPageModel";
import { INSURANCE_PROVIDERS_NETHERLANDS_PATH } from "../services/insurance-providers/insuranceProvidersNetherlandsPageModel";
import { NET_SALARY_NETHERLANDS_PATH } from "../taxes/netSalaryNetherlandsPageModel";
import { EXPAT_SALARY_NETHERLANDS_PATH } from "../jobs/expatSalaryNetherlandsPageModel";

export const HOUSING_COSTS_NETHERLANDS_PATH = "/netherlands/housing/housing-costs-netherlands/" as const;
export const RENT_AFFORDABILITY_TOOL_PATH = "/netherlands/housing/tools/rent-affordability-calculator/" as const;

export type HousingCostsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type SnapshotSignal = {
  label: string;
  value: string;
  note: string;
};

export type RentalCostRow = {
  type: string;
  range: string;
  note: string;
};

export type CityCostRow = {
  city: string;
  href: string;
  typicalRent: string;
  purchasePrices: string;
  competition: string;
  expatPopularity: string;
};

export type HousingScenario = {
  situation: string;
  cost: string;
  note: string;
};

export type MistakeFixRow = {
  mistake: string;
  fix: string;
};

export type ChecklistDetailItem = {
  task: string;
  detail: string;
  timing: string;
};

export type CostLineRow = {
  item: string;
  range: string;
  note: string;
};

export type BudgetExample = {
  profile: string;
  housing: string;
  utilities: string;
  insurance: string;
  transport: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "v3";
const VISUAL_PREFIX = "netherlands-housing-costs";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const housingCostsNetherlandsPage = {
  slug: "housing-costs-netherlands",
  path: HOUSING_COSTS_NETHERLANDS_PATH,
  hubPath: HOUSING_HUB_PATH,
  publish: true,
  publishDate: "2026-11-09",
  seo: {
    title: "Housing Costs in the Netherlands | Rent, Buying & City Comparison Guide",
    description:
      "Discover housing costs in the Netherlands, including rent, property prices, utilities, hidden costs and city-by-city comparisons for expats.",
    keywords: [
      "housing costs netherlands",
      "rent netherlands cost",
      "cost of housing netherlands",
      "expat housing costs netherlands",
      "housing prices netherlands",
      "apartment rent netherlands",
      "buying house netherlands cost",
      "housing affordability netherlands",
      "rent amsterdam",
      "rent rotterdam",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Housing · Costs & budgeting",
    pageTitle: "Housing Costs in the Netherlands",
    subtitle:
      "Understand what it really costs to rent, buy and live in the Netherlands, with practical examples, city comparisons and budgeting guidance.",
    chips: ["Rent ranges", "Buyer costs", "City comparison", "Hidden fees"],
    disclaimer:
      "Orientation ranges only — not quotes, investment advice or price guarantees. Verify current listings and official data on CBS, Kadaster and Government.nl.",
    primaryCta: { label: "Compare Housing Costs", href: "#city-comparison" },
    secondaryCta: { label: "Explore Housing Options", href: HOUSING_HUB_PATH },
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic editorial photo from inside a Dutch apartment: desk with city rent comparison sheet, calculator and utility bills, window view of brick terraced houses and bicycles on a typical residential street — expat housing budget planning without luxury marketing.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "At a glance" },
    { href: "#factors", label: "Cost drivers" },
    { href: "#rental-costs", label: "Rent" },
    { href: "#purchase-costs", label: "Buying" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#amsterdam-vs", label: "Amsterdam" },
    { href: "#utilities", label: "Utilities" },
    { href: "#insurance", label: "Insurance" },
    { href: "#property-taxes", label: "Taxes" },
    { href: "#life-stage", label: "Life stages" },
    { href: "#housing-types", label: "Property types" },
    { href: "#affordability", label: "Affordability" },
    { href: "#sample-budgets", label: "Budgets" },
    { href: "#hidden-costs", label: "Hidden costs" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation map linking rent, purchase, utilities, hidden costs and city comparison for expat housing budgets in the Netherlands.",
      "Five cost pillars — rent, buy, utilities, taxes and setup — before you sign a lease or mortgage."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance panel with rent variance, utility separation, buyer fees and regional city cost signals.",
      "Example ranges only — verify live listings and CBS market data for your target city."
    ),
    factors: visual(
      "factors",
      "Premium factor board showing location, size, type, demand, transport, neighbourhood and energy label drivers.",
      "Why two similar apartments can differ by hundreds of euros per month."
    ),
    rentalCosts: visual(
      "rental-costs",
      "Premium rental cost ladder for studio, one-bed, two-bed and family homes with furnished vs unfurnished notes.",
      "Orientation rent bands — Amsterdam and Randstad peaks sit above national averages."
    ),
    purchaseCosts: visual(
      "purchase-costs",
      "Premium buyer cost stack: purchase price, mortgage, transfer tax, notary, valuation and inspection.",
      "Kosten koper sits on top of the mortgage — plan own funds before bidding."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium Netherlands map comparing ten cities with rent bands, purchase pressure and expat demand markers.",
      "City choice often matters more than property type for your monthly budget."
    ),
    amsterdamVs: visual(
      "amsterdam-vs-cities",
      "Premium side-by-side comparison of Amsterdam versus Rotterdam, The Hague, Utrecht and Eindhoven on cost and availability.",
      "Amsterdam is usually priciest — compare commute and lifestyle before assuming one city."
    ),
    utilities: visual(
      "utilities",
      "Premium monthly housing stack beyond rent: electricity, gas, water, internet, mobile and waste charges.",
      "Utilities are often excluded from rent — budget €150–€350+ per month for many households."
    ),
    insurance: visual(
      "insurance",
      "Premium insurance cards for contents, liability and home insurance linked to rental and ownership.",
      "Contents insurance is common for renters; owners add building cover and higher liability buffers."
    ),
    propertyTaxes: visual(
      "property-taxes",
      "Premium municipal charge map: OZB, waste, water authority and owner levies beyond mortgage payments.",
      "Owners face recurring municipal charges — renters may still pay waste and water via landlord or gemeente."
    ),
    lifeStage: visual(
      "life-stage",
      "Premium scenario cards for students, professionals, couples, families, entrepreneurs and retirees.",
      "Housing cost shape changes with household size, contract stability and city choice."
    ),
    housingTypes: visual(
      "housing-types",
      "Premium property type comparison: studio, apartment, townhouse, semi-detached and detached with cost implications.",
      "More space usually means higher rent, utilities and maintenance responsibility."
    ),
    affordability: visual(
      "affordability",
      "Premium affordability flow linking income, household size, city choice and rent vs buy decision inputs.",
      "Gross salary is not spendable housing budget — use net salary and total monthly housing stack."
    ),
    sampleBudgets: visual(
      "sample-budgets",
      "Premium three-column monthly budget breakdown for single professional, couple and family of four.",
      "Illustrative stacks — adjust for your city, energy label and commute pattern."
    ),
    hiddenCosts: visual(
      "hidden-costs",
      "Premium hidden cost board: deposits, furniture, moving, internet setup, insurance, gemeente taxes and parking.",
      "First-month cash needs often exceed rent alone — plan setup and emergency buffers."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight common expat housing budget errors and one-line fixes.",
      "Rent-only budgeting is the most common gap — utilities and taxes follow quickly."
    ),
    checklist: visual(
      "checklist",
      "Premium pre-signing checklist for total monthly costs, utilities, insurance, taxes and commuting.",
      "Run this list before lease or mortgage commitment — not after moving in."
    ),
    faq: visual(
      "faq",
      "Premium FAQ panels with concrete answers on rent, Amsterdam prices, utilities and affordability.",
      "Quick answers to the questions expats ask before relocating."
    ),
    sources: visual(
      "sources",
      "Premium official source cards for CBS, Kadaster, Government.nl and municipality housing data.",
      "Market data changes quarterly — check publication dates on official statistics."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium hub diagram linking renting, buying, mortgages, utilities and insurance guides.",
      "Suggested reading order after understanding total housing costs."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next path for renting, buying, mortgage, utilities and insurance setup.",
      "Pick the guide that matches your next housing decision."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide covers",
      items: [
        "Orientation rent and purchase cost ranges — not guarantees",
        "City-by-city comparison for major Dutch markets",
        "Utilities, insurance and municipal charges beyond rent",
        "Hidden setup costs and affordability planning for expats",
      ],
    },
    snapshot: {
      title: "Cost signals to remember",
      items: [
        "Amsterdam and Utrecht often lead rent benchmarks nationally",
        "Utilities and service charges are frequently separate from rent",
        "Buyer costs (kosten koper) add thousands on top of mortgage",
        "Regional cities can offer materially lower monthly housing stacks",
      ],
    },
    factors: {
      title: "Key cost drivers",
      items: [
        "City and neighbourhood location — largest single variable",
        "Property size and type — studio vs family home changes everything",
        "Energy label (A–G) affects monthly utility bills",
        "Furnished premiums and parking fees add hidden monthly layers",
      ],
    },
    rentalCosts: {
      title: "Rental cost context",
      items: [
        "Example ranges vary by neighbourhood within the same city",
        "Service costs and utilities may sit outside headline rent",
        "Furnished contracts often cost more per square metre",
        "Competition affects time-to-find, not just monthly price",
      ],
    },
    purchaseCosts: {
      title: "Buyer cost context",
      items: [
        "Transfer tax, notary and advice are buyer-side cash needs",
        "Mortgage payments exclude maintenance, VvE and municipal taxes",
        "Overbidding can create appraisal gaps from savings",
        "Verify owner-occupied vs investment transfer tax rates",
      ],
    },
    cityComparison: {
      title: "City comparison tips",
      items: [
        "Compare total monthly stack, not headline rent alone",
        "Commute time can offset lower rent in satellite cities",
        "Student cities spike in autumn intake seasons",
        "Check CBS and local gemeente data for trend context",
      ],
    },
    amsterdamVs: {
      title: "Amsterdam vs alternatives",
      items: [
        "Rotterdam and The Hague often offer lower rent per bedroom",
        "Utrecht competes strongly for family rentals near station",
        "Eindhoven can suit tech roles with better space per euro",
        "Haarlem and Leiden trade Amsterdam commute for lower peaks",
      ],
    },
    utilities: {
      title: "Utility budgeting",
      items: [
        "Energy labels materially change heating and electricity bills",
        "Internet and mobile are standard monthly add-ons",
        "Waste and water may appear on gemeente or landlord invoices",
        "All-in rent contracts are rare — read the lease carefully",
      ],
    },
    insurance: {
      title: "Insurance basics",
      items: [
        "Contents (inboedel) insurance is standard for renters",
        "Home insurance applies to owners and sometimes VvE structures",
        "Liability cover is often bundled — verify policy limits",
        "Compare providers before move-in deadlines",
      ],
    },
    propertyTaxes: {
      title: "Tax and charge context",
      items: [
        "Owners pay OZB and other municipal levies on property",
        "WOZ value influences several owner-side charges",
        "Renters may still pay waste collection via landlord",
        "Water authority charges vary by region",
      ],
    },
    lifeStage: {
      title: "Situation matters",
      items: [
        "Students often accept smaller space in central cities",
        "Families may prioritise schools and outdoor space over city centre",
        "Short assignments favour renting with lower setup cash",
        "Entrepreneurs should stress-test variable income against rent",
      ],
    },
    housingTypes: {
      title: "Type trade-offs",
      items: [
        "Studios minimise rent but limit household growth",
        "Apartments may include VvE fees for owners",
        "Houses add garden maintenance and higher utilities",
        "Parking is often a separate monthly charge in cities",
      ],
    },
    affordability: {
      title: "Affordability checks",
      items: [
        "Use net salary, not gross, for realistic monthly budgets",
        "Include utilities, insurance and commuting in housing stack",
        "Rent allowance (huurtoeslag) may apply — verify eligibility rules",
        "Mortgage capacity differs from comfortable monthly spending",
      ],
    },
    sampleBudgets: {
      title: "Budget examples",
      items: [
        "Single professional Randstad: rent often dominates the stack",
        "Couples sharing costs can afford larger apartments earlier",
        "Families need buffer for childcare commute and school zones",
        "Always keep emergency fund separate from deposit cash",
      ],
    },
    hiddenCosts: {
      title: "Often missed",
      items: [
        "Deposit plus first month rent before utilities activate",
        "Furniture and moving for unfurnished leases",
        "Municipal taxes even when renting some property types",
        "Parking permits in dense neighbourhoods",
      ],
    },
    mistakes: {
      title: "Avoid these",
      items: [
        "Budgeting headline rent without utilities",
        "Ignoring setup and furnishing cash needs",
        "Assuming Amsterdam is the only option",
        "Skipping insurance and tax line items",
      ],
    },
    checklist: {
      title: "Before you sign",
      items: [
        "Total monthly housing stack on paper",
        "Utilities and service charges confirmed",
        "Insurance quotes collected",
        "Commute cost and parking included",
      ],
    },
    faq: {
      title: "FAQ themes",
      items: [
        "How much is rent in the Netherlands?",
        "Is Amsterdam expensive compared to other cities?",
        "What utilities should I budget monthly?",
        "How much income do I need for housing?",
      ],
    },
    sources: {
      title: "Official data",
      items: [
        "CBS — national housing price and rent statistics",
        "Kadaster — property transaction and price context",
        "Government.nl — consumer housing orientation",
        "Municipality websites — local charges and permits",
      ],
    },
    relatedGuides: {
      title: "Continue your housing setup",
      items: [
        "Renting guide for contracts and deposits",
        "Buying guide for kosten koper and process",
        "Mortgage guide for expat borrowing capacity",
        "Utilities hub for monthly household services",
      ],
    },
    exploreNext: {
      title: "Next practical steps",
      items: [
        "Compare rent vs buy if stay horizon is unclear",
        "Run rent affordability tool with net salary",
        "Read city guides before narrowing search",
        "Book mortgage orientation before serious buying",
      ],
    },
  },
  intro: {
    heading: "How Much Does Housing Cost in the Netherlands?",
    paragraphs: [
      "Housing is usually the largest monthly expense for expats in the Netherlands. Costs vary sharply by city, neighbourhood, property size and whether you rent or buy. Amsterdam and parts of the Randstad sit at the top of national benchmarks, while cities such as Groningen, Maastricht and parts of Limburg can offer lower monthly stacks for comparable space.",
      "This guide explains orientation ranges for rent and purchase, utility and insurance layers, municipal charges and hidden setup costs. Figures are examples for planning — not quotes, predictions or investment advice. Always verify current listings, CBS statistics and Kadaster context before committing.",
      "Use the city comparison tables and sample budgets to stress-test your relocation plan, then connect to renting, buying, mortgage and utilities guides for the next steps.",
    ],
  },
  quickAnswer: {
    summary:
      "Housing costs vary significantly by city, neighbourhood, property size and rental vs ownership — Amsterdam is generally among the most expensive markets while many regional cities offer lower costs.",
    bullets: [
      "Studio rent in Amsterdam often exceeds €1,200–€1,800+ per month (orientation range).",
      "Buyer costs (kosten koper) can add €13,000–€25,000+ on a €400,000 purchase before overbidding.",
      "Utilities, insurance and municipal charges often add €200–€500+ monthly beyond headline rent.",
      "Rotterdam, The Hague, Eindhoven and university cities can offer better space per euro than Amsterdam centre.",
    ],
    note: "Build your budget from net salary and total monthly housing stack — not headline rent alone.",
  },
  snapshotSignals: [
    { label: "Rent variance", value: "High by city", note: "Amsterdam often leads national benchmarks" },
    { label: "Utilities", value: "Often separate", note: "Energy label affects monthly bills" },
    { label: "Buyer costs", value: "~4–6% extra", note: "Kosten koper on purchase price" },
    { label: "Hidden setup", value: "Deposit + furnish", note: "First months need extra cash" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    { title: "Rent varies by city", body: "The same apartment type can cost 30–50% less outside Amsterdam core districts." },
    { title: "Utilities are often separate", body: "Electricity, gas, water, internet and waste rarely sit inside headline rent." },
    { title: "Home purchase costs include fees", body: "Transfer tax, notary, valuation and advice add to the mortgage down payment story." },
    { title: "Housing demand affects pricing", body: "Autumn student intake and corporate hiring waves tighten rental markets." },
    { title: "Regional cities can be cheaper", body: "Groningen, Maastricht and smaller Randstad suburbs often trade space for commute." },
    { title: "Hidden costs matter", body: "Deposits, furniture, insurance and parking change first-year cash needs materially." },
  ] satisfies TipCard[],
  snapshotMilestones: [
    { label: "Before search", value: "Net salary budget", note: "Include utilities and commute" },
    { label: "Viewing stage", value: "Total monthly stack", note: "Rent + service + utilities" },
    { label: "Before signing", value: "Setup cash plan", note: "Deposit, furnish, insurance" },
    { label: "After move-in", value: "Track actuals", note: "Adjust budget with real bills" },
  ] satisfies SnapshotSignal[],
  snapshotUseTips: [
    "Use CBS and Kadaster for trend context — not blog averages alone.",
    "Compare at least two cities before assuming Amsterdam is your only option.",
    "Ask landlords what is included: utilities, internet, parking, service costs.",
    "Pair this page with the rent affordability tool and net salary guide.",
    "Revisit budgets after six months — energy prices and contracts change.",
  ],
  budgetTrackingTips: [
    "Revisit your housing cap after the first full utility bill — winter heating shifts totals quickly.",
    "Track service costs (servicekosten) separately from electricity and gas invoices.",
    "Compare furnished vs unfurnished as a total stack — furnishing cash is a hidden monthly cost.",
    "Set a calendar reminder before lease renewal or mortgage rate review dates.",
  ],
  expatQuestions: [
    {
      q: "How much is rent in Amsterdam for a studio?",
      a: "Orientation ranges often start around €1,200–€1,800+ per month for studios in popular districts — outer areas and shared setups can sit lower. Verify live listings for your exact neighbourhood.",
    },
    {
      q: "Are utilities included in Dutch rent?",
      a: "Often not. Electricity, gas, water, internet and waste charges are frequently separate — budget €150–€350+ monthly beyond headline rent for many households.",
    },
    {
      q: "What are kosten koper when buying?",
      a: "Buyer-side costs on top of the mortgage — transfer tax, notary, valuation and advice. On a €400,000 purchase, orientation totals often reach roughly €13,000–€25,000+ before overbidding.",
    },
    {
      q: "Is buying cheaper than renting in the Netherlands?",
      a: "Not always. Buying adds upfront kosten koper, maintenance and market risk; renting preserves flexibility. Compare total cost over your expected stay horizon using the buy vs rent guide.",
    },
  ],
  rentalScenarios: [
    {
      situation: "Single professional — Amsterdam studio (unfurnished)",
      cost: "~€1,500 rent + €200 utilities",
      note: "Centre premiums and energy label G can push utilities higher in winter.",
    },
    {
      situation: "Couple — Rotterdam two-bedroom suburb vs centre",
      cost: "€1,400 outer district vs €1,850 inner city",
      note: "Commute time and parking needs often decide whether suburb savings work.",
    },
    {
      situation: "Family — Haarlem commuter vs Amsterdam centre",
      cost: "€2,100 Haarlem vs €2,600+ Amsterdam comparable space",
      note: "OV commute €90–€150 monthly may still beat inner-city rent premiums.",
    },
  ] satisfies HousingScenario[],
  affordabilityScenarios: [
    {
      situation: "€4,500 gross salary — single professional",
      cost: "Net ~€3,200 → cap ~€960–€1,100 housing stack",
      note: "Use net salary — 30–35% guideline applies to rent + utilities + insurance.",
    },
    {
      situation: "Couple €7,000 gross — rent vs buy decision",
      cost: "Mortgage capacity vs €2,000+ rent stack",
      note: "Lenders stress-test income; kosten koper cash sits outside monthly mortgage.",
    },
    {
      situation: "Student shared room — lower income band",
      cost: "€400–€800 room + utilities share",
      note: "Check huurtoeslag eligibility thresholds if income and rent qualify.",
    },
  ] satisfies HousingScenario[],
  hiddenCostScenarios: [
    {
      situation: "First month unfurnished lease",
      cost: "Deposit €2,400 + furnishing €2,000–€5,000",
      note: "Spread furnishing over setup weeks — not all cash is due on day one.",
    },
    {
      situation: "New energy customer without Dutch credit history",
      cost: "Supplier deposit €200–€400",
      note: "Common for new arrivals — separate from rental deposit.",
    },
    {
      situation: "Amsterdam street parking permit",
      cost: "€400–€600+ per year orientation",
      note: "Garage rental can add €150–€300 monthly in dense districts.",
    },
  ] satisfies HousingScenario[],
  orientationFlowSteps: [
    "Estimate net monthly income and maximum comfortable housing stack (rent or mortgage + utilities).",
    "Compare three cities using the table below — include commute time and parking.",
    "Add hidden setup costs: deposit, furniture, insurance and municipal charges before signing.",
  ],
  costFactorCards: [
    { title: "Location", body: "City centre vs suburb vs commuter town — the largest cost driver for both rent and purchase." },
    { title: "Property size", body: "Bedrooms, floor area and outdoor space scale rent, utilities and maintenance together." },
    { title: "Property type", body: "Studio, apartment, townhouse and detached home carry different cost profiles." },
    { title: "Housing demand", body: "Student intake, corporate hiring and low supply tighten markets seasonally." },
    { title: "Public transport access", body: "Near-station premiums apply in Amsterdam, Utrecht and Rotterdam hubs." },
    { title: "Neighbourhood popularity", body: "Canal belts, waterfront and school districts command sustained premiums." },
    { title: "Energy efficiency", body: "Energy label A–G affects heating and electricity — especially in older stock." },
    { title: "Property condition", body: "Renovation-ready homes trade lower rent for future repair spend." },
  ] satisfies TipCard[],
  energyLabelRows: [
    { item: "Label A or B (efficient)", range: "Often €80–€150 / month energy", note: "Newer builds and recent renovations" },
    { item: "Label C or D (average)", range: "Often €120–€200 / month energy", note: "Typical post-war apartments" },
    { item: "Label E, F or G (poor)", range: "Often €180–€350+ / month energy", note: "Winter heating spikes materially" },
    { item: "Furnished premium", range: "+10–25% on rent", note: "Compare total stack vs furnishing cash" },
  ] satisfies CostLineRow[],
  factorComparisonBullets: [
    "Two similar apartments in the same city can differ €300–€600 monthly after utilities and parking.",
    "Ask for energy label and last year's energy bill at viewings — landlords may share estimates.",
    "Service costs (servicekosten) are not utilities — confirm what building charges cover.",
    "Parking permits and garage rental are separate line items in Amsterdam, Utrecht and Rotterdam.",
  ],
  rentalCostRows: [
    { type: "Studio apartment", range: "€800–€1,800+ / month", note: "Amsterdam core often highest; regional cities lower" },
    { type: "1-bedroom apartment", range: "€1,000–€2,200+ / month", note: "Furnished and centre premiums common" },
    { type: "2-bedroom apartment", range: "€1,300–€2,800+ / month", note: "Family demand in Utrecht and Haarlem" },
    { type: "Family home (rent)", range: "€1,800–€4,000+ / month", note: "Suburban space vs inner-city apartments" },
  ] satisfies RentalCostRow[],
  rentalBullets: [
    "City averages hide neighbourhood spreads — always check specific districts.",
    "Service costs (servicekosten) may cover shared building costs separately from utilities.",
    "Furnished (gemeubileerd) contracts often cost 10–25% more than unfurnished equivalents.",
    "Registration (inschrijving) eligibility affects BSN, healthcare and allowance applications.",
  ],
  purchaseCostCards: [
    { title: "Purchase price", body: "Market value varies by city — CBS and Kadaster publish trend context, not personal quotes." },
    { title: "Mortgage payments", body: "Depends on rate, term, NHG eligibility and lender stress tests — see mortgage guide." },
    { title: "Transfer tax", body: "Owner-occupied often 2%; investment property higher — verify current Belastingdienst rates." },
    { title: "Notary fees", body: "Transfer deed and mortgage deed costs — typically part of kosten koper." },
    { title: "Valuation & inspection", body: "Bank valuation and optional building inspection before transfer." },
    { title: "Ongoing owner costs", body: "Maintenance, VvE, insurance and municipal taxes after purchase." },
  ] satisfies TipCard[],
  purchaseCostBreakdown: [
    { item: "€300,000 purchase (orientation)", range: "~€10,000–€16,000 kosten koper", note: "Transfer tax, notary, valuation, advice — before overbidding" },
    { item: "€400,000 purchase (orientation)", range: "~€13,000–€22,000 kosten koper", note: "Common Randstad benchmark for couples" },
    { item: "€500,000 purchase (orientation)", range: "~€16,000–€28,000+ kosten koper", note: "Higher transfer tax base; NHG cap may apply" },
    { item: "Monthly owner stack (example)", range: "Mortgage + €200–€500+ extras", note: "Insurance, OZB, maintenance, VvE not in mortgage payment" },
  ] satisfies CostLineRow[],
  purchaseScenarios: [
    {
      situation: "First-time buyer — €400k apartment Utrecht",
      cost: "~€15,000 kosten koper + €40k+ own funds",
      note: "Lenders rarely finance buyer fees — cash needed before bidding.",
    },
    {
      situation: "Overbid €25k above asking — appraisal gap",
      cost: "Extra cash or lower mortgage amount",
      note: "Bank lends on valuation — gap must come from savings.",
    },
    {
      situation: "Owner-occupied vs investment purchase",
      cost: "Different transfer tax rates",
      note: "Verify Belastingdienst rates — investment property often higher.",
    },
  ] satisfies HousingScenario[],
  purchaseBullets: [
    "Budget kosten koper separately from mortgage down payment — they are different cash pools.",
    "VvE (building association) fees for apartments are monthly owner costs beyond mortgage.",
    "Maintenance reserve: orientation 1% of property value annually for older homes.",
    "Compare buy vs rent over your expected stay — 3–5 year horizon often decisive.",
  ],
  cityComparison: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", typicalRent: "€1,200–€2,800+ studio–family", purchasePrices: "High — strong bidding pressure", competition: "Very high", expatPopularity: "Highest international hub" },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", typicalRent: "€900–€2,100+ studio–family", purchasePrices: "Moderate–high", competition: "High in popular districts", expatPopularity: "Growing port and tech community" },
    { city: "The Hague", href: "/netherlands/the-hague/", typicalRent: "€950–€2,200+ studio–family", purchasePrices: "Moderate–high", competition: "High near centre and coast", expatPopularity: "Diplomats, NGOs, legal sector" },
    { city: "Utrecht", href: "/netherlands/utrecht/", typicalRent: "€1,000–€2,400+ studio–family", purchasePrices: "High", competition: "Very high near station", expatPopularity: "University and commuter hub" },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", typicalRent: "€850–€1,900+ studio–family", purchasePrices: "Moderate", competition: "Moderate–high", expatPopularity: "Tech and Brainport employers" },
    { city: "Haarlem", href: "/netherlands/haarlem/", typicalRent: "€1,000–€2,300+ studio–family", purchasePrices: "High vs national avg", competition: "High", expatPopularity: "Amsterdam commuter lifestyle" },
    { city: "Leiden", href: "/netherlands/leiden/", typicalRent: "€950–€2,100+ studio–family", purchasePrices: "Moderate–high", competition: "High (students)", expatPopularity: "University and research" },
    { city: "Delft", href: "/netherlands/delft/", typicalRent: "€900–€2,000+ studio–family", purchasePrices: "Moderate–high", competition: "High near TU Delft", expatPopularity: "Engineering and students" },
    { city: "Groningen", href: "/netherlands/groningen/", typicalRent: "€700–€1,600+ studio–family", purchasePrices: "Lower than Randstad", competition: "Moderate (student cycles)", expatPopularity: "University city in north" },
    { city: "Maastricht", href: "/netherlands/maastricht/", typicalRent: "€750–€1,700+ studio–family", purchasePrices: "Moderate", competition: "Moderate", expatPopularity: "EU border and university" },
  ] satisfies CityCostRow[],
  cityComparisonBullets: [
    "Randstad cities dominate expat demand — competition peaks in autumn and spring hiring cycles.",
    "Commuter towns (Haarlem, Delft, Amstelveen) trade OV time for lower rent per bedroom.",
    "University cities spike when student contracts renew — August–September tightest.",
    "Use city guides for neighbourhood-level rent spreads — city averages hide district gaps.",
  ],
  amsterdamComparisonRows: [
    { factor: "Typical rent (orientation)", amsterdam: "Highest national benchmarks", rotterdam: "Often 15–30% lower for similar size", theHague: "Moderate–high; coast premiums", utrecht: "High; strong family demand", eindhoven: "Often better space per euro" },
    { factor: "Purchase competition", amsterdam: "Very high overbidding risk", rotterdam: "High in popular districts", theHague: "Moderate–high", utrecht: "High near centre", eindhoven: "Moderate" },
    { factor: "Availability", amsterdam: "Tight stock; fast timelines", rotterdam: "More variety per euro", theHague: "Mixed embassy and family stock", utrecht: "Competitive near station", eindhoven: "Growing supply" },
    { factor: "Lifestyle", amsterdam: "International nightlife and canals", rotterdam: "Modern urban and waterfront", theHague: "Coast and institutions", utrecht: "Compact historic centre", eindhoven: "Tech campus suburbs" },
    { factor: "Commuting", amsterdam: "OV hub; bike-first", rotterdam: "Good OV; port districts spread", theHague: "Randstad links", utrecht: "Central rail hub", eindhoven: "Car useful in suburbs" },
  ],
  amsterdamDecisionBullets: [
    "Choose Amsterdam when international network, nightlife or employer location justify the premium.",
    "Consider Rotterdam or The Hague when space per euro and faster availability matter more.",
    "Utrecht suits families needing Randstad access without Amsterdam centre prices.",
    "Eindhoven often works for tech roles with better parking and suburban space.",
  ],
  utilityCostRows: [
    { item: "Electricity", range: "€40–€120+ / month", note: "Usage, label and contract type" },
    { item: "Gas / district heating", range: "€30–€150+ / month", note: "Winter peaks on label G stock" },
    { item: "Water", range: "€10–€25 / month", note: "Sometimes via landlord or gemeente" },
    { item: "Internet broadband", range: "€30–€50 / month", note: "Fibre vs cable; contract terms vary" },
    { item: "Mobile phone", range: "€15–€35 / month", note: "Often separate from home broadband" },
    { item: "Waste / water board", range: "€15–€50 / month combined", note: "May appear on gemeente invoice" },
  ] satisfies CostLineRow[],
  utilityCostCards: [
    { title: "Electricity & gas", body: "Often €100–€250+ / month combined for apartments — energy label and usage matter." },
    { title: "Water", body: "Frequently €15–€40 / month for households; sometimes via landlord or gemeente." },
    { title: "Internet & mobile", body: "Broadband €30–€50+; mobile €15–€35+ depending on bundle." },
    { title: "Waste & municipal", body: "Waste collection and water board charges may appear on gemeente invoices." },
  ] satisfies TipCard[],
  insuranceCostRows: [
    { item: "Contents (inboedel)", range: "€10–€25 / month", note: "Standard for renters; covers belongings" },
    { item: "Liability (AVP)", range: "€5–€15 / month", note: "Often bundled with contents policies" },
    { item: "Home / building (opstal)", range: "€15–€40+ / month", note: "Owners; apartments may involve VvE cover" },
    { item: "Combined household", range: "€20–€50 / month", note: "Contents + liability bundles common" },
  ] satisfies CostLineRow[],
  insuranceCards: [
    { title: "Contents insurance", body: "Inboedelverzekering — common for renters; covers furniture and belongings." },
    { title: "Liability insurance", body: "Aansprakelijkheidsverzekering — often bundled; check coverage limits." },
    { title: "Home insurance", body: "Opstalverzekering for owners; apartments may involve VvE building cover." },
  ] satisfies TipCard[],
  propertyTaxRows: [
    { item: "OZB (municipal property tax)", range: "€200–€800+ / year", note: "Owners — based on WOZ value" },
    { item: "Waste (afvalstoffenheffing)", range: "€100–€300+ / year", note: "Owner or renter depending on contract" },
    { item: "Water board (waterschap)", range: "€100–€250+ / year", note: "Regional levy; often per household" },
    { item: "Parking permit", range: "€300–€600+ / year", note: "Dense districts — separate from rent" },
  ] satisfies CostLineRow[],
  propertyTaxBullets: [
    "OZB (municipal property tax) applies to owners based on WOZ value.",
    "Waste collection (afvalstoffenheffing) may apply to renters or owners depending on contract.",
    "Water authority (waterschap) charges relate to regional water management.",
    "Parking permits (parkeervergunning) add monthly cost in dense districts.",
    "See property tax guide for owner-occupied vs rental investment context.",
  ],
  lifeStageCards: [
    { title: "Students", body: "Often accept smaller studios in university cities; verify registration and contract type." },
    { title: "Young professionals", body: "Randstad apartments with OV commute; budget utilities and furnishing." },
    { title: "Couples", body: "Two-bedroom apartments in Utrecht, Rotterdam or Haarlem — shared income helps." },
    { title: "Families", body: "Suburban homes with schools and gardens; higher utilities and insurance." },
    { title: "Entrepreneurs", body: "Variable income — stress-test rent against conservative revenue scenarios." },
    { title: "Retirees", body: "Lower maintenance apartments; healthcare proximity may outweigh city centre rent." },
  ] satisfies TipCard[],
  lifeStageScenarios: [
    { situation: "Student — Groningen shared room", cost: "€400–€700 rent + utilities share", note: "Verify registration and contract type for BSN." },
    { situation: "Young professional — Amsterdam studio", cost: "€1,400–€1,800+ total stack", note: "Utilities and furnishing add materially to headline rent." },
    { situation: "Couple — Rotterdam two-bedroom", cost: "€1,600–€2,100 total stack", note: "Shared income unlocks larger apartments earlier." },
    { situation: "Family — Hague suburban rental", cost: "€2,200–€2,800+ total stack", note: "School zones and garden space drive premiums." },
    { situation: "Entrepreneur — flexible lease", cost: "Stress-test at 70% revenue", note: "Variable income needs conservative rent cap." },
    { situation: "Retiree — downsized apartment", cost: "€900–€1,400 total stack", note: "Healthcare access may outweigh lowest rent option." },
  ] satisfies HousingScenario[],
  housingTypeRows: [
    { item: "Studio", range: "€800–€1,800+ rent", note: "Lowest rent band; high cost per m² for utilities" },
    { item: "Apartment (2-bed)", range: "€1,300–€2,800+ rent", note: "VvE fees if buying; service costs if renting" },
    { item: "Townhouse (rijtjeshuis)", range: "€1,600–€3,200+ rent", note: "Garden maintenance and parking permits" },
    { item: "Semi-detached", range: "€1,800–€3,500+ rent", note: "Suburban; higher heating on older stock" },
    { item: "Detached house", range: "€2,200–€4,500+ rent", note: "Highest utilities and maintenance responsibility" },
  ] satisfies CostLineRow[],
  housingTypeBullets: [
    "Studios suit short stays but limit household growth — moving costs add up.",
    "Apartments are the default expat choice — check elevator, storage and parking.",
    "Houses trade commute time for garden and bedroom count in family suburbs.",
    "Buying an apartment: VvE monthly fee is a permanent cost line beyond mortgage.",
  ],
  housingTypeCards: [
    { title: "Studio", body: "Lowest rent band but limited space; utilities per m² can be high." },
    { title: "Apartment", body: "Common expat choice; check VvE fees if buying; service costs if renting." },
    { title: "Townhouse", body: "More space; higher utilities and often parking permits." },
    { title: "Semi-detached", body: "Family suburbs; garden maintenance adds monthly equivalent cost." },
    { title: "Detached house", body: "Highest space and maintenance; strongest in commuter municipalities." },
  ] satisfies TipCard[],
  affordabilitySection: {
    heading: "How Much Housing Can You Afford?",
    paragraphs: [
      "Dutch lenders and landlords effectively test affordability against income, household size and existing debts. A common orientation for rent is that total housing costs should remain comfortable within net household income — many expats target roughly 30–35% of net income for the full housing stack, not headline rent alone.",
      "Buying affordability is assessed separately through mortgage stress tests, NHG limits and kosten koper cash requirements. Use net salary tools and mortgage orientation before treating online listing prices as achievable.",
    ],
    inputs: [
      "Net household income (monthly)",
      "Household size and children",
      "Target city and commute pattern",
      "Rent vs buy horizon (years)",
    ],
    tips: [
      "Subtract utilities, insurance and parking from your housing cap before comparing listings.",
      "Students and new arrivals should keep emergency savings beyond deposit cash.",
      "Check huurtoeslag eligibility if income and rent fall within official thresholds.",
    ],
  },
  budgetExamples: [
    { profile: "Single professional — Rotterdam apartment", housing: "€1,400 rent + €120 service", utilities: "€180 energy/water/internet", insurance: "€25 contents", transport: "€90 OV", note: "Illustrative — centre vs suburb shifts rent by €200–€400." },
    { profile: "Couple — Utrecht two-bedroom", housing: "€1,850 rent", utilities: "€220 combined", insurance: "€40 contents + liability", transport: "€120 OV + bike", note: "Parking add €80–€150 if required." },
    { profile: "Family of four — suburban Hague", housing: "€2,400 rent", utilities: "€280 energy + water", insurance: "€55 home contents", transport: "€180 OV + car", note: "School zone premiums can add €200+ vs outer districts." },
  ] satisfies BudgetExample[],
  budgetAdaptationTips: [
    "Add 15–25% buffer to sample stacks if your target city is Amsterdam or Utrecht centre.",
    "Subtract transport savings when comparing commuter towns — cheaper rent plus €150 OV may still win.",
    "Winter utility bills can exceed summer estimates by €80–€150 on poor energy labels.",
    "Recalculate after six months with actual invoices — adjust discretionary spending accordingly.",
  ],
  hiddenCostCards: [
    { title: "Utility deposits", body: "Energy suppliers may request deposits for new customers without Dutch credit history." },
    { title: "Furniture", body: "Unfurnished leases need beds, kitchen and storage — €2,000–€8,000+ setup common." },
    { title: "Moving costs", body: "Domestic move or international shipment — budget separately from deposit." },
    { title: "Internet installation", body: "Router, activation and contract minimum terms for fibre setup." },
    { title: "Insurance", body: "Contents and liability before or immediately after key handover." },
    { title: "Municipal taxes", body: "Waste and water board charges even when renting some properties." },
    { title: "Parking costs", body: "Permits, garage rental or street parking in dense districts." },
    { title: "Maintenance", body: "Owners and some renters face repair responsibilities — budget buffer annually." },
  ] satisfies TipCard[],
  mistakeCards: [
    { title: "Budgeting only for rent", body: "Utilities, insurance and service costs change the real monthly stack." },
    { title: "Ignoring utility costs", body: "Poor energy labels can add €100+ monthly vs efficient homes." },
    { title: "Underestimating setup costs", body: "Deposit plus furnishing often exceeds one month of rent." },
    { title: "Focusing only on Amsterdam", body: "Commuter cities may cut housing costs 20–40% with workable OV links." },
    { title: "Ignoring commuting costs", body: "Cheaper rent plus long commute can erase savings." },
    { title: "Forgetting municipal taxes", body: "Gemeente invoices arrive separately from rent or mortgage." },
    { title: "Ignoring insurance", body: "Contents insurance is cheap relative to uncovered loss risk." },
    { title: "No emergency fund", body: "Repairs, deposit disputes and job gaps need cash reserves." },
  ] satisfies TipCard[],
  mistakeFixRows: [
    { mistake: "Budgeting only headline rent", fix: "Add utilities, insurance, service costs and parking to monthly stack." },
    { mistake: "Ignoring energy label at viewing", fix: "Ask for label and estimate — label G can add €100+ monthly in winter." },
    { mistake: "Assuming Amsterdam is the only option", fix: "Compare total stack in Rotterdam, Hague, Haarlem or Utrecht satellites." },
    { mistake: "Skipping kosten koper planning", fix: "Budget 4–6% buyer cash separately from mortgage down payment." },
    { mistake: "No setup cash buffer", fix: "Plan deposit + furnishing + moving before first month's rent transfer." },
    { mistake: "Forgetting commute cost", fix: "Add OV, car and parking to location comparison spreadsheet." },
    { mistake: "Skipping contents insurance", fix: "Quote €10–€25/month cover before key handover." },
    { mistake: "No emergency fund after move", fix: "Keep 2–3 months housing stack in savings beyond deposit cash." },
  ] satisfies MistakeFixRow[],
  checklist: [
    "Calculate total monthly housing stack (rent or mortgage + utilities + insurance)",
    "Include service costs and parking in rent comparisons",
    "Confirm which utilities are included in the lease",
    "Quote contents and liability insurance before signing",
    "Check municipal tax and waste charge responsibility",
    "Add commuting cost (OV, car, parking) to location choice",
    "Compare at least two cities or neighbourhoods",
    "Keep emergency savings separate from deposit and furnishing cash",
  ],
  checklistDetailItems: [
    { task: "Calculate total monthly housing stack", detail: "Rent or mortgage + utilities + insurance + parking + commute.", timing: "Before search" },
    { task: "Confirm utilities in lease", detail: "Electricity, gas, water, internet, waste — ask what is included.", timing: "At viewing" },
    { task: "Quote insurance", detail: "Contents and liability for renters; building cover for owners.", timing: "Before signing" },
    { task: "Check municipal charges", detail: "Waste, water board and parking permit responsibility.", timing: "Before signing" },
    { task: "Plan setup cash", detail: "Deposit, furnishing, moving, energy supplier deposit.", timing: "Before transfer" },
    { task: "Compare two cities or neighbourhoods", detail: "Total stack including commute — not headline rent alone.", timing: "Before narrowing search" },
    { task: "Verify energy label", detail: "Label A–G materially affects winter utility bills.", timing: "At viewing" },
    { task: "Track actual bills after move-in", detail: "Adjust budget with real data after 2–3 months.", timing: "After move-in" },
  ] satisfies ChecklistDetailItem[],
  faq: [
    { q: "How much is rent in the Netherlands?", a: "Orientation ranges vary widely: studios from roughly €800 in smaller cities to €1,800+ in Amsterdam centre; family homes can exceed €3,000 in Randstad hotspots. Always verify live listings for your target neighbourhood." },
    { q: "Is Amsterdam expensive?", a: "Amsterdam is generally among the most expensive Dutch housing markets for both rent and purchase. Many expats compare Rotterdam, The Hague, Utrecht satellite towns or Haarlem for lower monthly stacks with workable commutes." },
    { q: "What city is most affordable?", a: "There is no single cheapest city — Groningen, Maastricht and parts of Limburg often offer lower rents, while satellite towns around Randstad cities trade commute time for space. Compare total monthly stack, not headline rent alone." },
    { q: "How much do utilities cost?", a: "Many households pay roughly €150–€350+ monthly for energy, water, internet and mobile combined, depending on property size, energy label and usage. Poor insulation increases heating costs materially." },
    { q: "What hidden costs should I expect?", a: "Deposit, furnishing, moving, insurance, municipal charges, parking permits and utility activation deposits commonly surprise newcomers who budget only headline rent." },
    { q: "Can expats get mortgages?", a: "Many expats may qualify depending on residency, employment contract, income stability and lender policy — but kosten koper cash and NHG limits still apply. See the mortgages for expats guide and AFM-regulated advice." },
    { q: "How much income do I need?", a: "Lenders and landlords assess net income, debts and household size. Orientation: keep total housing stack comfortable within net income — many households target roughly 30–35% for all housing-related costs." },
    { q: "Is buying cheaper than renting?", a: "Not always. Buying adds upfront kosten koper, maintenance and market risk; renting preserves flexibility. Compare total cost over your expected stay horizon using the buy vs rent guide." },
  ],
  officialSources: [
    { label: "CBS", href: "https://www.cbs.nl/", description: "Statistics Netherlands — housing prices, rent trends and regional data." },
    { label: "Kadaster", href: "https://www.kadaster.nl/", description: "Land registry — property transactions and market context." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official government portal — housing consumer information." },
  ],
  sourcesDisclaimer:
    "Housing prices and rental costs change regularly. Always verify current market conditions using official statistics, live listings and local municipality sources before making decisions.",
  sourceUsageTips: [
    "Check CBS publication dates — quarterly releases move market benchmarks.",
    "Use Kadaster for transaction context, not as a personal valuation.",
    "Municipality sites list local taxes, parking and registration rules.",
    "Pair national data with live listing sites for your exact neighbourhood.",
  ],
  relatedGuides: [
    { label: "Housing in the Netherlands", href: HOUSING_HUB_PATH, description: "Central hub for renting, buying and city guides.", status: "live" },
    { label: "Renting in the Netherlands", href: RENTING_NETHERLANDS_PATH, description: "Contracts, deposits and tenant orientation.", status: "live" },
    { label: "Rental contracts and deposits", href: RENTAL_CONTRACTS_AND_DEPOSITS_NETHERLANDS_PATH, description: "Leases, deposits, inventory lists and move-in inspections.", status: "live" },
    { label: "Rental Scams", href: RENTAL_SCAMS_NETHERLANDS_PATH, description: "Warning signs, landlord verification and safe payments.", status: "live" },
    { label: "Buying a house", href: BUYING_HOUSE_NETHERLANDS_PATH, description: "Purchase process and kosten koper for expats.", status: "live" },
    { label: "Mortgages for expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, description: "Borrowing capacity and application steps.", status: "live" },
    { label: "Buy vs rent", href: BUY_VS_RENT_NETHERLANDS_PATH, description: "Decision guide for stay horizon and flexibility.", status: "live" },
    { label: "Utilities in the Netherlands", href: UTILITIES_NETHERLANDS_PATH, description: "Energy, water, internet and setup after moving.", status: "live" },
    { label: "Insurance providers", href: INSURANCE_PROVIDERS_NETHERLANDS_PATH, description: "Contents, liability and home insurance orientation.", status: "live" },
    {
      label: "Hidden costs of living (Money)",
      href: "/netherlands/money/hidden-costs-netherlands/",
      description: "Cross-category newcomer surprises beyond housing-only lines.",
      status: "live",
    },
  ] satisfies HousingCostsLink[],
  exploreNextCards: [
    { label: "Renting guide", href: RENTING_NETHERLANDS_PATH, description: "Contracts, deposits and search strategy.", status: "live" },
    { label: "Rental Scams", href: RENTAL_SCAMS_NETHERLANDS_PATH, description: "Verify listings before any deposit transfer.", status: "live" },
    { label: "Buying guide", href: BUYING_HOUSE_NETHERLANDS_PATH, description: "Kosten koper and Dutch purchase process.", status: "live" },
    { label: "Mortgage guide", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, description: "Expat mortgage eligibility and capacity.", status: "live" },
    { label: "Utilities guide", href: UTILITIES_NETHERLANDS_PATH, description: "Monthly household services setup.", status: "live" },
    { label: "Insurance providers", href: INSURANCE_PROVIDERS_NETHERLANDS_PATH, description: "Compare contents and liability cover.", status: "live" },
  ] satisfies HousingCostsLink[],
  exploreNextTips: [
    "Run the rent affordability calculator with your net salary before intense searching.",
    "Save three favourite cities and compare total monthly stack, not rent alone.",
    "Book mortgage orientation early if buying within 12–24 months.",
    "Re-read hidden costs section before transferring any deposit.",
  ],
  calculatorLinks: [
    { label: "Rent affordability calculator", href: RENT_AFFORDABILITY_TOOL_PATH, description: "Stress-test rent against income.", status: "live" },
    { label: "Net salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, description: "Estimate take-home pay for budgeting.", status: "live" },
    { label: "Expat salary guide", href: EXPAT_SALARY_NETHERLANDS_PATH, description: "Gross vs net and compensation context.", status: "live" },
  ] satisfies HousingCostsLink[],
};
