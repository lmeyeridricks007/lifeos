import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — Dutch makelaars for buying/selling property (not rental agencies). */
export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;

export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const HOUSING_PLATFORMS_PATH = "/netherlands/services/housing-platforms/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const STORAGE_COMPANIES_PATH = "/netherlands/services/storage-companies/" as const;
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/" as const;
export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const MORTGAGES_FOR_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const BUY_VS_RENT_NETHERLANDS_PATH = "/netherlands/housing/buy-vs-rent-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;

export const ESTATE_AGENTS_AFFILIATE_PLACEMENT_ID =
  "nl-services-estate-agents-support-providers" as const;

export type EstateAgentProvider = {
  name: string;
  slug: string;
  city: string;
  region: string;
  summary: string;
  expatFocus: string;
  languages: string[];
  remoteSupport: boolean;
  inPersonAvailability: string;
  website: string;
  engagementType: string;
  agentType:
    | "Aankoopmakelaar (buyer)"
    | "Verkoopmakelaar (seller)"
    | "Full-service NVM office"
    | "National franchise"
    | "Boutique / independent"
    | "Expat-oriented purchase support";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type EstateAgentLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-estate-agents";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const estateAgentsNetherlandsPage = {
  slug: "estate-agents",
  path: ESTATE_AGENTS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(ESTATE_AGENTS_PATH) ?? "2026-10-28",
  affiliatePlacementId: ESTATE_AGENTS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Estate Agents in the Netherlands for Expats | Dutch Makelaars",
    description:
      "Compare Dutch estate agents (makelaars) for buying and selling property — aankoopmakelaar and verkoopmakelaar roles, fees and expat process support. Soft discovery, not a ranking; not rental agencies.",
    keywords: [
      "estate agents netherlands",
      "makelaar netherlands",
      "aankoopmakelaar expat",
      "verkoopmakelaar netherlands",
      "buy house netherlands agent",
      "dutch real estate agent",
      "NVM makelaar",
      "selling house netherlands expat",
      "compare estate agents netherlands",
      "buyer agent amsterdam",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Estate agents",
    pageTitle: "Estate Agents in the Netherlands for Expats",
    subtitle:
      "Compare Dutch makelaars for buying and selling property — buyer agents (aankoopmakelaar), selling agents (verkoopmakelaar) and full-service offices. This is a services directory for purchase and sale support, not rental agencies or listing platforms alone.",
    primaryCta: { label: "Browse Makelaar Directory", href: "#directory" },
    secondaryCta: { label: "How Makelaars Differ", href: "#differentiate" },
    chips: ["Aankoopmakelaar", "Verkoopmakelaar", "Buy & sell process", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-estate-agents-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat couple reviewing a Dutch property purchase file with a makelaar in a bright canal-side office, floorplans and viewing notes on the table.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what estate agents help with: search strategy, viewings, bidding, negotiations, selling prep and notary coordination.",
      "Makelaars support buying or selling process steps — confirm mandate scope and fees before you instruct."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating estate agents (buy/sell makelaars), rental agencies, housing platforms and mortgage advisors.",
      "Pick the right provider type first — makelaars are not rental brokers or mortgage advisors."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about estate agents in the Netherlands for expats.",
      "Use this snapshot before instructing a makelaar: role, fees, NVM context and process timing differ."
    ),
    agentServices: visual(
      "agent-services",
      "Infographic of makelaar services: buyer search, viewings, bidding strategy, seller staging, valuation context and notary handoff.",
      "Service depth varies: some agents only list; others run full buyer advocacy."
    ),
    agentTypes: visual(
      "agent-types",
      "Infographic comparing aankoopmakelaar, verkoopmakelaar, full-service NVM offices, franchises and boutique independents.",
      "Match the agent model to buy vs sell goals — conflict of interest can matter."
    ),
    buySell: visual(
      "buy-sell",
      "Infographic explaining buy vs sell pathways for expats working with Dutch makelaars.",
      "Buyer and seller mandates are different jobs — do not assume one agent covers both without clarity."
    ),
    fees: visual(
      "fees",
      "Infographic explaining Dutch estate agent fee models: success fees, fixed packages and what is included.",
      "Ask what is included, when payment is due and what happens if a deal falls through."
    ),
    documents: visual(
      "documents",
      "Infographic listing documents and prep items often needed when working with a Dutch makelaar.",
      "ID, financing proof, property documents and viewing notes commonly start the file."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with Dutch makelaars: bidding pressure, terminology, dual agency, language and timing with mortgage advisors.",
      "Use early clarity on mandate and bidding strategy to reduce surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing estate agent coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Local market knowledge still matters even when agents work online nationwide."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral makelaar directory workflow: shortlist, compare mandates, verify credentials and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for estate agents: agent type, languages, city coverage and expat focus.",
      "Compare agents by mandate fit before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch estate agents before instructing them.",
      "Good questions reveal fees, dual-agency risks, bidding support and language coverage."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common estate-agent FAQ topics: buy vs rent agency, fees, NVM, bidding and red flags.",
      "FAQ answers should help you pick the next verification step — not guarantee sale prices."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist makelaars: define buy or sell goal, compare fees, check credentials and align with mortgage advisor.",
      "Turn provider discovery into a structured shortlist before you sign a mandate."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for property and consumer orientation in the Netherlands.",
      "Verify consumer rights and buying process context with official sources — not agent marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around a Dutch purchase or sale: estate agents, mortgage advisors, housing platforms, notaries and tax advisors.",
      "Makelaars are one part of the wider buy/sell support ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing estate agents: buying guide, mortgages, buy vs rent, rental agencies and housing platforms.",
      "Continue from makelaar discovery into financing, process guides and city choice."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting estate agent research to mortgage advisors, housing platforms, rental agencies, storage and Dutch cities.",
      "Makelaar shortlists connect naturally into mortgage advice and housing timing."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#agent-role", label: "What agents do" },
    { href: "#agent-types", label: "Agent types" },
    { href: "#buy-sell", label: "Buy vs sell" },
    { href: "#fees", label: "Fees" },
    { href: "#documents", label: "Documents" },
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
    heading: "Why Expats Compare Dutch Estate Agents (Makelaars)",
    paragraphs: [
      "Buying or selling a home in the Netherlands often involves a makelaar: an estate agent who helps with search strategy, viewings, bidding, negotiations or preparing a sale — alongside mortgage advisors, notaries and listing platforms.",
      "This page is a services directory for purchase and sale agents (aankoopmakelaar / verkoopmakelaar). It is not the rental-agency directory, not a DIY listing-platform guide, and not mortgage advice.",
      "Inclusion here is informational soft discovery, not a ranking. No agent can guarantee a winning bid or sale price. Confirm mandate scope, fees, dual-agency risks and credentials directly before you instruct.",
    ],
    links: [
      { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH },
      { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH },
      { label: "Rental agencies", href: RENTAL_AGENCIES_PATH },
      { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Estate agents (this page)",
      body: "Dutch makelaars for buying and selling property — buyer advocacy, seller representation and full-service offices.",
      href: ESTATE_AGENTS_PATH,
      status: "live" as const,
    },
    {
      title: "Rental agencies",
      body: "Agencies that help tenants find or mediate rentals — not purchase or sale mandates.",
      href: RENTAL_AGENCIES_PATH,
      status: "live" as const,
    },
    {
      title: "Housing platforms",
      body: "DIY listing marketplaces (e.g. Funda/Pararius-style search) where you browse and contact listings yourself.",
      href: HOUSING_PLATFORMS_PATH,
      status: "live" as const,
    },
    {
      title: "Mortgage advisors",
      body: "Regulated mortgage advice and lender comparison — financing, not property negotiation.",
      href: MORTGAGE_ADVISORS_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Main roles", value: "Buy / sell", note: "Aankoopmakelaar vs verkoopmakelaar mandates differ." },
    { label: "Common friction", value: "Bidding", note: "Competitive markets need clear capacity and strategy." },
    { label: "Provider models", value: "5+ types", note: "Buyer agents, seller agents, NVM offices, franchises, boutiques." },
    { label: "Fees", value: "Mandate-based", note: "Success fees and packages vary — get them in writing." },
    { label: "Languages", value: "Varies", note: "English-friendly agents exist; confirm viewing support." },
    { label: "Guarantee", value: "None", note: "No directory can guarantee bids, valuations or sale outcomes." },
  ],
  agentServices: [
    { title: "Buyer search strategy", body: "Criteria, neighbourhoods, alerts and shortlists beyond casual Funda browsing." },
    { title: "Viewings & due diligence", body: "Organised viewings, question lists and notes on condition, VvE and practical risks." },
    { title: "Bidding & negotiation", body: "Offer strategy, bid letters and negotiation support in competitive markets." },
    { title: "Seller listing prep", body: "Pricing context, staging advice, listing photos and open-house planning." },
    { title: "Process coordination", body: "Handoffs with mortgage advisors, valuers, notaries and other parties." },
    { title: "Local market insight", body: "Street-level knowledge that listing portals alone rarely replace." },
  ],
  agentTypeComparison: [
    {
      type: "Aankoopmakelaar (buyer agent)",
      scope: "Represents the buyer’s interest in search, viewings, bidding and negotiations.",
      usefulWhen: "You are purchasing and want advocacy separate from the seller’s agent.",
      questions: ["Who pays your fee?", "Do you ever also represent sellers on the same street?", "How do you support bidding?"],
    },
    {
      type: "Verkoopmakelaar (seller agent)",
      scope: "Represents the seller: pricing strategy, listing, viewings for buyers and sale negotiations.",
      usefulWhen: "You are selling a Dutch home and need listing and negotiation support.",
      questions: ["Commission structure?", "Marketing plan?", "How are offers handled?"],
    },
    {
      type: "Full-service NVM office",
      scope: "Often covers buy and sell work under NVM association membership context — verify independence per file.",
      usefulWhen: "You want a recognised local office with process experience.",
      questions: ["NVM membership current?", "Conflict rules if you also list nearby?", "English support?"],
    },
    {
      type: "National franchise",
      scope: "Brand networks with local franchisees and shared marketing tools.",
      usefulWhen: "You want brand recognition plus local agents — still verify the local team.",
      questions: ["Who is my local agent?", "Fee schedule?", "Who negotiates on the day?"],
    },
    {
      type: "Boutique / independent",
      scope: "Smaller offices with deep local focus and personal service.",
      usefulWhen: "You value neighbourhood expertise over national branding.",
      questions: ["Coverage area?", "Capacity in peak season?", "References process?"],
    },
  ],
  expatBuyerSellerProfiles: [
    { profile: "First-time expat buyer", whatCanMatter: "Bidding culture, financing proof, viewing etiquette and notary timing.", exampleQuestion: "Can you explain bid strategy for my budget and mortgage status?" },
    { profile: "Seller relocating abroad", whatCanMatter: "Remote decision-making, power of attorney, listing timing with departure.", exampleQuestion: "Can we run the sale while I am overseas?" },
    { profile: "Buy and sell chain", whatCanMatter: "Overlapping mandates, temporary storage and mortgage bridging.", exampleQuestion: "How do you coordinate sale completion with my purchase?" },
    { profile: "Competitive Randstad search", whatCanMatter: "Speed, bid letters, capacity letters and weekend viewing slots.", exampleQuestion: "How quickly can you support an offer after a viewing?" },
  ],
  feeExamples: [
    { item: "Buyer agent fee", typicalRange: "Fixed package or % — varies", whatToConfirm: "What is included (search, bidding, negotiation) and when payable." },
    { item: "Seller commission", typicalRange: "Often success-based %", whatToConfirm: "Marketing costs included, exclusivity period and cancellation terms." },
    { item: "Dual services (buy + sell)", typicalRange: "Combined packages", whatToConfirm: "Conflict handling if both sides are represented by related offices." },
    { item: "Third-party costs", typicalRange: "Separate", whatToConfirm: "Notary, valuation, structural survey and mortgage advisor fees." },
  ],
  documentChecklist: [
    { document: "ID / passport", why: "Required for mandates and notary identification later." },
    { document: "Proof of financing / mortgage orientation", why: "Sellers and bidding often expect capacity evidence." },
    { document: "Wish-list criteria", why: "Helps buyer agents filter neighbourhoods and property types." },
    { document: "Existing property documents (sellers)", why: "Energy label, VvE info, drawings and prior reports speed listing." },
    { document: "Employment / relocation timing", why: "Aligns completion dates with arrival or departure." },
    { document: "Power of attorney plans", why: "Needed if you cannot attend notary signing in person." },
    { document: "Question list for viewings", why: "Keeps due diligence consistent across busy weekends." },
  ],
  challengeCards: [
    { title: "Bidding pressure", body: "Competitive cities push fast offers — capacity and strategy must be ready." },
    { title: "Role confusion", body: "Seller’s agent is not your buyer advocate unless clearly mandated." },
    { title: "Fee surprises", body: "Marketing extras or early termination clauses can appear late." },
    { title: "Language gaps", body: "Dutch contracts and viewing notes need clear English explanations." },
    { title: "Mortgage timing", body: "Accepted offers create tight windows with advisors and valuers." },
    { title: "Dual agency risks", body: "Same network representing both sides needs transparent rules." },
    { title: "Portal vs agent", body: "Funda browsing alone is not the same as instructed buyer advocacy." },
    { title: "Remote sellers", body: "Overseas sellers need clear decision rights and signing logistics." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "Intense bidding culture; buyer agents are commonly used." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Mixed stock; local agents help across neighbourhoods." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International buyers and families; English support varies." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Competitive centre and commuter demand." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Tech-driven buyer demand and regional growth." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam spillover with premium family interest." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Compact historic market; local knowledge helps." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "University and tech buyer interest." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern market with different price dynamics." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern regional buying and selling." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University city turnover and family homes." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Cross-border region; confirm agent coverage." },
  ],
  providers: [
    {
      name: "Independent aankoopmakelaar (buyer advocate)",
      slug: "independent-aankoopmakelaar",
      city: "Major cities",
      region: "Netherlands",
      summary: "Buyer-focused estate agents who search, attend viewings and support bids on behalf of purchasing clients.",
      expatFocus: "Often the best fit when you want advocacy separate from the seller’s listing agent — confirm English support.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Viewings in person; strategy calls can be remote.",
      website: "https://www.nvm.nl/",
      engagementType: "Buyer mandate / aankoopbegeleiding",
      agentType: "Aankoopmakelaar (buyer)",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Multiple cities"],
      featured: true,
      verificationNote: "Use NVM/VBO directories and local referrals to identify current buyer agents; this row explains the role, not a single brand endorsement.",
    },
    {
      name: "Independent verkoopmakelaar (seller agent)",
      slug: "independent-verkoopmakelaar",
      city: "Major cities",
      region: "Netherlands",
      summary: "Seller-focused agents who prepare listings, host viewings and negotiate offers for homeowners.",
      expatFocus: "Useful for leavers selling remotely; confirm power-of-attorney and English reporting.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Listing photography and viewings on site; updates can be remote.",
      website: "https://www.nvm.nl/",
      engagementType: "Seller mandate / listing agreement",
      agentType: "Verkoopmakelaar (seller)",
      citiesServed: ["Netherlands-wide local offices"],
      featured: true,
      verificationNote: "Compare written marketing plans and commission terms before granting exclusivity.",
    },
    {
      name: "NVM member local offices",
      slug: "nvm-local-offices",
      city: "Nationwide",
      region: "Netherlands",
      summary: "Local estate-agent offices operating under NVM association membership context with buy and sell services.",
      expatFocus: "Recognised association context; still verify the individual agent’s English skills and mandate clarity.",
      languages: ["Dutch", "English availability varies by office"],
      remoteSupport: true,
      inPersonAvailability: "Local offices; verify nearest branch.",
      website: "https://www.nvm.nl/",
      engagementType: "Buy and/or sell mandates via local office",
      agentType: "Full-service NVM office",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote: "NVM membership is association context — confirm the specific office and advisor for your file.",
    },
    {
      name: "RE/MAX Nederland",
      slug: "remax-nederland",
      city: "Multiple cities",
      region: "National franchise",
      summary: "International franchise network with Dutch local agents for buying and selling residential property.",
      expatFocus: "Brand familiarity can help internationals; verify the local franchisee’s languages and fees.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Local franchise offices; confirm city coverage.",
      website: "https://www.remax.nl/",
      engagementType: "Local franchise buy/sell services",
      agentType: "National franchise",
      citiesServed: ["Multiple Dutch cities"],
      featured: false,
      verificationNote: "Franchise quality varies by office — interview the local agent who will handle viewings.",
    },
    {
      name: "ERA Makelaars",
      slug: "era-makelaars",
      city: "Multiple cities",
      region: "National franchise",
      summary: "Franchise estate-agent network active in the Netherlands for residential sales and related services.",
      expatFocus: "Useful when you want a branded local office; confirm English bidding support.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Local offices; verify current locations.",
      website: "https://www.era.nl/",
      engagementType: "Franchise buy/sell mandates",
      agentType: "National franchise",
      citiesServed: ["Multiple Dutch cities"],
      featured: false,
      verificationNote: "Ask for a written fee schedule and who negotiates on offer day.",
    },
    {
      name: "Boutique independent makelaarskantoren",
      slug: "boutique-independent-makelaars",
      city: "City-specific",
      region: "Local Netherlands",
      summary: "Small independent offices with deep neighbourhood expertise for buy and sell mandates.",
      expatFocus: "Strong local insight; English support and capacity in peak seasons vary — interview early.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Usually in-person viewings; strategy calls flexible.",
      website: "https://www.funda.nl/",
      engagementType: "Local boutique mandates",
      agentType: "Boutique / independent",
      citiesServed: ["Local neighbourhood focus"],
      featured: false,
      verificationNote: "Find boutiques via Funda agent profiles and local referrals; verify credentials and exclusivity terms.",
    },
    {
      name: "Expat-oriented purchase support agents",
      slug: "expat-oriented-purchase-support",
      city: "Randstad focus",
      region: "Western Netherlands",
      summary: "Agents and offices that market English-language buyer support for international professionals.",
      expatFocus: "Helpful for bidding culture explanations and mortgage-advisor coordination — still not mortgage advice.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Randstad viewings common; remote intake possible.",
      website: "https://www.funda.nl/",
      engagementType: "Expat buyer support packages",
      agentType: "Expat-oriented purchase support",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam"],
      featured: true,
      verificationNote: "Confirm whether they are true aankoopmakelaars with a clear buyer mandate vs informal search help.",
    },
    {
      name: "Seller remote / relocation sale support",
      slug: "remote-seller-support",
      city: "Netherlands-wide",
      region: "National",
      summary: "Seller-agent workflows designed for clients who are already abroad or leaving soon.",
      expatFocus: "Power of attorney, digital updates and completion timing matter more than glossy listing photos alone.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Local team handles viewings; client decisions remote.",
      website: "https://www.nvm.nl/",
      engagementType: "Remote seller representation",
      agentType: "Verkoopmakelaar (seller)",
      citiesServed: ["Netherlands-wide via local partners"],
      featured: false,
      verificationNote: "Clarify decision rights, keys handling and notary attendance plans before you leave the country.",
    },
  ] satisfies EstateAgentProvider[],
  comparisonTable: [
    { advisor: "Independent aankoopmakelaar", citiesServed: "Major cities", expatFocus: "Buyer advocacy", languages: "Dutch, English varies", onlineConsultations: "Often", advisorType: "Aankoopmakelaar (buyer)" },
    { advisor: "Independent verkoopmakelaar", citiesServed: "Local offices", expatFocus: "Seller listing & negotiation", languages: "Dutch, English varies", onlineConsultations: "Updates remote", advisorType: "Verkoopmakelaar (seller)" },
    { advisor: "NVM local offices", citiesServed: "Netherlands-wide", expatFocus: "Association-context offices", languages: "Dutch, English varies", onlineConsultations: "Varies", advisorType: "Full-service NVM office" },
    { advisor: "RE/MAX Nederland", citiesServed: "Multiple cities", expatFocus: "Franchise brand familiarity", languages: "Dutch, English varies", onlineConsultations: "Varies", advisorType: "National franchise" },
    { advisor: "ERA Makelaars", citiesServed: "Multiple cities", expatFocus: "Franchise buy/sell", languages: "Dutch, English varies", onlineConsultations: "Varies", advisorType: "National franchise" },
    { advisor: "Boutique independents", citiesServed: "Neighbourhood focus", expatFocus: "Deep local knowledge", languages: "Dutch, English varies", onlineConsultations: "Varies", advisorType: "Boutique / independent" },
    { advisor: "Expat purchase support", citiesServed: "Randstad common", expatFocus: "English buyer support", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Expat-oriented purchase support" },
    { advisor: "Remote seller support", citiesServed: "Partner network", expatFocus: "Overseas sellers", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Verkoopmakelaar (seller)" },
  ],
  questionsToAsk: [
    "Are you acting as my aankoopmakelaar (buyer) or the seller’s agent on this property?",
    "How are fees structured, and what is included in the mandate?",
    "Do you or your office also represent sellers in the same neighbourhood?",
    "How do you support bidding strategy and bid letters?",
    "What languages do you support during viewings and contract explanations?",
    "How do you coordinate with mortgage advisors, valuers and the notary?",
    "What are exclusivity, cancellation and success-fee terms?",
    "If I am abroad, how do decisions and key handovers work?",
  ],
  relatedHousingGuides: [
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "End-to-end home-buying process for expats." },
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Financing context to align with makelaar timelines." },
    { label: "Buy vs Rent", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Decide whether purchase support is the right path." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Regulated mortgage advice — separate from makelaars." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "DIY listing search alongside or before instructing an agent." },
  ] satisfies EstateAgentLink[],
  leadCta: {
    heading: "Need Help Shortlisting Estate Agents?",
    body: "Use the directory to compare agent types, city coverage, language support and mandate models. Then contact shortlisted makelaars to verify fees, credentials and fit — and keep mortgage advice on the Mortgage advisors page.",
    primaryCta: { label: "Compare Estate Agents", href: "#directory" },
    secondaryCta: { label: "Open Mortgage Advisors", href: MORTGAGE_ADVISORS_PATH },
  },
  faqs: [
    {
      q: "Is an estate agent the same as a rental agency?",
      a: "No. Estate agents (makelaars) focus on buying and selling property. Rental agencies help tenants mediate rentals. Use the Rental agencies page for tenant search support.",
    },
    {
      q: "Do I need an aankoopmakelaar if I already use Funda?",
      a: "Not always. Many buyers browse platforms themselves. A buyer agent can still help with strategy, viewings, bidding and negotiation in competitive markets. Housing platforms and makelaars solve different jobs.",
    },
    {
      q: "How do estate agents differ from mortgage advisors?",
      a: "Makelaars work on the property transaction side. Mortgage advisors provide regulated financing advice. Most buyers need both conversations, but they are different professionals.",
    },
    {
      q: "What do Dutch estate agents cost?",
      a: "Fee models vary: seller commissions are often success-based; buyer agents may charge packages or percentages. Always confirm inclusions, timing of payment and cancellation terms in writing.",
    },
    {
      q: "What is NVM?",
      a: "NVM is a major Dutch association of real-estate agents. Membership can be a useful signal, but you should still evaluate the individual agent, fees and English support for your case.",
    },
    {
      q: "Can one agent represent both buyer and seller?",
      a: "Practices and conflict rules vary. Ask explicitly who they represent on a given property and how dual interests are handled before you share strategy or maximum budget.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a makelaar?",
      a: "No. Listings are informational soft discovery only. Always verify current services, fees, languages and fit directly with the provider.",
    },
    {
      q: "Where do storage and moving fit?",
      a: "If sale and purchase dates do not overlap, you may need Storage companies and Moving companies around completion — those are separate directories from makelaars.",
    },
  ],
  officialSources: [
    { label: "NVM", href: "https://www.nvm.nl/", description: "Dutch association of real-estate agents — consumer information and member context." },
    { label: "Government.nl — Housing", href: "https://www.government.nl/topics/housing", description: "Official Dutch government information related to housing topics." },
    { label: "ACM — Consumers", href: "https://www.acm.nl/en/consumers", description: "Consumer authority orientation for contracts and services." },
    { label: "Kadaster", href: "https://www.kadaster.nl/zakelijk", description: "Land registry context relevant to property transactions." },
  ],
  relatedGuides: [
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Financing advice to align with purchase timelines." },
    { label: "Notaries", href: "/netherlands/services/notaries/", status: "live", description: "Dutch notaris for purchase deeds — required at completion, not a makelaar substitute." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "live", description: "Broader household planning beyond the purchase transaction." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "DIY listing platforms for property search." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Tenant mediation — different from buy/sell makelaars." },
    { label: "Storage companies", href: STORAGE_COMPANIES_PATH, status: "live", description: "Self-storage when sale and purchase dates do not overlap." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Full buying process guide for expats." },
  ] satisfies EstateAgentLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Regulated mortgage advice for buyers." },
    { label: "Notaries", href: "/netherlands/services/notaries/", status: "live", description: "Notaris for levering, hypotheekakte and related acts." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "live", description: "Long-term planning beside property purchase." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Listing platforms for DIY search." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Rental mediation for tenants." },
    { label: "Storage companies", href: STORAGE_COMPANIES_PATH, status: "live", description: "Self-storage between leases or completions." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic house moves." },
    { label: "Removal companies", href: REMOVAL_COMPANIES_PATH, status: "live", description: "International household removals." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Full-package relocation coordination." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Tax support around property and relocation." },
  ] satisfies EstateAgentLink[],
  exploreNextCards: [
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Align financing capacity before aggressive bidding." },
    { label: "Notaries", href: "/netherlands/services/notaries/", status: "live", description: "Prepare deed and completion diary after you win a bid." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "live", description: "Pressure-test affordability beyond the purchase itself." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Browse listings while you instruct a buyer agent." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Understand process steps around your makelaar." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare city markets before you instruct an agent." },
  ] satisfies EstateAgentLink[],
};
