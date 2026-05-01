/**
 * Reusable editorial bank “fit” scoring — deterministic from answers + provider score rows.
 * No live pricing, no affiliate signals in math. Review catalog scores periodically.
 */

export type TriState = boolean | "depends";

/** Questionnaire aligned with the Bank Comparison Tool */
export type BankComparisonInputs = {
  userType:
    | "new_arrival"
    | "employee"
    | "student"
    | "freelancer_zzp"
    | "family"
    | "international_professional"
    | "short_term_stay";
  alreadyHasBSN: "yes" | "no" | "not_yet";
  expectedStay: "less_than_1_year" | "one_to_three_years" | "long_term";
  needsDutchSalaryAccount: boolean;
  needsRentPayments: boolean;
  needsIdeal: boolean;
  needsJointAccount: boolean;
  needsBusinessAccount: boolean;
  needsCreditCard: boolean;
  needsSavingsAccount: boolean;
  sendsMoneyAbroad: "never" | "occasionally" | "monthly" | "frequently";
  currenciesNeeded: "EUR_only" | "EUR_plus_home_currency" | "multiple_currencies";
  travelsOften: boolean;
  receivesInternationalPayments: boolean;
  priority:
    | "lowest_cost"
    | "easiest_onboarding"
    | "local_dutch_integration"
    | "international_features"
    | "freelancer_business_features"
    | "family_long_term_setup"
    | "balanced";
  supportPreference: "app_only_ok" | "english_support_important" | "branch_or_human_support_preferred";
  riskTolerance: "wants_established_bank" | "comfortable_digital" | "wants_backup_account";
  includeTraditionalBanks: boolean;
  includeDigitalBanks: boolean;
  includeTransferProviders: boolean;
  maxMonthlyCostPreference: "lowest_possible" | "reasonable_if_value" | "flexible";
  showHybridRecommendation: boolean;
};

/** Base score axes (1–5 editorial per axis on each provider) */
export type BankScoreCategory =
  | "localIntegration"
  | "onboarding"
  | "cost"
  | "internationalTransfers"
  | "freelancerFit"
  | "familyFit"
  | "support"
  | "digitalExperience"
  | "longTermFit";

export const BANK_SCORE_CATEGORIES: readonly BankScoreCategory[] = [
  "localIntegration",
  "onboarding",
  "cost",
  "internationalTransfers",
  "freelancerFit",
  "familyFit",
  "support",
  "digitalExperience",
  "longTermFit",
] as const;

export type BankScoreWeights = Record<BankScoreCategory, number>;

/**
 * Provider row supplied by callers (e.g. mapped from banking catalog).
 * Must contain **only** editorial inputs for math: scores, capability flags, and copy used in explanations.
 * Do not add `affiliateProviderKey`, revenue flags, or outbound link metadata here — keep monetisation out of scoring.
 */
export type BankProviderScore = {
  id: string;
  name: string;
  providerType: "traditional" | "digital" | "transfer_specialist";
  scores: Record<BankScoreCategory, number>;
  supportsIdeal: TriState;
  supportsBusinessAccount: TriState;
  supportsJointAccount: TriState;
  supportsSavings: TriState;
  supportsCreditCard: TriState;
  costModelLabel: string;
  pricingCaveat: string;
  /** Illustrative € bullets for tool UI — not live tariffs. */
  costExamples: readonly string[];
  /** Optional plain-English note on accounts, iDEAL, joint/business — shown in comparison cards. */
  featuresSummary?: string;
  watchOuts: readonly string[];
  bestFor: readonly string[];
  externalUrl: string;
  logoSrc: string | null;
};

export type ScoreBreakdownRow = {
  category: BankScoreCategory;
  providerScore: number;
  weight: number;
  weightedContribution: number;
};

export type BankFitResult = {
  providerId: string;
  providerName: string;
  providerType: BankProviderScore["providerType"];
  fitScore: number;
  scoreBreakdown: ScoreBreakdownRow[];
  whyItFits: string[];
  watchOuts: string[];
  matchedNeeds: string[];
  missingOrWeakAreas: string[];
  costModelLabel: string;
  pricingCaveat: string;
  costExamples: readonly string[];
  featuresSummary?: string;
  externalUrl: string;
  logoSrc: string | null;
};

export type RecommendedBankingSetupKind =
  | "traditional_only"
  | "digital_only"
  | "hybrid"
  | "traditional_plus_transfer_provider"
  | "digital_plus_transfer_provider"
  | "business_plus_personal"
  | "family_joint_setup";

export type RecommendedBankingSetup = {
  kind: RecommendedBankingSetupKind;
  title: string;
  body: string;
};

export type HiddenCostWarning = {
  id: string;
  message: string;
};

/** Optional: pass result of a fit run so setup mirrors top-two composition (tool UI). */
export type BankingFitContext = {
  topProviderType: BankProviderScore["providerType"];
  secondProviderType?: BankProviderScore["providerType"];
  topProviderId?: string;
  hasTraditional: boolean;
  hasDigital: boolean;
  hasTransferSpecialist: boolean;
};

const CATEGORY_LABELS: Record<BankScoreCategory, string> = {
  localIntegration: "Everyday Dutch banking (salary in, rent out, iDEAL shopping online)",
  onboarding: "Opening the account without too much friction",
  cost: "Typical monthly cost for the way you bank",
  internationalTransfers: "Sending euros or other currencies abroad",
  freelancerFit: "Freelancer or small-business banking",
  familyFit: "Family or shared accounts",
  support: "Getting help when something goes wrong",
  digitalExperience: "Banking on your phone or laptop",
  longTermFit: "Staying with one bank for several years",
};

function baseWeights(): BankScoreWeights {
  const z = {} as BankScoreWeights;
  for (const k of BANK_SCORE_CATEGORIES) z[k] = 1;
  return z;
}

function bump(w: BankScoreWeights, key: BankScoreCategory, n: number) {
  w[key] = Math.max(0.05, w[key] + n);
}

/** Unnormalized weights from answers (same logic as legacy bank-comparison engine). */
export function getRawScoreWeights(inputs: BankComparisonInputs): BankScoreWeights {
  const w = baseWeights();

  switch (inputs.userType) {
    case "new_arrival":
      bump(w, "onboarding", 2);
      bump(w, "localIntegration", 0.5);
      break;
    case "employee":
      bump(w, "localIntegration", 2);
      bump(w, "longTermFit", 1);
      break;
    case "student":
      bump(w, "cost", 2.5);
      bump(w, "onboarding", 1);
      break;
    case "freelancer_zzp":
      bump(w, "freelancerFit", 3);
      bump(w, "internationalTransfers", 1);
      bump(w, "localIntegration", 0.5);
      break;
    case "family":
      bump(w, "familyFit", 2.5);
      bump(w, "localIntegration", 1.5);
      bump(w, "longTermFit", 1);
      break;
    case "international_professional":
      bump(w, "internationalTransfers", 2);
      bump(w, "digitalExperience", 1);
      bump(w, "localIntegration", 0.5);
      break;
    case "short_term_stay":
      bump(w, "onboarding", 1.5);
      bump(w, "cost", 1);
      bump(w, "longTermFit", -0.25);
      break;
    default:
      break;
  }

  if (inputs.alreadyHasBSN === "no" || inputs.alreadyHasBSN === "not_yet") bump(w, "onboarding", 1.5);
  if (inputs.expectedStay === "long_term") bump(w, "longTermFit", 2);
  if (inputs.expectedStay === "one_to_three_years") bump(w, "longTermFit", 1);
  if (inputs.expectedStay === "less_than_1_year") bump(w, "cost", 0.5);

  if (inputs.needsDutchSalaryAccount) bump(w, "localIntegration", 2);
  if (inputs.needsRentPayments) bump(w, "localIntegration", 1);
  if (inputs.needsIdeal) bump(w, "localIntegration", 1.5);
  if (inputs.needsJointAccount) bump(w, "familyFit", 1.2);
  if (inputs.needsBusinessAccount) bump(w, "freelancerFit", 2);
  if (inputs.needsCreditCard) bump(w, "cost", 0.3);
  if (inputs.needsSavingsAccount) bump(w, "longTermFit", 0.4);

  switch (inputs.sendsMoneyAbroad) {
    case "frequently":
      bump(w, "internationalTransfers", 3);
      bump(w, "cost", 0.5);
      break;
    case "monthly":
      bump(w, "internationalTransfers", 2.2);
      break;
    case "occasionally":
      bump(w, "internationalTransfers", 1);
      break;
    default:
      break;
  }

  if (inputs.currenciesNeeded === "multiple_currencies") bump(w, "internationalTransfers", 2);
  if (inputs.currenciesNeeded === "EUR_plus_home_currency") bump(w, "internationalTransfers", 1.2);
  if (inputs.travelsOften) {
    bump(w, "internationalTransfers", 0.8);
    bump(w, "cost", 0.4);
  }
  if (inputs.receivesInternationalPayments) {
    bump(w, "internationalTransfers", 1.2);
    bump(w, "freelancerFit", 0.6);
  }

  switch (inputs.priority) {
    case "lowest_cost":
      bump(w, "cost", 3);
      break;
    case "easiest_onboarding":
      bump(w, "onboarding", 3);
      break;
    case "local_dutch_integration":
      bump(w, "localIntegration", 3);
      bump(w, "support", 0.5);
      break;
    case "international_features":
      bump(w, "internationalTransfers", 2.8);
      bump(w, "digitalExperience", 1);
      break;
    case "freelancer_business_features":
      bump(w, "freelancerFit", 3);
      break;
    case "family_long_term_setup":
      bump(w, "familyFit", 2);
      bump(w, "longTermFit", 2);
      break;
    case "balanced":
      for (const k of BANK_SCORE_CATEGORIES) bump(w, k, 0.25);
      break;
    default:
      break;
  }

  switch (inputs.supportPreference) {
    case "app_only_ok":
      bump(w, "digitalExperience", 1.2);
      break;
    case "english_support_important":
      bump(w, "support", 1.8);
      bump(w, "onboarding", 0.5);
      break;
    case "branch_or_human_support_preferred":
      bump(w, "support", 2.2);
      bump(w, "localIntegration", 1);
      break;
    default:
      break;
  }

  switch (inputs.riskTolerance) {
    case "wants_established_bank":
      bump(w, "localIntegration", 1.5);
      bump(w, "longTermFit", 1);
      bump(w, "digitalExperience", -0.2);
      break;
    case "comfortable_digital":
      bump(w, "digitalExperience", 2);
      break;
    case "wants_backup_account":
      bump(w, "longTermFit", 0.8);
      bump(w, "onboarding", 0.4);
      break;
    default:
      break;
  }

  switch (inputs.maxMonthlyCostPreference) {
    case "lowest_possible":
      bump(w, "cost", 1.5);
      break;
    case "reasonable_if_value":
      bump(w, "cost", 0.3);
      bump(w, "support", 0.2);
      break;
    case "flexible":
      bump(w, "support", 0.3);
      bump(w, "digitalExperience", 0.2);
      break;
    default:
      break;
  }

  return w;
}

/** Normalized weights (sum to 1) — use for explainability rows. */
export function getScoreWeights(inputs: BankComparisonInputs): BankScoreWeights {
  const w = getRawScoreWeights(inputs);
  const sum = BANK_SCORE_CATEGORIES.reduce((a, k) => a + w[k], 0);
  const out = { ...w };
  for (const k of BANK_SCORE_CATEGORIES) {
    out[k] = sum > 0 ? w[k] / sum : 1 / BANK_SCORE_CATEGORIES.length;
  }
  return out;
}

function triAllowsNeed(flag: TriState, need: boolean): boolean {
  if (!need) return true;
  if (flag === true || flag === "depends") return true;
  return false;
}

export function providerPassesHardGates(provider: BankProviderScore, inputs: BankComparisonInputs): boolean {
  if (provider.providerType === "traditional" && !inputs.includeTraditionalBanks) return false;
  if (provider.providerType === "digital" && !inputs.includeDigitalBanks) return false;
  if (provider.providerType === "transfer_specialist" && !inputs.includeTransferProviders) return false;
  if (inputs.needsBusinessAccount && provider.supportsBusinessAccount === false) return false;
  if (inputs.needsIdeal && provider.supportsIdeal === false) return false;
  if (inputs.needsJointAccount && provider.supportsJointAccount === false) return false;
  if (inputs.needsSavingsAccount && provider.supportsSavings === false) return false;
  if (inputs.needsCreditCard && provider.supportsCreditCard === false) return false;
  return true;
}

function dependsPenalty(provider: BankProviderScore, inputs: BankComparisonInputs): number {
  let p = 1;
  if (inputs.needsIdeal && provider.supportsIdeal === "depends") p *= 0.97;
  if (inputs.needsJointAccount && provider.supportsJointAccount === "depends") p *= 0.98;
  if (inputs.needsBusinessAccount && provider.supportsBusinessAccount === "depends") p *= 0.98;
  return p;
}

function rawFit(provider: BankProviderScore, nw: BankScoreWeights, inputs: BankComparisonInputs): number {
  let t = 0;
  for (const c of BANK_SCORE_CATEGORIES) {
    t += nw[c] * (provider.scores[c] / 5);
  }
  return t * dependsPenalty(provider, inputs);
}

function buildScoreBreakdown(provider: BankProviderScore, nw: BankScoreWeights): ScoreBreakdownRow[] {
  return BANK_SCORE_CATEGORIES.map((category) => {
    const providerScore = provider.scores[category];
    const weight = nw[category];
    return {
      category,
      providerScore,
      weight,
      weightedContribution: weight * (providerScore / 5),
    };
  });
}

function buildWhyItFits(provider: BankProviderScore, nw: BankScoreWeights): string[] {
  const rows = buildScoreBreakdown(provider, nw)
    .map((r) => ({ ...r, label: CATEGORY_LABELS[r.category] }))
    .sort((a, b) => b.weightedContribution - a.weightedContribution)
    .slice(0, 3);
  return rows.map(
    (r) =>
      `${r.label}: ${r.providerScore} out of 5 on our editorial checklist for this area (5 means "usually strong for expats in this category").`,
  );
}

function buildMatchedNeeds(provider: BankProviderScore, inputs: BankComparisonInputs): string[] {
  const m: string[] = [];
  if (
    inputs.needsDutchSalaryAccount &&
    inputs.needsRentPayments &&
    provider.scores.localIntegration >= 4
  ) {
    m.push(
      "Matches the usual Dutch pattern: salary paid in, rent and bills paid out, and iDEAL for shops and websites — double-check the exact account type with your employer and landlord.",
    );
  } else if (inputs.needsDutchSalaryAccount && provider.scores.localIntegration >= 4) {
    m.push("Often a good match when you need a Dutch IBAN your employer can pay into.");
  } else if (inputs.needsRentPayments && provider.scores.localIntegration >= 4) {
    m.push("Often used for rent and other regular payments from the Netherlands.");
  }
  const coveredSalaryRentIdeal =
    inputs.needsDutchSalaryAccount &&
    inputs.needsRentPayments &&
    provider.scores.localIntegration >= 4;
  if (
    inputs.needsIdeal &&
    triAllowsNeed(provider.supportsIdeal, true) &&
    provider.scores.localIntegration >= 3 &&
    !coveredSalaryRentIdeal
  ) {
    m.push(
      "iDEAL is the normal way to pay Dutch websites from your bank balance — confirm the account you open is the one you will use for payroll and rent.",
    );
  }
  if (inputs.needsBusinessAccount && provider.supportsBusinessAccount !== false) {
    m.push("If you invoice or trade under your own name, open their business or ZZP price list — monthly fees and card rules are often different from a personal account.");
  }
  if ((inputs.sendsMoneyAbroad !== "never" || inputs.currenciesNeeded !== "EUR_only") && provider.scores.internationalTransfers >= 4) {
    m.push("Stronger than average for sending money abroad or holding more than just euros — still compare what actually arrives after fees and exchange rates.");
  }
  if (inputs.userType === "new_arrival" && provider.scores.onboarding >= 4) {
    m.push("Often quicker or easier to start while you are new in the country — paperwork rules still change, so read their current checklist.");
  }
  if (m.length === 0) m.push("Looks reasonable on paper — walk through your own checklist on the bank’s site before you apply.");
  return m;
}

function buildMissingOrWeakAreas(provider: BankProviderScore, inputs: BankComparisonInputs, nw: BankScoreWeights): string[] {
  const out: string[] = [];
  const weak = (cat: BankScoreCategory, label: string) => {
    if (provider.scores[cat] <= 2 && nw[cat] >= 0.12) {
      out.push(`${label}: low score (2 out of 5 or below) even though you said this mattered`);
    }
  };
  weak("internationalTransfers", "International transfers");
  weak("freelancerFit", "Freelancer / business");
  weak("familyFit", "Family / joint-style");
  weak("onboarding", "Onboarding");
  weak("localIntegration", "Dutch everyday integration");

  if (inputs.needsIdeal && provider.supportsIdeal === "depends") {
    out.push("iDEAL: the bank says “it depends” — check with your employer and landlord before you count on it");
  }
  if (inputs.needsJointAccount && provider.supportsJointAccount === "depends") {
    out.push("Joint account: marked “depends” — ask about joint packages and extra card fees");
  }
  if (inputs.needsBusinessAccount && provider.supportsBusinessAccount === "depends") {
    out.push("Business account: marked “depends” — read both personal and business price lists");
  }
  if (provider.providerType === "transfer_specialist" && inputs.needsDutchSalaryAccount && inputs.needsIdeal) {
    out.push(
      "Transfer apps are great for sending money; they are usually not a full swap for a Dutch salary account plus iDEAL — use them alongside unless someone has confirmed otherwise in writing",
    );
  }
  return out;
}

/**
 * Weighted fit for each provider. `fitScore` is 0–100 relative to the strongest candidate **in this call’s provider list**.
 */
export function calculateBankFitScores(
  inputs: BankComparisonInputs,
  providers: readonly BankProviderScore[]
): BankFitResult[] {
  const nw = getScoreWeights(inputs);
  const gated = providers.filter((p) => providerPassesHardGates(p, inputs));
  const rawScores = gated.map((p) => ({ p, raw: rawFit(p, nw, inputs) }));
  const maxRaw = Math.max(...rawScores.map((x) => x.raw), 1e-6);

  const results: BankFitResult[] = rawScores.map(({ p, raw }) => {
    const fitScore = Math.round((raw / maxRaw) * 100);
    return {
      providerId: p.id,
      providerName: p.name,
      providerType: p.providerType,
      fitScore,
      scoreBreakdown: buildScoreBreakdown(p, nw),
      whyItFits: buildWhyItFits(p, nw),
      watchOuts: [...p.watchOuts],
      matchedNeeds: buildMatchedNeeds(p, inputs),
      missingOrWeakAreas: buildMissingOrWeakAreas(p, inputs, nw),
      costModelLabel: p.costModelLabel,
      pricingCaveat: p.pricingCaveat,
      costExamples: [...p.costExamples],
      featuresSummary: p.featuresSummary,
      externalUrl: p.externalUrl,
      logoSrc: p.logoSrc,
    };
  });

  return results.sort((a, b) => b.fitScore - a.fitScore);
}

export function getHiddenCostWarnings(inputs: BankComparisonInputs): HiddenCostWarning[] {
  const w: HiddenCostWarning[] = [];
  const push = (id: string, message: string) => w.push({ id, message });

  if (inputs.sendsMoneyAbroad !== "never") {
    push(
      "transfer-fx",
      "Sending money abroad: compare how much money actually arrives (fee plus exchange rate), not the headline “free transfer”. Check the bank’s own pages and any transfer app you use.",
    );
  }
  if (inputs.travelsOften) {
    push(
      "travel-atm-fx",
      "Travel: look for extra ATM fees abroad, weekend exchange-rate bumps, and fees from the ATM owner — not just your bank’s card fee.",
    );
  }
  if (inputs.needsBusinessAccount || inputs.userType === "freelancer_zzp") {
    push("business-pricing", "Freelancing: personal and business accounts often have different prices — read both lists before you invoice.");
  }
  if (inputs.needsJointAccount || inputs.userType === "family") {
    push("joint-cards", "Family or joint accounts: extra cards and joint packages often cost more each month — add it up before you sign.");
  }
  if (inputs.priority === "lowest_cost" || inputs.maxMonthlyCostPreference === "lowest_possible") {
    push("premium-creep", "Cheap plans often creep up when you add features — once a year, check you still need everything you pay for.");
  }
  if (inputs.alreadyHasBSN === "no" || inputs.alreadyHasBSN === "not_yet") {
    push(
      "bsn-onboarding",
      "No BSN yet: who can open an account and which papers they want can change — line this up with when you register at the gemeente.",
    );
  }
  if (inputs.supportPreference === "english_support_important") {
    push("support-language", "English support: check how you can reach them (chat, phone, email) and when they are open for the account you want.");
  }
  if (inputs.riskTolerance === "wants_backup_account") {
    push("single-account-risk", "If you rely on one account for salary, think about a spare card or a second account in case something gets blocked.");
  }
  if (inputs.needsIdeal) {
    push(
      "ideal-acceptance",
      "iDEAL: check on the exact account you plan to open that your employer and anyone you pay are fine with it — not only the marketing page.",
    );
  }
  if (w.length === 0) {
    push("generic-tariff", "Even if a bank looks like a strong match, check each fee on the bank’s official price list before you open.");
  }
  return w;
}

export function getNextStepChecklist(inputs: BankComparisonInputs): string[] {
  const rows = [
    "Save or bookmark the official price list you used — fees change.",
    "Check the bank’s current list of documents (ID, address, job or school letter) before you apply.",
    "If you need iDEAL and regular Dutch payments, confirm the exact account name with your employer or landlord.",
    "If you send money abroad, try the same amount in the bank’s tool and in a transfer app on the same day and see what arrives.",
  ];
  if (inputs.riskTolerance === "wants_backup_account") {
    rows.push("If salary timing is tight, think about a backup card or second account — and check fees on both.");
  }
  rows.push("Read our banking guides for the full story — this tool is a starting map, not every detail.");
  return rows;
}

/**
 * Recommended **pattern** from answers. Pass `context` (top two composition) when you want the same hybrid
 * behaviour as the live tool; otherwise rules are inputs-only.
 */
export function getRecommendedBankingSetup(
  inputs: BankComparisonInputs,
  context?: BankingFitContext | null
): RecommendedBankingSetup {
  const noProviders =
    !inputs.includeTraditionalBanks && !inputs.includeDigitalBanks && !inputs.includeTransferProviders;
  if (noProviders) {
    return {
      kind: "hybrid",
      title: "Turn a group back on",
      body: "Right now no bank types are selected. Tick at least one of: traditional Dutch banks, digital banks, or transfer services — then you will see a setup suggestion.",
    };
  }

  if (inputs.needsBusinessAccount && inputs.userType === "freelancer_zzp") {
    return {
      kind: "business_plus_personal",
      title: "Keep business and personal money apart",
      body: "Most freelancers keep business income and tax savings separate from day-to-day spending — often a business account next to a personal one. Check fees and rules on both sides. This is planning help only, not tax or legal advice.",
    };
  }

  if (inputs.needsJointAccount || inputs.userType === "family") {
    return {
      kind: "family_joint_setup",
      title: "Plan for family or joint banking",
      body: "Joint accounts and extra cards can change the monthly price. Pick banks that clearly explain joint options, then read the small print for extra cards and users.",
    };
  }

  const heavyIntl =
    inputs.sendsMoneyAbroad === "monthly" ||
    inputs.sendsMoneyAbroad === "frequently" ||
    inputs.currenciesNeeded !== "EUR_only";

  if (heavyIntl && inputs.includeTransferProviders && (inputs.needsDutchSalaryAccount || inputs.needsIdeal)) {
    const digitalLean =
      inputs.priority === "international_features" ||
      inputs.userType === "international_professional" ||
      inputs.riskTolerance === "comfortable_digital";
    if (digitalLean && inputs.includeDigitalBanks) {
      return {
        kind: "digital_plus_transfer_provider",
        title: "Everyday digital account plus a transfer app",
        body: "Many people use a clear transfer app for money abroad next to a Dutch everyday account. Before you move bills, check that salary and iDEAL still work on the main account you pick.",
      };
    }
    return {
      kind: "traditional_plus_transfer_provider",
      title: "Dutch bank for daily life plus a transfer app",
      body: "A well-known Dutch account for salary, rent, and iDEAL, plus a transfer service when you send other currencies. Our order is a rough guide — always compare what actually arrives in the recipient’s currency.",
    };
  }

  if (context && inputs.showHybridRecommendation && context.hasTraditional && context.hasDigital) {
    const second = context.secondProviderType;
    const tTop = context.topProviderType === "traditional" || second === "traditional";
    const dTop = context.topProviderType === "digital" || second === "digital";
    if (tTop && dTop) {
      return {
        kind: "hybrid",
        title: "Mix of classic Dutch bank and app-first bank",
        body: "Your best matches blend old and new-style banks. Many expats keep a Dutch everyday account and add an app for travel money or pots. Ask your employer and landlord what they accept before you rely only on the second account.",
      };
    }
  }

  if (context?.topProviderType === "traditional") {
    return {
      kind: "traditional_only",
      title: "Lean toward a classic Dutch bank",
      body: "Your answers point to a full-service Dutch bank — often strong for salary, rent, and getting help by phone or branch. “Classic” does not always mean cheapest: still read the fee list.",
    };
  }

  if (context?.topProviderType === "digital") {
    return {
      kind: "digital_only",
      title: "Lean toward an app-first bank",
      body: "Your answers point to a bank built around the phone app — often quick to open and handy abroad. Still check iDEAL, salary, and direct debits on the exact Dutch product you want.",
    };
  }

  if (inputs.userType === "new_arrival" && inputs.alreadyHasBSN !== "yes" && inputs.includeDigitalBanks) {
    return {
      kind: "digital_only",
      title: "You might start with a digital bank",
      body: "If you do not have a BSN yet, an app-first bank can sometimes get you a card sooner. When you finish town hall steps, you can revisit a bigger Dutch bank if you need one.",
    };
  }

  if (inputs.riskTolerance === "wants_established_bank" && inputs.expectedStay === "long_term" && inputs.includeTraditionalBanks) {
    return {
      kind: "traditional_only",
      title: "Favour a big-name Dutch bank",
      body: "You said you prefer a well-known bank and a long stay — that often fits a large Dutch retail bank. Compare only the extras you will really use.",
    };
  }

  if (inputs.showHybridRecommendation && inputs.includeTraditionalBanks && inputs.includeDigitalBanks) {
    return {
      kind: "hybrid",
      title: "You left both classic and digital banks on",
      body: "Many people use a Dutch everyday account plus a second app for travel money or budgeting. Use the scores to decide who to read about next — then read each bank’s official fees, not ads.",
    };
  }

  return {
    kind: "hybrid",
    title: "Shortlist a few and compare",
    body: "No one pattern wins on every point. Use the scores and checklist, then check rules and prices on each bank’s own website.",
  };
}
