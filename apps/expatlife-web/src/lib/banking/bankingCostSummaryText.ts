import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import {
  getBankingCostMethodologyLines,
  type BankingCostEstimateResult,
  type BankingCostEstimatorInputs,
} from "./bankingCostEstimator";

function eurRange(low: number, high: number): string {
  const a = Math.round(low);
  const b = Math.round(high);
  if (a === b) return `€${a}`;
  return `€${a}–€${b}`;
}

const USER_TYPE: Record<BankingCostEstimatorInputs["userType"], string> = {
  new_arrival: "New arrival",
  employee: "Employee",
  student: "Student",
  freelancer_zzp: "Freelancer / ZZP",
  family: "Family",
  international_professional: "International professional",
  short_term_stay: "Short stay",
};

const SETUP: Record<BankingCostEstimatorInputs["setupType"], string> = {
  traditional_only: "Traditional",
  digital_only: "Digital",
  hybrid: "Hybrid",
  not_sure: "Not sure",
};

const ACCOUNTS: Record<BankingCostEstimatorInputs["accountCount"], string> = {
  one: "One",
  two: "Two",
  three_or_more: "Three+",
};

const MONTHLY_FEE: Record<BankingCostEstimatorInputs["monthlyAccountFee"], string> = {
  free_or_unknown: "Free / unknown",
  low: "Low",
  medium: "Medium",
  high: "High",
  custom_amount: "Custom €",
};

const EXTRA_CARDS: Record<BankingCostEstimatorInputs["extraCards"], string> = {
  none: "None",
  one: "One extra",
  two_or_more: "Two+",
};

const PREMIUM: Record<BankingCostEstimatorInputs["premiumPlan"], string> = {
  none: "None",
  basic: "Basic add-on",
  premium: "Premium",
  unknown: "Not sure",
};

const ATM: Record<BankingCostEstimatorInputs["atmWithdrawalsPerMonth"], string> = {
  none: "Rarely / never",
  one_to_two: "1–2 / month",
  three_to_five: "3–5 / month",
  frequent: "Often",
};

const FOREIGN_CARD: Record<BankingCostEstimatorInputs["foreignCardUse"], string> = {
  never: "Never",
  occasional: "Sometimes",
  monthly: "Monthly",
  frequent: "Often",
};

const SEND_ABROAD: Record<BankingCostEstimatorInputs["sendsMoneyAbroad"], string> = {
  never: "Never",
  occasionally: "Sometimes",
  monthly: "Monthly",
  frequently: "Often",
};

const XFER_AMT: Record<BankingCostEstimatorInputs["averageTransferAmount"], string> = {
  under_250: "Under €250",
  "250_to_1000": "€250–1k",
  "1000_to_5000": "€1k–5k",
  over_5000: "Over €5k",
  custom_amount: "Custom €",
};

const CCY: Record<BankingCostEstimatorInputs["currenciesNeeded"], string> = {
  EUR_only: "EUR only",
  EUR_plus_home_currency: "EUR + home",
  multiple_currencies: "Multi-currency",
};

const BIZ_VOL: Record<BankingCostEstimatorInputs["freelancerTransactionVolume"], string> = {
  not_applicable: "N/A",
  low: "Low",
  medium: "Medium",
  high: "High",
};

const FAMILY_SHARED: Record<BankingCostEstimatorInputs["familySharedCosts"], string> = {
  not_applicable: "N/A",
  low: "Low",
  medium: "Medium",
  high: "High",
};

/** Human-readable lines for exports (clipboard / markdown) — not stored server-side. */
export function getBankingCostProfileSummaryLines(input: BankingCostEstimatorInputs): string[] {
  const lines: string[] = [];
  if (input.providerId?.trim()) {
    lines.push(
      `- **Bank id (optional, for future use):** ${input.providerId.trim()} — we still use our general cost ranges until a full bank fee profile is connected.`,
    );
  }
  lines.push(
    `- **Situation:** ${USER_TYPE[input.userType]}`,
    `- **Setup style:** ${SETUP[input.setupType]}`,
    `- **Everyday accounts:** ${ACCOUNTS[input.accountCount]}`,
    `- **Business / ZZP account:** ${input.needsBusinessAccount ? "Yes" : "No"}`,
    `- **Joint account:** ${input.needsJointAccount ? "Yes" : "No"}`,
    `- **Monthly account fee (guess):** ${MONTHLY_FEE[input.monthlyAccountFee]}${
      input.monthlyAccountFee === "custom_amount" && input.customMonthlyAccountFee != null
        ? ` (€${input.customMonthlyAccountFee})`
        : ""
    }`,
    `- **Extra debit cards:** ${EXTRA_CARDS[input.extraCards]}`,
    `- **Credit card (paid product):** ${input.creditCardNeeded ? "Yes" : "No"}`,
    `- **Premium plan:** ${PREMIUM[input.premiumPlan]}`,
    `- **ATM / cash (NL + abroad):** ${ATM[input.atmWithdrawalsPerMonth]}`,
    `- **Non-euro / foreign card spend:** ${FOREIGN_CARD[input.foreignCardUse]}`,
    `- **Travel often:** ${input.travelsOften ? "Yes" : "No"}`,
    `- **Send money abroad:** ${SEND_ABROAD[input.sendsMoneyAbroad]}`,
    `- **Typical send size (when sending):** ${XFER_AMT[input.averageTransferAmount]}${
      input.averageTransferAmount === "custom_amount" && input.customTransferAmount != null
        ? ` (€${input.customTransferAmount})`
        : ""
    }`,
    `- **Currencies needed:** ${CCY[input.currenciesNeeded]}`,
    `- **Receive international payments:** ${input.receivesInternationalPayments ? "Yes" : "No"}`,
    `- **Business transaction volume:** ${BIZ_VOL[input.freelancerTransactionVolume]}`,
    `- **Invoicing / accounting integration:** ${input.invoicingOrAccountingIntegrationNeeded ? "Yes" : "No"}`,
    `- **Shared household money friction:** ${FAMILY_SHARED[input.familySharedCosts]}`,
    `- **Optimise for lowest cost:** ${input.wantsLowestCost ? "Yes" : "No"}`,
    `- **Prefer convenience over lowest cost:** ${input.wantsConvenienceOverLowestCost ? "Yes" : "No"}`,
  );
  return lines;
}

const NO_STORAGE_LINE =
  "This summary is generated in your browser from your current selections. ExpatCopilot does not save your questionnaire on our servers." as const;

/**
 * Markdown summary for clipboard and `.md` download — planning-only, no PII beyond what the user chose to include in their own answers text.
 */
export function buildBankingCostSummaryMarkdown(opts: {
  input: BankingCostEstimatorInputs;
  result: BankingCostEstimateResult;
  nextSteps: readonly string[];
  shareUrl: string;
}): string {
  const { input, result, nextSteps, shareUrl } = opts;
  const profile = getBankingCostProfileSummaryLines(input).join("\n");
  const drivers = result.biggestCostDrivers.map((d) => `- ${d}`).join("\n");
  const warnings =
    result.warnings.length > 0
      ? result.warnings.map((w) => `- ${w.message}`).join("\n")
      : "- (none flagged for this run)";
  const steps = nextSteps.map((s) => `- ${s}`).join("\n");
  const breakdown = result.breakdown
    .map((b) => `- **${b.label}:** ${eurRange(b.monthlyLow, b.monthlyHigh)}/mo · ${eurRange(b.yearlyLow, b.yearlyHigh)}/yr`)
    .join("\n");
  const methodology = getBankingCostMethodologyLines().map((l) => `- ${l}`).join("\n");

  return [
    "# Banking cost estimate (planning only)",
    "",
    `**Tool:** [ExpatCopilot banking cost estimator](${shareUrl})`,
    "",
    "> Planning ranges only — not a price quote from any bank. Check each bank’s own website before you decide.",
    "",
    "## Selected profile",
    "",
    profile,
    "",
    "## Estimated ranges",
    "",
    `- **Monthly:** ${eurRange(result.monthlyLowEstimate, result.monthlyHighEstimate)}/month (${result.currency})`,
    `- **Yearly (about ×12):** ${eurRange(result.yearlyLowEstimate, result.yearlyHighEstimate)}/year (${result.currency})`,
    `- **Data source:** ${
      result.costAssumptionSource === "provider_profile"
        ? "Bank-specific fee profile (when enabled)"
        : "General editorial ranges (default)"
    }`,
    "",
    "## Top cost drivers",
    "",
    drivers,
    "",
    "## Hidden cost warnings",
    "",
    warnings,
    "",
    "## Recommended setup",
    "",
    `### ${result.recommendedSetup.title}`,
    "",
    result.recommendedSetup.body,
    "",
    "## Next-step checklist",
    "",
    steps,
    "",
    "## Category breakdown (monthly · yearly bands)",
    "",
    breakdown,
    "",
    "## Methodology & disclaimer",
    "",
    methodology,
    "",
    `- **Partner links:** ${AFFILIATE_LINKS_SCORING_DISCLAIMER} This estimator does not use affiliate metadata.`,
    "",
    `- **Privacy:** ${NO_STORAGE_LINE}`,
    "",
  ].join("\n");
}
