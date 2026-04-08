export function formatHealthcareEur(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return `€${Math.round(n).toLocaleString("en-NL")}`;
}

export function formatHealthcareEurMonthly(n: number): string {
  return `${formatHealthcareEur(n)}/mo`;
}
