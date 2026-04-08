import type { BenefitsSummary, JobOfferInput } from "./types";

export function scoreBenefits(o: JobOfferInput): BenefitsSummary {
  let score = 35;
  const highlights: string[] = [];
  let approximateAnnualValueHint: number | null = 0;

  const add = (pts: number, line: string, eur?: number) => {
    score += pts;
    highlights.push(line);
    if (eur != null && approximateAnnualValueHint != null) approximateAnnualValueHint += eur;
  };

  if (o.travelAllowanceMonthly > 0) add(8, `Travel allowance ~€${o.travelAllowanceMonthly}/mo`, o.travelAllowanceMonthly * 12);
  if (o.wfhAllowanceMonthly > 0) add(6, `WFH allowance ~€${o.wfhAllowanceMonthly}/mo`, o.wfhAllowanceMonthly * 12);
  if (o.equipmentProvided === "yes") add(10, "Laptop / phone / equipment provided");
  if (o.equipmentProvided === "not_sure") add(3, "Equipment package unclear");

  if (o.trainingBudgetAnnual > 0) add(10, `Training budget €${o.trainingBudgetAnnual}/yr`, o.trainingBudgetAnnual);
  if (o.extraLeaveDays > 0) {
    const hint = o.extraLeaveDays * 85;
    add(Math.min(12, 4 + o.extraLeaveDays), `${o.extraLeaveDays} extra leave days (planning value rough)`, hint);
  }
  if (o.healthWellnessAnnual > 0) add(6, `Wellness allowance €${o.healthWellnessAnnual}/yr`, o.healthWellnessAnnual);
  if (o.mobilityAllowanceMonthly > 0) add(6, "Mobility / transport budget", o.mobilityAllowanceMonthly * 12);

  if (o.pensionEmployerDescription.trim().length > 3) {
    add(14, "Employer pension contribution / scheme described");
    if (approximateAnnualValueHint != null) approximateAnnualValueHint += 2_400;
  }

  if (o.sickPayBeyondStandard === "yes") add(8, "Sick pay beyond statutory baseline mentioned");
  if (o.parentalFamilySupport === "yes") add(8, "Parental / family support mentioned");

  score = Math.max(0, Math.min(100, Math.round(score)));

  if (highlights.length === 0) {
    highlights.push("Limited benefit details captured — add allowances and pension wording for a richer score.");
  }

  if (approximateAnnualValueHint === 0) approximateAnnualValueHint = null;

  return { score, highlights, approximateAnnualValueHint };
}
