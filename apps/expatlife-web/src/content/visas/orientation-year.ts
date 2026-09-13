/**
 * Netherlands Orientation Year (zoekjaar) residence permit – pillar page data.
 * Official figures sourced from IND; verify live IND pages before applying.
 *
 * @see https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year (last update 12 June 2026)
 * @see https://ind.nl/en/fees-costs-of-an-application
 * @see https://ind.nl/en/required-amounts-income-requirements
 * @see https://business.gov.nl/coming-to-the-netherlands/permits-and-visa/residence-permit-for-orientation-year/
 */

import type { VisaPageData } from "./types";
import {
  formatEurMonthly,
  HSM_SALARY_THRESHOLDS_EUR,
  IND_REQUIRED_AMOUNTS_URL,
} from "@/src/lib/tools/hsm-salary-checker/thresholds";

const BASE = "/netherlands";
const TOOLS = `${BASE}/moving/tools`;

export const ORIENTATION_YEAR_IND_URL =
  "https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year" as const;
export const ORIENTATION_YEAR_BUSINESS_GOV_URL =
  "https://business.gov.nl/coming-to-the-netherlands/permits-and-visa/residence-permit-for-orientation-year/" as const;
export const ORIENTATION_YEAR_FEES_URL = "https://ind.nl/en/fees-costs-of-an-application" as const;

/** Visible last-reviewed stamp — keep in sync with page ArticleJsonLd dateModified. */
export const ORIENTATION_YEAR_CONTENT_LAST_REVIEWED = "Last reviewed: 13 September 2026" as const;
export const ORIENTATION_YEAR_CONTENT_DATE_MODIFIED = "2026-09-13" as const;
export const ORIENTATION_YEAR_IND_PAGE_LAST_UPDATE = "12 June 2026" as const;

/** IND fee for orientation year (looking for a job after study/promotion/research) — calendar year 2026. */
export const ORIENTATION_YEAR_IND_FEE_EUR = 254 as const;
export const ORIENTATION_YEAR_IND_FEE_EFFECTIVE = "From 1 January 2026" as const;

const HSM_REDUCED_DISPLAY = formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced);

export const ORIENTATION_YEAR_VISA: VisaPageData = {
  slug: "orientation-year",
  path: `${BASE}/visa/orientation-year/`,
  title: "Orientation Year (Zoekjaar) in the Netherlands",
  shortTitle: "Orientation Year",
  category: "Search year / zoekjaar",
  heroImage: "/images/heroes/student-visa-netherlands.png",
  heroImageAlt:
    "A recent graduate plans a Netherlands job search at a desk by a canal window, with a laptop, notebook labelled Orientation Year, and passport — calm practical planning for the zoekjaar route.",
  summary:
    "The orientation year (zoekjaar) is a one-year Dutch residence permit for highly educated graduates, PhD holders and qualifying researchers to look for work or start working in the Netherlands. You apply within three years of the qualifying graduation, doctorate or research period. During the year you may work freely without a TWV. Always verify current rules on the IND orientation-year page.",

  seo: {
    title: "Orientation Year Netherlands (Zoekjaar) | Eligibility, Work Rights, HSM",
    description:
      "Practical guide to the Dutch orientation year (zoekjaar): who qualifies, when to apply, 1-year validity, free work rights, reduced HSM salary criterion, documents, fees and switching routes.",
  },

  keyFacts: {
    routeType: "Orientation year for highly educated persons (zoekjaar)",
    indFee: `€${ORIENTATION_YEAR_IND_FEE_EUR}`,
    commonUsers: "Recent graduates, PhD holders and qualifying researchers seeking work in the Netherlands",
  },

  eligibility: [
    "Within 3 years before applying: completed an accredited bachelor’s or master’s in the Netherlands, or a Dutch post-master of at least one academic year (minimum 10 months), or obtained a PhD in the Netherlands",
    "Within 3 years: master’s, post-master or PhD at a designated foreign top-200 institution (ranking rules + language/Nuffic evidence as IND requires)",
    "Within 3 years: held a Dutch residence permit for scientific research (Directive (EU) 2016/801) or HSM based on scientific research (UFO job code starting with 01)",
    "Within 3 years: obtained a master’s via an Erasmus Mundus Joint Master (Degree) programme",
    "Certain Cultural Policy Act or Dutch development-cooperation study routes — confirm on IND",
    "You apply personally; this route does not use an employer or educational-institution sponsor for the orientation-year filing itself",
  ],

  fees: {
    applicationFee: `€${ORIENTATION_YEAR_IND_FEE_EUR}`,
    note: `${ORIENTATION_YEAR_IND_FEE_EFFECTIVE} (IND fees page). Lower or zero fees may apply for nationals of Turkey, San Marino or Israel — verify on IND fees before paying.`,
  },

  salaryThresholds: [
    {
      label: "HSM reduced salary criterion (linked route)",
      amountMonthly: HSM_REDUCED_DISPLAY,
      note: "Gross per month excl. holiday pay · calendar year 2026 · when switching to HSM under IND reduced-criterion rules",
    },
  ],

  workRightsSummary:
    "During the orientation year you may work freely in the Netherlands or do an internship. Your employer does not need a TWV. You may also work as an independent entrepreneur, self-employed person or freelancer. The residence document states that work is freely permitted and a TWV is not required (IND).",

  processSteps: [
    { step: 1, title: "Confirm you are within the 3-year window of your qualifying graduation, doctorate or research end date" },
    { step: 2, title: "Gather diploma/research evidence (and Nuffic/ranking/language proofs if the foreign-institution route applies)" },
    { step: 3, title: "Apply via IND — online with DigiD if you meet the online conditions, or via the written/embassy route if abroad" },
    { step: 4, title: "Pay the IND fee (online pay immediately; written applications follow IND payment instructions)" },
    { step: 5, title: "Wait for the IND decision and collect your residence document when instructed" },
    { step: 6, title: "Use the year to job-search, work freely, or develop a business idea — then switch purpose before the year ends if you want to stay" },
  ],

  documents: [
    { name: "Valid passport" },
    { name: "Diploma, certificate or certified copy showing graduation/PhD date (Dutch accredited route)" },
    { name: "IND appendix ‘Statement on completion of study’ if you finished but do not yet hold the diploma (Dutch route)" },
    { name: "For foreign top-200 route: ranking evidence for graduation/PhD date, diploma/certificate, and Nuffic credential evaluation (or proof it was applied for)" },
    { name: "Language evidence where the foreign-institution route requires it (e.g. IELTS 6.0 or IND-listed alternatives)" },
    { name: "Research route: IND may already hold your Dutch research/HSM research permit data — follow the form for your situation" },
    { name: "TB test declaration where required after arrival" },
    { name: "MVV / representation steps if you apply from abroad and need a provisional residence permit" },
  ],

  alternatives: [
    {
      route: "Highly Skilled Migrant",
      bestFor: "Job offer from an IND-recognised sponsor meeting salary rules",
      mainDifference: "Employer-sponsored work permit; reduced HSM salary may apply after/during orientation year.",
      href: `${BASE}/visa/highly-skilled-migrant/`,
    },
    {
      route: "Student residence permit",
      bestFor: "Still studying at a Dutch institution",
      mainDifference: "Study purpose first; orientation year is typically after graduation.",
      href: `${BASE}/visa/student-visa/`,
    },
    {
      route: "EU Blue Card",
      bestFor: "Qualifying skilled employment under Blue Card rules",
      mainDifference: "Separate salary and eligibility framework from zoekjaar.",
      href: `${BASE}/visa/eu-blue-card/`,
    },
    {
      route: "Self-employed visa",
      bestFor: "Building a Dutch freelance or business case",
      mainDifference: "Viability and profit thresholds apply; orientation year allows freelancing during the year itself.",
      href: `${BASE}/visa/self-employed-visa/`,
    },
    {
      route: "Partner / family visa",
      bestFor: "Joining a qualifying sponsor in the Netherlands",
      mainDifference: "Relationship-based; family members of orientation-year holders must still meet IND family conditions.",
      href: `${BASE}/visa/partner-family-visa/`,
    },
  ],

  services: [],

  officialSources: [
    { label: "IND — Residence permit for orientation year", href: ORIENTATION_YEAR_IND_URL },
    { label: "Business.gov.nl — Orientation year", href: ORIENTATION_YEAR_BUSINESS_GOV_URL },
    { label: "IND — Fees: costs of an application", href: ORIENTATION_YEAR_FEES_URL },
    { label: "IND — Required amounts (HSM reduced criterion)", href: IND_REQUIRED_AMOUNTS_URL },
    { label: "Netherlands official figures (citation table)", href: `${BASE}/official-figures/` },
  ],

  faq: [
    {
      q: "What is the orientation year (zoekjaar) in the Netherlands?",
      a: "It is a Dutch residence permit for highly educated persons to look for work and carry out work (employed or not) after qualifying study, a doctorate or research. People also call it the search year or orientation year visa. Confirm current conditions on the IND orientation-year page.",
    },
    {
      q: "How long does the orientation year last?",
      a: "The residence permit for the orientation year for highly educated persons is valid for 1 year. According to IND and Business.gov.nl it is not extended. A further orientation year may be possible only after a new qualifying study or research completed after a previous orientation year — verify on IND.",
    },
    {
      q: "When can I apply?",
      a: "You must meet an IND eligibility ground in the 3 years before the application date (for example graduation, PhD defence date, or end of a qualifying research residence). Do not assume the clock starts on the day you leave the Netherlands — check which date IND uses for your ground.",
    },
    {
      q: "Can I work during the orientation year?",
      a: "Yes. IND states you may work freely or do an internship without a TWV, and you may work as an independent entrepreneur, self-employed person or freelancer. The residence document wording is that work is freely permitted and a TWV is not required.",
    },
    {
      q: "What is the IND application fee?",
      a: `For applications from 1 January 2026, IND lists €${ORIENTATION_YEAR_IND_FEE_EUR} for looking for a job after study, promotion or scientific research (orientation year). Exceptions can apply (for example lower fees for Turkish nationals; free for nationals of San Marino and Israel). Always check the live IND fees page.`,
    },
    {
      q: "How does the reduced HSM salary criterion relate to the orientation year?",
      a: `IND’s required-amounts page lists three reduced-criterion cases for HSM in 2026 (floor ${HSM_REDUCED_DISPLAY} gross/month excl. holiday pay): (1) HSM applied for during an orientation-year permit; (2) you previously held orientation year and apply for HSM within 3 years of graduation/PhD/research end; (3) you never held orientation year but meet its requirements and apply for HSM within that same 3-year window. Use the HSM salary checker and IND tables before signing an offer.`,
    },
    {
      q: "What happens after the orientation year?",
      a: "If you want to stay, you typically need another residence purpose before the year ends — for example Highly Skilled Migrant (often with a recognised sponsor), start-up, or self-employed. Business.gov.nl notes that changing from orientation year to HSM can mean the lower income requirement applies when IND’s reduced-criterion rules fit.",
    },
    {
      q: "Can my partner or family join me?",
      a: "IND materials note that family members may apply for residence, but they must meet the conditions for their own family/partner route. Treat partner income and housing rules as separate — see the partner/family guide and IND family pages.",
    },
    {
      q: "Is there an income requirement during the orientation year itself?",
      a: "The orientation-year purpose is looking for and carrying out work. Do not confuse it with HSM salary floors or student proof-of-funds amounts. Follow the IND application form for your situation; verify any means or document requirements on the live IND page and form notes.",
    },
  ],

  relatedGuides: [
    { label: "Highly skilled migrant visa", href: `${BASE}/visa/highly-skilled-migrant/` },
    { label: "HSM salary checker", href: `${TOOLS}/hsm-salary-checker/` },
    { label: "Student visa", href: `${BASE}/visa/student-visa/` },
    { label: "Compare visas", href: `${BASE}/visa/compare-visas/` },
    { label: "Visa checker", href: `${BASE}/visa-checker/` },
    { label: "Netherlands official figures", href: `${BASE}/official-figures/` },
    { label: "Finding jobs in the Netherlands", href: `${BASE}/jobs/finding-jobs-netherlands/` },
    { label: "English-speaking jobs", href: `${BASE}/jobs/english-speaking-jobs-netherlands/` },
  ],

  relatedCountryPages: [],

  exampleScenarios: [
    {
      title: "Dutch university graduate staying to job-hunt",
      summary: "Finish an accredited Dutch master’s, apply for orientation year within the 3-year window, work freely while interviewing, then switch to HSM with a recognised sponsor if the offer meets IND salary rules (possibly reduced criterion).",
      href: `${TOOLS}/hsm-salary-checker/`,
      ctaLabel: "Check HSM salary floors",
    },
    {
      title: "Foreign top-200 graduate entering for zoekjaar",
      summary: "Confirm designated-institution ranking evidence, Nuffic evaluation and language proofs, apply from abroad if needed (MVV may apply), then use the year for job search in the Netherlands.",
      href: `${BASE}/visa-checker/`,
      ctaLabel: "Run the visa checker",
    },
    {
      title: "Researcher finishing Directive (EU) 2016/801 stay",
      summary: "After qualifying research residence, apply for orientation year to bridge into employment or entrepreneurship, then change purpose before the year ends.",
      href: `${BASE}/visa/highly-skilled-migrant/`,
      ctaLabel: "Read the HSM guide",
    },
  ],

  toolCtas: [
    {
      key: "visa-checker",
      label: "Visa checker",
      href: `${BASE}/visa-checker/`,
      description: "See which residence routes may fit your profile.",
    },
    {
      key: "hsm-salary-checker",
      label: "HSM salary checker",
      href: `${TOOLS}/hsm-salary-checker/`,
      description: "Compare an offer to HSM floors including the reduced criterion.",
    },
    {
      key: "compare-visas",
      label: "Compare visas",
      href: `${BASE}/visa/compare-visas/`,
      description: "Side-by-side view of common Netherlands residence routes.",
    },
    {
      key: "document-readiness",
      label: "Document readiness checker",
      href: `${BASE}/document-readiness-checker/`,
      description: "Map documents for your move profile.",
    },
    {
      key: "moving-checklist",
      label: "Moving checklist",
      href: `${TOOLS}/moving-checklist/`,
      description: "Build a practical timeline around graduation and job search.",
    },
  ],
};
