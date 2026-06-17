export const MUNICIPALITY_SERVICES_NETHERLANDS_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;

export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration/" as const;
export const REGISTER_ADDRESS_PATH = "/netherlands/register-address-netherlands/" as const;
export const DIGID_AWARENESS_PATH = "/netherlands/digid-awareness/" as const;
export const UTILITIES_NETHERLANDS_PATH = "/netherlands/utilities/utilities-netherlands/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/renting-in-the-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const PROPERTY_TAX_PATH = "/netherlands/taxes/property-tax-netherlands/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const BUYING_HOUSE_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const STARTING_BUSINESS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const ZZP_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const MUNICIPALITY_REGISTRATION_PATH = "/netherlands/municipality-registration-netherlands/" as const;

export const BSN_NETHERLANDS_PATH = "/netherlands/practical-life/bsn-netherlands/" as const;
export const DIGID_NETHERLANDS_PATH = "/netherlands/practical-life/digid-netherlands/" as const;
export const ADDRESS_REGISTRATION_NETHERLANDS_PATH =
  "/netherlands/practical-life/registering-your-address-netherlands/" as const;
export const LOCAL_TAXES_NETHERLANDS_PATH = "/netherlands/practical-life/local-taxes-netherlands/" as const;

export type PracticalLifeLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type MunicipalityDirectoryEntry = {
  name: string;
  population: string;
  summary: string;
  website: string;
  expatServicesNote: string;
  offers: string[];
  onlineServices: string[];
};

export type CityMunicipalityCard = {
  city: string;
  population: string;
  href: string;
  website: string;
  expatServices: string;
  keyResources: string[];
};

export type SetupPhase = {
  phase: string;
  tasks: string[];
};

export type CostOrientationExample = {
  profile: string;
  priceRange: string;
  details: readonly string[];
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-municipality-services-${slug}-${version}.png`,
  alt,
  caption,
});

export const municipalityServicesNetherlandsPage = {
  slug: "municipality-services-netherlands",
  path: MUNICIPALITY_SERVICES_NETHERLANDS_PATH,
  hubPath: MOVING_TO_NETHERLANDS_PATH,
  parentGuidePath: MOVING_TO_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-10-04",
  seo: {
    title: "Municipality Services in the Netherlands | Complete Expat Guide",
    description:
      "Learn how Dutch municipalities work, including registration, BSN numbers, local taxes, permits, parking, waste collection and essential services for expats.",
    keywords: [
      "municipality netherlands",
      "gemeente netherlands",
      "municipality services netherlands",
      "register municipality netherlands",
      "expat municipality netherlands",
      "bsn netherlands",
      "local government netherlands",
      "address registration netherlands",
      "local taxes netherlands",
      "gemeente services",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "Municipality Services in the Netherlands",
    subtitle:
      "Learn how Dutch municipalities work, what services they provide and what expats need to arrange after moving to the Netherlands.",
    primaryCta: { label: "Understand Municipality Services", href: "#intro" },
    secondaryCta: { label: "Explore Moving Guides", href: MOVING_TO_NETHERLANDS_PATH },
    image: {
      src: "/images/heroes/netherlands-municipality-services-hero-v2.png",
      alt: "Photorealistic scene of an international couple outside a modern Dutch city hall on a bright morning, with bicycles, canal houses in the background and appointment documents ready for municipality registration.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#registration", label: "Registration" },
    { href: "#bsn", label: "BSN" },
    { href: "#digital", label: "DigiD" },
    { href: "#local-taxes", label: "Local taxes" },
    { href: "#parking", label: "Parking" },
    { href: "#waste", label: "Waste" },
    { href: "#family", label: "Family" },
    { href: "#housing", label: "Housing" },
    { href: "#business", label: "Business" },
    { href: "#social", label: "Social support" },
    { href: "#cities", label: "Major cities" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#directory", label: "Directory" },
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
      "Premium infographic map of Dutch municipality services for expats after moving.",
      "Use this overview to see how gemeente services connect registration, taxes, permits and daily local life."
    ),
    snapshot: visual(
      "snapshot",
      "premium-v2",
      "Premium infographic snapshot of essential municipality services in the Netherlands.",
      "Address registration, BSN, local taxes, parking, waste and family services are the core touchpoints for newcomers."
    ),
    registration: visual(
      "registration",
      "premium-v2",
      "Premium infographic explaining address registration at the Dutch municipality.",
      "Book an appointment, gather documents and register your address to start official Dutch admin."
    ),
    bsn: visual(
      "bsn",
      "premium-v2",
      "Premium infographic explaining BSN issuance through municipality registration.",
      "The BSN connects employment, taxes, healthcare, banking and government services."
    ),
    digital: visual(
      "digital",
      "premium-v2",
      "Premium infographic explaining DigiD and digital government services in the Netherlands.",
      "DigiD unlocks online access to tax, healthcare, benefits and many municipality interactions."
    ),
    localTaxes: visual(
      "local-taxes",
      "premium-v2",
      "Premium infographic explaining common municipal taxes for residents.",
      "Waste tax, sewage charges, property-related levies and parking fees vary by municipality."
    ),
    parking: visual(
      "parking",
      "premium-v2",
      "Premium infographic explaining resident parking permits in Dutch cities.",
      "Zones, waiting lists and visitor permits differ by city and neighborhood."
    ),
    waste: visual(
      "waste",
      "premium-v2",
      "Premium infographic explaining waste collection and recycling rules by municipality.",
      "Residual waste, glass, paper, organic waste and bulky collection follow local calendars."
    ),
    family: visual(
      "family",
      "premium-v2",
      "Premium infographic explaining municipality family and child services.",
      "Childcare information, schools, youth services and family programs are often coordinated locally."
    ),
    housing: visual(
      "housing",
      "premium-v2",
      "Premium infographic connecting housing and municipality services in the Netherlands.",
      "Address registration, occupancy rules, permits and local regulations affect renters and owners."
    ),
    business: visual(
      "business",
      "premium-v2",
      "Premium infographic explaining municipality services for entrepreneurs.",
      "Permits, zoning, local regulations and business support programs often start at gemeente level."
    ),
    social: visual(
      "social",
      "premium-v2",
      "Premium infographic explaining community and social support through municipalities.",
      "Integration resources, local programs and public information services support residents settling in."
    ),
    cities: visual(
      "cities",
      "premium-v2",
      "Premium infographic map of major Dutch municipalities and expat service touchpoints.",
      "Amsterdam, Rotterdam, The Hague, Utrecht and other cities differ in appointment access and online tools."
    ),
    checklist: visual(
      "checklist",
      "premium-v2",
      "Premium infographic checklist for municipality tasks after arriving in the Netherlands.",
      "Use this sequence to register, obtain BSN, activate DigiD and learn local rules."
    ),
    mistakes: visual(
      "mistakes",
      "premium-v2",
      "Premium infographic showing common municipality mistakes expats make.",
      "Avoid delays, missed letters and setup gaps with these practical checks."
    ),
    directory: visual(
      "directory",
      "premium-v2",
      "Premium infographic directory of major Dutch municipality websites.",
      "Compare population, expat-facing services and online portals before booking appointments."
    ),
    faq: visual(
      "faq",
      "premium-v2",
      "Premium infographic summarizing common municipality services FAQ answers.",
      "Quick orientation on registration, BSN, taxes, DigiD and first-week gemeente tasks."
    ),
    sources: visual(
      "sources",
      "premium-v2",
      "Premium infographic showing official municipality and government resources.",
      "Verify current rules, fees and appointment processes directly with official sources."
    ),
    relatedGuides: visual(
      "related",
      "premium-v2",
      "Premium infographic journey map connecting municipality services to BSN, DigiD, housing and relocation guides.",
      "Continue into the next guide that matches your registration, housing or tax decision."
    ),
  },
  visualTextDetails: {
    overview: {
      title: "What municipalities handle",
      items: [
        "Gemeenten are local authorities for address registration, BSN administration and many resident services.",
        "Every resident interacts with their municipality after moving, even when national rules apply elsewhere.",
        "Services differ by city — appointment access, online portals and expat desks vary widely.",
        "Start with registration and BSN, then learn local taxes, waste rules and parking for your address.",
        "This guide is orientation only — verify requirements with your municipality and official sources.",
      ],
    },
    snapshot: {
      title: "Core services at a glance",
      items: [
        "Address registration is usually the first formal step after you have a valid Dutch address.",
        "BSN administration often follows registration and unlocks employment, tax and banking setup.",
        "Local taxes may arrive by post or digital mailbox after registration.",
        "Parking permits, waste calendars and family services all depend on your municipality.",
        "Bookmark your gemeente website and check English information pages where available.",
      ],
    },
    registration: {
      title: "Registration essentials",
      items: [
        "Most newcomers register at the municipality where they live, usually by appointment.",
        "Bring valid ID, proof of address and any route-specific documents your situation requires.",
        "Registration timing matters for BSN access, post delivery and official correspondence.",
        "Some cities offer expat desks or combined welcome services — check your city page.",
        "Appointment availability varies; book as early as possible after securing housing.",
      ],
    },
    bsn: {
      title: "BSN connection points",
      items: [
        "The BSN is used for employment, payroll tax, healthcare, banking and government services.",
        "Many newcomers receive a BSN through municipality registration rather than a separate process.",
        "Keep your registration proof safe — employers, insurers and banks often request it.",
        "BSN rules can differ for short stays, cross-border workers and specific permit routes.",
        "Use our BSN guides for deeper detail; this section is a practical orientation only.",
      ],
    },
    digital: {
      title: "Digital access basics",
      items: [
        "DigiD is the standard login for Dutch government and many service portals.",
        "You typically need a BSN and registered Dutch address before applying.",
        "Activation uses a letter sent to your home address — apply soon after registration.",
        "MijnOverheid, Belastingdienst and many municipality forms rely on DigiD.",
        "Set up DigiD early to avoid delays when tax letters or benefits applications arrive.",
      ],
    },
    localTaxes: {
      title: "Municipal tax orientation",
      items: [
        "Common charges include waste tax (afvalstoffenheffing), sewage and property-related levies.",
        "Tax letters often arrive after registration and may use Dutch terminology.",
        "Amounts and billing cycles differ by municipality and housing type.",
        "Parking-related fees and environmental levies may appear separately from income tax.",
        "This is not tax advice — use official sources and specialist guides for your situation.",
      ],
    },
    parking: {
      title: "Parking permit basics",
      items: [
        "Many cities use paid parking zones with resident permits for eligible addresses.",
        "Waiting lists are common in dense neighborhoods — apply soon after registering.",
        "Visitor permits, second-car rules and zone boundaries vary by gemeente.",
        "Check your postcode zone before assuming street parking is free overnight.",
        "Example cities include Amsterdam, Rotterdam, The Hague and Utrecht with different systems.",
      ],
    },
    waste: {
      title: "Waste and recycling rules",
      items: [
        "Collection days, container types and sorting rules are set locally, not nationally.",
        "Typical streams include residual waste, paper, glass, plastic packaging and organic (GFT) waste.",
        "Underground containers, waste passes and bulky-waste appointments differ by neighborhood.",
        "Save your municipality waste calendar after registering your address.",
        "Fines or missed collections often trace back to not reading local rules early.",
      ],
    },
    family: {
      title: "Family service touchpoints",
      items: [
        "Municipalities often publish childcare, school and youth-service information locally.",
        "Registration of children and family members may be required at the gemeente.",
        "Childcare allowance and school choice involve national rules plus local context.",
        "Family programs, playgroups and integration activities vary by city.",
        "Check both gemeente pages and national portals for complete family setup steps.",
      ],
    },
    housing: {
      title: "Housing and gemeente links",
      items: [
        "Your registered address must match where you actually live for most official processes.",
        "Renters and owners may need gemeente input for occupancy, permits or renovation rules.",
        "Landlord permission, housing permits and short-stay rules can affect registration eligibility.",
        "Report address changes promptly when moving within or between municipalities.",
        "Pair this section with renting and buying guides for housing-specific responsibilities.",
      ],
    },
    business: {
      title: "Entrepreneur municipality tasks",
      items: [
        "Business owners may need gemeente permits for premises, signage, hospitality or events.",
        "Zoning, environmental rules and local business support programs are often municipal.",
        "Home-office and ZZP setups can trigger registration or permit questions depending on activity.",
        "Chamber of Commerce (KVK) registration is separate but connects to local compliance.",
        "Check your municipality business desk or online portal before opening premises.",
      ],
    },
    social: {
      title: "Community support channels",
      items: [
        "Municipalities offer public information desks, newcomer pages and social support referrals.",
        "Integration resources, language programs and community activities vary by city.",
        "Libraries, welcome centres and neighborhood teams often complement official gemeente services.",
        "Social support eligibility depends on personal circumstances — this is not legal advice.",
        "Use official municipality contact points when you need local program information.",
      ],
    },
    cities: {
      title: "City comparison details",
      items: [
        "Amsterdam and Rotterdam run large expat-facing registration and welcome infrastructures.",
        "The Hague and Utrecht combine dense housing markets with strong digital service portals.",
        "Eindhoven, Groningen, Leiden and Haarlem differ in appointment speed and English support.",
        "Population size affects waiting times but not the underlying national registration framework.",
        "Open your city guide and gemeente website together when planning appointments.",
      ],
    },
    checklist: {
      title: "First-week gemeente priorities",
      items: [
        "Register your address and secure registration proof as early as your housing allows.",
        "Confirm BSN access and store documents for employers, banks and insurers.",
        "Apply for DigiD once you have BSN and post delivery at your registered address.",
        "Read local tax, waste and parking information for your postcode.",
        "Register family members and explore childcare or school steps if applicable.",
      ],
    },
    mistakes: {
      title: "Mistake prevention details",
      items: [
        "Delaying registration can block BSN, banking, payroll and official post.",
        "Ignoring Dutch tax letters after registration can create avoidable admin stress.",
        "Assuming national rules replace local waste or parking rules leads to fines or missed collections.",
        "Missing appointment preparation slows registration even when slots are available.",
        "Forgetting to update your address after moving breaks DigiD, post and gemeente records.",
      ],
    },
    directory: {
      title: "Directory usage tips",
      items: [
        "Use official gemeente websites for appointments, forms and fee schedules.",
        "Larger cities often publish English newcomer pages and dedicated expat routes.",
        "Online portals may cover waste, parking, permits and tax questions without a visit.",
        "Population figures are approximate orientation only — verify services on the live site.",
        "Inclusion here is informational and does not rank municipalities.",
      ],
    },
    faq: {
      title: "FAQ visual details",
      items: [
        "A municipality (gemeente) is your local government for registration and many daily services.",
        "Most residents staying longer than a few months register their address locally.",
        "BSN is typically issued through registration for many newcomer routes.",
        "DigiD unlocks online government access after BSN and address registration.",
        "Exact steps vary by nationality, permit type and municipality — verify locally.",
      ],
    },
    sources: {
      title: "Official resource details",
      items: [
        "Government.nl and Rijksoverheid publish national context on living in the Netherlands.",
        "NederlandWereldwijd supports Dutch nationals abroad and includes newcomer orientation.",
        "Each municipality website is authoritative for appointments, local taxes and permits.",
        "Rules change — confirm registration documents, fees and timelines before acting.",
        "This guide does not provide legal, immigration or tax advice.",
      ],
    },
    relatedGuides: {
      title: "Related guide journey details",
      items: [
        "BSN and address registration guides go deeper on documents and appointment preparation.",
        "DigiD and utilities guides cover digital access and waste collection after move-in.",
        "Renting, buying and tax guides connect housing and local charges to your household budget.",
        "Moving guides sequence municipality tasks within the wider relocation timeline.",
        "Future practical-life guides will expand BSN, DigiD, address and local-tax topics.",
      ],
    },
    futureGuides: {
      title: "Planned deeper guides",
      items: [
        "BSN Netherlands will expand citizen service number routes and document checklists.",
        "DigiD Netherlands will cover activation, app setup and common troubleshooting.",
        "Address Registration Netherlands will focus on appointment prep and gemeente routes.",
        "Local Taxes Netherlands will explain gemeente charge letters and payment steps.",
      ],
    },
  },
  intro: {
    heading: "What Is a Municipality (Gemeente)?",
    paragraphs: [
      "Municipalities are local government authorities responsible for many day-to-day services residents use. In Dutch, the municipality is called the gemeente. Whether you live in Amsterdam, a regional city or a smaller town, your gemeente is usually the first local institution you interact with after moving.",
      "Examples of gemeente responsibilities include address registration, BSN administration, local taxes, permits, waste collection, parking permits and social services. National rules often set the framework, but appointments, local charges and service delivery are handled locally.",
      "For expats, the practical takeaway is simple: every resident interacts with their municipality. Understanding what the gemeente does — and what to arrange first — reduces relocation stress and helps you connect registration with banking, healthcare, taxes and housing setup.",
    ],
  },
  snapshotCards: [
    {
      title: "Address registration",
      body: "Most newcomers register their home address at the gemeente where they live, usually by appointment with supporting documents.",
    },
    {
      title: "BSN administration",
      body: "The citizen service number is often issued through municipality registration and is needed for work, tax, healthcare and banking.",
    },
    {
      title: "Local taxes",
      body: "Municipal charges such as waste tax, sewage levies and property-related fees may arrive after registration.",
    },
    {
      title: "Parking permits",
      body: "Many cities use resident parking zones, waiting lists and visitor permits that depend on your registered address.",
    },
    {
      title: "Waste collection",
      body: "Recycling rules, container types and collection days are set locally — check your gemeente calendar after moving in.",
    },
    {
      title: "Family services",
      body: "Childcare information, schools, youth services and family programs are often coordinated or signposted by the municipality.",
    },
  ],
  registration: {
    heading: "Registering Your Address",
    paragraphs: [
      "Most newcomers register their address with the municipality after arrival. Registration records where you live in the Dutch population register (BRP) and is a gateway to BSN access, official post and many other services.",
      "The process usually requires booking an appointment online or by phone, bringing valid identification and proof of address, and attending in person unless your municipality offers a specific remote route. Required documents can vary by nationality, permit type and household situation.",
      "Register as soon as you have a valid address and your route allows it. Appointment availability differs widely between cities, and delaying registration can slow down employment onboarding, banking and DigiD setup.",
    ],
  },
  registrationSteps: [
    {
      title: "Secure a valid Dutch address",
      body: "Confirm your rental or ownership situation allows registration and that the address matches where you will live.",
    },
    {
      title: "Check municipality requirements",
      body: "Read your gemeente website for appointment booking, document lists and any expat-specific registration route.",
    },
    {
      title: "Book an appointment",
      body: "Slots can fill quickly in larger cities — book as early as possible once your move date is firm.",
    },
    {
      title: "Gather documents",
      body: "Typical items include passport or ID, proof of address and route-specific papers such as employment or permit documents.",
    },
    {
      title: "Attend registration",
      body: "Bring originals and copies if requested; ask what proof you will receive for BSN and employer onboarding.",
    },
    {
      title: "Store registration proof",
      body: "Keep confirmation safe for banks, insurers, payroll and future address-change updates.",
    },
  ] satisfies TipCard[],
  documentTips: [
    "Bring a valid passport or national ID accepted by your municipality.",
    "Take proof of address such as a signed rental contract or landlord declaration if required.",
    "Carry residence permit or route-specific documents when your situation requires them.",
    "Bring birth or marriage certificates if registering family members — check translation or legalization rules.",
    "Print your appointment confirmation and note the gemeente office address and arrival instructions.",
    "Ask whether documents must be in Dutch or English and whether sworn translations are required.",
  ],
  bsn: {
    heading: "BSN (Citizen Service Number)",
    paragraphs: [
      "The BSN (burgerservicenummer) is a personal identification number used across Dutch administration. Employers, the tax authority, health insurers, banks and many government services rely on it.",
      "Many newcomers receive a BSN through municipality registration rather than through a separate standalone application. The exact timing and format can depend on your nationality, permit route and whether you register in the standard BRP process.",
      "Treat the BSN as a core relocation milestone. Without it, payroll setup, basic health insurance enrollment and many account openings become much harder. Use our dedicated BSN guides for deeper document and timing detail.",
    ],
  },
  bsnUses: [
    { title: "Employment and payroll", body: "Employers need your BSN for contracts, salary payments and payroll tax processing." },
    { title: "Tax administration", body: "Belastingdienst correspondence and tax filings are tied to your BSN identity." },
    { title: "Healthcare", body: "Basic health insurance registration and many healthcare portals use your BSN." },
    { title: "Banking", body: "Most Dutch banks request a BSN for account opening and ongoing compliance checks." },
    { title: "Government services", body: "Benefits, DigiD, MijnOverheid and many municipality forms rely on BSN-linked records." },
  ] satisfies TipCard[],
  bsnTimingTips: [
    "Many newcomers receive a BSN at the same gemeente appointment as address registration — ask what proof you will get.",
    "Employers often need your BSN before payroll can start; share registration confirmation promptly.",
    "Banks may allow a temporary account window but usually require a BSN within a stated period.",
    "Health insurers typically need a BSN to finalize basic insurance enrollment.",
    "Keep your BSN private — treat it like sensitive identity information in emails and messages.",
    "If your route differs (short stay, cross-border worker), verify whether a separate BSN process applies.",
  ],
  digital: {
    heading: "Digital Services and DigiD",
    paragraphs: [
      "Residents increasingly use digital systems for government services, tax matters, healthcare administration and municipality interactions. Once you have a BSN and registered address, online access becomes an important practical step.",
      "DigiD is the standard Dutch government login. You apply online, receive an activation letter at your registered home address and complete setup within the stated activation window. Many expats only realise later how often DigiD is needed, so applying early is worthwhile.",
      "Municipality portals, Belastingdienst, MijnOverheid, health insurers and some employers all use DigiD or related identity tools. Pair digital setup with your registration timeline rather than leaving it for month two or three.",
    ],
  },
  digitalServices: [
    { title: "MijnOverheid", body: "Central government message box for official correspondence and personal record checks." },
    { title: "Belastingdienst", body: "Tax assessments, benefits applications and annual filing access for residents." },
    { title: "Municipality portals", body: "Appointments, permits, waste information, parking and local tax queries." },
    { title: "Healthcare portals", body: "Insurer and care-provider admin often requires DigiD after basic insurance setup." },
    { title: "DigiD app", body: "Mobile approval can simplify login once your account is activated." },
  ] satisfies TipCard[],
  digidSetupSteps: [
    "Apply at digid.nl once you have a BSN and a registered Dutch home address.",
    "Choose SMS verification or the DigiD app depending on your phone and preference.",
    "Wait for the activation letter at your registered address — post must reach your mailbox.",
    "Activate within the stated window on the letter; expired codes require a new application.",
    "Set up the DigiD app for faster login once your account is active.",
    "Test access to MijnOverheid and your gemeente portal before urgent deadlines arrive.",
  ],
  localTaxes: {
    heading: "Municipal Taxes",
    paragraphs: [
      "Municipal taxes are separate from national income tax and often arrive as gemeente letters after you register. Common examples include waste tax, sewage charges, property-related levies and parking-related fees.",
      "Billing terminology is often Dutch and amounts vary by municipality, housing type and household situation. Owners and renters can receive different charges depending on local rules and how costs are passed through leases.",
      "This section explains concepts only. It is not tax advice. Use official municipality sources, the taxes hub and property-tax guides to understand what may apply to your address and how to respond to letters you receive.",
    ],
  },
  localTaxExamples: [
    { title: "Waste tax (afvalstoffenheffing)", body: "A common household charge funding local waste collection and processing." },
    { title: "Sewage charges (rioolheffing)", body: "Municipal levy linked to wastewater infrastructure — often billed annually." },
    { title: "Property tax (OZB)", body: "Owner-occupiers and sometimes landlords face property-related municipal levies — see property tax guide." },
    { title: "Parking-related fees", body: "Resident permits, visitor permits and zone parking charges in many cities." },
    { title: "Tourist / visitor levies", body: "Some municipalities apply visitor or accommodation-related charges in specific contexts." },
  ] satisfies TipCard[],
  localTaxCostExamples: [
    {
      profile: "Single renter, city apartment",
      priceRange: "EUR 150–350 per year (orientation)",
      details: [
        "Waste tax and sewage charges are the most common gemeente letters for renters.",
        "Some landlords pass waste tax through the lease; others bill separately after registration.",
        "Amounts vary by municipality, household size and property type.",
      ],
    },
    {
      profile: "Couple or family, suburban home",
      priceRange: "EUR 250–550+ per year (orientation)",
      details: [
        "Larger households may face higher waste-tax tiers in some gemeenten.",
        "Garden waste, extra containers or pay-as-you-throw systems can add cost.",
        "Verify whether charges are per household or per address on your tax letter.",
      ],
    },
    {
      profile: "Owner-occupier",
      priceRange: "EUR 400–900+ per year (orientation)",
      details: [
        "May include OZB (property tax) alongside waste and sewage charges.",
        "OZB rates depend on WOZ value and local municipal tariffs.",
        "Use the property tax guide and your gemeente portal to understand owner levies.",
      ],
    },
  ] satisfies CostOrientationExample[],
  localTaxResponseTips: [
    "Open every gemeente letter promptly — Dutch labels such as afvalstoffenheffing and rioolheffing are common.",
    "Check the payment deadline, reference number and whether direct debit or iDEAL is offered.",
    "Verify the charge matches your address and household situation before paying.",
    "Use your gemeente tax portal or MijnOverheid if digital copies are available.",
    "Contact the gemeente helpline if terminology is unclear — keep a note of reference numbers.",
    "This is orientation only, not tax advice — use official sources for disputes or exemptions.",
  ],
  parking: {
    heading: "Parking Permits",
    paragraphs: [
      "Many Dutch cities use paid parking zones where residents can apply for permits linked to their registered address. Rules cover eligibility, zone boundaries, waiting lists, visitor permits and second vehicles.",
      "Permit costs and waiting times vary sharply by neighborhood. Dense areas in Amsterdam, Rotterdam, The Hague and Utrecht often have long waiting lists, so checking rules soon after registration is practical even if you do not own a car yet.",
      "Visitor permits, temporary exemptions and electric-vehicle rules differ by gemeente. Always verify current zone maps and fees on your municipality website rather than relying on informal neighborhood advice.",
    ],
  },
  parkingCityExamples: [
    {
      city: "Amsterdam",
      href: "/netherlands/amsterdam/",
      zoneNote: "Multiple permit zones with waiting lists in popular neighborhoods; check amsterdam.nl parking maps.",
      exampleCost: "Example orientation: resident permits often EUR 30–60+ per month depending on zone — verify live tariffs.",
      waitingList: "Waiting lists are common in central districts; apply promptly after address registration if you need parking.",
    },
    {
      city: "Rotterdam",
      href: "/netherlands/rotterdam/",
      zoneNote: "Zone-based resident permits with separate rules for visitor and business parking.",
      exampleCost: "Example orientation: monthly resident permit fees often EUR 20–50 depending on area — confirm on rotterdam.nl.",
      waitingList: "Some zones use quota systems; online applications typically require DigiD.",
    },
    {
      city: "The Hague",
      href: "/netherlands/the-hague/",
      zoneNote: "Paid parking areas across the city with resident permits tied to registered address zones.",
      exampleCost: "Example orientation: permit pricing often EUR 25–55 per month by zone — check denhaag.nl.",
      waitingList: "Waiting periods vary by street segment; visitor permits available on selected products.",
    },
    {
      city: "Utrecht",
      href: "/netherlands/utrecht/",
      zoneNote: "Resident permits organized by neighborhood zones with digital application routes.",
      exampleCost: "Example orientation: resident permits often EUR 20–45 per month — verify current rates locally.",
      waitingList: "Central neighborhoods may have queues; check eligibility before purchasing a car.",
    },
  ],
  parkingPermitSteps: [
    "Confirm your registered address falls inside a resident permit zone on the gemeente parking map.",
    "Check waiting-list rules — apply soon after registration even if you do not own a car yet.",
    "Gather vehicle registration details and proof of address if the portal requests them.",
    "Apply online with DigiD where available, or book a municipal appointment if required.",
    "Review visitor permit, second-car and EV discount rules for your zone.",
    "Display the permit correctly and renew before expiry to avoid fines in paid zones.",
  ],
  waste: {
    heading: "Waste Collection Services",
    paragraphs: [
      "Waste collection and recycling are municipality-managed services. Rules for household waste, glass, paper, plastic packaging, organic waste and bulky items depend on your address and local policy.",
      "After registering, find your waste calendar, learn container locations or underground pass systems and understand sorting requirements. Mistakes such as wrong collection days or incorrect sorting can lead to missed pickups or fines in some areas.",
      "Waste is closely connected to utilities setup. Use the utilities guide for the wider first-week household picture and your gemeente site for authoritative local rules.",
    ],
  },
  wasteRules: [
    { title: "Residual waste", body: "General household rubbish — often limited by container size, collection frequency or pay-as-you-throw systems." },
    { title: "Paper and cardboard", body: "Separate collection points or containers; flatten boxes and keep material dry." },
    { title: "Glass", body: "Bottle banks by color in many neighborhoods; no lids or ceramics in glass streams." },
    { title: "Plastic packaging", body: "Often collected separately or via dedicated bags depending on municipality." },
    { title: "Organic waste (GFT)", body: "Food and garden waste bins where offered; rules vary for high-rise buildings." },
    { title: "Bulky waste", body: "Sofas, mattresses and large items usually need a gemeente appointment or drop-off slot." },
  ] satisfies TipCard[],
  wasteSetupSteps: [
    "Look up your address on the gemeente waste calendar after registration.",
    "Find container locations, underground pass systems or bag-collection rules for your street.",
    "Save collection days to your phone calendar for residual, organic and packaging streams.",
    "Learn which items belong in each bin — sorting mistakes can mean missed pickups.",
    "Book a bulky-waste slot before leaving large items on the street.",
    "Ask your landlord or VvE about shared building rules if you live in an apartment block.",
  ],
  family: {
    heading: "Family Services",
    paragraphs: [
      "Municipalities often support families through childcare information, school enrollment guidance, youth services and local family programs. The exact mix depends on city size and local policy priorities.",
      "Registering children, understanding school choice and exploring childcare allowance involve both national rules and local signposting. Larger cities may publish English-language family pages or welcome-centre referrals.",
      "Use gemeente resources for local program discovery and national portals for allowance and school-system detail. This section orients you to touchpoints rather than replacing school or childcare specialists.",
    ],
  },
  familyServices: [
    { title: "Childcare information", body: "Municipal websites often list childcare options, subsidies context and local registration steps." },
    { title: "School enrollment", body: "Primary and secondary school routes vary; gemeente pages explain local processes and deadlines." },
    { title: "Youth services", body: "Support programs, activities and referrals for children and teenagers." },
    { title: "Family programs", body: "Playgroups, language activities and newcomer family support in selected cities." },
    { title: "Child registration", body: "Registering newborns or relocating children may require a gemeente appointment with documents." },
  ] satisfies TipCard[],
  familyRegistrationTips: [
    "Register newborn children at the gemeente within the required timeframe with birth certificates.",
    "Bring marriage or partnership documents when registering a spouse or partner at the same address.",
    "Check whether foreign birth or marriage certificates need translation or legalization.",
    "Ask your gemeente about school enrollment deadlines — they differ by city and school type.",
    "Explore childcare allowance on national portals while using gemeente pages for local providers.",
    "Larger cities may offer English-language family welcome pages or expat centre referrals.",
  ],
  housing: {
    heading: "Housing-Related Services",
    paragraphs: [
      "Housing and municipality services overlap at address registration, occupancy rules, housing permits and local regulations. Your registered address should reflect where you actually live for most official processes.",
      "Renters should confirm landlord permission for registration and understand how service costs and local charges appear in the lease. Owners may encounter property-related municipal taxes and permit requirements for renovation or rental use.",
      "Report address changes promptly when moving within or between municipalities. Delays can affect post, DigiD letters, tax correspondence and permit eligibility.",
    ],
  },
  housingTopics: [
    { title: "Address registration", body: "Core housing-municipality link — required for BSN, post and many permits." },
    { title: "Occupancy and rental rules", body: "Subletting, short stays and registration permission should match your contract." },
    { title: "Housing permits", body: "Some conversions or shared housing setups need gemeente approval depending on local policy." },
    { title: "Local regulations", body: "Noise, renovation, monument rules and neighborhood notifications can be municipal." },
    { title: "Address changes", body: "Update gemeente records when moving to avoid breaking official correspondence chains." },
  ] satisfies TipCard[],
  housingAddressChangeTips: [
    "Report a move to your new gemeente within the required timeframe — rules apply even within the same city.",
    "Deregister from your old address when moving to a different municipality.",
    "Update your rental contract, post forwarding and DigiD address if applicable.",
    "Check whether parking permits, waste passes and local tax accounts transfer or need reapplication.",
    "Inform your employer, bank and health insurer when your registered address changes.",
    "Keep registration proof from both old and new gemeente until admin is fully updated.",
  ],
  business: {
    heading: "Municipality Services for Entrepreneurs",
    paragraphs: [
      "Business owners and freelancers may interact with municipalities for permits, zoning, local regulations and business support programs. Requirements depend on activity type, premises and whether you work from home or commercial space.",
      "KVK registration is a separate national step, but gemeente rules still matter for hospitality, retail, signage, events and certain home-office setups. ZZP freelancers should check whether their address and activity trigger local notifications.",
      "Use municipality business desks and online portals early when planning premises, renovations or customer-facing operations.",
    ],
  },
  businessTopics: [
    { title: "Business permits", body: "Hospitality, retail, events and regulated activities often need gemeente permission." },
    { title: "Zoning and premises use", body: "Check whether your address allows the intended commercial activity." },
    { title: "Home-office rules", body: "Some municipalities require notification for work-from-home businesses." },
    { title: "Local business support", body: "Subsidies, advice desks and startup programs vary by city." },
    { title: "Signage and terrace permits", body: "Physical customer-facing changes usually need local approval." },
  ] satisfies TipCard[],
  businessPermitChecklist: [
    "Confirm whether your activity needs a gemeente permit before opening premises or serving customers.",
    "Check zoning (bestemmingsplan) rules for your address — home offices can still trigger notification duties.",
    "Register with KVK separately; gemeente permits are not a substitute for chamber registration.",
    "Ask about terrace, signage, hospitality, event and environmental permits early in your planning.",
    "Use the gemeente business desk or online portal for application forms and fee schedules.",
    "Keep permit reference numbers for inspections, insurance and landlord discussions.",
  ],
  social: {
    heading: "Community and Social Support",
    paragraphs: [
      "Beyond registration and permits, municipalities provide community information, social support referrals, integration resources and public service access points. Libraries, neighborhood teams and welcome centres often complement official gemeente channels.",
      "Eligibility for social support depends on personal circumstances and is not covered as legal advice here. The practical goal is knowing where to ask locally when you need orientation, language programs or community activities.",
      "Explore your municipality website for newcomer pages, social support directories and local event listings once your core registration steps are underway.",
    ],
  },
  socialPrograms: [
    { title: "Public information desks", body: "Front-door orientation for gemeente services, forms and referrals." },
    { title: "Integration resources", body: "Language, civic integration and newcomer programs vary by municipality." },
    { title: "Community activities", body: "Local events, volunteer networks and neighborhood initiatives." },
    { title: "Social support referrals", body: "Municipal gateways to welfare, debt or family support where eligible." },
    { title: "Library and civic spaces", body: "Often host newcomer information, language cafés and practical workshops." },
  ] satisfies TipCard[],
  socialNewcomerTips: [
    "Visit your gemeente website newcomer or international pages for English orientation where available.",
    "Libraries often run language cafés, integration workshops and practical admin sessions.",
    "Welcome centres in Amsterdam, Rotterdam, The Hague and Utrecht complement standard gemeente services.",
    "Neighborhood teams (buurtteams) can signpost local programs and community contacts.",
    "Social support eligibility depends on personal circumstances — use official gemeente contact points.",
    "Pair community resources with DigiD setup so you can access online programs and correspondence.",
  ],
  cityMunicipalityCards: [
    {
      city: "Amsterdam",
      population: "~872,000",
      href: "/netherlands/amsterdam/",
      website: "https://www.amsterdam.nl/",
      expatServices: "IN Amsterdam and English newcomer pages support many international registrations.",
      keyResources: ["Address registration and appointments", "IN Amsterdam expat services", "Parking and waste portals", "Municipal tax information"],
    },
    {
      city: "Rotterdam",
      population: "~655,000",
      href: "/netherlands/rotterdam/",
      website: "https://www.rotterdam.nl/",
      expatServices: "Rotterdam International Center and multilingual newcomer information.",
      keyResources: ["Registration appointments", "International newcomer desk", "Parking permit zones", "Waste and recycling calendar"],
    },
    {
      city: "The Hague",
      population: "~552,000",
      href: "/netherlands/the-hague/",
      website: "https://www.denhaag.nl/",
      expatServices: "The Hague International Centre and extensive English municipal pages.",
      keyResources: ["Municipality registration", "Expat centre referrals", "Parking zones", "Family and childcare information"],
    },
    {
      city: "Utrecht",
      population: "~361,000",
      href: "/netherlands/utrecht/",
      website: "https://www.utrecht.nl/",
      expatServices: "International Welcome Centre Utrecht Region and strong digital service portal.",
      keyResources: ["Registration routes", "Welcome centre support", "Local tax portal", "Waste collection guidance"],
    },
    {
      city: "Eindhoven",
      population: "~248,000",
      href: "/netherlands/eindhoven/",
      website: "https://www.eindhoven.nl/",
      expatServices: "International talent and newcomer pages for tech and international workers.",
      keyResources: ["Gemeente appointments", "Expat-facing relocation information", "Parking permits", "Business support desk"],
    },
    {
      city: "Groningen",
      population: "~235,000",
      href: "/netherlands/groningen/",
      website: "https://gemeente.groningen.nl/",
      expatServices: "Student-friendly municipality with English information for newcomers.",
      keyResources: ["Registration and BSN appointments", "Student and family services", "Waste rules", "Parking information"],
    },
    {
      city: "Leiden",
      population: "~128,000",
      href: "/netherlands/leiden/",
      website: "https://www.leiden.nl/",
      expatServices: "Compact municipality with international student and researcher community support.",
      keyResources: ["Address registration", "Family and education information", "Local taxes", "Waste calendar"],
    },
    {
      city: "Haarlem",
      population: "~165,000",
      href: "/netherlands/haarlem/",
      website: "https://www.haarlem.nl/",
      expatServices: "Randstad commuter city with digital appointment and permit services.",
      keyResources: ["Registration appointments", "Parking zones", "Waste and recycling", "Municipal tax portal"],
    },
  ] satisfies CityMunicipalityCard[],
  setupPhases: [
    {
      phase: "Before arrival",
      tasks: [
        "Confirm your Dutch address allows gemeente registration and gather landlord permission if renting.",
        "Check your municipality website for appointment booking and document requirements.",
        "Book a registration appointment as early as possible in busy cities.",
      ],
    },
    {
      phase: "Arrival week",
      tasks: [
        "Attend your registration appointment with valid ID and proof of address.",
        "Secure and store your BSN and registration confirmation for employers and banks.",
        "Apply for DigiD once post can be delivered to your registered address.",
      ],
    },
    {
      phase: "After registration",
      tasks: [
        "Read gemeente tax letters and learn waste collection rules for your address.",
        "Check parking permit zones and waiting lists if you own or plan to own a car.",
        "Register family members and explore housing, utilities and tax guides for wider setup.",
      ],
    },
  ] satisfies SetupPhase[],
  newArrivalChecklist: [
    "Register your address at the gemeente where you live",
    "Obtain and securely store your BSN and registration proof",
    "Apply for and activate DigiD once post arrives at your registered address",
    "Read local tax letters and understand which gemeente charges may apply",
    "Save your waste collection calendar and learn sorting rules for your address",
    "Check parking permit zones and waiting lists if you own or plan to own a car",
    "Register family members and explore childcare or school steps if applicable",
    "Bookmark your municipality website and explore local newcomer services",
  ],
  commonMistakes: [
    {
      title: "Delaying registration",
      body: "Waiting weeks to register can delay BSN access, payroll, banking and official post delivery.",
    },
    {
      title: "Not understanding BSN importance",
      body: "Treating BSN as optional blocks employment, insurance and many government interactions.",
    },
    {
      title: "Ignoring local tax letters",
      body: "Dutch gemeente post can look unfamiliar — open and verify deadlines rather than setting it aside.",
    },
    {
      title: "Missing DigiD setup",
      body: "Without DigiD, online tax, benefits and municipality tasks become much harder to complete on time.",
    },
    {
      title: "Forgetting parking permits",
      body: "Assuming free street parking in paid zones leads to fines or long permit waiting-list surprises.",
    },
    {
      title: "Ignoring waste collection rules",
      body: "Wrong collection days or sorting can mean missed pickups or neighborhood complaints.",
    },
    {
      title: "Missing municipality appointments",
      body: "Arriving without required documents or missing slots pushes registration back by weeks in busy cities.",
    },
    {
      title: "Not updating address changes",
      body: "Failing to report a move breaks DigiD delivery, tax post and permit eligibility at your new home.",
    },
  ] satisfies TipCard[],
  municipalityDirectory: [
    {
      name: "Amsterdam",
      population: "~872,000",
      summary: "Largest Dutch municipality with dedicated expat services and high appointment demand.",
      website: "https://www.amsterdam.nl/",
      expatServicesNote: "IN Amsterdam supports many international newcomers alongside standard gemeente registration.",
      offers: ["Address registration", "IN Amsterdam expat desk", "Parking permits", "Waste and recycling", "Municipal taxes"],
      onlineServices: ["Appointment booking", "Parking permit applications", "Waste calendar lookup", "Municipal tax portal", "Report relocation online"],
    },
    {
      name: "Rotterdam",
      population: "~655,000",
      summary: "Major port city with international newcomer centre and zone-based parking system.",
      website: "https://www.rotterdam.nl/",
      expatServicesNote: "Rotterdam International Center helps international residents with relocation orientation.",
      offers: ["Registration appointments", "International newcomer support", "Parking zones", "Business permits", "Waste services"],
      onlineServices: ["DigiD-linked applications", "Parking permit requests", "Waste information", "Municipal tax questions", "Appointment management"],
    },
    {
      name: "The Hague",
      population: "~552,000",
      summary: "International city with strong expat infrastructure and English municipal information.",
      website: "https://www.denhaag.nl/",
      expatServicesNote: "The Hague International Centre supports diplomats, professionals and families.",
      offers: ["Address registration", "Expat centre referrals", "Family services", "Parking permits", "Local taxes"],
      onlineServices: ["Online appointment booking", "Parking applications", "Waste and recycling info", "Tax and levy portal", "Permit status tracking"],
    },
    {
      name: "Utrecht",
      population: "~361,000",
      summary: "Central city with welcome centre and busy housing market affecting registration timing.",
      website: "https://www.utrecht.nl/",
      expatServicesNote: "International Welcome Centre Utrecht Region supports regional newcomers.",
      offers: ["Registration routes", "Welcome centre", "Parking permits", "Child and family information", "Business support"],
      onlineServices: ["Appointment scheduling", "Parking zone checker", "Waste calendar", "Municipal tax overview", "Online forms"],
    },
    {
      name: "Eindhoven",
      population: "~248,000",
      summary: "Technology hub with international worker focus and practical digital gemeente tools.",
      website: "https://www.eindhoven.nl/",
      expatServicesNote: "Expat-facing pages support international talent moving for work.",
      offers: ["Registration", "Business desk", "Parking permits", "Waste collection", "Local regulations"],
      onlineServices: ["Online appointments", "Permit applications", "Waste guidance", "Tax information", "Relocation reporting"],
    },
    {
      name: "Groningen",
      population: "~235,000",
      summary: "Northern student city with accessible municipality services and English pages.",
      website: "https://gemeente.groningen.nl/",
      expatServicesNote: "Popular with students and researchers; gemeente publishes newcomer guidance in English.",
      offers: ["Registration", "Student services", "Family information", "Parking", "Waste and recycling"],
      onlineServices: ["Appointment booking", "Waste calendar", "Parking permits", "Online contact forms", "Tax information"],
    },
    {
      name: "Leiden",
      population: "~128,000",
      summary: "University city with compact gemeente services and international research community.",
      website: "https://www.leiden.nl/",
      expatServicesNote: "Smaller municipality with student and researcher registration demand at key intake periods.",
      offers: ["Address registration", "Family and education info", "Parking", "Waste services", "Local taxes"],
      onlineServices: ["Online appointments", "Waste information", "Parking applications", "Municipal tax portal", "Digital forms"],
    },
    {
      name: "Haarlem",
      population: "~165,000",
      summary: "Historic Randstad municipality with digital services for commuters and families.",
      website: "https://www.haarlem.nl/",
      expatServicesNote: "Commuter-friendly city with online permit and registration tools.",
      offers: ["Registration", "Parking zones", "Waste collection", "Family services", "Municipal taxes"],
      onlineServices: ["DigiD services", "Parking permit portal", "Waste calendar", "Appointment booking", "Tax and levy information"],
    },
  ] satisfies MunicipalityDirectoryEntry[],
  faqs: [
    {
      q: "What is a municipality?",
      a: "A municipality (gemeente) is your local government authority. It handles address registration, BSN administration, local taxes, permits, waste collection, parking and many resident services. Every address in the Netherlands belongs to one gemeente.",
    },
    {
      q: "Do I need to register?",
      a: "Most residents staying in the Netherlands for more than a few months register their address with the municipality where they live. Requirements vary by nationality, permit route and length of stay — verify with your gemeente and official sources.",
    },
    {
      q: "How do I get a BSN?",
      a: "Many newcomers receive a BSN through municipality registration. Book a gemeente appointment, bring required documents and ask what proof you will receive. Some routes, such as short stays or specific cross-border situations, follow different processes.",
    },
    {
      q: "What services do municipalities provide?",
      a: "Common services include address registration, BSN administration, local taxes, waste collection, parking permits, family information, business permits and social support referrals. Exact services and online tools differ by city.",
    },
    {
      q: "How do local taxes work?",
      a: "Municipalities may charge waste tax, sewage levies, property-related taxes and parking fees. Letters often arrive after registration and use Dutch terminology. Amounts vary by gemeente and housing situation — verify each letter on your municipality website.",
    },
    {
      q: "What is DigiD?",
      a: "DigiD is the Dutch government login used for tax, benefits, MijnOverheid and many municipality portals. You usually apply after receiving a BSN and registered address, then activate using a letter sent to your home.",
    },
    {
      q: "How do parking permits work?",
      a: "Many cities use resident parking zones tied to your registered address. You apply through the gemeente, often online with DigiD. Zones, costs and waiting lists vary — check your city parking pages before assuming street parking is unrestricted.",
    },
    {
      q: "What should I arrange after arriving?",
      a: "A practical sequence is: register your address, secure your BSN, apply for DigiD, learn local tax and waste rules, check parking if needed, register family members and explore housing, utilities and tax guides for the wider setup path.",
    },
  ],
  sourceUsageTips: [
    "Use Government.nl and Rijksoverheid for national context on living and public services in the Netherlands.",
    "Use NederlandWereldwijd for practical newcomer orientation alongside municipality-specific steps.",
    "Use your gemeente website for appointments, local taxes, permits, waste rules and parking — it is authoritative for your address.",
    "Always confirm current registration documents, fees and timelines directly with your municipality before acting.",
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official Dutch government information on living, working and public services in the Netherlands.",
    },
    {
      label: "NederlandWereldwijd",
      href: "https://www.nederlandwereldwijd.nl/",
      description: "Government portal with practical information for Dutch nationals abroad and newcomer orientation resources.",
    },
    {
      label: "Rijksoverheid",
      href: "https://www.rijksoverheid.nl/",
      description: "Central government site for policy context, resident topics and links to municipal responsibilities.",
    },
    {
      label: "Municipality websites",
      href: "https://www.amsterdam.nl/",
      description: "Your gemeente website is authoritative for appointments, local taxes, permits, waste rules and parking. Examples include Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven.",
    },
  ],
  sourcesDisclaimer:
    "Municipality services, registration requirements and local regulations can change over time. Always verify current information with your municipality and official government sources. This guide provides general orientation only and does not constitute legal, immigration or tax advice.",
  relatedGuides: [
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      status: "live",
      description: "Wider relocation timeline connecting registration with first-week practical setup.",
    },
    {
      label: "BSN Netherlands",
      href: BSN_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Deeper practical-life guide to BSN documents, timing and registration routes.",
    },
    {
      label: "DigiD Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Step-by-step digital identity setup after BSN and address registration.",
    },
    {
      label: "Utilities Guide",
      href: UTILITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Energy, water, internet, mobile and waste within the wider utilities picture.",
    },
    {
      label: "Waste and Recycling",
      href: "/netherlands/practical-life/waste-and-recycling-netherlands/",
      status: "live",
      description: "Sorting rules, collection schedules, underground containers and milieustraat.",
    },
    {
      label: "Renting in the Netherlands",
      href: RENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Landlord permission, registration and housing responsibilities for tenants.",
    },
    {
      label: "Taxes Hub",
      href: TAXES_HUB_PATH,
      status: "live",
      description: "National and local tax context beyond gemeente charge letters.",
    },
    {
      label: "Municipality Registration",
      href: MUNICIPALITY_REGISTRATION_PATH,
      status: "live",
      description: "Focused guide on registering your address and preparing documents.",
    },
    {
      label: "BSN Registration",
      href: BSN_REGISTRATION_PATH,
      status: "live",
      description: "Live BSN guide with document and appointment detail.",
    },
    {
      label: "Register Address",
      href: REGISTER_ADDRESS_PATH,
      status: "live",
      description: "Address registration steps and proof-of-address preparation.",
    },
    {
      label: "DigiD Awareness",
      href: DIGID_AWARENESS_PATH,
      status: "live",
      description: "Why DigiD matters and when to apply after registration.",
    },
    {
      label: "Property Tax",
      href: PROPERTY_TAX_PATH,
      status: "live",
      description: "Municipal property levy context for owners and some renters.",
    },
    {
      label: "Childcare Allowance",
      href: CHILDCARE_ALLOWANCE_PATH,
      status: "live",
      description: "National allowance context paired with local childcare information.",
    },
    {
      label: "Buying a House",
      href: BUYING_HOUSE_PATH,
      status: "live",
      description: "Owner responsibilities including address registration and local charges.",
    },
    {
      label: "Starting a Business",
      href: STARTING_BUSINESS_PATH,
      status: "live",
      description: "KVK and gemeente permit context for entrepreneurs.",
    },
    {
      label: "ZZP Netherlands",
      href: ZZP_PATH,
      status: "live",
      description: "Freelancer setup including home-office and local compliance checks.",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextCards: [
    {
      label: "BSN Guide",
      href: BSN_REGISTRATION_PATH,
      status: "live",
      description: "Go deeper on BSN documents, timing and employer onboarding.",
    },
    {
      label: "DigiD Guide",
      href: DIGID_AWARENESS_PATH,
      status: "live",
      description: "Activate digital government access after registration.",
    },
    {
      label: "Utilities Guide",
      href: UTILITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Continue into energy, water, internet, mobile and waste setup.",
    },
    {
      label: "Renting Guide",
      href: RENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Confirm landlord permission and tenant responsibilities before registering.",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      status: "live",
      description: "Return to the wider relocation hub for timeline and checklist context.",
    },
  ] satisfies PracticalLifeLink[],
  futureGuides: [
    {
      label: "BSN Netherlands",
      href: BSN_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Practical-life pillar guide dedicated to BSN routes and documents.",
    },
    {
      label: "DigiD Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Full DigiD setup guide for newcomers after registration.",
    },
    {
      label: "Address Registration Netherlands",
      href: ADDRESS_REGISTRATION_NETHERLANDS_PATH,
      status: "live",
      description: "Focused address-registration walkthrough with document checklists.",
    },
    {
      label: "Local Taxes Netherlands",
      href: LOCAL_TAXES_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Deeper guide to gemeente tax letters, charges and payment steps.",
    },
  ] satisfies PracticalLifeLink[],
};
