import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — specialist pet import/export and flight-pet logistics. */
export const PET_RELOCATION_COMPANIES_PATH = "/netherlands/services/pet-relocation-companies/" as const;

/** Sibling directories in Home & pet services batch. */
export const CLEANING_COMPANIES_PATH = "/netherlands/services/cleaning-companies/" as const;
export const HANDYMEN_PATH = "/netherlands/services/handymen/" as const;

export const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/" as const;
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const STORAGE_COMPANIES_PATH = "/netherlands/services/storage-companies/" as const;
export const HOUSING_PLATFORMS_PATH = "/netherlands/services/housing-platforms/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const PETS_NETHERLANDS_PATH = "/netherlands/family/pets-netherlands/" as const;
export const BRINGING_PETS_PATH = "/netherlands/bringing-pets-to-netherlands/" as const;

export const PET_RELOCATION_COMPANIES_AFFILIATE_PLACEMENT_ID =
  "nl-services-pet-relocation-companies-support-providers" as const;

export type PetRelocationProvider = {
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
  providerType:
    | "Door-to-door pet relocation"
    | "Flight & cargo coordination"
    | "IPATA / network specialist"
    | "EU ground transfer"
    | "Corporate mobility pets"
    | "Quote / matching desk";
  services: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type PetRelocationLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-pet-relocation-companies";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const petRelocationCompaniesNetherlandsPage = {
  slug: "pet-relocation-companies",
  path: PET_RELOCATION_COMPANIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(PET_RELOCATION_COMPANIES_PATH) ?? "2026-11-10",
  affiliatePlacementId: PET_RELOCATION_COMPANIES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Pet Relocation Companies in the Netherlands for Expats | Import & Flight Pets",
    description:
      "Compare specialist pet relocation companies for arrivals and leavers — IATA crates, flight-pet logistics, quarantine orientation and ground transfer. Soft discovery, not a ranking; not household removals or everyday pet-life guides.",
    keywords: [
      "pet relocation companies netherlands",
      "pet movers netherlands",
      "bring dog to netherlands company",
      "pet flight netherlands",
      "IATA pet crate netherlands",
      "pet import export netherlands",
      "animal transport company netherlands",
      "expat pet relocation",
      "quarantine pet netherlands orientation",
      "compare pet relocation companies",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Pet relocation companies",
    pageTitle: "Pet Relocation Companies in the Netherlands for Expats",
    subtitle:
      "Compare specialist pet import/export and flight-pet logistics providers — IATA crates, airline acceptance, quarantine orientation and ground transfer. Everyday pet life and entry rules live on separate guides; household goods live on Removal companies.",
    primaryCta: { label: "Browse Pet Relocation Directory", href: "#directory" },
    secondaryCta: { label: "How Pet Relocation Differs", href: "#differentiate" },
    chips: ["Pet relocation", "IATA crates", "Flight logistics", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-pet-relocation-companies-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of a specialist pet relocation desk near a Dutch canal: an IATA travel crate, microchip documents and flight checklists laid out while a coordinator reviews airline acceptance notes.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what pet relocation companies help with: IATA crates, airline booking coordination, document checklists, quarantine orientation and destination ground transfer.",
      "Pet relocators coordinate animal logistics — confirm species acceptance, crate specs and timelines before deposit."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating pet relocation companies, pets life guide, bringing-pets entry rules, removal companies and relocation agencies.",
      "Pick the right page first — pet relocators are not household removers or everyday vet directories."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about pet relocation companies in the Netherlands for expats.",
      "Use this snapshot before requesting quotes: species rules, crate fit and airline lanes differ widely."
    ),
    providerTypes: visual(
      "provider-types",
      "Infographic comparing pet relocation provider types: door-to-door, flight/cargo desks, IPATA networks, EU ground transfer and corporate mobility pets.",
      "Match the provider model to route complexity — not every desk handles quarantine or cabin pets."
    ),
    services: visual(
      "services",
      "Infographic of pet relocation services: IATA crates, health certificates, flight booking, quarantine orientation, ground transfer and temporary boarding bridges.",
      "Service depth varies: some only book cargo; others manage door-to-door handovers."
    ),
    compare: visual(
      "compare",
      "Infographic checklist for comparing pet relocation companies: written route plan, crate specs, airline acceptance, insurance and cancellation terms.",
      "Compare process quality and species fit before you compare headline prices alone."
    ),
    costs: visual(
      "costs",
      "Infographic explaining pet relocation cost drivers: route, species/weight, crate, seasonality, quarantine bridges and escort options.",
      "Ask for a written quote with airline and crate assumptions — fuel and season surcharges often change totals."
    ),
    prep: visual(
      "prep",
      "Infographic listing prep items before a pet move: microchip, vaccines, health certificate timing, crate training and destination housing rules.",
      "Document timing and crate training often matter as much as the flight booking itself."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with pet relocation: airline embargoes, crate sizing, lease pet clauses, language gaps and quarantine surprises.",
      "Use early route checks and written scopes to reduce departure-week surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing pet relocation coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and Schiphol corridors.",
      "Most specialists serve nationwide origins; airport and ground-transfer legs still vary by desk."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral pet relocation directory workflow: shortlist, compare route plans, verify airline acceptance and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for pet relocators: provider type, crate support, languages, city coverage and expat focus.",
      "Compare desks by route fit and documentation support before marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask pet relocation companies before booking.",
      "Good questions reveal airline acceptance, crate ownership, quarantine bridges and what happens if a flight is delayed."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common pet-relocation FAQ topics: vs bringing-pets guide, costs, crates, quarantine and red flags.",
      "FAQ answers should help you pick the next verification step — not guarantee clearances."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist pet relocators: define route, check species rules, request written plans and verify airline acceptance.",
      "Turn provider discovery into a structured shortlist before departure week."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for pet entry, animal health and consumer orientation in the Netherlands and EU.",
      "Verify import rules and animal-health requirements with official sources — not mover marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around a pet move: pet relocation, pets guide, bringing pets, removal companies, relocation agencies and housing.",
      "Pet relocators are one part of the wider arrival and household logistics ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing pet relocators: bringing pets, pets life, removal companies and relocation agencies.",
      "Continue from pet-relocation discovery into entry rules, everyday pet life and household logistics."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting pet-relocation research to bringing pets, pets life, housing, removal companies and cities.",
      "Pet shortlists connect naturally into housing pet clauses, household goods timing and city choice."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#provider-types", label: "Provider types" },
    { href: "#services", label: "What they do" },
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
    heading: "Why Expats Compare Pet Relocation Companies",
    paragraphs: [
      "When a dog, cat or other companion animal needs to fly or travel into or out of the Netherlands, specialist pet relocation companies coordinate crates, airline acceptance, document timing and ground transfer — work that ordinary household removers usually do not own.",
      "This page is a services directory for pet import/export and flight-pet logistics. It is not the everyday pets life guide, not the bringing-pets entry-rules guide, not international household removals, and not a full relocation package.",
      "Inclusion here is informational soft discovery, not a ranking. No relocator can guarantee airline acceptance, quarantine outcomes or fixed final prices without accurate species, route and crate details. Confirm scope and credentials directly before booking.",
    ],
    links: [
      { label: "Bringing pets (entry rules)", href: BRINGING_PETS_PATH },
      { label: "Pets in the Netherlands", href: PETS_NETHERLANDS_PATH },
      { label: "Removal companies", href: REMOVAL_COMPANIES_PATH },
      { label: "Services hub", href: SERVICES_HUB_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Pet relocation companies (this page)",
      body: "Specialist animal logistics — IATA crates, flight/cargo booking, quarantine orientation and door-to-door pet handovers into or out of the Netherlands.",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Bringing pets to the Netherlands",
      body: "Entry rules, microchips, vaccines and official document orientation for importing a pet — not a provider directory.",
      href: BRINGING_PETS_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Pets in the Netherlands",
      body: "Everyday pet life after arrival: registration context, insurance orientation, walking culture and settling routines.",
      href: PETS_NETHERLANDS_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Removal companies",
      body: "International household goods — furniture and personal effects in containers or air freight. Not live animals.",
      href: REMOVAL_COMPANIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Relocation agencies / services",
      body: "Broader packages: housing search, municipal registration and settling-in — sometimes coordinating vendors, not owning pet cargo alone.",
      href: RELOCATION_AGENCIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Cleaning companies",
      body: "Home cleaning providers for expats — domestic, deep cleans and end-of-tenancy / oplevering.",
      href: CLEANING_COMPANIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
  ],
  snapshotCards: [
    { label: "Provider focus", value: "Live animals", note: "Flight-pet and ground-pet logistics — not furniture vans." },
    { label: "Common friction", value: "Airline + docs", note: "Breed/embargo rules, crate fit and certificate timing drive delays." },
    { label: "Provider models", value: "5+ types", note: "Door-to-door, cargo desks, IPATA networks, EU ground, corporate pets." },
    { label: "Quotes", value: "Written route", note: "Ask for airline, crate ownership, escorts and quarantine assumptions." },
    { label: "Languages", value: "Varies", note: "English-friendly desks exist; confirm booking language early." },
    { label: "Guarantee", value: "None", note: "No directory can guarantee acceptance, clearance or price." },
  ],
  providerTypeComparison: [
    {
      type: "Door-to-door pet relocation",
      scope: "Origin pickup through destination handover with one coordinating pet relocator.",
      usefulWhen: "You want a single accountable desk for crate, flight and ground transfer.",
      questions: ["Who owns the crate?", "Which airline and cabin/cargo option?", "What happens if the flight is delayed?"],
    },
    {
      type: "Flight & cargo coordination",
      scope: "Specialist desks focused on airline booking, cargo acceptance and airport handovers.",
      usefulWhen: "You can handle local ground legs but need airline logistics expertise.",
      questions: ["Is cabin possible for my pet?", "What embargo seasons apply?", "Who meets the flight?"],
    },
    {
      type: "IPATA / network specialist",
      scope: "Members of international pet-transporter networks with origin and destination agents.",
      usefulWhen: "Your route needs coordinated agents at both ends.",
      questions: ["Which agent operates in NL?", "How is communication shared?", "What is excluded from the package?"],
    },
    {
      type: "EU ground transfer",
      scope: "Road transport within Europe for pets that do not need air cargo for the full journey.",
      usefulWhen: "You are moving within the EU/Schengen corridor and prefer ground over flying.",
      questions: ["Rest-stop policy?", "Temperature control?", "Border document checks included?"],
    },
    {
      type: "Corporate mobility pets",
      scope: "Employer-arranged pet moves inside assignment packages.",
      usefulWhen: "Your company funds pet relocation and sets policy caps.",
      questions: ["What species/weight is covered?", "Who pays excess?", "Can I add a self-paid escort?"],
    },
  ],
  providerServices: [
    { title: "IATA crate sourcing & fit", body: "Correct crate size, ventilation and labelling for airline acceptance — including training guidance for the pet." },
    { title: "Flight & cargo booking", body: "Airline selection for cabin, hold or cargo lanes matched to species, weight and route." },
    { title: "Document timing orientation", body: "Checklists for microchips, vaccines and health certificates — not a guarantee of official outcomes." },
    { title: "Quarantine orientation", body: "Process maps when destination or transit rules require isolation or inspection windows." },
    { title: "Ground transfer", body: "Airport-to-home or home-to-airport pet transport with handover protocols." },
    { title: "Boarding bridges", body: "Temporary kennel or sitting when flight dates and housing keys do not align." },
  ],
  compareCriteria: [
    {
      criterion: "Written route plan",
      whyItMatters: "Verbal estimates often omit embargo seasons, escort fees or quarantine bridges.",
      howToCheck: "Ask for a written plan with airline, crate ownership, ground legs and assumptions.",
    },
    {
      criterion: "Species & breed acceptance",
      whyItMatters: "Airlines and countries restrict certain breeds, ages and snub-nosed dogs.",
      howToCheck: "Confirm your exact breed/species against the proposed airline lane.",
    },
    {
      criterion: "Crate specs & training",
      whyItMatters: "Wrong crate size is a common rejection reason at check-in.",
      howToCheck: "Get written crate dimensions and a training timeline before departure week.",
    },
    {
      criterion: "Insurance & liability",
      whyItMatters: "Standard liability may be limited; travel and pet medical cover may be separate.",
      howToCheck: "Ask what is covered in transit and how claims work.",
    },
    {
      criterion: "Language & booking clarity",
      whyItMatters: "Misunderstandings on departure day are stressful for pets and owners.",
      howToCheck: "Confirm English support for booking and airport handover contacts.",
    },
    {
      criterion: "Cancellation & delays",
      whyItMatters: "Housing keys slip; flights move; health certificates expire.",
      howToCheck: "Read deposit, rebook and certificate-refresh rules before paying.",
    },
  ],
  costExamples: [
    {
      item: "Short EU ground transfer",
      typicalRange: "Often lower than air cargo",
      whatToConfirm: "Vehicle type, rest stops, border docs and whether an escort is included.",
    },
    {
      item: "Intercontinental flight pet (dog/cat)",
      typicalRange: "Wide range by weight/route",
      whatToConfirm: "Cabin vs cargo, crate ownership, fuel/season surcharges and destination pickup.",
    },
    {
      item: "IATA crate purchase or rental",
      typicalRange: "Materials + sizing labour",
      whatToConfirm: "Who keeps the crate, return shipping and fit-check process.",
    },
    {
      item: "Quarantine / boarding bridge",
      typicalRange: "Daily facility fees",
      whatToConfirm: "Who books the facility, vet access and how delays are billed.",
    },
    {
      item: "Corporate mobility pet package",
      typicalRange: "Policy-capped",
      whatToConfirm: "Employer volume/weight caps and self-pay top-ups.",
    },
  ],
  prepChecklist: [
    { document: "Microchip & rabies timeline", why: "Entry and airline rules often hinge on correct chip format and vaccine timing." },
    { document: "Species / breed disclosure", why: "Prevents last-minute airline refusals for restricted breeds or ages." },
    { document: "Crate training plan", why: "Calm crate behaviour reduces check-in stress and rejection risk." },
    { document: "Destination housing pet clause", why: "Many Dutch leases restrict pets — confirm before locking a flight date." },
    { document: "Health certificate appointment window", why: "Certificates often have short validity aligned to departure." },
    { document: "Contact for airport handover", why: "Named contacts reduce missed pickups when flights shift." },
    { document: "Insurance preference", why: "Decide transit liability vs separate pet medical cover early." },
  ],
  challengeCards: [
    { title: "Airline embargoes", body: "Heat, cold or route embargos can block cargo pets seasonally." },
    { title: "Crate rejections", body: "Wrong size, weak latches or missing labels cause expensive delays." },
    { title: "Lease pet bans", body: "A confirmed flight is useless if the Dutch rental forbids your pet." },
    { title: "Certificate timing", body: "Health papers expire; departure slips can force re-vet visits." },
    { title: "Language gaps", body: "Booking in English but Dutch-only airport contacts creates stress." },
    { title: "Wrong provider type", body: "Booking a furniture remover for a live animal wastes weeks." },
    { title: "Quarantine surprises", body: "Transit or destination rules may require isolation you did not budget." },
    { title: "Deposit surprises", body: "Rebook and cancellation windows vary — read them before paying." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "Schiphol corridor demand is high; book ground transfer early." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Common origin/destination for international households with pets." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "Diplomatic and international families often need bilingual desks." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Central NL pickup points for door-to-door pet relocators." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Tech movers frequently coordinate pets with assignment start dates." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam-area spillover; confirm Schiphol transfer timing." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Compact city housing — verify pet clauses before arrival." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "Student and professional moves; plan crate storage space." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern origins; confirm national network coverage." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern NL routes; verify ground vs air recommendations." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University-city households; check lease pet policies early." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Southern EU-border corridor; ground transfer may fit some routes." },
  ],
  providers: [
    {
      name: "PetRelocation",
      slug: "petrelocation",
      city: "International network",
      region: "Netherlands origin / destination legs",
      summary: "Global pet relocation brand coordinating door-to-door moves, crates and airline logistics for dogs and cats on international routes.",
      expatFocus: "Useful when you want an English-first desk experienced with intercontinental pet flights into or out of the Netherlands.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Network agents at origin/destination; verify NL handover partners for your dates.",
      website: "https://www.petrelocation.com/",
      engagementType: "Door-to-door pet relocation quotes",
      providerType: "Door-to-door pet relocation",
      services: ["Crate sourcing", "Flight booking", "Document checklists", "Ground transfer"],
      citiesServed: ["Amsterdam", "Rotterdam", "The Hague", "Netherlands-wide", "International"],
      featured: true,
      verificationNote: "Confirm exact airline lane, crate ownership and NL agent for your species before deposit.",
    },
    {
      name: "Animal Couriers",
      slug: "animal-couriers",
      city: "UK / Europe network",
      region: "EU and UK corridors with NL connections",
      summary: "Specialist pet transport company known for European road and air pet moves, including routes involving the Netherlands.",
      expatFocus: "Strong option when your route is UK–EU or Europe-ground heavy rather than long-haul cargo only.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Route-dependent drivers and airport handovers; confirm NL pickup/drop.",
      website: "https://www.animalcouriers.com/",
      engagementType: "EU pet transport and flight coordination",
      providerType: "EU ground transfer",
      services: ["Ground transfer", "Flight coordination", "Crate advice", "Document orientation"],
      citiesServed: ["Randstad", "Netherlands-wide", "UK", "Europe"],
      featured: true,
      verificationNote: "Ask whether your quote is ground, air or mixed — and which borders are included.",
    },
    {
      name: "PetAir UK",
      slug: "petair-uk",
      city: "UK hub with European destinations",
      region: "International pet air freight",
      summary: "Pet air-freight specialist coordinating IATA crates, airline bookings and destination agents for international pet travel.",
      expatFocus: "Helpful for English-speaking households comparing cargo vs cabin options on routes touching Schiphol.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Airport-focused; destination agent depends on route.",
      website: "https://www.petairuk.com/",
      engagementType: "Pet air freight coordination",
      providerType: "Flight & cargo coordination",
      services: ["IATA crates", "Airline booking", "Export paperwork orientation", "Destination agents"],
      citiesServed: ["Schiphol corridor", "International"],
      featured: true,
      verificationNote: "Verify Schiphol acceptance windows and who meets the flight in the Netherlands.",
    },
    {
      name: "Air Animal Pet Movers",
      slug: "air-animal-pet-movers",
      city: "International",
      region: "Long-haul pet flights",
      summary: "US-rooted pet mover brand offering international pet flights, crates and door-to-door coordination on selected corridors.",
      expatFocus: "Relevant for transatlantic assignments where employer timelines and pet cargo must align.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Depends on origin/destination agents; confirm NL leg.",
      website: "https://www.airanimal.com/",
      engagementType: "International pet flight packages",
      providerType: "Flight & cargo coordination",
      services: ["Crates", "Flight booking", "Health certificate timing support", "Door delivery options"],
      citiesServed: ["International", "Netherlands destination legs"],
      featured: false,
      verificationNote: "Treat route quotes as provisional until airline and breed acceptance are written.",
    },
    {
      name: "Happy Tails Travel",
      slug: "happy-tails-travel",
      city: "International",
      region: "Pet relocation network",
      summary: "Pet travel company positioning around door-to-door relocation, crate training guidance and airline logistics for family pets.",
      expatFocus: "Useful when you want coaching on crate training alongside booking support.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Remote planning with local partners; verify NL handover.",
      website: "https://www.happytailstravel.com/",
      engagementType: "Pet relocation planning and booking",
      providerType: "Door-to-door pet relocation",
      services: ["Crate training guidance", "Flight booking", "Document checklists", "Partner handovers"],
      citiesServed: ["International", "Netherlands-capable routes"],
      featured: false,
      verificationNote: "Confirm which services are in-house vs partner-delivered at the Dutch end.",
    },
    {
      name: "JetPets",
      slug: "jetpets",
      city: "International network",
      region: "IPATA-style pet transport network",
      summary: "Network-oriented pet transporter coordinating origin and destination agents for international pet moves.",
      expatFocus: "Helpful when you need matched agents at both ends of a complex route.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Agent-dependent; ask for named NL partner.",
      website: "https://www.jetpets.com/",
      engagementType: "Network pet relocation",
      providerType: "IPATA / network specialist",
      services: ["Agent matching", "Flight logistics", "Crate standards", "Ground transfer via partners"],
      citiesServed: ["Major Dutch cities", "International network"],
      featured: false,
      verificationNote: "Request the specific NL agent contact and written scope boundaries.",
    },
    {
      name: "WorldCare Pet Transport",
      slug: "worldcare-pet-transport",
      city: "International",
      region: "Global pet logistics",
      summary: "International pet transport brand offering relocation packages, crates and airline coordination for dogs and cats.",
      expatFocus: "Compare their written route plans and insurance clarity against other network desks.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Programme and route dependent.",
      website: "https://www.worldcarepet.com/",
      engagementType: "International pet transport packages",
      providerType: "Door-to-door pet relocation",
      services: ["Crates", "Flights", "Document orientation", "Destination pickup"],
      citiesServed: ["International", "Netherlands destination options"],
      featured: false,
      verificationNote: "Confirm quarantine assumptions and certificate refresh rules in writing.",
    },
    {
      name: "Starwood Animal Transport",
      slug: "starwood-animal-transport",
      city: "International",
      region: "Pet cargo specialists",
      summary: "Animal transport company focused on air cargo pets, kennel standards and destination coordination on selected international lanes.",
      expatFocus: "Relevant when cargo (not cabin) is the realistic option for your pet’s size or route.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Airport and partner kennels; verify NL destination desk.",
      website: "https://www.starwoodanimal.com/",
      engagementType: "Pet cargo and kennel logistics",
      providerType: "Flight & cargo coordination",
      services: ["Cargo booking", "Kennel/crate standards", "Airport handling orientation"],
      citiesServed: ["International hubs", "NL destination legs"],
      featured: false,
      verificationNote: "Ask about seasonal embargos and temperature policies for your departure month.",
    },
    {
      name: "Crown Relocations (pets within mobility)",
      slug: "crown-relocations-pets",
      city: "International network",
      region: "Corporate mobility with pet add-ons",
      summary: "Global relocation brand that may coordinate pet moves inside employer assignment packages rather than as a standalone consumer pet-only desk.",
      expatFocus: "Relevant when HR already uses Crown for household goods and you need pet logistics aligned to the same timeline.",
      languages: ["English", "Dutch availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Programme-dependent; verify pet desk separately from furniture removals.",
      website: "https://www.crownrelo.com/",
      engagementType: "Corporate mobility pet coordination",
      providerType: "Corporate mobility pets",
      services: ["Assignment-linked pet logistics", "Vendor coordination", "Timeline alignment"],
      citiesServed: ["Major Dutch cities", "International network"],
      featured: false,
      verificationNote: "Confirm whether pets are in-policy, which vendor operates the animal leg, and what is self-pay.",
    },
    {
      name: "IPATA member directory (starting point)",
      slug: "ipata-member-directory",
      city: "Global association",
      region: "Member pet transporters worldwide",
      summary: "Industry association directory for pet transporters — a discovery starting point to find accredited-style specialists for specific corridors, not a single mover.",
      expatFocus: "Useful when you want to shortlist members who declare NL origin or destination capability.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Depends on the member you select.",
      website: "https://www.ipata.org/",
      engagementType: "Association directory for pet transporters",
      providerType: "Quote / matching desk",
      services: ["Member discovery", "Corridor shortlisting"],
      citiesServed: ["International", "Member-dependent NL coverage"],
      featured: false,
      verificationNote: "Association listings are not ExpatLife rankings — verify each member’s current NL services and insurance yourself.",
    },
  ] satisfies PetRelocationProvider[],
  comparisonTable: [
    { provider: "PetRelocation", citiesServed: "NL + international", expatFocus: "Door-to-door English desk", languages: "English", crateSupport: "Sourcing + fit", providerType: "Door-to-door pet relocation" },
    { provider: "Animal Couriers", citiesServed: "UK/EU + NL", expatFocus: "Ground + air EU corridors", languages: "English", crateSupport: "Advice / supply varies", providerType: "EU ground transfer" },
    { provider: "PetAir UK", citiesServed: "Schiphol + intl", expatFocus: "Air freight specialists", languages: "English", crateSupport: "IATA crates", providerType: "Flight & cargo coordination" },
    { provider: "Air Animal Pet Movers", citiesServed: "Long-haul lanes", expatFocus: "Transatlantic assignments", languages: "English", crateSupport: "Included options", providerType: "Flight & cargo coordination" },
    { provider: "Happy Tails Travel", citiesServed: "Intl routes", expatFocus: "Crate training + booking", languages: "English", crateSupport: "Guidance + options", providerType: "Door-to-door pet relocation" },
    { provider: "JetPets", citiesServed: "Network agents", expatFocus: "Matched origin/destination", languages: "English", crateSupport: "Standards via agents", providerType: "IPATA / network specialist" },
    { provider: "WorldCare Pet Transport", citiesServed: "Intl packages", expatFocus: "Compare written plans", languages: "English", crateSupport: "Package-dependent", providerType: "Door-to-door pet relocation" },
    { provider: "Crown Relocations (pets)", citiesServed: "NL + mobility", expatFocus: "Employer programmes", languages: "English, Dutch varies", crateSupport: "Vendor-dependent", providerType: "Corporate mobility pets" },
  ],
  questionsToAsk: [
    "Is this quote for live-animal relocation only — or is household goods mixed in somehow?",
    "Which airline and cabin/hold/cargo option is assumed for my exact breed, age and weight?",
    "Who owns the IATA crate, and what written dimensions are approved for this flight?",
    "What happens if my health certificate expires because the flight moves?",
    "Is quarantine or temporary boarding included, optional or out of scope?",
    "Who is the named contact for Schiphol (or other hub) handover in English?",
    "What insurance or liability applies during transit, and how do claims work?",
    "What are deposit, rebook and cancellation terms if my housing keys slip?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Pet Relocators?",
    body: "Use the directory to compare route plans, crate support and airline clarity. Then verify entry rules on Bringing pets — and keep household furniture on Removal companies.",
    primaryCta: { label: "Compare Pet Relocators", href: "#directory" },
    secondaryCta: { label: "Open Bringing Pets Guide", href: BRINGING_PETS_PATH },
  },
  faqs: [
    {
      q: "Is this the same as Bringing pets to the Netherlands?",
      a: "No. Bringing pets covers entry rules, microchips, vaccines and official document orientation. This page is a soft-discovery directory of specialist pet relocation companies that help execute logistics.",
    },
    {
      q: "How is this different from the Pets in the Netherlands guide?",
      a: "Pets in the Netherlands is everyday life after arrival — insurance orientation, walking culture and settling routines. Pet relocation companies focus on getting the animal across borders safely and on time.",
    },
    {
      q: "Can Removal companies move my dog with the furniture?",
      a: "Usually not. International removers move household goods. Live animals need specialist pet relocators, airline acceptance and animal-health paperwork. Keep the two workstreams separate.",
    },
    {
      q: "Do relocation agencies include pets?",
      a: "Sometimes as a coordinated vendor inside a package — but the animal logistics still need a specialist. Ask what is in-policy vs self-arranged.",
    },
    {
      q: "How should I compare pet relocators without rankings?",
      a: "Compare written route plans, breed/airline acceptance, crate ownership, insurance, language support and delay/rebook terms. Rankings are not a substitute for verifying your exact species and dates.",
    },
    {
      q: "What about quarantine?",
      a: "Some routes require inspection or isolation windows. Relocators can orient you and sometimes book bridges — they cannot guarantee official outcomes. Confirm rules with official sources for your origin and species.",
    },
    {
      q: "Are cabin pets always possible into Schiphol?",
      a: "No. Cabin vs hold vs cargo depends on airline policy, pet size and route. Get the assumption in writing before you train for a cabin bag that may not be allowed.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a company?",
      a: "No. Listings are informational soft discovery only. Always verify current services, insurance, languages and fit directly with the provider.",
    },
  ],
  officialSources: [
    {
      label: "NVWA — Animals",
      href: "https://www.nvwa.nl/onderwerpen/dieren",
      description: "Netherlands Food and Consumer Product Safety Authority — animal health and import orientation.",
    },
    {
      label: "Government.nl — Pets",
      href: "https://www.government.nl/topics/pets",
      description: "Official Dutch government information related to pets and animal topics.",
    },
    {
      label: "European Commission — Pet travel",
      href: "https://food.ec.europa.eu/animals/movement-pets_en",
      description: "EU orientation on movement of pet animals between member states and related rules.",
    },
    {
      label: "IATA — Live animals",
      href: "https://www.iata.org/en/programs/cargo/live-animals/",
      description: "Industry orientation on live-animal air transport standards (crate and handling context).",
    },
    {
      label: "ACM — Consumers",
      href: "https://www.acm.nl/en/consumers",
      description: "Netherlands Authority for Consumers and Markets — consumer orientation.",
    },
  ],
  relatedGuides: [
    {
      label: "Bringing pets to the Netherlands",
      href: BRINGING_PETS_PATH,
      status: "live",
      description: "Entry rules, microchips, vaccines and document timing orientation.",
    },
    {
      label: "Pets in the Netherlands",
      href: PETS_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday pet life after arrival — insurance, routines and settling.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International household goods — furniture, not live animals.",
    },
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Domestic within-Netherlands house moves.",
    },
    {
      label: "Relocation agencies",
      href: RELOCATION_AGENCIES_PATH,
      status: "live",
      description: "Full-package relocation coordination beyond pet logistics alone.",
    },
    {
      label: "Storage companies",
      href: STORAGE_COMPANIES_PATH,
      status: "live",
      description: "Self-storage when household goods timing and pet flights do not align.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "Home cleaning providers — domestic, deep cleans and end-of-tenancy.",
    },
    {
      label: "Handymen",
      href: HANDYMEN_PATH,
      status: "live",
      description: "Handyman and home-fix providers — sibling directory (planned).",
    },
  ] satisfies PetRelocationLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Removal companies", href: REMOVAL_COMPANIES_PATH, status: "live", description: "International household goods removals." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic within-NL house moves." },
    { label: "Storage companies", href: STORAGE_COMPANIES_PATH, status: "live", description: "Interim storage around arrival windows." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Agency-style relocation packages." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Broader relocation support." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Find pet-friendly listings while you plan flights." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Tenant mediation — confirm pet clauses early." },
    { label: "Cleaning companies", href: CLEANING_COMPANIES_PATH, status: "live", description: "Home cleaning — domestic and move-out cleans." },
    { label: "Handymen", href: HANDYMEN_PATH, status: "live", description: "Home repairs, assembly and odd jobs." },
  ] satisfies PetRelocationLink[],
  exploreNextCards: [
    {
      label: "Bringing pets to the Netherlands",
      href: BRINGING_PETS_PATH,
      status: "live",
      description: "Verify entry rules before you lock a relocator deposit.",
    },
    {
      label: "Pets in the Netherlands",
      href: PETS_NETHERLANDS_PATH,
      status: "live",
      description: "Plan everyday pet life once your animal has arrived.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "Book household goods separately from live-animal logistics.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Secure a pet-allowed address before departure week.",
    },
    {
      label: "Relocation agencies",
      href: RELOCATION_AGENCIES_PATH,
      status: "live",
      description: "Add housing and registration support around the pet move.",
    },
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "Home cleaning support after move-in or before handover.",
    },
    {
      label: "Handymen",
      href: HANDYMEN_PATH,
      status: "live",
      description: "Shelves, assembly and small repairs around settling-in.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare cities before you commit to an arrival airport corridor.",
    },
  ] satisfies PetRelocationLink[],
};
