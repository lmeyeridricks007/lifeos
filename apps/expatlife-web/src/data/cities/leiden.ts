/**
 * Leiden city hub – /netherlands/leiden/
 * University / knowledge city, life sciences & health, Leiden International Centre newcomer ecosystem.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Leiden International Centre",
    label: "Leiden International Centre",
    url: "https://www.leideninternationalcentre.nl/",
  },
  {
    category: "Leiden International Centre",
    label: "About us",
    url: "https://www.leideninternationalcentre.nl/about-us/",
  },
  {
    category: "Leiden International Centre",
    label: "Plan your move",
    url: "https://www.leideninternationalcentre.nl/before-moving/plan-your-move",
  },
  {
    category: "Leiden International Centre",
    label: "Work in Leiden",
    url: "https://www.leideninternationalcentre.nl/work-study/work-in-leiden",
  },
  {
    category: "Leiden International Centre",
    label: "Housing (just arrived)",
    url: "https://www.leideninternationalcentre.nl/just-arrived/housing",
  },
  {
    category: "Leiden International Centre",
    label: "Events – living here",
    url: "https://www.leideninternationalcentre.nl/living-here/events",
  },
  {
    category: "Leiden International Centre",
    label: "Newsletter",
    url: "https://www.leideninternationalcentre.nl/newsletter",
  },
  {
    category: "Leiden International Centre",
    label: "The partnership programme",
    url: "https://www.leideninternationalcentre.nl/the-partnership-programme",
  },
  {
    category: "Leiden International Centre",
    label: "Service providers",
    url: "https://www.leideninternationalcentre.nl/service-providers/",
  },
  {
    category: "National relocation references",
    label: "Netherlands Worldwide – Checklist relocating to the Netherlands",
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

export const leidenCityPage: CityHubPageData = {
  slug: "leiden",
  country: "netherlands",
  name: "Leiden",
  path: "/netherlands/leiden/",
  publish: true,
  publishDate: "2026-03-27",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Leiden as an Expat | Living in Leiden, Housing, Jobs & Practical Setup",
    description:
      "Thinking about moving to Leiden? Explore why expats choose Leiden, what life is like, how housing and registration work, and which services can help you settle in.",
    keywords: [
      "moving to leiden as an expat",
      "leiden for expats",
      "living in leiden netherlands expat",
      "leiden netherlands expat guide",
      "should i live in leiden expat",
      "leiden vs the hague expat",
      "leiden university city expat",
      "leiden bio science park expat",
      "best areas in leiden for expats",
      "housing in leiden for expats",
      "leiden international centre",
      "leiden university international",
      "lumc international staff",
      "gemeente leiden registration",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Leiden as an Expat",
    subtitle:
      "Discover why expats choose Leiden for its university-city atmosphere, knowledge-economy profile, and elegant historic lifestyle — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/leiden-expat-city-hero.png",
      alt: "Leiden canal with historic gabled houses and bicycles at golden hour; open book and travel documents on a café table suggesting expat relocation planning.",
      imagePrompt:
        "Editorial hero: Leiden canals, university-city atmosphere, bicycles, warm light, documents on café table — refined Dutch historic city.",
    },
    ctas: [
      { label: "Explore Leiden Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "leiden-at-a-glance", label: "Leiden at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Leiden" },
    { id: "what-life-like", label: "Life in Leiden" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Leiden suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-leiden", label: "First administrative steps" },
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

  quickFactsHeading: "Leiden at a Glance",

  quickFacts: [
    {
      label: "Best for",
      value: "Researchers, academics, students, biotech / life-sciences professionals, knowledge workers",
    },
    { label: "Typical vibe", value: "Historic, intelligent, cultured, manageable" },
    {
      label: "Strongest appeal",
      value: "Elegant small-city life with real international and knowledge-economy depth",
    },
    {
      label: "Trade-off to know",
      value: "Smaller scale and a narrower city profile than Amsterdam or Rotterdam",
    },
    {
      label: "Good fit if you want",
      value: "Beauty, structure, and a strong university / innovation context without mega-city intensity",
    },
    {
      label: "Regional advantage",
      value: "Leiden International Centre newcomer support and a strong regional partner ecosystem",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Leiden",
    paragraphs: [
      "Leiden pairs a compact historic centre with one of Europe’s oldest universities and a regional economy strongly associated with life sciences, health, and research. Many internationals arrive for Leiden University, LUMC, or employers around Leiden Bio Science Park — and stay for walkable streets, museums, and a city that feels cultured without the sprawl of the largest Dutch metros.",
      "It suits people who want international depth in a smaller place: English is common in education and many knowledge-sector workplaces, while Dutch still anchors wider community life. Randstad connectivity (including The Hague and Schiphol) matters for partners and hybrid work — but the daily rhythm is unmistakably that of a university-led knowledge city.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Leiden",
    paragraphs: [
      "Daily life is built around the old city: canals, courtyards, markets, and short bike hops between neighbourhoods. You will notice the university in libraries, cafés, events, and the steady presence of researchers and students — lively, but rarely overwhelming compared with Amsterdam or Rotterdam nightlife scale.",
      "Culture is a genuine draw — museums, music, and heritage are part of the city’s identity. If you need maximum retail variety or big-city energy every night, you may still travel to larger cities sometimes; many residents treat that as a fair trade for everyday elegance and shorter distances.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Leiden",
    reasons: [
      {
        title: "University-city atmosphere",
        explanation:
          "Leiden University shapes the city’s international fabric — from degree seekers to postdocs and academic staff — with visible research and student life in the centre.",
        whoItSuits: "Students, PhDs, researchers, academic staff",
      },
      {
        title: "Life sciences and knowledge economy",
        explanation:
          "The region promotes a knowledge-city profile with strong life sciences & health relevance; Leiden Bio Science Park, the university, and LUMC are anchor names employers and newcomers reference.",
        whoItSuits: "Biotech, pharma, med-tech, and research professionals",
      },
      {
        title: "Elegant historic environment",
        explanation:
          "Canals, monuments, and human-scale streets make routine errands pleasant — a different texture from Rotterdam’s modern skyline or The Hague’s institutional boulevards.",
        whoItSuits: "People who value heritage and walkability",
      },
      {
        title: "Manageable city scale",
        explanation:
          "You can cross the core quickly by bike and build habits without feeling lost in a mega-city. That appeals to families and singles who want substance without constant stimulation.",
        whoItSuits: "Expats prioritising calm, structure, and short distances",
      },
      {
        title: "International newcomer infrastructure",
        explanation:
          "Leiden International Centre is a non-profit supporting internationals and employers in the Leiden region — including practical newcomer information, a helpdesk, and BSN registration appointments alongside a partner and service-provider ecosystem.",
        whoItSuits: "Newcomers who want regional guidance and employer-linked support",
      },
      {
        title: "Regional jobs context",
        explanation:
          "Leiden International Centre describes the wider Leiden region in terms of a substantial jobs base (on the order of tens of thousands of roles) tied to the knowledge economy — always verify your own sector and employer location.",
        whoItSuits: "Job seekers comparing Randstad bases",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in the Leiden region",
    companiesCount: getCityStats("leiden")?.companies ?? null,
    jobsCount: getCityStats("leiden")?.jobs ?? null,
    sourceLabel: getCityStats("leiden")?.sourceLabel,
    sourceHref: getCityStats("leiden")?.sourceHref,
    industries: getCityStats("leiden")?.industries ?? [],
    majorEmployers: getCityStats("leiden")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Leiden Is Best For",
    profiles: [
      "International student or exchange student at Leiden University or regional institutions",
      "PhD candidate, postdoc, or researcher in life sciences, medicine, or academic fields",
      "Biotech / life-sciences professional targeting Leiden Bio Science Park or related employers",
      "Expat who wants a cultured, smaller Dutch city with serious knowledge-sector depth",
      "Newcomer who values Leiden International Centre support for first administrative steps where eligible",
      "Professional comparing Leiden with Delft, Utrecht, or The Hague for commute and lifestyle fit",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Leiden is not Amsterdam or Rotterdam: nightlife depth, retail variety, and spontaneous big-city energy are more limited. Some people prefer Utrecht’s national rail-hub centrality, The Hague’s institutional and coastal mix, or Eindhoven’s Brainport tech texture — visit before you commit.",
      "Housing still rewards early planning. Students, researchers, and professionals may compete for overlapping segments; use platforms and agencies seriously, and confirm that any address supports municipal registration before large deposits.",
      "A university-city environment is not for everyone — term-time rhythm and student-heavy streets may feel intense in pockets. If you dislike academic-town cues, test neighbourhoods at different times of day.",
      "Do not assume Leiden is automatically cheap or easy. Randstad proximity and university demand can still make the market competitive; budget with a buffer and read contracts carefully.",
    ],
  },

  cityComparison: {
    heading: "How Leiden Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains why expats pick Leiden, what daily life feels like, and how to sequence registration, BSN, DigiD, banking, and Dutch health insurance. Leiden International Centre supports internationals and employers in the region — including BSN registration appointments and practical newcomer content on housing, work, healthcare, and daily life — alongside a public service-provider directory you can use to shortlist help.",
      "National rules apply to insurance and banking; our Netherlands-wide guides cover documents and obligations in depth. We also link to our live service hubs (housing, relocation, banks, visas) and show example providers you may encounter through regional ecosystems — without rankings or endorsements.",
    ],
    links: [
      { label: "Compare Dutch cities hub", href: "/netherlands/cities/" },
      { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services", href: "/netherlands/services/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Leiden",
    body: [
      "If you move to the Netherlands from abroad and will stay at least four months, you typically register your address in the Personal Records Database (BRP) at your municipality and receive a BSN when applicable. National rules set the frame; your gemeente confirms local appointments and documents.",
      "Leiden International Centre is a non-profit regional hub for internationals and employers. It provides BSN registration appointments, a helpdesk, and practical newcomer information for the Leiden region — check their current pages for eligibility, booking, and what to bring. It complements (rather than replaces) municipal requirements.",
      "After registration, BSN-dependent steps usually include DigiD, a Dutch bank account, and mandatory basic health insurance when it applies to you — sequence these early if salary or rent depends on them.",
    ],
    steps: [
      "Read Leiden International Centre’s “Plan your move” and housing guidance; map your employer or study route.",
      "Book municipal registration (and any LIC BSN appointment route you qualify for) with ID and address proof ready.",
      "Apply for DigiD after BSN and registered address; watch postal activation.",
      "Open a Dutch bank account and arrange health insurance when your situation requires it.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address acceptable to your municipality",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if officials request them",
      "Sworn translations or legalizations only when asked",
    ],
    officialSourceLinks: [
      { label: "Leiden International Centre", url: "https://www.leideninternationalcentre.nl/" },
      { label: "Plan your move (LIC)", url: "https://www.leideninternationalcentre.nl/before-moving/plan-your-move" },
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
    heading: "BSN and DigiD After Settling in Leiden",
    body: [
      "Your BSN is issued when you successfully register a qualifying address — timelines depend on appointments and your document bundle. Leiden International Centre offers BSN registration appointments for eligible newcomers in the region; confirm the current process on their site alongside gemeente rules.",
      "DigiD unlocks taxes, insurers, and many online services. Apply after BSN and a registered address, then activate with the letter by post.",
    ],
    digidRequirements: ["BSN", "Registered Dutch address", "Mobile phone for application"],
    examples: ["Municipality portals", "Health insurer portals", "Belastingdienst", "Employer onboarding"],
    plannedPageLinks: [
      { label: "BSN registration (Netherlands guide)", href: "/netherlands/bsn-registration/" },
      { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance When You Live in Leiden",
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
    heading: "Banking for Expats in Leiden",
    body: [
      "Most people want a Dutch account for salary, rent, and iDEAL. Requirements usually include ID, often BSN, and proof of address — timing varies by bank.",
      "Leiden sits in a well-banked Randstad corridor; choose based on English support, fees, and digital vs branch preference.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies)", "Dutch address proof", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Leiden for Expats",
    body: [
      "Housing still demands speed and clear paperwork. Students, researchers, and professionals may use different channels — platforms for search, rental agencies for assisted viewings, and relocation services when you want bundled help. Leiden International Centre publishes housing guidance for internationals and points to partner and service-provider options; compare scope and fees yourself.",
      "Always verify that your address supports municipal registration before paying large deposits. Scams target tight markets — validate landlord identity and contract terms.",
      "What to budget for: rent and deposit, bike or public transport, bank and insurance setup, document preparation if officials require translations, and family-specific costs. Exact figures vary; build a buffer rather than assuming the market will be easy.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; student peaks", note: "Rooms vs family homes differ sharply", disclaimer: "Varies by segment" },
      { label: "Student / academic setup", value: "Deposits, furnishings", note: "Institutional vs private routes", disclaimer: "Case-by-case" },
      { label: "Transport", value: "Bike + NS", note: "Randstad and Schiphol access", disclaimer: "Depends on workplace" },
      { label: "Bank & insurance", value: "National market", note: "Account fees; mandatory basic insurance if applicable", disclaimer: "Varies" },
      { label: "Documents", value: "Translation / legalisation", note: "When gemeente or IND requires it", disclaimer: "Origin-dependent" },
    ],
    neighborhoodsNote:
      "Walk candidate areas at different times; check bike parking, distance to faculty or station, and noise near student corridors.",
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
    heading: "Getting Around Leiden and the Region",
    body: [
      "Cycling is default for daily life; the old city is compact and flat. Leiden Centraal connects you into the national network — useful for work in The Hague, Amsterdam, Schiphol, or elsewhere in the Randstad.",
      "Treat car ownership as optional for many residents; inner-city parking is constrained compared with bike-and-train combinations.",
    ],
    goodToKnow: [
      "Test door-to-door travel for your working hours before you fix a lease far from your usual station.",
      "OV-chipkaart or contactless OV-pay products suit regional rail; revisit after your first month of patterns.",
      "If you compare Leiden with The Hague or Utrecht, weigh both commute and evening-weekend lifestyle — not only weekday maps.",
    ],
  },

  servicesIntro:
    "Below are links to our live service hub pages, Leiden International Centre channels, and example providers you may discover through LIC’s public partnership and service-provider ecosystem. We do not rank or endorse providers — compare contracts, scope, and pricing yourself.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Leiden",

  first30Days: {
    heading: "Your First 30 Days in Leiden",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration; read LIC and gemeente guidance for your route.",
          "Book LIC or municipal appointments for registration / BSN where applicable.",
          "Set up bike, groceries, and a mental map of faculty, lab, or office access.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule registration; track BSN issuance.",
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
          "Register with a huisarts once insured; explore LIC events and community routes if useful.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Leiden Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, and employment or study facts for your case.",

  exampleScenarios: [
    {
      title: "Researcher joining Leiden University or LUMC",
      summary: "You need housing near campus or the bio-science corridor and a clear registration path — often with employer or host communication.",
      needsFirst: ["Host / HR orientation", "Housing alerts", "LIC or gemeente appointment planning"],
      documents: ["Contract or hosting docs", "ID", "Address proof", "Permits if required"],
      timing: "Parallel-path housing and registration for payroll and insurance.",
      mistakes: ["Delaying BSN-dependent banking", "Assuming LIC replaces all municipal steps"],
    },
    {
      title: "International student choosing Leiden",
      summary: "You balance institution housing or private rent with study permits and insurance rules.",
      needsFirst: ["University housing or search strategy", "LIC newcomer pages", "Insurance status check"],
      documents: ["Passport", "Admission", "Housing proof", "Visa or residence card if non-EU"],
      timing: "Book registration soon after move-in; align insurance with programme start.",
      mistakes: ["Last-minute housing only", "Paying deposits before registration eligibility is clear"],
    },
    {
      title: "Life-sciences professional comparing Leiden and Delft or Utrecht",
      summary: "You weigh sector proximity, partner commutes, and city vibe — engineering-town vs university-life-sciences vs rail-hub centrality.",
      needsFirst: ["Employer location reality", "Evening visits", "Listing alerts in both cities"],
      documents: ["Standard rental application pack"],
      timing: "Register on a valid address; insure when obliged.",
      mistakes: ["Choosing on brand alone without commute tests", "Ignoring housing pressure in term time"],
    },
    {
      title: "Expat wanting a historic, manageable city with practical support",
      summary: "You prioritise culture and walkability and can use LIC for orientation and eligible appointments.",
      needsFirst: ["Lifestyle audit vs larger cities", "Budget for occasional trips", "Neighbourhood noise checks"],
      documents: ["Rental paperwork as applicable"],
      timing: "Register everyone in the household who needs BRP.",
      mistakes: ["Expecting Amsterdam-level variety locally", "Skipping LIC when your route could use it"],
    },
    {
      title: "Newcomer needing BSN registration and first-weeks setup",
      summary: "You follow LIC booking rules where eligible and gemeente requirements for your address.",
      needsFirst: ["Registrable lease", "Appointment slots", "Document bundle"],
      documents: ["Passport", "Permit if needed", "Civil documents if requested"],
      timing: "Sequence BSN before blocking payroll or accounts.",
      mistakes: ["Informal sublets without registration clarity", "Skipping DigiD until something breaks"],
    },
    {
      title: "International balancing culture, livability, and regional job access",
      summary: "You work in the wider Randstad but want Leiden as home base for quality of life.",
      needsFirst: ["Commute test at rush hour", "Season ticket or OV strategy", "Schools if family"],
      documents: ["Work contract", "ID", "Rental documents"],
      timing: "Align housing with realistic travel time — not only distance.",
      mistakes: ["Underestimating Randstad peak crowding", "Ignoring partner anchor locations"],
    },
  ],

  commonMistakes: [
    {
      mistake: "Assuming student or researcher housing will appear without an early search",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    { mistake: "Ignoring Leiden International Centre when your employer or study route points you there" },
    {
      mistake: "Delaying Dutch health insurance when you are in the mandatory bucket",
      internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    },
    { mistake: "Signing housing without confirming BRP / registration eligibility" },
    {
      mistake: "Expecting the same nightlife or retail depth as Amsterdam or Rotterdam",
      internalLink: { label: "Compare cities", href: "/netherlands/cities/" },
    },
    {
      mistake: "Skipping permit or document checks for your specific nationality route",
      internalLink: { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
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
      q: "Is Leiden a good city for expats?",
      a: "Many expats choose Leiden for Leiden University, LUMC, life sciences, and a compact historic environment. It suits people who want international depth in a smaller city — less so if you want maximum metro scale or nightlife variety on your doorstep.",
    },
    {
      q: "What does Leiden International Centre do?",
      a: "It is a non-profit supporting international newcomers and employers in the Leiden region with practical information, a helpdesk, BSN registration appointments, and links to a partner and service-provider ecosystem. Eligibility and services can vary — confirm on their live pages.",
    },
    {
      q: "How does housing work for internationals?",
      a: "Treat it like other competitive university cities: start early, use platforms and agencies where helpful, read Leiden International Centre’s housing guidance, and verify registration eligibility before large payments. Our services hub lists housing platforms and relocation providers.",
    },
    {
      q: "How does Leiden compare with The Hague or Amsterdam?",
      a: "Leiden is smaller and strongly university- and research-oriented; The Hague emphasises institutions, coast, and government-related careers; Amsterdam offers the broadest international job and nightlife scale. Many people choose based on employer location and lifestyle tests — use our city guides to compare.",
    },
    {
      q: "Is Leiden cheaper than Amsterdam?",
      a: "Do not assume it is always cheap or easy. Randstad proximity and student demand can still make housing competitive. Research listing by listing and plan deposits seriously.",
    },
    {
      q: "Do I need Dutch health insurance in Leiden?",
      a: "Rules are national. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our health insurance guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Leiden International Centre, national government references, and Netherlands Worldwide. Confirm current requirements on each official site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Leiden",

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
        { label: "Delft", href: "/netherlands/delft/" },
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
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
    { label: "Moving to Delft", href: "/netherlands/delft/" },
    { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
  ],
};
