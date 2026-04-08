import type { ExpatSupportSummary, JobOfferInput } from "./types";

export function scoreExpatSupport(o: JobOfferInput): ExpatSupportSummary {
  let score = 25;
  const highlights: string[] = [];

  const add = (pts: number, line: string) => {
    score += pts;
    highlights.push(line);
  };

  if (o.visaSponsorship === "yes") add(22, "Visa sponsorship indicated");
  else if (o.visaSponsorship === "not_sure") add(6, "Sponsorship clarity needed");

  if (o.thirtyPercentSupport === "yes") add(18, "Strong 30% ruling support signal");
  else if (o.thirtyPercentSupport === "best_efforts") add(10, "Best-efforts 30% ruling wording");
  else if (o.thirtyPercentSupport === "no") add(0, "No 30% ruling support signalled");

  if (o.relocationSupport === "strong") add(16, "Strong relocation support");
  else if (o.relocationSupport === "partial") add(9, "Partial relocation support");

  if (o.relocationRepayment === "yes") add(-6, "Relocation repayment / clawback flagged — confirm terms");

  if (o.taxFilingSupport === "yes") add(8, "Tax filing support offered");
  if (o.temporaryHousingSupport === "yes") add(8, "Temporary housing support");
  if (o.movingBudget === "yes") add(7, "Moving budget mentioned");

  score = Math.max(0, Math.min(100, Math.round(score)));

  if (highlights.length === 0) highlights.push("Add sponsorship and relocation fields to score expat support.");

  return { score, highlights };
}
