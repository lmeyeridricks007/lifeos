/**
 * Arnhem city hub – /netherlands/arnhem/
 * Eastern Netherlands city: greener setting, manageable scale, practical municipal onboarding.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Arnhem",
    label: "First registration in the Netherlands (Eerste inschrijving)",
    url: "https://www.arnhem.nl/product/eerste-inschrijving-in-nederland/",
  },
  {
    category: "National relocation context",
    label: "Netherlands Worldwide – checklist relocating to the Netherlands (immigration)",
    url: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
  },
  {
    category: "Education (information)",
    label: "Lorentz Lyceum (Arnhem)",
    url: "https://lorentzlyceum.nl/",
  },
  {
    category: "Education (information)",
    label: "Lorentz Lyceum – school guide (digital)",
    url: "https://lorentzlyceum.nl/portals/1/flippingbook/Schoolgids_2024_2025/index.html",
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

export const arnhemCityPage: CityHubPageData = {
  slug: "arnhem",
  country: "netherlands",
  name: "Arnhem",
  path: "/netherlands/arnhem/",
  publish: true,
  publishDate: "2026-04-03",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Arnhem as an Expat | Living in Arnhem, Housing, Lifestyle & Practical Setup",
    description:
      "Thinking about moving to Arnhem? Explore why expats choose Arnhem, what life is like, how registration and housing work, and which services can help you settle in.",
    keywords: [
      "moving to arnhem as an expat",
      "arnhem for expats",
      "living in arnhem netherlands expat",
      "arnhem netherlands expat guide",
      "should i live in arnhem expat",
      "arnhem vs utrecht expat",
      "arnhem family life expat",
      "arnhem green city expat",
      "housing in arnhem for expats",
      "east netherlands city for expats",
      "gemeente arnhem registration",
      "eerste inschrijving arnhem",
      "gelderland expat city",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Arnhem as an Expat",
    subtitle:
      "Discover why expats choose Arnhem for its greener setting, manageable city scale, and more relaxed eastern-Netherlands lifestyle — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/arnhem-expat-city-hero.png",
      alt: "Arnhem at golden hour: green parkland, calm urban river atmosphere, bicycles and spacious eastern Dutch city streets.",
      imagePrompt:
        "Editorial hero: Arnhem, parkland and Rijn river atmosphere, greener neighborhoods, elegant calm streets, bicycles, eastern Netherlands city.",
    },
    ctas: [
      { label: "Explore Arnhem Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "arnhem-at-a-glance", label: "Arnhem at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Arnhem" },
    { id: "what-life-like", label: "Life in Arnhem" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Arnhem suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-arnhem", label: "First administrative steps" },
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

  quickFactsHeading: "Arnhem at a Glance",

  quickFacts: [
    {
      label: "Best for",
      value: "Families, students, professionals, people who value green surroundings and a calmer rhythm",
    },
    { label: "Typical vibe", value: "Greener, calmer, practical, less intense than the largest western metros" },
    {
      label: "Strongest appeal",
      value: "Balanced city life with stronger everyday access to parks, river corridors, and open space than many bigger Dutch cities",
    },
    {
      label: "Trade-off to know",
      value: "Less international job-market density and prestige profile than Amsterdam, Rotterdam, or The Hague — validate your sector",
    },
    {
      label: "Good fit if you want",
      value: "Livability, breathing space, and a regionally grounded eastern-Netherlands base rather than maximum metropolitan intensity",
    },
    {
      label: "Regional advantage",
      value: "Practical municipal first-registration guidance from Gemeente Arnhem and a credible alternative to default Randstad choices",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Arnhem",
    paragraphs: [
      "Arnhem offers a different Dutch-city proposition from Amsterdam, Rotterdam, or The Hague: a sizeable Gelderland city with more greenery and breathing room in daily life, a lower-intensity urban rhythm, and a practical eastern-Netherlands identity. Many internationals consider it when they want real services and culture without constantly feeling inside a mega-metro — especially if nature access, family routines, or a calmer commute pattern matter more than maximum global-city buzz.",
      "Official onboarding is anchored by Gemeente Arnhem’s page on first registration in the Netherlands, which spells out timing and documents for people arriving from abroad. National rules still govern health insurance, banking, and permits; Arnhem does not remove the need to plan housing seriously or to compare your job sector honestly against western hubs. English works in many international-facing contexts; Dutch still matters for deeper community ties and some services.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Arnhem",
    paragraphs: [
      "Daily life often feels grounded and spacious compared with the densest Randstad cores: more tree-lined routes, river and park adjacency, and neighbourhoods that can feel less permanently crowded. You still get shops, healthcare, education, and events — but the city reads as a manageable eastern base rather than an endless international runway.",
      "That regional character can feel refreshing if you are open to Gelderland and the wider east: weekend trips toward forests and heathland are part of the mental map for many residents, without pretending Arnhem is a village. If you need the highest concentration of global HQs, embassies, or certain niche sectors, you may still look west or hybrid-work from Arnhem — honesty about sector fit matters more than branding.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Arnhem",
    reasons: [
      {
        title: "Greener, more spacious everyday setting",
        explanation:
          "Parks, river corridors, and eastern-Netherlands geography make nature access a realistic part of weekly life for many households — not an occasional escape.",
        whoItSuits: "Families, outdoor-oriented professionals, people fatigued by constant metro density",
      },
      {
        title: "Manageable city scale",
        explanation:
          "Arnhem is a full city with institutions and employers, yet many routines stay cycle-reachable without the feeling of an enormous sprawl.",
        whoItSuits: "People who want urban services without maximum crowding",
      },
      {
        title: "Family appeal",
        explanation:
          "Calmer rhythms, space, and local schools to research (including published materials from schools such as Lorentz Lyceum for your own verification) can suit family-led moves when work location allows.",
        whoItSuits: "Parents comparing Arnhem with Utrecht, Breda, or Tilburg on lifestyle not only job logos",
      },
      {
        title: "Less “always on” big-city pressure",
        explanation:
          "Social life can feel more local and regional; some expats describe Arnhem as easier to “land in” psychologically than the most competitive western centres.",
        whoItSuits: "Newcomers prioritising stability and livability over nightlife scale",
      },
      {
        title: "Practical daily infrastructure",
        explanation:
          "Healthcare, retail, education, and public transport exist at city level; your task is still to line up housing, registration, and insurance on national timelines.",
        whoItSuits: "Professionals and students with a clear reason to be in the east",
      },
      {
        title: "Eastern-Netherlands alternative to Randstad defaults",
        explanation:
          "If your employer, partner’s work, or lifestyle points east, Arnhem competes editorially with Nijmegen (see our Nijmegen city guide) or with Brabant options — compare on commute, sector, and feel.",
        whoItSuits: "Internationals explicitly avoiding default Amsterdam/Rotterdam framing",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in Arnhem",
    companiesCount: getCityStats("arnhem")?.companies ?? null,
    jobsCount: getCityStats("arnhem")?.jobs ?? null,
    sourceLabel: getCityStats("arnhem")?.sourceLabel,
    sourceHref: getCityStats("arnhem")?.sourceHref,
    industries: getCityStats("arnhem")?.industries ?? [],
    majorEmployers: getCityStats("arnhem")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Arnhem Is Best For",
    profiles: [
      "Family wanting a greener city base with schools to research and realistic expectations about eastern-Netherlands job clusters",
      "Student or young professional who prefers a calmer city over the largest western metros — with a clear study or work anchor",
      "Expat who values a lower-intensity daily rhythm and more space without giving up urban services",
      "Newcomer open to the east of the Netherlands and willing to compare Arnhem honestly with Utrecht, Breda, or Tilburg",
      "International comparing Arnhem and Utrecht on centrality versus green-city feel — testing trains and housing before committing",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Arnhem is not Amsterdam or The Hague for international corporate density, embassy clusters, or the widest global job-market perception. If your sector concentrates in the western Randstad, you may commute, work hybrid, or reconsider — validate realistic journey patterns before a long lease.",
      "Compared with Utrecht, Arnhem is less centrally positioned on the national rail map for omnidirectional Randstad commuting — Utrecht wins many “hub” comparisons even when Arnhem wins on green-city feel. Compared with Eindhoven, Arnhem is not marketed around Brainport semiconductors. Compared with Breda or Tilburg, you trade Brabant sociability and student-city identities for a more eastern, Gelderland character. Compared with Groningen, Arnhem is less student-defined and sits in a different northern-versus-eastern regional story. Compared with Haarlem, you lose Amsterdam-area boutique proximity while gaining a more spacious eastern base.",
      "Housing still requires planning, proof of address for municipal registration, and careful listing verification — we do not quote rent averages here. Use platforms, agencies, or relocation support, and confirm BRP registration eligibility before large deposits.",
    ],
  },

  cityComparison: {
    heading: "How Arnhem Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains why Arnhem suits expats who want a greener, calmer eastern-Netherlands city, how Gemeente Arnhem’s first-registration page fits your first weeks, and which national guides apply for insurance, banking, and documents. We link to Netherlands-wide service hubs without ranking or endorsing commercial providers.",
      "Use the cities hub to compare Amsterdam, Utrecht, Rotterdam, Eindhoven, Breda, Tilburg, Groningen, and Haarlem honestly — Arnhem often fits the “livable green city in the east” niche on that map.",
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
      { label: "Moving to Tilburg", href: "/netherlands/tilburg/" },
      { label: "Moving to Maastricht", href: "/netherlands/maastricht/" },
      { label: "Moving to Nijmegen", href: "/netherlands/nijmegen/" },
      { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
      { label: "Moving to Groningen", href: "/netherlands/groningen/" },
      { label: "Moving to Delft", href: "/netherlands/delft/" },
      { label: "Moving to Leiden", href: "/netherlands/leiden/" },
      { label: "Moving to Amstelveen", href: "/netherlands/amstelveen/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Arnhem",
    body: [
      "Gemeente Arnhem publishes an official page on first registration in the Netherlands for people moving from abroad. It states that if you intend to stay at least four months, you must register with the municipality within five days of arrival — always re-read the live page for the exact wording, exceptions, and how to book an appointment.",
      "You will typically need proof of address, valid identification, and evidence of nationality or residence status as described on the gemeente site. Foreign civil documents may need legalisation or sworn translation when officials require them. After registration is completed, you receive a citizen service number (BSN) as part of the process. If you are not from the EU, EEA, or Switzerland, you may need to report to the IND before municipal registration in some situations — confirm the current IND and gemeente sequence for your nationality and permit route.",
      "Typical early chains after arrival: municipal registration when required, BSN, DigiD, Dutch bank account if needed, mandatory basic health insurance when national rules require it, and huisarts registration after insurance.",
    ],
    steps: [
      "Read Gemeente Arnhem’s first-registration page and note timing and document requirements for your nationality and housing situation.",
      "If applicable, complete IND steps before the gemeente appointment — do not assume the order without checking.",
      "Book an in-person appointment when registration is mandatory; bring ID, housing proof, and civil documents as listed.",
      "Arrange sworn translations or legalisations only when the municipality or another authority asks for them.",
      "Continue with DigiD, banking, and insurance using our national guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address acceptable to Gemeente Arnhem",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if officials request them",
      "Legalised and/or translated foreign documents when required",
    ],
    officialSourceLinks: [
      {
        label: "Gemeente Arnhem – First registration in the Netherlands",
        url: "https://www.arnhem.nl/product/eerste-inschrijving-in-nederland/",
      },
      {
        label: "Netherlands Worldwide – relocating checklist (immigration)",
        url: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
      },
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
    heading: "BSN and DigiD After Settling in Arnhem",
    body: [
      "BSN is issued after municipal registration is completed when you have a qualifying Dutch address. Follow Gemeente Arnhem’s current appointments and document list.",
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
    heading: "Health Insurance When You Live in Arnhem",
    body: [
      "Rules are national. If you must hold Dutch basic insurance, arrange it within the official window for your situation.",
      "Use Government.nl and insurer comparison alongside our health insurance guide — Arnhem does not change the legal framework.",
    ],
    advice: [
      "Compare premium and eigen risico once obligation is clear.",
      "Browse insurers via our services directory on your own terms.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Arnhem",
    body: [
      "Most people want a Dutch account for salary, rent, and iDEAL. Requirements usually include ID, often BSN, and proof of address.",
      "National banks and digital providers serve Arnhem; choose based on English support, fees, and whether you want a local branch.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies)", "Dutch address proof", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Arnhem for Expats",
    body: [
      "Housing still rewards early planning. You need an address that the municipality can accept for registration — verify this with the landlord or agency before you pay large sums.",
      "Students, young professionals, and families often use different search channels; national housing platforms, rental agencies, and relocation services remain the practical backbone.",
      "Budget qualitatively for: rent and deposit, bank and insurance setup, document preparation from abroad, daily transport, and family or school-related costs. Do not assume Arnhem is uniformly easy or cheap.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; verify listings", note: "Platforms / agencies / relocation", disclaimer: "Varies" },
      { label: "Transport", value: "Bike + OV", note: "NS for intercity when needed", disclaimer: "Depends on commute" },
      { label: "Bank & insurance", value: "National market", note: "Same NL rules", disclaimer: "Varies" },
      { label: "Documents", value: "Translation / legalisation", note: "When officials require it", disclaimer: "Origin-dependent" },
      { label: "Family / schools", value: "Research-led", note: "Confirm with schools & gemeente", disclaimer: "Case-specific" },
    ],
    neighborhoodsNote:
      "Walk areas at different times of day; weigh distance to station, green space, schools you are considering, and realistic work or study location.",
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
    heading: "Getting Around Arnhem and the East",
    body: [
      "Cycling is central to daily life; NS trains connect Arnhem to Utrecht, Nijmegen, and onward across the country. If you plan frequent western Randstad days, test realistic journey patterns before you fix housing — we do not quote door-to-door times here.",
      "Car ownership is optional for many; parking rules apply in the centre like other Dutch cities.",
    ],
    goodToKnow: [
      "Compare Arnhem with Utrecht on hub connectivity versus green-city feel — both can work for different priorities.",
      "Compare with Nijmegen for a stronger Radboud–student and Lifeport-region identity on the same eastern corridor.",
      "If choosing between Arnhem and Brabant cities (Breda, Tilburg), weigh sector location and regional identity, not only photos.",
      "Keep OV-chipkaart or contactless OV options updated once routines settle.",
    ],
  },

  servicesIntro:
    "Below are our live Netherlands service hubs, Gemeente Arnhem’s first-registration page, Netherlands Worldwide’s national checklist, Lorentz Lyceum materials for families researching schools (verify admissions yourself), and shared banking / housing / document resources. Listings are informational — we do not rank providers or imply endorsement.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Arnhem",

  first30Days: {
    heading: "Your First 30 Days in Arnhem",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration; read Gemeente Arnhem first-registration guidance for your deadline.",
          "If non-EU/EEA/Swiss, confirm whether IND steps must precede gemeente registration.",
          "Shortlist banks, insurers, and a huisarts; map groceries and bike shops.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule in-person municipal registration; track BSN issuance.",
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
          "If you have children, continue school research using official school sites and gemeente information.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Arnhem Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, and employment facts for your case.",

  exampleScenarios: [
    {
      title: "Family choosing Arnhem for greener living",
      summary: "You want more space and park access than the densest Randstad cores; work or hybrid allows an eastern base.",
      needsFirst: ["School shortlist and admissions reality", "Housing with registration clarity", "Commute test if one partner works west"],
      documents: ["Rental pack", "ID", "Permits as applicable", "Civil documents if gemeente requests them"],
      timing: "Register within municipal rules; insure when national obligation applies.",
      mistakes: ["Assuming eastern housing is effortless", "Skipping gemeente document guidance"],
    },
    {
      title: "Student or young professional choosing Arnhem over a larger metro",
      summary: "You prefer a calmer city if your programme or employer is in Gelderland or remotely compatible.",
      needsFirst: ["Housing segment (student vs private)", "Registration appointment", "OV and bike plan"],
      documents: ["Admission or employment letter", "ID", "Address proof when available"],
      timing: "Parallel housing search and registration; do not delay insurance if required.",
      mistakes: ["Ignoring five-day registration context", "Late room search"],
    },
    {
      title: "Expat comparing Arnhem and Utrecht",
      summary: "You weigh Utrecht’s central hub against Arnhem’s greener, more spacious feel.",
      needsFirst: ["Realistic train-frequency test", "Sector and client location", "Housing search in both cities"],
      documents: ["Standard arrival documents"],
      timing: "Decide commute assumptions before a long lease.",
      mistakes: ["Choosing on photos without testing journeys"],
    },
    {
      title: "Newcomer handling registration, BSN, and document prep",
      summary: "You arrive from abroad with civil documents that may need legalisation or translation.",
      needsFirst: ["Gemeente Arnhem checklist", "IND order-of-steps if applicable", "Translation/legalisation only when required"],
      documents: ["Passport", "Permit paperwork", "Housing proof", "Birth/marriage certificates if requested"],
      timing: "Meet municipal deadlines before deep furnishing spend.",
      mistakes: ["Over-translating documents nobody asked for", "Missing IND-before-gemeente rules"],
    },
    {
      title: "International seeking more space and less crowding",
      summary: "You want Dutch urban life with a lower daily intensity than Amsterdam or Rotterdam.",
      needsFirst: ["Sector reality check", "Social plan (clubs, sport, language)", "Housing platforms or agencies"],
      documents: ["Standard rental documents"],
      timing: "Anchor employment or study, then housing.",
      mistakes: ["Expecting the same expat density as Amsterdam"],
    },
    {
      title: "Family balancing Arnhem vs Breda or Tilburg",
      summary: "You compare eastern green-city feel with Brabant’s student and sociable city identities.",
      needsFirst: ["Job or study location", "School research in each city", "Weekend visits if possible"],
      documents: ["As per gemeente for each city you trial"],
      timing: "Use our city guides in parallel; decide on evidence.",
      mistakes: ["Assuming all mid-size Dutch cities feel identical"],
    },
  ],

  commonMistakes: [
    {
      mistake: "Missing Gemeente Arnhem’s registration timing after arrival from abroad when you intend to stay at least four months",
      internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
    },
    {
      mistake: "Skipping IND steps when your nationality or permit route requires reporting before municipal registration",
      internalLink: { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    },
    {
      mistake: "Assuming Arnhem housing is always easy because the city feels spacious",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      mistake: "Delaying Dutch health insurance when national rules require it",
      internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    },
    {
      mistake: "Paying large deposits before confirming BRP registration eligibility at your address",
      internalLink: { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
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
      q: "Is Arnhem a good city for expats?",
      a: "Arnhem suits expats who want a greener, calmer eastern-Netherlands city with manageable scale and practical municipal guidance on first registration. It fits fewer people if they need maximum western corporate density, embassy proximity, or certain niche sectors concentrated in the Randstad.",
    },
    {
      q: "When must I register in Arnhem after moving from abroad?",
      a: "Gemeente Arnhem states that people moving from abroad who intend to stay at least four months must register within five days of arrival. Confirm the latest wording, booking process, and document list on their official first-registration page.",
    },
    {
      q: "Do I get a BSN immediately at the gemeente?",
      a: "BSN is issued after registration is completed according to municipal process. Follow Gemeente Arnhem’s current instructions alongside national guidance on BSN.",
    },
    {
      q: "Do I always register at the gemeente before the IND?",
      a: "Not necessarily. If you are not from the EU, EEA, or Switzerland, you may need to report to the IND before municipal registration in some cases. Check IND and gemeente guidance for your nationality and permit route.",
    },
    {
      q: "How does Arnhem compare with Utrecht for expats?",
      a: "Utrecht is more centrally positioned for omnidirectional Randstad commuting and has a very strong international-student and knowledge-worker profile. Arnhem often appeals for greener, more spacious day-to-day living when your work or lifestyle fits the east. Compare housing, commute reality, and sector fit — not only aesthetics.",
    },
    {
      q: "Is housing easy in Arnhem?",
      a: "No — treat housing like any active market. Use platforms, agencies, or relocation support, verify registration eligibility, and avoid large upfront payments until contract terms are clear.",
    },
    {
      q: "Do I need Dutch health insurance in Arnhem?",
      a: "National rules apply. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our guide.",
    },
    {
      q: "Where can families research schools?",
      a: "Use official school and gemeente sources. Lorentz Lyceum publishes online orientation materials including a digital school guide — useful as one reference while you verify admissions and language tracks directly with schools.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Gemeente Arnhem, Netherlands Worldwide, Lorentz Lyceum (for published school information), and selected national references. Confirm current requirements on each site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Arnhem",

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
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "Breda", href: "/netherlands/breda/" },
        { label: "Tilburg", href: "/netherlands/tilburg/" },
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
    { label: "Moving to Nijmegen", href: "/netherlands/nijmegen/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
    { label: "Moving to Breda", href: "/netherlands/breda/" },
    { label: "Moving to Tilburg", href: "/netherlands/tilburg/" },
  ],
};
