/**
 * Netherlands EU (European) Blue Card – data source for the canonical pillar page.
 * Figures (salary thresholds, fees, decision periods) are maintained here for easy updates; see IND for official current values.
 * @see https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit
 * @see https://ind.nl/en/required-amounts-income-requirements
 * @see https://ind.nl/en/fees-costs-of-an-application
 * @see https://ind.nl/en/after-your-application/decision-periods
 * @see https://ind.nl/en/news/fees-and-required-amounts-for-2026-known
 */

import type { VisaPageData } from "./types";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;

export const EU_BLUE_CARD_VISA: VisaPageData = {
  slug: "eu-blue-card",
  path: `${BASE}/visa/eu-blue-card/`,
  title: "EU Blue Card in the Netherlands",
  shortTitle: "EU Blue Card",
  category: "Work visa",
  heroImage: "/images/heroes/eu-blue-card-netherlands.png",
  heroImageAlt:
    "An international professional works on a relocation plan at a desk by a Dutch canal window, with a laptop showing a European map, job offer documents, and a passport, symbolizing EU Blue Card planning in the Netherlands.",
  summary:
    "The EU Blue Card is a residence permit for highly qualified non-EU employees with a qualifying job in the Netherlands. It has its own salary thresholds and eligibility rules, and can be relevant for professionals who value the EU-wide framework. It is different from the Dutch Highly Skilled Migrant route.",

  seo: {
    title: "EU Blue Card in the Netherlands | Salary, Costs, Process",
    description:
      "A practical guide to the EU Blue Card in the Netherlands covering salary thresholds, application costs, documents, decision periods, comparisons with Highly Skilled Migrant, and relocation tools.",
  },

  keyFacts: {
    routeType: "Skilled work residence permit",
    sponsorRequirement: "Qualifying employer / application route",
    indFee: "€423",
    commonUsers: "International professionals with qualifying employment",
  },

  eligibility: [
    "Non-EU professionals with a qualifying job in the Netherlands",
    "Skilled employees comparing work-based residence routes",
    "Professionals who may benefit from the EU Blue Card framework",
    "Employees relocating alone, with partner, or with family",
    "People moving from countries such as India, South Africa, the US, and the UK where employer-sponsored or qualified employee routes are common",
  ],

  salaryThresholds: [
    { label: "Standard EU Blue Card threshold", amountMonthly: "€5,942", note: "gross per month (without holiday allowance)" },
    { label: "Reduced salary criterion", amountMonthly: "€4,754", note: "gross per month (without holiday allowance)" },
  ],

  fees: {
    applicationFee: "€423",
    note: "IND application fee (current figure). Salary alone does not guarantee approval; other route requirements still matter. Check IND for latest amounts.",
  },

  employerRequirements: [
    "This is a work-based residence route; employer involvement and application setup matter",
    "Applications submitted by a recognised sponsor can benefit from a 30-day decision period",
    "Other cases can fall under a 90-day decision period",
    "Practical route choice should be confirmed against current IND rules",
    "Many expats compare the EU Blue Card with the Highly Skilled Migrant route before deciding",
  ],

  processSteps: [
    { step: 1, title: "Confirm the EU Blue Card fits better than Highly Skilled Migrant for your situation" },
    { step: 2, title: "Gather contract, salary, and supporting documentation" },
    { step: 3, title: "Prepare and submit application" },
    { step: 4, title: "IND reviews the application" },
    { step: 5, title: "Receive decision / notice" },
    { step: 6, title: "Plan travel and temporary housing" },
    { step: 7, title: "Register with municipality, receive BSN, and complete arrival setup" },
  ],

  documents: [
    { name: "Passport" },
    { name: "Employment contract / offer" },
    { name: "Qualification-related evidence where relevant" },
    { name: "Employer / sponsor information" },
    { name: "Civil status documents if moving with partner or children" },
    { name: "Residence / registration-supporting documents depending on move planning" },
  ],

  alternatives: [
    {
      route: "Highly Skilled Migrant",
      bestFor: "Common Dutch employer-sponsored work route",
      mainDifference: "Netherlands-specific; recognised sponsor; different salary tiers (e.g. under 30).",
      href: `${BASE}/visa/highly-skilled-migrant/`,
    },
    {
      route: "DAFT (Dutch-American Friendship Treaty)",
      bestFor: "US citizens who are self-employed or entrepreneurs",
      mainDifference: "No employer sponsor; business and investment requirements.",
      href: `${BASE}/visa/dutch-american-friendship-treaty/`,
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
      route: "Intra-company transfer (ICT)",
      bestFor: "Managers, specialists, trainees transferred within a multinational",
      mainDifference: "Temporary transfer; different duration and conditions.",
    },
  ],

  services: [
    {
      name: "Wise",
      description: "International transfers and moving money before and after arrival.",
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
      description: "Complex immigration and work-route questions, tailored advice.",
      url: "https://www.everaert.nl/",
      indicativeCost: "Consultation-based",
      reason: "Legal support for complex cases",
    },
  ],

  faq: [
    {
      q: "What is the EU Blue Card in the Netherlands?",
      a: "The EU Blue Card is a residence permit for highly qualified non-EU employees with a qualifying job in the Netherlands. It is part of an EU-wide scheme with its own salary and eligibility rules. It is different from the Dutch Highly Skilled Migrant permit, though both are work-based routes.",
    },
    {
      q: "Who can apply for the EU Blue Card?",
      a: "Non-EU professionals with a qualifying job offer in the Netherlands who meet the salary and other requirements set by the IND. Your employer and the application path (e.g. recognised sponsor) affect how the application is processed and the decision period.",
    },
    {
      q: "What salary do I need for the EU Blue Card in the Netherlands?",
      a: "The standard threshold is €5,942 gross per month (without holiday allowance). A reduced salary criterion of €4,754 gross per month may apply in certain cases. These figures can change; check the IND required-amounts page for the latest values.",
    },
    {
      q: "How much is the application fee?",
      a: "The IND application fee for the European Blue Card is €423 (current figure). Check the IND fees page for the latest amount.",
    },
    {
      q: "How long does the application take?",
      a: "When the application is submitted by a recognised sponsor, the decision period is typically 30 days. Otherwise it can be up to 90 days. Check the IND decision-periods page for current processing times.",
    },
    {
      q: "Is the EU Blue Card the same as Highly Skilled Migrant?",
      a: "No. Both are work-based routes for skilled employees, but the EU Blue Card is an EU-wide scheme with its own salary thresholds and eligibility rules. The Highly Skilled Migrant permit is Netherlands-specific with different salary tiers (e.g. for under-30s) and sponsor rules. Compare both before deciding.",
    },
    {
      q: "Can I move to the Netherlands on this route without a job offer?",
      a: "No. The EU Blue Card requires a qualifying job and employer. If you do not have an offer, you would need another basis (e.g. partner visa, study, DAFT if eligible, or another work route with an offer).",
    },
    {
      q: "Can my partner or family move with me?",
      a: "Yes. Partner and family members can apply to join you under family reunification rules. They will need to meet the requirements set by the IND (relationship, income, housing, etc.).",
    },
    {
      q: "What happens after approval?",
      a: "After a positive decision you can plan travel. You will need to register with the municipality, get a BSN, and complete any biometrics or card collection. Plan housing, banking, health insurance, and first 30–90 day admin. Use the First 90 Days Planner and Arrival Planner tools to sequence steps.",
    },
    {
      q: "Which tools should I use to plan the move?",
      a: "Use the Document Readiness Checker to see which documents matter for your profile, the Relocation Cost Estimator to budget, the Moving Checklist to build a timeline, and the First 90 Days Planner to plan your first weeks after arrival.",
    },
  ],

  relatedGuides: [
    { label: "Highly Skilled Migrant Visa in the Netherlands", href: `${BASE}/visa/highly-skilled-migrant/` },
    { label: "Move to the Netherlands without a job", href: `${BASE}/move-to-netherlands-without-job/` },
    { label: "EU vs Non-EU moving to the Netherlands", href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/` },
    { label: "First 90 Days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
    { label: "Documents needed to move", href: `${BASE}/documents-needed-to-move-netherlands/` },
    { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
    { label: "Open a bank account in the Netherlands", href: `${BASE}/open-bank-account-netherlands/` },
    { label: "Moving to the Netherlands from your country", href: `${BASE}/moving/moving-to-netherlands-from/` },
  ],

  relatedCountryPages: [
    { label: "Moving from India", href: `${BASE}/moving/moving-to-netherlands-from/india/` },
    { label: "Moving from the United Kingdom", href: `${BASE}/moving/moving-to-netherlands-from/united-kingdom/` },
    { label: "Moving from South Africa", href: `${BASE}/moving/moving-to-netherlands-from/south-africa/` },
    { label: "Moving from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
  ],

  exampleScenarios: [
    {
      title: "Engineer relocating from India",
      summary: "Single professional with a qualifying offer; typical documents include passport, degree, contract, and employer details. Timeline and housing search often start before approval.",
      href: `${TOOLS}/relocation-cost-estimator/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Finance professional relocating from the UK",
      summary: "Relocating with a partner; both need to plan documents, registration, and first-month admin. Employer may support with relocation and registration appointments.",
      href: `${TOOLS}/moving-checklist/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Research professional relocating from South Africa",
      summary: "One partner on Blue Card, the other on family reunification. Plan for two application streams, housing that meets IND requirements, and joint registration and BSN steps.",
      href: `${TOOLS}/first-90-days/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Family relocation on a work-based employee route",
      summary: "Primary applicant on EU Blue Card; partner and children joining. Documents for all family members, school and childcare research, and first 90 days planning for the whole household.",
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
      description: "Estimate first-year costs for a skilled employee move.",
    },
    {
      key: "moving-checklist",
      label: "Generate a moving checklist",
      href: `${TOOLS}/moving-checklist/`,
      description: "Create a checklist tailored to your Blue Card route.",
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
