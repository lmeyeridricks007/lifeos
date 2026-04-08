/**
 * Worked examples for the Healthcare Allowance Estimator page (editorial cards).
 * Keep wording consistent with the engine: plateau + linear taper, thresholds, proration.
 */

export type HealthcareWorkedExample = {
  id: string;
  title: string;
  body: string;
  /** Short eyebrow / tag for the card. */
  tag: string;
};

export const healthcareWorkedExamples: readonly HealthcareWorkedExample[] = [
  {
    id: "single-lower-income",
    tag: "Single expat · low income",
    title: "Single expat on a lower income (insured all year)",
    body:
      "Income sits in the lower part of the ceiling and 1 January assets stay modest. The model keeps the illustrative monthly allowance at the public maximum through the plateau, then only tapers as income rises — you usually see a strong allowance line and a much lower net premium than gross.",
  },
  {
    id: "single-near-threshold",
    tag: "Single · near income limit",
    title: "Single person close to the zorgtoeslag income limit",
    body:
      "Even while still under the single threshold, the taper shrinks the estimate sharply near the top. That mirrors why real awards feel small just before they disappear — a raise or bonus can push you over the income limit and drop the estimate to zero quickly.",
  },
  {
    id: "partner-over-combined",
    tag: "Couple · over combined threshold",
    title: "Couple with combined income above the partner ceiling",
    body:
      "With a toeslagpartner included, we add incomes and test against the higher partner limit. Above that combined line the hard screen sets allowance to zero — partner pay counts even when your own salary looks moderate.",
  },
  {
    id: "assets-over-cap",
    tag: "High assets · modest income",
    title: "High 1 January assets but modest annual income",
    body:
      "Low taxable income does not help if savings and investments on 1 January cross the asset limit. The planner blocks allowance to reflect that test; it is about balance-sheet wealth on the reference date, not how tight cash feels month to month.",
  },
  {
    id: "mid-year-start",
    tag: "Mid-year arrival",
    title: "Arrived mid-year — fewer insured months",
    body:
      "Insurance from mid-year means fewer allowance months in the calendar year. The monthly rate can look like a full-year case at the same income, but prorated annual totals are lower — use prorated vs 12 months in results to compare both views.",
  },
] as const;

/** @deprecated Use `healthcareWorkedExamples` / `HealthcareWorkedExample`. */
export const healthcareAllowanceWorkedExamples = healthcareWorkedExamples;
/** @deprecated Use `HealthcareWorkedExample`. */
export type HealthcareAllowanceWorkedExample = HealthcareWorkedExample;
