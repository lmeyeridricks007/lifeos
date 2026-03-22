/**
 * Rotterdam city hub – page data.
 * Reusable structure for /netherlands/rotterdam/ and future programmatic city pages.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality / registration",
    label: "First registration in the Netherlands (Rotterdam)",
    url: "https://www.rotterdam.nl/en/first-registration-in-the-netherlands",
  },
  {
    category: "Municipality / registration",
    label: "Verhuizing doorgeven (Moving / address change)",
    url: "https://www.rotterdam.nl/verhuizing-doorgeven",
  },
  {
    category: "Newcomer support",
    label: "Rotterdam International Center",
    url: "https://www.rotterdam.nl/en/rotterdam-international-center",
  },
  {
    category: "Newcomer support",
    label: "Rotterdam Expat Centre – Immigration",
    url: "https://rotterdamexpatcentre.nl/expats/formalities/immigration/",
  },
  {
    category: "Newcomer support",
    label: "Rotterdam Expat Centre – BSN / Citizen Service Number",
    url: "https://rotterdamexpatcentre.nl/expats/formalities/bsn-citizen-service-number/",
  },
  {
    category: "DigiD",
    label: "Apply for DigiD",
    url: "https://www.digid.nl/en/apply-and-activate/apply-digid",
  },
  {
    category: "DigiD",
    label: "Government.nl – DigiD applications",
    url: "https://www.government.nl/topics/online-access-to-public-services-european-economic-area-eidas/digid/digid-applications-from-the-netherlands",
  },
  {
    category: "Health insurance",
    label: "When do I need health insurance if I come to live in the Netherlands?",
    url: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands",
  },
  {
    category: "Health insurance",
    label: "Health insurance and residence permit",
    url: "https://www.government.nl/topics/health-insurance/health-insurance-and-residence-permit",
  },
  {
    category: "General moving to NL",
    label: "What do I need to arrange if I'm moving to the Netherlands?",
    url: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/what-do-i-need-to-arrange-if-i'm-moving-to-the-netherlands",
  },
  {
    category: "Rotterdam public transport",
    label: "RET – Subscriptions",
    url: "https://www.ret.nl/en/home/travel-products/subscriptions.html",
  },
  {
    category: "Rotterdam public transport",
    label: "RET – Products and fares",
    url: "https://www.ret.nl/en/home/travel-products/products-and-fares.html?cHash=3abe3750a397d36520e21411ee2abd17&tx_retproducts_products%5BselectedCategory%5D=11",
  },
  {
    category: "Municipality / documents",
    label: "Buitenlandse documenten registreren (Registering foreign documents)",
    url: "https://www.rotterdam.nl/buitenlandse-documenten-registreren",
  },
];

export const rotterdamCityPage: CityHubPageData = {
  slug: "rotterdam",
  country: "netherlands",
  name: "Rotterdam",
  path: "/netherlands/rotterdam/",

  seo: {
    title: "Moving to Rotterdam as an Expat: Registration, BSN, Banking & Insurance",
    description:
      "A practical expat guide to moving to Rotterdam, including registration, BSN, DigiD, banking, health insurance, housing, costs, transport, and local support.",
    keywords: [
      "moving to rotterdam expat",
      "living in rotterdam expat",
      "rotterdam expat guide",
      "jobs in rotterdam for expats",
      "cost of living rotterdam",
      "moving to rotterdam expat",
      "move to rotterdam guide",
      "living in rotterdam as an expat",
      "register in rotterdam expat",
      "rotterdam bsn registration",
      "rotterdam expat setup",
      "health insurance rotterdam expat",
      "open bank account rotterdam expat",
      "rotterdam municipality registration",
      "moving from abroad rotterdam",
      "digid rotterdam",
      "rotterdam international center",
      "cost of living rotterdam expat",
      "rent in rotterdam expat",
      "rotterdam registration appointment",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Rotterdam as an Expat",
    subtitle:
      "A practical guide to registration, BSN, DigiD, banking, health insurance, housing, transport, and settling into life in Rotterdam.",
    image: {
      src: "/images/heroes/rotterdam-expat-relocation-hero.png",
      alt: "Scenic hero image for Rotterdam expat guide: A person with a backpack and bicycle overlooks the modern Rotterdam skyline and iconic Erasmus Bridge during golden hour, while a passport, relocation documents, map, and smartphone for planning are arranged on a table in the foreground.",
      imagePrompt:
        "Cinematic editorial photo of an international professional relocating to Rotterdam, seated at a clean modern desk beside a large window, laptop showing a relocation checklist, passport and official papers neatly arranged, soft natural daylight, blurred Rotterdam skyline or harbour in the background, premium lifestyle magazine aesthetic, calm administrative atmosphere, 16:9 wide hero banner.",
    },
    ctas: [
      {
        label: "Start Your Netherlands Setup Checklist",
        href: "/netherlands/moving-checklist-netherlands/",
        primary: true,
      },
      {
        label: "Read Municipality Registration Guide",
        href: "/netherlands/municipality-registration-netherlands/",
        primary: false,
      },
    ],
  },

  tocItems: [
    { id: "living-in-city", label: "Living in Rotterdam" },
    { id: "why-expats-choose", label: "Why Expats Choose Rotterdam" },
    { id: "jobs-ecosystem", label: "Jobs & Companies" },
    { id: "overview", label: "Overview" },
    { id: "register-rotterdam", label: "Register in Rotterdam" },
    { id: "bsn-digid", label: "BSN + DigiD" },
    { id: "health-insurance", label: "Health Insurance" },
    { id: "banking", label: "Banking" },
    { id: "housing-costs", label: "Housing & Cost of Living" },
    { id: "transport", label: "Transport" },
    { id: "services-expats", label: "Services for Expats" },
    { id: "first-30-days", label: "First 30 Days" },
    { id: "comparing-cities", label: "Comparing Dutch Cities" },
    { id: "who-moves-here", label: "Who Moves to Rotterdam" },
    { id: "example-scenarios", label: "Example Scenarios" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "tools", label: "Useful Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
    { id: "other-cities", label: "Other Cities" },
  ],

  cityOverview: {
    heading: "Living in Rotterdam as an Expat",
    paragraphs: [
      "Rotterdam is known for modern architecture, a strong logistics and port economy, and international trade. The city offers a different vibe from Amsterdam: more contemporary, often more space for your budget, and a focus on engineering and maritime sectors.",
      "Internationals choose Rotterdam for career opportunities in logistics, engineering, and trade, for a slightly lower cost of living than the capital, and for an urban lifestyle with good transport links. The city suits professionals who prefer a less tourist-heavy, more business-oriented environment.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Choose Rotterdam",
    reasons: [
      { title: "Engineering and logistics jobs", explanation: "Major port, maritime sector, and engineering firms; many roles for technical and operations professionals.", whoItSuits: "Engineers and logistics professionals" },
      { title: "More modern housing", explanation: "Post-war rebuild and ongoing development; often more square metre for your budget than in Amsterdam.", whoItSuits: "Families and those prioritising space" },
      { title: "Slightly lower rent than Amsterdam", explanation: "Generally more affordable rental market while still very international and well connected.", whoItSuits: "Budget-conscious professionals" },
      { title: "International port economy", explanation: "Global trade, shipping, and logistics create a diverse business environment and expat community.", whoItSuits: "Trade and maritime professionals" },
      { title: "Rotterdam International Center", explanation: "Official support for international newcomers and highly skilled migrants; helps with settling in.", whoItSuits: "Newcomers and HSM" },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and Companies in Rotterdam",
    companiesCount: getCityStats("rotterdam")?.companies ?? null,
    jobsCount: getCityStats("rotterdam")?.jobs ?? null,
    sourceLabel: getCityStats("rotterdam")?.sourceLabel,
    sourceHref: getCityStats("rotterdam")?.sourceHref,
    industries: getCityStats("rotterdam")?.industries ?? [],
    majorEmployers: getCityStats("rotterdam")?.majorEmployers ?? [],
  },

  cityComparison: cityComparisonSection,

  whoMovesHere: {
    heading: "Who Typically Moves to Rotterdam",
    profiles: [
      "Engineers and technical professionals",
      "Architects and urban planners",
      "Maritime and port professionals",
      "Logistics and supply chain experts",
      "International trade and operations staff",
    ],
  },

  quickFacts: [
    {
      label: "Best for",
      value: "International professionals, students, highly skilled migrants, families",
    },
    {
      label: "Registration",
      value: "Required if staying more than 4 months; first registration in person with the municipality to get your BSN",
    },
    {
      label: "BSN",
      value: "Received through municipal registration; needed for work, bank account, healthcare, and benefits",
    },
    {
      label: "DigiD",
      value: "Apply after BSN and Dutch address; activation letter within 3 working days; activate within 21 days",
    },
    {
      label: "Health insurance",
      value: "Generally required when you live or work in the Netherlands; usually within 4 months; from permit date if you have a residence permit",
    },
    {
      label: "Transport",
      value: "RET for metro, tram and bus; monthly and annual subscriptions; many expats combine cycling with RET",
    },
  ],

  overview: {
    paragraphs: [
      "Rotterdam is a major hub for international newcomers to the Netherlands. Whether you are relocating for work, study, family, or as a highly skilled migrant, the city offers a clear municipal process and dedicated support through the Rotterdam International Center and Rotterdam Expat Centre.",
      "This page summarises Rotterdam-specific setup: first registration, BSN, DigiD, health insurance, banking, housing, and transport. For deeper detail on each topic, use the linked national guides.",
      "Your practical first steps are usually: register with the municipality (in person if you do not yet have a BSN), receive your BSN, apply for DigiD, arrange health insurance where required, open a bank account, and set up transport. If you are a highly skilled migrant, your employer often arranges your registration; the Rotterdam Expat Centre and Rotterdam International Center can provide more information.",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
    ],
  },

  registration: {
    heading: "Registering with the Rotterdam Municipality",
    body: [
      "If you are staying in the Netherlands for longer than 4 months and do not yet have a BSN, you must register in person in the city where you will live. In Rotterdam this is done via first registration with the municipality. Registration leads to entry in the Personal Records Database and to receiving your BSN. The municipality notes that the BSN is needed for work, opening a bank account, healthcare access, and benefits.",
      "If you are a highly skilled migrant, Rotterdam states that your employer arranges your registration. The official city page points you to the Rotterdam Expat Centre / Rotterdam International Center for more information.",
      "If you are already living in the Netherlands and moving to Rotterdam, you can report your move up to 4 weeks before the moving date. Rotterdam places the new address in the system on the moving date.",
    ],
    steps: [
      "Check whether you need first registration (from abroad, no BSN yet) or an address change (already in the Netherlands).",
      "Book an appointment for first registration with the municipality, or use the online process for moving within the Netherlands where applicable.",
      "Gather required documents: valid ID, proof of address, and any route-specific documents (e.g. residence permit, employment contract).",
      "Attend the appointment in person for first registration (all family members who are registering generally need to attend).",
      "Receive confirmation and your BSN (or instructions for collection).",
    ],
    checklist: [
      "Valid passport or ID",
      "Proof of address in Rotterdam",
      "Completed registration form (if applicable)",
      "Residence permit or visa (if non-EU)",
      "Birth certificate / marriage certificate (if required for your situation)",
      "Documents translated or legalized where required",
    ],
    officialSourceLinks: [
      { label: "First registration in the Netherlands (Rotterdam)", url: "https://www.rotterdam.nl/en/first-registration-in-the-netherlands" },
      { label: "Verhuizing doorgeven (Moving / address change)", url: "https://www.rotterdam.nl/verhuizing-doorgeven" },
    ],
    internalLinks: [
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
      { label: "Document legalization in the Netherlands", href: "/netherlands/document-legalization-netherlands/" },
      { label: "Apostille documents in the Netherlands", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  bsnDigid: {
    heading: "Getting Your BSN and DigiD in Rotterdam",
    body: [
      "Your BSN (Burgerservicenummer) is issued as part of municipal registration in Rotterdam. You need it for tax, health insurance, banking, and access to government services.",
      "DigiD is the Dutch government login. To apply for DigiD you must be registered in the BRP (Personal Records Database). You can apply once you have your BSN and a Dutch address. The activation letter is generally sent within 3 working days. You must activate DigiD within 21 days of receiving the letter. Many expats only realise later how often DigiD is needed—for health insurance portals, tax authority, municipality services, and healthcare admin—so applying early is practical.",
    ],
    digidRequirements: [
      "BSN (BRP registration)",
      "Registered Dutch address",
      "Mobile phone",
    ],
    examples: [
      "Logging in to your health insurer's portal",
      "Accessing the tax authority (Belastingdienst)",
      "Using municipality services online",
      "Healthcare and GP-related admin",
    ],
    plannedPageLinks: [
      { label: "BSN in the Netherlands", href: "/netherlands/bsn-netherlands/" },
      { label: "DigiD in the Netherlands", href: "/netherlands/digid-netherlands/" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance After Moving to Rotterdam",
    body: [
      "People who live or work in the Netherlands generally need Dutch basic health insurance. In relevant cases, this usually needs to be arranged within 4 months. If you have a residence permit, you are generally required to arrange health insurance effective from the date the permit comes into force.",
      "Compare providers, arrange cover soon after registration or when employment starts, and check whether you need supplementary insurance for things like physiotherapy or dental.",
    ],
    advice: [
      "Compare basic packages and optional supplementary cover.",
      "Arrange insurance quickly after registration or when your obligation starts.",
      "Check whether supplementary insurance is actually needed for your situation.",
    ],
    internalLink: {
      label: "Health insurance in the Netherlands",
      href: "/netherlands/health-insurance-netherlands/",
    },
  },

  banking: {
    heading: "Opening a Bank Account in Rotterdam",
    body: [
      "Expats often open a Dutch bank account early to receive salary, pay rent, set up health insurance, and use iDEAL. Requirements vary by bank; typically you will need ID, BSN (when requested), proof of address, and residence documents depending on your status. The municipality notes that the BSN is needed for opening a bank account.",
    ],
    typicalNeeds: [
      "Valid passport or ID",
      "BSN (often required; some banks allow providing it later)",
      "Proof of Dutch address",
      "Residence permit (if non-EU)",
    ],
    services: [],
    internalLink: {
      label: "Open a bank account in the Netherlands",
      href: "/netherlands/open-bank-account-netherlands/",
    },
  },

  housingCosts: {
    heading: "Housing and Cost of Living in Rotterdam",
    body: [
      "Rotterdam has a varied housing market. Rents and costs vary by neighbourhood, furnishing, contract type, and whether utilities are included. The figures below are indicative estimates for planning—not official or regulated fees.",
      "Neighbourhoods that expats often consider include the city centre, Kralingen, Noord, Feijenoord, and areas along the metro lines. Research commute times and RET links before committing. Be cautious of housing scams: avoid rushing into deposits without viewing or contract checks.",
    ],
    costCards: [
      { label: "Rent (1-bedroom, city)", value: "€1,000 – €1,800+", note: "Typical estimate; varies by area and contract", disclaimer: "Indicative" },
      { label: "Groceries (monthly)", value: "€250 – €400", note: "Single person", disclaimer: "Indicative" },
      { label: "Transport (monthly)", value: "From ~€40", note: "RET subscription; bike purchase separate", disclaimer: "Check RET for current prices" },
      { label: "Health insurance (basic)", value: "From ~€140/month", note: "Indicative", disclaimer: "Varies by provider" },
      { label: "Municipality / admin", value: "Varies", note: "Registration and permits; check official source", disclaimer: "Official fees apply" },
    ],
    neighborhoodsNote: "City centre, Kralingen, Noord, Feijenoord and metro-linked areas are often considered; check RET and commute.",
    warning: "Be wary of housing scams. Do not pay large deposits without viewing the property or verifying the contract and landlord.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Rotterdam",
    body: [
      "Local public transport in Rotterdam is primarily handled by RET (metro, tram, bus). Monthly and annual subscriptions are available. Many expats combine cycling with metro, tram and bus in Rotterdam.",
    ],
    goodToKnow: [
      "Get a bike only after you have somewhere secure to store it.",
      "Set up RET (OV-chipkaart or subscription) early; check RET for subscriptions and fares.",
      "Check commute time and RET links before finalising your housing choice.",
    ],
  },

  servicesIntro:
    "The Rotterdam International Center helps international newcomers get settled and supports highly skilled migrants; it can assist with immigration-related formalities in supported cases. Below are official and commercial services that can support your move; banks and insurers have their own requirements.",

  first30Days: {
    heading: "Your First 30 Days in Rotterdam",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Move in and secure your address.",
          "Register or confirm your first registration appointment with the municipality (or coordinate with employer / Rotterdam Expat Centre if you are a highly skilled migrant).",
          "Gather documents (ID, proof of address, any required translations or legalizations).",
          "Set up transport basics (OV-chipkaart or RET subscription; consider a bike once you have storage).",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Receive or confirm your BSN.",
          "Apply for DigiD (you will receive an activation letter by post, usually within 3 working days).",
          "Start the bank account process if not already done.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange health insurance if applicable.",
          "Activate DigiD within 21 days of receiving the letter.",
          "Update employer, school, or landlord with your BSN and address where needed.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finalise local admin (DigiD, bank account, insurance).",
          "Review taxes, 30% ruling, residence permit, or family admin if relevant.",
        ],
      },
    ],
    internalLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
      { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
    ],
  },

  exampleScenarios: [
    {
      title: "Highly skilled migrant with employer sponsorship",
      summary: "Your employer arranges your registration in Rotterdam. You still need to receive your BSN, apply for DigiD, and arrange health insurance and banking. The Rotterdam Expat Centre and Rotterdam International Center can provide information and support.",
      needsFirst: ["Registration (via employer)", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Employment contract", "Proof of address", "Residence permit when issued"],
      timing: "Follow employer and municipality guidance; health insurance and bank as soon as practicable.",
      mistakes: ["Assuming DigiD is instant", "Leaving health insurance to the last moment", "Not applying for DigiD early"],
    },
    {
      title: "EU citizen relocating for work",
      summary: "No visa required; focus on first registration with the municipality, BSN, DigiD, and then insurance and banking. The Rotterdam International Center can help international newcomers get settled.",
      needsFirst: ["First registration", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["EU passport or ID", "Proof of address", "Employment contract if applicable"],
      timing: "Register as soon as you have an address; arrange insurance within 4 months if required.",
      mistakes: ["Waiting too long to register", "Not applying for DigiD early"],
    },
    {
      title: "International student moving to Rotterdam",
      summary: "Your institution may provide guidance; you still need to register with the municipality, get your BSN, and often open a bank account. Health insurance rules can differ for students—check your situation.",
      needsFirst: ["First registration", "BSN", "Bank account", "Student insurance or exemption check"],
      documents: ["Passport", "Proof of enrolment", "Proof of address", "Residence permit if non-EU"],
      timing: "Register as soon as you have an address; sort insurance and bank in the first weeks.",
      mistakes: ["Skipping registration", "Assuming you don't need Dutch health insurance without checking"],
    },
    {
      title: "Couple or family relocating together",
      summary: "All family members who are moving usually need to attend first registration. Each adult will need BSN and DigiD; children may be registered in the same appointment.",
      needsFirst: ["Joint registration appointment", "BSNs for all", "DigiD for adults", "Health insurance", "Banking"],
      documents: ["Passports/IDs", "Proof of address", "Marriage/civil partnership or birth certificates if required", "Residence permits if applicable"],
      timing: "Book one appointment for the household; bring all required documents.",
      mistakes: ["Only one partner attending", "Missing translated or legalized documents for dependants"],
    },
  ],

  commonMistakes: [
    { mistake: "Waiting too long to register with the municipality", internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" } },
    { mistake: "Assuming DigiD is immediate (activation letter by post; you must activate within 21 days)" },
    { mistake: "Delaying health insurance when it is required", internalLink: { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" } },
    { mistake: "Transferring money late or opening banking too late", internalLink: { label: "Open bank account", href: "/netherlands/open-bank-account-netherlands/" } },
    {
      mistake: "Rushing into housing without checks or viewing",
      internalLink: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      mistake: "Not preparing translated, legalized, or apostilled documents when needed",
      internalLink: { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
    },
  ],

  tools: [
    { label: "Relocation Checklist", href: "/netherlands/moving-checklist-netherlands/", description: "Before, arrival, and first 90 days tasks", status: "live" },
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa processing and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
  ],

  faqs: [
    {
      q: "Do I need to register when moving to Rotterdam?",
      a: "Yes. If you are staying in the Netherlands for longer than 4 months and do not yet have a BSN, you must register in person in the city where you will live. In Rotterdam this is done via first registration with the municipality. If you are moving from elsewhere in the Netherlands to Rotterdam, you can report your move up to 4 weeks before the moving date; Rotterdam places the new address in the system on the moving date.",
    },
    {
      q: "Who arranges registration if I am a highly skilled migrant?",
      a: "Rotterdam states that if you are a highly skilled migrant, your employer arranges your registration. The official city page points you to the Rotterdam Expat Centre and Rotterdam International Center for more information.",
    },
    {
      q: "Do I get my BSN when I register in Rotterdam?",
      a: "Yes. First registration with the Rotterdam municipality leads to entry in the Personal Records Database and to receiving your BSN. The municipality notes that the BSN is needed for work, opening a bank account, healthcare access, and benefits.",
    },
    {
      q: "Can I apply for DigiD right after registering?",
      a: "You can apply once you are registered in the BRP and have your BSN and a Dutch address. You will need a mobile phone. The activation letter is generally sent within 3 working days and you must activate DigiD within 21 days.",
    },
    {
      q: "Do I need Dutch health insurance in Rotterdam?",
      a: "People who live or work in the Netherlands generally need Dutch basic health insurance. In relevant cases it usually needs to be arranged within 4 months. If you have a residence permit, you are generally required to arrange it from the date the permit comes into force.",
    },
    {
      q: "Can I open a Dutch bank account without a BSN?",
      a: "Some banks allow you to start the process or open an account and provide your BSN later. Requirements vary by bank; the municipality notes that the BSN is needed for opening a bank account. Check our national banking guide.",
    },
    {
      q: "What is the Rotterdam International Center?",
      a: "The Rotterdam International Center helps international newcomers get settled in Rotterdam. It supports highly skilled migrants and can assist with immigration-related formalities in supported cases.",
    },
    {
      q: "What documents should I prepare before moving?",
      a: "Typically: valid passport or ID, proof of address in Rotterdam, and any route-specific documents (e.g. residence permit, employment contract, birth or marriage certificate). Some documents may need translation or legalization—check the municipality and our document guides. Rotterdam has information on registering foreign documents.",
    },
    {
      q: "How do I get around Rotterdam?",
      a: "Local public transport is primarily handled by RET (metro, tram, bus). Monthly and annual subscriptions are available. Many expats combine cycling with RET for daily travel.",
    },
    {
      q: "What should I do in my first week after arrival?",
      a: "Register or confirm your first registration appointment (or coordinate with your employer if you are a highly skilled migrant), gather documents, set up transport basics (RET / OV-chipkaart), and start the process for BSN and DigiD. See the “First 30 days” section and the After arriving in the Netherlands guide.",
    },
  ],

  officialSources: OFFICIAL_SOURCES,

  relatedGuides: [
    {
      title: "Useful services for newcomers",
      links: [
        { label: "All services hub", href: "/netherlands/services/" },
        { label: "Banks", href: "/netherlands/services/banks/" },
        { label: "Health insurance", href: "/netherlands/services/health-insurance/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      ],
    },
    {
      title: "Essential Netherlands setup guides",
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      title: "Document preparation guides",
      links: [
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      ],
    },
    {
      title: "Related Rotterdam & Netherlands admin guides",
      links: [
        { label: "Amsterdam city hub", href: "/netherlands/amsterdam/" },
        { label: "First 30 days in the Netherlands", href: "/netherlands/first-30-days-netherlands/" },
        { label: "Moving checklist", href: "/netherlands/moving-checklist-netherlands/" },
        { label: "BSN (planned)", href: "/netherlands/bsn-netherlands/" },
        { label: "DigiD (planned)", href: "/netherlands/digid-netherlands/" },
        { label: "Residence permit (planned)", href: "/netherlands/residence-permit-netherlands/" },
        { label: "30% ruling (planned)", href: "/netherlands/30-percent-ruling-netherlands/" },
        { label: "Dutch taxes for expats (planned)", href: "/netherlands/dutch-taxes-expats/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Moving with family", href: "/netherlands/moving-to-netherlands-with-family/" },
      ],
    },
  ],

  cityLinks: [
    { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/", comingSoon: true },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
    { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
  ],
};
