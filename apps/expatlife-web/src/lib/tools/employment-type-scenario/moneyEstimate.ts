/**
 * @deprecated Prefer `computeIncomeOutcome` from `./incomeOutcome` for structured components.
 * Kept as a thin alias for callers that only need `ScenarioMoneyBreakdown`.
 */
import type { EmploymentScenarioId, EmploymentTypeScenarioInput, ScenarioMoneyBreakdown } from "./types";
import { computeIncomeOutcome } from "./incomeOutcome";

export { billableFraction, computeIncomeOutcome } from "./incomeOutcome";

export function estimateScenarioMoney(
  scenarioId: EmploymentScenarioId,
  input: EmploymentTypeScenarioInput
): ScenarioMoneyBreakdown {
  return computeIncomeOutcome(scenarioId, input).breakdown;
}
