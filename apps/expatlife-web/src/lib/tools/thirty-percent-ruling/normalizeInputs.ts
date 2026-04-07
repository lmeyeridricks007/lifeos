import type { ThirtyPercentCalculatorInputs, TriStateAnswer, EmployeeCategory, YesNo } from "./types";

function triFromLegacyEmployer(willApply: boolean | undefined): TriStateAnswer {
  if (willApply === true) return "yes";
  if (willApply === false) return "no";
  return "unsure";
}

/**
 * Ensures extended eligibility fields exist (localStorage / older payloads).
 */
export function normalizeThirtyPercentInputs(i: ThirtyPercentCalculatorInputs): ThirtyPercentCalculatorInputs {
  const employerApplyIntent =
    i.employerApplyIntent ?? triFromLegacyEmployer(i.employerWillApply);
  const employerWillApply = employerApplyIntent === "yes";

  return {
    ...i,
    employerApplyIntent,
    employerWillApply,
    recruitedFromAbroad: i.recruitedFromAbroad ?? "unsure",
    distanceRule150km: i.distanceRule150km ?? "unsure",
    priorThirtyPercentRuling: i.priorThirtyPercentRuling ?? "unsure",
    changingEmployerInNL: (i.changingEmployerInNL ?? "no") as YesNo,
    employeeCategory: (i.employeeCategory ?? "regular") as EmployeeCategory,
    startMonth:
      i.startMonth != null && Number.isFinite(i.startMonth)
        ? Math.min(12, Math.max(1, Math.round(i.startMonth)))
        : null,
  };
}
