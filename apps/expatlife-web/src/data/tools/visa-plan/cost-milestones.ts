/**
 * Cost and document milestones for the visa application plan.
 * Shown as planning checkpoints, not exact quotes.
 */

import type { CostMilestone } from "@/src/lib/visa-plan/types";
import type { VisaPlanRoute } from "@/src/lib/visa-plan/types";

/** Milestones that apply to many routes */
export const COMMON_COST_MILESTONES: CostMilestone[] = [
  {
    id: "official-application-fee",
    label: "Official application fee",
    description: "Residence permit application fee (confirm current amount on IND).",
    when: "At submission",
  },
  {
    id: "document-preparation",
    label: "Document preparation",
    description: "Certified copies, translations, apostille, or legalization where required.",
    when: "Before submission",
  },
  {
    id: "travel-booking-timing",
    label: "Travel booking timing",
    description: "Book flights only after key milestones where appropriate (e.g. after approval or MVV).",
    when: "After approval / when timeline is clear",
  },
  {
    id: "temporary-housing",
    label: "Temporary housing",
    description: "First weeks or months of accommodation; deposits and first month often due before or on arrival.",
    when: "Before or on arrival",
  },
  {
    id: "first-month-setup",
    label: "First-month setup costs",
    description: "Registration, banking, insurance, and initial living expenses.",
    when: "First 30 days",
  },
];

/** Route-specific milestone overrides or additions */
export const ROUTE_COST_MILESTONES: Partial<Record<VisaPlanRoute, CostMilestone[]>> = {
  "highly-skilled-migrant": [
    { id: "hsm-fee", label: "HSM application fee", description: "Confirm current fee (e.g. €423) with IND.", when: "At submission" },
    { id: "hsm-contract-housing", label: "Contract and housing proof", description: "Employer usually submits; you may need to arrange housing for registration.", when: "Before or after arrival" },
  ],
  "eu-blue-card": [
    { id: "bluecard-fee", label: "EU Blue Card fee", description: "Confirm current fee with IND.", when: "At submission" },
  ],
  student: [
    { id: "student-admission-fee", label: "Admission and study costs", description: "Tuition and proof of funds for study amount.", when: "Before application" },
    { id: "student-residence-fee", label: "Residence permit fee", description: "Confirm current amount; institution often coordinates.", when: "At submission" },
  ],
  "partner-family": [
    { id: "partner-civil-docs", label: "Civil documents and relationship proof", description: "Certified translations and apostille may be required.", when: "Before submission" },
    { id: "partner-sponsor-docs", label: "Sponsor income and housing", description: "Sponsor must meet income requirement; housing proof may be needed.", when: "Before submission" },
  ],
  daft: [
    { id: "daft-investment", label: "Investment / business capital", description: "Proof of investment as required under DAFT.", when: "Before or at application" },
    { id: "daft-registration-fee", label: "Business registration and fees", description: "KVK and any visa/residence fees.", when: "After arrival" },
  ],
  "self-employed": [
    { id: "selfemployed-viability-docs", label: "Viability and business docs", description: "Costs for preparing business plan and supporting evidence.", when: "Before submission" },
  ],
};

export function getCostMilestonesForRoute(route: VisaPlanRoute): CostMilestone[] {
  const routeSpecific = ROUTE_COST_MILESTONES[route] ?? [];
  const common = COMMON_COST_MILESTONES.filter((m) => !routeSpecific.some((r) => r.id === m.id));
  return [...routeSpecific, ...common];
}
