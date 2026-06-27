import { daycareProvidersDirectory } from "@/src/data/education/daycareProvidersDirectory";

export const DAYCARE_NETHERLANDS_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const EDUCATION_HUB_PATH = "/netherlands/education/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const CHILD_BENEFITS_PATH = "/netherlands/family/child-benefits-netherlands/" as const;
export const CHILDCARE_COST_ESTIMATOR_PATH = "/netherlands/family/tools/childcare-cost-estimator/" as const;
export const INTERNATIONAL_SCHOOLS_PATH = "/netherlands/education/international-schools-netherlands/" as const;
export const DUTCH_SCHOOLS_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const FAMILY_LIFE_PATH = "/netherlands/culture/family-and-school-culture/" as const;

export type DaycareLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type DaycareCard = {
  title: string;
  body: string;
};

export type DaycareComparisonRow = {
  factor: string;
  detail: string;
  planningNote: string;
};

export type DaycareFeeRow = {
  category: string;
  fullTimeRange: string;
  partTimeRange: string;
  notes: string;
};

export type DaycareCityCard = {
  city: string;
  href: string;
  availability: string;
  waitingLists: string;
  englishOptions: string;
  typicalCosts: string;
};

export type DaycareTypeCard = {
  title: string;
  dutchName: string;
  ages: string;
  advantages: string;
  schedule: string;
  whoItSuits: string;
};

export type DaycareDecisionRow = {
  factor: string;
  question: string;
  example: string;
};

export type DaycareProviderRecord = {
  name: string;
  cities: string;
  type: string;
  ageGroups: string;
  languages: string;
  website: string;
  notes: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/daycare-netherlands-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const daycareNetherlandsPage = {
  slug: "daycare-netherlands",
  path: DAYCARE_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-12-30",
  seo: {
    title: "Daycare in the Netherlands | Complete Guide for Expat Families",
    description:
      "Learn how daycare works in the Netherlands, including childcare options, costs, childcare allowance, waiting lists, registration, after-school care and choosing the right provider.",
    keywords: [
      "daycare netherlands",
      "childcare netherlands",
      "kinderopvang netherlands",
      "daycare for expats netherlands",
      "nursery netherlands",
      "kinderdagverblijf",
      "buitenschoolse opvang",
      "childcare allowance netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Education · Childcare · Daycare",
    pageTitle: "Daycare in the Netherlands",
    subtitle:
      "Everything expat families need to know about Dutch childcare — kinderopvang options, costs, waiting lists, childcare allowance and choosing the right provider.",
    primaryCta: { label: "Understand Dutch Childcare", href: "#how-it-works" },
    secondaryCta: { label: "Compare Childcare Options", href: "#directory" },
    chips: ["Kinderdagverblijf & BSO", "Childcare allowance", "Waiting list planning", "City comparisons"],
    image: {
      src: "/images/heroes/netherlands-daycare-netherlands-hero-v1.png",
      alt: "Editorial photo of a modern Dutch daycare centre — multicultural toddlers and preschoolers playing in a bright indoor learning space with caring professionals, while large windows show a canal-side neighbourhood and outdoor play area.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium overview infographic of Dutch childcare for expat families with kinderopvang types, allowance orientation and early registration checklist rail.",
      "Start here: understand childcare types, register early and verify LRK registration before you sign a lease."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance cards for daycare centres, home-based care, preschools, BSO, allowance and waiting lists.",
      "Use these cards to orient yourself — then compare real providers in the directory below."
    ),
    howItWorks: visual(
      "how-childcare-works",
      "Premium infographic explaining the Dutch childcare system — ages, hours, oversight and who uses registered kinderopvang.",
      "Registered childcare (LRK) is required for allowance — understand the system before you apply."
    ),
    childcareTypes: visual(
      "types-of-childcare",
      "Premium comparison board for kinderdagverblijf, gastouder, peuterspeelzaal, BSO, flexible and emergency care with age bands.",
      "Match childcare type to your child's age, schedule and family logistics."
    ),
    directory: visual(
      "directory",
      "Premium searchable provider directory map of the Netherlands with city and language filters and example national providers.",
      "Filter by city and type — always confirm availability and LRK status on each provider's website."
    ),
    costs: visual(
      "childcare-costs",
      "Premium childcare cost breakdown with full-time, part-time and daily rate example ranges plus registration and meal extras.",
      "Costs vary widely by city and hours — treat ranges as planning orientation, not quotes."
    ),
    allowance: visual(
      "childcare-allowance",
      "Premium kinderopvangtoeslag flow showing eligibility, work requirements, application via Belastingdienst and updating changes.",
      "Allowance depends on income, hours and registered childcare — see our dedicated allowance guide for detail."
    ),
    waitingLists: visual(
      "waiting-lists",
      "Premium waiting list planning board with popular cities, registration timing tips and alternative pathways.",
      "Register as early as possible in Amsterdam and The Hague — keep backup options on your shortlist."
    ),
    language: visual(
      "language-options",
      "Premium language options infographic covering Dutch-medium, English, bilingual and international childcare contexts.",
      "Most registered childcare is Dutch-medium — English options exist but are limited and city-specific."
    ),
    quality: visual(
      "quality-safety",
      "Premium quality and safety overview with GGD inspections, LRK verification, staff qualifications and inspection reports.",
      "Check LRK registration and latest GGD inspection reports before signing a contract."
    ),
    choosing: visual(
      "choosing-a-daycare",
      "Premium decision matrix comparing location, hours, languages, cost, outdoor play, meals, philosophy and waiting lists.",
      "Use the matrix with your family priorities — there is no single best provider for every child."
    ),
    bso: visual(
      "after-school-care",
      "Premium after-school care scene showing primary children in BSO activities, sports, homework support and school pickup.",
      "BSO bridges school hours and working parents — register separately from kinderdagverblijf."
    ),
    preschools: visual(
      "preschools",
      "Premium peuterspeelzaal scene with play-based learning, school preparation and language development for ages 2–4.",
      "Preschool prepares children for basisschool — separate from full daycare in planning and costs."
    ),
    cityComparison: visual(
      "city-comparison",
      "Premium city comparison cards for Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Haarlem, Leiden and Groningen.",
      "City choice affects availability, waiting lists and typical costs — compare before you relocate."
    ),
    movingWithChildren: visual(
      "moving-with-young-children",
      "Premium relocation timeline for families with young children — pre-arrival registration, temporary care and employer support.",
      "Start childcare research before arrival — waiting lists do not pause for relocation dates."
    ),
    checklist: visual(
      "checklist",
      "Premium expat family childcare planning checklist with research, waiting lists, inspections, allowance and visit steps.",
      "Work through this checklist 6–12 months before you need a place where possible."
    ),
    mistakes: visual(
      "common-expat-mistakes",
      "Premium common mistakes board covering late registration, single-provider reliance and allowance misunderstandings.",
      "Avoid choosing on price alone — quality, location and LRK status matter more."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight Dutch childcare questions and short orientation answers.",
      "FAQ answers orient you — confirm provider-specific details directly with each location."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route map linking daycare to childcare allowance, schools, moving with children and family guides.",
      "Childcare connects to housing, commute, allowance and school planning."
    ),
    educationHub: visual(
      "education-hub",
      "Premium education hub visual with cards for daycare, Dutch schools, international schools and family education topics.",
      "This page is the daycare cornerstone — explore related education guides next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with next-step allowance, schools and family relocation guides.",
      "Pick your next guide based on whether you need allowance detail, school choice or relocation planning."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#childcare-types", label: "Types" },
    { href: "#directory", label: "Directory" },
    { href: "#costs", label: "Costs" },
    { href: "#allowance", label: "Allowance" },
    { href: "#waiting-lists", label: "Waiting lists" },
    { href: "#language", label: "Language" },
    { href: "#quality", label: "Quality" },
    { href: "#choosing", label: "Choosing" },
    { href: "#bso", label: "BSO" },
    { href: "#preschools", label: "Preschools" },
    { href: "#city-comparison", label: "Cities" },
    { href: "#moving-with-children", label: "Relocating" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#education-hub", label: "Education hub" },
    { href: "#explore-next", label: "Explore next" },
  ],
  quickAnswer: {
    heading: "Quick answer: daycare and childcare in the Netherlands",
    paragraphs: [
      "Dutch childcare (kinderopvang) covers registered daycare centres (kinderdagverblijf), home-based care (gastouder), preschool (peuterspeelzaal) and after-school care (buitenschoolse opvang / BSO). Most expat families use registered LRK providers so they can apply for childcare allowance (kinderopvangtoeslag) through the Belastingdienst.",
      "Availability and waiting lists vary significantly by city. Amsterdam, The Hague and parts of Utrecht see the longest lists for popular locations — registering before or shortly after confirming pregnancy is common practice. Costs depend on hours, location and provider type; allowance can reduce your net payment but does not cap provider fees.",
      "This guide helps you compare real providers, understand costs and allowance orientation, and connect childcare choice with housing, commute and school planning. It does not rank providers subjectively or guarantee placement.",
    ],
    childcareTypes: [
      "Daycare centres (kinderdagverblijf) — ages 0–4, structured group care",
      "Home-based care (gastouder) — small groups in a carer's home",
      "Preschools (peuterspeelzaal) — ages 2–4, play-based school preparation",
      "After-school care (BSO) — ages 4–12, wraps around basisschool hours",
      "Childcare allowance — income-dependent subsidy for registered care",
      "Waiting lists — city and location specific; plan 6–12 months ahead in Randstad hubs",
    ],
    keyPoints: [
      { title: "LRK registration matters", body: "Example: only LRK-registered childcare qualifies for kinderopvangtoeslag — verify on lrk.net before signing." },
      { title: "City drives availability", body: "Example: Amsterdam Zuid and The Hague international corridors often have 6–12 month waits at popular locations." },
      { title: "Hours affect cost and allowance", body: "Example: three days per week vs full-time changes both monthly invoice and allowance calculation — model both." },
      { title: "Separate BSO registration", body: "Example: a kinderdagverblijf place does not automatically continue as BSO when your child starts basisschool." },
    ] satisfies DaycareCard[],
    scenarios: [
      { profile: "Dual-income HSM — Amsterdam", scenario: "Baby due in September; both parents return to work January; lease in Amsterdam Oud-Zuid", whatToCheck: "Register with 3+ providers now; confirm LRK status; model allowance with planned work hours." },
      { profile: "Trailing spouse — The Hague", scenario: "One parent works part-time; toddler age 2; diplomatic zone housing", whatToCheck: "Compare Zein, Ludens and gastouder options; ask about English support hours per location." },
      { profile: "Rotterdam port hire", scenario: "Two children ages 1 and 5; need daycare plus BSO from August", whatToCheck: "KindeRdam and municipal portal; separate BSO registration for basisschool child." },
      { profile: "Pre-arrival planning", scenario: "Relocating from Singapore in six months; child age 3", whatToCheck: "Email providers before arrival; join waiting lists remotely where accepted; plan temporary gastouder if needed." },
    ],
  },
  introPlanningSteps: [
    "Identify your target city and commute corridor before shortlisting providers.",
    "Register on waiting lists at multiple LRK providers — request written confirmation where possible.",
    "Verify LRK registration and latest GGD inspection reports before signing a contract.",
  ],
  snapshotCards: [
    { label: "Daycare centres", value: "Kinderdagverblijf", note: "Group care for babies and toddlers — most common full-day option." },
    { label: "Home-based", value: "Gastouder", note: "Small groups in a registered carer's home — flexible for younger children." },
    { label: "Preschools", value: "Peuterspeelzaal", note: "Play-based care for ages 2–4 preparing for basisschool." },
    { label: "After-school", value: "BSO", note: "Wraparound care for primary school children until parents finish work." },
    { label: "Allowance", value: "Kinderopvangtoeslag", note: "Income-dependent subsidy for registered childcare — apply via Belastingdienst." },
    { label: "Waiting lists", value: "Plan early", note: "Randstad hubs often need months of lead time — register before you need a place." },
  ],
  howItWorks: {
    heading: "How childcare works in the Netherlands",
    paragraphs: [
      "The Dutch childcare system is built around registered providers listed in the Landelijk Register Kinderopvang (LRK). Parents choose a provider that fits their schedule; the government provides childcare allowance (kinderopvangtoeslag) to eligible working parents using registered care — it does not run daycare centres directly.",
      "Most children enter kinderdagverblijf from age 3 months to 4 years while parents work or study. From age 4, children move to basisschool; working parents often add BSO for after-school hours. Peuterspeelzaal bridges toddler years with part-day, play-focused care.",
      "Quality is overseen by the GGD (municipal health service) through regular inspections. Always verify LRK registration and read inspection reports before committing — links are on lrk.net and many municipality websites.",
    ],
    points: [
      "Ages: kinderdagverblijf typically 0–4; peuterspeelzaal 2–4; BSO 4–12 (until basisschool ends).",
      "Hours: most centres open roughly 07:30–18:30 — exact times vary; check contract for early/late fees.",
      "Who uses it: working parents, students meeting eligibility rules, and families combining care with part-time work.",
      "Government role: sets quality standards, inspects via GGD, administers allowance via Belastingdienst — does not assign places.",
      "Early registration: waiting lists are normal in cities — register as soon as you know your area and timing.",
    ],
    comparisonRows: [
      { factor: "Registration", detail: "Direct with LRK provider — no municipal lottery like some school systems", planningNote: "Apply to multiple providers; lists are location-specific" },
      { factor: "Funding model", detail: "Parent pays provider; allowance reduces net cost if eligible", planningNote: "Allowance varies — do not assume a fixed subsidy amount" },
      { factor: "Quality oversight", detail: "GGD inspections published; LRK registration required", planningNote: "Read inspection reports on lrk.net before signing" },
      { factor: "Language", detail: "Most care is Dutch-medium; English options limited", planningNote: "Ask each location about language policy and integration support" },
      { factor: "School transition", detail: "Daycare ends at 4; BSO is separate registration", planningNote: "Register BSO when basisschool place confirmed" },
      { factor: "Flexibility", detail: "Fixed days contract common; gastouder often more flexible", planningNote: "Match contract days to your actual work pattern to optimise allowance" },
    ] satisfies DaycareComparisonRow[],
  },
  childcareTypes: [
    {
      title: "Daycare centre",
      dutchName: "Kinderdagverblijf",
      ages: "0–4 years",
      advantages: "Structured programme, socialisation, full-day coverage, multiple staff",
      schedule: "Typically 07:30–18:30, fixed days per week",
      whoItSuits: "Working parents needing reliable full-day or multi-day care for babies and toddlers.",
    },
    {
      title: "Home-based care",
      dutchName: "Gastouder (via gastouderbureau)",
      ages: "0–4 years",
      advantages: "Small group, homely setting, often more flexible hours",
      schedule: "Varies — often aligned to parent work patterns",
      whoItSuits: "Families preferring intimate care or needing flexible pickup times.",
    },
    {
      title: "Preschool",
      dutchName: "Peuterspeelzaal",
      ages: "2–4 years",
      advantages: "Play-based learning, school readiness, shorter days",
      schedule: "Often morning or afternoon sessions; some full-day",
      whoItSuits: "Toddlers preparing for basisschool; families with partial work hours.",
    },
    {
      title: "After-school care",
      dutchName: "Buitenschoolse opvang (BSO)",
      ages: "4–12 years",
      advantages: "School pickup, activities, homework time, social network",
      schedule: "After basisschool until ~18:00; holiday camps often available",
      whoItSuits: "Working parents whose children attend Dutch or international primary school.",
    },
    {
      title: "Flexible care",
      dutchName: "Flexibele opvang",
      ages: "0–4 years",
      advantages: "Book days as needed — useful for irregular schedules",
      schedule: "Variable; may require advance booking",
      whoItSuits: "Freelancers, shift workers or parents with unpredictable hours.",
    },
    {
      title: "Emergency care",
      dutchName: "Spoedopvang",
      ages: "0–12 years",
      advantages: "Short-notice cover when regular care falls through",
      schedule: "Limited slots — municipality or provider specific",
      whoItSuits: "Temporary gaps — not a long-term solution; register backup options early.",
    },
  ] satisfies DaycareTypeCard[],
  providers: daycareProvidersDirectory.map((p) => ({
    name: p.provider,
    cities: p.cities,
    type: p.type,
    ageGroups: p.ageGroups,
    languages: p.languages,
    website: p.website,
    notes: p.notes,
  })) satisfies DaycareProviderRecord[],
  costs: {
    heading: "Childcare costs: what families should budget for",
    paragraphs: [
      "Childcare fees in the Netherlands vary by city, provider, age of child and number of hours contracted. Randstad cities typically sit at the higher end; regional cities may be lower but waiting lists still apply at popular locations.",
      "Fees usually cover core care hours. Extras may include meals, diapers, late pickup, inset days and holiday programmes. Childcare allowance reduces your net payment if you qualify — it does not limit what providers charge. Always request a written quote for your exact days and hours.",
    ],
    rows: [
      { category: "Full-time (4–5 days)", fullTimeRange: "€1,400 – €2,400 / month", partTimeRange: "—", notes: "Randstad hubs often at upper range — verify per location" },
      { category: "Part-time (2–3 days)", fullTimeRange: "—", partTimeRange: "€700 – €1,500 / month", notes: "Pro-rata from full-time rate; minimum days may apply" },
      { category: "Daily rate (indicative)", fullTimeRange: "€70 – €110 / day", partTimeRange: "Varies by age", notes: "Babies often cost more than toddlers at same provider" },
      { category: "Registration fee", fullTimeRange: "€50 – €250", partTimeRange: "One-time", notes: "Sometimes non-refundable — check contract" },
      { category: "Meals & supplies", fullTimeRange: "€3 – €8 / day", partTimeRange: "Optional at some providers", notes: "Hot lunch common at centres; gastouder may differ" },
      { category: "BSO (after-school)", fullTimeRange: "€400 – €900 / month", partTimeRange: "Per day ~€15 – €30", notes: "Depends on school partnership and hours" },
    ] satisfies DaycareFeeRow[],
    disclaimer: "Fees change annually. Use provider quotes and Belastingdienst allowance estimates for your situation — this guide provides orientation ranges only.",
    scenarios: [
      { profile: "Full-time baby — Amsterdam", scenario: "5 days kinderdagverblijf; both parents working full-time", whatToCheck: "Budget €1,800–€2,300 gross monthly before allowance — model net with toeslagen tool." },
      { profile: "Part-time toddler — Utrecht", scenario: "3 days peuterspeelzaal; one parent part-time", whatToCheck: "Compare €800–€1,200 monthly; allowance depends on declared work hours." },
      { profile: "Two children — The Hague", scenario: "Daycare plus BSO for sibling", whatToCheck: "Separate contracts; sibling discount varies — ask each provider." },
      { profile: "Gastouder — Haarlem", scenario: "4 days home-based care for age 1", whatToCheck: "Often slightly lower daily rate but fewer English options — verify LRK via agency." },
    ],
  },
  allowance: {
    heading: "Childcare allowance (kinderopvangtoeslag)",
    paragraphs: [
      "Childcare allowance helps eligible parents pay for registered LRK childcare. It depends on your household income, number of childcare hours used and hours you work or study. It is not a fixed amount — the Belastingdienst calculates your entitlement annually and can adjust during the year.",
      "Both parents (or the single working parent) must meet work-hour requirements unless exceptions apply. You apply through the Belastingdienst after choosing registered childcare. Keep your hours and income updated — changes affect your allowance.",
    ],
    points: [
      "Purpose: reduce net childcare cost for working parents using LRK-registered care.",
      "2026 statutory caps: daycare €11.23/h, BSO €9.98/h, gastouder €8.49/h — max 230 reimbursable hours per child per month.",
      "Reimbursement percentage: up to 96% for lower incomes; minimum 36.5% floor for high earners — use official proefberekening.",
      "Eligibility: income, work/study hours, registered childcare and Dutch tax residency rules apply.",
      "Application: via Belastingdienst toeslagen (Mijn Toeslagen) — often with DigiD; expats with BSN follow same portal.",
      "Updating info: report hour changes, income shifts and childcare contract changes promptly to avoid repayments.",
    ],
    links: [
      { label: "Childcare Allowance guide", href: CHILDCARE_ALLOWANCE_PATH, description: "Dedicated ExpatLife guide to kinderopvangtoeslag rules and expat scenarios." },
      { label: "Childcare Cost Estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, description: "Model net childcare costs with 2026 allowance caps." },
      { label: "Belastingdienst — Toeslagen", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Official allowance information and application portal." },
    ] satisfies DaycareLink[],
  },
  waitingLists: {
    heading: "Waiting lists: plan ahead",
    paragraphs: [
      "Waiting lists are standard in popular Dutch cities — especially for infant places in Amsterdam, The Hague, Utrecht and parts of Rotterdam. Lists are usually per location, not per chain: registering with Partou location A does not guarantee Partou location B.",
      "Register as early as possible — many families join lists during pregnancy. Keep multiple active registrations and confirm your position in writing. If relocation timing is fixed, explore gastouder, temporary care or employer relocation support while you wait.",
    ],
    points: [
      "Popular cities: Amsterdam, The Hague and Utrecht see the longest waits at central locations.",
      "When to register: as soon as you know your city and approximate start date — earlier for infants.",
      "Planning ahead: align housing search with childcare corridor — commute plus pickup windows matter.",
      "Alternatives: gastouder, different neighbourhood, or municipality spoedopvang for short gaps.",
      "Emergency options: spoedopvang and backup gastouder days — limited capacity, not long-term.",
    ],
    scenarios: [
      { profile: "Pregnant — Amsterdam Zuid", scenario: "Due date March; return to work September", whatToCheck: "Register 3–5 locations now; ask typical wait for infant start September." },
      { profile: "Relocating in 8 weeks", scenario: "Child age 2; job in Rotterdam", whatToCheck: "Email KindeRdam and municipal portal; accept temporary gastouder if needed." },
      { profile: "Mid-year school start", scenario: "Child turns 4 in April; needs BSO from September", whatToCheck: "Register BSO linked to basisschool early — separate from daycare list." },
      { profile: "Waitlist only", scenario: "First choice 6 months out", whatToCheck: "Keep second and third registrations active; confirm you won't lose place if you defer." },
    ],
  },
  language: {
    heading: "Language options in Dutch childcare",
    paragraphs: [
      "Most registered childcare operates in Dutch — this supports integration and matches the language of basisschool. Some providers in international corridors (The Hague, Amsterdam, parts of Rotterdam) offer English-speaking staff or bilingual groups, but these are limited and often have longer waiting lists.",
      "Children typically adapt quickly at young ages. Many expat families combine Dutch childcare with English at home. Ask providers about daily language use, how they support non-Dutch speakers and whether they track language development.",
    ],
    options: [
      { title: "Dutch-medium care", body: "Standard at most LRK locations — full immersion from daily routines and peer interaction." },
      { title: "English-speaking groups", body: "Available at select providers (e.g. Zein, some Kindergarden/CompaNanny locations) — verify per site." },
      { title: "Bilingual approach", body: "Some centres use both languages in routines — ask how staff switch and what ratio applies." },
      { title: "International families", body: "The Hague and Amsterdam have the widest orientation — still expect Dutch in most daily activities." },
      { title: "Language development", body: "GGD and pedagogical policy focus on Dutch progress — useful preparation for basisschool." },
    ] satisfies DaycareCard[],
  },
  quality: {
    heading: "Quality and safety",
    paragraphs: [
      "All LRK-registered childcare must meet Dutch quality standards. The GGD inspects locations regularly and publishes reports. Staff qualifications, child-staff ratios and safety procedures are legally defined.",
      "Before signing, verify LRK registration on lrk.net, read the latest GGD inspection report and ask about staff turnover, emergency procedures and outdoor play policy during visits.",
    ],
    points: [
      "GGD inspections: published reports cover hygiene, safety, staffing and pedagogical quality.",
      "LRK register: official list of approved providers — required for allowance.",
      "Staff qualifications: pedagogical staff hold recognised credentials; trainees supervised.",
      "Safety: fire, allergy and pickup ID policies are standard — confirm at visit.",
      "Verification: cross-check LRK number, inspection date and contract terms before paying deposits.",
    ],
    checklist: [
      "Search provider on lrk.net and confirm active registration",
      "Read latest GGD inspection report — note any corrective actions",
      "Ask about staff qualifications and child-staff ratios for your child's age",
      "Confirm pickup authorisation and emergency contact procedures",
      "Visit during operating hours and observe interaction and outdoor space",
    ],
    questionsForProviders: [
      "What is your LRK registration number and when was the last GGD inspection?",
      "What are child-staff ratios for my child's age group?",
      "How do you support children who do not yet speak Dutch?",
      "What is your policy on outdoor play in all weather?",
      "How are allergies and medical needs documented and followed?",
      "What are late pickup fees and emergency closure procedures?",
    ],
  },
  choosing: {
    heading: "Choosing a daycare: decision matrix",
    paragraphs: [
      "There is no universal best childcare provider — the right fit depends on location, hours, language, cost, outdoor space, meals, pedagogical philosophy and waiting list timing. Use the matrix below as a conversation tool during visits and provider calls.",
    ],
    howToSteps: [
      { name: "Shortlist by location and commute", text: "List LRK providers within realistic pickup range of home or work." },
      { name: "Register on multiple waiting lists", text: "Apply to 3–5 providers; confirm list position and expected start windows." },
      { name: "Verify LRK and inspection reports", text: "Check lrk.net and GGD reports before paying registration fees." },
      { name: "Visit and compare fit", text: "Observe routines, outdoor play, staff interaction and language approach." },
      { name: "Model costs and allowance", text: "Request written quotes; estimate net cost with planned work hours." },
      { name: "Sign contract and apply for allowance", text: "Complete provider contract; apply via Belastingdienst with LRK details." },
    ],
    matrix: [
      { factor: "Location", question: "Is pickup realistic on your commute home?", example: "Amsterdam centre job + Haarlem daycare = tight evening pickup window." },
      { factor: "Hours", question: "Do opening times cover your work pattern?", example: "18:30 close with 18:15 meetings — check late fees." },
      { factor: "Languages", question: "Dutch immersion vs English support priority?", example: "Long-term NL stay → Dutch care helps basisschool transition." },
      { factor: "Cost", question: "Total monthly cost after allowance, not gross fee?", example: "€2,000 invoice minus variable allowance — model both scenarios." },
      { factor: "Outdoor play", question: "Daily outdoor time and garden quality?", example: "Canal-centre locations may have smaller outdoor areas." },
      { factor: "Meals", question: "Hot lunch included? Allergy policy?", example: "Nut-free policy varies — critical for allergic children." },
      { factor: "Philosophy", question: "Montessori, VVE, nature-based or standard model?", example: "VVE locations offer extra early-years support — ask gemeente." },
      { factor: "Waiting lists", question: "Realistic start date vs your return-to-work date?", example: "Backup gastouder if primary list is 4 months out." },
    ] satisfies DaycareDecisionRow[],
  },
  bso: {
    heading: "After-school care (BSO)",
    paragraphs: [
      "Buitenschoolse opvang (BSO) provides care after basisschool until parents finish work — typically until 18:00. Many providers run BSO at or near primary schools; activities include sports, crafts, outdoor play and homework support.",
      "BSO requires separate registration from kinderdagverblijf. Register when your basisschool place is confirmed — popular school-linked BSO fills quickly in cities.",
    ],
    points: [
      "Primary school children: usually ages 4–12 until end of basisschool (group 8).",
      "Activities: structured programmes plus free play — varies by provider and season.",
      "Sports and homework: many locations offer sport clubs and quiet homework corners.",
      "School pickup: BSO staff often collect children from playground — confirm school partnership.",
      "Schedules: school days, study days and holiday camps — contract options vary.",
    ],
  },
  preschools: {
    heading: "Preschools (peuterspeelzaal)",
    paragraphs: [
      "Peuterspeelzaal offers play-based care for children roughly aged 2–4, preparing them socially and linguistically for basisschool. Sessions may be half-day or full-day depending on provider and municipality.",
      "Many expat families use peuterspeelzaal as a gentler step before full kinderdagverblijf or alongside part-time work. VVE (early childhood education) programmes at some locations provide extra support for language development.",
    ],
    points: [
      "Purpose: socialisation, routines and early learning through play.",
      "School prep: introduces group settings similar to basisschool — not formal academics.",
      "Learning through play: Dutch pedagogical model emphasises exploration over worksheets.",
      "Language: Dutch immersion accelerates basisschool readiness for non-Dutch speakers.",
      "Transition: plan handover to basisschool at age 4 — separate from automatic daycare continuation.",
    ],
  },
  cityComparison: [
    { city: "Amsterdam", href: "/netherlands/amsterdam/", availability: "High demand, many providers", waitingLists: "Long at popular locations", englishOptions: "Select English/bilingual locations", typicalCosts: "€1,600 – €2,400 / month full-time" },
    { city: "Rotterdam", href: "/netherlands/rotterdam/", availability: "Good supply; neighbourhood varies", waitingLists: "Moderate; infant places tighter", englishOptions: "Limited; some international corridors", typicalCosts: "€1,400 – €2,100 / month full-time" },
    { city: "The Hague", href: "/netherlands/the-hague/", availability: "Strong international-family supply", waitingLists: "Long near diplomatic zone", englishOptions: "Wider than most cities (Zein, Ludens, etc.)", typicalCosts: "€1,500 – €2,300 / month full-time" },
    { city: "Utrecht", href: "/netherlands/utrecht/", availability: "University city demand", waitingLists: "Moderate to long centrally", englishOptions: "Limited English groups", typicalCosts: "€1,400 – €2,100 / month full-time" },
    { city: "Eindhoven", href: "/netherlands/eindhoven/", availability: "Growing expat demand", waitingLists: "Shorter than Randstad overall", englishOptions: "Mostly Dutch-medium", typicalCosts: "€1,300 – €1,900 / month full-time" },
    { city: "Haarlem", href: "/netherlands/haarlem/", availability: "Amsterdam commuter pressure", waitingLists: "Moderate", englishOptions: "Select locations", typicalCosts: "€1,400 – €2,000 / month full-time" },
    { city: "Leiden", href: "/netherlands/leiden/", availability: "University and pharma families", waitingLists: "Moderate", englishOptions: "Limited", typicalCosts: "€1,400 – €2,000 / month full-time" },
    { city: "Groningen", href: "/netherlands/groningen/", availability: "Smaller market", waitingLists: "Generally shorter", englishOptions: "Mostly Dutch-medium", typicalCosts: "€1,200 – €1,700 / month full-time" },
  ] satisfies DaycareCityCard[],
  movingWithChildren: {
    heading: "Moving with young children",
    paragraphs: [
      "Relocating with babies or toddlers adds urgency to childcare planning. Start researching providers before arrival if possible — many accept pre-arrival waiting list registration with expected address and start date.",
      "Temporary options include gastouder care, employer relocation packages with childcare support and short-term spoedopvang while you secure a permanent place. Register with your gemeente after address registration for local orientation resources.",
    ],
    points: [
      "Planning before arrival: shortlist providers, join waiting lists, gather LRK orientation from employer relocation team.",
      "Temporary childcare: gastouder and flexible care while waiting for preferred centre place.",
      "Registration: direct with providers; municipality websites list local options and sometimes vacancy tools.",
      "Municipality: gemeente childcare pages link to local policies and VVE programmes.",
      "Employer support: some relocation packages include childcare search or list placement — verify scope early.",
    ],
    checklist: [
      "Email 3–5 providers with target start date and neighbourhood",
      "Confirm remote waiting list policy before arrival",
      "Plan temporary care for first 4–8 weeks if needed",
      "Register address and BSN promptly — needed for allowance application",
      "Align housing search with childcare corridor and school plans",
    ],
  },
  familyChecklist: [
    "Research childcare types and LRK requirements in your target city",
    "Register on multiple waiting lists 6–12 months before needed start",
    "Compare language approach and integration support at each location",
    "Read GGD inspection reports on lrk.net for shortlisted providers",
    "Request written cost quotes for your exact days and hours",
    "Model childcare allowance with planned work hours — no fixed subsidy assumed",
    "Visit providers during operating hours before signing",
    "Apply for allowance via Belastingdienst when contract starts",
  ],
  familyChecklistEarly: [
    "Confirm relocation date and return-to-work timing",
    "Map providers by commute from shortlisted housing areas",
    "Join expat parent groups for orientation — not placement guarantees",
    "Ask employer about relocation childcare support",
  ],
  familyChecklistApply: [
    "Register with 3+ LRK providers where possible",
    "Track waiting list confirmations in a shared calendar",
    "Verify LRK numbers and inspection dates before deposits",
    "Keep gastouder backup option active",
  ],
  familyChecklistPreStart: [
    "Complete provider intake forms and health records",
    "Set up DigiD and toeslagen portal access for allowance",
    "Confirm pickup authorisation lists with provider",
    "Plan basisschool and BSO registration if child turns 4 soon",
  ],
  mistakeCards: [
    { title: "Waiting too long to register", body: "Example: joining lists two months before return-to-work in Amsterdam — infant places often need 6+ months lead time." },
    { title: "One provider only", body: "Example: relying on a single location without backup — lists are per site; keep multiple active registrations." },
    { title: "Ignoring commute", body: "Example: choosing a provider 45 minutes from work — late pickup fees and stress add hidden cost." },
    { title: "Not checking inspections", body: "Example: skipping GGD report review — corrective actions may affect quality or safety." },
    { title: "Misunderstanding allowance", body: "Example: assuming a fixed €500 subsidy — allowance is income and hour dependent via Belastingdienst." },
    { title: "Price-only choice", body: "Example: cheapest provider far from home with poor outdoor space — fit and logistics matter more." },
    { title: "Ignoring language", body: "Example: expecting full English care without verifying — most locations are Dutch-medium daily." },
  ] satisfies DaycareCard[],
  faq: [
    {
      q: "What is kinderopvang in the Netherlands?",
      a: "Kinderopvang is the umbrella term for registered childcare — including kinderdagverblijf (daycare), gastouder (home-based), peuterspeelzaal (preschool) and BSO (after-school care). Providers must be LRK-registered for allowance eligibility.",
    },
    {
      q: "How much does daycare cost in the Netherlands?",
      a: "Full-time daycare commonly ranges from roughly €1,400–€2,400 per month depending on city and age, before allowance. Part-time and daily rates vary — request a written quote from each provider for your exact schedule.",
    },
    {
      q: "How do waiting lists work?",
      a: "Each location maintains its own waiting list. Popular cities often require months of lead time for infant places. Register early at multiple providers and confirm your position in writing.",
    },
    {
      q: "Can expats get childcare allowance (kinderopvangtoeslag)?",
      a: "Yes, if you meet Belastingdienst rules — including registered LRK childcare, income thresholds and work-hour requirements. Apply via the toeslagen portal with DigiD once your contract starts.",
    },
    {
      q: "What is the difference between kinderdagverblijf and gastouder?",
      a: "Kinderdagverblijf is centre-based group care with fixed hours and larger teams. Gastouder is home-based care in small groups, often via a gastouderbureau agency — usually more flexible but fewer English options.",
    },
    {
      q: "When should I register for daycare?",
      a: "As early as possible — many families register during pregnancy for Randstad cities. Do not wait until your parental leave ends; align registration with your housing and work timeline.",
    },
    {
      q: "Are there English-speaking daycare options?",
      a: "Some providers in The Hague, Amsterdam and Rotterdam offer English-speaking staff or groups, but most care is Dutch-medium. Verify language policy at each specific location — it is not standard nationwide.",
    },
    {
      q: "What is BSO (buitenschoolse opvang)?",
      a: "BSO is after-school care for primary school children, typically until around 18:00. It is registered separately from daycare — register when your basisschool place is confirmed.",
    },
  ],
  relatedGuides: [
    { label: "Childcare Cost Estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, status: "live", description: "Model gross fees and net cost after kinderopvangtoeslag." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Kinderopvangtoeslag rules, eligibility and application for expat families." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag, Kindgebonden Budget and how Dutch family benefits fit together." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International education from primary age — separate from daycare planning." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool enrolment and language support after childcare years." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Family relocation planning including schools, registration and settling in." },
    { label: "Family Life", href: FAMILY_LIFE_PATH, status: "live", description: "Dutch family norms, school culture and community integration." },
    { label: "Housing for Families", href: HOUSING_HUB_PATH, status: "live", description: "Find family-friendly areas near childcare and school routes." },
    { label: "Healthcare for Children", href: HEALTHCARE_BASICS_PATH, status: "live", description: "Insurance, huisarts and paediatric care after your move." },
  ] satisfies DaycareLink[],
  educationHubCards: [
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "This guide — childcare types, directory, costs and waiting lists." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool and secondary pathways after early years." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International curricula from primary age — compare with Dutch route." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Financial support for registered childcare." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Overview of Kinderbijslag, child budget and family allowances." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Relocation planning for families with young children." },
    { label: "Learning Dutch", href: "/netherlands/living/language/", status: "live", description: "Practical Dutch for parents and daily life." },
  ] satisfies DaycareLink[],
  exploreNextCards: [
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Apply for kinderopvangtoeslag and understand work rules." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Understand Kinderbijslag and Kindgebonden Budget alongside childcare costs." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "Plan primary education alongside early years care." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool enrolment when your child turns 4." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "End-to-end family relocation planning." },
    { label: "Healthcare for Children", href: HEALTHCARE_BASICS_PATH, status: "live", description: "Insurance and paediatric care setup." },
  ] satisfies DaycareLink[],
  officialSources: [
    { label: "Government.nl — Childcare", href: "https://www.government.nl/topics/childcare", description: "Official Dutch government overview of childcare policy and parents' rights." },
    { label: "Rijksoverheid — Kinderopvang", href: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang", description: "Dutch-language official information on childcare rules and quality." },
    { label: "Belastingdienst — Allowances", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Childcare allowance application and eligibility via toeslagen." },
    { label: "LRK — Landelijk Register Kinderopvang", href: "https://www.lrk.net/", description: "Verify provider registration and read GGD inspection reports." },
    { label: "GGD — Childcare inspections", href: "https://www.ggd.nl/", description: "Municipal health services overseeing childcare quality (site in Dutch)." },
  ],
  officialSourcesNote:
    "Childcare fees, availability and allowance rules change. Always verify current information on official provider websites, lrk.net and Belastingdienst sources — this guide is orientation only, not financial or placement advice.",
} as const;

export type DaycareNetherlandsPage = typeof daycareNetherlandsPage;
