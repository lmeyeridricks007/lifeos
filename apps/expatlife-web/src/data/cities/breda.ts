/**
 * Breda city hub – /netherlands/breda/
 * Historic Brabant city: approachable scale, Breda Internationals ecosystem, BUas / Avans / International School context.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Breda",
    label: "Welcome to Breda (Gemeente Breda, English)",
    url: "https://www.breda.nl/en/welcome-breda-you-are-now-bredanaar",
  },
  {
    category: "Municipality of Breda",
    label: "Municipality of Breda (English)",
    url: "https://www.breda.nl/en/municipality-breda",
  },
  {
    category: "Breda Internationals",
    label: "Breda Internationals – home",
    url: "https://bredainternationals.com/",
  },
  {
    category: "Breda Internationals",
    label: "Practical information",
    url: "https://bredainternationals.com/practical-information/",
  },
  {
    category: "Breda Internationals",
    label: "Arrival",
    url: "https://bredainternationals.com/arrival/",
  },
  {
    category: "Breda Internationals",
    label: "Expat guides",
    url: "https://bredainternationals.com/expat-guides/",
  },
  {
    category: "Breda Internationals – housing & home",
    label: "Housing",
    url: "https://bredainternationals.com/housing/",
  },
  {
    category: "Breda Internationals – housing & home",
    label: "Buy a house",
    url: "https://bredainternationals.com/buy-a-house/",
  },
  {
    category: "Breda Internationals – healthcare",
    label: "Healthcare",
    url: "https://bredainternationals.com/healthcare/",
  },
  {
    category: "Breda Internationals – education",
    label: "Education",
    url: "https://bredainternationals.com/education/",
  },
  {
    category: "Breda Internationals – education",
    label: "International School Breda",
    url: "https://bredainternationals.com/education/international-school-breda/",
  },
  {
    category: "Breda Internationals – business",
    label: "Business",
    url: "https://bredainternationals.com/business/",
  },
  {
    category: "Breda Internationals – community",
    label: "Events",
    url: "https://bredainternationals.com/events/",
  },
  {
    category: "Regional immigration / newcomer support",
    label: "Holland Expat Center South",
    url: "https://www.hollandalumni.nl/holland-expat-center-south",
  },
  {
    category: "Health insurance",
    label: "Government.nl – When do I need health insurance if I come to live in the Netherlands?",
    url: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands",
  },
  {
    category: "National relocation context",
    label: "Government.nl – What do I need to arrange if I'm moving to the Netherlands?",
    url: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-i'm-moving-to-the-netherlands",
  },
];

export const bredaCityPage: CityHubPageData = {
  slug: "breda",
  country: "netherlands",
  name: "Breda",
  path: "/netherlands/breda/",
  publish: true,
  publishDate: "2026-03-30",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Breda as an Expat | Living in Breda, Housing, Lifestyle & Practical Setup",
    description:
      "Thinking about moving to Breda? Explore why expats choose Breda, what life is like, how registration and housing work, and which services can help you settle in.",
    keywords: [
      "moving to breda as an expat",
      "breda for expats",
      "living in breda netherlands expat",
      "breda netherlands expat guide",
      "should i live in breda expat",
      "breda vs eindhoven expat",
      "breda family life expat",
      "breda student city expat",
      "housing in breda for expats",
      "international school breda expat",
      "breda internationals",
      "gemeente breda english",
      "holland expat center south",
      "buas international",
      "brabant netherlands expat",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Breda as an Expat",
    subtitle:
      "Discover why expats choose Breda for its welcoming atmosphere, manageable city scale, and strong Brabant livability — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/breda-expat-city-hero.png",
      alt: "Breda historic Grote Markt and church tower at golden hour: brick façades, café terraces, bicycles, green trees, relaxed southern Dutch city life.",
      imagePrompt:
        "Editorial hero: Breda Grote Kerk, Grote Markt, Brabant historic centre, cafés, bicycles, warm light.",
    },
    ctas: [
      { label: "Explore Breda Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "breda-at-a-glance", label: "Breda at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Breda" },
    { id: "what-life-like", label: "Life in Breda" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Breda suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-breda", label: "First administrative steps" },
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

  quickFactsHeading: "Breda at a Glance",

  quickFacts: [
    {
      label: "Best for",
      value: "Families, students, young professionals, entrepreneurs, internationals open to Brabant",
    },
    { label: "Typical vibe", value: "Welcoming, historic, sociable, more relaxed than the largest metros" },
    {
      label: "Strongest appeal",
      value: "Balanced city life with a friendlier, more approachable scale and strong livability",
    },
    {
      label: "Trade-off to know",
      value: "Less global corporate job density than Amsterdam or Rotterdam; validate your sector locally",
    },
    {
      label: "Good fit if you want",
      value: "Warmth and everyday convenience over maximum big-city intensity",
    },
    {
      label: "Regional advantage",
      value: "Breda Internationals for practical guides & community; HECS for Brabant immigration support; strong education presence (BUas, Avans, International School Breda)",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Breda",
    paragraphs: [
      "Breda is often described as a city that feels both historic and current: a real urban centre with cafés, culture, and green pockets, but without the constant pressure of the largest Randstad metros. Many internationals choose it when they want Dutch city life — walkable, social, bike-friendly — at a scale that still feels approachable for families, students, and professionals who are happy in Brabant rather than defaulting to Amsterdam, Rotterdam, or Utrecht.",
      "Practical orientation is unusually clear for a mid-size city: Gemeente Breda publishes English newcomer material (“Welcome to Breda”), and Breda Internationals aggregates practical information on arrival, housing, healthcare, education, transport, leisure, business, and expat guides. Breda Internationals also points to Holland Expat Center South as a non-profit governmental one-stop shop for immigration-related procedures in Brabant — eligibility and scope depend on your situation, so confirm on their live pages. None of this removes the need to plan housing seriously or to follow national rules for registration, insurance, and banking.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Breda",
    paragraphs: [
      "Daily rhythm tends to mix a compact historic core with residential neighbourhoods and parks — errands by bike, terraces after work, and enough going on culturally without feeling like you live inside a single corporate district. The city presents itself as welcoming and trendy in parts, but the honest draw for many expats is steadier: good everyday livability, green space, and a social feel that can seem warmer than some western mega-cities.",
      "English is common in international education and many workplaces; Dutch still helps for deeper community ties and some services. If you need the densest international job boards or nightly global-city energy, you may still look at Randstad hubs or compare with Eindhoven’s tech scale — Breda wins for many people on balance, atmosphere, and Brabant lifestyle rather than on every career metric.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Breda",
    reasons: [
      {
        title: "Manageable city scale",
        explanation:
          "Big enough for services, culture, and variety; small enough that many neighbourhoods feel reachable and human-scaled.",
        whoItSuits: "People who dislike constant mega-city friction",
      },
      {
        title: "Quality of life and green space",
        explanation:
          "Breda promotes itself as livable with green surroundings — attractive when you want room to breathe while staying urban.",
        whoItSuits: "Families, outdoor-oriented professionals, calmer couples",
      },
      {
        title: "Education and student appeal",
        explanation:
          "Institutions such as Breda University of Applied Sciences (BUas) and Avans (with Breda presence) anchor international students and staff; International School Breda matters for families comparing options.",
        whoItSuits: "Students, academic staff, parents researching schools",
      },
      {
        title: "Family friendliness",
        explanation:
          "Many families value the combination of city amenities, approachable scale, and school research paths documented on Breda Internationals.",
        whoItSuits: "Parents planning housing and education in parallel",
      },
      {
        title: "Welcoming atmosphere",
        explanation:
          "The city markets a friendly, social character; Breda Internationals adds community events and guides aimed at internationals.",
        whoItSuits: "Newcomers who want local context quickly",
      },
      {
        title: "Practical information ecosystem",
        explanation:
          "Municipal English pages plus Breda Internationals and Holland Expat Center South (Brabant) create layered support — still verify everything for your nationality and permit route.",
        whoItSuits: "Anyone who prefers structured orientation over guessing from forums",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in Breda",
    companiesCount: getCityStats("breda")?.companies ?? null,
    jobsCount: getCityStats("breda")?.jobs ?? null,
    sourceLabel: getCityStats("breda")?.sourceLabel,
    sourceHref: getCityStats("breda")?.sourceHref,
    industries: getCityStats("breda")?.industries ?? [],
    majorEmployers: getCityStats("breda")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Breda Is Best For",
    profiles: [
      "Family wanting a friendlier, more manageable city with schools to research (including International School Breda)",
      "Student or early-career international linked to BUas, Avans, or other regional routes",
      "Entrepreneur or small-business builder exploring Breda’s business content and Brabant networks",
      "Professional open to Brabant instead of the Randstad default, with a realistic commute plan",
      "Newcomer who values livability, green space, and local warmth over maximum metro scale",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Breda is not Amsterdam for international corporate headquarters or the widest English-speaking job pool. If your sector clusters in the western Randstad, you may commute, work remotely part-time, or reconsider the city — test realistic travel before you sign a long lease.",
      "Compared with Eindhoven, Breda is less centred on semiconductors and Brainport-scale tech marketing; it is often chosen for city feel and lifestyle balance rather than chip-industry identity. Compared with Maastricht, the southern character is Brabant rather than Limburg cross-border texture — both can suit lifestyle-led movers, but the job and social maps differ.",
      "Housing still requires planning: use platforms, agencies, or relocation support, read Breda Internationals housing material, and confirm that your address supports municipal registration before you pay large deposits.",
    ],
  },

  cityComparison: {
    heading: "How Breda Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains why Breda attracts expats who want Brabant livability and approachable urban scale, how Gemeente Breda and Breda Internationals fit into your first weeks, and where Holland Expat Center South may help with immigration procedures in the region. We link to our Netherlands-wide guides for insurance, banking, and documents, and to service hubs for housing and relocation — without implying any provider is universally best.",
      "Compare cities honestly: Amsterdam and Rotterdam for breadth; Eindhoven for deep tech; Maastricht for Limburg cross-border flavour; Haarlem for Randstad charm; Groningen for northern student energy — Breda often sits in the “balanced Brabant city” slot on that map.",
    ],
    links: [
      { label: "Compare Dutch cities hub", href: "/netherlands/cities/" },
      { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services", href: "/netherlands/services/" },
      { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
      { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
      { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
      { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
      { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
      { label: "Moving to Maastricht", href: "/netherlands/maastricht/" },
      { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
      { label: "Moving to Groningen", href: "/netherlands/groningen/" },
      { label: "Moving to Delft", href: "/netherlands/delft/" },
      { label: "Moving to Leiden", href: "/netherlands/leiden/" },
      { label: "Moving to Amstelveen", href: "/netherlands/amstelveen/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Breda",
    body: [
      "Gemeente Breda’s English “Welcome to Breda” and municipality pages are the right starting points for local civil procedures alongside national immigration and registration rules.",
      "Breda Internationals publishes arrival-oriented material for internationals; use it together with (not instead of) official gemeente instructions. For immigration-related procedures in Brabant, Holland Expat Center South is referenced as a free governmental one-stop service for eligible knowledge workers and families — confirm what applies to you.",
      "Typical early chains: qualifying address and municipal registration when applicable, BSN, DigiD, Dutch bank account if needed, mandatory basic health insurance when required by national rules, and huisarts registration after insurance.",
    ],
    steps: [
      "Read Gemeente Breda (EN) welcome pages and Breda Internationals arrival content for your situation.",
      "Book municipal registration with ID, housing proof, and civil documents as requested.",
      "Contact Holland Expat Center South if your employer or route matches their Brabant services.",
      "Complete DigiD, banking, and insurance using our national guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address acceptable to Gemeente Breda",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if officials request them",
      "Sworn translations or legalizations only when asked",
    ],
    officialSourceLinks: [
      { label: "Welcome to Breda (Gemeente Breda)", url: "https://www.breda.nl/en/welcome-breda-you-are-now-bredanaar" },
      { label: "Breda Internationals – Arrival", url: "https://bredainternationals.com/arrival/" },
      { label: "Holland Expat Center South", url: "https://www.hollandalumni.nl/holland-expat-center-south" },
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
    heading: "BSN and DigiD After Settling in Breda",
    body: [
      "BSN follows successful municipal registration when you have a qualifying Dutch address. Follow Gemeente Breda’s current process and appointments.",
      "DigiD is national: apply after BSN and registered address, then activate with postal verification.",
    ],
    digidRequirements: ["BSN", "Registered Dutch address", "Mobile phone for application"],
    examples: ["Municipality portals", "Health insurer portals", "Belastingdienst", "Employer onboarding"],
    plannedPageLinks: [
      { label: "BSN registration (Netherlands guide)", href: "/netherlands/bsn-registration/" },
      { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance When You Live in Breda",
    body: [
      "Rules are national. If you must hold Dutch basic insurance, arrange it within the official window for your situation.",
      "Breda Internationals publishes healthcare orientation for local navigation — pair it with insurer comparison and Government.nl.",
    ],
    advice: [
      "Compare premium and eigen risico once obligation is clear.",
      "Browse insurers via our services directory on your own terms.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Breda",
    body: [
      "Most people want a Dutch account for salary, rent, and iDEAL. Requirements usually include ID, often BSN, and proof of address.",
      "National banks and digital providers serve Breda; choose based on English support, fees, and branch access if you prefer in-person help.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies)", "Dutch address proof", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Breda for Expats",
    body: [
      "Housing still rewards early planning. Breda Internationals provides housing and “buy a house” orientation; combine it with active listing searches and our housing platforms, rental agencies, and relocation hubs.",
      "Students, young professionals, and families can overlap in popular segments — treat timelines seriously and verify landlord and registration rules before large upfront payments.",
      "What to budget for qualitatively: rent and deposit, possible education or school fees where relevant, bank and insurance setup, document preparation from abroad, daily transport choices, and family-related costs. Exact amounts vary — do not assume Breda is always easy or cheap.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; verify listings", note: "Use Breda Internationals + platforms", disclaimer: "Varies" },
      { label: "Education", value: "School-specific", note: "International School Breda etc.", disclaimer: "Verify admissions" },
      { label: "Transport", value: "Bike + OV", note: "Randstad trips by train", disclaimer: "Depends on commute" },
      { label: "Bank & insurance", value: "National market", note: "Same rules as elsewhere in NL", disclaimer: "Varies" },
      { label: "Documents", value: "Translation / legalisation", note: "When officials require it", disclaimer: "Origin-dependent" },
    ],
    neighborhoodsNote:
      "Walk candidate areas at different times; check distance to work or campus, school catchments if relevant, and noise near nightlife corridors.",
    warning:
      "Do not pay large deposits until landlord identity, contract terms, and BRP registration eligibility are clear.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Breda and Brabant",
    body: [
      "Cycling fits daily life in and around the centre; regional buses and trains connect Breda to Rotterdam, Tilburg, Eindhoven, and the wider Randstad for work or leisure. If you expect frequent western commuting, test schedules before you lock in housing.",
      "Car ownership is optional for many households but useful for some regional patterns; parking and environmental zones still apply in urban areas.",
    ],
    goodToKnow: [
      "Compare Breda with Eindhoven on job sector first, then on city feel and commute.",
      "If you expect regular Randstad travel, test train times from Breda before you fix housing far from the station.",
      "Keep OV-chipkaart or contactless OV options updated once travel habits settle.",
    ],
  },

  servicesIntro:
    "Below are our live Netherlands service hubs, Gemeente Breda and Breda Internationals pages, Holland Expat Center South (Brabant), and education-oriented references (BUas, Avans, International School Breda profile). Listings are informational — we do not rank providers or imply endorsement.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Breda",

  first30Days: {
    heading: "Your First 30 Days in Breda",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration; skim Welcome to Breda and Breda Internationals arrival pages.",
          "Note Holland Expat Center South if your employer points you there for Brabant immigration steps.",
          "Map groceries, bike routes, and a shortlist of GPs for after insurance.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule municipal registration; track BSN.",
          "Start DigiD when eligible; watch postal activation.",
          "Open or progress a Dutch bank account if salary or rent requires it.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange Dutch basic health insurance if mandatory for you.",
          "Share IBAN and BSN with employer, landlord, and schools as needed.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finish DigiD activation; register with a huisarts.",
          "Explore Breda Internationals events for community orientation.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Breda Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, schools, and employment facts for your case.",

  exampleScenarios: [
    {
      title: "Family choosing Breda over a larger Randstad city",
      summary: "You want approachable scale, green space, and a social city without central Amsterdam intensity.",
      needsFirst: ["International School Breda or local school research", "Housing search with registration clarity", "Commute test if one parent works in the west"],
      documents: ["Rental pack", "ID", "Permits as applicable"],
      timing: "Register on valid address; insure when obliged.",
      mistakes: ["Assuming housing is effortless", "Ignoring school catchment timing"],
    },
    {
      title: "Student moving for BUas or Avans in Breda",
      summary: "Your programme anchors you in Breda; you need housing and municipal steps like other Dutch student cities.",
      needsFirst: ["University housing vs private market plan", "BSN timeline for banking", "Insurance obligation check"],
      documents: ["Admission letter", "ID", "Address proof when available"],
      timing: "Parallel housing and registration; don’t delay insurance if required.",
      mistakes: ["Late housing search before term", "Skipping gemeente instructions"],
    },
    {
      title: "Professional choosing Breda over Eindhoven for city feel",
      summary: "Your job works in Brabant but you prefer Breda’s historic centre and lifestyle balance over Brainport’s tech-city identity.",
      needsFirst: ["Realistic commute or remote agreement", "Sector employer map", "Evening visits"],
      documents: ["Standard rental documents"],
      timing: "Decide job anchor first, then housing.",
      mistakes: ["Choosing on photos only", "Underestimating occasional Eindhoven-area travel"],
    },
    {
      title: "Entrepreneur exploring Breda Internationals business content",
      summary: "You use local guides and events while lining up KvK, permits, and tax advice.",
      needsFirst: ["Permit route", "Accountant shortlist", "Business banking requirements"],
      documents: ["Varies by legal form"],
      timing: "BSN and address before assuming full business onboarding.",
      mistakes: ["Treating blog-style guides as legal advice"],
    },
    {
      title: "Newcomer using Breda Internationals for housing and healthcare orientation",
      summary: "You map local context first, then execute with official portals and our service hubs.",
      needsFirst: ["Housing platforms alerts", "Insurance obligation", "GP shortlist"],
      documents: ["Passport", "Permit paperwork", "Housing proof"],
      timing: "Insurance before delaying non-urgent care access.",
      mistakes: ["Paying deposits before registration clarity"],
    },
    {
      title: "Comparing Breda and Maastricht for southern Netherlands life",
      summary: "Both suit lifestyle-led movers; Maastricht leans Limburg cross-border; Breda leans Brabant balance with Randstad train access.",
      needsFirst: ["Job location", "School needs", "Travel-to-family reality"],
      documents: ["As per gemeente and IND"],
      timing: "Visit both if possible before a long lease.",
      mistakes: ["Assuming “south” means identical job markets"],
    },
  ],

  commonMistakes: [
    {
      mistake: "Assuming Breda housing is always easy or low-pressure",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      mistake: "Skipping Gemeente Breda English pages for registration context",
      internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
    },
    {
      mistake: "Ignoring Holland Expat Center South when your Brabant route matches their services",
      internalLink: { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    },
    {
      mistake: "Delaying Dutch health insurance when national rules require it",
      internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    },
    {
      mistake: "Expecting Amsterdam-scale international job density without accepting commute or sector limits",
      internalLink: { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
    },
    { mistake: "Treating community guides as a substitute for official immigration or tax advice" },
  ],

  tools: [
    { label: "Relocation checklist", href: "/netherlands/moving-checklist-netherlands/", description: "Phased tasks for your move", status: "live" },
    { label: "Document readiness checker", href: "/netherlands/document-readiness-checker/", description: "See common document needs", status: "live" },
    { label: "Visa timeline estimator", href: "/netherlands/visa-timeline-estimator/", description: "Plan permit timing", status: "live" },
    { label: "Visa cost calculator", href: "/netherlands/visa-cost-calculator/", description: "Budget fees and moving costs", status: "live" },
  ],

  faqs: [
    {
      q: "Is Breda a good city for expats?",
      a: "Many expats choose Breda for livability, approachable scale, education options (including BUas, Avans, and International School Breda for families), and practical orientation via Breda Internationals. It suits people open to Brabant — less so if you need maximum Randstad corporate density without commuting.",
    },
    {
      q: "What is Breda Internationals?",
      a: "It is a practical information and community platform for internationals in Breda, covering topics such as arrival, housing, healthcare, education, transport, leisure, business, and expat guides. It complements — but does not replace — gemeente and national official sources.",
    },
    {
      q: "What is Holland Expat Center South?",
      a: "A non-profit governmental organisation helping international knowledge workers and families in Brabant; Breda Internationals references it for free support with immigration-related procedures where applicable. Check their site for eligibility and services.",
    },
    {
      q: "How do I register in Breda?",
      a: "Start with Gemeente Breda’s English newcomer and municipality pages for appointments and documents. Follow national rules for timing and required paperwork. Use Breda Internationals for local context alongside official instructions.",
    },
    {
      q: "How does Breda compare with Eindhoven?",
      a: "Eindhoven is strongly associated with Brainport tech and semiconductors; Breda is often chosen for historic-centre lifestyle, balance, and Brabant livability while still reachable to regional employers. Compare on job sector and personal city feel.",
    },
    {
      q: "Is housing easy in Breda?",
      a: "No — plan seriously. Use Breda Internationals housing material plus housing platforms, agencies, or relocation support, and verify BRP registration eligibility before large deposits.",
    },
    {
      q: "Do I need Dutch health insurance in Breda?",
      a: "National rules apply. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Gemeente Breda, Breda Internationals, Holland Expat Center South, and national references. Confirm current requirements on each site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Breda",

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
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "Maastricht", href: "/netherlands/maastricht/" },
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
    { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
    { label: "Moving to Maastricht", href: "/netherlands/maastricht/" },
    { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
  ],
};
