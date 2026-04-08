/**
 * Deterministic narratives, decision lenses, cost buckets, and closeness heuristics
 * for the employment type scenario tool. Planning only — not legal/tax advice.
 */
import type {
  DecisionLens,
  EmploymentScenarioId,
  EmploymentToolInsights,
  EmploymentTypeScenarioInput,
  EmploymentTypeScenarioResult,
  PriorityWeightsNormalized,
  ScenarioClosenessInsight,
  ScenarioCostBuckets,
  ScenarioRow,
} from "./types";

/** Result without attached insights — used while building the object in the engine. */
export type EmploymentTypeScenarioResultCore = Omit<EmploymentTypeScenarioResult, "insights">;

const DEFAULT_BILLABLE_PRESET = "85";
const DEFAULT_UMBRELLA_PCT = 7;
const DEFAULT_UMBRELLA_MONTHLY = 125;

function rowBetterForTie(a: ScenarioRow, b: ScenarioRow, rankedIds: EmploymentScenarioId[]): ScenarioRow {
  const ia = rankedIds.indexOf(a.scenarioId);
  const ib = rankedIds.indexOf(b.scenarioId);
  if (ia === -1) return b;
  if (ib === -1) return a;
  return ia <= ib ? a : b;
}

function winnerForDimension(
  scenarios: ScenarioRow[],
  rankedIds: EmploymentScenarioId[],
  scoreOf: (s: ScenarioRow) => number
): ScenarioRow {
  let best = scenarios[0]!;
  let bestScore = scoreOf(best);
  for (let i = 1; i < scenarios.length; i++) {
    const s = scenarios[i]!;
    const v = scoreOf(s);
    if (v > bestScore + 0.25) {
      best = s;
      bestScore = v;
    } else if (Math.abs(v - bestScore) <= 0.25) {
      best = rowBetterForTie(s, best, rankedIds);
      bestScore = scoreOf(best);
    }
  }
  return best;
}

function n(x: unknown): number {
  return typeof x === "number" && Number.isFinite(x) ? x : 0;
}

export function computeScenarioCostBuckets(money: ScenarioRow["money"]): ScenarioCostBuckets {
  const c = money.components;
  return {
    grossOrRevenueAnnual: n(money.grossOrRevenueAnnual),
    taxPayrollDragAnnual: n(c.taxAndSocialEstimateAnnual),
    adminUmbrellaComplianceAnnual: n(c.umbrellaFeesAnnual) + n(c.adminAccountingAnnual),
    downtimeUtilizationAnnual: n(c.utilizationHaircutAnnual) + n(c.downtimeHaircutAnnual),
    insuranceReserveAnnual: n(c.insuranceCostsAnnual) + n(c.zzpHealthFlatAnnual) + n(c.cashflowReserveAnnual),
    pensionAnnual: n(c.pensionCostAnnual),
    otherAnnual: n(c.commuteCostAnnual) + n(c.crossBorderPlanningDiscountAnnual) + n(c.employerEquipmentAnnual),
    estimatedNetAnnual: n(money.estimatedNetAnnual),
  };
}

export function computeDecisionLenses(scenarios: ScenarioRow[], rankedIds: EmploymentScenarioId[]): DecisionLens[] {
  const wIncome = winnerForDimension(scenarios, rankedIds, (s) => s.scores.income);
  const wStab = winnerForDimension(scenarios, rankedIds, (s) => s.scores.stability);
  const wAdmin = winnerForDimension(scenarios, rankedIds, (s) => s.scores.adminSimplicity);
  const wFlex = winnerForDimension(scenarios, rankedIds, (s) => s.scores.flexibility);
  const wBen = winnerForDimension(scenarios, rankedIds, (s) => s.scores.benefits);
  const wExp = winnerForDimension(scenarios, rankedIds, (s) => s.scores.immigrationFit);

  const lenses: DecisionLens[] = [
    {
      key: "income",
      title: "Best for money (vs other models here)",
      winnerId: wIncome.scenarioId,
      winnerShortLabel: wIncome.shortLabel,
      line: "Relative income score after the tool’s fee, tax, and utilization assumptions — not headline gross alone.",
    },
    {
      key: "stability",
      title: "Best for stability",
      winnerId: wStab.scenarioId,
      winnerShortLabel: wStab.shortLabel,
      line: "Contract length, renewal risk, and income predictability in this planning pass.",
    },
    {
      key: "adminSimplicity",
      title: "Best for admin simplicity",
      winnerId: wAdmin.scenarioId,
      winnerShortLabel: wAdmin.shortLabel,
      line: "Less bookkeeping, provider coordination, and self-serve compliance in the model we sketched.",
    },
    {
      key: "flexibility",
      title: "Best for flexibility",
      winnerId: wFlex.scenarioId,
      winnerShortLabel: wFlex.shortLabel,
      line: "Independence in clients, rates, and how work is structured — often higher for ZZP-style paths.",
    },
    {
      key: "benefits",
      title: "Best for benefits / protections",
      winnerId: wBen.scenarioId,
      winnerShortLabel: wBen.shortLabel,
      line: "Pension, leave, and package-style protections implied by the scenario archetype.",
    },
    {
      key: "expatPracticality",
      title: "Best for expat / sponsorship practicality",
      winnerId: wExp.scenarioId,
      winnerShortLabel: wExp.shortLabel,
      line: "Practical permit and payroll story in this tool — not IND approval or legal classification.",
    },
  ];
  return lenses;
}

const PRIORITY_PHRASES: { key: keyof PriorityWeightsNormalized; phrase: string }[] = [
  { key: "higherNetIncome", phrase: "take-home after model-specific costs" },
  { key: "stabilitySecurity", phrase: "stability and predictable income" },
  { key: "lowerAdminBurden", phrase: "low admin and paperwork load" },
  { key: "benefitsProtections", phrase: "benefits and protections" },
  { key: "flexibilityIndependence", phrase: "flexibility and independence" },
  { key: "visaSponsorshipSimplicity", phrase: "sponsor-friendly structure" },
  { key: "lowerTaxPayrollComplexity", phrase: "simpler tax and payroll complexity" },
];

function topPriorityPhrases(w: EmploymentTypeScenarioResult["normalizedWeights"], take: number): string[] {
  const entries = PRIORITY_PHRASES.map(({ key, phrase }) => ({ phrase, weight: w[key] })).sort((a, b) => b.weight - a.weight);
  return entries.slice(0, take).map((e) => e.phrase);
}

function structureHintForScenario(id: EmploymentScenarioId): string {
  switch (id) {
    case "permanent_employee":
      return "a classic Dutch payroll package";
    case "fixed_term_employee":
      return "payroll with a time-bounded contract";
    case "contractor":
      return "umbrella or payroll-style contracting";
    case "zzp_self_employed":
      return "self-employed invoicing and entrepreneur admin";
    case "foreign_remote_employee":
      return "a foreign-employer / cross-border setup";
    default:
      return "this structure";
  }
}

function buildNarrative(
  input: EmploymentTypeScenarioInput,
  partial: EmploymentTypeScenarioResultCore
): EmploymentToolInsights["narrative"] {
  const best = partial.scenarios.find((s) => s.scenarioId === partial.bestFitId)!;
  const runner = partial.runnerUpId ? partial.scenarios.find((s) => s.scenarioId === partial.runnerUpId) : null;
  const phrases = topPriorityPhrases(partial.normalizedWeights, 3);
  const hint = structureHintForScenario(best.scenarioId);

  const personalizedLead = `${best.shortLabel} ranks first on your weighted score because you emphasise ${phrases[0]}${
    phrases[1] ? `, ${phrases[1]}` : ""
  }${phrases[2] ? `, and ${phrases[2]}` : ""} — patterns that tend to favour ${hint}. This is planning-only ranking, not a recommendation that any route is legally or tax-correct for you.`;

  const whyFirstBullets: string[] = [...partial.summary.whyItWon.slice(0, 4)];
  if (whyFirstBullets.length < 2) {
    whyFirstBullets.push(
      `Overall fit blends six dimensions with your slider weights — ${best.shortLabel} leads that blend on this pass.`
    );
  }

  let whenRecommendationChanges =
    "This ordering can change if you change gross or day rates, utilization, umbrella fees, downtime, ruling assumption, sponsorship need, or which dimensions you weight.";
  if (runner) {
    const gap = best.scores.overall - runner.scores.overall;
    if (gap < 8) {
      whenRecommendationChanges += ` ${runner.shortLabel} is close behind (${Math.round(gap)} points) — small input shifts could swap the top spot.`;
    }
  }

  let secondBestHint: string | null = null;
  if (runner) {
    secondBestHint = `If ${phrases[0]} mattered less and you pushed income or flexibility harder, ${runner.shortLabel} is the most plausible alternative on this pass — confirm with the comparison table and money breakdown.`;
  }

  const whatThisMeansForYou =
    input.toolMode === "compare_two"
      ? `Between your two picks, the tool is nudging toward ${best.shortLabel} for the blend you said matters. Use money lines and “when not to choose” notes before you talk to HR or an advisor.`
      : `Across the models we compared, ${best.shortLabel} best matches the trade-offs you weighted — not “best for everyone.” Use dimension winners below if one area (money, stability, admin) should override the blended score.`;

  return {
    personalizedLead,
    whyFirstBullets,
    mainTradeOff: partial.summary.tradeOffLabel,
    whenRecommendationChanges,
    secondBestHint,
    whatThisMeansForYou,
  };
}

const BASE_NEGATIVE_FIT: Record<EmploymentScenarioId, string[]> = {
  permanent_employee: [
    "When flexibility and rate independence matter more than bundled benefits and paid leave.",
    "When you can tolerate admin and want higher upside from utilization — ZZP may deserve another look.",
    "When you do not need employer payroll structure for permits or mortgages.",
  ],
  fixed_term_employee: [
    "When you need long-term income certainty or a simple renewal story.",
    "When contract gaps between engagements are likely and you cannot absorb them.",
    "When sponsor or benefits continuity might break at the fixed end date.",
  ],
  contractor: [
    "When umbrella or payroll fees erase most of the headline rate advantage.",
    "When you want full independence (true ZZP) rather than provider-mediated payroll.",
    "When you need employer-like stability, pension accrual, and predictable sick pay.",
  ],
  zzp_self_employed: [
    "When you need visa sponsorship tied to a Dutch employment contract.",
    "When you cannot absorb downtime, late payments, or uneven utilization.",
    "When you want low admin and stable withholding — payroll is usually simpler day-to-day.",
    "When your rate or utilization assumptions are still guesses — stress-test in Advanced assumptions.",
  ],
  foreign_remote_employee: [
    "When you want the simplest Dutch payroll and local HR narrative.",
    "When cross-border tax, social security, and treaty friction are not priced into your decision.",
    "When sponsor evidence expects a recognised Dutch employer of record.",
  ],
};

function buildNegativeFit(
  row: ScenarioRow,
  input: EmploymentTypeScenarioInput,
  rankedIds: EmploymentScenarioId[]
): string[] {
  const base = [...(BASE_NEGATIVE_FIT[row.scenarioId] ?? [])];
  if (input.visaSponsorship === "yes" && (row.scenarioId === "zzp_self_employed" || row.scenarioId === "contractor")) {
    base.unshift("When IND-ready sponsorship and a clear employment contract are must-haves.");
  }
  if (row.scores.immigrationFit < 45 && input.visaSponsorship !== "no") {
    base.push("When expat practicality scores low here — double-check permit routes outside this tool.");
  }
  if (row.scenarioId === "permanent_employee" && rankedIds[0] === "zzp_self_employed" && input.priorities.higherNetIncome > 75) {
    base.push("When you are optimising hard for headline net and accept entrepreneur risk.");
  }
  return base.slice(0, 6);
}

function buildCloseness(
  input: EmploymentTypeScenarioInput,
  partial: EmploymentTypeScenarioResultCore
): ScenarioClosenessInsight {
  const ranked = [...partial.scenarios].sort((a, b) => b.scores.overall - a.scores.overall);
  const first = ranked[0]!;
  const second = ranked[1];
  if (!second) {
    return {
      isClose: false,
      overallScoreGap: 0,
      netAnnualGap: 0,
      flagDefaultUtilizationOrUmbrella: false,
    };
  }
  const overallScoreGap = first.scores.overall - second.scores.overall;
  const netAnnualGap = Math.abs(first.money.estimatedNetAnnual - second.money.estimatedNetAnnual);
  const maxNet = Math.max(Math.abs(first.money.estimatedNetAnnual), Math.abs(second.money.estimatedNetAnnual), 1);
  const netClose = netAnnualGap < 0.04 * maxNet || netAnnualGap < 3500;

  const topTwoIds = new Set([first.scenarioId, second.scenarioId]);
  const contractorish = topTwoIds.has("contractor") || topTwoIds.has("zzp_self_employed");
  const flagDefaultUtilizationOrUmbrella =
    contractorish &&
    (input.billablePreset === DEFAULT_BILLABLE_PRESET ||
      (input.umbrellaAdminPercent === DEFAULT_UMBRELLA_PCT && input.umbrellaAdminMonthly === DEFAULT_UMBRELLA_MONTHLY));

  const isClose = overallScoreGap < 5 || (overallScoreGap < 10 && netClose);

  return {
    isClose,
    overallScoreGap,
    netAnnualGap,
    flagDefaultUtilizationOrUmbrella,
  };
}

export function shouldShowAdvancedRefinementPrompt(
  input: EmploymentTypeScenarioInput,
  closeness: ScenarioClosenessInsight
): boolean {
  if (closeness.isClose) return true;
  if (closeness.flagDefaultUtilizationOrUmbrella) return true;
  return false;
}

/** Live early preview: same engine output, plus confidence + reasons (caller runs `calculateEmploymentTypeScenario`). */
export function buildPreviewNarrative(
  input: EmploymentTypeScenarioInput,
  result: EmploymentTypeScenarioResult
): {
  confidence: "low" | "medium" | "high";
  reasons: string[];
  improvementHint: string;
} {
  const grossish =
    (input.employeeUseAnnual ? input.employeeGrossAnnual : input.employeeGrossMonthly * 12) > 0 ||
    input.contractorDayRate > 0 ||
    input.zzpMonthlyRevenue > 0 ||
    input.zzpDayRate > 0;

  if (!grossish) {
    return {
      confidence: "low",
      reasons: [],
      improvementHint: "Add income + context to unlock a stronger preview.",
    };
  }

  const top = topPriorityPhrases(result.normalizedWeights, 3);
  const best = result.scenarios.find((s) => s.scenarioId === result.bestFitId)!;
  const reasons: string[] = [
    `Current weighted leader: ${best.shortLabel}.`,
    `Your sliders emphasise ${top[0]}${top[1] ? ` and ${top[1]}` : ""}.`,
  ];
  if (input.visaSponsorship === "yes") {
    reasons.push("Sponsor-friendly structure is important in your profile — employment archetypes often lead on expat practicality.");
  } else if (input.visaSponsorship === "maybe") {
    reasons.push("Visa need is uncertain — employment paths usually keep the simpler story until permits are clear.");
  }
  if (input.workStabilityExpectation === "stable_long") {
    reasons.push("You signalled long-term stability appetite — payroll models tend to score higher on security.");
  }
  if (reasons.length < 3) {
    reasons.push("Preview updates as you change pay, priorities, and context — tap Calculate for the full comparison.");
  }

  let confidence: "low" | "medium" | "high" = "medium";
  if (!input.employeeGrossMonthly && !input.employeeUseAnnual && input.contractorDayRate === 0 && input.zzpDayRate === 0) {
    confidence = "low";
  }
  if (grossish && input.industryContext && input.residence) {
    confidence = "high";
  }

  return {
    confidence,
    reasons: reasons.slice(0, 3),
    improvementHint:
      confidence === "high"
        ? "Tap Calculate to lock results, export, and see money lines — preview uses the same model with your current fields."
        : "Complete pay fields and context for a tighter preview; advanced assumptions still refine contractor and ZZP paths.",
  };
}

export function buildToolInsights(
  input: EmploymentTypeScenarioInput,
  partial: EmploymentTypeScenarioResultCore
): EmploymentToolInsights {
  const costBucketsByScenario: Partial<Record<EmploymentScenarioId, ScenarioCostBuckets>> = {};
  for (const s of partial.scenarios) {
    costBucketsByScenario[s.scenarioId] = computeScenarioCostBuckets(s.money);
  }

  const negativeFitByScenario: Partial<Record<EmploymentScenarioId, string[]>> = {};
  for (const s of partial.scenarios) {
    negativeFitByScenario[s.scenarioId] = buildNegativeFit(s, input, partial.rankedIds);
  }

  const closeness = buildCloseness(input, partial);
  const decisionLenses = computeDecisionLenses(partial.scenarios, partial.rankedIds);
  const narrative = buildNarrative(input, partial);

  return {
    decisionLenses,
    costBucketsByScenario,
    negativeFitByScenario,
    closeness,
    narrative,
  };
}
