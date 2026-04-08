import type { HealthcareAllowanceInputs } from "./types";

export type HealthcareAllowanceValidationResult = {
  /** False when any hard rule is broken (negatives, non-finite numbers, month out of range). */
  isValid: boolean;
  errors: string[];
  warnings: string[];
};

export function validateHealthcareAllowanceInputs(input: HealthcareAllowanceInputs): HealthcareAllowanceValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const moneyFields: [string, number][] = [
    ["annualIncomeYou", input.annualIncomeYou],
    ["monthlyGrossYou", input.monthlyGrossYou],
    ["annualIncomePartner", input.annualIncomePartner],
    ["monthlyGrossPartner", input.monthlyGrossPartner],
    ["assetsYouJan1", input.assetsYouJan1],
    ["assetsPartnerJan1", input.assetsPartnerJan1],
    ["monthlyPremiumManual", input.monthlyPremiumManual],
  ];

  for (const [name, v] of moneyFields) {
    if (!Number.isFinite(v)) {
      errors.push(`${name} is not a valid number.`);
    } else if (v < 0) {
      errors.push(`${name} cannot be negative.`);
    }
  }

  if (!Number.isFinite(input.age) || !Number.isInteger(input.age)) {
    errors.push("Age must be a whole number.");
  } else if (input.age < 0) {
    errors.push("Age cannot be negative.");
  }

  if (!Number.isFinite(input.insuranceStartMonth) || !Number.isInteger(input.insuranceStartMonth)) {
    errors.push("Insurance start month must be a whole number between 1 and 12.");
  } else if (input.insuranceStartMonth < 1 || input.insuranceStartMonth > 12) {
    errors.push("Insurance start month must be between 1 and 12.");
  }

  if (input.allowanceMonthsThisYear != null) {
    const m = input.allowanceMonthsThisYear;
    if (!Number.isFinite(m) || !Number.isInteger(m)) {
      errors.push("Allowance months override must be a whole number between 1 and 12.");
    } else if (m < 1 || m > 12) {
      errors.push("Allowance months override must be between 1 and 12.");
    }
  }

  if (input.insuranceStatus === "no" && input.insuredFullYear) {
    warnings.push("Insurance is set to “no” but “insured full year” is on — months are treated as zero for allowance.");
  }

  if (input.insuranceStatus === "yes" && !input.insuredFullYear && (input.insuranceStartMonth < 1 || input.insuranceStartMonth > 12)) {
    errors.push("Partial-year insurance requires a valid start month (1–12).");
  }

  return { isValid: errors.length === 0, errors, warnings };
}

/** True if any core numeric field is not a finite non-negative number (for defensive engine guards). */
export function hasMalformedMoneyFields(input: HealthcareAllowanceInputs): boolean {
  const nums = [
    input.annualIncomeYou,
    input.monthlyGrossYou,
    input.annualIncomePartner,
    input.monthlyGrossPartner,
    input.assetsYouJan1,
    input.assetsPartnerJan1,
    input.monthlyPremiumManual,
  ];
  return nums.some((n) => !Number.isFinite(n) || n < 0);
}
