/**
 * Maastricht city hub – /netherlands/maastricht/
 * Southern Netherlands, cross-border character, Expat Centre Maastricht Region ecosystem.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Maastricht",
    label: "Gemeente Maastricht – English portal",
    url: "https://www.maastricht.nl/en",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Expat Centre Maastricht Region",
    url: "https://www.expatcentremaastrichtregion.nl/",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Employers – services, sessions & events",
    url: "https://www.expatcentremaastrichtregion.nl/employers/services-sessions-events",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Expats – relocation services",
    url: "https://www.expatcentremaastrichtregion.nl/expats/formalities/relocation-services",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Expats – taxation system",
    url: "https://www.expatcentremaastrichtregion.nl/expats/taxation-insurance/taxation-system",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Expats – general practitioner (GP)",
    url: "https://www.expatcentremaastrichtregion.nl/expats/healthcare/general-practitioner-gp",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Events",
    url: "https://www.expatcentremaastrichtregion.nl/events",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Expats – starting a business",
    url: "https://www.expatcentremaastrichtregion.nl/expats/education-careers/starting-business",
  },
  {
    category: "Expat Centre Maastricht Region",
    label: "Expats – finding a job",
    url: "https://www.expatcentremaastrichtregion.nl/expats/education-careers/finding-job",
  },
  {
    category: "Expat Centre Maastricht Region – expert partners",
    label: "Expert partners – Expat Mortgages South",
    url: "https://www.expatcentremaastrichtregion.nl/expert-partners/partners-housing/expat-mortgages-south",
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

export const maastrichtCityPage: CityHubPageData = {
  slug: "maastricht",
  country: "netherlands",
  name: "Maastricht",
  path: "/netherlands/maastricht/",
  publish: true,
  publishDate: "2026-03-30",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Maastricht as an Expat | Living in Maastricht, Housing, Lifestyle & Practical Setup",
    description:
      "Thinking about moving to Maastricht? Explore why expats choose Maastricht, what life is like, how registration and housing work, and which services can help you settle in.",
    keywords: [
      "moving to maastricht as an expat",
      "maastricht for expats",
      "living in maastricht netherlands expat",
      "maastricht netherlands expat guide",
      "should i live in maastricht expat",
      "maastricht vs amsterdam expat",
      "maastricht border region expat",
      "maastricht family life expat",
      "housing in maastricht for expats",
      "maastricht international community expat",
      "expat centre maastricht region",
      "gemeente maastricht english",
      "limburg netherlands expat",
      "maastricht university international",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Maastricht as an Expat",
    subtitle:
      "Discover why expats choose Maastricht for its southern lifestyle, international-border-region feel, and distinctive cultural atmosphere — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/maastricht-expat-city-hero.png",
      alt: "Maastricht historic centre by the Meuse: stone bridge, church towers, café terraces and bicycles in warm evening light.",
      imagePrompt:
        "Editorial hero: Maastricht old town, Meuse river, Sint Servaas bridge mood, European café culture, bicycles.",
    },
    ctas: [
      { label: "Explore Maastricht Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "maastricht-at-a-glance", label: "Maastricht at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Maastricht" },
    { id: "what-life-like", label: "Life in Maastricht" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Maastricht suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-maastricht", label: "First administrative steps" },
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

  quickFactsHeading: "Maastricht at a Glance",

  quickFacts: [
    {
      label: "Best for",
      value: "Internationals open to southern NL, academics, cross-border professionals, families, entrepreneurs",
    },
    { label: "Typical vibe", value: "Cultured, historic, elegant, slower-paced" },
    {
      label: "Strongest appeal",
      value: "Distinctive lifestyle and cross-border regional character vs standard Randstad Dutch cities",
    },
    {
      label: "Trade-off to know",
      value: "Less central to the Randstad and a different broad job-market profile than Amsterdam or Rotterdam",
    },
    {
      label: "Good fit if you want",
      value: "More charm, food and café culture, and regional identity in daily life",
    },
    {
      label: "Regional advantage",
      value: "Expat Centre Maastricht Region — information, consultation, events, and expert partners",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Maastricht",
    paragraphs: [
      "Maastricht feels less like “default Netherlands” and more like a southern, border-aware European city: compact old streets, strong café and restaurant culture, and easy mental proximity to Belgium and Germany for work, travel, and weekend rhythm. Many expats arrive for Maastricht University, regional health or knowledge employers, cross-border roles, or simply because they want a beautiful, lifestyle-led base that is not the Randstad.",
      "Practical support matches the international inflow: the Municipality of Maastricht’s English portal highlights first registration, DigiD, and BRP extracts, while Expat Centre Maastricht Region positions itself as a guide for residents and businesses — with information services, expert staff, one-on-one consultation, sessions, social events, and consultation hours involving partner providers. It is a real regional ecosystem for permits, housing orientation, tax and insurance questions, and settling in — not a guarantee that every step is effortless.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Maastricht",
    paragraphs: [
      "Daily life often revolves around the historic core and the Meuse — walking between markets, terraces, and cultural venues, cycling short distances, and treating cross-border errands or trips as normal rather than exceptional. The pace is typically calmer than Amsterdam or Rotterdam; nightlife depth is different in scale, but food, design, and local identity are strong.",
      "English works in many international and academic contexts; Dutch still matters for deeper integration and some services. If you need constant big-city corporate density or the largest international job board in the country, you may still travel or reconsider — but if you want intimacy, beauty, and a southern Dutch-European blend, Maastricht is often on the shortlist with Eindhoven or other non-western hubs.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Maastricht",
    reasons: [
      {
        title: "Southern lifestyle",
        explanation:
          "A visibly different rhythm and aesthetic from the western Randstad — appealing when you prioritise quality of life and regional character.",
        whoItSuits: "Lifestyle-driven movers, food and culture enthusiasts",
      },
      {
        title: "Cross-border relevance",
        explanation:
          "Living in Limburg often includes Belgium and Germany in your mental map — relevant for shopping, healthcare choices, commuting, and social life (always verify rules for your nationality and permits).",
        whoItSuits: "Cross-border workers, EU movers, regional professionals",
      },
      {
        title: "Expat Centre Maastricht Region",
        explanation:
          "Created to support international talent; offers information, consultation, events, and connections to expert partners for housing, taxation, insurance, and more — check participation rules for your municipality.",
        whoItSuits: "Newcomers who want structured regional orientation",
      },
      {
        title: "University and knowledge context",
        explanation:
          "Maastricht University and regional institutions draw academics, researchers, and international students — shaping an English-friendly knowledge environment.",
        whoItSuits: "Academics, PhDs, students, university-linked staff",
      },
      {
        title: "Entrepreneurship support",
        explanation:
          "The Expat Centre publishes starting-a-business orientation for internationals in the region — pair with permits, KvK, and tax advice for your case.",
        whoItSuits: "Founders, freelancers, small-business owners",
      },
      {
        title: "Historic, elegant city feel",
        explanation:
          "Stone architecture, river setting, and human-scale streets make routine life pleasant without mega-city sprawl.",
        whoItSuits: "People who value aesthetics and walkability",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in the Maastricht region",
    companiesCount: getCityStats("maastricht")?.companies ?? null,
    jobsCount: getCityStats("maastricht")?.jobs ?? null,
    sourceLabel: getCityStats("maastricht")?.sourceLabel,
    sourceHref: getCityStats("maastricht")?.sourceHref,
    industries: getCityStats("maastricht")?.industries ?? [],
    majorEmployers: getCityStats("maastricht")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Maastricht Is Best For",
    profiles: [
      "Expat who wants a clear alternative to Randstad pace and skyline",
      "Family seeking a calmer, lifestyle-oriented city with international community access",
      "Entrepreneur or self-employed international exploring southern NL",
      "Academic, researcher, or international staff linked to Maastricht University or regional employers",
      "Professional with cross-border or Limburg regional orientation",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Distance from the main western urban cluster matters: frequent travel to Amsterdam for work or friends is doable by train, but it is not a daily commute for most people. Job-market breadth in some sectors is thinner than in the Randstad — validate your sector and employer location before you commit.",
      "Housing is not automatically cheap or abundant. Student and international demand can still tighten segments; use platforms, agencies, and relocation support early, and confirm BRP registration rules for any address.",
      "If you want Dutch international-institution density (embassies, NGOs at scale), The Hague fits better. If you want semiconductors and Brainport scale, compare honestly with Eindhoven. Maastricht wins on southern culture and cross-border lifestyle — not on every career metric.",
    ],
  },

  cityComparison: {
    heading: "How Maastricht Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains why Maastricht attracts expats who want southern Netherlands and a European-border mindset, how municipal registration and DigiD fit with Expat Centre Maastricht Region support, and where to find housing and service help without overpromising ease or cost.",
      "Use our Netherlands-wide guides for insurance, banking, and documents, and our services directory for housing, relocation, visas, and legal support. We cite Expat Centre expert partners (such as Expat Mortgages South) as public ecosystem examples — not endorsements.",
    ],
    links: [
      { label: "Compare Dutch cities hub", href: "/netherlands/cities/" },
      { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services", href: "/netherlands/services/" },
      { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
      { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
      { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
      { label: "Moving to Leiden", href: "/netherlands/leiden/" },
      { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
      { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
      { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
      { label: "Moving to Groningen", href: "/netherlands/groningen/" },
      { label: "Moving to Amstelveen", href: "/netherlands/amstelveen/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Maastricht",
    body: [
      "The Municipality of Maastricht’s English portal highlights first registration in the Netherlands, DigiD, and BRP extracts as core practical entry points — follow their current instructions for appointments and documents when your address is in Maastricht.",
      "Expat Centre Maastricht Region supports international residents in participating Maastricht Region municipalities with information services, expert staff, and one-on-one consultation, plus events and partner consultation hours. Use it alongside (not instead of) gemeente and national rules for permits, taxes, insurance, and healthcare.",
      "Typical early chains: address registration and BSN when applicable, DigiD, Dutch bank account, mandatory basic health insurance if required, and huisarts registration once insured.",
    ],
    steps: [
      "Read gemeente Maastricht (EN) and Expat Centre pages for your route and municipality participation.",
      "Book municipal registration and prepare ID, housing proof, and civil documents per the checklist.",
      "Attend Expat Centre orientation or events if useful; book partner consultations when you need specialist help.",
      "Complete DigiD, banking, and insurance using our national guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address acceptable to Gemeente Maastricht",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if officials request them",
      "Sworn translations or legalizations only when asked",
    ],
    officialSourceLinks: [
      { label: "Gemeente Maastricht (English)", url: "https://www.maastricht.nl/en" },
      { label: "Expat Centre Maastricht Region", url: "https://www.expatcentremaastrichtregion.nl/" },
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
    heading: "BSN and DigiD After Settling in Maastricht",
    body: [
      "BSN follows successful municipal registration when you have a qualifying address. Gemeente Maastricht’s English pages cover first registration context; timelines depend on appointments and documents.",
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
    heading: "Health Insurance When You Live in Maastricht",
    body: [
      "Rules are national. If you must hold Dutch basic insurance, arrange it within the official window for your situation.",
      "Expat Centre Maastricht Region publishes GP orientation — pair it with insurer choice and our health insurance guide.",
    ],
    advice: [
      "Compare premium and eigen risico once obligation is clear.",
      "Browse insurers via our services directory on your own terms.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Maastricht",
    body: [
      "Most people want a Dutch account for salary, rent, and iDEAL. Requirements usually include ID, often BSN, and proof of address.",
      "Limburg is well served digitally and by national banks; choose based on English support and fees.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies)", "Dutch address proof", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Maastricht for Expats",
    body: [
      "Housing still rewards early planning. Students, internationals, and families can overlap in segments; use housing platforms, rental agencies, and relocation services when you want help navigating viewings and contracts.",
      "Employer-supported moves may include relocation providers; Expat Centre Maastricht Region surfaces relocation and housing expert partners — compare fees and scope yourself. Example partner pages include Expat Mortgages South for purchase-oriented internationals.",
      "What to budget for: rent and deposit, commuting or car if needed, bank and insurance setup, document costs, and family or business setup where relevant. Exact figures vary — avoid assuming Maastricht is always affordable.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; verify listings", note: "International + student demand", disclaimer: "Varies" },
      { label: "Transport", value: "Bike + OV", note: "Cross-border travel extra", disclaimer: "Depends on lifestyle" },
      { label: "Bank & insurance", value: "National market", note: "Tax orientation via Expat Centre context", disclaimer: "Varies" },
      { label: "Business setup", value: "Permits & advice", note: "If self-employed", disclaimer: "Case-by-case" },
      { label: "Documents", value: "Translation / legalisation", note: "When officials require it", disclaimer: "Origin-dependent" },
    ],
    neighborhoodsNote:
      "Walk areas at different times; check noise near student corridors, distance to faculty or work, and cross-border commute reality.",
    warning:
      "Do not pay large deposits until landlord, contract, and registration eligibility are clear.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Maastricht and the Region",
    body: [
      "Cycling fits the compact core; buses and trains connect Limburg to the rest of the Netherlands and to neighbouring countries. Cross-border workers should validate ticket products and tax implications for their pattern — not something to guess from forums alone.",
      "Car ownership is more common for some regional and border lifestyles than in inner Amsterdam; parking and emissions rules still matter in the centre.",
    ],
    goodToKnow: [
      "Test train and bus options for your working hours before you fix housing.",
      "If you compare Maastricht with Eindhoven, weigh both job fit and travel-to-family in neighbouring countries.",
      "Keep OV-chipkaart or contactless OV options updated after your first month of travel patterns.",
    ],
  },

  servicesIntro:
    "Below are our live service hubs, Gemeente Maastricht and Expat Centre Maastricht Region channels, and example expert partners published on the Expat Centre site (including relocation overview and Expat Mortgages South). We do not rank or endorse providers — compare contracts and pricing yourself.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Maastricht",

  first30Days: {
    heading: "Your First 30 Days in Maastricht",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration; read gemeente EN portal and Expat Centre welcome material.",
          "Register for relevant Expat Centre events or consultation slots.",
          "Map groceries, bike, GP shortlist, and cross-border basics if you use them.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule municipal registration; track BSN.",
          "Start DigiD when eligible; watch postal activation.",
          "Progress Dutch bank account if salary or rent requires it.",
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
          "Follow up tax or permit questions via official channels or booked partner advice.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Maastricht Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, and employment facts for your case.",

  exampleScenarios: [
    {
      title: "Family choosing Maastricht over a Randstad city",
      summary: "You prioritise lifestyle, space, and southern culture over maximum corporate job density.",
      needsFirst: ["School and childcare research", "Commute test if one partner works elsewhere", "Housing alerts"],
      documents: ["Rental pack", "ID", "Permits as applicable"],
      timing: "Register on valid address; insure when obliged.",
      mistakes: ["Assuming housing is easy", "Ignoring travel time to western NL offices"],
    },
    {
      title: "Academic or international staff at Maastricht University",
      summary: "HR may point you to gemeente steps and Expat Centre orientation.",
      needsFirst: ["Host communication", "Housing near faculty or realistic transport", "Event calendar"],
      documents: ["Contract", "ID", "Address proof"],
      timing: "Parallel housing and registration for payroll.",
      mistakes: ["Delaying BSN-dependent banking", "Skipping Expat Centre sessions that clarify regional quirks"],
    },
    {
      title: "Entrepreneur using starting-a-business resources",
      summary: "You use Expat Centre business orientation plus KvK, tax, and permit advisors.",
      needsFirst: ["Permit route clarity", "Business plan reality", "Local accountant shortlist"],
      documents: ["Varies by legal form"],
      timing: "Sequence BSN and address before assuming full business banking.",
      mistakes: ["Mixing Belgian/German assumptions with Dutch obligations without advice"],
    },
    {
      title: "Comparing Maastricht and Eindhoven",
      summary: "Eindhoven emphasises Brainport tech scale; Maastricht emphasises southern lifestyle and cross-border texture.",
      needsFirst: ["Sector employer map", "Evening visits", "Partner commute"],
      documents: ["Standard rental documents"],
      timing: "Decide on job anchor first, lifestyle second.",
      mistakes: ["Choosing on photos only"],
    },
    {
      title: "Newcomer needing permits, housing, tax, and healthcare guidance",
      summary: "You combine gemeente registration with Expat Centre consultation and partner hours.",
      needsFirst: ["Booked appointments", "Document bundle", "Insurance obligation check"],
      documents: ["Passport", "Permit paperwork", "Housing proof"],
      timing: "BSN and insurance before delaying care access.",
      mistakes: ["Relying on informal advice for cross-border tax"],
    },
    {
      title: "International drawn to cross-border European lifestyle",
      summary: "You want Maastricht as a southern base with Belgium/Germany in regular reach.",
      needsFirst: ["Permit and tax rules for your commute pattern", "Healthcare choices", "Realistic housing search"],
      documents: ["As per gemeente and IND"],
      timing: "Register correctly in NL before assuming cross-border shortcuts.",
      mistakes: ["Underestimating administrative complexity of multi-country patterns"],
    },
  ],

  commonMistakes: [
    {
      mistake: "Assuming Maastricht is always cheap or low-pressure for housing",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      mistake: "Skipping Gemeente Maastricht English guidance for registration and DigiD context",
      internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
    },
    {
      mistake: "Ignoring Expat Centre Maastricht Region when your municipality participates",
      internalLink: { label: "Compare cities", href: "/netherlands/cities/" },
    },
    {
      mistake: "Delaying Dutch health insurance when you are in the mandatory bucket",
      internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    },
    { mistake: "Treating cross-border work or living patterns as legally obvious without professional checks" },
    {
      mistake: "Expecting Randstad job-market breadth without accepting travel or sector limits",
      internalLink: { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
    },
  ],

  tools: [
    { label: "Relocation checklist", href: "/netherlands/moving-checklist-netherlands/", description: "Phased tasks for your move", status: "live" },
    { label: "Document readiness checker", href: "/netherlands/document-readiness-checker/", description: "See common document needs", status: "live" },
    { label: "Visa timeline estimator", href: "/netherlands/visa-timeline-estimator/", description: "Plan permit timing", status: "live" },
    { label: "Visa cost calculator", href: "/netherlands/visa-cost-calculator/", description: "Budget fees and moving costs", status: "live" },
  ],

  faqs: [
    {
      q: "Is Maastricht a good city for expats?",
      a: "Many expats choose Maastricht for lifestyle, Maastricht University, cross-border careers, and a southern European-leaning atmosphere. It suits people open to Limburg — less so if you need maximum Randstad job density or Dutch institutional scale daily.",
    },
    {
      q: "What is Expat Centre Maastricht Region?",
      a: "It is a regional support organisation for international talent and businesses, offering information services, expert consultation, events, and access to partner providers for topics such as housing, taxation, insurance, and relocation — subject to participation rules for your municipality.",
    },
    {
      q: "How do I register in Maastricht?",
      a: "Start with Gemeente Maastricht’s English portal for first registration, DigiD, and BRP-related topics. Follow their live checklist and appointments. Expat Centre Maastricht Region can complement with orientation and partner referrals.",
    },
    {
      q: "How does Maastricht compare with Amsterdam?",
      a: "Amsterdam offers the largest international job ecosystem and urban scale; Maastricht offers a smaller, slower, more southern and cross-border lifestyle. Many people choose based on employer location and honest lifestyle preference.",
    },
    {
      q: "Is housing easy in Maastricht?",
      a: "No — treat it like any sought-after city segment. Use platforms, agencies, or relocation help early and verify registration eligibility before large deposits.",
    },
    {
      q: "Do I need Dutch health insurance in Maastricht?",
      a: "National rules apply. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Gemeente Maastricht, Expat Centre Maastricht Region, and national references. Confirm current requirements on each site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Maastricht",

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
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "Groningen", href: "/netherlands/groningen/" },
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
    { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
  ],
};
