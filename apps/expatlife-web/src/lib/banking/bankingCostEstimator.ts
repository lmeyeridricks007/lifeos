import {
  bankingCostAssumptions,
  type BankingCostAssumptions,
  type BankingCostEuroBand,
} from "@/src/data/banking/bankingCostAssumptions";
import {
  getBankingCostProviderFeeConfig,
  isBankingProviderFeeConfigActionable,
  type ProviderFeeConfig,
} from "@/src/data/banking/bankingProviderFeeConfig";

export type { BankingCostAssumptions, BankingCostEuroBand } from "@/src/data/banking/bankingCostAssumptions";
export { bankingCostAssumptions } from "@/src/data/banking/bankingCostAssumptions";
export type { ProviderFeeConfig } from "@/src/data/banking/bankingProviderFeeConfig";
export {
  bankingCostProviderFeeRegistry,
  getBankingCostProviderFeeConfig,
  isBankingProviderFeeConfigActionable,
} from "@/src/data/banking/bankingProviderFeeConfig";

export type BankingCostUserType =
  | "new_arrival"
  | "employee"
  | "student"
  | "freelancer_zzp"
  | "family"
  | "international_professional"
  | "short_term_stay";

export type BankingCostSetupType = "traditional_only" | "digital_only" | "hybrid" | "not_sure";

export type BankingCostAccountCount = "one" | "two" | "three_or_more";

export type BankingCostMonthlyAccountFee =
  | "free_or_unknown"
  | "low"
  | "medium"
  | "high"
  | "custom_amount";

export type BankingCostExtraCards = "none" | "one" | "two_or_more";

export type BankingCostPremiumPlan = "none" | "basic" | "premium" | "unknown";

export type BankingCostAtmWithdrawals = "none" | "one_to_two" | "three_to_five" | "frequent";

export type BankingCostForeignCardUse = "never" | "occasional" | "monthly" | "frequent";

export type BankingCostSendsAbroad = "never" | "occasionally" | "monthly" | "frequently";

export type BankingCostTransferAmount =
  | "under_250"
  | "250_to_1000"
  | "1000_to_5000"
  | "over_5000"
  | "custom_amount";

export type BankingCostCurrencies = "EUR_only" | "EUR_plus_home_currency" | "multiple_currencies";

export type BankingCostFreelancerVolume = "not_applicable" | "low" | "medium" | "high";

export type BankingCostFamilyShared = "not_applicable" | "low" | "medium" | "high";

/**
 * When `true`, {@link estimateBankingCosts} may replace generic editorial bands with
 * {@link ProviderFeeConfig}-backed numeric slices once mapping exists. **Leave false** until
 * provider→engine translation is implemented and reviewed — sourced configs alone are not enough.
 */
export const BANKING_COST_PROVIDER_ENGINE_ENABLED = false;

/** Full questionnaire payload for {@link estimateBankingCosts}. */
export type BankingCostEstimatorInputs = {
  /**
   * Optional future lens aligned with bank catalog ids (e.g. `ing`). **Not exposed in UI** until
   * the provider fee registry contains a sourced `ProviderFeeConfig` and the provider engine merges it.
   * When set without a complete registry row, the estimator keeps generic bands.
   */
  providerId?: string;
  userType: BankingCostUserType;
  setupType: BankingCostSetupType;
  accountCount: BankingCostAccountCount;
  needsBusinessAccount: boolean;
  needsJointAccount: boolean;
  monthlyAccountFee: BankingCostMonthlyAccountFee;
  customMonthlyAccountFee?: number;
  extraCards: BankingCostExtraCards;
  creditCardNeeded: boolean;
  premiumPlan: BankingCostPremiumPlan;
  atmWithdrawalsPerMonth: BankingCostAtmWithdrawals;
  foreignCardUse: BankingCostForeignCardUse;
  travelsOften: boolean;
  sendsMoneyAbroad: BankingCostSendsAbroad;
  averageTransferAmount: BankingCostTransferAmount;
  customTransferAmount?: number;
  currenciesNeeded: BankingCostCurrencies;
  receivesInternationalPayments: boolean;
  freelancerTransactionVolume: BankingCostFreelancerVolume;
  invoicingOrAccountingIntegrationNeeded: boolean;
  familySharedCosts: BankingCostFamilyShared;
  wantsLowestCost: boolean;
  wantsConvenienceOverLowestCost: boolean;
};

export type BankingCostBreakdownConfidence = "low" | "medium" | "high";

export type BankingCostBreakdownItem = {
  key: string;
  label: string;
  monthlyLow: number;
  monthlyHigh: number;
  yearlyLow: number;
  yearlyHigh: number;
  explanation: string;
  confidence: BankingCostBreakdownConfidence;
};

export type BankingCostWarning = {
  id: string;
  message: string;
};

export type BankingRecommendedSetup = {
  title: string;
  body: string;
};

export type BankingCostAssumptionSource = "generic_editorial" | "provider_profile";

export type BankingCostEstimateResult = {
  monthlyLowEstimate: number;
  monthlyHighEstimate: number;
  yearlyLowEstimate: number;
  yearlyHighEstimate: number;
  currency: "EUR";
  breakdown: BankingCostBreakdownItem[];
  biggestCostDrivers: string[];
  warnings: BankingCostWarning[];
  recommendedSetup: BankingRecommendedSetup;
  assumptionsUsed: string[];
  /** Which assumption track produced the numbers — `provider_profile` only when engine + sourced config are active. */
  costAssumptionSource: BankingCostAssumptionSource;
};

/** @deprecated Use {@link BankingCostEstimatorInputs} */
export type BankingCostEstimatorInput = BankingCostEstimatorInputs;

function toRange(b: BankingCostEuroBand): { low: number; high: number } {
  return { low: b[0], high: b[1] };
}

function addRanges(a: { low: number; high: number }, b: { low: number; high: number }): { low: number; high: number } {
  return { low: a.low + b.low, high: a.high + b.high };
}

function scaleRange(r: { low: number; high: number }, factor: number): { low: number; high: number } {
  return { low: r.low * factor, high: r.high * factor };
}

function yearlyFromMonthly(low: number, high: number): { yearlyLow: number; yearlyHigh: number } {
  return { yearlyLow: low * 12, yearlyHigh: high * 12 };
}

function breakdownItem(
  key: string,
  label: string,
  monthlyLow: number,
  monthlyHigh: number,
  explanation: string,
  confidence: BankingCostBreakdownConfidence,
): BankingCostBreakdownItem {
  const y = yearlyFromMonthly(monthlyLow, monthlyHigh);
  return {
    key,
    label,
    monthlyLow,
    monthlyHigh,
    yearlyLow: y.yearlyLow,
    yearlyHigh: y.yearlyHigh,
    explanation,
    confidence,
  };
}

/** Parse user-entered EUR amounts (strings from inputs or numbers). */
export function normalizeCustomAmount(value: unknown): number | null {
  if (value == null) return null;
  if (typeof value === "number") {
    if (Number.isNaN(value) || !Number.isFinite(value)) return null;
    return value;
  }
  if (typeof value === "string") {
    const t = value.trim().replace(",", ".");
    if (t === "") return null;
    const n = Number(t);
    if (Number.isNaN(n) || !Number.isFinite(n)) return null;
    return n;
  }
  return null;
}

export function getBankingCostAssumptions(): BankingCostAssumptions {
  return bankingCostAssumptions;
}

export function getBiggestCostDrivers(result: BankingCostEstimateResult): string[] {
  return [...result.breakdown]
    .map((row) => ({ label: row.label, score: row.monthlyHigh }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.label);
}

function transferAmountFactor(inputs: BankingCostEstimatorInputs): number {
  const cfg = bankingCostAssumptions.transferSizeMultiplier;
  const base = cfg[inputs.averageTransferAmount];
  if (inputs.averageTransferAmount !== "custom_amount") return base;
  const a = normalizeCustomAmount(inputs.customTransferAmount);
  if (a == null || a <= 0) return cfg.custom_amount;
  if (a < 250) return cfg.under_250;
  if (a < 1000) return cfg["250_to_1000"];
  if (a < 5000) return cfg["1000_to_5000"];
  return cfg.over_5000;
}

function resolveAccountFeeMonthly(inputs: BankingCostEstimatorInputs): { low: number; high: number } {
  const bands = bankingCostAssumptions.monthlyAccountFeeBands;
  if (inputs.monthlyAccountFee === "custom_amount") {
    const eur = normalizeCustomAmount(inputs.customMonthlyAccountFee);
    if (eur == null || eur < 0) return toRange(bands.free_or_unknown);
    const slack = Math.max(1.5, eur * 0.12);
    return { low: Math.max(0, eur - slack), high: eur + slack };
  }
  return toRange(bands[inputs.monthlyAccountFee]);
}

function accountCountMultiplier(inputs: BankingCostEstimatorInputs): number {
  let m = bankingCostAssumptions.accountCountMultiplier[inputs.accountCount];
  if (inputs.setupType === "hybrid" && inputs.accountCount === "one") {
    m *= bankingCostAssumptions.hybridImplicitAccountFeeFactor;
  }
  return m;
}

function resolveBusinessMonthly(inputs: BankingCostEstimatorInputs): { low: number; high: number } {
  const biz = bankingCostAssumptions.businessAccount;
  const needsBiz = inputs.needsBusinessAccount || inputs.userType === "freelancer_zzp";
  if (!needsBiz) return toRange(biz.off);
  const vol = inputs.freelancerTransactionVolume;
  if (vol === "not_applicable" || vol === "low") return toRange(biz.on_low);
  if (vol === "medium") return toRange(biz.on_medium);
  return toRange(biz.on_high);
}

function confidenceForKey(key: string): BankingCostBreakdownConfidence {
  if (key === "accountPackage" || key === "extraCards") return "high";
  if (key === "internationalTransfers" || key === "fxRisk") return "low";
  if (key === "atmCardUse" || key === "creditCard" || key === "businessZzp") return "medium";
  return "medium";
}

/** Resolved provider registry row + sourcing gate (does not imply numeric overrides are active). */
export type BankingCostProviderContext = {
  requestedProviderId: string | undefined;
  config: ProviderFeeConfig | undefined;
  /** Config row exists and passes {@link isBankingProviderFeeConfigActionable}. */
  providerProfileSourced: boolean;
};

function resolveBankingCostProviderContext(inputs: BankingCostEstimatorInputs): BankingCostProviderContext {
  const requestedProviderId = inputs.providerId?.trim() || undefined;
  if (!requestedProviderId) {
    return { requestedProviderId: undefined, config: undefined, providerProfileSourced: false };
  }
  const config = getBankingCostProviderFeeConfig(requestedProviderId);
  if (!config) {
    return { requestedProviderId, config: undefined, providerProfileSourced: false };
  }
  return {
    requestedProviderId,
    config,
    providerProfileSourced: isBankingProviderFeeConfigActionable(config),
  };
}

/** When non-null, provider-specific numeric slices may replace parts of the generic model. */
type BankingCostProviderEngineOverrides = {
  accountMonthly?: { low: number; high: number };
};

/**
 * Maps a sourced {@link ProviderFeeConfig} + questionnaire into concrete monthly EUR bands.
 * Returns `null` until implemented — keep {@link BANKING_COST_PROVIDER_ENGINE_ENABLED} false in production until then.
 */
function buildBankingCostProviderEngineOverrides(
  ctx: BankingCostProviderContext,
  _inputs: BankingCostEstimatorInputs,
): BankingCostProviderEngineOverrides | null {
  if (!ctx.providerProfileSourced || !ctx.config || !BANKING_COST_PROVIDER_ENGINE_ENABLED) return null;
  // Reserved: combine ctx.config.monthlyFeeRange, cardFeeRange, and pattern strings with usage inputs.
  return null;
}

function collectAssumptionsUsed(
  inputs: BankingCostEstimatorInputs,
  providerCtx: BankingCostProviderContext,
  providerAssumptionsActive: boolean,
): string[] {
  const a = bankingCostAssumptions;
  const lines: string[] = [
    `Planning ranges last checked ${a.documented.lastChecked} (${a.documented.sourceKey}) — not live bank prices.`,
    `Monthly fee choice in the form: ${inputs.monthlyAccountFee}`,
    `Adjustment for number of accounts you run: ×${accountCountMultiplier(inputs).toFixed(2)}`,
  ];
  if (inputs.setupType === "hybrid") {
    lines.push(
      "Hybrid setup: with one everyday account we still add a small bump, because many people pair a Dutch bank with a second app or product.",
    );
    if (inputs.sendsMoneyAbroad === "monthly" || inputs.sendsMoneyAbroad === "frequently") {
      lines.push(
        "Hybrid setup and regular sends abroad: we slightly lower the transfer-fee part of the band, assuming some sends go through a specialist app.",
      );
    }
  }
  if (providerCtx.requestedProviderId) {
    if (!providerCtx.config) {
      lines.push(
        `Bank id "${providerCtx.requestedProviderId}" — no saved fee profile in our list yet, so we still use general ranges (not bank-specific).`,
      );
    } else if (!providerCtx.providerProfileSourced) {
      lines.push(
        `Bank id "${providerCtx.requestedProviderId}" — profile draft is incomplete, so we still use general ranges until it is fully sourced.`,
      );
    } else if (!providerAssumptionsActive) {
      lines.push(
        `Saved fee profile for "${providerCtx.config.providerId}" (${providerCtx.config.sourceKey}, checked ${providerCtx.config.lastChecked}) — general ranges still used until we wire bank-specific numbers into the tool.`,
      );
    } else {
      lines.push(
        `Bank-specific fee profile in use: ${providerCtx.config.providerId} (${providerCtx.config.sourceKey}, checked ${providerCtx.config.lastChecked}).`,
      );
    }
  }
  return lines;
}

export function estimateBankingCosts(inputs: BankingCostEstimatorInputs): BankingCostEstimateResult {
  const cfg = bankingCostAssumptions;
  const providerCtx = resolveBankingCostProviderContext(inputs);
  const providerOverrides = buildBankingCostProviderEngineOverrides(providerCtx, inputs);
  const providerAssumptionsActive =
    providerOverrides != null && Object.keys(providerOverrides).length > 0;

  let accountM = resolveAccountFeeMonthly(inputs);
  if (providerOverrides?.accountMonthly) {
    accountM = providerOverrides.accountMonthly;
  }
  accountM = scaleRange(accountM, accountCountMultiplier(inputs));
  if (inputs.premiumPlan === "unknown" && inputs.wantsLowestCost) {
    accountM = scaleRange(accountM, cfg.wantsLowestCostTightenFactor);
  }

  const extraM = toRange(cfg.extraCards[inputs.extraCards]);
  let ccM = inputs.creditCardNeeded ? toRange(cfg.creditCard.on) : toRange(cfg.creditCard.off);
  if (inputs.creditCardNeeded && inputs.wantsLowestCost) ccM = scaleRange(ccM, 0.85);

  let premM = toRange(cfg.premiumPlan[inputs.premiumPlan]);
  if (inputs.premiumPlan === "unknown" && inputs.wantsLowestCost) {
    premM = scaleRange(premM, cfg.wantsLowestCostTightenFactor);
  }

  let atmM = toRange(cfg.atmUsage[inputs.atmWithdrawalsPerMonth]);
  atmM = addRanges(atmM, toRange(cfg.foreignCardUplift[inputs.foreignCardUse]));
  if (inputs.travelsOften) atmM = addRanges(atmM, toRange(cfg.travelUplift));

  let xferM = toRange(cfg.internationalTransfers[inputs.sendsMoneyAbroad]);
  xferM = scaleRange(xferM, transferAmountFactor(inputs));
  if (inputs.sendsMoneyAbroad === "never") {
    xferM = { low: Math.min(xferM.low, 1), high: Math.min(xferM.high, 2) };
  }
  if (inputs.setupType === "hybrid" && (inputs.sendsMoneyAbroad === "monthly" || inputs.sendsMoneyAbroad === "frequently")) {
    xferM = scaleRange(xferM, cfg.hybridTransferRiskReductionFactor);
  }

  let fxM = toRange(cfg.fxRisk[inputs.currenciesNeeded]);
  if (inputs.sendsMoneyAbroad === "monthly" || inputs.sendsMoneyAbroad === "frequently") {
    fxM = addRanges(fxM, toRange([1, 8]));
  }
  if (inputs.foreignCardUse === "frequent" || inputs.foreignCardUse === "monthly") {
    fxM = addRanges(fxM, toRange([0, 6]));
  }
  if (inputs.receivesInternationalPayments) {
    fxM = addRanges(fxM, toRange(cfg.receivesInternationalInUplift));
  }
  if (inputs.averageTransferAmount === "over_5000" || inputs.averageTransferAmount === "1000_to_5000") {
    fxM = addRanges(fxM, toRange(cfg.fxHighAmountUplift));
  }
  if (inputs.averageTransferAmount === "custom_amount") {
    const amt = normalizeCustomAmount(inputs.customTransferAmount);
    if (amt != null && amt >= 1000) {
      fxM = addRanges(fxM, scaleRange(toRange(cfg.fxHighAmountUplift), amt >= 5000 ? 1.15 : 0.85));
    }
  }

  let bizM = resolveBusinessMonthly(inputs);
  if (inputs.invoicingOrAccountingIntegrationNeeded && (inputs.needsBusinessAccount || inputs.userType === "freelancer_zzp")) {
    bizM = addRanges(bizM, toRange(cfg.invoicingUplift));
  }

  let jointM = toRange(cfg.jointFamilyExtras.not_applicable);
  if (inputs.needsJointAccount || inputs.userType === "family") {
    jointM = addRanges(jointM, toRange(cfg.jointAccountBaseUplift));
  }
  if (inputs.familySharedCosts !== "not_applicable") {
    jointM = addRanges(jointM, toRange(cfg.jointFamilyExtras[inputs.familySharedCosts]));
  }

  let convM = toRange([0, 0] as BankingCostEuroBand);
  if (inputs.wantsConvenienceOverLowestCost) convM = toRange(cfg.convenienceUplift);

  const rawRows: BankingCostBreakdownItem[] = [
    breakdownItem(
      "accountPackage",
      "Account / package",
      accountM.low,
      accountM.high,
      "Typical monthly cost for the accounts you described — not a quote from one bank.",
      confidenceForKey("accountPackage"),
    ),
    breakdownItem(
      "extraCards",
      "Debit / extra cards",
      extraM.low,
      extraM.high,
      "Extra debit cards or paid card bundles beyond one free card.",
      confidenceForKey("extraCards"),
    ),
    breakdownItem(
      "creditCard",
      "Credit card",
      ccM.low,
      ccM.high,
      "If you want a paid credit card — check the bank’s own price list.",
      confidenceForKey("creditCard"),
    ),
    breakdownItem(
      "premiumPlan",
      "Premium plan add-ons",
      premM.low,
      premM.high,
      "Paid tiers with perks (travel cover, metal cards, etc.) you might not use fully.",
      confidenceForKey("premiumPlan"),
    ),
    breakdownItem(
      "atmCardUse",
      "ATM & card-in-person use",
      atmM.low,
      atmM.high,
      "Cash from ATMs and spending in other currencies — costs vary a lot by bank and country.",
      confidenceForKey("atmCardUse"),
    ),
    breakdownItem(
      "internationalTransfers",
      "International transfers (fee risk)",
      xferM.low,
      xferM.high,
      "Stated transfer fees only — the exchange rate can cost extra on top.",
      confidenceForKey("internationalTransfers"),
    ),
    breakdownItem(
      "fxRisk",
      "FX / currency conversion",
      fxM.low,
      fxM.high,
      "Changing euros to other currencies (or the other way around) — often the hidden part of the bill on large transfers.",
      confidenceForKey("fxRisk"),
    ),
    breakdownItem(
      "businessZzp",
      "Business / ZZP extras",
      bizM.low,
      bizM.high,
      "Extra costs for a business account, payment links, or higher payment volume.",
      confidenceForKey("businessZzp"),
    ),
    breakdownItem(
      "jointFamily",
      "Joint / family coordination",
      jointM.low,
      jointM.high,
      "Shared household bills, extra cards, or more than one everyday account.",
      confidenceForKey("jointFamily"),
    ),
    breakdownItem(
      "convenienceSlack",
      "Convenience preference (soft)",
      convM.low,
      convM.high,
      "Small extra allowance if you value support or app quality over the cheapest headline fee.",
      "low",
    ),
  ];

  const breakdown = rawRows.filter((row) => row.monthlyHigh > 0 || row.monthlyLow > 0);

  const monthlyLowEstimate = breakdown.reduce((s, r) => s + r.monthlyLow, 0);
  const monthlyHighEstimate = breakdown.reduce((s, r) => s + r.monthlyHigh, 0);

  const assumptionsUsed = collectAssumptionsUsed(inputs, providerCtx, providerAssumptionsActive);

  const base: BankingCostEstimateResult = {
    monthlyLowEstimate,
    monthlyHighEstimate,
    yearlyLowEstimate: monthlyLowEstimate * 12,
    yearlyHighEstimate: monthlyHighEstimate * 12,
    currency: "EUR",
    breakdown,
    biggestCostDrivers: [],
    warnings: [],
    recommendedSetup: { title: "", body: "" },
    assumptionsUsed,
    costAssumptionSource: providerAssumptionsActive ? "provider_profile" : "generic_editorial",
  };

  base.biggestCostDrivers = getBiggestCostDrivers(base);
  base.warnings = getBankingCostWarnings(inputs, base);
  base.recommendedSetup = getRecommendedCostSetup(inputs, base);

  return base;
}

export function getBankingCostWarnings(
  inputs: BankingCostEstimatorInputs,
  result: BankingCostEstimateResult,
): BankingCostWarning[] {
  const out: BankingCostWarning[] = [];

  const push = (id: string, message: string) => out.push({ id, message });

  if (inputs.sendsMoneyAbroad === "monthly" || inputs.sendsMoneyAbroad === "frequently") {
    push(
      "intl-fx-dominates",
      "If you send money abroad every month, a bad exchange rate can cost more than the transfer fee. Try a test send and compare how much money actually arrives.",
    );
  }
  if (inputs.setupType === "traditional_only" && (inputs.sendsMoneyAbroad === "frequently" || inputs.sendsMoneyAbroad === "monthly")) {
    push(
      "traditional-high-xfer",
      "Classic banks can charge a lot for frequent international transfers. Compare a specialist transfer service before you route everything through one account.",
    );
  }
  if (inputs.setupType === "digital_only" && (inputs.userType === "family" || inputs.needsJointAccount || inputs.userType === "employee")) {
    push(
      "digital-local-fit",
      "App-only banks can look cheap, but check they fit Dutch daily life: rent, salary, joint accounts, English help, and what your employer accepts.",
    );
  }
  if (inputs.premiumPlan === "premium" || inputs.premiumPlan === "basic") {
    push("premium-renewal", "Paid “premium” packages often renew at a higher price — set a calendar note before renewal.");
  }
  if (inputs.needsBusinessAccount || inputs.userType === "freelancer_zzp") {
    push(
      "business-tariff",
      "Business banking prices are listed separately from personal accounts. Check the business price list for cards, export rules, and any minimums.",
    );
  }
  if (inputs.extraCards !== "none" || inputs.needsJointAccount) {
    push("extra-cards", "Joint accounts and extra cards sometimes charge per card or per person — decide how many physical cards you really need.");
  }
  if (inputs.atmWithdrawalsPerMonth === "frequent" || inputs.foreignCardUse === "frequent") {
    push("atm-foreign", "Using foreign ATMs often can add fees that “free cash” ads do not mention, especially at night or on weekends.");
  }
  if (inputs.currenciesNeeded === "multiple_currencies") {
    push("multi-ccy", "Multi-currency accounts are handy, but rules for spending and auto-conversion differ — read the small print.");
  }
  if (inputs.travelsOften || inputs.foreignCardUse === "frequent") {
    push(
      "travel-fx-dcc",
      "When paying abroad, the terminal may offer to bill you in your home currency at a poor rate. If asked, it is usually cheaper to pay in the local currency and let your bank convert.",
    );
  }
  if (result.monthlyHighEstimate > 80) {
    push("high-stack", "Several cost types add up here — treat the high end of the range as a “bad month” test, not what you pay every month.");
  }

  if (inputs.foreignCardUse !== "never" || inputs.travelsOften) {
    push(
      "friction-dcc",
      "At foreign shops and ATMs, watch for prompts that convert the amount for you — they are often more expensive than paying in the local currency.",
    );
  }
  if (inputs.premiumPlan === "premium" || inputs.premiumPlan === "unknown") {
    push("friction-bundle-overlap", "Premium bundles may include travel or phone insurance you already buy elsewhere — avoid paying twice.");
  }
  if (inputs.needsBusinessAccount && inputs.userType !== "freelancer_zzp") {
    push("friction-mixed-use", "Running business income through a personal account can break bank rules — price is not the only risk.");
  }
  if (inputs.accountCount !== "one" && inputs.setupType !== "hybrid") {
    push("friction-multi-account", "Several everyday accounts can each trigger idle fees or minimum-use rules — be clear what each account is for.");
  }
  if (inputs.receivesInternationalPayments) {
    push("friction-inbound", "Money coming in from abroad can be delayed for checks or pass through extra middle banks — timing and fees vary.");
  }

  return out;
}

export function getRecommendedCostSetup(
  inputs: BankingCostEstimatorInputs,
  result: BankingCostEstimateResult,
): BankingRecommendedSetup {
  const hybridHint =
    "Many people use one regular Dutch account for salary, rent, and iDEAL, and add an app or transfer service for travel or money outside the euro zone. Always double-check fees on the bank’s own website.";

  if (inputs.needsBusinessAccount || inputs.userType === "freelancer_zzp") {
    return {
      title: "Keep business money separate from personal money",
      body: `Use everyday Dutch banking for life costs, and a clear setup for invoices and tax savings. ${hybridHint} This model suggests about €${Math.round(result.monthlyLowEstimate)}–€${Math.round(result.monthlyHighEstimate)} per month before big currency swings.`,
    };
  }

  if (inputs.setupType === "hybrid" || (inputs.sendsMoneyAbroad !== "never" && inputs.setupType === "traditional_only")) {
    return {
      title: "Mix a Dutch everyday account with a transfer specialist if needed",
      body: `${hybridHint} The biggest cost buckets in your answers: ${result.biggestCostDrivers.slice(0, 2).join(" · ") || "transfers and currency exchange"}.`,
    };
  }

  if (inputs.setupType === "digital_only" && inputs.wantsLowestCost) {
    return {
      title: "Digital bank, but check real-life fit",
      body: "App banks often show a low monthly fee. Still check you can get cash if you need it, that help is available in English, and that your employer is fine with the account.",
    };
  }

  if (inputs.setupType === "traditional_only") {
    return {
      title: "A well-known Dutch bank as the main account",
      body: "Large Dutch banks are widely accepted for rent and salary. Compare the full yearly cost of the package, not only the monthly headline price.",
    };
  }

  if (inputs.userType === "student" || inputs.userType === "short_term_stay") {
    return {
      title: "Keep it simple if your stay is short",
      body: "One clear everyday account and few paid extras is often enough. You can always add services later if you stay longer.",
    };
  }

  if (inputs.familySharedCosts !== "not_applicable" || inputs.needsJointAccount || inputs.userType === "family") {
    return {
      title: "Plan around shared household costs",
      body: "Joint bills and extra cards can make a fuller package worth it — try not to pay twice for the same insurance perk inside the bundle.",
    };
  }

  return {
    title: "Start simple and add paid extras only when you need them",
    body: `One everyday account, add paid features when real use shows you need them, and review bank prices once a year. ${hybridHint}`,
  };
}

export function getBankingCostNextSteps(inputs: BankingCostEstimatorInputs): string[] {
  const steps: string[] = [
    "Open each bank’s official price list (or fee tool in their app) for the week you plan to sign up — prices change.",
    "If you send money abroad, compare how much money actually arrives after fees and exchange rate — “free transfer” can still be expensive.",
    "Check that your account works the Dutch way your employer, landlord, and shops expect (for example iDEAL and direct debit).",
  ];
  if (inputs.needsBusinessAccount || inputs.needsJointAccount || inputs.userType === "freelancer_zzp") {
    steps.push("Business and joint accounts usually have a different price sheet from the personal homepage — read that PDF too.");
  }
  if (inputs.premiumPlan !== "none") {
    steps.push("Write down travel or phone insurance you already pay for, so you do not buy the same cover again inside a bank bundle.");
  }
  steps.push("Use the Bank Comparison Tool to shortlist, then confirm every detail on each bank’s own site.");
  return steps;
}

export function getBankingCostMethodologyLines(): string[] {
  const a = bankingCostAssumptions;
  return [
    `These numbers are planning ranges from our editorial tables (last reviewed ${a.documented.lastChecked}, ${a.documented.sourceKey}). They are not live quotes from any bank.`,
    "Banks change prices, packages, and exchange rates often. Read their official price list or in-app fee screen on the day you apply.",
    "Large transfers or uncommon currencies can cost much more than this band suggests — always check how much money really arrives on the other side.",
    "Partner links on other ExpatCopilot pages do not change how this calculator works.",
    "This page is for general planning only. It is not tax, immigration, legal, or personal financial advice.",
  ];
}

export function defaultBankingCostEstimatorInput(): BankingCostEstimatorInputs {
  return {
    userType: "new_arrival",
    setupType: "not_sure",
    accountCount: "one",
    needsBusinessAccount: false,
    needsJointAccount: false,
    monthlyAccountFee: "free_or_unknown",
    customMonthlyAccountFee: undefined,
    extraCards: "none",
    creditCardNeeded: false,
    premiumPlan: "none",
    atmWithdrawalsPerMonth: "one_to_two",
    foreignCardUse: "occasional",
    travelsOften: false,
    sendsMoneyAbroad: "occasionally",
    averageTransferAmount: "250_to_1000",
    customTransferAmount: undefined,
    currenciesNeeded: "EUR_plus_home_currency",
    receivesInternationalPayments: false,
    freelancerTransactionVolume: "not_applicable",
    invoicingOrAccountingIntegrationNeeded: false,
    familySharedCosts: "not_applicable",
    wantsLowestCost: true,
    wantsConvenienceOverLowestCost: false,
  };
}

export function getBankingCostEstimatorBlockers(inputs: BankingCostEstimatorInputs): string[] {
  const blockers: string[] = [];
  if (inputs.monthlyAccountFee === "custom_amount") {
    const v = normalizeCustomAmount(inputs.customMonthlyAccountFee);
    if (v == null || v < 0) {
      blockers.push("Please enter a monthly account fee in euros, or pick one of the preset fee bands.");
    }
  }
  if (inputs.averageTransferAmount === "custom_amount" && inputs.sendsMoneyAbroad !== "never") {
    const v = normalizeCustomAmount(inputs.customTransferAmount);
    if (v == null || v <= 0) {
      blockers.push("Please enter a typical transfer amount in euros, or pick one of the preset amount bands.");
    }
  }
  return blockers;
}
