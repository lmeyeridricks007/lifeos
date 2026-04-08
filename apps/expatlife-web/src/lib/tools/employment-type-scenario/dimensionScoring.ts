/**
 * # Dimension scoring (deterministic, explainable)
 *
 * Each non-income dimension starts from a **scenario archetype** (0–100), then applies
 * **user-profile adjustments** with explicit reasons recorded in factorsIncreasing / factorsDecreasing.
 *
 * **Income** is different: it is derived only from **relative indicative net** within the active
 * comparison set: score = 100 × (net - min) / (max - min), or neutral 65 if spread is zero.
 *
 * **Overall** = weighted sum documented in `priorityWeights.ts`.
 */

import type {
  DimensionScoreDetail,
  EmploymentScenarioId,
  EmploymentTypeScenarioInput,
  PriorityWeightsNormalized,
  ScenarioDimensionScores,
} from "./types";

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

type Archetype = { security: number; flexibility: number; admin: number; benefits: number; expat: number };

const ARCHETYPE: Record<EmploymentScenarioId, Archetype> = {
  permanent_employee: { security: 93, flexibility: 36, admin: 90, benefits: 88, expat: 88 },
  fixed_term_employee: { security: 70, flexibility: 40, admin: 86, benefits: 82, expat: 84 },
  contractor: { security: 58, flexibility: 64, admin: 54, benefits: 46, expat: 62 },
  zzp_self_employed: { security: 44, flexibility: 92, admin: 34, benefits: 38, expat: 48 },
  foreign_remote_employee: { security: 62, flexibility: 58, admin: 38, benefits: 58, expat: 52 },
};

/**
 * Relative income score from indicative annual nets in the active scenario set.
 * Formula: 100 * (net[s] - min) / (max - min); if max=min, score = 65 (neutral band).
 */
export function computeRelativeIncomeScore(
  nets: Partial<Record<EmploymentScenarioId, number>>,
  scenarioId: EmploymentScenarioId
): DimensionScoreDetail {
  const vals = Object.values(nets).filter((n) => Number.isFinite(n)) as number[];
  const min = Math.min(...vals, 0);
  const max = Math.max(...vals, 1);
  const span = max - min;
  const v = nets[scenarioId];
  const factorsIncreasing: string[] = [];
  const factorsDecreasing: string[] = [];

  let score: number;
  if (!Number.isFinite(v)) {
    score = 50;
    factorsDecreasing.push("Net could not be ranked (missing or invalid money input).");
  } else if (span <= 0) {
    score = 65;
    factorsIncreasing.push("All compared scenarios share similar indicative net on these inputs — income rank is neutral.");
  } else {
    score = clamp(((v! - min) / span) * 100, 0, 100);
    if (score >= 75) factorsIncreasing.push("Indicative take-home is near the top of this comparison set.");
    if (score <= 35) factorsDecreasing.push("Indicative take-home is lower than other scenarios in this run.");
    if (score > 35 && score < 75) {
      factorsIncreasing.push("Mid-pack income vs other scenarios — sensitivity to fees/utilization still matters.");
    }
  }

  return { score, factorsIncreasing, factorsDecreasing };
}

/** Security / stability: contract certainty, bench risk, fixed-term vs long horizon. */
export function computeSecurityScore(id: EmploymentScenarioId, input: EmploymentTypeScenarioInput): DimensionScoreDetail {
  const base = ARCHETYPE[id].security;
  const factorsIncreasing: string[] = [`Archetype baseline (${id.replace(/_/g, " ")}): ${base}/100.`];
  const factorsDecreasing: string[] = [];
  let score = base;

  if ((id === "contractor" || id === "zzp_self_employed") && input.contractGapRisk === "high") {
    score -= 14;
    factorsDecreasing.push("High contract-gap risk reduces income continuity vs payroll.");
  } else if ((id === "contractor" || id === "zzp_self_employed") && input.contractGapRisk === "medium") {
    score -= 6;
    factorsDecreasing.push("Medium contract-gap risk — plan buffer between engagements.");
  }

  if (id === "fixed_term_employee" && input.workStabilityExpectation === "stable_long") {
    score -= 12;
    factorsDecreasing.push("You want long-term stability; fixed-term adds renewal uncertainty.");
  }

  if (id === "zzp_self_employed" && (input.unpaidDowntime === "high" || input.contractGapRisk === "high")) {
    factorsDecreasing.push("High bench/downtime assumptions reinforce income volatility.");
  }

  score = clamp(score, 0, 100);
  if (score >= 80) factorsIncreasing.push("Strong security score for how this model typically behaves.");
  return { score, factorsIncreasing, factorsDecreasing };
}

export function computeFlexibilityScore(id: EmploymentScenarioId, _input: EmploymentTypeScenarioInput): DimensionScoreDetail {
  const base = ARCHETYPE[id].flexibility;
  const factorsIncreasing: string[] = [`Archetype flexibility for ${id.replace(/_/g, " ")}: ${base}/100.`];
  const factorsDecreasing: string[] = [];
  let score = base;

  if (id === "permanent_employee") {
    factorsDecreasing.push("Permanent payroll usually trades some independence for structure and protections.");
  }
  if (id === "zzp_self_employed") {
    factorsIncreasing.push("ZZP archetype maximizes operational independence in this model set.");
  }

  score = clamp(score, 0, 100);
  return { score, factorsIncreasing, factorsDecreasing };
}

/** Higher score = simpler for the worker (less self-admin). */
export function computeAdminSimplicityScore(id: EmploymentScenarioId, input: EmploymentTypeScenarioInput): DimensionScoreDetail {
  const base = ARCHETYPE[id].admin;
  const factorsIncreasing: string[] = [`Baseline admin simplicity: ${base}/100.`];
  const factorsDecreasing: string[] = [];
  let score = base;

  if (id === "foreign_remote_employee" && input.residence === "moving_nl") {
    score -= 10;
    factorsDecreasing.push("Moving to NL while on foreign payroll often adds onboarding and payroll coordination.");
  }

  if (input.modelAdminAccountingCosts === "yes" && (id === "zzp_self_employed" || id === "contractor")) {
    factorsDecreasing.push("You asked to model accountant costs — real admin effort may track above headline income.");
  }

  score = clamp(score, 0, 100);
  if (score < 45) factorsDecreasing.push("Admin burden is relatively high — budget time or provider fees.");
  return { score, factorsIncreasing, factorsDecreasing };
}

export function computeBenefitsScore(id: EmploymentScenarioId, input: EmploymentTypeScenarioInput): DimensionScoreDetail {
  const base = ARCHETYPE[id].benefits;
  const factorsIncreasing: string[] = [`Baseline benefits/protections: ${base}/100.`];
  const factorsDecreasing: string[] = [];
  let score = base;

  if (id === "permanent_employee" || id === "fixed_term_employee") {
    if (input.pensionInPackage === "yes") {
      score = clamp(score + 6, 0, 100);
      factorsIncreasing.push("You indicated pension in package — modeled employee pension contribution.");
    } else if (input.pensionInPackage === "no") {
      score = clamp(score - 8, 0, 100);
      factorsDecreasing.push("No pension in package lowers modeled protections vs typical employment.");
    }
  }

  if (input.paidSickLeaveRelevant === "yes" && (id === "zzp_self_employed" || id === "contractor")) {
    score = clamp(score - 10, 0, 100);
    factorsDecreasing.push("Paid sick leave matters to you; independent routes rarely mirror employee sick pay.");
  }
  if (input.paidHolidayRelevant === "yes" && (id === "zzp_self_employed" || id === "contractor")) {
    score = clamp(score - 6, 0, 100);
    factorsDecreasing.push("Paid holiday matters; contractors/ZZP usually self-fund time off.");
  }

  score = clamp(score, 0, 100);
  return { score, factorsIncreasing, factorsDecreasing };
}

/** Expat / sponsorship practicality (not a permit decision). */
export function computeExpatPracticalityScore(id: EmploymentScenarioId, input: EmploymentTypeScenarioInput): DimensionScoreDetail {
  const base = ARCHETYPE[id].expat;
  const factorsIncreasing: string[] = [`Baseline expat/sponsor practicality: ${base}/100.`];
  const factorsDecreasing: string[] = [];
  let score = base;
  const visaHeavy = input.visaFriendlinessHeavyWeight === "yes" ? 1.25 : 1;

  if (input.visaSponsorship === "yes") {
    if (id === "permanent_employee" || id === "fixed_term_employee") {
      score = clamp(score + 8, 0, 100);
      factorsIncreasing.push("Employer payroll aligns better with many sponsored residence routes.");
    }
    if (id === "zzp_self_employed") {
      score = clamp(score - 22, 0, 100);
      factorsDecreasing.push("Sponsorship need is high; ZZP often needs separate immigration validation.");
    }
    if (id === "foreign_remote_employee") {
      score = clamp(score - 18, 0, 100);
      factorsDecreasing.push("Foreign payroll + sponsorship need is a common friction point — confirm early.");
    }
    if (id === "contractor") {
      score = clamp(score - 6, 0, 100);
      factorsDecreasing.push("Contractor/umbrella may still work, but sponsor narrative varies by setup.");
    }
  } else if (input.visaSponsorship === "no") {
    score = clamp(score + 4, 0, 100);
    factorsIncreasing.push("Lower visa pressure in your inputs — more models may be practically feasible.");
  }

  score = clamp(score * (visaHeavy > 1 ? visaHeavy : 1), 0, 100);
  if (visaHeavy > 1) factorsIncreasing.push("You boosted visa/sponsor weighting — expat practicality moves the overall score more.");

  return { score, factorsIncreasing, factorsDecreasing };
}

/**
 * Overall fit: linear blend of dimensions. Tax/payroll complexity slider loads the average of
 * admin simplicity and expat practicality (see priorityWeights.ts).
 */
export function computeOverallFitScore(
  dims: Pick<ScenarioDimensionScores, "income" | "stability" | "flexibility" | "adminSimplicity" | "benefits" | "immigrationFit">,
  w: PriorityWeightsNormalized
): { score: number; formulaSummary: string } {
  const taxPayrollBlend = (dims.adminSimplicity + dims.immigrationFit) / 2;
  const score = clamp(
    w.higherNetIncome * dims.income +
      w.stabilitySecurity * dims.stability +
      w.lowerAdminBurden * dims.adminSimplicity +
      w.benefitsProtections * dims.benefits +
      w.flexibilityIndependence * dims.flexibility +
      w.visaSponsorshipSimplicity * dims.immigrationFit +
      w.lowerTaxPayrollComplexity * taxPayrollBlend,
    0,
    100
  );

  const pct = (x: number) => `${(x * 100).toFixed(1)}%`;
  const formulaSummary = [
    `overall ≈ ${pct(w.higherNetIncome)}·income(${Math.round(dims.income)})`,
    `+ ${pct(w.stabilitySecurity)}·security(${Math.round(dims.stability)})`,
    `+ ${pct(w.lowerAdminBurden)}·admin(${Math.round(dims.adminSimplicity)})`,
    `+ ${pct(w.benefitsProtections)}·benefits(${Math.round(dims.benefits)})`,
    `+ ${pct(w.flexibilityIndependence)}·flex(${Math.round(dims.flexibility)})`,
    `+ ${pct(w.visaSponsorshipSimplicity)}·expat(${Math.round(dims.immigrationFit)})`,
    `+ ${pct(w.lowerTaxPayrollComplexity)}·avg(admin,expat)(${Math.round(taxPayrollBlend)})`,
  ].join(" ");

  return { score, formulaSummary };
}

export function scenarioLabel(id: EmploymentScenarioId): { label: string; shortLabel: string } {
  switch (id) {
    case "permanent_employee":
      return { label: "Permanent employee (Dutch payroll)", shortLabel: "Permanent" };
    case "fixed_term_employee":
      return { label: "Fixed-term employee (Dutch payroll)", shortLabel: "Fixed-term" };
    case "contractor":
      return { label: "Contractor via payroll / umbrella-style", shortLabel: "Contractor" };
    case "zzp_self_employed":
      return { label: "ZZP / self-employed", shortLabel: "ZZP" };
    default:
      return { label: "Foreign employer (remote employee)", shortLabel: "Foreign remote" };
  }
}
