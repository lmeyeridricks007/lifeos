/**
 * Netherlands partner & family visa / residence permit – data source for the canonical pillar page.
 * Covers partner residence permit, family reunification, spouse, and family member routes.
 * Figures (fees, income) are maintained here for easy updates; see IND for official current values.
 * @see https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner
 * @see https://ind.nl/en/fees-costs-of-an-application
 * @see https://ind.nl/en/required-amounts-income-requirements
 * @see https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-bringing-a-foreign-partner-to-the-netherlands
 */

import type { VisaPageData } from "./types";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;

export const PARTNER_FAMILY_VISA: VisaPageData = {
  slug: "partner-family-visa",
  path: `${BASE}/visa/partner-family-visa/`,
  title: "Partner & Family Visa Netherlands",
  shortTitle: "Partner & Family Visa",
  category: "Family visa",
  heroImage: "/images/visas/netherlands-partner-family-visa-hero.png",
  heroImageAlt:
    "A smiling couple reviews relocation documents at a desk overlooking a Dutch canal, with passports, a laptop showing a world map, and a 'Relocation Plan' folder, symbolizing their joint journey to the Netherlands.",
  summary:
    "The partner or family residence permit allows spouses, registered partners, unmarried partners, and children to live in the Netherlands with a resident sponsor. Typical duration is up to 5 years, with a path to permanent residence. The sponsor must meet income and housing requirements.",

  seo: {
    title: "Partner Visa Netherlands (Family Reunification Guide 2026)",
    description:
      "Learn how to bring your partner or family to the Netherlands. Complete guide to requirements, income rules, costs, timelines, and application steps.",
  },

  keyFacts: {
    routeType: "Partner / family residence permit",
    sponsorRequirement: "Sponsor living legally in the Netherlands",
    indFee: "From €45 (child) / €210 (adult)",
    commonUsers: "Spouses, partners, and family of residents",
  },

  eligibility: [
    "Spouse of Dutch citizen",
    "Registered partner of Dutch or EU resident",
    "Unmarried long-term partner (durable relationship)",
    "Minor children of the sponsor",
    "Family members of foreign workers legally resident in the Netherlands",
  ],

  whoCanApplyCards: [
    { name: "Spouse of Dutch citizen", description: "Married to a Dutch national who lives in the Netherlands." },
    { name: "Registered partner", description: "In a registered partnership with a Dutch or qualifying EU resident." },
    { name: "Unmarried long-term partner", description: "In a durable, unmarried relationship; evidence of lasting ties required." },
    { name: "Minor children", description: "Children under 18 joining a parent who is legally resident in the Netherlands." },
    { name: "Family of foreign workers", description: "Family members of non-Dutch residents (e.g. highly skilled migrant) under family reunification rules." },
  ],

  requirementsBullets: [
    "Minimum age (usually 21 for sponsor/partner in some routes; check IND)",
    "Valid relationship (marriage, registered partnership, or durable unmarried partnership)",
    "Valid passports for applicant and sponsor",
    "Sponsor living legally in the Netherlands",
    "Sufficient income (sponsor meets IND income requirement)",
    "Adequate housing (meets IND standards)",
  ],

  typesOfPermit: [
    { name: "Partner residence permit", description: "For spouses and partners of Dutch or qualifying residents; typically up to 5 years." },
    { name: "Family reunification permit", description: "For family members joining a sponsor who has a valid residence permit." },
    { name: "Residence permit for minor child", description: "For children under 18 joining a parent in the Netherlands." },
    { name: "EU family member permit", description: "For family members of EU/EEA citizens exercising free movement rights." },
  ],

  documents: [
    { name: "Passport" },
    { name: "Marriage certificate or partnership proof" },
    { name: "Birth certificates for children" },
    { name: "Proof of income (sponsor)" },
    { name: "Employment contract (sponsor, where applicable)" },
    { name: "Proof of housing" },
    { name: "Health insurance" },
  ],

  fees: {
    applicationFee: "€210",
    note: "Adult application fee (current figure). Child and other fees may apply. Check IND for latest amounts.",
  },

  incomeRequirements: [
    { label: "Minimum income (excluding holiday allowance)", amount: "€2,294.40", note: "per month" },
    { label: "Minimum income (including holiday allowance)", amount: "€2,477.95", note: "per month" },
  ],

  costBreakdown: [
    { label: "Application fee (adult)", amount: "€210", note: "IND" },
    { label: "Child application", amount: "€45", note: "IND" },
    { label: "MVV visa (if required)", amount: "~€171", note: "When applicable" },
    { label: "Civic integration exam", amount: "€150", note: "When applicable" },
  ],

  processingTimePhases: [
    { phase: "Document preparation", duration: "2–8 weeks" },
    { phase: "IND decision", duration: "4–12 weeks" },
    { phase: "Embassy visa processing (if MVV)", duration: "2–8 weeks" },
    { phase: "Total typical timeline", duration: "2–4 months" },
  ],

  workRightsSummary:
    "Spouses and partners who receive this residence permit generally have full work authorization in the Netherlands. No separate work permit is required. This is an important benefit of the partner and family visa.",

  processSteps: [
    { step: 1, title: "Verify eligibility (relationship, sponsor status, income, housing)" },
    { step: 2, title: "Collect required documents" },
    { step: 3, title: "Submit application to IND" },
    { step: 4, title: "Pay fees" },
    { step: 5, title: "Provide biometrics where required" },
    { step: 6, title: "Wait for decision (typically within 90 days)" },
    { step: 7, title: "Travel to the Netherlands" },
    { step: 8, title: "Collect residence permit and register with municipality" },
  ],

  alternatives: [
    {
      route: "Highly Skilled Migrant",
      bestFor: "Primary applicant with a job offer",
      mainDifference: "Employer-sponsored; partner can join under family reunification.",
      href: `${BASE}/visa/highly-skilled-migrant/`,
    },
    {
      route: "EU Blue Card",
      bestFor: "Primary applicant with qualifying job",
      mainDifference: "Work route; family can join under reunification rules.",
      href: `${BASE}/visa/eu-blue-card/`,
    },
    {
      route: "Student visa",
      bestFor: "Primary purpose is study",
      mainDifference: "Study-based; different income and sponsor logic.",
      href: `${BASE}/visa/student-visa/`,
    },
    {
      route: "DAFT",
      bestFor: "US citizens who are self-employed",
      mainDifference: "Entrepreneur route; family may join under family rules.",
      href: `${BASE}/visa/dutch-american-friendship-treaty/`,
    },
  ],

  services: [
    {
      name: "Everaert Advocaten",
      description: "Immigration and family reunification advice.",
      url: "https://www.everaert.nl/",
      indicativeCost: "Consultation-based",
      reason: "Immigration lawyers",
    },
    {
      name: "Fragomen Netherlands",
      description: "Global immigration and mobility services.",
      url: "https://www.fragomen.com/",
      indicativeCost: "Service-based",
      reason: "Immigration support",
    },
    {
      name: "Kroes Advocaten",
      description: "Dutch immigration and family law.",
      url: "https://www.kroesadvocaten.nl/",
      indicativeCost: "Consultation-based",
      reason: "Immigration lawyers",
    },
    {
      name: "Expat Center Amsterdam",
      description: "Registration and immigration-related support for newcomers in Amsterdam.",
      url: "https://www.expatcenter.amsterdam/",
      indicativeCost: "Service-dependent",
      reason: "Expat relocation support",
    },
    {
      name: "ACCESS NL",
      description: "Information and support for international residents in the Netherlands.",
      url: "https://www.access-nl.org/",
      indicativeCost: "Information and referrals",
      reason: "Expat support",
    },
    {
      name: "Wise",
      description: "International transfers and moving money.",
      url: "https://wise.com/",
      indicativeCost: "Variable",
      reason: "Money transfer",
      logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
    },
    {
      name: "bunq",
      description: "Dutch banking after arrival.",
      url: "https://www.bunq.com/",
      indicativeCost: "Monthly plans",
      reason: "Banking",
      logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
    },
  ],

  officialSources: [
    { label: "IND Partner Residence Permit", href: "https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner" },
    { label: "Government NL checklist: bringing a foreign partner", href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/checklist-bringing-a-foreign-partner-to-the-netherlands" },
  ],

  faq: [
    {
      q: "Can my partner work in the Netherlands?",
      a: "Yes. Spouses and partners who receive the partner residence permit generally have full work authorization. No separate work permit is required.",
    },
    {
      q: "Do we need to be married?",
      a: "Not necessarily. The IND recognises spouses, registered partners, and unmarried long-term (durable) partners. Evidence of a lasting relationship is required for unmarried partners.",
    },
    {
      q: "How long does approval take?",
      a: "The IND typically decides within 90 days. Document preparation and, if applicable, MVV or embassy steps can add 2–8 weeks. A total timeline of 2–4 months is common.",
    },
    {
      q: "Do I need an MVV visa?",
      a: "It depends on your nationality. Some nationals need an MVV (authorisation for temporary stay) before travelling to the Netherlands; others can apply for the residence permit directly. The IND or your application form will indicate what applies.",
    },
    {
      q: "Can children come with us?",
      a: "Yes. Minor children can apply to join a parent who is legally resident in the Netherlands. They have their own application and fee (e.g. €45). Requirements for housing and income apply to the household.",
    },
  ],

  relatedGuides: [
    { label: "Moving to the Netherlands from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
    { label: "Moving to the Netherlands from the United Kingdom", href: `${BASE}/moving/moving-to-netherlands-from/united-kingdom/` },
    { label: "Moving to the Netherlands from India", href: `${BASE}/moving/moving-to-netherlands-from/india/` },
    { label: "Highly Skilled Migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
    { label: "Cost of moving to the Netherlands", href: `${BASE}/moving-to-netherlands-cost/` },
    { label: "First 90 days in the Netherlands", href: `${BASE}/first-90-days-netherlands/` },
    { label: "Documents needed to move", href: `${BASE}/documents-needed-to-move-netherlands/` },
    { label: "Moving with a partner", href: `${BASE}/moving-to-netherlands-with-partner/` },
    { label: "Moving with family", href: `${BASE}/moving-to-netherlands-with-family/` },
  ],

  relatedCountryPages: [
    { label: "Moving from the United States", href: `${BASE}/moving/moving-to-netherlands-from/united-states/` },
    { label: "Moving from the United Kingdom", href: `${BASE}/moving/moving-to-netherlands-from/united-kingdom/` },
    { label: "Moving from India", href: `${BASE}/moving/moving-to-netherlands-from/india/` },
    { label: "Moving from South Africa", href: `${BASE}/moving/moving-to-netherlands-from/south-africa/` },
  ],

  exampleScenarios: [
    {
      title: "American joining spouse working in Amsterdam",
      summary: "Partner on HSM or other work permit; you apply for partner residence permit. Plan for income proof, housing, and document certification. Typical total cost: application €210, MVV if needed ~€171, civic integration €150, plus relocation (flights, housing deposit, first months) — often €5,000–15,000+ depending on situation.",
      href: `${TOOLS}/relocation-cost-estimator/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Indian partner joining highly skilled migrant",
      summary: "Sponsor holds HSM permit; you apply for family reunification. MVV often required. Budget: IND fee €210, MVV ~€171, document legalisation/translations, integration exam €150. Total first-year relocation often €6,000–20,000 including move and setup.",
      href: `${TOOLS}/moving-checklist/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "EU citizen family reunification",
      summary: "EU/EEA sponsor exercising treaty rights; non-EU family member applies under EU law. Fees and requirements can differ from standard IND partner route. Check IND and government.nl. Relocation costs similar range depending on country of origin.",
      href: `${TOOLS}/first-90-days/`,
      ctaLabel: "Use this scenario",
    },
    {
      title: "Moving with children",
      summary: "One or both parents are sponsors; children apply as dependants. Child application fee €45 each. Housing must meet IND requirements for family size. Budget for extra fees, travel, and family-sized accommodation.",
      href: `${TOOLS}/relocation-cost-estimator/`,
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
      label: "Calculate relocation costs",
      href: `${TOOLS}/relocation-cost-estimator/`,
      description: "Estimate first-year costs for a family move.",
    },
    {
      key: "moving-checklist",
      label: "Moving checklist",
      href: `${TOOLS}/moving-checklist/`,
      description: "Create a checklist tailored to your move.",
    },
    {
      key: "first-90-days",
      label: "First 90 days planner",
      href: `${TOOLS}/first-90-days/`,
      description: "Plan your first weeks after arrival.",
    },
    {
      key: "arrival-planner",
      label: "Arrival planner",
      href: `${TOOLS}/arrival-planner/`,
      description: "Plan arrival and first steps.",
    },
  ],
};
