import { BankScenarioCards, type BankScenarioCardVm } from "@/components/banking/BankScenarioCards";

export type CheapestBankScenarioCardVm = BankScenarioCardVm;

export type CheapestBankScenarioCardsProps = {
  scenarios: readonly CheapestBankScenarioCardVm[];
  className?: string;
};

/** Thin wrapper around {@link BankScenarioCards} for the Cheapest bank accounts pillar. */
export function CheapestBankScenarioCards({ scenarios, className }: CheapestBankScenarioCardsProps) {
  return (
    <BankScenarioCards
      cards={scenarios}
      className={className}
      layout="accordion"
      recommendationEmphasis
    />
  );
}
