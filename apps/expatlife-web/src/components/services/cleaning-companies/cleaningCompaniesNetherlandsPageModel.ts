import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";
import { PET_RELOCATION_COMPANIES_PATH } from "@/src/components/services/pet-relocation-companies/petRelocationCompaniesNetherlandsPageModel";

/** Services directory — domestic, end-of-tenancy and deep-clean providers for expats. */
export const CLEANING_COMPANIES_PATH = "/netherlands/services/cleaning-companies/" as const;

/** Sibling directories in Home & pet services batch. */
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

export const CLEANING_COMPANIES_AFFILIATE_PLACEMENT_ID =
  "nl-services-cleaning-companies-support-providers" as const;

export type CleaningProvider = {
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
    | "Regular domestic cleaning"
    | "End-of-tenancy / oplevering"
    | "Deep clean specialist"
    | "Office / light commercial"
    | "Quote / matching desk";
  services: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type CleaningLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-cleaning-companies";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const cleaningCompaniesNetherlandsPage = {
  slug: "cleaning-companies",
  path: CLEANING_COMPANIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(CLEANING_COMPANIES_PATH) ?? "2026-11-10",
  affiliatePlacementId: CLEANING_COMPANIES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Cleaning Companies in the Netherlands for Expats | Domestic & Move-Out",
    description:
      "Compare cleaning companies for weekly household help, deep cleans and end-of-tenancy / oplevering cleans in the Netherlands. Soft discovery for expats — not a ranking; not handymen, rental search or furniture movers.",
    keywords: [
      "cleaning companies netherlands",
      "schoonmaakbedrijf netherlands",
      "end of tenancy cleaning netherlands",
      "oplevering schoonmaak",
      "move out cleaning netherlands",
      "domestic cleaner netherlands expats",
      "weekly cleaning amsterdam",
      "deposit return cleaning netherlands",
      "deep clean netherlands",
      "compare cleaning companies netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Cleaning companies",
    pageTitle: "Cleaning Companies in the Netherlands for Expats",
    subtitle:
      "Compare domestic cleaners, deep-clean specialists and end-of-tenancy / oplevering providers — weekly household help, deposit-return cleans and language-friendly contracts. Repairs belong with Handymen; housing search with rental and estate directories; furniture vans with Moving and Removal companies.",
    primaryCta: { label: "Browse Cleaning Directory", href: "#directory" },
    secondaryCta: { label: "How Cleaning Differs", href: "#differentiate" },
    chips: ["Domestic cleaning", "End-of-tenancy", "Deep cleans", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-cleaning-companies-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of a professional cleaning prep in a bright Dutch apartment: supplies organised on a trolley, checklist for an end-of-tenancy clean, canal houses visible through the window.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what cleaning companies help with: weekly domestic cleans, deep cleans, end-of-tenancy / oplevering, kitchens and bathrooms, and light commercial orientation.",
      "Cleaners own surfaces and hygiene scopes — confirm keys, products and checklist depth before booking."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating cleaning companies, handymen, rental agencies, moving companies and end-of-tenancy checklists.",
      "Pick the right page first — cleaners are not repairers, housing search desks or furniture movers."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about cleaning companies in the Netherlands for expats.",
      "Use this snapshot before requesting quotes: scope, frequency, keys and language matter as much as hourly rates."
    ),
    providerTypes: visual(
      "provider-types",
      "Infographic comparing cleaner types: regular domestic, end-of-tenancy / oplevering, deep clean, office/light commercial and matching desks.",
      "Match the provider model to your job — weekly help and deposit-return cleans are different scopes."
    ),
    services: visual(
      "services",
      "Infographic of cleaning services: kitchens, bathrooms, floors, windows orientation, appliances and checklist-based oplevering.",
      "Service depth varies: some follow landlord checklists; others only do light weekly maintenance."
    ),
    compare: visual(
      "compare",
      "Infographic checklist for comparing cleaning companies: written scope, insurance, keys access, language and cancellation terms.",
      "Compare process quality and checklist fit before you compare headline hourly prices alone."
    ),
    costs: visual(
      "costs",
      "Infographic explaining cleaning cost drivers: hours, frequency, size, deep vs maintenance, products and end-of-tenancy intensity.",
      "Ask for a written quote with rooms, hours and product assumptions — stairs and oven cleans often change totals."
    ),
    prep: visual(
      "prep",
      "Infographic listing prep items before a clean: keys/codes, landlord checklist, decluttering, parking and product preferences.",
      "Access and checklist clarity often matter as much as the cleaner’s hourly rate."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with cleaning: language gaps, deposit disputes, keys timing, insurance and wrong provider type.",
      "Use written scopes and photo records to reduce move-out week surprises."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing cleaning coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Most providers concentrate in Randstad demand; confirm travel fees for smaller cities."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral cleaning directory workflow: shortlist, compare scopes, verify insurance and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for cleaners: provider type, languages, city coverage, end-of-tenancy support and expat focus.",
      "Compare desks by checklist fit and language support before marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask cleaning companies before booking.",
      "Good questions reveal scope boundaries, insurance, keys handling and what happens if access fails."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common cleaning FAQ topics: vs handymen, costs, oplevering, contracts and red flags.",
      "FAQ answers should help you pick the next verification step — not guarantee deposit returns."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist cleaners: define scope, share checklist, request written quotes and verify insurance.",
      "Turn provider discovery into a structured shortlist before key-handover week."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for consumer, rental and company verification in the Netherlands.",
      "Verify company registration and consumer rights with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around a clean: cleaning companies, moving, removal, storage, rental agencies, housing platforms and relocation.",
      "Cleaners are one part of the wider housing and move logistics ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing cleaners: moving companies, rental agencies, pet relocation and storage.",
      "Continue from cleaning discovery into move logistics, housing and pet timing."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting cleaning research to moving, rental agencies, housing platforms, pet relocation and cities.",
      "Cleaning shortlists connect naturally into deposit return, furniture vans and city choice."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#provider-types", label: "Cleaner types" },
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
    heading: "Why Expats Compare Cleaning Companies",
    paragraphs: [
      "When you need weekly household help, a deep clean after arrival, or an end-of-tenancy / oplevering clean for deposit return, specialist cleaning companies and matching desks coordinate people, products and checklists — work that handymen, rental agents and furniture movers do not own.",
      "This page is a services directory for domestic cleaning and move-out cleans in the Netherlands. It is not a handyman directory, not a housing-search guide, not international removals, and not a ranking of cleaners.",
      "Inclusion here is informational soft discovery, not a ranking. No cleaner can guarantee landlord acceptance of an oplevering checklist or fixed final prices without accurate access, size and scope details. Confirm insurance, language and written scope before booking.",
    ],
    links: [
      { label: "Pet relocation companies", href: PET_RELOCATION_COMPANIES_PATH },
      { label: "Moving companies", href: MOVING_COMPANIES_PATH },
      { label: "Rental agencies", href: RENTAL_AGENCIES_PATH },
      { label: "Services hub", href: SERVICES_HUB_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Cleaning companies (this page)",
      body: "Domestic cleaning, deep cleans and end-of-tenancy / oplevering providers — surfaces, hygiene scopes and checklist-based move-out cleans.",
      href: CLEANING_COMPANIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Handymen",
      body: "Repairs, odd jobs, fixtures and small works — not routine vacuuming, bathrooms or checklist oplevering cleans.",
      href: HANDYMEN_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Rental agencies / housing platforms",
      body: "Finding or mediating a lease — not booking cleaners. Share landlord checklists with your cleaner separately.",
      href: RENTAL_AGENCIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Moving / removal companies",
      body: "Furniture vans and packing — some offer add-on cleans, but specialist cleaners usually own oplevering depth.",
      href: MOVING_COMPANIES_PATH,
      status: "live" as "live" | "comingSoon",
    },
    {
      title: "Estate agents",
      body: "Buy/sell makelaars — useful around purchase empties, not weekly household cleaning contracts.",
      href: ESTATE_AGENTS_PATH,
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
    { label: "Provider focus", value: "Surfaces & hygiene", note: "Cleaners — not repairs, furniture vans or housing search." },
    { label: "Common friction", value: "Scope + keys", note: "Checklist depth, access codes and language drive disputes." },
    { label: "Provider models", value: "5 types", note: "Domestic, oplevering, deep clean, light commercial, matching desks." },
    { label: "Quotes", value: "Written scope", note: "Ask for hours, rooms, products, insurance and cancellation." },
    { label: "Languages", value: "Varies", note: "English-friendly desks exist; confirm contract language early." },
    { label: "Guarantee", value: "None", note: "No directory can guarantee deposit return or landlord sign-off." },
  ],
  providerTypeComparison: [
    {
      type: "Regular domestic cleaning",
      scope: "Recurring weekly or bi-weekly household cleaning with a stable cleaner or team.",
      usefulWhen: "You want ongoing help after settling into a Dutch rental or purchase.",
      questions: ["Same cleaner each visit?", "Which rooms are in/out of scope?", "Who supplies products?"],
    },
    {
      type: "End-of-tenancy / oplevering",
      scope: "Checklist-based move-out cleans aimed at landlord or agency inspection standards.",
      usefulWhen: "You are leaving a rental and need deposit-return oriented cleaning depth.",
      questions: ["Will you follow our landlord checklist?", "Are ovens, windows and outdoor boxes included?", "Photo documentation available?"],
    },
    {
      type: "Deep clean specialist",
      scope: "One-off intensive cleans after arrival, renovation dust or long vacancy.",
      usefulWhen: "The home needs a reset beyond a light weekly maintenance clean.",
      questions: ["How many hours assumed?", "Appliance interiors included?", "What is excluded?"],
    },
    {
      type: "Office / light commercial",
      scope: "Small offices, studios or light commercial spaces with scheduled visits.",
      usefulWhen: "You need orientation for a home-office suite or small expat business space.",
      questions: ["After-hours access?", "Security clearance?", "Consumables included?"],
    },
    {
      type: "Quote / matching desk",
      scope: "Platforms or desks that match you with independent cleaners or local firms.",
      usefulWhen: "You want flexible English onboarding and multiple quotes quickly.",
      questions: ["Who employs the cleaner?", "Who holds liability insurance?", "How are disputes handled?"],
    },
  ],
  providerServices: [
    { title: "Weekly household cleaning", body: "Kitchens, bathrooms, floors and surface maintenance on a recurring schedule." },
    { title: "End-of-tenancy / oplevering", body: "Checklist-driven move-out cleans for deposit-return inspections — confirm landlord list in writing." },
    { title: "Deep / arrival cleans", body: "Intensive one-off cleans after move-in, vacancy or renovation dust." },
    { title: "Appliance & detail work", body: "Ovens, fridges, extractor hoods and skirting — often billed as extras on light packages." },
    { title: "Windows orientation", body: "Interior windows are common; exterior/high work may need specialists — ask before assuming." },
    { title: "Light commercial visits", body: "Small offices and studios on scheduled routes — verify after-hours access." },
  ],
  compareCriteria: [
    {
      criterion: "Written scope & checklist",
      whyItMatters: "Verbal quotes often omit ovens, windows, outdoor storage or product costs.",
      howToCheck: "Share the landlord checklist and ask for a written room/task list with hours.",
    },
    {
      criterion: "Insurance & employment model",
      whyItMatters: "Liability and who employs the cleaner affect what happens if something is damaged.",
      howToCheck: "Ask whether the company or freelancer is insured and request confirmation.",
    },
    {
      criterion: "Keys & access handling",
      whyItMatters: "Missed access windows waste fees and delay deposit inspections.",
      howToCheck: "Confirm key handover, codes, neighbours and what happens if entry fails.",
    },
    {
      criterion: "Language & contract clarity",
      whyItMatters: "Misunderstandings on move-out week create deposit disputes.",
      howToCheck: "Confirm English support for quotes, invoices and day-of instructions.",
    },
    {
      criterion: "Products & eco preferences",
      whyItMatters: "Some households require fragrance-free or pet-safe products.",
      howToCheck: "State preferences early; ask whether products are included or billed extra.",
    },
    {
      criterion: "Cancellation & rebook terms",
      whyItMatters: "Key dates slip when movers or landlords change inspection times.",
      howToCheck: "Read deposit, same-day cancel and rebook rules before paying.",
    },
  ],
  costExamples: [
    {
      item: "Weekly 3–4 hour domestic clean",
      typicalRange: "Hourly × hours + products",
      whatToConfirm: "Same cleaner, travel fee, product inclusion and VAT on the invoice.",
    },
    {
      item: "End-of-tenancy / oplevering clean",
      typicalRange: "Higher intensity package",
      whatToConfirm: "Checklist coverage, oven/windows, photo report and revisit policy.",
    },
    {
      item: "Deep / post-renovation clean",
      typicalRange: "Multi-hour intensive",
      whatToConfirm: "Dust scope, appliance interiors and whether painters’ residue is included.",
    },
    {
      item: "Light commercial / small office",
      typicalRange: "Route-based weekly fee",
      whatToConfirm: "After-hours access, alarm codes and consumables.",
    },
    {
      item: "Matching-platform booking",
      typicalRange: "Cleaner rate + platform fee",
      whatToConfirm: "Who employs the cleaner, insurance holder and dispute process.",
    },
  ],
  prepChecklist: [
    { document: "Landlord / agency checklist", why: "Oplevering standards vary — share the exact list before quoting." },
    { document: "Keys, codes and parking notes", why: "Access failures waste paid hours and delay inspections." },
    { document: "Declutter plan", why: "Cleaners clean surfaces; they are not removers of furniture or rubbish mountains." },
    { document: "Photo record of condition", why: "Before/after photos help if deposit disputes arise later." },
    { document: "Product & pet preferences", why: "Fragrance, allergy and pet-safe constraints should be written down." },
    { document: "Invoice details (name / address)", why: "Some landlords or employers want correct named invoices." },
    { document: "Language preference", why: "Confirm English instructions for day-of communication." },
  ],
  challengeCards: [
    { title: "Checklist mismatches", body: "Landlord lists and cleaner packages often diverge on ovens and windows." },
    { title: "Keys timing", body: "Movers, cleaners and inspections compete for the same handover window." },
    { title: "Language gaps", body: "English quotes with Dutch-only day-of contacts create stress." },
    { title: "Wrong provider type", body: "Booking a handyman for bathrooms wastes weeks; booking light weekly help for oplevering fails inspections." },
    { title: "Insurance ambiguity", body: "Platform vs company liability is unclear until something breaks." },
    { title: "Deposit expectations", body: "A thorough clean helps — it does not guarantee deposit return." },
    { title: "Hidden extras", body: "Products, stairs, parking fines and oven cleans appear after the fact." },
    { title: "Cancel windows", body: "Inspection dates move; rebook fees surprise leavers." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "High demand; book oplevering slots early around month-end." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Strong domestic and end-of-tenancy supply; confirm English contracts." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International households often need bilingual scheduling." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Compact apartments; clarify stair and bike-shed scope." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Tech movers often pair deep cleans with assignment start dates." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam spillover; check travel fees for smaller firms." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Student and professional turnovers spike checklist cleans." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "Smaller homes; confirm whether windows and sheds are included." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern coverage varies; ask about travel surcharges." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern NL routes; verify same-week availability." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University-city leavers; book deposit cleans early." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Southern demand; confirm Dutch vs English day-of support." },
  ],
  providers: [
    {
      name: "Homie",
      slug: "homie",
      city: "Netherlands-wide matching",
      region: "Major Dutch cities via matched cleaners",
      summary: "Dutch cleaner-matching platform connecting households with independent cleaners for recurring domestic cleaning and flexible scheduling.",
      expatFocus: "Useful when you want English-friendly onboarding and flexible weekly help without hiring a full company fleet.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Cleaner visits at your address; quoting and booking are remote.",
      website: "https://www.homie.nl/",
      engagementType: "Cleaner matching and recurring bookings",
      providerType: "Quote / matching desk",
      services: ["Weekly domestic cleaning", "Flexible scheduling", "Cleaner matching"],
      citiesServed: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Netherlands-wide (coverage varies)"],
      featured: true,
      verificationNote: "Confirm who employs the cleaner, liability insurance and what happens if a visit is missed before you rely on a platform booking.",
    },
    {
      name: "Asito",
      slug: "asito",
      city: "Netherlands (national)",
      region: "Facility and professional cleaning nationwide",
      summary: "Large Dutch cleaning organisation known for professional and facility cleaning — relevant when you need orientation for light commercial or structured professional scopes.",
      expatFocus: "Helpful for expats comparing professional/facility-grade providers rather than informal weekly household help alone.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Scheduled site visits; commercial access rules apply.",
      website: "https://www.asito.nl/",
      engagementType: "Professional / facility cleaning programmes",
      providerType: "Office / light commercial",
      services: ["Facility cleaning", "Scheduled professional cleans", "Commercial site support"],
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote: "Confirm whether residential apartments are in scope for your quote — many facility desks focus on commercial sites.",
    },
    {
      name: "CSU",
      slug: "csu",
      city: "Netherlands (national)",
      region: "Professional cleaning and facility services",
      summary: "Established Dutch cleaning company providing professional cleaning services across facility and workplace contexts.",
      expatFocus: "Relevant when your need is closer to office or multi-site professional cleaning than a single-home weekly visit.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Contract-based site schedules.",
      website: "https://www.csu.nl/",
      engagementType: "Professional cleaning contracts",
      providerType: "Office / light commercial",
      services: ["Professional cleaning", "Facility support", "Scheduled visits"],
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote: "Ask for written scope boundaries between workplace cleans and private residential packages.",
    },
    {
      name: "Vebego Cleaning Services",
      slug: "vebego-cleaning",
      city: "Netherlands / Benelux",
      region: "Facility services group with cleaning brands",
      summary: "Facility-services group with cleaning capabilities often used in professional and multi-site contexts across the Netherlands.",
      expatFocus: "Useful orientation when an employer or building manager already uses a facility partner and you need clarity on what is included.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Programme and site dependent.",
      website: "https://www.vebego.com/",
      engagementType: "Facility cleaning via group brands",
      providerType: "Office / light commercial",
      services: ["Facility cleaning", "Multi-site programmes"],
      citiesServed: ["Netherlands-wide", "Benelux context"],
      featured: false,
      verificationNote: "Confirm the operating brand for your site and whether private apartments are covered.",
    },
    {
      name: "Hagoschoonmaak (Hago)",
      slug: "hago",
      city: "Netherlands",
      region: "Professional cleaning nationwide",
      summary: "Dutch professional cleaning brand serving workplaces and facility environments with scheduled cleaning programmes.",
      expatFocus: "Compare when your cleaning need is office-adjacent rather than a private domestic weekly cleaner.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Contract sites; verify residential eligibility.",
      website: "https://www.hago.nl/",
      engagementType: "Professional cleaning programmes",
      providerType: "Office / light commercial",
      services: ["Workplace cleaning", "Scheduled facility cleans"],
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote: "Treat facility brands as soft discovery — verify private-home availability before assuming residential packages.",
    },
    {
      name: "Speciaal Oplevering",
      slug: "speciaal-oplevering",
      city: "Randstad focus",
      region: "End-of-tenancy / oplevering cleans",
      summary: "Specialist-style end-of-tenancy cleaning positioning around checklist-based oplevering cleans for rental handovers.",
      expatFocus: "Relevant when deposit return depends on following a landlord or agency inspection list closely.",
      languages: ["Dutch", "English on request — confirm"],
      remoteSupport: true,
      inPersonAvailability: "On-site cleans timed to key handover; book early around month-end.",
      website: "https://www.speciaaloplevering.nl/",
      engagementType: "End-of-tenancy cleaning quotes",
      providerType: "End-of-tenancy / oplevering",
      services: ["Oplevering cleans", "Checklist-based move-out", "Detail cleaning"],
      citiesServed: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Randstad"],
      featured: true,
      verificationNote: "Send the exact landlord checklist and ask which line items are included, optional or excluded.",
    },
    {
      name: "Oplevering Schoonmaak Nederland",
      slug: "oplevering-schoonmaak-nederland",
      city: "Netherlands",
      region: "Move-out cleaning specialists",
      summary: "Move-out oriented cleaning provider positioning for oplevering and handover cleans ahead of rental inspections.",
      expatFocus: "Helpful when you need a one-off intensive clean timed to lease end rather than weekly help.",
      languages: ["Dutch", "English — confirm per booking"],
      remoteSupport: true,
      inPersonAvailability: "Scheduled handover windows; confirm parking and key access.",
      website: "https://www.opleveringschoonmaak.nl/",
      engagementType: "Move-out / oplevering packages",
      providerType: "End-of-tenancy / oplevering",
      services: ["End-of-tenancy cleans", "Deep detail work", "Checklist orientation"],
      citiesServed: ["Major Dutch cities", "Coverage varies"],
      featured: false,
      verificationNote: "Confirm city coverage for your postcode and whether a revisit after inspection feedback is included.",
    },
    {
      name: "Topschoonmakers",
      slug: "topschoonmakers",
      city: "Netherlands",
      region: "Domestic and deep-clean services",
      summary: "Cleaning company offering domestic and intensive cleaning options commonly compared by households needing one-off or recurring help.",
      expatFocus: "Useful when you want a company-style quote for deep cleans or regular domestic visits.",
      languages: ["Dutch", "English — confirm"],
      remoteSupport: true,
      inPersonAvailability: "Home visits by appointment.",
      website: "https://www.topschoonmakers.nl/",
      engagementType: "Domestic and deep-clean quotes",
      providerType: "Deep clean specialist",
      services: ["Deep cleans", "Domestic cleaning", "One-off intensive cleans"],
      citiesServed: ["Coverage by region — confirm postcode"],
      featured: false,
      verificationNote: "Ask for written hours assumptions and whether appliances/windows are included.",
    },
    {
      name: "Schoonmaakgids / local company shortlist",
      slug: "schoonmaakgids-orientation",
      city: "Netherlands",
      region: "Discovery starting point for local firms",
      summary: "Industry and local-business discovery routes (chamber listings, local directories) remain a practical way to shortlist neighbourhood cleaners when national brands do not fit.",
      expatFocus: "Useful when you prefer a local independent cleaner near your street and can verify KvK and insurance yourself.",
      languages: ["Dutch primary"],
      remoteSupport: true,
      inPersonAvailability: "Depends on the local firm you select.",
      website: "https://www.kvk.nl/",
      engagementType: "Local shortlisting via company verification",
      providerType: "Quote / matching desk",
      services: ["Local firm discovery", "Company registration checks"],
      citiesServed: ["Neighbourhood-dependent"],
      featured: false,
      verificationNote: "KvK and local listings are not ExpatLife rankings — verify insurance, references and English support directly.",
    },
    {
      name: "Independent domestic cleaners (via referrals)",
      slug: "independent-domestic-cleaners",
      city: "City-by-city",
      region: "Private households nationwide",
      summary: "Many expats use referred independent cleaners for recurring domestic help — often found via colleagues, housing groups or building managers rather than national brands.",
      expatFocus: "Strong option when you want continuity with one person and can agree clear written expectations.",
      languages: ["Varies widely"],
      remoteSupport: false,
      inPersonAvailability: "Direct home visits; schedules are personal.",
      website: "https://www.acm.nl/en/consumers",
      engagementType: "Private recurring arrangements",
      providerType: "Regular domestic cleaning",
      services: ["Weekly household cleaning", "Flexible private agreements"],
      citiesServed: ["Local only"],
      featured: false,
      verificationNote: "Agree hours, products, keys, illness cover and invoicing in writing — consumer orientation links are not a booking channel.",
    },
  ] satisfies CleaningProvider[],
  comparisonTable: [
    { provider: "Homie", citiesServed: "Major NL cities", expatFocus: "Matching + English onboarding", languages: "English, Dutch", endOfTenancy: "Not core focus", providerType: "Quote / matching desk" },
    { provider: "Asito", citiesServed: "Nationwide", expatFocus: "Facility / professional", languages: "Dutch, EN varies", endOfTenancy: "Confirm scope", providerType: "Office / light commercial" },
    { provider: "CSU", citiesServed: "Nationwide", expatFocus: "Workplace programmes", languages: "Dutch, EN varies", endOfTenancy: "Confirm scope", providerType: "Office / light commercial" },
    { provider: "Vebego Cleaning", citiesServed: "NL / Benelux", expatFocus: "Facility group brands", languages: "Dutch, EN varies", endOfTenancy: "Site-dependent", providerType: "Office / light commercial" },
    { provider: "Hago", citiesServed: "Nationwide", expatFocus: "Professional sites", languages: "Dutch, EN varies", endOfTenancy: "Confirm residential", providerType: "Office / light commercial" },
    { provider: "Speciaal Oplevering", citiesServed: "Randstad", expatFocus: "Deposit / checklist cleans", languages: "Dutch, EN confirm", endOfTenancy: "Core focus", providerType: "End-of-tenancy / oplevering" },
    { provider: "Oplevering Schoonmaak NL", citiesServed: "Major cities", expatFocus: "Move-out packages", languages: "Dutch, EN confirm", endOfTenancy: "Core focus", providerType: "End-of-tenancy / oplevering" },
    { provider: "Topschoonmakers", citiesServed: "Regional", expatFocus: "Deep + domestic", languages: "Dutch, EN confirm", endOfTenancy: "Ask in writing", providerType: "Deep clean specialist" },
  ],
  questionsToAsk: [
    "Is this quote for cleaning only — or are repairs / handyman tasks mixed in somehow?",
    "Will you follow our landlord or agency oplevering checklist line by line?",
    "Which rooms, appliances, windows and outdoor boxes are included vs extra?",
    "Who employs the cleaner, and who holds liability insurance?",
    "How are keys or access codes handled, and what happens if entry fails?",
    "Can instructions and invoices be handled in English?",
    "Are products included, and can we require fragrance-free or pet-safe options?",
    "What are cancel, rebook and revisit terms if the inspection date moves?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Cleaning Companies?",
    body: "Use the directory to compare scopes, languages and end-of-tenancy depth. Then keep furniture vans on Moving/Removal companies, repairs on Handymen, and housing search on rental and estate directories.",
    primaryCta: { label: "Compare Cleaning Companies", href: "#directory" },
    secondaryCta: { label: "Open Moving Companies", href: MOVING_COMPANIES_PATH },
  },
  faqs: [
    {
      q: "Is this the same as Handymen?",
      a: "No. Handymen cover repairs and odd jobs. Cleaning companies own surfaces, hygiene scopes and checklist-based move-out cleans. Keep the workstreams separate.",
    },
    {
      q: "Will an oplevering clean guarantee my deposit back?",
      a: "No. A thorough clean helps meet checklist expectations, but deposit outcomes also depend on wear-and-tear disputes, inventory condition and landlord processes. Treat cleaning as one step, not a guarantee.",
    },
    {
      q: "Can Moving or Removal companies clean for me?",
      a: "Some offer add-on cleans, but specialist cleaning desks usually own checklist depth for end-of-tenancy. Ask what is included before assuming the van crew will do oven interiors.",
    },
    {
      q: "How should I compare cleaners without rankings?",
      a: "Compare written scopes, insurance/employment model, keys handling, language support, product rules and cancel terms. Rankings are not a substitute for verifying your checklist and access window.",
    },
    {
      q: "Do rental agencies book cleaners for me?",
      a: "Usually not. Agencies mediate leases. You (or your relocation package) typically book cleaners separately — then share the landlord checklist with them.",
    },
    {
      q: "Are matching platforms the same as a cleaning company?",
      a: "Not always. Platforms may match independent cleaners. Confirm who employs the cleaner, who holds insurance and how disputes are handled.",
    },
    {
      q: "What about office cleaning?",
      a: "Facility brands can fit small offices and light commercial spaces. Confirm after-hours access and whether private apartments are even in scope.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a company?",
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
      description: "Check company registration details before paying deposits to unfamiliar cleaning firms.",
    },
    {
      label: "Rijksoverheid — Rented housing",
      href: "https://www.rijksoverheid.nl/onderwerpen/huurwoning",
      description: "Official orientation on rented housing topics in the Netherlands.",
    },
    {
      label: "Juridisch Loket",
      href: "https://www.juridischloket.nl/",
      description: "Legal orientation desk many consumers use for rental and contract questions (not a cleaner booking channel).",
    },
  ],
  relatedGuides: [
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
      description: "Domestic within-Netherlands house moves — furniture vans, not cleaners.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International household goods — separate from cleaning scopes.",
    },
    {
      label: "Storage companies",
      href: STORAGE_COMPANIES_PATH,
      status: "live",
      description: "Self-storage when cleans and lease gaps do not align.",
    },
    {
      label: "Rental agencies",
      href: RENTAL_AGENCIES_PATH,
      status: "live",
      description: "Tenant mediation — share landlord checklists with your cleaner.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Find the next address while you schedule move-out cleans.",
    },
    {
      label: "Estate agents",
      href: ESTATE_AGENTS_PATH,
      status: "live",
      description: "Buy/sell makelaars when empties need deep cleans around completion.",
    },
    {
      label: "Handymen",
      href: HANDYMEN_PATH,
      status: "live",
      description: "Repairs and odd jobs — sibling Home & pet services directory.",
    },
  ] satisfies CleaningLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Pet relocation companies", href: PET_RELOCATION_COMPANIES_PATH, status: "live", description: "Flight-pet and import/export logistics." },
    { label: "Moving companies", href: MOVING_COMPANIES_PATH, status: "live", description: "Domestic within-NL house moves." },
    { label: "Removal companies", href: REMOVAL_COMPANIES_PATH, status: "live", description: "International household goods removals." },
    { label: "Storage companies", href: STORAGE_COMPANIES_PATH, status: "live", description: "Interim storage around lease gaps." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Agency-style relocation packages." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Broader relocation support." },
    { label: "Housing platforms", href: HOUSING_PLATFORMS_PATH, status: "live", description: "Find listings while you plan cleans." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Tenant mediation and handover timing." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Makelaars for buy/sell empties." },
    { label: "Handymen", href: HANDYMEN_PATH, status: "live", description: "Home repairs, assembly and odd jobs." },
  ] satisfies CleaningLink[],
  exploreNextCards: [
    {
      label: "Pet relocation companies",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live",
      description: "Coordinate pet logistics separately from household cleaning.",
    },
    {
      label: "Moving companies",
      href: MOVING_COMPANIES_PATH,
      status: "live",
      description: "Book furniture vans separately from oplevering cleans.",
    },
    {
      label: "Rental agencies",
      href: RENTAL_AGENCIES_PATH,
      status: "live",
      description: "Align inspection dates with your cleaner booking.",
    },
    {
      label: "Housing platforms",
      href: HOUSING_PLATFORMS_PATH,
      status: "live",
      description: "Secure the next address while you schedule move-out help.",
    },
    {
      label: "Removal companies",
      href: REMOVAL_COMPANIES_PATH,
      status: "live",
      description: "International goods timing often drives deep-clean windows.",
    },
    {
      label: "Storage companies",
      href: STORAGE_COMPANIES_PATH,
      status: "live",
      description: "Bridge belongings when cleans and keys do not align.",
    },
    {
      label: "Handymen",
      href: HANDYMEN_PATH,
      status: "live",
      description: "Repairs before or after cleans.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare cities before you lock recurring cleaner routes.",
    },
  ] satisfies CleaningLink[],
};
