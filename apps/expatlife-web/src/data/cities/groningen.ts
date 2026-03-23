/**
 * Groningen city hub – /netherlands/groningen/
 * Northern knowledge city: students, research, IWCN newcomer support, compact cycling-first urban life.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality of Groningen",
    label: "Moving to or within Groningen",
    url: "https://gemeente.groningen.nl/en/moving-to-or-within-groningen",
  },
  {
    category: "Municipality of Groningen",
    label: "Moving – municipal hub",
    url: "https://gemeente.groningen.nl/en/moving",
  },
  {
    category: "Municipality of Groningen",
    label: "Moving to the Netherlands (municipal guidance)",
    url: "https://gemeente.groningen.nl/en/moving-to-the-netherlands",
  },
  {
    category: "Municipality of Groningen",
    label: "Registration non-resident (RNI) – English",
    url: "https://gemeente.groningen.nl/en/registration-non-resident-rni",
  },
  {
    category: "Municipality of Groningen",
    label: "Student registration or deregistration",
    url: "https://gemeente.groningen.nl/student-registration-or-deregistration",
  },
  {
    category: "Municipality of Groningen",
    label: "Request a postal address",
    url: "https://gemeente.groningen.nl/en/request-a-postal-address",
  },
  {
    category: "Groningen – internationals",
    label: "Groningen.nl – Practical matters for internationals",
    url: "https://groningen.nl/internationals/living-in-groningen/practical-matters-2",
  },
  {
    category: "IWCN – newcomer support",
    label: "International Welcome Center North (IWCN)",
    url: "https://iwcn.nl/",
  },
  {
    category: "IWCN – newcomer support",
    label: "IWCN – Our services",
    url: "https://iwcn.nl/our-services/",
  },
  {
    category: "IWCN – newcomer support",
    label: "IWCN – Formalities services",
    url: "https://iwcn.nl/our-services/formalities-services/",
  },
  {
    category: "IWCN – newcomer support",
    label: "IWCN – Formalities services and requesting appointments",
    url: "https://iwcn.nl/formalities-services-and-requesting-appointments/",
  },
  {
    category: "IWCN – newcomer support",
    label: "IWCN – About us",
    url: "https://iwcn.nl/about-us/",
  },
  {
    category: "IWCN – newcomer support",
    label: "IWCN – Founders and supporters",
    url: "https://iwcn.nl/about-iwcn/founders-and-supporters/",
  },
  {
    category: "IWCN – housing & providers",
    label: "IWCN – Service providers directory",
    url: "https://iwcn.nl/service-providers/",
  },
  {
    category: "IWCN – housing & providers",
    label: "IWCN – Get help from housing service providers",
    url: "https://iwcn.nl/living/housing/finding-a-home/get-help-from-iwcn-housing-service-providers/",
  },
  {
    category: "IWCN – housing & providers",
    label: "IWCN – Real estate and relocation agents",
    url: "https://iwcn.nl/living/housing/finding-a-home/real-estate-and-relocation-agents/",
  },
  {
    category: "IWCN – housing & providers",
    label: "IWCN – Expat Mortgages B.V. (service provider page)",
    url: "https://iwcn.nl/service-providers/expat-mortgages-b-v/",
  },
  {
    category: "National relocation references",
    label: "Government.nl – Moving to the Netherlands (checklist themes)",
    url: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-i'm-moving-to-the-netherlands",
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
    category: "City data",
    label: "Groningen – facts and figures (Business.gov.nl)",
    url: "https://business.gov.nl/facts-and-figures/groningen/groningen/",
  },
];

export const groningenCityPage: CityHubPageData = {
  slug: "groningen",
  country: "netherlands",
  name: "Groningen",
  path: "/netherlands/groningen/",
  publish: true,
  publishDate: "2026-03-27",

  hubLayout: "amsterdam-area-alternative",
  earlyPracticalSections: true,

  seo: {
    title:
      "Moving to Groningen as an Expat | Living in Groningen, Housing, Lifestyle & Practical Setup",
    description:
      "Thinking about moving to Groningen? Explore why expats choose Groningen, what life is like, how housing and registration work, and which services can help you settle in.",
    keywords: [
      "moving to groningen as an expat",
      "groningen for expats",
      "living in groningen netherlands expat",
      "groningen netherlands expat guide",
      "should i live in groningen expat",
      "groningen vs amsterdam expat",
      "groningen student city expat",
      "best areas in groningen for expats",
      "family life in groningen expat",
      "housing in groningen for expats",
      "iwcn groningen",
      "municipality groningen registration english",
      "northern netherlands expat",
      "university of groningen international",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Groningen as an Expat",
    subtitle:
      "Discover why expats choose Groningen for its student-city energy, manageable scale, and northern Netherlands lifestyle — and whether it’s the right city for your move.",
    image: {
      src: "/images/heroes/groningen-expat-city-hero.png",
      alt: "Expat relocation documents, passport, and a phone with a first-week checklist on a café table beside a Groningen canal, with historic brick buildings, bicycles, and the Martinitoren in soft golden-hour light.",
      imagePrompt:
        "Editorial hero: foreground canal-side café table with open folder, passport, residence permit papers, smartphone checklist, coffee, map; background Groningen inner city, Martinitoren, cyclists, northern Dutch light, premium relocation magazine look.",
    },
    ctas: [
      { label: "Explore Groningen Services", href: "/netherlands/services/", primary: true },
      { label: "Compare Dutch Cities", href: "/netherlands/cities/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "groningen-at-a-glance", label: "Groningen at a Glance" },
    { id: "comparing-cities", label: "Compare cities" },
    { id: "living-in-city", label: "Why expats choose Groningen" },
    { id: "what-life-like", label: "Life in Groningen" },
    { id: "jobs-ecosystem", label: "Jobs & employers" },
    { id: "first-30-days", label: "First 30 days" },
    { id: "who-moves-here", label: "Who Groningen suits" },
    { id: "trade-offs", label: "Trade-offs" },
    { id: "register-groningen", label: "First administrative steps" },
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

  quickFactsHeading: "Groningen at a Glance",

  quickFacts: [
    { label: "Best for", value: "Students, researchers, knowledge workers, people open to life in the north" },
    { label: "Typical vibe", value: "Youthful, compact, energetic, cycling-first" },
    { label: "Strongest appeal", value: "Manageable city life with strong academic and international energy" },
    {
      label: "Trade-off to know",
      value: "Farther from the Randstad and a different job-market profile than Amsterdam-area cities",
    },
    { label: "Good fit if you want", value: "A smaller-city setup with strong daily livability and community feel" },
    { label: "Regional advantage", value: "Northern Netherlands newcomer ecosystem — IWCN plus municipal English guidance" },
  ],

  cityOverview: {
    heading: "Why Expats Choose Groningen",
    paragraphs: [
      "Groningen offers a different Dutch city experience from Amsterdam, Rotterdam, or The Hague: compact, strongly shaped by its university and research institutions, and unmistakably northern in character. Many internationals are drawn here when they want an English-friendly, globally connected environment without the scale and intensity of the largest western metros.",
      "It is especially relevant if you are studying, doing research, or building a career linked to knowledge institutions and regional employers — and when you are genuinely open to living outside the Randstad triangle. Groningen can feel energetic and social thanks to its student population, while still being easier to cross by bike than a spread-out global city.",
    ],
  },

  lifeInCity: {
    heading: "What It’s Like to Live in Groningen",
    paragraphs: [
      "Day-to-day life is built around short bike trips, a lively centre with cafés and cultural life, and a strong sense of local identity. You will find international residents and English in many workplaces and study settings, alongside Dutch as the everyday language of the wider region.",
      "Compared with Amsterdam or Rotterdam, Groningen is less metropolitan: fewer headquarters and late-night big-city layers, but for many newcomers that translates into a calmer rhythm, less sprawl, and a city that is easy to learn by cycling. Weekends might mean cultural events, markets, or trips further north or east — not assuming everyone commutes to the western Randstad.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Often Consider Groningen",
    reasons: [
      {
        title: "Student and research environment",
        explanation:
          "A major university city with a large student share shapes housing demand, social life, and international meetups — relevant for degree seekers, PhDs, and academic staff.",
        whoItSuits: "Students, researchers, university-linked internationals",
      },
      {
        title: "Manageable, livable scale",
        explanation:
          "Most daily needs sit within cycling distance; the centre feels walkable and human-scaled compared with spread-out capitals.",
        whoItSuits: "People who dislike mega-city sprawl",
      },
      {
        title: "Practical newcomer support (IWCN)",
        explanation:
          "IWCN acts as a one-stop shop for internationals and employers in the northern Netherlands, including formalities services aligned with permits, municipal registration, and BSN-related steps for eligible cases.",
        whoItSuits: "Newcomers who want structured guidance in the north",
      },
      {
        title: "Strong cycling culture",
        explanation:
          "Bikes dominate everyday movement; public transport supports longer trips, but many people plan life around pedal distance.",
        whoItSuits: "Cyclists and people who want a simple commute pattern",
      },
      {
        title: "Alternative to Randstad life",
        explanation:
          "You trade proximity to the western economic core for a distinct regional identity, often lower urban pressure, and a tight knowledge-city community — if your job or studies fit the location.",
        whoItSuits: "Remote-friendly workers, regional hires, students",
      },
      {
        title: "International without “capital city” intensity",
        explanation:
          "You can build an international social life and career path here, but the pace and skyline differ from Amsterdam — which is a feature for some movers and a limitation for others.",
        whoItSuits: "Those prioritising balance over maximum metro scale",
      },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and employers in Groningen",
    companiesCount: getCityStats("groningen")?.companies ?? null,
    jobsCount: getCityStats("groningen")?.jobs ?? null,
    sourceLabel: getCityStats("groningen")?.sourceLabel,
    sourceHref: getCityStats("groningen")?.sourceHref,
    industries: getCityStats("groningen")?.industries ?? [],
    majorEmployers: getCityStats("groningen")?.majorEmployers ?? [],
  },

  whoMovesHere: {
    heading: "Who Groningen Is Best For",
    profiles: [
      "International student enrolling at the university or hogeschool",
      "Researcher, PhD, or academic staff tied to Groningen institutions",
      "Young professional whose role or sector is anchored in the north or remote-friendly",
      "Expat who prefers a compact, bikeable city over a large global metro",
      "Newcomer who values IWCN-style formalities support alongside municipal registration",
      "Family or couple open to the north if schools, housing, and employer location align",
    ],
  },

  tradeOffs: {
    heading: "Trade-Offs to Consider",
    paragraphs: [
      "Job-market depth in some industries is thinner than in Amsterdam, Rotterdam, or The Hague. If your sector clusters in the Randstad, test realistic commuting or hybrid options before you commit — or confirm a local or remote contract that makes Groningen sustainable.",
      "Distance from the western corridor matters for personal networks, flights, and occasional meetings. Trains exist, but “popping to Amsterdam” is a deliberate trip, not a daily assumption for everyone.",
      "Housing still requires planning: student-heavy demand, seasonality around the academic year, and competition for well-located listings mean you should run a serious search with platforms, agencies, or relocation help — not assume an easy market.",
      "If you want maximum big-city international intensity, nightlife scale, or HQ density, Groningen may feel quieter than you hope. Utrecht’s national rail hub role, The Hague’s institutions cluster, or Amsterdam’s global scale may fit better — compare honestly with our city guides.",
    ],
  },

  cityComparison: {
    heading: "How Groningen Compares with Other Dutch Cities",
    ctaLabel: cityComparisonSection.ctaLabel,
    ctaHref: cityComparisonSection.ctaHref,
  },

  overview: {
    paragraphs: [
      "This guide explains what Groningen is like for expats, why people choose it over Randstad cities, and how to sequence practical setup: municipal registration and BSN, IWCN formalities where relevant, housing search, banking, and national health insurance rules.",
      "Use Gemeente Groningen’s English moving pages for local registration detail, IWCN for northern-Netherlands newcomer services, and our Netherlands-wide guides for depth on documents, insurance, and banking. The services section lists banks, housing platforms, rental agencies, and relocation providers you can compare on your own terms — we do not rank or endorse individual firms.",
    ],
    links: [
      { label: "Compare Dutch cities hub", href: "/netherlands/cities/" },
      { label: "Moving to the Netherlands (pillar)", href: "/netherlands/moving-to-the-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services", href: "/netherlands/services/" },
    ],
  },

  registration: {
    heading: "First Administrative Steps in Groningen",
    body: [
      "When you move to Groningen from abroad, municipal registration at your residential address is part of settling legally in the Netherlands. The Municipality of Groningen publishes English guidance for moving to or within the city and for arriving from outside the country — follow their current appointment rules and document lists.",
      "Issuing your BSN (burgerservicenummer) is tied to successful registration when you live in the Netherlands in a way that requires BRP registration. IWCN can help eligible internationals and employers coordinate practical matters such as residence permits, municipal registration, and BSN-related formalities in the northern Netherlands; it complements but does not replace the gemeente for local civil registration.",
      "Students may have specific registration or deregistration steps — check both the university’s guidance and the gemeente’s student pages so your address and civil status stay correct.",
    ],
    steps: [
      "Read Gemeente Groningen’s English pages for your scenario (moving from abroad vs within the Netherlands).",
      "If you may use IWCN, review formalities services and how to request appointments alongside gemeente requirements.",
      "Book municipal appointments and assemble ID, housing proof, and civil documents per the official checklist.",
      "After registration, plan BSN-dependent tasks: DigiD, banking, and health insurance using our national guides.",
    ],
    checklist: [
      "Valid passport or national ID",
      "Proof of address / rental or purchase documentation acceptable to the gemeente",
      "Residence permit or visa paperwork when applicable",
      "Birth or marriage certificates only if your situation requires them (confirm with official guidance)",
      "Sworn translations or legalizations when officials request them",
    ],
    officialSourceLinks: [
      { label: "Gemeente Groningen – Moving to or within Groningen", url: "https://gemeente.groningen.nl/en/moving-to-or-within-groningen" },
      { label: "IWCN – Formalities services", url: "https://iwcn.nl/our-services/formalities-services/" },
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
    heading: "BSN and DigiD After Settling in Groningen",
    body: [
      "Your BSN is issued in connection with municipal registration when you have a qualifying address in the Netherlands. In Groningen, timelines depend on gemeente appointments, your document bundle, and whether you use combined services such as IWCN formalities for eligible routes.",
      "DigiD is the national login for many government and insurer portals. Apply once you have a BSN and registered Dutch address, then complete activation using the letter-by-post flow. Sorting DigiD early reduces friction for taxes, healthcare, and online municipal tasks.",
    ],
    digidRequirements: ["BSN", "Registered Dutch address", "Mobile phone for application"],
    examples: ["Municipality portals", "Health insurer self-service", "Belastingdienst", "Some employer workflows"],
    plannedPageLinks: [
      { label: "BSN registration (Netherlands guide)", href: "/netherlands/bsn-registration/" },
      { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance When You Live in Groningen",
    body: [
      "Dutch basic health insurance rules are national. If you live or work in the Netherlands in a way that triggers mandatory cover, arrange a basisverzekering within the official timeframe for your situation.",
      "Students and cross-border cases can differ — start from Government.nl and our health insurance guide rather than assuming exemption.",
    ],
    advice: [
      "Compare insurers on premium and eigen risico once you know you must insure.",
      "Use our services directory to browse insurers; choose based on your own comparison.",
    ],
    internalLink: { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
  },

  banking: {
    heading: "Banking for Expats in Groningen",
    body: [
      "Most people want a Dutch current account for salary, rent, iDEAL, and direct debits. Banks typically ask for ID, often a BSN, proof of address, and sometimes permit paperwork — timing varies, so read our open-bank-account guide alongside each bank’s rules.",
      "Groningen has branch and digital options similar to other Dutch cities; choose based on English support, fees, and how fast you can onboard after registration.",
    ],
    typicalNeeds: ["Valid ID", "BSN (often required; timing varies by bank)", "Dutch address proof", "Residence permit when applicable"],
    services: [],
    internalLink: { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  },

  housingCosts: {
    heading: "Housing in Groningen for Expats",
    body: [
      "Housing in Groningen still rewards early planning: the student population and steady international inflow can make well-located rentals move quickly, especially around term starts. Use housing platforms for breadth, rental agencies when you want assisted search, and relocation services when you need bundled help.",
      "IWCN publishes housing guidance and links to service providers in the northern Netherlands — useful for understanding agency and relocation paths, not a substitute for reading your own contract and registration (inschrijving) rules.",
      "What to budget for beyond rent: cycling or public transport, bank and insurance setup costs, document translation or legalisation if officials require it, and deposits or fees tied to your housing route. Exact amounts vary widely by household and listing — build a cash buffer rather than relying on generic “cheap city” assumptions.",
    ],
    costCards: [
      { label: "Housing", value: "Plan early; competitive segments", note: "Students vs families differ; verify registration rules", disclaimer: "Varies by listing" },
      { label: "Daily transport", value: "Bike + local transit", note: "OV when you leave the city; no car required for many", disclaimer: "Depends on lifestyle" },
      { label: "Bank & insurance setup", value: "National rules", note: "Account fees; mandatory basic insurance if applicable", disclaimer: "Case-by-case" },
      { label: "Documents", value: "Translation / legalisation", note: "Only when required for gemeente or permits", disclaimer: "Country-of-origin dependent" },
      { label: "Student / young professional", value: "Deposit + furnishings", note: "Room vs studio vs shared flat changes pressure", disclaimer: "Illustrative categories" },
    ],
    neighborhoodsNote:
      "Explore areas at different times of day; check bike storage, distance to faculty or employer, and noise around nightlife corridors. International newcomers sometimes start closer to the centre and reassess after the first year.",
    warning:
      "Rental scams exist in tight markets. Do not pay large deposits before you are confident in the landlord, contract, and municipality registration eligibility.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Groningen",
    body: [
      "Cycling is the default for most daily trips; the flat terrain and compact layout make a bike the practical choice for study, work, and groceries. Public transport connects the city to the wider region and other Dutch cities when you need it.",
      "If you occasionally need the Randstad, plan around train journey time and ticket products — many people batch trips rather than assuming a daily western commute.",
    ],
    goodToKnow: [
      "Budget for a solid lock and maintenance; bike theft happens — use secure parking where possible.",
      "If you work outside the centre, test rain-season commutes before you fix a long-term neighbourhood choice.",
      "Car ownership is optional for many residents; parking and costs can push people toward bike-plus-OV instead.",
    ],
  },

  servicesIntro:
    "Below are service categories that link to our live hub pages, plus official newcomer channels (Gemeente Groningen, IWCN) and example entries from IWCN’s public service-provider ecosystem. We do not rank providers or imply endorsement — compare services, contracts, and pricing yourself.",

  servicesExpatsHeading: "Useful Services for Expats Moving to Groningen",

  first30Days: {
    heading: "Your First 30 Days in Groningen",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Confirm housing allows BRP registration if you need a BSN on a tight timeline.",
          "Read Gemeente Groningen moving pages; book appointments; check IWCN eligibility for formalities support.",
          "Get a bike or travel pass; map grocery, GP registration (later), and key routes.",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Complete or schedule municipal registration; track BSN issuance.",
          "Start DigiD when eligible; watch for the activation letter.",
          "Progress a Dutch bank account if salary or rent requires it.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange Dutch basic health insurance if you are in the mandatory bucket.",
          "Point employer, landlord, and utilities at IBAN and BSN as required.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finish DigiD activation; close gaps on tax, insurance, or permit follow-ups.",
          "Explore huisarts registration once insurance is active; join local communities or student associations if relevant.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },

  exampleScenariosHeading: "Common Expat Groningen Scenarios",
  exampleScenariosIntro:
    "Short sketches — always validate permits, employer location, housing, and study rules against your own situation.",

  exampleScenarios: [
    {
      title: "International student arriving for the academic year",
      summary: "You need a registrable address, BSN for a part-time job or banking, and a realistic housing timeline before term rush.",
      needsFirst: ["Housing that fits gemeente rules", "Student registration guidance", "Insurance status check"],
      documents: ["Passport", "Admission letter", "Housing contract acceptable to gemeente", "Visa or residence card if non-EU"],
      timing: "Line up registration appointments for soon after move-in; do not delay insurance if mandatory.",
      mistakes: ["Assuming every room sublet supports BRP registration", "Ignoring IWCN or gemeente student-specific notes"],
    },
    {
      title: "Researcher using northern-Netherlands support services",
      summary: "Your host institution points you to IWCN for formalities alongside gemeente registration.",
      needsFirst: ["Employer or host communication", "Appointment planning with IWCN and gemeente", "Housing near faculty or lab"],
      documents: ["Employment or hosting documentation", "ID", "Housing proof", "Permit paperwork if applicable"],
      timing: "Parallel-path housing and formalities; track BSN for payroll.",
      mistakes: ["Skipping gemeente steps because IWCN is involved — roles differ", "Late banking setup once salary starts"],
    },
    {
      title: "Young professional choosing Groningen over Amsterdam for lifestyle",
      summary: "You want a compact city and can work remotely or for a northern employer; you accept less Randstad density.",
      needsFirst: ["Employer location reality", "Tax and contract clarity", "Housing search across platforms and agencies"],
      documents: ["ID", "Employment contract", "Rental application pack"],
      timing: "Register as soon as you have a valid address; align insurance with your start date.",
      mistakes: ["Underestimating occasional Randstad travel time", "Expecting the same industry breadth as Amsterdam"],
    },
    {
      title: "Comparing Groningen with Utrecht or Eindhoven",
      summary: "You want a knowledge-city feel and are weighing central rail hub vs northern identity vs tech-industry Brainport.",
      needsFirst: ["Visit or trial stay", "Job or study anchor", "Housing alerts in each market"],
      documents: ["Same core rental documentation across cities"],
      timing: "Decide based on sector fit and commute or travel patterns, not photos alone.",
      mistakes: ["Choosing on rankings without testing your daily route", "Ignoring partner or family constraints"],
    },
    {
      title: "Newcomer needing municipal registration and BSN support",
      summary: "You qualify for IWCN formalities help and still must satisfy gemeente registration rules.",
      needsFirst: ["IWCN appointment process", "Gemeente checklist", "Registrable lease"],
      documents: ["Passport", "Permit if required", "Address proof chain"],
      timing: "Sequence appointments so you are not blocked on payroll or banking.",
      mistakes: ["Paying large deposits before registration eligibility is clear", "Delaying DigiD until a portal blocks you"],
    },
    {
      title: "Family testing whether the north fits",
      summary: "Schools, two careers, and travel to relatives elsewhere in NL or abroad need a honest stress-test.",
      needsFirst: ["School placement research", "Employer flexibility", "Housing size and neighbourhood safety checks"],
      documents: ["Civil documents if requested for children", "Proof of address"],
      timing: "Register all household members who require BRP registration.",
      mistakes: ["Only one adult owning the admin plan", "Assuming village-quiet everywhere — centre areas can be lively"],
    },
  ],

  commonMistakes: [
    { mistake: "Assuming Groningen housing is effortless because it is not Amsterdam", internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" } },
    { mistake: "Skipping gemeente English guidance and relying only on informal advice" },
    { mistake: "Ignoring IWCN when your employer or situation may qualify for formalities support" },
    { mistake: "Delaying Dutch health insurance when you are in the mandatory insurance bucket", internalLink: { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" } },
    { mistake: "Choosing the city without validating job-market or sector fit outside the Randstad" },
    { mistake: "Signing housing without confirming BRP / registration eligibility" },
  ],

  tools: [
    { label: "Relocation checklist", href: "/netherlands/moving-checklist-netherlands/", description: "Phased tasks for your move", status: "live" },
    { label: "Document readiness checker", href: "/netherlands/document-readiness-checker/", description: "See common document needs", status: "live" },
    { label: "Visa timeline estimator", href: "/netherlands/visa-timeline-estimator/", description: "Plan permit timing", status: "live" },
    { label: "Visa cost calculator", href: "/netherlands/visa-cost-calculator/", description: "Budget fees and moving costs", status: "live" },
  ],

  faqs: [
    {
      q: "Is Groningen a good city for expats?",
      a: "Many expats choose Groningen for its compact, bike-friendly scale, strong student and research environment, and international community — especially if their studies or job fit the north. It is quieter and less globally central than Amsterdam, so fit depends on your career and lifestyle priorities.",
    },
    {
      q: "What is IWCN and when does it matter?",
      a: "IWCN (International Welcome Center North) is a one-stop shop for internationals and companies in the northern Netherlands. It offers formalities services related to permits, municipal registration, and BSN-related steps for eligible clients. Always read IWCN’s current services and combine them with Gemeente Groningen’s own registration guidance.",
    },
    {
      q: "How do I register when I move to Groningen from abroad?",
      a: "Follow the Municipality of Groningen’s English pages for moving to or within the city. You typically need a valid address, identification, and supporting documents per their checklist; BSN issuance follows successful registration when applicable.",
    },
    {
      q: "Is Groningen cheaper than Amsterdam?",
      a: "Do not assume it is always cheap — housing can still be competitive, especially around the academic year. Treat rent and deposits as something to research listing by listing rather than expecting a guaranteed steep discount versus every Amsterdam neighbourhood.",
    },
    {
      q: "Is Groningen good for students?",
      a: "Yes, the city has a large student population and a strong university presence. Plan housing early, confirm registration rules for your accommodation type, and read both your institution’s guidance and the gemeente’s student registration information.",
    },
    {
      q: "Can I commute from Groningen to Amsterdam daily?",
      a: "Some people do, but it is a long-distance commute by Dutch standards. Test the real door-to-door time and cost before you structure your life around it; many residents prefer local or remote work instead.",
    },
    {
      q: "Where should I look for housing help?",
      a: "Use our housing platforms and rental agency directories for broad search and assisted options. IWCN also publishes housing guidance and links to regional service providers — compare providers yourself and read contracts carefully.",
    },
    {
      q: "Do I need Dutch health insurance in Groningen?",
      a: "Health insurance rules are national. If you must hold Dutch basic insurance, arrange it within the official timeframe — see Government.nl and our health insurance guide.",
    },
  ],

  officialSourcesHeading: "Official Sources and Useful References",
  officialSourcesIntro:
    "Municipality of Groningen English pages, IWCN newcomer and housing resources, and national references for DigiD and health insurance. Confirm the latest requirements on each official site.",

  officialSources: OFFICIAL_SOURCES,

  relatedGuidesSectionTitle: "Related Guides Before Moving to Groningen",

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
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
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
    { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
  ],
};
