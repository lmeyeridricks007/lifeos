/**
 * Pure helpers for the childcare estimator: caps, planning reimbursement %, benefit slice, first-month cash, salary band.
 */
import {
  childcareBenefitBandsByYear,
  childcareProviderAnchorsByCity,
  childcareRatesByYear,
  childcareReimbursableHoursCapByYear,
  childcareSetupAssumptions,
  getProviderAnchorHourlyEur,
} from "@/src/lib/tools/childcare/config";
import type {
  CareType,
  ChildcareCityId,
  ChildcareFirstMonthBreakdown,
  ChildcareFirstMonthLine,
  ChildcareSetupFirstMonthInput,
  ChildcareTaxYear,
  ComfortLevel,
  HouseholdType,
  ProviderCostTier,
} from "@/src/types/tools/childcare";

export const DEFAULT_HOURS_PER_DAY: Record<CareType, number> = {
  daycare: 8,
  bso: 4,
  gastouder: 8,
};

/** When household income is missing or non-positive: assume high income so the model uses a lower planning % (conservative = higher out-of-pocket). */
export const CHILDCARE_DEFAULT_INCOME_WHEN_MISSING_EUR = 155_000;

export function roundMoney(n: number): number {
  return Math.round(n * 100) / 100;
}

export function monthlyHoursFactor(scheduleMode: "full_month" | "school_weeks_only"): number {
  if (scheduleMode === "school_weeks_only") return 40 / 12;
  return 52 / 12;
}

/** Official max hourly rate (€) for care type in tax year — from `childcareRatesByYear`. */
export function getChildcareOfficialCap(year: ChildcareTaxYear, careType: CareType): number {
  return childcareRatesByYear[year][careType];
}

/** Max reimbursable hours per child per month for that tax year. */
export function getChildcareReimbursableHourCap(year: ChildcareTaxYear): number {
  return childcareReimbursableHoursCapByYear[year] ?? 230;
}

/**
 * Planning reimbursement % (0–1) for the reimbursable base, before eligibility multiplier.
 * Uses bracketed income bands; first vs additional child; optional single-parent nudge (tiny, documented).
 */
export function getChildcareReimbursementPercent(
  year: ChildcareTaxYear,
  householdIncomeEur: number,
  childIndex: number,
  householdType: HouseholdType
): number {
  const bands = childcareBenefitBandsByYear[year];
  const income = Math.max(0, householdIncomeEur);
  let row = bands[bands.length - 1];
  for (const b of bands) {
    if (income <= b.maxIncomeEur) {
      row = b;
      break;
    }
  }
  const base =
    childIndex === 0 ? row.reimbursementFractionFirstChild : row.reimbursementFractionAdditionalChild;
  const singleNudge = householdType === "single" ? 0.99 : 1;
  return Math.min(1, Math.max(0, base * singleNudge));
}

/** Fallback to “other” if an unexpected city id appears at runtime. */
export function resolveChildcareCityForAnchors(city: ChildcareCityId): ChildcareCityId {
  return city in childcareProviderAnchorsByCity ? city : "other";
}

/**
 * Effective provider hourly rate: manual if valid; else city anchor. Rates ≤ 0 are rejected → anchor.
 */
export function resolveProviderHourlyRateEur(params: {
  rateMode: "model" | "manual";
  manualHourlyRateEur: number | null;
  city: ChildcareCityId;
  tier: ProviderCostTier;
  careType: CareType;
}): { rate: number; usedAnchor: boolean; note: string | null } {
  const city = resolveChildcareCityForAnchors(params.city);
  if (params.rateMode === "manual" && params.manualHourlyRateEur != null) {
    const m = params.manualHourlyRateEur;
    if (Number.isFinite(m) && m > 0) {
      return { rate: roundMoney(m), usedAnchor: false, note: null };
    }
    return {
      rate: getProviderAnchorHourlyEur(city, params.tier, params.careType),
      usedAnchor: true,
      note: "Manual rate missing or invalid — using city model anchor.",
    };
  }
  return {
    rate: getProviderAnchorHourlyEur(city, params.tier, params.careType),
    usedAnchor: true,
    note: null,
  };
}

/** Monthly hours from inputs; negative components clamped to 0; hours per month capped at 400. */
export function resolveMonthlyCareHours(child: {
  hoursInputMode: "days_per_week" | "hours_per_month";
  hoursPerMonth: number | null;
  daysPerWeek: number;
  careType: CareType;
  scheduleMode: "full_month" | "school_weeks_only";
}): number {
  const factor = monthlyHoursFactor(child.scheduleMode);
  if (child.hoursInputMode === "hours_per_month") {
    const h = child.hoursPerMonth;
    if (h != null && Number.isFinite(h) && h > 0) {
      return roundMoney(Math.min(400, Math.max(0, h)));
    }
  }
  const d = Math.min(7, Math.max(0, child.daysPerWeek));
  const hpd = DEFAULT_HOURS_PER_DAY[child.careType];
  return roundMoney(d * hpd * factor);
}

export function clampReimbursableHours(monthlyHours: number, year: ChildcareTaxYear): number {
  const cap = getChildcareReimbursableHourCap(year);
  return Math.min(Math.max(0, monthlyHours), cap);
}

export type EstimateChildcareBenefitForChildParams = {
  capAware: boolean;
  providerBillMonthly: number;
  reimbursableBase: number;
  reimbursementPercent: number;
  eligibilityMultiplier: number;
};

/**
 * Estimated monthly benefit for one child: planning % × eligibility, capped at that child’s bill.
 */
export function estimateChildcareBenefitForChild(p: EstimateChildcareBenefitForChildParams): number {
  const base = p.capAware ? p.reimbursableBase : p.providerBillMonthly;
  const raw = roundMoney(base * p.reimbursementPercent * p.eligibilityMultiplier);
  return Math.max(0, Math.min(raw, p.providerBillMonthly));
}

export type FirstMonthCashParams = {
  netMonthlyChildcare: number;
  grossMonthlyProvider: number;
  registrationTotal: number;
  setup: ChildcareSetupFirstMonthInput;
};

/** Line items for UI; `totalEur` matches legacy first-month cash sum. */
export function buildChildcareFirstMonthBreakdown(p: FirstMonthCashParams): ChildcareFirstMonthBreakdown {
  const s = childcareSetupAssumptions;
  const lines: ChildcareFirstMonthLine[] = [];

  lines.push({
    id: "recurring-net",
    label: "Estimated monthly out-of-pocket",
    detail: "Recurring cash after estimated benefit",
    amountEur: roundMoney(p.netMonthlyChildcare),
    kind: "recurring_net",
  });

  if (p.setup.includeRegistrationFees) {
    const amt = roundMoney(Math.max(0, p.registrationTotal));
    if (amt > 0) {
      lines.push({
        id: "registration",
        label: "Registration / sign-up fees",
        detail: "One-off total from child cards",
        amountEur: amt,
        kind: "one_off",
      });
    }
  }
  if (p.setup.includeFirstInvoiceTimingRisk) {
    const amt = roundMoney(p.grossMonthlyProvider * s.firstInvoiceRiskFraction);
    lines.push({
      id: "invoice-timing",
      label: "First-invoice timing buffer",
      detail: `~${Math.round(s.firstInvoiceRiskFraction * 100)}% of gross monthly bill — partial month or overlap`,
      amountEur: amt,
      kind: "timing_buffer",
    });
  }
  if (p.setup.includeAdvanceDeposit) {
    const amt = roundMoney(p.grossMonthlyProvider * s.advanceDepositMonths);
    lines.push({
      id: "deposit",
      label: "Deposit / prepayment (placeholder)",
      detail: `${s.advanceDepositMonths} × gross monthly bill — match your contract`,
      amountEur: amt,
      kind: "one_off",
    });
  }
  if (p.setup.includeSchoolHolidayReserve) {
    lines.push({
      id: "holiday-global",
      label: "School holiday reserve (planning)",
      amountEur: s.schoolHolidayReserveEur,
      kind: "global_reserve",
    });
  }
  if (p.setup.includeEmergencyBackupReserve) {
    lines.push({
      id: "backup-global",
      label: "Emergency / backup care reserve",
      amountEur: s.emergencyBackupReserveEur,
      kind: "global_reserve",
    });
  }
  if (p.setup.includePickupTransportReserve) {
    lines.push({
      id: "pickup-global",
      label: "Pickup / transport reserve",
      amountEur: s.pickupTransportReserveEur,
      kind: "global_reserve",
    });
  }

  const totalEur = roundMoney(lines.reduce((acc, l) => acc + l.amountEur, 0));
  const nonRecurring = roundMoney(totalEur - p.netMonthlyChildcare);
  const suggestedExtraReserveEur =
    nonRecurring > 0 || lines.some((l) => l.kind === "timing_buffer")
      ? roundMoney(Math.max(250, nonRecurring * 0.2 + 100))
      : null;

  return { lines, totalEur, suggestedExtraReserveEur };
}

export function calculateChildcareFirstMonthCash(p: FirstMonthCashParams): number {
  return buildChildcareFirstMonthBreakdown(p).totalEur;
}

export function comfortTargetRemainingFraction(level: ComfortLevel): number {
  switch (level) {
    case "essential":
      return 0.05;
    case "balanced":
      return 0.12;
    case "comfortable":
      return 0.18;
    default:
      return 0.12;
  }
}

export type SalaryComfortBandResult = {
  childcareShareOfNetPercent: number | null;
  budgetImpactLabel: "light" | "meaningful" | "heavy" | null;
  additionalNetForComfortEur: number | null;
  salaryTargetNarrative: string | null;
};

export function calculateChildcareSalaryComfortBand(params: {
  netMonthlyChildcare: number;
  householdNetMonthlyEur: number | null;
  comfortLevel: ComfortLevel;
}): SalaryComfortBandResult {
  const netIn = params.householdNetMonthlyEur;
  if (netIn == null || netIn <= 0) {
    return {
      childcareShareOfNetPercent: null,
      budgetImpactLabel: null,
      additionalNetForComfortEur: null,
      salaryTargetNarrative: null,
    };
  }
  const sharePct = roundMoney((params.netMonthlyChildcare / netIn) * 100);
  const share = params.netMonthlyChildcare / netIn;
  let budgetImpactLabel: "light" | "meaningful" | "heavy";
  if (share < 0.08) budgetImpactLabel = "light";
  else if (share < 0.18) budgetImpactLabel = "meaningful";
  else budgetImpactLabel = "heavy";

  const wantRemain = comfortTargetRemainingFraction(params.comfortLevel);
  const targetNet = params.netMonthlyChildcare / (1 - wantRemain);
  const additionalNetForComfortEur = roundMoney(Math.max(0, targetNet - netIn));

  const salaryTargetNarrative =
    additionalNetForComfortEur > 0
      ? `Rough planning: about €${additionalNetForComfortEur.toLocaleString("en-NL", { maximumFractionDigits: 0 })} extra net household income per month would bring childcare down to roughly ${(100 * wantRemain).toFixed(0)}% of net left for other essentials at your current childcare cost — illustrative only.`
      : `At your entered net income, childcare uses about ${sharePct.toFixed(0)}% of net — still check seasonality, holidays, and waiting-list gaps in real life.`;

  return {
    childcareShareOfNetPercent: sharePct,
    budgetImpactLabel,
    additionalNetForComfortEur,
    salaryTargetNarrative,
  };
}

/** Planning reduction when working-parent assumptions are weak (not legal advice). */
export function benefitEligibilityMultiplier(
  workingParentsCount: 1 | 2,
  status: "both" | "one" | "mixed"
): number {
  if (workingParentsCount < 2) return 0.25;
  if (status === "both") return 1;
  if (status === "mixed") return 0.72;
  return 0.28;
}

/**
 * Over-cap “loss” vs a naive model that would reimburse at full provider rate for all booked hours:
 * - hourly: (providerRate - cap)+ × hours
 * - hours: full provider rate on hours beyond reimbursable cap
 */
export function computeOverCapLoss(params: {
  capAware: boolean;
  providerRate: number;
  monthlyHours: number;
  officialCap: number;
  reimbursableHours: number;
}): { overCapLoss: number; hourlyOverCapComponent: number; hoursOverCapComponent: number } {
  if (!params.capAware) {
    return { overCapLoss: 0, hourlyOverCapComponent: 0, hoursOverCapComponent: 0 };
  }
  const rate = Math.max(0, params.providerRate);
  const cap = params.officialCap;
  const h = Math.max(0, params.monthlyHours);
  const hourlyOverCapComponent = roundMoney(Math.max(0, rate - cap) * h);
  const extraHours = Math.max(0, h - params.reimbursableHours);
  const hoursOverCapComponent = roundMoney(extraHours * rate);
  return {
    hourlyOverCapComponent,
    hoursOverCapComponent,
    overCapLoss: roundMoney(hourlyOverCapComponent + hoursOverCapComponent),
  };
}
