import { buildAffordabilitySummary, commuteBurdenScore } from "./affordability";
import { scoreBenefits } from "./benefits";
import { scoreContractSignals } from "./contractSignals";
import { scoreExpatSupport } from "./expatSupport";
import { buildHiddenCostItems, hiddenCostsSummaryLine } from "./hiddenCosts";
import {
  buildDecisionLenses,
  buildStrengthsWeaknesses,
  buildTopRecommendation,
  buildWhatWouldChange,
} from "./narrative";
import { buildWeaknessDrivenNegotiationQuestions } from "./questions";
import { buildCompensationSummary, estimateNetForOffer } from "./salary";
import {
  buildStructuredScores,
  describePriorityWeighting,
  overallScoreFromPriorities,
  structuredToDimensionScores,
} from "./scoring";
import type {
  JobOfferComparisonFormState,
  JobOfferComparisonResult,
  JobOfferInput,
  OfferStructuredScores,
  PerOfferResult,
  RiskFlag,
} from "./types";

const ASSUMPTIONS_ECHO = [
  "Take-home pay uses the same Dutch salary estimate as the site’s net calculator — it is not a payslip.",
  "Rent and city costs use typical mid-range figures (same city data as the cost-of-living calculator).",
  "Discretionary bonuses use a conservative planning fraction unless you mark them guaranteed.",
  "Contract answers are a light checklist — they do not replace a full contract review or legal advice.",
  "Visa sponsorship and the 30% ruling depend on eligibility and timing outside this page.",
];

function mergeRiskFlags(contractFlags: RiskFlag[], o: JobOfferInput): RiskFlag[] {
  const out = [...contractFlags];
  if (o.contractType === "fixed_term") {
    out.push({ severity: "watch", message: "Fixed-term: confirm end date, renewal, and sponsor implications." });
  }
  if (o.thirtyPercentSupport === "no" || o.thirtyPercentSupport === "not_mentioned") {
    out.push({ severity: "info", message: "30% ruling not assumed or declined — net may be lower if you qualify." });
  }
  if (o.pensionEmployerDescription.trim().length < 2) {
    out.push({ severity: "info", message: "Pension terms unclear — large long-term wealth lever." });
  }
  if (o.visaSponsorship === "no") {
    out.push({ severity: "watch", message: "No sponsorship signalled — confirm permit route if you need one." });
  }
  return out.slice(0, 12);
}

function maxStructuredPeers(rows: OfferStructuredScores[]): Record<keyof OfferStructuredScores, number> {
  const keys: (keyof OfferStructuredScores)[] = [
    "compensation",
    "estimatedNetPay",
    "benefits",
    "securityStability",
    "expatSupport",
    "contractQuality",
    "commuteLifestyle",
    "affordabilityAfterCosts",
    "totalPackageComposite",
  ];
  const acc = {} as Record<keyof OfferStructuredScores, number>;
  for (const k of keys) acc[k] = 0;
  for (const row of rows) for (const k of keys) acc[k] = Math.max(acc[k], row[k]);
  return acc;
}

export function compareJobOffers(state: JobOfferComparisonFormState): JobOfferComparisonResult {
  const activeSlots: Array<"A" | "B" | "C"> = state.includeOfferC ? ["A", "B", "C"] : ["A", "B"];

  const metrics = activeSlots.map((id) => {
    const slot = state.offers[id];
    const o = slot.offer;
    const comp = buildCompensationSummary(o);
    const net = estimateNetForOffer(o, comp);
    const benefits = scoreBenefits(o);
    const expat = scoreExpatSupport(o);
    const { summary: contractRiskSummary, flags } = scoreContractSignals(o);
    const aff = buildAffordabilitySummary(o, net);
    return {
      slotId: id,
      label: slot.label,
      offer: o,
      comp,
      net,
      benefits,
      expat,
      contractRisk: contractRiskSummary.riskScore,
      affordabilityRemaining: aff.estimatedNetRemainingMonthly,
      contractRiskSummary,
      contractFlags: flags,
      aff,
    };
  });

  const offerMetrics = metrics.map((m) => ({
    offer: m.offer,
    comp: m.comp,
    net: m.net,
    benefits: m.benefits,
    expat: m.expat,
    contractRisk: m.contractRisk,
    affordabilityRemaining: m.affordabilityRemaining,
  }));

  function commuteCostMonthly(o: (typeof metrics)[0]["offer"]): number {
    const anchor =
      o.commuteMode === "car" ? 320 : o.commuteMode === "bike" ? 35 : o.commuteMode === "mixed" ? 200 : 180;
    return Math.round((Math.max(0, Math.min(5, o.commuteDaysPerWeek)) / 5) * anchor);
  }

  const interim = metrics.map((m, idx) => {
    const structuredScores = buildStructuredScores(offerMetrics, idx);
    const dimensionScores = structuredToDimensionScores(structuredScores);
    const overallScore = overallScoreFromPriorities(dimensionScores, state.priorities);
    const { burden, workModeFit } = commuteBurdenScore(m.offer);
    const commuteLifestyleSummary = {
      commuteBurdenScore: burden,
      workModeFitScore: workModeFit,
      estimatedCommuteCostMonthly: commuteCostMonthly(m.offer),
      note: "Commute cost uses planning anchors from commute mode and office days — not your exact NS fare.",
    };
    return { m, structuredScores, dimensionScores, overallScore, commuteLifestyleSummary };
  });

  const structuredList = interim.map((r) => r.structuredScores);
  const peerMax = maxStructuredPeers(structuredList);

  const hiddenContextBase = interim.map((row) => ({
    offer: row.m.offer,
    benefits: row.m.benefits,
    expat: row.m.expat,
    aff: row.m.aff,
    commute: row.commuteLifestyleSummary,
    contractRiskScore: row.m.contractRiskSummary.riskScore,
  }));

  const perOffer: PerOfferResult[] = interim.map((row, idx) => {
    const m = row.m;
    const hiddenItems = buildHiddenCostItems(
      hiddenContextBase[idx]!,
      m.label,
      hiddenContextBase
    );
    const hiddenCosts = {
      items: hiddenItems,
      summaryLine: hiddenCostsSummaryLine(hiddenItems, m.label),
    };

    const draft: PerOfferResult = {
      slotId: m.slotId,
      label: m.label,
      offer: m.offer,
      compensationSummary: m.comp,
      netPayEstimate: m.net,
      benefitsSummary: m.benefits,
      expatSupportSummary: m.expat,
      contractRiskSummary: m.contractRiskSummary,
      commuteLifestyleSummary: row.commuteLifestyleSummary,
      affordabilitySummary: m.aff,
      structuredScores: row.structuredScores,
      dimensionScores: row.dimensionScores,
      overallScore: row.overallScore,
      hiddenCosts,
      strengths: [],
      weaknesses: [],
      negotiationQuestions: [],
      riskFlags: mergeRiskFlags(m.contractFlags, m.offer),
    };

    const { strengths, weaknesses } = buildStrengthsWeaknesses(draft, peerMax);
    const negotiationQuestions = buildWeaknessDrivenNegotiationQuestions(m.offer, weaknesses, hiddenItems);

    return { ...draft, strengths, weaknesses, negotiationQuestions };
  });

  return {
    activeOffers: perOffer,
    topRecommendation: buildTopRecommendation(perOffer, state.priorities),
    decisionLenses: buildDecisionLenses(perOffer),
    whatWouldChange: buildWhatWouldChange(perOffer, state.priorities),
    assumptionsEcho: ASSUMPTIONS_ECHO,
    priorityWeightingNote: describePriorityWeighting(state.priorities),
  };
}
