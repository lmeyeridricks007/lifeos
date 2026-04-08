import type { EmploymentTypeScenarioInput } from "./types";

export const DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT: EmploymentTypeScenarioInput = {
  toolMode: "recommend",
  compareScenarioA: "permanent_employee",
  compareScenarioB: "zzp_self_employed",

  residence: "moving_nl",
  visaSponsorship: "maybe",
  industryContext: "tech_knowledge",
  workStabilityExpectation: "medium",

  employeeGrossMonthly: 6500,
  employeeUseAnnual: false,
  employeeGrossAnnual: 78000,

  contractorDayRate: 650,
  contractorMonthlyEquivalent: 0,

  zzpDayRate: 700,
  zzpMonthlyRevenue: 0,

  bonusExpected: false,
  bonusAnnualAmount: 0,
  includeHolidayAllowance: true,
  rulingAssumption: "maybe",

  priorities: {
    higherNetIncome: 55,
    stabilitySecurity: 60,
    lowerAdminBurden: 45,
    benefitsProtections: 50,
    flexibilityIndependence: 40,
    visaSponsorshipSimplicity: 55,
    lowerTaxPayrollComplexity: 45,
  },

  pensionInPackage: "not_sure",
  paidSickLeaveRelevant: "yes",
  paidHolidayRelevant: "yes",
  travelAllowance: "yes",
  trainingBenefits: "yes",
  insuranceSelfArrangedIndependent: "yes",

  unpaidDowntime: "medium",
  billablePreset: "85",
  billableUtilizationCustom: 80,
  modelAdminAccountingCosts: "yes",
  visaFriendlinessHeavyWeight: "no",

  accountantMonthly: 175,
  liabilityInsuranceMonthly: 45,
  disabilityInsuranceMonthly: 85,
  pensionReservePercent: 0,
  unpaidLeavePercentOverride: null,
  delayedPaymentReserveMonths: 1,
  employerEquipmentAnnual: 0,
  commuteImpactMonthly: 0,
  contractGapRisk: "medium",
  umbrellaAdminMonthly: 125,
  umbrellaAdminPercent: 7,
  includeForeignRemoteScenario: false,
};

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function clampInt(n: unknown, min: number, max: number, fallback: number): number {
  const x = typeof n === "number" && Number.isFinite(n) ? Math.round(n) : fallback;
  return clamp(x, min, max);
}

function clampNum(n: unknown, min: number, max: number, fallback: number): number {
  const x = typeof n === "number" && Number.isFinite(n) ? n : fallback;
  return clamp(x, min, max);
}

const SCENARIOS = new Set([
  "permanent_employee",
  "fixed_term_employee",
  "contractor",
  "zzp_self_employed",
  "foreign_remote_employee",
]);

export function sanitizeEmploymentTypeScenarioInput(
  raw: Partial<EmploymentTypeScenarioInput>
): EmploymentTypeScenarioInput {
  const d = DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT;
  const toolMode = raw.toolMode === "compare_two" ? "compare_two" : "recommend";
  const compareScenarioA =
    raw.compareScenarioA && SCENARIOS.has(raw.compareScenarioA) ? raw.compareScenarioA : d.compareScenarioA;
  const compareScenarioB =
    raw.compareScenarioB && SCENARIOS.has(raw.compareScenarioB) ? raw.compareScenarioB : d.compareScenarioB;

  const p = { ...d.priorities, ...raw.priorities };
  const priorities = {
    higherNetIncome: clampInt(p.higherNetIncome, 0, 100, d.priorities.higherNetIncome),
    stabilitySecurity: clampInt(p.stabilitySecurity, 0, 100, d.priorities.stabilitySecurity),
    lowerAdminBurden: clampInt(p.lowerAdminBurden, 0, 100, d.priorities.lowerAdminBurden),
    benefitsProtections: clampInt(p.benefitsProtections, 0, 100, d.priorities.benefitsProtections),
    flexibilityIndependence: clampInt(p.flexibilityIndependence, 0, 100, d.priorities.flexibilityIndependence),
    visaSponsorshipSimplicity: clampInt(p.visaSponsorshipSimplicity, 0, 100, d.priorities.visaSponsorshipSimplicity),
    lowerTaxPayrollComplexity: clampInt(p.lowerTaxPayrollComplexity, 0, 100, d.priorities.lowerTaxPayrollComplexity),
  };

  return {
    ...d,
    ...raw,
    toolMode,
    compareScenarioA,
    compareScenarioB,
    priorities,
    employeeGrossMonthly: clampNum(raw.employeeGrossMonthly, 0, 500_000, d.employeeGrossMonthly),
    employeeGrossAnnual: clampNum(raw.employeeGrossAnnual, 0, 5_000_000, d.employeeGrossAnnual),
    contractorDayRate: clampNum(raw.contractorDayRate, 0, 50_000, d.contractorDayRate),
    contractorMonthlyEquivalent: clampNum(raw.contractorMonthlyEquivalent, 0, 200_000, d.contractorMonthlyEquivalent),
    zzpDayRate: clampNum(raw.zzpDayRate, 0, 50_000, d.zzpDayRate),
    zzpMonthlyRevenue: clampNum(raw.zzpMonthlyRevenue, 0, 200_000, d.zzpMonthlyRevenue),
    bonusAnnualAmount: clampNum(raw.bonusAnnualAmount, 0, 5_000_000, d.bonusAnnualAmount),
    billableUtilizationCustom: clampNum(raw.billableUtilizationCustom, 30, 100, d.billableUtilizationCustom),
    accountantMonthly: clampNum(raw.accountantMonthly, 0, 5000, d.accountantMonthly),
    liabilityInsuranceMonthly: clampNum(raw.liabilityInsuranceMonthly, 0, 2000, d.liabilityInsuranceMonthly),
    disabilityInsuranceMonthly: clampNum(raw.disabilityInsuranceMonthly, 0, 5000, d.disabilityInsuranceMonthly),
    pensionReservePercent: clampNum(raw.pensionReservePercent, 0, 40, d.pensionReservePercent),
    delayedPaymentReserveMonths: clampInt(raw.delayedPaymentReserveMonths, 0, 12, d.delayedPaymentReserveMonths),
    employerEquipmentAnnual: clampNum(raw.employerEquipmentAnnual, 0, 50_000, d.employerEquipmentAnnual),
    commuteImpactMonthly: clampNum(raw.commuteImpactMonthly, 0, 5000, d.commuteImpactMonthly),
    umbrellaAdminMonthly: clampNum(raw.umbrellaAdminMonthly, 0, 2000, d.umbrellaAdminMonthly),
    umbrellaAdminPercent: clampNum(raw.umbrellaAdminPercent, 0, 35, d.umbrellaAdminPercent),
    unpaidLeavePercentOverride:
      raw.unpaidLeavePercentOverride == null || !Number.isFinite(raw.unpaidLeavePercentOverride)
        ? null
        : clampNum(raw.unpaidLeavePercentOverride, 0, 80, 0),
  };
}
