export type YesNoUnsure = "yes" | "no" | "unsure";

export type ResidenceYearsBand =
  | "under_3"
  | "three_to_four"
  | "about_five"
  | "over_five"
  | "unsure";

export type PermitType =
  | "hsm"
  | "other_temporary_work"
  | "family"
  | "already_permanent"
  | "eu_long_term"
  | "other"
  | "unsure";

export type ContinuityStatus =
  | "continuous_on_time"
  | "job_search_used"
  | "gaps_or_late"
  | "unsure";

export type AbsencesStatus = "none_or_short" | "significant_months" | "unsure";

export type IntegrationStatus =
  | "diploma_a2_or_higher"
  | "wi2021_certificate"
  | "exemption"
  | "in_progress"
  | "not_started"
  | "unsure";

export type PermitValidity = "yes" | "expiring_soon" | "no" | "unsure";

export type PrEligibilityBand =
  | "already_long_term"
  | "likely_ready_to_verify"
  | "close_with_gaps"
  | "early_planning"
  | "needs_careful_review";

export type PrEligibilityInput = {
  residenceYears: ResidenceYearsBand;
  permitType: PermitType;
  continuity: ContinuityStatus;
  absences: AbsencesStatus;
  brpRegistered: YesNoUnsure;
  integration: IntegrationStatus;
  permitValid: PermitValidity;
  age18Plus: YesNoUnsure;
};

export type PrChecklistItem = {
  id: string;
  label: string;
  status: "strength" | "gap" | "watch" | "info";
  detail: string;
};

export type PrNextStep = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type PrEligibilityResult = {
  band: PrEligibilityBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  checklist: PrChecklistItem[];
  strengths: string[];
  gaps: string[];
  nextSteps: PrNextStep[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_PR_ELIGIBILITY_INPUT: PrEligibilityInput = {
  residenceYears: "about_five",
  permitType: "hsm",
  continuity: "continuous_on_time",
  absences: "none_or_short",
  brpRegistered: "yes",
  integration: "in_progress",
  permitValid: "yes",
  age18Plus: "yes",
};
