/**
 * Maintainable minimum wage reference — illustrative orientation only.
 * Official rates change periodically. Always verify on Government.nl / Rijksoverheid.
 */

export const MINIMUM_WAGE_RATES_DISCLAIMER =
  "Minimum wage rates in the Netherlands change periodically and depend on age and hours worked. Figures below are indicative orientation only for the stated period — not payroll advice. Confirm current statutory rates on official government sources before signing a contract." as const;

export type MinimumWageAgeBand = {
  id: string;
  label: string;
  description: string;
  percentOfAdult?: string;
  /** Illustrative hourly gross only — verify on official schedule */
  indicativeHourlyGross: string;
};

export const minimumWageNetherlandsRates = {
  asOf: "2026",
  effectiveFrom: "1 January 2026",
  officialSource: {
    label: "Government.nl — Minimum wage",
    href: "https://www.government.nl/topics/minimum-wage",
  },
  adultFullRateNote:
    "Since 2024, Dutch minimum wage is set as an hourly rate. There is no fixed monthly statutory amount — monthly pay depends on contracted hours.",
  indicativeAdultHourlyGross: "€14.71/hr",
  indicativeAdultHourlyNote:
    "Illustrative 21+ hourly gross for 1 January 2026 per government schedule — verify current published rate (rates adjust periodically, e.g. mid-year indexation).",
  fullTimeHoursPerWeek: 36,
  holidayAllowancePercent: 8,
  indicativeFullTimeMonthlyGross: "~€2,300/mo",
  indicativeFullTimeMonthlyNote:
    "Illustrative 36-hour week at €14.71/hr before holiday allowance — actual monthly gross depends on contracted hours.",
  indicativeFullTimeAnnualGross: "~€29k–€33k",
  indicativeFullTimeAnnualNote:
    "Rough full-time gross range including typical contracted hours — not a government fixed monthly minimum.",
  ageBands: [
    {
      id: "21-plus",
      label: "21 years and older",
      description: "Full statutory minimum hourly wage.",
      percentOfAdult: "100%",
      indicativeHourlyGross: "€14.71/hr",
    },
    {
      id: "20",
      label: "20 years",
      description: "Youth tier — percentage of the adult hourly rate.",
      percentOfAdult: "80%",
      indicativeHourlyGross: "€11.77/hr",
    },
    {
      id: "19",
      label: "19 years",
      description: "Youth tier — common for student and entry jobs.",
      percentOfAdult: "60%",
      indicativeHourlyGross: "€8.83/hr",
    },
    {
      id: "18",
      label: "18 years",
      description: "Youth tier — working-hour rules may still apply alongside study.",
      percentOfAdult: "50%",
      indicativeHourlyGross: "€7.36/hr",
    },
    {
      id: "17",
      label: "17 years",
      description: "Lower youth tier — strict working-hour limits often apply.",
      percentOfAdult: "39.5%",
      indicativeHourlyGross: "€5.81/hr",
    },
    {
      id: "16",
      label: "16 years",
      description: "Lower youth tier for part-time and student work.",
      percentOfAdult: "34.5%",
      indicativeHourlyGross: "€5.07/hr",
    },
    {
      id: "15",
      label: "15 years",
      description: "Minimum employable age tier — confirm hour limits with employer.",
      percentOfAdult: "30%",
      indicativeHourlyGross: "€4.41/hr",
    },
  ] satisfies MinimumWageAgeBand[],
  illustrativeNetExamples: [
    {
      id: "min-ft",
      label: "Full-time minimum wage (21+)",
      grossAnnual: "€29k–€33k gross",
      indicativeNet: "€23k–€27k net",
      note: "Illustrative full-time equivalent before holiday allowance. Actual net depends on payroll setup and personal tax situation.",
    },
    {
      id: "part-time-24h",
      label: "Part-time (~24 hrs/week)",
      grossAnnual: "~€18k gross",
      indicativeNet: "~€15k–€17k net",
      note: "Earnings scale with contracted hours at the statutory hourly minimum. Use the net salary calculator for your contract.",
    },
    {
      id: "student-12h",
      label: "Student job (~12 hrs/week, 18)",
      grossAnnual: "~€4.6k gross",
      indicativeNet: "~€4k–€4.5k net",
      note: "Youth rate and hour limits apply. Confirm employer pays at least the statutory minimum for your age.",
    },
  ],
  vsAverageSnapshot: {
    minimumWageFullTimeGross: "€29k–€33k",
    averageSalaryNationalGross: "€45k–€55k",
    note: "Average salary ranges are indicative labour-market benchmarks — not statutory floors. See the average salary guide for city and industry context.",
  },
} as const;
