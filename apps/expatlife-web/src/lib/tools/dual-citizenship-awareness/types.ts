export type YesNoUnsure = "yes" | "no" | "unsure";

export type DualRouteFocus = "naturalisation" | "option_maybe" | "unsure";

export type HomeCountryRenounce =
  | "allows_renounce"
  | "forbids_renounce"
  | "auto_loss_on_dutch"
  | "unsure";

export type PossibleDutchException =
  | "none_known"
  | "married_or_partner_dutch"
  | "recognised_refugee"
  | "cannot_renounce_home"
  | "auto_loss_home"
  | "other_listed"
  | "unsure";

export type DualAwarenessBand =
  | "option_may_skip_renunciation"
  | "likely_must_renounce"
  | "possible_exception_to_document"
  | "home_country_friction"
  | "prefer_pr_for_now"
  | "needs_careful_review";

export type DualCitizenshipAwarenessInput = {
  routeFocus: DualRouteFocus;
  homeCountryRenounce: HomeCountryRenounce;
  possibleException: PossibleDutchException;
  willingToRenounce: YesNoUnsure;
  planLiveOutsideNlEuLong: YesNoUnsure;
  homeMilitaryOrInheritanceConcern: YesNoUnsure;
  alreadyDutchDual: YesNoUnsure;
};

export type DualChecklistItem = {
  id: string;
  label: string;
  status: "strength" | "gap" | "watch" | "info";
  detail: string;
};

export type DualNextStep = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type DualCitizenshipAwarenessResult = {
  band: DualAwarenessBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  checklist: DualChecklistItem[];
  topicsToVerify: string[];
  nextSteps: DualNextStep[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_DUAL_CITIZENSHIP_INPUT: DualCitizenshipAwarenessInput = {
  routeFocus: "naturalisation",
  homeCountryRenounce: "unsure",
  possibleException: "unsure",
  willingToRenounce: "unsure",
  planLiveOutsideNlEuLong: "no",
  homeMilitaryOrInheritanceConcern: "unsure",
  alreadyDutchDual: "no",
};
