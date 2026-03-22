import type { MovingChecklistInputExtended } from "./types";

/**
 * Generic default input used to produce "common" / default results on initial load.
 * Shows a broad, useful checklist (pre-move focus, solo, job offer, non-EU) without requiring user input.
 */
export const GENERIC_DEFAULT_INPUT: MovingChecklistInputExtended = {
  from: "south-africa",
  stage: "before-move",
  household: "solo",
  employment: "job-offer",
  region: "non-eu",
  city: "",
  housingReadiness: "no-place-yet",
  shippingNeeds: false,
  kidsSchoolNeeds: false,
  largeMoneyTransfer: false,
  hasCoreDocsReady: false,
  needsTemporaryHousing: false,
};
