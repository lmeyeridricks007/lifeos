import { calculateDutchSalaryNet } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import { mergeSalaryNetInputs } from "@/src/lib/tools/dutch-salary-net/defaultInputs";
import type { SalaryNetCalculatorInputs } from "@/src/lib/tools/dutch-salary-net/types";
import type { RulingPlanningAssumption } from "@/src/types/tools/rent-affordability";

export type RentSalaryBridgeParams = {
  bonusAnnual: number;
  includeHolidayAllowance: boolean;
  apply30Ruling: boolean;
};

function buildSalaryInputs(
  grossMonthly: number,
  p: RentSalaryBridgeParams,
  ruling: boolean
): SalaryNetCalculatorInputs {
  return mergeSalaryNetInputs({
    salaryInputBasis: "monthly",
    salaryAmount: Math.max(0, grossMonthly),
    bonusAnnual: Math.max(0, p.bonusAnnual),
    includeHolidayAllowance: p.includeHolidayAllowance,
    rulingMode: ruling ? "max" : "none",
    maxStatutoryFacilityPercent: 30,
    pensionEmployeePercent: null,
    includeSocialContributions: true,
    includeGeneralTaxCredit: true,
    includeLabourTaxCredit: true,
  });
}

export function netMonthlyFromGrossMonthly(
  grossMonthly: number,
  p: RentSalaryBridgeParams,
  ruling: boolean
): { netMonthly: number; grossMonthly: number; grossAnnual: number } | null {
  const inputs = buildSalaryInputs(grossMonthly, p, ruling);
  const c = calculateDutchSalaryNet(inputs);
  if (!c) return null;
  return { netMonthly: c.netMonthly, grossMonthly: c.grossMonthly, grossAnnual: c.grossAnnual };
}

/**
 * Invert indicative gross from target net (monthly), using the same simplified payroll model as the salary tool.
 * Binary search — sufficient for planning bands.
 */
export function grossMonthlyFromTargetNetMonthly(targetNetMonthly: number, p: RentSalaryBridgeParams, ruling: boolean): number {
  const target = Math.max(0, targetNetMonthly);
  if (target <= 0) return 0;
  let lo = 300;
  let hi = 40_000;
  for (let i = 0; i < 48; i++) {
    const mid = (lo + hi) / 2;
    const r = netMonthlyFromGrossMonthly(mid, p, ruling);
    const n = r?.netMonthly ?? 0;
    if (n < target) lo = mid;
    else hi = mid;
  }
  return Math.round(hi);
}

/** Indicative net from gross using Dutch salary tool model; `maybe` blends ruled / unruled nets. */
export function netMonthlyFromGrossWithRulingAssumption(
  grossMonthly: number,
  p: RentSalaryBridgeParams,
  ruling: RulingPlanningAssumption
): { netMonthly: number; grossMonthly: number; grossAnnual: number } | null {
  const g = Math.max(0, grossMonthly);
  if (g <= 0) return { netMonthly: 0, grossMonthly: 0, grossAnnual: 0 };
  if (ruling === "no") return netMonthlyFromGrossMonthly(g, p, false);
  if (ruling === "yes") return netMonthlyFromGrossMonthly(g, p, true);
  const a = netMonthlyFromGrossMonthly(g, p, false);
  const b = netMonthlyFromGrossMonthly(g, p, true);
  if (!a || !b) return a ?? b;
  return {
    netMonthly: (a.netMonthly + b.netMonthly) / 2,
    grossMonthly: a.grossMonthly,
    grossAnnual: a.grossAnnual,
  };
}

/** Indicative gross from target net; `maybe` averages inverses (planning only). */
export function grossMonthlyFromNetWithRulingAssumption(
  targetNetMonthly: number,
  p: RentSalaryBridgeParams,
  ruling: RulingPlanningAssumption
): number {
  const target = Math.max(0, targetNetMonthly);
  if (target <= 0) return 0;
  if (ruling === "no") return grossMonthlyFromTargetNetMonthly(target, p, false);
  if (ruling === "yes") return grossMonthlyFromTargetNetMonthly(target, p, true);
  const g0 = grossMonthlyFromTargetNetMonthly(target, p, false);
  const g1 = grossMonthlyFromTargetNetMonthly(target, p, true);
  return Math.round((g0 + g1) / 2);
}
