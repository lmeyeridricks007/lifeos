const eur = new Intl.NumberFormat("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function formatBankingCostRange(low: number, high: number): string {
  if (Math.round(low) === Math.round(high)) return eur.format(Math.round(low));
  return `${eur.format(Math.round(low))}–${eur.format(Math.round(high))}`;
}
