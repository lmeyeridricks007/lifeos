import { computeIncomeOutcome } from "./incomeOutcome";
import {
  computeAdminSimplicityScore,
  computeBenefitsScore,
  computeExpatPracticalityScore,
  computeFlexibilityScore,
  computeOverallFitScore,
  computeRelativeIncomeScore,
  computeSecurityScore,
  scenarioLabel,
} from "./dimensionScoring";
import { PRIORITY_WEIGHTING_DOCUMENTATION, normalizePriorityWeights } from "./priorityWeights";
import { buildToolInsights } from "./insights";
import { generateRiskHighlights } from "./riskHighlights";
import {
  buildResultBestFitLabel,
  buildResultTradeOffLabel,
  buildScenarioScoringExplanation,
  scoringExplanationToRationale,
} from "./scenarioExplanations";
import type {
  EmploymentScenarioId,
  EmploymentTypeScenarioInput,
  EmploymentTypeScenarioResult,
  ScenarioDimensionScores,
  ScenarioRow,
} from "./types";

export function activeScenarioIds(input: EmploymentTypeScenarioInput): EmploymentScenarioId[] {
  const core: EmploymentScenarioId[] = [
    "permanent_employee",
    "fixed_term_employee",
    "contractor",
    "zzp_self_employed",
  ];
  if (input.includeForeignRemoteScenario) core.push("foreign_remote_employee");
  if (input.toolMode === "compare_two") {
    const a = input.compareScenarioA;
    const b = input.compareScenarioB;
    return a === b ? [a] : [a, b];
  }
  return core;
}

export function calculateEmploymentTypeScenario(input: EmploymentTypeScenarioInput): EmploymentTypeScenarioResult {
  const ids = activeScenarioIds(input);
  const w = normalizePriorityWeights(input);

  const moneyById = {} as Record<EmploymentScenarioId, ReturnType<typeof computeIncomeOutcome>["breakdown"]>;
  const nets: Partial<Record<EmploymentScenarioId, number>> = {};
  for (const id of ids) {
    const { breakdown } = computeIncomeOutcome(id, input);
    moneyById[id] = breakdown;
    nets[id] = breakdown.estimatedNetAnnual;
  }

  const scenarios: ScenarioRow[] = ids.map((id) => {
    const money = moneyById[id]!;
    const incomeD = computeRelativeIncomeScore(nets, id);
    const securityD = computeSecurityScore(id, input);
    const flexD = computeFlexibilityScore(id, input);
    const adminD = computeAdminSimplicityScore(id, input);
    const benefitsD = computeBenefitsScore(id, input);
    const expatD = computeExpatPracticalityScore(id, input);

    const dims: Pick<
      ScenarioDimensionScores,
      "income" | "stability" | "flexibility" | "adminSimplicity" | "benefits" | "immigrationFit"
    > = {
      income: incomeD.score,
      stability: securityD.score,
      flexibility: flexD.score,
      adminSimplicity: adminD.score,
      benefits: benefitsD.score,
      immigrationFit: expatD.score,
    };

    const { score: overall, formulaSummary } = computeOverallFitScore(dims, w);

    const scores: ScenarioDimensionScores = {
      ...dims,
      overall,
    };

    const scoringExplanation = buildScenarioScoringExplanation({
      scenarioId: id,
      income: incomeD,
      security: securityD,
      flexibility: flexD,
      adminSimplicity: adminD,
      benefits: benefitsD,
      expatPracticality: expatD,
      overallScore: overall,
      overallFormulaSummary: formulaSummary,
    });

    const { label, shortLabel } = scenarioLabel(id);
    const row: ScenarioRow = {
      scenarioId: id,
      label,
      shortLabel,
      money,
      scores,
      scoreRationale: scoringExplanationToRationale(scoringExplanation),
      riskHighlights: [],
      scoringExplanation,
    };
    row.riskHighlights = generateRiskHighlights(row, input);
    return row;
  });

  const ranked = [...scenarios].sort((a, b) => b.scores.overall - a.scores.overall);
  const rankedIds = ranked.map((r) => r.scenarioId);
  const best = ranked[0]!;
  const runnerUp = ranked[1] ?? null;

  const bestMoney = best.money.estimatedNetAnnual;
  const runnerMoney = runnerUp?.money.estimatedNetAnnual ?? bestMoney;
  const biggestFinancialGapAnnual = Math.abs(bestMoney - runnerMoney);

  const bestStab = best.scores.stability;
  const runnerStab = runnerUp?.scores.stability ?? bestStab;
  const bestAdmin = best.scores.adminSimplicity;
  const runnerAdmin = runnerUp?.scores.adminSimplicity ?? bestAdmin;
  const biggestSecurityAdminDelta =
    Math.abs(bestStab - runnerStab) >= Math.abs(bestAdmin - runnerAdmin)
      ? "Security scores differ most between your top two — review contract length, notice, and income volatility."
      : "Admin simplicity differs most — one path likely needs more bookkeeping, insurance, or provider coordination.";

  const bestImm = best.scores.immigrationFit;
  const runnerImm = runnerUp?.scores.immigrationFit ?? bestImm;
  const biggestImmigrationDelta =
    Math.abs(bestImm - runnerImm) < 8
      ? "Expat / sponsorship fit looks similar in this pass — still confirm permit routes separately."
      : "Expat / sponsorship practicality differs — validate employer, payroll location, and permit type outside this tool.";

  const whyItWon: string[] = [];
  if (best.scores.income >= 75) whyItWon.push("Strong relative income score under your entered money assumptions.");
  if (best.scores.stability >= 75) whyItWon.push("High security / stability score for how you described your situation.");
  if (best.scores.adminSimplicity >= 75) whyItWon.push("Admin simplicity is high relative to other scenarios.");
  if (best.scores.benefits >= 75) whyItWon.push("Benefits / protections score aligns well with your inputs.");
  if (best.scores.immigrationFit >= 75) whyItWon.push("Expat / sponsorship practicality scores high on your profile.");
  if (best.scores.flexibility >= 75) whyItWon.push("Flexibility score is high vs other scenarios — independence weighting helped.");
  if (whyItWon.length === 0) {
    whyItWon.push("Balanced weighted score — no single dimension dominated; overall is a blend of your sliders.");
  }

  const plainEnglish =
    input.toolMode === "compare_two"
      ? `Between your two selections, "${best.shortLabel}" leads on the weighted score. Re-check utilization, fees, and permit facts before deciding.`
      : `Across compared models, "${best.shortLabel}" fits your current slider weights best. Re-run if gross, ruling, or visa context changes.`;

  const assumptionsEcho = [
    `Residence: ${input.residence === "already_nl" ? "Already in NL" : "Moving to NL"}`,
    `Visa sponsorship need: ${input.visaSponsorship}`,
    `30% ruling planning: ${input.rulingAssumption}`,
    `Holiday allowance in employee model: ${input.includeHolidayAllowance ? "yes" : "no"}`,
    `Billable preset: ${input.billablePreset}${input.billablePreset === "custom" ? ` (${input.billableUtilizationCustom}%)` : ""}`,
    `Model admin/insurance costs: ${input.modelAdminAccountingCosts}`,
  ];

  const core = {
    scenarios,
    rankedIds,
    bestFitId: best.scenarioId,
    runnerUpId: runnerUp?.scenarioId ?? null,
    summary: {
      headline:
        input.toolMode === "compare_two"
          ? `Best fit for your stated priorities: ${best.shortLabel}`
          : `Best overall fit: ${best.shortLabel}`,
      bestFitLabel: buildResultBestFitLabel(best.shortLabel, input.toolMode),
      tradeOffLabel: buildResultTradeOffLabel(best.scenarioId),
      whyItWon,
      biggestTradeOff: buildResultTradeOffLabel(best.scenarioId),
      plainEnglish,
      biggestFinancialGapAnnual,
      biggestSecurityAdminDelta,
      biggestImmigrationDelta,
    },
    normalizedWeights: w,
    assumptionsEcho,
    priorityWeightingDocumentation: PRIORITY_WEIGHTING_DOCUMENTATION.trim(),
  };

  return {
    ...core,
    insights: buildToolInsights(input, core),
  };
}
