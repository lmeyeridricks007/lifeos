"use client";

import { BankScenarioCards, type BankScenarioCardVm } from "@/components/banking/BankScenarioCards";
import type { BankingTransferScenario } from "@/src/data/banking/bankingTransferScenarios";
import { cn } from "@/lib/cn";

function transferScenarioToVm(s: BankingTransferScenario): BankScenarioCardVm {
  return {
    title: s.title,
    recommendation: s.recommendation,
    why: s.why,
    watchOuts: s.watchOuts,
    relatedLinks: [...s.relatedLinks],
  };
}

export type TransferScenarioCardsProps = {
  /** Shared {@link bankingTransferScenarios} rows or pre-built {@link BankScenarioCardVm} cards. */
  scenarios: readonly BankingTransferScenario[] | readonly BankScenarioCardVm[];
  className?: string;
  layout?: "grid" | "accordion";
  recommendationEmphasis?: boolean;
};

/**
 * Transfer use-case cards — {@link BankScenarioCards} with grid-first defaults for banking guides.
 */
export function TransferScenarioCards({
  scenarios,
  className,
  layout = "grid",
  recommendationEmphasis = true,
}: TransferScenarioCardsProps) {
  const cards: BankScenarioCardVm[] = scenarios.map((s) =>
    "id" in s ? transferScenarioToVm(s as BankingTransferScenario) : (s as BankScenarioCardVm)
  );

  return (
    <BankScenarioCards
      cards={cards}
      layout={layout}
      recommendationEmphasis={recommendationEmphasis}
      className={cn("min-w-0 max-w-full", className)}
    />
  );
}
