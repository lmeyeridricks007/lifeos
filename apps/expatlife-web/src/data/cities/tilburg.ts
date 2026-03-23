/**
 * Tilburg city hub – /netherlands/tilburg/
 * Practical Brabant city: student energy, International Center Tilburg, Tilburg University, Holland Expat Center (Brabant).
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Tilburg",
    label: "Settling in the Netherlands (English)",
    url: "https://www.tilburg.nl/english/settling-in-the-netherlands/",
  },
  {
    category: "Municipality of Tilburg",
    label: "Changing address (English)",
    url: "https://www.tilburg.nl/english/changing-address/",
  },
  {
    category: "Municipality of Tilburg",
    label: "Integration in Tilburg (Infopunt Midden-Brabant)",
    url: "https://www.tilburg.nl/gemeente/actueel/infopunt-midden-brabant/integration-in-tilburg/",
  },
  {
    category: "Municipality of Tilburg",
    label: "Healthcare in Tilburg (Infopunt Midden-Brabant)",
    url: "https://www.tilburg.nl/gemeente/actueel/infopunt-midden-brabant/healthcare-in-tilburg/",
  },
  {
    category: "International Center Tilburg",
    label: "International Center Tilburg",
    url: "https://www.ictilburg.com/",
  },
  {
    category: "International Center Tilburg",
    label: "Join the community",
    url: "https://www.ictilburg.com/join-community",
  },
  {
    category: "Holland Expat Center South",
    label: "Holland Expat Center South",
    url: "https://www.hollandexpatcenter.com/",
  },
  {
    category: "Holland Expat Center South",
    label: "Brabant International Expo",
    url: "https://www.hollandexpatcenter.com/how-we-help/brabant-international-expo",
  },
  {
    category: "Tilburg University",
    label: "Moving to Tilburg – practical matters",
    url: "https://www.tilburguniversity.edu/research/humanities/graduate-school-humanities/practical-matters/moving-tilburg",
  },
  {
    category: "Community support (Tilburg)",
    label: "Tilburg International Club",
    url: "https://tilburginternationalclub.com/",
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

export const tilburgCityPage: CityHubPageData = {
  slug: "tilburg",
  country: "netherlands",
  name: "Tilburg",
  path: "/netherlands/tilburg/",
  publish: true,
  publishDate: "2026-04-03",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Tilburg as an Expat | Living in Tilburg, Housing, Lifestyle & Practical Setup",
    description:
      "Thinking about moving to Tilburg? Explore why expats choose Tilburg, what life is like, how registration and housing work, and which services can help you settle in.",
    keywords: [
      "moving to tilburg as an expat",
      "tilburg for expats",
      "living in tilburg netherlands expat",
      "tilburg netherlands expat guide",
      "should i live in tilburg expat",
      "tilburg vs breda expat",
      "tilburg student city expat",
      "tilburg family life expat",
      "housing in tilburg for expats",
      "brabant city for expats netherlands",
      "international center tilburg",
      "ictilburg",
      "holland expat center south",
      "tilburg university international",
      "gemeente tilburg english",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Tilburg as an Expat",
    subtitle:
      "Discover why expats choose Tilburg for its practical Brabant lifestyle, student energy, and growing international community — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/tilburg-expat-city-hero.png",
      alt: "Tilburg urban scene at golden hour: bicycles, lively streets, creative Spoorzone-style city energy, welcoming Brabant student and young-professional atmosphere.",
      imagePrompt:
        "Editorial hero: Tilburg, Spoorzone or city centre, bicycles, students, industrial-creative Brabant city.",
    },
    ctas: [
      { label: "Explore Tilburg Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "tilburg-at-a-glance", label: "Tilburg at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Tilburg" },
    { id: "what-life-like", label: "Life in Tilburg" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Tilburg suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-tilburg", label: "First administrative steps" },
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

  quickFactsHeading: "Tilburg at a Glance",

  quickFacts: [
    {
      label: "Best for",
      value: "Students, young professionals, families, internationals open to Brabant",
    },
    { label: "Typical vibe", value: "Practical, relaxed, creative, community-oriented" },
    {
      label: "Strongest appeal",
      value: "Manageable city life with a growing international community and strong day-to-day livability",
    },
    {
      label: "Trade-off to know",
      value: "Lower global-corporate density and prestige profile than Amsterdam or Rotterdam — validate your sector",
    },
    {
      label: "Good fit if you want",
      value: "A grounded, local-feeling Dutch city rather than maximum metro intensity",
    },
    {
      label: "Regional advantage",
      value: "International Center Tilburg + Holland Expat Center South (Brabant) + municipal English guidance",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Tilburg",
    paragraphs: [
      "Tilburg offers a different proposition from Amsterdam, Rotterdam, or Utrecht: a sizeable Brabant city with visible student and young-professional energy, strong cycling culture, and a practical, less formal day-to-day rhythm than the largest western metros. Many internationals pick it when they want real urban life — events, cafés, creative pockets like the Spoorzone area — without needing constant global-city intensity.",
      "Support is layered: Gemeente Tilburg publishes English guidance for settling and for changing address, and spells out when registration is mandatory after arrival from abroad. International Center Tilburg (ICT) is a community-driven hub offering Dutch courses, events, practical help, and signposting to trusted resources. Holland Expat Center South, a non-profit governmental agency for Brabant, can help eligible knowledge workers and families with immigration-related formalities — confirm eligibility on their site. Tilburg University anchors part of the international student and academic scene; some newcomers also connect through Tilburg International Club for social life. None of this removes the need to plan housing seriously or to follow national rules for insurance and banking.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Tilburg",
    paragraphs: [
      "Life often feels approachable and grounded: you cycle across town for work or campus, meet people through university, ICT, or clubs, and enjoy a relaxed social atmosphere compared with some polished Randstad centres. The city can feel less “prestige postcard” and more lived-in — which many expats describe as accessible and real rather than intimidating.",
      "English works in many student and international contexts; Dutch still matters for deeper ties and some services. If you need the densest corporate job boards or nightly mega-city energy, you may still look west or compare with Eindhoven’s tech identity — Tilburg wins for many people on community, student-city rhythm, and manageable Brabant livability, not on every career metric.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Tilburg",
    reasons: [
      {
        title: "Practical city scale",
        explanation:
          "Big enough for services, culture, and employers; small enough that neighbourhoods and routines often feel reachable.",
        whoItSuits: "People who dislike constant mega-city friction",
      },
      {
        title: "Student and university relevance",
        explanation:
          "Tilburg University and the wider student population shape housing demand, events, and an English-friendly knowledge bubble — with practical “moving to Tilburg” notes on the university site for some programmes.",
        whoItSuits: "Students, PhDs, researchers, university-linked staff",
      },
      {
        title: "Community and integration support",
        explanation:
          "ICT focuses on courses, events, and practical orientation; gemeente pages cover integration topics via Infopunt Midden-Brabant.",
        whoItSuits: "Newcomers who want structured community entry points",
      },
      {
        title: "Brabant lifestyle",
        explanation:
          "Regional trains link to Breda, Eindhoven, and the Randstad; daily life stays Brabant-paced rather than Randstad-rushed.",
        whoItSuits: "Professionals and families open to the south",
      },
      {
        title: "Growing international scene",
        explanation:
          "More internationals mean more meetups, language classes, and peer advice — still verify official rules from gemeente and IND.",
        whoItSuits: "Social connectors and recent arrivals",
      },
      {
        title: "Alternative to Randstad default",
        explanation:
          "Some people explicitly want less western-metro pressure while staying in a real Dutch city — not a village, not a capital.",
        whoItSuits: "Remote workers, regional employers, lifestyle-led movers",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in Tilburg",
    companiesCount: getCityStats("tilburg")?.companies ?? null,
    jobsCount: getCityStats("tilburg")?.jobs ?? null,
    sourceLabel: getCityStats("tilburg")?.sourceLabel,
    sourceHref: getCityStats("tilburg")?.sourceHref,
    industries: getCityStats("tilburg")?.industries ?? [],
    majorEmployers: getCityStats("tilburg")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Tilburg Is Best For",
    profiles: [
      "International student or researcher linked to Tilburg University or regional education",
      "Young professional who values community and manageable city scale in Brabant",
      "Family wanting a grounded city with schools to research and realistic commuting",
      "Newcomer prioritising integration support, Dutch learning, and ICT-style community",
      "Expat open to Brabant instead of defaulting to Amsterdam — with honest sector expectations",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Tilburg is not Amsterdam or The Hague for international prestige, embassies, or the widest global corporate job perception. If your sector clusters in the western Randstad, you may commute, work hybrid, or reconsider — test trains before you sign a long lease.",
      "Compared with Eindhoven, Tilburg is less marketed around semiconductors and Brainport tech scale; compared with Breda, the historic-centre warmth differs in character; compared with Maastricht, you lose Limburg cross-border texture while staying in Brabant. Compared with Groningen, you get a different student-city culture and northern vs southern regional context — visit if you can.",
      "Some people describe Tilburg as feeling more affordable than certain western cities — but housing still requires planning, competition exists (especially around the academic year), and we do not quote rent averages here. Use platforms, agencies, or relocation help, and confirm BRP registration eligibility before large deposits.",
    ],
  },

  cityComparison: {
    heading: "How Tilburg Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains why Tilburg suits expats who want Brabant practicality and community, how Gemeente Tilburg’s English pages and ICT fit your first weeks, and when Holland Expat Center South applies for Brabant formalities. We link to Netherlands-wide guides and service hubs without ranking or endorsing commercial providers.",
      "Use the cities hub to compare Amsterdam, Utrecht, Eindhoven, Breda, Maastricht, and Groningen honestly — Tilburg often fits the “grounded Brabant city with student energy” niche on that map.",
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
      { label: "Moving to Breda", href: "/netherlands/breda/" },
      { label: "Moving to Maastricht", href: "/netherlands/maastricht/" },
      { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
      { label: "Moving to Groningen", href: "/netherlands/groningen/" },
      { label: "Moving to Delft", href: "/netherlands/delft/" },
      { label: "Moving to Leiden", href: "/netherlands/leiden/" },
      { label: "Moving to Amstelveen", href: "/netherlands/amstelveen/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Tilburg",
    body: [
      "Gemeente Tilburg’s English page on settling in the Netherlands is the authoritative starting point for local registration rules. The municipality states that if you move to Tilburg from abroad and will stay at least four of the next six months, you must register in person at the municipality within five working days after arrival — always re-read their current text for definitions, exceptions, and how to book an appointment.",
      "When your address changes later (even within Tilburg), use the gemeente’s English guidance on changing address so your BRP record stays accurate. International Center Tilburg can help you navigate practical questions and community resources; Holland Expat Center South supports eligible knowledge workers and families with Brabant immigration formalities — confirm what applies to you.",
      "Typical early chains after arrival: municipal registration when required, BSN, DigiD, Dutch bank account if needed, mandatory basic health insurance when national rules require it, and huisarts registration after insurance.",
    ],
    steps: [
      "Read Gemeente Tilburg (EN) settling-in pages and note registration timing for your situation.",
      "Book an in-person appointment when registration is mandatory; bring ID, housing proof, and civil documents as listed.",
      "Contact Holland Expat Center South if your employer or permit route matches their Brabant services.",
      "Explore ICT for Dutch courses, events, and community orientation alongside official steps.",
      "Complete DigiD, banking, and insurance using our national guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address acceptable to Gemeente Tilburg",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if officials request them",
      "Sworn translations or legalizations only when asked",
    ],
    officialSourceLinks: [
      { label: "Gemeente Tilburg – Settling in the Netherlands", url: "https://www.tilburg.nl/english/settling-in-the-netherlands/" },
      { label: "International Center Tilburg", url: "https://www.ictilburg.com/" },
      { label: "Holland Expat Center South", url: "https://www.hollandexpatcenter.com/" },
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
    heading: "BSN and DigiD After Settling in Tilburg",
    body: [
      "BSN follows successful municipal registration when you have a qualifying Dutch address. Follow Gemeente Tilburg’s current appointments and document list.",
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
    heading: "Health Insurance When You Live in Tilburg",
    body: [
      "Rules are national. If you must hold Dutch basic insurance, arrange it within the official window for your situation.",
      "Gemeente Tilburg publishes healthcare-in-Tilburg orientation via Infopunt Midden-Brabant — use it alongside insurer comparison and Government.nl.",
    ],
    advice: [
      "Compare premium and eigen risico once obligation is clear.",
      "Browse insurers via our services directory on your own terms.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Tilburg",
    body: [
      "Most people want a Dutch account for salary, rent, and iDEAL. Requirements usually include ID, often BSN, and proof of address.",
      "National banks and digital providers serve Tilburg; choose based on English support, fees, and whether you want a local branch.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies)", "Dutch address proof", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Tilburg for Expats",
    body: [
      "Housing still rewards early planning. International Center Tilburg and community networks can help you discover trusted references and orientation — but active search on housing platforms, through rental agencies, or via relocation services remains essential.",
      "Holland Expat Center South may be relevant for formalities tied to your job or permit; students, young professionals, and families often compete in overlapping segments around the academic calendar.",
      "Budget qualitatively for: rent and deposit, student housing fees or deposits where relevant, bank and insurance setup, documents from abroad, daily transport, and family costs. Do not assume Tilburg is always easy or uniformly cheap.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; verify listings", note: "ICT + platforms / agencies", disclaimer: "Varies" },
      { label: "Student setup", value: "Programme-specific", note: "University / DUO context", disclaimer: "Verify with institution" },
      { label: "Transport", value: "Bike + OV", note: "Regional trains to Brabant & west", disclaimer: "Depends on commute" },
      { label: "Bank & insurance", value: "National market", note: "Same NL rules", disclaimer: "Varies" },
      { label: "Documents", value: "Translation / legalisation", note: "When officials require it", disclaimer: "Origin-dependent" },
    ],
    neighborhoodsNote:
      "Walk areas at different times; weigh distance to campus or station, student nightlife pockets, and family-friendly pockets.",
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
    heading: "Getting Around Tilburg and Brabant",
    body: [
      "Cycling is central to daily life; NS trains connect Tilburg to Breda, Eindhoven, and onward to the Randstad. If you plan frequent Amsterdam or Rotterdam days, test realistic journey times before you fix housing.",
      "Car ownership is optional for many; parking rules apply in the centre.",
    ],
    goodToKnow: [
      "Compare Tilburg with Eindhoven on job sector first, then on city identity.",
      "If choosing between Tilburg and Breda, visit both — historic-centre feel and commute patterns differ.",
      "Keep OV-chipkaart or contactless OV options updated once routines settle.",
    ],
  },

  servicesIntro:
    "Below are our live Netherlands service hubs, Gemeente Tilburg and International Center Tilburg links, Holland Expat Center South (Brabant), Tilburg University practical notes, Tilburg International Club, and shared banking / housing / document resources. Listings are informational — we do not rank providers or imply endorsement.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Tilburg",

  first30Days: {
    heading: "Your First 30 Days in Tilburg",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration; read gemeente settling-in (EN) for your registration deadline.",
          "Note Holland Expat Center South if your employer sponsors Brabant formalities.",
          "Sign up for ICT updates or join-community flow; map groceries, bike shops, GP shortlist.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule in-person municipal registration; track BSN.",
          "Start DigiD when eligible; watch postal activation.",
          "Progress Dutch bank account if salary or rent requires it.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange Dutch basic health insurance if mandatory for you.",
          "Share IBAN and BSN with employer, landlord, and school as needed.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finish DigiD activation; register with a huisarts.",
          "Attend an ICT event or Dutch course intake if it fits your plan.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Tilburg Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, and employment facts for your case.",

  exampleScenarios: [
    {
      title: "International student moving to Tilburg",
      summary: "You have a place at Tilburg University or another institution and need housing and gemeente steps on a tight timeline.",
      needsFirst: ["University housing vs private market", "Registration appointment within municipal rules", "Insurance obligation check"],
      documents: ["Admission letter", "ID", "Address proof when available"],
      timing: "Parallel housing search and registration; do not delay insurance if required.",
      mistakes: ["Ignoring in-person registration timing", "Late room search before term"],
    },
    {
      title: "Young professional choosing Tilburg over Eindhoven or Breda",
      summary: "Your job is Brabant-based or remote-friendly; you prefer Tilburg’s student energy and ICT community over Eindhoven’s tech-city branding or Breda’s historic-centre feel.",
      needsFirst: ["Commute or hybrid agreement", "Evening visits to both cities", "Housing near station vs campus"],
      documents: ["Standard rental documents"],
      timing: "Anchor employment reality first, then housing.",
      mistakes: ["Choosing on stereotypes without visiting"],
    },
    {
      title: "Family wanting a manageable Brabant city",
      summary: "You want grounded city life, schools to research, and less Randstad pressure.",
      needsFirst: ["School catchment research", "Housing with registration clarity", "Healthcare infopunt read"],
      documents: ["Rental pack", "ID", "Permits as applicable"],
      timing: "Register on valid address; insure when obliged.",
      mistakes: ["Assuming housing is effortless", "Skipping gemeente healthcare pages"],
    },
    {
      title: "Newcomer combining gemeente guidance with ICT",
      summary: "You follow Tilburg.nl English pages for civil steps and use ICT for Dutch classes and community.",
      needsFirst: ["Booked registration slot", "ICT course or event calendar", "Document bundle"],
      documents: ["Passport", "Permit paperwork", "Housing proof"],
      timing: "Meet municipal deadlines before focusing only on social events.",
      mistakes: ["Treating community orgs as immigration advisors"],
    },
    {
      title: "Comparing Tilburg and Groningen for student-city feel",
      summary: "Both have strong student presence; Groningen is northern and compact; Tilburg is Brabant with different regional links.",
      needsFirst: ["Programme location", "Climate and travel preferences", "Job or PhD anchor"],
      documents: ["As per gemeente and institution"],
      timing: "Visit both if possible.",
      mistakes: ["Assuming all student cities feel the same"],
    },
    {
      title: "International seeking a grounded alternative to major western metros",
      summary: "You want Dutch city life without Amsterdam intensity; you accept a smaller global job-market profile.",
      needsFirst: ["Sector reality check", "ICT + club social plan", "Train-time test to clients"],
      documents: ["Standard arrival documents"],
      timing: "Decide lifestyle fit before a long lease.",
      mistakes: ["Expecting Randstad amenities without travel"],
    },
  ],

  commonMistakes: [
    {
      mistake: "Missing Gemeente Tilburg’s in-person registration timing after arrival from abroad",
      internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
    },
    {
      mistake: "Assuming Tilburg housing is always easy because the city feels relaxed",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      mistake: "Skipping Holland Expat Center South when your Brabant knowledge-worker route matches their offer",
      internalLink: { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    },
    {
      mistake: "Delaying Dutch health insurance when national rules require it",
      internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    },
    {
      mistake: "Forgetting to update your address with the gemeente after moving within Tilburg",
      internalLink: { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
    },
    { mistake: "Treating peer advice as a substitute for gemeente, IND, or tax guidance" },
  ],

  tools: [
    { label: "Relocation checklist", href: "/netherlands/moving-checklist-netherlands/", description: "Phased tasks for your move", status: "live" },
    { label: "Document readiness checker", href: "/netherlands/document-readiness-checker/", description: "See common document needs", status: "live" },
    { label: "Visa timeline estimator", href: "/netherlands/visa-timeline-estimator/", description: "Plan permit timing", status: "live" },
    { label: "Visa cost calculator", href: "/netherlands/visa-cost-calculator/", description: "Budget fees and moving costs", status: "live" },
  ],

  faqs: [
    {
      q: "Is Tilburg a good city for expats?",
      a: "Many expats choose Tilburg for practical Brabant livability, student energy, Tilburg University, International Center Tilburg, and a growing international community. It suits people open to a manageable city — less so if you need maximum Randstad corporate density without commuting.",
    },
    {
      q: "What is International Center Tilburg?",
      a: "A community-driven meeting place for internationals in Tilburg and Midden-Brabant offering Dutch courses, events, practical support, and signposting to trusted resources. It complements official gemeente and national channels but does not replace them.",
    },
    {
      q: "When must I register in Tilburg?",
      a: "Gemeente Tilburg states that if you move from abroad and will stay at least four of the next six months, you must register in person within five working days of arrival. Confirm the latest wording, exceptions, and booking process on their English settling-in page.",
    },
    {
      q: "What is Holland Expat Center South?",
      a: "A non-profit governmental agency helping international knowledge workers and families settle in Brabant, including immigration-related formalities where applicable. Check hollandexpatcenter.com for services and eligibility.",
    },
    {
      q: "How does Tilburg compare with Breda?",
      a: "Both are Brabant cities with approachable scale; Breda is often associated with a strong historic-centre and Breda Internationals ecosystem, while Tilburg emphasises student energy, ICT, and Spoorzone-style creative urban pockets. Compare on job location, housing search, and personal city feel.",
    },
    {
      q: "Is housing easy in Tilburg?",
      a: "No — plan seriously, especially around the academic year. Use housing platforms, agencies, or relocation support, and verify BRP registration eligibility before large deposits.",
    },
    {
      q: "Do I need Dutch health insurance in Tilburg?",
      a: "National rules apply. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Gemeente Tilburg, International Center Tilburg, Holland Expat Center South, Tilburg University, and national references. Confirm current requirements on each site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Tilburg",

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
        { label: "Breda", href: "/netherlands/breda/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
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
    { label: "Moving to Breda", href: "/netherlands/breda/" },
    { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
    { label: "Moving to Maastricht", href: "/netherlands/maastricht/" },
  ],
};
