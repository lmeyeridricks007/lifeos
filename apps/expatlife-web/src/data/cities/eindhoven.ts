/**
 * Eindhoven city hub – page data for /netherlands/eindhoven/.
 * Official facts and URLs per Holland Expat Center South, Municipality of Eindhoven, and government.nl.
 */

import type { CityHubPageData, CityOfficialSource } from "@/src/lib/city-hub/types";
import { getCityStats, cityComparisonSection } from "@/src/data/cities/cityStats";

const OFFICIAL_SOURCES: CityOfficialSource[] = [
  {
    category: "Expat center / newcomer support",
    label: "Holland Expat Center South",
    url: "https://www.hollandexpatcenter.com/",
  },
  {
    category: "Expat center / newcomer support",
    label: "Holland Expat Center South – How we help",
    url: "https://www.hollandexpatcenter.com/how-we-help",
  },
  {
    category: "Expat center / newcomer support",
    label: "Holland Expat Center South – Appointment at the Expat Center",
    url: "https://www.hollandexpatcenter.com/appointment-at-the-expat-center",
  },
  {
    category: "Municipality / registration",
    label: "Eindhoven – English portal",
    url: "https://english.eindhoven.nl/",
  },
  {
    category: "Municipality / registration",
    label: "Eindhoven – How to (civic matters)",
    url: "https://english.eindhoven.nl/en/how-to",
  },
  {
    category: "Municipality / registration",
    label: "Eindhoven – Moving from abroad (verhuizen vanuit het buitenland)",
    url: "https://www.eindhoven.nl/stad-en-wonen/verhuizen/verhuizen-vanuit-het-buitenland",
  },
  {
    category: "Municipality / registration",
    label: "Eindhoven – Registration of foreign students",
    url: "https://www.eindhoven.nl/stad-en-wonen/wonen/registration-of-foreign-students",
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
    label: "Eindhoven – facts and figures (Business.gov.nl)",
    url: "https://business.gov.nl/facts-and-figures/eindhoven/eindhoven/",
  },
];

export const eindhovenCityPage: CityHubPageData = {
  slug: "eindhoven",
  country: "netherlands",
  name: "Eindhoven",
  path: "/netherlands/eindhoven/",

  seo: {
    title: "Moving to Eindhoven as an Expat: Registration, BSN, Banking & Insurance",
    description:
      "A practical expat guide to moving to Eindhoven, including registration, BSN, DigiD, banking, health insurance, housing, costs, transport, and expat support.",
    keywords: [
      "moving to eindhoven expat",
      "living in eindhoven expat",
      "eindhoven expat guide",
      "jobs in eindhoven for expats",
      "cost of living eindhoven",
      "move to eindhoven guide",
      "living in eindhoven as an expat",
      "register in eindhoven expat",
      "eindhoven bsn registration",
      "eindhoven expat setup",
      "health insurance eindhoven expat",
      "open bank account eindhoven expat",
      "eindhoven municipality registration",
      "moving from abroad eindhoven",
      "digid eindhoven",
      "holland expat center south",
      "cost of living eindhoven expat",
      "rent in eindhoven expat",
      "brainport eindhoven expat",
    ],
  },

  hero: {
    eyebrow: "CITIES",
    title: "Moving to Eindhoven as an Expat",
    subtitle:
      "A practical guide to registration, BSN, DigiD, banking, health insurance, housing, transport, and settling into life in Eindhoven.",
    image: {
      src: "/images/heroes/eindhoven-city-hub-hero.png",
      alt: "A professional preparing for relocation to Eindhoven, with a passport, documents, a smartphone showing a checklist, and a map on an outdoor table. In the background, a man with a bicycle looks towards modern glass buildings in a vibrant, green urban plaza, reflecting Eindhoven's tech-city atmosphere and expat-friendly lifestyle.",
    },
    ctas: [
      { label: "Start Your Eindhoven Setup Checklist", href: "/netherlands/moving-checklist-netherlands/", primary: true },
      { label: "Read Municipality Registration Guide", href: "/netherlands/municipality-registration-netherlands/", primary: false },
    ],
  },

  tocItems: [
    { id: "living-in-city", label: "Living in Eindhoven" },
    { id: "why-expats-choose", label: "Why Expats Choose Eindhoven" },
    { id: "jobs-ecosystem", label: "Jobs & Companies" },
    { id: "overview", label: "Overview" },
    { id: "register-eindhoven", label: "Register in Eindhoven" },
    { id: "bsn-digid", label: "BSN + DigiD" },
    { id: "health-insurance", label: "Health Insurance" },
    { id: "banking", label: "Banking" },
    { id: "housing-costs", label: "Housing & Cost of Living" },
    { id: "transport", label: "Transport" },
    { id: "services-expats", label: "Services for Expats" },
    { id: "first-30-days", label: "First 30 Days" },
    { id: "comparing-cities", label: "Comparing Dutch Cities" },
    { id: "who-moves-here", label: "Who Moves to Eindhoven" },
    { id: "example-scenarios", label: "Example Scenarios" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "tools", label: "Useful Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
    { id: "other-cities", label: "Other Cities" },
  ],

  cityOverview: {
    heading: "Living in Eindhoven as an Expat",
    paragraphs: [
      "Eindhoven is the heart of Brainport: a technology and innovation hub known for engineering, semiconductors, and design. The city attracts international knowledge workers, researchers, and product developers. Lifestyle is more compact and innovation-driven than in the Randstad.",
      "The city suits professionals in tech, engineering, and R&D who want to be close to major employers and the high-tech campus. Housing and cost of living are often more manageable than in Amsterdam; Holland Expat Center South supports newcomers in the Brabant region.",
    ],
  },

  whyExpatsChoose: {
    heading: "Why Expats Choose Eindhoven",
    reasons: [
      { title: "Technology jobs", explanation: "Concentration of tech, semiconductor, and engineering roles; Brainport ecosystem and high-tech campus.", whoItSuits: "Engineers and tech professionals" },
      { title: "Brainport ecosystem", explanation: "ASML, Philips, NXP, and many SMEs; strong R&D and product development environment.", whoItSuits: "R&D and product teams" },
      { title: "Engineering careers", explanation: "High-tech manufacturing, design, and innovation; international employers and projects.", whoItSuits: "Engineers and designers" },
      { title: "Growing international community", explanation: "Increasing number of expats and English-speaking workplaces; Holland Expat Center South for support.", whoItSuits: "International knowledge workers" },
      { title: "Often more affordable", explanation: "Typically lower rents and costs than Amsterdam; different cost/space balance.", whoItSuits: "Budget-conscious professionals" },
    ],
  },

  jobsEcosystem: {
    heading: "Jobs and Companies in Eindhoven",
    companiesCount: getCityStats("eindhoven")?.companies ?? null,
    jobsCount: getCityStats("eindhoven")?.jobs ?? null,
    sourceLabel: getCityStats("eindhoven")?.sourceLabel,
    sourceHref: getCityStats("eindhoven")?.sourceHref,
    industries: getCityStats("eindhoven")?.industries ?? [],
    majorEmployers: getCityStats("eindhoven")?.majorEmployers ?? [],
  },

  cityComparison: cityComparisonSection,

  whoMovesHere: {
    heading: "Who Typically Moves to Eindhoven",
    profiles: [
      "Engineers and technical specialists",
      "Semiconductor and hardware professionals",
      "Product and industrial designers",
      "Technology and R&D researchers",
      "International knowledge workers in Brainport companies",
    ],
  },

  quickFacts: [
    {
      label: "Best for",
      value: "Technology, engineering, design, semiconductors, product development, research, international knowledge workers",
    },
    {
      label: "Registration",
      value: "Required if staying long term in relevant cases; first-time movers make an appointment at the Inwonersplein or use Holland Expat Center South for combined municipal + IND procedures",
    },
    {
      label: "BSN",
      value: "Received through municipal registration or Expat Center procedure; if you live in Eindhoven, BSN is issued at the appointment; if in another participating municipality, by post within 5 working days",
    },
    {
      label: "DigiD",
      value: "Can be applied for after registration; activation letter generally within 3 business days; must activate within 21 days",
    },
    {
      label: "Health insurance",
      value: "Usually required within 4 months when applicable; from permit date if you have a residence permit",
    },
    {
      label: "Transport",
      value: "Bike-friendly city; many internationals combine cycling with buses and trains; works well for regional commuting in Brabant",
    },
  ],

  overview: {
    paragraphs: [
      "Eindhoven is a major hub for expats in technology, engineering, design, semiconductors, and international knowledge work. The city is especially strong for those relocating for Brainport-area roles, research, or product development. This page summarises Eindhoven-specific setup: registration (including the Expat Center procedure), BSN, DigiD, health insurance, banking, housing, and transport. For deeper detail on each topic, use the linked national guides.",
      "Your practical first steps are usually: register with the municipality (or use Holland Expat Center South for combined municipal registration and IND formalities in one appointment), receive your BSN, apply for DigiD, arrange health insurance where required, open a bank account, and set up transport. The Expat Center procedure is often faster than standard municipal registration, which can take up to 30 days.",
    ],
    links: [
      { label: "Compare Dutch cities", href: "/netherlands/cities/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
    ],
  },

  registration: {
    heading: "Registering with the Municipality in Eindhoven",
    body: [
      "First-time movers from abroad to Eindhoven should make an appointment and come to the counter at the Inwonersplein. Appointment booking is available online or by phone. The municipality provides a move-from-abroad registration path with English-language guidance on its English portal.",
      "Holland Expat Center South is a non-profit governmental agency that helps international knowledge workers and their families settle in Brabant. It offers appointments that combine municipal registration and IND formalities in one visit—the Expat Center Procedure. If you live in Eindhoven, your BSN is issued at the appointment. If you live in another participating municipality, the BSN is issued by post within 5 working days. The Expat Center states this is faster than local municipal registration alone, which can take up to 30 days.",
      "Foreign students have a specific registration flow. The municipality states students should bring: a valid passport (EU residents may use an ID card); IND documents if applicable; original documents of life events abroad such as a birth certificate; and a rental/purchase contract or a written declaration from the owner or main occupant if moving in with someone.",
    ],
    steps: [
      "Decide whether to use municipal registration (Inwonersplein) or Holland Expat Center South if you are eligible for the combined procedure.",
      "Book an appointment (online or by phone for the municipality; via the Expat Center site for their procedure).",
      "Gather required documents: valid ID, proof of address, IND documents if applicable, and any route-specific documents (e.g. original life-event documents for students).",
      "Attend the appointment; complete registration. If using the Expat Center and you live in Eindhoven, receive your BSN at the appointment; otherwise it is sent by post within 5 working days.",
    ],
    checklist: [
      "Valid passport or ID (EU residents may use ID card)",
      "Proof of address in Eindhoven (rental/purchase contract or written declaration from owner/main occupant if moving in with someone)",
      "IND documents if applicable",
      "Original documents of life events abroad (e.g. birth certificate) if required",
      "Documents translated or legalized where required",
    ],
    officialSourceLinks: [
      { label: "Holland Expat Center South – How we help", url: "https://www.hollandexpatcenter.com/how-we-help" },
      { label: "Holland Expat Center South – Appointment", url: "https://www.hollandexpatcenter.com/appointment-at-the-expat-center" },
      { label: "Eindhoven – Moving from abroad", url: "https://www.eindhoven.nl/stad-en-wonen/verhuizen/verhuizen-vanuit-het-buitenland" },
      { label: "Eindhoven – Registration of foreign students", url: "https://www.eindhoven.nl/stad-en-wonen/wonen/registration-of-foreign-students" },
    ],
    internalLinks: [
      { label: "Municipality registration in the Netherlands", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
      { label: "Document legalization in the Netherlands", href: "/netherlands/document-legalization-netherlands/" },
      { label: "Apostille documents in the Netherlands", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  bsnDigid: {
    heading: "Getting Your BSN and DigiD in Eindhoven",
    body: [
      "Your BSN (Burgerservicenummer) is part of municipal registration and the BRP. Eindhoven’s English portal includes BSN and civic matters in its “How to” guidance. Through the Expat Center procedure, if you live in Eindhoven you receive your BSN at the appointment; if you live in another participating municipality, it is sent by post within 5 working days.",
      "DigiD normally comes after you have a BSN and a registered Dutch address. You need: BSN, registered Dutch address, and a mobile phone. The activation letter is sent by post and generally arrives within about 3 business days. You must activate DigiD within 21 days. Eindhoven’s English portal includes DigiD in its guidance. DigiD becomes essential quickly for tax matters, health insurance portals, municipality services, and healthcare administration.",
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
      "Education or student administration where relevant",
    ],
    plannedPageLinks: [
      { label: "BSN in the Netherlands", href: "/netherlands/bsn-netherlands/" },
      { label: "DigiD in the Netherlands", href: "/netherlands/digid-netherlands/" },
    ],
  },

  healthInsurance: {
    heading: "Health Insurance After Moving to Eindhoven",
    body: [
      "People who live or work in the Netherlands generally need Dutch basic health insurance. In relevant cases, it usually needs to be arranged within 4 months. If you have a residence permit, you are generally required to arrange health insurance effective from the date the permit comes into force.",
      "Compare providers, arrange cover soon after registration or when employment starts, and check whether you need supplementary insurance. Do not assume that employer onboarding replaces this—confirm your own obligation and arrange it in time.",
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
    heading: "Opening a Bank Account in Eindhoven",
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
    heading: "Housing and Cost of Living in Eindhoven",
    body: [
      "Eindhoven is often attractive to internationals because of the Brainport ecosystem and generally different cost and space dynamics from Amsterdam. Housing demand exists; start your search early. Rents and costs vary by neighbourhood, furnishing, contract type, and whether utilities are included. The figures below are practical estimates for planning—not official or regulated fees.",
    ],
    costCards: [
      { label: "Rent (1-bedroom, city)", value: "€900 – €1,500+", note: "Typical estimate; varies by area and contract", disclaimer: "Indicative" },
      { label: "Rent (family)", value: "€1,300 – €2,200+", note: "Typical estimate", disclaimer: "Indicative" },
      { label: "Groceries (monthly)", value: "€250 – €400", note: "Single person", disclaimer: "Indicative" },
      { label: "Transport (monthly)", value: "From ~€40", note: "OV-chipkaart; bike separate; indicative starter", disclaimer: "Check operator for current prices" },
      { label: "Health insurance (basic)", value: "From ~€140/month", note: "Indicative", disclaimer: "Varies by provider" },
      { label: "Municipality / admin", value: "Varies", note: "Registration and permits; check official source", disclaimer: "Official fees apply" },
    ],
    neighborhoodsNote: "Expats often consider areas near campus, tech campuses, and neighbourhoods with good bus/train links for regional commuting in Brabant. Proximity to employer or university can matter more than city-centre lifestyle for some.",
    warning: "Be wary of housing scams. Do not pay large deposits without viewing the property or verifying the contract and landlord. Start your housing search early.",
    internalLinks: [
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
    ],
  },

  transport: {
    heading: "Getting Around Eindhoven",
    body: [
      "Eindhoven is bike-friendly and many internationals combine cycling with buses and trains. The city works well for regional commuting in Brabant. Local transport setup is usually one of the easier first-week tasks.",
    ],
    goodToKnow: [
      "Test real commute times before choosing housing; proximity to campus or employer can matter more than city-centre location for some.",
      "Secure bike storage matters; cycling is a primary way to get around.",
      "Keep first-month transport setup simple—OV-chipkaart and a bike are often enough to start.",
      "For regional travel, check bus and train connections to other Brabant towns and to the Randstad.",
    ],
  },

  servicesIntro:
    "Below are official and commercial services that can support your move. Holland Expat Center South is a non-profit governmental agency that helps international knowledge workers and their families settle in Brabant; it offers combined municipal registration and IND procedures in one appointment. Banks and insurers have their own requirements.",

  first30Days: {
    heading: "Your First 30 Days in Eindhoven",
    weeks: [
      {
        week: "Week 1",
        items: [
          "Move in and secure your address.",
          "Confirm your registration path and any appointment (municipality at Inwonersplein or Holland Expat Center South if eligible).",
          "Gather documents (ID, proof of address, IND documents if applicable, any required translations or legalizations).",
          "Set up transport basics (OV-chipkaart; consider a bike once you have storage).",
        ],
      },
      {
        week: "Week 2",
        items: [
          "Receive or confirm your BSN (at appointment if Eindhoven + Expat Center; otherwise by post within 5 working days).",
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
          "Review taxes, 30% ruling, residence permit, or family/regional commute setup if relevant.",
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
      title: "Semiconductor or high-tech engineer moving to Eindhoven",
      summary: "Relocating for a role in tech or engineering in the Brainport ecosystem. Holland Expat Center South can combine municipal registration and IND formalities in one appointment; BSN issued at the appointment if living in Eindhoven.",
      needsFirst: ["Registration (Expat Center or municipality)", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Proof of address", "Employment contract", "Residence permit when issued", "IND documents if applicable"],
      timing: "Book Expat Center or municipal appointment early; arrange insurance from permit start date if applicable.",
      mistakes: ["Assuming municipal and IND formalities are always separate—Expat Center combines them", "Delaying health insurance", "Choosing housing without checking commute reality"],
    },
    {
      title: "Highly skilled migrant using Holland Expat Center South",
      summary: "Eligible for the Expat Center Procedure: one appointment for municipal registration and IND formalities. BSN at the appointment if you live in Eindhoven; otherwise by post within 5 working days. Faster than standard municipal registration (up to 30 days).",
      needsFirst: ["Expat Center appointment (or municipal)", "BSN", "DigiD", "Health insurance", "Bank account"],
      documents: ["Passport", "Proof of address", "Employment contract", "IND documents as required"],
      timing: "Follow employer and Expat Center guidance; arrange insurance from permit start date.",
      mistakes: ["Assuming DigiD is immediate", "Opening banking too late", "Not preparing translated/legalized documents when needed"],
    },
    {
      title: "International student registering in Eindhoven",
      summary: "The municipality has a specific foreign-student registration flow. Students should bring valid passport (or ID for EU), IND documents if applicable, original life-event documents from abroad, and rental contract or written declaration from owner/main occupant if moving in with someone.",
      needsFirst: ["Student registration appointment", "BSN", "DigiD", "Health insurance if applicable", "Bank account"],
      documents: ["Valid passport or ID", "IND documents if applicable", "Original documents (e.g. birth certificate)", "Rental contract or owner/main occupant declaration"],
      timing: "Register as soon as you have an address; prepare documents in advance (translations/legalization if required).",
      mistakes: ["Arriving without original foreign documents when required", "Not bringing housing proof or declaration", "Assuming DigiD is immediate"],
    },
    {
      title: "Couple or family relocating for a Brainport-area role",
      summary: "Family moving for a tech or research role in the Eindhoven region. Holland Expat Center South helps international knowledge workers and their families; combined procedure can speed up registration and BSN. Housing and school planning benefit from starting early.",
      needsFirst: ["Registration (Expat Center or municipality)", "BSN", "DigiD", "Health insurance", "Bank account", "Housing and school planning"],
      documents: ["Passports/IDs", "Proof of address", "Marriage/birth certificates if required", "Residence permits if applicable"],
      timing: "Start housing and school search early; register and get BSN in the first weeks.",
      mistakes: ["Underestimating housing competition", "Not preparing translated or legalized documents for dependants", "Delaying health insurance"],
    },
  ],

  commonMistakes: [
    { mistake: "Assuming municipal registration and IND formalities are always separate—Holland Expat Center South combines them in one appointment for eligible newcomers", internalLink: { label: "Holland Expat Center South", href: "https://www.hollandexpatcenter.com/" } },
    { mistake: "Arriving without original foreign documents when required (e.g. life-event documents for students)", internalLink: { label: "Document translation", href: "/netherlands/document-translation-netherlands/" } },
    { mistake: "Assuming DigiD is immediate (activation letter by post, must activate within 21 days)" },
    { mistake: "Delaying health insurance when it is required", internalLink: { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" } },
    { mistake: "Opening banking too late", internalLink: { label: "Open bank account", href: "/netherlands/open-bank-account-netherlands/" } },
    { mistake: "Choosing housing without checking commute reality; test real commute times before signing" },
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
      q: "Do I need to register when moving to Eindhoven?",
      a: "Yes, if you are staying long term in relevant cases. First-time movers from abroad should make an appointment and come to the counter at the Inwonersplein, or use Holland Expat Center South if eligible for the combined municipal and IND procedure.",
    },
    {
      q: "Can I use Holland Expat Center South?",
      a: "Holland Expat Center South is a non-profit governmental agency that helps international knowledge workers and their families settle in Brabant. It offers appointments that combine municipal registration and IND formalities in one visit. Check their website for eligibility and how to book an appointment.",
    },
    {
      q: "Do I get my BSN at the appointment in Eindhoven?",
      a: "If you use the Expat Center procedure and live in Eindhoven, your BSN is issued at the appointment. If you live in another participating municipality, the BSN is sent by post within 5 working days. With standard municipal registration, processing times can be longer (up to 30 days).",
    },
    {
      q: "Can I apply for DigiD right after registering?",
      a: "You can apply once you have your BSN and a registered Dutch address. You need a mobile phone. The activation letter is sent by post and generally arrives within about 3 business days; you must activate DigiD within 21 days.",
    },
    {
      q: "Do I need Dutch health insurance in Eindhoven?",
      a: "People who live or work in the Netherlands generally need Dutch basic health insurance. Where it applies, it usually needs to be arranged within 4 months. Residence permit holders generally need cover effective from the date the permit comes into force.",
    },
    {
      q: "Can I open a Dutch bank account without a BSN?",
      a: "Some banks allow you to start the process or provide your BSN later. Requirements vary by bank; check the specific bank and our national banking guide.",
    },
    {
      q: "What documents do foreign students need for registration?",
      a: "The municipality states students should bring: a valid passport (EU residents may use an ID card); IND documents if applicable; original documents of life events abroad such as a birth certificate; and a rental/purchase contract or a written declaration from the owner or main occupant if moving in with someone.",
    },
    {
      q: "Do I need an apostille for Eindhoven registration?",
      a: "It depends on your documents and country of origin. The municipality and Holland Expat Center South will indicate what is required. See our apostille and document legalization guides for the Netherlands.",
    },
    {
      q: "Do documents need translation for use in the Netherlands?",
      a: "Some documents must be translated by a sworn translator. Check the municipality’s requirements and our document translation guide.",
    },
    {
      q: "Is Eindhoven good for expats in tech?",
      a: "Yes. Eindhoven is the heart of Brainport with strong employment in technology, engineering, semiconductors, and research. Holland Expat Center South supports international knowledge workers and their families. Job and business statistics are available via Business.gov.nl / CBS city factsheets.",
    },
    {
      q: "Is Eindhoven cheaper than Amsterdam?",
      a: "Eindhoven often has different cost and space dynamics from Amsterdam; rents and costs vary by neighbourhood and contract type. Use the cost cards in this guide as indicative estimates and check current listings.",
    },
    {
      q: "What should I do in my first week after arrival?",
      a: "Secure your address, confirm your registration path and any appointment (municipality or Holland Expat Center South if eligible), gather documents (ID, proof of address, IND documents if applicable, any required translations or legalizations), and set up transport basics. See the “First 30 days” section and the After arriving in the Netherlands guide.",
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
        { label: "Driving licence (planned)", href: "/netherlands/driving-license-netherlands/" },
      ],
    },
    {
      title: "Explore other Dutch expat cities",
      links: [
        { label: "Compare all cities", href: "/netherlands/cities/" },
        { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
        { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
      ],
    },
  ],

  cityLinks: [
    { label: "Moving to Amsterdam", href: "/netherlands/amsterdam/" },
    { label: "Moving to Rotterdam", href: "/netherlands/rotterdam/" },
    { label: "Moving to Utrecht", href: "/netherlands/utrecht/" },
    { label: "Moving to The Hague", href: "/netherlands/the-hague/" },
    { label: "View all Dutch cities", href: "/netherlands/cities/" },
  ],
};
