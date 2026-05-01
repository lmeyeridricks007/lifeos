import test from "node:test";
import assert from "node:assert/strict";
import {
  BANK_SCORE_CATEGORIES,
  calculateBankFitScores,
  getHiddenCostWarnings,
  getNextStepChecklist,
  getRawScoreWeights,
  getRecommendedBankingSetup,
  getScoreWeights,
  type BankComparisonInputs,
  type BankProviderScore,
} from "./bankScoring";

function baseInput(): BankComparisonInputs {
  return {
    userType: "employee",
    alreadyHasBSN: "yes",
    expectedStay: "one_to_three_years",
    needsDutchSalaryAccount: true,
    needsRentPayments: true,
    needsIdeal: true,
    needsJointAccount: false,
    needsBusinessAccount: false,
    needsCreditCard: false,
    needsSavingsAccount: false,
    sendsMoneyAbroad: "never",
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

function neutralScores(): BankProviderScore["scores"] {
  const s = {} as BankProviderScore["scores"];
  for (const k of BANK_SCORE_CATEGORIES) s[k] = 3;
  return s;
}

function mockProvider(overrides: Partial<BankProviderScore> & { id: string; name: string }): BankProviderScore {
  return {
    providerType: "digital",
    scores: neutralScores(),
    supportsIdeal: true,
    supportsBusinessAccount: true,
    supportsJointAccount: true,
    supportsSavings: true,
    supportsCreditCard: true,
    costModelLabel: "Test label",
    pricingCaveat: "Test caveat",
    costExamples: ["Example about €1/month", "Example about €2/month"],
    watchOuts: [],
    bestFor: [],
    externalUrl: "https://example.com",
    logoSrc: null,
    ...overrides,
  };
}

test("new arrival without BSN: onboarding weighted, BSN warning, digital-first recommendation", () => {
  const inputs: BankComparisonInputs = {
    ...baseInput(),
    userType: "new_arrival",
    alreadyHasBSN: "not_yet",
    includeDigitalBanks: true,
  };
  const raw = getRawScoreWeights(inputs);
  assert.ok(raw.onboarding > raw.cost, "onboarding should outweigh default cost for new_arrival + no BSN");

  const warnings = getHiddenCostWarnings(inputs);
  assert.ok(warnings.some((w) => w.id === "bsn-onboarding"));

  const setup = getRecommendedBankingSetup(inputs, null);
  assert.equal(setup.kind, "digital_only");
});

test("employee long-term: local integration and long-term axes gain weight", () => {
  const inputs: BankComparisonInputs = {
    ...baseInput(),
    userType: "employee",
    expectedStay: "long_term",
  };
  const w = getScoreWeights(inputs);
  assert.ok(w.localIntegration > 0.12);
  assert.ok(w.longTermFit > 0.12);
});

test("freelancer / ZZP with business need: business_plus_personal setup", () => {
  const inputs: BankComparisonInputs = {
    ...baseInput(),
    userType: "freelancer_zzp",
    needsBusinessAccount: true,
  };
  const setup = getRecommendedBankingSetup(inputs, null);
  assert.equal(setup.kind, "business_plus_personal");
  assert.ok(getHiddenCostWarnings(inputs).some((w) => w.id === "business-pricing"));
});

test("frequent international transfers: high intl-transfer provider ranks first", () => {
  const inputs: BankComparisonInputs = {
    ...baseInput(),
    sendsMoneyAbroad: "frequently",
    currenciesNeeded: "multiple_currencies",
    needsDutchSalaryAccount: false,
    needsRentPayments: false,
    needsIdeal: false,
    priority: "international_features",
  };
  const w = getScoreWeights(inputs);
  const maxCat = BANK_SCORE_CATEGORIES.reduce((a, k) => (w[k] > w[a] ? k : a));
  assert.equal(maxCat, "internationalTransfers");

  const low = mockProvider({
    id: "low-intl",
    name: "Low Intl",
    scores: { ...neutralScores(), internationalTransfers: 1 },
  });
  const high = mockProvider({
    id: "high-intl",
    name: "High Intl",
    scores: { ...neutralScores(), internationalTransfers: 5 },
  });
  const fits = calculateBankFitScores(inputs, [low, high]);
  assert.equal(fits[0]!.providerId, "high-intl");
  assert.ok(fits[0]!.scoreBreakdown.length === BANK_SCORE_CATEGORIES.length);
  assert.ok(fits[0]!.whyItFits.length > 0);
  assert.ok(fits[0]!.matchedNeeds.length > 0);
});

test("family / joint account: family_joint_setup and joint warning", () => {
  const inputs: BankComparisonInputs = {
    ...baseInput(),
    userType: "family",
    needsJointAccount: true,
  };
  const setup = getRecommendedBankingSetup(inputs, null);
  assert.equal(setup.kind, "family_joint_setup");
  assert.ok(getHiddenCostWarnings(inputs).some((w) => w.id === "joint-cards"));
});

test("lowest-cost priority: cost category has highest normalized weight", () => {
  const inputs: BankComparisonInputs = {
    ...baseInput(),
    needsDutchSalaryAccount: false,
    needsRentPayments: false,
    needsIdeal: false,
    priority: "lowest_cost",
    maxMonthlyCostPreference: "lowest_possible",
  };
  const w = getScoreWeights(inputs);
  const maxCat = BANK_SCORE_CATEGORIES.reduce((a, k) => (w[k] > w[a] ? k : a));
  assert.equal(maxCat, "cost");
  assert.ok(getHiddenCostWarnings(inputs).some((w) => w.id === "premium-creep"));
});

test("established-bank risk + long term: traditional_only when traditional group enabled", () => {
  const inputs: BankComparisonInputs = {
    ...baseInput(),
    riskTolerance: "wants_established_bank",
    expectedStay: "long_term",
    includeTraditionalBanks: true,
    includeDigitalBanks: false,
  };
  const setup = getRecommendedBankingSetup(inputs, null);
  assert.equal(setup.kind, "traditional_only");
});

test("getNextStepChecklist returns actionable rows", () => {
  const rows = getNextStepChecklist(baseInput());
  assert.ok(rows.length >= 4);
  assert.ok(rows.every((r) => r.length > 20));
});
