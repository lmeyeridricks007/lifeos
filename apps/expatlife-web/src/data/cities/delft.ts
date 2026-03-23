/**
 * Delft city hub – /netherlands/delft/
 * TU Delft / engineering identity, historic compact city, The Hague region newcomer ecosystem (THIC).
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Delft",
    label: "Moving to Delft from abroad",
    url: "https://www.delft.nl/en/moving-delft-abroad",
  },
  {
    category: "Municipality of Delft",
    label: "Moving – municipal hub",
    url: "https://www.delft.nl/en/moving",
  },
  {
    category: "Municipality of Delft",
    label: "Official matters",
    url: "https://www.delft.nl/en/official-matters",
  },
  {
    category: "Municipality of Delft",
    label: "Municipal services (English)",
    url: "https://www.delft.nl/en/municipal-services",
  },
  {
    category: "Municipality of Delft",
    label: "Immigration procedure",
    url: "https://www.delft.nl/en/immigration-procedure",
  },
  {
    category: "Municipality of Delft",
    label: "Reporting a change of address",
    url: "https://www.delft.nl/en/reporting-change-address",
  },
  {
    category: "Municipality of Delft",
    label: "Registering a foreign certificate",
    url: "https://www.delft.nl/en/registering-foreign-certificate",
  },
  {
    category: "Municipality of Delft",
    label: "Leaving the Netherlands",
    url: "https://www.delft.nl/en/leaving-netherlands",
  },
  {
    category: "Municipality of Delft",
    label: "Studying in Delft",
    url: "https://www.delft.nl/en/studying-delft",
  },
  {
    category: "Municipality of Delft",
    label: "Student housing",
    url: "https://www.delft.nl/en/student-housing",
  },
  {
    category: "Municipality of Delft",
    label: "Knowledge migrants",
    url: "https://www.delft.nl/en/knowledge-migrants",
  },
  {
    category: "The Hague International Centre",
    label: "The Hague International Centre",
    url: "https://www.thehagueinternationalcentre.nl/",
  },
  {
    category: "The Hague International Centre",
    label: "About us",
    url: "https://www.thehagueinternationalcentre.nl/about-us/",
  },
  {
    category: "The Hague International Centre",
    label: "Live in the region",
    url: "https://www.thehagueinternationalcentre.nl/live",
  },
  {
    category: "The Hague International Centre",
    label: "Service providers",
    url: "https://www.thehagueinternationalcentre.nl/service-providers",
  },
  {
    category: "The Hague International Centre",
    label: "Registration for students (sponsored procedure)",
    url: "https://www.thehagueinternationalcentre.nl/relocating/registration-procedure/sponsored/registration-for-students",
  },
  {
    category: "DigiD",
    label: "Apply for DigiD",
    url: "https://www.digid.nl/en/apply-and-activate/apply-digid",
  },
  {
    category: "Health insurance",
    label: "Government.nl – When do I need health insurance if I come to live in the Netherlands?",
    url: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands",
  },
  {
    category: "National relocation references",
    label: "Government.nl – What do I need to arrange if I'm moving to the Netherlands?",
    url: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-i'm-moving-to-the-netherlands",
  },
];

export const delftCityPage: CityHubPageData = {
  slug: "delft",
  country: "netherlands",
  name: "Delft",
  path: "/netherlands/delft/",
  publish: true,
  publishDate: "2026-03-27",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Delft as an Expat | Living in Delft, Housing, Student Life & Practical Setup",
    description:
      "Thinking about moving to Delft? Explore why expats choose Delft, what life is like, how housing and registration work, and which services can help you settle in.",
    keywords: [
      "moving to delft as an expat",
      "delft for expats",
      "living in delft netherlands expat",
      "delft netherlands expat guide",
      "should i live in delft expat",
      "delft vs the hague expat",
      "delft student city expat",
      "delft tech city netherlands",
      "best areas in delft for expats",
      "housing in delft for expats",
      "tu delft international",
      "gemeente delft registration english",
      "the hague international centre delft",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Delft as an Expat",
    subtitle:
      "Discover why expats choose Delft for its historic charm, engineering identity, and compact high-quality city life — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/delft-expat-city-hero.png",
      alt: "Expat relocation planning on a café table beside a Delft canal, with historic gabled houses, bicycles, and the Nieuwe Kerk tower in soft evening light.",
      imagePrompt:
        "Editorial hero: Delft canal, Delftware-blue accents, Nieuwe Kerk, documents and passport on table, cyclists, refined small-city Netherlands atmosphere.",
    },
    ctas: [
      { label: "Explore Delft Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "delft-at-a-glance", label: "Delft at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Delft" },
    { id: "what-life-like", label: "Life in Delft" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Delft suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-delft", label: "First administrative steps" },
    { id: "bsn-digid", label: "BSN + DigiD" },
    { id: "health-insurance", label: "Health insurance" },
    { id: "banking", label: "Banking" },
    { id: "housing-costs", label: "Housing & budget" },
    { id: "transport", label: "Transport" },
    { id: "services-expats", label: "Useful services" },
    { id: "example-scenarios", label: "Common scenarios" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official sources" },
    { id: "related-guides", label: "Related guides" },
    { id: "other-cities", label: "Explore next" },
  ],

  quickFactsHeading: "Delft at a Glance",

  quickFacts: [
    { label: "Best for", value: "Students, PhDs, researchers, engineers, academics, knowledge workers" },
    { label: "Typical vibe", value: "Historic, intelligent, compact, elegant" },
    { label: "Strongest appeal", value: "Beautiful small-city life with strong university and tech identity" },
    {
      label: "Trade-off to know",
      value: "Smaller scale and a narrower local job-market profile than Amsterdam or Rotterdam",
    },
    { label: "Good fit if you want", value: "A manageable city with serious engineering and research relevance" },
    {
      label: "Regional advantage",
      value: "The Hague region newcomer ecosystem — THIC partners with Delft alongside The Hague",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Delft",
    paragraphs: [
      "Delft combines postcard Dutch city beauty with a globally known engineering and technology university. Many internationals land here for TU Delft, research institutes, or employers tied to the innovation ecosystem — and stay for walkable streets, canals, and a calmer rhythm than Amsterdam or Rotterdam.",
      "It also suits people who want an intimate, highly educated environment while remaining connected to the wider South Holland region: The Hague for institutions and coast, Rotterdam for port and scale, and strong rail links across the Randstad when you need them.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Delft",
    paragraphs: [
      "Daily life is compact: you can cross the centre quickly by bike, pass markets and cafés between canals, and feel the student and academic pulse in libraries, labs, and campus-adjacent neighbourhoods. English is common in university and many tech workplaces; Dutch still anchors wider social life.",
      "Compared with major metros, Delft is quieter at night and less sprawling — a feature for people who want beauty and structure without constant big-city stimulation. If you crave maximum nightlife variety or HQ density, you may still visit Rotterdam or Amsterdam rather than expecting it all locally.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Delft",
    reasons: [
      {
        title: "TU Delft and research depth",
        explanation:
          "Strong draw for degree seekers, PhDs, postdocs, and technical staff — with a visible international community around campus.",
        whoItSuits: "Students, researchers, academic staff",
      },
      {
        title: "Engineering and technology identity",
        explanation:
          "The city’s reputation aligns with deep tech, aerospace, quantum, civil engineering, and applied science — relevant for specialist careers.",
        whoItSuits: "Engineers, R&D professionals, founders in technical fields",
      },
      {
        title: "Compact, livable historic core",
        explanation:
          "Human-scale streets, canals, and heritage architecture make routine life feel manageable and pleasant.",
        whoItSuits: "People who value aesthetics and short commutes",
      },
      {
        title: "Regional access without living in a capital",
        explanation:
          "Trains and bikes connect you to The Hague, Rotterdam, Schiphol, and beyond — useful when work or friends spread across Zuid-Holland.",
        whoItSuits: "Hybrid workers and regional commuters",
      },
      {
        title: "The Hague International Centre partnership",
        explanation:
          "THIC supports internationals across the region and works with Delft as a partner municipality — a practical advantage for eligible newcomers navigating work, live, and study journeys.",
        whoItSuits: "Newcomers who may qualify for regional centre services",
      },
      {
        title: "Student and knowledge-migrant pathways",
        explanation:
          "Municipal English pages cover studying, student housing, and knowledge migrants — helpful when your route is study- or HSM-driven.",
        whoItSuits: "Students, graduates, highly skilled migrants",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in Delft",
    companiesCount: getCityStats("delft")?.companies ?? null,
    jobsCount: getCityStats("delft")?.jobs ?? null,
    sourceLabel: getCityStats("delft")?.sourceLabel,
    sourceHref: getCityStats("delft")?.sourceHref,
    industries: getCityStats("delft")?.industries ?? [],
    majorEmployers: getCityStats("delft")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Delft Is Best For",
    profiles: [
      "International student or exchange student at TU Delft or regional institutions",
      "PhD candidate, postdoc, or researcher tied to university or labs",
      "Engineer or knowledge worker in aerospace, deep tech, or applied science",
      "Expat who wants a smaller, beautiful city base with Randstad access",
      "Highly skilled migrant or professional using THIC-supported regional routes where eligible",
      "Couple or family open to South Holland if schools, housing, and commutes align",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Delft is not a major global metro: nightlife depth, retail variety, and spontaneous “big city” energy are thinner than in Amsterdam or Rotterdam. Some people prefer The Hague’s institutional scale or Utrecht’s national rail-hub centrality — test visits before you commit.",
      "Housing pressure around the academic year is real. Student housing often involves DUWO or similar routes described on the gemeente’s student-housing pages; working professionals compete for some of the same segments. Plan early and verify BRP registration rules for any address.",
      "If your industry clusters far outside Zuid-Holland, a Delft postcode may mean long travel or a job change down the line. Validate employer location and hybrid policy rather than assuming every sector is represented locally.",
      "The Hague offers embassies and international-organisation density Delft does not; Eindhoven’s Brainport has a different tech-industry texture. Use our city guides to compare honestly.",
    ],
  },

  cityComparison: {
    heading: "How Delft Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide covers why expats pick Delft, what daily life feels like, and how to sequence registration (including the four-month rule when you move from abroad), BSN, DigiD, banking, and national health insurance. Gemeente Delft publishes English pages for moving, official matters, students, and knowledge migrants; The Hague International Centre supports eligible internationals across partner municipalities including Delft.",
      "Use our Netherlands-wide guides for documents and insurance depth, and our services directory for banks, housing platforms, agencies, and relocation providers — we list examples from THIC’s public partner ecosystem without ranking or endorsing them.",
    ],
    links: [
      { label: "Compare Dutch cities hub", href: "/netherlands/cities/" },
      { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services", href: "/netherlands/services/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Delft",
    body: [
      "If you move to the Netherlands from abroad and will stay at least four months, you typically need to register your address in the Personal Records Database (BRP) at your municipality. Gemeente Delft publishes English guidance for moving to Delft from abroad and links official matters such as registration, DigiD-related context, and other civil topics.",
      "The Hague International Centre supports international newcomers in the wider region and works together with Delft as a partner municipality. Depending on your situation (work, study, sponsored procedures), THIC may help you understand registration routes — always confirm eligibility and appointments on their current pages alongside Delft’s own requirements.",
      "After registration, BSN issuance, DigiD, Dutch banking, and health insurance are the usual next chain — national rules apply; the city pages help you understand local sequencing and documents.",
    ],
    steps: [
      "Read Gemeente Delft’s English “moving from abroad” and “official matters” pages for your scenario.",
      "Check whether The Hague International Centre has a relevant route for students, knowledge migrants, or sponsored registration.",
      "Book municipal appointments and prepare ID, housing proof, and civil documents per Delft’s checklist.",
      "Complete BSN-dependent steps: DigiD, bank account, and health insurance using our guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address acceptable to Gemeente Delft",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if your situation requires them (confirm with officials)",
      "Sworn translations or legalizations only when requested",
    ],
    officialSourceLinks: [
      { label: "Gemeente Delft – Moving to Delft from abroad", url: "https://www.delft.nl/en/moving-delft-abroad" },
      { label: "The Hague International Centre", url: "https://www.thehagueinternationalcentre.nl/" },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
      { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
      { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  bsnDigid: {
    heading: "BSN and DigiD After Settling in Delft",
    body: [
      "Your BSN is issued when you successfully register a qualifying address with the municipality. Timelines in Delft depend on appointments and your document bundle.",
      "DigiD unlocks online access to taxes, insurers, and many gemeente tasks. Apply after BSN and registered address, then activate with the letter by post.",
    ],
    digidRequirements: ["BSN", "Registered Dutch address", "Mobile phone for application"],
    examples: ["Municipality portals", "Health insurer portals", "Belastingdienst", "Employer onboarding"],
    plannedPageLinks: [
      { label: "BSN registration (Netherlands guide)", href: "/netherlands/bsn-registration/" },
      { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance When You Live in Delft",
    body: [
      "Dutch basic insurance rules are national. If you must hold a basisverzekering, arrange it within the official window for your situation.",
      "Students and cross-border cases may differ — use Government.nl and our guide rather than assuming exemption.",
    ],
    advice: [
      "Compare premium and eigen risico once obligation is clear.",
      "Browse insurers via our services directory on your own terms.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Delft",
    body: [
      "Most people want a Dutch account for salary, rent, and iDEAL. Requirements usually include ID, often BSN, and proof of address — timing varies by bank.",
      "Delft sits in a well-banked region; choose based on English support, fees, and branch or digital preference.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies)", "Dutch address proof", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Delft for Expats",
    body: [
      "Housing still demands speed and paperwork: students, PhDs, and professionals may use different channels. Gemeente Delft’s student-housing pages describe how many students work with DUWO as a major student-housing organisation — confirm room types, contracts, and eligibility with DUWO and your institution.",
      "Beyond student routes, housing platforms widen search; rental agencies and relocation services can assist when you want help negotiating a tight market. Always verify that your address supports BRP registration before paying large deposits.",
      "What to budget for: rent and deposit, bike or public transport, bank and insurance setup, document costs if officials require translations, and family-specific expenses. Exact figures vary — build a buffer instead of assuming Delft is automatically easy or cheap.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; student peaks", note: "Rooms vs family homes differ sharply", disclaimer: "Varies by segment" },
      { label: "Student setup", value: "Deposits, furnishings", note: "DUWO / institutional routes common", disclaimer: "Case-by-case" },
      { label: "Transport", value: "Bike + NS", note: "Regional commuting to The Hague / Rotterdam", disclaimer: "Depends on workplace" },
      { label: "Bank & insurance", value: "National market", note: "Account fees; mandatory basic insurance if applicable", disclaimer: "Varies" },
      { label: "Documents", value: "Translation / legalisation", note: "When gemeente or IND requires it", disclaimer: "Origin-dependent" },
    ],
    neighborhoodsNote:
      "Walk or cycle candidate areas at different times; check bike parking, distance to campus or station, and noise near student corridors.",
    warning:
      "Scams target tight markets. Do not pay large deposits until landlord, contract, and registration eligibility are clear.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Delft and the Region",
    body: [
      "Cycling is default for daily life; the city is flat and dense enough that many errands stay within pedal distance. Delft has two train stations connecting you into the national network — useful for work in The Hague, Rotterdam, or Schiphol.",
      "Treat car ownership as optional for many residents; parking in the centre can be constrained compared with cycling and train combinations.",
    ],
    goodToKnow: [
      "Test commute times during term time if you live near campus-heavy streets.",
      "OV-chipkaart or contactless OV-pay products suit regional rail; revisit after your first month of travel patterns.",
      "If you split time between Delft and The Hague, validate door-to-door time before signing a long lease.",
    ],
  },

  servicesIntro:
    "Below are links to our live service hub pages plus official channels (Gemeente Delft, The Hague International Centre) and example providers listed on THIC’s public partner pages. We do not rank or endorse providers — compare contracts, scope, and pricing yourself.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Delft",

  first30Days: {
    heading: "Your First 30 Days in Delft",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration; read gemeente moving-from-abroad guidance.",
          "Check THIC eligibility for your study or work route; book gemeente appointments.",
          "Set up bike, OV, groceries; map campus or employer commute.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule municipal registration; track BSN.",
          "Start DigiD when eligible; watch for activation post.",
          "Progress Dutch bank account if salary or rent requires it.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange Dutch basic health insurance if mandatory for you.",
          "Share IBAN and BSN with employer, landlord, and utilities as needed.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finish DigiD activation; close permit or tax follow-ups.",
          "Register with a huisarts once insured; explore community groups or ACCESS-style orientation if useful.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Delft Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, and study or employment facts for your case.",

  exampleScenarios: [
    {
      title: "International student starting at TU Delft",
      summary: "You need DUWO or alternative housing, gemeente registration, and possibly a THIC-sponsored student route.",
      needsFirst: ["Institution housing letter or private lease", "THIC / gemeente checklist", "Insurance status"],
      documents: ["Passport", "Admission", "Housing proof", "Visa or residence card if non-EU"],
      timing: "Book registration soon after move-in; align insurance with your start date.",
      mistakes: ["Paying deposits before BRP eligibility is clear", "Ignoring gemeente student-housing guidance"],
    },
    {
      title: "PhD or researcher joining a lab",
      summary: "Employer or university may point you to THIC formalities plus Delft municipal registration.",
      needsFirst: ["Host communication", "Appointment planning", "Housing near campus or station"],
      documents: ["Contract or hosting docs", "ID", "Address proof", "Permits if required"],
      timing: "Parallel-path housing and registration for payroll and insurance.",
      mistakes: ["Delaying BSN-dependent banking", "Assuming THIC replaces all gemeente steps"],
    },
    {
      title: "Engineer choosing Delft over Eindhoven or Amsterdam",
      summary: "You value the university-town environment and accept less local nightlife scale.",
      needsFirst: ["Sector fit in Zuid-Holland", "Commute test to employer", "Housing alerts"],
      documents: ["Standard rental application pack"],
      timing: "Register on valid address; insure when obliged.",
      mistakes: ["Choosing on aesthetics without job-market reality", "Underestimating Randstad travel if office elsewhere"],
    },
    {
      title: "Comparing Delft and The Hague for lifestyle",
      summary: "Delft is smaller and more academic; The Hague is larger with institutions and coast access.",
      needsFirst: ["Evening visits in both", "School or partner commute", "Housing budget reality"],
      documents: ["Same core documents either city"],
      timing: "Decide after testing real routes, not maps alone.",
      mistakes: ["Ignoring partner commute anchor", "Assuming identical housing pressure"],
    },
    {
      title: "Newcomer needing registration and BSN quickly",
      summary: "Follow Delft’s English pages first; add THIC if your route qualifies.",
      needsFirst: ["Registrable lease", "Municipal appointment", "Document bundle"],
      documents: ["Passport", "Permit if needed", "Civil docs if requested"],
      timing: "Sequence BSN before blocking payroll or accounts.",
      mistakes: ["Informal sublets without registration clarity", "Skipping DigiD until something breaks"],
    },
    {
      title: "Choosing Delft for beauty and livability over metro scale",
      summary: "You prioritise canals and calm and can accept travelling for certain nightlife or shopping.",
      needsFirst: ["Honest lifestyle audit", "Budget for occasional trips", "Neighbourhood noise checks"],
      documents: ["Rental paperwork as applicable"],
      timing: "Register all household members who need BRP.",
      mistakes: ["Expecting Amsterdam-level variety locally", "Underestimating student-season housing crunch"],
    },
  ],

  commonMistakes: [
    { mistake: "Assuming Delft student housing sorts itself out at the last minute", internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" } },
    { mistake: "Skipping gemeente English guidance and relying only on chat groups" },
    { mistake: "Ignoring The Hague International Centre when your study or work route may qualify", internalLink: { label: "Moving to The Hague", href: "/netherlands/the-hague/" } },
    { mistake: "Delaying Dutch health insurance when you are in the mandatory bucket", internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" } },
    { mistake: "Signing housing without confirming BRP / registration eligibility" },
    { mistake: "Expecting the same big-city job density locally as in Amsterdam or Rotterdam" },
  ],

  tools: [
    { label: "Relocation checklist", href: "/netherlands/moving-checklist-netherlands/", description: "Phased tasks for your move", status: "live" },
    { label: "Document readiness checker", href: "/netherlands/document-readiness-checker/", description: "See common document needs", status: "live" },
    { label: "Visa timeline estimator", href: "/netherlands/visa-timeline-estimator/", description: "Plan permit timing", status: "live" },
    { label: "Visa cost calculator", href: "/netherlands/visa-cost-calculator/", description: "Budget fees and moving costs", status: "live" },
  ],

  faqs: [
    {
      q: "Is Delft a good city for expats?",
      a: "Many expats choose Delft for TU Delft, engineering and research careers, and a compact historic environment. It suits people who want beauty and manageability with Randstad access — less so if you need maximum metro scale or nightlife.",
    },
    {
      q: "How does registration work when I move from abroad?",
      a: "If you stay at least four months, you typically must register with the municipality. Gemeente Delft publishes English guidance for moving from abroad; follow their checklist for appointments and documents. BSN follows successful registration when applicable.",
    },
    {
      q: "What is The Hague International Centre’s role for Delft?",
      a: "THIC supports internationals in the wider region and partners with Delft. Services depend on your situation — check their live pages for student routes, work routes, and eligibility rather than assuming a single process.",
    },
    {
      q: "Where do students usually live?",
      a: "Many students use routes described on Gemeente Delft’s student-housing pages, often involving DUWO. Read municipal and university guidance together and confirm contract and registration rules.",
    },
    {
      q: "Is Delft cheaper than Amsterdam?",
      a: "Do not assume it is always cheap or easy. Student demand and Randstad proximity can still make housing competitive. Research listing by listing and plan deposits and documents seriously.",
    },
    {
      q: "Can I commute from Delft to The Hague or Rotterdam?",
      a: "Yes — many people use train and bike. Test door-to-door time for your hours before you fix a lease far from your station of choice.",
    },
    {
      q: "Do I need Dutch health insurance in Delft?",
      a: "Rules are national. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our health insurance guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Gemeente Delft English pages, The Hague International Centre resources, and national references. Confirm current requirements on each official site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Delft",

  relatedGuides: [
    {
      title: "Essential setup",
      links: [
        { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
        { label: "All services", href: "/netherlands/services/" },
        { label: "Cities hub", href: "/netherlands/cities/" },
      ],
    },
    {
      title: "Documents",
      links: [
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      ],
    },
    {
      title: "Permits & advice",
      links: [
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
      ],
    },
    {
      title: "Compare cities",
      links: [
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
      ],
    },
    {
      title: "How we write & cite",
      links: [
        { label: "How this site works", href: "/how-this-site-works/" },
        { label: "Methodology", href: "/methodology/" },
        { label: "Sources", href: "/sources/" },
      ],
    },
  ],

  cityLinksSectionTitle: "Explore More Cities and Services",

  cityLinks: [
    { label: "Compare all Dutch cities", href: "/netherlands/cities/" },
    { label: "Services hub", href: "/netherlands/services/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
    { label: "Moving to Groningen", href: "/netherlands/groningen/" },
    { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
    { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
  ],
};
