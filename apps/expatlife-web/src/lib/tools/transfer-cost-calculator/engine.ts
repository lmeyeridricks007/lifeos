import type { TransferCostCalculatorInput, TransferCostCalculatorResult, TransferCostChannelEstimate } from "./types";
import {
  getTransferWarnings,
  listTransferCostChannels,
  type TransferCostInputs,
} from "@/src/lib/banking/transferCostEstimator";
import { TRANSFER_COST_CALCULATOR_ASSUMPTIONS } from "@/src/data/tools/transferCostCalculatorAssumptions";

function toLibInputs(input: TransferCostCalculatorInput): TransferCostInputs {
  return {
    amount: getEffectiveSendAmountEur(input),
    toCurrency: input.toCurrency,
    frequency: input.frequency,
    method: input.method,
    priority: input.priority,
    speedPreference: input.speedPreference,
  };
}

export function getEffectiveSendAmountEur(input: TransferCostCalculatorInput): number {
  if (input.amountBand === "custom") {
    const n = Number(input.customAmountEur);
    if (!Number.isFinite(n) || n <= 0) return 0;
    return Math.min(Math.round(n), 500_000);
  }
  return Number(input.amountBand);
}

export function getTransferCostCalculatorBlockers(input: TransferCostCalculatorInput): string[] {
  const amt = getEffectiveSendAmountEur(input);
  if (amt <= 0) return ["Enter an amount above zero — pick a band or type your own amount in euros."];
  if (!input.toCurrency?.trim()) return ["Choose the currency of the recipient’s account."];
  return [];
}

function headlineFromChannels(
  rows: readonly TransferCostChannelEstimate[],
  method: TransferCostCalculatorInput["method"]
): Pick<
  TransferCostCalculatorResult,
  "headlineTotalCostEurLow" | "headlineTotalCostEurHigh" | "headlineReceivedEurLow" | "headlineReceivedEurHigh" | "headlineNarrative"
> {
  const pick = method === "not_sure" ? rows : rows.filter((r) => r.channel === method);
  const use = pick.length ? pick : rows;
  const totalLow = Math.min(...use.map((r) => r.totalCostEurLow));
  const totalHigh = Math.max(...use.map((r) => r.totalCostEurHigh));
  const recvLow = Math.min(...use.map((r) => r.receivedValueEurLow));
  const recvHigh = Math.max(...use.map((r) => r.receivedValueEurHigh));
  const narrative =
    method === "not_sure"
      ? "The ranges below mix a typical bank, app bank, and transfer company — your real quote after login can still be outside these bands."
      : "The range below follows the path you picked — still compare at least one other provider on the same day for the same amount.";
  return {
    headlineTotalCostEurLow: totalLow,
    headlineTotalCostEurHigh: totalHigh,
    headlineReceivedEurLow: recvLow,
    headlineReceivedEurHigh: recvHigh,
    headlineNarrative: narrative,
  };
}

function recommendedFromInput(
  input: TransferCostCalculatorInput,
  rows: readonly TransferCostChannelEstimate[]
): { primary: TransferCostChannelEstimate; alternative: TransferCostChannelEstimate } {
  const byTotalMid = [...rows].sort((a, b) => {
    const ma = (a.totalCostEurLow + a.totalCostEurHigh) / 2;
    const mb = (b.totalCostEurLow + b.totalCostEurHigh) / 2;
    return ma - mb;
  });
  const primary =
    input.priority === "fastest"
      ? rows.find((r) => r.channel === "transfer_provider") ?? byTotalMid[0]!
      : byTotalMid[0]!;
  const alternative =
    primary.channel === "transfer_provider"
      ? rows.find((r) => r.channel === "digital_bank") ?? rows.find((r) => r.channel === "traditional_bank")!
      : primary.channel === "digital_bank"
        ? rows.find((r) => r.channel === "transfer_provider")!
        : rows.find((r) => r.channel === "digital_bank")!;
  return { primary, alternative };
}

export function computeTransferCostEstimate(input: TransferCostCalculatorInput): TransferCostCalculatorResult {
  const libIn = toLibInputs(input);
  const channels = listTransferCostChannels(libIn) as unknown as TransferCostChannelEstimate[];
  const headline = headlineFromChannels(channels, input.method);
  const { primary, alternative } = recommendedFromInput(input, channels);

  const primaryTitle =
    primary.channel === "transfer_provider"
      ? "In our simple model: a transfer company often has the lowest all-in cost"
      : primary.channel === "digital_bank"
        ? "In our simple model: an app bank often balances cost and ease"
        : "In our simple model: a traditional bank fits when one familiar login matters most";

  const primaryBody = `For this send size, the lowest typical total in our ranges is the ${primary.label.toLowerCase()} path — often because the exchange-rate cost in the model is smaller than at many branch banks. This is not a live quote; check how much arrives on each site.`;

  const altTitle =
    alternative.channel === "transfer_provider"
      ? "Other idea: keep a transfer app for the send"
      : alternative.channel === "digital_bank"
        ? "Other idea: use an app bank if you want one place for euros and small sends abroad"
        : "Other idea: use a traditional bank if work or your landlord prefers a well-known name";

  const altBody = `${alternative.label} may cost a bit more in the model in return for a familiar brand, branch help in English, or fewer logins — still worth a quick quote comparison if ease matters this week.`;

  const methodologyLines = [
    `Send amount: €${Math.round(getEffectiveSendAmountEur(input))} (from you). We do not load live exchange rates — we only use a percent range on the send amount plus a flat fee range.`,
    `Traditional bank: send fee about €${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.traditional_bank.feeEurLow}–€${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.traditional_bank.feeEurHigh}, plus exchange-rate cost about ${(TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.traditional_bank.fxMarkupLow * 100).toFixed(1)}–${(TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.traditional_bank.fxMarkupHigh * 100).toFixed(1)}% of the amount (before we widen the range for some currencies).`,
    `Digital bank: send fee about €${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.digital_bank.feeEurLow}–€${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.digital_bank.feeEurHigh}, plus exchange-rate cost about ${(TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.digital_bank.fxMarkupLow * 100).toFixed(1)}–${(TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.digital_bank.fxMarkupHigh * 100).toFixed(1)}%.`,
    `Transfer company: send fee about €${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.transfer_provider.feeEurLow}–€${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.transfer_provider.feeEurHigh}, plus exchange-rate cost about ${(TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.transfer_provider.fxMarkupLow * 100).toFixed(1)}–${(TRANSFER_COST_CALCULATOR_ASSUMPTIONS.channels.transfer_provider.fxMarkupHigh * 100).toFixed(1)}%.`,
    "“Value for the recipient” is shown as rough euros after costs on your side only — it is not a promise of the exact foreign amount that lands.",
    `Last review of our planning notes: ${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.documented.lastChecked} (${TRANSFER_COST_CALCULATOR_ASSUMPTIONS.documented.sourceKey}).`,
  ] as const;

  return {
    sendAmountEur: getEffectiveSendAmountEur(input),
    ...headline,
    channels,
    methodologyLines: [...methodologyLines],
    recommendedSetup: { title: primaryTitle, body: primaryBody },
    alternativeSetup: { title: altTitle, body: altBody },
  };
}

export function defaultTransferCostCalculatorInput(): TransferCostCalculatorInput {
  return {
    amountBand: "1000",
    customAmountEur: undefined,
    fromCurrency: "EUR",
    toCurrency: "USD",
    frequency: "occasional",
    method: "not_sure",
    priority: "balanced",
    speedPreference: "not_important",
  };
}

export function buildTransferCostHiddenWarnings(input: TransferCostCalculatorInput): string[] {
  return getTransferWarnings(toLibInputs(input));
}
