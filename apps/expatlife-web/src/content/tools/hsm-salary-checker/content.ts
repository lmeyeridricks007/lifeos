import {
  formatEurMonthly,
  HSM_SALARY_FIGURE_YEAR,
  HSM_SALARY_THRESHOLDS_EUR,
  IND_HSM_PERMIT_URL,
  IND_REQUIRED_AMOUNTS_URL,
} from "@/src/lib/tools/hsm-salary-checker/thresholds";

export const HSM_SALARY_CANONICAL = "/netherlands/moving/tools/hsm-salary-checker/";

export const HSM_SALARY_FAQ_ITEMS = [
  {
    id: "ind-decision",
    question: "Does this tool decide if IND will approve my HSM permit?",
    answer:
      "No. It compares your entered gross monthly figure to published planning floors. Only IND decides, and salary is only one condition alongside recognised-sponsor status and employment rules.",
  },
  {
    id: "holiday-pay",
    question: "Should I include holiday pay (vakantiegeld)?",
    answer:
      "IND highly skilled migrant thresholds are typically stated as gross per month without holiday allowance. Enter the IND-relevant monthly gross — ask HR if your offer letter mixes components.",
  },
  {
    id: "reduced",
    question: "What is the reduced criterion?",
    answer: `In certain IND-listed cases a lower floor may apply (planning figure ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced)} for ${HSM_SALARY_FIGURE_YEAR}). It is not automatic. Confirm on the IND required-amounts page and with your employer.`,
  },
  {
    id: "figures-change",
    question: "Do these amounts change?",
    answer: `Yes. This checker uses ${HSM_SALARY_FIGURE_YEAR} planning figures maintained for ExpatLife orientation. Always verify current amounts on IND before you sign an offer.`,
  },
];

export const HSM_SALARY_OFFICIAL_SOURCES = [
  { label: "IND — Required amounts (income requirements)", href: IND_REQUIRED_AMOUNTS_URL },
  { label: "IND — Highly skilled migrant residence permit", href: IND_HSM_PERMIT_URL },
];

export const HSM_SALARY_RELATED_GUIDES = [
  {
    href: "/netherlands/visa/highly-skilled-migrant/",
    title: "Highly Skilled Migrant visa",
    description: "Recognised sponsor rules, salary thresholds, process, and tools.",
  },
  {
    href: "/netherlands/visa/eu-blue-card/",
    title: "EU Blue Card",
    description: "Alternative skilled-work route with its own salary tiers.",
  },
  {
    href: "/netherlands/money/taxes/30-percent-ruling/",
    title: "30% ruling",
    description: "Separate Belastingdienst salary norms — not the same as IND HSM floors.",
  },
];

export const AGE_BAND_OPTIONS = [
  { value: "thirty_plus", label: "30 or older at start of employment" },
  { value: "under_30", label: "Under 30 at start of employment" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const REDUCED_OPTIONS = [
  { value: "no", label: "No — use the standard age-band floor" },
  { value: "yes_claim", label: "Yes — employer / IND says reduced criterion may apply" },
  { value: "unsure", label: "Not sure" },
] as const;

export const HOLIDAY_PAY_OPTIONS = [
  { value: "no", label: "No — gross monthly without holiday pay" },
  { value: "yes_or_mixed", label: "Yes / mixed — may include holiday pay or extras" },
  { value: "unsure", label: "Not sure how the offer is written" },
] as const;

export const SPONSOR_OPTIONS = [
  { value: "recognized", label: "Yes — recognised IND sponsor" },
  { value: "not_recognized", label: "No — not a recognised sponsor" },
  { value: "unsure", label: "Not sure" },
] as const;

export const HSM_SALARY_THRESHOLD_SUMMARY = [
  { label: "Age 30+", amount: formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.thirtyPlus) },
  { label: "Under 30", amount: formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.under30) },
  { label: "Reduced (certain cases)", amount: formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced) },
] as const;
