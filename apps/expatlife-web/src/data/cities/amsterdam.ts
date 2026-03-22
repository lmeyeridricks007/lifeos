/**
 * Amsterdam city hub – page data.
 * Reusable structure for /netherlands/amsterdam/ and future programmatic city pages.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality / registration",
    label: "First registration (moving from abroad)",
    url: "https://www.amsterdam.nl/en/civil-affairs/first-registration/",
  },
  {
    category: "Municipality / registration",
    label: "Moving to Amsterdam (address change)",
    url: "https://www.amsterdam.nl/en/civil-affairs/moving-amsterdam/",
  },
  {
    category: "Municipality / registration",
    label: "Civil Affairs (City of Amsterdam)",
    url: "https://www.amsterdam.nl/en/civil-affairs/",
  },
  {
    category: "Newcomer support",
    label: "IN Amsterdam – Make an appointment (individuals)",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/international-newcomers/make-an-appointment-individuals",
  },
  {
    category: "Newcomer support",
    label: "IN Amsterdam – Services for international newcomers",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/how-in-amsterdam-helps-international-newcomers/in-amsterdam-services-for-international-newcomers",
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
    category: "Amsterdam public transport",
    label: "GVB – Prices",
    url: "https://www.gvb.nl/en/prices",
  },
];

export const amsterdamCityPage: CityHubPageData = {
  slug: "amsterdam",
  country: "netherlands",
  name: "Amsterdam",
  path: "/netherlands/amsterdam/",

  seo: {
    title: "Moving to Amsterdam as an Expat: Registration, BSN, Banking & Insurance",
    description:
      "A practical expat guide to moving to Amsterdam, including registration, BSN, DigiD, banking, health insurance, housing, costs, and local services.",
    keywords: [
      "moving to amsterdam expat",
      "living in amsterdam expat",
      "amsterdam expat guide",
      "jobs in amsterdam for expats",
      "cost of living amsterdam",
      "move to amsterdam guide",
      "living in amsterdam as an expat",
      "register in amsterdam expat",
      "amsterdam bsn registration",
      "amsterdam expat setup",
      "health insurance amsterdam expat",
      "open bank account amsterdam expat",
      "amsterdam municipality registration",
      "moving from abroad amsterdam",
      "digid amsterdam",
      "in amsterdam expat center",
      "cost of living amsterdam expat",
      "rent in amsterdam expat",
      "amsterdam registration appointment",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Amsterdam as an Expat",
    subtitle:
      "A practical guide to registration, BSN, DigiD, banking, health insurance, housing, transport, and settling into life in Amsterdam.",
    image: {
      src: "/images/heroes/amsterdam-expat-relocation-planning-hero.png",
      alt: "An expat's planning setup on a wooden table with a passport, documents, and a smartphone showing a relocation checklist, overlooking a blurred Amsterdam canal with historic houses and a cyclist at golden hour.",
      imagePrompt:
        "Cinematic editorial photo of an international professional relocating to Amsterdam, seated at a clean modern desk beside a large window, laptop showing a relocation checklist, passport and official papers neatly arranged, soft natural daylight, blurred Amsterdam canal houses in the background, premium lifestyle magazine aesthetic, calm administrative atmosphere, 16:9 wide hero banner.",
    },
    ctas: [
      {
        label: "Start Your Amsterdam Setup Checklist",
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
    { id: "living-in-city", label: "Living in Amsterdam" },
    { id: "why-expats-choose", label: "Why Expats Choose Amsterdam" },
    { id: "jobs-ecosystem", label: "Jobs & Companies" },
    { id: "overview", label: "Overview" },
    { id: "register-amsterdam", label: "Register in Amsterdam" },
    { id: "bsn-digid", label: "BSN + DigiD" },
    { id: "health-insurance", label: "Health Insurance" },
    { id: "banking", label: "Banking" },
    { id: "housing-costs", label: "Housing & Cost of Living" },
    { id: "transport", label: "Transport" },
    { id: "services-expats", label: "Services for Expats" },
    { id: "first-30-days", label: "First 30 Days" },
    { id: "comparing-cities", label: "Comparing Dutch Cities" },
    { id: "who-moves-here", label: "Who Moves to Amsterdam" },
    { id: "example-scenarios", label: "Example Scenarios" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "tools", label: "Useful Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
    { id: "other-cities", label: "Other Cities" },
  ],

  cityOverview: {
    heading: "Living in Amsterdam as an Expat",
    paragraphs: [
      "Amsterdam is the Netherlands’ global business hub and cultural capital. The city is known for its startup ecosystem, international companies, and a dense expat community. Many internationals choose Amsterdam for career opportunities, English-speaking business environment, and an international lifestyle.",
      "The city suits professionals in tech, finance, media, and creative industries, as well as students, founders, and families who value connectivity and cultural life. Housing is in high demand and costs are among the highest in the country; planning your move and registration early is essential.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Choose Amsterdam",
    reasons: [
      { title: "Global career opportunities", explanation: "Concentration of multinational HQs, scale-ups, and startups; many roles in English.", whoItSuits: "Tech, finance, and creative professionals" },
      { title: "English-speaking business environment", explanation: "Widely used in business and daily life; smooth onboarding for internationals.", whoItSuits: "Non-Dutch speakers" },
      { title: "Startup ecosystem", explanation: "Strong venture capital, accelerators, and co-working; ideal for founders and early joiners.", whoItSuits: "Founders and startup employees" },
      { title: "International lifestyle", explanation: "Diverse neighbourhoods, cultural events, and unrivalled flight and rail links.", whoItSuits: "Frequent travellers and culturally curious" },
      { title: "IN Amsterdam support", explanation: "Official expat centre offering accelerated procedures for registration and permits.", whoItSuits: "Highly skilled migrants and eligible newcomers" },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and Companies in Amsterdam",
    companiesCount: getCityStats("amsterdam")?.companies ?? null,
    jobsCount: getCityStats("amsterdam")?.jobs ?? null,
    sourceLabel: getCityStats("amsterdam")?.sourceLabel,
    sourceHref: getCityStats("amsterdam")?.sourceHref,
    industries: getCityStats("amsterdam")?.industries ?? ["Technology", "Finance", "Media", "Startups", "Corporate HQ", "Creative"],
    majorEmployers: getCityStats("amsterdam")?.majorEmployers ?? ["Booking.com", "Adyen", "Uber", "TomTom", "ING", "Philips"],
  },

  cityComparison: cityComparisonSection,

  whoMovesHere: {
    heading: "Who Typically Moves to Amsterdam",
    profiles: [
      "Startup founders and scale-up employees",
      "Tech and product professionals",
      "Finance and banking workers",
      "International creatives and media",
      "Students and academics",
      "Families seeking international schools",
    ],
  },

  quickFacts: [
    {
      label: "Best for",
      value: "International professionals, students, founders, families, highly skilled migrants",
    },
    {
      label: "Registration",
      value: "Required if staying more than 4 months; visit a City Office within 5 days of arrival",
    },
    {
      label: "BSN",
      value: "Received through city registration",
    },
    {
      label: "DigiD",
      value: "Can be applied for after you have BSN and a registered Dutch address",
    },
    {
      label: "Health insurance",
      value: "Usually required within 4 months when applicable",
    },
    {
      label: "Transport",
      value: "GVB for local public transport; many expats combine cycling and trams/metro",
    },
  ],

  overview: {
    paragraphs: [
      "Amsterdam is one of the main entry points for international newcomers to the Netherlands. Whether you are relocating for work, study, family, or as a highly skilled migrant, the city offers a clear municipal process and dedicated support for expats.",
      "This page summarises Amsterdam-specific setup: registration, BSN, DigiD, health insurance, banking, housing, and transport. For deeper detail on each topic, use the linked national guides.",
      "Your practical first steps are usually: register with the City of Amsterdam, receive your BSN, apply for DigiD, arrange health insurance where required, open a bank account, and set up transport. Order and timing can vary by your route (EU vs non-EU, employed vs student).",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
    ],
  },

  registration: {
    heading: "Registering with the Amsterdam Municipality",
    body: [
      "If you move to Amsterdam from abroad and plan to stay for more than 4 months, you must register with the City of Amsterdam. You should visit a City Office within 5 days of arrival. Registration leads to entry in the Personal Records Database and to receiving your BSN. Family members moving with you generally need to attend as well.",
      "If you are already living in the Netherlands and moving to Amsterdam (or changing address within Amsterdam), you can report your move from 4 weeks before the moving date, and you must report it within 5 days after moving.",
    ],
    steps: [
      "Check whether you need an appointment (first registration from abroad usually does).",
      "Book an appointment at a City Office or via IN Amsterdam if you are eligible.",
      "Gather required documents: valid ID, proof of address, and any route-specific documents (e.g. residence permit, employment contract).",
      "Attend the appointment with all family members who are registering.",
      "Receive confirmation and your BSN (or instructions for collection).",
    ],
    checklist: [
      "Valid passport or ID",
      "Proof of address in Amsterdam",
      "Completed registration form (if applicable)",
      "Residence permit or visa (if non-EU)",
      "Birth certificate / marriage certificate (if required for your situation)",
      "Documents translated or legalized where required",
    ],
    officialSourceLinks: [
      { label: "First registration (from abroad)", url: "https://www.amsterdam.nl/en/civil-affairs/first-registration/" },
      { label: "Moving to Amsterdam (address change)", url: "https://www.amsterdam.nl/en/civil-affairs/moving-amsterdam/" },
    ],
    internalLinks: [
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
      { label: "Document legalization in the Netherlands", href: "/netherlands/document-legalization-netherlands/" },
      { label: "Apostille documents in the Netherlands", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  bsnDigid: {
    heading: "Getting Your BSN and DigiD in Amsterdam",
    body: [
      "Your BSN (Burgerservicenummer) is issued as part of municipal registration in Amsterdam. You need it for tax, health insurance, banking, and access to government services.",
      "DigiD is the Dutch government login. You can apply for it after you have a BSN and a registered Dutch address. You will need a mobile phone; an activation letter is sent by post and usually arrives within 3 business days. You must activate DigiD within 21 days of receiving the letter. Many expats only realise later how often DigiD is needed—for health insurance portals, tax authority, municipality services, and healthcare admin—so applying early is practical.",
    ],
    digidRequirements: [
      "BSN",
      "Registered Dutch address",
      "Mobile phone",
    ],
    examples: [
      "Logging in to your health insurer’s portal",
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
    heading: "Health Insurance After Moving to Amsterdam",
    body: [
      "If you live or work in the Netherlands, you generally need Dutch basic health insurance. Where it applies, it usually must be arranged within 4 months. If you have a residence permit, you are generally required to arrange cover from the date the permit comes into force.",
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
    heading: "Opening a Bank Account in Amsterdam",
    body: [
      "Expats often open a Dutch bank account early to receive salary, pay rent, set up health insurance, and use iDEAL. Requirements vary by bank; typically you will need ID, BSN (when requested), proof of address, and residence documents depending on your status.",
    ],
    typicalNeeds: [
      "Valid passport or ID",
      "BSN (often required; some banks allow providing it later)",
      "Proof of Dutch address",
      "Residence permit (if non-EU)",
    ],
    services: [], // Injected from amsterdamServicesByCategory["Banking / money"] in the page
    internalLink: {
      label: "Open a bank account in the Netherlands",
      href: "/netherlands/open-bank-account-netherlands/",
    },
  },

  housingCosts: {
    heading: "Housing and Cost of Living in Amsterdam",
    body: [
      "Amsterdam is one of the most competitive housing markets in the Netherlands. Rents and costs vary widely by neighbourhood, furnishing, contract type, and whether utilities are included. The figures below are indicative estimates for planning—not official or regulated fees.",
      "Neighbourhoods that expats often consider include Zuid, Oost, West, Noord, and areas just outside the ring. Research commute times and transport links before committing. Be cautious of housing scams: avoid rushing into deposits without viewing or contract checks.",
    ],
    costCards: [
      { label: "Rent (1-bedroom, city)", value: "€1,400 – €2,200+", note: "Varies by area and contract", disclaimer: "Typical estimate" },
      { label: "Groceries (monthly)", value: "€250 – €400", note: "Single person", disclaimer: "Indicative" },
      { label: "Transport (monthly)", value: "From ~€40", note: "GVB subscription; bike purchase separate", disclaimer: "Check GVB for current prices" },
      { label: "Health insurance (basic)", value: "From ~€140/month", note: "Indicative", disclaimer: "Varies by provider" },
      { label: "Municipality / admin", value: "Varies", note: "Registration and permits; check official source", disclaimer: "Official fees apply" },
    ],
    neighborhoodsNote: "Zuid, Oost, West, Noord and suburbs are often considered; check commute and transport.",
    warning: "Be wary of housing scams. Do not pay large deposits without viewing the property or verifying the contract and landlord.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Amsterdam",
    body: [
      "Many expats combine cycling with GVB trams, metro, and buses. Local public transport is primarily handled by GVB; monthly season tickets and subscriptions are available. Setting up transport is one of the easier first-week tasks.",
    ],
    goodToKnow: [
      "Get a bike only after you have somewhere secure to store it.",
      "Set up public transport (OV-chipkaart or subscription) early.",
      "Check commute time before finalising your housing choice.",
    ],
  },

  servicesIntro: "Below are official and commercial services that can support your move. IN Amsterdam and the City of Amsterdam handle registration and BSN for eligible newcomers; banks and insurers have their own requirements.",

  first30Days: {
    heading: "Your First 30 Days in Amsterdam",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Move in and secure your address.",
          "Register or confirm your registration appointment with the City of Amsterdam.",
          "Gather documents (ID, proof of address, any required translations or legalizations).",
          "Set up transport basics (OV-chipkaart or subscription, consider a bike once you have storage).",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Receive or confirm your BSN.",
          "Apply for DigiD (you will receive an activation letter by post).",
          "Start the bank account process if not already done.",
        ],
      },
      {
        week: "Week 3",
        items: [
          "Arrange health insurance if applicable.",
          "Update employer, school, or landlord with your BSN and address where needed.",
        ],
      },
      {
        week: "Week 4",
        items: [
          "Finalise local admin (DigiD activation, bank account, insurance).",
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
      summary: "Employer arranges permit and often supports relocation. You still need to register in Amsterdam, get BSN, apply for DigiD, and arrange health insurance and banking.",
      needsFirst: ["Registration appointment", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Employment contract", "Proof of address", "Residence permit when issued"],
      timing: "Register within 5 days of arrival; health insurance and bank as soon as practicable.",
      mistakes: ["Delaying registration", "Assuming DigiD is instant", "Leaving health insurance to the last moment"],
    },
    {
      title: "EU citizen relocating for work",
      summary: "No visa required; focus on registration, BSN, DigiD, and then insurance and banking. IN Amsterdam may help with combined registration and BSN for eligible newcomers.",
      needsFirst: ["Registration", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["EU passport or ID", "Proof of address", "Employment contract if applicable"],
      timing: "Register within 5 days; arrange insurance within 4 months if required.",
      mistakes: ["Waiting too long to register", "Not applying for DigiD early"],
    },
    {
      title: "International student moving to Amsterdam",
      summary: "University may provide guidance; you still need to register, get BSN, and often open a bank account. Health insurance rules can differ for students—check your situation.",
      needsFirst: ["Registration", "BSN", "Bank account", "Student insurance or exemption check"],
      documents: ["Passport", "Proof of enrolment", "Proof of address", "Residence permit if non-EU"],
      timing: "Register as soon as you have an address; sort insurance and bank in the first weeks.",
      mistakes: ["Skipping registration", "Assuming you don’t need Dutch health insurance without checking"],
    },
    {
      title: "Couple or family relocating together",
      summary: "All family members who are moving usually need to attend registration. Each adult will need BSN and DigiD; children may be registered in the same appointment.",
      needsFirst: ["Joint registration appointment", "BSNs for all", "DigiD for adults", "Health insurance", "Banking"],
      documents: ["Passports/IDs", "Proof of address", "Marriage/civil partnership or birth certificates if required", "Residence permits if applicable"],
      timing: "Book one appointment for the household; bring all required documents.",
      mistakes: ["Only one partner attending", "Missing translated or legalized documents for dependants"],
    },
  ],

  commonMistakes: [
    { mistake: "Waiting too long to register with the municipality", internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" } },
    { mistake: "Assuming DigiD is immediate (it requires postal activation within 21 days)" },
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
      q: "Do I need to register when moving to Amsterdam?",
      a: "Yes. If you move to Amsterdam from abroad and plan to stay for more than 4 months, you must register with the City of Amsterdam. You should visit a City Office within 5 days of arrival. If you are moving from elsewhere in the Netherlands, you must report your address change to Amsterdam (from 4 weeks before or within 5 days after moving).",
    },
    {
      q: "How long do I have to register after arriving?",
      a: "If you are moving from abroad, you should register within 5 days of arrival. Book an appointment in advance; same-day capacity is limited.",
    },
    {
      q: "Do I get my BSN when I register in Amsterdam?",
      a: "Yes. Registration with the City of Amsterdam leads to entry in the Personal Records Database and to receiving your BSN (Burgerservicenummer).",
    },
    {
      q: "Can I apply for DigiD right after registering?",
      a: "You can apply once you have your BSN and a registered Dutch address. You will need a mobile phone. An activation letter is sent by post (usually within 3 business days) and you must activate within 21 days.",
    },
    {
      q: "Do I need Dutch health insurance in Amsterdam?",
      a: "If you live or work in the Netherlands, you generally need Dutch basic health insurance. Where it applies, it usually must be arranged within 4 months. Residence permit holders are generally required to arrange it from the date the permit comes into force.",
    },
    {
      q: "Can I open a Dutch bank account without a BSN?",
      a: "Some banks allow you to start the process or open an account and provide your BSN later. Requirements vary by bank; check the specific bank and our national banking guide.",
    },
    {
      q: "Is IN Amsterdam the same as the municipality?",
      a: "No. IN Amsterdam is a service for international newcomers run by the Amsterdam Area. It can help eligible newcomers with registration and BSN in supported cases. The City of Amsterdam (Civil Affairs) is the official body for municipal registration.",
    },
    {
      q: "What documents should I prepare before moving?",
      a: "Typically: valid passport or ID, proof of address in Amsterdam, and any route-specific documents (e.g. residence permit, employment contract, birth or marriage certificate). Some documents may need translation or legalization—check the municipality and our document guides.",
    },
    {
      q: "Do I need an apostille for Amsterdam registration?",
      a: "It depends on your documents and country of origin. The City of Amsterdam and IN Amsterdam will tell you what is required. See our apostille and document legalization guides for the Netherlands.",
    },
    {
      q: "Do documents need translation for use in the Netherlands?",
      a: "Some documents must be translated by a sworn translator. Check the municipality’s requirements and our document translation guide.",
    },
    {
      q: "Is Amsterdam expensive for expats?",
      a: "Amsterdam is one of the most expensive cities in the Netherlands for rent and daily life. Costs vary by neighbourhood and lifestyle. Use our cost cards as indicative estimates and the relocation cost estimator for planning.",
    },
    {
      q: "What should I do in my first week after arrival?",
      a: "Register (or confirm your appointment), gather documents, set up transport basics, and start the process for BSN and DigiD. See the “First 30 days” section and the After arriving in the Netherlands guide.",
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
        { label: "30% ruling (planned)", href: "/netherlands/30-percent-ruling-netherlands/" },
        { label: "Dutch taxes for expats (planned)", href: "/netherlands/dutch-taxes-expats/" },
        { label: "Moving with family", href: "/netherlands/moving-to-netherlands-with-family/" },
      ],
    },
  ],

  cityLinks: [
    { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
    { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
  ],
};
