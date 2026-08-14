import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — compare/find international schools as providers for expats. */
export const INTERNATIONAL_SCHOOLS_SERVICES_PATH = "/netherlands/services/international-schools/" as const;
export const INTERNATIONAL_SCHOOLS_SERVICES_NETHERLANDS_PATH = INTERNATIONAL_SCHOOLS_SERVICES_PATH;

/** Education system guide — owns how international schooling works in NL. */
export const INTERNATIONAL_SCHOOLS_EDUCATION_PATH =
  "/netherlands/education/international-schools-netherlands/" as const;
export const DUTCH_SCHOOLS_EDUCATION_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const DAYCARE_EDUCATION_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const DAYCARE_PROVIDERS_SERVICES_PATH = "/netherlands/services/daycare-providers/" as const;
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

export const INTERNATIONAL_SCHOOLS_AFFILIATE_PLACEMENT_ID =
  "nl-services-international-schools-support-providers" as const;

export type InternationalSchoolProvider = {
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
    | "IB curriculum orientation"
    | "British curriculum orientation"
    | "American curriculum orientation"
    | "European Schools orientation"
    | "City school cluster"
    | "Accreditation / association discovery"
    | "Government / Nuffic orientation"
    | "Bilingual / Dutch-track orientation";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type InternationalSchoolsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-international-schools";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const internationalSchoolsServicesPage = {
  slug: "international-schools",
  path: INTERNATIONAL_SCHOOLS_SERVICES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(INTERNATIONAL_SCHOOLS_SERVICES_PATH) ?? "2026-11-07",
  affiliatePlacementId: INTERNATIONAL_SCHOOLS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "International Schools in the Netherlands for Expats | Provider Directory",
    description:
      "Compare international schools as providers: curricula (IB, British, American, European), fee bands as orientation, admission timelines, city locations and visit checklists — soft discovery, not a ranking.",
    keywords: [
      "international schools netherlands",
      "international school fees netherlands",
      "IB schools netherlands",
      "British schools netherlands",
      "American school netherlands",
      "European school the hague",
      "international school admission netherlands",
      "expat schools amsterdam",
      "expat schools the hague",
      "compare international schools netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · International schools",
    pageTitle: "International Schools in the Netherlands for Expats",
    subtitle:
      "Compare international schools as providers — curricula, fee orientation, admission windows, city locations and visit checklists. This directory owns school-provider discovery. The education guide explains how international schooling works in the Netherlands.",
    primaryCta: { label: "Browse School Directory", href: "#directory" },
    secondaryCta: { label: "Not the same as…", href: "#differentiate" },
    chips: ["Curricula types", "Fee orientation", "Admission timing", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-international-schools-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an expat family visiting an international school campus in the Netherlands, reviewing curriculum and fee folders at a bright reception desk with bicycle-lined street and brick school architecture outside.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic introducing how to compare Dutch international schools as providers: curriculum fit, fee orientation, admission windows and location.",
      "Start with curriculum and city — then compare fee bands, waitlists and visit notes before you shortlist campuses."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating the international schools services directory from the education system guide, Dutch schools, daycare and daycare providers.",
      "Pick the right page first: this directory owns provider comparison; the education guide owns how international schooling works."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about choosing international schools in the Netherlands for expats.",
      "Use this snapshot before touring: curricula differ, fees are orientation-only, and waitlists can be long in popular cities."
    ),
    curricula: visual(
      "curricula",
      "Infographic comparing IB, British, American, European and bilingual tracks for international schools in the Netherlands.",
      "Match curriculum to relocation plans and university pathways — not to a generic “best school” label."
    ),
    fees: visual(
      "fees",
      "Infographic of international school fee orientation bands, extras and employer contribution questions for expat families.",
      "Fee figures change yearly — treat bands as planning orientation and confirm live quotes with each school."
    ),
    admission: visual(
      "admission",
      "Infographic timeline of international school admission steps: inquiry, documents, assessment, offer and deposit.",
      "Start early — popular campuses fill by age group and year, especially for mid-year arrivals."
    ),
    locations: visual(
      "locations",
      "Infographic city map of international school clusters across The Hague, Amsterdam, Rotterdam, Utrecht and regional hubs.",
      "School choice and housing choice are linked — map commute and catchment before you sign a lease."
    ),
    visitChecklist: visual(
      "visit-checklist",
      "Infographic visit checklist for international school open days: questions on class size, language support, SEN and after-school care.",
      "A structured visit beats marketing brochures — bring the same questions to every campus."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges when choosing international schools: waitlists, fee surprises, curriculum switches and housing timing.",
      "Plan for waitlists and fee extras early — and keep Dutch schools and daycare on their own pages when those paths fit better."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral international-school directory workflow: shortlist by curriculum, compare cities, verify accreditation and visit.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparison: visual(
      "comparison-matrix",
      "Infographic comparison matrix for international school provider types: curriculum focus, cities, languages and expat support.",
      "Compare discovery patterns by fit and transparency before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask international schools before applying or paying a deposit.",
      "Good questions reveal waitlists, fee extras, language support, SEN pathways and mid-year entry reality."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common international-school FAQ topics: vs Dutch schools, fees, IB vs British, waitlists and verification.",
      "FAQ answers should help you pick the next verification step — not replace school admissions advice."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist international schools: define curriculum, map cities, check fees and schedule visits.",
      "Turn school discovery into a structured shortlist before you pay deposits."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for international school orientation: IBO, European Schools, Nuffic, CIS and Dutch government education pages.",
      "Verify programme authorisation and public information with official sources — not marketing alone."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing schools: education guide, Dutch schools, daycare, childcare allowance and family cities.",
      "Continue from provider discovery into system guides, Dutch tracks and family housing choices."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around school decisions: international schools directory, daycare providers, health insurance, housing and relocation.",
      "School choice sits beside housing, daycare and family health setup."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting international-school research to education guides, daycare providers, housing and Dutch cities for families.",
      "School shortlists connect naturally into housing, childcare and city choice."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#curricula", label: "Curricula" },
    { href: "#fees", label: "Fees" },
    { href: "#admission", label: "Admission" },
    { href: "#locations", label: "Locations" },
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
    heading: "Why Expats Compare International Schools as Providers",
    paragraphs: [
      "International schools in the Netherlands are service providers with different curricula, fee structures, admission calendars and campus locations. Families usually shortlist by curriculum fit, commute and start date — not by a single “best school” label.",
      "This page is a services directory for comparing schools as providers: fee orientation, IB / British / American / European tracks, admission timing, city clusters and visit checklists. It owns school-provider discovery. The education guide at International schools (education) owns how the system works.",
      "Inclusion here is informational soft discovery, not a ranking. No directory can guarantee places, fees or outcomes. Confirm current fees, waitlists, language of instruction and admission requirements directly with each school before you apply or pay a deposit.",
    ],
    links: [
      { label: "Education guide (how it works)", href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH },
      { label: "Dutch schools", href: DUTCH_SCHOOLS_EDUCATION_PATH },
      { label: "Daycare guide", href: DAYCARE_EDUCATION_PATH },
      { label: "Daycare providers", href: DAYCARE_PROVIDERS_SERVICES_PATH },
      { label: "Best cities for families", href: BEST_CITIES_FOR_FAMILIES_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "International schools directory (this page)",
      body: "Compare schools as providers — curricula, fee orientation, admission windows, locations and visit checklists.",
      href: INTERNATIONAL_SCHOOLS_SERVICES_PATH,
      status: "live" as const,
    },
    {
      title: "International schools education guide",
      body: "How international schooling works in the Netherlands — system context, pathways and planning orientation.",
      href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH,
      status: "live" as const,
    },
    {
      title: "Dutch schools guide",
      body: "Basisschool and secondary Dutch-medium pathways, enrolment and language support for expat families.",
      href: DUTCH_SCHOOLS_EDUCATION_PATH,
      status: "live" as const,
    },
    {
      title: "Daycare providers directory",
      body: "Compare daycare / childcare providers as a services directory — separate from school-age international campuses.",
      href: DAYCARE_PROVIDERS_SERVICES_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "This page owns", value: "Provider compare", note: "Curricula, fee bands, admission timing, cities and visit checklists." },
    { label: "Education guide owns", value: "How it works", note: "System context for international schooling in the Netherlands." },
    { label: "Common curricula", value: "IB · British · US", note: "Plus European Schools and bilingual tracks — match to your next move." },
    { label: "Fees", value: "Orientation only", note: "Bands help planning; live quotes and extras come from each school." },
    { label: "Hotspots", value: "Hague · AMS", note: "The Hague and Amsterdam have dense clusters; regional cities may have fewer options." },
    { label: "Guarantee", value: "None", note: "No directory ranks schools or guarantees places, fees or outcomes." },
  ],
  curriculumCards: [
    {
      title: "IB (International Baccalaureate)",
      body: "PYP / MYP / DP pathways with broad subject mix and wide university recognition — verify authorisation on IBO resources.",
    },
    {
      title: "British curriculum",
      body: "Often IGCSE then A-Levels — stronger early specialisation; useful if UK university pathways matter.",
    },
    {
      title: "American curriculum",
      body: "US-style grade progression, sometimes with AP options — useful for continuity with US systems and colleges.",
    },
    {
      title: "European Schools",
      body: "Multilingual European Baccalaureate pathways with specific eligibility rules — confirm status and sections officially.",
    },
    {
      title: "Bilingual / Dutch-track options",
      body: "Dutch-medium or bilingual programmes that may suit longer stays — compare with the Dutch schools education guide.",
    },
    {
      title: "Accreditation signals",
      body: "IB authorisation, CIS membership and national inspection context are verification tools — not marketing awards.",
    },
  ],
  feeOrientation: [
    {
      band: "Primary (orientation)",
      whatItUsuallyCovers: "Tuition for early years / primary; confirm what is included vs billed separately.",
      planningNote: "Treat published ranges as planning orientation — ask for the current fee schedule in writing.",
    },
    {
      band: "Secondary (orientation)",
      whatItUsuallyCovers: "Middle / high school tuition; exam fees and trips often extra.",
      planningNote: "Secondary packages can jump at exam years — ask about IGCSE / DP / AP extras.",
    },
    {
      band: "Common extras",
      whatItUsuallyCovers: "Registration, capital / development fees, lunch, transport, after-school care, trips.",
      planningNote: "Ask for a first-year total cost estimate, not tuition alone.",
    },
    {
      band: "Employer support",
      whatItUsuallyCovers: "Some packages reimburse tuition partly or fully — policies vary by employer.",
      planningNote: "Clarify caps, eligible schools and reimbursement timing before you accept an offer.",
    },
  ],
  admissionTimeline: [
    {
      step: "1. Inquiry & shortlist",
      timing: "3–12+ months ahead when possible",
      detail: "Shortlist by curriculum and city; request open days and waitlist reality by age group.",
    },
    {
      step: "2. Documents",
      timing: "Before assessment",
      detail: "Passports, prior reports, transcripts, vaccination records and language of previous schooling.",
    },
    {
      step: "3. Assessment / interview",
      timing: "School-specific",
      detail: "Some campuses assess English, maths or year-group fit — ask what a mid-year entry looks like.",
    },
    {
      step: "4. Offer & deposit",
      timing: "After places confirmed",
      detail: "Read fee schedule, notice periods and sibling policies before paying a deposit.",
    },
    {
      step: "5. Housing alignment",
      timing: "Parallel track",
      detail: "Align lease or purchase with commute and start date — use housing soft links below.",
    },
  ],
  locationClusters: [
    {
      city: "The Hague / Wassenaar corridor",
      body: "Dense international-school cluster often linked to diplomacy and international organisations — commute planning matters.",
    },
    {
      city: "Amsterdam & Amstelveen",
      body: "Multiple curricula and strong demand — waitlists and housing competition are common planning constraints.",
    },
    {
      city: "Rotterdam / Delft",
      body: "Growing options for harbour and technical-sector families — verify age coverage and transport.",
    },
    {
      city: "Utrecht & region",
      body: "Fewer campuses than the Randstad west — confirm year groups before accepting a regional role.",
    },
    {
      city: "Eindhoven & south",
      body: "Tech-corridor families often need early inquiry — map curriculum continuity for secondary years.",
    },
    {
      city: "Regional single-campus cities",
      body: "One IB or bilingual campus may be the only nearby option — verify before relocating outside major hubs.",
    },
  ],
  visitChecklist: [
    {
      item: "Curriculum continuity",
      why: "Confirm which programmes are authorised for your child’s age and next destination country.",
    },
    {
      item: "Class size & pastoral support",
      why: "Ask how new arrivals are supported in the first term.",
    },
    {
      item: "Language of instruction & EAL",
      why: "Marketing English is not the same as classroom support for non-native speakers.",
    },
    {
      item: "SEN / learning support",
      why: "Clarify assessment pathways, capacity and extra fees early.",
    },
    {
      item: "After-school care & transport",
      why: "BSO / clubs and bus routes affect housing and work schedules.",
    },
    {
      item: "Fee extras & notice rules",
      why: "Ask for a written first-year cost estimate and withdrawal terms.",
    },
  ],
  challengeCards: [
    {
      title: "Waitlists in popular cities",
      body: "Amsterdam and The Hague places can fill early — inquire by age group, not only by campus brand.",
    },
    {
      title: "Tuition vs total cost",
      body: "Registration, capital fees, lunch, buses and trips add up — request a full-year estimate.",
    },
    {
      title: "Curriculum switches mid-move",
      body: "IB to British (or reverse) can need credit mapping — bring full transcripts.",
    },
    {
      title: "Housing before school offer",
      body: "Signing a distant lease before a place is confirmed can create commute stress — sequence carefully.",
    },
    {
      title: "Dutch track confusion",
      body: "Some families do better in Dutch or bilingual schools — use the Dutch schools guide for that path.",
    },
    {
      title: "Daycare vs school age",
      body: "Under-4 care sits on daycare pages — do not treat school directories as kinderopvang shopping.",
    },
    {
      title: "Employer package limits",
      body: "Reimbursement caps and eligible school lists vary — clarify before you shortlist luxury fee bands.",
    },
    {
      title: "Directory = ranking myth",
      body: "Soft discovery lists are not endorsements. Visit, verify and decide for your child.",
    },
  ],
  providers: [
    {
      name: "IB World Schools discovery",
      slug: "ib-world-schools-discovery",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Orientation path for finding IB-authorised programmes (PYP / MYP / DP) via official IB school-search resources.",
      expatFocus:
        "Best starting point when you need curriculum continuity across countries and university recognition orientation.",
      languages: ["English", "Programme languages vary by campus"],
      remoteSupport: true,
      inPersonAvailability: "Campus visits by appointment; authorisation is verified online.",
      website: "https://www.ibo.org/",
      engagementType: "Curriculum / school-search orientation",
      providerType: "IB curriculum orientation",
      citiesServed: ["Amsterdam", "The Hague", "Rotterdam", "Utrecht", "Eindhoven", "Other cities"],
      featured: true,
      verificationNote:
        "Use official IB find-a-school tools to verify current authorisation — this row explains the discovery path, not a single campus endorsement.",
    },
    {
      name: "British curriculum school orientation",
      slug: "british-curriculum-orientation",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Discovery pattern for campuses offering IGCSE / A-Level style British pathways popular with internationally mobile families.",
      expatFocus:
        "Useful when UK university specialisation or British year-group continuity matters more than IB breadth.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Open days and tours vary by campus.",
      website: "https://www.government.nl/topics/secondary-education",
      engagementType: "Curriculum orientation",
      providerType: "British curriculum orientation",
      citiesServed: ["Amsterdam", "The Hague", "Rotterdam", "Other cities"],
      featured: true,
      verificationNote:
        "Confirm exam boards, year-group entry and fee schedules on each school’s site — this is not a ranked British-school list.",
    },
    {
      name: "American curriculum school orientation",
      slug: "american-curriculum-orientation",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Orientation for US-style grade pathways and campuses that market American curriculum continuity, sometimes with AP options.",
      expatFocus:
        "Helpful for families rotating through US systems who want grade continuity and college-prep familiarity.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Campus tours by appointment.",
      website: "https://www.cois.org/",
      engagementType: "Curriculum orientation",
      providerType: "American curriculum orientation",
      citiesServed: ["Amsterdam", "The Hague", "Other cities"],
      featured: true,
      verificationNote:
        "Verify current programme details and accreditation claims directly with each campus and association directories.",
    },
    {
      name: "European Schools orientation",
      slug: "european-schools-orientation",
      city: "The Hague / NL campuses",
      region: "Netherlands",
      summary:
        "Official European Schools system orientation for multilingual European Baccalaureate pathways and eligibility rules.",
      expatFocus:
        "Relevant when EU institution or category-based eligibility applies — not a general private-school shopping list.",
      languages: ["Multiple language sections"],
      remoteSupport: true,
      inPersonAvailability: "Admissions follow European Schools procedures.",
      website: "https://www.eursc.eu/",
      engagementType: "Official system orientation",
      providerType: "European Schools orientation",
      citiesServed: ["The Hague area", "Confirm current NL campuses"],
      featured: true,
      verificationNote:
        "Eligibility and language sections are rule-based — verify on official European Schools sources before assuming a place.",
    },
    {
      name: "The Hague international school cluster",
      slug: "the-hague-school-cluster",
      city: "The Hague",
      region: "South Holland",
      summary:
        "City-cluster orientation for families comparing multiple international campuses along The Hague / Wassenaar corridor.",
      expatFocus:
        "Useful when diplomacy, NGOs or international organisations drive a Hague-based relocation.",
      languages: ["English", "Other campus languages"],
      remoteSupport: true,
      inPersonAvailability: "Cluster tours across campuses; housing near commute corridors matters.",
      website: "https://www.denhaag.nl/en",
      engagementType: "City cluster discovery",
      providerType: "City school cluster",
      citiesServed: ["The Hague", "Wassenaar", "Nearby towns"],
      featured: true,
      verificationNote:
        "Municipal pages and school sites change — treat this as location orientation, not a ranked Hague school list.",
    },
    {
      name: "Amsterdam & Amstelveen school cluster",
      slug: "amsterdam-amstelveen-school-cluster",
      city: "Amsterdam",
      region: "North Holland",
      summary:
        "City-cluster orientation for high-demand international campuses in Amsterdam and Amstelveen with frequent waitlist pressure.",
      expatFocus:
        "Plan inquiries early and align housing with realistic commute and start dates.",
      languages: ["English", "Other campus languages"],
      remoteSupport: true,
      inPersonAvailability: "Open days fill quickly in peak seasons.",
      website: "https://www.amsterdam.nl/en",
      engagementType: "City cluster discovery",
      providerType: "City school cluster",
      citiesServed: ["Amsterdam", "Amstelveen", "Nearby towns"],
      featured: true,
      verificationNote:
        "Demand is high — verify waitlists by year group on each campus rather than assuming availability.",
    },
    {
      name: "Council of International Schools (CIS) discovery",
      slug: "cis-membership-discovery",
      city: "International",
      region: "Netherlands + global",
      summary:
        "Association discovery path for membership and accreditation context used by many international schools worldwide.",
      expatFocus:
        "Useful verification signal beside IB authorisation — still interview the campus that will teach your child.",
      languages: ["English"],
      remoteSupport: true,
      inPersonAvailability: "Online membership directories; local campuses vary.",
      website: "https://www.cois.org/",
      engagementType: "Accreditation / association orientation",
      providerType: "Accreditation / association discovery",
      citiesServed: ["Netherlands-wide member schools"],
      featured: false,
      verificationNote:
        "Membership is not a ranking or guarantee of fit — confirm current status on CIS and school sites.",
    },
    {
      name: "Nuffic & government education orientation",
      slug: "nuffic-government-education-orientation",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Public orientation via Nuffic and Dutch government education topic pages for international education context.",
      expatFocus:
        "Helpful background when comparing international tracks with Dutch system pathways and credential recognition themes.",
      languages: ["Dutch", "English site sections"],
      remoteSupport: true,
      inPersonAvailability: "Online orientation; schools handle local admissions.",
      website: "https://www.nuffic.nl/en",
      engagementType: "Public / system orientation",
      providerType: "Government / Nuffic orientation",
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote:
        "Official orientation is not school admissions advice — confirm places and fees with campuses directly.",
    },
    {
      name: "Bilingual / Dutch-track orientation",
      slug: "bilingual-dutch-track-orientation",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Discovery pattern for families weighing bilingual or Dutch-medium options alongside fully international campuses.",
      expatFocus:
        "Often relevant for longer stays, budget constraints or integration goals — pair with the Dutch schools education guide.",
      languages: ["Dutch", "English support varies"],
      remoteSupport: true,
      inPersonAvailability: "Local school intake calendars apply.",
      website: "https://www.government.nl/topics/secondary-education",
      engagementType: "Pathway orientation",
      providerType: "Bilingual / Dutch-track orientation",
      citiesServed: ["Netherlands-wide local options"],
      featured: false,
      verificationNote:
        "Dutch enrolment rules differ from private international admissions — use the Dutch schools guide for system detail.",
    },
  ] satisfies InternationalSchoolProvider[],
  comparisonTable: [
    {
      advisor: "IB World Schools discovery",
      citiesServed: "Netherlands-wide",
      expatFocus: "Global continuity",
      languages: "English + campus languages",
      onlineConsultations: "Online search + visits",
      advisorType: "IB curriculum orientation",
    },
    {
      advisor: "British curriculum orientation",
      citiesServed: "Major cities",
      expatFocus: "IGCSE / A-Level path",
      languages: "English",
      onlineConsultations: "Campus tours",
      advisorType: "British curriculum orientation",
    },
    {
      advisor: "American curriculum orientation",
      citiesServed: "Major cities",
      expatFocus: "US grade continuity",
      languages: "English",
      onlineConsultations: "Campus tours",
      advisorType: "American curriculum orientation",
    },
    {
      advisor: "European Schools orientation",
      citiesServed: "Hague area focus",
      expatFocus: "Eligibility-based",
      languages: "Multi-section",
      onlineConsultations: "Official procedures",
      advisorType: "European Schools orientation",
    },
    {
      advisor: "The Hague school cluster",
      citiesServed: "Hague / Wassenaar",
      expatFocus: "Dense campus choice",
      languages: "English + others",
      onlineConsultations: "Open days",
      advisorType: "City school cluster",
    },
    {
      advisor: "Amsterdam & Amstelveen cluster",
      citiesServed: "AMS / Amstelveen",
      expatFocus: "High demand",
      languages: "English + others",
      onlineConsultations: "Open days",
      advisorType: "City school cluster",
    },
    {
      advisor: "CIS discovery",
      citiesServed: "Member schools NL",
      expatFocus: "Accreditation signal",
      languages: "English",
      onlineConsultations: "Online directory",
      advisorType: "Accreditation / association discovery",
    },
    {
      advisor: "Nuffic / government orientation",
      citiesServed: "Netherlands-wide",
      expatFocus: "System context",
      languages: "Dutch, English site",
      onlineConsultations: "Online",
      advisorType: "Government / Nuffic orientation",
    },
  ],
  questionsToAsk: [
    "Which curriculum programmes are currently authorised for my child’s age group?",
    "What is the realistic waitlist situation for our target start date and year group?",
    "Can you share a written first-year total cost estimate including extras?",
    "How do you support new arrivals and English-language learners in the first term?",
    "What SEN / learning-support capacity and fees apply if we need assessments?",
    "How do mid-year transfers and prior transcripts map into your year groups?",
    "What after-school care and transport options exist, and how are they billed?",
    "What notice period and deposit rules apply if our relocation timing changes?",
  ],
  relatedEducationGuides: [
    {
      label: "International schools (education guide)",
      href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "How international schooling works in the Netherlands — system context owned by the education guide.",
    },
    {
      label: "Dutch schools",
      href: DUTCH_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "Basisschool, secondary pathways, enrolment and language support.",
    },
    {
      label: "Daycare",
      href: DAYCARE_EDUCATION_PATH,
      status: "live",
      description: "Early childhood care before school age.",
    },
    {
      label: "Daycare providers",
      href: DAYCARE_PROVIDERS_SERVICES_PATH,
      status: "live",
      description: "Services directory for comparing daycare providers.",
    },
    {
      label: "Childcare allowance",
      href: CHILDCARE_ALLOWANCE_PATH,
      status: "live",
      description: "Kinderopvangtoeslag for registered childcare — separate from school fees.",
    },
  ] satisfies InternationalSchoolsLink[],
  leadCta: {
    heading: "Need Help Shortlisting International Schools?",
    body: "Use the directory to compare curriculum types, city clusters and verification paths. Then visit shortlisted campuses with the same checklist — and keep the education guide open for how the system works.",
    primaryCta: { label: "Compare Schools", href: "#directory" },
    secondaryCta: { label: "Open Education Guide", href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH },
  },
  faqs: [
    {
      q: "How is this page different from the international schools education guide?",
      a: "This services directory helps you compare schools as providers — curricula, fee orientation, admission timing, locations and visit checklists. The education guide explains how international schooling works in the Netherlands. Use both: system context there, provider comparison here.",
    },
    {
      q: "Do you rank the best international schools in the Netherlands?",
      a: "No. Listings are informational soft discovery only. Fit depends on curriculum, location, waitlists, budget and your child’s needs. Always verify current details with schools.",
    },
    {
      q: "What curricula are common for expats?",
      a: "IB, British (often IGCSE/A-Levels), American pathways and European Schools programmes are common starting points. Some families also consider bilingual or Dutch tracks for longer stays.",
    },
    {
      q: "How should we think about fees?",
      a: "Use fee bands only as planning orientation. Ask each school for a written first-year total including registration, capital fees, lunch, transport and trips. Employer packages vary.",
    },
    {
      q: "When should we start applications?",
      a: "As early as your relocation timeline allows — often many months ahead for popular cities and year groups. Mid-year arrivals should ask about assessment and remaining capacity explicitly.",
    },
    {
      q: "Should we choose international or Dutch schools?",
      a: "It depends on stay length, language goals, budget and continuity needs. Use this directory for international provider comparison and the Dutch schools education guide for Dutch-medium pathways.",
    },
    {
      q: "Where do daycare and childcare allowance fit?",
      a: "Under-school-age care belongs on daycare education and daycare providers pages. Childcare allowance (kinderopvangtoeslag) is separate from international school tuition — see the childcare allowance guide.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends a school?",
      a: "No. Entries are discovery patterns and public orientation sources. Visit campuses, verify authorisation and decide for your family.",
    },
  ],
  officialSources: [
    {
      label: "IBO — International Baccalaureate",
      href: "https://www.ibo.org/",
      description: "Find IB World Schools and verify programme authorisation.",
    },
    {
      label: "European Schools",
      href: "https://www.eursc.eu/",
      description: "Official European Schools system information and admissions context.",
    },
    {
      label: "Council of International Schools",
      href: "https://www.cois.org/",
      description: "International school membership and accreditation context.",
    },
    {
      label: "Nuffic",
      href: "https://www.nuffic.nl/en",
      description: "Dutch organisation for international education and credential recognition orientation.",
    },
    {
      label: "Government.nl — Education",
      href: "https://www.government.nl/topics/secondary-education",
      description: "Official Dutch government information on education policy and school types.",
    },
    {
      label: "Ministry of Education, Culture and Science",
      href: "https://www.government.nl/ministries/ministry-of-education-culture-and-science",
      description: "Dutch ministry responsible for education framework and policy.",
    },
  ],
  relatedGuides: [
    {
      label: "International schools (education)",
      href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "System guide for how international schooling works in NL.",
    },
    {
      label: "Dutch schools",
      href: DUTCH_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "Dutch-medium basisschool and secondary pathways.",
    },
    {
      label: "Daycare",
      href: DAYCARE_EDUCATION_PATH,
      status: "live",
      description: "Early childhood care before school age.",
    },
    {
      label: "Childcare allowance",
      href: CHILDCARE_ALLOWANCE_PATH,
      status: "live",
      description: "Toeslag for registered childcare — not school tuition.",
    },
    {
      label: "Moving with children",
      href: MOVING_WITH_KIDS_PATH,
      status: "live",
      description: "Family relocation sequencing beside school shortlists.",
    },
    {
      label: "Best cities for families",
      href: BEST_CITIES_FOR_FAMILIES_PATH,
      status: "live",
      description: "City orientation including school-access themes.",
    },
    {
      label: "Housing hub",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Rent or buy near shortlisted campuses.",
    },
    {
      label: "Health insurance",
      href: HEALTH_INSURANCE_SERVICES_PATH,
      status: "live",
      description: "Family health cover setup while you settle.",
    },
  ] satisfies InternationalSchoolsLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Daycare providers", href: DAYCARE_PROVIDERS_SERVICES_PATH, status: "live", description: "Compare daycare providers as a services directory." },
    { label: "Health insurance", href: HEALTH_INSURANCE_SERVICES_PATH, status: "live", description: "Zorgverzekering provider directory." },
    { label: "Rental agencies", href: RENTAL_AGENCIES_PATH, status: "live", description: "Rental agency discovery near school corridors." },
    { label: "Estate agents", href: ESTATE_AGENTS_PATH, status: "live", description: "Makelaar support when buying near campuses." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Relocation support for family moves." },
  ] satisfies InternationalSchoolsLink[],
  exploreNextCards: [
    {
      label: "Education guide",
      href: INTERNATIONAL_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "Read how international schooling works after you shortlist providers.",
    },
    {
      label: "Dutch schools",
      href: DUTCH_SCHOOLS_EDUCATION_PATH,
      status: "live",
      description: "Compare Dutch-medium options if your stay is longer.",
    },
    {
      label: "Daycare providers",
      href: DAYCARE_PROVIDERS_SERVICES_PATH,
      status: "live",
      description: "Find childcare providers for younger siblings.",
    },
    {
      label: "Housing hub",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Align housing with school commute and start dates.",
    },
    {
      label: "Best cities for families",
      href: BEST_CITIES_FOR_FAMILIES_PATH,
      status: "live",
      description: "City context for school access and family life.",
    },
    {
      label: "Cities guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Explore Amsterdam, The Hague, Rotterdam, Utrecht and more.",
    },
  ] satisfies InternationalSchoolsLink[],
};
