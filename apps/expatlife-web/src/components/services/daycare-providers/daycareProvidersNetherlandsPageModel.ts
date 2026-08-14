import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";
import { INTERNATIONAL_SCHOOLS_SERVICES_PATH } from "@/src/components/services/international-schools/internationalSchoolsServicesPageModel";

/** Services directory — compare/find daycare / kinderopvang providers for expats. */
export const DAYCARE_PROVIDERS_SERVICES_PATH = "/netherlands/services/daycare-providers/" as const;
export const DAYCARE_PROVIDERS_PATH = DAYCARE_PROVIDERS_SERVICES_PATH;

/** Education system guide — owns how Dutch childcare / daycare works. */
export const DAYCARE_EDUCATION_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const AFTER_SCHOOL_CARE_PATH = "/netherlands/education/after-school-care-netherlands/" as const;
export const BEFORE_SCHOOL_CARE_PATH = "/netherlands/education/before-school-care-netherlands/" as const;
export const INTERNATIONAL_SCHOOLS_EDUCATION_PATH =
  "/netherlands/education/international-schools-netherlands/" as const;
export const DUTCH_SCHOOLS_EDUCATION_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const HEALTH_INSURANCE_SERVICES_PATH = "/netherlands/services/health-insurance/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const BEST_CITIES_FOR_FAMILIES_PATH = "/netherlands/cities/best-cities-for-families/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const RENTAL_AGENCIES_PATH = "/netherlands/services/rental-agencies/" as const;
export const ESTATE_AGENTS_PATH = "/netherlands/services/estate-agents/" as const;
export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const CHILDCARE_COST_ESTIMATOR_PATH = "/netherlands/family/tools/childcare-cost-estimator/" as const;

export const DAYCARE_PROVIDERS_AFFILIATE_PLACEMENT_ID =
  "nl-services-daycare-providers-support-providers" as const;

export type DaycareProvider = {
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
    | "KDV / kinderdagverblijf discovery"
    | "Gastouderbureau orientation"
    | "Employer / company daycare orientation"
    | "LRK / quality verification"
    | "City cluster discovery"
    | "Government / public orientation"
    | "Search directory orientation";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type DaycareProvidersLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-daycare-providers";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const daycareProvidersNetherlandsPage = {
  slug: "daycare-providers",
  path: DAYCARE_PROVIDERS_SERVICES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(DAYCARE_PROVIDERS_SERVICES_PATH) ?? "2026-11-07",
  affiliatePlacementId: DAYCARE_PROVIDERS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Daycare Providers in the Netherlands for Expats | Provider Directory",
    description:
      "Compare daycare / kinderopvang providers: KDV, gastouderbureaus, employer daycare orientation, commute fit, visit checklists and LRK quality checks — soft discovery, not a ranking.",
    keywords: [
      "daycare providers netherlands",
      "kinderdagverblijf netherlands",
      "kinderopvang providers",
      "gastouderbureau netherlands",
      "compare daycare netherlands",
      "LRK childcare register",
      "expat daycare amsterdam",
      "expat daycare the hague",
      "company daycare netherlands",
      "find daycare netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Daycare providers",
    pageTitle: "Daycare Providers in the Netherlands for Expats",
    subtitle:
      "Compare kinderopvang providers — KDV centres, gastouderbureaus, employer daycare orientation, commute fit, visit checklists and LRK quality checks. This directory owns provider discovery. The education guide explains how Dutch childcare works, allowances and waiting lists.",
    primaryCta: { label: "Browse Provider Directory", href: "#directory" },
    secondaryCta: { label: "Not the same as…", href: "#differentiate" },
    chips: ["KDV vs gastouder", "Commute fit", "LRK checks", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-daycare-providers-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat family visiting a Dutch daycare centre reception, reviewing kinderopvang folders and a visit checklist with a coordinator near bright playrooms and a bicycle-lined brick street outside.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic introducing how to compare Dutch daycare providers: KDV, gastouderbureau, commute, hours and LRK registration.",
      "Start with care type and commute — then compare hours, language and LRK notes before you shortlist locations."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating the daycare providers services directory from the education daycare guide, BSO/VSO, international schools and childcare allowance.",
      "Pick the right page first: this directory owns provider comparison; the education guide owns how Dutch childcare works."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about choosing daycare providers in the Netherlands for expats.",
      "Use this snapshot before touring: types differ, waitlists are real, and LRK registration is a verification step — not a ranking."
    ),
    providerTypes: visual(
      "provider-types",
      "Infographic comparing KDV centres, gastouderbureaus, employer daycare and search-directory discovery for expat families.",
      "Match care format to your child’s age, hours needed and home–work commute — not to a generic “best daycare” label."
    ),
    commute: visual(
      "commute",
      "Infographic of daycare location and commute planning: home, KDV, work and drop-off timing for expat parents.",
      "Housing and daycare choice are linked — map drop-off before you sign a lease or accept a place far from work."
    ),
    quality: visual(
      "quality-lrk",
      "Infographic of LRK registration and GGD inspection orientation for Dutch kinderopvang providers.",
      "Use LRK and inspection reports as verification tools — then still visit and ask location-specific questions."
    ),
    visitChecklist: visual(
      "visit-checklist",
      "Infographic visit checklist for daycare tours: hours, language, settling-in, illness policy and contract terms.",
      "A structured visit beats marketing tours — bring the same questions to every location."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges when choosing daycare: waitlists, Dutch language, commute clashes and deposit timing.",
      "Plan for waitlists and language reality early — and keep allowance deep-dives on the education and tax pages."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral daycare-provider directory workflow: shortlist by type, compare cities, verify LRK and visit.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparison: visual(
      "comparison-matrix",
      "Infographic comparison matrix for daycare provider types: format focus, cities, languages and expat support.",
      "Compare discovery patterns by fit and transparency before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask daycare providers before signing a contract or paying a deposit.",
      "Good questions reveal waitlists, language support, illness rules, settling-in and notice periods."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common daycare-provider FAQ topics: vs education guide, KDV vs gastouder, LRK, waitlists and verification.",
      "FAQ answers should help you pick the next verification step — not replace childcare placement advice."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist daycare providers: define care type, map commute, check LRK and schedule visits.",
      "Turn daycare discovery into a structured shortlist before you pay deposits."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for daycare orientation: Government.nl childcare, Rijksoverheid, LRK and Belastingdienst toeslagen.",
      "Verify registration and public information with official sources — not marketing alone."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing daycare providers: education guide, BSO/VSO, childcare allowance and international schools.",
      "Continue from provider discovery into system guides, school-age care and allowance orientation."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around daycare decisions: daycare providers directory, international schools, health insurance, housing and relocation.",
      "Daycare choice sits beside housing, school planning and family health setup."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting daycare-provider research to education guides, international schools, housing and Dutch cities for families.",
      "Daycare shortlists connect naturally into housing, school pathways and city choice."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#provider-types", label: "Provider types" },
    { href: "#commute", label: "Commute" },
    { href: "#quality", label: "LRK & quality" },
    { href: "#visit-checklist", label: "Visit checklist" },
    { href: "#challenges", label: "Challenges" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#questions", label: "Questions" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Compare Daycare Providers as Providers",
    paragraphs: [
      "Dutch daycare (kinderopvang) is delivered by different provider types: kinderdagverblijf (KDV) centres, gastouderbureaus that match childminders, and sometimes employer-linked or company daycare. Families usually shortlist by care format, commute and start date — not by a single “best daycare” label.",
      "This page is a services directory for comparing daycare providers: KDV vs gastouder paths, location and commute fit, visit checklists and LRK / quality orientation. It owns daycare-provider discovery. The education guide at Daycare in the Netherlands owns how the system works, waiting lists and allowance orientation in depth.",
      "Inclusion here is informational soft discovery, not a ranking. No directory can guarantee places, fees or outcomes. Confirm current hours, language, contracts and LRK registration directly with each location before you sign or pay a deposit.",
    ],
    links: [
      { label: "Education guide (how it works)", href: DAYCARE_EDUCATION_PATH },
      { label: "Childcare allowance", href: CHILDCARE_ALLOWANCE_PATH },
      { label: "After-school care (BSO)", href: AFTER_SCHOOL_CARE_PATH },
      { label: "International schools (services)", href: INTERNATIONAL_SCHOOLS_SERVICES_PATH },
      { label: "Best cities for families", href: BEST_CITIES_FOR_FAMILIES_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Daycare providers directory (this page)",
      body: "Compare daycare / kinderopvang providers — KDV, gastouderbureaus, commute fit, visit checklists and LRK verification.",
      href: DAYCARE_PROVIDERS_SERVICES_PATH,
      status: "live" as const,
    },
    {
      title: "Daycare education guide",
      body: "How Dutch childcare works — types, waiting lists, costs orientation and system context for expats.",
      href: DAYCARE_EDUCATION_PATH,
      status: "live" as const,
    },
    {
      title: "Childcare allowance",
      body: "Kinderopvangtoeslag eligibility and application orientation — separate from provider shopping.",
      href: CHILDCARE_ALLOWANCE_PATH,
      status: "live" as const,
    },
    {
      title: "International schools directory",
      body: "Compare international schools as providers for school-age children — separate from under-4 daycare shopping.",
      href: INTERNATIONAL_SCHOOLS_SERVICES_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "This page owns", value: "Provider compare", note: "KDV, gastouder, commute, visits and LRK verification paths." },
    { label: "Education guide owns", value: "How it works", note: "System context, waiting lists deep dive and allowance orientation." },
    { label: "Common formats", value: "KDV · Gastouder", note: "Plus employer daycare where offered — match to hours and commute." },
    { label: "Quality signal", value: "LRK + GGD", note: "Registration and inspection reports are verification tools, not rankings." },
    { label: "Hotspots", value: "AMS · Hague", note: "Dense options and long waitlists are common in popular cities." },
    { label: "Guarantee", value: "None", note: "No directory ranks daycares or guarantees places, fees or outcomes." },
  ],
  providerTypeCards: [
    {
      title: "Kinderdagverblijf (KDV)",
      body: "Centre-based daycare for babies and toddlers — usually fixed groups, opening hours and a location near home or work.",
    },
    {
      title: "Gastouderbureau",
      body: "Agency that matches families with registered childminders (gastouders) — often more flexible hours, still needs LRK context.",
    },
    {
      title: "Employer / company daycare",
      body: "Some employers reserve places or partner with nearby centres — ask HR early; eligibility and fees vary by package.",
    },
    {
      title: "Search directories",
      body: "Location-based directories help you shortlist KDVs near a postcode — still verify each location on LRK and in person.",
    },
    {
      title: "BSO / VSO (school-age)",
      body: "After- and before-school care for primary children lives on separate education guides — do not treat as under-4 daycare.",
    },
    {
      title: "Language reality",
      body: "Many groups are Dutch-medium; some international neighbourhoods offer English-friendly staff — confirm per location.",
    },
  ],
  commuteOrientation: [
    {
      factor: "Home ↔ daycare",
      whatItUsuallyCovers: "Morning drop-off and evening pick-up distance by bike, OV or car.",
      planningNote: "A short bike ride often beats a “perfect” centre across the city at rush hour.",
    },
    {
      factor: "Daycare ↔ work",
      whatItUsuallyCovers: "Whether one parent continues to the office after drop-off.",
      planningNote: "Map both parents’ schedules — not only the closest postcode to home.",
    },
    {
      factor: "Opening hours",
      whatItUsuallyCovers: "Typical weekday windows; late pick-ups and part-time days vary by location.",
      planningNote: "Ask about contract hours vs flexibility for overtime or travel weeks.",
    },
    {
      factor: "Housing timing",
      whatItUsuallyCovers: "Signing a lease before a daycare place is confirmed — or the reverse.",
      planningNote: "Sequence carefully in high-demand cities; temporary housing can bridge gaps.",
    },
  ],
  qualitySteps: [
    {
      step: "1. Confirm LRK registration",
      timing: "Before contract",
      detail: "Look up the location in the Landelijk Register Kinderopvang (LRK) and note the registration number.",
    },
    {
      step: "2. Read GGD inspection context",
      timing: "During shortlisting",
      detail: "Inspection reports are orientation tools — ask the location how recent findings were addressed.",
    },
    {
      step: "3. Visit and observe",
      timing: "Before deposit",
      detail: "See group size, settling-in approach, hygiene routines and how staff communicate with parents.",
    },
    {
      step: "4. Review contract terms",
      timing: "Before signing",
      detail: "Notice periods, illness rules, holiday closures and fee changes should be clear in writing.",
    },
    {
      step: "5. Align allowance paperwork",
      timing: "Parallel track",
      detail: "Registered care and work rules matter for kinderopvangtoeslag — use the allowance guide for depth.",
    },
  ],
  visitChecklist: [
    {
      item: "Hours & contract days",
      why: "Confirm opening times, part-time options and how overtime or travel weeks are handled.",
    },
    {
      item: "Language & settling-in",
      why: "Marketing English is not the same as daily group language and onboarding for new arrivals.",
    },
    {
      item: "Illness & holidays",
      why: "Ask about fever policies, holiday closures and what happens when you travel.",
    },
    {
      item: "Food & allergies",
      why: "Clarify meals, snacks and how allergies or cultural food needs are managed.",
    },
    {
      item: "Staffing & group size",
      why: "Ask about ratios, primary caregivers and how many faces your child will see each week.",
    },
    {
      item: "Fees, deposit & notice",
      why: "Request written fee schedules, deposit rules and withdrawal notice periods.",
    },
  ],
  challengeCards: [
    {
      title: "Long waiting lists",
      body: "Popular cities fill early — inquire by age group and preferred days, not only by brand name.",
    },
    {
      title: "Dutch-medium groups",
      body: "Many excellent centres run primarily in Dutch — ask how new expat children are supported.",
    },
    {
      title: "Commute vs “perfect” centre",
      body: "A highly rated location that wrecks your mornings may be worse than a nearer fit.",
    },
    {
      title: "Housing before a place",
      body: "Signing a distant lease before daycare confirmation can create drop-off stress — sequence carefully.",
    },
    {
      title: "Allowance assumptions",
      body: "Toeslag rules and work hours matter — do not assume every contract is automatically eligible.",
    },
    {
      title: "School-age confusion",
      body: "BSO / VSO are separate from under-4 daycare — use the after- and before-school education guides.",
    },
    {
      title: "Employer place limits",
      body: "Company daycare quotas and partner lists vary — clarify with HR before you shortlist only those options.",
    },
    {
      title: "Directory = ranking myth",
      body: "Soft discovery lists are not endorsements. Visit, verify LRK and decide for your child.",
    },
  ],
  providers: [
    {
      name: "Kinderdagverblijf.nl location search",
      slug: "kinderdagverblijf-nl-search",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Location-based discovery path for finding kinderdagverblijven near a postcode — useful for first shortlists before visits.",
      expatFocus:
        "Best starting point when you know roughly where you will live or work and need nearby KDV options to compare.",
      languages: ["Dutch site", "Location listings vary"],
      remoteSupport: true,
      inPersonAvailability: "Online search first; visits arranged with each centre.",
      website: "https://www.kinderdagverblijf.nl/",
      engagementType: "Search directory orientation",
      providerType: "Search directory orientation",
      citiesServed: ["Amsterdam", "The Hague", "Rotterdam", "Utrecht", "Eindhoven", "Other cities"],
      featured: true,
      verificationNote:
        "Directory search is soft discovery — verify each location’s hours, language and LRK registration yourself. Not a ranked “best daycare” list.",
    },
    {
      name: "LRK — Landelijk Register Kinderopvang",
      slug: "lrk-register-verification",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Official national register for verifying childcare provider registration and reading inspection context.",
      expatFocus:
        "Essential verification step before contracts — registration status and reports beat marketing claims.",
      languages: ["Dutch interface", "Registration numbers"],
      remoteSupport: true,
      inPersonAvailability: "Online verification; centres handle local tours.",
      website: "https://www.lrk.net/",
      engagementType: "Official register verification",
      providerType: "LRK / quality verification",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "LRK confirms registration context — it is not a quality ranking or placement service. Always visit shortlisted locations.",
    },
    {
      name: "KDV centre orientation",
      slug: "kdv-centre-orientation",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Discovery pattern for centre-based kinderdagverblijf care with fixed groups, opening hours and location-based contracts.",
      expatFocus:
        "Useful when you want predictable weekday hours near home or work and a clear group structure for babies/toddlers.",
      languages: ["Dutch common", "English support varies by location"],
      remoteSupport: true,
      inPersonAvailability: "Tours by appointment; waitlists common in hotspots.",
      website: "https://www.government.nl/topics/childcare",
      engagementType: "Care format orientation",
      providerType: "KDV / kinderdagverblijf discovery",
      citiesServed: ["Amsterdam", "The Hague", "Rotterdam", "Utrecht", "Other cities"],
      featured: true,
      verificationNote:
        "This row explains the KDV format — not a specific brand endorsement. Compare locations and verify LRK per site.",
    },
    {
      name: "Gastouderbureau orientation",
      slug: "gastouderbureau-orientation",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Orientation for agencies that match families with registered childminders — often more flexible than large centres.",
      expatFocus:
        "Helpful when you need smaller-group care or hours that fit irregular work patterns — still verify registration.",
      languages: ["Dutch common", "English varies"],
      remoteSupport: true,
      inPersonAvailability: "Matching interviews and home visits vary by bureau.",
      website: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang",
      engagementType: "Care format orientation",
      providerType: "Gastouderbureau orientation",
      citiesServed: ["Netherlands-wide local options"],
      featured: true,
      verificationNote:
        "Gastouder arrangements still sit in the childcare framework — confirm bureau and childminder registration before contracting.",
    },
    {
      name: "Employer / company daycare orientation",
      slug: "employer-company-daycare-orientation",
      city: "Employer-dependent",
      region: "Netherlands",
      summary:
        "Orientation for reserved places or partner centres linked to employer packages — availability and rules vary widely.",
      expatFocus:
        "Ask HR early about quotas, partner KDVs, subsidy and whether places transfer if you change roles.",
      languages: ["Depends on partner centre"],
      remoteSupport: true,
      inPersonAvailability: "HR intro plus centre tours.",
      website: "https://www.government.nl/topics/childcare",
      engagementType: "Employer package orientation",
      providerType: "Employer / company daycare orientation",
      citiesServed: ["Varies by employer locations"],
      featured: true,
      verificationNote:
        "Company daycare is not universal. Confirm eligibility in writing and still verify the partner location on LRK.",
    },
    {
      name: "Amsterdam & Amstelveen daycare cluster",
      slug: "amsterdam-amstelveen-daycare-cluster",
      city: "Amsterdam",
      region: "North Holland",
      summary:
        "City-cluster orientation for high-demand KDV and gastouder options in Amsterdam and Amstelveen with frequent waitlist pressure.",
      expatFocus:
        "Plan inquiries early and align housing with realistic drop-off and start dates.",
      languages: ["Dutch common", "Some English-friendly locations"],
      remoteSupport: true,
      inPersonAvailability: "Tours fill quickly in peak seasons.",
      website: "https://www.amsterdam.nl/en",
      engagementType: "City cluster discovery",
      providerType: "City cluster discovery",
      citiesServed: ["Amsterdam", "Amstelveen", "Nearby towns"],
      featured: true,
      verificationNote:
        "Demand is high — verify waitlists by age group and preferred days rather than assuming availability.",
    },
    {
      name: "The Hague daycare cluster",
      slug: "the-hague-daycare-cluster",
      city: "The Hague",
      region: "South Holland",
      summary:
        "City-cluster orientation for families comparing daycare near international corridors in The Hague and nearby towns.",
      expatFocus:
        "Useful when diplomacy, NGOs or international organisations drive a Hague-based relocation with young children.",
      languages: ["Dutch common", "Some English-friendly locations"],
      remoteSupport: true,
      inPersonAvailability: "Cluster tours across locations; commute planning matters.",
      website: "https://www.denhaag.nl/en",
      engagementType: "City cluster discovery",
      providerType: "City cluster discovery",
      citiesServed: ["The Hague", "Nearby towns"],
      featured: true,
      verificationNote:
        "Municipal and provider pages change — treat this as location orientation, not a ranked Hague daycare list.",
    },
    {
      name: "Government.nl childcare orientation",
      slug: "government-childcare-orientation",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Public orientation via Dutch government childcare topic pages for parents’ rights and system context.",
      expatFocus:
        "Helpful background when comparing provider types and understanding how registered childcare fits public policy.",
      languages: ["English site sections", "Dutch depth"],
      remoteSupport: true,
      inPersonAvailability: "Online orientation; providers handle local admissions.",
      website: "https://www.government.nl/topics/childcare",
      engagementType: "Public / system orientation",
      providerType: "Government / public orientation",
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote:
        "Official orientation is not placement advice — confirm places and fees with providers directly.",
    },
    {
      name: "GGD inspection context",
      slug: "ggd-inspection-orientation",
      city: "Municipal",
      region: "Netherlands",
      summary:
        "Municipal health services oversee childcare inspections — use reports as conversation starters with locations.",
      expatFocus:
        "Useful verification signal beside LRK registration — still interview the team that will care for your child.",
      languages: ["Dutch common"],
      remoteSupport: true,
      inPersonAvailability: "Online reports; local GGD sites vary.",
      website: "https://www.ggd.nl/",
      engagementType: "Inspection / quality orientation",
      providerType: "LRK / quality verification",
      citiesServed: ["Municipal coverage NL"],
      featured: false,
      verificationNote:
        "Inspection context is not a star ranking or guarantee of fit — ask each location how findings were addressed.",
    },
  ] satisfies DaycareProvider[],
  comparisonTable: [
    {
      advisor: "Kinderdagverblijf.nl search",
      citiesServed: "Netherlands-wide",
      expatFocus: "Location shortlists",
      languages: "Dutch site",
      onlineConsultations: "Online search + visits",
      advisorType: "Search directory orientation",
    },
    {
      advisor: "LRK register",
      citiesServed: "Netherlands-wide",
      expatFocus: "Registration check",
      languages: "Dutch interface",
      onlineConsultations: "Online verification",
      advisorType: "LRK / quality verification",
    },
    {
      advisor: "KDV centre orientation",
      citiesServed: "Major cities",
      expatFocus: "Centre-based care",
      languages: "Dutch + variable EN",
      onlineConsultations: "Centre tours",
      advisorType: "KDV / kinderdagverblijf discovery",
    },
    {
      advisor: "Gastouderbureau orientation",
      citiesServed: "Local nationwide",
      expatFocus: "Flexible / smaller care",
      languages: "Dutch + variable EN",
      onlineConsultations: "Matching process",
      advisorType: "Gastouderbureau orientation",
    },
    {
      advisor: "Employer daycare orientation",
      citiesServed: "Employer-dependent",
      expatFocus: "Package places",
      languages: "Partner-dependent",
      onlineConsultations: "HR + tours",
      advisorType: "Employer / company daycare orientation",
    },
    {
      advisor: "Amsterdam & Amstelveen cluster",
      citiesServed: "AMS / Amstelveen",
      expatFocus: "High demand",
      languages: "Dutch + some EN",
      onlineConsultations: "Tours",
      advisorType: "City cluster discovery",
    },
    {
      advisor: "The Hague cluster",
      citiesServed: "Hague area",
      expatFocus: "International corridors",
      languages: "Dutch + some EN",
      onlineConsultations: "Tours",
      advisorType: "City cluster discovery",
    },
    {
      advisor: "Government childcare pages",
      citiesServed: "Netherlands-wide",
      expatFocus: "System context",
      languages: "EN sections + Dutch",
      onlineConsultations: "Online",
      advisorType: "Government / public orientation",
    },
  ],
  questionsToAsk: [
    "Is this location currently registered in the LRK, and can you share the registration number?",
    "What is the realistic waitlist for our child’s age group and preferred days?",
    "What language is used in the group day-to-day, and how do you support new expat children?",
    "How does settling-in work, and how long should we plan for before full days?",
    "What are written fees, deposits, notice periods and holiday closures?",
    "How do illness, fever and allergy policies work in practice?",
    "Can you share recent GGD inspection context and how findings were addressed?",
    "How do drop-off and pick-up windows work if our commute runs late?",
  ],
  relatedEducationGuides: [
    {
      label: "Daycare (education guide)",
      href: DAYCARE_EDUCATION_PATH,
      status: "live",
      description: "How Dutch childcare works — system context owned by the education guide.",
    },
    {
      label: "After-school care (BSO)",
      href: AFTER_SCHOOL_CARE_PATH,
      status: "live",
      description: "Buitenschoolse opvang for primary school children — separate from under-4 daycare.",
    },
    {
      label: "Before-school care (VSO)",
      href: BEFORE_SCHOOL_CARE_PATH,
      status: "live",
      description: "Voorschoolse opvang — morning care before basisschool.",
    },
    {
      label: "Childcare allowance",
      href: CHILDCARE_ALLOWANCE_PATH,
      status: "live",
      description: "Kinderopvangtoeslag for registered childcare — verify eligibility separately.",
    },
    {
      label: "International schools (education)",
      href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "International schooling system context from primary age.",
    },
    {
      label: "Dutch schools",
      href: DUTCH_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "Basisschool pathways after early years.",
    },
  ] satisfies DaycareProvidersLink[],
  leadCta: {
    heading: "Need Help Shortlisting Daycare Providers?",
    body: "Use the directory to compare care types, city clusters and verification paths. Then visit shortlisted locations with the same checklist — and keep the education guide open for how Dutch childcare works.",
    primaryCta: { label: "Compare Providers", href: "#directory" },
    secondaryCta: { label: "Open Education Guide", href: DAYCARE_EDUCATION_PATH },
  },
  faqs: [
    {
      q: "How is this page different from the daycare education guide?",
      a: "This services directory helps you compare daycare providers — KDV, gastouderbureaus, commute fit, visit checklists and LRK verification. The education guide explains how Dutch childcare works, waiting lists and allowance orientation. Use both: system context there, provider comparison here.",
    },
    {
      q: "Do you rank the best daycares in the Netherlands?",
      a: "No. Listings are informational soft discovery only. Fit depends on care type, location, waitlists, language and your child’s needs. Always verify current details with providers.",
    },
    {
      q: "What is the difference between KDV and a gastouderbureau?",
      a: "A kinderdagverblijf (KDV) is centre-based care with fixed groups and location hours. A gastouderbureau matches families with registered childminders, often in a home setting with different flexibility. Both sit in the childcare framework — verify registration for your specific arrangement.",
    },
    {
      q: "What is LRK and why does it matter?",
      a: "The Landelijk Register Kinderopvang (LRK) is the national register for childcare providers. Checking registration and inspection context is a core verification step before you sign — it is not a star ranking.",
    },
    {
      q: "When should we start looking for a place?",
      a: "As early as your relocation timeline allows — often many months ahead in Amsterdam, The Hague and other high-demand areas. Ask about age group and preferred days explicitly.",
    },
    {
      q: "Where do BSO, VSO and international schools fit?",
      a: "BSO and VSO are school-age care — see the after- and before-school education guides. International schools are for school-age education; use the international schools education and services pages, not this daycare directory.",
    },
    {
      q: "How does childcare allowance relate to choosing a provider?",
      a: "Kinderopvangtoeslag depends on registered care and other rules. Shortlist providers here, then use the childcare allowance guide for eligibility orientation — do not assume every contract is automatically covered.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a daycare?",
      a: "No. Entries are discovery patterns and public orientation sources. Visit locations, verify LRK registration and decide for your family.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl — Childcare",
      href: "https://www.government.nl/topics/childcare",
      description: "Official Dutch government overview of childcare policy and parents’ rights.",
    },
    {
      label: "Rijksoverheid — Kinderopvang",
      href: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang",
      description: "Dutch-language official information on childcare rules and quality.",
    },
    {
      label: "LRK — Landelijk Register Kinderopvang",
      href: "https://www.lrk.net/",
      description: "Verify provider registration and read inspection context.",
    },
    {
      label: "GGD — Childcare inspections",
      href: "https://www.ggd.nl/",
      description: "Municipal health services overseeing childcare quality (site in Dutch).",
    },
    {
      label: "Belastingdienst — Allowances",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances",
      description: "Childcare allowance application and eligibility via toeslagen.",
    },
    {
      label: "Kinderdagverblijf.nl",
      href: "https://www.kinderdagverblijf.nl/",
      description: "Location-based search for kinderdagverblijven — soft discovery, not a ranking.",
    },
  ],
  relatedGuides: [
    {
      label: "Daycare (education)",
      href: DAYCARE_EDUCATION_PATH,
      status: "live",
      description: "System guide for how Dutch childcare works.",
    },
    {
      label: "After-school care (BSO)",
      href: AFTER_SCHOOL_CARE_PATH,
      status: "live",
      description: "School-age after-school care — separate from under-4 daycare.",
    },
    {
      label: "Before-school care (VSO)",
      href: BEFORE_SCHOOL_CARE_PATH,
      status: "live",
      description: "Morning care before basisschool.",
    },
    {
      label: "Childcare allowance",
      href: CHILDCARE_ALLOWANCE_PATH,
      status: "live",
      description: "Toeslag for registered childcare — verify eligibility separately.",
    },
    {
      label: "International schools (education)",
      href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "International schooling system context.",
    },
    {
      label: "Dutch schools",
      href: DUTCH_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "Basisschool pathways after early years.",
    },
    {
      label: "Moving with children",
      href: MOVING_WITH_KIDS_PATH,
      status: "live",
      description: "Family relocation sequencing beside daycare shortlists.",
    },
    {
      label: "Best cities for families",
      href: BEST_CITIES_FOR_FAMILIES_PATH,
      status: "live",
      description: "City orientation including childcare-access themes.",
    },
    {
      label: "Childcare cost estimator",
      href: CHILDCARE_COST_ESTIMATOR_PATH,
      status: "live",
      description: "Model gross fees and net cost after toeslag orientation.",
    },
    {
      label: "Health insurance",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Family health cover setup while you settle.",
    },
  ] satisfies DaycareProvidersLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "International schools", href: INTERNATIONAL_SCHOOLS_SERVICES_PATH, status: "live", description: "Compare international schools as a services directory." },
    { label: "Health insurance", href: HEALTH_INSURANCE_SERVICES_PATH, status: "live", description: "Zorgverzekering provider directory." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Rental agency discovery near daycare corridors." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Makelaar support when buying near childcare." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Relocation support for family moves." },
  ] satisfies DaycareProvidersLink[],
  exploreNextCards: [
    {
      label: "Education daycare guide",
      href: DAYCARE_EDUCATION_PATH,
      status: "live",
      description: "Read how Dutch childcare works after you shortlist providers.",
    },
    {
      label: "Childcare allowance",
      href: CHILDCARE_ALLOWANCE_PATH,
      status: "live",
      description: "Orientation for kinderopvangtoeslag beside provider contracts.",
    },
    {
      label: "International schools (services)",
      href: INTERNATIONAL_SCHOOLS_SERVICES_PATH,
      status: "live",
      description: "Compare school providers for older siblings.",
    },
    {
      label: "Housing hub",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Align housing with daycare commute and start dates.",
    },
    {
      label: "Best cities for families",
      href: BEST_CITIES_FOR_FAMILIES_PATH,
      status: "live",
      description: "City context for childcare access and family life.",
    },
    {
      label: "Cities guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Explore Amsterdam, The Hague, Rotterdam, Utrecht and more.",
    },
  ] satisfies DaycareProvidersLink[],
};
