/** Planning constants — aligned with other NL tools; not payroll truth. */

export const CONTRACTOR_NET_PLANNING_FACTOR = 0.9;
export const FOREIGN_REMOTE_NET_PLANNING_FACTOR = 0.88;
export const DISCRETIONARY_BONUS_PLANNING_FRACTION = 0.45;
export const BEST_EFFORTS_RULING_CUSTOM_PERCENT = 14;

/** Rough monthly commute cost anchors (EUR), planning only. */
export const COMMUTE_MODE_MONTHLY_ANCHOR = {
  public_transport: 180,
  bike: 35,
  car: 320,
  mixed: 200,
} as const;

export const BASE_UTILITIES_MONTHLY = 155;
export const BASE_GROCERIES_SINGLE_MONTHLY = 280;
