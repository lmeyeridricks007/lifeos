import { COL_PLANNING_USD_PER_EUR } from "./assumptions";
import type { ColCurrency } from "./types";

export function formatColMoney(eur: number, currency: ColCurrency): string {
  if (currency === "usd") {
    const usd = eur * COL_PLANNING_USD_PER_EUR;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(usd);
  }
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(eur);
}
