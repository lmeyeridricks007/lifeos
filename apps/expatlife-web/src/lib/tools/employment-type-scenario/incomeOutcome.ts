/**
 * # Money modeling (explainable, approximate)
 *
 * **Employee (permanent / fixed-term):**
 * - Gross package = salary (+ bonus) + optional 8% holiday allowance on that subtotal.
 * - Net via `calculateDutchSalaryNet` (indicative brackets + credits), with optional pension % when user says pension in package.
 * - Commute: subtract user monthly × 12 from net (cash impact, not tax).
 *
 * **Contractor (umbrella):**
 * - Billable revenue = dayRate × 220 × utilization OR monthly × 12.
 * - Umbrella fee = % of revenue + fixed monthly × 12; remainder treated as payroll gross for the same net model.
 *
 * **ZZP:**
 * - Revenue adjusted by utilization then downtime fraction.
 * - Subtract accountant + insurance + equipment + pension reserve % of core revenue.
 * - "Profit-like" base run through salary net model as a **proxy** for income tax magnitude; subtract flat health placeholder.
 *
 * **Foreign remote:**
 * - Same gross as employee; reference net from salary model × **0.88** planning discount for cross-border friction.
 */

import { calculateDutchSalaryNet } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import { SALARY_NET_DEFAULT_INPUTS } from "@/src/lib/tools/dutch-salary-net/defaultInputs";
import type {
  EmploymentScenarioId,
  EmploymentTypeScenarioInput,
  MoneyBreakdownLine,
  ScenarioMoneyBreakdown,
  ScenarioMoneyComponents,
} from "./types";
import { rulingAssumptionToCustomPercent, rulingAssumptionToSalaryRulingMode } from "./types";

const BILLABLE_DAYS_YEAR = 220;
const ZZP_HEALTH_FLAT_ANNUAL = 2_400;
const HOLIDAY_ALLOWANCE_RATE = 0.08;
const FOREIGN_NET_PLANNING_FACTOR = 0.88;

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function employeeBaseAnnual(input: EmploymentTypeScenarioInput): number {
  if (input.employeeUseAnnual && input.employeeGrossAnnual > 0) return input.employeeGrossAnnual;
  return input.employeeGrossMonthly * 12;
}

export function billableFraction(input: EmploymentTypeScenarioInput): number {
  const u =
    input.billablePreset === "custom"
      ? input.billableUtilizationCustom
      : input.billablePreset === "100"
        ? 100
        : input.billablePreset === "85"
          ? 85
          : 70;
  return clamp(u / 100, 0.3, 1);
}

function downtimeFraction(input: EmploymentTypeScenarioInput): number {
  if (input.unpaidLeavePercentOverride != null) return clamp(input.unpaidLeavePercentOverride / 100, 0, 0.6);
  if (input.unpaidDowntime === "low") return 0.06;
  if (input.unpaidDowntime === "high") return 0.22;
  return 0.14;
}

function buildSalaryInputsForAnnualGross(
  input: EmploymentTypeScenarioInput,
  grossAnnualPackage: number,
  employmentType: "permanent" | "temporary"
) {
  const rulingMode = rulingAssumptionToSalaryRulingMode(input.rulingAssumption);
  const customPct =
    rulingMode === "custom" ? rulingAssumptionToCustomPercent(input.rulingAssumption) : SALARY_NET_DEFAULT_INPUTS.customRulingPercent;

  let pensionPct: number | null = null;
  if (input.pensionInPackage === "yes") pensionPct = 8;
  else if (input.pensionInPackage === "not_sure") pensionPct = 5;

  return {
    ...SALARY_NET_DEFAULT_INPUTS,
    salaryInputBasis: "annual" as const,
    salaryAmount: grossAnnualPackage,
    bonusAnnual: input.bonusExpected ? Math.max(0, input.bonusAnnualAmount) : 0,
    includeHolidayAllowance: input.includeHolidayAllowance,
    rulingMode,
    customRulingPercent: customPct,
    employmentType,
    pensionEmployeePercent: pensionPct,
  };
}

function contractorBillableAnnual(input: EmploymentTypeScenarioInput): number {
  if (input.contractorMonthlyEquivalent > 0) return input.contractorMonthlyEquivalent * 12;
  return input.contractorDayRate * BILLABLE_DAYS_YEAR * billableFraction(input);
}

function zzpRevenueAnnual(input: EmploymentTypeScenarioInput): number {
  if (input.zzpMonthlyRevenue > 0) return input.zzpMonthlyRevenue * 12;
  return input.zzpDayRate * BILLABLE_DAYS_YEAR * billableFraction(input);
}

function recurringIndependentCostsAnnual(input: EmploymentTypeScenarioInput): number {
  if (input.modelAdminAccountingCosts !== "yes") {
    return 12 * (input.liabilityInsuranceMonthly + input.disabilityInsuranceMonthly);
  }
  return 12 * (input.accountantMonthly + input.liabilityInsuranceMonthly + input.disabilityInsuranceMonthly);
}

function cashflowReserveAnnual(input: EmploymentTypeScenarioInput, baseNetAnnual: number): number {
  const months = clamp(input.delayedPaymentReserveMonths, 0, 12);
  return (baseNetAnnual / 12) * months * 0.15;
}

function impliedPerksAnnual(input: EmploymentTypeScenarioInput, scenarioId: EmploymentScenarioId): number {
  if (scenarioId !== "permanent_employee" && scenarioId !== "fixed_term_employee") return 0;
  let v = 0;
  if (input.travelAllowance === "yes") v += 900;
  if (input.trainingBenefits === "yes") v += 600;
  return v;
}

export type IncomeOutcomeComputation = {
  breakdown: ScenarioMoneyBreakdown;
};

function emptyComponents(): ScenarioMoneyComponents {
  return {
    baseSalaryOrContractGrossAnnual: 0,
    bonusAnnual: 0,
    holidayAllowanceAnnual: 0,
    impliedEmployeePerksValueAnnual: 0,
    pensionCostAnnual: 0,
    insuranceCostsAnnual: 0,
    adminAccountingAnnual: 0,
    umbrellaFeesAnnual: 0,
    utilizationHaircutAnnual: 0,
    downtimeHaircutAnnual: 0,
    taxAndSocialEstimateAnnual: 0,
    crossBorderPlanningDiscountAnnual: 0,
    cashflowReserveAnnual: 0,
    zzpHealthFlatAnnual: 0,
    commuteCostAnnual: 0,
    employerEquipmentAnnual: 0,
  };
}

/**
 * Core money path: deterministic inputs → structured components + line items + planning net.
 */
export function computeIncomeOutcome(scenarioId: EmploymentScenarioId, input: EmploymentTypeScenarioInput): IncomeOutcomeComputation {
  const lines: MoneyBreakdownLine[] = [];
  const formulaNotes: string[] = [
    "Employee/contractor tax stack: indicative Dutch salary model (not payroll tables).",
    "ZZP: profit-like base + tax proxy + €2.4k/yr health placeholder — not box-1 exact.",
  ];
  const components = emptyComponents();
  const planningNotes: string[] = [
    "Indicative planning figures only — not payroll, not legal/tax advice. Verify take-home with a payroll provider or tax advisor.",
  ];

  const push = (line: MoneyBreakdownLine) => lines.push(line);

  if (scenarioId === "permanent_employee" || scenarioId === "fixed_term_employee") {
    const base = employeeBaseAnnual(input);
    const bonus = input.bonusExpected ? Math.max(0, input.bonusAnnualAmount) : 0;
    const subtotal = base + bonus;
    const holiday = input.includeHolidayAllowance ? subtotal * HOLIDAY_ALLOWANCE_RATE : 0;
    const grossAnnual = subtotal + holiday;
    const perks = impliedPerksAnnual(input, scenarioId);

    components.baseSalaryOrContractGrossAnnual = base;
    components.bonusAnnual = bonus;
    components.holidayAllowanceAnnual = holiday;
    components.impliedEmployeePerksValueAnnual = perks;

    push({ label: "Gross salary (annualized from your input)", amountAnnual: base, category: "gross" });
    if (bonus > 0) push({ label: "Variable pay (annual, gross)", amountAnnual: bonus, category: "gross" });
    if (holiday > 0) {
      push({
        label: `Holiday allowance (${HOLIDAY_ALLOWANCE_RATE * 100}% on subtotal, planning)`,
        amountAnnual: holiday,
        category: "gross",
      });
    }
    if (perks > 0) {
      push({
        label: "Implied perks value (travel/training toggles, rough €)",
        amountAnnual: perks,
        category: "benefit",
        note: "Not added to gross for tax model — shown for comparison awareness only.",
      });
    }
    push({ label: "Package treated as gross for tax model", amountAnnual: grossAnnual, category: "gross" });

    const empType = scenarioId === "fixed_term_employee" ? "temporary" : "permanent";
    const salaryInputs = buildSalaryInputsForAnnualGross(input, grossAnnual, empType);
    const comp = calculateDutchSalaryNet(salaryInputs);
    if (!comp) {
      return {
        breakdown: {
          scenarioId,
          lines,
          grossOrRevenueAnnual: grossAnnual,
          estimatedNetAnnual: 0,
          estimatedNetMonthly: 0,
          planningNotes: [...planningNotes, "Enter a positive gross salary to estimate net."],
          formulaNotes,
          components,
        },
      };
    }

    components.pensionCostAnnual = comp.pensionEmployeeAnnual;
    components.taxAndSocialEstimateAnnual = comp.incomeTaxAnnual + comp.socialEmployeeAnnual;

    push({
      label: "Estimated wage tax (after credits, indicative)",
      amountAnnual: -comp.incomeTaxAnnual,
      category: "tax",
      note: comp.modelLabel,
    });
    push({ label: "Estimated employee social (indicative)", amountAnnual: -comp.socialEmployeeAnnual, category: "tax" });
    if (comp.pensionEmployeeAnnual > 0) {
      push({ label: "Pension (employee, modeled %)", amountAnnual: -comp.pensionEmployeeAnnual, category: "pension" });
    }

    components.commuteCostAnnual = input.commuteImpactMonthly * 12;
    if (components.commuteCostAnnual > 0) {
      push({ label: "Commute / travel cash impact (your estimate)", amountAnnual: -components.commuteCostAnnual, category: "adjustment" });
    }

    const netAfter = comp.netAnnual - components.commuteCostAnnual;
    push({ label: "Estimated net (planning)", amountAnnual: netAfter, category: "net" });

    if (input.rulingAssumption !== "no") {
      planningNotes.push(
        "30% ruling: planning assumption only — use the 30% ruling calculator for eligibility and employer application context."
      );
    }

    return {
      breakdown: {
        scenarioId,
        lines,
        grossOrRevenueAnnual: grossAnnual,
        estimatedNetAnnual: netAfter,
        estimatedNetMonthly: netAfter / 12,
        planningNotes,
        formulaNotes,
        components,
      },
    };
  }

  if (scenarioId === "contractor") {
    const billable = contractorBillableAnnual(input);
    const grossRev = billable;
    const util = billableFraction(input);
    const fullYearRev = input.contractorMonthlyEquivalent > 0 ? billable : input.contractorDayRate * BILLABLE_DAYS_YEAR;
    components.utilizationHaircutAnnual = Math.max(0, fullYearRev - billable);

    push({ label: "Billable revenue (after utilization)", amountAnnual: billable, category: "gross" });

    const pctFee = billable * (input.umbrellaAdminPercent / 100);
    const fixedFee = input.umbrellaAdminMonthly * 12;
    components.umbrellaFeesAnnual = pctFee + fixedFee;
    components.adminAccountingAnnual = fixedFee;
    push({ label: "Umbrella / payroll provider (% of revenue)", amountAnnual: -pctFee, category: "admin" });
    push({ label: "Umbrella fixed (monthly × 12)", amountAnnual: -fixedFee, category: "admin" });

    const payrollGross = Math.max(0, billable - pctFee - fixedFee);
    components.baseSalaryOrContractGrossAnnual = payrollGross;
    push({ label: "Amount modeled through payroll (planning)", amountAnnual: payrollGross, category: "gross" });

    const salaryInputs = buildSalaryInputsForAnnualGross(input, payrollGross, "temporary");
    const comp = calculateDutchSalaryNet({ ...salaryInputs, includeHolidayAllowance: false, bonusAnnual: 0 });
    if (!comp) {
      return {
        breakdown: {
          scenarioId,
          lines,
          grossOrRevenueAnnual: billable,
          estimatedNetAnnual: 0,
          estimatedNetMonthly: 0,
          planningNotes: [...planningNotes, "Enter contractor day rate or monthly amount to estimate."],
          formulaNotes,
          components,
        },
      };
    }

    components.taxAndSocialEstimateAnnual = comp.incomeTaxAnnual + comp.socialEmployeeAnnual + comp.pensionEmployeeAnnual;
    components.pensionCostAnnual = comp.pensionEmployeeAnnual;
    push({
      label: "Estimated payroll tax + social + pension (indicative)",
      amountAnnual: -components.taxAndSocialEstimateAnnual,
      category: "tax",
    });

    let net = comp.netAnnual;
    components.cashflowReserveAnnual = cashflowReserveAnnual(input, net);
    if (components.cashflowReserveAnnual > 0) {
      push({
        label: "Cashflow reserve (delayed payment heuristic)",
        amountAnnual: -components.cashflowReserveAnnual,
        category: "adjustment",
        note: "≈ 15% of one month’s net × months selected.",
      });
      net -= components.cashflowReserveAnnual;
    }
    push({ label: "Estimated net after fees (planning)", amountAnnual: net, category: "net" });

    planningNotes.push("Contractor/umbrella setups vary by provider — fees are planning knobs.");
    formulaNotes.push(`Utilization: ${Math.round(util * 100)}% of ${BILLABLE_DAYS_YEAR} day/year baseline.`);

    return {
      breakdown: {
        scenarioId,
        lines,
        grossOrRevenueAnnual: grossRev,
        estimatedNetAnnual: net,
        estimatedNetMonthly: net / 12,
        planningNotes,
        formulaNotes,
        components,
      },
    };
  }

  if (scenarioId === "zzp_self_employed") {
    const grossRev = zzpRevenueAnnual(input);
    const util = billableFraction(input);
    const down = downtimeFraction(input);

    components.baseSalaryOrContractGrossAnnual = grossRev;
    push({ label: "Revenue (headline, before utilization/downtime)", amountAnnual: grossRev, category: "gross" });

    const utilCut = grossRev * (1 - util);
    components.utilizationHaircutAnnual = utilCut;
    push({ label: "Utilization haircut", amountAnnual: -utilCut, category: "adjustment", note: `${Math.round(util * 100)}% billable` });

    const afterUtil = grossRev * util;
    const downCut = afterUtil * down;
    components.downtimeHaircutAnnual = downCut;
    push({
      label: "Unpaid downtime / bench",
      amountAnnual: -downCut,
      category: "adjustment",
      note: input.unpaidLeavePercentOverride != null ? "custom %" : input.unpaidDowntime,
    });

    const billableCore = afterUtil * (1 - down);
    push({ label: "Core billable revenue after bench", amountAnnual: billableCore, category: "gross" });

    const costs = recurringIndependentCostsAnnual(input);
    components.adminAccountingAnnual = input.modelAdminAccountingCosts === "yes" ? input.accountantMonthly * 12 : 0;
    components.insuranceCostsAnnual = 12 * (input.liabilityInsuranceMonthly + input.disabilityInsuranceMonthly);
    push({ label: "Accountant + insurance (annualized)", amountAnnual: -costs, category: "admin" });

    const equip = Math.max(0, input.employerEquipmentAnnual);
    components.employerEquipmentAnnual = equip;
    if (equip > 0) push({ label: "Equipment / setup", amountAnnual: -equip, category: "adjustment" });

    const pensionReserve = billableCore * (input.pensionReservePercent / 100);
    components.pensionCostAnnual = pensionReserve;
    if (pensionReserve > 0) push({ label: "Pension reserve (% of core revenue)", amountAnnual: -pensionReserve, category: "pension" });

    const profitLike = Math.max(0, billableCore - costs - equip - pensionReserve);
    push({ label: "Profit-like base (tax proxy input)", amountAnnual: profitLike, category: "gross" });

    const salaryInputs = buildSalaryInputsForAnnualGross({ ...input, rulingAssumption: "no" }, profitLike, "permanent");
    const comp = calculateDutchSalaryNet({
      ...salaryInputs,
      rulingMode: "none",
      includeHolidayAllowance: false,
      bonusAnnual: 0,
      pensionEmployeePercent: null,
    });

    let taxStack = 0;
    if (comp && profitLike > 0) {
      taxStack = comp.incomeTaxAnnual + comp.socialEmployeeAnnual;
      components.taxAndSocialEstimateAnnual = taxStack;
      push({
        label: "Indicative tax + social (salary proxy — not ZZP exact)",
        amountAnnual: -taxStack,
        category: "tax",
      });
    }

    components.zzpHealthFlatAnnual = ZZP_HEALTH_FLAT_ANNUAL;
    push({ label: "Entrepreneur health flat (planning)", amountAnnual: -ZZP_HEALTH_FLAT_ANNUAL, category: "insurance" });

    let net = profitLike - taxStack - ZZP_HEALTH_FLAT_ANNUAL;
    components.cashflowReserveAnnual = cashflowReserveAnnual(input, Math.max(net, profitLike * 0.5));
    if (components.cashflowReserveAnnual > 0) {
      push({ label: "Cashflow reserve (planning)", amountAnnual: -components.cashflowReserveAnnual, category: "adjustment" });
      net -= components.cashflowReserveAnnual;
    }
    push({ label: "Estimated usable net (planning)", amountAnnual: net, category: "net" });

    planningNotes.push("ZZP: use an accountant for VAT, hours, and real deductions.");
    formulaNotes.push(`Downtime fraction: ${(down * 100).toFixed(0)}% of post-utilization revenue (or custom override).`);

    return {
      breakdown: {
        scenarioId,
        lines,
        grossOrRevenueAnnual: grossRev,
        estimatedNetAnnual: net,
        estimatedNetMonthly: net / 12,
        planningNotes,
        formulaNotes,
        components,
      },
    };
  }

  /* foreign_remote_employee */
  const base = employeeBaseAnnual(input);
  const bonus = input.bonusExpected ? Math.max(0, input.bonusAnnualAmount) : 0;
  const subtotal = base + bonus;
  const holiday = input.includeHolidayAllowance ? subtotal * HOLIDAY_ALLOWANCE_RATE : 0;
  const grossAnnual = subtotal + holiday;

  components.baseSalaryOrContractGrossAnnual = base;
  components.bonusAnnual = bonus;
  components.holidayAllowanceAnnual = holiday;

  push({ label: "Employer gross package (your input)", amountAnnual: grossAnnual, category: "gross" });

  const salaryInputs = buildSalaryInputsForAnnualGross(input, grossAnnual, "permanent");
  const comp = calculateDutchSalaryNet(salaryInputs);
  if (!comp) {
    return {
      breakdown: {
        scenarioId,
        lines,
        grossOrRevenueAnnual: grossAnnual,
        estimatedNetAnnual: 0,
        estimatedNetMonthly: 0,
        planningNotes,
        formulaNotes,
        components,
      },
    };
  }

  const refNet = comp.netAnnual;
  const discount = refNet * (1 - FOREIGN_NET_PLANNING_FACTOR);
  components.crossBorderPlanningDiscountAnnual = discount;
  components.taxAndSocialEstimateAnnual = comp.incomeTaxAnnual + comp.socialEmployeeAnnual;
  push({ label: "Reference net if Dutch payroll only (indicative)", amountAnnual: refNet, category: "net" });
  push({
    label: `Cross-border planning discount (${Math.round((1 - FOREIGN_NET_PLANNING_FACTOR) * 100)}% of reference net)`,
    amountAnnual: -discount,
    category: "adjustment",
    note: "Heuristic for withholding / currency / multi-country admin — not a treaty calculation.",
  });

  const referenceNet = refNet * FOREIGN_NET_PLANNING_FACTOR;
  push({ label: "Planning-adjusted net (foreign employer)", amountAnnual: referenceNet, category: "net" });

  planningNotes.push(
    "Foreign employer: confirm social security, withholding, and residency with a cross-border advisor."
  );
  formulaNotes.push(`Foreign remote net = reference Dutch payroll net × ${FOREIGN_NET_PLANNING_FACTOR}.`);

  return {
    breakdown: {
      scenarioId,
      lines,
      grossOrRevenueAnnual: grossAnnual,
      estimatedNetAnnual: referenceNet,
      estimatedNetMonthly: referenceNet / 12,
      planningNotes,
      formulaNotes,
      components,
    },
  };
}
