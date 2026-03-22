/**
 * Centralized route dataset for the Netherlands visa checker.
 * Used for result cards, comparison table, and links to full visa guides.
 * Fee and timeline values aligned with central visa content where possible.
 */

import type { VisaRouteSlug } from "./types";

export interface VisaCheckerRouteEntry {
  slug: VisaRouteSlug;
  title: string;
  shortDescription: string;
  bestFor: string;
  guideHref: string;
  primaryUseCases: string[];
  basicEligibilitySignals: string[];
  currentFeeReference: string;
  timelineRange: string;
  complexityLabel: "Low" | "Medium" | "High";
  workRightsOrType: string;
  compareAgainst?: VisaRouteSlug[];
  officialSourceLinks: Array<{ label: string; href: string }>;
}

const BASE = "/netherlands";

export const VISA_CHECKER_ROUTES: VisaCheckerRouteEntry[] = [
  {
    slug: "no-visa-needed",
    title: "No visa required (EU/EEA/Switzerland)",
    shortDescription: "Free movement within the EU/EEA and Switzerland.",
    bestFor: "EU/EEA/Swiss citizens relocating to the Netherlands.",
    guideHref: `${BASE}/eu-vs-non-eu-moving-to-netherlands/`,
    primaryUseCases: ["Work", "Study", "Family", "Self-employment"],
    basicEligibilitySignals: ["EU/EEA/Swiss citizenship"],
    currentFeeReference: "No residence permit fee for EU/EEA/Swiss",
    timelineRange: "Registration only; no permit application",
    complexityLabel: "Low",
    workRightsOrType: "Full work rights",
    officialSourceLinks: [
      { label: "Government.nl – EU citizens", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
    ],
  },
  {
    slug: "highly-skilled-migrant",
    title: "Highly Skilled Migrant Visa",
    shortDescription: "Employer-sponsored permit for qualified professionals.",
    bestFor: "Non-EU professionals with a Dutch job offer from a recognized sponsor.",
    guideHref: `${BASE}/visa/highly-skilled-migrant/`,
    primaryUseCases: ["Work for employer", "Tech", "Finance", "Consulting"],
    basicEligibilitySignals: ["Job offer", "Recognized sponsor", "Salary threshold"],
    currentFeeReference: "€423",
    timelineRange: "1–3 months",
    complexityLabel: "Medium",
    workRightsOrType: "Work for sponsor; permit tied to employer",
    compareAgainst: ["eu-blue-card"],
    officialSourceLinks: [
      { label: "IND Highly Skilled Migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
      { label: "IND required amounts", href: "https://ind.nl/en/required-amounts-income-requirements" },
    ],
  },
  {
    slug: "eu-blue-card",
    title: "EU Blue Card",
    shortDescription: "EU-wide skilled work residence permit.",
    bestFor: "Non-EU professionals with a qualifying job and salary.",
    guideHref: `${BASE}/visa/eu-blue-card/`,
    primaryUseCases: ["Work for employer", "Skilled roles", "EU mobility"],
    basicEligibilitySignals: ["Qualifying job", "Salary threshold", "Higher education or experience"],
    currentFeeReference: "€423",
    timelineRange: "1–3 months (30 days if recognised sponsor)",
    complexityLabel: "Medium",
    workRightsOrType: "Work for employer; EU Blue Card framework",
    compareAgainst: ["highly-skilled-migrant"],
    officialSourceLinks: [
      { label: "IND EU Blue Card", href: "https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit" },
    ],
  },
  {
    slug: "dutch-american-friendship-treaty",
    title: "Dutch-American Friendship Treaty (DAFT)",
    shortDescription: "Self-employed route for eligible US citizens.",
    bestFor: "US citizens planning to run a business or work as self-employed in the Netherlands.",
    guideHref: `${BASE}/visa/dutch-american-friendship-treaty/`,
    primaryUseCases: ["Freelance", "Startup", "Small business", "US citizens only"],
    basicEligibilitySignals: ["US citizenship", "Business plan", "Minimum investment €4,500"],
    currentFeeReference: "€423",
    timelineRange: "2–4 months",
    complexityLabel: "Medium",
    workRightsOrType: "Self-employment only",
    compareAgainst: ["self-employed-visa"],
    officialSourceLinks: [
      { label: "IND self-employed permit", href: "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person" },
      { label: "IND fees", href: "https://ind.nl/en/fees-costs-of-an-application" },
    ],
  },
  {
    slug: "self-employed-visa",
    title: "Self-Employed Visa",
    shortDescription: "Residence permit for self-employed persons (non-DAFT).",
    bestFor: "Non-EU freelancers and entrepreneurs without US citizenship.",
    guideHref: `${BASE}/visa/self-employed-visa/`,
    primaryUseCases: ["Freelance", "Consulting", "Founder", "Independent professional"],
    basicEligibilitySignals: ["Business plan", "Viability", "Profit requirement"],
    currentFeeReference: "€423",
    timelineRange: "3–6 months",
    complexityLabel: "High",
    workRightsOrType: "Self-employment only",
    compareAgainst: ["dutch-american-friendship-treaty"],
    officialSourceLinks: [
      { label: "IND self-employed permit", href: "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person" },
      { label: "Business.gov.nl", href: "https://business.gov.nl/regulations/work-permit-self-employed-professionals/" },
    ],
  },
  {
    slug: "student-visa",
    title: "Student Visa",
    shortDescription: "Study residence permit for non-EU students.",
    bestFor: "Non-EU students admitted to qualifying Dutch education.",
    guideHref: `${BASE}/visa/student-visa/`,
    primaryUseCases: ["University", "HBO", "Vocational", "Exchange"],
    basicEligibilitySignals: ["Admission", "Proof of funds", "Educational institution as sponsor"],
    currentFeeReference: "€254",
    timelineRange: "1–2 months after admission",
    complexityLabel: "Medium",
    workRightsOrType: "Limited work rights during study",
    officialSourceLinks: [
      { label: "IND study permits", href: "https://ind.nl/en/residence-permits/study" },
    ],
  },
  {
    slug: "partner-family-visa",
    title: "Partner & Family Visa",
    shortDescription: "Residence permit to join partner or family in the Netherlands.",
    bestFor: "Spouses, partners, and family members of residents.",
    guideHref: `${BASE}/visa/partner-family-visa/`,
    primaryUseCases: ["Partner", "Spouse", "Family reunification"],
    basicEligibilitySignals: ["Sponsor in NL", "Relationship", "Income requirement"],
    currentFeeReference: "From €45 (child) / €210 (adult)",
    timelineRange: "2–4 months",
    complexityLabel: "Medium",
    workRightsOrType: "Full work rights once permit granted",
    officialSourceLinks: [
      { label: "IND partner permit", href: "https://ind.nl/en/residence-permits/family-and-partner/residence-permit-for-partner" },
    ],
  },
];

export function getRouteBySlug(slug: VisaRouteSlug): VisaCheckerRouteEntry | undefined {
  return VISA_CHECKER_ROUTES.find((r) => r.slug === slug);
}

export function getRoutesBySlugs(slugs: VisaRouteSlug[]): VisaCheckerRouteEntry[] {
  return slugs
    .map((s) => getRouteBySlug(s))
    .filter((r): r is VisaCheckerRouteEntry => r != null);
}
