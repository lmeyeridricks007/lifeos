/**
 * Line tokenization: money + percentage tokens in source order (deterministic).
 */
import type { MoneyToken, PercentageToken } from "@/src/lib/tools/payslip/parse/amounts";
import { findMoneyTokensInLine, findPercentageTokensInLine } from "@/src/lib/tools/payslip/parse/amounts";

export type PayslipLineTokens = {
  moneyTokens: MoneyToken[];
  percentageTokens: PercentageToken[];
};

export function tokenizePayslipLine(line: string): PayslipLineTokens {
  return {
    moneyTokens: findMoneyTokensInLine(line),
    percentageTokens: findPercentageTokensInLine(line),
  };
}
