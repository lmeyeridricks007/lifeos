/**
 * Planning assumptions vs orientation facts for the Job Offer Comparison tool.
 * Use in disclaimers, “how it works”, and tooltips — never as legal/tax certainty.
 */

export type AssumptionKnowledgeKind =
  | "planning_model"
  /** User-typed or HR-supplied; tool does not verify */
  | "user_supplied"
  /** Public primary source — still not personalised advice */
  | "official_orientation";

export type OfferComparisonAssumptionBlock = {
  id: string;
  title: string;
  kind: AssumptionKnowledgeKind;
  /** Short line for badges / chips in UI */
  kindLabel: string;
  body: string;
  bullets?: readonly string[];
};

export type OfferComparisonAssumptionsConfig = {
  /** Shown near the tool; emphasise planning-only */
  pageSummary: string;
  /** Longer blocks for expandable “What this model assumes” */
  blocks: readonly OfferComparisonAssumptionBlock[];
  /** Explicit non-claims — bullet list for InfoBox / FAQ cross-link */
  notDeterminedByTool: readonly string[];
  /** Rent / COL — how anchors relate to the cost-of-living tool */
  rentAndColNote: string;
  /** Net pay — relationship to Dutch salary calculator */
  netPayModelNote: string;
  /** Contractor / foreign remote — planning discount wording */
  nonPayrollPathsNote: string;
};

export const OFFER_COMPARISON_ASSUMPTIONS: OfferComparisonAssumptionsConfig = {
  pageSummary:
    "This comparison uses the same estimated take-home rules as the Dutch salary calculator, typical mid-range rents from the cost-of-living tool unless you enter your own rent, and checklist scores for benefits and expat support. It is for structuring decisions and questions — not final payroll tax, not a contract review, and not an immigration decision.",

  blocks: [
    {
      id: "net-indicative",
      title: "Estimated net pay",
      kind: "planning_model",
      kindLabel: "Planning estimate",
      body: "Take-home figures follow the site’s salary calculator rules (wage tax, general credits, holiday allowance handling, bonus mode). Your payslip can differ because of pensionable salary definitions, payroll rounding, personal situations, and scheme-specific rules.",
    },
    {
      id: "benefits-scores",
      title: "Benefits and expat support scores",
      kind: "planning_model",
      kindLabel: "Checklist scores",
      body: "Benefits and expat support are scored from dropdowns and short text you enter. They reflect signals useful for comparison, not a market price for each perk and not a guarantee of what HR will deliver.",
    },
    {
      id: "contract-signals",
      title: "Contract and risk signals",
      kind: "planning_model",
      kindLabel: "Planning flags",
      body: "Contract fields highlight practical issues you flagged (fixed-term, non-compete mentioned, overtime bundled, and similar). They are not a legal label for your contract. Meaning and enforceability belong to the contract text and qualified advisors.",
    },
    {
      id: "rent-commute",
      title: "Rent, city, and commute",
      kind: "planning_model",
      kindLabel: "Directional affordability",
      body: "City and rent use typical mid-range figures or your optional rent budget. Commute uses simple monthly cost bands scaled by office days. The result shows “money left after estimated rent and commute” — not a full household budget.",
    },
    {
      id: "priorities",
      title: "Priority weights",
      kind: "user_supplied",
      kindLabel: "Your weights",
      body: "Low / Medium / High settings are turned into weights. The overall score only matches your life if those settings match how long you plan to stay, how much stability you need, and how you trade cash against commute.",
    },
    {
      id: "thirty-percent-toggle",
      title: "30% ruling support field",
      kind: "user_supplied",
      kindLabel: "Planning toggle",
      body: "“Yes”, “Best efforts”, “No”, and “Not mentioned” adjust estimated net and expat-support scoring. Eligibility and paperwork are personal; the tax office and a tax advisor decide what applies — this tool does not.",
      bullets: [
        "Employer “support” in an offer is not the same as approval of the facility.",
        "Use the 30% ruling calculator on this site for single-offer depth alongside this comparison.",
      ],
    },
  ],

  notDeterminedByTool: [
    "Whether a non-compete or repayment clause is enforceable",
    "Exact pension accrual or fund rules (read the pension brochure / HR)",
    "Immigration authority (IND) permit outcome or timeline",
    "Collective agreement (CAO) minima unless you apply them outside the tool",
    "Stock, RSU, or LTIP value (only free-text notes here)",
    "Cross-border social security and tax residency splits without advisor input",
  ],

  rentAndColNote:
    "When “use city rent assumptions” is on, figures align with the same city data as the cost-of-living calculator (typical mid-range rent). Enter your own monthly rent when you have a real number — that is often more honest than a generic city midpoint.",

  netPayModelNote:
    "Estimated net is useful for side-by-side direction and briefing advisors. It is not a final wage-tax figure, payslip prediction, or annual tax settlement.",

  nonPayrollPathsNote:
    "Contractor and foreign-remote employer paths apply conservative adjustments after the payroll-style estimate. Real umbrella or cross-border setups vary widely; treat these lines as conversation starters with payroll and tax specialists.",
};
