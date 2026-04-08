export function formatUtilitiesEur(n: number): string {
  return `€${Math.round(n).toLocaleString("en-NL")}`;
}
