import { buildColInputForComparisonCity, extractCostBreakdown } from "../colBridge";
import type {
  CityComparisonId,
  CityComparisonInput,
  CityComparisonResult,
  CityCostBreakdown,
  CityDimensionScores,
  CityScoreRow,
  SalaryFitBand,
  ScenarioRankingMode,
} from "../types";
import { computeAffordabilityScore, affordabilityBand } from "./affordability";
import { computeResultConfidence } from "./confidence";
import {
  buildComparisonContextNotes,
  buildExplanationBullets,
  buildTradeoffCallout,
  buildWarningBullets,
  buildWhyPeopleChooseLine,
  buildWorseFitWhenTail,
  dimensionLeadSummary,
  fitLabelFromDimensions,
  type PeerCitySnapshot,
} from "./explanations";
import {
  computeCareerScore,
  computeExpatScore,
  computeFamilyScore,
  computeLifestyleScore,
} from "./lifestyleAndFit";
import { getNormalizedCityProfile } from "./normalizedProfiles";
import { getCommuteInsightsBundle, resolveCommutePracticality } from "./commuteMatrix";
import { computeCommuteDimensionScore } from "./commuteScore";
import { buildScenarioLensRows } from "./scenarioLenses";
import { buildWhatWouldChangeInsights } from "./whatWouldChange";
import { buildDimensionWeights, pickScenarioMode, weightedOverall } from "./weights";
import type { AffordabilityBand, CityDimensionScores100, CommutePracticalityClass } from "./types";

function salaryFit(net: number, recommendedNet: number | null): { band: SalaryFitBand; note: string } {
  if (!recommendedNet || recommendedNet <= 0 || net <= 0) {
    return {
      band: "unknown",
      note: "Add a realistic take-home (net) salary to see how your pay lines up with typical costs here.",
    };
  }
  const r = net / recommendedNet;
  if (r >= 1.08) {
    return {
      band: "comfortable_headroom",
      note: `Your take-home is comfortably above the ~€${Math.round(recommendedNet)}/mo we’d expect for this mix — more wiggle room if rent moves.`,
    };
  }
  if (r >= 0.93) {
    return {
      band: "tight_but_plausible",
      note: `You’re close to the ~€${Math.round(recommendedNet)}/mo comfort line for this mix — doable if rent and spending stay sensible.`,
    };
  }
  return {
    band: "below_model_band",
    note: `Your take-home is below the ~€${Math.round(recommendedNet)}/mo comfort line for this profile — pricier cities will feel tight unless income goes up.`,
  };
}

function bandToLegacyLabel(b: AffordabilityBand): string {
  switch (b) {
    case "comfortable":
      return "Comfortable margin";
    case "workable":
      return "Workable margin";
    case "stretch":
      return "Stretched";
    case "strained":
      return "Strained";
    default:
      return "Unknown";
  }
}

function scenarioPlainLanguage(mode: ScenarioRankingMode): string {
  switch (mode) {
    case "cost_first":
      return "budget weighted more heavily";
    case "lifestyle_first":
      return "lifestyle (going out / calm) weighted more heavily";
    case "family_first":
      return "family life weighted more heavily";
    case "commute_first":
      return "commute weighted more heavily";
    case "balanced":
    default:
      return "a balanced mix of budget, commute, family, lifestyle, career, and expat ease";
  }
}

function buildRecommendedDecision(
  input: CityComparisonInput,
  ranking: CityScoreRow[],
  activeScenarioMode: ScenarioRankingMode
): string[] {
  const best = ranking[0];
  const second = ranking[1];
  const cheapest = [...ranking].sort((a, b) => a.cost.totalMonthlyOutflowEur - b.cost.totalMonthlyOutflowEur)[0];
  const lines: string[] = [];
  if (best) {
    lines.push(
      `${best.displayName} comes out first with ${scenarioPlainLanguage(activeScenarioMode)} — score ${best.overallScore}/100 (same inputs always give this order; it’s not a job-market or rental guarantee).`
    );
    if (second) {
      const gap = best.overallScore - second.overallScore;
      lines.push(
        `${second.displayName} is second at ${second.overallScore}/100 (${gap} point${gap === 1 ? "" : "s"} behind on the rounded combined score).`
      );
    }
    const leads = dimensionLeadSummary(best, ranking).slice(0, 4);
    if (leads.length > 0) {
      lines.push(`Compared with your other picks in this run, it is strongest on: ${leads.join("; ")}.`);
    }
    lines.push(
      `Main reason: ${best.explanationBullets[0] ?? "balanced picture — see the strengths on the best-match card."}`
    );
  }
  if (cheapest && best && cheapest.cityId !== best.cityId) {
    lines.push(
      `Lowest typical monthly costs in this set: ${cheapest.displayName}. If cash after bills is your main driver, read that city’s cautions before you swap the top pick.`
    );
  }
  if (input.workMode !== "remote" && input.officeCity === "amsterdam") {
    lines.push(
      "Office in Amsterdam: Utrecht, Haarlem, and Amstelveen often appear when commuters want balance — add them to the picker to see the split explicitly."
    );
  }
  if (input.familySchoolImportance === "high") {
    lines.push(
      "With family high on your list, the ranking leans toward cities that score well on family life — you still need to research schools and waitlists yourself."
    );
  }
  return lines.slice(0, 7);
}

export function computeCityComparisonScoring(input: CityComparisonInput): CityComparisonResult {
  const weights = buildDimensionWeights(input);
  const mode: ScenarioRankingMode = pickScenarioMode(input);

  const hasCommuterContrastOption = input.selectedCities.some(
    (id) => id === "amstelveen" || id === "rotterdam_commuter_belt" || id === "the_hague_commuter_belt"
  );
  const coreCityCount = input.selectedCities.filter((c) => c !== "other").length;
  const tradeoffSectionTip: string | null =
    coreCityCount >= 2 && !hasCommuterContrastOption
      ? "Rent feeling tight? Add Amstelveen or a commuter-belt town in your city list to compare smaller hubs with train links."
      : null;

  type Built = {
    cityId: CityComparisonId;
    displayName: string;
    profile: ReturnType<typeof getNormalizedCityProfile>;
    breakdown: CityCostBreakdown;
    colResult: ReturnType<typeof extractCostBreakdown>["colResult"];
    dims: CityDimensionScores100;
    practicality: CommutePracticalityClass | null;
    commuteNote: string;
    affBand: AffordabilityBand;
    netRemaining: number;
  };

  const built: Built[] = [];

  for (const cityId of input.selectedCities) {
    if (cityId === "other") continue;
    const profile = getNormalizedCityProfile(cityId);
    const colInput = buildColInputForComparisonCity(input, cityId);
    const { breakdown, colResult } = extractCostBreakdown(colInput, input.useColModelForSpend);
    const net = input.monthlyNetSalary;
    const netRemaining = Math.round(net - breakdown.totalMonthlyOutflowEur);

    const remote = input.workMode === "remote";
    const commuteR = remote
      ? { practicality: null as CommutePracticalityClass | null, note: "Remote — office commute not applied; hub connectivity only." }
      : resolveCommutePracticality(cityId, input.officeCity, input.commuteModePref);

    const affScore = computeAffordabilityScore(
      netRemaining,
      breakdown.totalMonthlyOutflowEur,
      breakdown.rentEur,
      profile,
      input
    );
    const affBand = affordabilityBand(
      netRemaining,
      breakdown.totalMonthlyOutflowEur,
      breakdown.rentEur,
      input
    );

    const commuteDim = computeCommuteDimensionScore(
      commuteR.practicality,
      input.maxCommute,
      remote,
      profile.commuteHubStrength
    );

    const dims: CityDimensionScores100 = {
      affordability: affScore,
      commute: commuteDim,
      family: computeFamilyScore(input.familySchoolImportance, profile),
      expatEase: computeExpatScore(input.internationalPref, profile),
      lifestyle: computeLifestyleScore(input.nightlifePref, input.natureCalmPref, profile),
      career: computeCareerScore(input.careerPriority, profile),
    };

    built.push({
      cityId,
      displayName: profile.displayName,
      profile,
      breakdown,
      colResult,
      dims,
      practicality: commuteR.practicality,
      commuteNote: commuteR.note,
      affBand,
      netRemaining,
    });
  }

  const dimsMap: Record<string, CityDimensionScores100> = Object.fromEntries(built.map((b) => [b.cityId, b.dims]));

  const peers: PeerCitySnapshot[] = built.map((b) => ({
    cityId: b.cityId,
    displayName: b.displayName,
    affordabilityScore: b.dims.affordability,
    lifestyleScore: b.dims.lifestyle,
    commuteScore: b.dims.commute,
    totalOutflowEur: b.breakdown.totalMonthlyOutflowEur,
    netRemainingEur: b.netRemaining,
  }));

  const peerCommutes = built.map((x) => ({
    cityId: x.cityId,
    displayName: x.displayName,
    commuteDim: x.dims.commute,
  }));

  const rowsUnsorted: CityScoreRow[] = built.map((b) => {
    const dimensions: CityDimensionScores = { ...b.dims };
    const overallScore = weightedOverall(b.dims, weights);
    const sf = salaryFit(input.monthlyNetSalary, b.colResult.recommendedNetSalaryMonthlyEur);

    const explanationBullets = buildExplanationBullets(
      input,
      b.profile,
      b.dims,
      b.practicality,
      b.affBand,
      input.workMode === "remote",
      {
        cityId: b.cityId,
        displayName: b.displayName,
        totalOutflowEur: b.breakdown.totalMonthlyOutflowEur,
        netRemainingEur: b.netRemaining,
        peers,
      }
    );

    const warningBullets = buildWarningBullets(
      input,
      b.dims,
      b.practicality,
      b.affBand,
      input.workMode === "remote",
      peerCommutes
    );

    const weightedBreakdown = {
      affordability: b.dims.affordability * weights.affordability,
      commute: b.dims.commute * weights.commute,
      family: b.dims.family * weights.family,
      expatEase: b.dims.expatEase * weights.expatEase,
      lifestyle: b.dims.lifestyle * weights.lifestyle,
      career: b.dims.career * weights.career,
    } as Record<keyof CityDimensionScores, number>;

    return {
      cityId: b.cityId,
      displayName: b.displayName,
      overallScore,
      finalScore: overallScore,
      affordabilityScore: b.dims.affordability,
      lifestyleScore: b.dims.lifestyle,
      commuteScore: b.dims.commute,
      familyScore: b.dims.family,
      careerScore: b.dims.career,
      expatScore: b.dims.expatEase,
      dimensions,
      weightedBreakdown,
      salaryFitBand: sf.band,
      salaryFitNote: sf.note,
      descriptor: "",
      fitLabel: "",
      explanationBullets,
      warningBullets,
      positives: explanationBullets,
      negatives: warningBullets,
      cost: b.breakdown,
      netRemainingEur: b.netRemaining,
      affordabilityBand: b.affBand,
      affordabilityLabel: bandToLegacyLabel(b.affBand),
      commutePracticality: b.practicality,
      commuteNote: b.commuteNote,
      commuteInsights:
        input.workMode === "remote"
          ? null
          : getCommuteInsightsBundle(b.cityId, input.officeCity, input.commuteModePref),
      tradeoffs: {
        bestFor: b.profile.comments,
        keyCompromise: buildTradeoffCallout(input, b.profile, b.dims, input.workMode === "remote"),
        whyPeopleChoose: buildWhyPeopleChooseLine(b.profile),
        worseFitWhen:
          input.budgetSensitivity === "high" && b.profile.rentLevel >= 8
            ? "You’re counting every euro and rent here is stiff — the squeeze may not feel worth what you get."
            : input.familySchoolImportance === "high" && b.dims.family < 65
              ? "Family is top priority but this city looks weaker on schools-and-space for you — research before you commit."
              : input.workMode !== "remote" && b.dims.commute < 52
                ? "You’re in the office most days and this commute pairing looks rough — run a real trip before you sign."
                : buildWorseFitWhenTail(input, b.profile, b.dims, input.workMode === "remote"),
        commuterBeltNote:
          b.cityId === "rotterdam_commuter_belt" || b.cityId === "the_hague_commuter_belt"
            ? "Check door-to-door time for your exact town and station — this row is a belt proxy."
            : b.cityId === "amstelveen"
              ? "Often stacked against Haarlem and Utrecht for Amsterdam-office commuters."
              : "",
      },
    };
  });

  for (const r of rowsUnsorted) {
    r.fitLabel = fitLabelFromDimensions(r.dimensions, peers, r.cityId);
    r.descriptor = r.fitLabel;
  }

  rowsUnsorted.sort((a, b) => b.overallScore - a.overallScore);

  const orderedIds = rowsUnsorted.map((r) => r.cityId);
  const displayNames = Object.fromEntries(rowsUnsorted.map((r) => [r.cityId, r.displayName]));

  const whatWouldChange = buildWhatWouldChangeInsights(input, orderedIds, dimsMap, displayNames);
  const scenarioRows = buildScenarioLensRows(input, dimsMap, displayNames);

  const affSpread =
    built.length > 0
      ? Math.max(...built.map((x) => x.dims.affordability)) - Math.min(...built.map((x) => x.dims.affordability))
      : 0;

  const { level: resultConfidence, summary: planningFitConfidence } = computeResultConfidence({
    rankingOverallScores: rowsUnsorted.map((r) => r.overallScore),
    input,
    affordabilitySpread: affSpread,
  });

  const comparisonContextNotes = buildComparisonContextNotes({
    monthlyNetSalary: input.monthlyNetSalary,
    monthlyGrossSalary: input.monthlyGrossSalary,
    affordabilityScoreSpread: affSpread,
  });

  return {
    ranking: rowsUnsorted,
    bestMatch: rowsUnsorted[0]!,
    secondMatch: rowsUnsorted[1] ?? null,
    thirdMatch: rowsUnsorted[2] ?? null,
    scenarioRows,
    whatWouldChange,
    recommendedDecision: buildRecommendedDecision(input, rowsUnsorted, mode),
    activeScenarioMode: mode,
    resultConfidence,
    planningFitConfidence,
    comparisonContextNotes,
    tradeoffSectionTip,
  };
}
