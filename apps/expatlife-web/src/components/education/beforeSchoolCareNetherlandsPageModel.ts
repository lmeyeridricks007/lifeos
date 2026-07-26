export const BEFORE_SCHOOL_CARE_PATH = "/netherlands/education/before-school-care-netherlands/" as const;
export const AFTER_SCHOOL_CARE_PATH = "/netherlands/education/after-school-care-netherlands/" as const;
export const EDUCATION_HUB_PATH = "/netherlands/education/" as const;
export const DAYCARE_NETHERLANDS_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const CHILD_BENEFITS_PATH = "/netherlands/family/child-benefits-netherlands/" as const;
export const DUTCH_SCHOOLS_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const INTERNATIONAL_SCHOOLS_PATH = "/netherlands/education/international-schools-netherlands/" as const;
export const PARENTING_NETHERLANDS_PATH = "/netherlands/family/parenting-netherlands/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const CHILDCARE_COST_ESTIMATOR_PATH = "/netherlands/family/tools/childcare-cost-estimator/" as const;

export type VsoLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type VsoCard = {
  title: string;
  body: string;
};

export type VsoMistakeCard = {
  title: string;
  body: string;
  advice: string;
};

export type VsoTimelineStep = {
  time: string;
  title: string;
  detail: string;
};

export type VsoProviderRecord = {
  provider: string;
  cities: string;
  holidayCare: string;
  beforeSchool: string;
  afterSchool: string;
  languages: string;
  website: string;
};

export type VsoFeeRow = {
  category: string;
  range: string;
  notes: string;
};

export type VsoDecisionRow = {
  factor: string;
  question: string;
  example: string;
};

export type VsoCityCard = {
  city: string;
  href: string;
  availability: string;
  englishOptions: string;
  waitingLists: string;
  internationalCommunity: string;
};

export type VsoComparisonRow = {
  factor: string;
  vso: string;
  bso: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const VISUAL_PREFIX = "before-school-care-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const beforeSchoolCareNetherlandsPage = {
  slug: "before-school-care-netherlands",
  path: BEFORE_SCHOOL_CARE_PATH,
  publish: true,
  publishDate: "2027-01-27",
  seo: {
    title: "Before-School Care (VSO) in the Netherlands | Complete Guide for Parents",
    description:
      "Learn how before-school care (VSO) works in the Netherlands, including costs, childcare allowance, registration, school partnerships and choosing the right provider.",
    keywords: [
      "before school care netherlands",
      "VSO netherlands",
      "voorschoolse opvang",
      "childcare before school",
      "before school childcare",
      "school childcare netherlands",
      "childcare allowance VSO",
      "working parents childcare",
      "expat childcare",
      "school pickup and drop-off",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Education · Childcare · VSO",
    pageTitle: "Before-School Care (VSO) in the Netherlands",
    subtitle:
      "Everything parents need to know about before-school care (VSO), including daily routines, childcare allowance, school partnerships, costs and choosing the right provider.",
    primaryCta: { label: "Understand Before-School Care", href: "#quick-answer" },
    secondaryCta: { label: "Compare Childcare Options", href: DAYCARE_NETHERLANDS_PATH },
    chips: ["Morning Care", "School Drop-off", "Childcare Allowance", "School Partnerships"],
    image: {
      src: "/images/heroes/before-school-care-netherlands-hero-premium-v2.png",
      alt: "Photorealistic editorial photo of a before-school care caregiver escorting a diverse group of primary-school children with backpacks along a Dutch brick sidewalk toward a basisschool entrance at sunrise — parked bicycles, canal houses, soft golden morning light, calm school drop-off walk.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium VSO overview for working parents showing morning arrival, breakfast, quiet play, walk to school and allowance checklist rail.",
      "VSO covers the early commute gap before basisschool opens — register separately and confirm school drop-off."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance cards for morning hours, school drop-off, allowance, waiting lists, VSO vs BSO and working-parent planning.",
      "Use these cards to orient yourself before shortlisting morning providers."
    ),
    whatIsVso: visual(
      "what-is-vso",
      "Premium diagram explaining voorschoolse opvang ages 4–12, morning hours, school walk and how VSO differs from daycare and BSO.",
      "VSO is morning care for primary school children — not preschool and not after-school BSO."
    ),
    vsoVsBso: visual(
      "vso-vs-bso",
      "Premium comparison board for VSO vs BSO covering purpose, time, activities, age, holiday care, partnerships and routines.",
      "Many families use both — confirm whether your location offers morning and afternoon care."
    ),
    dailyRoutine: visual(
      "daily-routine",
      "Premium morning timeline from 07:00 arrival through breakfast, reading, quiet games, arts, outdoor time, walk to school and school begins.",
      "Typical mornings vary by provider — confirm routines and school walk on visits."
    ),
    whoUsesVso: visual(
      "who-uses-vso",
      "Premium family profile board for early-shift parents, dual-income households, international schools and part-time morning cover.",
      "VSO suits parents whose work starts before school gates open."
    ),
    providersDirectory: visual(
      "providers-directory",
      "Premium orientation board listing national providers with VSO emphasis, city filters and language notes — not rankings.",
      "Filter by city and VSO availability — always confirm morning slots on each provider website."
    ),
    costs: visual(
      "costs",
      "Premium VSO cost breakdown with hourly ranges, monthly morning packages, registration and breakfast extras.",
      "Treat ranges as planning orientation — request written quotes for your morning days."
    ),
    childcareAllowance: visual(
      "childcare-allowance",
      "Premium kinderopvangtoeslag flow from LRK registration through work hours to Belastingdienst toeslagen application for VSO.",
      "Allowance depends on income and hours — see our dedicated allowance guide for detail."
    ),
    waitingLists: visual(
      "waiting-lists",
      "Premium waiting list planning board for morning VSO slots in Amsterdam, The Hague and Randstad hubs.",
      "Morning slots can be scarcer than afternoons — register when basisschool place is confirmed."
    ),
    schoolPartnerships: visual(
      "school-partnerships",
      "Premium school-to-VSO partnership map showing walk routes, drop-off points and partner basisschool lists.",
      "Confirm your school is on the provider drop-off list before signing."
    ),
    choosingVso: visual(
      "choosing-vso",
      "Premium decision matrix comparing location, school walk, hours, breakfast, languages, outdoor space, BSO combo and cost.",
      "Use the matrix during visits — there is no single best VSO for every family."
    ),
    safetyQuality: visual(
      "safety-quality",
      "Premium quality board covering GGD inspections, LRK registration, staff ratios and morning safety protocols.",
      "Verify LRK and GGD reports before paying registration fees."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city comparison cards for Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and Haarlem VSO availability.",
      "City choice affects morning slot scarcity, English options and typical costs."
    ),
    checklist: visual(
      "checklist",
      "Premium expat VSO planning checklist from school confirmation through LRK check, visits and allowance application.",
      "Work through this list once your basisschool place and early work hours are clear."
    ),
    mistakes: visual(
      "mistakes",
      "Premium common VSO mistakes board covering assuming school opens early, confusing VSO with preschool and single-provider reliance.",
      "Avoid assuming daycare or basisschool automatically includes morning care."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with VSO questions and short orientation answers for expat parents.",
      "FAQ answers orient you — confirm provider rules on official websites."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route map linking VSO to BSO, daycare, allowance, schools, parenting and relocation guides.",
      "VSO planning connects to school choice, commute and after-school BSO."
    ),
    educationHub: visual(
      "education-hub",
      "Premium education hub visual with cards for VSO, BSO, daycare, Dutch schools and international schools.",
      "This page is the VSO cornerstone — explore related education guides next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with next-step BSO, allowance, schools and family relocation guides.",
      "Pick your next guide based on whether you need afternoon BSO or allowance detail."
    ),
  },
  sectionNav: [
    { href: "#quick-answer", label: "Quick answer" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-is-vso", label: "What is VSO" },
    { href: "#vso-vs-bso", label: "VSO vs BSO" },
    { href: "#daily-routine", label: "Routine" },
    { href: "#who-uses-vso", label: "Who uses VSO" },
    { href: "#directory", label: "Directory" },
    { href: "#costs", label: "Costs" },
    { href: "#allowance", label: "Allowance" },
    { href: "#waiting-lists", label: "Waiting lists" },
    { href: "#school-partnerships", label: "School links" },
    { href: "#choosing-vso", label: "Choosing" },
    { href: "#safety-quality", label: "Safety" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#education-hub", label: "Education hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  quickAnswer: {
    heading: "Quick answer: before-school care (VSO) in the Netherlands",
    paragraphs: [
      "Voorschoolse opvang (VSO) is registered before-school childcare for primary school children, typically ages 4–12. Working parents use VSO when they need to leave for work before basisschool gates open — often from about 07:00 until the school day begins around 08:30.",
      "VSO is not the same as BSO (after-school care) and not the same as daycare or preschool. Daycare (kinderdagverblijf) serves children roughly 0–4; VSO is morning care for school-age children; BSO covers afternoons and often holidays. Many families combine VSO and BSO at the same provider — but not every location offers both.",
      "Register with an LRK-registered provider that walks or escorts children to your partner school. Childcare allowance (kinderopvangtoeslag) can reduce net costs if you meet Belastingdienst work-hour and income rules. This guide helps you compare morning options and connect VSO with school and commute planning — it does not rank providers or guarantee placement.",
    ],
    keyPoints: [
      { title: "Morning cover only", body: "Example: VSO bridges ~07:00 until school starts — it does not replace afternoon BSO or holiday camps." },
      { title: "Not preschool", body: "Example: voorschoolse opvang (VSO) is school-age morning care — not peuterspeelzaal or voorschool for toddlers." },
      { title: "School drop-off", body: "Example: staff typically walk or escort children to partner basisscholen — verify your school is on the list." },
      { title: "LRK for allowance", body: "Example: only LRK-registered VSO qualifies for kinderopvangtoeslag — verify on lrk.net before signing." },
    ] satisfies VsoCard[],
    highlights: [
      "Early work starts before school gates open (~08:30).",
      "Calm breakfast and quiet play before the school day.",
      "Supervised walk or escort to partner schools.",
      "Often combined with afternoon BSO at the same location.",
      "Childcare allowance may apply for LRK-registered hours.",
    ],
    scenarios: [
      { profile: "Early shift — Amsterdam", scenario: "Parent starts at 07:30; child in Dutch basisschool group 2", whatToCheck: "VSO opening time and school walk list; combine with BSO if needed until 18:00." },
      { profile: "Dual commute — The Hague", scenario: "Both parents leave before 08:00; international school corridor", whatToCheck: "English-friendly morning slots; Zein or Kindergarden VSO availability near school." },
      { profile: "Part-time mornings — Utrecht", scenario: "VSO Tue/Thu only; one parent works early those days", whatToCheck: "Flexible morning contract; allowance work-hour rules still apply." },
      { profile: "Pre-arrival planning", scenario: "Relocating August; child starts basisschool September", whatToCheck: "Email providers about morning slots; join waiting lists remotely where accepted." },
    ],
  },
  introPlanningSteps: [
    "Confirm basisschool place, school start time and your earliest work start before shortlisting VSO.",
    "Register with multiple LRK providers that offer morning care and walk to your school.",
    "Ask whether the same location also offers afternoon BSO if you need full wraparound cover.",
  ],
  snapshotCards: [
    { label: "Morning hours", value: "VSO ~07:00–08:30", note: "Typical window until school starts — exact times vary by location." },
    { label: "School drop-off", value: "Staff escort", note: "Walk or escort to partner schools — confirm your school is listed." },
    { label: "Age group", value: "Basisschool 4–12", note: "Primary school children — separate from daycare and preschool." },
    { label: "Allowance", value: "Kinderopvangtoeslag", note: "Income-dependent subsidy for LRK-registered care — apply via Belastingdienst." },
    { label: "Often with BSO", value: "Wraparound combo", note: "Many chains offer VSO + BSO — not guaranteed at every site." },
    { label: "Working parents", value: "Early commute fix", note: "VSO solves the gap when work starts before school gates open." },
  ],
  snapshotTips: [
    "Basisschool typically starts ~08:30 — VSO fills the early morning gap for working parents.",
    "Not every BSO location offers VSO — ask specifically about morning care when registering.",
    "VSO hours are shorter than daycare or full BSO afternoons — monthly fees are usually lower than full wraparound.",
    "Model net cost with allowance — gross provider fees are not what most eligible families pay.",
  ],
  whatIsVso: {
    heading: "What is VSO (voorschoolse opvang)?",
    paragraphs: [
      "VSO is licensed before-school care for children who attend primary school (basisschool). It gives working parents a safe place to drop children early — usually with breakfast or quiet play — before staff walk or escort them to school.",
      "Most VSO locations operate in or near schools, community centres or dedicated childcare buildings that also run afternoon BSO. Morning programmes are calmer than afternoons: reading corners, quiet games, light arts and outdoor time when weather allows.",
      "Unlike kinderdagverblijf for babies and toddlers, VSO assumes children follow school-age routines. It is also different from peuterspeelzaal / voorschool (preschool for ages ~2–4). Ages typically span 4–12 until the end of basisschool, though exact limits vary by provider.",
    ],
    points: [
      "Purpose: safe supervised morning care when parents start work before school opens.",
      "Ages: usually 4–12 (basisschool years) — confirm minimum age with each location.",
      "Hours: commonly ~07:00 until school start (~08:30) — verify opening time for early shifts.",
      "vs daycare: kinderdagverblijf covers 0–4 full days; VSO is morning-only for school-age children.",
      "vs BSO: BSO is after-school (and often holidays); VSO is before school.",
      "LRK registration: required for childcare allowance and quality oversight via GGD inspections.",
    ],
    comparisonRows: [
      { factor: "Age focus", detail: "VSO: 4–12 school-age · Daycare: 0–4 early years", planningNote: "Plan VSO when basisschool place confirmed" },
      { factor: "Hours", detail: "VSO: morning ~07:00–08:30 · Daycare: full day ~07:30–18:30", planningNote: "Match contract to your earliest drop-off" },
      { factor: "Registration", detail: "Separate contracts and waiting lists per care type", planningNote: "Do not assume automatic transfer from daycare" },
      { factor: "School link", detail: "VSO often tied to school walk/drop-off routes", planningNote: "Housing and school choice affect VSO options" },
      { factor: "Holiday care", detail: "VSO alone does not cover school holidays — use BSO vakantieopvang", planningNote: "Book holiday weeks via BSO or camps" },
    ],
  },
  vsoVsBso: {
    heading: "VSO vs BSO: which do you need?",
    paragraphs: [
      "VSO and BSO are related but not interchangeable. VSO covers mornings before school; BSO covers afternoons after school and often holiday and study-day programmes. Many Dutch providers market both under the broader buitenschoolse opvang umbrella — always ask which slots a specific location actually offers.",
      "Some families only need VSO (early commute, partner collects after school). Others only need BSO. Dual-income households often book both for wraparound cover. Use the comparison table during provider calls.",
    ],
    comparisonRows: [
      { factor: "Purpose", vso: "Morning care before school starts", bso: "After-school care until parents finish work" },
      { factor: "Typical time", vso: "~07:00–08:30 (varies)", bso: "~15:00–18:00 on school days" },
      { factor: "Activities", vso: "Breakfast, quiet play, reading, light arts, walk to school", bso: "Snack, outdoor play, sports, crafts, homework" },
      { factor: "Age", vso: "Usually 4–12 (basisschool)", bso: "Usually 4–12 (basisschool)" },
      { factor: "Holiday care", vso: "Not included — mornings only in term time", bso: "Often offers vakantieopvang and study days" },
      { factor: "Partnerships", vso: "Drop-off / walk to partner schools", bso: "Pickup from partner schools" },
      { factor: "Routines", vso: "Calm start; shorter session", bso: "Longer afternoon with structured activities" },
    ] satisfies VsoComparisonRow[],
    whenToUse: [
      "Need only mornings → shortlist locations with confirmed VSO (not all BSO sites offer it).",
      "Need only afternoons → see our After-School Care (BSO) guide — VSO not required.",
      "Need both → ask for VSO + BSO combo packages at the same location when possible.",
      "Need holiday weeks → plan via BSO vakantieopvang; VSO alone will not cover summer.",
      "Early shift twice a week → flexible VSO days may suit — confirm minimum booking rules.",
    ],
    links: [
      { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, description: "Full BSO guide — afternoons, holidays, activities and provider directory." },
      { label: "Daycare in the Netherlands", href: DAYCARE_NETHERLANDS_PATH, description: "Kinderopvang for ages 0–4 — separate from VSO and BSO." },
    ] satisfies VsoLink[],
  },
  dailyRoutine: {
    heading: "A typical VSO morning",
    intro: "Routines differ by provider, season and age group — use this timeline as a visit checklist, not a guarantee.",
    steps: [
      { time: "07:00", title: "Arrival", detail: "Parents drop children at VSO; staff register attendance and settle backpacks on peg hooks." },
      { time: "07:15", title: "Breakfast", detail: "Bread, fruit or provider breakfast where offered — share allergy and medical info at intake." },
      { time: "07:30", title: "Reading corner", detail: "Quiet books and storytelling — calm start before the school day." },
      { time: "07:45", title: "Quiet games", detail: "Puzzles, building blocks and low-energy play in small groups." },
      { time: "08:00", title: "Arts & creative time", detail: "Light drawing or craft tables — shorter than afternoon BSO activity blocks." },
      { time: "08:10", title: "Outdoor / garden", detail: "Fresh air in the garden or playground when weather allows — rain gear common in Dutch care." },
      { time: "08:20", title: "Walk to school", detail: "Staff escort children to partner basisschool or international school drop-off point." },
      { time: "08:30", title: "School begins", detail: "Children join their class — VSO responsibility ends at the agreed school handover." },
    ] satisfies VsoTimelineStep[],
    visitChecklist: [
      "Ask to observe during a live morning session — not only an afternoon BSO tour.",
      "Confirm school walk/drop-off list includes your basisschool or international school.",
      "Check opening time against your earliest work start and commute buffer.",
      "Ask about breakfast policy, allergies and what children bring from home.",
      "Verify handover rules if school starts later on Wednesdays or study mornings.",
    ],
    routineTips: [
      "Treat the timeline as orientation — providers set their own breakfast and walk times.",
      "Build a 10–15 minute buffer between VSO open and your train or office start.",
      "Pack labelled rain gear; outdoor minutes happen on most Dutch mornings.",
      "Ask who walks the group and where the school handover happens (gate vs classroom).",
      "If breakfast is not included, agree a simple packed option that staff can supervise.",
    ],
  },
  whoUsesVso: {
    heading: "Who uses before-school care?",
    paragraphs: [
      "VSO is most common among working parents whose commute or shift starts before school gates open. It is less universal than afternoon BSO — many Dutch families manage mornings at home — but demand is strong in Randstad cities and international corridors.",
      "Expat families often discover VSO after realising basisschool does not offer early drop-off. Pairing VSO with BSO creates a wraparound day similar to full daycare hours, with school in the middle.",
    ],
    profiles: [
      { title: "Early-shift parents", body: "Healthcare, logistics, hospitality or airport roles starting before 08:00 — VSO bridges the gap." },
      { title: "Dual-income households", body: "Both parents leave early for Randstad commutes; grandparents not available for morning drop-off." },
      { title: "International school families", body: "Parents needing English-friendly morning care near ISH or diplomatic corridors." },
      { title: "Single working parents", body: "No second adult for school-gate drop-off — VSO plus BSO provides full-day structure." },
      { title: "Part-time early days", body: "Only 2–3 mornings per week needed — flexible contracts where offered." },
      { title: "Relocating newcomers", body: "Arriving without local family support — register VSO alongside basisschool enrolment." },
    ] satisfies VsoCard[],
    tips: [
      "If only one parent works early, you may not need five VSO mornings — match days to actual shifts.",
      "Ask employers about flexible start times — some reduce VSO need by 15–30 minutes.",
      "Combine VSO with neighbour or grandparent cover on lighter mornings to reduce cost.",
      "International school calendars may differ — confirm VSO operates on your school's morning schedule.",
    ],
  },
  directoryUsageTips: [
    "Filter for before-school (VSO) first — many directory rows offer BSO without morning care.",
    "Lists are per location: registering with Partou in Amsterdam Zuid does not place you on lists in Amsterdam Noord.",
    "Check lrk.net for LRK number and GGD inspection reports before paying registration fees.",
    "English-friendly morning options cluster in The Hague, Amsterdam and parts of Rotterdam — not nationwide.",
    "Ask each site whether VSO and BSO can be booked as a combined package.",
  ],
  providers: [
    {
      provider: "Partou",
      cities: "Nationwide (100+ locations)",
      holidayCare: "Yes — vakantieopvang at many sites",
      beforeSchool: "Select locations (VSO)",
      afterSchool: "Yes — widespread BSO network",
      languages: "Dutch; English at select locations",
      website: "https://www.partou.nl/",
    },
    {
      provider: "Kindergarden",
      cities: "Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven",
      holidayCare: "Yes — holiday programmes",
      beforeSchool: "Select locations",
      afterSchool: "Yes — popular with expat families",
      languages: "Dutch; English at many locations",
      website: "https://www.kindergarden.nl/",
    },
    {
      provider: "CompaNanny",
      cities: "Amsterdam, Rotterdam, The Hague, Utrecht, Haarlem",
      holidayCare: "Yes",
      beforeSchool: "Limited locations",
      afterSchool: "Yes",
      languages: "Dutch; English at select sites",
      website: "https://www.compananny.nl/",
    },
    {
      provider: "Humankind",
      cities: "Nationwide (non-profit)",
      holidayCare: "Yes — varies by location",
      beforeSchool: "Select locations",
      afterSchool: "Yes",
      languages: "Dutch",
      website: "https://www.humankind.nl/",
    },
    {
      provider: "Smallsteps",
      cities: "Amsterdam, Haarlem, Utrecht, Leiden",
      holidayCare: "Yes",
      beforeSchool: "Limited",
      afterSchool: "Yes",
      languages: "Dutch",
      website: "https://www.smallsteps.nl/",
    },
    {
      provider: "Junis",
      cities: "Groningen, northern Netherlands",
      holidayCare: "Yes",
      beforeSchool: "Select locations",
      afterSchool: "Yes",
      languages: "Dutch",
      website: "https://www.junis.nl/",
    },
    {
      provider: "Ludens",
      cities: "Utrecht, Amersfoort region",
      holidayCare: "Yes",
      beforeSchool: "Select locations",
      afterSchool: "Yes",
      languages: "Dutch",
      website: "https://www.ludens.nl/",
    },
    {
      provider: "KindeRdam",
      cities: "Rotterdam, surrounding region",
      holidayCare: "Yes",
      beforeSchool: "Select locations",
      afterSchool: "Yes",
      languages: "Dutch; English at some locations",
      website: "https://www.kinderdam.nl/",
    },
    {
      provider: "KidsFoundation",
      cities: "Amsterdam, Haarlem, Almere corridor",
      holidayCare: "Yes",
      beforeSchool: "Limited",
      afterSchool: "Yes",
      languages: "Dutch; English at select locations",
      website: "https://www.kidsfoundation.nl/",
    },
    {
      provider: "Impuls Kinderopvang",
      cities: "Rotterdam, The Hague region",
      holidayCare: "Yes",
      beforeSchool: "Select locations",
      afterSchool: "Yes",
      languages: "Dutch",
      website: "https://www.impuls-kinderopvang.nl/",
    },
    {
      provider: "Zein Childcare",
      cities: "The Hague, Amsterdam, Leiden",
      holidayCare: "Yes — international holiday camps",
      beforeSchool: "Select locations",
      afterSchool: "Yes",
      languages: "English, Dutch",
      website: "https://www.zeinchildcare.nl/",
    },
  ] satisfies VsoProviderRecord[],
  costs: {
    heading: "VSO costs: what families should budget for",
    paragraphs: [
      "VSO fees depend on city, provider and number of mornings per week. Because sessions are shorter than afternoon BSO, monthly totals are often lower — but Randstad locations still sit at the higher end. Fees may be quoted per hour or per booked morning — always request a written quote for your exact pattern.",
      "Childcare allowance can reduce your net payment for LRK-registered VSO if you qualify. Allowance does not cap provider fees. Breakfast, registration and combined VSO+BSO packages may carry separate line items.",
    ],
    rows: [
      { category: "Before-school hourly rate", range: "€8 – €12 / hour", notes: "Indicative — varies by city and provider tier" },
      { category: "Typical morning (1.5 hrs)", range: "€12 – €20 / morning", notes: "Often billed per booked morning, not always hourly" },
      { category: "Monthly (3 mornings)", range: "€150 – €350 / month", notes: "Before allowance — Randstad often higher" },
      { category: "Monthly (5 mornings)", range: "€220 – €500 / month", notes: "Full-week morning cover orientation range" },
      { category: "VSO + BSO combo", range: "€550 – €1,100 / month", notes: "Wraparound orientation — request combined quotes" },
      { category: "Registration fee", range: "€25 – €150", notes: "One-time — sometimes non-refundable" },
      { category: "Breakfast / meals", range: "€1 – €4 / day", notes: "Often included or optional per provider" },
    ] satisfies VsoFeeRow[],
    disclaimer:
      "Fees change annually. Use provider quotes and Belastingdienst allowance estimates for your situation — ranges here are orientation only, not quotes or subsidy guarantees.",
    scenarios: [
      { profile: "3 mornings — Amsterdam", scenario: "Dutch basisschool; one parent early shift", whatToCheck: "Budget €180–€350 gross monthly before allowance — model net with toeslagen tool." },
      { profile: "Full week VSO — The Hague", scenario: "International corridor; 5 mornings", whatToCheck: "Compare Zein vs Kindergarden morning quotes; ask about BSO combo discount." },
      { profile: "VSO + BSO wraparound", scenario: "Both parents full-time; need 07:00–18:00 cover", whatToCheck: "Request combined package — not all sites offer both." },
      { profile: "Two mornings only", scenario: "Early shifts Mon/Wed", whatToCheck: "Flexible contract minimums; allowance still requires work-hour rules." },
    ],
    costTips: [
      "Ask whether billing is per hour or per booked morning — quotes differ.",
      "Request a written quote for your exact days before comparing providers.",
      "Model net cost with kinderopvangtoeslag — gross invoices overstate what many families pay.",
      "Check registration fees, breakfast charges and VSO+BSO combo discounts separately.",
      "Re-quote annually — Randstad fees and statutory hourly caps both move.",
    ],
  },
  allowance: {
    heading: "Childcare allowance for VSO (kinderopvangtoeslag)",
    paragraphs: [
      "Childcare allowance helps eligible parents pay for registered LRK before-school care. The Belastingdienst calculates entitlement based on household income, childcare hours used and parents' work or study hours. It is not a fixed subsidy percentage or amount.",
      "VSO must be LRK-registered. Verify registration on lrk.net and read GGD inspection reports before signing. Apply through Mijn Toeslagen (DigiD) after your VSO contract starts, and update changes promptly to avoid repayments. For full rules and expat scenarios, use our dedicated Childcare Allowance guide.",
    ],
    points: [
      "LRK registration: only registered VSO qualifies — check LRK number on lrk.net.",
      "Work hours: both parents (or single parent) must meet minimum work/study hour rules unless exceptions apply.",
      "Application: via Belastingdienst toeslagen portal — often with DigiD after BSN registration.",
      "Hourly maximum: statutory caps apply for out-of-school care — use official proefberekening for estimates.",
      "Updating info: report hour changes, income shifts and contract changes promptly.",
      "Expat families: same portal rules apply with BSN — employer relocation teams sometimes help with first application.",
    ],
    links: [
      { label: "Childcare Allowance guide", href: CHILDCARE_ALLOWANCE_PATH, description: "Dedicated ExpatLife guide to kinderopvangtoeslag rules and expat scenarios." },
      { label: "Childcare Cost Estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, description: "Model net childcare costs with allowance caps." },
      { label: "Belastingdienst — Toeslagen", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Official allowance information and application portal." },
    ] satisfies VsoLink[],
    setupChecklist: [
      "Confirm the VSO location’s LRK number on lrk.net",
      "Collect your DigiD and BSN details before applying",
      "Note contract start date and booked morning hours",
      "Run Belastingdienst proefberekening with realistic income figures",
      "Apply in Mijn Toeslagen after the contract starts — not weeks later",
      "Set a calendar reminder to update hours if your work pattern changes",
    ],
  },
  waitingLists: {
    heading: "VSO waiting lists: plan ahead",
    paragraphs: [
      "Morning VSO slots can be scarcer than afternoon BSO places — fewer locations offer early opening, and school-linked sites fill first in Amsterdam, The Hague, Utrecht and parts of Rotterdam. Lists are usually per location.",
      "Register when your basisschool place is confirmed — ideally months before the school year starts. Keep multiple active applications and ask specifically about morning capacity, not only general BSO lists.",
    ],
    points: [
      "Busy cities: Amsterdam and The Hague see the longest waits for school-linked morning care.",
      "Register early: align with basisschool confirmation — not the week before school starts.",
      "Ask for VSO specifically: a BSO list place does not always include morning slots.",
      "Multiple applications: apply to 3–5 providers where possible; track confirmations in writing.",
      "Temporary alternatives: neighbour share, gastouder mornings or employer flex while waiting.",
      "Combo lists: if you need VSO + BSO, confirm both are available at the same site.",
    ],
    scenarios: [
      { profile: "September start — Amsterdam", scenario: "Basisschool confirmed in March; need VSO from September", whatToCheck: "Register 3+ providers by April; ask expected wait for morning slots on your school route." },
      { profile: "Mid-year move", scenario: "Relocating January; child joins group 3 mid-year", whatToCheck: "Email providers immediately; accept temporary morning cover if lists are full." },
      { profile: "International school", scenario: "ISH The Hague; need English-friendly VSO", whatToCheck: "Zein and select Kindergarden sites — morning lists often longer; apply early." },
      { profile: "Sibling priority", scenario: "Older child already at BSO; need morning VSO too", whatToCheck: "Ask about sibling and existing-family priority — not guaranteed at all chains." },
    ],
  },
  schoolPartnerships: {
    heading: "School partnerships and morning drop-off",
    paragraphs: [
      "School logistics are central to VSO choice. Many providers walk children to partner basisschool playgrounds; others escort groups along fixed routes. International school families should verify whether staff drop off at their school or only serve Dutch basisschool partners.",
      "Confirm authorised pickup adults for afternoon BSO separately if you use both. Morning handover typically ends when children enter the school building or playground at the agreed time.",
    ],
    points: [
      "Walking groups: common for nearby schools — staff escort children along safe routes.",
      "Partner lists: drop-off lists are contractual — not every VSO serves every school.",
      "Parent drop-off: some locations require you to walk the last stretch if school is not on the list.",
      "Wednesday / short days: confirm school start times still match the VSO walk schedule.",
      "International schools: ask about dedicated routes — English-friendly providers may have different partnerships.",
      "Safety: attendance registers, road-crossing protocols and emergency contacts are standard — confirm at intake.",
    ],
    practicalTips: [
      "Ask for the written school partnership list for your basisschool — not all VSO locations serve every school.",
      "Time a test commute: VSO open → drop-off → your workplace arrival with buffer.",
      "International school families: confirm whether staff drop off or parents must walk from VSO.",
      "If combining with BSO, confirm the same provider handles both ends of the school day.",
    ],
  },
  choosingVso: {
    heading: "Choosing a VSO: decision matrix",
    paragraphs: [
      "The right VSO depends on school walk logistics, opening time, breakfast, languages, outdoor space, BSO combo options and cost after allowance — not a single national ranking. Use the matrix during visits and provider calls.",
    ],
    howToSteps: [
      { name: "Map school drop-off routes", text: "List VSO locations that walk or escort children to your child's basisschool or international school." },
      { name: "Confirm morning opening times", text: "Match VSO open time to your earliest work start and commute buffer." },
      { name: "Register on multiple lists", text: "Apply to 3–5 providers; ask specifically about VSO morning capacity." },
      { name: "Verify LRK and inspections", text: "Check lrk.net and GGD reports before paying registration fees." },
      { name: "Visit during morning hours", text: "Observe breakfast routines, calm play and the school walk handover." },
      { name: "Model net cost", text: "Request written quotes; estimate allowance with planned work hours — see the Childcare Allowance guide." },
    ],
    matrix: [
      { factor: "Location", question: "Is the school walk realistic from this VSO?", example: "Basisschool two streets away vs 20-minute escorted walk." },
      { factor: "Opening time", question: "Does VSO open early enough for your commute?", example: "07:00 open with 06:50 leave from home — check buffer." },
      { factor: "School partnership", question: "Is your school on the drop-off list?", example: "International school may need a provider with a dedicated route." },
      { factor: "Breakfast", question: "Is breakfast included or parent-provided?", example: "Allergy policies and fruit vs bread vary by site." },
      { factor: "Languages", question: "Dutch immersion vs English support?", example: "Long-term NL stay → Dutch VSO helps peer integration." },
      { factor: "BSO combo", question: "Can you book afternoon care at the same location?", example: "Wraparound package vs two separate providers." },
      { factor: "Outdoor space", question: "Morning outdoor time and garden quality?", example: "Canal-centre sites may have smaller outdoor areas." },
      { factor: "Cost", question: "Net cost after allowance, not gross invoice?", example: "Model 3-morning vs 5-morning patterns." },
    ] satisfies VsoDecisionRow[],
  },
  safetyQuality: {
    heading: "Safety and quality: GGD, LRK and staffing",
    paragraphs: [
      "Registered childcare in the Netherlands is overseen through the Landelijk Register Kinderopvang (LRK) and municipal GGD inspections. Before signing a VSO contract, verify the location's LRK number and read recent inspection reports.",
      "Quality expectations include qualified pedagogical staff, safe premises, attendance registers and clear handover to school. Ask about staff continuity in the morning group and how illness or late parent arrival is handled.",
    ],
    points: [
      "LRK: every location that qualifies for allowance must be registered — search on lrk.net.",
      "GGD inspections: municipal health services inspect childcare quality — reports are public via LRK.",
      "Staff: pedagogical employees with recognised qualifications; ask about morning group size.",
      "Safety protocols: attendance, allergy info, authorised adults and school handover procedures.",
      "Complaints: ask how the provider handles concerns and which GGD region covers the site.",
      "No rankings here: inspection outcomes are orientation — visit and decide for your child.",
    ],
    officialChecks: [
      "Look up the location on lrk.net and note the LRK registration number.",
      "Read the latest GGD inspection report linked from the LRK entry.",
      "Ask the provider for staff-child ratios during morning hours.",
      "Confirm emergency contact and illness pickup procedures in the contract pack.",
    ],
  },
  cityComparison: [
    {
      city: "Amsterdam",
      href: "/netherlands/amsterdam/",
      availability: "High demand; morning slots limited",
      englishOptions: "Select English/bilingual locations",
      waitingLists: "Long at popular school-linked sites",
      internationalCommunity: "Large expat parent network",
    },
    {
      city: "Rotterdam",
      href: "/netherlands/rotterdam/",
      availability: "Good supply; neighbourhood varies",
      englishOptions: "Limited; KindeRdam and select chains",
      waitingLists: "Moderate for morning VSO",
      internationalCommunity: "Growing international corridors",
    },
    {
      city: "The Hague",
      href: "/netherlands/the-hague/",
      availability: "Strong international-family supply",
      englishOptions: "Widest English options (Zein, Kindergarden)",
      waitingLists: "Long near diplomatic and ISH zones",
      internationalCommunity: "Very large expat family base",
    },
    {
      city: "Utrecht",
      href: "/netherlands/utrecht/",
      availability: "University city demand",
      englishOptions: "Limited English groups",
      waitingLists: "Moderate to long centrally",
      internationalCommunity: "Moderate international schools",
    },
    {
      city: "Eindhoven",
      href: "/netherlands/eindhoven/",
      availability: "Growing expat demand",
      englishOptions: "Mostly Dutch-medium",
      waitingLists: "Shorter than Randstad overall",
      internationalCommunity: "Tech-sector international families",
    },
    {
      city: "Haarlem",
      href: "/netherlands/haarlem/",
      availability: "Amsterdam commuter pressure",
      englishOptions: "Select locations",
      waitingLists: "Moderate",
      internationalCommunity: "Family commuters to Amsterdam",
    },
  ] satisfies VsoCityCard[],
  cityComparisonTips: [
    "Match city to school choice first — VSO drop-off routes follow basisschool partnerships.",
    "The Hague offers the widest English-friendly morning care corridor for diplomatic and ISH families.",
    "Amsterdam central and Zuid see the longest waits for early openings — apply early and keep multiple lists.",
    "Eindhoven and Haarlem often have shorter lists than Amsterdam core — compare commute time.",
    "Housing search and VSO registration should run in parallel once school place is known.",
  ],
  checklistEarly: [
    "Confirm basisschool place and exact school start time (including Wednesday schedule)",
    "Map VSO locations that walk to your school or accept your drop-off pattern",
    "Research LRK-registered providers offering morning care in your city",
    "Join 3–5 waiting lists as soon as school place is confirmed — ask for VSO specifically",
  ],
  checklistRegistration: [
    "Verify LRK registration and read GGD inspection reports on lrk.net",
    "Visit VSO during morning operating hours — observe breakfast and school walk",
    "Request written cost quotes for your exact mornings and any BSO combo",
    "Confirm school partnership list, walk route and handover rules in writing",
  ],
  checklistPreStart: [
    "Sign contract and pay registration fee only after school walk is confirmed",
    "Apply for kinderopvangtoeslag via Belastingdienst when contract starts",
    "Share allergy, medical and emergency contact forms before the first morning",
    "Do a dry-run commute: home → VSO open → workplace arrival with buffer",
    "If using BSO too, align afternoon pickup authorisation with morning registration",
  ],
  checklist: [
    "Confirm basisschool place and school start time",
    "Shortlist LRK VSO providers with drop-off to your school",
    "Register on 3–5 waiting lists as early as possible",
    "Verify LRK registration and GGD inspection reports on lrk.net",
    "Visit VSO locations during morning operating hours",
    "Request written cost quotes for your exact mornings",
    "Confirm whether BSO combo is available at the same site",
    "Apply for kinderopvangtoeslag via Belastingdienst when contract starts",
    "Set up allergy, medical and emergency contact forms",
    "Align housing and commute with VSO location and school route",
  ],
  checklistTips: [
    "Work the phases in order — research unlocks registration, and registration unlocks the first-morning dry run.",
    "Print or screenshot the checklist into the same folder as school enrolment papers.",
    "Tick school-walk confirmation before paying registration fees.",
    "Refresh allergy forms and emergency contacts whenever the child changes class or school year.",
  ],
  mistakeCards: [
    {
      title: "Assuming school opens early for drop-off",
      body: "Example: expecting basisschool to accept children at 07:30 — most Dutch primary schools open closer to the start of lessons.",
      advice: "Register LRK VSO separately — schools do not provide free early morning childcare.",
    },
    {
      title: "Confusing VSO with preschool",
      body: "Example: searching for voorschool / peuterspeelzaal when you need morning care for a basisschool child.",
      advice: "Use voorschoolse opvang (VSO) for school-age mornings; preschool is for toddlers before basisschool.",
    },
    {
      title: "Assuming every BSO offers mornings",
      body: "Example: joining an afternoon BSO list and discovering the location has no VSO slots.",
      advice: "Ask specifically about before-school care capacity when you register.",
    },
    {
      title: "Waiting too long to register",
      body: "Example: joining VSO waiting lists in August for September start in Amsterdam — popular school-linked mornings are often full.",
      advice: "Apply 3–6 months ahead in Randstad cities when basisschool place is confirmed.",
    },
    {
      title: "Not checking school walk arrangements",
      body: "Example: registering with a VSO that does not escort children to your basisschool or international school.",
      advice: "Confirm school partnership and drop-off route in writing before paying registration fees.",
    },
    {
      title: "Ignoring childcare allowance",
      body: "Example: assuming a fixed monthly subsidy — allowance is income and work-hour dependent via Belastingdienst.",
      advice: "Verify LRK registration and use official proefberekening plus our Childcare Allowance guide for estimates.",
    },
  ] satisfies VsoMistakeCard[],
  adaptationTips: [
    "Assume basisschool will not open early — plan VSO as a separate registration.",
    "Ask for voorschoolse opvang (VSO) by name so preschool and BSO lists do not get mixed up.",
    "Join morning-specific waiting lists as soon as the school place is confirmed.",
    "Confirm the walking/escort route in writing before you pay fees.",
    "Compare hours, languages and LRK reports — not price alone.",
    "Model net cost with toeslagen before choosing the cheapest gross quote.",
  ],
  faqQuickReference: [
    "VSO = voorschoolse opvang — morning care for basisschool children before school starts.",
    "Not the same as BSO (afternoons/holidays) or daycare/preschool (0–4).",
    "Typical cost orientation €150–€500/month for mornings before allowance.",
    "Many providers walk children to partner schools — verify yours before signing.",
    "Apply for kinderopvangtoeslag after LRK-registered contract starts.",
  ],
  faq: [
    {
      q: "What is VSO in the Netherlands?",
      a: "VSO (voorschoolse opvang) is registered before-school childcare for primary school children, typically ages 4–12. It covers early morning hours — often from about 07:00 until school starts — so working parents can commute before gates open.",
    },
    {
      q: "Is VSO the same as BSO?",
      a: "No. VSO is before-school care; BSO (buitenschoolse opvang) is after-school care and often includes holiday programmes. Many providers offer both, but you should confirm morning and afternoon slots separately. See our After-School Care (BSO) guide for afternoon detail.",
    },
    {
      q: "What age is VSO for?",
      a: "Most VSO serves children from about age 4 (when they start basisschool) through 12 (end of group 8). Exact age limits vary by provider — confirm minimum and maximum ages at intake.",
    },
    {
      q: "How early does VSO open?",
      a: "Many locations open around 07:00 or 07:30 so parents can reach an early shift. Exact opening times vary by site — confirm the earliest drop-off when you visit, especially if you have a long commute.",
    },
    {
      q: "Does VSO include breakfast?",
      a: "Sometimes. Breakfast or a light morning snack is provider-dependent — ask what is included, what you should pack, and whether there are allergy procedures. Quiet play and reading are more universal than a full breakfast service.",
    },
    {
      q: "How much does VSO cost?",
      a: "Morning-only care commonly ranges from roughly €150–€500 per month depending on city and days per week. Combined VSO + BSO wraparound is higher. Request written quotes — allowance can reduce net cost if you qualify.",
    },
    {
      q: "Can my child attend VSO without speaking Dutch?",
      a: "Yes — children often settle through routines and peer play. Most VSO is Dutch-medium; English-speaking staff exist at select providers in The Hague, Amsterdam and Rotterdam (e.g. Zein, some Kindergarden locations).",
    },
    {
      q: "Can I receive childcare allowance for VSO?",
      a: "Yes, if you meet Belastingdienst rules — including LRK-registered VSO, income thresholds and work-hour requirements. Apply via the toeslagen portal with DigiD after your contract starts. See our Childcare Allowance guide for detail.",
    },
    {
      q: "How early should I apply for VSO?",
      a: "As soon as your basisschool place is confirmed — ideally months before the school year starts. Popular morning slots in Amsterdam and The Hague often have waiting lists.",
    },
    {
      q: "Do VSO providers walk children to school?",
      a: "Many VSO providers escort children to partner schools at the start of the school day. Verify your basisschool or international school is on the provider's drop-off list before registering.",
    },
    {
      q: "Does VSO include holiday care?",
      a: "No — VSO covers term-time mornings. School holidays usually require separate BSO vakantieopvang or other holiday programmes. Plan summer weeks via afternoon/holiday care providers.",
    },
    {
      q: "Is VSO the same as voorschool or peuterspeelzaal?",
      a: "No. Voorschool / peuterspeelzaal are preschool programmes for toddlers (roughly ages 2–4). VSO (voorschoolse opvang) is morning care for children already in primary school.",
    },
  ],
  relatedGuidesTips: [
    "Need afternoons or holidays → After-School Care (BSO) guide.",
    "Younger sibling still in kinderdagverblijf → Daycare guide (separate waiting lists).",
    "School hours unclear → Dutch Schools or International Schools guide first.",
    "Net cost modelling → Childcare Allowance guide + cost estimator tool.",
  ],
  relatedGuides: [
    { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, status: "live", description: "Afternoon and holiday care — often combined with VSO for wraparound cover." },
    { label: "Daycare in the Netherlands", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Kinderopvang for younger children — separate from VSO planning." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Kinderopvangtoeslag rules, eligibility and application for expat families." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool enrolment — school start times shape VSO needs." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International primary options and morning care logistics for expat families." },
    { label: "Parenting in the Netherlands", href: PARENTING_NETHERLANDS_PATH, status: "live", description: "Dutch family life, childcare culture and community integration." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Relocation planning including schools, registration and settling in." },
  ] satisfies VsoLink[],
  educationHubTips: [
    "VSO (this page): before-school morning care for primary school age.",
    "BSO: after-school and holiday care — often booked with VSO for wraparound days.",
    "Daycare: 0–4 kinderopvang — plan both if you have children in different age bands.",
    "School guides: basisschool vs international choice shapes drop-off routes and VSO options.",
  ],
  educationHubCards: [
    { label: "Before-School Care (VSO)", href: BEFORE_SCHOOL_CARE_PATH, status: "live", description: "This guide — VSO hours, costs, allowance and provider orientation." },
    { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, status: "live", description: "Afternoon and holiday care for primary school children." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Childcare for babies and toddlers before basisschool age." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool pathways — school hours shape VSO needs." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International primary education and morning care logistics." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Financial support for registered VSO and other childcare." },
  ] satisfies VsoLink[],
  exploreNextCards: [
    { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, status: "live", description: "Plan afternoon and holiday cover alongside morning VSO." },
    { label: "Daycare in the Netherlands", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Kinderopvang for younger children — separate from VSO registration." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool enrolment when planning VSO drop-off routes." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Apply for kinderopvangtoeslag and understand work rules." },
    { label: "Parenting in the Netherlands", href: PARENTING_NETHERLANDS_PATH, status: "live", description: "Family life, sports clubs and Dutch parenting culture." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "End-to-end family relocation planning." },
  ] satisfies VsoLink[],
  exploreNextTips: [
    "Need afternoon or holiday cover → After-School Care (BSO).",
    "Younger sibling still in daycare → Daycare guide (separate lists).",
    "School start times unclear → Dutch Schools first.",
    "Net cost modelling → Childcare Allowance + cost estimator.",
    "Still relocating → Moving with Children checklist.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four morning moves before class begins",
      items: [
        "Confirm VSO opening time — often about 07:00 — against your commute.",
        "Register at an LRK-approved provider with morning capacity.",
        "Confirm the school walking escort for your basisschool.",
        "Save the provider phone and drop-off notes in every parent's phone.",
      ],
    },
    snapshot: {
      title: "From the visual — six morning pillars",
      items: [
        "Hours: typical window ~07:00 until school start.",
        "Drop-off: staff escort to partner schools.",
        "Age: basisschool children — not daycare toddlers.",
        "Allowance: income-dependent toeslagen for LRK VSO.",
        "Combo: many families add afternoon BSO.",
        "Working parents: VSO bridges early commute and school gates.",
      ],
    },
    whatIsVso: {
      title: "From the visual — VSO vs daycare",
      items: [
        "VSO: ages 4–12, morning-only, tied to school drop-off.",
        "Daycare: ages 0–4, full-day kinderdagverblijf or gastouder.",
        "Separate waiting lists and contracts for each care type.",
        "School partnership determines who walks your child at 08:20.",
      ],
    },
    vsoVsBso: {
      title: "From the visual — morning vs afternoon",
      items: [
        "VSO = before school; BSO = after school (and often holidays).",
        "Activities differ: calm mornings vs active afternoons.",
        "Holiday cover comes via BSO vakantieopvang — not VSO alone.",
        "Ask each location which slots it actually offers.",
      ],
    },
    dailyRoutine: {
      title: "From the visual — typical morning flow",
      items: [
        "Arrival → breakfast → reading → quiet games → arts → outdoor.",
        "Walk to school ends the VSO session at the agreed handover.",
        "Routines vary by provider — observe during a morning visit.",
        "Confirm opening time against your commute buffer.",
      ],
    },
    whoUsesVso: {
      title: "From the visual — who needs mornings",
      items: [
        "Early-shift and dual-commute parents are the core users.",
        "International corridors often need English-friendly morning slots.",
        "Part-time VSO days can match irregular early shifts.",
        "Newcomers without local family support register early.",
      ],
    },
    providersDirectory: {
      title: "From the visual — using the directory",
      items: [
        "Filter by city and before-school (VSO) availability — not rankings.",
        "National chains operate many locations with separate morning lists.",
        "Verify LRK registration and school walk on provider sites.",
        "English options strongest in The Hague and Amsterdam corridors.",
      ],
    },
    costs: {
      title: "From the visual — budget planning",
      items: [
        "Indicative €150–€500/month for regular morning cover.",
        "Wraparound VSO + BSO packages cost more — request combined quotes.",
        "Request written quotes for your exact mornings.",
        "Model net cost with allowance — not gross invoice alone.",
      ],
    },
    childcareAllowance: {
      title: "From the visual — allowance essentials",
      items: [
        "Only LRK-registered VSO qualifies for kinderopvangtoeslag.",
        "Work-hour rules apply — both parents unless exceptions.",
        "Apply via Belastingdienst toeslagen after contract starts.",
        "Use official proefberekening — not fixed subsidy percentages.",
      ],
    },
    waitingLists: {
      title: "From the visual — list planning",
      items: [
        "Register when basisschool place confirmed — not in August.",
        "Ask for VSO morning slots specifically — BSO lists differ.",
        "Amsterdam and The Hague: longest waits at school-linked sites.",
        "Keep backup morning cover while waiting for first choice.",
      ],
    },
    schoolPartnerships: {
      title: "From the visual — drop-off logistics",
      items: [
        "Many VSO staff walk children to partner school playgrounds.",
        "Not every basisschool or international school is on every list.",
        "Confirm Wednesday and short-day start times still match.",
        "Test your commute buffer before the first morning.",
      ],
    },
    choosingVso: {
      title: "From the visual — decision priorities",
      items: [
        "School walk route is the first filter — not brand name.",
        "Compare opening time, breakfast and BSO combo on visits.",
        "Check LRK and GGD inspection reports before signing.",
        "Model net cost after allowance for your work pattern.",
      ],
    },
    safetyQuality: {
      title: "From the visual — quality checks",
      items: [
        "Verify LRK registration on lrk.net before paying fees.",
        "Read GGD inspection reports for the specific location.",
        "Ask about morning staffing and handover to school.",
        "Keep allergy and emergency contacts up to date.",
      ],
    },
    cityComparison: {
      title: "From the visual — city differences",
      items: [
        "The Hague: widest English-friendly morning options.",
        "Amsterdam: high demand, long waits for early openings.",
        "Eindhoven and Haarlem: often shorter lists than Randstad core.",
        "Match city to school, commute and housing before signing.",
      ],
    },
    checklist: {
      title: "From the visual — priority order",
      items: [
        "Basisschool place → shortlist VSO with school walk → register early.",
        "Verify LRK → visit during morning hours → written quote.",
        "Apply toeslagen → set medical forms → dry-run your commute.",
      ],
    },
    mistakes: {
      title: "From the visual — avoid these patterns",
      items: [
        "Assuming basisschool accepts early free drop-off — it does not.",
        "Confusing VSO with toddler preschool (voorschool).",
        "Joining BSO lists without confirming morning VSO slots.",
        "Skipping school walk verification before registration fees.",
      ],
    },
    faq: {
      title: "From the visual — top questions",
      items: [
        "VSO: registered morning care for primary children before school.",
        "Not the same as BSO afternoons or daycare for ages 0–4.",
        "Dutch is default — English options exist in international corridors.",
        "Providers often walk children to partner schools — verify yours.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next",
      items: [
        "BSO → afternoon and holiday care wraparound.",
        "Daycare → younger children before basisschool age.",
        "Dutch Schools → school hours shape VSO needs.",
        "Childcare Allowance → kinderopvangtoeslag rules and application.",
      ],
    },
    educationHub: {
      title: "From the visual — education cluster",
      items: [
        "VSO (this page): before-school morning care cornerstone.",
        "BSO: after-school and holiday care.",
        "Daycare: 0–4 kinderopvang before school age.",
        "Schools: Dutch basisschool vs international primary choice.",
      ],
    },
    exploreNext: {
      title: "From the visual — your next steps",
      items: [
        "Need afternoon cover → After-School Care (BSO) guide.",
        "Need allowance detail → Childcare Allowance guide.",
        "School hours unclear → Dutch Schools guide.",
        "Relocation timeline → Moving with Children guide.",
      ],
    },
  },
  officialSources: [
    { label: "Government.nl — Childcare", href: "https://www.government.nl/topics/childcare", description: "Official Dutch government overview of childcare policy and parents' rights." },
    { label: "Belastingdienst — Allowances", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Childcare allowance application and eligibility via toeslagen." },
    { label: "LRK — Landelijk Register Kinderopvang", href: "https://www.lrk.net/", description: "Verify VSO registration and read GGD inspection reports." },
    { label: "GGD — Childcare inspections", href: "https://www.ggd.nl/", description: "Municipal health services overseeing childcare quality (site in Dutch)." },
    { label: "Rijksoverheid — Kinderopvang", href: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang", description: "Dutch-language official information on childcare rules and quality." },
  ],
  sourceUsageTips: [
    "Use Government.nl for the official childcare policy overview in English.",
    "Use Belastingdienst / toeslagen for allowance eligibility and applications — rules change.",
    "Use LRK to confirm a location is registered and to open GGD inspection reports.",
    "Use your municipality and provider portals for local waiting lists and school partnerships.",
    "Verify opening hours, breakfast and escort routes directly with each VSO location.",
  ],
  officialSourcesNote:
    "VSO fees, availability and allowance rules change. Always verify current information on official provider websites, lrk.net and Belastingdienst sources — this guide is orientation only, not financial or placement advice.",
} as const;

export type BeforeSchoolCareNetherlandsPage = typeof beforeSchoolCareNetherlandsPage;
