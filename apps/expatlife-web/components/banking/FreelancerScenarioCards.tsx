"use client";

import { BankScenarioCards, type BankScenarioCardVm } from "@/components/banking/BankScenarioCards";
import type { BankingFreelancerScenario } from "@/src/data/banking/bankingFreelancerScenarios";
import { cn } from "@/lib/cn";

function freelancerScenarioToCardVm(s: BankingFreelancerScenario): BankScenarioCardVm {
  return {
    title: s.title,
    recommendation: s.recommendedSetup,
    why: s.why,
    watchOuts: s.watchOuts,
    relatedLinks: [...s.relatedLinks],
  };
}

export type FreelancerScenarioCardsProps = {
  scenarios: readonly BankingFreelancerScenario[];
  className?: string;
  /** `grid` surfaces every scenario title at once (best for scanning). `accordion` stacks FAQ-style. */
  layout?: "grid" | "accordion";
};

/**
 * Freelancer / ZZP scenarios — {@link BankScenarioCards} with optional grid (scannable) or accordion layout.
 */
export function FreelancerScenarioCards({ scenarios, className, layout = "accordion" }: FreelancerScenarioCardsProps) {
  const cards = scenarios.map(freelancerScenarioToCardVm);
  return (
    <BankScenarioCards
      cards={cards}
      className={cn("min-w-0 max-w-full", className)}
      layout={layout}
      recommendationEmphasis
    />
  );
}
