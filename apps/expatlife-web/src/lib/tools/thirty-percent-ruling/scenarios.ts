import { calculateThirtyPercentRuling } from "./calculateThirtyPercentRuling";
import type { ThirtyPercentCalculatorInputs, ThirtyPercentCalculatorResult, ThirtyRulingScenario } from "./types";

export function evaluateScenario(
  inputs: ThirtyPercentCalculatorInputs,
  opts?: Parameters<typeof calculateThirtyPercentRuling>[1]
): ThirtyPercentCalculatorResult | null {
  return calculateThirtyPercentRuling(inputs, opts);
}

export function duplicateScenarioInputs(inputs: ThirtyPercentCalculatorInputs): ThirtyPercentCalculatorInputs {
  return { ...inputs };
}

let scenarioIdSeq = 0;
export function nextScenarioId(): string {
  scenarioIdSeq += 1;
  return `sc-${scenarioIdSeq}-${Date.now().toString(36)}`;
}

export function defaultScenarioLabel(index: number): string {
  return `Scenario ${index + 1}`;
}

export type ScenarioEvaluation = {
  scenario: ThirtyRulingScenario;
  result: ThirtyPercentCalculatorResult | null;
};

export function evaluateAllScenarios(
  scenarios: ThirtyRulingScenario[],
  opts?: Parameters<typeof calculateThirtyPercentRuling>[1]
): ScenarioEvaluation[] {
  return scenarios.map((scenario) => ({
    scenario,
    result: calculateThirtyPercentRuling(scenario.inputs, opts),
  }));
}
