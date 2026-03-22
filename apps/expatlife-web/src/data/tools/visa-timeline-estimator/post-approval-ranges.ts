/**
 * Post-approval and arrival timing assumptions (in days).
 * Used for "post-decision / travel prep" and "first-week / first-month" estimates.
 */

export interface PostApprovalRange {
  lowDays: number;
  highDays: number;
  label: string;
}

/** Time from approval to planned arrival (travel booking, housing, move). */
export const POST_APPROVAL_TO_ARRIVAL_DAYS: PostApprovalRange = {
  lowDays: 14,
  highDays: 60,
  label: "2–8 weeks",
};

/** First week / first 30 days admin (registration, bank, insurance) — shown as context, not added to total. */
export const FIRST_WEEK_DAYS = 7;
export const FIRST_30_DAYS = 30;
