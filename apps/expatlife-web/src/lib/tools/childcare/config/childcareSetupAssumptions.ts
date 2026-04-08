/**
 * First-month / setup planning constants (not provider-specific).
 */
export const childcareSetupAssumptions = {
  /** When “first invoice timing risk” is enabled — fraction of a month billed oddly */
  firstInvoiceRiskFraction: 0.35,
  /** Deposit placeholder (months of gross provider bill) */
  advanceDepositMonths: 1,
  /** Global holiday reserve when toggle on (€) */
  schoolHolidayReserveEur: 180,
  emergencyBackupReserveEur: 120,
  pickupTransportReserveEur: 75,
} as const;
