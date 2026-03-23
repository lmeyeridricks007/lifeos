/**
 * Amstelveen city hub – /netherlands/amstelveen/
 * Amsterdam Area: family-oriented, international schools, IN Amsterdam newcomer ecosystem.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Amstelveen",
    label: "Gemeente Amstelveen – First registration in the Netherlands",
    url: "https://www.amstelveen.nl/voor-het-eerst-inschrijven-nederland",
  },
  {
    category: "IN Amsterdam / I amsterdam",
    label: "I amsterdam – IN Amsterdam (live, work, study)",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam",
  },
  {
    category: "IN Amsterdam / I amsterdam",
    label: "IN Amsterdam – About IN Amsterdam",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/about-in-amsterdam",
  },
  {
    category: "IN Amsterdam / I amsterdam",
    label: "IN Amsterdam – Services for international newcomers",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/how-in-amsterdam-helps-international-newcomers/in-amsterdam-services-for-international-newcomers",
  },
  {
    category: "IN Amsterdam / I amsterdam",
    label: "I amsterdam – Official procedures: registration",
    url: "https://www.iamsterdam.com/en/live-work-study/living/official-procedures/registration",
  },
  {
    category: "IN Amsterdam / I amsterdam",
    label: "I amsterdam – Living in the Amsterdam Area",
    url: "https://www.iamsterdam.com/en/live-work-study/living",
  },
  {
    category: "IN Amsterdam / I amsterdam",
    label: "I amsterdam – Where to live: Amstelveen",
    url: "https://www.iamsterdam.com/en/live-work-study/living/housing/where-to-live/amstelveen",
  },
  {
    category: "Schools & education (I amsterdam)",
    label: "Amstelland International School (I amsterdam profile)",
    url: "https://www.iamsterdam.com/en/live-work-study/schools-universities-and-education-providers/all/education-providers/amstelland-international-school",
  },
  {
    category: "Schools & education (I amsterdam)",
    label: "The International School of Amsterdam (I amsterdam profile)",
    url: "https://www.iamsterdam.com/en/live-work-study/schools-universities-and-education-providers/all/education-providers/the-international-school-of-amsterdam",
  },
  {
    category: "I amsterdam – partner ecosystem",
    label: "I amsterdam – Partner list (all partners)",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners",
  },
  {
    category: "I amsterdam – partner ecosystem",
    label: "I amsterdam – Partner profile: Expat2Holland",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/expat2holland",
  },
  {
    category: "I amsterdam – partner ecosystem",
    label: "I amsterdam – Partner profile: Jimble",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/jimble",
  },
  {
    category: "I amsterdam – partner ecosystem",
    label: "I amsterdam – Partner profile: Packimpex",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/packimpex",
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

export const amstelveenCityPage: CityHubPageData = {
  slug: "amstelveen",
  country: "netherlands",
  name: "Amstelveen",
  path: "/netherlands/amstelveen/",
  publish: true,
  publishDate: "2026-03-30",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title: "Moving to Amstelveen as an Expat | Living in Amstelveen, Housing, Schools & Practical Setup",
    description:
      "Thinking about moving to Amstelveen? Explore why expats choose Amstelveen, what life is like, how registration and housing work, and which services can help you settle in.",
    keywords: [
      "moving to amstelveen as an expat",
      "amstelveen for expats",
      "living in amstelveen netherlands expat",
      "amstelveen netherlands expat guide",
      "should i live in amstelveen expat",
      "amstelveen vs amsterdam expat",
      "amstelveen family expat",
      "international schools amstelveen expat",
      "housing in amstelveen for expats",
      "amstelveen amsterdam area expat",
      "in amsterdam amstelveen",
      "gemeente amstelveen registration",
      "international school of amsterdam",
      "amstelland international school",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Amstelveen as an Expat",
    subtitle:
      "Discover why expats choose Amstelveen for its family-friendly neighborhoods, international-school access, and Amsterdam-area convenience — and whether it’s the right place for your move to the Netherlands.",
    image: {
      src: "/images/heroes/amstelveen-expat-city-hero.png",
      alt: "Leafy residential street in Amstelveen with green verges, bicycles, and modern Dutch homes in soft evening light — calm Amsterdam-area suburban atmosphere.",
      imagePrompt:
        "Editorial hero: Amstelveen residential avenue, trees, bicycles, family-oriented Amsterdam-area suburb, warm natural light.",
    },
    ctas: [
      { label: "Explore Amstelveen Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "amstelveen-at-a-glance", label: "Amstelveen at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Amstelveen" },
    { id: "what-life-like", label: "Life in Amstelveen" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Amstelveen suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-amstelveen", label: "First administrative steps" },
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

  quickFactsHeading: "Amstelveen at a Glance",

  quickFacts: [
    {
      label: "Best for",
      value: "Families, international professionals, Amsterdam-area workers who want a residential base",
    },
    { label: "Typical vibe", value: "Residential, green, organised, international-family oriented" },
    {
      label: "Strongest appeal",
      value: "Amsterdam access with calmer day-to-day life, schools, and space",
    },
    {
      label: "Trade-off to know",
      value: "Less historic-centre intensity and spontaneity than central Amsterdam",
    },
    {
      label: "Good fit if you want",
      value: "Schools, suburban convenience, and a strong expat-oriented neighbourhood rhythm",
    },
    {
      label: "Regional advantage",
      value: "Direct connection to the IN Amsterdam newcomer ecosystem for eligible internationals",
    },
  ],

  cityOverview: {
    heading: "Why Expats Choose Amstelveen",
    paragraphs: [
      "Amstelveen is one of the most established expat-oriented places in the Amsterdam Area. Many internationals pick it when they want quick access to Amsterdam, Schiphol, or regional business hubs — but prefer greener streets, family-sized housing options, and a more residential daily rhythm than the city centre.",
      "International schools and an active international community are part of the draw, alongside practical newcomer infrastructure: Amstelveen is part of the IN Amsterdam municipal partnership, so eligible newcomers may use IN Amsterdam for residence-permit, municipal registration, and BSN-related support alongside Gemeente Amstelveen’s own first-registration guidance. It is a practical choice, not a secret bargain — housing still needs planning and honest budgeting.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Amstelveen",
    paragraphs: [
      "Daily life tends to feel suburban and organised: neighbourhoods with trees and parks, shopping centres and local high streets, and plenty of families on bikes. You are close to Amsterdam’s scale when you want museums or nightlife, but your home base is calmer — many people treat that separation as the point.",
      "English is common in international-school circles and many workplaces tied to the region; Dutch still matters for deeper community integration. If you crave canal-centre spontaneity every evening, you may visit Amsterdam often — or question whether a more urban postcode suits you better.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Amstelveen",
    reasons: [
      {
        title: "Family-friendly lifestyle",
        explanation:
          "Space, parks, and a residential layout appeal to parents who want room to breathe while staying inside the Amsterdam metropolitan region.",
        whoItSuits: "Families with children, couples planning ahead",
      },
      {
        title: "International schools",
        explanation:
          "Major options such as The International School of Amsterdam and Amstelland International School are part of why school-focused families shortlist the area — always confirm admissions, zones, and waitlists directly with each school.",
        whoItSuits: "Families prioritising international education",
      },
      {
        title: "Amsterdam-area access",
        explanation:
          "Many residents work in Amsterdam, at Schiphol-related employers, or in wider Randstad hubs while keeping a non-central home base.",
        whoItSuits: "Commuters and hybrid workers who test routes before leasing",
      },
      {
        title: "IN Amsterdam newcomer support",
        explanation:
          "As an Amsterdam Area partner municipality, Amstelveen sits in the ecosystem where IN Amsterdam helps eligible internationals with formalities such as registration and BSN support — check eligibility and booking on their live pages.",
        whoItSuits: "EU movers, highly skilled migrants, and other eligible newcomers",
      },
      {
        title: "Calmer residential atmosphere",
        explanation:
          "Less dense and less tourist-heavy than central Amsterdam; stronger emphasis on neighbourhood structure and everyday livability.",
        whoItSuits: "People who want lower-intensity city living",
      },
      {
        title: "Relocation-provider presence",
        explanation:
          "The public I amsterdam partner list includes Amsterdam Area providers (for example Expat2Holland, with a profile noting an Amstelveen base) alongside other relocation and moving partners — compare scope and fees yourself.",
        whoItSuits: "Newcomers who want agency-style or bundled support",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers (Amsterdam area)",
    companiesCount: getCityStats("amstelveen")?.companies ?? null,
    jobsCount: getCityStats("amstelveen")?.jobs ?? null,
    sourceLabel: getCityStats("amstelveen")?.sourceLabel,
    sourceHref: getCityStats("amstelveen")?.sourceHref,
    industries: getCityStats("amstelveen")?.industries ?? [],
    majorEmployers: getCityStats("amstelveen")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Amstelveen Is Best For",
    profiles: [
      "International family prioritising schools and residential stability in the Amsterdam Area",
      "Amsterdam-area professional who prefers a suburban home base to central Amsterdam",
      "Expat comparing Haarlem, Amstelveen, or other suburbs for commute and school fit",
      "Couple wanting more space and quieter evenings with city access on demand",
      "Newcomer who will use IN Amsterdam and gemeente guidance for first registration in Amstelveen",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Amstelveen is not central Amsterdam: you trade historic-centre intensity, spontaneous nightlife, and maximum urban buzz for residential calm. Haarlem offers a different flavour (historic city core); Utrecht or Rotterdam change the commute and lifestyle equation entirely — test visits before you commit.",
      "Housing in the Amsterdam Area remains competitive. Amstelveen is sought-after for many of the same reasons you like it; do not assume it is cheap or effortless. Use platforms, rental agencies, MVA Certified Expat Broker-style support via I amsterdam’s partner network, and relocation services when you need help — and always confirm BRP registration eligibility for any address.",
      "If you want a university-town or policy-city identity, Leiden, Delft, or The Hague may fit better. Amstelveen is primarily a liveable Amsterdam Area municipality with strong family-international credentials rather than a standalone global city brand.",
    ],
  },

  cityComparison: {
    heading: "How Amstelveen Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains why Amstelveen appears on expat shortlists, how first registration works when your address is in Amstelveen (including the gemeente’s rule-of-thumb that first-time registration applies when you will live in the Netherlands for at least four months in the next six months), and how IN Amsterdam fits into the Amsterdam Area newcomer journey for eligible cases.",
      "We link to our Netherlands-wide guides for insurance, banking, and documents, and to our services directory for housing, relocation, visas, and legal help. Example providers come from I amsterdam’s public partner ecosystem — we do not rank or endorse them.",
    ],
    links: [
      { label: "Compare Dutch cities hub", href: "/netherlands/cities/" },
      { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services", href: "/netherlands/services/" },
      { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
      { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
      { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
      { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
      { label: "Moving to Leiden", href: "/netherlands/leiden/" },
      { label: "Moving to Delft", href: "/netherlands/delft/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Amstelveen",
    body: [
      "Gemeente Amstelveen publishes official guidance for first registration in the Netherlands when you will have an address in Amstelveen. In line with municipal framing, first-time registration is relevant when you expect to live in the Netherlands for at least four months in the next six months — always confirm the latest wording, appointments, and document list on their live pages.",
      "Amstelveen is part of the IN Amsterdam municipal partnership / Amsterdam Area newcomer ecosystem. IN Amsterdam supports many international newcomers with residence permits, municipal registration, and BSN-related steps for eligible situations — it works alongside (not instead of) your gemeente’s requirements.",
      "After you register, plan DigiD, Dutch banking, and mandatory basic health insurance when it applies. Sequence these early if payroll, rent, or schools depend on them.",
    ],
    steps: [
      "Read Gemeente Amstelveen’s first-registration pages and gather ID, housing proof, and civil documents per their checklist.",
      "Check whether IN Amsterdam has an accelerated or combined route for your nationality and permit situation.",
      "Book municipal appointments; complete BSN issuance when applicable.",
      "Apply for DigiD, open a Dutch bank account, and arrange health insurance within national rules for your case.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address acceptable to Gemeente Amstelveen",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates if officials request them",
      "Sworn translations or legalizations only when asked",
    ],
    officialSourceLinks: [
      {
        label: "Gemeente Amstelveen – first registration",
        url: "https://www.amstelveen.nl/voor-het-eerst-inschrijven-nederland",
      },
      {
        label: "IN Amsterdam – services for newcomers",
        url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/how-in-amsterdam-helps-international-newcomers/in-amsterdam-services-for-international-newcomers",
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
    heading: "BSN and DigiD After Settling in Amstelveen",
    body: [
      "Your BSN is tied to successful municipal registration on a qualifying Amstelveen address. Eligible newcomers may also interact with IN Amsterdam for parts of the Amsterdam Area formalities journey — keep gemeente and IN Amsterdam instructions aligned.",
      "DigiD follows national rules: apply after BSN and registered address, then activate with the letter by post.",
    ],
    digidRequirements: ["BSN", "Registered Dutch address", "Mobile phone for application"],
    examples: ["Municipality portals", "Health insurer portals", "Belastingdienst", "Employer onboarding"],
    plannedPageLinks: [
      { label: "BSN registration (Netherlands guide)", href: "/netherlands/bsn-registration/" },
      { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance When You Live in Amstelveen",
    body: [
      "Dutch basic insurance rules are national. If you must hold a basisverzekering, arrange it within the official window for your situation.",
      "Families and cross-border cases may have extra questions — use Government.nl and our guide rather than assuming exemption.",
    ],
    advice: [
      "Compare premium and eigen risico once obligation is clear.",
      "Browse insurers via our services directory on your own terms.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Amstelveen",
    body: [
      "Most households want a Dutch account for salary, rent, and iDEAL. Requirements typically include ID, often BSN, and proof of address — timing varies by bank.",
      "Amstelveen is well served by Randstad banking options; choose based on English support, fees, and branch vs digital preference.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies)", "Dutch address proof", "Permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Amstelveen for Expats",
    body: [
      "Many searches start from “Amsterdam, but not the centre.” Amstelveen competes with other Amsterdam Area municipalities for family-friendly stock — plan early, prepare landlord packs, and use housing platforms, rental agencies, or relocation services when you want assisted search.",
      "I amsterdam describes MVA Certified Expat Brokers as a partner network focused on the Amsterdam Area rental market — useful context when comparing agency-style help. Example relocation providers such as Expat2Holland appear on I amsterdam’s partner list (with an Amstelveen-related profile) alongside others — verify coverage, fees, and contracts yourself.",
      "What to budget for: rent and deposit, possible school fees or deposits, commuting, bike or car costs, bank and insurance setup, and document costs if officials require translations. Exact figures vary — build a buffer rather than assuming the Area is affordable by default.",
    ],
    costCards: [
      { label: "Housing", value: "Amsterdam Area competition", note: "Family homes in demand", disclaimer: "Varies by segment" },
      { label: "Schools", value: "Fees / deposits", note: "Confirm per institution", disclaimer: "Case-by-case" },
      { label: "Transport", value: "Bike + OV", note: "Amsterdam / Schiphol / region", disclaimer: "Depends on workplace" },
      { label: "Bank & insurance", value: "National market", note: "Account fees; mandatory basic insurance if applicable", disclaimer: "Varies" },
      { label: "Documents", value: "Translation / legalisation", note: "When gemeente or IND requires it", disclaimer: "Origin-dependent" },
    ],
    neighborhoodsNote:
      "Visit candidate areas at weekday and weekend times; check school run traffic, bike routes to tram or bus, and proximity to the international schools you are considering.",
    warning:
      "Do not pay large deposits until landlord, contract, and BRP registration eligibility are clear.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Amstelveen and the Amsterdam Area",
    body: [
      "Cycling stays central for school runs and local errands. Public transport links Amstelveen into Amsterdam and the wider network; many commuters combine bike plus tram or bus, or drive for part of the journey — your optimal mix depends on office location and hours.",
      "If Schiphol or west Amsterdam matters for work, validate door-to-door time in rush hour before you sign a long lease.",
    ],
    goodToKnow: [
      "Test peak-time commuting before you fix housing — maps alone mislead.",
      "School placement and commute direction should be decided together for families.",
      "Parking rules differ from central Amsterdam; check your building and street if you rely on a car.",
    ],
  },

  servicesIntro:
    "Below are our live service hub links, IN Amsterdam / I amsterdam channels, school profiles on I amsterdam, and example partners from the public I amsterdam partner list (including Expat2Holland, Jimble, Packimpex, and MVA Certified Expat Brokers). We do not rank or endorse providers — compare contracts and pricing yourself.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Amstelveen",

  first30Days: {
    heading: "Your First 30 Days in Amstelveen",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration; read gemeente first-registration guidance.",
          "Book IN Amsterdam or gemeente steps if applicable; map school visits if you have children.",
          "Set up bikes, OV, groceries, and local routines.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule municipal registration; track BSN.",
          "Start DigiD when eligible; watch for activation post.",
          "Open a Dutch bank account if salary or rent requires it.",
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
          "Finish DigiD activation; register with a huisarts once insured.",
          "Close permit or tax follow-ups; explore community and IN Amsterdam orientation resources if useful.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Amstelveen Scenarios",
  exampleScenariosIntro:
    "Illustrative paths — always confirm permits, housing, schools, and employment facts for your case.",

  exampleScenarios: [
    {
      title: "Family relocating for an Amsterdam-area role",
      summary: "You want schools and space; Amstelveen is on the shortlist with Haarlem or other suburbs.",
      needsFirst: ["School admissions reality", "Commute test", "Housing alerts"],
      documents: ["Work contract", "ID", "Rental paperwork", "School documents as required"],
      timing: "Parallel school and housing timelines; register on a valid address.",
      mistakes: ["Fixing housing before school waitlists are clear", "Ignoring peak commute"],
    },
    {
      title: "Choosing Amstelveen over Amsterdam for lifestyle",
      summary: "You accept more suburb, less canal-core buzz, in return for green space and family rhythm.",
      needsFirst: ["Honest nightlife / culture audit", "Budget for occasional city trips", "Neighbourhood visits"],
      documents: ["Standard rental application pack"],
      timing: "Insure when national rules require it.",
      mistakes: ["Expecting Amsterdam intensity locally every night"],
    },
    {
      title: "Professional wanting a calmer base with city access",
      summary: "Hybrid or Amsterdam office job; you prioritise quiet evenings and residential comfort.",
      needsFirst: ["Office location vs station / tram", "OV strategy", "Listing alerts"],
      documents: ["ID", "Permit if needed", "Address proof"],
      timing: "BSN before blocking payroll.",
      mistakes: ["Signing far from realistic transport for your hours"],
    },
    {
      title: "Newcomer using IN Amsterdam + gemeente for registration",
      summary: "You qualify for IN Amsterdam support and have an Amstelveen address for BRP.",
      needsFirst: ["Eligibility check on IN Amsterdam site", "Gemeente appointment", "Document bundle"],
      documents: ["Passport", "Housing proof", "Permits as applicable"],
      timing: "Follow both channels so steps do not contradict.",
      mistakes: ["Assuming IN Amsterdam replaces all gemeente tasks"],
    },
    {
      title: "Couple deciding between Haarlem and Amstelveen",
      summary: "Haarlem offers a historic urban core; Amstelveen leans more suburban-international-family.",
      needsFirst: ["Evening visits in both", "Commute test", "Housing listing comparison"],
      documents: ["Same core documents either municipality"],
      timing: "Decide after lifestyle tests, not brochures alone.",
      mistakes: ["Choosing on photos without rush-hour reality"],
    },
    {
      title: "Family comparing Amstelveen and The Hague",
      summary: "The Hague offers institutions and coast; Amstelveen offers Amsterdam Area job alignment.",
      needsFirst: ["Employer anchor city", "School options in both", "Partner commute"],
      documents: ["Varies by route"],
      timing: "Align housing with the city that wins on jobs + schools.",
      mistakes: ["Ignoring that they are different metro systems psychologically and practically"],
    },
  ],

  commonMistakes: [
    {
      mistake: "Assuming Amsterdam Area suburbs automatically mean easy or cheap housing",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      mistake: "Skipping Gemeente Amstelveen guidance and relying only on chat groups",
      internalLink: { label: "Municipality registration guide", href: "/netherlands/municipality-registration-netherlands/" },
    },
    {
      mistake: "Ignoring IN Amsterdam when your route may qualify for formalities support",
      internalLink: { label: "Moving to Amsterdam (context)", href: "/netherlands/amsterdam/" },
    },
    {
      mistake: "Delaying Dutch health insurance when you are in the mandatory bucket",
      internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    },
    { mistake: "Signing housing without confirming BRP / registration eligibility" },
    {
      mistake: "Choosing on international-school reputation without confirming availability for your start year",
      internalLink: { label: "Compare cities", href: "/netherlands/cities/" },
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
      q: "Is Amstelveen a good place for expats?",
      a: "Many expats choose Amstelveen for Amsterdam-area jobs, international schools, and a calmer residential environment. It suits families and professionals who want suburban livability with city access — less so if you want maximum historic-centre buzz every day.",
    },
    {
      q: "How does registration work in Amstelveen?",
      a: "Gemeente Amstelveen handles first registration when you live at an Amstelveen address, including the rule-of-thumb that first-time registration applies if you will stay at least four months in the next six months. IN Amsterdam may support eligible internationals with related formalities in the Amsterdam Area — confirm both official sources for your situation.",
    },
    {
      q: "Does IN Amsterdam apply to Amstelveen?",
      a: "Yes — Amstelveen is part of the IN Amsterdam municipal partnership. Services depend on your nationality, permit route, and eligibility; read IN Amsterdam and I amsterdam rather than assuming a single process.",
    },
    {
      q: "Which international schools are associated with the area?",
      a: "Families often consider The International School of Amsterdam and Amstelland International School. I amsterdam publishes education-provider profiles you can use as a starting point — always confirm admissions and placement with each school directly.",
    },
    {
      q: "Is Amstelveen cheaper than Amsterdam?",
      a: "Do not assume it is always cheaper or easy. Strong demand from internationals and families can still make the market competitive. Research listing by listing and budget seriously.",
    },
    {
      q: "Do I need Dutch health insurance if I live in Amstelveen?",
      a: "Rules are national. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our health insurance guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Gemeente Amstelveen, IN Amsterdam / I amsterdam, school profiles, and partner-directory references. Confirm current requirements on each site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Amstelveen",

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
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Haarlem", href: "/netherlands/haarlem/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "Leiden", href: "/netherlands/leiden/" },
        { label: "Delft", href: "/netherlands/delft/" },
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
    { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
    { label: "Moving to Haarlem", href: "/netherlands/haarlem/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
  ],
};
