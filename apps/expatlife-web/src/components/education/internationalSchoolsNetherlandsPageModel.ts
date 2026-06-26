import { internationalSchoolsDirectory } from "@/src/data/education/internationalSchoolsDirectory";

export const INTERNATIONAL_SCHOOLS_NETHERLANDS_PATH =
  "/netherlands/education/international-schools-netherlands/" as const;
export const EDUCATION_HUB_PATH = "/netherlands/education/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const MOVING_WITH_FAMILY_PATH = "/netherlands/moving-to-netherlands-with-family/" as const;
export const BEST_CITIES_FOR_FAMILIES_PATH = "/netherlands/cities/best-cities-for-families/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type InternationalSchoolsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type InternationalSchoolsCard = {
  title: string;
  body: string;
};

export type InternationalSchoolsComparisonRow = {
  factor: string;
  detail: string;
  planningNote: string;
};

export type InternationalSchoolsFeeRow = {
  category: string;
  primaryRange: string;
  secondaryRange: string;
  notes: string;
};

export type InternationalSchoolsTimelineRow = {
  stage: string;
  timing: string;
  action: string;
};

export type InternationalSchoolsCityCard = {
  city: string;
  href: string;
  schoolCount: string;
  community: string;
  waitingLists: string;
  typicalFees: string;
  curricula: string;
};

export type InternationalSchoolsCurriculumCard = {
  title: string;
  curriculum: string;
  typicalAges: string;
  qualifications: string;
  whoItSuits: string;
};

export type InternationalSchoolRecord = (typeof internationalSchoolsDirectory)[number];

export type InternationalSchoolsDecisionRow = {
  factor: string;
  question: string;
  example: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-international-schools-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const internationalSchoolsNetherlandsPage = {
  slug: "international-schools-netherlands",
  path: INTERNATIONAL_SCHOOLS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-12-19",
  seo: {
    title: "International Schools in the Netherlands | Complete Expat Guide",
    description:
      "Compare international schools across the Netherlands, including IB, British, American and bilingual schools, admissions, tuition fees, waiting lists and city comparisons.",
    keywords: [
      "international schools netherlands",
      "expat schools netherlands",
      "english schools netherlands",
      "international education netherlands",
      "international school netherlands",
      "IB schools Netherlands",
      "international schools Amsterdam",
      "British schools Netherlands",
      "American schools Netherlands",
      "schools for expats Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Education · International schools",
    pageTitle: "International Schools in the Netherlands",
    subtitle:
      "Everything expat families need to know about international schools, curricula, admissions, tuition fees and choosing the right school.",
    primaryCta: { label: "Compare International Schools", href: "#directory" },
    secondaryCta: { label: "Explore Family Guides", href: MOVING_WITH_KIDS_PATH },
    chips: ["IB & British curricula", "Admissions planning", "City comparisons", "Fee orientation"],
    image: {
      src: "/images/heroes/netherlands-international-schools-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of a diverse international classroom in a modern Dutch school — multicultural students collaborating on a multilingual group project at shared tables, with large windows revealing canal houses and bicycles outside.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic overview of international education in the Netherlands with curriculum types, city availability and a family planning checklist rail.",
      "Start here: map your city, shortlist curricula and check waiting lists before you sign a lease."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance cards for IB, British, American, bilingual and European school types with example age ranges and planning labels.",
      "Use these cards to narrow school types — then compare real schools in the directory below."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium bridge infographic comparing international schools with Dutch public schools on language, funding, accreditation and typical student profiles.",
      "International schools are privately funded and English-medium — Dutch public schools follow a different path."
    ),
    schoolTypes: visual(
      "school-types",
      "Premium curriculum comparison board for IB, British, American, European, bilingual and other international programmes with qualification outcomes.",
      "Match curriculum to future university plans — not just current year group."
    ),
    directory: visual(
      "directory",
      "Premium searchable school directory map of the Netherlands with curriculum filters and example school records across major cities.",
      "Filter by city and curriculum — always confirm fees and availability on each school's website."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city comparison cards for Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven showing school counts, fees and waiting list context.",
      "City choice affects commute, fees and waiting lists — compare before you relocate."
    ),
    fees: visual(
      "fees",
      "Premium tuition fee breakdown infographic with primary, secondary, registration, technology, lunch and transport example ranges.",
      "Fees vary widely — treat ranges as planning orientation, not quotes."
    ),
    admissions: visual(
      "admissions",
      "Premium admissions timeline from research through application, assessment, offer and enrolment with realistic month markers.",
      "Popular schools may need 12–18 months lead time — start early in The Hague and Amsterdam."
    ),
    waitingLists: visual(
      "waiting-lists",
      "Premium waiting list planning board with popular cities, relocation timing tips and alternative pathways.",
      "Apply to more than one school and keep Dutch public options on your shortlist."
    ),
    language: visual(
      "language",
      "Premium language options infographic covering English-medium instruction, Dutch integration, bilingual tracks and ELL support.",
      "Many schools teach Dutch as a subject — full bilingual tracks are fewer but growing."
    ),
    transport: visual(
      "transport",
      "Premium school transport scene with school buses, cycling routes, OV cards and parent drop-off zones in Dutch cities.",
      "Factor commute time into school choice — cycling and OV are common from age 8+."
    ),
    choosing: visual(
      "choosing",
      "Premium decision matrix comparing curriculum, location, budget, commute, languages and child's personality.",
      "Use the matrix with your family priorities — there is no single best school for every child."
    ),
    midYear: visual(
      "mid-year",
      "Premium mid-year transfer flow showing records, assessments, integration support and realistic placement windows.",
      "Mid-year places exist but are less predictable — contact schools directly with transfer records ready."
    ),
    sen: visual(
      "sen",
      "Premium overview of special educational needs support across international schools with planning checklist.",
      "Support varies by school — ask detailed questions before applying if your child has identified needs."
    ),
    checklist: visual(
      "checklist",
      "Premium expat family school planning checklist with research, visits, documents and application steps.",
      "Work through this checklist 6–12 months before your intended start date where possible."
    ),
    mistakes: visual(
      "mistakes",
      "Premium common mistakes board covering late applications, commute blind spots, reputation-only choices and fee underestimation.",
      "Avoid choosing on reputation alone — fit, curriculum and logistics matter more."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight international school questions and short orientation answers.",
      "FAQ answers orient you — confirm school-specific details directly with admissions offices."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route map linking international schools to moving with children, Dutch education, housing and city guides.",
      "School choice connects to housing, commute and family relocation planning."
    ),
    educationHub: visual(
      "education-hub",
      "Premium education hub visual with cards for international schools, Dutch schools, daycare, universities and learning Dutch.",
      "This page is the international schools cornerstone — explore related education guides next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with next-step family, housing and city guides for relocating parents.",
      "Pick your next guide based on whether you are comparing cities, housing or the Dutch school system."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#school-types", label: "School types" },
    { href: "#directory", label: "Directory" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#fees", label: "Fees" },
    { href: "#admissions", label: "Admissions" },
    { href: "#waiting-lists", label: "Waiting lists" },
    { href: "#language", label: "Language" },
    { href: "#transport", label: "Transport" },
    { href: "#choosing", label: "Choosing" },
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
    heading: "Quick answer: international schools in the Netherlands",
    paragraphs: [
      "The Netherlands has one of Europe's strongest international school networks. Families relocating for work, diplomacy or entrepreneurship can choose from International Baccalaureate (IB), British, American, European, bilingual and other international programmes depending on city and age group.",
      "Availability varies significantly by city. Amsterdam, The Hague and Rotterdam have the largest selection, while smaller cities may offer one or two international options plus strong Dutch public alternatives. Waiting lists are common at popular schools — planning 6–18 months ahead is realistic in major hubs.",
      "This guide helps you compare real schools, understand admissions and fees, and connect school choice with housing, commute and family relocation planning. It does not rank schools subjectively or guarantee placement.",
    ],
    curriculumTypes: [
      "International Baccalaureate (IB)",
      "British curriculum (IGCSE / A-Levels)",
      "American curriculum (AP)",
      "European Schools",
      "Bilingual programmes",
      "Other international programmes",
    ],
    keyPoints: [
      { title: "City drives availability", body: "Example: The Hague offers 10+ international options including American and European Schools; Groningen has one main IB school — verify before accepting a regional role." },
      { title: "Fees are private", body: "Example: primary tuition often €12,000–€22,000/year at many schools, plus registration, bus and trip extras — not covered by Dutch public education funding." },
      { title: "Waiting lists are year-group specific", body: "Example: reception and IB Diploma entry at ASH or AICS can fill early — apply to multiple schools and keep Dutch public alternatives open." },
      { title: "Curriculum continuity matters", body: "Example: British family on IGCSE path may prefer BSN or British School Amsterdam over switching to IB mid-secondary without credit mapping." },
    ] satisfies InternationalSchoolsCard[],
    scenarios: [
      { profile: "Diplomatic family — The Hague", scenario: "Two children ages 5 and 12; posting confirmed for August; housing in Wassenaar corridor", whatToCheck: "Apply to BSN, ASH and European Schools early; compare bus routes and year-group waiting lists in writing." },
      { profile: "Amsterdam tech hire — two kids", scenario: "HSM contract; lease in Amsterdam Zuid; children ages 6 and 10", whatToCheck: "Shortlist AICS, ISA and British School; test commute from lease address before signing." },
      { profile: "Eindhoven ASML transfer", scenario: "Mid-year move January; one child age 14 on IB MYP", whatToCheck: "Contact ISE with 2–3 years of reports; mid-year MYP places vary by cohort." },
      { profile: "Long-term NL residency", scenario: "Family planning 8+ years; wants English instruction plus Dutch integration", whatToCheck: "Compare bilingual tracks (e.g. Optimist) with Dutch public plus after-school Dutch — ask hours of Dutch per week." },
    ],
  },
  introPlanningSteps: [
    "Shortlist 3–5 schools by city, curriculum and realistic commute before signing a housing lease.",
    "Contact admissions offices for year-group availability and waiting list status — request written confirmation where possible.",
    "Request full fee schedules including registration, transport and activity costs — orientation only, not admissions advice.",
  ],
  snapshotNextSteps: [
    "Match curriculum type to home-country continuity and target university countries.",
    "Compare city cards below against your employer location and housing search areas.",
    "Open the directory and filter by curriculum before deep-diving into individual school websites.",
  ],
  snapshotComparisonHeading: "International schools vs Dutch public schools — planning orientation",
  snapshotComparisonParagraphs: [
    "Many expat families compare international schools with Dutch public (basisschool and voortgezet onderwijs) options. This table orients you on structural differences — municipal rules and school policies still govern exact placement.",
  ],
  snapshotComparisonRows: [
    { factor: "Funding", detail: "Private tuition at international schools; Dutch public schools are free at point of use", planningNote: "Budget €15k–€25k+ per child all-in at many international schools" },
    { factor: "Language", detail: "English-medium at most international schools; Dutch-medium at public schools", planningNote: "Dutch public viable if children are young or you plan long-term integration" },
    { factor: "Admissions", detail: "Direct application per school; municipal placement for many public schools", planningNote: "Public lottery and priority rules differ by gemeente — start early" },
    { factor: "Curriculum", detail: "IB, British, American etc. vs Dutch core curriculum", planningNote: "University recognition differs — match to future plans" },
    { factor: "Waiting lists", detail: "Common at flagship international schools in Randstad hubs", planningNote: "Apply 12+ months ahead for popular year groups" },
    { factor: "Commute", detail: "Suburban campuses common; cycling culture for Dutch public", planningNote: "Test door-to-door time from shortlisted housing areas" },
  ] satisfies InternationalSchoolsComparisonRow[],
  snapshotScenarios: [
    { profile: "UK family — British curriculum", scenario: "Children on National Curriculum; target UK universities; relocating to Amsterdam", whatToCheck: "British School Amsterdam vs IB schools — compare IGCSE/A-Level continuity and commute." },
    { profile: "US State Department — The Hague", scenario: "Standard US curriculum expected; children ages 8 and 15", whatToCheck: "American School of The Hague vs IB alternatives; verify AP availability and waiting lists." },
    { profile: "Single-school city — Groningen", scenario: "University post; one IB school in region", whatToCheck: "Confirm places before lease; Dutch public or bilingual backup if waitlisted." },
    { profile: "Budget-conscious family", scenario: "Two children; employer education allowance capped at €12k/child", whatToCheck: "Compare total cost including extras; explore Dutch public plus language support." },
  ],
  snapshotCards: [
    { label: "IB schools", value: "Widest network", note: "Primary through diploma programmes in most major cities." },
    { label: "British schools", value: "Strong presence", note: "Popular with UK and Commonwealth families; IGCSE and A-Level pathways." },
    { label: "American schools", value: "The Hague hub", note: "American School of The Hague is the flagship US-curriculum option." },
    { label: "Bilingual schools", value: "Growing options", note: "English–Dutch tracks in select cities — verify language balance per school." },
    { label: "English education", value: "Primary medium", note: "Most international schools teach in English with Dutch as a subject." },
    { label: "International communities", value: "City-linked", note: "School clusters follow diplomatic, corporate and university hubs." },
  ],
  howItWorks: {
    heading: "How international schools work in the Netherlands",
    paragraphs: [
      "International schools in the Netherlands are privately funded and operate outside the standard Dutch public school system. They typically teach in English (or another international language) and follow a non-Dutch curriculum such as IB, British or American programmes.",
      "Who attends? Diplomatic families, highly skilled migrants, international professionals, entrepreneurs and Dutch families seeking an international education path. Admission is through the school directly — not through municipal lottery systems used for many Dutch public schools.",
      "Accreditation varies by curriculum body (IBO, Cambridge, Cognia and others). Verify accreditation status on each school's website and with the relevant curriculum organisation.",
    ],
    comparisonRows: [
      {
        factor: "Funding",
        detail: "Private tuition fees — not free like Dutch public schools",
        planningNote: "Budget for tuition plus registration, trips and transport extras",
      },
      {
        factor: "Language",
        detail: "English-medium instruction is standard; Dutch taught as subject in many schools",
        planningNote: "Ask about Dutch integration if you plan long-term residency",
      },
      {
        factor: "Curriculum",
        detail: "IB, British, American, European or bilingual — not Dutch core curriculum",
        planningNote: "Match curriculum to home-country continuity or university plans",
      },
      {
        factor: "Admissions",
        detail: "Direct application to each school with own timeline and criteria",
        planningNote: "Apply to multiple schools; waiting lists are common in major cities",
      },
      {
        factor: "School years",
        detail: "Often aligned to international age bands; may differ from Dutch group system",
        planningNote: "Bring report cards and ask about year-group placement assessments",
      },
      {
        factor: "Accreditation",
        detail: "IBO, Cambridge, Cognia or European Schools frameworks",
        planningNote: "Verify on school site — important for university recognition",
      },
    ] satisfies InternationalSchoolsComparisonRow[],
    points: [
      "Difference from Dutch public schools: international schools charge tuition, teach in English and follow non-Dutch curricula.",
      "Who attends: expat families, diplomats, international professionals and some Dutch families seeking global pathways.",
      "Language: English is the primary medium; Dutch, French or German sections exist in European and bilingual schools.",
      "Curriculum: IB is most widespread; British and American options cluster in The Hague and Amsterdam areas.",
      "Accreditation: check IBO, Cambridge, Cognia or European Schools credentials per school.",
      "School years: age placement may differ from Dutch basisschool groups — assessments are common on entry.",
    ],
  },
  curriculumCards: [
    {
      title: "International Baccalaureate",
      curriculum: "PYP, MYP and DP programmes",
      typicalAges: "3–18",
      qualifications: "IB Diploma, IB Career-related Programme",
      whoItSuits: "Families wanting a globally recognised pathway and frequent relocations.",
    },
    {
      title: "British curriculum",
      curriculum: "National Curriculum, IGCSE, A-Levels",
      typicalAges: "3–18",
      qualifications: "IGCSE, A-Levels",
      whoItSuits: "UK and Commonwealth families; university plans in the UK or internationally.",
    },
    {
      title: "American curriculum",
      curriculum: "US standards, Advanced Placement (AP)",
      typicalAges: "3–18",
      qualifications: "US High School Diploma, AP courses",
      whoItSuits: "US families and those targeting North American universities.",
    },
    {
      title: "European Schools",
      curriculum: "European Baccalaureate, multilingual sections",
      typicalAges: "4–18",
      qualifications: "European Baccalaureate",
      whoItSuits: "EU institution families and multilingual learners — eligibility rules apply.",
    },
    {
      title: "Bilingual schools",
      curriculum: "Dual-language tracks (often English–Dutch)",
      typicalAges: "4–18",
      qualifications: "Varies — may combine IB or national elements",
      whoItSuits: "Families planning long-term Dutch integration while keeping English instruction.",
    },
    {
      title: "Other international programmes",
      curriculum: "German, French, Swiss and specialist models",
      typicalAges: "3–18",
      qualifications: "Abitur, Baccalauréat, Swiss Matura and others",
      whoItSuits: "Families maintaining a specific home-country education path.",
    },
  ] satisfies InternationalSchoolsCurriculumCard[],
  cityComparison: [
    {
      city: "Amsterdam",
      href: "/netherlands/amsterdam/",
      schoolCount: "8+ international options",
      community: "Large expat, tech and diplomatic population",
      waitingLists: "Common at popular IB schools",
      typicalFees: "€14k–€24k primary; €18k–€28k secondary (verify per school)",
      curricula: "IB, British, bilingual",
    },
    {
      city: "Rotterdam",
      href: "/netherlands/rotterdam/",
      schoolCount: "3–4 main options",
      community: "Port, logistics and corporate expat hub",
      waitingLists: "Moderate; secondary places can be tighter",
      typicalFees: "€12k–€20k primary; €15k–€22k secondary",
      curricula: "IB, British, bilingual",
    },
    {
      city: "The Hague",
      href: "/netherlands/the-hague/",
      schoolCount: "10+ international options",
      community: "Diplomatic and NGO capital of the Netherlands",
      waitingLists: "Often long at flagship schools",
      typicalFees: "€16k–€26k primary; €20k–€30k secondary at flagship schools",
      curricula: "IB, British, American, European, French, German",
    },
    {
      city: "Utrecht",
      href: "/netherlands/utrecht/",
      schoolCount: "2–3 main options",
      community: "University city with growing international families",
      waitingLists: "Moderate",
      typicalFees: "€12k–€20k primary; €15k–€22k secondary",
      curricula: "IB",
    },
    {
      city: "Eindhoven",
      href: "/netherlands/eindhoven/",
      schoolCount: "1–2 main campuses",
      community: "High-tech and ASML corridor families",
      waitingLists: "Can be tight for popular year groups",
      typicalFees: "€12k–€20k primary; €15k–€22k secondary",
      curricula: "IB, British elements",
    },
    {
      city: "Haarlem",
      href: "/netherlands/haarlem/",
      schoolCount: "1 main IB school",
      community: "Amsterdam commuter families",
      waitingLists: "Moderate",
      typicalFees: "€12k–€20k primary; €15k–€22k secondary",
      curricula: "IB",
    },
    {
      city: "Leiden",
      href: "/netherlands/leiden/",
      schoolCount: "1 primary-focused option",
      community: "University and pharma corridor",
      waitingLists: "Primary places can fill early",
      typicalFees: "€12k–€20k primary; €15k–€22k secondary",
      curricula: "IB primary",
    },
    {
      city: "Groningen",
      href: "/netherlands/groningen/",
      schoolCount: "1 main IB school",
      community: "Northern Netherlands expat hub",
      waitingLists: "Generally shorter than Randstad",
      typicalFees: "€10k–€16k primary; €12k–€18k secondary",
      curricula: "IB",
    },
    {
      city: "Maastricht",
      href: "/netherlands/maastricht/",
      schoolCount: "2 options incl. UWC",
      community: "Cross-border and university families",
      waitingLists: "Varies by programme",
      typicalFees: "€12k–€20k primary; €15k–€22k secondary",
      curricula: "IB",
    },
  ] satisfies InternationalSchoolsCityCard[],
  feeExamples: {
    heading: "Tuition fees: what families should budget for",
    paragraphs: [
      "International school fees vary significantly by school, age group, curriculum and included services. The ranges below are illustrative planning bands based on publicly listed fee schedules — always confirm current amounts directly with each school.",
      "Additional costs often include registration fees, technology levies, lunch programmes, school trips, exam fees and transport. Do not treat these ranges as quotes or guarantees.",
    ],
    rows: [
      {
        category: "Annual tuition — primary",
        primaryRange: "€12,000 – €22,000",
        secondaryRange: "—",
        notes: "Lower in smaller cities; higher at flagship Randstad schools",
      },
      {
        category: "Annual tuition — secondary",
        primaryRange: "—",
        secondaryRange: "€15,000 – €28,000",
        notes: "IB Diploma and A-Level years often at upper end",
      },
      {
        category: "Registration / enrolment fee",
        primaryRange: "€500 – €2,500",
        secondaryRange: "One-time or annual",
        notes: "Sometimes non-refundable — check contract terms",
      },
      {
        category: "Technology fee",
        primaryRange: "€200 – €800 / year",
        secondaryRange: "Varies by device policy",
        notes: "Laptop or tablet programmes common from mid-primary",
      },
      {
        category: "Lunch programme",
        primaryRange: "€3 – €8 / day",
        secondaryRange: "Optional at many schools",
        notes: "Some schools require hot lunch; others are bring-your-own",
      },
      {
        category: "School transport",
        primaryRange: "€1,500 – €4,000 / year",
        secondaryRange: "Route-dependent",
        notes: "Bus services common around The Hague and Amsterdam",
      },
      {
        category: "Trips & activities",
        primaryRange: "€500 – €2,000 / year",
        secondaryRange: "Increases in secondary",
        notes: "Model UN, sports tours and IB CAS trips add cost",
      },
    ] satisfies InternationalSchoolsFeeRow[],
    disclaimer:
      "Fees change annually. Use school websites and admissions offices for current pricing — this guide provides orientation ranges only.",
    scenarios: [
      { profile: "Two children — Amsterdam IB", scenario: "Ages 7 and 11 at mid-range IB schools; bus required from Haarlem", whatToCheck: "Budget ~€45k–€50k tuition plus ~€6k transport and €2k activities — confirm employer allowance caps." },
      { profile: "Single child — The Hague American", scenario: "Age 14 entering Grade 9; ASH flagship fees", whatToCheck: "Secondary often €22k–€28k plus registration €1k+ and laptop levy — request itemised schedule." },
      { profile: "Primary-only — Rotterdam", scenario: "One child age 5; bilingual interest", whatToCheck: "Compare €12k–€18k primary bands; bilingual tracks may have separate application fees." },
      { profile: "Employer allowance €15k cap", scenario: "Two children; allowance does not cover full tuition", whatToCheck: "Model out-of-pocket gap including registration and trips before accepting role." },
    ],
  },
  admissions: {
    heading: "Admissions process: realistic timelines",
    paragraphs: [
      "Each international school manages its own admissions. While steps are similar across schools, deadlines and assessment requirements differ. Starting early — especially in The Hague and Amsterdam — reduces stress when relocation dates are fixed.",
    ],
    timeline: [
      { stage: "Research", timing: "12–18 months before start", action: "Shortlist schools by city, curriculum and commute; read fee schedules online." },
      { stage: "Initial enquiry", timing: "9–12 months before", action: "Contact admissions; ask about waiting lists and year-group availability." },
      { stage: "Application", timing: "6–12 months before", action: "Submit forms, previous school reports and passport copies." },
      { stage: "Assessment", timing: "Varies", action: "Some schools test English, maths or general readiness — especially mid-year." },
      { stage: "Interview", timing: "After application review", action: "Family or student meeting — more common in secondary entry." },
      { stage: "Offer", timing: "Weeks to months after review", action: "Place offer or waiting list position — respond by deadline." },
      { stage: "Acceptance & enrolment", timing: "Before start date", action: "Pay deposit, sign contract and complete medical or visa documentation." },
    ] satisfies InternationalSchoolsTimelineRow[],
    documents: [
      "Previous school reports (2–3 years where available)",
      "Passport and residence permit copies",
      "Birth certificate",
      "Vaccination or medical records (school-specific)",
      "Reference from previous school (secondary)",
      "Special educational needs documentation if applicable",
    ],
    scenarios: [
      { profile: "August start — organised family", scenario: "Relocation confirmed January; children ages 8 and 13", whatToCheck: "Research Jan–Feb, apply Mar–Apr, assessments May–Jun — standard Randstad timeline." },
      { profile: "Late application — Amsterdam", scenario: "Job offer May; school start September", whatToCheck: "Contact 3+ schools immediately; ask which year groups still have places vs waitlist only." },
      { profile: "Secondary with IEP", scenario: "Child with documented learning support plan entering Year 10", whatToCheck: "Share IEP at enquiry stage; ask about learning support staffing before formal application." },
      { profile: "Corporate relocation package", scenario: "Employer names one school; family prefers another curriculum", whatToCheck: "Verify placement yourself — employer suggestion does not guarantee year-group availability." },
    ],
  },
  waitingLists: {
    heading: "Waiting lists: plan ahead",
    paragraphs: [
      "Popular international schools — especially in The Hague, Amsterdam and parts of Rotterdam — maintain waiting lists for certain year groups. Lists are often age-specific: reception and IB Diploma entry years tend to be most competitive.",
      "Planning ahead, applying to multiple schools and keeping Dutch public or bilingual alternatives on your shortlist reduces relocation risk if your first choice is full.",
    ],
    points: [
      "Planning ahead: enquire 12+ months before your target start date in major cities.",
      "Popular cities: The Hague and Amsterdam see the longest lists at flagship schools.",
      "Relocation timing: align house search with school catchment and commute — not just city centre.",
      "Alternatives: Dutch public schools, bilingual programmes or nearby city options may open faster.",
    ],
    scenarios: [
      { profile: "HSM family — The Hague", scenario: "Target ASH or BSN; relocation confirmed for August", whatToCheck: "Apply immediately on confirmation — both schools often have year-group waiting lists." },
      { profile: "Amsterdam tech hire", scenario: "Two children ages 6 and 10; lease signed in Zuid", whatToCheck: "Apply to AICS, ISA and British School; compare commute from lease address." },
      { profile: "Mid-year Eindhoven", scenario: "ASML transfer in January; one child age 14", whatToCheck: "Contact ISE directly with reports — mid-year IB MYP places vary by cohort." },
      { profile: "Backup planning", scenario: "First-choice school waitlisted", whatToCheck: "Keep Dutch public option open via municipality; consider temporary placement." },
    ],
  },
  language: {
    heading: "Language options and support",
    paragraphs: [
      "English is the primary language of instruction at most international schools in the Netherlands. Dutch is commonly taught as a subject — useful for integration but not equivalent to full Dutch-medium education.",
      "Bilingual programmes, European Schools language sections and ELL (English Language Learner) support vary by school. Ask admissions about class composition and support hours if your child is not a native English speaker.",
    ],
    options: [
      { title: "English-medium instruction", body: "Standard at IB, British and American schools — verify ELL support if needed." },
      { title: "Dutch integration", body: "Dutch taught as subject; some bilingual tracks offer 50/50 models in select schools." },
      { title: "Bilingual programmes", body: "English–Dutch or English–German tracks — fewer places; verify language split per year." },
      { title: "Additional languages", body: "French, German and Spanish common as electives; European Schools offer multilingual sections." },
      { title: "Language support", body: "ELL and learning support teams vary — ask for policy documents during admissions." },
    ] satisfies InternationalSchoolsCard[],
    comparisonRows: [
      { factor: "English instruction", detail: "Full curriculum in English at most international schools", planningNote: "Ask about ELL pull-out hours if child is not fluent" },
      { factor: "Dutch as subject", detail: "Typically 2–5 lessons per week from primary", planningNote: "Useful for integration; not equivalent to Dutch-medium schooling" },
      { factor: "Bilingual 50/50", detail: "Select schools e.g. Optimist, some Haarlem/Rotterdam tracks", planningNote: "Verify which subjects are in Dutch each year" },
      { factor: "European Schools", detail: "Language sections (EN, FR, DE, etc.) with multilingual curriculum", planningNote: "Eligibility rules apply — not open to all families" },
      { factor: "Home language", detail: "Some schools support mother-tongue clubs or IB language A", planningNote: "Ask about exam language options at secondary level" },
    ] satisfies InternationalSchoolsComparisonRow[],
  },
  transport: {
    heading: "Getting to school: transport options",
    paragraphs: [
      "Dutch families commonly cycle to school from age 8–10 with proper training. International schools in suburban locations often run bus services; urban schools may rely on public transport and parent drop-off.",
    ],
    options: [
      { title: "School buses", body: "Contracted routes in The Hague, Wassenaar and Amsterdam corridors — fees separate from tuition." },
      { title: "Cycling", body: "Very common once children pass fietsexamen — factor safe routes from your housing search." },
      { title: "Public transport", body: "OV-chipkaart from age 4+ with begeleider; many secondary students travel independently." },
      { title: "Parent drop-off", body: "Peak congestion at suburban campuses — check parking and kiss-and-ride rules." },
      { title: "Walking", body: "Feasible in urban locations — still verify safe pedestrian routes." },
    ] satisfies InternationalSchoolsCard[],
    commuteExamples: [
      { factor: "Wassenaar school + Amsterdam lease", detail: "40–60 min by car in peak; bus 50–70 min", planningNote: "Many families relocate closer or accept long commute — test before signing" },
      { factor: "Amstelveen ISA + Amsterdam Zuid", detail: "15–25 min by tram/metro or bike", planningNote: "Popular combination — verify OV route with child age in mind" },
      { factor: "Rotterdam suburban campus", detail: "School bus hubs in Kralingen or Hillegersberg", planningNote: "Bus fees €1,500–€3,500/year typical — confirm stops near home" },
      { factor: "Eindhoven ISE + Waalre/Veldhoven", detail: "10–20 min by bike or car for ASML corridor families", planningNote: "Shorter commutes common — still check after-school activity timing" },
      { factor: "Age 6 on public transport", detail: "Requires adult begeleider on OV until independent travel age", planningNote: "Factor parent time if not using bus or drop-off" },
    ] satisfies InternationalSchoolsComparisonRow[],
  },
  choosing: {
    heading: "Choosing the right school: decision matrix",
    paragraphs: [
      "There is no universal best international school — the right fit depends on curriculum continuity, location, budget, languages, commute and your child's learning style. Use the matrix below as a conversation tool with your family and admissions offices.",
    ],
    matrix: [
      { factor: "Curriculum", question: "Does IB, British or American fit university plans?", example: "UK university plans → British A-Levels may feel more direct than IB." },
      { factor: "Location", question: "Can you live within 30–45 minutes commute?", example: "The Hague school + Amsterdam lease = daily strain — reconsider housing." },
      { factor: "Budget", question: "Total cost including extras, not tuition alone?", example: "€20k tuition + bus + trips can exceed €25k per child." },
      { factor: "Commute", question: "Cycle, bus or OV realistic for your child's age?", example: "Age 6 on a 45-minute bus — tiring long term." },
      { factor: "Languages", question: "English support or Dutch integration priority?", example: "Long-term NL residency → ask about Dutch hours per week." },
      { factor: "Future university", question: "Recognition of qualifications in target countries?", example: "IB widely recognised — still verify subject choices for medicine or engineering." },
      { factor: "Child's personality", question: "Small school vs large campus; sports vs arts?", example: "Visit schools and observe break times if possible." },
    ] satisfies InternationalSchoolsDecisionRow[],
  },
  midYear: {
    heading: "Moving mid-year: what to expect",
    paragraphs: [
      "Mid-year admissions happen but are less predictable than August or January intake cycles. Schools assess whether a year group has capacity and whether your child's previous curriculum aligns with their programme.",
      "Prepare digital copies of report cards, curriculum guides and any IEP or support plans. Integration support varies — ask about buddy programmes and counsellor availability.",
    ],
    points: [
      "Admissions during school year: possible when places exist — contact admissions directly.",
      "International transfers: bring 2–3 years of reports and course descriptions for placement.",
      "Records: immunisation, transcripts and reference letters speed up review.",
      "Integration: ELL, counselling and extracurricular sign-up help transition — ask what's offered.",
    ],
    checklist: [
      "Email admissions with target start date and current year group in home system",
      "Prepare digital PDFs of report cards, curriculum guides and attendance records",
      "Ask which intake windows exist outside August (January, April varies by school)",
      "Confirm whether assessments are online or on-site before booking travel",
      "Request buddy programme, counsellor access and ELL support details",
      "Keep Dutch public or temporary placement option active until offer confirmed",
    ],
    scenarios: [
      { profile: "January start — corporate transfer", scenario: "Family arrives mid-January; child age 9 in British Year 4 equivalent", whatToCheck: "Ask schools about spring intake; British School may map year group differently from Dutch group." },
      { profile: "February — IB Diploma", scenario: "Age 16 transferring into IB DP Year 1 in March", whatToCheck: "Subject availability and CAS continuity — DP mid-year entry is often most constrained." },
      { profile: "Military/diplomatic surge", scenario: "Sudden posting; 3 weeks to start date", whatToCheck: "Contact admissions daily; prepare interim online schooling; explore temporary Dutch public." },
      { profile: "Same curriculum transfer", scenario: "IB student moving from Singapore to Amsterdam", whatToCheck: "Request IB continuity letter from current school; transfer within IB is usually smoother." },
    ],
  },
  sen: {
    heading: "Special educational needs: overview",
    paragraphs: [
      "Support for special educational needs (SEN) varies significantly between international schools. Some employ dedicated learning support teams; others have limited capacity for moderate or complex needs.",
      "If your child has an existing support plan, share documentation early in admissions and ask specific questions about staffing, classroom accommodations and external therapist access. Lighthouse Special Education in The Hague is a specialist option for significant needs.",
    ],
    points: [
      "Support availability: ask for learning support policy and staff ratios before applying.",
      "School differences: capacity ranges from inclusive mainstream to specialist referral.",
      "Planning ahead: disclose needs in initial enquiry — avoids placement mismatch later.",
    ],
    questionsForAdmissions: [
      "Do you have a published learning support policy and dedicated SEN coordinator?",
      "What is the maximum support your school can provide in-class vs pull-out?",
      "Can external therapists (speech, OT) work on campus or visit during school hours?",
      "How do you handle exam accommodations for IGCSE, IB or AP assessments?",
      "What is your process if a child's needs exceed current support capacity?",
      "Can we speak with a current parent of a child with similar support needs?",
    ],
    scenarios: [
      { profile: "Mild dyslexia support", scenario: "Child age 10 with existing support plan; needs reading accommodations", whatToCheck: "Ask about in-class support hours and exam access arrangements at each shortlisted school." },
      { profile: "Moderate autism — mainstream", scenario: "Family seeks inclusive IB primary with structured transitions", whatToCheck: "Visit learning support team; ask about class size, sensory spaces and buddy systems." },
      { profile: "Significant needs", scenario: "Complex support requirements beyond typical mainstream capacity", whatToCheck: "Lighthouse Special Education The Hague or specialist referral — verify early." },
      { profile: "Undisclosed needs", scenario: "Family waits until after offer to mention IEP", whatToCheck: "Risk of place withdrawal or inadequate support — disclose at enquiry stage." },
    ],
  },
  familyChecklist: [
    "Research target cities and list international schools within realistic commute",
    "Compare curricula against home country and university plans",
    "Check waiting lists with admissions offices 6–12 months ahead",
    "Visit schools virtually or in person when possible",
    "Review commute from shortlisted housing areas",
    "Request full fee schedules including registration and extras",
    "Prepare report cards, references and passport copies",
    "Apply to more than one school and keep Dutch public options open",
  ],
  familyChecklistEarly: [
    "Confirm relocation date and employer education allowance terms",
    "Map schools by city against job location and housing search zones",
    "Read IBO/Cambridge accreditation pages for shortlisted schools",
    "Join city expat parent groups for orientation — not placement guarantees",
  ],
  familyChecklistApply: [
    "Submit applications to 3+ schools where possible",
    "Track application deadlines and assessment dates in a shared calendar",
    "Request waiting list position in writing after each application",
    "Parallel Dutch public registration if considering backup route",
  ],
  familyChecklistPreMove: [
    "Accept offer and pay deposit only after housing commute confirmed",
    "Order uniforms, devices and bus passes per school instructions",
    "Share medical and SEN records with admissions securely",
    "Book settling-in activities and after-school care if needed",
  ],
  mistakeCards: [
    { title: "Applying too late", body: "Example: signing a lease in August for September start without confirming school places — apply before housing where possible." },
    { title: "Ignoring commute", body: "Example: choosing a Wassenaar school while living in central Rotterdam — 90-minute daily travel exhausts children." },
    { title: "Choosing only by reputation", body: "Example: selecting a flagship school that does not fit your child's learning style — visit and ask about support." },
    { title: "Not considering curriculum", body: "Example: switching from British to IB mid-secondary without credit mapping — ask admissions about transition." },
    { title: "Ignoring waiting lists", body: "Example: assuming a place exists because the company mentions the school — verify year-group availability in writing." },
    { title: "Not budgeting for extras", body: "Example: tuition quoted without bus, lunch, trips and exam fees — request full cost breakdown." },
  ] satisfies InternationalSchoolsCard[],
  faq: [
    {
      q: "How much do international schools cost?",
      a: "Annual tuition commonly ranges from roughly €12,000–€22,000 for primary and €15,000–€28,000 for secondary at many schools, plus registration, transport and activity fees. Amounts vary widely — confirm current fees on each school's website.",
    },
    {
      q: "Which curriculum is best?",
      a: "There is no single best curriculum. IB offers global portability; British A-Levels suit UK university paths; American AP suits US routes. Match curriculum to your child's needs and future plans rather than rankings.",
    },
    {
      q: "Can my child start mid-year?",
      a: "Yes, when places exist. Mid-year entry depends on year-group capacity and assessment. Contact admissions with report cards as early as possible — placement is less predictable than August intake.",
    },
    {
      q: "Are waiting lists common?",
      a: "Yes, at popular schools in The Hague and Amsterdam especially. Waiting lists are often year-group specific. Apply early and keep alternatives including Dutch public schools on your shortlist.",
    },
    {
      q: "Do schools teach Dutch?",
      a: "Most international schools teach Dutch as a subject. Full bilingual English–Dutch programmes exist at select schools. Dutch public schools remain the main route for Dutch-medium education.",
    },
    {
      q: "Which cities have the most schools?",
      a: "The Hague and Amsterdam have the largest selection, followed by Rotterdam and Utrecht. Smaller cities may have one IB school — verify before accepting a job in a regional location.",
    },
    {
      q: "Can children transfer easily between international schools?",
      a: "Transfers within the same curriculum (e.g. IB to IB) are usually smoother. Curriculum changes may require credit mapping and assessments. Bring full transcripts and course descriptions.",
    },
    {
      q: "Should we choose IB or British?",
      a: "IB emphasises breadth and global recognition; British A-Levels allow deeper specialisation earlier. Consider your child's strengths, relocation plans and target universities — visit schools before deciding.",
    },
  ],
  relatedGuides: [
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Family relocation guide covering schools, registration and settling in." },
    { label: "Dutch Schools", href: "/netherlands/education/dutch-schools-netherlands/", status: "live", description: "Basisschool, secondary pathways, enrolment and language support for expat families." },
    { label: "Dutch Education System", href: "/netherlands/education/dutch-education-system/", status: "comingSoon", description: "Broader system overview — complements the Dutch schools guide." },
    { label: "Housing for Families", href: HOUSING_HUB_PATH, status: "live", description: "Find family-friendly areas near schools and commute routes." },
    { label: "Healthcare for Children", href: "/netherlands/living/healthcare-basics/", status: "live", description: "Insurance, huisarts and paediatric care after your move." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Kinderopvangtoeslag for registered childcare — separate from school fees." },
    { label: "Best Cities for Families", href: BEST_CITIES_FOR_FAMILIES_PATH, status: "live", description: "Compare family-oriented Dutch cities including school access." },
    { label: "Family Life", href: "/netherlands/culture/family-and-school-culture/", status: "live", description: "Dutch family norms, school culture and community integration." },
    { label: "Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Explore Amsterdam, The Hague, Rotterdam, Utrecht and more." },
  ] satisfies InternationalSchoolsLink[],
  educationHubCards: [
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_NETHERLANDS_PATH, status: "live", description: "This guide — curricula, directory, admissions and fees." },
    { label: "Dutch Schools", href: "/netherlands/education/dutch-schools-netherlands/", status: "live", description: "Public and special Dutch-medium schools — basisschool, enrolment and language support." },
    { label: "Daycare", href: "/netherlands/education/daycare-netherlands/", status: "comingSoon", description: "Early childhood care before school age." },
    { label: "Universities", href: "/netherlands/education/universities-netherlands/", status: "comingSoon", description: "Higher education options for international students." },
    { label: "Student Life", href: "/netherlands/education/universities-netherlands/", status: "comingSoon", description: "Student housing, visas and campus life." },
    { label: "Learning Dutch", href: "/netherlands/living/language/", status: "live", description: "Practical Dutch for daily life and integration." },
  ] satisfies InternationalSchoolsLink[],
  exploreNextCards: [
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "End-to-end family relocation planning." },
    { label: "Family Life", href: "/netherlands/culture/family-and-school-culture/", status: "live", description: "School culture and Dutch family life." },
    { label: "Dutch Schools", href: "/netherlands/education/dutch-schools-netherlands/", status: "live", description: "Dutch public and special schools — enrolment and language support." },
    { label: "Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities before you choose a school." },
    { label: "Housing", href: HOUSING_HUB_PATH, status: "live", description: "Rent or buy near your shortlisted schools." },
  ] satisfies InternationalSchoolsLink[],
  officialSources: [
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
    {
      label: "IBO — International Baccalaureate",
      href: "https://www.ibo.org/",
      description: "Find IB World Schools and verify programme authorisation.",
    },
    {
      label: "Council of International Schools",
      href: "https://www.cois.org/",
      description: "International school membership and accreditation context.",
    },
    {
      label: "European Schools",
      href: "https://www.eursc.eu/",
      description: "Official European Schools system information and admissions context.",
    },
    {
      label: "Nuffic",
      href: "https://www.nuffic.nl/en",
      description: "Dutch organisation for international education and credential recognition.",
    },
  ],
  officialSourcesNote:
    "School admissions, fees and availability change frequently. Always verify current information on official school websites and government sources — this guide is orientation only, not admissions advice.",
  schools: internationalSchoolsDirectory,
  curricula: [
    "IB",
    "British",
    "American",
    "European",
    "Bilingual",
    "German",
    "French",
    "Special education",
    "Other international",
  ],
} as const;

export type InternationalSchoolsNetherlandsPage = typeof internationalSchoolsNetherlandsPage;
