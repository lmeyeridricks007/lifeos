/**
 * Shareable URL state for the 30% ruling calculator (primary scenario only).
 * Avoids indexable parameter spam: tools should use robots-friendly canonicals without query strings.
 */

import { mergeThirtyPercentInputs, THIRTY_PERCENT_DEFAULT_INPUTS } from "./defaultInputs";
import type { ThirtyPercentCalculatorInputs, TriStateAnswer, YesNo, EmployeeCategory } from "./types";

const TRI = new Set(["yes", "no", "unsure"]);
const YESNO = new Set(["yes", "no"]);
const CAT = new Set(["regular", "researcher", "doctor_training", "unsure"]);

function pickTri(v: string | null, fallback: TriStateAnswer): TriStateAnswer {
  if (v && TRI.has(v)) return v as TriStateAnswer;
  return fallback;
}

function pickYesNo(v: string | null, fallback: YesNo): YesNo {
  if (v && YESNO.has(v)) return v as YesNo;
  return fallback;
}

function pickCat(v: string | null, fallback: EmployeeCategory): EmployeeCategory {
  if (v && CAT.has(v)) return v as EmployeeCategory;
  return fallback;
}

function num(v: string | null, fallback: number): number {
  if (v == null || v === "") return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export function hasThirtyRulingUrlParams(sp: URLSearchParams): boolean {
  return ["gross", "age", "year", "masters", "months"].some((k) => sp.has(k));
}

export function thirtyRulingToSearchParams(inputs: ThirtyPercentCalculatorInputs): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("type", inputs.salaryInputType);
  sp.set("gross", String(Math.round(inputs.grossSalary)));
  sp.set("year", String(inputs.calculationYear));
  sp.set("age", String(Math.round(inputs.age)));
  sp.set("masters", inputs.qualifyingMasters ? "1" : "0");
  sp.set("months", String(Math.round(inputs.monthsApplicable)));
  sp.set("apply", inputs.employerApplyIntent);
  sp.set("abroad", inputs.recruitedFromAbroad);
  sp.set("km150", inputs.distanceRule150km);
  sp.set("prior", inputs.priorThirtyPercentRuling);
  sp.set("change", inputs.changingEmployerInNL);
  sp.set("cat", inputs.employeeCategory);
  if (inputs.includeFutureYearPreview) sp.set("preview27", "1");
  if (inputs.salaryIncludesHolidayAllowance) sp.set("holiday", "1");
  return sp;
}

export function parseThirtyRulingSearchParams(sp: URLSearchParams): ThirtyPercentCalculatorInputs {
  const d = THIRTY_PERCENT_DEFAULT_INPUTS;
  const type = sp.get("type") === "monthly" ? "monthly" : "annual";
  const masters = sp.get("masters") === "1" || sp.get("masters") === "true";
  const apply = pickTri(sp.get("apply"), d.employerApplyIntent);
  return mergeThirtyPercentInputs({
    salaryInputType: type,
    grossSalary: num(sp.get("gross"), d.grossSalary),
    calculationYear: num(sp.get("year"), d.calculationYear),
    age: num(sp.get("age"), d.age),
    qualifyingMasters: masters,
    monthsApplicable: Math.min(12, Math.max(1, num(sp.get("months"), d.monthsApplicable))),
    employerApplyIntent: apply,
    employerWillApply: apply === "yes",
    recruitedFromAbroad: pickTri(sp.get("abroad"), d.recruitedFromAbroad),
    distanceRule150km: pickTri(sp.get("km150"), d.distanceRule150km),
    priorThirtyPercentRuling: pickTri(sp.get("prior"), d.priorThirtyPercentRuling),
    changingEmployerInNL: pickYesNo(sp.get("change"), d.changingEmployerInNL),
    employeeCategory: pickCat(sp.get("cat"), d.employeeCategory),
    includeFutureYearPreview: sp.get("preview27") === "1",
    salaryIncludesHolidayAllowance: sp.get("holiday") === "1",
  });
}
