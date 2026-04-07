/**
 * Global recurring lines that are not city-indexed in `cityCostSeed.ts`.
 *
 * These are planning shortcuts — not quotes from providers. Energy and telecom markets move;
 * revisit these figures periodically (e.g. annually) against typical expat forum ranges and CBS-style
 * cost-of-living discussions, without claiming official statistics.
 */

/** Mobile + home internet bundle (€/month, planning). Second adult often adds a second SIM or plan uplift. */
export const MONTHLY_COMMS_SEED = {
  /** One adult: one phone plan + modest home broadband assumption. */
  singleAdultBaseEur: 62,
  /** Additional €/month when a second adult is in the household (rounded in calculator). */
  secondAdultIncrementEur: 24,
} as const;

/**
 * Subscriptions & small miscellaneous (streaming, apps, minor household items).
 * Rolled into one line in the calculator to avoid false precision.
 */
export const MONTHLY_MISC_SUBSCRIPTIONS_SEED = {
  perAdultEur: 48,
  perChildEur: 22,
  /** Fixed household slice (cleaning supplies, odds and ends). */
  householdBaseEur: 28,
} as const;
