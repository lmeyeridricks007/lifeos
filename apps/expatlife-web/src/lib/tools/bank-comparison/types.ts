/**
 * Bank comparison tool — client-safe types.
 * Answers are not persisted; scoring is deterministic from inputs + editorial catalog.
 */

export type UserType =
  | "new_arrival"
  | "employee"
  | "student"
  | "freelancer_zzp"
  | "family"
  | "international_professional"
  | "short_term_stay";

export type BsnStatus = "yes" | "no" | "not_yet";

export type ExpectedStay = "less_than_1_year" | "one_to_three_years" | "long_term";

export type SendsAbroad = "never" | "occasionally" | "monthly" | "frequently";

export type CurrenciesNeeded = "EUR_only" | "EUR_plus_home_currency" | "multiple_currencies";

export type Priority =
  | "lowest_cost"
  | "easiest_onboarding"
  | "local_dutch_integration"
  | "international_features"
  | "freelancer_business_features"
  | "family_long_term_setup"
  | "balanced";

export type SupportPreference = "app_only_ok" | "english_support_important" | "branch_or_human_support_preferred";

export type RiskTolerance = "wants_established_bank" | "comfortable_digital" | "wants_backup_account";

export type MaxMonthlyCostPreference = "lowest_possible" | "reasonable_if_value" | "flexible";

export type BankComparisonInput = {
  userType: UserType;
  alreadyHasBSN: BsnStatus;
  expectedStay: ExpectedStay;
  needsDutchSalaryAccount: boolean;
  needsRentPayments: boolean;
  needsIdeal: boolean;
  needsJointAccount: boolean;
  needsBusinessAccount: boolean;
  needsCreditCard: boolean;
  needsSavingsAccount: boolean;
  sendsMoneyAbroad: SendsAbroad;
  currenciesNeeded: CurrenciesNeeded;
  travelsOften: boolean;
  receivesInternationalPayments: boolean;
  priority: Priority;
  supportPreference: SupportPreference;
  riskTolerance: RiskTolerance;
  includeTraditionalBanks: boolean;
  includeDigitalBanks: boolean;
  includeTransferProviders: boolean;
  maxMonthlyCostPreference: MaxMonthlyCostPreference;
  showHybridRecommendation: boolean;
};

export type ScoreDimension =
  | "localIntegrationScore"
  | "onboardingScore"
  | "costScore"
  | "internationalTransferScore"
  | "freelancerScore"
  | "familyScore"
  | "supportScore"
  | "digitalExperienceScore"
  | "longTermFitScore";

export const SCORE_DIMENSIONS: readonly ScoreDimension[] = [
  "localIntegrationScore",
  "onboardingScore",
  "costScore",
  "internationalTransferScore",
  "freelancerScore",
  "familyScore",
  "supportScore",
  "digitalExperienceScore",
  "longTermFitScore",
] as const;

export type WeightKey =
  | "localIntegration"
  | "onboarding"
  | "cost"
  | "internationalTransfer"
  | "freelancer"
  | "family"
  | "support"
  | "digitalExperience"
  | "longTermFit";

export const DIMENSION_TO_WEIGHT: Record<ScoreDimension, WeightKey> = {
  localIntegrationScore: "localIntegration",
  onboardingScore: "onboarding",
  costScore: "cost",
  internationalTransferScore: "internationalTransfer",
  freelancerScore: "freelancer",
  familyScore: "family",
  supportScore: "support",
  digitalExperienceScore: "digitalExperience",
  longTermFitScore: "longTermFit",
};

export type BankComparisonWeights = Record<WeightKey, number>;

export type RecommendedSetupKind =
  | "traditional_primary"
  | "digital_primary"
  | "hybrid_traditional_plus_digital"
  | "hybrid_dutch_plus_transfer_specialist"
  | "business_stack"
  | "balanced_mixed";

export type BankComparisonProviderResult = {
  id: string;
  name: string;
  providerType: "traditional" | "digital" | "transfer_specialist";
  fitScore: number;
  fitScoreLabel: string;
  weightedBreakdown: Record<ScoreDimension, { weight: number; contribution: number; score: number }>;
  whyItFits: string[];
  watchOuts: string[];
  bestUseCase: string;
  /** Editorial cost framing — not a live quote */
  costModelLabel: string;
  pricingCaveat: string;
  /** Illustrative € planning bullets — confirm on provider site. */
  costExamples: string[];
  /** Plain-language accounts / iDEAL / joint / business note from the editorial catalog. */
  featuresSummary?: string;
  externalUrl: string;
  logoSrc: string | null;
  /** Monetisation registry id — display / transparency only; never used in fit math. */
  affiliateProviderKey?: string;
  providerUrlKey?: string;
  pricingUrlKey?: string;
  lastReviewed?: string;
  reviewNotes?: string;
  editorialDisclosure?: string;
  /** ExpatCopilot banking guide deep link when available — not used in fit math. */
  bankingGuideHref?: string | null;
  /** Prefer for “Check current pricing” when set; otherwise {@link externalUrl}. */
  pricingPageUrl?: string | null;
};

export type BankComparisonResult = {
  weights: BankComparisonWeights;
  weightsNormalized: BankComparisonWeights;
  recommendedSetup: {
    kind: RecommendedSetupKind;
    title: string;
    body: string;
  };
  topMatches: BankComparisonProviderResult[];
  hiddenCostWarnings: string[];
  checklist: string[];
  methodologyLines: string[];
  /** Global transparency line — affiliate links do not change scoring (see engine + catalog docs). */
  affiliateLinksDisclaimer: string;
};
