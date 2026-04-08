import type {
  ChildcareBenefitInput,
  ChildcareChildInput,
  ChildcareEstimatorInput,
  ChildcareSetupFirstMonthInput,
  ChildcareWorkDecisionInput,
  ChildcareCityId,
  ChildcareTaxYear,
} from "@/src/types/tools/childcare";

const CITIES: ChildcareCityId[] = [
  "amsterdam",
  "rotterdam",
  "the-hague",
  "utrecht",
  "eindhoven",
  "haarlem",
  "leiden",
  "delft",
  "groningen",
  "tilburg",
  "breda",
  "arnhem-nijmegen",
  "other",
];

function pickEnum<T extends string>(v: unknown, allowed: readonly T[], fallback: T): T {
  return typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : fallback;
}

function clampInt(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, Math.round(n)));
}

function clampMoney(n: number, max: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(max, Math.round(n * 100) / 100);
}

function pickTaxYear(v: unknown): ChildcareTaxYear {
  const n = Number(v);
  return n === 2027 ? 2027 : 2026;
}

function sanitizeChild(p: Record<string, unknown>, index: number): ChildcareChildInput {
  const id = typeof p.id === "string" && p.id ? p.id : `child-${index + 1}`;
  const label =
    typeof p.label === "string" && p.label.trim() ? p.label.trim() : `Child ${index + 1}`;
  return {
    id,
    label,
    ageBand: pickEnum(p.ageBand, ["0-1", "1-3", "4-7", "8-12"] as const, "1-3"),
    schoolAge: Boolean(p.schoolAge),
    careType: pickEnum(p.careType, ["daycare", "bso", "gastouder"] as const, "daycare"),
    rateMode: pickEnum(p.rateMode, ["model", "manual"] as const, "model"),
    manualHourlyRateEur:
      p.manualHourlyRateEur === null || p.manualHourlyRateEur === undefined || p.manualHourlyRateEur === ""
        ? null
        : clampMoney(Number(p.manualHourlyRateEur), 80),
    hoursInputMode: pickEnum(p.hoursInputMode, ["days_per_week", "hours_per_month"] as const, "days_per_week"),
    daysPerWeek: clampInt(Number(p.daysPerWeek ?? 3), 0, 7),
    hoursPerMonth:
      p.hoursPerMonth === null || p.hoursPerMonth === undefined || p.hoursPerMonth === ""
        ? null
        : clampInt(Number(p.hoursPerMonth), 1, 400),
    scheduleMode: pickEnum(p.scheduleMode, ["full_month", "school_weeks_only"] as const, "full_month"),
    registrationFeeEur: clampMoney(Number(p.registrationFeeEur ?? 0), 25_000),
    mealsSuppliesMonthlyEur: clampMoney(Number(p.mealsSuppliesMonthlyEur ?? 0), 5_000),
    holidayCareReserveMonthlyEur: clampMoney(Number(p.holidayCareReserveMonthlyEur ?? 0), 5_000),
    backupCareReserveMonthlyEur: clampMoney(Number(p.backupCareReserveMonthlyEur ?? 0), 5_000),
  };
}

export const DEFAULT_CHILDCARE_INPUT: ChildcareEstimatorInput = {
  taxYear: 2026,
  city: "amsterdam",
  householdType: "couple",
  relocationStage: "researching",
  providerCostTier: "standard",
  children: [
    {
      id: "child-1",
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
      registrationFeeEur: 75,
      mealsSuppliesMonthlyEur: 0,
      holidayCareReserveMonthlyEur: 0,
      backupCareReserveMonthlyEur: 0,
    },
  ],
  benefit: {
    annualHouseholdIncomeEur: 85_000,
    workingParentsCount: 2,
    workingParentsStatus: "both",
    useOfficialCapAwareEstimate: true,
  },
  setupFirstMonth: {
    includeRegistrationFees: true,
    includeFirstInvoiceTimingRisk: true,
    includeAdvanceDeposit: false,
    includeSchoolHolidayReserve: false,
    includeEmergencyBackupReserve: false,
    includePickupTransportReserve: false,
  },
  workDecision: {
    householdNetMonthlyEur: null,
    secondParentReturningToWork: false,
    comfortLevel: "balanced",
  },
};

export function sanitizeChildcareInput(partial: unknown): ChildcareEstimatorInput {
  const base = DEFAULT_CHILDCARE_INPUT;
  if (!partial || typeof partial !== "object") return { ...base, children: base.children.map((c) => ({ ...c })) };
  const p = partial as Record<string, unknown>;

  const childrenRaw = p.children;
  let children: ChildcareChildInput[] = base.children.map((c) => ({ ...c }));
  if (Array.isArray(childrenRaw) && childrenRaw.length > 0) {
    children = childrenRaw.slice(0, 6).map((c, i) => sanitizeChild(c as Record<string, unknown>, i));
  }

  const b = (p.benefit as Record<string, unknown>) || {};
  const benefit: ChildcareBenefitInput = {
    annualHouseholdIncomeEur: clampInt(Number(b.annualHouseholdIncomeEur ?? base.benefit.annualHouseholdIncomeEur), 0, 2_000_000),
    workingParentsCount: Number(b.workingParentsCount) === 1 ? 1 : 2,
    workingParentsStatus: pickEnum(b.workingParentsStatus, ["both", "one", "mixed"] as const, base.benefit.workingParentsStatus),
    useOfficialCapAwareEstimate: b.useOfficialCapAwareEstimate === false ? false : true,
  };

  const s = (p.setupFirstMonth as Record<string, unknown>) || {};
  const setupFirstMonth: ChildcareSetupFirstMonthInput = {
    includeRegistrationFees: s.includeRegistrationFees === false ? false : true,
    includeFirstInvoiceTimingRisk: s.includeFirstInvoiceTimingRisk === false ? false : true,
    includeAdvanceDeposit: Boolean(s.includeAdvanceDeposit),
    includeSchoolHolidayReserve: Boolean(s.includeSchoolHolidayReserve),
    includeEmergencyBackupReserve: Boolean(s.includeEmergencyBackupReserve),
    includePickupTransportReserve: Boolean(s.includePickupTransportReserve),
  };

  const w = (p.workDecision as Record<string, unknown>) || {};
  const netRaw = w.householdNetMonthlyEur;
  const householdNetMonthlyEur =
    netRaw === null || netRaw === undefined || netRaw === ""
      ? null
      : clampInt(Number(netRaw), 0, 150_000);
  const workDecision: ChildcareWorkDecisionInput = {
    householdNetMonthlyEur,
    secondParentReturningToWork: Boolean(w.secondParentReturningToWork),
    comfortLevel: pickEnum(w.comfortLevel, ["essential", "balanced", "comfortable"] as const, base.workDecision.comfortLevel),
  };

  return {
    taxYear: pickTaxYear(p.taxYear ?? base.taxYear),
    city: pickEnum(p.city, CITIES, base.city),
    householdType: pickEnum(p.householdType, ["single", "couple"] as const, base.householdType),
    relocationStage: pickEnum(p.relocationStage, ["researching", "moving_soon", "in_nl"] as const, base.relocationStage),
    providerCostTier: pickEnum(p.providerCostTier, ["low", "standard", "premium"] as const, base.providerCostTier),
    children,
    benefit,
    setupFirstMonth,
    workDecision,
  };
}

export function encodeChildcareInputToParam(input: ChildcareEstimatorInput): string {
  const json = JSON.stringify(input);
  if (typeof btoa === "undefined") return "";
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeChildcareParam(param: string): Partial<ChildcareEstimatorInput> | null {
  try {
    let b64 = param.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const json = decodeURIComponent(escape(atob(b64)));
    const o = JSON.parse(json) as ChildcareEstimatorInput;
    return typeof o === "object" && o ? o : null;
  } catch {
    return null;
  }
}
