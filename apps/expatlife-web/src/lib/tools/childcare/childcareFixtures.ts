/**
 * Deterministic sample inputs for tests and QA — not real families.
 */
import { DEFAULT_CHILDCARE_INPUT } from "@/src/lib/tools/childcare/childcareValidation";
import type { ChildcareEstimatorInput } from "@/src/types/tools/childcare";

function base(): ChildcareEstimatorInput {
  return JSON.parse(JSON.stringify(DEFAULT_CHILDCARE_INPUT)) as ChildcareEstimatorInput;
}

/** One toddler, Amsterdam, daycare, 3 days/week, standard tier, 2026. */
export const FIXTURE_AMS_TODDLER_3D_DAYCARE: ChildcareEstimatorInput = (() => {
  const x = base();
  x.taxYear = 2026;
  x.city = "amsterdam";
  x.providerCostTier = "standard";
  x.children = [
    {
      id: "c1",
      label: "Child 1",
      ageBand: "1-3",
      schoolAge: false,
      careType: "daycare",
      rateMode: "model",
      manualHourlyRateEur: null,
      hoursInputMode: "days_per_week",
      daysPerWeek: 3,
      hoursPerMonth: null,
      scheduleMode: "full_month",
      registrationFeeEur: 0,
      mealsSuppliesMonthlyEur: 0,
      holidayCareReserveMonthlyEur: 0,
      backupCareReserveMonthlyEur: 0,
    },
  ];
  x.benefit.annualHouseholdIncomeEur = 85_000;
  return x;
})();

/** Same as above but manual hourly rate clearly above 2026 daycare cap (11.23). */
export const FIXTURE_AMS_OVER_CAP_MANUAL_RATE: ChildcareEstimatorInput = (() => {
  const x = JSON.parse(JSON.stringify(FIXTURE_AMS_TODDLER_3D_DAYCARE)) as ChildcareEstimatorInput;
  x.children[0].rateMode = "manual";
  x.children[0].manualHourlyRateEur = 14.5;
  return x;
})();

/** Two children: daycare + BSO. */
export const FIXTURE_TWO_KIDS_DAYCARE_BSO: ChildcareEstimatorInput = (() => {
  const x = base();
  x.city = "rotterdam";
  x.benefit.annualHouseholdIncomeEur = 95_000;
  x.children = [
    {
      id: "c1",
      label: "Younger",
      ageBand: "1-3",
      schoolAge: false,
      careType: "daycare",
      rateMode: "model",
      manualHourlyRateEur: null,
      hoursInputMode: "days_per_week",
      daysPerWeek: 4,
      hoursPerMonth: null,
      scheduleMode: "full_month",
      registrationFeeEur: 0,
      mealsSuppliesMonthlyEur: 0,
      holidayCareReserveMonthlyEur: 0,
      backupCareReserveMonthlyEur: 0,
    },
    {
      id: "c2",
      label: "Older",
      ageBand: "8-12",
      schoolAge: true,
      careType: "bso",
      rateMode: "model",
      manualHourlyRateEur: null,
      hoursInputMode: "days_per_week",
      daysPerWeek: 4,
      hoursPerMonth: null,
      scheduleMode: "school_weeks_only",
      registrationFeeEur: 0,
      mealsSuppliesMonthlyEur: 0,
      holidayCareReserveMonthlyEur: 0,
      backupCareReserveMonthlyEur: 0,
    },
  ];
  return x;
})();

/** Gastouder model rate, The Hague. */
export const FIXTURE_GASTOUDER_HAGUE: ChildcareEstimatorInput = (() => {
  const x = base();
  x.city = "the-hague";
  x.children[0].careType = "gastouder";
  x.children[0].daysPerWeek = 3;
  x.benefit.annualHouseholdIncomeEur = 55_000;
  return x;
})();

/** Income missing / zero — should trigger conservative default and flag. */
export const FIXTURE_MISSING_INCOME: ChildcareEstimatorInput = (() => {
  const x = base();
  x.benefit.annualHouseholdIncomeEur = 0;
  return x;
})();
