/**
 * Catalogue of contract-side risk flags surfaced in results.
 * Parity: messages are aligned with `src/lib/tools/job-offer-comparison/contractSignals.ts` (scoreContractSignals).
 * If you change wording here, consider updating the engine for UI consistency.
 *
 * Severity matches `RiskFlag.severity` in types: info | watch | strong
 */

export type OfferComparisonRiskFlagSeverity = "info" | "watch" | "strong";

export type OfferComparisonRiskFlagDefinition = {
  /** Stable id — may match hidden-cost or engine branches where applicable */
  readonly id: string;
  readonly severity: OfferComparisonRiskFlagSeverity;
  /**
   * Typical user-facing message (engine may interpolate numbers, e.g. probation months).
   * When the engine uses a template, keep meaning aligned with this text.
   */
  readonly exampleMessage: string;
  /** Plain language for editors / CMS */
  readonly triggerSummary: string;
  /** Separates planning signal from legal/tax claim */
  readonly planningOnlyNote: string;
  readonly suggestedUserAction: string;
};

export type OfferComparisonRiskFlagsConfig = {
  readonly sectionIntro: string;
  readonly flags: readonly OfferComparisonRiskFlagDefinition[];
};

export const OFFER_COMPARISON_RISK_FLAGS_CONFIG: OfferComparisonRiskFlagsConfig = {
  sectionIntro:
    "Risk highlights are based on fields you selected — practical planning flags only. They are not a legal classification, not a substitute for reading the contract, and not tax or immigration advice.",

  flags: [
    {
      id: "fixed-term",
      severity: "watch",
      exampleMessage: "Fixed-term: confirm renewal likelihood and notice.",
      triggerSummary: "Contract type is fixed-term.",
      planningOnlyNote: "Does not predict whether your employer will renew.",
      suggestedUserAction: "Ask HR for renewal criteria, notice, and sponsor implications in writing.",
    },
    {
      id: "contractor-structure",
      severity: "info",
      exampleMessage: "Contractor structure: check pension, leave, and bench risk.",
      triggerSummary: "Contract type is contractor / umbrella.",
      planningOnlyNote: "Does not calculate your true employer cost or VAT position.",
      suggestedUserAction: "Compare total reward with payroll using the employment type scenario tool and payroll advice.",
    },
    {
      id: "foreign-employer",
      severity: "watch",
      exampleMessage: "Foreign employer: confirm Dutch payroll / compliance and permit fit.",
      triggerSummary: "Contract type is remote foreign employer.",
      planningOnlyNote: "Does not determine lawful work structure or tax residency.",
      suggestedUserAction: "Map payroll, social security, and permit route with HR and a tax advisor.",
    },
    {
      id: "probation-long",
      severity: "info",
      exampleMessage: "Probation ~N months — confirm CAO / contract.",
      triggerSummary: "Probation months at or above a longer window (engine uses ≥ 3).",
      planningOnlyNote: "Does not state whether your probation length is lawful — CAO-specific.",
      suggestedUserAction: "Check contract and CAO maxima; negotiate if out of line for your level.",
    },
    {
      id: "notice-short",
      severity: "info",
      exampleMessage: "Short notice — check CAO minimums.",
      triggerSummary: "Employee notice period below one month in inputs.",
      planningOnlyNote: "Does not assess enforceability of notice clauses.",
      suggestedUserAction: "Compare with CAO and market norms; clarify garden leave rules.",
    },
    {
      id: "non-compete",
      severity: "strong",
      exampleMessage: "Non-compete present: review with counsel if material to you.",
      triggerSummary: "Non-compete field set to yes.",
      planningOnlyNote: "Presence in the form is not proof of scope, duration, or enforceability.",
      suggestedUserAction: "Use the contract scanner and an employment lawyer before signing if stakes are high.",
    },
    {
      id: "side-job-restrictions",
      severity: "watch",
      exampleMessage: "Side-job rules: confirm wording if you freelance.",
      triggerSummary: "Side-job restrictions set to yes.",
      planningOnlyNote: "Does not interpret whether restrictions are valid.",
      suggestedUserAction: "Ask for explicit consent process for freelance or advisory work.",
    },
    {
      id: "overtime-bundled",
      severity: "watch",
      exampleMessage: "Overtime bundled: ask expected hours and CAO.",
      triggerSummary: "Overtime included in salary set to yes.",
      planningOnlyNote: "Does not compute unpaid hours exposure.",
      suggestedUserAction: "Clarify expected hours, on-call, and CAO overtime rules.",
    },
    {
      id: "fixed-term-renewal-unlikely",
      severity: "watch",
      exampleMessage: "Fixed-term with low renewal: plan income gap risk.",
      triggerSummary: "Fixed-term plus renewal likely = no.",
      planningOnlyNote: "Does not predict end date or notice outcome.",
      suggestedUserAction: "Align end date with housing and permit timelines.",
    },
    {
      id: "hybrid-discretionary",
      severity: "info",
      exampleMessage: "Attendance policy discretionary — confirm expectations.",
      triggerSummary: "Hybrid or remote work mode but hybrid policy not fixed in inputs.",
      planningOnlyNote: "Does not know future RTO policy changes.",
      suggestedUserAction: "Ask for written minimum remote days or location expectations.",
    },
    {
      id: "relocation-clawback",
      severity: "strong",
      exampleMessage: "Relocation clawback: confirm triggers and amounts.",
      triggerSummary: "Relocation repayment / clawback set to yes.",
      planningOnlyNote: "Does not state legal validity of clawback terms.",
      suggestedUserAction: "Get repayment schedule, interest, and pro-rata rules in the offer letter.",
    },
  ],
};
