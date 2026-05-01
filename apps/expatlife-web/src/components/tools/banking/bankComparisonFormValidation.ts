import type { BankComparisonInput } from "@/src/lib/tools/bank-comparison/types";

/** Reasons the form cannot produce results — keep messages user-facing. */
export function getBankComparisonFormBlockers(input: BankComparisonInput): string[] {
  const blockers: string[] = [];
  if (!input.includeTraditionalBanks && !input.includeDigitalBanks && !input.includeTransferProviders) {
    blockers.push("Tick at least one option: classic Dutch banks, digital banks, or transfer services — otherwise there is nothing to compare.");
  }
  return blockers;
}

export function bankComparisonFormIsValid(input: BankComparisonInput): boolean {
  return getBankComparisonFormBlockers(input).length === 0;
}
