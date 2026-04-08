import { DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT, sanitizeEmploymentTypeScenarioInput } from "./defaults";
import type { EmploymentTypeScenarioInput } from "./types";

/** Expat with clear sponsorship need — expect employee archetypes to lead on expat score. */
export function fixtureVisaSensitiveExpat(): EmploymentTypeScenarioInput {
  return sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    visaSponsorship: "yes",
    visaFriendlinessHeavyWeight: "yes",
    residence: "moving_nl",
    priorities: {
      ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT.priorities,
      visaSponsorshipSimplicity: 90,
      stabilitySecurity: 75,
    },
  });
}

/** High day rates, income slider maxed — consultant profile. */
export function fixtureHighIncomeConsultant(): EmploymentTypeScenarioInput {
  return sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    employeeGrossMonthly: 12_000,
    contractorDayRate: 950,
    zzpDayRate: 1000,
    priorities: {
      ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT.priorities,
      higherNetIncome: 95,
      flexibilityIndependence: 70,
    },
  });
}

export function fixtureFixedTermEmployee(): EmploymentTypeScenarioInput {
  return sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    toolMode: "compare_two",
    compareScenarioA: "fixed_term_employee",
    compareScenarioB: "permanent_employee",
    workStabilityExpectation: "stable_long",
  });
}

export function fixtureZzpWithDowntime(): EmploymentTypeScenarioInput {
  return sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    unpaidDowntime: "high",
    contractGapRisk: "high",
    zzpDayRate: 750,
    billablePreset: "70",
    priorities: {
      ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT.priorities,
      stabilitySecurity: 80,
    },
  });
}

export function fixtureContractorWithAdmin(): EmploymentTypeScenarioInput {
  return sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    modelAdminAccountingCosts: "yes",
    accountantMonthly: 350,
    /** Same headline rate as defaults; only umbrella fees increase vs baseline */
    contractorDayRate: DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT.contractorDayRate,
    umbrellaAdminMonthly: 280,
    umbrellaAdminPercent: 12,
    priorities: {
      ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT.priorities,
      lowerAdminBurden: 85,
    },
  });
}

export function fixtureForeignRemote(): EmploymentTypeScenarioInput {
  return sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    includeForeignRemoteScenario: true,
    toolMode: "compare_two",
    compareScenarioA: "foreign_remote_employee",
    compareScenarioB: "permanent_employee",
    residence: "moving_nl",
  });
}
