import type { HiddenCostItem, JobOfferInput } from "./types";

const MAX_Q = 12;

/**
 * Negotiation questions tied to detected weaknesses and hidden-cost lines — avoids generic filler.
 */
export function buildWeaknessDrivenNegotiationQuestions(
  o: JobOfferInput,
  weaknesses: string[],
  hiddenItems: HiddenCostItem[]
): string[] {
  const q: string[] = [];
  const hid = new Set(hiddenItems.map((h) => h.id));
  const weak = (needle: string) => weaknesses.some((w) => w.toLowerCase().includes(needle));

  if (hid.has("pension-unknown") || weak("pension")) {
    q.push("What exact employer pension contribution applies, from which salary base, and when does vesting start?");
  }
  if (hid.has("relocation-clawback") || o.relocationRepayment === "yes" || o.relocationRepayment === "not_sure") {
    q.push("Please specify any relocation or sign-on repayment schedule: amount, trigger events, and pro-rata if I leave early.");
  }
  if (hid.has("ruling-gap") || o.thirtyPercentSupport === "best_efforts" || o.thirtyPercentSupport === "not_mentioned") {
    q.push("Will 30% ruling support be referenced in the employment contract, and who owns the application timeline and documentation?");
  }
  if (hid.has("fixed-term") || o.contractType === "fixed_term") {
    q.push("What is the renewal criteria for the fixed term, and is there a notice period if the contract is not extended?");
  }
  if (hid.has("contractor-structure")) {
    q.push("How are pension, sick leave, and holiday accrual handled under this contractor / umbrella structure vs employee payroll?");
  }
  if (hid.has("foreign-remote")) {
    q.push("How is Dutch wage tax and social insurance withheld, and which entity is the legal employer of record in the Netherlands?");
  }
  if (hid.has("contract-friction") || o.nonCompetePresent === "yes") {
    q.push("What is the scope, duration, and geography of any non-compete, and is compensation paid during restriction periods?");
  }
  if (hid.has("commute-burden") || o.workMode === "office") {
    q.push("What is the minimum expected office attendance, and can hybrid rules change after onboarding?");
  }
  if (hid.has("benefits-thin")) {
    q.push("Can you itemise travel, WFH, equipment, training budget, and any mobility allowances in the offer letter?");
  }
  if (hid.has("relocation-gap") && (o.visaSponsorship === "yes" || o.visaSponsorship === "not_sure")) {
    q.push("What relocation support is budgeted (temporary housing, shipping, flights), and what requires reimbursement?");
  }
  if (hid.has("expat-setup-gap")) {
    q.push("What tax-return or cross-border payroll support is included in the first year, and is there a named payroll contact?");
  }
  if (o.bonusType === "discretionary" || weak("bonus")) {
    q.push("What bonus has been paid to similar roles in the last two years, and are targets documented?");
  }
  if (o.bonusType === "guaranteed") {
    q.push("How is the guaranteed bonus pro-rated on start/leave dates, and is it pensionable?");
  }
  if (o.holidayAllowance === "not_sure") {
    q.push("Is the quoted gross inclusive or exclusive of 8% holiday allowance, and when is it paid?");
  }
  if (o.overtimeIncludedInSalary === "yes") {
    q.push("What weekly hour norm is assumed for ‘all-in’ salary, and how are excess hours compensated or recorded?");
  }
  if (o.sideJobRestrictions === "yes") {
    q.push("What side-project or freelance activity requires written consent, and is there a carve-out for passive income?");
  }
  if (o.equipmentProvided === "not_sure" || o.equipmentProvided === "no") {
    q.push("Which hardware, software licences, and phone contracts are employer-provided vs employee-funded?");
  }

  const out = Array.from(new Set(q)).slice(0, MAX_Q);
  if (out.length > 0) return out;
  return ["Ask HR to confirm in writing: holiday allowance basis (in gross or on top), pension scheme, and any clawback on relocation or sign-on."];
}
