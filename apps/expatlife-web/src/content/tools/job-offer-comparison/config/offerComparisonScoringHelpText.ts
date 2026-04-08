/**
 * Help copy for scores, topic cards, and results — honest about tool limits.
 * Use next to tables, tooltips, or collapsible “What do these numbers mean?”.
 */

export type StructuredScoreDimensionKey =
  | "compensation"
  | "estimatedNetPay"
  | "benefits"
  | "securityStability"
  | "expatSupport"
  | "contractQuality"
  | "commuteLifestyle"
  | "affordabilityAfterCosts"
  | "totalPackageComposite";

export type OfferComparisonStructuredScoreHelp = {
  readonly key: StructuredScoreDimensionKey;
  readonly label: string;
  /** One line under the score in UI */
  readonly shortHelp: string;
  /** What the score is not */
  readonly notThis: string;
};

export type OfferComparisonDecisionLensHelp = {
  readonly lensId:
    | "best_take_home"
    | "best_total_package"
    | "best_security"
    | "best_benefits"
    | "best_expat_support"
    | "best_affordability"
    | "best_commute_lifestyle";
  readonly title: string;
  readonly shortHelp: string;
  readonly notThis: string;
};

export type OfferComparisonScoringHelpTextConfig = {
  readonly resultsSectionLead: string;
  readonly detailedScoreTableIntro: string;
  readonly structuredScores: readonly OfferComparisonStructuredScoreHelp[];
  readonly decisionLenses: readonly OfferComparisonDecisionLensHelp[];
  readonly prioritiesIntro: string;
  readonly prioritiesHonest: string;
  readonly topRecommendationIntro: string;
  readonly confidenceExplainer: string;
  readonly hiddenCostsIntro: string;
  readonly negotiationQuestionsIntro: string;
  readonly whatWouldChangeIntro: string;
};

export const OFFER_COMPARISON_SCORING_HELP_TEXT: OfferComparisonScoringHelpTextConfig = {
  resultsSectionLead:
    "Results rank offers using your inputs and priorities. Scores are only compared across the offers in this run — they are not national percentiles and not payroll guarantees.",

  detailedScoreTableIntro:
    "0–100 columns are tool scores for this comparison only. Abbreviations: Comp = compensation, Ben = benefits, Sec = security/stability, Exp = expat support, Life = commute/lifestyle, Aff = affordability after estimated rent and costs. Higher is better within each column’s definition.",

  structuredScores: [
    {
      key: "compensation",
      label: "Compensation",
      shortHelp: "Recurring cash vs the other offers here (gross basis, bonus type, allowance hints).",
      notThis: "Not a market benchmark for your role or industry.",
    },
    {
      key: "estimatedNetPay",
      label: "Estimated net pay",
      shortHelp: "Indicative monthly net from the shared salary calculator path for each offer.",
      notThis: "Not your actual payslip; pensionable salary and personal credits can move the real number.",
    },
    {
      key: "benefits",
      label: "Benefits",
      shortHelp: "Checklist-style signal from pension text, allowances, leave, equipment, training, wellness fields.",
      notThis: "Not a euro valuation of each benefit or a comparison of fund performance.",
    },
    {
      key: "securityStability",
      label: "Security / stability",
      shortHelp: "Contract type, notice, probation, renewal hints — practical continuity signals.",
      notThis: "Not a legal ruling on job security or dismissal risk.",
    },
    {
      key: "expatSupport",
      label: "Expat support",
      shortHelp: "Visa sponsorship, 30% ruling support level, relocation, tax help, housing/move budget toggles.",
      notThis: "Not IND approval, not ruling eligibility, not a promise of employer performance.",
    },
    {
      key: "contractQuality",
      label: "Contract quality",
      shortHelp: "Lower score = more warning flags from your answers (non-compete, overtime bundle, etc.).",
      notThis: "Not a contract review; clause meaning needs text + lawyer when material.",
    },
    {
      key: "commuteLifestyle",
      label: "Commute / lifestyle",
      shortHelp: "Work mode plus commute days and mode — lighter office burden scores higher.",
      notThis: "Not door-to-door minutes for your exact address.",
    },
    {
      key: "affordabilityAfterCosts",
      label: "Affordability after costs",
      shortHelp: "Relative score using estimated net minus typical rent and city/commute pressure.",
      notThis: "Not a full household budget or childcare cost model.",
    },
    {
      key: "totalPackageComposite",
      label: "Total package composite",
      shortHelp: "Combines the dimensions above using your priority settings into one overall “fit” number.",
      notThis: "Not an objective truth — change priorities and the composite changes.",
    },
  ],

  decisionLenses: [
    {
      lensId: "best_take_home",
      title: "Best take-home pay",
      shortHelp: "Which offer shows the highest estimated monthly take-home in this comparison.",
      notThis: "Not post-pension-contribution optimisation or year-end tax settlement.",
    },
    {
      lensId: "best_total_package",
      title: "Best total package",
      shortHelp: "Which offer leads on the combined overall score for this comparison.",
      notThis: "Not a valuation of equity or perks not captured in the form.",
    },
    {
      lensId: "best_security",
      title: "Best security / stability",
      shortHelp: "Which offer scores higher on contract continuity signals you entered.",
      notThis: "Not legal advice on dismissal protection or CAO outcomes.",
    },
    {
      lensId: "best_benefits",
      title: "Best benefits",
      shortHelp: "Which offer has the stronger benefits checklist signal.",
      notThis: "Not a pension advice recommendation.",
    },
    {
      lensId: "best_expat_support",
      title: "Best expat support",
      shortHelp: "Which offer scores higher on visa, ruling, relocation, and related toggles.",
      notThis: "Not a guarantee the employer will execute well — only what you entered.",
    },
    {
      lensId: "best_affordability",
      title: "Best affordability after living costs",
      shortHelp: "Which offer leaves more take-home after rent and city/commute estimates in this scenario.",
      notThis: "Not verified rent quotes or actual commuting expenses.",
    },
    {
      lensId: "best_commute_lifestyle",
      title: "Best commute / lifestyle fit",
      shortHelp: "Which offer fits hybrid/remote and lighter commute inputs better.",
      notThis: "Not a time study of your real commute chain.",
    },
  ],

  prioritiesIntro:
    "Low / Medium / High tells the tool how much each topic should move the overall score compared with the others.",

  prioritiesHonest:
    "There is no universally correct weighting — only what matches your horizon (e.g. two-year adventure vs long-term family stability).",

  topRecommendationIntro:
    "The top line is the offer that ranks highest with your priorities — phrased as planning help, not a recommendation to sign.",

  confidenceExplainer:
    "“Close call” means overall scores are almost tied — small changes to what you entered can swap the order. “Clear favourite” means a wider gap with your current settings; you should still read the topic cards and the actual contract.",

  hiddenCostsIntro:
    "Hidden costs are plain-language heads-ups from your inputs — useful when talking to HR, not a line-by-line invoice.",

  negotiationQuestionsIntro:
    "Questions are prompts you can paste or adapt for email — they do not assume any clause is illegal or unenforceable without review.",

  whatWouldChangeIntro:
    "These lines describe what could flip the ranking if inputs or priorities shift — scenario planning, not predictions of employer behaviour.",
};
