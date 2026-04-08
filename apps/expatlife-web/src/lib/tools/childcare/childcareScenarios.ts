import { calculateChildcareEstimate } from "@/src/lib/tools/childcare/childcareEngine";
import type { ChildcareEstimatorInput, ChildcareScenarioRow } from "@/src/types/tools/childcare";

function baseClone(input: ChildcareEstimatorInput): ChildcareEstimatorInput {
  return JSON.parse(JSON.stringify(input)) as ChildcareEstimatorInput;
}

function pushScenario(
  rows: ChildcareScenarioRow[],
  seen: Set<string>,
  id: string,
  label: string,
  notes: string,
  modified: ChildcareEstimatorInput
) {
  if (seen.has(id)) return;
  const r = calculateChildcareEstimate(modified);
  rows.push({
    id,
    label,
    notes,
    grossMonthlyProviderCostEur: r.grossMonthlyProviderCostEur,
    estimatedMonthlyBenefitEur: r.estimatedMonthlyBenefitEur,
    estimatedMonthlyNetChildcareCostEur: r.estimatedMonthlyNetChildcareCostEur,
    annualNetChildcareCostEur: r.annualNetChildcareCostEur,
    firstMonthChildcareCashEur: r.firstMonthChildcareCashEur,
  });
  seen.add(id);
}

/** Ensure at least three non-“current” rows so comparisons stay useful on sparse inputs. */
function ensureMinimumAlternatives(input: ChildcareEstimatorInput, rows: ChildcareScenarioRow[]) {
  const seen = new Set(rows.map((r) => r.id));
  type Seed = { id: string; label: string; notes: string; modify: (i: ChildcareEstimatorInput) => void };
  const seeds: Seed[] = [
    {
      id: "plan-lower-income-band",
      label: "Lower income band (illustrative)",
      notes: "Shows how the model shifts when household income sits in a lower bracket — benefit share often rises; still verify with Belastingdienst.",
      modify: (i) => {
        const raw = i.benefit.annualHouseholdIncomeEur;
        const base = Number.isFinite(raw) && raw > 0 ? raw : 70_000;
        i.benefit.annualHouseholdIncomeEur = Math.max(22_000, Math.floor(base * 0.68));
      },
    },
    {
      id: "plan-premium-tier",
      label: "Premium model rate tier",
      notes: "If your real quote tracks the upper city anchor, gross bills land higher before subsidy.",
      modify: (i) => {
        i.providerCostTier = "premium";
      },
    },
    {
      id: "plan-low-tier",
      label: "Lean model rate tier",
      notes: "If you secure leaner hourly pricing, gross bills can sit closer to this anchor.",
      modify: (i) => {
        i.providerCostTier = "low";
      },
    },
    {
      id: "plan-single-household",
      label: "Single-parent household",
      notes: "Planning tweak in band math vs couple — real toeslag rules have more detail.",
      modify: (i) => {
        i.householdType = "single";
      },
    },
  ];

  for (const s of seeds) {
    if (rows.filter((r) => r.id !== "current").length >= 3) break;
    const modified = baseClone(input);
    s.modify(modified);
    pushScenario(rows, seen, s.id, s.label, s.notes, modified);
  }
}

/**
 * Built-in comparison scenarios for the estimator (deterministic variants of the current input).
 */
export function buildChildcareScenarioComparison(input: ChildcareEstimatorInput): ChildcareScenarioRow[] {
  const rows: ChildcareScenarioRow[] = [];
  const seen = new Set<string>();

  const current = calculateChildcareEstimate(input);
  rows.push({
    id: "current",
    label: "Your scenario",
    notes: "Exactly what you entered in the calculator.",
    grossMonthlyProviderCostEur: current.grossMonthlyProviderCostEur,
    estimatedMonthlyBenefitEur: current.estimatedMonthlyBenefitEur,
    estimatedMonthlyNetChildcareCostEur: current.estimatedMonthlyNetChildcareCostEur,
    annualNetChildcareCostEur: current.annualNetChildcareCostEur,
    firstMonthChildcareCashEur: current.firstMonthChildcareCashEur,
  });
  seen.add("current");

  if (input.children[0]) {
    const fewer = baseClone(input);
    const c0 = fewer.children[0];
    if (c0.hoursInputMode === "days_per_week" && c0.daysPerWeek > 1) {
      c0.daysPerWeek = c0.daysPerWeek - 1;
      pushScenario(
        rows,
        seen,
        "fewer-days",
        "One fewer care day / week (child 1)",
        "Same care type; fewer booked hours usually lowers gross and net together.",
        fewer
      );
    }

    const altType = baseClone(input);
    const t = altType.children[0].careType;
    altType.children[0].careType = t === "daycare" ? "gastouder" : t === "gastouder" ? "bso" : "daycare";
    altType.children[0].rateMode = "model";
    altType.children[0].manualHourlyRateEur = null;
    pushScenario(
      rows,
      seen,
      "alt-care-type",
      "Alternate care type (child 1)",
      "Swaps daycare, gastouder, or BSO with model rates so you can see cap and anchor differences.",
      altType
    );

    const capStress = baseClone(input);
    capStress.children[0].rateMode = "manual";
    const cap =
      capStress.taxYear === 2026
        ? capStress.children[0].careType === "daycare"
          ? 11.23
          : capStress.children[0].careType === "bso"
            ? 9.98
            : 8.49
        : capStress.children[0].careType === "daycare"
          ? 11.5
          : capStress.children[0].careType === "bso"
            ? 10.2
            : 8.7;
    capStress.children[0].manualHourlyRateEur = Math.round((cap + 2) * 100) / 100;
    pushScenario(
      rows,
      seen,
      "over-cap-stress",
      "Hourly rate €2 above official cap (child 1)",
      "Stress test: extra hourly cost above the reimbursable max usually stays out of pocket in this model.",
      capStress
    );
  }

  if (input.city !== "rotterdam") {
    const city = baseClone(input);
    city.city = "rotterdam";
    pushScenario(
      rows,
      seen,
      "city-rotterdam",
      "Same inputs, Rotterdam anchors",
      "Model hourly rates use Rotterdam instead of your selected city.",
      city
    );
  } else {
    const city = baseClone(input);
    city.city = "utrecht";
    pushScenario(
      rows,
      seen,
      "city-utrecht",
      "Same inputs, Utrecht anchors",
      "Model hourly rates use Utrecht instead of Rotterdam.",
      city
    );
  }

  if (input.children[0]?.hoursInputMode === "days_per_week") {
    const extraDay = baseClone(input);
    extraDay.children[0].daysPerWeek = Math.min(5, extraDay.children[0].daysPerWeek + 1);
    pushScenario(
      rows,
      seen,
      "extra-work-day",
      "+1 care day / week (child 1)",
      "Rough proxy for another working day that needs cover.",
      extraDay
    );
  }

  const bsoSwitch = baseClone(input);
  if (bsoSwitch.children[0]) {
    bsoSwitch.children[0].careType = "bso";
    bsoSwitch.children[0].ageBand = "4-7";
    bsoSwitch.children[0].schoolAge = true;
    bsoSwitch.children[0].scheduleMode = "school_weeks_only";
    bsoSwitch.children[0].rateMode = "model";
    pushScenario(
      rows,
      seen,
      "daycare-to-bso",
      "School-age + BSO-style pattern (child 1)",
      "Illustrative BSO with school-week hours factor — holidays may add separate costs in real life.",
      bsoSwitch
    );
  }

  if (input.children.length === 1) {
    const twoKids = baseClone(input);
    const first = twoKids.children[0];
    twoKids.children.push({
      ...first,
      id: `${first.id}-copy`,
      label: "Child 2",
      ageBand: first.ageBand === "0-1" ? "1-3" : first.ageBand,
    });
    pushScenario(
      rows,
      seen,
      "second-child",
      "Second child (clone of child 1)",
      "Duplicate profile to see multi-child banding — adjust ages and hours for a realistic second child.",
      twoKids
    );
  }

  ensureMinimumAlternatives(input, rows);
  return rows;
}
