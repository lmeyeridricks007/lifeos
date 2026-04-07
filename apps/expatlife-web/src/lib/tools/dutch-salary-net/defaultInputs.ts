import type { SalaryNetCalculatorInputs } from "./types";

export const SALARY_NET_DEFAULT_INPUTS: SalaryNetCalculatorInputs = {
  salaryInputBasis: "annual",
  salaryAmount: 65_000,
  bonusAnnual: 0,
  includeHolidayAllowance: true,
  age: 32,
  taxYear: 2026,
  rulingMode: "none",
  maxStatutoryFacilityPercent: 30,
  customRulingPercent: 30,
  employerFacilityPercent: null,
  employmentType: "permanent",
  monthsWorkedInYear: 12,
  pensionEmployeePercent: null,
  includeSocialContributions: true,
  includeGeneralTaxCredit: true,
  includeLabourTaxCredit: true,
  includePartnerEffect: false,
};

export function mergeSalaryNetInputs(patch: Partial<SalaryNetCalculatorInputs>): SalaryNetCalculatorInputs {
  return { ...SALARY_NET_DEFAULT_INPUTS, ...patch };
}
