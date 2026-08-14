import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — compare/find domestic NL moving companies (house moves within the Netherlands). */
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;

/** Sibling directory — international household removals (do not confuse with domestic movers). */
export const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/" as const;

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
export const CLEANING_COMPANIES_PATH = "/netherlands/services/cleaning-companies/" as const;
export const HANDYMEN_PATH = "/netherlands/services/handymen/" as const;

export const MOVING_COMPANIES_AFFILIATE_PLACEMENT_ID =
  "nl-services-moving-companies-support-providers" as const;

export type MovingCompanyProvider = {
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
    | "Local van / man-with-van"
    | "Full-service domestic"
    | "Apartment specialist"
    | "Student / budget"
    | "National network"
    | "Quote marketplace";
  services: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type MovingCompanyLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-moving-companies";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const movingCompaniesNetherlandsPage = {
  slug: "moving-companies",
  path: MOVING_COMPANIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(MOVING_COMPANIES_PATH) ?? "2026-10-25",
  affiliatePlacementId: MOVING_COMPANIES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Moving Companies in the Netherlands for Expats | Domestic House Moves",
    description:
      "Compare domestic Dutch moving companies for apartment and house moves within the Netherlands — packing, stairs, elevators and city-to-city transport. Soft discovery, not a ranking; not international removals.",
    keywords: [
      "moving companies netherlands",
      "verhuisbedrijf netherlands",
      "domestic movers netherlands",
      "house move amsterdam",
      "apartment movers netherlands",
      "expat moving company netherlands",
      "packing and moving netherlands",
      "stairs elevator movers netherlands",
      "compare moving companies netherlands",
      "local van movers netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Moving companies",
    pageTitle: "Moving Companies in the Netherlands for Expats",
    subtitle:
      "Compare domestic movers for house and apartment moves within the Netherlands — packing, stairs, elevators and city-to-city vans. This is a services directory for local moves, not international removals or full relocation packages.",
    primaryCta: { label: "Browse Mover Directory", href: "#directory" },
    secondaryCta: { label: "How Moving Companies Differ", href: "#differentiate" },
    chips: ["Domestic NL moves", "Packing & stairs", "City-to-city vans", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-moving-companies-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of movers carefully carrying boxed belongings up a Dutch apartment stairwell with a moving van parked on a canal-side street outside Amsterdam.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what domestic moving companies help with: packing, loading, stairs and elevator logistics, transport between Dutch addresses and furniture reassembly.",
      "Domestic movers handle the physical house move inside the Netherlands — confirm scope before booking."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating moving companies (domestic NL), removal companies (international household goods), relocation agencies (full packages) and international shipping (freight/parcels).",
      "Pick the right provider type first — domestic movers are not the same as international removals or relocation packages."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about domestic moving companies in the Netherlands for expats.",
      "Use this snapshot before requesting quotes: access, packing scope, stairs and insurance differ widely."
    ),
    moverTypes: visual(
      "mover-types",
      "Infographic comparing mover types: local van, full-service domestic, apartment specialist, student/budget and national networks.",
      "Match the mover model to your volume, building access and budget — not every van covers full packing."
    ),
    moverServices: visual(
      "mover-services",
      "Infographic of domestic mover services: packing, loading, stairs/elevator handling, city transport, assembly and temporary storage options.",
      "Service depth varies: some teams only transport; others pack, dismantle and reassemble."
    ),
    compare: visual(
      "compare",
      "Infographic checklist for comparing Dutch moving companies: written quote, access survey, packing scope, insurance and cancellation terms.",
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
      "Infographic of common expat challenges with Dutch movers: narrow stairs, no elevator, parking bans, language, weekend premiums and scope surprises.",
      "Use early surveys and written scopes to reduce move-day surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing domestic mover coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Most domestic movers work city-to-city nationwide; local apartment access still varies by team."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral mover directory workflow: shortlist, compare quotes, verify access and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for domestic movers: mover type, packing, languages, city coverage and expat focus.",
      "Compare movers by scope and logistics fit before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch moving companies before booking.",
      "Good questions reveal access assumptions, insurance, packing scope and what happens if the elevator fails."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common moving-company FAQ topics: domestic vs removal, costs, packing, stairs and red flags.",
      "FAQ answers should help you pick the next verification step — not guarantee prices."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist domestic movers: define volume, check access, request written quotes and verify insurance.",
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
      "Domestic movers are one part of the wider housing and relocation support ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing movers: removal companies, relocation agencies, housing platforms and moving checklist.",
      "Continue from domestic mover discovery into related logistics and settling guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting domestic mover research to removal companies, relocation, housing, tax advisors and cities.",
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
    heading: "Why Expats Compare Domestic Moving Companies",
    paragraphs: [
      "Once you have a Dutch address — or you are changing flats inside the Netherlands — you need a domestic moving company (verhuisbedrijf): packing help, a van, stairs and elevator logistics, and transport between Dutch cities or neighbourhoods.",
      "This page is a services directory for domestic / within-Netherlands house moves. It is not the guide for shipping a container from abroad (see Removal companies), not a full relocation package (see Relocation agencies/services), and not freight or parcel shipping (International shipping).",
      "Inclusion here is informational soft discovery, not a ranking. No mover can guarantee a fixed final price without accurate access details. Confirm scope, insurance and building rules directly before booking.",
    ],
    links: [
      { label: "Removal companies (international)", href: REMOVAL_COMPANIES_PATH },
      { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH },
      { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH },
      { label: "Services hub", href: SERVICES_HUB_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Moving companies (this page)",
      body: "Domestic house and apartment moves within the Netherlands: packing, local vans, stairs/elevators, and transport between Dutch addresses.",
      href: MOVING_COMPANIES_PATH,
      status: "live" as const,
    },
    {
      title: "Removal companies",
      body: "International household removals — container or air shipment of belongings into or out of the Netherlands, customs timing and inventory lists.",
      href: REMOVAL_COMPANIES_PATH,
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
    { label: "Move type", value: "Domestic NL", note: "Between Dutch addresses — not overseas containers." },
    { label: "Common friction", value: "Access", note: "Stairs, elevators, parking permits and narrow streets drive cost." },
    { label: "Provider models", value: "5+ types", note: "Local van, full-service, apartment specialists, student/budget, networks." },
    { label: "Quotes", value: "Written", note: "Ask for assumptions: hours, crew size, packing and insurance." },
    { label: "Languages", value: "Varies", note: "English-friendly crews exist; confirm booking language early." },
    { label: "Guarantee", value: "None", note: "No directory can guarantee price or damage-free outcomes." },
  ],
  moverTypeComparison: [
    {
      type: "Local van / man-with-van",
      scope: "Small-to-medium loads with a driver and helper; limited packing unless booked.",
      usefulWhen: "You have few boxes, short distance and can carry most items yourself.",
      questions: ["Hourly or fixed price?", "How many helpers?", "What if the load does not fit?"],
    },
    {
      type: "Full-service domestic",
      scope: "Packing, loading, transport, unloading and often furniture dismantling/reassembly.",
      usefulWhen: "You want a turnkey apartment or house move with less DIY packing.",
      questions: ["Is packing included?", "Do you dismantle beds/wardrobes?", "What insurance applies?"],
    },
    {
      type: "Apartment specialist",
      scope: "Teams used to Dutch walk-ups, elevators, piano moves and tight stairwells.",
      usefulWhen: "Your building has no lift, narrow stairs or strict moving-hour rules.",
      questions: ["Will you survey the stairs?", "Do you book elevators?", "Weekend or evening slots?"],
    },
    {
      type: "Student / budget",
      scope: "Lower-cost crews for smaller inventories; packing quality and insurance vary.",
      usefulWhen: "Budget is tight and volume is modest — still verify insurance.",
      questions: ["What is covered if something breaks?", "Fixed quote or hourly?", "Deposit terms?"],
    },
    {
      type: "National network / franchise",
      scope: "Broader city-to-city coverage with shared booking systems.",
      usefulWhen: "You are moving between regions (e.g. Amsterdam → Eindhoven) and want one contract.",
      questions: ["Who is on-site on move day?", "One invoice or local subcontractors?", "Damage claims process?"],
    },
  ],
  moverServices: [
    { title: "Packing & materials", body: "Boxes, paper, wardrobe cartons and fragile packing — confirm whether materials and labour are included." },
    { title: "Loading & unloading", body: "Crew labour to carry items between flat and van, including stair flights and elevator trips." },
    { title: "Stairs & elevator logistics", body: "Surveys for walk-ups, lift booking with the VvE/building manager and piano or bulky-item plans." },
    { title: "City-to-city transport", body: "Van moves between Dutch cities and neighbourhoods under one domestic booking." },
    { title: "Furniture assembly", body: "Dismantling and reassembly of beds, wardrobes and desks — often optional add-ons." },
    { title: "Short storage (optional)", body: "Some movers offer interim storage between lease dates; confirm duration and access." },
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
      moverType: "National network",
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
      summary: "Established Dutch mover offering private and business domestic moves with packing and transport services.",
      expatFocus: "Useful when you want a traditional full-service domestic crew; confirm English communication.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Survey and move-day crews; verify city coverage for your addresses.",
      website: "https://www.dehaanverhuizingen.nl/",
      engagementType: "Full-service domestic moving",
      moverType: "Full-service domestic",
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
      moverType: "Full-service domestic",
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
      engagementType: "Budget domestic moves",
      moverType: "Student / budget",
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
      moverType: "Full-service domestic",
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
      summary: "Domestic mover brand often used for faster local and regional apartment moves in the Randstad.",
      expatFocus: "Useful for shorter-distance flat moves; confirm English support and weekend availability.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Primarily Randstad corridors; verify your route.",
      website: "https://www.speedyverhuizers.nl/",
      engagementType: "Local and regional domestic moves",
      moverType: "Local van / man-with-van",
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
      summary: "Quote-comparison style marketplace connecting households with Dutch moving companies for domestic moves.",
      expatFocus: "Handy for collecting multiple domestic quotes quickly — still verify each mover independently.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Depends on matched local movers.",
      website: "https://www.move.nl/",
      engagementType: "Multi-quote comparison for domestic movers",
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
      moverType: "Full-service domestic",
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
      summary: "Moving organisation with Dutch presence; often associated with broader relocation logistics — confirm domestic-only jobs carefully.",
      expatFocus: "May help when your case mixes domestic and international legs — keep scopes separate.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Survey and crew scheduling; verify domestic desk.",
      website: "https://www.uts-movers.com/",
      engagementType: "Moving logistics with domestic options",
      moverType: "National network",
      services: ["Transport", "Packing", "Logistics coordination"],
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "If your goods cross borders, compare also on Removal companies — do not assume a domestic quote covers customs.",
    },
    {
      name: "Crown Relocations (NL domestic leg)",
      slug: "crown-relocations",
      city: "International network",
      region: "Netherlands destination / origin legs",
      summary: "Global relocation brand that can handle destination logistics; often stronger on international assignments than pure local flat moves.",
      expatFocus: "Relevant when an employer programme includes a Dutch domestic move leg — still compare specialist local movers for small apartments.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Programme-dependent; verify local crew partners.",
      website: "https://www.crownrelo.com/",
      engagementType: "Relocation-linked moving logistics",
      moverType: "National network",
      services: ["Move logistics", "Packing", "Destination coordination"],
      citiesServed: ["Major Dutch cities", "International network"],
      featured: false,
      verificationNote: "For a simple Amsterdam-to-Utrecht flat move, a domestic specialist may be a better fit than a global assignment package.",
    },
  ] satisfies MovingCompanyProvider[],
  comparisonTable: [
    { mover: "Mondial Movers", citiesServed: "Netherlands-wide network", expatFocus: "Domestic network; confirm English", languages: "Dutch, English varies", packing: "Optional / packages", moverType: "National network" },
    { mover: "De Haan Verhuizingen", citiesServed: "Major cities / national", expatFocus: "Full-service domestic", languages: "Dutch, English varies", packing: "Full-service options", moverType: "Full-service domestic" },
    { mover: "Aad de Wit Verhuizingen", citiesServed: "Netherlands-wide", expatFocus: "Large domestic footprint", languages: "Dutch, English varies", packing: "Packing available", moverType: "Full-service domestic" },
    { mover: "Student Movers", citiesServed: "Student cities", expatFocus: "Budget / smaller loads", languages: "Dutch, English", packing: "Limited / DIY common", moverType: "Student / budget" },
    { mover: "Verhuisgigant", citiesServed: "Netherlands-wide", expatFocus: "Online quote starting point", languages: "Dutch, English varies", packing: "Add-ons", moverType: "Full-service domestic" },
    { mover: "Speedy Verhuizers", citiesServed: "Randstad focus", expatFocus: "Local/regional vans", languages: "Dutch, English varies", packing: "Optional", moverType: "Local van / man-with-van" },
    { mover: "Move.nl", citiesServed: "Matched nationwide", expatFocus: "Multi-quote marketplace", languages: "Dutch, English varies", packing: "Depends on mover", moverType: "Quote marketplace" },
    { mover: "Het Verhuisbedrijf", citiesServed: "Major cities / national", expatFocus: "Private household moves", languages: "Dutch, English varies", packing: "Available", moverType: "Full-service domestic" },
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
    heading: "Need Help Shortlisting Domestic Movers?",
    body: "Use the directory to compare mover types, city coverage, packing scope and access logistics. Then request written quotes from shortlisted companies — and switch to Removal companies or Relocation agencies when your needs are international or full-package.",
    primaryCta: { label: "Compare Movers", href: "#directory" },
    secondaryCta: { label: "Open Removal Companies", href: REMOVAL_COMPANIES_PATH },
  },
  faqs: [
    {
      q: "Is this the same as Removal companies?",
      a: "No. This page covers domestic house moves within the Netherlands (local vans, packing, stairs). Removal companies focus on international household goods shipments into or out of the Netherlands.",
    },
    {
      q: "How is this different from Relocation agencies?",
      a: "Relocation agencies coordinate broader packages — housing search, registration, settling-in and sometimes move management. Moving companies focus on the physical domestic move. You may need both, but they are different provider types.",
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
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International household removals — containers, customs timing and overseas shipments.",
    },
    {
      label: "Storage companies",
      href: "/netherlands/services/storage-companies/",
      status: "live",
      description: "Self-storage and temporary furniture storage between leases or move gaps.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "End-of-tenancy and domestic cleans for lease handovers and move-out checklists.",
    },
    {
      label: "Handymen",
      href: HANDYMEN_PATH,
      status: "live",
      description: "Klusjesman support for assembly and small repairs after the van leaves.",
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
      label: "Rental agencies",
      href: "/netherlands/services/rental-agencies/",
      status: "live",
      description: "Mediated rental search when you need agency support for the next lease.",
    },
  ] satisfies MovingCompanyLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Removal companies", href: REMOVAL_COMPANIES_PATH, status: "live", description: "International household goods removals." },
    { label: "Storage companies", href: "/netherlands/services/storage-companies/", status: "live", description: "Self-storage between leases or during moves." },
    { label: "Cleaning companies", href: CLEANING_COMPANIES_PATH, status: "live", description: "Oplevering and domestic cleaning around moves." },
    { label: "Handymen", href: HANDYMEN_PATH, status: "live", description: "Assembly and small repairs after unpacking." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Agency-style relocation packages." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Broader relocation support." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Rental and housing search platforms." },
    { label: "Rental agencies", href: "/netherlands/services/rental-agencies/", status: "live", description: "Tenant mediation agencies." },
    { label: "Estate agents", href: "/netherlands/services/estate-agents/", status: "live", description: "Buy/sell makelaars directory." },
    { label: "International shipping", href: INTERNATIONAL_SHIPPING_PATH, status: "comingSoon", description: "Freight and parcel shipping — page not live yet." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "When a domestic move is into a purchased home." },
  ] satisfies MovingCompanyLink[],
  exploreNextCards: [
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "Switch to international household goods if your shipment crosses borders.",
    },
    {
      label: "Storage companies",
      href: "/netherlands/services/storage-companies/",
      status: "live",
      description: "Hold belongings when lease dates do not overlap.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "Book an oplevering clean when leaving a Dutch rental.",
    },
    {
      label: "Handymen",
      href: HANDYMEN_PATH,
      status: "live",
      description: "Assemble furniture and fix small items after move-in.",
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
      label: "Estate agents",
      href: "/netherlands/services/estate-agents/",
      status: "live",
      description: "When the move is into a purchased home with makelaar support.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare cities before you book a city-to-city van.",
    },
  ] satisfies MovingCompanyLink[],
};
