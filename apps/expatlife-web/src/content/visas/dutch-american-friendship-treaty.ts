/**
 * Netherlands Dutch-American Friendship Treaty (DAFT) – data source for the canonical pillar page.
 * DAFT is handled under the Dutch self-employed residence permit route for eligible US citizens.
 * Figures (fees, investment) are maintained here for easy updates; see IND for official current values.
 * @see https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person
 * @see https://ind.nl/en/fees-costs-of-an-application
 * @see https://ind.nl/en/required-amounts-income-requirements
 * @see https://business.gov.nl/
 * @see https://www.kvk.nl/en/
 */

import type { VisaPageData } from "./types";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;

export const DAFT_VISA: VisaPageData = {
  slug: "dutch-american-friendship-treaty",
  path: `${BASE}/visa/dutch-american-friendship-treaty/`,
  title: "Dutch-American Friendship Treaty (DAFT) in the Netherlands",
  shortTitle: "DAFT",
  category: "Entrepreneur visa",
  heroImage: "/images/heroes/daft-netherlands.png",
  heroImageAlt:
    "An American entrepreneur planning business and relocation to the Netherlands, working at a desk by a canal-side window with a laptop showing a world map, documents, and a passport. The image represents planning for the Dutch-American Friendship Treaty (DAFT) route.",
  summary:
    "The Dutch-American Friendship Treaty (DAFT) route allows eligible US citizens to live in the Netherlands as self-employed persons. In practice it is handled within the Dutch self-employed residence permit framework, with a minimum capital investment, business registration, and IND application.",

  seo: {
    title: "Dutch-American Friendship Treaty (DAFT) in the Netherlands | Costs, Requirements, Process",
    description:
      "A practical guide to the Dutch-American Friendship Treaty route in the Netherlands covering who it is for, the €4,500 investment requirement, IND fees, business setup, documents, timeline, and relocation tools.",
  },

  keyFacts: {
    routeType: "US entrepreneur / self-employed route",
    indFee: "€423",
    commonUsers: "Eligible US citizens starting or running a business",
  },

  eligibility: [
    "US citizens planning to operate a business in the Netherlands",
    "Freelancers, consultants, solo founders, and entrepreneurs",
    "People who do not have an employer sponsor but want a residence route tied to self-employment",
    "Founders moving alone, with a partner, or with family",
    "Americans planning to build EU market presence from the Netherlands",
  ],

  investmentRequirements: [
    { label: "Sole proprietorship / VOF / CV / BV", amount: "€4,500", note: "Minimum capital investment" },
    { label: "NV", amount: "€11,250", note: "Minimum capital investment" },
  ],

  fees: {
    applicationFee: "€423",
    note: "IND application fee for self-employed residence permit (current figure). Costs of starting and running the business are separate.",
  },

  businessSetupRequirements: [
    "Business must actually be set up and documented",
    "Registration with the Dutch Chamber of Commerce (KVK) is usually required",
    "Business form (sole prop, VOF, BV, etc.) affects capital and reporting",
    "Plan for bookkeeping and accountant support",
    "You must show the required capital investment where applicable",
    "Housing and municipality registration planning are still required for arrival",
  ],

  processSteps: [
    { step: 1, title: "Confirm DAFT suitability as your route" },
    { step: 2, title: "Prepare business setup and capital documentation" },
    { step: 3, title: "Arrange filing / application under self-employed route" },
    { step: 4, title: "Wait for IND review and decision" },
    { step: 5, title: "Plan travel and temporary housing" },
    { step: 6, title: "Register with municipality and receive BSN" },
    { step: 7, title: "Complete local setup: bank account, insurance, utilities, business admin" },
  ],

  documents: [
    { name: "US passport" },
    { name: "Business setup documents" },
    { name: "Evidence of required capital investment" },
    { name: "Chamber of Commerce / registration-related documents where applicable" },
    { name: "Business plan or activity explanation if relevant to file preparation" },
    { name: "Civil status documents if moving with partner or family" },
    { name: "Address / housing-related documents for practical move planning" },
    { name: "Supporting financial documentation as required by the route" },
  ],

  alternatives: [
    {
      route: "Highly Skilled Migrant",
      bestFor: "Employees with a job offer from a recognized sponsor",
      mainDifference: "Employer-sponsored; no self-employment or capital requirement.",
      href: `${BASE}/visa/highly-skilled-migrant/`,
    },
    {
      route: "EU Blue Card",
      bestFor: "Highly qualified non-EU workers (EU-wide scheme)",
      mainDifference: "Employee route with different salary and eligibility rules.",
      href: `${BASE}/visa/eu-blue-card/`,
    },
    {
      route: "Partner / family visa",
      bestFor: "Partners or family members of Dutch or EU residents",
      mainDifference: "Based on relationship and sponsor's status, not employment.",
      href: `${BASE}/visa/partner-family-visa/`,
    },
    {
      route: "Student visa",
      bestFor: "Students admitted to a Dutch institution",
      mainDifference: "Tied to study; different work rights and conditions.",
      href: `${BASE}/visa/student-visa/`,
    },
    {
      route: "Self-employed visa",
      bestFor: "Non-US nationals seeking self-employed residence",
      mainDifference: "General Dutch route; different evidence and profit requirements.",
      href: `${BASE}/visa/self-employed-visa/`,
    },
  ],

  services: [
    {
      name: "Wise",
      description: "Moving money internationally and operating across currencies before and after arrival.",
      url: "https://wise.com/",
      indicativeCost: "Variable by route and amount",
      reason: "International transfers, multi-currency",
      logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
    },
    {
      name: "bunq",
      description: "Dutch banking after arrival; popular with internationals and entrepreneurs.",
      url: "https://www.bunq.com/",
      indicativeCost: "Monthly plans vary",
      reason: "Expat-friendly, fast setup",
      logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
    },
    {
      name: "HousingAnywhere",
      description: "Temporary housing during arrival while securing long-term accommodation.",
      url: "https://housinganywhere.com/",
      indicativeCost: "City-dependent",
      reason: "Temporary housing, expat rentals",
      logo: { src: "/images/affiliates/logos/housinganywhere.svg", alt: "HousingAnywhere logo" },
    },
    {
      name: "Simyo",
      description: "Simple Dutch SIM-only mobile plans for early connectivity.",
      url: "https://www.simyo.nl/",
      indicativeCost: "Low-cost monthly plans",
      reason: "Mobile, no-contract options",
      logo: { src: "/images/affiliates/logos/simyo.svg", alt: "Simyo logo" },
    },
    {
      name: "Independer",
      description: "Compare Dutch health insurance options once you are ready to choose a provider.",
      url: "https://www.independer.nl/",
      indicativeCost: "Comparison free; premiums vary",
      reason: "Insurance comparison, health",
      logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    },
    {
      name: "KVK (Dutch Chamber of Commerce)",
      description: "Business registration and support information for setting up in the Netherlands.",
      url: "https://www.kvk.nl/en/",
      indicativeCost: "Registration fees apply",
      reason: "Business registration support",
    },
    {
      name: "Blue Umbrella",
      description: "Expat tax, payroll, and business setup support for international entrepreneurs.",
      url: "https://www.blueumbrella.nl/",
      indicativeCost: "Consultation-based",
      reason: "Business setup, tax, bookkeeping",
    },
    {
      name: "Everaert Immigration Lawyers",
      description: "Complex immigration and DAFT route questions, tailored advice.",
      url: "https://www.everaert.nl/",
      indicativeCost: "Consultation-based",
      reason: "Legal support for complex cases",
    },
  ],

  faq: [
    {
      q: "What is the Dutch-American Friendship Treaty?",
      a: "The Dutch-American Friendship Treaty (DAFT) is a bilateral agreement that allows eligible US citizens to apply for a Dutch residence permit as self-employed persons. In practice, the Netherlands processes this under the self-employed residence permit route, with specific requirements including business setup and a minimum capital investment.",
    },
    {
      q: "Is DAFT a visa or a residence permit route?",
      a: "DAFT is typically handled as a residence permit for self-employed persons rather than a short-stay visa. You apply for a residence permit that allows you to live and run your business in the Netherlands. The exact terminology used by the IND is 'residence permit self-employed person' for eligible US citizens under the treaty.",
    },
    {
      q: "Who can use the DAFT route?",
      a: "US citizens who plan to work in the Netherlands as self-employed persons—freelancers, consultants, founders, and entrepreneurs—and who can meet the business setup and capital requirements. You must actually set up and run a business; the route is not for passive investment or employment by a Dutch company.",
    },
    {
      q: "How much investment do I need for DAFT?",
      a: "For common business forms (sole proprietorship, VOF, CV, BV) the minimum capital investment is €4,500. For an NV it is €11,250. These are current figures; check the IND and KVK for the latest requirements. The capital threshold is not the same as your total relocation or business budget.",
    },
    {
      q: "How much is the application fee?",
      a: "The IND application fee for the self-employed residence permit is €423 (current figure). Check the IND fees page for the latest amount. This is separate from costs of incorporation, legal advice, housing, and living expenses.",
    },
    {
      q: "Do I need to start a company in the Netherlands?",
      a: "Yes. The route requires that you actually set up and operate a business. This usually means registering with the Dutch Chamber of Commerce (KVK), choosing a business form, and meeting the capital and documentation requirements. DAFT does not replace the real work of setting up and running a compliant business.",
    },
    {
      q: "Can I move to the Netherlands on DAFT without an employer?",
      a: "Yes. DAFT is designed for self-employed people who do not have an employer sponsor. You are not required to have a job offer from a Dutch company. You do need to show that you are setting up or running your own business and meeting the investment and registration requirements.",
    },
    {
      q: "Can my partner or children move with me?",
      a: "Family members can often join you under family reunification rules. They will need to meet the relationship and other requirements set by the IND. Plan for their documents, housing, and any income or support criteria that apply.",
    },
    {
      q: "How is DAFT different from Highly Skilled Migrant?",
      a: "Highly Skilled Migrant requires a job offer from a recognized Dutch sponsor employer who applies on your behalf. DAFT is for self-employed US citizens who apply based on their own business. No employer sponsor is involved; you need to meet business and capital requirements instead.",
    },
    {
      q: "Which tools should I use to plan the move?",
      a: "Use the Document Readiness Checker to see which documents matter for your profile, the Relocation Cost Estimator to budget for a founder move, the Moving Checklist to build a timeline, and the First 90 Days Planner to plan your first weeks after arrival.",
    },
  ],

  relatedGuides: [
    { label: "Moving to the Netherlands from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
    { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
    { label: "Highly Skilled Migrant Visa in the Netherlands", href: `${BASE}/visa/highly-skilled-migrant/` },
    { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
    { label: "First 90 Days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
    { label: "Documents needed to move", href: `${BASE}/documents-needed-to-move-netherlands/` },
    { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
  ],

  relatedCountryPages: [
    { label: "Moving to the Netherlands from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
  ],

  exampleScenarios: [
    {
      title: "US freelance consultant moving to Amsterdam",
      summary: "Solo consultant registering as self-employed; typical documents include passport, business plan, proof of capital, KVK registration. Plan for housing and banking early.",
      href: `${TOOLS}/relocation-cost-estimator/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "US founder building an EU-facing startup",
      summary: "Founder setting up a BV or equivalent; capital and business plan required. Timeline often includes pre-arrival prep and post-approval registration and bank setup.",
      href: `${TOOLS}/moving-checklist/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Couple relocating on a DAFT business route",
      summary: "One partner as main applicant on DAFT; the other may join under family reunification. Plan for two streams of documents and joint housing and registration.",
      href: `${TOOLS}/first-90-days/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Family relocation where one partner is the entrepreneur",
      summary: "Primary applicant on DAFT; partner and children joining. Documents for all family members, school and childcare research, and first 90 days planning for the whole household.",
      href: `${TOOLS}/arrival-planner/`,
      ctaLabel: "Use this scenario",
    },
  ],

  toolCtas: [
    {
      key: "visa-cost-calculator",
      label: "Visa Cost Calculator",
      href: "/netherlands/visa-cost-calculator/",
      description: "Want to estimate the cost of this route? Use the Visa Cost Calculator.",
    },
    {
      key: "visa-application-plan",
      label: "Personalized Visa Application Plan",
      href: "/netherlands/visa-application-plan/",
      description: "Need a step-by-step application roadmap? Get your personalized plan.",
    },
    {
      key: "document-readiness",
      label: "Check your document readiness",
      href: "/netherlands/document-readiness-checker/",
      description: "See which documents may matter for your business route.",
    },
    {
      key: "relocation-cost",
      label: "Estimate your relocation cost",
      href: `${TOOLS}/relocation-cost-estimator/`,
      description: "Estimate first-year costs for a founder move.",
    },
    {
      key: "moving-checklist",
      label: "Generate a moving checklist",
      href: `${TOOLS}/moving-checklist/`,
      description: "Create a checklist tailored to a self-employed relocation.",
    },
    {
      key: "first-90-days",
      label: "First 90 Days Planner",
      href: `${TOOLS}/first-90-days/`,
      description: "Plan your first weeks after arrival.",
    },
    {
      key: "arrival-planner",
      label: "Arrival Planner",
      href: `${TOOLS}/arrival-planner/`,
      description: "Plan arrival and first steps.",
    },
  ],
};
