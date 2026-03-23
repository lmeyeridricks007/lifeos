/**
 * Nijmegen city hub – /netherlands/nijmegen/
 * Historic student and knowledge city; Lifeport region with Arnhem–Nijmegen–Wageningen innovation identity.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Nijmegen",
    label: "Moving from abroad (English)",
    url: "https://www.nijmegen.nl/languages/english/moving-from-abroad/",
  },
  {
    category: "Municipality of Nijmegen",
    label: "Registration of non-residents / RNI (English)",
    url: "https://www.nijmegen.nl/languages/english/registration-non-residents/",
  },
  {
    category: "Municipality of Nijmegen",
    label: "English information portal",
    url: "https://www.nijmegen.nl/languages/english/",
  },
  {
    category: "Lifeport Welcome Center",
    label: "Lifeport Welcome Center for expats",
    url: "https://lifeport.nl/lifeport-welcome-center-for-expats/",
  },
  {
    category: "Lifeport Welcome Center",
    label: "Lifeport – new regional service point for international talent",
    url: "https://lifeport.nl/lifeport-welcome-center-nieuw-dienstverleningspunt-voor-internationaal-talent-in-de-regio/",
  },
  {
    category: "Lifeport Welcome Center",
    label: "Lifeport – Lifeport Welcome Center (English articles & updates)",
    url: "https://lifeport.nl/en/tag/lifeport-welcome-center/",
  },
  {
    category: "Radboud University (news)",
    label: "Lifeport Welcome Center opens to international knowledge workers and students",
    url: "https://www.ru.nl/en/about-us/news/lifeport-welcome-center-officially-opens-its-doors-to-international-knowledge-workers-and-students",
  },
  {
    category: "Radboud University (news)",
    label: "New service point for international talent in the region",
    url: "https://www.ru.nl/en/about-us/news/new-service-point-for-international-talent-in-the-region",
  },
  {
    category: "Regional knowledge ecosystem (reference)",
    label: "Invest in Holland – Expat Centers folder (PDF overview)",
    url: "https://investinholland.com/wp-content/uploads/2024/10/Expat-Centers-Folder-A4-October-2024.pdf",
  },
  {
    category: "National relocation context",
    label: "Netherlands Worldwide – checklist relocating to the Netherlands (immigration)",
    url: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
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

export const nijmegenCityPage: CityHubPageData = {
  slug: "nijmegen",
  country: "netherlands",
  name: "Nijmegen",
  path: "/netherlands/nijmegen/",
  publish: true,
  publishDate: "2026-04-03",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Nijmegen as an Expat | Living in Nijmegen, Housing, Lifestyle & Practical Setup",
    description:
      "Thinking about moving to Nijmegen? Explore why expats choose Nijmegen, what life is like, how registration and housing work, and which services can help you settle in.",
    keywords: [
      "moving to nijmegen as an expat",
      "nijmegen for expats",
      "living in nijmegen netherlands expat",
      "nijmegen netherlands expat guide",
      "should i live in nijmegen expat",
      "nijmegen vs arnhem expat",
      "nijmegen student city expat",
      "nijmegen knowledge region expat",
      "housing in nijmegen for expats",
      "arnhem nijmegen region expat",
      "lifeport welcome center",
      "radboud university international",
      "gemeente nijmegen english",
      "rni registration nijmegen",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Nijmegen as an Expat",
    subtitle:
      "Discover why expats choose Nijmegen for its historic character, greener setting, and strong student and knowledge-region identity — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/nijmegen-expat-city-hero.png",
      alt: "Nijmegen at golden hour: Waal river, bridge, historic centre, bicycles and lively student–knowledge city atmosphere.",
      imagePrompt:
        "Editorial hero: Nijmegen, Waal river and bridge, historic streets, green embankments, bicycles, university city, eastern Netherlands.",
    },
    ctas: [
      { label: "Explore Nijmegen Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "nijmegen-at-a-glance", label: "Nijmegen at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Nijmegen" },
    { id: "what-life-like", label: "Life in Nijmegen" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Nijmegen suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-nijmegen", label: "First administrative steps" },
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

  quickFactsHeading: "Nijmegen at a Glance",

  quickFacts: [
    {
      label: "Best for",
      value: "Students, researchers, knowledge workers, families, internationals open to the east and the Lifeport region",
    },
    { label: "Typical vibe", value: "Historic, green, intelligent, student-influenced, more grounded than the largest western metros" },
    {
      label: "Strongest appeal",
      value: "City life with strong research identity, Waal river setting, and regional innovation framing around Arnhem–Nijmegen–Wageningen",
    },
    {
      label: "Trade-off to know",
      value: "Less major-metro international corporate density than Amsterdam, Rotterdam, or The Hague — validate your sector and commute assumptions",
    },
    {
      label: "Good fit if you want",
      value: "Livability, culture, nature access, and a serious knowledge ecosystem without defaulting to Randstad intensity",
    },
    {
      label: "Regional advantage",
      value: "Lifeport Welcome Center and English municipal pages that address both full registration and RNI where applicable",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Nijmegen",
    paragraphs: [
      "Nijmegen delivers a distinct Dutch-city experience from Amsterdam, Rotterdam, or Utrecht: one of the country’s oldest cities, a visible student and university presence around Radboud University, and a greener, more grounded day-to-day rhythm alongside the Waal. Many internationals choose it when they want history, culture, and access to a regional knowledge and healthcare–science ecosystem rather than maximum global-city density — especially if their studies, research, or employer sits in the Arnhem–Nijmegen–Wageningen (Lifeport) frame.",
      "Practical support layers include Gemeente Nijmegen’s English pages on moving from abroad and on RNI registration for shorter stays or specific cross-border situations, plus the Lifeport Welcome Center, which describes combined government services (municipality and IND in the regional model) with broader welcome, family, and social activities. National rules still govern permits, health insurance, and banking; Nijmegen does not make housing effortless. English works in many international-facing contexts; Dutch still matters for deeper ties and some services.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Nijmegen",
    paragraphs: [
      "Life often balances historic centre character with river corridors, hills, and green edges that feel closer than in some larger western cores. Student energy shows in events, cafés, and housing demand patterns, but the city rarely feels like a single-purpose campus town — hospitals, SMEs, and regional employers sit in the same practical orbit.",
      "Many residents describe Nijmegen as lively without the constant pressure of the biggest metros: you can cycle to work or campus, join cultural programming, and still reach forests and river landscapes for regular resets. If your career or identity depends on embassies, the densest corporate HQs, or nightly global-city scale, you may still look west or hybrid-work — honesty about sector and travel expectations matters more than slogans.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Nijmegen",
    reasons: [
      {
        title: "Strong student and research environment",
        explanation:
          "Radboud University and linked research and healthcare institutions anchor a large international student and academic population — with clear implications for housing timing and community entry points.",
        whoItSuits: "Students, PhDs, researchers, and university-linked professionals",
      },
      {
        title: "Greener, livable city feel",
        explanation:
          "River embankments, varied topography for the Netherlands, and a compact core make outdoor life part of the weekly routine for many households.",
        whoItSuits: "Families and professionals who want nature access without leaving urban services",
      },
      {
        title: "Historic identity",
        explanation:
          "Roman roots and a dense heritage centre give Nijmegen a grounded sense of place compared with purely modern or purely business-branded cities.",
        whoItSuits: "Culture-oriented internationals and long-term settlers",
      },
      {
        title: "Regional innovation ecosystem",
        explanation:
          "Lifeport positions Arnhem, Nijmegen, and Wageningen as a knowledge and innovation region — relevant when your employer or grant sits in that narrative.",
        whoItSuits: "Knowledge workers in health, food, energy, and related clusters tied to the east",
      },
      {
        title: "Less overwhelming daily rhythm",
        explanation:
          "Compared with the largest Randstad metros, many people experience Nijmegen as approachable while still offering real urban services.",
        whoItSuits: "Newcomers prioritising balance over constant mega-city stimulation",
      },
      {
        title: "Structured newcomer support",
        explanation:
          "Lifeport Welcome Center describes government and welcome services for international talent; gemeente English pages spell out moving and RNI routes — always confirm what you personally qualify for.",
        whoItSuits: "Knowledge workers, students, and families who want a regional desk-style entry point",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in Nijmegen",
    companiesCount: getCityStats("nijmegen")?.companies ?? null,
    jobsCount: getCityStats("nijmegen")?.jobs ?? null,
    sourceLabel: getCityStats("nijmegen")?.sourceLabel,
    sourceHref: getCityStats("nijmegen")?.sourceHref,
    industries: getCityStats("nijmegen")?.industries ?? [],
    majorEmployers: getCityStats("nijmegen")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Nijmegen Is Best For",
    profiles: [
      "International student or doctoral researcher linked to Radboud University or regional partners",
      "Researcher or academic in health, science, or knowledge-sector roles connected to the east",
      "Knowledge worker whose employer or project sits in the Arnhem–Nijmegen–Wageningen / Lifeport region",
      "Family wanting a greener, historic city base while accepting eastern-Netherlands job-market realism",
      "Expat seeking a grounded alternative to Amsterdam, Rotterdam, or Utrecht with strong student-city energy",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Nijmegen is not Amsterdam or The Hague for international corporate headquarters, embassy density, or the widest global job-market brand. If your sector clusters in the western Randstad, test commute or hybrid feasibility before you commit to a long lease.",
      "Compared with Utrecht, Nijmegen is less centrally positioned as a national rail hub for omnidirectional Randstad commuting — Utrecht often wins pure “connectivity” comparisons even when Nijmegen wins on green-city and research identity. Compared with Rotterdam, you trade port-scale modern metro identity for historic hills and student culture. Compared with Eindhoven, you lose Brainport’s concentrated tech marketing while gaining a different knowledge-region story. Compared with Arnhem, you are in the same broad eastern corridor but with Nijmegen’s stronger university-student and Radboud-centred identity; many people visit both before choosing. Compared with Groningen, you share student-city energy but sit in Gelderland rather than the northern knowledge pole. Compared with Tilburg or Breda, you trade Brabant sociability for Lifeport / Waal-region character.",
      "Housing still requires serious planning — especially around term start — and you must align your search with whether you need full BRP registration or an RNI path. Use platforms, agencies, or relocation support, and verify registration eligibility before large deposits.",
    ],
  },

  cityComparison: {
    heading: "How Nijmegen Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains why Nijmegen suits expats who want a historic, green, student- and research-led city in the eastern Netherlands, how Gemeente Nijmegen’s English moving and RNI pages fit your first weeks, and how Lifeport Welcome Center fits the regional knowledge-worker and student picture. We link to Netherlands-wide service hubs without ranking or endorsing commercial providers.",
      "Use the cities hub to compare Amsterdam, Utrecht, Rotterdam, Eindhoven, Arnhem, Groningen, Tilburg, Breda, and more — Nijmegen often fits the “knowledge-region student city with Waal green-city feel” niche, especially alongside our Arnhem guide for the wider Gelderland lens.",
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
      { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
      { label: "Moving to Groningen", href: "/netherlands/groningen/" },
      { label: "Moving to Delft", href: "/netherlands/delft/" },
      { label: "Moving to Leiden", href: "/netherlands/leiden/" },
      { label: "Moving to Amstelveen", href: "/netherlands/amstelveen/" },
      { label: "Moving to Maastricht", href: "/netherlands/maastricht/" },
      { label: "Moving to Breda", href: "/netherlands/breda/" },
      { label: "Moving to Tilburg", href: "/netherlands/tilburg/" },
      { label: "Moving to Arnhem", href: "/netherlands/arnhem/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Nijmegen",
    body: [
      "Gemeente Nijmegen publishes English guidance for people moving from abroad. You must register in person within five working days of arrival, by appointment — confirm the latest booking process, document list, and any IND-related sequencing on the live municipal page.",
      "Not everyone follows the same registration path: if you stay fewer than four months or live abroad while studying or working in the Netherlands, you may need RNI (registration of non-residents) instead of full municipal registration. The gemeente’s English RNI page explains this route; choosing the wrong path can delay BSN-related steps you need for banking or payroll.",
      "Lifeport Welcome Center serves international knowledge workers, students, employers, and family members and describes a model that combines government services — municipality and IND in the regional setup — with welcome activities, family support, and social programming. It complements but does not replace reading official IND and gemeente instructions for your nationality and permit type.",
      "Typical priorities after arrival: correct registration or RNI appointment, BSN where applicable, DigiD after BSN and address rules are met, Dutch bank account if needed, mandatory basic health insurance when national rules require it, and huisarts registration after insurance.",
    ],
    steps: [
      "Read Gemeente Nijmegen “Moving from abroad” and decide whether you need full registration or the RNI route.",
      "Book the correct in-person appointment; bring ID, housing proof, and civil documents as listed.",
      "Review Lifeport Welcome Center pages for regional services, events, and government-desk context that may apply to you.",
      "Complete IND steps when your permit route requires them before or alongside municipal formalities.",
      "Continue with DigiD, banking, and insurance using our national guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address or situation as described on the gemeente page for your route",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if officials request them",
      "Legalised and/or translated foreign documents when required",
    ],
    officialSourceLinks: [
      { label: "Gemeente Nijmegen – Moving from abroad (English)", url: "https://www.nijmegen.nl/languages/english/moving-from-abroad/" },
      { label: "Gemeente Nijmegen – Registration of non-residents / RNI (English)", url: "https://www.nijmegen.nl/languages/english/registration-non-residents/" },
      { label: "Lifeport Welcome Center for expats", url: "https://lifeport.nl/lifeport-welcome-center-for-expats/" },
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
    heading: "BSN and DigiD After Settling in Nijmegen",
    body: [
      "For full residents, BSN follows successful municipal registration when you have a qualifying Dutch address. RNI situations follow different rules — use Gemeente Nijmegen’s RNI English page for how BSN fits your case.",
      "DigiD is national: most people apply after BSN and a registered address, then activate with postal verification.",
    ],
    digidRequirements: ["BSN (when you are on a BRP route)", "Registered Dutch address when applicable", "Mobile phone for application"],
    examples: ["Municipality portals", "Health insurer portals", "Belastingdienst", "Employer onboarding"],
    plannedPageLinks: [
      { label: "BSN registration (Netherlands guide)", href: "/netherlands/bsn-registration/" },
      { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance When You Live in Nijmegen",
    body: [
      "Rules are national. If you must hold Dutch basic insurance, arrange it within the official window for your situation.",
      "Nijmegen’s large healthcare and research sector does not change insurance law — use Government.nl and our guide.",
    ],
    advice: [
      "Compare premium and eigen risico once obligation is clear.",
      "Browse insurers via our services directory on your own terms.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Nijmegen",
    body: [
      "Most people want a Dutch account for salary, rent, and iDEAL. Requirements usually include ID and often BSN — timing depends on whether you are on a BRP or RNI path.",
      "National banks and digital providers serve Nijmegen; choose based on English support, fees, and branch preference.",
    ],
    typicalNeeds: ["Valid ID", "BSN when applicable to your registration route", "Dutch address proof when required", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Nijmegen for Expats",
    body: [
      "Housing demand includes students, hospital and university staff, and regional professionals — plan early and verify whether your lease supports the registration route you need (BRP vs RNI context).",
      "Students, researchers, and salaried professionals often use different channels; national housing platforms, rental agencies, and relocation services remain central.",
      "Budget qualitatively for: rent and deposit, academic-term timing, bank and insurance setup, documents from abroad, transport, and family costs. Do not assume Nijmegen is uniformly cheap or easy.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; verify listings", note: "Platforms / agencies / relocation", disclaimer: "Varies" },
      { label: "Student / term timing", value: "Peak around academic year", note: "Start search early", disclaimer: "Segment-dependent" },
      { label: "Transport", value: "Bike + OV", note: "NS for intercity", disclaimer: "Depends on commute" },
      { label: "Bank & insurance", value: "National market", note: "Same NL rules", disclaimer: "Varies" },
      { label: "Documents", value: "Translation / legalisation", note: "When officials require it", disclaimer: "Origin-dependent" },
    ],
    neighborhoodsNote:
      "Walk areas at different times; weigh distance to campus, hospital zones, station, and Waal river access.",
    warning:
      "Do not pay large deposits until landlord identity, contract terms, and registration eligibility for your situation are clear.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Nijmegen and the Region",
    body: [
      "Cycling is default for many daily trips; the Waal and bridges shape how neighbourhoods connect. NS links Nijmegen to Arnhem, Utrecht, and onward — if you need frequent western Randstad days, test realistic patterns before fixing housing; we do not quote door-to-door times here.",
      "Cross-border commuting into Germany is part of some people’s regional reality — validate permit, tax, and insurance implications with official sources.",
    ],
    goodToKnow: [
      "Compare Nijmegen with Arnhem on commute and lifestyle — same corridor, different city centres.",
      "Compare with Groningen if you want another strong student city in a different region.",
      "Compare with Eindhoven if semiconductors and Brainport branding drive your career story.",
    ],
  },

  servicesIntro:
    "Below are our live Netherlands service hubs, Gemeente Nijmegen’s English moving and RNI pages, Lifeport Welcome Center and related regional articles, Radboud University news items for context, and shared banking / housing / document resources. Listings are informational — we do not rank providers or imply endorsement.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Nijmegen",

  first30Days: {
    heading: "Your First 30 Days in Nijmegen",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm whether you need BRP registration or RNI; read Gemeente Nijmegen English pages and book the correct appointment.",
          "Explore Lifeport Welcome Center information for events, desk services, and regional orientation.",
          "Shortlist banks, insurers, and a huisarts; map groceries and bike shops.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule in-person registration; track BSN steps that apply to your route.",
          "Start DigiD when eligible on a BRP path; watch postal activation.",
          "Progress Dutch bank account if salary or rent requires it.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange Dutch basic health insurance if mandatory for you.",
          "Share IBAN and identifiers with employer, landlord, and university as needed.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finish DigiD activation when on a standard BRP path; register with a huisarts after insurance.",
          "Attend a Lifeport or university orientation event if it fits your plan.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Nijmegen Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, and employment facts for your case.",

  exampleScenarios: [
    {
      title: "International student moving to Nijmegen",
      summary: "You have a place at Radboud or another institution and need housing and the right registration route on a tight timeline.",
      needsFirst: ["University housing vs private market", "BRP vs RNI clarity", "Lifeport or faculty orientation"],
      documents: ["Admission letter", "ID", "Address proof when available"],
      timing: "Parallel housing search and gemeente appointment; do not delay insurance if required.",
      mistakes: ["Confusing RNI with full registration", "Late room search before term"],
    },
    {
      title: "Researcher relocating into the region",
      summary: "Your contract ties to Radboud, a hospital, or a regional knowledge project.",
      needsFirst: ["Employer IND and contract clarity", "Housing with registration fit", "Lifeport Welcome Center desk eligibility"],
      documents: ["Employment pack", "ID", "Permits", "Housing proof"],
      timing: "Align gemeente booking with arrival date; insure when obliged.",
      mistakes: ["Skipping Lifeport when it could streamline regional formalities"],
    },
    {
      title: "Expat choosing Nijmegen over Arnhem",
      summary: "Both are eastern Gelderland options; you weigh student–university depth vs Arnhem’s administrative-capital feel.",
      needsFirst: ["Job or campus location", "Housing search in both cities", "Weekend visits if possible"],
      documents: ["Standard arrival documents"],
      timing: "Decide on evidence, not slogans.",
      mistakes: ["Treating Arnhem and Nijmegen as interchangeable without visiting"],
    },
    {
      title: "Newcomer needing BRP or RNI plus BSN",
      summary: "Your stay length or cross-border living situation determines the route.",
      needsFirst: ["Gemeente Nijmegen English decision tree", "Document bundle", "Employer payroll expectations"],
      documents: ["Passport", "Permits", "Rental or situation proof per gemeente"],
      timing: "Book the correct appointment first; avoid paying large deposits on wrong assumptions.",
      mistakes: ["Starting banking conversations before clarifying BSN route"],
    },
    {
      title: "Family looking for a greener eastern-Netherlands city",
      summary: "You want history, culture, and space while accepting eastern job-market realism.",
      needsFirst: ["School research via official sources", "Housing with registration clarity", "Commute test if one parent works west"],
      documents: ["Rental pack", "ID", "Civil documents if requested"],
      timing: "Register or complete RNI per rules; insure when required.",
      mistakes: ["Assuming student-city housing pressure skips family segments"],
    },
    {
      title: "Knowledge worker comparing Nijmegen and Eindhoven",
      summary: "You choose between Lifeport / Radboud-region identity and Brainport tech branding.",
      needsFirst: ["Sector and employer location", "Train patterns you can live with", "Housing comparison"],
      documents: ["Standard documents"],
      timing: "Anchor the job, then housing.",
      mistakes: ["Choosing on marketing without testing commute and housing"],
    },
  ],

  commonMistakes: [
    {
      mistake: "Missing Gemeente Nijmegen’s five-working-day in-person registration rule after moving from abroad",
      internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
    },
    {
      mistake: "Using the wrong route between full municipal registration and RNI for your stay pattern",
      internalLink: { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
    },
    {
      mistake: "Assuming Nijmegen student housing is always available because the city feels approachable",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      mistake: "Delaying Dutch health insurance when national rules require it",
      internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    },
    {
      mistake: "Treating Lifeport Welcome Center as your immigration lawyer — it complements official channels",
      internalLink: { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
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
      q: "Is Nijmegen a good city for expats?",
      a: "Nijmegen suits expats who want a historic, green student and knowledge city with Radboud University, healthcare and research adjacency, and regional support through Lifeport Welcome Center. It fits fewer people if they need maximum western corporate density or daily Randstad hub commuting without travel tolerance.",
    },
    {
      q: "What is the Lifeport Welcome Center?",
      a: "A regional welcome centre for international knowledge workers, students, employers, and family members. Lifeport describes combined government services (municipality and IND in the regional model) plus welcome, family, and social activities. Confirm on their site what you can arrange there and which documents to bring.",
    },
    {
      q: "When must I register in Nijmegen?",
      a: "Gemeente Nijmegen states that people moving from abroad must register in person within five working days, by appointment. Read their English “Moving from abroad” page for the exact process. If you stay fewer than four months or live abroad while studying or working in the Netherlands, you may need the RNI route instead — see their registration-of-non-residents page.",
    },
    {
      q: "How does Nijmegen compare with Arnhem?",
      a: "Both sit in the eastern Netherlands and are linked in the Lifeport region. Nijmegen is strongly shaped by Radboud University and student life; Arnhem offers a different administrative and green-city feel. Many people compare housing, commute, and personal vibe in both — see our Arnhem guide alongside this page.",
    },
    {
      q: "Is Nijmegen a student city?",
      a: "Yes — Radboud University and related institutions mean a large student population, visible in culture and housing demand. That can be a strength for peer networks and a challenge for housing timing around term start.",
    },
    {
      q: "Is housing easy in Nijmegen?",
      a: "No — treat it as a competitive segment, especially before the academic year. Use platforms, agencies, or relocation support, and align your lease with your registration route.",
    },
    {
      q: "Do I need Dutch health insurance in Nijmegen?",
      a: "National rules apply. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Gemeente Nijmegen (English), Lifeport Welcome Center, Radboud University news, a regional Invest in Holland reference on expat centres, and selected national pages. Confirm current requirements on each site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Nijmegen",

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
        { label: "Arnhem", href: "/netherlands/arnhem/" },
        { label: "Groningen", href: "/netherlands/groningen/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
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
    { label: "Moving to Arnhem", href: "/netherlands/arnhem/" },
    { label: "Moving to Groningen", href: "/netherlands/groningen/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
  ],
};
