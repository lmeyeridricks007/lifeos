/**
 * Netherlands self-employed visa / residence permit – data source for the canonical pillar page.
 * People often say "self-employed visa"; in practice this is the Dutch residence permit for self-employed persons.
 * Figures (fees, required amount) are maintained here for easy updates; see IND for official current values.
 * @see https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person
 * @see https://ind.nl/en/fees-costs-of-an-application
 * @see https://ind.nl/en/required-amounts-income-requirements
 * @see https://ind.nl/en/independent-sustainable-and-sufficient-income
 * @see https://business.gov.nl/regulations/work-permit-self-employed-professionals/
 * @see https://business.gov.nl/starting-your-business/registering-your-business/registration-at-the-netherlands-chamber-of-commerce-kvk/
 */

import type { VisaPageData } from "./types";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;

const IND_SELF_EMPLOYED = "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person";
const IND_FEES = "https://ind.nl/en/fees-costs-of-an-application";
const IND_AMOUNTS = "https://ind.nl/en/required-amounts-income-requirements";
const IND_INCOME = "https://ind.nl/en/independent-sustainable-and-sufficient-income";
const BUSINESS_NL_SELF = "https://business.gov.nl/regulations/work-permit-self-employed-professionals/";
const KVK_REG = "https://business.gov.nl/starting-your-business/registering-your-business/registration-at-the-netherlands-chamber-of-commerce-kvk/";

export const SELF_EMPLOYED_VISA: VisaPageData = {
  slug: "self-employed-visa",
  path: `${BASE}/visa/self-employed-visa/`,
  title: "Self-Employed Visa in the Netherlands",
  shortTitle: "Self-Employed Visa",
  category: "Entrepreneur visa",
  heroImage: "/images/heroes/self-employed-visa-netherlands.png",
  heroImageAlt:
    "A man with a beard works at a wooden desk by a window overlooking a Dutch canal, focusing on documents including a 'BUSINESS PLAN' and a 'Business & Relocation Plan' folder. A laptop displaying a map of Europe and two passports are also on the desk, illustrating an international entrepreneur planning their self-employed move to the Netherlands.",
  summary:
    "People often say 'self-employed visa'; in practice this is the Dutch residence permit for self-employed persons. It is for non-EU/EEA nationals who want to live in the Netherlands and work on a self-employed basis. Business setup, KVK registration, and meeting the required profit and viability criteria matter.",

  seo: {
    title: "Self-Employed Visa in the Netherlands | Costs, Requirements, Process",
    description:
      "A practical guide to the Netherlands self-employed visa route covering official fees, planning figures, business setup, documents, timeline, and relocation tools.",
  },

  keyFacts: {
    routeType: "Self-employed residence permit",
    indFee: "€423",
    commonUsers: "Freelancers, consultants, founders, independent professionals",
  },

  eligibility: [
    "Non-EU freelancers and consultants",
    "Independent professionals who will invoice clients",
    "Entrepreneurs planning to run a Dutch business",
    "People moving without an employer sponsor but with a real business activity",
    "Founders relocating alone, with partner, or with family",
  ],

  incomeRequirements: [
    {
      label: "Required amount (gross profit per month, with holiday allowance)",
      amount: "€1,734.57",
      note: "Current IND figure for self-employed application; can change. Check IND required amounts.",
    },
  ],

  fees: {
    applicationFee: "€423",
    note: "IND application fee for self-employed residence permit (current figure). Values can change; check IND fees.",
  },

  businessSetupRequirements: [
    "You need a real self-employed activity or business",
    "KVK registration is typically part of practical setup",
    "Your business structure matters",
    "Business activity, clients, and income logic matter",
    "This route is more than simply saying you want to freelance",
    "In many cases, the business must make economic sense in the Dutch context",
  ],

  processSteps: [
    { step: 1, title: "Confirm self-employed route suitability" },
    { step: 2, title: "Prepare business concept and financial documentation" },
    { step: 3, title: "Prepare application and supporting documents" },
    { step: 4, title: "Submit application and pay fee" },
    { step: 5, title: "Wait for IND review" },
    { step: 6, title: "Plan travel and temporary housing" },
    { step: 7, title: "Register with municipality, receive BSN, and complete business / arrival setup" },
  ],

  documents: [
    { name: "Passport" },
    { name: "Business plan or business activity explanation" },
    { name: "KVK / business setup documents where applicable" },
    { name: "Financial evidence and supporting income / profit documents" },
    { name: "Client contracts or business evidence where relevant" },
    { name: "Civil status documents if moving with partner / family" },
    { name: "Address / housing-related documents for practical move planning" },
  ],

  alternatives: [
    {
      route: "Dutch-American Friendship Treaty (DAFT)",
      bestFor: "Eligible US citizens seeking self-employed residence",
      mainDifference: "Special treaty route for US nationals; different evidence and capital rules.",
      href: `${BASE}/visa/dutch-american-friendship-treaty/`,
    },
    {
      route: "Startup visa",
      bestFor: "Founders with a facilitator and one-year startup route",
      mainDifference: "Separate one-year permit with facilitator; different eligibility.",
    },
    {
      route: "Highly Skilled Migrant",
      bestFor: "Employees with a job offer from a recognized sponsor",
      mainDifference: "Employer-sponsored; no self-employment.",
      href: `${BASE}/visa/highly-skilled-migrant/`,
    },
    {
      route: "EU Blue Card",
      bestFor: "Highly qualified employees with a qualifying job",
      mainDifference: "Employment route; different salary and eligibility.",
      href: `${BASE}/visa/eu-blue-card/`,
    },
    {
      route: "Partner / family visa",
      bestFor: "Partners or family members of residents",
      mainDifference: "Relationship-based; sponsor income and status apply.",
      href: `${BASE}/visa/partner-family-visa/`,
    },
    {
      route: "Student visa",
      bestFor: "Students admitted to a Dutch institution",
      mainDifference: "Study-based; different conditions and work rights.",
      href: `${BASE}/visa/student-visa/`,
    },
  ],

  officialSources: [
    { label: "IND self-employed residence permit", href: IND_SELF_EMPLOYED },
    { label: "IND fees", href: IND_FEES },
    { label: "IND required amounts", href: IND_AMOUNTS },
    { label: "IND independent / sustainable income", href: IND_INCOME },
    { label: "Business.gov.nl self-employed professionals", href: BUSINESS_NL_SELF },
    { label: "KVK registration guidance", href: KVK_REG },
  ],

  services: [
    {
      name: "Wise",
      description: "International transfers and moving money.",
      url: "https://wise.com/",
      indicativeCost: "Variable",
      reason: "International transfers",
      logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
    },
    {
      name: "bunq",
      description: "Dutch banking after arrival.",
      url: "https://www.bunq.com/",
      indicativeCost: "Monthly plans vary",
      reason: "Banking",
      logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
    },
    {
      name: "HousingAnywhere",
      description: "Temporary housing during arrival.",
      url: "https://housinganywhere.com/",
      indicativeCost: "City-dependent",
      reason: "Temporary housing",
      logo: { src: "/images/affiliates/logos/housinganywhere.svg", alt: "HousingAnywhere logo" },
    },
    {
      name: "Simyo",
      description: "Mobile setup.",
      url: "https://www.simyo.nl/",
      indicativeCost: "Low-cost monthly plans",
      reason: "Mobile",
      logo: { src: "/images/affiliates/logos/simyo.svg", alt: "Simyo logo" },
    },
    {
      name: "Independer",
      description: "Compare Dutch health insurance.",
      url: "https://www.independer.nl/",
      indicativeCost: "Comparison free; premiums vary",
      reason: "Insurance comparison",
      logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    },
    {
      name: "KVK (Dutch Chamber of Commerce)",
      description: "Business registration and support information.",
      url: "https://www.kvk.nl/en/",
      indicativeCost: "Registration fees apply",
      reason: "Business registration support",
    },
    {
      name: "Business.gov.nl",
      description: "Official entrepreneur and business setup guidance.",
      url: "https://business.gov.nl/",
      indicativeCost: "Information free",
      reason: "Official entrepreneur guidance",
    },
    {
      name: "Blue Umbrella",
      description: "Expat tax, payroll, and business setup for international entrepreneurs.",
      url: "https://www.blueumbrella.nl/",
      indicativeCost: "Consultation-based",
      reason: "Tax, bookkeeping, admin",
    },
    {
      name: "Everaert Immigration Lawyers",
      description: "Complex immigration and self-employed route questions.",
      url: "https://www.everaert.nl/",
      indicativeCost: "Consultation-based",
      reason: "Legal support for complex cases",
    },
  ],

  faq: [
    {
      q: "What is the self-employed visa in the Netherlands?",
      a: "People often say 'self-employed visa'; in practice this is the Dutch residence permit for self-employed persons. It allows non-EU/EEA nationals to live in the Netherlands and work on a self-employed basis, subject to business viability and the required profit/income figures set by the IND.",
    },
    {
      q: "Is it a visa or a residence permit?",
      a: "It is a residence permit route. You apply for a residence permit for self-employed persons. Depending on nationality, you may need an MVV (provisional residence permit) before travel. The IND uses the term 'residence permit self-employed person.'",
    },
    {
      q: "How much is the application fee?",
      a: "The IND application fee for the self-employed residence permit is €423 (current figure). Check the IND fees page for the latest amount. This is separate from business setup, housing, and living costs.",
    },
    {
      q: "How much income or profit do I need?",
      a: "The IND publishes a required amount for the self-employed application. The current figure shown is €1,734.57 gross profit per month (with holiday allowance). This should be treated as a planning figure; approval also depends on business viability and the full application. Check the IND required amounts page for current values.",
    },
    {
      q: "Is this the same as DAFT?",
      a: "No. DAFT is a special route for eligible US citizens under the Dutch-American Friendship Treaty, with its own evidence and capital rules. The general self-employed permit is for any qualifying non-EU/EEA national. If you are a US citizen, you may be eligible for DAFT; otherwise the general self-employed route applies.",
    },
    {
      q: "Is this the same as the startup visa?",
      a: "No. The startup permit is a separate one-year route that typically requires a recognised facilitator. The self-employed residence permit is the general route for self-employed persons and has different eligibility and evidence requirements.",
    },
    {
      q: "Can I move to the Netherlands without an employer on this route?",
      a: "Yes. This route is for people who will work on a self-employed basis. You do not need an employer sponsor. You do need to show a real business or freelance activity, meet the required amount and viability criteria, and comply with IND and business registration requirements.",
    },
    {
      q: "Can my partner or family move with me?",
      a: "Family members may be able to join you under family reunification rules. They will need to meet the relationship and other requirements set by the IND, including income and housing. Plan for their documents and any sponsor criteria that apply.",
    },
    {
      q: "What happens after approval?",
      a: "After a positive decision you typically register with the municipality, receive a BSN, open a bank account, arrange health insurance, and complete business admin (e.g. KVK, bookkeeping). Plan your first 30 and 90 days using the tools on this site.",
    },
    {
      q: "Which tools should I use to plan the move?",
      a: "Use the Document Readiness Checker to see which documents matter for your profile, the Relocation Cost Estimator to budget for a self-employed move, the Moving Checklist to build a timeline, and the First 90 Days Planner to plan your first weeks after arrival.",
    },
  ],

  relatedGuides: [
    { label: "Dutch-American Friendship Treaty (DAFT)", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
    { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
    { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
    { label: "First 90 Days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
    { label: "Documents needed to move", href: `${BASE}/documents-needed-to-move-netherlands/` },
    { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    { label: "Moving to the Netherlands from your country", href: `${BASE}/moving-to-netherlands-from/` },
  ],

  relatedCountryPages: [
    { label: "Moving from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
    { label: "Moving from India", href: `${BASE}/moving/moving-to-netherlands-from/india/` },
    { label: "Moving from South Africa", href: `${BASE}/moving/moving-to-netherlands-from/south-africa/` },
    { label: "Moving from the United Kingdom", href: `${BASE}/moving/moving-to-netherlands-from/united-kingdom/` },
  ],

  exampleScenarios: [
    {
      title: "Freelance consultant relocating from India",
      summary: "Solo consultant with clients; business plan, financial evidence, and KVK registration. Plan for fee, required amount, and arrival setup.",
      href: `${TOOLS}/relocation-cost-estimator/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Independent designer relocating from South Africa",
      summary: "Designer moving as self-employed; portfolio, contracts, and profit evidence. Timeline includes IND decision and post-approval registration.",
      href: `${TOOLS}/moving-checklist/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Founder moving to build a small Dutch business",
      summary: "Founder setting up a Dutch entity; business viability and required amount. Plan for KVK, bank account, and first 90 days.",
      href: `${TOOLS}/first-90-days/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Couple relocation where one partner is self-employed",
      summary: "One partner as main applicant; the other may join under family reunification. Two streams of documents and joint housing and registration.",
      href: `${TOOLS}/arrival-planner/`,
      ctaLabel: "Use this scenario",
    },
  ],

  toolCtas: [
    { key: "visa-cost-calculator", label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Want to estimate the cost of this route? Use the Visa Cost Calculator." },
    { key: "visa-application-plan", label: "Personalized Visa Application Plan", href: "/netherlands/visa-application-plan/", description: "Need a step-by-step application roadmap? Get your personalized plan." },
    { key: "document-readiness", label: "Check your document readiness", href: "/netherlands/document-readiness-checker/", description: "See which documents may matter for your profile." },
    { key: "relocation-cost", label: "Estimate your relocation cost", href: `${TOOLS}/relocation-cost-estimator/`, description: "Estimate first-year costs for a self-employed move." },
    { key: "moving-checklist", label: "Generate a moving checklist", href: `${TOOLS}/moving-checklist/`, description: "Create a checklist tailored to your business relocation." },
    { key: "first-90-days", label: "First 90 Days Planner", href: `${TOOLS}/first-90-days/`, description: "Plan your first weeks after arrival." },
    { key: "arrival-planner", label: "Arrival Planner", href: `${TOOLS}/arrival-planner/`, description: "Plan arrival and first steps." },
  ],
};
