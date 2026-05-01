import type { TransferCostChannelKey } from "@/src/data/tools/transferCostCalculatorAssumptions";

export type TransferAmountBand = "100" | "250" | "500" | "1000" | "2500" | "5000" | "custom";

export type TransferFrequency = "one_time" | "occasional" | "monthly" | "frequent";

export type TransferMethodPreference = "traditional_bank" | "digital_bank" | "transfer_provider" | "not_sure";

export type TransferPriority = "cheapest" | "fastest" | "most_convenient" | "balanced";

export type TransferSpeedPreference = "not_important" | "same_day" | "instant_if_possible";

export type TransferCostCalculatorInput = {
  amountBand: TransferAmountBand;
  customAmountEur?: number;
  fromCurrency: "EUR";
  toCurrency: string;
  frequency: TransferFrequency;
  method: TransferMethodPreference;
  priority: TransferPriority;
  speedPreference: TransferSpeedPreference;
};

export type TransferCostChannelEstimate = {
  channel: TransferCostChannelKey;
  label: string;
  /** Total planning cost in EUR (fee + FX cost on send amount). */
  totalCostEurLow: number;
  totalCostEurHigh: number;
  feeEurLow: number;
  feeEurHigh: number;
  fxCostEurLow: number;
  fxCostEurHigh: number;
  fxMarkupPctLow: number;
  fxMarkupPctHigh: number;
  receivedValueEurLow: number;
  receivedValueEurHigh: number;
  speedSummary: string;
  bestUseCase: string;
  watchOuts: readonly string[];
};

export type TransferCostCalculatorResult = {
  sendAmountEur: number;
  /** Headline band across relevant paths. */
  headlineTotalCostEurLow: number;
  headlineTotalCostEurHigh: number;
  headlineReceivedEurLow: number;
  headlineReceivedEurHigh: number;
  headlineNarrative: string;
  channels: readonly TransferCostChannelEstimate[];
  methodologyLines: readonly string[];
  recommendedSetup: { title: string; body: string };
  alternativeSetup: { title: string; body: string };
};
