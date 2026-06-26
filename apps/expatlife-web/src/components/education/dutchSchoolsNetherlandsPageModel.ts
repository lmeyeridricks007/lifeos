export const DUTCH_SCHOOLS_NETHERLANDS_PATH =
  "/netherlands/education/dutch-schools-netherlands/" as const;
export const INTERNATIONAL_SCHOOLS_PATH =
  "/netherlands/education/international-schools-netherlands/" as const;
export const EDUCATION_HUB_PATH = "/netherlands/education/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const MOVING_WITH_FAMILY_PATH = "/netherlands/moving-to-netherlands-with-family/" as const;
export const BEST_CITIES_FOR_FAMILIES_PATH = "/netherlands/cities/best-cities-for-families/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const LEARNING_DUTCH_PATH = "/netherlands/living/language/" as const;

export type DutchSchoolsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type DutchSchoolsCard = {
  title: string;
  body: string;
};

export type DutchSchoolsComparisonRow = {
  factor: string;
  detail: string;
  planningNote: string;
};

export type DutchSchoolsFeeRow = {
  category: string;
  publicSchool: string;
  specialSchool: string;
  notes: string;
};

export type DutchSchoolsTimelineRow = {
  stage: string;
  timing: string;
  action: string;
};

export type DutchSchoolsCityCard = {
  city: string;
  href: string;
  schoolLandscape: string;
  newcomerSupport: string;
  placementNotes: string;
  typicalExtras: string;
  pathways: string;
};

export type DutchSchoolsPathwayCard = {
  title: string;
  ages: string;
  duration: string;
  outcome: string;
  whoItSuits: string;
};

export type DutchSchoolsDecisionRow = {
  factor: string;
  question: string;
  example: string;
};

export type DutchSchoolsScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type DutchSchoolsHowToStep = {
  name: string;
  text: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-dutch-schools-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dutchSchoolsNetherlandsPage = {
  slug: "dutch-schools-netherlands",
  path: DUTCH_SCHOOLS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-06-26",
  seo: {
    title: "Dutch Schools in the Netherlands | Expat Family Guide",
    description:
      "How Dutch public and special schools work for expat families — basisschool, VMBO/HAVO/VWO pathways, enrolment, language support, costs and choosing between Dutch and international education.",
    keywords: [
      "dutch schools netherlands",
      "public schools netherlands expats",
      "basisschool netherlands",
      "dutch education expats",
      "enrol child dutch school",
      "VMBO HAVO VWO",
      "dutch school system expats",
      "NT2 support schools netherlands",
      "bijzonder onderwijs",
      "dutch vs international schools",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Education · Dutch schools",
    pageTitle: "Dutch Schools in the Netherlands",
    subtitle:
      "A practical guide for expat families to Dutch public and special schools — pathways, enrolment, language support, costs and how Dutch schools compare with international options.",
    primaryCta: { label: "See the education pathway", href: "#system-overview" },
    secondaryCta: { label: "Compare international schools", href: INTERNATIONAL_SCHOOLS_PATH },
    chips: ["Basisschool & VO", "Enrolment steps", "Language support", "Public vs special"],
    image: {
      src: "/images/heroes/netherlands-dutch-schools-netherlands-hero-v1.png",
      alt: "Photorealistic editorial photo of a bright modern Dutch basisschool classroom where an engaged teacher works with multicultural primary-age children at a round table, colorful learning materials on display, large windows showing red brick buildings and bicycles outside — warm, inclusive learning environment.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic overview of Dutch schools for expat families with education stages, gemeente enrolment steps and a family planning checklist rail.",
      "Start here: understand the Dutch pathway, register with your municipality and plan language support early."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance cards for basisschool, voortgezet onderwijs, public, bijzonder, NT2 and pathway labels with example ages.",
      "Use these cards to orient yourself before comparing cities and school types below."
    ),
    systemOverview: visual(
      "system-overview",
      "Premium Dutch education pathway diagram from age 4 through basisschool groups 1–8 to VMBO, HAVO and VWO secondary tracks.",
      "The Dutch system splits at secondary level — placement advice from basisschool matters."
    ),
    primary: visual(
      "primary",
      "Premium basisschool scene with groups 1–8 age bands, Cito test context and typical school day labels in Dutch primary context.",
      "Primary school is free at public schools — groups and age placement may differ from your home country."
    ),
    secondary: visual(
      "secondary",
      "Premium voortgezet onderwijs pathway board showing VMBO, HAVO and VWO tracks with example ages, durations and diploma outcomes.",
      "Secondary track choice affects university access — ask about advies and brugklas options."
    ),
    publicVsSpecial: visual(
      "public-vs-special",
      "Premium comparison board for openbare (public) vs bijzonder (special) Dutch schools on funding, ethos, admissions and parental contribution.",
      "Both are largely government-funded — special schools may have a religious or pedagogical profile and sometimes a small contribution."
    ),
    bilingual: visual(
      "bilingual",
      "Premium bilingual and dual-language route map showing English-Dutch tracks, taal routes and where bilingual options cluster in Dutch cities.",
      "Full bilingual tracks are limited — verify language split per year group at each school."
    ),
    languageSupport: visual(
      "language-support",
      "Premium NT2 and newcomer language support flow for non-Dutch-speaking children entering basisschool or VO with intake, klas and transition steps.",
      "Municipal taalschool or NT2 classes may apply — start gemeente registration early."
    ),
    enrolment: visual(
      "enrolment",
      "Premium Dutch school enrolment timeline from BSN and address registration through gemeente placement, school choice and first day checklist.",
      "Rules vary by gemeente — confirm deadlines and priority criteria with your municipality."
    ),
    costs: visual(
      "costs",
      "Premium Dutch school cost breakdown showing tuition-free public education, optional bijdrage, lunch, trips, materials and after-school opvang ranges.",
      "Public schools are free at point of use — budget for extras, not tuition."
    ),
    choosing: visual(
      "choosing",
      "Premium decision matrix for choosing a Dutch school comparing language readiness, length of stay, location, ethos and secondary pathways.",
      "There is no single best school — match school type and support to your family timeline."
    ),
    quality: visual(
      "quality",
      "Premium Onderwijsinspectie school quality guide showing inspection reports, leerlingenkenmerken and what parents can check on Schoolwijzer.",
      "Use official inspection data — not informal rankings — when comparing schools."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city comparison cards for Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven showing newcomer programmes, NT2 availability and placement context.",
      "City choice affects NT2 capacity and commute — compare before signing a lease."
    ),
    dutchVsInternational: visual(
      "dutch-vs-international",
      "Premium side-by-side table infographic comparing Dutch public schools with international schools on language, cost, admissions and integration.",
      "Many families keep both options open until language support and placement are clearer."
    ),
    midYear: visual(
      "mid-year",
      "Premium mid-year transfer flow for Dutch schools showing gemeente contact, NT2 intake, report cards and realistic placement windows.",
      "Mid-year places exist but depend on cohort capacity and language support availability."
    ),
    sen: visual(
      "sen",
      "Premium passend onderwijs overview for special educational needs in Dutch schools with samenwerkingsverband, support levels and planning checklist.",
      "Support is organised regionally — disclose needs early during enrolment."
    ),
    checklist: visual(
      "checklist",
      "Premium expat family Dutch school planning checklist with BSN, gemeente, language assessment, visits and document steps.",
      "Work through this list as soon as your address and BSN are confirmed."
    ),
    mistakes: visual(
      "mistakes",
      "Premium common mistakes board for Dutch school planning covering late gemeente registration, language underestimation and housing-school mismatch.",
      "Avoid assuming international-school timelines apply to Dutch municipal placement."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight Dutch school questions and short orientation answers for expat parents.",
      "FAQ answers orient you — confirm gemeente and school-specific rules directly."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route map linking Dutch schools to international schools, moving with children, housing and language guides.",
      "School choice connects to housing, integration and family relocation planning."
    ),
    educationHub: visual(
      "education-hub",
      "Premium education hub visual with cards for Dutch schools, international schools, daycare, universities and learning Dutch.",
      "This page is the Dutch schools cornerstone — explore related education guides next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with next-step family, housing and city guides for parents choosing Dutch education.",
      "Pick your next guide based on whether you are integrating locally or comparing international options."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#system-overview", label: "Pathway" },
    { href: "#primary", label: "Primary" },
    { href: "#secondary", label: "Secondary" },
    { href: "#public-vs-special", label: "Public vs special" },
    { href: "#bilingual", label: "Bilingual" },
    { href: "#language-support", label: "Language" },
    { href: "#enrolment", label: "Enrolment" },
    { href: "#costs", label: "Costs" },
    { href: "#choosing", label: "Choosing" },
    { href: "#quality", label: "Quality" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#dutch-vs-international", label: "Dutch vs intl" },
    { href: "#mid-year", label: "Mid-year" },
    { href: "#sen", label: "SEN" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#education-hub", label: "Education hub" },
    { href: "#explore-next", label: "Explore next" },
  ],
  quickAnswer: {
    heading: "Quick answer: Dutch schools for expat families",
    paragraphs: [
      "Dutch schools (basisschool and voortgezet onderwijs) are the default route for children living in the Netherlands. Public (openbare) and special (bijzonder) schools are largely government-funded and free at the point of use, with instruction in Dutch.",
      "Expat families often enrol through the municipality (gemeente) after BSN and address registration. Non-Dutch-speaking children may enter NT2 or newcomer programmes before or alongside regular classes — availability varies by city and age.",
      "This guide explains pathways from age 4 through VMBO, HAVO and VWO, how enrolment works, language support, costs and how Dutch schools compare with international options. It does not rank schools or guarantee placement.",
    ],
    schoolTypes: [
      "Openbare (public) schools",
      "Bijzonder (special) schools — religious or pedagogical",
      "Basisschool (primary, groups 1–8)",
      "Voortgezet onderwijs — VMBO, HAVO, VWO",
      "NT2 / newcomer language programmes",
      "Select bilingual tracks (limited)",
    ],
    keyPoints: [
      { title: "Free at public schools", body: "Example: no tuition at openbare basisschool — budget for lunch, trips, materials and optional bijdrage at some bijzonder schools." },
      { title: "Dutch-medium instruction", body: "Example: a 7-year-old from the UK may start in NT2 klas before joining groep 3/4 — gemeente coordinates intake." },
      { title: "Pathway split at 12", body: "Example: basisschool advies often guides VMBO (4 years), HAVO (5 years) or VWO (6 years) — ask about brugklas if advice feels wrong." },
      { title: "Municipal rules vary", body: "Example: Amsterdam and Utrecht have different priority and lottery rules — register early after address registration." },
    ] satisfies DutchSchoolsCard[],
    scenarios: [
      { profile: "Young family — long-term NL", scenario: "Two children ages 5 and 8; planning 10+ years in Utrecht", whatToCheck: "Register gemeente; ask about NT2 intake; visit 2–3 basisscholen near lease area." },
      { profile: "HSM hire — Amsterdam", scenario: "One child age 10; limited Dutch; 3-year contract", whatToCheck: "Compare NT2 support timeline vs international school; test commute from shortlisted housing." },
      { profile: "Mid-year arrival — The Hague", scenario: "Child age 12 entering groep 7 equivalent in February", whatToCheck: "Contact gemeente immediately; bring report cards; ask about taalschool placement." },
      { profile: "Bilingual interest", scenario: "Parents want English plus Dutch integration in Rotterdam", whatToCheck: "Verify bilingual track availability by year group — full 50/50 models are limited." },
    ],
  },
  introPlanningSteps: [
    "Register your address and obtain BSN for each child — gemeente school placement usually follows.",
    "Contact your municipality education desk (onderwijs/loket) for newcomer and NT2 intake procedures.",
    "Visit schools near your housing search area and ask about language support before signing a lease.",
  ],
  snapshotNextSteps: [
    "Confirm your gemeente placement rules before signing a housing lease.",
    "Ask the onderwijs desk about NT2 intake for each child's age.",
    "Compare Dutch and international timelines in parallel if your posting length is uncertain.",
  ],
  snapshotComparisonHeading: "Dutch schools vs international schools — planning orientation",
  snapshotComparisonParagraphs: [
    "Many expat families compare Dutch public education with international schools. This table orients you on structural differences — neither path is universally better; municipal rules and family timeline still govern the decision.",
  ],
  snapshotComparisonRows: [
    { factor: "Tuition", detail: "Free at openbare/bijzonder schools vs private international fees", planningNote: "Budget ouderbijdrage and opvang — not €15k+ tuition" },
    { factor: "Language", detail: "Dutch-medium instruction vs English-medium at most international schools", planningNote: "NT2 support exists; full English tracks are limited in Dutch system" },
    { factor: "Admissions", detail: "Gemeente placement/lottery vs direct school application", planningNote: "Different deadlines — register early after address registration" },
    { factor: "Integration", detail: "Local peers and Dutch fluency vs expat community", planningNote: "Long stays often benefit from Dutch route; short postings may favour continuity" },
    { factor: "Secondary path", detail: "VMBO/HAVO/VWO vs IB/British/American diplomas", planningNote: "University recognition depends on chosen diploma track" },
    { factor: "Waiting pressure", detail: "Placement capacity and NT2 queues vs international waiting lists", planningNote: "Keep both options open until placement is confirmed in writing" },
  ] satisfies DutchSchoolsComparisonRow[],
  snapshotScenarios: [
    { profile: "Long-term family — Utrecht", scenario: "Children ages 4 and 9; planning 8+ years in NL", whatToCheck: "Register gemeente; NT2 for older child; visit openbare and Montessori bijzonder schools nearby." },
    { profile: "3-year HSM posting — Amsterdam", scenario: "One child age 11; limited Dutch on arrival", whatToCheck: "Compare NT2 timeline with international school continuity — parallel applications reduce risk." },
    { profile: "Teen arrival — Rotterdam", scenario: "Age 14 from UK National Curriculum in March", whatToCheck: "Ask gemeente about ISK; credit mapping for VO placement after language year." },
    { profile: "Dual-track planning", scenario: "Employer covers partial international fees only", whatToCheck: "Model Dutch route costs (near zero tuition) vs out-of-pocket international gap." },
  ] satisfies DutchSchoolsScenarioRow[],
  snapshotCards: [
    { label: "Basisschool", value: "Groups 1–8", note: "Ages roughly 4–12; Cito group 8 assessment common." },
    { label: "VO pathways", value: "VMBO · HAVO · VWO", note: "Secondary split guides diploma type and university access." },
    { label: "Public schools", value: "Openbaar", note: "Municipal or neutral ethos; free tuition." },
    { label: "Special schools", value: "Bijzonder", note: "Religious or pedagogical profile; may request small contribution." },
    { label: "Language support", value: "NT2 / newcomer", note: "For non-Dutch speakers — gemeente-coordinated in many cities." },
    { label: "Enrolment", value: "Via gemeente", note: "Rules and deadlines differ by municipality." },
  ],
  systemOverview: {
    heading: "How the Dutch education system works",
    paragraphs: [
      "Children typically start basisschool at age 4 in group 1 and progress through group 8 by age 12. Instruction is in Dutch. At the end of primary, schools give secondary advice (advies) that guides placement into VMBO, HAVO or VWO — though final routes can include brugklas or adjustments.",
      "Voortgezet onderwijs (secondary) lasts four to six years depending on track. VMBO leads to vocational pathways (MBO); HAVO and VWO lead to HBO and university respectively. Understanding this split early helps expat families plan language support and length of stay.",
    ],
    pathwayCards: [
      { title: "Basisschool", ages: "4–12", duration: "8 groups", outcome: "Primary diploma; secondary advies", whoItSuits: "All children resident in the Netherlands — first integration stage for newcomers." },
      { title: "VMBO", ages: "12–16", duration: "4 years", outcome: "VMBO diploma → MBO vocational routes", whoItSuits: "Practical/vocational orientation; multiple VMBO levels exist." },
      { title: "HAVO", ages: "12–17", duration: "5 years", outcome: "HAVO diploma → HBO applied sciences", whoItSuits: "Middle academic track; less specialised than VWO early on." },
      { title: "VWO", ages: "12–18", duration: "6 years", outcome: "VWO diploma → university (WO)", whoItSuits: "Strongest academic track; includes Atheneum and Gymnasium variants." },
    ] satisfies DutchSchoolsPathwayCard[],
    points: [
      "Compulsory education from age 5; most children start basisschool at 4.",
      "Groups 1–8 replace year grades — age overlap is normal for newcomers.",
      "Cito or other group 8 tests inform secondary advies — not the only factor.",
      "Secondary tracks differ in duration, difficulty and university access.",
      "Integration-focused routes exist for older newcomers outside standard age bands.",
    ],
  },
  primary: {
    heading: "Basisschool (primary school)",
    paragraphs: [
      "Basisschool covers groups 1 through 8. Schools combine academic subjects, social development and activities such as gym, music and swimming. The school day often ends around 15:00, with optional buitenschoolse opvang (after-school care) available separately.",
      "For expat children, age and prior schooling determine group placement. Non-Dutch speakers may spend time in NT2 or newcomer classes before joining a regular group. Ask schools how they support homework and parent communication in languages other than Dutch.",
    ],
    comparisonRows: [
      { factor: "Age entry", detail: "Most start group 1 at age 4; compulsory from 5", planningNote: "Newcomers may be placed by age and language level — not home-country grade alone" },
      { factor: "Groups", detail: "Groups 1–8, multi-year classes common in smaller schools", planningNote: "Ask which group your child will join after language assessment" },
      { factor: "School day", detail: "Often 08:30–15:00; Wednesday afternoon free at many schools", planningNote: "Plan opvang if both parents work full-time" },
      { factor: "Group 8", detail: "Cito or alternative tests; secondary advies issued", planningNote: "Expat families should understand advies meetings — ask for translation support" },
      { factor: "Parent involvement", detail: "Parent evenings, committees (MR), volunteering culture", planningNote: "Schools expect participation — phrasebooks or buddy parents help" },
    ] satisfies DutchSchoolsComparisonRow[],
  },
  secondary: {
    heading: "Voortgezet onderwijs (secondary school)",
    paragraphs: [
      "From age 12, students enter VMBO, HAVO or VWO — sometimes via a combined brugklas year. Tracks determine diploma type and post-secondary options. Expat teenagers arriving mid-stream need careful placement; gemeente and schools assess language and prior credits.",
      "International families staying long-term should understand how HAVO/VWO subject choices affect Dutch and English-taught university pathways later.",
    ],
    comparisonRows: [
      { factor: "VMBO", detail: "4-year vocational-oriented track; multiple levels (basis, kader, gemengd, theoretisch)", planningNote: "Leads to MBO — strong for practical careers" },
      { factor: "HAVO", detail: "5-year middle academic track", planningNote: "HBO (applied sciences) entry — good balance for many students" },
      { factor: "VWO", detail: "6-year pre-university track (Atheneum/Gymnasium)", planningNote: "University (WO) entry — highest academic pace" },
      { factor: "Advies", detail: "Basisschool recommendation in group 8", planningNote: "Parents can discuss; brugklas allows reassessment" },
      { factor: "Newcomers", detail: "Internationale schakelklas (ISK) or NT2 routes for teens", planningNote: "Ask gemeente about ISK if arriving age 12+ with limited Dutch" },
    ] satisfies DutchSchoolsComparisonRow[],
  },
  publicVsSpecial: {
    heading: "Public vs special (bijzonder) schools",
    paragraphs: [
      "Openbare (public) schools are neutral in religious or ideological terms. Bijzonder (special) schools follow a specific religious (Catholic, Protestant, Islamic etc.) or pedagogical (Montessori, Dalton, Jenaplan) approach. Both receive government funding; parents do not pay tuition in the same way as international schools.",
      "Some bijzonder schools request a voluntary or statutory parental contribution (ouderbijdrage). Admission rules differ: public schools often follow gemeente placement; special schools may have affiliation or waiting lists.",
    ],
    comparisonRows: [
      { factor: "Funding", detail: "Both largely state-funded; no international-style tuition", planningNote: "Budget extras only — not €15k+ tuition" },
      { factor: "Ethos", detail: "Public = neutral; special = religious or pedagogical", planningNote: "Visit to see if ethos fits your family values" },
      { factor: "Admissions", detail: "Gemeente placement vs school application depending on type", planningNote: "Confirm rules before assuming automatic place" },
      { factor: "Contribution", detail: "Optional ouderbijdrage at many bijzonder schools", planningNote: "Typical €100–€500/year — verify per school" },
      { factor: "Quality", detail: "Inspectie reports apply to both types equally", planningNote: "Check Schoolwijzer.nl for official data" },
    ] satisfies DutchSchoolsComparisonRow[],
  },
  bilingual: {
    heading: "Bilingual and dual-language options",
    paragraphs: [
      "True bilingual basisscholen (roughly 50% English/Dutch) are limited compared with international schools. Some VO schools offer bilingual departments (tweetalig onderwijs) in select subjects. Taal routes and municipal programmes remain the main path for most expat children in Dutch schools.",
    ],
    options: [
      { title: "Bilingual basisschool tracks", body: "Small number of schools offer extended English — verify which subjects and year groups." },
      { title: "Tweetalig VO", body: "Secondary schools with bilingual streams in subjects such as history or geography — not full English-medium." },
      { title: "Taal routes", body: "Municipal language pathways preparing children for Dutch-medium classes." },
      { title: "Dutch public + home language", body: "Many families combine Dutch school with English at home and international friendships." },
      { title: "Switching later", body: "Children with strong Dutch after basisschool can access broader VO options." },
    ] satisfies DutchSchoolsCard[],
  },
  languageSupport: {
    heading: "Language support for non-Dutch speakers",
    paragraphs: [
      "The Netherlands provides NT2 (Dutch as second language) and newcomer (nieuwkomers) programmes for children who need Dutch before joining regular classes. Intake is often coordinated by the gemeente or a regional samenwerkingsverband.",
      "Support intensity depends on age: younger children often integrate faster; teenagers may attend Internationale Schakelklas (ISK) before entering VO.",
    ],
    options: [
      { title: "NT2 basisschool", body: "Dedicated language classes for primary-age newcomers — duration varies by proficiency." },
      { title: "In-class support", body: "Some schools pull out for Dutch lessons while keeping partial mainstream contact." },
      { title: "ISK (secondary)", body: "Intensive Dutch year for ages roughly 12–18 before HAVO/VWO/VMBO placement." },
      { title: "Taalschool", body: "Municipal language school route in cities such as Amsterdam and Rotterdam." },
      { title: "Parent communication", body: "Ask about newsletters in translation, tutors and buddy systems for families." },
    ] satisfies DutchSchoolsCard[],
    comparisonRows: [
      { factor: "Younger children", detail: "Often 6–12 months NT2 before mainstream", planningNote: "Immersion at home accelerates progress" },
      { factor: "Age 10+", detail: "May need longer support before group placement", planningNote: "Plan homework help in early months" },
      { factor: "Teenagers", detail: "ISK common before VO", planningNote: "Credit transfer from home system needs school assessment" },
      { factor: "Gemeente role", detail: "Coordinates intake in many municipalities", planningNote: "Start within weeks of address registration" },
    ] satisfies DutchSchoolsComparisonRow[],
  },
  enrolment: {
    heading: "Enrolment: gemeente and school steps",
    paragraphs: [
      "After registering your address and obtaining BSN, contact your gemeente for school placement procedures. Some municipalities assign schools; others allow ranked preferences or lottery systems. Special schools may require separate application.",
    ],
    timeline: [
      { stage: "Address & BSN", timing: "As soon as you arrive", action: "Register at gemeente; obtain BSN for each child." },
      { stage: "Education desk", timing: "Within 2–4 weeks", action: "Contact onderwijs/loket for newcomer procedures and forms." },
      { stage: "Language assessment", timing: "Varies", action: "Gemeente or school assesses Dutch level for placement." },
      { stage: "School preferences", timing: "Per gemeente deadline", action: "Submit ranked choices or accept assigned school." },
      { stage: "School visit", timing: "Before acceptance", action: "Meet leerkracht/direction; ask about NT2 and opvang." },
      { stage: "Enrolment form", timing: "Before start", action: "Complete inschrijving; provide vaccination and prior reports." },
      { stage: "First day", timing: "Start date agreed", action: "Confirm opvang, lunch and pickup arrangements." },
    ] satisfies DutchSchoolsTimelineRow[],
    documents: [
      "BSN for each child",
      "Proof of address registration",
      "Passport or ID",
      "Previous school reports (translated if helpful)",
      "Vaccination record (check school policy)",
      "Residence permit if non-EU",
    ],
    scenarios: [
      { profile: "August start — organised family", scenario: "Relocation confirmed March; children ages 5 and 10 in Utrecht", whatToCheck: "Register April; NT2 assessment May–June; school preferences before gemeente deadline." },
      { profile: "Late registration — Amsterdam", scenario: "Lease signed September; school start same month", whatToCheck: "Contact onderwijsconsulent immediately — NT2 queue may delay mainstream placement." },
      { profile: "Bijzonder school preference", scenario: "Catholic basisschool chosen; public assignment offered elsewhere", whatToCheck: "Confirm separate application rules and waiting list — not always via same lottery." },
      { profile: "VO transfer with reports", scenario: "Teen age 13 with 2 years of English-medium reports", whatToCheck: "Bring course descriptions; gemeente may route to ISK before HAVO/VWO placement." },
    ] satisfies DutchSchoolsScenarioRow[],
  },
  costs: {
    heading: "Costs: what Dutch schools charge",
    paragraphs: [
      "Public and special Dutch schools do not charge international-style tuition. Families budget for optional ouderbijdrage, school lunches, trips, materials, gym clothes and after-school opvang. Secondary students may have laptop requirements.",
    ],
    rows: [
      { category: "Tuition", publicSchool: "Free", specialSchool: "Free (state-funded)", notes: "Unlike international schools charging €12k–€28k/year" },
      { category: "Ouderbijdrage", publicSchool: "Often €0–€150", specialSchool: "Often €100–€500", notes: "Voluntary or statutory — school-specific" },
      { category: "Lunch", publicSchool: "Bring own or ~€3–€5/day", specialSchool: "Same", notes: "Hot lunch uncommon at basisschool" },
      { category: "School trips", publicSchool: "€50–€300/year", specialSchool: "Similar", notes: "Camp weeks increase cost in group 7–8" },
      { category: "Materials & gym", publicSchool: "€100–€250/year", specialSchool: "Similar", notes: "Laptop common from VO" },
      { category: "Buitenschoolse opvang", publicSchool: "€6–€10/hour", specialSchool: "Same", notes: "Separate from school; toeslag may apply — see childcare allowance guide" },
    ] satisfies DutchSchoolsFeeRow[],
    disclaimer: "Amounts vary by school and city. This guide provides planning ranges only — not quotes.",
    scenarios: [
      { profile: "Two children — openbare basisschool", scenario: "Ages 6 and 9 in Rotterdam; no ouderbijdrage", whatToCheck: "Budget ~€800–€1,200/year extras plus opvang ~€7/hour for Wed afternoons." },
      { profile: "Bijzonder Montessori", scenario: "Ouderbijdrage €350/year; group 7 camp week", whatToCheck: "Add camp €200–€400 and materials — still far below international tuition." },
      { profile: "VO laptop requirement", scenario: "HAVO year 2 student; school specifies €600 device", whatToCheck: "One-off cost — ask about subsidy or second-hand programmes." },
      { profile: "Opvang + toeslag", scenario: "Full-time parents; BSO 5 days after school", whatToCheck: "Childcare allowance may offset part of opvang — see childcare allowance guide." },
    ] satisfies DutchSchoolsScenarioRow[],
  },
  choosing: {
    heading: "Choosing a Dutch school: decision matrix",
    paragraphs: [
      "The right Dutch school depends on length of stay, language readiness, location, ethos and secondary ambitions. Use this matrix with gemeente guidance and school visits — not league tables.",
    ],
    matrix: [
      { factor: "Length of stay", question: "Will your child benefit from full Dutch integration?", example: "3+ years → Dutch school often worthwhile if support exists." },
      { factor: "Language age", question: "Is your child's age favourable for NT2?", example: "Under 10 usually adapts faster than mid-secondary arrival." },
      { factor: "Location", question: "Can you live near the school or NT2 centre?", example: "Amsterdam NT2 hubs may not match your commute from Haarlem." },
      { factor: "Ethos", question: "Public neutral vs religious/pedagogical special?", example: "Montessori special school vs openbare — visit both." },
      { factor: "Secondary path", question: "Are you planning HAVO/VWO or vocational routes?", example: "Long-term academic plans → ask about school advies patterns honestly." },
      { factor: "International backup", question: "Should you keep international options open?", example: "Short posting → parallel application may reduce risk." },
    ] satisfies DutchSchoolsDecisionRow[],
    howToSteps: [
      { name: "Register address and BSN", text: "Complete gemeente registration for each child — school placement usually follows address registration." },
      { name: "Contact the onderwijs desk", text: "Ask about newcomer intake, NT2 timelines and preference or lottery deadlines for your postcode." },
      { name: "Shortlist and visit schools", text: "Tour 2–3 schools near housing areas; ask about NT2 pathways and parent communication in practice." },
      { name: "Submit preferences or applications", text: "Meet gemeente deadlines for ranked choices; apply separately to bijzonder schools if required." },
      { name: "Confirm placement and opvang", text: "Accept place in writing; arrange buitenschoolse opvang and gather reports for the first day." },
    ] satisfies DutchSchoolsHowToStep[],
    scenarios: [
      { profile: "Undecided — 2-year contract", scenario: "Child age 8; employer relocation to Eindhoven", whatToCheck: "Apply international and register gemeente — compare NT2 pace vs English continuity." },
      { profile: "Strong Dutch partner", scenario: "One Dutch-speaking parent; child age 6", whatToCheck: "Home language support accelerates NT2 — openbare near home may suffice." },
      { profile: "Montessori preference", scenario: "Pedagogical fit over proximity", whatToCheck: "Bijzonder waiting lists differ from gemeente lottery — apply early." },
      { profile: "University-bound teen", scenario: "Age 15 arrival; target Dutch WO pathway", whatToCheck: "ISK then VWO/HAVO placement — realistic timeline 12–24 months for Dutch proficiency." },
    ] satisfies DutchSchoolsScenarioRow[],
  },
  quality: {
    heading: "School quality and inspection",
    paragraphs: [
      "The Dutch Inspectorate of Education (Onderwijsinspectie) publishes reports on all schools. Schoolwijzer.nl aggregates official data including leerlingenkenmerken (student progress indicators). Use these sources rather than informal expat forum rankings.",
      "Schools follow national behaviour and safety frameworks. Minor discipline (such as nablijven — staying after class — or structured homework tasks sometimes referred to in parent guides as taakstraf-style assignments) is handled internally; serious concerns fall under inspectorate oversight and school complaints procedures.",
    ],
    points: [
      "Inspectie reports: look for 'voldoende' or 'goed' overall judgements.",
      "Leerlingenkenmerken: compare value-added progress, not raw test averages alone.",
      "School guide visit: observe classroom climate and newcomer support in practice.",
      "MR (medezeggenschapsraad): parent council indicates active community.",
      "Ask schools how they support NT2 pupils specifically — reports may not detail this.",
      "Behaviour policy: request school leidraad (code of conduct) — discipline is restorative, not ranked.",
    ],
    questionsForSchools: [
      "How many NT2 pupils joined last year and what was their pathway?",
      "What is average time from intake to regular group placement?",
      "How do you communicate with non-Dutch-speaking parents?",
      "What is your latest Onderwijsinspectie summary?",
      "How does your advies to HAVO/VWO compare with regional averages?",
    ],
    disciplineNotes: [
      "Nablijven (detention after school) is common for missed homework or behaviour issues.",
      "Schools document incidents — serious bullying triggers mandatory action under Dutch law.",
      "Onderwijsinspectie monitors safety culture and anti-bullying compliance during inspections.",
      "Parent complaints route: leerkracht → directeur → MR → inspectie for unresolved issues.",
    ],
    scenarios: [
      { profile: "Comparing two basisscholen", scenario: "Both 'voldoende' on Schoolwijzer; one closer to home", whatToCheck: "Visit both; ask NT2 coordinator about newcomer numbers — proximity may matter more than small score differences." },
      { profile: "Concern about bullying", scenario: "Child reports exclusion in groep 6", whatToCheck: "Request school anti-bullying protocol; escalate via MR if unresolved — inspectie tracks serious patterns." },
      { profile: "Advies dispute", scenario: "Group 8 advies HAVO; parents expect VWO", whatToCheck: "Discuss with leerkracht and directeur; brugklas or Cito herkansing may be options — not forum anecdotes." },
      { profile: "Inspectie report jargon", scenario: "Report mentions 'kwaliteitszorg' and 'veiligheid'", whatToCheck: "Use Schoolwijzer plain-language summary; ask school for parent-friendly explanation at open day." },
    ] satisfies DutchSchoolsScenarioRow[],
  },
  cityComparison: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", schoolLandscape: "Large openbare and bijzonder network; taalschool routes", newcomerSupport: "Municipal NT2 coordination; high demand", placementNotes: "Lottery/preference systems — register early", typicalExtras: "Ouderbijdrage varies; opvang competitive", pathways: "Full VMBO–VWO range; bilingual limited" },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", schoolLandscape: "Diverse school population; strong newcomer infrastructure", newcomerSupport: "Taalschool and NT2 hubs", placementNotes: "Contact onderwijsconsulent early", typicalExtras: "Moderate ouderbijdrage at bijzonder schools", pathways: "All VO tracks; ISK available" },
    { city: "The Hague", href: "/netherlands/the-hague/", schoolLandscape: "Mix of expat and local families; many openbare schools", newcomerSupport: "NT2 programmes; international families often dual-track", placementNotes: "Verify timing with gemeente Den Haag", typicalExtras: "Similar to Amsterdam; opvang near diplomatic areas", pathways: "HAVO/VWO strong; VMBO vocational routes" },
    { city: "Utrecht", href: "/netherlands/utrecht/", schoolLandscape: "Growing international family base", newcomerSupport: "Gemeente taal routes; university city resources", placementNotes: "Preference deadlines strict — plan ahead", typicalExtras: "Lower than Randstad international costs", pathways: "Full pathway range" },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", schoolLandscape: "Tech expat families; smaller newcomer pool than Randstad", newcomerSupport: "NT2 available; may be less saturated", placementNotes: "Often faster placement than Amsterdam", typicalExtras: "Moderate; ASML corridor opvang", pathways: "VMBO through VWO; ISK reachable regionally" },
    { city: "Haarlem", href: "/netherlands/haarlem/", schoolLandscape: "Amsterdam commuter families", newcomerSupport: "Uses regional NT2 capacity", placementNotes: "Check Amsterdam overflow if local full", typicalExtras: "Typical Randstad ranges", pathways: "Standard Dutch pathways" },
  ] satisfies DutchSchoolsCityCard[],
  dutchVsInternational: {
    heading: "Dutch schools vs international schools",
    paragraphs: [
      "Expat families often weigh Dutch public education against international schools. Dutch schools offer integration and no tuition; international schools offer English-medium continuity and familiar curricula at significant cost. Many families apply to both until placement clarity emerges.",
    ],
    comparisonRows: [
      { factor: "Language", detail: "Dutch-medium vs English-medium instruction", planningNote: "Young children adapt; teens need explicit support planning" },
      { factor: "Cost", detail: "Free tuition vs €12k–€28k/year typical international", planningNote: "Employer allowances may not cover Dutch extras" },
      { factor: "Admissions", detail: "Gemeente/school vs direct international application", planningNote: "Different timelines — do not conflate deadlines" },
      { factor: "Curriculum", detail: "Dutch core vs IB/British/American", planningNote: "University recognition depends on diploma path" },
      { factor: "Integration", detail: "Local friends and Dutch fluency vs expat bubble", planningNote: "Long-stay families often value Dutch route" },
      { factor: "Waiting lists", detail: "Usually placement pressure not €20k waitlists", planningNote: "International flagship schools still competitive" },
    ] satisfies DutchSchoolsComparisonRow[],
  },
  midYear: {
    heading: "Mid-year enrolment and transfers",
    paragraphs: [
      "Arriving outside August is common for expat families. Gemeente and schools place children when capacity and language support exist. Mid-year is less predictable than the standard August intake — contact the education desk immediately.",
    ],
    points: [
      "Contact gemeente onderwijs team within days of address registration.",
      "Bring digital report cards and course descriptions for VO placements.",
      "NT2/ISK intake may start within weeks — regular group placement follows.",
      "Brugklas or temporary placement may apply while language catches up.",
      "Keep international school applications active until Dutch place confirmed.",
    ],
    checklist: [
      "Email gemeente with arrival date and children's ages",
      "Prepare PDF report cards with English summaries",
      "Ask which NT2 or ISK locations serve your postcode",
      "Visit assigned school before accepting if possible",
      "Arrange opvang for partial weeks during transition",
      "Request leerkracht contact for homework expectations",
    ],
    scenarios: [
      { profile: "January start — corporate transfer", scenario: "Family arrives mid-January; child age 9 in Year 4 equivalent", whatToCheck: "Gemeente may place in NT2 within weeks; mainstream groep 5 after assessment — less predictable than August." },
      { profile: "February — age 12", scenario: "Entering groep 7 equivalent; limited Dutch", whatToCheck: "Taalschool or intensive NT2 before group 7 — ask if brugklas timing shifts." },
      { profile: "Summer arrival", scenario: "July move; school starts August", whatToCheck: "Register June if possible; many gemeenten process August cohort in spring." },
      { profile: "International backup active", scenario: "Dutch NT2 queue 8 weeks; international offer pending", whatToCheck: "Keep both until Dutch start date confirmed — do not decline international until gemeente letter received." },
    ] satisfies DutchSchoolsScenarioRow[],
  },
  sen: {
    heading: "Special educational needs (passend onderwijs)",
    paragraphs: [
      "Dutch schools operate under passend onderwijs — appropriate education for every child. Support is organised through regional samenwerkingsverbanden (collaborative bodies). Levels range from extra support in mainstream to specialised schools (speciaal onderwijs).",
      "Disclose needs early during gemeente intake. Bring existing IEPs, diagnoses and therapist reports — translated summaries help.",
    ],
    points: [
      "Support is a right — schools cannot simply refuse without process.",
      "Samenwerkingsverband assigns resources based on need level.",
      "Mainstream support (licht) vs specialised settings (zwaar) differ by region.",
      "Ask which consulent handles passend onderwijs for your gemeente.",
    ],
    questionsForSchools: [
      "Who is your internal passend onderwijs coordinator?",
      "What in-class support can you provide for our child's profile?",
      "How do you liaise with the samenwerkingsverband?",
      "Can external therapists visit or work with the school?",
      "What is the process if needs increase mid-year?",
    ],
    scenarios: [
      { profile: "Mild dyslexia — basisschool", scenario: "Child age 8 with existing support plan; needs reading accommodations", whatToCheck: "Ask passend onderwijs coordinator about in-class support hours and Cito adjustments." },
      { profile: "ADHD — mainstream VO", scenario: "Teen entering HAVO; needs structured breaks", whatToCheck: "Samenwerkingsverband may fund extra guidance — disclose at gemeente intake." },
      { profile: "Autism — special vs mainstream", scenario: "Primary-age child; sensory needs in busy classroom", whatToCheck: "Visit both mainstream with support and speciaal onderwijs options — regional capacity varies." },
      { profile: "Undisclosed IEP", scenario: "Family waits until after placement to share diagnosis", whatToCheck: "Risk of inadequate support — bring translated IEP summary at first gemeente meeting." },
    ] satisfies DutchSchoolsScenarioRow[],
  },
  familyChecklistEarly: [
    "Confirm relocation date and whether posting length favours Dutch or international route",
    "Map basisscholen and NT2 centres against housing search zones",
    "Read Schoolwijzer orientation pages for your target gemeente",
    "Join local parent groups for logistics tips — not placement guarantees",
  ],
  familyChecklistApply: [
    "Register address and obtain BSN for each child",
    "Contact gemeente onderwijs desk within 2 weeks of registration",
    "Submit school preferences or bijzonder applications by deadline",
    "Parallel international school enquiry if timeline is tight",
  ],
  familyChecklistPreMove: [
    "Accept Dutch placement or confirm international offer before shipping",
    "Book buitenschoolse opvang for Wednesday afternoons if needed",
    "Prepare translated report cards and vaccination records",
    "Arrange fietsexamen planning if child will cycle from age 8+",
  ],
  familyChecklist: [
    "Register address and obtain BSN for each child",
    "Contact gemeente education desk for placement rules",
    "Ask about NT2/ISK intake timelines for each child",
    "Shortlist schools near housing search areas",
    "Visit schools and ask about newcomer support",
    "Submit preferences or applications by gemeente deadline",
    "Arrange buitenschoolse opvang if needed",
    "Keep international school option open if timeline tight",
    "Review Schoolwijzer inspectie data for shortlisted schools",
    "Prepare report cards and vaccination records",
  ],
  mistakeCards: [
    { title: "Late gemeente contact", body: "Example: signing a lease in September without registering children — NT2 queues may delay start by months." },
    { title: "Assuming English instruction", body: "Example: expecting Dutch basisschool to teach in English — only limited bilingual tracks exist." },
    { title: "Ignoring advies system", body: "Example: not attending group 8 meetings because reports are in Dutch — ask for translation support." },
    { title: "Housing far from NT2 hub", body: "Example: living in a village while child attends taalschool 45 minutes away — exhaustion follows." },
    { title: "Skipping international backup", body: "Example: single-track Dutch application on a 2-year contract — no plan B if placement slips." },
    { title: "Underestimating parent involvement", body: "Example: missing MR meetings and WhatsApp groups — integration slows for the whole family." },
  ] satisfies DutchSchoolsCard[],
  mistakeScenarios: [
    { profile: "Forum ranking obsession", scenario: "Choosing school solely from expat Facebook 'best school' threads", whatToCheck: "Use Schoolwijzer inspectie data and visit NT2 support in person — no official rankings exist." },
    { profile: "Grade number mismatch", scenario: "Insisting child joins 'Year 5' when gemeente places in groep 6", whatToCheck: "Dutch groups differ from UK/US grades — trust language assessment outcome." },
    { profile: "Single deadline mindset", scenario: "Misses bijzonder application while waiting for gemeente lottery", whatToCheck: "Track separate deadlines on a shared calendar." },
    { profile: "No Dutch at home", scenario: "Parents speak only English; expect school to fully substitute", whatToCheck: "Plan family Dutch learning — children integrate faster with home exposure." },
  ] satisfies DutchSchoolsScenarioRow[],
  faq: [
    { q: "Are Dutch public schools free for expats?", a: "Yes — openbare and most bijzonder schools are state-funded with no tuition fees. Budget for ouderbijdrage, materials, trips and opvang instead." },
    { q: "Do my children need to speak Dutch?", a: "Not to enrol, but instruction is in Dutch. Non-speakers enter NT2 or newcomer programmes first — duration depends on age and support." },
    { q: "How do I enrol my child?", a: "Register your address, obtain BSN and contact your gemeente education desk. Procedures vary by municipality for preferences, lottery or assignment." },
    { q: "What is basisschool group placement?", a: "Groups 1–8 correspond roughly to ages 4–12. Newcomers are placed by age and language assessment — not always equal to home-country grade." },
    { q: "What are VMBO, HAVO and VWO?", a: "Secondary tracks after basisschool: VMBO (vocational, 4 years), HAVO (5 years, HBO entry), VWO (6 years, university entry)." },
    { q: "Can we choose a religious school?", a: "Yes — bijzonder schools include Catholic, Protestant, Islamic and other profiles. Admission rules vary; some require affiliation." },
    { q: "Dutch school or international school?", a: "Dutch schools suit integration and long stays without tuition. International schools suit English continuity and short postings at higher cost. Many families compare both." },
    { q: "What if we arrive mid-year?", a: "Contact gemeente immediately. Mid-year placement depends on capacity and NT2 availability — less predictable than August intake." },
  ],
  relatedGuides: [
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "Compare English-medium schools, fees and admissions." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Family relocation guide covering schools and registration." },
    { label: "Learning Dutch", href: LEARNING_DUTCH_PATH, status: "live", description: "Language resources for parents and children." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Toeslag for registered opvang — separate from school." },
    { label: "Housing for Families", href: HOUSING_HUB_PATH, status: "live", description: "Find areas near schools and NT2 centres." },
    { label: "Best Cities for Families", href: BEST_CITIES_FOR_FAMILIES_PATH, status: "live", description: "Compare family-oriented cities and school access." },
    { label: "Family Life", href: "/netherlands/culture/family-and-school-culture/", status: "live", description: "Dutch school culture and parent involvement." },
    { label: "Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Explore Amsterdam, The Hague, Rotterdam and more." },
  ] satisfies DutchSchoolsLink[],
  educationHubCards: [
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_NETHERLANDS_PATH, status: "live", description: "This guide — public and special schools for expat families." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "IB, British, American and bilingual private options." },
    { label: "Daycare", href: "/netherlands/education/daycare-netherlands/", status: "comingSoon", description: "Early childhood care before school age." },
    { label: "Universities", href: "/netherlands/education/universities-netherlands/", status: "comingSoon", description: "Higher education for international students." },
    { label: "Learning Dutch", href: LEARNING_DUTCH_PATH, status: "live", description: "Practical Dutch for daily life and integration." },
    { label: "Moving with Family", href: MOVING_WITH_FAMILY_PATH, status: "live", description: "Broader family relocation planning." },
  ] satisfies DutchSchoolsLink[],
  exploreNextCards: [
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "Compare private English-medium options." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "End-to-end family relocation planning." },
    { label: "Learning Dutch", href: LEARNING_DUTCH_PATH, status: "live", description: "Support your child's school integration." },
    { label: "Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities before choosing a school area." },
    { label: "Housing", href: HOUSING_HUB_PATH, status: "live", description: "Rent near shortlisted schools and NT2 hubs." },
  ] satisfies DutchSchoolsLink[],
  officialSources: [
    { label: "Government.nl — Education", href: "https://www.government.nl/topics/secondary-education", description: "Official Dutch government information on school types and policy." },
    { label: "Schoolwijzer", href: "https://www.schoolwijzer.nl/", description: "Official school comparison with inspection results." },
    { label: "Onderwijsinspectie", href: "https://www.onderwijsinspectie.nl/", description: "Inspectorate reports for Dutch schools." },
    { label: "DUO — Education executive agency", href: "https://www.duo.nl/", description: "Student finance and education administration context." },
    { label: "Nuffic", href: "https://www.nuffic.nl/en", description: "International credential recognition and education information." },
  ],
  officialSourcesNote:
    "Gemeente rules, NT2 capacity and school placement change frequently. Verify current procedures with your municipality and schools — this guide is orientation only, not enrolment advice.",
} as const;

export type DutchSchoolsNetherlandsPage = typeof dutchSchoolsNetherlandsPage;
