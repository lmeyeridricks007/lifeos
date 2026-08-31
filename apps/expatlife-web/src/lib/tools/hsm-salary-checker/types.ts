export type YesNoUnsure = "yes" | "no" | "unsure";

export type HsmAgeBand = "under_30" | "thirty_plus" | "unsure";

export type ReducedCriterionClaim = "no" | "yes_claim" | "unsure";

export type HolidayPayIncluded = "no" | "yes_or_mixed" | "unsure";

export type SponsorStatus = "recognized" | "not_recognized" | "unsure";

export type HsmSalaryBand =
  | "likely_meets_standard_floor"
  | "meets_only_if_reduced_applies"
  | "below_floor"
  | "near_threshold_verify_components"
  | "needs_careful_review";

export type HsmSalaryInput = {
  /** Gross monthly salary in EUR (planning figure; ideally without holiday allowance). */
  grossMonthly: number;
  ageBand: HsmAgeBand;
  reducedCriterion: ReducedCriterionClaim;
  holidayPayIncluded: HolidayPayIncluded;
  sponsorStatus: SponsorStatus;
};

export type HsmSalaryChecklistItem = {
  id: string;
  label: string;
  status: "strength" | "gap" | "watch" | "info";
  detail: string;
};

export type HsmSalaryNextStep = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type HsmSalaryResult = {
  band: HsmSalaryBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  applicableFloorEur: number | null;
  reducedFloorEur: number;
  gapToFloorEur: number | null;
  checklist: HsmSalaryChecklistItem[];
  topicsToVerify: string[];
  nextSteps: HsmSalaryNextStep[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_HSM_SALARY_INPUT: HsmSalaryInput = {
  grossMonthly: 5000,
  ageBand: "thirty_plus",
  reducedCriterion: "no",
  holidayPayIncluded: "no",
  sponsorStatus: "recognized",
};
