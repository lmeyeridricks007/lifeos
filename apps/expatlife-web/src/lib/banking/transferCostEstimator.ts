/**
 * International transfer cost — editorial planning maths only.
 *
 * ## Model (high level)
 * - **FX cost** = send amount × FX markup band (decimals, e.g. 0.02 = 2%). Corridor pads widen that band for non-major currencies.
 * - **Total cost** = transfer fee band (EUR, after optional speed uplift) + FX cost.
 * - **Received (euro-equivalent)** = amount sent − total cost (worst total → lowest received).
 *
 * Numbers come from `TRANSFER_COST_CALCULATOR_ASSUMPTIONS` — not live bank or FX feeds.
 */

import {
  TRANSFER_COST_CALCULATOR_ASSUMPTIONS,
  TRANSFER_COST_MAJOR_TO_CURRENCIES,
  type TransferCostChannelKey,
} from "@/src/data/tools/transferCostCalculatorAssumptions";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** EUR low–high inclusive planning band. */
export type EurRange = { low: number; high: number };

/**
 * FX markup band as **decimal multipliers** of the send amount (e.g. low: 0.005 = 0.5%).
 * Pass the resolved corridor band from assumptions + currency adjustments.
 */
export type FxMarkupRange = { low: number; high: number };

export type TransferCostFrequency = "one_time" | "occasional" | "monthly" | "frequent";

export type TransferCostMethod = "traditional_bank" | "digital_bank" | "transfer_provider" | "not_sure";

export type TransferCostPriority = "cheapest" | "fastest" | "most_convenient" | "balanced";

export type TransferCostSpeedPreference = "not_important" | "same_day" | "instant_if_possible";

export type TransferCostInputs = {
  /** Send amount in EUR (must be > 0 for a meaningful estimate). */
  amount: number;
  toCurrency: string;
  frequency: TransferCostFrequency;
  method: TransferCostMethod;
  priority: TransferCostPriority;
  speedPreference: TransferCostSpeedPreference;
};

export type TransferCostBreakdown = {
  /** Flat-style send fee band after speed uplift (EUR). */
  transferFee: EurRange;
  /** FX markup cost band = amount × resolved markup decimals (EUR). */
  fxCost: EurRange;
};

export type ProviderTransferComparison = {
  /** Which path this row describes. */
  channel: TransferCostChannelKey;
  label: string;
  costRange: EurRange;
  receivedRange: EurRange;
  speedEstimate: string;
  bestFor: string;
  watchOuts: readonly string[];
};

export type TransferCostResult = {
  amountSent: number;
  amountReceivedLow: number;
  amountReceivedHigh: number;
  totalCostLow: number;
  totalCostHigh: number;
  breakdown: TransferCostBreakdown;
  providerComparisons: ProviderTransferComparison[];
  recommendedOption: { label: string; channel: TransferCostChannelKey; rationale: string };
  warnings: readonly string[];
};

/** Per-path numbers for tools — mirrors `TransferCostChannelEstimate` in the transfer-cost-calculator package. */
export type TransferCostChannelDetail = {
  channel: TransferCostChannelKey;
  label: string;
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

// ---------------------------------------------------------------------------
// Pure helpers (exported for tests and reuse)
// ---------------------------------------------------------------------------

/**
 * FX cost band in EUR: `amount × fxMarkupRange` per bound.
 * `fxMarkupRange` values are **decimals** of the send amount (not percent points).
 */
export function calculateFXImpact(amount: number, fxRange: FxMarkupRange): EurRange {
  const a = Math.max(0, amount);
  return { low: a * fxRange.low, high: a * fxRange.high };
}

/**
 * Euro-equivalent received after modelled **send-side** total cost.
 * Lower received pairs with higher total cost.
 */
export function calculateReceivedAmount(amount: number, totalCost: EurRange): EurRange {
  return { low: amount - totalCost.high, high: amount - totalCost.low };
}

// ---------------------------------------------------------------------------
// Internal — corridor + channel rows
// ---------------------------------------------------------------------------

const CHANNEL_LABELS: Record<TransferCostChannelKey, string> = {
  traditional_bank: "Traditional bank",
  digital_bank: "Digital bank",
  transfer_provider: "Transfer provider",
};

function isMajorToCurrency(code: string): boolean {
  const c = code.trim().toUpperCase();
  return (TRANSFER_COST_MAJOR_TO_CURRENCIES as readonly string[]).includes(c);
}

/** Resolved FX markup decimals for this corridor (before amount multiplication). */
function resolveFxMarkupRangeForCurrency(
  baseLow: number,
  baseHigh: number,
  toCurrency: string
): FxMarkupRange {
  const c = toCurrency.trim().toUpperCase();
  if (c === "EUR") {
    return { low: 0, high: 0.002 };
  }
  const padEach = TRANSFER_COST_CALCULATOR_ASSUMPTIONS.exoticCurrencyFxMarkupPadEachBound;
  if (c === "OTHER") {
    return { low: baseLow + padEach * 2, high: baseHigh + padEach * 2 };
  }
  if (!isMajorToCurrency(c)) {
    return { low: baseLow + padEach, high: baseHigh + padEach };
  }
  return { low: baseLow, high: baseHigh };
}

function speedFeeAdd(channel: TransferCostChannelKey, speedPreference: TransferCostSpeedPreference): EurRange {
  if (speedPreference === "not_important") return { low: 0, high: 0 };
  return TRANSFER_COST_CALCULATOR_ASSUMPTIONS.speedFeeUpliftEur[channel];
}

type ChannelCostMetrics = {
  channel: TransferCostChannelKey;
  label: string;
  transferFee: EurRange;
  fxMarkup: FxMarkupRange;
  fxCost: EurRange;
  totalCost: EurRange;
  received: EurRange;
  speedSummary: string;
  bestUseCase: string;
  watchOuts: readonly string[];
};

function buildChannelMetrics(
  channel: TransferCostChannelKey,
  amount: number,
  inputs: TransferCostInputs
): ChannelCostMetrics {
  const band = TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels[channel];
  const fxMarkup = resolveFxMarkupRangeForCurrency(band.fxMarkupLow, band.fxMarkupHigh, inputs.toCurrency);
  const speed = speedFeeAdd(channel, inputs.speedPreference);
  const transferFee: EurRange = {
    low: band.feeEurLow + speed.low,
    high: band.feeEurHigh + speed.high,
  };
  const fxCost = calculateFXImpact(amount, fxMarkup);
  const totalCost: EurRange = {
    low: transferFee.low + fxCost.low,
    high: transferFee.high + fxCost.high,
  };
  const received = calculateReceivedAmount(amount, totalCost);

  const speedSummary =
    channel === "transfer_provider"
      ? "Often fast on many routes — still read the arrival time on the price screen."
      : channel === "digital_bank"
        ? "Same day happens in some apps for some routes — not for every bank abroad."
        : "International bank wires can take a few work days, depending on the route.";

  const bestUseCase =
    channel === "traditional_bank"
      ? "Works well if you already use that bank and only send abroad now and then."
      : channel === "digital_bank"
        ? "Works well if you already use an app bank for daily euros and sometimes send abroad."
        : "Worth a look if you often send non-euro and care most about what arrives.";

  const watchOuts: string[] = [];
  if (channel === "traditional_bank") {
    watchOuts.push("The exchange rate on the send screen is easy to miss next to a small wire fee.");
  }
  if (channel === "digital_bank") {
    watchOuts.push("Your plan and limits can change the price of international sends.");
  }
  if (channel === "transfer_provider") {
    watchOuts.push("You still need euros from the Netherlands (bank or card) — check any extra fee for how you pay in.");
  }
  if (inputs.speedPreference !== "not_important") {
    watchOuts.push("Faster options in the model may mean higher fees or a weaker exchange rate.");
  }

  return {
    channel,
    label: CHANNEL_LABELS[channel],
    transferFee,
    fxMarkup,
    fxCost,
    totalCost,
    received,
    speedSummary,
    bestUseCase,
    watchOuts,
  };
}

function allChannelMetrics(amount: number, inputs: TransferCostInputs): ChannelCostMetrics[] {
  return [
    buildChannelMetrics("traditional_bank", amount, inputs),
    buildChannelMetrics("digital_bank", amount, inputs),
    buildChannelMetrics("transfer_provider", amount, inputs),
  ];
}

function headlineFromMetrics(
  rows: readonly ChannelCostMetrics[],
  method: TransferCostMethod
): { totalCost: EurRange; received: EurRange } {
  const pick = method === "not_sure" ? rows : rows.filter((r) => r.channel === method);
  const use = pick.length ? pick : rows;
  return {
    totalCost: {
      low: Math.min(...use.map((r) => r.totalCost.low)),
      high: Math.max(...use.map((r) => r.totalCost.high)),
    },
    received: {
      low: Math.min(...use.map((r) => r.received.low)),
      high: Math.max(...use.map((r) => r.received.high)),
    },
  };
}

/** Focal path for headline breakdown in UI when method is “not sure” (mid archetype). */
function focalChannel(method: TransferCostMethod): TransferCostChannelKey {
  if (method === "not_sure") return "digital_bank";
  if (method === "traditional_bank" || method === "digital_bank" || method === "transfer_provider") return method;
  return "digital_bank";
}

function toProviderComparison(m: ChannelCostMetrics): ProviderTransferComparison {
  return {
    channel: m.channel,
    label: m.label,
    costRange: { ...m.totalCost },
    receivedRange: { ...m.received },
    speedEstimate: m.speedSummary,
    bestFor: m.bestUseCase,
    watchOuts: m.watchOuts,
  };
}

function metricsToChannelDetail(m: ChannelCostMetrics): TransferCostChannelDetail {
  return {
    channel: m.channel,
    label: m.label,
    totalCostEurLow: m.totalCost.low,
    totalCostEurHigh: m.totalCost.high,
    feeEurLow: m.transferFee.low,
    feeEurHigh: m.transferFee.high,
    fxCostEurLow: m.fxCost.low,
    fxCostEurHigh: m.fxCost.high,
    fxMarkupPctLow: m.fxMarkup.low * 100,
    fxMarkupPctHigh: m.fxMarkup.high * 100,
    receivedValueEurLow: m.received.low,
    receivedValueEurHigh: m.received.high,
    speedSummary: m.speedSummary,
    bestUseCase: m.bestUseCase,
    watchOuts: m.watchOuts,
  };
}

/** All three provider-path rows (traditional, digital, transfer specialist). */
export function listTransferCostChannels(inputs: TransferCostInputs): TransferCostChannelDetail[] {
  const amountSent = Math.min(Math.max(0, Math.round(inputs.amount)), 500_000);
  return allChannelMetrics(amountSent, inputs).map(metricsToChannelDetail);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Editorial warnings from usage pattern — same themes as the transfer calculator UI.
 */
export function getTransferWarnings(inputs: TransferCostInputs): string[] {
  const warnings: string[] = [];
  const amt = Math.max(0, inputs.amount);
  if (inputs.frequency === "monthly" || inputs.frequency === "frequent") {
    warnings.push("If you send often, a small exchange-rate gap each time adds up — look at the year, not one payment.");
  }
  if (amt >= 2500) {
    warnings.push("Large sends: even a 1% exchange gap is many euros — read the rate line as carefully as the fee.");
  }
  if (inputs.method === "traditional_bank" || inputs.method === "not_sure") {
    warnings.push("Banks often show a small wire fee while the exchange rate does more of the work — check how much arrives.");
  }
  if (inputs.priority === "fastest" || inputs.speedPreference !== "not_important") {
    warnings.push("Paying for speed can mean higher fees or a weaker rate on some routes — compare two quotes on the same day.");
  }
  warnings.push("Weekends and public holidays: some paths use worse rates or slower delivery — check the time shown on the quote.");
  return warnings;
}

/**
 * Picks a single path label for “best next step” hints — uses midpoint total cost unless priority is “fastest”.
 */
export function getBestTransferOption(inputs: TransferCostInputs): TransferCostResult["recommendedOption"] {
  const amount = Math.max(0, inputs.amount);
  const rows = allChannelMetrics(amount, inputs);
  const byTotalMid = [...rows].sort((a, b) => {
    const ma = (a.totalCost.low + a.totalCost.high) / 2;
    const mb = (b.totalCost.low + b.totalCost.high) / 2;
    return ma - mb;
  });
  const primary =
    inputs.priority === "fastest"
      ? rows.find((r) => r.channel === "transfer_provider") ?? byTotalMid[0]!
      : byTotalMid[0]!;
  return {
    label: primary.label,
    channel: primary.channel,
    rationale:
      inputs.priority === "fastest"
        ? "In this simple model, transfer companies often match “fast first” answers — still check timing on each site."
        : "In this simple model, this path has the lowest typical all-in cost range for your amount and currency — still confirm on each provider’s screen.",
  };
}

/**
 * Full estimate: headline bands across selected path(s), per-provider comparison rows, focal breakdown, warnings, recommendation.
 */
export function estimateTransferCost(inputs: TransferCostInputs): TransferCostResult {
  const amountSent = Math.min(Math.max(0, Math.round(inputs.amount)), 500_000);
  const rows = allChannelMetrics(amountSent, inputs);
  const headline = headlineFromMetrics(rows, inputs.method);
  const focal = rows.find((r) => r.channel === focalChannel(inputs.method)) ?? rows[1]!;
  const recommendedOption = getBestTransferOption({ ...inputs, amount: amountSent });

  return {
    amountSent,
    amountReceivedLow: headline.received.low,
    amountReceivedHigh: headline.received.high,
    totalCostLow: headline.totalCost.low,
    totalCostHigh: headline.totalCost.high,
    breakdown: {
      transferFee: { ...focal.transferFee },
      fxCost: { ...focal.fxCost },
    },
    providerComparisons: rows.map(toProviderComparison),
    recommendedOption,
    warnings: getTransferWarnings({ ...inputs, amount: amountSent }),
  };
}
