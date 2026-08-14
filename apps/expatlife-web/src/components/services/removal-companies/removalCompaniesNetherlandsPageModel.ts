import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — international household removals for arrivals and leavers. */
export const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/" as const;

/** Sibling directory — domestic / within-Netherlands house moves. */
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;

export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const HOUSING_PLATFORMS_PATH = "/netherlands/services/housing-platforms/" as const;
export const INTERNATIONAL_SHIPPING_PATH = "/netherlands/services/international-shipping/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const RECRUITMENT_AGENCIES_SERVICES_PATH = "/netherlands/services/recruitment-agencies/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const MOVING_CHECKLIST_PATH = "/netherlands/moving/tools/moving-checklist/" as const;
export const SHIPPING_HOUSEHOLD_GOODS_PATH = "/netherlands/shipping-household-goods-netherlands/" as const;
export const PET_RELOCATION_COMPANIES_PATH = "/netherlands/services/pet-relocation-companies/" as const;
export const CLEANING_COMPANIES_PATH = "/netherlands/services/cleaning-companies/" as const;

export const REMOVAL_COMPANIES_AFFILIATE_PLACEMENT_ID =
  "nl-services-removal-companies-support-providers" as const;

export type RemovalCompanyProvider = {
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
  moverType:
    | "Door-to-door international"
    | "Container / groupage"
    | "Air / priority"
    | "Corporate mobility"
    | "Destination unpack"
    | "Quote marketplace";
  services: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type RemovalCompanyLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-removal-companies";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const removalCompaniesNetherlandsPage = {
  slug: "removal-companies",
  path: REMOVAL_COMPANIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(REMOVAL_COMPANIES_PATH) ?? "2026-10-25",
  affiliatePlacementId: REMOVAL_COMPANIES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Removal Companies in the Netherlands for Expats | International Household Moves",
    description:
      "Compare international household removal companies for arrivals and leavers — door-to-door overseas moves, packing and customs orientation. Soft discovery, not a ranking; not domestic NL van moves.",
    keywords: [
      "removal companies netherlands",
      "international removals netherlands",
      "household goods move netherlands",
      "overseas movers netherlands",
      "door to door removal netherlands",
      "expat international move",
      "shipping household goods netherlands",
      "leaving netherlands removals",
      "arriving netherlands removals",
      "compare removal companies netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Removal companies",
    pageTitle: "Removal Companies in the Netherlands for Expats",
    subtitle:
      "Compare international household removal companies for arrivals and leavers — door-to-door overseas moves, packing and customs orientation. Domestic within-NL house moves live on Moving companies.",
    primaryCta: { label: "Browse Removals Directory", href: "#directory" },
    secondaryCta: { label: "How Removals Differ", href: "#differentiate" },
    chips: ["International removals", "Door-to-door", "Arrival & departure", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-removal-companies-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an international household removal: labeled wooden crates and a shipping container staged near a Dutch canal warehouse while coordinators review a door-to-door checklist.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what international removal companies help with: export packing, ocean or air transit, customs orientation and destination delivery.",
      "International removers move household goods across borders — confirm mode, transit time and insurance before deposit."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating moving companies (domestic NL), removal companies (international household goods), relocation agencies (full packages) and international shipping (freight/parcels).",
      "Pick the right provider type first — international removers are not the same as international removals or relocation packages."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about international removal companies in the Netherlands for expats.",
      "Use this snapshot before requesting quotes: access, packing scope, stairs and insurance differ widely."
    ),
    moverTypes: visual(
      "mover-types",
      "Infographic comparing mover types: local van, full-service domestic, apartment specialist, student/budget and national networks.",
      "Match the mover model to your volume, building access and budget — not every van covers full packing."
    ),
    moverServices: visual(
      "mover-services",
      "Infographic of international removalr services: packing, loading, stairs/elevator handling, city transport, assembly and temporary storage options.",
      "Service depth varies: some teams only transport; others pack, dismantle and reassemble."
    ),
    compare: visual(
      "compare",
      "Infographic checklist for comparing international removal companies: written quote, access survey, packing scope, insurance and cancellation terms.",
      "Compare process quality and building logistics before you compare hourly rates alone."
    ),
    costs: visual(
      "costs",
      "Infographic explaining domestic moving cost drivers: volume, distance, stairs, packing hours and weekend surcharges.",
      "Ask for a written quote with access assumptions — stairs and packing often change the final price."
    ),
    prep: visual(
      "prep",
      "Infographic listing prep items before a Dutch house move: inventory, parking permits, elevator booking, keys and fragile packing plan.",
      "Building access and parking permits often matter as much as the van size."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with international removers: narrow stairs, no elevator, parking bans, language, weekend premiums and scope surprises.",
      "Use early surveys and written scopes to reduce move-day surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing international removalr coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Most international removers work city-to-city nationwide; local apartment access still varies by team."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral mover directory workflow: shortlist, compare quotes, verify access and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for international removers: mover type, packing, languages, city coverage and expat focus.",
      "Compare movers by scope and logistics fit before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask international removal companies before booking.",
      "Good questions reveal access assumptions, insurance, packing scope and what happens if the elevator fails."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common moving-company FAQ topics: domestic vs removal, costs, packing, stairs and red flags.",
      "FAQ answers should help you pick the next verification step — not guarantee prices."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist international removers: define volume, check access, request written quotes and verify insurance.",
      "Turn provider discovery into a structured shortlist before move day."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for consumer and move-related orientation in the Netherlands.",
      "Verify consumer rights and municipal parking rules with official sources — not mover marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around a Dutch house move: moving companies, removal companies, relocation agencies, housing platforms and tax advisors.",
      "International removers are one part of the wider housing and relocation support ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing movers: removal companies, relocation agencies, housing platforms and moving checklist.",
      "Continue from international removalr discovery into related logistics and settling guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting international removalr research to removal companies, relocation, housing, tax advisors and cities.",
      "Mover shortlists connect naturally into housing timing, international shipments and city choice."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#mover-types", label: "Mover types" },
    { href: "#mover-role", label: "What movers do" },
    { href: "#compare", label: "How to compare" },
    { href: "#costs", label: "Costs" },
    { href: "#prep", label: "Prep" },
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
    heading: "Why Expats Compare International Removal Companies",
    paragraphs: [
      "When you bring a household to the Netherlands from abroad — or leave with furniture and personal effects — you need an international removal company: export packing, a transit mode, customs orientation and destination delivery.",
      "This page is a services directory for international household removals. It is not the guide for within-Netherlands house moves (see Moving companies), not a full relocation package (see Relocation agencies/services), and not freight or parcel shipping alone (International shipping).",
      "Inclusion here is informational soft discovery, not a ranking. No mover can guarantee a fixed final price without accurate access details. Confirm scope, insurance and building rules directly before booking.",
    ],
    links: [
      { label: "Moving companies (domestic NL)", href: MOVING_COMPANIES_PATH },
      { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH },
      { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH },
      { label: "Services hub", href: SERVICES_HUB_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Removal companies (this page)",
      body: "International household removals — container or air shipment of belongings into or out of the Netherlands, customs timing and inventory lists.",
      href: REMOVAL_COMPANIES_PATH,
      status: "live" as const,
    },
    {
      title: "Moving companies",
      body: "Domestic house and apartment moves within the Netherlands: packing, local vans, stairs/elevators, and transport between Dutch addresses.",
      href: MOVING_COMPANIES_PATH,
      status: "live" as const,
    },
    {
      title: "Relocation agencies / services",
      body: "Broader packages: housing search, municipal registration, settling-in and sometimes move coordination — not just the van.",
      href: RELOCATION_AGENCIES_PATH,
      status: "live" as const,
    },
    {
      title: "International shipping",
      body: "Freight and parcel-style shipping for goods — not a full apartment house move. Dedicated page is not live yet.",
      href: INTERNATIONAL_SHIPPING_PATH,
      status: "comingSoon" as const,
    },
  ],
  snapshotCards: [
    { label: "Move type", value: "International", note: "Household goods crossing borders — not within-NL vans." },
    { label: "Common friction", value: "Mode + timing", note: "Sea groupage, dedicated container and air change cost and arrival windows." },
    { label: "Provider models", value: "5+ types", note: "Door-to-door, groupage, air priority, corporate mobility, destination unpack." },
    { label: "Quotes", value: "Written", note: "Ask for assumptions: hours, crew size, packing and insurance." },
    { label: "Languages", value: "Varies", note: "English-friendly crews exist; confirm booking language early." },
    { label: "Guarantee", value: "None", note: "No directory can guarantee price or damage-free outcomes." },
  ],
  moverTypeComparison: [
    {
      type: "Door-to-door international",
      scope: "Origin packing through destination delivery with one coordinating remover.",
      usefulWhen: "You want a single accountable party for an overseas household move.",
      questions: ["Which agents operate at both ends?", "What transit window?", "What is excluded at customs?"],
    },
    {
      type: "Container / groupage",
      scope: "Shared or dedicated container space for sea freight household goods.",
      usefulWhen: "You can wait longer for a lower cost per cubic metre.",
      questions: ["Shared or exclusive container?", "Expected sailing window?", "How is volume measured?"],
    },
    {
      type: "Air / priority",
      scope: "Air freight for smaller priority shipments or essential arrival kits.",
      usefulWhen: "You need critical items faster than sea transit allows.",
      questions: ["Weight vs volume pricing?", "What cannot fly?", "Door delivery included?"],
    },
    {
      type: "Corporate mobility",
      scope: "Employer-arranged international movers inside assignment packages.",
      usefulWhen: "Your company funds removals and sets policy caps.",
      questions: ["What volume is covered?", "Who pays excess?", "Can I add a self-paid top-up?"],
    },
    {
      type: "Destination unpack",
      scope: "Destination crew unpacks and places furniture after container arrival.",
      usefulWhen: "You arrive before goods or need white-glove placement.",
      questions: ["Unpack included?", "Debris removal?", "Storage if keys are late?"],
    },
  ],
  moverServices: [
    { title: "Export packing", body: "Professional packing for overseas transit with inventory lists and fragile handling." },
    { title: "Mode selection", body: "Sea groupage, dedicated container, road or air — matched to volume and timeline." },
    { title: "Customs orientation", body: "Document checklists and process orientation — not a guarantee of clearance outcomes." },
    { title: "Transit tracking", body: "Milestone updates while goods move between origin and destination hubs." },
    { title: "Destination delivery", body: "Final-mile delivery into a Dutch or overseas home, including access planning." },
    { title: "Storage bridges", body: "Origin or destination storage when leases and sailing dates do not align." },
  ],
  compareCriteria: [
    { criterion: "Written scope & quote", whyItMatters: "Verbal estimates often omit stairs, packing hours or parking time.", howToCheck: "Ask for a written quote with crew size, hours, packing and access assumptions." },
    { criterion: "Access survey", whyItMatters: "Dutch apartments often have narrow stairs and street parking limits.", howToCheck: "Share photos/video of stairs and ask if they need an on-site survey." },
    { criterion: "Packing scope", whyItMatters: "Self-pack vs full pack changes labour and breakage risk.", howToCheck: "List what they pack vs what you pack; ask about fragile items." },
    { criterion: "Insurance & liability", whyItMatters: "Standard liability may be limited; extras may be optional.", howToCheck: "Ask what is covered per kg/item and how to claim." },
    { criterion: "Language & booking clarity", whyItMatters: "Misunderstandings on move day are costly.", howToCheck: "Confirm English support for booking and on-day crew lead." },
    { criterion: "Cancellation & deposits", whyItMatters: "Lease dates slip; weekend slots book out.", howToCheck: "Read deposit, reschedule and cancellation rules before paying." },
  ],
  costExamples: [
    { item: "Local studio / 1-bed (same city)", typicalRange: "Often a few hundred euros+", whatToConfirm: "Hours, crew size, stairs flights and whether packing is included." },
    { item: "2–3 bed apartment (city-to-city)", typicalRange: "Higher fixed or day rate", whatToConfirm: "Distance, volume (m³), elevator booking and parking permits." },
    { item: "Full packing add-on", typicalRange: "Labour + materials", whatToConfirm: "Who packs fragile items and whether materials are billed separately." },
    { item: "Weekend / evening premium", typicalRange: "Surcharge common", whatToConfirm: "Building move-hour rules and whether weekday slots are cheaper." },
    { item: "Piano / bulky specialty", typicalRange: "Extra crew/equipment", whatToConfirm: "Specialist handling and separate insurance if needed." },
  ],
  prepChecklist: [
    { document: "Room-by-room inventory / photos", why: "Helps movers estimate volume and spot bulky or fragile items early." },
    { document: "Building access notes", why: "Stairs count, elevator size, moving hours and VvE rules prevent day-of delays." },
    { document: "Parking / stop-and-load plan", why: "Many Dutch streets need temporary permits or reserved loading space." },
    { document: "Key handover timing", why: "Align old and new lease keys with the crew arrival window." },
    { document: "Self-pack vs full-pack decision", why: "Defines labour hours and what remains unpacked on move morning." },
    { document: "Insurance preference", why: "Decide if standard liability is enough or you need extra cover." },
    { document: "Contact for building manager", why: "Elevator reservations and loading-bay access often need a named contact." },
  ],
  challengeCards: [
    { title: "Walk-up stairs", body: "Many Dutch flats have no elevator — stair flights drive time and price." },
    { title: "Parking bans", body: "Canal streets and permit zones can block vans without advance planning." },
    { title: "Scope creep", body: "Unpacked kitchens and last-minute boxes extend hourly jobs." },
    { title: "Language gaps", body: "Booking in English but a Dutch-only crew lead can create confusion." },
    { title: "Weekend premiums", body: "Popular slots cost more and buildings may restrict weekend moves." },
    { title: "Wrong provider type", body: "Booking an international remover for a local flat move (or vice versa) wastes quotes." },
    { title: "Deposit surprises", body: "Cancellation windows and deposit rules vary — read them before paying." },
    { title: "Damage claims friction", body: "Photos and inventory notes make claims clearer if something breaks." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "Canal streets, parking permits and walk-ups make access surveys essential." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Mix of high-rises and older housing — elevator booking often helps." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International households frequently move between apartment types." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Compact centre streets; plan loading space early." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Common destination for tech movers from the Randstad." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam-area spillover moves with historic staircases." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Student and professional flat moves; budget crews are common." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "Compact historic streets — van size matters." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern city moves; confirm national network coverage." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern Netherlands city-to-city domestic routes." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University-city apartment turnover and stairs logistics." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Southern destination; verify crew travel time in quotes." },
  ],
  providers: [
    {
      name: "Mondial Movers",
      slug: "mondial-movers",
      city: "Netherlands-wide",
      region: "National network",
      summary: "Dutch moving network commonly used for domestic house moves with packing and transport options across cities.",
      expatFocus: "English booking support varies by location — confirm language before you sign.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Local crews via network; verify the team assigned to your cities.",
      website: "https://www.mondialmovers.nl/",
      engagementType: "Domestic house move quotes and packing options",
      moverType: "Door-to-door international",
      services: ["Packing", "Transport", "Loading", "Optional storage"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven", "Netherlands-wide"],
      featured: true,
      verificationNote: "Public brand materials emphasise Dutch household moves; confirm domestic vs international scope for your route.",
    },
    {
      name: "De Haan Verhuizingen",
      slug: "de-haan-verhuizingen",
      city: "Multiple cities",
      region: "Netherlands",
      summary: "Established Dutch mover offering private and business international removals with packing and transport services.",
      expatFocus: "Useful when you want a traditional full-service domestic crew; confirm English communication.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Survey and move-day crews; verify city coverage for your addresses.",
      website: "https://www.dehaanverhuizingen.nl/",
      engagementType: "Full-service domestic moving",
      moverType: "Container / groupage",
      services: ["Packing", "Transport", "Furniture handling", "Business moves"],
      citiesServed: ["Major Dutch cities", "Netherlands-wide"],
      featured: true,
      verificationNote: "Ask for a written access survey if your building has stairs or parking limits.",
    },
    {
      name: "Aad de Wit Verhuizingen",
      slug: "aad-de-wit-verhuizingen",
      city: "Netherlands-wide",
      region: "National",
      summary: "Well-known Dutch moving company for private household moves, packing and related logistics inside the Netherlands.",
      expatFocus: "Large domestic footprint; confirm English booking and insurance options for your inventory.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "National coverage; verify local crew for your move date.",
      website: "https://www.aaddewit.nl/",
      engagementType: "Domestic household moving and packing",
      moverType: "Container / groupage",
      services: ["Packing", "Transport", "Loading", "Specialist items"],
      citiesServed: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Netherlands-wide"],
      featured: true,
      verificationNote: "Clarify whether your quote is domestic-only; international removals belong on the Removal companies page.",
    },
    {
      name: "Student Movers",
      slug: "student-movers",
      city: "Multiple student cities",
      region: "Netherlands",
      summary: "Budget-oriented moving brand often used for smaller inventories and student or starter flat moves.",
      expatFocus: "Helpful for smaller English-speaking households on a budget — still verify insurance and crew size.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Crews in major student cities; confirm current coverage.",
      website: "https://www.studentmovers.nl/",
      engagementType: "Budget international removals",
      moverType: "Air / priority",
      services: ["Transport", "Loading help", "Smaller inventories"],
      citiesServed: ["Amsterdam", "Utrecht", "Groningen", "Leiden", "Multiple cities"],
      featured: false,
      verificationNote: "Budget models can mean thinner insurance — read liability terms before booking.",
    },
    {
      name: "Verhuisgigant",
      slug: "verhuisgigant",
      city: "Netherlands-wide",
      region: "National",
      summary: "Dutch mover positioning around private house moves with online quote flows and packing add-ons.",
      expatFocus: "Online quote flow can help internationals compare quickly; verify access assumptions in writing.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Move-day crews nationwide; confirm survey needs.",
      website: "https://www.verhuisgigant.nl/",
      engagementType: "Domestic moving quotes and packing",
      moverType: "Container / groupage",
      services: ["Packing", "Transport", "Loading"],
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "Treat online estimates as starting points until stairs, elevator and parking are confirmed.",
    },
    {
      name: "Speedy Verhuizers",
      slug: "speedy-verhuizers",
      city: "Randstad focus",
      region: "Western Netherlands",
      summary: "International remover brand often used for faster local and regional apartment moves in the Randstad.",
      expatFocus: "Useful for shorter-distance flat moves; confirm English support and weekend availability.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Primarily Randstad corridors; verify your route.",
      website: "https://www.speedyverhuizers.nl/",
      engagementType: "Local and regional international removals",
      moverType: "Destination unpack",
      services: ["Transport", "Loading", "Optional packing"],
      citiesServed: ["Amsterdam", "Haarlem", "Utrecht", "The Hague", "Rotterdam"],
      featured: false,
      verificationNote: "Confirm hourly vs fixed pricing and what happens if the job overruns.",
    },
    {
      name: "Move.nl",
      slug: "move-nl",
      city: "Online",
      region: "Netherlands",
      summary: "Quote-comparison style marketplace connecting households with international removal companies for international removals.",
      expatFocus: "Handy for collecting multiple domestic quotes quickly — still verify each mover independently.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Depends on matched local movers.",
      website: "https://www.move.nl/",
      engagementType: "Multi-quote comparison for international removers",
      moverType: "Quote marketplace",
      services: ["Quote matching", "Mover introductions"],
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "Marketplaces introduce movers — your contract and insurance are usually with the assigned company.",
    },
    {
      name: "Het Verhuisbedrijf",
      slug: "het-verhuisbedrijf",
      city: "Netherlands-wide",
      region: "National",
      summary: "Dutch moving brand offering private household moves with packing and transport options.",
      expatFocus: "Compare their domestic scope and access survey process; confirm language support.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Crews for private moves; verify cities on quote.",
      website: "https://www.hetverhuisbedrijf.nl/",
      engagementType: "Domestic household moving",
      moverType: "Container / groupage",
      services: ["Packing", "Transport", "Loading"],
      citiesServed: ["Major Dutch cities", "Netherlands-wide"],
      featured: false,
      verificationNote: "Request written assumptions for stairs, elevator and packing before paying a deposit.",
    },
    {
      name: "UTS Netherlands",
      slug: "uts-netherlands",
      city: "Netherlands",
      region: "Domestic + international capability",
      summary: "Moving organisation with Dutch presence and international household logistics capability — confirm overseas product scope.",
      expatFocus: "Useful when your case needs international coordination; keep domestic NL van moves on Moving companies.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Survey and crew scheduling; verify international desk.",
      website: "https://www.uts-movers.com/",
      engagementType: "International and domestic logistics coordination",
      moverType: "Door-to-door international",
      services: ["Transport", "Packing", "Logistics coordination"],
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "Confirm whether your quote is an international household removal with customs support — not a within-NL van-only job.",
    },
    {
      name: "Crown Relocations (international assignments)",
      slug: "crown-relocations",
      city: "International network",
      region: "Netherlands destination / origin legs",
      summary: "Global relocation brand that can handle destination logistics; often stronger on international assignments than pure local flat moves.",
      expatFocus: "Relevant when an employer programme includes a Dutch international removal leg — still compare specialist local movers for small apartments.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Programme-dependent; verify local crew partners.",
      website: "https://www.crownrelo.com/",
      engagementType: "Relocation-linked moving logistics",
      moverType: "Corporate mobility",
      services: ["Move logistics", "Packing", "Destination coordination"],
      citiesServed: ["Major Dutch cities", "International network"],
      featured: false,
      verificationNote: "Confirm international mode, employer volume caps and destination agent accountability.",
    },
  ] satisfies RemovalCompanyProvider[],
  comparisonTable: [
    { mover: "Mondial Movers", citiesServed: "Netherlands-wide network", expatFocus: "Confirm international product", languages: "Dutch, English varies", packing: "Export packing options", moverType: "Door-to-door international" },
    { mover: "De Haan Verhuizingen", citiesServed: "Major cities / national", expatFocus: "Verify overseas partners", languages: "Dutch, English varies", packing: "Full-service options", moverType: "Container / groupage" },
    { mover: "Aad de Wit Verhuizingen", citiesServed: "Netherlands-wide", expatFocus: "Confirm international lane", languages: "Dutch, English varies", packing: "Packing available", moverType: "Container / groupage" },
    { mover: "Student Movers", citiesServed: "Student cities", expatFocus: "Small priority loads", languages: "Dutch, English", packing: "Limited / DIY common", moverType: "Air / priority" },
    { mover: "Verhuisgigant", citiesServed: "Netherlands-wide", expatFocus: "Online quote starting point", languages: "Dutch, English varies", packing: "Add-ons", moverType: "Container / groupage" },
    { mover: "Speedy Verhuizers", citiesServed: "Randstad focus", expatFocus: "Destination / local leg", languages: "Dutch, English varies", packing: "Optional", moverType: "Destination unpack" },
    { mover: "Move.nl", citiesServed: "Matched nationwide", expatFocus: "Multi-quote marketplace", languages: "Dutch, English varies", packing: "Depends on mover", moverType: "Quote marketplace" },
    { mover: "Crown Relocations", citiesServed: "NL + international", expatFocus: "Employer mobility programmes", languages: "English, Dutch", packing: "Programme-dependent", moverType: "Corporate mobility" },
  ],
  questionsToAsk: [
    "Is this quote for a domestic Netherlands move only — or does it include any international legs?",
    "What access assumptions are in the price (stairs, elevator, walking distance to the van)?",
    "Is packing labour and materials included, or self-pack only?",
    "What insurance or liability applies per item, and how do claims work?",
    "Do you need an on-site or video survey for my building?",
    "Who is responsible for parking permits or loading-bay reservations?",
    "What are deposit, reschedule and cancellation terms if my key date slips?",
    "Will the on-day crew lead communicate in English if I need it?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting International Removers?",
    body: "Use the directory to compare removal modes, survey quality and insurance clarity. Then request written quotes — and switch to Moving companies when your move stays inside the Netherlands.",
    primaryCta: { label: "Compare Removers", href: "#directory" },
    secondaryCta: { label: "Open Moving Companies", href: MOVING_COMPANIES_PATH },
  },
  faqs: [
    {
      q: "Is this the same as Moving companies?",
      a: "No. This page covers international household removals (containers, air, customs timing). Moving companies focus on domestic house moves within the Netherlands.",
    },
    {
      q: "How is this different from Relocation agencies?",
      a: "Relocation agencies coordinate broader packages — housing search, registration, settling-in and sometimes move management. Moving companies focus on the physical international removal. You may need both, but they are different provider types.",
    },
    {
      q: "What about International shipping?",
      a: "International shipping is about freight and parcels, not a full apartment move. That services page is not live yet (coming soon). For household goods from abroad, start with Removal companies and the shipping household goods guide.",
    },
    {
      q: "How should I compare movers without rankings?",
      a: "Compare written scopes, access surveys, packing inclusions, insurance, language support and cancellation terms. Rankings and fake reviews are not a substitute for verifying your building’s stairs and parking reality.",
    },
    {
      q: "Do movers handle elevator bookings?",
      a: "Some will coordinate; many expect you or the building manager to reserve the lift. Ask explicitly and share building move-hour rules early.",
    },
    {
      q: "Are weekend moves more expensive?",
      a: "Often yes, and some buildings restrict weekend or evening moves. Ask about weekday alternatives when your lease dates allow.",
    },
    {
      q: "Can I use a mover for only packing or only transport?",
      a: "Many companies sell modular scopes. Confirm what is included so you do not pay for full-service packing you planned to DIY.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a mover?",
      a: "No. Listings are informational soft discovery only. Always verify current services, insurance, languages and fit directly with the provider.",
    },
  ],
  officialSources: [
    { label: "ACM — Consumers", href: "https://www.acm.nl/en/consumers", description: "Netherlands Authority for Consumers and Markets — consumer orientation." },
    { label: "Government.nl — Housing", href: "https://www.government.nl/topics/housing", description: "Official Dutch government information related to housing topics." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official business information portal for operating and hiring services in the Netherlands." },
    { label: "Juridisch Loket", href: "https://www.juridischloket.nl/english/", description: "Public legal information desk for consumer and contract orientation questions." },
  ],
  relatedGuides: [
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Domestic within-Netherlands house moves — local vans, packing and stairs.",
    },
    {
      label: "Storage companies",
      href: "/netherlands/services/storage-companies/",
      status: "live",
      description: "Self-storage when goods arrive before or after your lease start.",
    },
    {
      label: "Pet relocation companies",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live",
      description: "Specialist pet import/export logistics — pets are not household goods removals.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "End-of-tenancy and domestic cleaners when a move includes an oplevering checklist.",
    },
    {
      label: "Relocation agencies",
      href: RELOCATION_AGENCIES_PATH,
      status: "live",
      description: "Full-package relocation coordination beyond the van alone.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Broader settling-in and relocation support options.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Find the next Dutch address before you book the van.",
    },
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "Tax support when a move overlaps with arrival filing or the 30% ruling.",
    },
    {
      label: "Moving checklist tool",
      href: MOVING_CHECKLIST_PATH,
      status: "live",
      description: "Practical task list around your move timeline.",
    },
  ] satisfies RemovalCompanyLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic within-NL house moves." },
    { label: "Storage companies", href: "/netherlands/services/storage-companies/", status: "live", description: "Interim storage around international arrivals and departures." },
    { label: "Pet relocation companies", href: PET_RELOCATION_COMPANIES_PATH, status: "live", description: "Flight-pet and import/export specialists — not furniture vans." },
    { label: "Cleaning companies", href: CLEANING_COMPANIES_PATH, status: "live", description: "Move-out and domestic cleaning around lease handovers." },
    { label: "Estate agents", href: "/netherlands/services/estate-agents/", status: "live", description: "Buy/sell makelaars when a move is into a purchased home." },
    { label: "Rental agencies", href: "/netherlands/services/rental-agencies/", status: "live", description: "Tenant mediation for the next Dutch lease." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Agency-style relocation packages." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Broader relocation support." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Rental and housing search platforms." },
    { label: "International shipping", href: INTERNATIONAL_SHIPPING_PATH, status: "comingSoon", description: "Freight and parcel shipping — page not live yet." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, status: "live", description: "Legal immigration support around arrival timing." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "When a international removal is into a purchased home." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax support around relocation and filing." },
    { label: "Recruitment agencies", href: RECRUITMENT_AGENCIES_SERVICES_PATH, status: "live", description: "Job-search providers when a role triggers the move." },
  ] satisfies RemovalCompanyLink[],
  exploreNextCards: [
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Switch to international removers if your move stays inside the Netherlands.",
    },
    {
      label: "Storage companies",
      href: "/netherlands/services/storage-companies/",
      status: "live",
      description: "Hold belongings when container timing and lease dates do not align.",
    },
    {
      label: "Pet relocation companies",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live",
      description: "Move animals with pet specialists — removers own furniture, not pets.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "Book oplevering cleans when the overseas move includes a lease exit.",
    },
    {
      label: "Relocation agencies",
      href: RELOCATION_AGENCIES_PATH,
      status: "live",
      description: "Add housing and registration support around the physical move.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Secure the destination address before locking a move date.",
    },
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "Get tax orientation when arrival or departure filing overlaps.",
    },
    {
      label: "Immigration lawyers",
      href: IMMIGRATION_LAWYERS_PATH,
      status: "live",
      description: "Align move timing with residence and registration requirements.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare cities before you book a city-to-city van.",
    },
  ] satisfies RemovalCompanyLink[],
};
