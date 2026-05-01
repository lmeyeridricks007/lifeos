/**
 * Planning-only cost bands for the banking cost estimator — not live provider tariffs.
 * Each `[low, high]` is EUR/month unless noted. Update bands here; the engine reads this file only.
 */

/** Closed EUR/month interval [low, high] — inclusive planning bounds. */
export type BankingCostEuroBand = readonly [number, number];

export type BankingCostAssumptions = {
  documented: {
    lastChecked: string;
    sourceKey: "editorial-banking-cost-estimator-bands";
    description: string;
  };
  /** Preset monthly account fee bands before account-count / hybrid adjustments. */
  monthlyAccountFeeBands: Record<"free_or_unknown" | "low" | "medium" | "high", BankingCostEuroBand>;
  /** Multiplier on the account-fee band by how many everyday IBANs stay active. */
  accountCountMultiplier: Record<"one" | "two" | "three_or_more", number>;
  /** Hybrid + single account: implicit second product (Dutch + app/specialist) nudges base fee band. */
  hybridImplicitAccountFeeFactor: number;
  /** Hybrid + active international sends: assume some flow via specialist, slightly lower bank transfer-risk band. */
  hybridTransferRiskReductionFactor: number;
  extraCards: Record<"none" | "one" | "two_or_more", BankingCostEuroBand>;
  creditCard: { off: BankingCostEuroBand; on: BankingCostEuroBand };
  premiumPlan: Record<"none" | "basic" | "premium" | "unknown", BankingCostEuroBand>;
  atmUsage: Record<"none" | "one_to_two" | "three_to_five" | "frequent", BankingCostEuroBand>;
  foreignCardUplift: Record<"never" | "occasional" | "monthly" | "frequent", BankingCostEuroBand>;
  travelUplift: BankingCostEuroBand;
  internationalTransfers: Record<"never" | "occasionally" | "monthly" | "frequently", BankingCostEuroBand>;
  transferSizeMultiplier: Record<"under_250" | "250_to_1000" | "1000_to_5000" | "over_5000" | "custom_amount", number>;
  fxRisk: Record<"EUR_only" | "EUR_plus_home_currency" | "multiple_currencies", BankingCostEuroBand>;
  /** Extra FX risk when typical send size is large (applied on top of base fxRisk). */
  fxHighAmountUplift: BankingCostEuroBand;
  receivesInternationalInUplift: BankingCostEuroBand;
  businessAccount: Record<"off" | "on_low" | "on_medium" | "on_high", BankingCostEuroBand>;
  invoicingUplift: BankingCostEuroBand;
  jointFamilyExtras: Record<"not_applicable" | "low" | "medium" | "high", BankingCostEuroBand>;
  jointAccountBaseUplift: BankingCostEuroBand;
  convenienceUplift: BankingCostEuroBand;
  wantsLowestCostTightenFactor: number;
};

export const bankingCostAssumptions: BankingCostAssumptions = {
  documented: {
    lastChecked: "2026-05-01",
    sourceKey: "editorial-banking-cost-estimator-bands",
    description:
      "These euro ranges are rough planning guides for common expat situations in the Netherlands. They are not live bank prices. Big international transfers or unusual currencies can cost much more or less than the band shown here.",
  },
  monthlyAccountFeeBands: {
    free_or_unknown: [0, 5],
    low: [2, 5],
    medium: [5, 12],
    high: [12, 30],
  },
  accountCountMultiplier: {
    one: 1,
    two: 1.28,
    three_or_more: 1.65,
  },
  hybridImplicitAccountFeeFactor: 1.12,
  hybridTransferRiskReductionFactor: 0.88,
  extraCards: {
    none: [0, 1],
    one: [1, 7],
    two_or_more: [4, 14],
  },
  creditCard: {
    off: [0, 0],
    on: [0, 14],
  },
  premiumPlan: {
    none: [0, 0],
    basic: [2, 9],
    premium: [10, 28],
    unknown: [0, 12],
  },
  atmUsage: {
    none: [0, 1],
    one_to_two: [0, 5],
    three_to_five: [2, 9],
    frequent: [6, 22],
  },
  foreignCardUplift: {
    never: [0, 0],
    occasional: [0, 4],
    monthly: [2, 10],
    frequent: [6, 20],
  },
  travelUplift: [0, 8],
  internationalTransfers: {
    never: [0, 1],
    occasionally: [1, 10],
    monthly: [6, 28],
    frequently: [18, 65],
  },
  transferSizeMultiplier: {
    under_250: 0.75,
    "250_to_1000": 1,
    "1000_to_5000": 1.25,
    over_5000: 1.45,
    custom_amount: 1.1,
  },
  fxRisk: {
    EUR_only: [0, 3],
    EUR_plus_home_currency: [2, 14],
    multiple_currencies: [5, 28],
  },
  fxHighAmountUplift: [1, 10],
  receivesInternationalInUplift: [0, 8],
  businessAccount: {
    off: [0, 0],
    on_low: [5, 18],
    on_medium: [12, 35],
    on_high: [22, 55],
  },
  invoicingUplift: [0, 18],
  jointFamilyExtras: {
    not_applicable: [0, 0],
    low: [0, 5],
    medium: [3, 12],
    high: [8, 22],
  },
  jointAccountBaseUplift: [2, 10],
  convenienceUplift: [0, 10],
  wantsLowestCostTightenFactor: 0.92,
};
