/**
 * Netherlands Highly Skilled Migrant (kennismigrant) visa – data source for the canonical pillar page.
 * Figures (salary thresholds, fees) are maintained here for easy updates; see IND for official current values.
 * @see https://ind.nl/en/residence-permits/work/highly-skilled-migrant
 * @see https://ind.nl/en/required-amounts-income-requirements
 * @see https://ind.nl/en/fees-costs-of-an-application
 */

import type { VisaPageData } from "./types";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;

export const HIGHLY_SKILLED_MIGRANT_VISA: VisaPageData = {
  slug: "highly-skilled-migrant",
  path: `${BASE}/visa/highly-skilled-migrant/`,
  title: "Highly Skilled Migrant Visa in the Netherlands",
  shortTitle: "Highly Skilled Migrant Visa",
  category: "Work visa",
  heroImage: "/images/heroes/highly-skilled-migrant-netherlands.png",
  heroImageAlt:
    "A person at a desk by a Dutch canal window, meticulously reviewing highly skilled migrant visa documents, with a laptop showing a global migration route and a 'Work Visa' folder, symbolizing relocation planning to the Netherlands.",
  summary:
    "The Highly Skilled Migrant permit (kennismigrant) is a Dutch residence permit for employees in qualifying skilled roles. Only an employer recognized by the IND can apply. It is one of the most common non-EU work routes for expats moving to the Netherlands.",

  seo: {
    title: "Highly Skilled Migrant Visa in the Netherlands | Salary, Sponsor, Costs",
    description:
      "A practical guide to the Netherlands Highly Skilled Migrant visa covering recognized sponsor rules, salary thresholds, application cost, required documents, timeline, and relocation tools.",
  },

  keyFacts: {
    routeType: "Employer-sponsored work permit",
    sponsorRequirement: "Recognized IND sponsor",
    indFee: "€423",
    commonUsers: "Tech, engineering, finance, consulting, research",
  },

  eligibility: [
    "Non-EU professionals with a Dutch job offer",
    "Employees hired by recognized IND sponsor employers",
    "Tech, engineering, finance, consulting, research, and similar roles",
    "Professionals relocating alone, with partner, or with family",
    "People moving from countries such as India, US, UK, South Africa, and others",
  ],

  salaryThresholds: [
    { label: "Age 30 and over", amountMonthly: "€5,942", note: "gross per month (without holiday pay)" },
    { label: "Under 30", amountMonthly: "€4,357", note: "gross per month" },
    { label: "Reduced criterion", amountMonthly: "€3,122", note: "gross per month (certain cases)" },
  ],

  fees: {
    applicationFee: "€423",
    note: "IND application fee; employer and role conditions still apply besides salary.",
  },

  employerRequirements: [
    "Employer must be recognized by the IND as a sponsor",
    "Employer submits the application for the permit",
    "Employer has sponsor obligations (e.g. salary, conditions, reporting)",
    "Market-conform salary and compliant employment conditions apply",
    "Eligibility depends on your exact employment setup",
  ],

  processSteps: [
    { step: 1, title: "Receive qualifying offer from recognized sponsor" },
    { step: 2, title: "Employer prepares and submits application" },
    { step: 3, title: "IND reviews application" },
    { step: 4, title: "Decision / notice issued" },
    { step: 5, title: "Travel / arrival planning" },
    { step: 6, title: "Municipality registration + BSN" },
    { step: 7, title: "Residence card / biometrics / follow-up steps where needed" },
  ],

  documents: [
    { name: "Passport" },
    { name: "Employment contract / offer" },
    { name: "Sponsor / employer details" },
    { name: "Civil status documents if applicable" },
    { name: "Birth certificate / marriage certificate where relevant" },
    { name: "Proofs the IND or municipality may request depending on case" },
    { name: "Residence-related supporting documents for partner/family if included" },
  ],

  alternatives: [
    {
      route: "EU Blue Card",
      bestFor: "Highly qualified non-EU workers (EU-wide scheme)",
      mainDifference: "Different salary and eligibility rules; can offer mobility in the EU.",
      href: `${BASE}/visa/eu-blue-card/`,
    },
    {
      route: "DAFT (Dutch-American Friendship Treaty)",
      bestFor: "US citizens who are self-employed or entrepreneurs",
      mainDifference: "No employer sponsor; business and investment requirements.",
      href: `${BASE}/visa/dutch-american-friendship-treaty/`,
    },
    {
      route: "Self-employed visa",
      bestFor: "Non-EU freelancers and entrepreneurs (general route)",
      mainDifference: "No employer sponsor; profit and business viability requirements.",
      href: `${BASE}/visa/self-employed-visa/`,
    },
    {
      route: "Partner / family visa",
      bestFor: "Partners or family members of Dutch or EU residents",
      mainDifference: "Based on relationship and sponsor’s status, not employment.",
      href: `${BASE}/visa/partner-family-visa/`,
    },
    {
      route: "Student visa",
      bestFor: "Students admitted to a Dutch institution",
      mainDifference: "Tied to study; different work rights and conditions.",
      href: `${BASE}/visa/student-visa/`,
    },
    {
      route: "Intra-corporate transferee (ICT)",
      bestFor: "Managers, specialists, trainees transferred within a multinational",
      mainDifference: "Temporary transfer; different duration and conditions.",
    },
  ],

  services: [
    {
      name: "Wise",
      description: "International transfers, salary transition, and moving money before and after arrival.",
      url: "https://wise.com/",
      indicativeCost: "Variable fee by route",
      reason: "Multi-currency and international transfers",
      logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
    },
    {
      name: "bunq",
      description: "Dutch banking after arrival; popular with internationals and expats.",
      url: "https://www.bunq.com/",
      indicativeCost: "Tiered monthly plans",
      reason: "Expat-friendly, fast setup",
      logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
    },
    {
      name: "HousingAnywhere",
      description: "Temporary and mid-term rentals often used by internationals while settling in.",
      url: "https://housinganywhere.com/",
      indicativeCost: "City-dependent housing cost",
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
      indicativeCost: "Comparison free; policy prices vary",
      reason: "Insurance comparison, health",
      logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    },
    {
      name: "IN Amsterdam / Official expat centre",
      description: "One-stop-shop and municipality + immigration support where available for international newcomers.",
      url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/how-in-amsterdam-helps-international-newcomers/in-amsterdam-services-for-international-newcomers",
      indicativeCost: "Official service / regional availability",
      reason: "Official expat support, registration, immigration",
      logo: { src: "/images/affiliates/logos/expat-center-amsterdam.svg", alt: "Expat Center Amsterdam logo" },
    },
    {
      name: "Everaert Immigration Lawyers",
      description: "Complex immigration cases, employer and family questions, and tailored advice.",
      url: "https://www.everaert.nl/",
      indicativeCost: "Consultation-based",
      reason: "Legal support for complex cases",
    },
  ],

  faq: [
    {
      q: "What is a highly skilled migrant visa in the Netherlands?",
      a: "The Highly Skilled Migrant (kennismigrant) permit is a Dutch residence permit for employees in qualifying skilled roles. Only an employer recognized by the IND can apply. It is one of the most common work routes for non-EU professionals moving to the Netherlands.",
    },
    {
      q: "Do I need a recognized sponsor employer?",
      a: "Yes. Only an employer that is a recognized sponsor with the IND can apply for a highly skilled migrant permit. You cannot apply for this permit yourself without a qualifying job offer from such an employer.",
    },
    {
      q: "What salary do I need for a highly skilled migrant permit?",
      a: "The IND sets minimum salary thresholds (gross per month, without holiday pay). As of the current figures: age 30 and over €5,942; under 30 €4,357; reduced criterion €3,122 in certain cases. These amounts can change; check the IND required-amounts page for the latest figures.",
    },
    {
      q: "Can I move to the Netherlands on this visa without a job offer?",
      a: "No. This route requires a job offer from a recognized sponsor. If you do not have an offer, you would need another basis (e.g. partner visa, study, DAFT if eligible, or EU Blue Card with a qualifying offer).",
    },
    {
      q: "How much does the application cost?",
      a: "The IND application fee for the highly skilled migrant permit is €423 (current figure). Check the IND fees page for the latest amount.",
    },
    {
      q: "Can my partner or family move with me?",
      a: "Yes. Partner and family members can apply to join you under family reunification rules. They will need to meet the requirements set by the IND (relationship, income, housing, etc.).",
    },
    {
      q: "What is the difference between Highly Skilled Migrant and EU Blue Card?",
      a: "Both are work-based routes for non-EU employees in the Netherlands, but they use different rules (salary tiers, sponsor framing, and EU mobility). On this page, use the table of contents link “HSM vs EU Blue Card” for a side-by-side comparison and concrete salary examples. Your employer chooses the permit type and the IND decides; always confirm current thresholds on the IND required-amounts page.",
    },
    {
      q: "What happens after approval?",
      a: "After a positive decision you can plan travel. You will need to register with the municipality, get a BSN, and complete any biometrics or card collection. Some applicants may start working after the positive decision (as stated in the notice) before receiving the physical residence card, for up to 4 months in certain cases. Confirm with your employer and the IND.",
    },
    {
      q: "Can I start working before I receive the residence card?",
      a: "The IND states that some first-time applicants may start working after a positive decision if stated in the notice, without the residence card, for up to 4 months. Always confirm with the decision letter and your employer.",
    },
    {
      q: "Which tools should I use to plan the move?",
      a: "Use the Document Readiness Checker to see which documents matter for your profile, the Relocation Cost Estimator to budget, the Moving Checklist to build a timeline, and the First 90 Days Planner to plan your first weeks after arrival.",
    },
  ],

  relatedGuides: [
    { label: "EU vs Non-EU Moving to the Netherlands", href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/` },
    { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
    { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    { label: "First 90 Days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
    { label: "Documents needed to move", href: `${BASE}/documents-needed-to-move-netherlands/` },
    { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
    { label: "Visa documents for the Netherlands", href: `${BASE}/visa-documents-netherlands/` },
  ],

  relatedCountryPages: [
    { label: "Moving from India", href: `${BASE}/moving/moving-to-netherlands-from/india/` },
    { label: "Moving from the United States", href: `${BASE}/moving/moving-to-netherlands-from/us/` },
    { label: "Moving from the United Kingdom", href: `${BASE}/moving/moving-to-netherlands-from/uk/` },
    { label: "Moving from South Africa", href: `${BASE}/moving/moving-to-netherlands-from/south-africa/` },
  ],

  exampleScenarios: [
    {
      title: "Software engineer relocating from India",
      summary: "Single professional with a tech offer from a recognized sponsor; typical documents include passport, degree, contract, and sponsor details. Timeline and housing search often start before approval.",
      href: `${TOOLS}/relocation-cost-estimator/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Finance professional relocating from the United States",
      summary: "Relocating with a partner; both need to plan documents, registration, and first-month admin. Employer may support with relocation and registration appointments.",
      href: `${TOOLS}/moving-checklist/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Couple relocating from South Africa on employer sponsorship",
      summary: "One partner on HSM permit, the other on family reunification. Plan for two application streams, housing that meets IND requirements, and joint registration and BSN steps.",
      href: `${TOOLS}/first-90-days/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Family relocation on a sponsor route",
      summary: "Primary applicant on HSM; partner and children joining. Documents for all family members, school and childcare research, and first 90 days planning for the whole household.",
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
      description: "See which documents matter for your profile.",
    },
    {
      key: "relocation-cost",
      label: "Estimate your relocation cost",
      href: `${TOOLS}/relocation-cost-estimator/`,
      description: "Estimate first-year costs for an employer-sponsored move.",
    },
    {
      key: "moving-checklist",
      label: "Generate a moving checklist",
      href: `${TOOLS}/moving-checklist/`,
      description: "Create a checklist tailored to a recognized sponsor route.",
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
