import type { IndicativeTaxModel } from "./assumptions";
import type { IndicativeNetComparison, ThirtyPercentYearEstimate } from "./types";

/**
 * Piecewise marginal tax on positive taxable income (planning).
 */
export function indicativeTaxOnAnnualTaxable(taxableAnnual: number, model: IndicativeTaxModel): number {
  if (!Number.isFinite(taxableAnnual) || taxableAnnual <= 0) return 0;
  const t = taxableAnnual;
  let tax = 0;
  let lower = 0;
  for (const b of model.brackets) {
    const upper = Number.isFinite(b.upToExclusive) ? b.upToExclusive : t;
    const inBracket = Math.max(0, Math.min(t, upper) - lower);
    if (inBracket > 0) {
      tax += inBracket * b.marginalRate;
    }
    lower = upper;
    if (t <= upper) break;
  }
  return Math.max(0, tax - model.approximateTaxCreditAnnual);
}

export function buildIndicativeNetComparison(
  grossAnnual: number,
  primary: ThirtyPercentYearEstimate,
  model: IndicativeTaxModel
): IndicativeNetComparison {
  const taxableIfNoRuling = grossAnnual;
  const taxableWithRuling = primary.taxableSalaryEstimateAnnual;
  const estimatedTaxIfNoRulingAnnual = indicativeTaxOnAnnualTaxable(taxableIfNoRuling, model);
  const estimatedTaxWithRulingAnnual = indicativeTaxOnAnnualTaxable(taxableWithRuling, model);
  const estimatedNetIfNoRulingAnnual = grossAnnual - estimatedTaxIfNoRulingAnnual;
  const estimatedNetWithRulingAnnual = grossAnnual - estimatedTaxWithRulingAnnual;
  const estimatedAnnualNetDelta = estimatedNetWithRulingAnnual - estimatedNetIfNoRulingAnnual;
  const estimatedMonthlyNetDelta = estimatedAnnualNetDelta / 12;

  return {
    modelId: model.id,
    modelLabel: model.label,
    grossAnnual,
    taxableIfNoRulingAnnual: taxableIfNoRuling,
    taxableWithRulingAnnual: taxableWithRuling,
    estimatedTaxIfNoRulingAnnual,
    estimatedTaxWithRulingAnnual,
    estimatedNetIfNoRulingAnnual,
    estimatedNetWithRulingAnnual,
    estimatedAnnualNetDelta,
    estimatedMonthlyNetDelta,
    assumptionBullets: model.footnotes,
  };
}
