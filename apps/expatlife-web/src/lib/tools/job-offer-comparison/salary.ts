import { calculateDutchSalaryNet } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import { SALARY_NET_DEFAULT_INPUTS } from "@/src/lib/tools/dutch-salary-net/defaultInputs";
import type { RulingMode, SalaryNetCalculatorInputs } from "@/src/lib/tools/dutch-salary-net/types";
import {
  BEST_EFFORTS_RULING_CUSTOM_PERCENT,
  CONTRACTOR_NET_PLANNING_FACTOR,
  DISCRETIONARY_BONUS_PLANNING_FRACTION,
  FOREIGN_REMOTE_NET_PLANNING_FACTOR,
} from "./assumptions";
import type { CompensationSummary, JobOfferInput, NetPayEstimate } from "./types";

function rulingFromOffer(o: JobOfferInput): { mode: RulingMode; customPct: number; label: string } {
  switch (o.thirtyPercentSupport) {
    case "yes":
      return { mode: "max", customPct: 30, label: "30% facility modelled at statutory max (planning)" };
    case "best_efforts":
      return {
        mode: "custom",
        customPct: BEST_EFFORTS_RULING_CUSTOM_PERCENT,
        label: "30% facility modelled at partial / uncertain support (planning)",
      };
    case "no":
      return { mode: "none", customPct: 30, label: "No 30% facility in model" };
    default:
      return { mode: "none", customPct: 30, label: "30% facility not assumed (not mentioned)" };
  }
}

export function buildAnnualBonusPlanning(o: JobOfferInput): { annual: string; note: string } {
  if (o.bonusType === "none") return { annual: "0", note: "No bonus in package" };
  const baseAnnual = o.salaryInputBasis === "monthly" ? o.grossSalary * 12 : o.grossSalary;
  if (o.bonusType === "guaranteed") {
    if (o.bonusAmountAnnual > 0) return { annual: String(o.bonusAmountAnnual), note: "Guaranteed bonus (annual €)" };
    if (o.bonusPercent > 0)
      return { annual: String(baseAnnual * (o.bonusPercent / 100)), note: `Guaranteed bonus (${o.bonusPercent}% of base)` };
    return { annual: "0", note: "Guaranteed bonus indicated but no amount entered" };
  }
  if (o.bonusAmountAnnual > 0) {
    return {
      annual: String(o.bonusAmountAnnual * DISCRETIONARY_BONUS_PLANNING_FRACTION),
      note: "Discretionary bonus — model uses a conservative fraction of entered annual",
    };
  }
  if (o.bonusPercent > 0) {
    return {
      annual: String(baseAnnual * (o.bonusPercent / 100) * DISCRETIONARY_BONUS_PLANNING_FRACTION),
      note: "Discretionary bonus — conservative % of base",
    };
  }
  return { annual: "0", note: "Discretionary bonus with no amount — not modelled in recurring cash" };
}

function holidayIncludedInGross(o: JobOfferInput): boolean {
  return o.holidayAllowance === "included";
}

function includeHolidayAllowanceInModel(o: JobOfferInput): boolean {
  if (o.holidayAllowance === "included") return false;
  if (o.holidayAllowance === "separate") return true;
  return true;
}

export function buildCompensationSummary(o: JobOfferInput): CompensationSummary {
  const baseAnnual = o.salaryInputBasis === "monthly" ? o.grossSalary * 12 : o.grossSalary;
  const thirteenth = o.hasThirteenthMonth ? baseAnnual / 12 : 0;
  const subtotal = baseAnnual + thirteenth;
  const bonus = Number(buildAnnualBonusPlanning(o).annual);
  const recurringCash = subtotal + bonus;
  const extras = Math.max(0, o.signOnBonus) + Math.max(0, o.relocationBonus);

  return {
    annualGrossSalary: subtotal,
    monthlyGrossSalary: subtotal / 12,
    annualBonusPlanning: bonus,
    annualTotalCashRecurring: recurringCash,
    firstYearCashExtrasAnnual: extras,
    holidayAllowanceNote: holidayIncludedInGross(o)
      ? "Gross treated as including vakantiegeld — not added again in the net model."
      : o.holidayAllowance === "separate"
        ? "8% vakantiegeld added in the salary net model on salary + modelled bonus."
        : "Unclear vakantiegeld — model adds 8% on salary + bonus (typical NL pattern). Confirm with HR.",
    bonusNote: buildAnnualBonusPlanning(o).note,
  };
}

export function estimateNetForOffer(o: JobOfferInput, comp: CompensationSummary): NetPayEstimate {
  const { mode, customPct, label } = rulingFromOffer(o);
  const bonusAnnual = Number(buildAnnualBonusPlanning(o).annual);

  const employmentType = o.contractType === "fixed_term" ? "temporary" : "permanent";

  const inputs: SalaryNetCalculatorInputs = {
    ...SALARY_NET_DEFAULT_INPUTS,
    salaryInputBasis: "annual",
    salaryAmount: comp.annualGrossSalary,
    bonusAnnual,
    includeHolidayAllowance: includeHolidayAllowanceInModel(o),
    rulingMode: mode,
    customRulingPercent: customPct,
    employmentType,
  };

  const computation = calculateDutchSalaryNet(inputs);
  let modelNote = "Indicative Dutch payroll net via shared salary net calculator assumptions.";
  let netM = computation?.netMonthly ?? 0;
  let netA = computation?.netAnnual ?? 0;
  if (!computation) {
    modelNote = "Gross too low for the net model — enter a positive salary to estimate net.";
  }

  if (o.contractType === "contractor") {
    netM *= CONTRACTOR_NET_PLANNING_FACTOR;
    netA *= CONTRACTOR_NET_PLANNING_FACTOR;
    modelNote =
      "Contractor / umbrella path: net scaled by a planning factor after payroll-style estimate — confirm with your provider.";
  } else if (o.contractType === "remote_foreign") {
    netM *= FOREIGN_REMOTE_NET_PLANNING_FACTOR;
    netA *= FOREIGN_REMOTE_NET_PLANNING_FACTOR;
    modelNote =
      "Foreign employer remote: net discounted for cross-border payroll / tax friction (planning only).";
  }

  return {
    estimatedNetMonthly: netM,
    estimatedNetAnnual: netA,
    modelNote,
    rulingModeUsed: label,
  };
}
