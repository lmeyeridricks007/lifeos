/** Conceptual snapshot highlights — no hardcoded reimbursement rates or income ceilings. */

export type ChildcareAllowancePlanningHighlight = {
  id: string;
  label: string;
  value: string;
  note: string;
};

export const CHILDCARE_ALLOWANCE_PLANNING_DISCLAIMER =
  "Planning orientation only — reimbursement percentages, hourly caps and income tests change with policy. Use the official proefberekening and childcare cost estimator for personal figures.";

export const childcareAllowancePlanningHighlights: readonly ChildcareAllowancePlanningHighlight[] = [
  {
    id: "registered-care",
    label: "Registered provider (LRK)",
    value: "Required",
    note: "Daycare, gastouder and BSO must meet official registration rules — informal care usually does not qualify.",
  },
  {
    id: "work-link",
    label: "Work or study link",
    value: "Activity test",
    note: "Eligible hours connect to parental work, self-employment, study or qualifying programmes — not a passive subsidy.",
  },
  {
    id: "income-test",
    label: "Household income",
    value: "Tapered reimbursement",
    note: "Higher toetsingsinkomen means a lower percentage — partner income counts when toeslagpartner rules apply.",
  },
  {
    id: "hourly-caps",
    label: "Eligible hours",
    value: "Statutory caps",
    note: "Contracted childcare hours above work-linked limits may not be fully reimbursed — align contract with official rules.",
  },
  {
    id: "apply-channel",
    label: "Application",
    value: "Dienst Toeslagen",
    note: "Apply via Mijn Toeslagen after registered care starts — providers do not grant allowance on your behalf.",
  },
  {
    id: "planning-tools",
    label: "Planning tools",
    value: "Proefberekening + estimator",
    note: "Official calculator for entitlement; ExpatCopilot estimator for relocation budgeting alongside other costs.",
  },
] as const;
