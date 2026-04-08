import { estimateUtilitiesServices } from "./estimate";
import type { UtilitiesServicesInput, UsScenarioComparisonRow } from "./types";

function cloneInput(base: UtilitiesServicesInput, patch: Partial<UtilitiesServicesInput>): UtilitiesServicesInput {
  return { ...base, ...patch };
}

function roundSig(n: number): number {
  return Math.round(n * 10) / 10;
}

export function buildUtilitiesScenarioComparisons(baseInput: UtilitiesServicesInput): UsScenarioComparisonRow[] {
  const base = estimateUtilitiesServices(baseInput);

  const raw: Omit<UsScenarioComparisonRow, "monthlyDeltaEur" | "setupDeltaEur">[] = [];

  const apartmentVsHouse = (() => {
    const alt = cloneInput(baseInput, {
      housingType: baseInput.housingType === "larger_house" ? "apartment" : "larger_house",
    });
    const r = estimateUtilitiesServices(alt);
    const top = r.serviceBreakdown.reduce(
      (a, b) => (b.monthlyEur > a.monthlyEur ? b : a),
      r.serviceBreakdown[0] ?? { label: "Energy", monthlyEur: 0 }
    );
    return {
      id: "housing-type",
      label: baseInput.housingType === "larger_house" ? "If you chose an apartment instead" : "If you chose a larger house instead",
      monthlyTotalEur: r.monthlyTotals.allInEur,
      firstMonthSetupEur: r.setupTotalEur,
      biggestCostDriver: top.label,
      whatChanged: "Home size and type shift heating and energy use more than most other lines.",
    };
  })();
  raw.push(apartmentVsHouse);

  const usage = (() => {
    const alt = cloneInput(baseInput, {
      usageLevel: baseInput.usageLevel === "high" ? "low" : "high",
    });
    const r = estimateUtilitiesServices(alt);
    return {
      id: "usage",
      label: baseInput.usageLevel === "high" ? "If usage were lower" : "If usage were higher",
      monthlyTotalEur: r.monthlyTotals.allInEur,
      firstMonthSetupEur: r.setupTotalEur,
      biggestCostDriver: "Energy (electricity + gas / heat)",
      whatChanged: "Usage level mainly moves energy and nudges mobile/data needs at the margins.",
    };
  })();
  raw.push(usage);

  if (baseInput.includeInternet) {
    const net = (() => {
      const alt = cloneInput(baseInput, {
        internetTier: baseInput.internetTier === "fast" ? "basic" : "fast",
      });
      const r = estimateUtilitiesServices(alt);
      return {
        id: "internet-tier",
        label: baseInput.internetTier === "fast" ? "If you only needed basic internet" : "If you needed fast / fiber-heavy internet",
        monthlyTotalEur: r.monthlyTotals.allInEur,
        firstMonthSetupEur: r.setupTotalEur,
        biggestCostDriver: "Home internet / broadband",
        whatChanged: "Speed tier changes the recurring internet line and sometimes install friction.",
      };
    })();
    raw.push(net);
  }

  const household = (() => {
    const toFamily = baseInput.householdType !== "family";
    const alt = cloneInput(baseInput, {
      householdType: toFamily ? "family" : "single",
      childrenCount: toFamily ? Math.max(1, baseInput.childrenCount || 1) : 0,
      adultsCount: toFamily ? Math.max(2, baseInput.adultsCount) : 1,
    });
    const r = estimateUtilitiesServices(alt);
    return {
      id: "household",
      label: toFamily ? "If you were a small family household" : "If you were a single-person household",
      monthlyTotalEur: r.monthlyTotals.allInEur,
      firstMonthSetupEur: r.setupTotalEur,
      biggestCostDriver: "Energy (electricity + gas / heat)",
      whatChanged: "More people typically increases water, municipality-linked assumptions, and mobile lines.",
    };
  })();
  raw.push(household);

  const efficiency = (() => {
    const alt = cloneInput(baseInput, {
      energyQuality: baseInput.energyQuality === "efficient" ? "low" : "efficient",
    });
    /** Quick mode normally collapses shell/heat; force detailed semantics so the flipped energy quality actually applies. */
    const r = estimateUtilitiesServices({ ...alt, plannerMode: "detailed" });
    return {
      id: "efficiency",
      label:
        baseInput.energyQuality === "efficient"
          ? "If the home were older / less efficient"
          : "If the home were efficient / newer",
      monthlyTotalEur: r.monthlyTotals.allInEur,
      firstMonthSetupEur: r.setupTotalEur,
      biggestCostDriver: "Energy (electricity + gas / heat)",
      whatChanged: "Building efficiency is one of the largest levers on recurring energy spend.",
    };
  })();
  raw.push(efficiency);

  if (baseInput.city !== "utrecht") {
    const city = (() => {
      const alt = cloneInput(baseInput, { city: "utrecht" });
      const r = estimateUtilitiesServices(alt);
      return {
        id: "city-utrecht",
        label: "Benchmark: same profile in Utrecht",
        monthlyTotalEur: r.monthlyTotals.allInEur,
        firstMonthSetupEur: r.setupTotalEur,
        biggestCostDriver: "Municipality & local household charges",
        whatChanged: "Local charges and small lifestyle anchors differ by city; energy and internet still dominate many budgets.",
      };
    })();
    raw.push(city);
  } else {
    const city = (() => {
      const alt = cloneInput(baseInput, { city: "amsterdam" });
      const r = estimateUtilitiesServices(alt);
      return {
        id: "city-amsterdam",
        label: "Benchmark: same profile in Amsterdam",
        monthlyTotalEur: r.monthlyTotals.allInEur,
        firstMonthSetupEur: r.setupTotalEur,
        biggestCostDriver: base.serviceBreakdown[0]?.label ?? "Energy (electricity + gas / heat)",
        whatChanged: "Municipality estimates and optional bundle nudges change slightly between Randstad cities.",
      };
    })();
    raw.push(city);
  }

  const withDeltas: UsScenarioComparisonRow[] = raw.map((row) => ({
    ...row,
    monthlyDeltaEur: row.monthlyTotalEur - base.monthlyTotals.allInEur,
    setupDeltaEur: row.firstMonthSetupEur - base.setupTotalEur,
  }));

  const filtered = withDeltas.filter((row) => {
    if (Math.abs(row.monthlyDeltaEur) < 0.05 && Math.abs(row.setupDeltaEur) < 0.05) return false;
    if (row.id === "usage" && Math.abs(row.monthlyDeltaEur) < 5) return false;
    return true;
  });

  const seen = new Set<string>();
  const deduped: UsScenarioComparisonRow[] = [];
  for (const row of filtered) {
    const key = `${roundSig(row.monthlyTotalEur)}|${roundSig(row.firstMonthSetupEur)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(row);
  }

  deduped.sort((a, b) => Math.abs(b.monthlyDeltaEur) - Math.abs(a.monthlyDeltaEur));

  return deduped.slice(0, 5);
}
