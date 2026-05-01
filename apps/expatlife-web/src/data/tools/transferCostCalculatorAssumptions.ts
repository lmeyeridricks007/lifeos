/**
 * Editorial planning bands for the International Transfer Cost Calculator.
 * Not live provider pricing — adjust here when methodology changes.
 */

export type TransferCostChannelKey = "traditional_bank" | "digital_bank" | "transfer_provider";

export type TransferCostAssumptionsDocumented = {
  lastChecked: string;
  sourceKey: string;
};

export type TransferCostFeeFxBand = {
  feeEurLow: number;
  feeEurHigh: number;
  /** FX markup as decimal of send amount, e.g. 0.015 = 1.5% */
  fxMarkupLow: number;
  fxMarkupHigh: number;
};

export type TransferCostCalculatorAssumptions = {
  documented: TransferCostAssumptionsDocumented;
  channels: Record<TransferCostChannelKey, TransferCostFeeFxBand>;
  /** When recipient currency is not in the “major” list, widen FX bounds by this many percentage points (each bound). */
  exoticCurrencyFxMarkupPadEachBound: number;
  /** Extra send-fee stress (EUR) when user wants same-day / instant — applied to fee high (and mid for display). */
  speedFeeUpliftEur: {
    traditional_bank: { low: number; high: number };
    digital_bank: { low: number; high: number };
    transfer_provider: { low: number; high: number };
  };
};

export const TRANSFER_COST_CALCULATOR_ASSUMPTIONS: TransferCostCalculatorAssumptions = {
  documented: {
    lastChecked: "2026-05-01",
    sourceKey: "editorial_transfer_cost_bands_v1",
  },
  channels: {
    traditional_bank: { feeEurLow: 5, feeEurHigh: 25, fxMarkupLow: 0.015, fxMarkupHigh: 0.035 },
    digital_bank: { feeEurLow: 0, feeEurHigh: 10, fxMarkupLow: 0.005, fxMarkupHigh: 0.02 },
    transfer_provider: { feeEurLow: 0, feeEurHigh: 8, fxMarkupLow: 0.002, fxMarkupHigh: 0.01 },
  },
  exoticCurrencyFxMarkupPadEachBound: 0.003,
  speedFeeUpliftEur: {
    traditional_bank: { low: 0, high: 12 },
    digital_bank: { low: 0, high: 6 },
    transfer_provider: { low: 0, high: 4 },
  },
} as const;

export const TRANSFER_COST_MAJOR_TO_CURRENCIES = ["USD", "GBP", "ZAR", "INR", "AUD", "CAD"] as const;

/** “Other” corridor — wider FX pad already applied via exotic pad when not major. */
export const TRANSFER_COST_OTHER_TO_CURRENCIES = [
  "CHF",
  "SEK",
  "NOK",
  "DKK",
  "PLN",
  "TRY",
  "JPY",
  "CNY",
  "SGD",
  "NZD",
  "MXN",
  "BRL",
  "AED",
  "Other / not listed",
] as const;
