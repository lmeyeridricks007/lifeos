/**
 * The Hague city hub – page data for /netherlands/the-hague/.
 * Official facts and URLs per Municipality of The Hague and The Hague International Centre.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Municipality / registration",
    label: "1st BRP registration – EU/EEA and Swiss nationals (from abroad, no BSN)",
    url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-for-eu-eea-and-swiss-nationals-coming-from-abroad-you-do-not-have-a-bsn/",
  },
  {
    category: "Municipality / registration",
    label: "1st BRP registration – with residence permit (from abroad, no BSN)",
    url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-when-coming-from-abroad-with-residence-permit-you-do-not-have-a-bsn/",
  },
  {
    category: "Municipality / registration",
    label: "1st BRP registration – Dutch citizens coming from abroad (no BSN)",
    url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-for-dutch-citizens-coming-from-abroad-you-do-not-have-a-bsn/",
  },
  {
    category: "Municipality / registration",
    label: "Register again in the BRP (you already have a BSN)",
    url: "https://www.denhaag.nl/en/moving-and-immigration/register-again-in-the-brp-you-already-have-a-bsn/",
  },
  {
    category: "Municipality / registration",
    label: "BRP registration for highly skilled migrants and scientific researchers",
    url: "https://www.denhaag.nl/en/moving-and-immigration/brp-registration-for-highly-skilled-migrants-and-scientific-researchers-coming-from-abroad/",
  },
  {
    category: "Highly skilled migrant / newcomer support",
    label: "The Hague International Centre",
    url: "https://www.thehagueinternationalcentre.nl/",
  },
  {
    category: "Highly skilled migrant / newcomer support",
    label: "The Hague International Centre – About us",
    url: "https://www.thehagueinternationalcentre.nl/about-us",
  },
  {
    category: "Highly skilled migrant / newcomer support",
    label: "Citizen Service Number (BSN)",
    url: "https://www.thehagueinternationalcentre.nl/relocating/formalities/citizen-service-number-bsn",
  },
  {
    category: "Highly skilled migrant / newcomer support",
    label: "Registration for highly skilled migrants",
    url: "https://www.thehagueinternationalcentre.nl/relocating/registration-procedure/sponsored/registration-for-highly-skilled-migrants",
  },
  {
    category: "Highly skilled migrant / newcomer support",
    label: "Checklist for family migrants",
    url: "https://www.thehagueinternationalcentre.nl/checklist-for-family-migrants",
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
    category: "City data / jobs and businesses",
    label: "The Hague – facts and figures (Business.gov.nl)",
    url: "https://www.business.gov.nl/facts-and-figures/den-haag/the-hague/",
  },
];

export const theHagueCityPage: CityHubPageData = {
  slug: "the-hague",
  country: "netherlands",
  name: "The Hague",
  path: "/netherlands/the-hague/",

  seo: {
    title: "Moving to The Hague as an Expat: Registration, BSN, Banking & Insurance",
    description:
      "A practical expat guide to moving to The Hague, including registration, BSN, DigiD, banking, health insurance, housing, costs, transport, and newcomer support.",
    keywords: [
      "moving to the hague expat",
      "living in the hague expat",
      "the hague expat guide",
      "jobs in the hague for expats",
      "cost of living the hague",
      "move to the hague guide",
      "living in the hague as an expat",
      "register in the hague expat",
      "the hague bsn registration",
      "the hague expat setup",
      "health insurance the hague expat",
      "open bank account the hague expat",
      "the hague municipality registration",
      "moving from abroad the hague",
      "digid the hague",
      "the hague international centre",
      "cost of living the hague expat",
      "rent in the hague expat",
      "the hague newcomer support",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to The Hague as an Expat",
    subtitle:
      "A practical guide to registration, BSN, DigiD, banking, health insurance, housing, transport, and settling into life in The Hague.",
    image: {
      src: "/images/heroes/the-hague-expat-relocation-hero-planning-scene.png",
      alt: "Cinematic editorial photo of an international professional planning their move to The Hague. In the foreground, neatly organized relocation documents including forms, a passport, maps, keys, and a coffee cup rest on a table, beside a smartphone displaying a checklist. In the background, a person gazes across a historic canal with bicycles parked nearby, with the iconic Binnenhof tower of The Hague rising above traditional Dutch buildings and flags, under a warm, golden sunset. The image conveys calm, intelligent planning for expat life in The Hague, highlighting its international character and historic charm.",
    },
    ctas: [
      { label: "Start Your The Hague Setup Checklist", href: "/netherlands/moving-checklist-netherlands/", primary: true },
      { label: "Read Municipality Registration Guide", href: "/netherlands/municipality-registration-netherlands/", primary: false },
    ],
  },

  tocItems: [
    { id: "living-in-city", label: "Living in The Hague" },
    { id: "why-expats-choose", label: "Why Expats Choose The Hague" },
    { id: "jobs-ecosystem", label: "Jobs & Companies" },
    { id: "overview", label: "Overview" },
    { id: "register-the-hague", label: "Register in The Hague" },
    { id: "bsn-digid", label: "BSN + DigiD" },
    { id: "health-insurance", label: "Health Insurance" },
    { id: "banking", label: "Banking" },
    { id: "housing-costs", label: "Housing & Cost of Living" },
    { id: "transport", label: "Transport" },
    { id: "services-expats", label: "Services for Expats" },
    { id: "first-30-days", label: "First 30 Days" },
    { id: "comparing-cities", label: "Comparing Dutch Cities" },
    { id: "who-moves-here", label: "Who Moves to The Hague" },
    { id: "example-scenarios", label: "Example Scenarios" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "tools", label: "Useful Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
    { id: "other-cities", label: "Other Cities" },
  ],

  cityOverview: {
    heading: "Living in The Hague as an Expat",
    paragraphs: [
      "The Hague is the centre of government, international organisations, diplomacy, and NGOs in the Netherlands. The city hosts embassies, courts, and a large international community. Many expats choose The Hague for roles in policy, law, and international relations.",
      "The city offers a quieter, more formal atmosphere than Amsterdam, with beach access at Scheveningen and strong international schools. It suits diplomats, NGO and policy professionals, and families who value the combination of international institutions and coastal living.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Choose The Hague",
    reasons: [
      { title: "International organisations", explanation: "UN, EU agencies, courts, and NGOs; concentration of global policy and legal work.", whoItSuits: "Policy and legal professionals" },
      { title: "Diplomatic and policy jobs", explanation: "Embassies, international bodies, and government-related roles; formal newcomer support.", whoItSuits: "Diplomats and civil servants" },
      { title: "Beach access", explanation: "Scheveningen and the coast; combination of city and seaside lifestyle.", whoItSuits: "Families and outdoor-oriented expats" },
      { title: "International schools", explanation: "Strong offer of international education; popular with globally mobile families.", whoItSuits: "Families with school-age children" },
      { title: "The Hague International Centre", explanation: "Free municipal services for newcomers; registration and permit support for eligible internationals.", whoItSuits: "HSM and eligible newcomers" },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and Companies in The Hague",
    companiesCount: getCityStats("the-hague")?.companies ?? null,
    jobsCount: getCityStats("the-hague")?.jobs ?? null,
    sourceLabel: getCityStats("the-hague")?.sourceLabel,
    sourceHref: getCityStats("the-hague")?.sourceHref,
    industries: getCityStats("the-hague")?.industries ?? [],
    majorEmployers: getCityStats("the-hague")?.majorEmployers ?? [],
  },

  cityComparison: cityComparisonSection,

  whoMovesHere: {
    heading: "Who Typically Moves to The Hague",
    profiles: [
      "Diplomats and embassy staff",
      "NGO and non-profit workers",
      "Policy and government affairs professionals",
      "International law and court professionals",
      "Families seeking international schools",
    ],
  },

  quickFacts: [
    {
      label: "Best for",
      value: "Diplomacy, NGOs, international organisations, legal and policy roles, families, internationals seeking formal newcomer support",
    },
    {
      label: "Registration",
      value: "Required if staying 4 months or longer in relevant cases; separate routes for EU/EEA/Swiss, residence permit, Dutch citizens, re-registration, and HSM/researchers",
    },
    {
      label: "BSN",
      value: "Received through municipal registration; The Hague International Centre explains BSN is obtained via normal municipal procedure when staying more than 4 months",
    },
    {
      label: "DigiD",
      value: "Can be applied for after registration; activation letter within about 3 working days; must activate within 21 days",
    },
    {
      label: "Health insurance",
      value: "Usually required within 4 months when applicable; from permit date if you have a residence permit",
    },
    {
      label: "Transport",
      value: "HTM trams and buses; bikes; strong rail links to Rotterdam, Delft, Leiden, Schiphol, Amsterdam",
    },
  ],

  overview: {
    paragraphs: [
      "The Hague is a major hub for expats in international organisations, embassies, NGOs, legal and policy work, and for families seeking international schools and a formal newcomer-support ecosystem. The city balances international-institution density with coastal and civic character.",
      "This page summarises The Hague–specific setup: registration (including the right flow for your nationality or status), BSN, DigiD, health insurance, banking, housing, and transport. For deeper detail on each topic, use the linked national guides.",
      "Your practical first steps are usually: identify the correct registration route (EU/EEA/Swiss, residence permit, Dutch citizen, re-registration, or highly skilled migrant/researcher), register with the municipality, receive your BSN, apply for DigiD, arrange health insurance where required, open a bank account, and set up transport. The Hague International Centre offers free services for many internationals and can support some with registration and permit collection.",
    ],
    links: [
      { label: "Compare Dutch cities", href: "/netherlands/cities/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
    ],
  },

  registration: {
    heading: "Registering with the Municipality in The Hague",
    body: [
      "If you are coming from abroad to live in The Hague for 4 months or longer and do not yet have a BSN, you must register with the municipality in the BRP (Personal Records Database). Registration is required by law in these cases.",
      "The Hague has separate official registration pages depending on your situation: EU/EEA and Swiss nationals; non-EU nationals with a residence permit; Dutch citizens coming from abroad. If you already have a BSN and are moving back from abroad or were deregistered, there is a separate “register again in the BRP” flow.",
      "Highly skilled migrants and scientific researchers coming from abroad can use a specific BRP registration route. The Hague International Centre offers registration services for some newcomers and allows highly skilled migrants to register and collect residence permits in one appointment for supported municipalities. Check the official pages to see which route applies to you.",
    ],
    steps: [
      "Identify which registration route applies: EU/EEA/Swiss first registration, residence permit, Dutch citizen from abroad, re-registration (already have BSN), or highly skilled migrant / scientific researcher.",
      "Use the correct municipal page or The Hague International Centre if you are eligible for their supported route.",
      "Gather required documents: valid ID, proof of address, and any route-specific documents (e.g. residence permit, employment contract).",
      "Complete the registration; attend any required appointment. For HSM in supported cases, The Hague International Centre can combine registration and permit collection in one appointment.",
      "You will receive your BSN as part of the process.",
    ],
    checklist: [
      "Valid passport or ID",
      "Proof of address in The Hague",
      "Completed registration form (if applicable)",
      "Residence permit or visa (if non-EU)",
      "Birth certificate / marriage certificate (if required for your situation)",
      "Documents translated or legalized where required",
    ],
    officialSourceLinks: [
      { label: "EU/EEA/Swiss – first BRP registration", url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-for-eu-eea-and-swiss-nationals-coming-from-abroad-you-do-not-have-a-bsn/" },
      { label: "With residence permit – first BRP registration", url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-when-coming-from-abroad-with-residence-permit-you-do-not-have-a-bsn/" },
      { label: "Dutch citizens from abroad", url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-for-dutch-citizens-coming-from-abroad-you-do-not-have-a-bsn/" },
      { label: "Register again in the BRP (already have BSN)", url: "https://www.denhaag.nl/en/moving-and-immigration/register-again-in-the-brp-you-already-have-a-bsn/" },
      { label: "Highly skilled migrants and researchers", url: "https://www.denhaag.nl/en/moving-and-immigration/brp-registration-for-highly-skilled-migrants-and-scientific-researchers-coming-from-abroad/" },
    ],
    internalLinks: [
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
      { label: "Document legalization in the Netherlands", href: "/netherlands/document-legalization-netherlands/" },
      { label: "Apostille documents in the Netherlands", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  bsnDigid: {
    heading: "Getting Your BSN and DigiD in The Hague",
    body: [
      "Your BSN (Burgerservicenummer) is issued as part of municipal registration in The Hague. The Hague International Centre explains that if you are staying in the Netherlands for more than 4 months, you can obtain a BSN via the normal municipal procedure. You need it for tax, health insurance, banking, and access to government services.",
      "DigiD is the Dutch government login. You can apply after you have a BSN and a registered Dutch address. You need: BSN, registered Dutch address, and a mobile phone. The activation letter is sent by post and generally arrives within about 3 business days. You must activate DigiD within 21 days. Many expats only realise later how often DigiD is needed—for tax matters, health insurance portals, municipality services, healthcare admin, and benefits or official letters—so applying early is practical.",
    ],
    digidRequirements: [
      "BSN",
      "Registered Dutch address",
      "Mobile phone",
    ],
    examples: [
      "Tax matters (Belastingdienst)",
      "Logging in to your health insurer's portal",
      "Using municipality services online",
      "Healthcare and GP-related admin",
      "Benefits and official letters",
    ],
    plannedPageLinks: [
      { label: "BSN in the Netherlands", href: "/netherlands/bsn-netherlands/" },
      { label: "DigiD in the Netherlands", href: "/netherlands/digid-netherlands/" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance After Moving to The Hague",
    body: [
      "People who live or work in the Netherlands generally need Dutch basic health insurance. In relevant cases, it usually needs to be arranged within 4 months. If you have a residence permit, you are generally required to arrange health insurance effective from the date the permit comes into force.",
      "Compare providers, arrange cover soon after registration or when employment starts, and check whether you need supplementary insurance. Do not assume that employer setup means you can postpone this—confirm your own obligation and arrange it in time.",
    ],
    advice: [
      "Compare basic packages and optional supplementary cover.",
      "Arrange insurance quickly after registration or when your obligation starts.",
      "Do not assume employer setup removes the need to arrange it yourself; confirm and act in time.",
      "Check whether supplementary insurance is actually necessary for your situation.",
    ],
    internalLink: {
      label: "Health insurance in the Netherlands",
      href: "/netherlands/health-insurance-netherlands/",
    },
  },

  banking: {
    heading: "Opening a Bank Account in The Hague",
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
    heading: "Housing and Cost of Living in The Hague",
    body: [
      "The Hague is often attractive to internationals because it balances international-city amenities with a different feel from Amsterdam. Housing demand is high; The Hague International Centre’s family migrant checklist notes that newcomers should start searching early. Municipal registration and BSN are part of early arrival setup.",
      "Rents and costs vary by neighbourhood, furnishing, contract type, and whether utilities are included. The figures below are practical estimates for planning—not official or regulated fees.",
    ],
    costCards: [
      { label: "Rent (1-bedroom, city)", value: "€1,100 – €1,900+", note: "Typical estimate; varies by area and contract", disclaimer: "Indicative" },
      { label: "Rent (family)", value: "€1,600 – €2,800+", note: "Typical estimate", disclaimer: "Indicative" },
      { label: "Groceries (monthly)", value: "€250 – €400", note: "Single person", disclaimer: "Indicative" },
      { label: "Transport (monthly)", value: "From ~€40", note: "HTM / OV-chipkaart; bike separate", disclaimer: "Check HTM for current prices" },
      { label: "Health insurance (basic)", value: "From ~€140/month", note: "Indicative", disclaimer: "Varies by provider" },
      { label: "Municipality / admin", value: "Varies", note: "Registration and permits; check official source", disclaimer: "Official fees apply" },
    ],
    neighborhoodsNote: "Expats often consider the centre, Zeeheldenkwartier, Statenkwartier, Archipel, and areas with good tram/train links; coastal and inland neighbourhoods can feel different for daily travel.",
    warning: "Be wary of housing scams. Do not pay large deposits without viewing the property or verifying the contract and landlord. Start your housing search early.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around The Hague",
    body: [
      "Many expats combine cycling with tram and bus (HTM in The Hague region) and train. The Hague is well connected by train to Rotterdam, Delft, Leiden, Schiphol, and Amsterdam. Transport setup is usually one of the easier first-week tasks.",
    ],
    goodToKnow: [
      "Check commute time before choosing housing; family routines can depend heavily on school, office, and train links.",
      "A city that looks compact on paper can still have meaningful tram/train differences.",
      "Coastal and inland neighbourhoods can feel different in daily travel patterns.",
      "Set up OV-chipkaart or HTM subscription early.",
    ],
  },

  servicesIntro:
    "Below are official and commercial services that can support your move. The Hague International Centre is part of the municipal newcomer ecosystem and offers free services for internationals; it helps some groups with municipal registration, BSN, residence/work document collection, and newcomer guidance. Banks and insurers have their own requirements.",

  first30Days: {
    heading: "Your First 30 Days in The Hague",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Move in and secure your address.",
          "Confirm your registration path and any appointment (municipality or The Hague International Centre if eligible).",
          "Gather documents (ID, proof of address, any required translations or legalizations).",
          "Set up transport basics (OV-chipkaart or HTM; consider a bike once you have storage).",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Receive or confirm your BSN.",
          "Apply for DigiD (activation letter by post, generally within about 3 working days).",
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
          "Review taxes, 30% ruling, residence permit, or family/school planning if relevant.",
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
      title: "Diplomat / embassy staff relocating to The Hague",
      summary: "Posting to an embassy or international organisation; The Hague is the natural base. Registration route depends on nationality and status; The Hague International Centre can support some with registration and guidance.",
      needsFirst: ["Correct registration route (EU/residence permit/etc.)", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Accreditation or proof of posting if applicable", "Proof of address", "Residence permit if non-EU"],
      timing: "Register as soon as you have an address; arrange insurance and banking in the first weeks.",
      mistakes: ["Using the wrong registration flow for your nationality/status", "Assuming DigiD is immediate", "Underestimating housing competition"],
    },
    {
      title: "NGO / international organisation professional choosing The Hague",
      summary: "Role in an NGO or international organisation based in The Hague. Same registration and BSN/DigiD/insurance/banking sequence; The Hague International Centre offers free services for many internationals.",
      needsFirst: ["Registration (correct route)", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Proof of address", "Employment contract", "Residence permit if non-EU"],
      timing: "Register early; housing demand is high—start searching as soon as you can.",
      mistakes: ["Delaying health insurance", "Opening banking too late", "Not preparing translated/legalized documents when required"],
    },
    {
      title: "Highly skilled migrant using supported registration routes",
      summary: "Employer sponsors permit; The Hague has a specific BRP registration route for highly skilled migrants and scientific researchers. The Hague International Centre allows HSM to register and collect residence permits in one appointment for supported municipalities.",
      needsFirst: ["Registration via HSM route / The Hague International Centre if eligible", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Employment contract", "Proof of address", "Residence permit when issued"],
      timing: "Follow employer and The Hague International Centre guidance; arrange insurance from permit start date.",
      mistakes: ["Assuming every newcomer can use the same International Centre route—check eligibility", "Assuming DigiD is immediate"],
    },
    {
      title: "Family relocating to The Hague (schools and commuter access)",
      summary: "Family prioritising international schools and commuter access. The Hague International Centre’s family migrant checklist highlights housing demand (start early), municipal registration, and BSN as part of early arrival setup.",
      needsFirst: ["Registration (correct route for your status)", "BSN", "DigiD", "Health insurance", "Bank account", "Housing and school planning"],
      documents: ["Passports/IDs", "Proof of address", "Marriage/birth certificates if required", "Residence permits if applicable"],
      timing: "Start housing and school search early; register and get BSN in the first weeks.",
      mistakes: ["Underestimating housing competition", "Not preparing translated or legalized documents for dependants", "Delaying health insurance"],
    },
  ],

  commonMistakes: [
    { mistake: "Using the wrong registration flow for your nationality or status", internalLink: { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" } },
    { mistake: "Assuming every newcomer can use the same International Centre route—eligibility varies", internalLink: { label: "The Hague International Centre", href: "https://www.thehagueinternationalcentre.nl/" } },
    { mistake: "Assuming DigiD is immediate (activation letter by post, must activate within 21 days)" },
    { mistake: "Delaying health insurance when it is required", internalLink: { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" } },
    { mistake: "Opening banking too late", internalLink: { label: "Open bank account", href: "/netherlands/open-bank-account-netherlands/" } },
    { mistake: "Underestimating housing competition; start searching early" },
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
      q: "Do I need to register when moving to The Hague?",
      a: "Yes. If you are coming from abroad to live in The Hague for 4 months or longer and do not yet have a BSN, you must register with the municipality in the BRP. Registration is required by law in these cases. The Hague has separate pages for EU/EEA/Swiss, residence permit holders, Dutch citizens from abroad, re-registration, and highly skilled migrants/researchers.",
    },
    {
      q: "Which registration page applies to me in The Hague?",
      a: "Use the municipal site: EU/EEA/Swiss nationals (first registration, no BSN); non-EU with residence permit (first registration, no BSN); Dutch citizens coming from abroad (no BSN); or “register again in the BRP” if you already have a BSN. Highly skilled migrants and scientific researchers have a specific route. The Hague International Centre can support some newcomers—check their site for eligibility.",
    },
    {
      q: "Do I get my BSN when I register in The Hague?",
      a: "Yes. The Hague International Centre explains that if you are staying in the Netherlands for more than 4 months, you can obtain a BSN via the normal municipal procedure. You receive it as part of registration in the BRP.",
    },
    {
      q: "Can I apply for DigiD right after registering?",
      a: "You can apply once you have your BSN and a registered Dutch address. You need a mobile phone. The activation letter is sent by post and generally arrives within about 3 business days; you must activate DigiD within 21 days.",
    },
    {
      q: "Do I need Dutch health insurance in The Hague?",
      a: "People who live or work in the Netherlands generally need Dutch basic health insurance. Where it applies, it usually needs to be arranged within 4 months. Residence permit holders generally need cover effective from the date the permit comes into force.",
    },
    {
      q: "Can I open a Dutch bank account without a BSN?",
      a: "Some banks allow you to start the process or provide your BSN later. Requirements vary by bank; check the specific bank and our national banking guide.",
    },
    {
      q: "What is The Hague International Centre?",
      a: "The Hague International Centre is part of the municipal newcomer ecosystem. It offers free services for internationals in the region and helps some groups with municipal registration, BSN, residence/work document collection, and newcomer guidance. It is particularly relevant for highly skilled migrants, diplomats, scientific researchers, graduates, start-ups, and family members in supported cases. Highly skilled migrants can in some cases register and collect residence permits in one appointment for supported municipalities.",
    },
    {
      q: "Can highly skilled migrants register there?",
      a: "Yes. The municipality has a specific BRP registration route for highly skilled migrants and scientific researchers coming from abroad. The Hague International Centre offers registration for highly skilled migrants and allows them to register and collect residence permits in one appointment for supported municipalities. Check the official pages for current eligibility.",
    },
    {
      q: "Do I need an apostille for The Hague registration?",
      a: "It depends on your documents and country of origin. The municipality and The Hague International Centre will indicate what is required. See our apostille and document legalization guides for the Netherlands.",
    },
    {
      q: "Do documents need translation for use in the Netherlands?",
      a: "Some documents must be translated by a sworn translator. Check the municipality’s requirements and our document translation guide.",
    },
    {
      q: "Is The Hague good for expat families?",
      a: "The Hague has strong appeal for families: international schools, The Hague International Centre’s family migrant checklist and support, and a range of neighbourhoods. Housing demand is high; the centre’s checklist notes that newcomers should start searching early.",
    },
    {
      q: "What should I do in my first week after arrival?",
      a: "Secure your address, confirm your registration path and any appointment (municipality or The Hague International Centre if eligible), gather documents (ID, proof of address, any required translations or legalizations), and set up transport basics. See the “First 30 days” section and the After arriving in the Netherlands guide.",
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
    {
      title: "Explore other Dutch expat cities",
      links: [
        { label: "Compare all cities", href: "/netherlands/cities/" },
        { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
        { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
      ],
    },
  ],

  cityLinks: [
    { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
    { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
    { label: "Moving to Eindhoven", href: "/netherlands/eindhoven/" },
    { label: "View all Dutch cities", href: "/netherlands/cities/" },
  ],
};
