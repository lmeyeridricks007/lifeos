/**
 * Utrecht city hub – page data.
 * Reusable structure for /netherlands/utrecht/ and future programmatic city pages.
 * Official facts and URLs per Utrecht municipality and government.nl sources.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality / registration",
    label: "Registration (City of Utrecht)",
    url: "https://www.utrecht.nl/city-of-utrecht/registration",
  },
  {
    category: "Municipality / registration",
    label: "Registering from abroad",
    url: "https://www.utrecht.nl/city-of-utrecht/registration/registering-from-abroad",
  },
  {
    category: "Municipality / registration",
    label: "Registration international students",
    url: "https://www.utrecht.nl/city-of-utrecht/registration/registration-international-students",
  },
  {
    category: "Municipality / registration",
    label: "How to make an appointment",
    url: "https://www.utrecht.nl/city-of-utrecht/how-to-make-an-appointment",
  },
  {
    category: "Municipality / registration",
    label: "Moving to Utrecht or moving within Utrecht",
    url: "https://www.utrecht.nl/city-of-utrecht/moving-to-utrecht-or-moving-within-utrecht/",
  },
  {
    category: "Municipality / registration",
    label: "Registration procedure for non-residents",
    url: "https://www.utrecht.nl/city-of-utrecht/registration/registration-procedure-for-non-residents-of-the-netherlands",
  },
  {
    category: "Municipality / registration",
    label: "Applying for a postal address",
    url: "https://www.utrecht.nl/city-of-utrecht/moving-to-utrecht-or-moving-within-utrecht/applying-for-a-postal-address",
  },
  {
    category: "Student / newcomer support",
    label: "Utrecht International Center (students)",
    url: "https://www.utrecht.nl/city-of-utrecht/registration/registration-international-students",
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
    category: "Utrecht public transport",
    label: "U-OV (buses and trams)",
    url: "https://www.u-ov.info/en/Home",
  },
];

export const utrechtCityPage: CityHubPageData = {
  slug: "utrecht",
  country: "netherlands",
  name: "Utrecht",
  path: "/netherlands/utrecht/",

  seo: {
    title: "Moving to Utrecht as an Expat: Registration, BSN, Banking & Insurance",
    description:
      "A practical expat guide to moving to Utrecht, including registration, BSN, DigiD, banking, health insurance, housing, costs, transport, and local support.",
    keywords: [
      "moving to utrecht expat",
      "living in utrecht expat",
      "utrecht expat guide",
      "jobs in utrecht for expats",
      "cost of living utrecht",
      "move to utrecht guide",
      "living in utrecht as an expat",
      "register in utrecht expat",
      "utrecht bsn registration",
      "utrecht expat setup",
      "health insurance utrecht expat",
      "open bank account utrecht expat",
      "utrecht municipality registration",
      "moving from abroad utrecht",
      "digid utrecht",
      "utrecht international center",
      "cost of living utrecht expat",
      "rent in utrecht expat",
      "utrecht registration appointment",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Utrecht as an Expat",
    subtitle:
      "A practical guide to registration, BSN, DigiD, banking, health insurance, housing, transport, and settling into life in Utrecht.",
    image: {
      src: "/images/heroes/utrecht-expat-relocation-hero-planning-scene.png",
      alt: "Cinematic editorial photo of an international professional planning their move to Utrecht. In the foreground, neatly organized relocation documents including 'Municipality Registration,' a passport, map, keys, and a coffee cup rest on a table. In the background, a person gazes across the historic Oudegracht canal with bicycles parked nearby, with Utrecht's iconic Dom Tower rising above the traditional Dutch canal houses under a warm, golden sunset. The image conveys calm, intelligent planning for expat life in Utrecht.",
    },
    ctas: [
      {
        label: "Start Your Utrecht Setup Checklist",
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
    { id: "overview", label: "Overview" },
    { id: "utrecht-at-a-glance", label: "Utrecht at a Glance" },
    { id: "comparing-cities", label: "Comparing Dutch Cities" },
    { id: "living-in-city", label: "Living in Utrecht" },
    { id: "jobs-ecosystem", label: "Jobs & Companies" },
    { id: "register-utrecht", label: "Register in Utrecht" },
    { id: "bsn-digid", label: "BSN + DigiD" },
    { id: "health-insurance", label: "Health Insurance" },
    { id: "banking", label: "Banking" },
    { id: "housing-costs", label: "Housing & Cost of Living" },
    { id: "transport", label: "Transport" },
    { id: "services-expats", label: "Services for Expats" },
    { id: "first-30-days", label: "First 30 Days" },
    { id: "who-moves-here", label: "Who Moves to Utrecht" },
    { id: "example-scenarios", label: "Example Scenarios" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "tools", label: "Useful Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
    { id: "other-cities", label: "Other Cities" },
  ],

  cityOverview: {
    heading: "Living in Utrecht as an Expat",
    paragraphs: [
      "Utrecht is the central hub of the Netherlands: a university city with a balanced lifestyle and excellent train links to Amsterdam, Rotterdam, and The Hague. Many internationals choose Utrecht for its mix of historic centre, knowledge economy, and manageable size.",
      "The city suits commuters who work in other Randstad cities, families, academics, and professionals in consulting, healthcare, and education. Housing is competitive but often slightly easier than Amsterdam; quality of life and connectivity are major draws.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Choose Utrecht",
    reasons: [
      { title: "Central Netherlands location", explanation: "National rail hub; fast links to Amsterdam, Rotterdam, and The Hague; ideal base for multi-city commuters.", whoItSuits: "Commuters and hybrid workers" },
      { title: "High quality of life", explanation: "Compact centre, canals, and green spaces; balanced pace without sacrificing connectivity.", whoItSuits: "Families and work-life balancers" },
      { title: "University ecosystem", explanation: "Universiteit Utrecht and research institutions; strong education and life-sciences sector.", whoItSuits: "Academics and students" },
      { title: "Short commute to Amsterdam", explanation: "Around 25 minutes by train to Amsterdam Central; many live in Utrecht and work in the capital.", whoItSuits: "Amsterdam workers seeking lower cost" },
      { title: "Utrecht International Center", explanation: "Support for international students and knowledge workers; registration and practical information.", whoItSuits: "Students and newcomers" },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and Companies in Utrecht",
    companiesCount: getCityStats("utrecht")?.companies ?? null,
    jobsCount: getCityStats("utrecht")?.jobs ?? null,
    sourceLabel: getCityStats("utrecht")?.sourceLabel,
    sourceHref: getCityStats("utrecht")?.sourceHref,
    industries: getCityStats("utrecht")?.industries ?? [],
    majorEmployers: getCityStats("utrecht")?.majorEmployers ?? [],
  },

  cityComparison: cityComparisonSection,

  whoMovesHere: {
    heading: "Who Typically Moves to Utrecht",
    profiles: [
      "Families seeking balance and good schools",
      "Consultants and professional services staff",
      "Academics and researchers",
      "Commuters to Amsterdam or other Randstad cities",
      "Students and young professionals",
    ],
  },

  quickFacts: [
    {
      label: "Best for",
      value: "Students, academics, professionals, families, commuters, international knowledge workers",
    },
    {
      label: "Registration",
      value: "Required if staying more than 4 months; appointment required within 5 days of arrival",
    },
    {
      label: "BSN",
      value: "Received through city registration (BRP processing can take up to 4 weeks)",
    },
    {
      label: "DigiD",
      value: "Can be applied for after registration; activation letter within 3 business days; activate within 21 days",
    },
    {
      label: "Health insurance",
      value: "Usually required within 4 months when applicable; from permit date if you have a residence permit",
    },
    {
      label: "Transport",
      value: "Excellent bike city; U-OV buses and trams; strong rail links to Amsterdam, Rotterdam, The Hague",
    },
  ],

  overview: {
    paragraphs: [
      "Utrecht is a major hub for expats who want strong national connectivity, a university city atmosphere, and livability without Amsterdam-level housing pressure. Whether you are relocating for work, study, family, or as a knowledge worker, the city offers a clear municipal process and dedicated support for international students via the Utrecht International Center.",
      "This page summarises Utrecht-specific setup: registration, BSN, DigiD, health insurance, banking, housing, and transport. For deeper detail on each topic, use the linked national guides.",
      "Your practical first steps are usually: register with the municipality (by appointment), receive your BSN, apply for DigiD, arrange health insurance where required, open a bank account, and set up transport. Order and timing can vary by your route (EU vs non-EU, employed vs student).",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
    ],
  },

  registration: {
    heading: "Registering with the Utrecht Municipality",
    body: [
      "If you live abroad and want to move (back) to the Netherlands for more than 4 months in the next half year, you must register with the municipality within 5 days after arrival in the Netherlands. In Utrecht, registration requires an appointment. If a partner and/or children also need to be registered in Utrecht, they must come to the appointment too.",
      "After the application, it may take up to 4 weeks before the registration is processed in the Basisregistratie Personen (BRP). You will also receive a BSN as part of this process.",
      "If you are already living in the Netherlands and moving to Utrecht (or changing address within Utrecht), the municipality provides an online move-reporting flow and address-change form support. Use the official source for the current process and any timing rules.",
      "International students have a specific registration path via the Utrecht International Center; students are told they need to register within 5 days after arrival in the Netherlands.",
    ],
    steps: [
      "Check whether you need first registration (from abroad, staying more than 4 months) or an address change (already in the Netherlands).",
      "Book a registration appointment with the municipality (required for first registration in Utrecht).",
      "Gather required documents: valid ID, proof of address, and any route-specific documents (e.g. residence permit, employment contract, proof of enrolment for students).",
      "Attend the appointment with all family members who are registering.",
      "Wait for BRP processing (up to 4 weeks); you will receive your BSN.",
    ],
    checklist: [
      "Valid passport or ID",
      "Proof of address in Utrecht",
      "Completed registration form (if applicable)",
      "Residence permit or visa (if non-EU)",
      "Birth certificate / marriage certificate (if required for your situation)",
      "Documents translated or legalized where required",
    ],
    officialSourceLinks: [
      { label: "Registering from abroad", url: "https://www.utrecht.nl/city-of-utrecht/registration/registering-from-abroad" },
      { label: "How to make an appointment", url: "https://www.utrecht.nl/city-of-utrecht/how-to-make-an-appointment" },
      { label: "Moving to Utrecht or within Utrecht", url: "https://www.utrecht.nl/city-of-utrecht/moving-to-utrecht-or-moving-within-utrecht/" },
      { label: "Registration international students", url: "https://www.utrecht.nl/city-of-utrecht/registration/registration-international-students" },
    ],
    internalLinks: [
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
      { label: "Document legalization in the Netherlands", href: "/netherlands/document-legalization-netherlands/" },
      { label: "Apostille documents in the Netherlands", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  bsnDigid: {
    heading: "Getting Your BSN and DigiD in Utrecht",
    body: [
      "Your BSN (Burgerservicenummer) is issued as part of municipal registration in Utrecht. After your application, it may take up to 4 weeks before the registration is processed in the BRP; you will then receive your BSN. You need it for tax, health insurance, banking, and access to government services.",
      "DigiD is the Dutch government login. You can apply for it after you have a BSN and a registered Dutch address. To apply you need: BSN, registration address with a Dutch municipality, and a mobile phone. The activation letter is sent by post and generally arrives within 3 business days. You must activate DigiD within 21 days. Many expats only realise later how often DigiD is needed—for health insurance portals, tax authority, municipality services, and healthcare or student admin—so applying early is practical.",
    ],
    digidRequirements: [
      "BSN",
      "Registration address with a Dutch municipality",
      "Mobile phone",
    ],
    examples: [
      "Logging in to your health insurer's portal",
      "Accessing the tax authority (Belastingdienst)",
      "Using municipality services online",
      "Healthcare and GP-related admin",
      "Education or student administration (where relevant)",
    ],
    plannedPageLinks: [
      { label: "BSN in the Netherlands", href: "/netherlands/bsn-netherlands/" },
      { label: "DigiD in the Netherlands", href: "/netherlands/digid-netherlands/" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance After Moving to Utrecht",
    body: [
      "People who live or work in the Netherlands generally need Dutch basic health insurance. In relevant cases, it usually needs to be arranged within 4 months. If you have a residence permit, you are generally required to arrange health insurance effective from the date the permit comes into force.",
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
    heading: "Opening a Bank Account in Utrecht",
    body: [
      "Expats often open a Dutch bank account early to receive salary, pay rent, set up health insurance, and use iDEAL. Requirements vary by bank; typically you will need ID, BSN (when requested), proof of address, and residence documents depending on your status.",
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
    heading: "Housing and Cost of Living in Utrecht",
    body: [
      "Utrecht is a high-demand housing market, often slightly less extreme than Amsterdam but still very competitive. Rents and costs vary widely by neighbourhood, furnishing, contract type, and whether utilities are included. The figures below are practical estimates for planning—not official or regulated fees.",
      "Neighbourhoods expats often consider include the centre, Oost, West, Lombok, and areas along rail and tram lines. Research commute times and transport links before committing. Be cautious of housing scams: avoid rushing into deposits without viewing or contract checks.",
    ],
    costCards: [
      { label: "Rent (1-bedroom, city)", value: "€1,200 – €1,900+", note: "Typical estimate; varies by area and contract", disclaimer: "Indicative" },
      { label: "Groceries (monthly)", value: "€250 – €400", note: "Single person", disclaimer: "Indicative" },
      { label: "Transport (monthly)", value: "From ~€40", note: "U-OV / OV-chipkaart; bike purchase separate", disclaimer: "Check U-OV for current prices" },
      { label: "Health insurance (basic)", value: "From ~€140/month", note: "Indicative", disclaimer: "Varies by provider" },
      { label: "Municipality / admin", value: "Varies", note: "Registration and permits; check official source", disclaimer: "Official fees apply" },
    ],
    neighborhoodsNote: "Centre, Oost, West, Lombok and rail/tram-linked areas are often considered; check commute and U-OV/rail.",
    warning: "Be wary of housing scams. Do not pay large deposits without viewing the property or verifying the contract and landlord.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Utrecht",
    body: [
      "Many expats combine cycling with U-OV buses and trams and national rail. Utrecht is one of the easiest Dutch cities to navigate by bike. Local public transport is primarily handled by U-OV; tickets and subscriptions are available through official channels. Utrecht's central rail connections make commuting to Amsterdam, Rotterdam, and The Hague realistic for some expats.",
    ],
    goodToKnow: [
      "Test real commute times before choosing housing.",
      "Secure bike storage matters; get a bike once you have somewhere safe to keep it.",
      "Train convenience can outweigh a slightly longer local bike distance.",
      "Keep first-month transport setup simple (OV-chipkaart or U-OV subscription).",
    ],
  },

  servicesIntro:
    "Below are official and commercial services that can support your move. The Utrecht Municipality and Utrecht International Center handle registration and student support; banks and insurers have their own requirements.",

  first30Days: {
    heading: "Your First 30 Days in Utrecht",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Move in and secure your address.",
          "Confirm your registration appointment with the municipality (or book one if not yet done).",
          "Gather documents (ID, proof of address, any required translations or legalizations).",
          "Set up transport basics (OV-chipkaart or U-OV; consider a bike once you have storage).",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Receive or confirm your BSN (BRP processing can take up to 4 weeks).",
          "Apply for DigiD (you will receive an activation letter by post, generally within 3 business days).",
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
      title: "Knowledge worker relocating for a role in Utrecht or a nearby Randstad city",
      summary: "You may be based in Utrecht for livability and central rail links. You still need to register in Utrecht, get your BSN, apply for DigiD, and arrange health insurance and banking. Employer may help with relocation but municipal registration is your responsibility.",
      needsFirst: ["Registration appointment", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Employment contract", "Proof of address", "Residence permit when issued"],
      timing: "Register within 5 days of arrival; BSN can take up to 4 weeks; health insurance and bank as soon as practicable.",
      mistakes: ["Delaying registration", "Assuming BSN is instant", "Assuming DigiD is immediate", "Leaving health insurance to the last moment"],
    },
    {
      title: "EU citizen relocating for work, using Utrecht as a central base",
      summary: "No visa required; focus on registration, BSN, DigiD, then insurance and banking. Utrecht's rail links make it practical for commuting to Amsterdam, Rotterdam, or The Hague.",
      needsFirst: ["Registration", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["EU passport or ID", "Proof of address", "Employment contract if applicable"],
      timing: "Register within 5 days; arrange insurance within 4 months if required.",
      mistakes: ["Waiting too long to register", "Not applying for DigiD early", "Choosing housing without checking commute reality"],
    },
    {
      title: "International student moving to Utrecht",
      summary: "Use the Utrecht International Center registration path for international students. You need to register within 5 days after arrival in the Netherlands. You will receive a BSN and can then apply for DigiD and open a bank account.",
      needsFirst: ["Registration via Utrecht International Center", "BSN", "DigiD", "Bank account", "Student insurance or exemption check"],
      documents: ["Passport", "Proof of enrolment", "Proof of address", "Residence permit if non-EU"],
      timing: "Register within 5 days of arrival; sort insurance and bank in the first weeks.",
      mistakes: ["Skipping registration", "Assuming you don't need Dutch health insurance without checking"],
    },
    {
      title: "Couple or family relocating and registering together",
      summary: "All family members who need to be registered in Utrecht must come to the appointment. Each adult will need BSN and DigiD; children may be registered in the same appointment.",
      needsFirst: ["Joint registration appointment", "BSNs for all", "DigiD for adults", "Health insurance", "Banking"],
      documents: ["Passports/IDs", "Proof of address", "Marriage/civil partnership or birth certificates if required", "Residence permits if applicable"],
      timing: "Book one appointment for the household; bring all required documents; BRP processing can take up to 4 weeks.",
      mistakes: ["Only one partner attending", "Missing translated or legalized documents for dependants"],
    },
  ],

  commonMistakes: [
    { mistake: "Waiting too long to register with the municipality", internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" } },
    { mistake: "Assuming BSN is instant (BRP processing can take up to 4 weeks in Utrecht)" },
    { mistake: "Assuming DigiD is immediate (activation letter by post, must activate within 21 days)" },
    { mistake: "Delaying health insurance when it is required", internalLink: { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" } },
    { mistake: "Opening banking too late", internalLink: { label: "Open bank account", href: "/netherlands/open-bank-account-netherlands/" } },
    { mistake: "Choosing housing without checking commute reality" },
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
      q: "Do I need to register when moving to Utrecht?",
      a: "Yes. If you live abroad and want to move (back) to the Netherlands for more than 4 months in the next half year, you must register with the municipality within 5 days after arrival. In Utrecht, registration requires an appointment. International students have a specific path via the Utrecht International Center.",
    },
    {
      q: "How long do I have to register after arriving?",
      a: "You must register within 5 days after arrival in the Netherlands. In Utrecht you need an appointment, so book as soon as you know your arrival date.",
    },
    {
      q: "Do I get my BSN when I register in Utrecht?",
      a: "Yes. You receive a BSN as part of municipal registration. After your application, it may take up to 4 weeks before the registration is processed in the Basisregistratie Personen (BRP).",
    },
    {
      q: "How long can BRP registration take in Utrecht?",
      a: "The municipality states that after the application, it may take up to 4 weeks before the registration is processed in the BRP. You will then receive your BSN.",
    },
    {
      q: "Can I apply for DigiD right after registering?",
      a: "You can apply once you have your BSN and a registered Dutch address. You need a mobile phone. The activation letter is sent by post and generally arrives within 3 business days; you must activate DigiD within 21 days.",
    },
    {
      q: "Do I need Dutch health insurance in Utrecht?",
      a: "People who live or work in the Netherlands generally need Dutch basic health insurance. Where it applies, it usually needs to be arranged within 4 months. Residence permit holders generally need cover effective from the date the permit comes into force.",
    },
    {
      q: "Can I open a Dutch bank account without a BSN?",
      a: "Some banks allow you to start the process or provide your BSN later. Requirements vary by bank; check the specific bank and our national banking guide.",
    },
    {
      q: "What is the Utrecht International Center?",
      a: "The Utrecht International Center provides a specific registration path for international students. Students are told they need to register within 5 days after arrival in the Netherlands. See the municipality's registration pages for international students for the current process.",
    },
    {
      q: "Do I need an apostille for Utrecht registration?",
      a: "It depends on your documents and country of origin. The municipality will tell you what is required. See our apostille and document legalization guides for the Netherlands.",
    },
    {
      q: "Do documents need translation for use in the Netherlands?",
      a: "Some documents must be translated by a sworn translator. Check the municipality's requirements and our document translation guide.",
    },
    {
      q: "Is Utrecht expensive for expats?",
      a: "Utrecht is often seen as attractive for expats who want strong national connectivity without Amsterdam-level housing pressure, but the housing market is still competitive. Costs vary by neighbourhood and lifestyle. Use our cost cards as indicative estimates.",
    },
    {
      q: "What should I do in my first week after arrival?",
      a: "Secure your address, confirm or book your registration appointment, gather documents (ID, proof of address, any required translations or legalizations), and set up transport basics. See the “First 30 days” section and the After arriving in the Netherlands guide.",
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
      title: "Next steps after arrival",
      links: [
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
    { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
    { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
  ],
};
