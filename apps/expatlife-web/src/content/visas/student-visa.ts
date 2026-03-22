/**
 * Netherlands student visa / student residence permit – data source for the canonical pillar page.
 * People often say "student visa"; for most non-EU students this is the Dutch student residence permit route.
 * Figures (fees, study amounts) are maintained here for easy updates; see IND for official current values.
 * @see https://ind.nl/en/residence-permits/study
 * @see https://ind.nl/en/residence-permits/study/student-residence-permit-secondary-or-vocational-education
 * @see https://ind.nl/en/fees-costs-of-an-application
 * @see https://ind.nl/en/required-amounts-income-requirements
 * @see https://ind.nl/en/after-your-application/decision-periods
 * @see https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year
 */

import type { VisaPageData } from "./types";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;

export const STUDENT_VISA: VisaPageData = {
  slug: "student-visa",
  path: `${BASE}/visa/student-visa/`,
  title: "Student Visa in the Netherlands",
  shortTitle: "Student Visa",
  category: "Study visa",
  heroImage: "/images/heroes/student-visa-netherlands.png",
  heroImageAlt:
    "International student planning relocation in the Netherlands. A person writes in a notebook at a desk by a canal window, with a laptop showing a European travel map, passport, and a 'Business & Relocation Plan' binder.",
  summary:
    "People often say 'student visa'; for most non-EU students the practical route is a Dutch study residence permit. The educational institution usually submits the application. This page covers who it is for, the official fee, study amounts, documents, and how to plan your move.",

  seo: {
    title: "Student Visa in the Netherlands | Costs, Requirements, Timeline",
    description:
      "A practical guide to the Netherlands student visa route covering application fees, study amounts, documents, the role of the educational institution, timeline, and relocation tools.",
  },

  keyFacts: {
    routeType: "Study residence permit",
    sponsorRequirement: "Educational institution (typical submitter)",
    indFee: "€254",
    commonUsers: "International students admitted to qualifying Dutch education",
  },

  eligibility: [
    "International students admitted to qualifying Dutch universities or HBO institutions",
    "Students in secondary or vocational education where the route applies",
    "Students planning to move alone, as a couple, or with family context to manage separately",
    "Students who need a legal residence route tied to study rather than work",
  ],

  fees: {
    applicationFee: "€254",
    note: "IND application fee for study residence permit (current figure). Fees and study amounts can change annually; check IND for latest values.",
  },

  studyAmounts: [
    { label: "Study amount 2026 (HBO / university)", amount: "€1,130.77", note: "per month" },
    { label: "Study amount 2026 (secondary / MBO)", amount: "€928.58", note: "per month" },
  ],

  institutionRequirements: [
    "For standard student routes, the educational institution usually submits the application",
    "The institution is central to the process",
    "Admission often comes before immigration filing",
    "Students should coordinate deadlines, finances, and arrival timing with the institution",
    "This route is different from employer-sponsored work visas",
  ],

  processSteps: [
    { step: 1, title: "Receive admission from a qualifying institution" },
    { step: 2, title: "Prepare required financial and identity documents" },
    { step: 3, title: "Educational institution submits the application" },
    { step: 4, title: "Pay application fee" },
    { step: 5, title: "Wait for IND decision (e.g. 60 days for the route shown)" },
    { step: 6, title: "Plan travel and temporary housing" },
    { step: 7, title: "Register with municipality and complete arrival admin" },
  ],

  documents: [
    { name: "Passport" },
    { name: "Admission / enrolment documentation" },
    { name: "Proof of sufficient financial means where required" },
    { name: "Civil status documents if relevant" },
    { name: "Birth certificate where relevant to municipal / personal administration" },
    { name: "Housing / arrival planning documents" },
    { name: "Insurance-related information where applicable" },
  ],

  alternatives: [
    {
      route: "Highly Skilled Migrant",
      bestFor: "Employees with a job offer from a recognised sponsor",
      mainDifference: "Employment-first; employer submits application.",
      href: `${BASE}/visa/highly-skilled-migrant/`,
    },
    {
      route: "EU Blue Card",
      bestFor: "Highly qualified non-EU workers with a qualifying job",
      mainDifference: "Employment-first; EU-wide scheme.",
      href: `${BASE}/visa/eu-blue-card/`,
    },
    {
      route: "Partner / family visa",
      bestFor: "Partners or family members of Dutch or EU residents",
      mainDifference: "Relationship-based residence, not study.",
      href: `${BASE}/visa/partner-family-visa/`,
    },
    {
      route: "DAFT (Dutch-American Friendship Treaty)",
      bestFor: "US citizens who are self-employed or entrepreneurs",
      mainDifference: "Entrepreneur route; no study required.",
      href: `${BASE}/visa/dutch-american-friendship-treaty/`,
    },
  ],

  services: [
    {
      name: "Wise",
      description: "International transfers for tuition and moving money before and after arrival.",
      url: "https://wise.com/",
      indicativeCost: "Variable fee by route",
      reason: "Tuition and international transfers",
      logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
    },
    {
      name: "bunq",
      description: "Dutch banking after arrival; popular with internationals and students.",
      url: "https://www.bunq.com/",
      indicativeCost: "Tiered monthly plans",
      reason: "Expat-friendly, fast setup",
      logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
    },
    {
      name: "HousingAnywhere",
      description: "Temporary and student-friendly accommodation search.",
      url: "https://housinganywhere.com/",
      indicativeCost: "City-dependent",
      reason: "Student housing, temporary rentals",
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
      description: "Compare Dutch health and other insurance options.",
      url: "https://www.independer.nl/",
      indicativeCost: "Comparison free; premiums vary",
      reason: "Insurance comparison",
      logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    },
    {
      name: "Study in Holland (Nuffic)",
      description: "Official information on studying in the Netherlands for international students.",
      url: "https://www.studyinholland.nl/",
      indicativeCost: "Free information",
      reason: "Study guidance, institution-related planning",
    },
  ],

  faq: [
    {
      q: "What is the student visa in the Netherlands?",
      a: "People often say 'student visa,' but for most non-EU students the practical route is a Dutch study residence permit. Depending on nationality and length of stay, an MVV (provisional residence permit) plus residence permit may apply. The educational institution usually submits the application.",
    },
    {
      q: "Is it a visa or a residence permit?",
      a: "For long-term study, the Netherlands typically uses a study residence permit. Some nationals also need an MVV (authorisation for temporary stay) before travel. The exact route depends on your nationality and study type; your institution and the IND can confirm.",
    },
    {
      q: "How much is the application fee?",
      a: "The IND application fee for the study residence permit is €254 (current figure). Check the IND fees page for the latest amount.",
    },
    {
      q: "How much money do I need to show to study in the Netherlands?",
      a: "The IND sets study amounts that institutions use for proof-of-funds. For 2026: €1,130.77 per month for HBO/university and €928.58 per month for secondary/MBO. These amounts can change; check the IND required-amounts page. Your total relocation budget is usually much higher once housing, travel, deposits, and setup are included.",
    },
    {
      q: "Who submits the application?",
      a: "For standard student routes, the educational institution (your school or university) usually submits the application to the IND. You coordinate with them on documents, fees, and timing.",
    },
    {
      q: "How long does the application take?",
      a: "The IND states a 60-day decision period for the student residence permit on the relevant study page. Confirm current processing times with your institution and the IND.",
    },
    {
      q: "Can I move to the Netherlands to study without a job?",
      a: "Yes. The student route is for study, not employment. You need admission from a qualifying institution and must meet the financial and document requirements. You do not need a job offer.",
    },
    {
      q: "What happens after approval?",
      a: "After a positive decision you can plan travel. You will need to register with the municipality, get a BSN, arrange housing, open a bank account, and take care of health insurance and first-week admin. Use the First 90 Days Planner and Arrival Planner to sequence steps.",
    },
    {
      q: "What should I arrange in my first weeks?",
      a: "Priority tasks usually include municipality registration, BSN, housing, bank account, health insurance, and mobile plan. Your institution may provide checklists; our tools (Document Readiness Checker, Moving Checklist, First 90 Days Planner) help you plan.",
    },
    {
      q: "Which tools should I use to plan my move?",
      a: "Use the Document Readiness Checker to see which documents matter for your profile, the Relocation Cost Estimator to budget for a student move, the Moving Checklist to build a timeline, and the First 90 Days Planner to plan your first weeks after arrival.",
    },
  ],

  relatedGuides: [
    { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
    { label: "First 90 Days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
    { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
    { label: "Documents needed to move", href: `${BASE}/documents-needed-to-move-netherlands/` },
    { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    { label: "Highly Skilled Migrant Visa in the Netherlands", href: `${BASE}/visa/highly-skilled-migrant/` },
    { label: "EU Blue Card in the Netherlands", href: `${BASE}/visa/eu-blue-card/` },
    { label: "Moving to the Netherlands from your country", href: `${BASE}/moving/moving-to-netherlands-from/` },
  ],

  relatedCountryPages: [
    { label: "Moving from India", href: `${BASE}/moving/moving-to-netherlands-from/india/` },
    { label: "Moving from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
    { label: "Moving from the United Kingdom", href: `${BASE}/moving/moving-to-netherlands-from/united-kingdom/` },
    { label: "Moving from South Africa", href: `${BASE}/moving/moving-to-netherlands-from/south-africa/` },
  ],

  exampleScenarios: [
    {
      title: "Master's student relocating from India",
      summary: "Admitted to a Dutch university; typical documents include passport, admission letter, proof of funds, and enrolment confirmation. Plan housing and registration early.",
      href: `${TOOLS}/relocation-cost-estimator/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Bachelor's student relocating from the United States",
      summary: "Moving alone; coordinate with institution on application submission. Plan for BSN, bank account, and health insurance in the first weeks.",
      href: `${TOOLS}/moving-checklist/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Student arriving from the United Kingdom after admission",
      summary: "Post-Brexit non-EU rules apply. Plan documents, proof of funds, and arrival timeline with your institution and the IND.",
      href: `${TOOLS}/first-90-days/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Student planning with partner / family complexity",
      summary: "Study as main applicant; partner or family may have separate residence options. Plan documents and housing for household size.",
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
      description: "See which documents may matter for your profile.",
    },
    {
      key: "relocation-cost",
      label: "Estimate your relocation cost",
      href: `${TOOLS}/relocation-cost-estimator/`,
      description: "Estimate first-year costs for moving to study in the Netherlands.",
    },
    {
      key: "moving-checklist",
      label: "Generate a moving checklist",
      href: `${TOOLS}/moving-checklist/`,
      description: "Create a checklist tailored to your study route.",
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
