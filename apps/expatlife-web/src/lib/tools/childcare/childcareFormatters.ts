const EUR = new Intl.NumberFormat("en-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const EUR_DEC = new Intl.NumberFormat("en-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatChildcareEur(n: number, decimals = false): string {
  if (!Number.isFinite(n)) return "—";
  return decimals ? EUR_DEC.format(n) : EUR.format(n);
}

export function formatChildcarePercent(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return `${Math.round(n * 1000) / 10}%`;
}

export const CARE_TYPE_LABELS = {
  daycare: "Daycare (dagopvang)",
  bso: "After-school care (BSO)",
  gastouder: "Childminder (gastouder)",
} as const;

export const CITY_LABELS: Record<string, string> = {
  amsterdam: "Amsterdam",
  rotterdam: "Rotterdam",
  "the-hague": "The Hague",
  utrecht: "Utrecht",
  eindhoven: "Eindhoven",
  haarlem: "Haarlem",
  leiden: "Leiden",
  delft: "Delft",
  groningen: "Groningen",
  tilburg: "Tilburg",
  breda: "Breda",
  "arnhem-nijmegen": "Arnhem / Nijmegen area",
  other: "Other Netherlands",
};
