import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";
import { PET_RELOCATION_COMPANIES_PATH } from "@/src/components/services/pet-relocation-companies/petRelocationCompaniesNetherlandsPageModel";
import { CLEANING_COMPANIES_PATH } from "@/src/components/services/cleaning-companies/cleaningCompaniesNetherlandsPageModel";

/** Services directory — klusjesman / handyman small repairs, assembly and maintenance for expats. */
export const HANDYMEN_PATH = "/netherlands/services/handymen/" as const;

export const REMOVAL_COMPANIES_PATH = "/netherlands/services/removal-companies/" as const;
export const MOVING_COMPANIES_PATH = "/netherlands/services/moving-companies/" as const;
export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const STORAGE_COMPANIES_PATH = "/netherlands/services/storage-companies/" as const;
export const HOUSING_PLATFORMS_PATH = "/netherlands/services/housing-platforms/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export const HANDYMEN_AFFILIATE_PLACEMENT_ID = "nl-services-handymen-support-providers" as const;

export type HandymanProvider = {
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
    | "General handyman / klusjesman"
    | "Assembly / furniture specialist"
    | "Maintenance retainer"
    | "Emergency minor-fix orientation"
    | "Quote / matching desk";
  services: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type HandymanLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-handymen";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const handymenNetherlandsPage = {
  slug: "handymen",
  path: HANDYMEN_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(HANDYMEN_PATH) ?? "2026-11-10",
  affiliatePlacementId: HANDYMEN_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Handymen in the Netherlands for Expats | Klusjesman & Small Repairs",
    description:
      "Compare handymen and klusjesman providers for shelves, furniture assembly, painting touch-ups and small home repairs in the Netherlands. Soft discovery for expats — not a ranking; not cleaners, housing search or licensed gas/electrical trades.",
    keywords: [
      "handymen netherlands",
      "klusjesman netherlands",
      "handyman amsterdam",
      "furniture assembly netherlands",
      "ikea assembly netherlands",
      "small home repairs netherlands expats",
      "odd jobs netherlands",
      "home maintenance retainer netherlands",
      "compare handymen netherlands",
      "klusjesman english speaking",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Handymen",
    pageTitle: "Handymen in the Netherlands for Expats",
    subtitle:
      "Compare klusjesman providers for shelves, furniture assembly, painting touch-ups and small home repairs — language-friendly quotes and clear limits when licensed plumbers or electricians are required. Cleaning owns surfaces; housing search sits with rental and estate directories; furniture vans with Moving and Removal companies.",
    primaryCta: { label: "Browse Handymen Directory", href: "#directory" },
    secondaryCta: { label: "How Handymen Differ", href: "#differentiate" },
    chips: ["Klusjesman", "Assembly & shelves", "Small repairs", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-handymen-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of a handyman / klusjesman preparing tools in a bright Dutch apartment: drill, spirit level and shelf hardware on a work mat, canal houses visible through the window.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what handymen and klusjesmannen help with: shelves, furniture assembly, painting touch-ups, small repairs and maintenance retainers.",
      "Handymen own odd jobs and small works — confirm licensed-trade boundaries before booking gas or electrical work."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating handymen, cleaning companies, rental agencies, estate agents and licensed trades such as plumbers and electricians.",
      "Pick the right page first — a klusjesman is not a cleaner, housing search desk or certified gas installer."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about handymen and klusjesmannen in the Netherlands for expats.",
      "Use this snapshot before requesting quotes: scope, licences, invoices and language matter as much as hourly rates."
    ),
    providerTypes: visual(
      "provider-types",
      "Infographic comparing handyman types: general klusjesman, assembly specialists, maintenance retainers, emergency minor fixes and matching desks.",
      "Match the provider model to your job — IKEA-style assembly and emergency leaks are different scopes."
    ),
    services: visual(
      "services",
      "Infographic of handyman services: shelves, painting touch-ups, furniture assembly, curtain rails and small repairs — with clear licensed-work limits.",
      "Service depth varies: some assemble only; others refuse gas, main electrical and structural work."
    ),
    compare: visual(
      "compare",
      "Infographic checklist for comparing handymen: written scope, insurance, KvK, language, BTW invoices and licensed-trade referral.",
      "Compare process quality and licence boundaries before you compare headline hourly prices alone."
    ),
    costs: visual(
      "costs",
      "Infographic explaining handyman cost drivers: hours, materials, travel, call-out, assembly complexity and evening surcharges.",
      "Ask for a written quote with materials, travel and VAT assumptions — parking and stairs often change totals."
    ),
    prep: visual(
      "prep",
      "Infographic listing prep items before a handyman visit: photos, measurements, parking, landlord permission and parts on site.",
      "Access, parts readiness and landlord rules often matter as much as the hourly rate."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with handymen: language gaps, trust, cash-only invoices, BTW clarity and building rules.",
      "Use written scopes and photo records to reduce move-in week surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing handyman coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Most providers concentrate in Randstad demand; confirm travel fees for smaller cities."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral handyman directory workflow: shortlist, compare scopes, verify insurance and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for handymen: provider type, languages, city coverage, assembly support and expat focus.",
      "Compare desks by job fit and language support before marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask handymen and klusjesmannen before booking.",
      "Good questions reveal scope boundaries, insurance, invoice/BTW practice and when licensed trades are required."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common handyman FAQ topics: vs cleaning, licensed trades, costs, invoices and red flags.",
      "FAQ answers should help you pick the next verification step — not guarantee repair quality."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist handymen: define scope, share photos, request written quotes and verify insurance.",
      "Turn provider discovery into a structured shortlist before move-in week."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for consumer, company and building orientation in the Netherlands.",
      "Verify company registration and consumer rights with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around handyman jobs: cleaning, moving, removal, storage, rental agencies, housing platforms and relocation.",
      "Handymen are one part of the wider housing and move logistics ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing handymen: cleaning companies, pet relocation, moving companies and storage.",
      "Continue from handyman discovery into cleaning, move logistics, housing and pet timing."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting handyman research to cleaning, moving, rental agencies, housing platforms, pet relocation and cities.",
      "Handyman shortlists connect naturally into cleaning, furniture vans and city choice."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#provider-types", label: "Handyman types" },
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
    heading: "Why Expats Compare Handymen (Klusjesmannen)",
    paragraphs: [
      "When you need shelves hung, IKEA-style furniture assembled, curtain rails fitted, painting touch-ups or small household repairs, a Dutch klusjesman (handyman) coordinates tools, materials and on-site time — work that cleaners, rental agents and furniture movers do not own.",
      "This page is a services directory for handymen and klusjesman-style providers in the Netherlands. It is not a cleaning directory, not a housing-search guide, not international removals, and not a ranking of handymen.",
      "Inclusion here is informational soft discovery, not a ranking. No handyman can guarantee landlord permission, fixed final prices without accurate photos and access details, or safe completion of gas/main electrical work without the right licences. Confirm insurance, language, invoices (BTW) and licensed-trade boundaries before booking.",
    ],
    links: [
      { label: "Cleaning companies", href: CLEANING_COMPANIES_PATH },
      { label: "Pet relocation companies", href: PET_RELOCATION_COMPANIES_PATH },
      { label: "Moving companies", href: MOVING_COMPANIES_PATH },
      { label: "Rental agencies", href: RENTAL_AGENCIES_PATH },
      { label: "Services hub", href: SERVICES_HUB_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Handymen (this page)",
      body: "Klusjesman providers for shelves, assembly, painting touch-ups, small repairs and maintenance — odd jobs with clear limits when licensed trades are required.",
      href: HANDYMEN_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Cleaning companies",
      body: "Surfaces, hygiene scopes and end-of-tenancy / oplevering cleans — not hanging shelves, assembling furniture or fixing hinges.",
      href: CLEANING_COMPANIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Rental agencies / housing platforms",
      body: "Finding or mediating a lease — not booking a klusjesman. Ask landlords separately about drilling, painting and fixture rules.",
      href: RENTAL_AGENCIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Estate agents",
      body: "Buy/sell makelaars — useful around purchase empties, not routine odd jobs after you move in.",
      href: ESTATE_AGENTS_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Licensed plumber / electrician",
      body: "Gas work, main electrical circuits and many wet-room installations need qualified trades — ask your handyman to refer rather than improvise.",
      href: "#compare",
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Pet relocation companies",
      body: "Live-animal flight and ground logistics — sibling Home & pet services directory.",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
  ],
  snapshotCards: [
    { label: "Provider focus", value: "Odd jobs & repairs", note: "Klusjesman — not cleaners, furniture vans or housing search." },
    { label: "Common friction", value: "Scope + licences", note: "Gas/electrical boundaries, landlord rules and language drive disputes." },
    { label: "Provider models", value: "5 types", note: "General, assembly, retainers, emergency orientation, matching desks." },
    { label: "Quotes", value: "Written scope", note: "Ask for hours, materials, travel, VAT and licence limits." },
    { label: "Languages", value: "Varies", note: "English-friendly desks exist; confirm day-of language early." },
    { label: "Guarantee", value: "None", note: "No directory can guarantee repair quality or landlord approval." },
  ],
  providerTypeComparison: [
    {
      type: "General handyman / klusjesman",
      scope: "All-round odd jobs: shelves, rails, hinges, small painting, light repairs within safe non-licensed boundaries.",
      usefulWhen: "You have a mixed punch-list after move-in and want one coordinated visit.",
      questions: ["Which tasks are in vs out of scope?", "Will you refuse gas or main electrical work?", "Same person returns for follow-ups?"],
    },
    {
      type: "Assembly / furniture specialist",
      scope: "IKEA-style and flat-pack assembly, wardrobe builds, desk setups and mounting where permitted.",
      usefulWhen: "Boxes arrived with the move and you need reliable assembly without buying every tool.",
      questions: ["Flat-pack brands you know well?", "Wall-type check before drilling?", "Disposal of packaging included?"],
    },
    {
      type: "Maintenance retainer",
      scope: "Recurring visits for landlords or households who want planned small maintenance rather than one-off call-outs.",
      usefulWhen: "You manage a rental or want a known contact for seasonal odd jobs.",
      questions: ["Hours included per month?", "Response time for extras?", "Invoice and BTW format?"],
    },
    {
      type: "Emergency minor-fix orientation",
      scope: "Same-day orientation for non-life-threatening minor issues (hinges, jammed doors, minor leaks triage) — not a substitute for emergency services.",
      usefulWhen: "Something small broke and you need triage before calling a specialist.",
      questions: ["Call-out fee after hours?", "When do you escalate to a licensed trade?", "What is explicitly not emergency work?"],
    },
    {
      type: "Quote / matching desk",
      scope: "Platforms or desks that match you with independent klusjesmannen or local firms.",
      usefulWhen: "You want flexible English onboarding and multiple quotes quickly.",
      questions: ["Who employs the worker?", "Who holds liability insurance?", "How are disputes handled?"],
    },
  ],
  providerServices: [
    { title: "Shelves, rails & mounting", body: "Wall shelves, curtain rails, TV mounts and picture hanging — confirm wall type and landlord drilling rules first." },
    { title: "Furniture assembly", body: "Flat-pack and IKEA-style assembly, wardrobes and desks — packaging disposal and wall-anchoring vary by quote." },
    { title: "Painting touch-ups", body: "Small interior touch-ups and patch painting — full room redecoration may need a schilder (painter) instead." },
    { title: "Small repairs", body: "Hinges, handles, sticky doors, minor bathroom fixtures within safe limits — not structural or gas work." },
    { title: "Maintenance retainers", body: "Recurring visits for planned odd jobs — useful for landlords and busy households." },
    { title: "Licensed-trade referral", body: "Clear hand-off when gas, main electrical or complex wet work needs a qualified plumber or electrician." },
  ],
  compareCriteria: [
    {
      criterion: "Written scope & photos",
      whyItMatters: "Verbal quotes often omit materials, wall plugs, parking or return visits.",
      howToCheck: "Share photos and measurements; ask for a written task list with hours and materials.",
    },
    {
      criterion: "Insurance & KvK registration",
      whyItMatters: "Liability and company registration affect what happens if something is damaged.",
      howToCheck: "Ask for KvK number and liability confirmation before paying a deposit.",
    },
    {
      criterion: "Licensed-trade boundaries",
      whyItMatters: "Gas, main electrical and some wet work require qualified trades — improvising is unsafe.",
      howToCheck: "Ask what they will refuse and who they refer for licensed work.",
    },
    {
      criterion: "Language & day-of contact",
      whyItMatters: "Misunderstandings on drill locations and paint colours create rework.",
      howToCheck: "Confirm English support for quotes, WhatsApp/day-of and invoices.",
    },
    {
      criterion: "Invoices & BTW",
      whyItMatters: "Cash-only or unclear VAT invoices complicate landlord reimbursement and expenses.",
      howToCheck: "Request a proper invoice with name, address, BTW where applicable.",
    },
    {
      criterion: "Landlord / VvE rules",
      whyItMatters: "Drilling, exterior work and noisy hours are restricted in many Dutch buildings.",
      howToCheck: "Confirm permission and quiet hours before the visit; share house rules in writing.",
    },
  ],
  costExamples: [
    {
      item: "Half-day odd-job punch list",
      typicalRange: "Hourly × hours + materials",
      whatToConfirm: "Travel fee, parking, materials markup and VAT on the invoice.",
    },
    {
      item: "Flat-pack / IKEA-style assembly",
      typicalRange: "Per item or hourly package",
      whatToConfirm: "Number of boxes, wall anchoring, packaging disposal and stairs access.",
    },
    {
      item: "Shelves / TV mount / curtain rails",
      typicalRange: "Short visit + hardware",
      whatToConfirm: "Wall type assumptions, who buys brackets, and landlord drilling rules.",
    },
    {
      item: "Painting touch-ups",
      typicalRange: "Hours + paint",
      whatToConfirm: "Colour match responsibility, protection of floors and whether full rooms are out of scope.",
    },
    {
      item: "Matching-platform booking",
      typicalRange: "Worker rate + platform fee",
      whatToConfirm: "Who employs the worker, insurance holder and dispute process.",
    },
  ],
  prepChecklist: [
    { document: "Photos and measurements", why: "Accurate quotes need wall type, dimensions and current damage visible." },
    { document: "Landlord / VvE permission notes", why: "Drilling, painting and noisy tools may need written approval." },
    { document: "Parts and hardware on site", why: "Missing brackets waste paid hours — agree who buys what." },
    { document: "Parking / bike shed / lift notes", why: "City access failures burn call-out time." },
    { document: "Invoice details (name / address)", why: "Landlords or employers often need correct named invoices with BTW clarity." },
    { document: "Language preference", why: "Confirm English instructions for day-of decisions on drill positions." },
    { document: "Licensed-work triage list", why: "Separate gas/electrical jobs so the klusjesman does not improvise." },
  ],
  challengeCards: [
    { title: "Language gaps", body: "English quotes with Dutch-only day-of contacts create misplaced shelves and rework." },
    { title: "Trust & references", body: "Cash-only strangers without KvK details raise risk — verify before keys access." },
    { title: "Invoices & BTW", body: "Informal receipts complicate reimbursement and expense claims." },
    { title: "Building / VvE rules", body: "Quiet hours, drilling bans and exterior rules surprise new renters." },
    { title: "Wrong provider type", body: "Booking a cleaner for shelves or an unlicensed worker for gas wastes weeks." },
    { title: "Scope creep", body: "One hinge becomes a half-renovation without a written punch list." },
    { title: "Hidden extras", body: "Parking, plugs, travel and evening call-outs appear after the fact." },
    { title: "Insurance ambiguity", body: "Platform vs company liability is unclear until something breaks." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "High demand; book assembly slots early around month-end move-ins." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Strong klusjesman supply; confirm English contracts and parking." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International households often need bilingual scheduling." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Compact apartments; clarify drill rules and bike-shed access." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Tech movers often pair assembly with assignment start dates." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam spillover; check travel fees for smaller firms." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Student and professional turnovers spike assembly demand." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "Smaller homes; confirm whether painting and mounting are split visits." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern coverage varies; ask about travel surcharges." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern NL routes; verify same-week availability." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University-city arrivals; book assembly early." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Southern demand; confirm Dutch vs English day-of support." },
  ],
  providers: [
    {
      name: "MrFix",
      slug: "mrfix",
      city: "Netherlands (app-coordinated)",
      region: "Major Dutch cities via screened vakmensen",
      summary:
        "Dutch vastgoedzorg / handyman coordination brand matching households with screened vakmensen for small jobs and broader works through an app-based booking flow.",
      expatFocus: "Useful when you want structured booking, English-friendly onboarding orientation and a coordinated klusjesman visit rather than informal cash-only contacts.",
      languages: ["Dutch", "English availability varies — confirm"],
      remoteSupport: true,
      inPersonAvailability: "On-site visits after app/quote matching; coverage varies by city.",
      website: "https://mrfix.nl/",
      engagementType: "App-coordinated handyman visits",
      providerType: "General handyman / klusjesman",
      services: ["Small repairs", "Odd jobs", "Coordinated vakman visits"],
      citiesServed: ["Amsterdam", "Utrecht", "Randstad", "Coverage varies"],
      featured: true,
      verificationNote: "Confirm who employs the worker, liability insurance and licensed-trade boundaries before you rely on an app booking for gas or electrical work.",
    },
    {
      name: "ServiceFix",
      slug: "servicefix",
      city: "Netherlands-wide orientation",
      region: "All-round home services including klusjesman",
      summary:
        "Dutch all-round home-services brand positioning klusjesman, maintenance and related trades for households and landlords across the Netherlands.",
      expatFocus: "Helpful when you need orientation for a klusjesman visit alongside clearer referral paths for specialist trades.",
      languages: ["Dutch", "English — confirm"],
      remoteSupport: true,
      inPersonAvailability: "Scheduled on-site visits; ask about evening/weekend call-outs.",
      website: "https://www.servicefix.nl/",
      engagementType: "Quoted on-site handyman and maintenance visits",
      providerType: "General handyman / klusjesman",
      services: ["Klusjesman jobs", "Maintenance orientation", "Trade referral context"],
      citiesServed: ["Netherlands-wide (confirm postcode)"],
      featured: true,
      verificationNote: "Ask for written scope separating general odd jobs from licensed plumber/electrician tasks.",
    },
    {
      name: "FixThatNow",
      slug: "fixthatnow",
      city: "Netherlands",
      region: "Handyman matching across major cities",
      summary:
        "Handyman-oriented matching desk helping households find professionals for assembly, repairs and home jobs with English-language site orientation.",
      expatFocus: "Relevant when you want English discovery for assembly and odd jobs soon after arrival.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Matched local visits; coverage depends on available professionals.",
      website: "https://fixthatnow.nl/en/handyman/",
      engagementType: "Matching and quote requests",
      providerType: "Quote / matching desk",
      services: ["Handyman matching", "Assembly orientation", "Repair quote requests"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Netherlands-wide varies"],
      featured: true,
      verificationNote: "Confirm employment model, insurance holder and dispute process for the specific matched worker.",
    },
    {
      name: "FixJeJob",
      slug: "fixjejob",
      city: "Netherlands",
      region: "Particulier ↔ vakman matching",
      summary:
        "Dutch matching app connecting households with vakmannen for local klussen — useful soft discovery when you want direct contact rather than a managed crew.",
      expatFocus: "Useful when you prefer choosing among local tradespeople and can verify KvK and insurance yourself.",
      languages: ["Dutch primary", "English — confirm per worker"],
      remoteSupport: true,
      inPersonAvailability: "Depends on the matched vakman.",
      website: "https://fixjejob.nl/",
      engagementType: "Direct matching between household and vakman",
      providerType: "Quote / matching desk",
      services: ["Klus matching", "Local vakman discovery"],
      citiesServed: ["Neighbourhood-dependent"],
      featured: false,
      verificationNote: "Matching apps are not ExpatLife rankings — verify identity, insurance and English support before sharing keys.",
    },
    {
      name: "IKEA assembly / flat-pack specialists (local)",
      slug: "ikea-assembly-specialists",
      city: "City-by-city",
      region: "Assembly-focused independents and small firms",
      summary:
        "Many Dutch cities have assembly-focused freelancers and small firms who specialise in flat-pack furniture — often found via referrals, housing groups or retailer partner programmes.",
      expatFocus: "Strong option when boxes arrived with your move and you mainly need assembly, not a full renovation punch list.",
      languages: ["Varies widely"],
      remoteSupport: true,
      inPersonAvailability: "Home visits by appointment; book around delivery windows.",
      website: "https://www.kvk.nl/english/",
      engagementType: "Per-item or hourly assembly quotes",
      providerType: "Assembly / furniture specialist",
      services: ["Flat-pack assembly", "Wardrobe builds", "Mounting where permitted"],
      citiesServed: ["Local only"],
      featured: false,
      verificationNote: "KvK and retailer partner lists are discovery aids — confirm wall-type checks, insurance and packaging disposal in writing.",
    },
    {
      name: "Landlord / VvE maintenance desks",
      slug: "landlord-vve-maintenance",
      city: "Building-dependent",
      region: "Apartment buildings nationwide",
      summary:
        "Some landlords and VvE (owners’ associations) already retain maintenance contacts for building-approved small works — worth asking before hiring independently.",
      expatFocus: "Useful when drilling rules are strict and the building prefers approved contractors.",
      languages: ["Dutch primary"],
      remoteSupport: true,
      inPersonAvailability: "Building schedule dependent.",
      website: "https://www.rijksoverheid.nl/onderwerpen/huurwoning",
      engagementType: "Building-approved maintenance contacts",
      providerType: "Maintenance retainer",
      services: ["Approved small works", "Building-rule aligned visits"],
      citiesServed: ["Building-specific"],
      featured: false,
      verificationNote: "Ask your landlord or VvE who is approved — official housing pages are orientation, not a booking channel.",
    },
    {
      name: "Independent klusjesman (via referrals)",
      slug: "independent-klusjesman",
      city: "City-by-city",
      region: "Private households nationwide",
      summary:
        "Many expats use referred independent klusjesmannen for recurring odd jobs — often found via colleagues, housing groups or building managers rather than national brands.",
      expatFocus: "Strong option when you want continuity with one person and can agree clear written expectations.",
      languages: ["Varies widely"],
      remoteSupport: false,
      inPersonAvailability: "Direct home visits; schedules are personal.",
      website: "https://www.acm.nl/en/consumers",
      engagementType: "Private arrangements",
      providerType: "General handyman / klusjesman",
      services: ["Odd jobs", "Small repairs", "Flexible private agreements"],
      citiesServed: ["Local only"],
      featured: false,
      verificationNote: "Agree scope, materials, keys, invoices/BTW and illness cover in writing — consumer orientation links are not a booking channel.",
    },
    {
      name: "Local firm shortlist via KvK",
      slug: "kvk-local-shortlist",
      city: "Netherlands",
      region: "Discovery starting point for local firms",
      summary:
        "Chamber of Commerce (KvK) and local-business discovery routes remain a practical way to shortlist neighbourhood handymen when platforms do not fit.",
      expatFocus: "Useful when you prefer a local independent near your street and can verify registration and insurance yourself.",
      languages: ["Dutch primary"],
      remoteSupport: true,
      inPersonAvailability: "Depends on the local firm you select.",
      website: "https://www.kvk.nl/english/",
      engagementType: "Local shortlisting via company verification",
      providerType: "Quote / matching desk",
      services: ["Local firm discovery", "Company registration checks"],
      citiesServed: ["Neighbourhood-dependent"],
      featured: false,
      verificationNote: "KvK listings are not ExpatLife rankings — verify insurance, references and English support directly.",
    },
    {
      name: "Emergency minor-fix triage (orientation)",
      slug: "emergency-minor-fix-orientation",
      city: "Netherlands",
      region: "Same-day orientation — not life-threatening emergencies",
      summary:
        "For non-emergency minor issues (jammed doors, minor drip triage, failed hinges), many households start with their known klusjesman or building desk — life-threatening situations belong with official emergency channels.",
      expatFocus: "Helps expats separate true emergencies from odd jobs that can wait for a booked visit.",
      languages: ["Varies"],
      remoteSupport: true,
      inPersonAvailability: "Same-day only when a provider offers call-out — confirm fees first.",
      website: "https://www.government.nl/",
      engagementType: "Triage then book appropriate trade",
      providerType: "Emergency minor-fix orientation",
      services: ["Minor-fix triage", "Referral to licensed trades"],
      citiesServed: ["Nationwide orientation"],
      featured: false,
      verificationNote: "This is orientation only — not an emergency service. For danger to life or major water/gas events, use official emergency channels first.",
    },
    {
      name: "Relocation package handyman add-ons",
      slug: "relocation-handyman-addons",
      city: "Package-dependent",
      region: "Via relocation agencies / services",
      summary:
        "Some relocation packages include limited handyman hours for shelves and assembly after arrival — worth checking before booking a separate provider.",
      expatFocus: "Useful when your employer already bought settling-in hours and you only need extras.",
      languages: ["English common on expat packages"],
      remoteSupport: true,
      inPersonAvailability: "Within package windows; extras billed separately.",
      website: RELOCATION_SERVICES_PATH,
      engagementType: "Hours inside a relocation package",
      providerType: "Maintenance retainer",
      services: ["Settling-in odd jobs", "Limited assembly hours"],
      citiesServed: ["Package city coverage"],
      featured: false,
      verificationNote: "Confirm remaining hours, what is excluded, and whether licensed trades are covered before assuming the package replaces a specialist.",
    },
  ] satisfies HandymanProvider[],
  comparisonTable: [
    { provider: "MrFix", citiesServed: "Major NL cities", expatFocus: "App-coordinated visits", languages: "Dutch, EN confirm", assemblyFocus: "Ask in writing", providerType: "General handyman / klusjesman" },
    { provider: "ServiceFix", citiesServed: "Nationwide confirm", expatFocus: "All-round + trade context", languages: "Dutch, EN confirm", assemblyFocus: "Ask in writing", providerType: "General handyman / klusjesman" },
    { provider: "FixThatNow", citiesServed: "Major cities", expatFocus: "English matching desk", languages: "English, Dutch", assemblyFocus: "Core use case", providerType: "Quote / matching desk" },
    { provider: "FixJeJob", citiesServed: "Local matches", expatFocus: "Direct vakman contact", languages: "Dutch, EN varies", assemblyFocus: "Worker-dependent", providerType: "Quote / matching desk" },
    { provider: "Assembly specialists", citiesServed: "Local", expatFocus: "Flat-pack focus", languages: "Varies", assemblyFocus: "Core focus", providerType: "Assembly / furniture specialist" },
    { provider: "Landlord / VvE desks", citiesServed: "Building", expatFocus: "Rule-aligned works", languages: "Dutch primary", assemblyFocus: "Approved only", providerType: "Maintenance retainer" },
    { provider: "Independent klusjesman", citiesServed: "Local", expatFocus: "Continuity + referrals", languages: "Varies", assemblyFocus: "Often yes", providerType: "General handyman / klusjesman" },
    { provider: "KvK local shortlist", citiesServed: "Neighbourhood", expatFocus: "Verify-yourself discovery", languages: "Dutch primary", assemblyFocus: "Firm-dependent", providerType: "Quote / matching desk" },
  ],
  questionsToAsk: [
    "Is this quote for handyman / klusjesman work only — or are cleaning tasks mixed in somehow?",
    "Which tasks require a licensed plumber or electrician, and will you refuse those?",
    "Can you share KvK details and confirm liability insurance before the visit?",
    "Will I receive a proper invoice with BTW clarity under my name/address?",
    "Who buys materials and brackets — and how are markups shown?",
    "Can instructions and day-of decisions be handled in English?",
    "Have you checked landlord / VvE drilling and quiet-hour rules for this building?",
    "What happens if the wall type differs from the quote assumptions?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Handymen?",
    body: "Use the directory to compare scopes, languages and licensed-trade boundaries. Then keep surfaces on Cleaning companies, furniture vans on Moving/Removal companies, and housing search on rental and estate directories.",
    primaryCta: { label: "Compare Handymen", href: "#directory" },
    secondaryCta: { label: "Open Cleaning Companies", href: CLEANING_COMPANIES_PATH },
  },
  faqs: [
    {
      q: "Is a klusjesman the same as a cleaning company?",
      a: "No. Cleaning companies own surfaces and hygiene scopes. Handymen / klusjesmannen own odd jobs, assembly and small repairs. Keep the workstreams separate.",
    },
    {
      q: "Can a handyman do gas or electrical work?",
      a: "Often not safely or legally for gas and main electrical circuits. Ask what they will refuse and request a referral to a licensed plumber or electrician when needed.",
    },
    {
      q: "Do rental agencies book handymen for me?",
      a: "Usually not. Agencies mediate leases. You (or your relocation package) typically book a klusjesman separately — then confirm landlord drilling and painting rules first.",
    },
    {
      q: "How should I compare handymen without rankings?",
      a: "Compare written scopes, KvK/insurance, licensed-trade boundaries, language support, invoice/BTW practice and landlord-rule awareness. Rankings are not a substitute for verifying photos and access.",
    },
    {
      q: "Are matching platforms the same as a handyman company?",
      a: "Not always. Platforms may match independent workers. Confirm who employs the worker, who holds insurance and how disputes are handled.",
    },
    {
      q: "Will assembly damage be covered?",
      a: "Only if the provider’s insurance and written terms cover it. Ask before the visit and photograph existing wall/floor condition.",
    },
    {
      q: "What about cash-only quotes?",
      a: "Cash-only without invoices raises consumer and reimbursement risk. Prefer clear written quotes and proper invoices — especially for landlord or employer expenses.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a provider?",
      a: "No. Listings are informational soft discovery only. Always verify current services, insurance, languages and fit directly with the provider.",
    },
  ],
  officialSources: [
    {
      label: "ACM — Consumers",
      href: "https://www.acm.nl/en/consumers",
      description: "Netherlands Authority for Consumers and Markets — consumer orientation for services contracts.",
    },
    {
      label: "Government.nl — Housing",
      href: "https://www.government.nl/topics/housing",
      description: "Official Dutch government housing orientation — useful context around rentals and handovers.",
    },
    {
      label: "KVK — Business register",
      href: "https://www.kvk.nl/english/",
      description: "Check company registration details before paying deposits to unfamiliar handymen.",
    },
    {
      label: "Rijksoverheid — Rented housing",
      href: "https://www.rijksoverheid.nl/onderwerpen/huurwoning",
      description: "Official orientation on rented housing topics in the Netherlands.",
    },
    {
      label: "Juridisch Loket",
      href: "https://www.juridischloket.nl/",
      description: "Legal orientation desk many consumers use for rental and contract questions (not a handyman booking channel).",
    },
  ],
  relatedGuides: [
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "Domestic and end-of-tenancy cleans — sibling directory.",
    },
    {
      label: "Pet relocation companies",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live",
      description: "Specialist pet import/export and flight-pet logistics — sibling directory.",
    },
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Domestic within-Netherlands house moves — furniture vans, not handymen.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International household goods — separate from odd jobs.",
    },
    {
      label: "Storage companies",
      href: STORAGE_COMPANIES_PATH,
      status: "live",
      description: "Self-storage when assembly and lease gaps do not align.",
    },
    {
      label: "Rental agencies",
      href: RENTAL_AGENCIES_PATH,
      status: "live",
      description: "Tenant mediation — confirm drilling and painting rules before booking.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Find the next address while you schedule move-in odd jobs.",
    },
    {
      label: "Estate agents",
      href: ESTATE_AGENTS_PATH,
      status: "live",
      description: "Buy/sell makelaars when empties need small works around completion.",
    },
    {
      label: "Relocation agencies",
      href: RELOCATION_AGENCIES_PATH,
      status: "live",
      description: "Agency-style packages that sometimes include limited handyman hours.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Broader relocation support around settling-in tasks.",
    },
  ] satisfies HandymanLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Cleaning companies", href: CLEANING_COMPANIES_PATH, status: "live", description: "Domestic and oplevering cleans." },
    { label: "Pet relocation companies", href: PET_RELOCATION_COMPANIES_PATH, status: "live", description: "Flight-pet and import/export logistics." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic within-NL house moves." },
    { label: "Removal companies", href: REMOVAL_COMPANIES_PATH, status: "live", description: "International household goods removals." },
    { label: "Storage companies", href: STORAGE_COMPANIES_PATH, status: "live", description: "Interim storage around lease gaps." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Agency-style relocation packages." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Broader relocation support." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Find listings while you plan odd jobs." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Tenant mediation and landlord rules." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Makelaars for buy/sell empties." },
  ] satisfies HandymanLink[],
  exploreNextCards: [
    {
      label: "Cleaning companies",
      href: CLEANING_COMPANIES_PATH,
      status: "live",
      description: "Book surfaces separately from shelves and assembly.",
    },
    {
      label: "Pet relocation companies",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live",
      description: "Coordinate pet logistics separately from home repairs.",
    },
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Book furniture vans separately from assembly visits.",
    },
    {
      label: "Rental agencies",
      href: RENTAL_AGENCIES_PATH,
      status: "live",
      description: "Confirm drilling and painting rules before the visit.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Secure the next address while you schedule odd jobs.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International goods timing often drives assembly windows.",
    },
    {
      label: "Storage companies",
      href: STORAGE_COMPANIES_PATH,
      status: "live",
      description: "Bridge belongings when assembly and keys do not align.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare cities before you lock recurring maintenance contacts.",
    },
  ] satisfies HandymanLink[],
};
