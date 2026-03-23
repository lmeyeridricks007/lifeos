/**
 * Haarlem city hub – /netherlands/haarlem/
 * Amsterdam Area alternative: historic city, strong livability, rail to Amsterdam and coast.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Haarlem municipality",
    label: "Moving to or within Haarlem (Gemeente Haarlem)",
    url: "https://haarlem.nl/moving-or-within-haarlem",
  },
  {
    category: "Amsterdam Area – living context",
    label: "I amsterdam – Where to live: Haarlem & Heemstede",
    url: "https://www.iamsterdam.com/en/live-work-study/living/housing/where-to-live/haarlem-heemstede",
  },
  {
    category: "Amsterdam Area – IN Amsterdam",
    label: "IN Amsterdam – Services for international newcomers",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/how-in-amsterdam-helps-international-newcomers/in-amsterdam-services-for-international-newcomers",
  },
  {
    category: "Amsterdam Area – IN Amsterdam",
    label: "IN Amsterdam – About the programme",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/about-in-amsterdam",
  },
  {
    category: "Amsterdam Area – registration overview",
    label: "I amsterdam – Official procedures: registration",
    url: "https://www.iamsterdam.com/en/live-work-study/living/official-procedures/registration",
  },
  {
    category: "Housing – trusted context",
    label: "I amsterdam – Renting a property in the Amsterdam Area",
    url: "https://www.iamsterdam.com/en/live-work-study/living/housing/rent-property",
  },
  {
    category: "Housing – partner directory",
    label: "I amsterdam – Partner list (all partners)",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners",
  },
  {
    category: "Housing – partner directory (examples)",
    label: "I amsterdam – Partner profile: Expat2Holland",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/expat2holland",
  },
  {
    category: "Housing – partner directory (examples)",
    label: "I amsterdam – Partner profile: Jimble",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/jimble",
  },
  {
    category: "Housing – partner directory (examples)",
    label: "I amsterdam – Partner profile: Packimpex",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/packimpex",
  },
  {
    category: "National newcomer context",
    label: "I amsterdam – Official expat centres in the Netherlands",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/official-expat-centers-in-the-netherlands",
  },
  {
    category: "National relocation checklist",
    label: "Netherlands Worldwide – Checklist relocating to the Netherlands",
    url: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
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
];

export const haarlemCityPage: CityHubPageData = {
  slug: "haarlem",
  country: "netherlands",
  name: "Haarlem",
  path: "/netherlands/haarlem/",
  publish: true,
  publishDate: "2026-03-24",

  hubLayout: "amsterdam-area-alternative",

  seo: {
    title: "Moving to Haarlem as an Expat | Living in Haarlem, Costs, Housing & Lifestyle",
    description:
      "Thinking about moving to Haarlem? Explore why expats choose Haarlem, what life is like, how housing and commuting compare, and which services can help you settle in.",
    keywords: [
      "moving to haarlem as an expat",
      "haarlem for expats",
      "living in haarlem netherlands expat",
      "haarlem netherlands expat guide",
      "should i live in haarlem expat",
      "haarlem vs amsterdam expat",
      "best areas in haarlem for expats",
      "commute from haarlem to amsterdam",
      "family life in haarlem expat",
      "housing in haarlem for expats",
      "amsterdam area living haarlem",
      "gemeente haarlem registration",
      "in amsterdam services haarlem",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Haarlem as an Expat",
    subtitle:
      "Discover why expats choose Haarlem for its historic charm, calmer lifestyle, and Amsterdam-area access — and whether it’s the right city for your move to the Netherlands.",
    image: {
      src: "/images/heroes/haarlem-grote-markt-expat-hero.png",
      alt: "Expat relocation papers, passport, map, and a phone with a first-week checklist on an outdoor café table on Haarlem’s Grote Markt, with the Grote Kerk (St. Bavo’s Church), cyclists, and golden-hour light in the background.",
      imagePrompt:
        "Wide editorial hero: foreground wooden café table on Haarlem Grote Markt with open leather folder, passport, documents labeled municipality registration / residence permit / BSN, smartphone checklist first week in Haarlem, coffee, map, pen; background Grote Kerk Gothic tower, stepped gables, red awnings, people on terrace, bicycles, warm golden hour, premium relocation magazine aesthetic.",
    },
    ctas: [
      { label: "Explore Haarlem Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "haarlem-at-a-glance", label: "Haarlem at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Haarlem" },
    { id: "what-life-like", label: "Life in Haarlem" },
    { id: "register-haarlem", label: "First administrative steps" },
    { id: "bsn-digid", label: "BSN + DigiD" },
    { id: "health-insurance", label: "Health insurance" },
    { id: "banking", label: "Banking" },
    { id: "housing-costs", label: "Housing" },
    { id: "transport", label: "Transport & commuting" },
    { id: "services-expats", label: "Useful services" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Haarlem suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "example-scenarios", label: "Common scenarios" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official sources" },
    { id: "related-guides", label: "Related guides" },
    { id: "other-cities", label: "Explore next" },
  ],

  quickFactsHeading: "Haarlem at a Glance",

  quickFacts: [
    { label: "Best for", value: "Professionals, couples, families, Amsterdam-area workers who want a calmer home base" },
    { label: "Typical vibe", value: "Historic, elegant, relaxed, premium-local — still very much a living city" },
    { label: "Strongest appeal", value: "Beautiful urban life with strong ties to the Amsterdam metropolitan region" },
    { label: "Trade-off to know", value: "Housing demand and rent pressure can still be significant — not a “cheap by default” alternative" },
    { label: "Good fit if you want", value: "Less day-to-day intensity than central Amsterdam without giving up Randstad access" },
    { label: "Nearby advantages", value: "Coast, dunes, and nature to the west; frequent trains toward Amsterdam and the region" },
  ],

  cityOverview: {
    heading: "Why Expats Choose Haarlem",
    paragraphs: [
      "Haarlem is often picked by people who want a beautiful, very livable Dutch city with a strong connection to the Amsterdam Area job market and infrastructure. It sits in the same broader ecosystem as Amsterdam — including IN Amsterdam services that support eligible international newcomers across the region — while offering a smaller, calmer day-to-day rhythm in a historic setting.",
      "Many internationals compare Haarlem when they are open to living outside central Amsterdam but still want Randstad connectivity, café culture, and walkable streets. It tends to suit professionals, couples, and families who care about architecture, atmosphere, and quality of life, and who are willing to navigate a competitive rental market like other popular western cities.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Haarlem",
    paragraphs: [
      "Day-to-day life in Haarlem usually feels urban but manageable: a compact historic centre, independent shops, markets, and plenty of places to eat and drink. It is less overwhelming than central Amsterdam for many newcomers, but still active and cultured — not a sleepy village.",
      "You will still hear English in many workplaces and social contexts, especially among internationals, yet the city can feel more Dutch-local in tone than Amsterdam’s core. For people who value charm, walkability, and weekend trips to the beach or dunes, Haarlem is often part of the shortlist alongside Utrecht or The Hague — each with a different personality and commute profile.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Haarlem",
    reasons: [
      {
        title: "Amsterdam-area alternative",
        explanation:
          "Keeps you inside the Amsterdam metropolitan orbit for jobs and networking while trading some of central Amsterdam’s intensity for a smaller historic core.",
        whoItSuits: "Amsterdam workers who want a different home environment",
      },
      {
        title: "Quality of life & atmosphere",
        explanation:
          "Elegant architecture, human-scale streets, and strong café and retail life — appealing when you want aesthetics and routine comfort together.",
        whoItSuits: "Couples, design-minded professionals, culture-oriented movers",
      },
      {
        title: "Family-friendly pace",
        explanation:
          "Many families like the balance of city services and schools with a calmer centre than the busiest parts of Amsterdam.",
        whoItSuits: "Families prioritising livability and outdoor access",
      },
      {
        title: "Coast and nature access",
        explanation:
          "Zandvoort and the dunes are a straightforward trip for sea air and weekend resets — a lifestyle draw for outdoor-oriented expats.",
        whoItSuits: "Runners, swimmers, weekend beach-goers",
      },
      {
        title: "Regional newcomer support",
        explanation:
          "Eligible newcomers in the Amsterdam Area may use IN Amsterdam for certain registration and permit workflows; Haarlem’s own municipality handles local address and civil procedures.",
        whoItSuits: "EU movers, highly skilled migrants, first-time registrants (check eligibility)",
      },
      {
        title: "Still well connected",
        explanation:
          "Intercity and regional rail link Haarlem into Amsterdam and the wider Randstad; cycling stays central to daily errands.",
        whoItSuits: "Hybrid workers and commuters who test routes before signing a lease",
      },
    ],
  },

  whoMovesHere: {
    heading: "Who Haarlem Is Best For",
    profiles: [
      "Amsterdam-area professional who wants a calmer, prettier home base",
      "Couple prioritising lifestyle, architecture, and neighbourhood feel",
      "Family wanting city life with a bit more breathing room than central Amsterdam",
      "Expat who values walkability, cafés, and weekend access to the coast",
      "International newcomer comparing Haarlem with Utrecht or The Hague for fit",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Haarlem is not automatically a budget escape from Amsterdam. Demand for housing in attractive neighbourhoods can still be high, and you should plan for competitive viewings, strong paperwork, and realistic timelines — use our housing platforms, rental agencies, and relocation guides rather than assuming an easy search.",
      "Nightlife scale and international density differ from Amsterdam: you get depth of local culture, but fewer big-city late-night options. Some people prefer a larger global city or a more explicitly international environment — in that case, test visits and commuting before you commit.",
      "Commuting is workable for many Amsterdam roles, but your comfort level depends on role location, hours, and hybrid policy. Treat rail frequency and door-to-door time as something to validate yourself rather than assuming a single number fits every job.",
    ],
  },

  cityComparison: {
    heading: "How Haarlem Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide focuses on why Haarlem shows up on expat shortlists, what housing and commuting realistically involve, and how municipal registration fits alongside Amsterdam Area newcomer services. National steps — BSN, DigiD, health insurance, banking — follow the same broad patterns as elsewhere in the Netherlands; we link to our country-wide guides for depth.",
      "Start with Gemeente Haarlem for local moving and address questions, and read I amsterdam for regional context (including where Haarlem sits in Amsterdam Area housing and registration overviews). When you need hands-on help, our services directory lists banks, insurers, housing platforms, and relocation providers you can compare on your own terms.",
    ],
    links: [
      { label: "Compare Dutch cities hub", href: "/netherlands/cities/" },
      { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services", href: "/netherlands/services/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Haarlem",
    body: [
      "When you live in Haarlem, municipal registration and address changes are handled through Gemeente Haarlem. The official municipal pages explain moving from abroad, moving within the city, and what to arrange when your address changes — always follow their current instructions for appointments and documents.",
      "Haarlem is part of the broader Amsterdam Area ecosystem. IN Amsterdam offers services for eligible international newcomers (registration support, permits in supported cases) across the region — it is not a substitute for Haarlem’s own civil affairs desk, but it can matter for your specific route. Check IN Amsterdam and I amsterdam for eligibility and what they can book for you.",
    ],
    steps: [
      "Read Gemeente Haarlem’s moving / registration pages for your situation (from abroad vs within NL).",
      "Book any required appointment and gather ID, housing proof, and civil documents per their checklist.",
      "If you may qualify, review IN Amsterdam services for combined or accelerated steps for newcomers.",
      "After registration, plan BSN, DigiD, banking, and health insurance using our national guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address / rental or purchase documentation acceptable to the gemeente",
      "Birth or marriage certificates if your situation requires them (check Haarlem’s guidance)",
      "Residence permit or visa paperwork when applicable",
      "Sworn translations or legalizations only when officials ask for them",
    ],
    officialSourceLinks: [
      { label: "Gemeente Haarlem – moving or within Haarlem", url: "https://haarlem.nl/moving-or-within-haarlem" },
      { label: "I amsterdam – Official registration procedures", url: "https://www.iamsterdam.com/en/live-work-study/living/official-procedures/registration" },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
      { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  bsnDigid: {
    heading: "BSN and DigiD After Settling in Haarlem",
    body: [
      "Your BSN is issued when you register a valid address with the municipality. In Haarlem that means following Gemeente Haarlem processes; timelines depend on appointments and your document bundle.",
      "DigiD is the national login for many government and insurer portals. You typically apply after you have a BSN and registered Dutch address, and you complete activation with the letter by post flow. Sorting DigiD early saves friction with tax, healthcare, and municipal online tasks.",
    ],
    digidRequirements: ["BSN", "Registered Dutch address", "Mobile phone for application"],
    examples: ["Municipality portals", "Health insurer self-service", "Belastingdienst", "Some employer or benefits workflows"],
    plannedPageLinks: [
      { label: "BSN registration (Netherlands guide)", href: "/netherlands/bsn-registration/" },
      { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance When You Live in Haarlem",
    body: [
      "Dutch basic health insurance rules are national, not city-specific. If you live or work in the Netherlands in a way that triggers mandatory cover, arrange a basisverzekering in line with official deadlines for your situation.",
      "Compare insurers on premium, excess (eigen risico), and whether you need supplementary cover — but start from whether you are obliged to insure at all (students and cross-border cases can differ).",
    ],
    advice: [
      "Read Government.nl and our health insurance guide before you assume you are exempt.",
      "Pick a basic policy you can sustain for the full year; switching is possible but plan consciously.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Haarlem",
    body: [
      "Most people still want a Dutch current account for salary, rent, iDEAL, and direct debits. Requirements vary by bank: typically ID, often BSN, proof of address, and sometimes permit paperwork.",
      "Haarlem has branch and digital options similar to the rest of the Randstad; choose based on English support, fees, and onboarding speed after you know your registration timeline.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies by bank)", "Dutch address proof", "Residence permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Haarlem for Expats",
    body: [
      "Many searches start with “Amsterdam alternative” framing — but Haarlem is still a sought-after city. Expect active competition for good listings, landlord references, and clear income or guarantor documentation.",
      "Use platforms for breadth, agencies when you want assisted search, and relocation services when you need bundled help — always verify registration (inschrijving) rules for any address before you pay large deposits.",
    ],
    costCards: [
      { label: "Rent", value: "Competitive Randstad band", note: "Varies by street, size, and furnishing", disclaimer: "Illustrative — verify locally" },
      { label: "Commuting", value: "NS + bike", note: "Season tickets or per-trip OV; test your route", disclaimer: "Depends on workplace" },
      { label: "Groceries & daily life", value: "Typical western NL urban", note: "Comparable to other Randstad cities", disclaimer: "Household-dependent" },
      { label: "Health insurance (basic)", value: "National market", note: "See insurer comparison", disclaimer: "Varies by provider" },
      { label: "Setup & admin", value: "Bank, insurance, deposits", note: "Deposit and moving costs dominate early cash needs", disclaimer: "Case-by-case" },
    ],
    neighborhoodsNote:
      "Explore areas on foot or bike where possible; check evening noise, parking, and bike storage — Haarlem’s centre is compact but neighbourhoods differ in feel and price pressure.",
    warning:
      "Scams exist in tight markets. Do not pay large deposits before you are confident in the landlord, contract, and registration situation.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    ],
  },

  transport: {
    heading: "Transport and Commuting from Haarlem",
    body: [
      "Haarlem’s train station links the city into Amsterdam and the wider network; many Amsterdam workers commute by rail plus bike at one or both ends. Locally, cycling remains the default for groceries, school runs, and social plans.",
      "Before you sign a lease, test the commute for your real working hours — frequency, crowding, and last-mile time matter as much as map distance.",
    ],
    goodToKnow: [
      "Keep a bike budget for purchase, locks, and maintenance once you have secure storage.",
      "OV-pay-as-you-go vs season products depends on how often you travel; revisit after your first month.",
      "If hybrid work changes, your optimal neighbourhood may change — build flexibility where you can.",
    ],
  },

  servicesIntro:
    "Below are starter categories that link to our live services hub pages, plus example providers drawn from I amsterdam partner listings and the same Amsterdam Area newcomer ecosystem used on other hubs. We do not rank or endorse providers — compare services, contracts, and pricing yourself.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Haarlem",

  first30Days: {
    heading: "Your First 30 Days in Haarlem",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration if you need a BSN quickly.",
          "Book gemeente appointments and gather documents from Haarlem’s checklist.",
          "Set up OV, bike, and basic groceries; map your commute test runs.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule municipal registration; track BSN issuance.",
          "Start DigiD once eligible; watch for the activation letter.",
          "Open or progress a Dutch bank account if salary or rent requires it.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange Dutch health insurance if you are in the mandatory bucket.",
          "Point employer, landlord, and utilities at your IBAN and BSN as needed.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finish DigiD activation; close gaps on tax, insurance, or permit follow-ups.",
          "Explore local healthcare registration (huisarts) once your insurance is active.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Haarlem Scenarios",
  exampleScenariosIntro:
    "Short sketches of how people use Haarlem — always validate permits, employer location, and housing against your own facts.",

  exampleScenarios: [
    {
      title: "Professional working in Amsterdam, living in Haarlem",
      summary:
        "You want a prettier, quieter home base but keep an Amsterdam salary; rail and bike cover most days.",
      needsFirst: ["Test commute at rush hour", "Secure registrable lease", "BSN, bank, insurance"],
      documents: ["ID", "Employment contract", "Housing contract acceptable to gemeente", "Permit if non-EU"],
      timing: "Register as soon as you have a valid address; align insurance with your start date.",
      mistakes: ["Assuming every listing allows BRP registration", "Skipping commute trials before signing"],
    },
    {
      title: "Couple choosing Haarlem over Amsterdam for lifestyle",
      summary:
        "You prioritise atmosphere, space, and weekend quality of life while staying in the Randstad job market.",
      needsFirst: ["Agree on commute budget", "Compare Haarlem vs Utrecht on visits", "Line up relocation help if needed"],
      documents: ["IDs", "Joint income proof for rental applications", "Savings for deposit and fees"],
      timing: "Start housing search early; good listings move quickly.",
      mistakes: ["Expecting large rent gaps vs all Amsterdam neighbourhoods", "Underestimating peak train crowding"],
    },
    {
      title: "Family wanting livable city with metropolitan access",
      summary:
        "Schools, outdoor life, and a calmer centre matter; one or both parents work across the region.",
      needsFirst: ["School / childcare research", "Neighbourhood safety and noise checks", "Registration plan for all members"],
      documents: ["Birth certificates if requested", "Proof of address", "Permits for non-EU dependants"],
      timing: "Book gemeente for the whole household where applicable.",
      mistakes: ["Only one adult handling registration paperwork", "Late insurance setup for children"],
    },
    {
      title: "Newcomer balancing charm vs practical setup",
      summary:
        "You love the historic centre but need realistic timelines for banking, BSN, and a competitive rental.",
      needsFirst: ["Temporary address strategy if needed", "IN Amsterdam eligibility check", "Document pack from our readiness tools"],
      documents: ["Passport", "Housing proof chain", "Any civil documents Haarlem requests"],
      timing: "Parallel-path housing and registration; do not stall BSN-dependent tasks.",
      mistakes: ["Paying deposits before registration eligibility is clear", "Ignoring DigiD until something breaks"],
    },
    {
      title: "Expat comparing Haarlem and Utrecht",
      summary:
        "Both offer strong livability; Utrecht is the national rail hub while Haarlem leans Amsterdam + coast.",
      needsFirst: ["Job location reality", "Commute experiments", "Housing alerts on both markets"],
      documents: ["Same core rental pack for either city"],
      timing: "Visit mid-week evenings in both places before you choose.",
      mistakes: ["Choosing on photos only", "Ignoring where your partner’s commute anchors you"],
    },
    {
      title: "Relocating with household goods from abroad",
      summary:
        "You need movers, temporary housing, and registration sequencing — partner-directory movers can help but contracts vary.",
      needsFirst: ["Inventory", "Mover quotes", "Haarlem address timing vs delivery"],
      documents: ["Customs paperwork as applicable", "Rental contract dates aligned with arrival"],
      timing: "Line up gemeente appointment windows with your move-in date.",
      mistakes: ["Shipping everything before you have registrable housing sorted"],
    },
  ],

  commonMistakes: [
    { mistake: "Assuming Haarlem is always a low-cost alternative to Amsterdam", internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" } },
    { mistake: "Signing housing without confirming BRP / registration eligibility" },
    { mistake: "Delaying health insurance when you are obliged to hold Dutch basic cover", internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" } },
    { mistake: "Skipping IN Amsterdam eligibility when you might qualify for newcomer support" },
    { mistake: "Treating commute time as a guess instead of testing your real route" },
  ],

  tools: [
    { label: "Relocation checklist", href: "/netherlands/moving-checklist-netherlands/", description: "Phased tasks for your move", status: "live" },
    { label: "Document readiness checker", href: "/netherlands/document-readiness-checker/", description: "See common document needs", status: "live" },
    { label: "Visa timeline estimator", href: "/netherlands/visa-timeline-estimator/", description: "Plan permit timing", status: "live" },
    { label: "Visa cost calculator", href: "/netherlands/visa-cost-calculator/", description: "Budget fees and moving costs", status: "live" },
  ],

  faqs: [
    {
      q: "Is Haarlem a good city for expats?",
      a: "Many expats choose Haarlem for its historic centre, calmer pace than central Amsterdam, and strong links to the Amsterdam Area job market. Housing can still be competitive, so plan your search and documents seriously.",
    },
    {
      q: "Can I use IN Amsterdam if I live in Haarlem?",
      a: "IN Amsterdam supports eligible international newcomers in the Amsterdam Area. Whether you can use a specific service depends on your situation and their eligibility rules — check their official pages alongside Gemeente Haarlem for local registration steps.",
    },
    {
      q: "Is Haarlem cheaper than Amsterdam?",
      a: "Not automatically. Haarlem is popular and demand for housing can be high. Treat rent and competition as something to research listing by listing rather than assuming a steep discount.",
    },
    {
      q: "How do people commute from Haarlem to Amsterdam?",
      a: "Many commuters combine train travel with cycling at one or both ends. Comfort depends on your exact workplace, hours, and hybrid schedule — test the route yourself before you commit to a long lease.",
    },
    {
      q: "Where do I register my address in Haarlem?",
      a: "Municipal registration is handled by Gemeente Haarlem. Use their official moving and registration pages for appointments, required documents, and local rules.",
    },
    {
      q: "Is Haarlem good for families?",
      a: "Families often like the balance of city amenities, schools, and access to outdoor space near the coast. Still verify school placement, housing size, and commute load for both parents.",
    },
    {
      q: "Do I need Dutch health insurance if I move to Haarlem?",
      a: "Health insurance rules are national. If you must hold Dutch basic insurance, arrange it within the official timeframe for your situation — see Government.nl and our health insurance guide.",
    },
    {
      q: "Should I compare Haarlem with Utrecht or The Hague?",
      a: "Yes. Utrecht is the national rail hub with a university-city feel; The Hague centres diplomacy and institutions; Haarlem leans Amsterdam proximity and coast access. Your job location and lifestyle preferences should drive the choice.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "These links combine Gemeente Haarlem, I amsterdam / IN Amsterdam regional context, housing partner directories, and national relocation references. Always confirm the latest requirements on the official site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Haarlem",

  relatedGuides: [
    {
      title: "Essential setup",
      links: [
        { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
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
      title: "Services & permits",
      links: [
        { label: "All services", href: "/netherlands/services/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Banks directory", href: "/netherlands/services/banks/" },
        { label: "Health insurance directory", href: "/netherlands/services/health-insurance/" },
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
    {
      title: "Compare cities",
      links: [
        { label: "Cities hub", href: "/netherlands/cities/" },
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      ],
    },
  ],

  cityLinksSectionTitle: "Explore More Cities and Services",

  cityLinks: [
    { label: "Compare all Dutch cities", href: "/netherlands/cities/" },
    { label: "Services hub (banks, housing, visas)", href: "/netherlands/services/" },
    { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
    { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
  ],
};
