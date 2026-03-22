/**
 * Phase-based task library for the visa application plan.
 * Tasks are grouped by phase and route type; the plan engine filters/merges by answers.
 */

import type { PlanTask, PlanPhaseId, VisaPlanRoute } from "@/src/lib/visa-plan/types";

const BASE = "/netherlands";

/** Generic tasks that apply across most routes */
export const GENERIC_PHASE_TASKS: Record<PlanPhaseId, PlanTask[]> = {
  "confirm-route": [
    {
      id: "confirm-route-official",
      title: "Confirm the correct visa route with official instructions",
      explanation: "Check IND or official pages for your route to ensure requirements and process match your situation.",
      whyItMatters: "Avoid applying under the wrong scheme or missing route-specific conditions.",
      relatedGuideHref: `${BASE}/visa-checker/`,
      phase: "confirm-route",
      group: "do-now",
    },
    {
      id: "read-full-visa-guide",
      title: "Read the full visa guide for your route",
      explanation: "Use the ExpatCopilot visa guide (or IND page) for your route to understand eligibility, documents, and process.",
      whyItMatters: "Reduces surprises and missing documents later.",
      phase: "confirm-route",
      group: "do-now",
    },
    {
      id: "confirm-processing-times",
      title: "Confirm processing times with IND or your sponsor",
      explanation: "Check current IND processing times or ask your employer/institution for their typical timeline.",
      whyItMatters: "Sets realistic expectations for when you can move or book travel.",
      phase: "confirm-route",
      group: "do-now",
    },
  ],
  "prepare-documents": [
    {
      id: "gather-route-docs",
      title: "Gather route-specific documents",
      explanation: "Collect the document set required for your chosen route (passport, contract, civil docs, etc.).",
      whyItMatters: "Missing or incorrect documents delay processing or lead to rejection.",
      phase: "prepare-documents",
      group: "do-now",
    },
    {
      id: "check-translation-apostille",
      title: "Check translation, apostille, or legalization requirements",
      explanation: "Some documents may need certified translation or apostille/legalization.",
      whyItMatters: "This often adds several weeks; plan early.",
      relatedGuideHref: `${BASE}/document-legalization-netherlands/`,
      phase: "prepare-documents",
      group: "do-now",
    },
    {
      id: "passport-order-renew",
      title: "Order or renew passport if needed",
      explanation: "Ensure your passport is valid for at least the period required by IND (often 3+ months beyond intended stay).",
      whyItMatters: "Passport validity is a basic requirement for most residence permits.",
      phase: "prepare-documents",
      group: "do-now",
    },
    {
      id: "civil-docs-if-required",
      title: "Request civil documents (birth, marriage) if required",
      explanation: "Birth certificate, marriage or partnership certificate, etc., as required by your route.",
      whyItMatters: "Civil documents can take weeks or months to obtain and may need apostille.",
      phase: "prepare-documents",
      group: "do-now",
    },
    {
      id: "certified-copies-apostille",
      title: "Get certified copies or apostille where needed",
      explanation: "Some countries require apostille or legalization before documents are accepted in the Netherlands.",
      whyItMatters: "Uncertified documents may be rejected by IND.",
      phase: "prepare-documents",
      group: "next",
    },
  ],
  "submit-application": [
    {
      id: "prepare-application-package",
      title: "Prepare application package",
      explanation: "Assemble all required forms and supporting documents per official checklist.",
      whyItMatters: "Complete packages reduce processing time and requests for additional information.",
      phase: "submit-application",
      group: "next",
    },
    {
      id: "pay-official-fees",
      title: "Pay official application fees",
      explanation: "Residence permit applications require a fee; confirm current amount on IND.",
      whyItMatters: "Fees must be paid for the application to be processed.",
      phase: "submit-application",
      group: "next",
    },
    {
      id: "submit-via-sponsor-if-applicable",
      title: "Submit application (employer or institution if applicable)",
      explanation: "For work and study routes, the sponsor usually submits; ensure they have everything and know your timeline.",
      whyItMatters: "Delays often happen when the sponsor is waiting for documents from you.",
      phase: "submit-application",
      group: "next",
    },
    {
      id: "keep-copies-submitted",
      title: "Keep copies of all submitted documents",
      explanation: "Save digital and physical copies of everything you submit.",
      whyItMatters: "Useful for registration, appeals, or if IND requests something again.",
      phase: "submit-application",
      group: "next",
    },
  ],
  "wait-pre-move": [
    {
      id: "book-flights-after-milestone",
      title: "Book flights only after key milestones (if applicable)",
      explanation: "Avoid booking before you have approval or a clear timeline from your sponsor/IND.",
      whyItMatters: "Processing times vary; flexible booking reduces risk.",
      phase: "wait-pre-move",
      group: "later",
    },
    {
      id: "arrange-temporary-housing",
      title: "Arrange temporary housing",
      explanation: "Secure short-term accommodation for arrival while you look for long-term housing.",
      whyItMatters: "Registration and admin often require a Dutch address.",
      relatedGuideHref: `${BASE}/moving-to-the-netherlands/`,
      phase: "wait-pre-move",
      group: "later",
    },
    {
      id: "plan-long-term-housing",
      title: "Plan long-term housing search",
      explanation: "Research areas, rental sites, and typical requirements (income, contract) for your target city.",
      whyItMatters: "Finding a place can take weeks or months; start early.",
      phase: "wait-pre-move",
      group: "later",
    },
    {
      id: "research-municipality-registration",
      title: "Research municipality and registration steps",
      explanation: "Check your likely municipality’s website for registration and BSN appointment process.",
      whyItMatters: "Some municipalities have long waiting times for appointments.",
      relatedGuideHref: `${BASE}/municipality-registration-netherlands/`,
      phase: "wait-pre-move",
      group: "later",
    },
    {
      id: "shipping-luggage-options",
      title: "Consider shipping or luggage options",
      explanation: "Decide what to bring, ship, or buy locally; compare international movers if needed.",
      whyItMatters: "Reduces last-minute stress and cost surprises.",
      phase: "wait-pre-move",
      group: "later",
    },
  ],
  "travel-arrival": [
    {
      id: "plan-municipality-registration",
      title: "Plan municipality registration",
      explanation: "Book or plan your appointment for registration at the municipality (required for BSN).",
      whyItMatters: "BSN is needed for banking, insurance, and many other steps.",
      relatedGuideHref: `${BASE}/municipality-registration-netherlands/`,
      phase: "travel-arrival",
      group: "after-approval",
    },
    {
      id: "book-bsn-appointment",
      title: "Book BSN appointment (if available in advance)",
      explanation: "Some municipalities allow booking before arrival; check and book as soon as you have a date.",
      whyItMatters: "Early registration speeds up banking, insurance, and employment setup.",
      relatedGuideHref: `${BASE}/municipality-registration-netherlands/`,
      phase: "travel-arrival",
      group: "after-approval",
    },
    {
      id: "prepare-docs-for-registration",
      title: "Prepare documents for registration",
      explanation: "Passport, rental contract or proof of address, and any IND approval letter or residence permit.",
      whyItMatters: "Missing documents mean a second appointment and delay.",
      phase: "travel-arrival",
      group: "after-approval",
    },
    {
      id: "arrange-health-insurance-start",
      title: "Arrange health insurance start date",
      explanation: "Mandatory Dutch health insurance starts from registration; compare policies and choose start date.",
      whyItMatters: "Required by law once you are registered.",
      relatedGuideHref: `${BASE}/health-insurance-netherlands/`,
      phase: "travel-arrival",
      group: "after-approval",
    },
  ],
  "first-30-90-days": [
    {
      id: "register-at-municipality",
      title: "Register at the municipality and get BSN",
      explanation: "Attend your registration appointment and receive your BSN (burgerservicenummer).",
      whyItMatters: "BSN is required for almost all admin in the Netherlands.",
      relatedGuideHref: `${BASE}/municipality-registration-netherlands/`,
      phase: "first-30-90-days",
      group: "after-arrival",
    },
    {
      id: "setup-banking-insurance",
      title: "Set up banking and insurance after arrival",
      explanation: "Open a Dutch bank account and take out mandatory health insurance once you have BSN and address.",
      whyItMatters: "Required for daily life and often for employment or rental contracts.",
      relatedGuideHref: `${BASE}/open-bank-account-netherlands/`,
      phase: "first-30-90-days",
      group: "after-arrival",
    },
    {
      id: "collect-residence-permit",
      title: "Collect residence permit or card if applicable",
      explanation: "If IND issued a permit or card, collect it when notified (e.g. from post office or IND desk).",
      whyItMatters: "You may need it for travel, employment, or proof of status.",
      phase: "first-30-90-days",
      group: "after-arrival",
    },
    {
      id: "utilities-if-needed",
      title: "Set up utilities and contracts if needed",
      explanation: "Energy, internet, and other contracts for your home; compare and switch as needed.",
      whyItMatters: "Often required by landlord or for a comfortable setup.",
      phase: "first-30-90-days",
      group: "after-arrival",
    },
    {
      id: "consider-inburgering",
      title: "Consider integration (inburgering) if applicable",
      explanation: "Check if you have an integration requirement and plan language or civic integration exams.",
      whyItMatters: "Some permits require integration within a period; planning early avoids last-minute stress.",
      phase: "first-30-90-days",
      group: "after-arrival",
    },
  ],
};

/** Route-specific task overrides or additions (key = route slug) */
export const ROUTE_SPECIFIC_TASKS: Partial<Record<VisaPlanRoute, Partial<Record<PlanPhaseId, PlanTask[]>>>> = {
  "highly-skilled-migrant": {
    "confirm-route": [
      {
        id: "hsm-confirm-employer-sponsor",
        title: "Confirm employer is a recognized sponsor",
        explanation: "Your employer must be recognized by the IND as a sponsor for the HSM scheme.",
        whyItMatters: "Only recognized sponsors can submit HSM applications.",
        relatedGuideHref: `${BASE}/visa/highly-skilled-migrant/`,
        phase: "confirm-route",
        group: "do-now",
      },
    ],
    "prepare-documents": [
      {
        id: "hsm-contract-salary",
        title: "Obtain signed contract and salary proof",
        explanation: "Employment contract and evidence that salary meets the HSM threshold.",
        whyItMatters: "Core requirement for the HSM permit.",
        relatedGuideHref: `${BASE}/visa/highly-skilled-migrant/`,
        phase: "prepare-documents",
        group: "do-now",
      },
      {
        id: "hsm-birth-certificate",
        title: "Obtain birth certificate (and apostille if required)",
        explanation: "Often required for HSM; check IND list for your country.",
        whyItMatters: "Missing or uncertified civil docs can delay the application.",
        phase: "prepare-documents",
        group: "do-now",
      },
    ],
    "submit-application": [
      {
        id: "hsm-employer-submits",
        title: "Ensure employer submits application to IND",
        explanation: "The recognized sponsor submits the HSM application; you provide documents and sign where needed.",
        whyItMatters: "You cannot apply for HSM yourself; the employer must apply.",
        phase: "submit-application",
        group: "next",
      },
    ],
  },
  "eu-blue-card": {
    "confirm-route": [
      {
        id: "bluecard-confirm-eligibility",
        title: "Confirm job and salary meet EU Blue Card criteria",
        explanation: "Check that your role and salary meet the Blue Card requirements.",
        relatedGuideHref: `${BASE}/visa/eu-blue-card/`,
        phase: "confirm-route",
        group: "do-now",
      },
    ],
    "prepare-documents": [
      {
        id: "bluecard-contract-diploma",
        title: "Obtain contract and proof of qualification",
        explanation: "Employment contract and higher education diploma or equivalent experience proof.",
        relatedGuideHref: `${BASE}/visa/eu-blue-card/`,
        phase: "prepare-documents",
        group: "do-now",
      },
    ],
  },
  student: {
    "confirm-route": [
      {
        id: "student-confirm-admission",
        title: "Confirm admission and institution is recognized",
        explanation: "Your education provider must be recognized; they usually coordinate the residence application.",
        relatedGuideHref: `${BASE}/visa/student-visa/`,
        phase: "confirm-route",
        group: "do-now",
      },
    ],
    "prepare-documents": [
      {
        id: "student-admission-funds",
        title: "Secure admission and proof of funds",
        explanation: "University admission and proof of sufficient funds for study and living.",
        relatedGuideHref: `${BASE}/visa/student-visa/`,
        phase: "prepare-documents",
        group: "do-now",
      },
      {
        id: "student-health-insurance",
        title: "Arrange student health insurance",
        explanation: "Students need health insurance; many use a student policy or basic Dutch policy from arrival.",
        relatedGuideHref: `${BASE}/visa/student-visa/`,
        phase: "prepare-documents",
        group: "next",
      },
    ],
    "submit-application": [
      {
        id: "student-institution-submits",
        title: "Ensure institution submits application",
        explanation: "The educational institution usually submits the study residence application; provide them all requested documents.",
        whyItMatters: "Application goes through the institution, not directly by you.",
        phase: "submit-application",
        group: "next",
      },
    ],
  },
  "partner-family": {
    "confirm-route": [
      {
        id: "partner-confirm-income-housing",
        title: "Confirm sponsor meets income and housing requirements",
        explanation: "The sponsor in the Netherlands must meet IND income and sometimes housing requirements.",
        relatedGuideHref: `${BASE}/visa/partner-family-visa/`,
        phase: "confirm-route",
        group: "do-now",
      },
    ],
    "prepare-documents": [
      {
        id: "partner-relationship-sponsor-docs",
        title: "Gather relationship and sponsor documents",
        explanation: "Relationship proof, sponsor income/employment, and civil documents as required.",
        relatedGuideHref: `${BASE}/visa/partner-family-visa/`,
        phase: "prepare-documents",
        group: "do-now",
      },
      {
        id: "partner-civil-docs-translation",
        title: "Get marriage/partnership and birth certificates (with translation if needed)",
        explanation: "Civil documents often need apostille and certified translation for IND.",
        whyItMatters: "Partner route is document-heavy; start early.",
        phase: "prepare-documents",
        group: "do-now",
      },
    ],
    "submit-application": [
      {
        id: "partner-sponsor-submits",
        title: "Sponsor submits application to IND",
        explanation: "The sponsor in the Netherlands usually submits the partner/family application; you provide your documents.",
        phase: "submit-application",
        group: "next",
      },
    ],
  },
  daft: {
    "confirm-route": [
      {
        id: "daft-confirm-eligibility",
        title: "Confirm US citizenship and business plan fit",
        explanation: "DAFT is for US citizens; confirm business activity and investment requirements.",
        relatedGuideHref: `${BASE}/visa/dutch-american-friendship-treaty/`,
        phase: "confirm-route",
        group: "do-now",
      },
    ],
    "prepare-documents": [
      {
        id: "daft-business-docs",
        title: "Prepare business and investment documentation",
        explanation: "Business plan, proof of investment/funds, and any required registrations.",
        relatedGuideHref: `${BASE}/visa/dutch-american-friendship-treaty/`,
        phase: "prepare-documents",
        group: "do-now",
      },
      {
        id: "daft-proof-of-funds",
        title: "Prepare proof of €4,500 investment/funds",
        explanation: "IND requires proof of investment; gather bank statements or business capital evidence.",
        whyItMatters: "Core DAFT requirement.",
        phase: "prepare-documents",
        group: "do-now",
      },
    ],
    "first-30-90-days": [
      {
        id: "daft-kvk-registration",
        title: "Register with KVK (Chamber of Commerce)",
        explanation: "DAFT applicants register their business with the KVK after arrival.",
        relatedGuideHref: `${BASE}/visa/dutch-american-friendship-treaty/`,
        phase: "first-30-90-days",
        group: "after-arrival",
      },
    ],
  },
  "self-employed": {
    "confirm-route": [
      {
        id: "selfemployed-confirm-viability",
        title: "Confirm you meet viability and added-value criteria",
        explanation: "IND assesses self-employed applications for viability and added value to the Dutch economy.",
        relatedGuideHref: `${BASE}/visa/self-employed-visa/`,
        phase: "confirm-route",
        group: "do-now",
      },
    ],
    "prepare-documents": [
      {
        id: "selfemployed-business-docs",
        title: "Prepare business and viability documents",
        explanation: "Business plan, client contracts, and proof of added value per IND criteria.",
        relatedGuideHref: `${BASE}/visa/self-employed-visa/`,
        phase: "prepare-documents",
        group: "do-now",
      },
      {
        id: "selfemployed-proof-of-income",
        title: "Gather proof of income and client work",
        explanation: "Contracts, invoices, or evidence of ongoing or planned activity in the Netherlands.",
        whyItMatters: "IND uses this to assess viability.",
        phase: "prepare-documents",
        group: "do-now",
      },
    ],
  },
};

/** Extra tasks to add when household includes partner or children */
export const HOUSEHOLD_EXTRA_TASKS: Partial<Record<string, PlanTask[]>> = {
  partner: [
    {
      id: "household-partner-docs",
      title: "Gather partner’s documents (passport, relationship proof)",
      explanation: "If your partner is also moving or is the sponsor, ensure their documents are ready.",
      whyItMatters: "Partner routes often require documents from both people.",
      phase: "prepare-documents",
      group: "do-now",
    },
  ],
  "partner-and-children": [
    {
      id: "household-partner-children-docs",
      title: "Gather partner and children’s documents",
      explanation: "Passports, birth certificates, and any custody or school records if relevant.",
      whyItMatters: "Family applications require documents for each family member.",
      phase: "prepare-documents",
      group: "do-now",
    },
    {
      id: "household-school-research",
      title: "Research school options if moving with children",
      explanation: "International or local schools; enrollment requirements and timing.",
      whyItMatters: "School placement can affect where you live and when you move.",
      phase: "wait-pre-move",
      group: "later",
    },
  ],
  "children-only": [
    {
      id: "household-children-docs",
      title: "Gather children’s documents (passports, birth certificates)",
      explanation: "Each child needs identity and civil documents as required by your route.",
      phase: "prepare-documents",
      group: "do-now",
    },
  ],
  pet: [
    {
      id: "household-pet-requirements",
      title: "Check pet entry requirements (vaccination, microchip, paperwork)",
      explanation: "EU and Dutch rules for bringing pets; vet and documentation well in advance.",
      whyItMatters: "Pet travel can take weeks to prepare.",
      phase: "wait-pre-move",
      group: "later",
    },
  ],
};

export function getPhaseTitle(phaseId: PlanPhaseId): string {
  const titles: Record<PlanPhaseId, string> = {
    "confirm-route": "Confirm route and requirements",
    "prepare-documents": "Prepare documents",
    "submit-application": "Submit / finalize application",
    "wait-pre-move": "Wait period and pre-move setup",
    "travel-arrival": "Travel and arrival week",
    "first-30-90-days": "First 30 / 90 days",
  };
  return titles[phaseId];
}

export function getHouseholdExtraTasks(householdType: string, includesPets: boolean): PlanTask[] {
  const tasks: PlanTask[] = [];
  const byHousehold = HOUSEHOLD_EXTRA_TASKS[householdType];
  if (byHousehold) tasks.push(...byHousehold);
  if (includesPets) {
    const petTasks = HOUSEHOLD_EXTRA_TASKS.pet;
    if (petTasks) tasks.push(...petTasks);
  }
  return tasks;
}
