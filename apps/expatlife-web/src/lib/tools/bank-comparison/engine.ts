import {
  AFFILIATE_LINKS_SCORING_DISCLAIMER,
  resolveDefaultBankingGuideHref,
} from "@/src/data/banking/bankingProviderAffiliateSafety";
import { BANK_COMPARISON_CATALOG, type BankComparisonCatalogEntry } from "./catalog";
import type {
  BankComparisonInput,
  BankComparisonProviderResult,
  BankComparisonResult,
  BankComparisonWeights,
  RecommendedSetupKind,
  ScoreDimension,
} from "./types";
import {
  calculateBankFitScores,
  getHiddenCostWarnings,
  getNextStepChecklist,
  getRawScoreWeights,
  getRecommendedBankingSetup,
  getScoreWeights,
  type BankComparisonInputs,
  type BankFitResult,
  type BankProviderScore,
  type BankScoreCategory,
  type BankScoreWeights,
  type RecommendedBankingSetupKind,
} from "@/src/lib/banking/bankScoring";

/** Short editorial shortlist in the tool UI — full catalog remains available in code for filters. */
export const BANK_COMPARISON_TOP_MATCH_COUNT = 3;

const SCORE_DIM_BY_CATEGORY: Record<BankScoreCategory, ScoreDimension> = {
  localIntegration: "localIntegrationScore",
  onboarding: "onboardingScore",
  cost: "costScore",
  internationalTransfers: "internationalTransferScore",
  freelancerFit: "freelancerScore",
  familyFit: "familyScore",
  support: "supportScore",
  digitalExperience: "digitalExperienceScore",
  longTermFit: "longTermFitScore",
};

const WEIGHT_KEY_BY_CATEGORY: Record<BankScoreCategory, keyof BankComparisonWeights> = {
  localIntegration: "localIntegration",
  onboarding: "onboarding",
  cost: "cost",
  internationalTransfers: "internationalTransfer",
  freelancerFit: "freelancer",
  familyFit: "family",
  support: "support",
  digitalExperience: "digitalExperience",
  longTermFit: "longTermFit",
};

function toolWeightsFromBanking(b: BankScoreWeights): BankComparisonWeights {
  return {
    localIntegration: b.localIntegration,
    onboarding: b.onboarding,
    cost: b.cost,
    internationalTransfer: b.internationalTransfers,
    freelancer: b.freelancerFit,
    family: b.familyFit,
    support: b.support,
    digitalExperience: b.digitalExperience,
    longTermFit: b.longTermFit,
  };
}

function catalogToBankProvider(entry: BankComparisonCatalogEntry): BankProviderScore {
  return {
    id: entry.id,
    name: entry.name,
    providerType: entry.providerType,
    scores: {
      localIntegration: entry.scores.localIntegrationScore,
      onboarding: entry.scores.onboardingScore,
      cost: entry.scores.costScore,
      internationalTransfers: entry.scores.internationalTransferScore,
      freelancerFit: entry.scores.freelancerScore,
      familyFit: entry.scores.familyScore,
      support: entry.scores.supportScore,
      digitalExperience: entry.scores.digitalExperienceScore,
      longTermFit: entry.scores.longTermFitScore,
    },
    supportsIdeal: entry.supportsIdeal,
    supportsBusinessAccount: entry.supportsBusinessAccount,
    supportsJointAccount: entry.supportsJointAccount,
    supportsSavings: entry.supportsSavings,
    supportsCreditCard: entry.supportsCreditCard,
    costModelLabel: entry.costModelLabel,
    pricingCaveat: entry.pricingCaveat,
    costExamples: entry.costExamples,
    featuresSummary: entry.featuresSummary,
    watchOuts: entry.watchOuts,
    bestFor: entry.bestFor,
    externalUrl: entry.externalUrl,
    logoSrc: entry.logoSrc,
  };
}

function fitToProviderResult(fit: BankFitResult): BankComparisonProviderResult {
  const weightedBreakdown = {} as BankComparisonProviderResult["weightedBreakdown"];
  for (const row of fit.scoreBreakdown) {
    const dim = SCORE_DIM_BY_CATEGORY[row.category];
    weightedBreakdown[dim] = {
      weight: row.weight,
      contribution: row.weightedContribution,
      score: row.providerScore,
    };
  }
  return {
    id: fit.providerId,
    name: fit.providerName,
    providerType: fit.providerType,
    fitScore: fit.fitScore,
    fitScoreLabel: "Planning score — not a verdict on the “best” bank",
    weightedBreakdown,
    whyItFits: fit.whyItFits,
    watchOuts: fit.watchOuts,
    bestUseCase: fit.matchedNeeds[0] ?? `Worth a look at ${fit.providerName} on their own site to see if their accounts fit you.`,
    costModelLabel: fit.costModelLabel,
    pricingCaveat: fit.pricingCaveat,
    costExamples: [...fit.costExamples],
    featuresSummary: fit.featuresSummary,
    externalUrl: fit.externalUrl,
    logoSrc: fit.logoSrc,
  };
}

function enrichProviderFromCatalog(
  row: BankComparisonProviderResult,
  catalogById: Map<string, BankComparisonCatalogEntry>,
): BankComparisonProviderResult {
  const entry = catalogById.get(row.id);
  if (!entry) {
    return {
      ...row,
      providerUrlKey: row.id,
      bankingGuideHref: null,
      pricingPageUrl: null,
    };
  }
  return {
    ...row,
    affiliateProviderKey: entry.affiliateProviderKey,
    providerUrlKey: entry.providerUrlKey ?? entry.id,
    pricingUrlKey: entry.pricingUrlKey,
    lastReviewed: entry.lastReviewed,
    reviewNotes: entry.reviewNotes,
    editorialDisclosure: entry.editorialDisclosure,
    bankingGuideHref: resolveDefaultBankingGuideHref(entry),
    pricingPageUrl: entry.pricingPageUrl ?? null,
  };
}

const SETUP_TO_LEGACY: Record<RecommendedBankingSetupKind, RecommendedSetupKind> = {
  traditional_only: "traditional_primary",
  digital_only: "digital_primary",
  hybrid: "hybrid_traditional_plus_digital",
  traditional_plus_transfer_provider: "hybrid_dutch_plus_transfer_specialist",
  digital_plus_transfer_provider: "hybrid_dutch_plus_transfer_specialist",
  business_plus_personal: "business_stack",
  family_joint_setup: "hybrid_traditional_plus_digital",
};

/** @deprecated Prefer {@link getRawScoreWeights} from `@/src/lib/banking/bankScoring` — kept for imports of `buildWeights`. */
export function buildWeights(input: BankComparisonInput): BankComparisonWeights {
  return toolWeightsFromBanking(getRawScoreWeights(input as BankComparisonInputs));
}

export function computeBankComparison(input: BankComparisonInput): BankComparisonResult {
  const asBanking = input as BankComparisonInputs;
  const weights = toolWeightsFromBanking(getRawScoreWeights(asBanking));
  const weightsNormalized = toolWeightsFromBanking(getScoreWeights(asBanking));

  const catalogById = new Map<string, BankComparisonCatalogEntry>(BANK_COMPARISON_CATALOG.map((e) => [e.id, e]));
  const providers = BANK_COMPARISON_CATALOG.map(catalogToBankProvider);
  const fits = calculateBankFitScores(asBanking, providers);
  const topMatches = fits
    .slice(0, BANK_COMPARISON_TOP_MATCH_COUNT)
    .map((fit) => enrichProviderFromCatalog(fitToProviderResult(fit), catalogById));

  const ctx =
    fits.length > 0
      ? {
          topProviderType: fits[0]!.providerType,
          secondProviderType: fits[1]?.providerType,
          topProviderId: fits[0]!.providerId,
          hasTraditional: fits.some((f) => f.providerType === "traditional"),
          hasDigital: fits.some((f) => f.providerType === "digital"),
          hasTransferSpecialist: fits.some((f) => f.providerType === "transfer_specialist"),
        }
      : null;

  const setup = getRecommendedBankingSetup(asBanking, ctx);

  return {
    weights,
    weightsNormalized,
    recommendedSetup: {
      kind: SETUP_TO_LEGACY[setup.kind],
      title: setup.title,
      body: setup.body,
    },
    topMatches,
    hiddenCostWarnings: getHiddenCostWarnings(asBanking).map((w) => w.message),
    checklist: getNextStepChecklist(asBanking),
    methodologyLines: [
      "We score each bank from 1 (weak) to 5 (strong) on several everyday topics. Your answers decide how much each topic counts. Partner links and ads do not change those numbers.",
      AFFILIATE_LINKS_SCORING_DISCLAIMER,
      "Prices and product names change. Euro bullets on each bank card are rough editorial planning examples — not live quotes. Always read the provider's official price list before you sign.",
      "This is not personal financial, tax, or legal advice.",
    ],
    affiliateLinksDisclaimer: AFFILIATE_LINKS_SCORING_DISCLAIMER,
  };
}

export function defaultBankComparisonInput(): BankComparisonInput {
  return {
    userType: "employee",
    alreadyHasBSN: "not_yet",
    expectedStay: "one_to_three_years",
    needsDutchSalaryAccount: true,
    needsRentPayments: true,
    needsIdeal: true,
    needsJointAccount: false,
    needsBusinessAccount: false,
    needsCreditCard: false,
    needsSavingsAccount: false,
    sendsMoneyAbroad: "occasionally",
    currenciesNeeded: "EUR_only",
    travelsOften: false,
    receivesInternationalPayments: false,
    priority: "balanced",
    supportPreference: "english_support_important",
    riskTolerance: "comfortable_digital",
    includeTraditionalBanks: true,
    includeDigitalBanks: true,
    includeTransferProviders: true,
    maxMonthlyCostPreference: "reasonable_if_value",
    showHybridRecommendation: true,
  };
}
