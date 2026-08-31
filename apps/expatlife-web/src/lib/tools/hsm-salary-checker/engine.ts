import type {
  HsmSalaryBand,
  HsmSalaryChecklistItem,
  HsmSalaryInput,
  HsmSalaryNextStep,
  HsmSalaryResult,
} from "./types";
import {
  formatEurMonthly,
  HSM_SALARY_FIGURE_YEAR,
  HSM_SALARY_NEAR_THRESHOLD_EUR,
  HSM_SALARY_THRESHOLDS_EUR,
  IND_HSM_PERMIT_URL,
  IND_REQUIRED_AMOUNTS_URL,
} from "./thresholds";

function primaryFloor(input: HsmSalaryInput): number | null {
  if (input.ageBand === "thirty_plus") return HSM_SALARY_THRESHOLDS_EUR.thirtyPlus;
  if (input.ageBand === "under_30") return HSM_SALARY_THRESHOLDS_EUR.under30;
  return null;
}

function buildChecklist(input: HsmSalaryInput, floor: number | null): HsmSalaryChecklistItem[] {
  const items: HsmSalaryChecklistItem[] = [];
  const salary = input.grossMonthly;

  items.push({
    id: "figure-year",
    label: `${HSM_SALARY_FIGURE_YEAR} IND planning floors (gross / month, without holiday pay)`,
    status: "info",
    detail: `Age 30+: ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.thirtyPlus)}; under 30: ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.under30)}; reduced criterion (certain cases): ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced)}. Confirm on IND before you sign.`,
  });

  if (input.ageBand === "thirty_plus") {
    items.push({
      id: "age-30-plus",
      label: "Age band: 30 and over",
      status: "info",
      detail: `Standard HSM floor used for comparison: ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.thirtyPlus)}.`,
    });
  } else if (input.ageBand === "under_30") {
    items.push({
      id: "age-under-30",
      label: "Age band: under 30",
      status: "info",
      detail: `Under-30 HSM floor used for comparison: ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.under30)}.`,
    });
  } else {
    items.push({
      id: "age-unsure",
      label: "Age band not confirmed",
      status: "gap",
      detail: `Compare your offer to both ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.under30)} (under 30) and ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.thirtyPlus)} (30+) until age at start of employment is clear.`,
    });
  }

  if (floor != null) {
    const gap = floor - salary;
    if (salary >= floor) {
      items.push({
        id: "vs-floor",
        label: `Offer appears at or above the ${formatEurMonthly(floor)} floor`,
        status: "strength",
        detail: "Still confirm the figure is gross monthly without holiday allowance and that the employer is a recognised IND sponsor.",
      });
    } else if (gap <= HSM_SALARY_NEAR_THRESHOLD_EUR) {
      items.push({
        id: "near-floor",
        label: `Offer is near the ${formatEurMonthly(floor)} floor (about ${formatEurMonthly(gap)} short)`,
        status: "watch",
        detail: "Small gaps often come from including holiday pay or variable pay. Recalculate the IND-relevant gross monthly component with your employer.",
      });
    } else {
      items.push({
        id: "below-floor",
        label: `Offer is below the ${formatEurMonthly(floor)} floor by about ${formatEurMonthly(gap)}`,
        status: "gap",
        detail: "Unless a recognised reduced criterion applies, the standard HSM salary condition may not be met. Discuss with the employer before accepting.",
      });
    }
  }

  if (input.reducedCriterion === "yes_claim") {
    items.push({
      id: "reduced-claim",
      label: "Reduced criterion claimed",
      status: "watch",
      detail: `Reduced floor is ${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced)} in certain IND-listed cases only. Do not assume it applies — confirm eligibility with the employer / IND guidance.`,
    });
    if (salary >= HSM_SALARY_THRESHOLDS_EUR.reduced && floor != null && salary < floor) {
      items.push({
        id: "reduced-math",
        label: `Offer meets the reduced floor (${formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced)}) but not the age-band floor`,
        status: "watch",
        detail: "This only helps if the reduced criterion actually applies to your case.",
      });
    }
  } else if (input.reducedCriterion === "unsure") {
    items.push({
      id: "reduced-unsure",
      label: "Reduced criterion not clarified",
      status: "watch",
      detail: "Most offers should clear the age-band floor. Only explore reduced if the employer and IND materials say it applies.",
    });
  }

  if (input.holidayPayIncluded === "yes_or_mixed") {
    items.push({
      id: "holiday-pay",
      label: "Figure may include holiday pay or mixed components",
      status: "gap",
      detail: "IND HSM thresholds are typically stated as gross per month without holiday allowance. Ask HR for the IND-relevant monthly gross.",
    });
  } else if (input.holidayPayIncluded === "unsure") {
    items.push({
      id: "holiday-unsure",
      label: "Holiday-pay treatment unclear",
      status: "watch",
      detail: "Confirm whether the offer number is exclusive of vakantiegeld before you compare to IND floors.",
    });
  } else {
    items.push({
      id: "holiday-ok",
      label: "Entered as gross monthly without holiday pay",
      status: "strength",
      detail: "Good starting point — still double-check allowances, bonuses, and 13th-month treatment with the employer.",
    });
  }

  if (input.sponsorStatus === "recognized") {
    items.push({
      id: "sponsor-ok",
      label: "Employer is a recognised IND sponsor (as entered)",
      status: "strength",
      detail: "Only a recognised sponsor can apply for HSM. Salary fit alone is not enough.",
    });
  } else if (input.sponsorStatus === "not_recognized") {
    items.push({
      id: "sponsor-no",
      label: "Employer is not a recognised sponsor (as entered)",
      status: "gap",
      detail: "HSM usually cannot proceed without a recognised sponsor, even if salary clears the floor. Check the IND recognised-sponsor register or ask the employer.",
    });
  } else {
    items.push({
      id: "sponsor-unsure",
      label: "Sponsor status not confirmed",
      status: "watch",
      detail: "Ask the employer whether they are on the IND recognised-sponsor list before you treat salary as the only blocker.",
    });
  }

  return items;
}

function pickBand(
  input: HsmSalaryInput,
  floor: number | null,
  escalate: boolean
): HsmSalaryBand {
  const salary = input.grossMonthly;
  const reduced = HSM_SALARY_THRESHOLDS_EUR.reduced;

  if (!Number.isFinite(salary) || salary <= 0) return "needs_careful_review";
  if (input.ageBand === "unsure" || floor == null) return "needs_careful_review";

  if (salary >= floor) {
    if (input.holidayPayIncluded !== "no") return "near_threshold_verify_components";
    if (salary - floor <= HSM_SALARY_NEAR_THRESHOLD_EUR) return "near_threshold_verify_components";
    return "likely_meets_standard_floor";
  }

  const gap = floor - salary;
  if (gap <= HSM_SALARY_NEAR_THRESHOLD_EUR) return "near_threshold_verify_components";

  if (input.reducedCriterion === "yes_claim" && salary >= reduced) {
    return "meets_only_if_reduced_applies";
  }

  if (escalate && input.reducedCriterion === "unsure" && salary >= reduced) {
    return "needs_careful_review";
  }

  return "below_floor";
}

function bandCopy(
  band: HsmSalaryBand,
  input: HsmSalaryInput,
  floor: number | null
): Pick<HsmSalaryResult, "headline" | "summary" | "confidenceNote"> {
  const salaryLabel = formatEurMonthly(input.grossMonthly);
  const floorLabel = floor != null ? formatEurMonthly(floor) : "the age-band floor";
  const reducedLabel = formatEurMonthly(HSM_SALARY_THRESHOLDS_EUR.reduced);

  switch (band) {
    case "likely_meets_standard_floor":
      return {
        headline: "Offer appears to clear the standard HSM salary floor",
        summary: `Your ${salaryLabel} gross monthly figure is at or above ${floorLabel} (${HSM_SALARY_FIGURE_YEAR} planning amount). Still confirm holiday-pay treatment, recognised-sponsor status, and current IND required amounts before you sign.`,
        confidenceNote: "Orientation only — not an IND decision or approval prediction.",
      };
    case "meets_only_if_reduced_applies":
      return {
        headline: "Offer only clears the reduced criterion — verify eligibility",
        summary: `Your figure sits below ${floorLabel} but at or above the reduced floor (${reducedLabel}). Reduced criterion applies only in certain IND-listed cases. Do not accept based on this tool alone — confirm with the employer and IND guidance.`,
        confidenceNote: "Policy-sensitive — reduced paths are narrow and case-specific.",
      };
    case "below_floor":
      return {
        headline: "Offer appears below the applicable HSM salary floor",
        summary: `Against ${floorLabel}, your ${salaryLabel} gross monthly figure looks short. Ask whether the employer can raise the IND-relevant gross, or whether another permit route fits — salary is only one HSM condition.`,
        confidenceNote: "Planning view — verify components and current IND amounts.",
      };
    case "near_threshold_verify_components":
      return {
        headline: "Near the floor — verify salary components carefully",
        summary: `Your offer is close to ${floorLabel}, or the entered figure may include holiday pay / mixed components. Recalculate the IND-relevant gross monthly amount with HR before treating the threshold as met.`,
        confidenceNote: "Small definition differences often decide near-threshold cases.",
      };
    case "needs_careful_review":
      return {
        headline: "Clarify age band, components, and sponsor before you decide",
        summary:
          "Too many unknowns remain (age at start, holiday pay, reduced criterion, or sponsor status). Pause acceptance until you can compare a clean gross monthly figure to the correct IND floor.",
        confidenceNote: "This tool compares planning figures — it does not approve visas.",
      };
  }
}

function buildTopics(input: HsmSalaryInput, band: HsmSalaryBand): string[] {
  const topics = [
    "Current IND required amounts for highly skilled migrants",
    "Whether the offer number is gross monthly without holiday allowance",
    "Whether the employer is on the IND recognised-sponsor register",
  ];
  if (input.ageBand === "unsure") topics.push("Age at the start of employment (under 30 vs 30+)");
  if (input.reducedCriterion !== "no" || band === "meets_only_if_reduced_applies") {
    topics.push("Whether a reduced salary criterion actually applies to your case");
  }
  topics.push("Market-conform pay and other HSM employment conditions beyond the floor");
  return topics;
}

function buildNextSteps(band: HsmSalaryBand, input: HsmSalaryInput): HsmSalaryNextStep[] {
  const steps: HsmSalaryNextStep[] = [
    { id: "ind-amounts", label: "IND — Required amounts (income requirements)", href: IND_REQUIRED_AMOUNTS_URL, external: true },
    { id: "ind-hsm", label: "IND — Highly skilled migrant residence permit", href: IND_HSM_PERMIT_URL, external: true },
    {
      id: "hsm-guide",
      label: "ExpatLife Highly Skilled Migrant guide",
      href: "/netherlands/visa/highly-skilled-migrant/",
    },
  ];

  if (band === "below_floor" || band === "meets_only_if_reduced_applies" || band === "near_threshold_verify_components") {
    steps.push({
      id: "job-offer",
      label: "Job offer comparison tool",
      href: "/netherlands/work/tools/job-offer-comparison/",
    });
  }

  steps.push({
    id: "visa-cost",
    label: "Visa cost calculator",
    href: "/netherlands/visa-cost-calculator/",
  });

  if (input.sponsorStatus !== "recognized") {
    steps.push({
      id: "sponsors",
      label: "Recognised sponsor services directory",
      href: "/netherlands/services/highly-skilled-migrant-sponsors/",
    });
  }

  return steps;
}

export function calculateHsmSalary(input: HsmSalaryInput): HsmSalaryResult {
  const floor = primaryFloor(input);
  const salary = input.grossMonthly;

  const escalateReasons: string[] = [];
  if (input.ageBand === "unsure") escalateReasons.push("Age band is unsure — under-30 and 30+ floors differ.");
  if (input.reducedCriterion === "yes_claim") {
    escalateReasons.push("Reduced criterion claimed — confirm IND eligibility; do not self-certify.");
  }
  if (input.holidayPayIncluded !== "no") {
    escalateReasons.push("Holiday pay / salary components may not match IND’s gross-without-holiday definition.");
  }
  if (input.sponsorStatus !== "recognized") {
    escalateReasons.push("Recognised-sponsor status is not confirmed.");
  }
  if (!Number.isFinite(salary) || salary <= 0) {
    escalateReasons.push("Enter a positive gross monthly salary to compare.");
  }

  const escalate = escalateReasons.length > 0;
  const band = pickBand(input, floor, escalate);
  const copy = bandCopy(band, input, floor);
  const gapToFloorEur = floor != null ? Math.max(0, Math.round(floor - salary)) : null;

  return {
    band,
    ...copy,
    applicableFloorEur: floor,
    reducedFloorEur: HSM_SALARY_THRESHOLDS_EUR.reduced,
    gapToFloorEur,
    checklist: buildChecklist(input, floor),
    topicsToVerify: buildTopics(input, band),
    nextSteps: buildNextSteps(band, input),
    escalate,
    escalateReasons,
  };
}
