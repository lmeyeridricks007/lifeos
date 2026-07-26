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

export type BsoLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type BsoCard = {
  title: string;
  body: string;
};

export type BsoMistakeCard = {
  title: string;
  body: string;
  advice: string;
};

export type BsoTypeCard = {
  title: string;
  dutchName: string;
  hours: string;
  users: string;
  activities: string;
};

export type BsoActivityCard = {
  title: string;
  body: string;
};

export type BsoTimelineStep = {
  time: string;
  title: string;
  detail: string;
};

export type BsoProviderRecord = {
  provider: string;
  cities: string;
  holidayCare: string;
  beforeSchool: string;
  afterSchool: string;
  languages: string;
  website: string;
};

export type BsoFeeRow = {
  category: string;
  range: string;
  notes: string;
};

export type BsoDecisionRow = {
  factor: string;
  question: string;
  example: string;
};

export type BsoCityCard = {
  city: string;
  href: string;
  availability: string;
  englishOptions: string;
  waitingLists: string;
  internationalCommunity: string;
};

const INFOGRAPHIC_VERSION = "premium-v3";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/after-school-care-netherlands-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const afterSchoolCareNetherlandsPage = {
  slug: "after-school-care-netherlands",
  path: AFTER_SCHOOL_CARE_PATH,
  publish: true,
  publishDate: "2027-01-13",
  seo: {
    title: "After-School Care (BSO) in the Netherlands | Complete Guide for Expat Families",
    description:
      "Learn how after-school care (BSO) works in the Netherlands, including costs, childcare allowance, holiday care, activities, waiting lists and choosing the right provider.",
    keywords: [
      "after school care netherlands",
      "bso netherlands",
      "buitenschoolse opvang",
      "childcare after school",
      "school childcare netherlands",
      "holiday childcare netherlands",
      "before school care",
      "childcare allowance bso",
      "expat childcare",
      "childcare providers netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Education · Childcare · BSO",
    pageTitle: "After-School Care (BSO) in the Netherlands",
    subtitle:
      "Everything parents need to know about BSO, including before-school care, after-school care, holiday programmes, childcare allowance and choosing the right provider.",
    primaryCta: { label: "Understand BSO", href: "#quick-answer" },
    secondaryCta: { label: "Compare Childcare Options", href: DAYCARE_NETHERLANDS_PATH },
    chips: ["Before & after school", "Holiday programmes", "Childcare allowance", "City comparisons"],
    image: {
      src: "/images/heroes/after-school-care-netherlands-hero-premium-v3.png",
      alt: "Photorealistic editorial photo of diverse primary-school children and a BSO caregiver doing arts and crafts at a wooden table inside a modern Dutch buitenschoolse opvang — open glass doors reveal children playing football in the outdoor garden, backpacks on peg hooks, snack bowls and Dutch brick houses beyond.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium BSO overview for expat families showing before school, after school, holiday care, allowance eligibility and early registration checklist rail.",
      "BSO bridges school hours and working parents — register separately from daycare and plan for holidays early."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance cards for before school, after school, holiday care, allowance, activities and working-parent planning.",
      "Use these cards to orient yourself before comparing providers in your city."
    ),
    whatIsBso: visual(
      "what-is-bso",
      "Premium diagram comparing BSO vs daycare with age bands 4–12, school partnership links and LRK registration note.",
      "BSO is for primary school children — separate registration from kinderdagverblijf."
    ),
    careTypes: visual(
      "care-types",
      "Premium comparison board for VSO, BSO, holiday care, study days and flexible slots with hours and user profiles.",
      "Match care type to your work pattern and school calendar."
    ),
    dailyRoutine: visual(
      "daily-routine",
      "Premium vertical timeline from school finish through snack, play, homework, creative time and parent pickup.",
      "Typical afternoons vary by provider — confirm routines on visits."
    ),
    activities: visual(
      "activities",
      "Premium activity ecosystem map showing outdoor play, sports, arts, cooking, music, science, reading and excursions.",
      "Activity mix is a major differentiator between BSO locations."
    ),
    providersDirectory: visual(
      "providers-directory",
      "Premium orientation board listing national BSO providers by city with holiday and language filters — not rankings.",
      "Filter by city and language — always confirm availability on each provider's website."
    ),
    costs: visual(
      "costs",
      "Premium BSO cost breakdown with hourly ranges, holiday fees, registration, meals and trip extras.",
      "Treat ranges as planning orientation — request written quotes for your days and hours."
    ),
    childcareAllowance: visual(
      "childcare-allowance",
      "Premium kinderopvangtoeslag flow from LRK registration through work hours to Belastingdienst toeslagen application.",
      "Allowance depends on income and hours — see our dedicated allowance guide for detail."
    ),
    waitingLists: visual(
      "waiting-lists",
      "Premium waiting list planning board for Amsterdam, The Hague and Randstad hubs with registration timing tips.",
      "Register when basisschool place is confirmed — popular school-linked BSO fills quickly."
    ),
    holidayProgrammes: visual(
      "holiday-programmes",
      "Premium school holiday calendar showing summer, Christmas, spring and autumn camps with study day coverage.",
      "Holiday weeks often need separate booking — plan before school year starts."
    ),
    choosingBso: visual(
      "choosing-bso",
      "Premium decision matrix comparing location, pickup, hours, languages, activities, outdoor space, holiday care and cost.",
      "Use the matrix during visits — there is no single best BSO for every family."
    ),
    transport: visual(
      "transport",
      "Premium school-to-BSO route map showing walking, cycling, provider pickup and partnership collection points.",
      "Confirm who collects your child and authorised pickup routes before the first day."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city comparison cards for Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and Haarlem BSO availability.",
      "City choice affects waiting lists, English options and typical costs."
    ),
    checklist: visual(
      "checklist",
      "Premium expat BSO planning checklist from school confirmation through LRK check, visits and allowance application.",
      "Work through this list once your basisschool place and work hours are clear."
    ),
    mistakes: visual(
      "mistakes",
      "Premium common BSO mistakes board covering late registration, single-provider reliance and holiday gaps.",
      "Avoid assuming daycare registration continues automatically at basisschool age."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight BSO questions and short orientation answers for expat parents.",
      "FAQ answers orient you — confirm provider rules on official websites."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route map linking BSO to daycare, allowance, schools, parenting and relocation guides.",
      "BSO planning connects to school choice, commute and family benefits."
    ),
    educationHub: visual(
      "education-hub",
      "Premium education hub visual with cards for BSO, daycare, Dutch schools and international schools.",
      "This page is the BSO cornerstone — explore related education guides next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with next-step allowance, schools and family relocation guides.",
      "Pick your next guide based on whether you need allowance detail or school choice help."
    ),
  },
  sectionNav: [
    { href: "#quick-answer", label: "Quick answer" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-is-bso", label: "What is BSO" },
    { href: "#types", label: "Types" },
    { href: "#daily-routine", label: "Routine" },
    { href: "#activities", label: "Activities" },
    { href: "#directory", label: "Directory" },
    { href: "#costs", label: "Costs" },
    { href: "#allowance", label: "Allowance" },
    { href: "#waiting-lists", label: "Waiting lists" },
    { href: "#holiday-programmes", label: "Holidays" },
    { href: "#choosing-bso", label: "Choosing" },
    { href: "#transport", label: "Transport" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#education-hub", label: "Education hub" },
    { href: "#explore-next", label: "Explore next" },
  ],
  quickAnswer: {
    heading: "Quick answer: after-school care (BSO) in the Netherlands",
    paragraphs: [
      "Buitenschoolse opvang (BSO) is registered after-school childcare for primary school children, typically ages 4–12. Working parents use BSO to cover hours before school (VSO), after school until roughly 18:00, and often during school holidays and study days when basisschool is closed.",
      "BSO is separate from kinderdagverblijf (daycare). You register with an LRK-registered BSO provider — often linked to your child's school or a nearby location. Childcare allowance (kinderopvangtoeslag) can reduce net costs if you meet Belastingdienst work-hour and income rules.",
      "Waiting lists are common in Amsterdam, The Hague and other Randstad cities, especially for school-linked locations with English support. Register as soon as your basisschool place is confirmed and keep multiple applications active. This guide helps you compare real providers, plan holidays and connect BSO with school and commute choices — it does not rank providers or guarantee placement.",
    ],
    keyPoints: [
      { title: "Separate from daycare", body: "Example: a kinderdagverblijf contract does not automatically continue as BSO when your child starts group 2 at basisschool." },
      { title: "School partnerships", body: "Example: many BSO locations collect children from partner schools — verify your school is on the pickup list." },
      { title: "Holiday planning", body: "Example: summer weeks may need separate holiday camp booking — capacity is limited and lists open early." },
      { title: "LRK for allowance", body: "Example: only LRK-registered BSO qualifies for kinderopvangtoeslag — verify on lrk.net before signing." },
    ] satisfies BsoCard[],
    highlights: [
      "Before school (VSO) for early work starts before gates open.",
      "After school until ~18:00 on standard basisschool days.",
      "Holiday vakantieopvang during summer, Christmas and spring breaks.",
      "Study days when basisschool closes for teacher training.",
      "Flexible slots for freelancers and irregular work patterns.",
    ],
    scenarios: [
      { profile: "Dual-income — Amsterdam", scenario: "Child in Dutch basisschool group 3; both parents work until 18:00", whatToCheck: "Register BSO at 2–3 providers near school; confirm pickup from your basisschool; model allowance with work hours." },
      { profile: "International school — The Hague", scenario: "English-medium primary; parents need holiday cover", whatToCheck: "Compare Zein and Kindergarden; ask about ISH pickup routes; book holiday weeks in spring for summer." },
      { profile: "Part-time parent — Utrecht", scenario: "BSO 3 afternoons per week; one parent works flex", whatToCheck: "Match contract days to allowance work-hour rules; ask about flexible drop-off on non-BSO days." },
      { profile: "Pre-arrival planning", scenario: "Relocating July; child starts basisschool September", whatToCheck: "Email providers before arrival; join waiting lists remotely where accepted; plan gastouder backup." },
    ],
  },
  introPlanningSteps: [
    "Confirm basisschool place and daily school hours before shortlisting BSO locations.",
    "Register with multiple LRK BSO providers — lists are per location, not per chain.",
    "Plan holiday weeks and study days in your annual budget and registration calendar.",
  ],
  snapshotCards: [
    { label: "Before school", value: "VSO / early care", note: "Morning cover from ~07:00 until school starts — not every location offers it." },
    { label: "After school", value: "BSO core hours", note: "Collection from school through ~18:00 — the main working-parent solution." },
    { label: "Holiday care", value: "School breaks", note: "Summer, Christmas and spring programmes — often separate booking and fees." },
    { label: "Allowance", value: "Kinderopvangtoeslag", note: "Income-dependent subsidy for LRK-registered care — apply via Belastingdienst." },
    { label: "Sports & activities", value: "Clubs & play", note: "Football, crafts, outdoor play and homework corners vary by provider." },
    { label: "Working parents", value: "Bridge school gap", note: "BSO aligns childcare with Dutch school hours and employer schedules." },
  ],
  snapshotTips: [
    "Basisschool typically runs ~08:30–15:00 — BSO fills the gap until ~18:00 for working parents.",
    "VSO is optional and not offered at every location — confirm before assuming morning cover.",
    "Holiday vakantieopvang is usually booked separately from term-time afternoon contracts.",
    "Model net monthly cost with allowance — gross provider fees are not what most families pay.",
  ],
  whatIsBso: {
    heading: "What is BSO (buitenschoolse opvang)?",
    paragraphs: [
      "BSO is licensed out-of-school care for children who attend primary school (basisschool). It fills the gap between school hours and typical working hours, and can extend to mornings, holidays and study days depending on the provider and your contract.",
      "Most BSO locations operate in or near schools, community centres or dedicated childcare buildings. Staff collect children from partner schools or receive them at a central pickup point. Programmes mix supervised play, activities, outdoor time and quiet homework periods.",
      "Unlike kinderdagverblijf for babies and toddlers, BSO assumes children can follow school routines, eat independently and participate in group activities. Ages typically span 4–12 until the end of basisschool (group 8), though exact age limits vary by provider.",
    ],
    points: [
      "Purpose: safe supervised care when parents work or study outside school hours.",
      "Ages: usually 4–12 (basisschool years) — confirm minimum age with each location.",
      "School partnerships: many BSO providers maintain pickup lists per basisschool — verify yours.",
      "vs daycare: kinderdagverblijf covers 0–4; BSO is separate registration for school-age children.",
      "LRK registration: required for childcare allowance and quality oversight via GGD inspections.",
      "Languages: most BSO is Dutch-medium; English options exist in international corridors.",
    ],
    comparisonRows: [
      { factor: "Age focus", detail: "BSO: 4–12 school-age · Daycare: 0–4 early years", planningNote: "Plan BSO registration when basisschool place confirmed" },
      { factor: "Hours", detail: "BSO: after school ~15:00–18:00 · Daycare: full day ~07:30–18:30", planningNote: "Match contract to actual pickup window" },
      { factor: "Registration", detail: "Separate contracts and waiting lists per care type", planningNote: "Do not assume automatic transfer from daycare" },
      { factor: "School link", detail: "BSO often tied to school pickup routes", planningNote: "Housing and school choice affect BSO options" },
      { factor: "Holiday care", detail: "BSO may offer camps; daycare offers different holiday model", planningNote: "Book holiday weeks early in Randstad cities" },
    ],
  },
  careTypes: [
    {
      title: "Before-school care",
      dutchName: "VSO (vroegschoolse opvang)",
      hours: "~07:00–08:30 (varies)",
      users: "Parents with early commutes or shift starts before school gates open.",
      activities: "Quiet play, breakfast where offered, walk to school with staff.",
    },
    {
      title: "After-school care",
      dutchName: "BSO (buitenschoolse opvang)",
      hours: "~15:00–18:00 school days",
      users: "Working parents needing cover until end of workday.",
      activities: "Outdoor play, sports, crafts, homework time, snacks.",
    },
    {
      title: "Holiday care",
      dutchName: "Vakantieopvang",
      hours: "Full days during school breaks",
      users: "Families without leave during summer, Christmas or spring holidays.",
      activities: "Theme weeks, excursions, sports camps, creative programmes.",
    },
    {
      title: "Study day care",
      dutchName: "Studiedagopvang",
      hours: "School study days (studiedagen)",
      users: "Parents when basisschool closes for teacher training days.",
      activities: "Similar to holiday programme — full-day supervised activities.",
    },
    {
      title: "Flexible BSO",
      dutchName: "Flexibele opvang",
      hours: "Booked days or occasional slots",
      users: "Freelancers, part-time workers or irregular schedules.",
      activities: "Varies — confirm minimum days and cancellation rules.",
    },
  ] satisfies BsoTypeCard[],
  careTypeSelectionTips: [
    "Early commute before 08:30 → shortlist VSO (vroegschoolse opvang) locations first.",
    "Standard office hours → core BSO afternoons (3–5 days) are the usual contract.",
    "Six-week summer + school breaks → plan vakantieopvang in spring, not in July.",
    "Teacher training days → ask about studiedagopvang or per-day holiday slots.",
    "Freelance or shift work → flexibele opvang may suit — confirm minimum days and notice rules.",
  ],
  careTypeScenarios: [
    { profile: "Both parents 09:00–17:30", scenario: "Dutch basisschool; need cover every weekday", whatToCheck: "5-afternoon BSO with school pickup; model allowance with combined work hours." },
    { profile: "One early shift", scenario: "Parent starts at 07:00 twice a week", whatToCheck: "VSO + BSO combo at same provider or two locations — not all chains offer both." },
    { profile: "Part-time worker", scenario: "BSO needed Tue/Thu only", whatToCheck: "Flexible contract days; allowance still requires minimum work-hour rules." },
    { profile: "Grandparents in summer", scenario: "Term-time BSO only; 3 summer weeks uncovered", whatToCheck: "Book vakantieopvang weeks separately — capacity is limited in August." },
  ],
  dailyRoutine: {
    heading: "A typical BSO afternoon",
    intro: "Routines differ by provider, season and age group — use this timeline as a visit checklist, not a guarantee.",
    steps: [
      { time: "15:00", title: "School finishes", detail: "BSO staff collect children from playground or designated pickup point at partner school." },
      { time: "15:15", title: "Arrival at BSO", detail: "Children register, change shoes, wash hands and settle into the group space." },
      { time: "15:30", title: "Snack time", detail: "Fruit, bread or provider-provided snack — allergy policies vary; share medical info at intake." },
      { time: "15:45", title: "Free play & outdoor time", detail: "Garden, playground or nearby park — Dutch providers often prioritise daily outdoor play." },
      { time: "16:30", title: "Structured activities", detail: "Sports, crafts, music or themed projects led by pedagogical staff." },
      { time: "17:00", title: "Homework corner", detail: "Quiet tables for reading and school tasks — especially for older groups." },
      { time: "17:30", title: "Creative & calm time", detail: "Board games, drawing or relaxed play as pickup window approaches." },
      { time: "18:00", title: "Parent pickup", detail: "Authorised adults collect children — late pickup fees may apply after closing time." },
    ] satisfies BsoTimelineStep[],
    visitChecklist: [
      "Ask to observe during a live afternoon session — not only a quiet morning tour.",
      "Confirm school pickup list includes your basisschool or international school.",
      "Check outdoor space size and whether children go outside daily in rain.",
      "Ask about snack policy, allergies and how homework time is supervised.",
      "Verify closing time, late pickup fees and authorised pickup ID rules.",
    ],
  },
  activities: [
    { title: "Outdoor play", body: "Daily garden or park time — weather-permitting outdoor culture is central to Dutch childcare." },
    { title: "Sports & games", body: "Football, dodgeball, cycling skills and team games in the BSO garden or gym hall." },
    { title: "Arts & crafts", body: "Painting, building, seasonal projects and creative workshops with recycled materials." },
    { title: "Cooking & baking", body: "Simple recipes, fruit prep and occasional baking sessions — good for motor skills and teamwork." },
    { title: "Music & dance", body: "Singing, rhythm games and movement sessions — some locations link to external music teachers." },
    { title: "Science & experiments", body: "Hands-on experiments, nature observation and STEM-themed activity weeks." },
    { title: "Reading & storytelling", body: "Quiet corners with Dutch and sometimes English books — supports language development." },
    { title: "Homework support", body: "Supervised tables for school tasks — staff encourage independence, not tutoring." },
    { title: "Nature & excursions", body: "Local walks, forest days and museum trips during holiday programmes." },
    { title: "Theme weeks", body: "Holiday camps around sports, art or adventure themes — popular in summer programmes." },
  ] satisfies BsoActivityCard[],
  activityVisitQuestions: [
    "How much outdoor time do children get on a typical rainy afternoon?",
    "Which activities rotate weekly — sports, arts, science, cooking?",
    "Is there a quiet homework corner and who supervises school tasks?",
    "How are English-speaking children supported in a Dutch-medium group?",
    "What excursions or theme weeks run during summer vakantieopvang?",
  ],
  directoryUsageTips: [
    "Use city and language filters — then confirm availability on each provider's own website.",
    "Lists are per location: registering with Partou in Amsterdam Zuid does not place you on lists in Amsterdam Noord.",
    "Check lrk.net for LRK number and GGD inspection reports before paying registration fees.",
    "English-friendly options cluster in The Hague, Amsterdam and parts of Rotterdam — not nationwide.",
    "National chains (Partou, Kindergarden, Humankind) operate many sites with different waiting lists.",
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
  ] satisfies BsoProviderRecord[],
  costs: {
    heading: "BSO costs: what families should budget for",
    paragraphs: [
      "BSO fees depend on city, provider, number of afternoons per week, and whether you book morning or holiday care. Randstad locations typically sit at the higher end. Fees are usually quoted per hour or per booked afternoon — always request a written quote for your exact pattern.",
      "Childcare allowance can reduce your net payment for LRK-registered BSO if you qualify. Allowance does not cap provider fees. Holiday programmes and excursions may carry separate charges beyond regular BSO contracts.",
    ],
    rows: [
      { category: "After-school hourly rate", range: "€8 – €12 / hour", notes: "Indicative — varies by city and provider tier" },
      { category: "Typical afternoon (3 hrs)", range: "€24 – €36 / day", notes: "Often billed per booked afternoon, not always hourly" },
      { category: "Monthly (3 afternoons)", range: "€350 – €650 / month", notes: "Before allowance — Randstad often higher" },
      { category: "Monthly (5 afternoons)", range: "€500 – €900 / month", notes: "Full week after-school cover orientation range" },
      { category: "Holiday week (full day)", range: "€150 – €280 / week", notes: "Theme camps and excursions may add extras" },
      { category: "Registration fee", range: "€25 – €150", notes: "One-time — sometimes non-refundable" },
      { category: "Meals & snacks", range: "€2 – €5 / day", notes: "Often included or optional per provider" },
      { category: "Excursion / trip fees", range: "€5 – €25 / trip", notes: "Holiday programmes and special outings" },
    ] satisfies BsoFeeRow[],
    disclaimer: "Fees change annually. Use provider quotes and Belastingdienst allowance estimates for your situation — ranges here are orientation only, not quotes or subsidy guarantees.",
    scenarios: [
      { profile: "3 afternoons — Amsterdam", scenario: "Dutch basisschool; both parents working", whatToCheck: "Budget €450–€700 gross monthly before allowance — model net with toeslagen tool." },
      { profile: "Full week BSO — The Hague", scenario: "International school corridor; 5 afternoons", whatToCheck: "Compare Zein vs Kindergarden quotes; holiday weeks add €150–€250 per week." },
      { profile: "Holiday-only gap", scenario: "Grandparents cover term-time; need 2 summer weeks", whatToCheck: "Book vakantieopvang early — per-week fees separate from term contract." },
      { profile: "VSO + BSO combo", scenario: "Early shift start plus late finish", whatToCheck: "Not all locations offer both — confirm combined monthly package." },
    ],
  },
  allowance: {
    heading: "Childcare allowance for BSO (kinderopvangtoeslag)",
    paragraphs: [
      "Childcare allowance helps eligible parents pay for registered LRK BSO. The Belastingdienst calculates entitlement based on household income, childcare hours used and parents' work or study hours. It is not a fixed subsidy amount.",
      "BSO must be LRK-registered. Verify registration on lrk.net and read GGD inspection reports before signing. Apply through Mijn Toeslagen (DigiD) after your BSO contract starts, and update changes promptly to avoid repayments.",
    ],
    points: [
      "LRK registration: only registered BSO qualifies — check LRK number on lrk.net.",
      "Work hours: both parents (or single parent) must meet minimum work/study hour rules unless exceptions apply.",
      "Application: via Belastingdienst toeslagen portal — often with DigiD after BSN registration.",
      "BSO cap: statutory hourly maximum for BSO applies — use official proefberekening for estimates.",
      "Updating info: report hour changes, income shifts and contract changes promptly.",
      "Expat families: same portal rules apply with BSN — employer relocation teams sometimes help with first application.",
    ],
    links: [
      { label: "Childcare Allowance guide", href: CHILDCARE_ALLOWANCE_PATH, description: "Dedicated ExpatLife guide to kinderopvangtoeslag rules and expat scenarios." },
      { label: "Childcare Cost Estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, description: "Model net BSO costs with allowance caps." },
      { label: "Belastingdienst — Toeslagen", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Official allowance information and application portal." },
    ] satisfies BsoLink[],
  },
  waitingLists: {
    heading: "BSO waiting lists: plan ahead",
    paragraphs: [
      "Waiting lists for popular BSO locations are common in Amsterdam, The Hague, Utrecht and parts of Rotterdam — especially school-linked sites with English support. Lists are usually per location: registering with Partou at one address does not place you on lists at other addresses.",
      "Register when your basisschool place is confirmed — ideally months before the school year starts. Keep multiple active applications, confirm positions in writing and maintain a backup option such as gastouder or a second-choice BSO.",
    ],
    points: [
      "Busy cities: Amsterdam, The Hague and Utrecht see the longest waits at central and international-corridor locations.",
      "Register early: align registration with basisschool confirmation — not the week before school starts.",
      "Multiple applications: apply to 3–5 providers where possible; track confirmations in a shared calendar.",
      "School-linked BSO: popular basisschool partners fill fastest — ask school office for recommended providers.",
      "Temporary alternatives: gastouder, flexible care or employer support while waiting for first choice.",
      "Holiday lists: summer vakantieopvang often has separate capacity — book in spring where possible.",
    ],
    scenarios: [
      { profile: "September start — Amsterdam", scenario: "Basisschool confirmed in March; need BSO from September", whatToCheck: "Register 3+ BSO by April; ask expected wait for your school pickup route." },
      { profile: "Mid-year move", scenario: "Relocating January; child joins group 4 mid-year", whatToCheck: "Email providers immediately; accept temporary gastouder if lists are full." },
      { profile: "International school", scenario: "ISH The Hague; need English-friendly BSO", whatToCheck: "Zein and select Kindergarden sites — lists often longer; apply early." },
      { profile: "Sibling priority", scenario: "Older child already at BSO; baby starting basisschool", whatToCheck: "Ask about sibling policy — not guaranteed at all chains." },
    ],
  },
  holidayProgrammes: {
    heading: "Holiday programmes and study days",
    paragraphs: [
      "Dutch basisschool children have substantial holiday time — roughly six weeks in summer plus Christmas, spring and autumn breaks, plus occasional study days (studiedagen). BSO providers often run vakantieopvang with full-day programmes, theme weeks and excursions.",
      "Holiday care is frequently booked separately from regular afternoon contracts. Capacity is limited in cities — register interest when providers open summer booking, often in spring. Study day cover may be included in some packages or billed per day.",
    ],
    programmes: [
      { title: "Summer holidays", body: "Six-week window — sports camps, adventure weeks and full-day care; book early in Randstad." },
      { title: "Christmas break", body: "Two-week period — festive activities; fewer providers open every day — confirm schedule." },
      { title: "Spring break", body: "One week (voorjaarsvakantie) — theme programmes and outdoor excursions." },
      { title: "Autumn break", body: "One week (herfstvakantie) — nature and craft-focused camps common." },
      { title: "Study days", body: "Teacher training days — studiedagopvang when basisschool closes mid-week." },
      { title: "Sports camps", body: "Football, swimming and multi-sport weeks during summer at select providers." },
      { title: "Theme weeks", body: "Art, science or adventure themes — popular at Kindergarden, Zein and national chains." },
    ] satisfies BsoCard[],
    bookingTips: [
      "Mark the school holiday calendar when your basisschool place is confirmed — six summer weeks need a plan.",
      "Summer vakantieopvang booking often opens in spring — register interest before Easter in Randstad cities.",
      "Christmas and spring breaks may have fewer open days — confirm which dates each provider operates.",
      "Study days (studiedagen) can fall mid-week — check if your contract includes them or bills per day.",
      "Combine employer leave, grandparents and BSO camps — most families mix sources across the year.",
    ],
    scenarios: [
      { profile: "Dual-income — Randstad", scenario: "Both parents work full-time; no family nearby", whatToCheck: "Book full summer weeks at 2 providers; keep backup gastouder for gap weeks." },
      { profile: "One parent part-time", scenario: "Cover Wednesdays and school holidays informally", whatToCheck: "BSO 4 afternoons + vakantieopvang only for summer peak weeks." },
      { profile: "International school calendar", scenario: "Different break dates from Dutch basisschool", whatToCheck: "Confirm Zein/Kindergarden camps align with your school's holiday schedule." },
      { profile: "Pre-arrival July move", scenario: "Child starts basisschool September; summer uncovered", whatToCheck: "Email providers in June for August vakantieopvang — lists may still have slots outside peak weeks." },
    ],
  },
  choosingBso: {
    heading: "Choosing a BSO: decision matrix",
    paragraphs: [
      "The right BSO depends on pickup logistics, languages, activities, outdoor space, holiday cover and cost after allowance — not a single national ranking. Use the matrix during visits and provider calls.",
    ],
    howToSteps: [
      { name: "Map school pickup routes", text: "List BSO locations that collect from your child's basisschool or international school." },
      { name: "Register on multiple lists", text: "Apply to 3–5 providers; confirm list position and realistic start dates." },
      { name: "Verify LRK and inspections", text: "Check lrk.net and GGD reports before paying registration fees." },
      { name: "Visit during operating hours", text: "Observe afternoon routines, outdoor space and staff-child interaction." },
      { name: "Compare holiday options", text: "Ask how summer and study day booking works and typical fees." },
      { name: "Model net cost", text: "Request written quotes; estimate allowance with planned work hours." },
    ],
    matrix: [
      { factor: "Location", question: "Is pickup realistic from your school and commute?", example: "Basisschool in Amsterdam Noord with BSO in Zuid — verify staff pickup list." },
      { factor: "School pickup", question: "Does the BSO collect from your specific school?", example: "International schools may need provider with dedicated bus or parent drop-off." },
      { factor: "Hours", question: "Do opening times cover your work pattern?", example: "18:00 close with 18:15 meetings — check late pickup policy." },
      { factor: "Languages", question: "Dutch immersion vs English support?", example: "Long-term NL stay → Dutch BSO helps peer integration." },
      { factor: "Activities", question: "Sports, arts and outdoor time match your child?", example: "Active child → ask about daily outdoor minimum." },
      { factor: "Outdoor space", question: "Garden quality and daily outdoor policy?", example: "Canal-centre locations may have smaller outdoor areas." },
      { factor: "Holiday care", question: "Summer and study day availability?", example: "Book holiday weeks in spring — capacity fills in cities." },
      { factor: "Cost", question: "Net cost after allowance, not gross invoice?", example: "Model both full-week and 3-day patterns." },
    ] satisfies BsoDecisionRow[],
  },
  transport: {
    heading: "Getting to and from BSO",
    paragraphs: [
      "Transport logistics are central to BSO choice. Many providers collect children from partner school playgrounds; others require parents to drop off at a central BSO location. Older children in some neighbourhoods walk or cycle in supervised groups.",
      "Confirm authorised pickup adults, ID requirements and what happens if you are late. International school families should verify whether BSO staff collect from their school or only from Dutch basisschool partners.",
    ],
    points: [
      "Walking groups: common for nearby schools — staff escort children along safe routes.",
      "Cycling: older groups may cycle to BSO with staff in bike-friendly cities.",
      "Provider pickup: BSO staff collect from school playground at agreed time — verify your school.",
      "School partnerships: pickup lists are contractual — not every BSO serves every school.",
      "Parent drop-off: some locations require drop-off at BSO building if school not on list.",
      "Safety: pickup authorisation lists, ID checks and emergency contact protocols are standard — confirm at intake.",
    ],
  },
  cityComparison: [
    {
      city: "Amsterdam",
      href: "/netherlands/amsterdam/",
      availability: "High demand; many providers",
      englishOptions: "Select English/bilingual locations",
      waitingLists: "Long at popular school-linked sites",
      internationalCommunity: "Large expat parent network",
    },
    {
      city: "Rotterdam",
      href: "/netherlands/rotterdam/",
      availability: "Good supply; neighbourhood varies",
      englishOptions: "Limited; KindeRdam and select chains",
      waitingLists: "Moderate; infant BSO less relevant",
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
  ] satisfies BsoCityCard[],
  cityComparisonTips: [
    "Match city to school choice first — BSO pickup routes follow basisschool partnerships.",
    "The Hague offers the widest English-friendly BSO corridor for diplomatic and ISH families.",
    "Amsterdam central and Zuid see the longest waits — apply early and keep multiple lists.",
    "Eindhoven and Haarlem often have shorter lists than Amsterdam core — compare commute time.",
    "Housing search and BSO registration should run in parallel once school place is known.",
  ],
  checklistEarly: [
    "Confirm basisschool place and exact daily school hours (including Wednesday schedule)",
    "Map BSO locations that collect from your school or accept parent drop-off",
    "Research LRK-registered providers in your city and language preference",
    "Join 3–5 waiting lists as soon as school place is confirmed",
  ],
  checklistRegistration: [
    "Verify LRK registration and read GGD inspection reports on lrk.net",
    "Visit BSO during afternoon operating hours — observe routines and outdoor time",
    "Request written cost quotes for your exact days, hours and holiday pattern",
    "Confirm school pickup list, transport route and authorised pickup rules in writing",
  ],
  checklistPreStart: [
    "Sign contract and pay registration fee only after pickup route is confirmed",
    "Apply for kinderopvangtoeslag via Belastingdienst when contract starts",
    "Book summer and key holiday vakantieopvang weeks before lists fill",
    "Set pickup authorisation lists, emergency contacts and allergy/medical forms",
    "Align commute buffer with BSO closing time — note late pickup fee policy",
  ],
  checklist: [
    "Confirm basisschool place and daily school hours",
    "Shortlist LRK BSO providers with pickup from your school",
    "Register on 3–5 waiting lists as early as possible",
    "Verify LRK registration and GGD inspection reports on lrk.net",
    "Visit BSO locations during afternoon operating hours",
    "Request written cost quotes for your exact days and hours",
    "Plan holiday weeks and study days in your annual calendar",
    "Apply for kinderopvangtoeslag via Belastingdienst when contract starts",
    "Set up pickup authorisation lists and emergency contacts",
    "Align housing and commute with BSO location and school route",
  ],
  mistakeCards: [
    {
      title: "Assuming schools provide after-school care",
      body: "Example: expecting basisschool to supervise children until 18:00 — Dutch primary schools finish around 15:00 with no built-in extended care.",
      advice: "Register LRK BSO separately — schools coordinate pickup lists but do not run afternoon childcare.",
    },
    {
      title: "Waiting too long to register",
      body: "Example: joining BSO waiting lists in August for September start in Amsterdam — popular school-linked sites are often full.",
      advice: "Apply 3–6 months ahead in Randstad cities when basisschool place is confirmed.",
    },
    {
      title: "Only applying to one provider",
      body: "Example: relying on a single school-linked BSO without backup — waiting lists are per location, not per chain.",
      advice: "Keep 2–3 active applications until a contract is signed.",
    },
    {
      title: "Ignoring holiday care gaps",
      body: "Example: budgeting only for term-time afternoons — six summer weeks need separate vakantieopvang booking and fees.",
      advice: "Map the school holiday calendar and book holiday care in spring where possible.",
    },
    {
      title: "Not checking pickup arrangements",
      body: "Example: registering with a BSO that does not collect from your basisschool or international school.",
      advice: "Confirm school partnership and pickup route in writing before paying registration fees.",
    },
    {
      title: "Ignoring childcare allowance",
      body: "Example: assuming a fixed monthly subsidy — allowance is income and work-hour dependent via Belastingdienst.",
      advice: "Verify LRK registration and use official proefberekening plus our allowance guide for estimates.",
    },
  ] satisfies BsoMistakeCard[],
  faqQuickReference: [
    "BSO = buitenschoolse opvang for basisschool children, typically ages 4–12.",
    "Separate registration from daycare — contracts do not transfer at age 4.",
    "Typical cost €350–€900/month before allowance; holidays often extra.",
    "Many providers collect from partner schools — verify yours before signing.",
    "Apply for kinderopvangtoeslag after LRK-registered contract starts.",
  ],
  faq: [
    {
      q: "What is BSO in the Netherlands?",
      a: "BSO (buitenschoolse opvang) is registered after-school childcare for primary school children, typically ages 4–12. It covers hours before and after school, and often school holidays and study days, depending on your contract and provider.",
    },
    {
      q: "What age is BSO for?",
      a: "Most BSO serves children from about age 4 (when they start basisschool) through 12 (end of group 8). Exact age limits vary by provider — confirm minimum and maximum ages at intake.",
    },
    {
      q: "How much does BSO cost?",
      a: "Costs commonly range from roughly €350–€900 per month for regular after-school cover, depending on city, days per week and provider. Holiday weeks often cost €150–€280 per week separately. Request written quotes — allowance can reduce net cost if you qualify.",
    },
    {
      q: "Does BSO include holidays?",
      a: "Regular BSO contracts cover school-day afternoons. School holidays usually require separate vakantieopvang booking with different fees. Study days (studiedagen) may be included or billed per day — check your contract.",
    },
    {
      q: "Can my child attend BSO without speaking Dutch?",
      a: "Yes — children often learn through play and peer interaction. Most BSO is Dutch-medium daily; English-speaking staff or groups exist at select providers in The Hague, Amsterdam and Rotterdam (e.g. Zein, some Kindergarden locations).",
    },
    {
      q: "Can I receive childcare allowance for BSO?",
      a: "Yes, if you meet Belastingdienst rules — including LRK-registered BSO, income thresholds and work-hour requirements. Apply via the toeslagen portal with DigiD after your contract starts.",
    },
    {
      q: "How early should I apply for BSO?",
      a: "As soon as your basisschool place is confirmed — ideally months before the school year starts. Popular locations in Amsterdam and The Hague often have waiting lists.",
    },
    {
      q: "Do BSO providers collect children from school?",
      a: "Many BSO providers collect from partner schools at the end of the school day. Verify your basisschool or international school is on the provider's pickup list before registering.",
    },
  ],
  relatedGuidesTips: [
    "Younger sibling still in kinderdagverblijf → Daycare guide (separate waiting lists).",
    "School hours unclear → Dutch Schools or International Schools guide first.",
    "Net cost modelling → Childcare Allowance guide + cost estimator tool.",
    "Broader family context → Parenting guide and Moving with Children checklist.",
  ],
  relatedGuides: [
    { label: "Daycare in the Netherlands", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Kinderopvang for younger children — separate from BSO planning." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Kinderopvangtoeslag rules, eligibility and application for expat families." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool enrolment — school choice affects BSO pickup routes." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International primary options and BSO logistics for expat families." },
    { label: "Parenting in the Netherlands", href: PARENTING_NETHERLANDS_PATH, status: "live", description: "Dutch family life, childcare culture and community integration." },
    { label: "Healthcare for Children", href: "/netherlands/family/healthcare-for-children-netherlands/", status: "live", description: "GPs, JGZ, vaccinations and paediatric care for school-age families." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Relocation planning including schools, registration and settling in." },
  ] satisfies BsoLink[],
  educationHubTips: [
    "BSO (this page): after-school and holiday care for primary school age.",
    "Daycare: 0–4 kinderopvang — plan both if you have children in different age bands.",
    "School guides: basisschool vs international choice shapes pickup routes and BSO options.",
    "Benefits: kinderopvangtoeslag and Kinderbijslag reduce family childcare costs.",
  ],
  educationHubCards: [
    { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, status: "live", description: "This guide — BSO hours, costs, allowance and provider orientation." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Childcare for babies and toddlers before basisschool age." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool pathways — school hours shape BSO needs." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International primary education and BSO pickup logistics." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Financial support for registered BSO and other childcare." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag and family benefits alongside childcare costs." },
  ] satisfies BsoLink[],
  exploreNextCards: [
    { label: "Daycare in the Netherlands", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Kinderopvang for younger children — separate from BSO registration." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool enrolment when planning BSO pickup routes." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Apply for kinderopvangtoeslag and understand work rules." },
    { label: "Parenting in the Netherlands", href: PARENTING_NETHERLANDS_PATH, status: "live", description: "Family life, sports clubs and Dutch parenting culture." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "End-to-end family relocation planning." },
  ] satisfies BsoLink[],
  visualTextDetails: {
    intro: {
      title: "From the visual — BSO in four moves",
      items: [
        "BSO covers school-age children (typically 4–12) outside basisschool hours.",
        "Register separately from daycare — contracts do not transfer automatically.",
        "LRK registration required for kinderopvangtoeslag eligibility.",
        "Plan holiday weeks and study days before the school year starts.",
      ],
    },
    snapshot: {
      title: "From the visual — six care pillars",
      items: [
        "VSO: morning care before school gates open (~07:00–08:30).",
        "BSO: after-school collection until ~18:00 on school days.",
        "Vakantieopvang: full-day programmes during school holidays.",
        "Allowance: income-dependent toeslagen for LRK-registered BSO.",
        "Activities: outdoor play, sports and crafts vary by provider.",
        "Working parents: BSO bridges basisschool hours and employer schedules.",
      ],
    },
    whatIsBso: {
      title: "From the visual — BSO vs daycare",
      items: [
        "BSO: ages 4–12, tied to basisschool hours and pickup routes.",
        "Daycare: ages 0–4, full-day kinderdagverblijf or gastouder care.",
        "Separate waiting lists and contracts for each care type.",
        "School partnership determines who collects your child at 15:00.",
      ],
    },
    careTypes: {
      title: "From the visual — match care to your schedule",
      items: [
        "VSO for early commutes; BSO for standard working hours.",
        "Holiday care booked separately from term-time afternoons.",
        "Studiedagopvang covers teacher training days.",
        "Flexible slots suit freelancers — confirm minimum days.",
      ],
    },
    dailyRoutine: {
      title: "From the visual — typical afternoon flow",
      items: [
        "School finish → staff collection → snack → outdoor play.",
        "Structured activities and homework corner before pickup.",
        "Routines vary by provider — observe during a visit.",
        "Confirm closing time against your commute buffer.",
      ],
    },
    activities: {
      title: "From the visual — what children do at BSO",
      items: [
        "Daily outdoor play is standard in Dutch BSO culture.",
        "Sports, crafts, cooking and science rotate by week.",
        "Homework corners support school tasks — not tutoring.",
        "Holiday camps add excursions and theme weeks.",
      ],
    },
    providersDirectory: {
      title: "From the visual — using the directory",
      items: [
        "Filter by city, language and care type — not rankings.",
        "National chains operate many locations with separate lists.",
        "Verify LRK registration and school pickup on provider sites.",
        "English options strongest in The Hague and Amsterdam corridors.",
      ],
    },
    costs: {
      title: "From the visual — budget planning",
      items: [
        "Indicative €350–€900/month for regular after-school cover.",
        "Holiday weeks often €150–€280 per week extra.",
        "Request written quotes for your exact days and hours.",
        "Model net cost with allowance — not gross invoice alone.",
      ],
    },
    childcareAllowance: {
      title: "From the visual — allowance essentials",
      items: [
        "Only LRK-registered BSO qualifies for kinderopvangtoeslag.",
        "Work-hour rules apply — both parents unless exceptions.",
        "Apply via Belastingdienst toeslagen after contract starts.",
        "Use official proefberekening — not fixed subsidy amounts.",
      ],
    },
    waitingLists: {
      title: "From the visual — list planning",
      items: [
        "Register when basisschool place confirmed — not in August.",
        "Lists are per location — one chain registration is not enough.",
        "Amsterdam and The Hague: longest waits at school-linked sites.",
        "Keep gastouder or second-choice BSO as backup.",
      ],
    },
    holidayProgrammes: {
      title: "From the visual — school break cover",
      items: [
        "~6-week summer window needs early vakantieopvang booking.",
        "Christmas, spring and autumn breaks often separate fees.",
        "Study days (studiedagen) may need per-day registration.",
        "Sports camps and theme weeks fill quickly in cities.",
      ],
    },
    choosingBso: {
      title: "From the visual — decision priorities",
      items: [
        "School pickup route is the first filter — not brand name.",
        "Compare outdoor space, languages and holiday options on visits.",
        "Check LRK and GGD inspection reports before signing.",
        "Model net cost after allowance for your work pattern.",
      ],
    },
    transport: {
      title: "From the visual — pickup logistics",
      items: [
        "Many BSO staff collect from partner school playgrounds.",
        "Not every basisschool or international school is on every list.",
        "Authorised pickup adults and ID checks are standard.",
        "Confirm late pickup policy before your first day.",
      ],
    },
    cityComparison: {
      title: "From the visual — city differences",
      items: [
        "The Hague: widest English-friendly BSO options.",
        "Amsterdam: high demand, long waits at central sites.",
        "Eindhoven and Haarlem: often shorter lists than Randstad core.",
        "Match city to school, commute and housing before signing.",
      ],
    },
    checklist: {
      title: "From the visual — priority order",
      items: [
        "Basisschool place → shortlist BSO with pickup → register early.",
        "Verify LRK → visit during operating hours → written quote.",
        "Plan holidays → apply toeslagen → set pickup authorisations.",
      ],
    },
    mistakes: {
      title: "From the visual — avoid these patterns",
      items: [
        "Assuming basisschool provides free after-school care — it does not.",
        "Waiting until August for September BSO in busy cities.",
        "Ignoring holiday gaps in annual budget and registration.",
        "Single-provider reliance without backup list position.",
      ],
    },
    faq: {
      title: "From the visual — top questions",
      items: [
        "BSO: registered care for primary children outside school hours.",
        "Typical ages 4–12; costs vary €350–€900/month before allowance.",
        "Dutch is default — English options exist in international corridors.",
        "Providers often collect from partner schools — verify yours.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next",
      items: [
        "Daycare → younger children before basisschool age.",
        "Dutch Schools → school hours shape BSO needs.",
        "Childcare Allowance → kinderopvangtoeslag rules and application.",
        "Parenting → daily family life and integration context.",
      ],
    },
    educationHub: {
      title: "From the visual — education cluster",
      items: [
        "BSO (this page): after-school and holiday care cornerstone.",
        "Daycare: 0–4 kinderopvang before school age.",
        "Schools: Dutch basisschool vs international primary choice.",
        "Child Benefits: Kinderbijslag alongside childcare costs.",
      ],
    },
    exploreNext: {
      title: "From the visual — your next steps",
      items: [
        "Need allowance detail → Childcare Allowance guide.",
        "School hours unclear → Dutch Schools guide.",
        "Younger sibling → Daycare guide (separate from BSO).",
        "Relocation timeline → Moving with Children guide.",
      ],
    },
  },
  transportPracticalTips: [
    "Ask for the written pickup list for your basisschool — not all BSO locations serve every school.",
    "Register authorised pickup adults at intake; bring ID on first collection if requested.",
    "International school families: confirm whether staff collect or parents must drop off at BSO.",
    "Plan a buffer before 18:00 closing — late pickup fees are common after closing time.",
  ],
  officialSources: [
    { label: "Government.nl — Childcare", href: "https://www.government.nl/topics/childcare", description: "Official Dutch government overview of childcare policy and parents' rights." },
    { label: "Belastingdienst — Allowances", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Childcare allowance application and eligibility via toeslagen." },
    { label: "LRK — Landelijk Register Kinderopvang", href: "https://www.lrk.net/", description: "Verify BSO registration and read GGD inspection reports." },
    { label: "GGD — Childcare inspections", href: "https://www.ggd.nl/", description: "Municipal health services overseeing childcare quality (site in Dutch)." },
    { label: "Rijksoverheid — Kinderopvang", href: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang", description: "Dutch-language official information on childcare rules and quality." },
  ],
  officialSourcesNote:
    "BSO fees, availability and allowance rules change. Always verify current information on official provider websites, lrk.net and Belastingdienst sources — this guide is orientation only, not financial or placement advice.",
} as const;

export type AfterSchoolCareNetherlandsPage = typeof afterSchoolCareNetherlandsPage;
