import type { ColCity, ColInput } from "../types";

export type ScenarioVariant = { id: string; label: string; input: ColInput };

const CHEAPER_ALT: Partial<Record<ColCity, ColCity>> = {
  amsterdam: "rotterdam",
  rotterdam: "groningen",
  utrecht: "eindhoven",
  "the-hague": "rotterdam",
  eindhoven: "groningen",
  haarlem: "leiden",
  delft: "rotterdam",
  groningen: "eindhoven",
  leiden: "the-hague",
  other: "rotterdam",
};

function clone(i: ColInput): ColInput {
  return { ...i };
}

/**
 * At least three useful alternatives when possible: commuter/smaller city, housing downshift, lifestyle/childcare/pet deltas.
 */
export function buildScenarioVariants(base: ColInput): ScenarioVariant[] {
  const out: ScenarioVariant[] = [{ id: "a", label: "Your scenario", input: clone(base) }];
  const push = (id: string, label: string, input: ColInput) => {
    out.push({ id, label, input });
  };

  // 1) Commuter belt + slightly smaller home (when not already smallest useful)
  const commuter = clone(base);
  commuter.neighborhood = "commuter";
  if (base.housingMode === "apartment_3bed_family") commuter.housingMode = "apartment_2bed";
  else if (base.housingMode === "apartment_2bed") commuter.housingMode = "apartment_1bed";
  push(
    "b",
    base.city === "amsterdam"
      ? "Commuter belt + smaller home (vs Amsterdam center-weighted)"
      : "Commuter belt + tighter housing mode",
    commuter
  );

  // 2) Nearby cheaper city (when map exists)
  const altCity = CHEAPER_ALT[base.city];
  if (altCity && altCity !== base.city) {
    const c = clone(base);
    c.city = altCity;
    c.neighborhood = "outside";
    push("c", `Nearby cheaper city: ${altCity.replace(/-/g, " ")} (model rent band)`, c);
  }

  // 3) One-bed / room downshift if still multi-bed
  if (base.housingMode === "apartment_2bed" || base.housingMode === "apartment_3bed_family") {
    const d = clone(base);
    d.housingMode = "apartment_1bed";
    push("d", "Smaller home: 1-bedroom apartment", d);
  }

  // 4) Lower lifestyle tier
  if (base.lifestyle !== "basic") {
    const e = clone(base);
    e.lifestyle = "basic";
    e.diningLevel = base.diningLevel === "high" ? "medium" : "low";
    push("e", "Lower lifestyle + dining tier (basic / leaner dining)", e);
  }

  // 5) Without childcare
  if (base.childcareNeeded) {
    const f = clone(base);
    f.childcareNeeded = false;
    f.childcareIntensity = "none";
    push("f", "Without childcare (same household otherwise)", f);
  }

  // 6) Without pet
  if (base.pet) {
    const g = clone(base);
    g.pet = false;
    push("g", "Without pet cost uplift", g);
  }

  // Dedupe by stable key (city+neighborhood+housing+lifestyle+childcare+pet)
  const seen = new Set<string>();
  const deduped: ScenarioVariant[] = [];
  for (const row of out) {
    const k = [
      row.input.city,
      row.input.neighborhood,
      row.input.housingMode,
      row.input.lifestyle,
      row.input.childcareNeeded,
      row.input.pet,
      row.input.transportMode,
    ].join("|");
    if (seen.has(k) && row.id !== "a") continue;
    seen.add(k);
    deduped.push(row);
  }

  return deduped.slice(0, 6);
}
