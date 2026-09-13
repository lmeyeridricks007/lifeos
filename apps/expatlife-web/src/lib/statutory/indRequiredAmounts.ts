/**
 * IND required amounts (normbedragen) — shared statutory source for visa guides
 * and /netherlands/official-figures. Do not hardcode these amounts in page copy.
 *
 * Verified against IND Required amounts income requirements for
 * 1 July 2026 – 31 December 2026.
 *
 * @see https://ind.nl/en/required-amounts-income-requirements
 */

export const IND_REQUIRED_AMOUNTS_URL =
  "https://ind.nl/en/required-amounts-income-requirements" as const;

export const IND_REQUIRED_AMOUNTS_EFFECTIVE_FROM = "2026-07-01" as const;
export const IND_REQUIRED_AMOUNTS_EFFECTIVE_TO = "2026-12-31" as const;
export const IND_REQUIRED_AMOUNTS_EFFECTIVE_LABEL =
  "1 July 2026–31 December 2026" as const;
export const IND_REQUIRED_AMOUNTS_LAST_VERIFIED = "2026-09-13" as const;
export const IND_REQUIRED_AMOUNTS_LAST_VERIFIED_LABEL = "13 September 2026" as const;

export type StatutoryFigureUnit = "EUR_per_month" | "EUR_per_year" | "EUR" | "string";

export type StatutoryFigure = {
  id: string;
  label: string;
  value: number;
  unit: StatutoryFigureUnit;
  effectiveFrom: string;
  effectiveTo: string;
  officialSource: string;
  sourceAuthority: string;
  lastVerified: string;
  notes: string;
  audience: string;
  category: string;
};

const PERIOD = {
  effectiveFrom: IND_REQUIRED_AMOUNTS_EFFECTIVE_FROM,
  effectiveTo: IND_REQUIRED_AMOUNTS_EFFECTIVE_TO,
  officialSource: IND_REQUIRED_AMOUNTS_URL,
  sourceAuthority: "IND",
  lastVerified: IND_REQUIRED_AMOUNTS_LAST_VERIFIED,
} as const;

/**
 * Canonical IND required amounts for H2 2026 family / self-employed routes.
 * Numeric values are the single source of truth — format for display via helpers.
 */
export const IND_REQUIRED_AMOUNTS = {
  partnerFamilySponsorExclHoliday: {
    id: "partner-family-sponsor-excl-holiday",
    label: "Partner / family sponsor income (excluding holiday allowance)",
    value: 2337.0,
    unit: "EUR_per_month",
    ...PERIOD,
    notes:
      "Gross SV salary per month without holiday allowance for a sponsor applying for a partner or family residence permit.",
    audience: "sponsor",
    category: "partner-family",
  },
  partnerFamilySponsorInclHoliday: {
    id: "partner-family-sponsor-incl-holiday",
    label: "Partner / family sponsor income (including holiday allowance)",
    value: 2523.96,
    unit: "EUR_per_month",
    ...PERIOD,
    notes:
      "Gross SV salary per month with holiday allowance for a sponsor applying for a partner or family residence permit.",
    audience: "sponsor",
    category: "partner-family",
  },
  selfEmployedMonthlyProfit: {
    id: "self-employed-monthly-profit",
    label: "Self-employed required monthly profit (including holiday allowance)",
    value: 1766.77,
    unit: "EUR_per_month",
    ...PERIOD,
    notes:
      "Gross profit per month (with holiday allowance) for a residence permit as a self-employed person.",
    audience: "applicant",
    category: "self-employed",
  },
} as const satisfies Record<string, StatutoryFigure>;

export type IndRequiredAmountId = (typeof IND_REQUIRED_AMOUNTS)[keyof typeof IND_REQUIRED_AMOUNTS]["id"];

export const IND_REQUIRED_AMOUNT_LIST: readonly StatutoryFigure[] = Object.values(IND_REQUIRED_AMOUNTS);

export function getIndRequiredAmount(id: IndRequiredAmountId): StatutoryFigure {
  const figure = IND_REQUIRED_AMOUNT_LIST.find((row) => row.id === id);
  if (!figure) {
    throw new Error(`Unknown IND required amount id: ${id}`);
  }
  return figure;
}

/** Format IND amounts with cents (e.g. €2,337.00). */
export function formatIndEurMonthly(amount: number): string {
  return new Intl.NumberFormat("en-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export const PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_EUR =
  IND_REQUIRED_AMOUNTS.partnerFamilySponsorExclHoliday.value;
export const PARTNER_FAMILY_SPONSOR_INCL_HOLIDAY_EUR =
  IND_REQUIRED_AMOUNTS.partnerFamilySponsorInclHoliday.value;
export const SELF_EMPLOYED_MONTHLY_PROFIT_EUR =
  IND_REQUIRED_AMOUNTS.selfEmployedMonthlyProfit.value;

export const PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_DISPLAY = formatIndEurMonthly(
  PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_EUR
);
export const PARTNER_FAMILY_SPONSOR_INCL_HOLIDAY_DISPLAY = formatIndEurMonthly(
  PARTNER_FAMILY_SPONSOR_INCL_HOLIDAY_EUR
);
export const SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY = formatIndEurMonthly(
  SELF_EMPLOYED_MONTHLY_PROFIT_EUR
);

/** Visible trust-strip line for partner / self-employed visa guides. */
export const IND_REQUIRED_AMOUNTS_GUIDE_LAST_UPDATED =
  `Last reviewed: ${IND_REQUIRED_AMOUNTS_LAST_VERIFIED_LABEL} · Effective: ${IND_REQUIRED_AMOUNTS_EFFECTIVE_LABEL}` as const;

export const OFFICIAL_FIGURES_PARTNER_FAMILY_HREF = "/netherlands/visa/partner-family-visa/" as const;
export const OFFICIAL_FIGURES_SELF_EMPLOYED_HREF = "/netherlands/visa/self-employed-visa/" as const;
export const OFFICIAL_FIGURES_PATH_HREF = "/netherlands/official-figures/" as const;
