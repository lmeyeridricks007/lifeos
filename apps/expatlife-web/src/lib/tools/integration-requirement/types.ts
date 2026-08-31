export type YesNoUnsure = "yes" | "no" | "unsure";

export type ResidenceBasis =
  | "hsm"
  | "family"
  | "asylum_or_other"
  | "student_or_temp"
  | "already_permanent"
  | "other"
  | "unsure";

export type ObligationLetter = "yes_obligated" | "no_not_obligated" | "unsure";

export type IntegrationCohort = "wi2021" | "older_wi2013" | "unsure";

export type IntegrationGoal =
  | "obligation_only"
  | "permanent_residence"
  | "citizenship"
  | "both_pr_citizenship"
  | "unsure";

export type ExemptionSignal =
  | "dutch_diploma_possible"
  | "exemption_exploring"
  | "none_known"
  | "unsure";

export type YearsInNl = "under_1" | "one_to_three" | "three_plus" | "unsure";

export type IntegrationRequirementBand =
  | "follow_obligation_duo_gemeente"
  | "likely_no_obligation_plan_secure"
  | "secure_residence_proof_needed"
  | "verify_exemption_path"
  | "already_secure_status"
  | "needs_careful_review";

export type IntegrationRequirementInput = {
  residenceBasis: ResidenceBasis;
  obligationLetter: ObligationLetter;
  cohort: IntegrationCohort;
  goal: IntegrationGoal;
  exemptionSignal: ExemptionSignal;
  yearsInNl: YearsInNl;
};

export type IntegrationRequirementChecklistItem = {
  id: string;
  label: string;
  status: "strength" | "gap" | "watch" | "info";
  detail: string;
};

export type IntegrationRequirementNextStep = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type IntegrationRequirementResult = {
  band: IntegrationRequirementBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  checklist: IntegrationRequirementChecklistItem[];
  topicsToVerify: string[];
  nextSteps: IntegrationRequirementNextStep[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_INTEGRATION_REQUIREMENT_INPUT: IntegrationRequirementInput = {
  residenceBasis: "hsm",
  obligationLetter: "unsure",
  cohort: "unsure",
  goal: "permanent_residence",
  exemptionSignal: "unsure",
  yearsInNl: "one_to_three",
};
