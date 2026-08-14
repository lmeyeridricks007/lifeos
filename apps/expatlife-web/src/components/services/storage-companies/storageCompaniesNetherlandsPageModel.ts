import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — self-storage / temporary furniture storage for expats. */
export const STORAGE_COMPANIES_PATH = "/netherlands/services/storage-companies/" as const;

export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/" as const;
export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const HOUSING_PLATFORMS_PATH = "/netherlands/services/housing-platforms/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;
export const INTERNATIONAL_SHIPPING_PATH = "/netherlands/services/international-shipping/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const MOVING_CHECKLIST_PATH = "/netherlands/moving/tools/moving-checklist/" as const;
export const CLEANING_COMPANIES_PATH = "/netherlands/services/cleaning-companies/" as const;
export const HANDYMEN_PATH = "/netherlands/services/handymen/" as const;

export const STORAGE_COMPANIES_AFFILIATE_PLACEMENT_ID =
  "nl-services-storage-companies-support-providers" as const;

export type StorageCompanyProvider = {
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
  storageType:
    | "Self-storage units"
    | "Container / flexible"
    | "Climate-controlled"
    | "Student / budget"
    | "National network"
    | "Furniture / interim"
    | "Pick-up & store"
    | "Garage box park"
    | "Quote marketplace";
  services: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type StorageCompanyLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-storage-companies";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const storageCompaniesNetherlandsPage = {
  slug: "storage-companies",
  path: STORAGE_COMPANIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(STORAGE_COMPANIES_PATH) ?? "2026-10-28",
  affiliatePlacementId: STORAGE_COMPANIES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Storage Companies in the Netherlands for Expats | Self-Storage Guide",
    description:
      "Compare self-storage and temporary furniture storage in the Netherlands for expats between leases or during international moves. Soft discovery, not a ranking — not moving or removal vans.",
    keywords: [
      "storage companies netherlands",
      "self storage netherlands",
      "opslag netherlands",
      "furniture storage netherlands",
      "expat storage amsterdam",
      "temporary storage between leases",
      "climate controlled storage netherlands",
      "storage units netherlands",
      "compare storage companies netherlands",
      "self storage rotterdam utrecht",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Storage companies",
    pageTitle: "Storage Companies in the Netherlands for Expats",
    subtitle:
      "Compare self-storage units and temporary furniture storage between leases or during international moves. This is a services directory for storage — not domestic moving vans or international removals.",
    primaryCta: { label: "Browse Storage Directory", href: "#directory" },
    secondaryCta: { label: "How Storage Differs", href: "#differentiate" },
    chips: ["Self-storage units", "Between leases", "Move-gap storage", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-storage-companies-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat couple locking a climate-controlled self-storage unit near a Dutch industrial estate, with labelled boxes and a canal-city skyline soft in the distance.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what storage companies help with: self-storage units, temporary furniture storage, access hours, insurance options and bridging lease gaps.",
      "Storage companies hold belongings between addresses — confirm size, access and insurance before booking."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating storage companies, moving companies (domestic vans), removal companies (international) and housing platforms (listings).",
      "Pick the right provider type first — storage is not a moving van or a rental agency."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about storage companies in the Netherlands for expats.",
      "Use this snapshot before booking: unit size, access hours, contract length and insurance differ widely."
    ),
    storageTypes: visual(
      "storage-types",
      "Infographic comparing storage types: self-storage units, containers, climate-controlled, student/budget and furniture interim storage.",
      "Match the storage model to volume, duration and climate needs — not every unit suits furniture or documents."
    ),
    storageServices: visual(
      "storage-services",
      "Infographic of storage services: unit rental, access hours, packing materials, insurance add-ons, delivery-in and temporary hold between leases.",
      "Service depth varies: some sites only rent units; others help with transport-in and packing materials."
    ),
    compare: visual(
      "compare",
      "Infographic checklist for comparing Dutch storage companies: size, access, contract, insurance, location and cancellation terms.",
      "Compare access logistics and contract clarity before you compare monthly rates alone."
    ),
    costs: visual(
      "costs",
      "Infographic explaining storage cost drivers: unit size, duration, climate control, insurance and promo vs renewal rates.",
      "Ask for the renewal rate and insurance inclusions — intro prices often change after the first months."
    ),
    prep: visual(
      "prep",
      "Infographic listing prep items before booking storage: inventory volume, access needs, insurance preference, lease gap dates and prohibited items list.",
      "Volume estimates and access hours often matter as much as the advertised monthly price."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat storage challenges: underestimating volume, access hours, insurance gaps, lease-date slips and confusing storage with movers.",
      "Use written inventories and clear end dates to reduce storage surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing storage coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Most chains have city facilities; location vs your next lease still drives convenience."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral storage directory workflow: estimate volume, shortlist sites, compare contracts and verify access.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for storage providers: type, access, languages, city coverage and expat focus.",
      "Compare storage by access and contract fit before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch storage companies before booking.",
      "Good questions reveal access hours, insurance, prohibited items and what happens if your lease slips."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common storage FAQ topics: storage vs movers, costs, climate control, insurance and red flags.",
      "FAQ answers should help you pick the next verification step — not guarantee prices."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist storage: estimate volume, check access, request contracts and verify insurance.",
      "Turn provider discovery into a structured shortlist before you store valuables."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for consumer orientation in the Netherlands.",
      "Verify consumer rights and contract terms with official sources — not storage marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around storage: storage companies, moving companies, removal companies, housing platforms and rental agencies.",
      "Storage is one part of the wider housing and relocation support ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing storage: moving companies, removal companies, rental agencies and housing platforms.",
      "Continue from storage discovery into movers, housing search and settling guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting storage research to moving companies, removal companies, rental agencies, housing platforms and cities.",
      "Storage shortlists connect naturally into housing timing and move logistics."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#storage-types", label: "Storage types" },
    { href: "#storage-role", label: "What storage does" },
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
    heading: "Why Expats Compare Storage Companies",
    paragraphs: [
      "Between lease end dates, during an international arrival or while renovating, expats often need a place for furniture and boxes that is not a moving van and not a friend’s spare room.",
      "This page is a services directory for self-storage and temporary furniture storage in the Netherlands. It is not the guide for booking a domestic moving van (see Moving companies), not international household removals (see Removal companies), and not rental or buy/sell agent directories.",
      "Inclusion here is informational soft discovery, not a ranking. No storage provider can guarantee a fixed long-term price without clear contract terms. Confirm unit size, access hours, insurance and prohibited items directly before booking.",
    ],
    links: [
      { label: "Moving companies (domestic)", href: MOVING_COMPANIES_PATH },
      { label: "Removal companies (international)", href: REMOVAL_COMPANIES_PATH },
      { label: "Rental agencies", href: RENTAL_AGENCIES_PATH },
      { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Storage companies (this page)",
      body: "Self-storage units and temporary furniture storage — hold belongings between leases or during move gaps.",
      href: STORAGE_COMPANIES_PATH,
      status: "live" as const,
    },
    {
      title: "Moving companies",
      body: "Domestic house and apartment moves within the Netherlands: packing, vans, stairs and transport between Dutch addresses.",
      href: MOVING_COMPANIES_PATH,
      status: "live" as const,
    },
    {
      title: "Removal companies",
      body: "International household removals — containers or air shipment of belongings into or out of the Netherlands.",
      href: REMOVAL_COMPANIES_PATH,
      status: "live" as const,
    },
    {
      title: "Housing platforms",
      body: "Rental and property listing platforms to find the next address — not storing furniture.",
      href: HOUSING_PLATFORMS_PATH,
      status: "live" as const,
    },
    {
      title: "Rental agencies",
      body: "Tenant mediation and agency search for rentals — different from locking a storage unit between lease dates.",
      href: RENTAL_AGENCIES_PATH,
      status: "live" as const,
    },
    {
      title: "International shipping",
      body: "Freight and parcel-style shipping for goods — not interim furniture opslag. Dedicated page is not live yet.",
      href: INTERNATIONAL_SHIPPING_PATH,
      status: "comingSoon" as const,
    },
  ],
  snapshotCards: [
    { label: "Use case", value: "Lease gaps", note: "Bridge between apartments, arrivals or renovations." },
    { label: "Common friction", value: "Access hours", note: "24/7 vs weekday-only access changes pickup plans." },
    { label: "Provider models", value: "5+ types", note: "Units, containers, climate-controlled, budget, interim furniture." },
    { label: "Contracts", value: "Read renewals", note: "Intro rates often rise after the first months." },
    { label: "Languages", value: "Varies", note: "English booking exists at many chains; confirm on-site." },
    { label: "Guarantee", value: "None", note: "No directory can guarantee price or item safety outcomes." },
  ],
  storageTypeComparison: [
    {
      type: "Self-storage units",
      scope: "Lockable rooms or cages by m² inside a facility with shared corridors and gated access.",
      usefulWhen: "You need flexible duration and self-access for boxes and furniture.",
      questions: ["What m² do I need?", "Are access hours 24/7?", "Is insurance included?"],
    },
    {
      type: "Container / flexible",
      scope: "Outdoor or yard containers delivered or parked for flexible volume.",
      usefulWhen: "You want larger volume near a home renovation or temporary empty-home period.",
      questions: ["Who delivers the container?", "Weather protection?", "Permit needed on street?"],
    },
    {
      type: "Climate-controlled",
      scope: "Temperature and humidity-managed units for sensitive items.",
      usefulWhen: "You store documents, instruments, wine, electronics or fine furniture.",
      questions: ["What temperature range?", "Extra monthly cost?", "What is prohibited?"],
    },
    {
      type: "Student / budget",
      scope: "Smaller units and promo rates for limited inventories.",
      usefulWhen: "Volume is modest and budget is tight — still verify insurance.",
      questions: ["Renewal price after promo?", "Minimum contract?", "Deposit terms?"],
    },
    {
      type: "Furniture / interim",
      scope: "Providers focused on holding household furniture between leases, sometimes with packing help.",
      usefulWhen: "You need a short hold for sofas and beds while keys overlap poorly.",
      questions: ["Do you collect and deliver?", "How is furniture wrapped?", "Access mid-contract?"],
    },
  ],
  storageServices: [
    { title: "Unit rental by size", body: "Rooms or cages priced by square metres — estimate volume before you book the smallest promo unit." },
    { title: "Access hours & security", body: "PIN gates, CCTV and daytime vs 24/7 access — confirm how you retrieve boxes on evenings or weekends." },
    { title: "Packing materials", body: "Boxes, bubble wrap and tape sold on-site — useful but often separate from the monthly unit fee." },
    { title: "Insurance options", body: "Facility liability may be limited; ask about contents cover for high-value items." },
    { title: "Delivery-in / collection", body: "Some providers help bring goods in; others expect you or a mover to load the unit." },
    { title: "Short-term lease bridging", body: "Month-to-month or fixed periods between Dutch lease dates — confirm notice and cancellation rules." },
  ],
  compareCriteria: [
    { criterion: "Unit size & volume estimate", whyItMatters: "Under-sizing forces a second unit mid-contract.", howToCheck: "List bulky furniture and ask staff for an m² recommendation from photos." },
    { criterion: "Access hours", whyItMatters: "Evening and weekend pickups matter for working expats.", howToCheck: "Confirm 24/7 vs weekday-only and any holiday closures." },
    { criterion: "Contract & renewal price", whyItMatters: "Intro rates often rise after month 1–3.", howToCheck: "Ask for the renewal rate and notice period in writing." },
    { criterion: "Insurance & liability", whyItMatters: "Standard cover may exclude valuables or water damage.", howToCheck: "Ask what is covered per item and how to claim." },
    { criterion: "Location vs next lease", whyItMatters: "A cheap unit far from your new flat costs van time later.", howToCheck: "Map facility vs current and next addresses." },
    { criterion: "Prohibited items", whyItMatters: "Food, flammables and some batteries are often banned.", howToCheck: "Read the prohibited list before packing." },
  ],
  costExamples: [
    { item: "Small unit (studio boxes)", typicalRange: "Lower monthly promo", whatToConfirm: "Renewal rate, deposit and whether access is 24/7." },
    { item: "Medium unit (1–2 bed furniture)", typicalRange: "Mid monthly + insurance", whatToConfirm: "m² fit for sofa/bed and climate needs." },
    { item: "Climate-controlled add-on", typicalRange: "Premium monthly", whatToConfirm: "Temperature range and whether it is required for your items." },
    { item: "Packing materials", typicalRange: "One-off materials", whatToConfirm: "Whether materials are billed separately from rent." },
    { item: "Transport into unit", typicalRange: "Mover or facility fee", whatToConfirm: "Who carries goods from van to unit and stair/lift rules." },
  ],
  prepChecklist: [
    { document: "Room-by-room inventory / photos", why: "Helps staff recommend unit size and spot bulky items." },
    { document: "Lease gap dates", why: "Align storage start/end with key handovers and mover bookings." },
    { document: "Access needs (evenings/weekends)", why: "Prevents booking a site you cannot visit after work." },
    { document: "Insurance preference", why: "Decide if facility liability is enough or you need extra cover." },
    { document: "Prohibited items list", why: "Avoid rejected loads on drop-off day." },
    { document: "ID and contract readiness", why: "Most sites need ID and a signed agreement before keys/PIN." },
    { document: "Mover or DIY load plan", why: "Storage is not automatically a full moving service." },
  ],
  challengeCards: [
    { title: "Underestimating volume", body: "Sofas and wardrobes fill small promo units faster than expected." },
    { title: "Access hour surprises", body: "Weekday-only access clashes with full-time work schedules." },
    { title: "Renewal rate jumps", body: "Intro pricing can rise sharply after the first months." },
    { title: "Insurance gaps", body: "High-value items may need separate cover beyond facility liability." },
    { title: "Confusing storage with movers", body: "Booking a unit does not move your flat — you still need a van or moving company." },
    { title: "Lease date slips", body: "Notice periods and extra weeks add cost when keys are delayed." },
    { title: "Location mismatch", body: "A distant cheap unit costs more in van time when you unload." },
    { title: "Language / contract clarity", body: "Dutch-only terms can hide cancellation rules — ask for English summaries." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "High demand for small units; book early around peak move months." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Multiple facility locations — map vs your next lease." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International households often store between assignments." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Central location helps Randstad bridge storage." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Useful for tech movers between contracts." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam spillover storage with slightly easier access." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Student and professional short holds are common." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "Compact inventories; confirm nearest facility." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern coverage via national chains." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern Netherlands storage between city moves." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University-city turnover and short contracts." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Southern destination; verify chain presence." },
  ],
  providers: [
    {
      name: "Shurgard",
      slug: "shurgard",
      city: "Multiple cities",
      region: "Netherlands / Europe",
      summary: "Large self-storage network with lockable units across major Dutch cities and online booking flows.",
      expatFocus: "English website support is common; confirm on-site language and access hours for your branch.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Staffed facilities in many cities; verify local branch hours.",
      website: "https://www.shurgard.com/en-nl",
      engagementType: "Self-storage unit rental",
      storageType: "National network",
      services: ["Unit rental", "Access control", "Packing materials", "Insurance options"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Multiple cities"],
      featured: true,
      verificationNote: "Confirm renewal pricing and whether your branch is climate-controlled for sensitive items.",
    },
    {
      name: "ALLSAFE Self Storage",
      slug: "allsafe",
      city: "Multiple cities",
      region: "Netherlands",
      summary: "Dutch self-storage network with heated units, individual alarms and frequent weekly-flexible contract messaging across many locations.",
      expatFocus: "Useful for month-to-month holds; confirm English communication at your preferred site.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Local facilities nationwide; verify access PIN setup and current city list.",
      website: "https://www.allsafe.nl/en/",
      engagementType: "Heated self-storage unit rental",
      storageType: "Self-storage units",
      services: ["Heated units", "Individual alarms", "Flexible contracts", "Optional moving help"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven", "Multiple cities"],
      featured: true,
      verificationNote: "Ask for written access hours, climate meaning (heated vs humidity) and the post-promo monthly rate.",
    },
    {
      name: "BOXIE24",
      slug: "boxie24",
      city: "Multiple NL locations",
      region: "Netherlands",
      summary: "Pick-up-and-store style provider that collects belongings, stores them in facilities and returns them on request — less DIY van work.",
      expatFocus: "Helpful for expats without a van during tight lease handovers; confirm free pick-up thresholds and warehouse location.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Collection/delivery logistics; warehouse access model differs from walk-in self-storage.",
      website: "https://www.boxie24.com/en-nl/",
      engagementType: "Pick-up, store and return",
      storageType: "Pick-up & store",
      services: ["Pick-up", "Warehouse storage", "Return delivery", "Partial retrievals"],
      citiesServed: ["Multiple Dutch cities", "Confirm coverage on quote"],
      featured: true,
      verificationNote: "This is not a classic corridor of lockable units — verify how often you can visit and how partial returns are priced.",
    },
    {
      name: "GaragePark",
      slug: "garagepark",
      city: "Multiple parks NL",
      region: "Netherlands",
      summary: "Network of secured garage-box parks offering ground-level boxes for storage, hobbies or light commercial use with 24/7 park access messaging.",
      expatFocus: "Useful when you need drive-up bulky storage rather than a multi-storey self-storage corridor.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Park visits and keytag access; confirm rent vs purchase options.",
      website: "https://garagepark.nl/",
      engagementType: "Garage box rent / purchase",
      storageType: "Garage box park",
      services: ["Garage boxes", "24/7 park access", "Power (typically)", "On-site security"],
      citiesServed: ["Multiple Dutch parks", "Confirm nearest park"],
      featured: false,
      verificationNote: "Garage boxes differ from climate self-storage — confirm weather exposure, power and prohibited uses.",
    },
    {
      name: "0m2",
      slug: "0m2",
      city: "Online",
      region: "Netherlands",
      summary: "Comparison-style marketplace helping households discover storage locations and private garage options across Dutch cities.",
      expatFocus: "Useful for scanning many options quickly — still verify each facility independently.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Depends on matched local providers.",
      website: "https://www.0m2.nl/",
      engagementType: "Multi-option storage discovery",
      storageType: "Quote marketplace",
      services: ["Location comparison", "Provider discovery"],
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "Marketplaces introduce options — your contract and insurance are usually with the facility or private landlord, not the comparison site alone.",
    },
    {
      name: "Student Storage / budget units",
      slug: "student-budget-storage",
      city: "Student cities",
      region: "Netherlands",
      summary: "Budget-oriented small units and seasonal offers commonly used by students and first apartments.",
      expatFocus: "Useful for small inventories — still verify insurance and renewal rates.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "City facilities near campuses; coverage varies.",
      website: "https://www.shurgard.com/en-nl",
      engagementType: "Small-unit self-storage",
      storageType: "Student / budget",
      services: ["Small units", "Short contracts"],
      citiesServed: ["Amsterdam", "Utrecht", "Groningen", "Leiden"],
      featured: false,
      verificationNote: "Budget units can mean thinner insurance — read liability terms before storing valuables. Compare named local branches directly.",
    },
    {
      name: "Climate-controlled specialist facilities",
      slug: "climate-controlled-storage",
      city: "Major cities",
      region: "Netherlands",
      summary: "Facilities advertising temperature or humidity control for sensitive household goods and documents.",
      expatFocus: "Relevant for instruments, electronics archives and fine furniture during longer holds.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Selected branches; not every city site is climate-controlled.",
      website: "https://www.shurgard.com/en-nl",
      engagementType: "Climate-controlled unit rental",
      storageType: "Climate-controlled",
      services: ["Climate control", "Unit rental", "Security"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "Selected cities"],
      featured: false,
      verificationNote: "Ask for the actual temperature/humidity range — marketing labels vary by branch. Confirm the specific facility, not the brand alone.",
    },
    {
      name: "Container / yard storage options",
      slug: "container-flexible-storage",
      city: "Regional",
      region: "Netherlands",
      summary: "Flexible container or yard storage for renovations and larger outdoor-capable loads.",
      expatFocus: "Useful during home works; check weather protection and municipal placement rules.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Delivery or yard pickup depending on provider.",
      website: "https://www.allsafe.nl/",
      engagementType: "Container or flexible volume storage",
      storageType: "Container / flexible",
      services: ["Container rental", "Flexible volume"],
      citiesServed: ["Regional coverage"],
      featured: false,
      verificationNote: "Street placement may need permits — confirm delivery logistics separately from indoor self-storage.",
    },
    {
      name: "Furniture interim / move-gap storage",
      slug: "furniture-interim-storage",
      city: "Randstad focus",
      region: "Western Netherlands",
      summary: "Providers and mover-linked storage options focused on holding furniture between lease dates.",
      expatFocus: "Helpful when keys do not overlap; clarify whether collection/delivery is included.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Often coordinated with movers; mid-contract access may be limited.",
      website: "https://www.mondialmovers.nl/",
      engagementType: "Interim furniture storage",
      storageType: "Furniture / interim",
      services: ["Furniture hold", "Optional collection", "Short contracts"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague"],
      featured: false,
      verificationNote: "Mover-linked storage is not the same as a 24/7 self-storage PIN unit — confirm access mid-hold.",
    },
    {
      name: "Local independent opslag sites",
      slug: "local-independent-opslag",
      city: "City-specific",
      region: "Local Netherlands",
      summary: "Independent local storage warehouses that can be cheaper near smaller cities — quality and English support vary.",
      expatFocus: "Worth comparing for price, but verify security, insurance and contract clarity carefully.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: false,
      inPersonAvailability: "Usually in-person viewing required.",
      website: "https://www.government.nl/topics/housing",
      engagementType: "Local warehouse storage",
      storageType: "Self-storage units",
      services: ["Unit or space rental"],
      citiesServed: ["Local / regional"],
      featured: false,
      verificationNote: "Independent sites need extra verification of insurance, fire safety and written contracts. Use local search; this row is orientation, not a single branded endorsement.",
    },
  ] satisfies StorageCompanyProvider[],
  comparisonTable: [
    { provider: "Shurgard", citiesServed: "Multiple NL cities", expatFocus: "Large network; English web", languages: "Dutch, English", access: "Branch-dependent hours", storageType: "National network" },
    { provider: "ALLSAFE Self Storage", citiesServed: "Multiple NL cities", expatFocus: "Heated units; flexible terms", languages: "Dutch, English varies", access: "Confirm PIN hours", storageType: "Self-storage units" },
    { provider: "BOXIE24", citiesServed: "Multi-city NL coverage", expatFocus: "Pick-up without DIY van", languages: "Dutch, English", access: "Warehouse / by appointment", storageType: "Pick-up & store" },
    { provider: "GaragePark", citiesServed: "Multiple parks NL", expatFocus: "Drive-up garage boxes", languages: "Dutch, English varies", access: "24/7 park access messaging", storageType: "Garage box park" },
    { provider: "0m2", citiesServed: "Matched nationwide", expatFocus: "Multi-option discovery", languages: "Dutch, English varies", access: "Depends on listing", storageType: "Quote marketplace" },
    { provider: "Budget / student units", citiesServed: "Student cities", expatFocus: "Small inventories", languages: "Dutch, English", access: "Often limited hours", storageType: "Student / budget" },
    { provider: "Climate-controlled sites", citiesServed: "Selected cities", expatFocus: "Sensitive items", languages: "Dutch, English varies", access: "Confirm range", storageType: "Climate-controlled" },
    { provider: "Furniture interim", citiesServed: "Randstad common", expatFocus: "Lease-gap holds", languages: "Dutch, English", access: "Often limited mid-hold", storageType: "Furniture / interim" },
  ],
  questionsToAsk: [
    "Is this a self-access unit with a PIN, or mover-held interim storage with limited access?",
    "What m² do you recommend for my inventory, and can I share furniture photos?",
    "What are access hours, including evenings, weekends and holidays?",
    "What is the renewal monthly rate after any intro discount?",
    "What insurance or liability applies, and what is excluded?",
    "Which items are prohibited (food, flammables, batteries)?",
    "What are notice, deposit and early-termination terms if my lease slips?",
    "Do you help with transport into the unit, or should I book a moving company separately?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Storage Options?",
    body: "Use the directory to compare storage types, access hours, city coverage and contract clarity. Then request written terms from shortlisted sites — and switch to Moving or Removal companies when you still need a van or overseas shipment.",
    primaryCta: { label: "Compare Storage", href: "#directory" },
    secondaryCta: { label: "Open Moving Companies", href: MOVING_COMPANIES_PATH },
  },
  faqs: [
    {
      q: "Is storage the same as a moving company?",
      a: "No. Storage holds belongings in a unit or warehouse. Moving companies transport goods between Dutch addresses. Many expats need both: a van on move day and storage if lease dates do not overlap.",
    },
    {
      q: "How is this different from Removal companies?",
      a: "Removal companies handle international household shipments into or out of the Netherlands. Storage is local holding. Some removers offer temporary storage as an add-on — confirm access rules separately.",
    },
    {
      q: "Do I need climate-controlled storage?",
      a: "Often for sensitive items (instruments, documents, some furniture finishes) during longer holds. For short box-only holds, standard units may be enough — ask what the facility actually controls.",
    },
    {
      q: "How should I compare storage without rankings?",
      a: "Compare unit size fit, access hours, renewal pricing, insurance, location vs your next lease and prohibited-item rules. Rankings are not a substitute for reading the contract.",
    },
    {
      q: "Can storage replace a rental agency or housing platform?",
      a: "No. Storage does not find your next home. Use Housing platforms for DIY listings and Rental agencies for mediated search — then store belongings while keys are sorted.",
    },
    {
      q: "Are weekend pickups always possible?",
      a: "Not always. Many facilities advertise 24/7 access; others close evenings or Sundays. Confirm before you book a mover for Sunday unloading.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a storage brand?",
      a: "No. Listings are informational soft discovery only. Always verify current prices, insurance, languages and fit directly with the provider.",
    },
    {
      q: "What if my lease end date slips?",
      a: "Ask about notice periods and weekly extensions before you sign. Extra weeks are a common cost surprise for expats.",
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
      description: "Domestic vans and packing for house moves within the Netherlands.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International household removals and overseas shipments.",
    },
    {
      label: "Rental agencies",
      href: RENTAL_AGENCIES_PATH,
      status: "live",
      description: "Agencies that help mediate rental search for tenants.",
    },
    {
      label: "Estate agents",
      href: ESTATE_AGENTS_PATH,
      status: "live",
      description: "Dutch makelaars for buying and selling property.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "DIY listing platforms to find the next address.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "End-of-tenancy cleans when storage bridges a lease exit or entry.",
    },
    {
      label: "Handymen",
      href: HANDYMEN_PATH,
      status: "live",
      description: "Assembly and small repairs when belongings come out of storage.",
    },
    {
      label: "Moving checklist tool",
      href: MOVING_CHECKLIST_PATH,
      status: "live",
      description: "Practical task list around your move timeline.",
    },
  ] satisfies StorageCompanyLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic house moves within the Netherlands." },
    { label: "Removal companies", href: REMOVAL_COMPANIES_PATH, status: "live", description: "International household goods removals." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Rental mediation for tenants." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Buy/sell makelaars directory." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Rental and housing search platforms." },
    { label: "Cleaning companies", href: CLEANING_COMPANIES_PATH, status: "live", description: "Oplevering and domestic cleaning around storage gaps." },
    { label: "Handymen", href: HANDYMEN_PATH, status: "live", description: "Assembly and small repairs after unpacking from storage." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Agency-style relocation packages." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Broader relocation support." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "When a move is into a purchased home." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax support around relocation and filing." },
  ] satisfies StorageCompanyLink[],
  exploreNextCards: [
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Book a domestic van when you still need to move boxes into or out of storage.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "Switch to international household goods if your shipment crosses borders.",
    },
    {
      label: "Rental agencies",
      href: RENTAL_AGENCIES_PATH,
      status: "live",
      description: "Find mediated rental help while belongings wait in storage.",
    },
    {
      label: "Estate agents",
      href: ESTATE_AGENTS_PATH,
      status: "live",
      description: "Buy/sell makelaar support when storage bridges a purchase or sale.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Secure the next address before your storage contract renews.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "Book an oplevering clean when storage coincides with a lease exit.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare cities before you lock a long storage period.",
    },
  ] satisfies StorageCompanyLink[],
};
