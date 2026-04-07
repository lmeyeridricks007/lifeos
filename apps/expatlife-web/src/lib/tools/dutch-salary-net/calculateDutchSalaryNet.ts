import {
  approximateGeneralTaxCredit,
  approximateLabourTaxCredit,
  FACILITY_FRACTION_2027_PREVIEW,
  INDICATIVE_SALARY_TAX_MODEL_2026,
  INDICATIVE_ZWV_CEILING_ANNUAL,
  INDICATIVE_ZWV_EMPLOYEE_RATE,
  RULING_SALARY_BASE_CAP_ANNUAL,
  STATUTORY_RULING_PERCENT_MAX,
} from "./constants";
import type { SalaryNetCalculatorInputs, SalaryNetComputation, TaxBandSlice } from "./types";

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function grossAnnualFromInputs(inputs: SalaryNetCalculatorInputs): {
  baseAnnual: number;
  bonusAnnual: number;
  holidayAllowanceAnnual: number;
  grossAnnual: number;
} {
  const raw = Number(inputs.salaryAmount);
  const salary = Number.isFinite(raw) ? Math.max(0, raw) : 0;
  const baseAnnual = inputs.salaryInputBasis === "monthly" ? salary * 12 : salary;
  const bonusAnnual = Number.isFinite(inputs.bonusAnnual) ? Math.max(0, inputs.bonusAnnual) : 0;
  const subtotal = baseAnnual + bonusAnnual;
  const holidayAllowanceAnnual = inputs.includeHolidayAllowance ? subtotal * 0.08 : 0;
  const grossAnnual = subtotal + holidayAllowanceAnnual;
  return { baseAnnual, bonusAnnual, holidayAllowanceAnnual, grossAnnual };
}

export function previewGrossAnnualPackage(inputs: SalaryNetCalculatorInputs): number {
  return grossAnnualFromInputs(inputs).grossAnnual;
}

/** Upper bound (percentage points) for employer override and max mode — 27 or 30. */
function statutoryFacilityCapPercentPoints(inputs: SalaryNetCalculatorInputs): number {
  if (inputs.rulingMode === "none") return 0;
  if (inputs.rulingMode === "max") return inputs.maxStatutoryFacilityPercent;
  return 30;
}

function rulingPercentFromInputs(inputs: SalaryNetCalculatorInputs): number {
  if (inputs.rulingMode === "none") return 0;
  const capPts = statutoryFacilityCapPercentPoints(inputs);
  let pctPts =
    inputs.rulingMode === "max"
      ? inputs.maxStatutoryFacilityPercent === 27
        ? FACILITY_FRACTION_2027_PREVIEW * 100
        : STATUTORY_RULING_PERCENT_MAX * 100
      : clamp(inputs.customRulingPercent, 0, 30);
  if (inputs.employerFacilityPercent != null && Number.isFinite(inputs.employerFacilityPercent)) {
    pctPts = clamp(inputs.employerFacilityPercent, 0, capPts);
  }
  return pctPts / 100;
}

function progressiveRawTax(
  taxableAnnual: number,
  brackets: readonly { upToExclusive: number; marginalRate: number }[]
): { raw: number; slices: TaxBandSlice[] } {
  if (!Number.isFinite(taxableAnnual) || taxableAnnual <= 0) {
    return { raw: 0, slices: [] };
  }
  const t = taxableAnnual;
  let tax = 0;
  let lower = 0;
  const slices: TaxBandSlice[] = [];
  let bandIndex = 0;
  for (const b of brackets) {
    bandIndex += 1;
    const upper = Number.isFinite(b.upToExclusive) ? b.upToExclusive : t;
    const inBand = Math.max(0, Math.min(t, upper) - lower);
    const taxFromBand = inBand * b.marginalRate;
    if (inBand > 0) {
      tax += taxFromBand;
      slices.push({
        label: `Band ${bandIndex} (${(b.marginalRate * 100).toFixed(2)}%)`,
        taxableInBand: inBand,
        marginalRate: b.marginalRate,
        taxFromBand,
      });
    }
    lower = upper;
    if (t <= upper) break;
  }
  return { raw: tax, slices };
}

function socialAnnual(grossAnnual: number, include: boolean): number {
  if (!include) return 0;
  const base = Math.min(Math.max(0, grossAnnual), INDICATIVE_ZWV_CEILING_ANNUAL);
  return base * INDICATIVE_ZWV_EMPLOYEE_RATE;
}

function computeCore(args: {
  grossAnnual: number;
  bonusAnnual: number;
  holidayAllowanceAnnual: number;
  rulingFraction: number;
  pensionPct: number | null;
  includeSocial: boolean;
  includeGeneralCredit: boolean;
  includeLabourCredit: boolean;
  inputsSnapshot: SalaryNetCalculatorInputs;
}): Omit<
  SalaryNetComputation,
  | "prorationFactor"
  | "estimatedNetReceivedInYear"
  | "withoutRuling"
  | "taxableIncomeReductionFromFacilityAnnual"
  | "annualIncomeTaxSavedVsWithoutFacility"
  | "monthlyNetDeltaWithVsWithoutRuling"
> {
  const { grossAnnual, bonusAnnual, holidayAllowanceAnnual, rulingFraction, pensionPct, includeSocial, inputsSnapshot } = args;
  const rulingBase = Math.min(grossAnnual, RULING_SALARY_BASE_CAP_ANNUAL);
  const rulingUntaxedAnnual = grossAnnual > 0 ? rulingBase * rulingFraction : 0;
  const taxableBeforePension = Math.max(0, grossAnnual - rulingUntaxedAnnual);
  const pPct = pensionPct != null && Number.isFinite(pensionPct) ? clamp(pensionPct, 0, 50) : 0;
  const pensionEmployeeAnnual = grossAnnual * (pPct / 100);
  const taxableIncomeAnnual = Math.max(0, taxableBeforePension - pensionEmployeeAnnual);

  const { raw: rawIncomeTaxAnnual, slices: bandSlices } = progressiveRawTax(
    taxableIncomeAnnual,
    INDICATIVE_SALARY_TAX_MODEL_2026.brackets
  );

  const generalTaxCreditApplied = args.includeGeneralCredit ? approximateGeneralTaxCredit(taxableIncomeAnnual) : 0;
  const labourTaxCreditApplied = args.includeLabourCredit ? approximateLabourTaxCredit(taxableIncomeAnnual) : 0;
  const incomeTaxAnnual = Math.max(0, rawIncomeTaxAnnual - generalTaxCreditApplied - labourTaxCreditApplied);
  const socialEmployeeAnnual = socialAnnual(grossAnnual, includeSocial);
  const totalEmployeeDeductionsAnnual = pensionEmployeeAnnual + socialEmployeeAnnual + incomeTaxAnnual;
  const netAnnual = Math.max(0, grossAnnual - totalEmployeeDeductionsAnnual);
  const netMonthly = netAnnual / 12;
  const effectiveTaxRateOnGross = grossAnnual > 0 ? incomeTaxAnnual / grossAnnual : 0;

  return {
    modelId: INDICATIVE_SALARY_TAX_MODEL_2026.id,
    modelLabel: INDICATIVE_SALARY_TAX_MODEL_2026.label,
    inputs: inputsSnapshot,
    grossAnnual,
    grossMonthly: grossAnnual / 12,
    bonusAnnual,
    holidayAllowanceAnnual,
    rulingPercentApplied: rulingFraction * 100,
    rulingUntaxedAnnual,
    taxableIncomeAnnual,
    pensionEmployeeAnnual,
    socialEmployeeAnnual,
    rawIncomeTaxAnnual,
    generalTaxCreditApplied,
    labourTaxCreditApplied,
    incomeTaxAnnual,
    netAnnual,
    netMonthly,
    totalEmployeeDeductionsAnnual,
    effectiveTaxRateOnGross,
    bandSlices,
  };
}

export function calculateDutchSalaryNet(inputs: SalaryNetCalculatorInputs): SalaryNetComputation | null {
  const { baseAnnual, bonusAnnual, holidayAllowanceAnnual, grossAnnual } = grossAnnualFromInputs(inputs);
  if (baseAnnual <= 0 && bonusAnnual <= 0) return null;

  const months = clamp(Math.round(inputs.monthsWorkedInYear), 1, 12);
  const prorationFactor = months / 12;

  const rulingFraction = rulingPercentFromInputs(inputs);
  const pensionPct = inputs.pensionEmployeePercent;

  const snapshot = { ...inputs, monthsWorkedInYear: months };

  const primary = computeCore({
    grossAnnual,
    bonusAnnual,
    holidayAllowanceAnnual,
    rulingFraction,
    pensionPct,
    includeSocial: inputs.includeSocialContributions,
    includeGeneralCredit: inputs.includeGeneralTaxCredit,
    includeLabourCredit: inputs.includeLabourTaxCredit,
    inputsSnapshot: snapshot,
  });

  const without = computeCore({
    grossAnnual,
    bonusAnnual,
    holidayAllowanceAnnual,
    rulingFraction: 0,
    pensionPct,
    includeSocial: inputs.includeSocialContributions,
    includeGeneralCredit: inputs.includeGeneralTaxCredit,
    includeLabourCredit: inputs.includeLabourTaxCredit,
    inputsSnapshot: { ...snapshot, rulingMode: "none" },
  });

  const monthlyNetDeltaWithVsWithoutRuling = primary.netMonthly - without.netMonthly;
  const taxableIncomeReductionFromFacilityAnnual = without.taxableIncomeAnnual - primary.taxableIncomeAnnual;
  const annualIncomeTaxSavedVsWithoutFacility = without.incomeTaxAnnual - primary.incomeTaxAnnual;

  return {
    ...primary,
    prorationFactor,
    estimatedNetReceivedInYear: primary.netAnnual * prorationFactor,
    withoutRuling: {
      taxableIncomeAnnual: without.taxableIncomeAnnual,
      incomeTaxAnnual: without.incomeTaxAnnual,
      netAnnual: without.netAnnual,
      netMonthly: without.netMonthly,
      pensionEmployeeAnnual: without.pensionEmployeeAnnual,
      socialEmployeeAnnual: without.socialEmployeeAnnual,
      rawIncomeTaxAnnual: without.rawIncomeTaxAnnual,
      generalTaxCreditApplied: without.generalTaxCreditApplied,
      labourTaxCreditApplied: without.labourTaxCreditApplied,
      totalEmployeeDeductionsAnnual: without.totalEmployeeDeductionsAnnual,
      rulingUntaxedAnnual: without.rulingUntaxedAnnual,
    },
    taxableIncomeReductionFromFacilityAnnual,
    annualIncomeTaxSavedVsWithoutFacility,
    monthlyNetDeltaWithVsWithoutRuling,
  };
}

export function formatEur(n: number): string {
  return n.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}
