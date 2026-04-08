/**
 * Turns per-dimension score details into scenario-level narrative hints and legacy rationale strings.
 */

import type { DimensionScoreDetail, EmploymentScenarioId, ScenarioScoringExplanation, ToolMode } from "./types";

function narrativeHints(id: EmploymentScenarioId): { bestFit: string; tradeOff: string } {
  switch (id) {
    case "permanent_employee":
      return {
        bestFit: "Often strongest when you want payroll simplicity, bundled benefits, and sponsor-friendly employment.",
        tradeOff: "Usually less operational flexibility and headline upside than independent models.",
      };
    case "fixed_term_employee":
      return {
        bestFit: "Useful when you want payroll and protections with a defined initial horizon.",
        tradeOff: "Renewal and long-term certainty may lag permanent employment.",
      };
    case "contractor":
      return {
        bestFit: "Balances some payroll convenience with more project-style flexibility than perm.",
        tradeOff: "Fees, gaps between contracts, and lighter benefits vs classic employment.",
      };
    case "zzp_self_employed":
      return {
        bestFit: "Strongest when flexibility and independent go-to-market matter more than automatic protections.",
        tradeOff: "More admin, insurance, bench risk, and immigration friction when sponsorship matters.",
      };
    default:
      return {
        bestFit: "Can work when foreign payroll fits your employer and permit story.",
        tradeOff: "Cross-border tax, social coverage, and withholding complexity are common planning risks.",
      };
  }
}

function mergeFactors(d: DimensionScoreDetail): { up: string[]; down: string[] } {
  return { up: [...d.factorsIncreasing], down: [...d.factorsDecreasing] };
}

export function buildScenarioScoringExplanation(args: {
  scenarioId: EmploymentScenarioId;
  income: DimensionScoreDetail;
  security: DimensionScoreDetail;
  flexibility: DimensionScoreDetail;
  adminSimplicity: DimensionScoreDetail;
  benefits: DimensionScoreDetail;
  expatPracticality: DimensionScoreDetail;
  overallScore: number;
  overallFormulaSummary: string;
}): ScenarioScoringExplanation {
  const { scenarioId, overallScore, overallFormulaSummary } = args;
  const hints = narrativeHints(scenarioId);

  return {
    income: args.income,
    security: args.security,
    flexibility: args.flexibility,
    adminSimplicity: args.adminSimplicity,
    benefits: args.benefits,
    expatPracticality: args.expatPracticality,
    overall: { score: overallScore, formulaSummary: overallFormulaSummary },
    bestFitNarrativeHint: hints.bestFit,
    tradeOffNarrativeHint: hints.tradeOff,
  };
}

/** Flat list for export / compact UI */
export function scoringExplanationToRationale(ex: ScenarioScoringExplanation): string[] {
  const lines: string[] = [];
  const pushDim = (name: string, d: DimensionScoreDetail) => {
    if (d.factorsIncreasing.length) lines.push(`${name} — supports score: ${d.factorsIncreasing.join(" ")}`);
    if (d.factorsDecreasing.length) lines.push(`${name} — pulls score down: ${d.factorsDecreasing.join(" ")}`);
  };
  pushDim("Income (relative)", ex.income);
  pushDim("Security", ex.security);
  pushDim("Flexibility", ex.flexibility);
  pushDim("Admin simplicity", ex.adminSimplicity);
  pushDim("Benefits", ex.benefits);
  pushDim("Expat practicality", ex.expatPracticality);
  lines.push(`Overall: ${ex.overall.formulaSummary}`);
  lines.push(`Typical win: ${ex.bestFitNarrativeHint}`);
  lines.push(`Typical trade-off: ${ex.tradeOffNarrativeHint}`);
  return lines;
}

export function buildResultBestFitLabel(bestShortLabel: string, mode: ToolMode): string {
  return mode === "compare_two" ? `Best match for your sliders: ${bestShortLabel}` : `Recommended starting point: ${bestShortLabel}`;
}

export function buildResultTradeOffLabel(bestId: EmploymentScenarioId): string {
  if (bestId === "zzp_self_employed" || bestId === "contractor") {
    return "Main trade-off: protections and predictable net vs flexibility and upside — validate fees, bench, and permits.";
  }
  return "Main trade-off: flexibility and upside vs payroll simplicity and bundled benefits — check contract terms and gross-to-net assumptions.";
}
