import { applicableThresholdAnnual } from "./allowance";
import type { ThirtyPercentCalculatorInputs, ThirtyPercentEligibilityBand } from "./types";

export function eligibilityBandFrom(
  inputs: ThirtyPercentCalculatorInputs,
  grossAnnual: number,
  meetsThreshold: boolean,
  monthsApplicable: number
): ThirtyPercentEligibilityBand {
  if (!meetsThreshold) return "threshold_not_met";
  if (!inputs.employerWillApply) return "unlikely_eligible";
  const threshold = applicableThresholdAnnual(inputs.age, inputs.qualifyingMasters);
  const comfortable = grossAnnual >= threshold * 1.08 && monthsApplicable >= 10;
  if (comfortable) return "likely_eligible";
  return "possibly_eligible";
}

export function eligibilityBandLabel(band: ThirtyPercentEligibilityBand): string {
  switch (band) {
    case "threshold_not_met":
      return "Threshold not met";
    case "unlikely_eligible":
      return "Unlikely eligible (employer)";
    case "possibly_eligible":
      return "Possibly eligible";
    case "likely_eligible":
      return "Likely eligible (planning view)";
    default:
      return band;
  }
}
