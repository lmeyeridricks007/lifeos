/**
 * Maintainable minimum wage reference — illustrative orientation only.
 * Official rates from Government.nl / Rijksoverheid. Always verify before payroll decisions.
 */

export const MINIMUM_WAGE_RATES_DISCLAIMER =
  "Minimum wage rates in the Netherlands change periodically and depend on age and hours worked. Figures below follow official Government.nl schedules for the stated periods — not payroll advice. Confirm current statutory rates on official government sources before signing a contract." as const;

/** Basic health insurance (basisverzekering) — align with health insurance guide 2026 market bands. */
export const MINIMUM_WAGE_HEALTH_INSURANCE_MONTHLY_2026 = "~€142–€159/month" as const;
export const MINIMUM_WAGE_HEALTH_INSURANCE_NOTE_2026 =
  "Indicative 2026 basic premium range; average market pricing is often around €159/month before eigen risico. Verify on comparison sites and insurer pages." as const;

export type MinimumWageAgeBand = {
  id: string;
  label: string;
  description: string;
  percentOfAdult?: string;
  indicativeHourlyGross: string;
};

export type MinimumWageSchedule = {
  effectiveFrom: string;
  effectiveUntil?: string;
  adultHourly: string;
  ageBands: MinimumWageAgeBand[];
};

/** Official Government.nl hourly minimum wage (21+) from 1 July 2026. */
export const MINIMUM_WAGE_ADULT_HOURLY_JULY_2026 = "€14.99/hr";

const OFFICIAL_JULY_2026_BANDS: MinimumWageAgeBand[] = [
  {
    id: "21-plus",
    label: "21 years and older",
    description: "Full statutory minimum hourly wage.",
    percentOfAdult: "100%",
    indicativeHourlyGross: "€14.99/hr",
  },
  {
    id: "20",
    label: "20 years",
    description: "Youth tier — percentage of the adult hourly rate.",
    percentOfAdult: "80%",
    indicativeHourlyGross: "€11.99/hr",
  },
  {
    id: "19",
    label: "19 years",
    description: "Youth tier — common for student and entry jobs.",
    percentOfAdult: "60%",
    indicativeHourlyGross: "€8.99/hr",
  },
  {
    id: "18",
    label: "18 years",
    description: "Youth tier — working-hour rules may still apply alongside study.",
    percentOfAdult: "50%",
    indicativeHourlyGross: "€7.50/hr",
  },
  {
    id: "17",
    label: "17 years",
    description: "Lower youth tier — strict working-hour limits often apply.",
    percentOfAdult: "39.5%",
    indicativeHourlyGross: "€5.92/hr",
  },
  {
    id: "16",
    label: "16 years",
    description: "Lower youth tier for part-time and student work.",
    percentOfAdult: "34.5%",
    indicativeHourlyGross: "€5.17/hr",
  },
  {
    id: "15",
    label: "15 years",
    description: "Minimum employable age tier — confirm hour limits with employer.",
    percentOfAdult: "30%",
    indicativeHourlyGross: "€4.50/hr",
  },
];

const OFFICIAL_JAN_2026_BANDS: MinimumWageAgeBand[] = [
  {
    id: "21-plus",
    label: "21 years and older",
    description: "Full statutory minimum hourly wage (historical).",
    percentOfAdult: "100%",
    indicativeHourlyGross: "€14.71/hr",
  },
  {
    id: "20",
    label: "20 years",
    description: "Youth tier — historical schedule.",
    percentOfAdult: "80%",
    indicativeHourlyGross: "€11.77/hr",
  },
  {
    id: "19",
    label: "19 years",
    description: "Youth tier — historical schedule.",
    percentOfAdult: "60%",
    indicativeHourlyGross: "€8.83/hr",
  },
  {
    id: "18",
    label: "18 years",
    description: "Youth tier — historical schedule.",
    percentOfAdult: "50%",
    indicativeHourlyGross: "€7.36/hr",
  },
  {
    id: "17",
    label: "17 years",
    description: "Youth tier — historical schedule.",
    percentOfAdult: "39.5%",
    indicativeHourlyGross: "€5.81/hr",
  },
  {
    id: "16",
    label: "16 years",
    description: "Youth tier — historical schedule.",
    percentOfAdult: "34.5%",
    indicativeHourlyGross: "€5.07/hr",
  },
  {
    id: "15",
    label: "15 years",
    description: "Youth tier — historical schedule.",
    percentOfAdult: "30%",
    indicativeHourlyGross: "€4.41/hr",
  },
];

function monthlyGrossFromHourly(hourly: number, hoursPerWeek: number): string {
  const monthly = (hourly * hoursPerWeek * 52) / 12;
  return `~€${Math.round(monthly / 10) * 10}/mo`;
}

const adultHourlyJuly2026 = 14.99;

export const minimumWageNetherlandsRates = {
  asOf: "August 2026",
  currentSchedule: {
    effectiveFrom: "1 July 2026",
    effectiveUntil: undefined,
    adultHourly: MINIMUM_WAGE_ADULT_HOURLY_JULY_2026,
    ageBands: OFFICIAL_JULY_2026_BANDS,
  } satisfies MinimumWageSchedule,
  historicalSchedules: [
    {
      effectiveFrom: "1 January 2026",
      effectiveUntil: "30 June 2026",
      adultHourly: "€14.71/hr",
      ageBands: OFFICIAL_JAN_2026_BANDS,
    },
  ] satisfies MinimumWageSchedule[],
  nextTypicalIndexation: "1 January 2027",
  nextTypicalIndexationNote:
    "Dutch minimum wage is usually adjusted in January and sometimes mid-year. The next typical indexation date is 1 January 2027 — confirm published amounts on Government.nl when they are released.",
  officialSources: {
    english: {
      label: "Government.nl — Minimum wage amounts",
      href: "https://www.government.nl/themes/work/minimum-wage/minimum-wage-amounts",
    },
    dutch: {
      label: "Rijksooverheid — Bedragen minimumloon 2026",
      href: "https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
    },
  },
  /** @deprecated Use currentSchedule — kept for existing imports */
  effectiveFrom: "1 July 2026",
  priorRateNote:
    "The adult rate was €14.71/hr from 1 January 2026 until the 1 July 2026 indexation to €14.99/hr (21+). Youth tiers moved on the same dates.",
  officialSource: {
    label: "Government.nl — Minimum wage amounts",
    href: "https://www.government.nl/themes/work/minimum-wage/minimum-wage-amounts",
  },
  adultFullRateNote:
    "Since 2024, Dutch minimum wage is set as an hourly rate. There is no fixed monthly statutory amount — monthly pay depends on contracted hours.",
  indicativeAdultHourlyGross: MINIMUM_WAGE_ADULT_HOURLY_JULY_2026,
  indicativeAdultHourlyNote:
    "Official 21+ hourly gross from 1 July 2026 per Government.nl — verify the current published schedule before signing a contract.",
  fullTimeHoursPerWeek: 36,
  holidayAllowancePercent: 8,
  indicativeFullTimeMonthlyGross: monthlyGrossFromHourly(adultHourlyJuly2026, 36),
  indicativeFullTimeMonthlyNote:
    "Illustrative 36-hour week at €14.99/hr before holiday allowance — actual monthly gross depends on contracted hours.",
  indicativeFullTimeAnnualGross: "~€28k–€33k",
  indicativeFullTimeAnnualNote:
    "Rough full-time gross range including typical contracted hours — not a government fixed monthly minimum.",
  ageBands: OFFICIAL_JULY_2026_BANDS,
  illustrativeNetExamples: [
    {
      id: "min-ft",
      label: "Full-time minimum wage (21+)",
      grossAnnual: "€28k–€33k gross",
      indicativeNet: "€23k–€27k net",
      note: "Illustrative full-time equivalent before holiday allowance at the 1 July 2026 adult hourly rate. Actual net depends on payroll setup and personal tax situation.",
    },
    {
      id: "part-time-24h",
      label: "Part-time (~24 hrs/week)",
      grossAnnual: "~€18k gross",
      indicativeNet: "~€15k–€17k net",
      note: "Illustrative at €14.99/hr — earnings scale with contracted hours at the statutory hourly minimum.",
    },
    {
      id: "student-12h",
      label: "Student job (~12 hrs/week, 18)",
      grossAnnual: "~€4.7k gross",
      indicativeNet: "~€4k–€4.5k net",
      note: "Youth rate (€7.50/hr from 1 July 2026 for age 18) and hour limits apply. Confirm employer pays at least the statutory minimum for your age.",
    },
  ],
  vsAverageSnapshot: {
    minimumWageFullTimeGross: "€28k–€33k",
    averageSalaryNationalGross: "€45k–€55k",
    note: "Average salary ranges are indicative labour-market benchmarks — not statutory floors. See the average salary guide for city and industry context.",
  },
  healthInsurance: {
    monthlyBand: MINIMUM_WAGE_HEALTH_INSURANCE_MONTHLY_2026,
    note: MINIMUM_WAGE_HEALTH_INSURANCE_NOTE_2026,
  },
} as const;
