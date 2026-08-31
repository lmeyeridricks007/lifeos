export type ExitTiming = "within_1_month" | "one_to_three_months" | "later" | "unsure";

export type ExitItemStatus = "done_or_planned" | "not_started" | "not_applicable" | "unsure";

export type ExitReadinessBand =
  | "largely_ready"
  | "close_with_gaps"
  | "early_planning"
  | "needs_careful_review";

export type ExitReadinessInput = {
  departureTiming: ExitTiming;
  municipalityDeregistration: ExitItemStatus;
  housingLease: ExitItemStatus;
  healthInsurance: ExitItemStatus;
  toeslagen: ExitItemStatus;
  employerPayroll: ExitItemStatus;
  taxRecords: ExitItemStatus;
  bankContracts: ExitItemStatus;
  destinationRegistration: ExitItemStatus;
};

export type ExitChecklistItem = {
  id: string;
  label: string;
  status: "strength" | "gap" | "watch" | "info";
  detail: string;
};

export type ExitNextStep = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type ExitReadinessResult = {
  band: ExitReadinessBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  checklist: ExitChecklistItem[];
  pendingActions: string[];
  nextSteps: ExitNextStep[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_EXIT_READINESS_INPUT: ExitReadinessInput = {
  departureTiming: "one_to_three_months",
  municipalityDeregistration: "not_started",
  housingLease: "not_started",
  healthInsurance: "not_started",
  toeslagen: "unsure",
  employerPayroll: "done_or_planned",
  taxRecords: "not_started",
  bankContracts: "not_started",
  destinationRegistration: "not_started",
};
