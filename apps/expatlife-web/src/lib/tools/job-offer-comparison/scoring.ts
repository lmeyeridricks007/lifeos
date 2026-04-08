import { commuteBurdenScore } from "./affordability";
import type {
  CompensationSummary,
  DimensionScores,
  JobOfferInput,
  OfferStructuredScores,
  PriorityLevel,
  UserPriorities,
} from "./types";

type OfferMetrics = {
  offer: JobOfferInput;
  comp: CompensationSummary;
  net: { estimatedNetMonthly: number };
  benefits: { score: number };
  expat: { score: number };
  contractRisk: number;
  affordabilityRemaining: number;
};

function priorityToWeight(p: PriorityLevel): number {
  if (p === "low") return 0;
  if (p === "medium") return 0.5;
  return 1;
}

export function normalizeLinear(values: number[], v: number): number {
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (max <= min) return 78;
  return Math.round(((v - min) / (max - min)) * 100);
}

function bonusCertaintyScore(o: JobOfferInput): number {
  if (o.bonusType === "guaranteed") return 92;
  if (o.bonusType === "discretionary") return 48;
  return 72;
}

function scoreSecurityStability(o: JobOfferInput): number {
  let s = 48;
  if (o.contractType === "permanent") s += 40;
  if (o.contractType === "fixed_term") s += o.fixedTermRenewalLikely === "yes" ? 22 : 10;
  if (o.contractType === "contractor") s += 16;
  if (o.contractType === "remote_foreign") s += 20;
  s += Math.min(14, o.noticeMonthsEmployee * 4);
  s -= Math.min(18, o.probationMonths * 3);
  return Math.max(0, Math.min(100, Math.round(s)));
}

function scoreCommuteLifestyleQuality(o: JobOfferInput): number {
  const { burden, workModeFit } = commuteBurdenScore(o);
  const commuteEase = 100 - burden;
  return Math.round(commuteEase * 0.48 + workModeFit * 0.52);
}

/**
 * Builds explainable structured scores (0–100) per offer; peers define normalization where noted.
 */
export function buildStructuredScores(all: OfferMetrics[], idx: number): OfferStructuredScores {
  const m = all[idx];
  const recurringAnnual = all.map((x) => x.comp.annualTotalCashRecurring);
  const nets = all.map((x) => x.net.estimatedNetMonthly);
  const remain = all.map((x) => x.affordabilityRemaining);

  const cashNorm = normalizeLinear(recurringAnnual, m.comp.annualTotalCashRecurring);
  const bonusPart = bonusCertaintyScore(m.offer);
  const compensation = Math.max(0, Math.min(100, Math.round(cashNorm * 0.78 + bonusPart * 0.22)));

  const estimatedNetPay = normalizeLinear(nets, m.net.estimatedNetMonthly);
  const benefits = Math.max(0, Math.min(100, m.benefits.score));
  const securityStability = scoreSecurityStability(m.offer);
  const expatSupport = Math.max(0, Math.min(100, m.expat.score));
  const contractQuality = Math.max(0, Math.min(100, 100 - m.contractRisk));
  const commuteLifestyle = scoreCommuteLifestyleQuality(m.offer);
  const affordabilityAfterCosts = normalizeLinear(remain, m.affordabilityRemaining);

  const totalPackageComposite = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        estimatedNetPay * 0.24 +
          compensation * 0.2 +
          benefits * 0.16 +
          securityStability * 0.12 +
          expatSupport * 0.1 +
          contractQuality * 0.08 +
          commuteLifestyle * 0.05 +
          affordabilityAfterCosts * 0.05
      )
    )
  );

  return {
    compensation,
    estimatedNetPay,
    benefits,
    securityStability,
    expatSupport,
    contractQuality,
    commuteLifestyle,
    affordabilityAfterCosts,
    totalPackageComposite,
  };
}

export function structuredToDimensionScores(s: OfferStructuredScores): DimensionScores {
  return {
    netPay: s.estimatedNetPay,
    longTermUpside: s.compensation,
    stability: s.securityStability,
    benefits: s.benefits,
    expatSupport: s.expatSupport,
    contractClarity: s.contractQuality,
    workLifeCommute: s.commuteLifestyle,
    affordabilityAfterCosts: s.affordabilityAfterCosts,
    totalPackage: s.totalPackageComposite,
  };
}

const PRIORITY_KEYS: Array<{ key: keyof UserPriorities; dimension: keyof DimensionScores }> = [
  { key: "highestNetPay", dimension: "netPay" },
  { key: "strongestLongTermUpside", dimension: "longTermUpside" },
  { key: "stabilitySecurity", dimension: "stability" },
  { key: "bestBenefits", dimension: "benefits" },
  { key: "visaExpatFriendliness", dimension: "expatSupport" },
  { key: "lowestContractRisk", dimension: "contractClarity" },
  { key: "bestWorkLifeBalance", dimension: "workLifeCommute" },
  { key: "lowestCommuteBurden", dimension: "workLifeCommute" },
  { key: "bestAffordabilityAfterLivingCosts", dimension: "affordabilityAfterCosts" },
  { key: "bestTotalPackage", dimension: "totalPackage" },
];

export function overallScoreFromPriorities(dim: DimensionScores, priorities: UserPriorities): number {
  const rawWeights = PRIORITY_KEYS.map(({ key }) => priorityToWeight(priorities[key]));
  const sum = rawWeights.reduce((a, b) => a + b, 0) || 1;
  const weights = rawWeights.map((w) => w / sum);

  let score = 0;
  PRIORITY_KEYS.forEach(({ dimension }, i) => {
    score += weights[i] * dim[dimension];
  });

  return Math.round(Math.max(0, Math.min(100, score)));
}

export function describePriorityWeighting(priorities: UserPriorities): string {
  const highs = (Object.keys(priorities) as (keyof UserPriorities)[]).filter((k) => priorities[k] === "high");
  if (highs.length === 0) return "Balanced priorities — each dimension contributes evenly at medium weight.";
  const labels: Record<keyof UserPriorities, string> = {
    highestNetPay: "highest net pay",
    strongestLongTermUpside: "long-term upside",
    stabilitySecurity: "stability / security",
    bestBenefits: "benefits",
    visaExpatFriendliness: "visa / expat friendliness",
    lowestContractRisk: "lowest contract risk",
    bestWorkLifeBalance: "work-life / commute fit",
    lowestCommuteBurden: "lowest commute burden",
    bestAffordabilityAfterLivingCosts: "money left after rent and typical costs",
    bestTotalPackage: "best overall package",
  };
  return `You said these matter most: ${highs.map((k) => labels[k]).join(", ")}. Lower settings still count a little — nothing is ignored.`;
}
