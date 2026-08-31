import type {
  CostBreakdownItem,
  CostRange,
  RepatriationCostBand,
  RepatriationCostInput,
  RepatriationCostResult,
} from "./types";

function range(min: number, typical: number, max: number): CostRange {
  return { min, typical, max };
}

function scale(r: CostRange, mult: number): CostRange {
  return {
    min: Math.round(r.min * mult),
    typical: Math.round(r.typical * mult),
    max: Math.round(r.max * mult),
  };
}

function add(a: CostRange, b: CostRange): CostRange {
  return { min: a.min + b.min, typical: a.typical + b.typical, max: a.max + b.max };
}

function householdMult(size: RepatriationCostInput["householdSize"]): number {
  if (size === "2") return 1.55;
  if (size === "3_plus") return 2.1;
  return 1;
}

function flightsRange(input: RepatriationCostInput): CostRange {
  if (input.flightsNeeded === "none_already") return range(0, 0, 0);
  const baseByRegion: Record<string, CostRange> = {
    europe: range(80, 180, 350),
    uk_or_nearby: range(60, 150, 320),
    north_america: range(450, 750, 1400),
    asia_pacific: range(550, 950, 1800),
    other: range(400, 800, 1600),
    unsure: range(200, 500, 1200),
  };
  return scale(baseByRegion[input.destinationRegion] ?? baseByRegion.unsure, householdMult(input.householdSize));
}

function shippingRange(input: RepatriationCostInput): CostRange {
  const base: Record<string, CostRange> = {
    suitcases: range(0, 50, 150),
    few_boxes: range(150, 400, 900),
    room_partial: range(800, 1800, 3500),
    full_container: range(3500, 6500, 12000),
    unsure: range(200, 1200, 5000),
  };
  let r = base[input.shippingVolume] ?? base.unsure;
  if (input.destinationRegion === "north_america" || input.destinationRegion === "asia_pacific") {
    r = scale(r, 1.35);
  } else if (input.destinationRegion === "other") {
    r = scale(r, 1.2);
  }
  if (input.householdSize === "3_plus" && input.shippingVolume !== "suitcases") {
    r = scale(r, 1.25);
  }
  return r;
}

function leaseRange(input: RepatriationCostInput): CostRange {
  if (input.leaseBreakRisk === "none") return range(0, 0, 100);
  if (input.leaseBreakRisk === "deposit_at_risk") return range(500, 1500, 3000);
  if (input.leaseBreakRisk === "early_fee_possible") return range(800, 2200, 4500);
  return range(0, 800, 2500);
}

function tempHousingRange(input: RepatriationCostInput): CostRange {
  const perWeek = range(350, 650, 1100);
  const weeks: Record<string, number> = {
    "0": 0,
    "1_to_2": 1.5,
    "3_to_4": 3.5,
    longer: 6,
    unsure: 2,
  };
  const w = weeks[input.tempHousingWeeks] ?? 2;
  return scale(perWeek, w * (input.householdSize === "1" ? 1 : input.householdSize === "2" ? 1.3 : 1.55));
}

function petsRange(input: RepatriationCostInput): CostRange {
  if (input.pets !== "yes") return range(0, 0, 0);
  return range(400, 1200, 3500);
}

function adminRange(): CostRange {
  return range(50, 200, 500);
}

function pickBand(total: CostRange, input: RepatriationCostInput, escalate: boolean): RepatriationCostBand {
  if (escalate && (input.shippingVolume === "unsure" || input.destinationRegion === "unsure")) {
    return "needs_more_detail";
  }
  if (total.typical < 2500) return "lean_exit";
  if (total.typical < 8000) return "typical_exit";
  return "heavy_exit";
}

function bandCopy(band: RepatriationCostBand, total: CostRange): Pick<RepatriationCostResult, "headline" | "summary" | "confidenceNote"> {
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  switch (band) {
    case "lean_exit":
      return {
        headline: "Lean exit budget range",
        summary: `Planning total around ${fmt(total.min)}–${fmt(total.max)} (typical ~${fmt(total.typical)}). Suitcase-light moves still need flights, deposits, and a cash buffer for surprises.`,
        confidenceNote: "Orientation ranges only — not a quote. Confirm movers, airlines, and lease terms.",
      };
    case "typical_exit":
      return {
        headline: "Typical repatriation cost band",
        summary: `Planning total around ${fmt(total.min)}–${fmt(total.max)} (typical ~${fmt(total.typical)}). Shipping and temporary housing usually dominate — sequence payments before your last Dutch salary.`,
        confidenceNote: "Ranges are illustrative planning bands — verify with providers.",
      };
    case "heavy_exit":
      return {
        headline: "Heavier exit — shipping and housing drive cost",
        summary: `Planning total around ${fmt(total.min)}–${fmt(total.max)} (typical ~${fmt(total.typical)}). Full shipments, long temp housing, pets, or lease break risk can stack quickly. Get written quotes early.`,
        confidenceNote: "High-end scenarios vary widely by destination and volume.",
      };
    case "needs_more_detail":
      return {
        headline: "Add destination and shipping detail for a clearer range",
        summary:
          "Too many inputs are unsure for a tight band. Clarify destination region and shipment size, then re-run. Use the exit readiness checker in parallel for admin sequencing.",
        confidenceNote: "Wide ranges are expected until volume and destination are known.",
      };
  }
}

export function calculateRepatriationCost(input: RepatriationCostInput): RepatriationCostResult {
  const breakdown: CostBreakdownItem[] = [
    {
      id: "flights",
      label: "Flights / travel",
      range: flightsRange(input),
      note: "One-way household estimate; peak season and baggage can push higher.",
    },
    {
      id: "shipping",
      label: "Shipping / moving goods",
      range: shippingRange(input),
      note: "Suitcases vs container — get at least two mover quotes for room+ volumes.",
    },
    {
      id: "lease",
      label: "Lease break / deposit risk",
      range: leaseRange(input),
      note: "Depends on contract notice and inspection outcome — not automatic.",
    },
    {
      id: "temp-housing",
      label: "Temporary housing at destination",
      range: tempHousingRange(input),
      note: "Bridge weeks before long-term housing; family size scales cost.",
    },
    {
      id: "pets",
      label: "Pet relocation",
      range: petsRange(input),
      note: "Vaccines, crates, flights, and quarantine rules vary by country.",
    },
    {
      id: "admin",
      label: "Admin, documents, small closures",
      range: adminRange(),
      note: "Apostilles, courier, unused subscriptions, and misc exit fees.",
    },
  ];

  const total = breakdown.reduce((acc, item) => add(acc, item.range), range(0, 0, 0));

  const escalateReasons: string[] = [];
  if (input.destinationRegion === "unsure") escalateReasons.push("Destination region is unsure — flight and shipping bands widen.");
  if (input.shippingVolume === "unsure") escalateReasons.push("Shipping volume is unsure — mover quotes will move the total most.");
  if (input.leaseBreakRisk === "unsure") escalateReasons.push("Lease break risk unclear — check notice and deposit terms.");
  if (input.pets === "unsure") escalateReasons.push("Pet plans unclear — international pet moves can be a large add-on.");

  const escalate = escalateReasons.length > 0;
  const band = pickBand(total, input, escalate);
  const copy = bandCopy(band, total);

  const cashTimingNotes = [
    "Movers and flights often need deposits weeks before departure.",
    "Keep a buffer for deposit disputes and overlapping rent weeks.",
    "Last Dutch payslip timing may not match when large exit invoices are due.",
  ];
  if (input.tempHousingWeeks !== "0") {
    cashTimingNotes.push("Temporary housing at destination is usually paid upfront or weekly.");
  }

  return {
    band,
    ...copy,
    total,
    breakdown,
    cashTimingNotes,
    nextSteps: [
      {
        id: "exit-checker",
        label: "Exit readiness checker",
        href: "/netherlands/leaving/tools/exit-readiness-checker/",
      },
      {
        id: "leaving-tax",
        label: "Taxes when leaving the Netherlands",
        href: "/netherlands/taxes/leaving-netherlands-tax/",
      },
      {
        id: "extensions",
        label: "Extensions and changes",
        href: "/netherlands/moving/extensions-changes/",
      },
    ],
    escalate,
    escalateReasons,
  };
}
