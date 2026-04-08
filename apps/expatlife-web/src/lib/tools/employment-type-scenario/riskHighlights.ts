/**
 * Risk flags are **planning prompts**, not value judgements.
 * Each flag has a stable `id` for analytics/tests and a `category` for grouping.
 */

import type {
  EmploymentScenarioId,
  EmploymentTypeScenarioInput,
  RiskHighlight,
  ScenarioDimensionScores,
  ScenarioRow,
} from "./types";

export function generateRiskHighlights(row: ScenarioRow, input: EmploymentTypeScenarioInput): RiskHighlight[] {
  const out: RiskHighlight[] = [];
  const id = row.scenarioId;
  const s = row.scores;

  const push = (h: RiskHighlight) => out.push(h);

  if (id === "fixed_term_employee") {
    push({
      id: "fixed-term-renewal",
      category: "security",
      message:
        "Worth considering renewal risk and how sponsorship or benefits tie to the current contract end date.",
    });
  }

  if (id === "contractor") {
    push({
      id: "contractor-project-stop",
      category: "income_volatility",
      message: "If projects pause, income continuity is usually less predictable than a steady payroll slip.",
    });
  }

  if (id === "zzp_self_employed") {
    push({
      id: "zzp-admin-tax",
      category: "admin",
      message: "ZZP-style work typically means more self-managed admin, VAT/bookkeeping, and tax positioning.",
    });
    if (input.unpaidDowntime === "high" || input.contractGapRisk === "high") {
      push({
        id: "zzp-volatility",
        category: "income_volatility",
        message: "Higher bench or gap risk in your inputs — income volatility is a planning trade-off to stress-test.",
      });
    }
  }

  if (id === "foreign_remote_employee") {
    push({
      id: "foreign-cross-border",
      category: "tax_complexity",
      message: "Foreign-employer payroll often adds cross-border withholding and social-coverage questions worth validating early.",
    });
  }

  if (input.visaSponsorship === "yes" && (id === "zzp_self_employed" || id === "foreign_remote_employee")) {
    push({
      id: "sponsor-vs-independent",
      category: "sponsorship",
      message: "Sponsorship-friendly narratives often lean employer-linked; independence or foreign payroll may need separate IND review.",
    });
  }

  if (input.rulingAssumption !== "no" && (id === "contractor" || id === "zzp_self_employed")) {
    push({
      id: "ruling-nonstandard",
      category: "tax_complexity",
      message: "30% ruling can be less straightforward outside classic Dutch employment — treat as a planning flag, not automatic.",
    });
  }

  if (id === "permanent_employee" && input.priorities.flexibilityIndependence > 60) {
    push({
      id: "perm-flex-tradeoff",
      category: "flexibility_tradeoff",
      message: "Strong flexibility priority vs permanent employment — you may be trading independence for bundled protections.",
    });
  }

  if (s.adminSimplicity < 45) {
    push({
      id: "admin-load",
      category: "admin",
      message: "Admin simplicity score is on the low side — budget provider fees or time alongside headline income.",
    });
  }

  if (s.benefits < 45 && input.priorities.benefitsProtections > 55) {
    push({
      id: "benefits-gap",
      category: "benefits",
      message: "Benefits score is modest while you weighted protections highly — compare pension, sick pay, and insurance explicitly.",
    });
  }

  if (s.stability < 50 && input.priorities.stabilitySecurity > 55) {
    push({
      id: "security-mismatch",
      category: "security",
      message: "Security score is relatively low for your stability weighting — check contract length, notice, and income buffers.",
    });
  }

  return dedupeRiskHighlights(out);
}

function dedupeRiskHighlights(items: RiskHighlight[]): RiskHighlight[] {
  const seen = new Set<string>();
  return items.filter((h) => {
    if (seen.has(h.id)) return false;
    seen.add(h.id);
    return true;
  });
}

/** Utility for tests: classify whether a scenario triggers income volatility language */
export function hasIncomeVolatilityFlag(highlights: RiskHighlight[]): boolean {
  return highlights.some((h) => h.category === "income_volatility");
}
