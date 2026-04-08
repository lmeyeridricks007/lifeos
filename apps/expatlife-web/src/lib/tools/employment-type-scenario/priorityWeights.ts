/**
 * # Priority weighting (documented)
 *
 * Each user slider provides a raw weight `w_i` in [0, 100]. We normalize:
 *
 *   W_i = w_i / Σ_j w_j    (if Σ w_j = 0, treat as equal weights)
 *
 * The **overall fit score** (0–100) is a convex combination of dimension scores d_k ∈ [0,100]:
 *
 *   overall = Σ_k W_map(k) * d_k
 *
 * Mapping from slider → dimension:
 * - `higherNetIncome`        → **income** (relative net within the active scenario set)
 * - `stabilitySecurity`      → **security** (stability / contract certainty)
 * - `lowerAdminBurden`       → **adminSimplicity** (higher = less admin for the worker)
 * - `benefitsProtections`    → **benefits** (pension, leave, protections)
 * - `flexibilityIndependence`→ **flexibility**
 * - `visaSponsorshipSimplicity` → **expatPracticality** (immigration / sponsor fit)
 * - `lowerTaxPayrollComplexity` → **average(adminSimplicity, expatPracticality)** — payroll + cross-border friction proxy
 *
 * So the seventh slider pulls toward both simpler admin and simpler expat/tax positioning, without adding an eighth dimension.
 */

import type { EmploymentTypeScenarioInput, PrioritySliders, PriorityWeightsNormalized } from "./types";

export const PRIORITY_WEIGHTING_DOCUMENTATION = String.raw`
Priority weighting: Each slider (0–100) is a raw weight. Normalized weight W_i = w_i / sum(all w_i).
Overall fit = W_income×income + W_stability×security + W_admin×adminSimplicity + W_benefits×benefits + W_flex×flexibility + W_visa×expatPracticality + W_taxComplexity×((adminSimplicity+expatPracticality)/2).
All dimension scores are 0–100 before weighting.`;

export function normalizePriorityWeights(input: EmploymentTypeScenarioInput): PriorityWeightsNormalized {
  return normalizePrioritySliders(input.priorities);
}

export function normalizePrioritySliders(p: PrioritySliders): PriorityWeightsNormalized {
  const raw = [
    p.higherNetIncome,
    p.stabilitySecurity,
    p.lowerAdminBurden,
    p.benefitsProtections,
    p.flexibilityIndependence,
    p.visaSponsorshipSimplicity,
    p.lowerTaxPayrollComplexity,
  ];
  const sum = raw.reduce((a, b) => a + b, 0) || 1;
  return {
    higherNetIncome: p.higherNetIncome / sum,
    stabilitySecurity: p.stabilitySecurity / sum,
    lowerAdminBurden: p.lowerAdminBurden / sum,
    benefitsProtections: p.benefitsProtections / sum,
    flexibilityIndependence: p.flexibilityIndependence / sum,
    visaSponsorshipSimplicity: p.visaSponsorshipSimplicity / sum,
    lowerTaxPayrollComplexity: p.lowerTaxPayrollComplexity / sum,
  };
}
