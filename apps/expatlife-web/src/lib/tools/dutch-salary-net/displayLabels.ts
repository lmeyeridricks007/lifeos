import type { SalaryNetCalculatorInputs } from "./types";

/** User-facing label for 30% ruling modelling (not eligibility). */
export function formatRulingSettingLabel(i: SalaryNetCalculatorInputs): string {
  if (i.rulingMode === "none") return "No 30% ruling";
  if (i.rulingMode === "max") {
    return `Statutory maximum (${i.maxStatutoryFacilityPercent}% on capped base)`;
  }
  return `Employer-specific (${i.customRulingPercent}% on capped base)`;
}

/** Short label for tables and chips. */
export function formatRulingSettingShort(i: SalaryNetCalculatorInputs): string {
  if (i.rulingMode === "none") return "Off";
  if (i.rulingMode === "max") return `Max ${i.maxStatutoryFacilityPercent}%`;
  return `${i.customRulingPercent}%`;
}
