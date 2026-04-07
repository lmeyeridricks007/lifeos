export type RulingMode = "none" | "max" | "custom";

/** Statutory max under “max ruling” mode: 30% (through 2026) vs 27% (legislative preview). */
export type MaxStatutoryFacilityPercent = 30 | 27;

export type SalaryInputBasis = "annual" | "monthly";

export type EmploymentType = "permanent" | "temporary";

export type SalaryNetCalculatorInputs = {
  salaryInputBasis: SalaryInputBasis;
  /** Gross salary figure (annual or monthly depending on basis). */
  salaryAmount: number;
  /** Extra gross annual (bonus, etc.). */
  bonusAnnual: number;
  includeHolidayAllowance: boolean;
  age: number;
  taxYear: 2026;
  rulingMode: RulingMode;
  /** When rulingMode === "max": model 30% or 27% legislative preview on the capped base. */
  maxStatutoryFacilityPercent: MaxStatutoryFacilityPercent;
  /** Used when rulingMode === "custom" (0–30). */
  customRulingPercent: number;
  /**
   * Advanced: employer-applied facility % (0–30). When set, overrides automatic % from ruling mode
   * except when rulingMode is "none".
   */
  employerFacilityPercent: number | null;
  employmentType: EmploymentType;
  /** 1–12 — linear proration of cash-flow figures for partial calendar years. */
  monthsWorkedInYear: number;
  /** Employee pension as % of gross annual package (pre-tax deduction). */
  pensionEmployeePercent: number | null;
  includeSocialContributions: boolean;
  /** Aproximate algemene heffingskorting. */
  includeGeneralTaxCredit: boolean;
  /** Approximate arbeidskorting. */
  includeLabourTaxCredit: boolean;
  /** Reserved for future modelling — shown in UI only. */
  includePartnerEffect: boolean;
};

export type TaxBandSlice = {
  label: string;
  taxableInBand: number;
  marginalRate: number;
  taxFromBand: number;
};

export type SalaryNetComputation = {
  modelId: string;
  modelLabel: string;
  inputs: SalaryNetCalculatorInputs;
  grossAnnual: number;
  grossMonthly: number;
  bonusAnnual: number;
  holidayAllowanceAnnual: number;
  rulingPercentApplied: number;
  rulingUntaxedAnnual: number;
  taxableIncomeAnnual: number;
  pensionEmployeeAnnual: number;
  socialEmployeeAnnual: number;
  rawIncomeTaxAnnual: number;
  generalTaxCreditApplied: number;
  labourTaxCreditApplied: number;
  incomeTaxAnnual: number;
  netAnnual: number;
  netMonthly: number;
  totalEmployeeDeductionsAnnual: number;
  effectiveTaxRateOnGross: number;
  prorationFactor: number;
  /** Linear estimate of take-home received in the calendar year when employment spans fewer than 12 months. */
  estimatedNetReceivedInYear: number;
  bandSlices: TaxBandSlice[];
  /** Same gross package modelled with no 30% ruling on taxable wages — full deduction stack for comparison. */
  withoutRuling: {
    taxableIncomeAnnual: number;
    incomeTaxAnnual: number;
    netAnnual: number;
    netMonthly: number;
    pensionEmployeeAnnual: number;
    socialEmployeeAnnual: number;
    rawIncomeTaxAnnual: number;
    generalTaxCreditApplied: number;
    labourTaxCreditApplied: number;
    totalEmployeeDeductionsAnnual: number;
    rulingUntaxedAnnual: number;
  };
  /** Positive when the facility lowers taxable wages vs same gross without it. */
  taxableIncomeReductionFromFacilityAnnual: number;
  /** Indicative income tax saved vs same gross with no facility (planning). */
  annualIncomeTaxSavedVsWithoutFacility: number;
  monthlyNetDeltaWithVsWithoutRuling: number;
};

export type SalaryScenario = {
  id: string;
  label: string;
  inputs: SalaryNetCalculatorInputs;
};

export type SalaryExportPayload = {
  siteName: string;
  generatedAtIso: string;
  disclaimer: string;
  primaryLabel: string;
  primary: SalaryNetComputation | null;
  compareRows: Array<{ label: string; row: SalaryNetComputation | null }>;
  /** Optional user notes for print/PDF */
  planningNotes?: string;
  /** Canonical URL back to the live calculator */
  calculatorCanonicalUrl?: string;
};
