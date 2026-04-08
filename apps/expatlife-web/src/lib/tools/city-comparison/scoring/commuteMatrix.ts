import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import type {
  CityComparisonId,
  CommuteInsightsBundle,
  CommuteModeInsightBlock,
  CommuteModePref,
} from "../types";
import { getNormalizedCityProfile } from "./normalizedProfiles";
import type { CommuteMatrixCell, CommuteModeMetricStrings, CommutePracticalityClass } from "./types";

/**
 * Numeric score per commute class (0–100). Used after max-commute tolerance multipliers.
 * Formula: fixed lookup — not calibrated to minutes.
 */
export function commuteClassToBaseScore(c: CommutePracticalityClass): number {
  switch (c) {
    case "excellent":
      return 96;
    case "good":
      return 84;
    case "workable":
      return 70;
    case "long":
      return 52;
    case "poor":
      return 24;
    default:
      return 55;
  }
}

/** Map user office picker to matrix hub (5 named hubs + Groningen for northern accuracy). */
export function matrixOfficeHub(office: ColCity): ColCity {
  switch (office) {
    case "haarlem":
      return "amsterdam";
    case "delft":
      return "rotterdam";
    case "leiden":
      return "the-hague";
    case "amsterdam":
    case "rotterdam":
    case "utrecht":
    case "the-hague":
    case "eindhoven":
    case "groningen":
      return office;
    default:
      return "amsterdam";
  }
}

type HomeKey = ColCity;

const NS_DISRUPTION =
  "Planned track works (often weekends), storms, or incidents can add 15–60+ minutes — check NS / 9292 on office days.";

const UT_AMS_ENRICH: Pick<CommuteMatrixCell, "metrics" | "corridorDisruption"> = {
  metrics: {
    train_pt: {
      typicalOneWay: "≈35–55 min door-to-door (intercity + stations + metro or tram)",
      reliability: "Most days run on time; delays feel loud when they happen. Rush-hour trains are crowded.",
      costRough:
        "Rough €90–230/mo for ~8–12 office days/mo with flex tickets or subscriptions — confirm with NS / your employer.",
    },
    bike: {
      typicalOneWay: "End-to-end by bike is usually 2+ h one way; many people bike only to Utrecht Centraal.",
      reliability: "Weather on the bike leg; train segment still subject to NS delays.",
      costRough: "Train as above; bike upkeep typically small month to month.",
    },
    car: {
      typicalOneWay: "≈45–80 min via A2/A27 depending on traffic and parking search in Amsterdam.",
      reliability: "Rush-hour jams and accidents cause spikes; centre parking is unpredictable.",
      costRough: "Often €220–520+/mo fuel + Amsterdam parking if driving most workdays (very rough).",
    },
  },
  corridorDisruption: NS_DISRUPTION,
};

const HAGUE_AMS_ENRICH: Pick<CommuteMatrixCell, "metrics" | "corridorDisruption"> = {
  metrics: {
    train_pt: {
      typicalOneWay: "≈50–75 min door-to-door on a typical intercity + last-mile day",
      reliability: "Longer leg = more exposure to cumulative delays; standing room common at peak.",
      costRough: "Rough €110–270/mo for hybrid commuting patterns (illustrative — verify tickets).",
    },
    car: {
      typicalOneWay: "≈55–95 min motorway + Amsterdam approach and parking hunt",
      reliability: "A4/A13 and ring A10 congestion; events can clog both cities.",
      costRough: "Often €240–560+/mo fuel + parking if driving most workdays (rough).",
    },
  },
  corridorDisruption: NS_DISRUPTION,
};

const HAARLEM_AMS_ENRICH: Pick<CommuteMatrixCell, "metrics" | "corridorDisruption"> = {
  metrics: {
    train_pt: {
      typicalOneWay: "≈25–45 min door-to-door (sprinter/intercity + short transfers)",
      reliability: "Usually dependable; peak trains fill up fast.",
      costRough: "Often €55–150/mo for several office days (illustrative).",
    },
    bike: {
      typicalOneWay: "≈60–95 min for strong riders — weather and wind matter.",
      reliability: "No rail-style cancellations; fatigue and seasons dominate.",
      costRough: "Low cash cost beyond bike upkeep.",
    },
    car: {
      typicalOneWay: "≈35–55 min off-peak; Amsterdam-side parking is the bottleneck",
      reliability: "A9/A200 traffic spikes; centre garages fill on event days.",
      costRough: "Parking near work often €150–380+/mo combined with fuel (rough).",
    },
  },
  corridorDisruption: "Sprinter cancellations or bus replacements happen; check live departures at peak.",
};

/** Pair: `${home}-${officeHub}` with officeHub from matrixOfficeHub. */
const PAIRS: Record<string, CommuteMatrixCell> = {
  "amsterdam-amsterdam": {
    practicality: "excellent",
    trainPt: "Tram, metro, and buses inside Amsterdam — time depends a lot on neighbourhood.",
    bike: "Often the quickest cross-town option where lanes are good.",
    car: "Parking and traffic usually make bike or transit nicer for the centre.",
    metrics: {
      train_pt: {
        typicalOneWay: "≈25–50 min depending on borough (IJburg vs Zuid vs West differ sharply)",
        reliability: "Diversions during tram/metro upgrades; very full trams at rush hour.",
        costRough: "Ballpark €40–120/mo for several office days with GVB + occasional NS (illustrative).",
      },
      bike: {
        typicalOneWay: "≈12–35 min for many practical cross-city trips",
        reliability: "Rain and detours; fewer timetable surprises than rail.",
        costRough: "Usually under €25/mo marginal once you own a bike.",
      },
      car: {
        typicalOneWay: "≈20–45 min off-peak plus time finding parking at work",
        reliability: "Roadworks and events; centre parking stress.",
        costRough: "Garages and permits often €150–400+/mo in core areas (rough).",
      },
    },
    corridorDisruption:
      "Replacement buses during track work; big events (concerts, marathons) reshape routes across the city.",
  },
  "amsterdam-rotterdam": {
    practicality: "workable",
    trainPt: "Direct intercity — common for hybrid weeks; heavy if you need five office days.",
    bike: "Not a daily option.",
    car: "Motorway possible; parking in Amsterdam and fatigue add up.",
    metrics: {
      train_pt: {
        typicalOneWay: "≈55–80 min door-to-door typical",
        reliability: "NS delays hit harder on long legs; crowding on peak trains.",
        costRough: "Rough €120–280/mo for hybrid office weeks (illustrative).",
      },
      bike: {
        typicalOneWay: "Not realistic end-to-end daily.",
        reliability: "—",
        costRough: "—",
      },
      car: {
        typicalOneWay: "≈65–100 min depending on A4/A13 and ring traffic",
        reliability: "Accidents and rush-hour queues; parking at both ends.",
        costRough: "Often €260–580+/mo fuel + parking if driving most workdays (rough).",
      },
    },
    corridorDisruption: NS_DISRUPTION,
  },
  "amsterdam-utrecht": {
    practicality: "good",
    trainPt: "Frequent intercity trains — a classic commute thousands do several days a week.",
    bike: "Too far for most as a pure daily ride; bike-to-station is common.",
    car: "A2/A27; Amsterdam parking remains the expensive part.",
    ...UT_AMS_ENRICH,
  },
  "amsterdam-the-hague": {
    practicality: "workable",
    trainPt: "Direct trains — workable hybrid weeks; tiring if the office is five days in Amsterdam.",
    bike: "Not realistic as a daily door-to-door ride.",
    car: "Motorway possible; time plus Amsterdam parking wear you down.",
    ...HAGUE_AMS_ENRICH,
  },
  "amsterdam-eindhoven": {
    practicality: "long",
    trainPt: "Intercity is the sane default — long block each way; hybrid beats five days.",
    bike: "Not applicable.",
    car: "Long drive; fatigue and parking at the Amsterdam end hurt.",
    metrics: {
      train_pt: {
        typicalOneWay: "≈85–115 min door-to-door typical",
        reliability: "Any delay eats a big chunk of the evening; fewer trains per hour than Randstad hops.",
        costRough: "Rough €140–320/mo if commuting multiple days (illustrative).",
      },
      bike: {
        typicalOneWay: "Not a practical daily mode.",
        reliability: "—",
        costRough: "—",
      },
      car: {
        typicalOneWay: "≈95–130 min on a good run; worse in bad weather or jams",
        reliability: "A2/A50 congestion; long concentration span daily.",
        costRough: "Often €300–650+/mo fuel + parking if driving most workdays (rough).",
      },
    },
    corridorDisruption: NS_DISRUPTION,
  },
  "amsterdam-groningen": {
    practicality: "poor",
    trainPt: "Very long intercity — not a sustainable daily commute for most people.",
    bike: "Not applicable.",
    car: "Rare as a healthy daily rhythm.",
    metrics: {
      train_pt: {
        typicalOneWay: "≈2–2.5 h+ door-to-door typical",
        reliability: "Delays turn the day into travel; not a corridor you want to bet your lease on.",
        costRough: "High monthly spend if truly commuting — often cheaper to negotiate remote or relocate.",
      },
      bike: {
        typicalOneWay: "Not applicable.",
        reliability: "—",
        costRough: "—",
      },
      car: {
        typicalOneWay: "≈2.5–3+ h in real conditions",
        reliability: "Fatigue and weather; not realistic five days a week.",
        costRough: "Fuel alone becomes prohibitive; parking in Amsterdam still applies.",
      },
    },
    corridorDisruption: NS_DISRUPTION,
  },

  "rotterdam-rotterdam": {
    practicality: "excellent",
    trainPt: "RET/metro region.",
    bike: "Strong for many cross-city trips.",
    car: "Suburbs OK; centre parking costly.",
  },
  "rotterdam-amsterdam": {
    practicality: "workable",
    trainPt: "Direct intercity — time adds up; hybrid office weeks are common.",
    bike: "Not a daily door-to-door option for most.",
    car: "Motorway congestion and Amsterdam parking at the end hurt.",
    metrics: {
      train_pt: {
        typicalOneWay: "≈55–80 min door-to-door typical",
        reliability: "Randstad congestion delays stack; peak trains very full.",
        costRough: "Rough €120–280/mo for several office days (illustrative).",
      },
      bike: {
        typicalOneWay: "Not realistic end-to-end daily.",
        reliability: "—",
        costRough: "—",
      },
      car: {
        typicalOneWay: "≈65–105 min depending on A4/A13 and ring traffic",
        reliability: "Accident queues; parking hunt in Amsterdam.",
        costRough: "Often €260–580+/mo fuel + parking (rough).",
      },
    },
    corridorDisruption: NS_DISRUPTION,
  },
  "rotterdam-utrecht": {
    practicality: "workable",
    trainPt: "Direct trains — material door-to-door time.",
    bike: "Not daily.",
    car: "Highway possible; daily is tiring.",
  },
  "rotterdam-the-hague": {
    practicality: "excellent",
    trainPt: "Sprinter corridor — very common regional commute.",
    bike: "Long but occasional for enthusiasts.",
    car: "Short hop when parking is sorted.",
  },
  "rotterdam-eindhoven": {
    practicality: "long",
    trainPt: "Intercity with transfers or direct depending on slot — long day.",
    bike: "Not daily.",
    car: "Highway-heavy; daily is draining.",
  },
  "rotterdam-groningen": {
    practicality: "poor",
    trainPt: "Cross-country IC — not a daily pattern.",
    bike: "Not applicable.",
    car: "Not sustainable daily.",
  },

  "utrecht-utrecht": {
    practicality: "excellent",
    trainPt: "Local bus/tram and NS hub walks.",
    bike: "Very strong inside the city.",
    car: "Centre parking is the constraint.",
  },
  "utrecht-amsterdam": {
    practicality: "good",
    trainPt: "Frequent intercity trains — a classic commute many people do part of the week.",
    bike: "Too far for most as a pure daily ride; cycling to the station is common.",
    car: "A2; Amsterdam-side parking dominates cost.",
    ...UT_AMS_ENRICH,
  },
  "utrecht-rotterdam": {
    practicality: "workable",
    trainPt: "Direct connection — meaningful daily time.",
    bike: "Not daily.",
    car: "Possible; hybrid fits better.",
  },
  "utrecht-the-hague": {
    practicality: "good",
    trainPt: "Direct sprinter/IC options — common regional commute.",
    bike: "Long for daily.",
    car: "Highway workable; parking varies.",
  },
  "utrecht-eindhoven": {
    practicality: "long",
    trainPt: "Intercity — long block each way.",
    bike: "Not daily.",
    car: "Long drive.",
  },
  "utrecht-groningen": {
    practicality: "poor",
    trainPt: "Long IC — not daily-viable for most.",
    bike: "Not applicable.",
    car: "Rare daily choice.",
  },

  "the-hague-the-hague": {
    practicality: "excellent",
    trainPt: "HTM/RRR region.",
    bike: "Good for many neighborhoods.",
    car: "Parking rules vary by district.",
  },
  "the-hague-amsterdam": {
    practicality: "workable",
    trainPt: "Direct intercity — fine hybrid-week pattern; a big commitment five days a week.",
    bike: "Not a realistic daily door-to-door ride.",
    car: "Motorway time plus Amsterdam parking and fatigue.",
    ...HAGUE_AMS_ENRICH,
  },
  "the-hague-rotterdam": {
    practicality: "excellent",
    trainPt: "E-line / sprinter — easy Randstad link.",
    bike: "Long segments possible.",
    car: "Short highway hop.",
  },
  "the-hague-utrecht": {
    practicality: "good",
    trainPt: "Direct trains — regular regional commute.",
    bike: "Not daily for most.",
    car: "Workable when parking arranged.",
  },
  "the-hague-eindhoven": {
    practicality: "long",
    trainPt: "Intercity — long day trip.",
    bike: "Not daily.",
    car: "Highway length adds up.",
  },
  "the-hague-groningen": {
    practicality: "poor",
    trainPt: "Cross-country — not daily.",
    bike: "Not applicable.",
    car: "Not daily-sane.",
  },

  "eindhoven-eindhoven": {
    practicality: "excellent",
    trainPt: "Local bus and bike-accessible employers.",
    bike: "Strong in town.",
    car: "Suburban and industrial zones vary.",
  },
  "eindhoven-amsterdam": {
    practicality: "long",
    trainPt: "IC reliable but long — hybrid fits better than five days.",
    bike: "Not applicable.",
    car: "Long drive; train usually less stressful.",
  },
  "eindhoven-rotterdam": {
    practicality: "long",
    trainPt: "Intercity with meaningful travel block.",
    bike: "Not daily.",
    car: "Long highway day.",
  },
  "eindhoven-utrecht": {
    practicality: "long",
    trainPt: "Intercity — time-heavy each way.",
    bike: "Not daily.",
    car: "Possible but tiring daily.",
  },
  "eindhoven-the-hague": {
    practicality: "long",
    trainPt: "Intercity — long rhythm.",
    bike: "Not daily.",
    car: "Distance and fatigue.",
  },
  "eindhoven-groningen": {
    practicality: "poor",
    trainPt: "Cross-country — not a daily commute pattern.",
    bike: "Not applicable.",
    car: "Rare for daily office use.",
  },

  "groningen-groningen": {
    practicality: "excellent",
    trainPt: "Local Q-link / bus and bike city.",
    bike: "Dominant mode for many residents.",
    car: "Works outside core.",
  },
  "groningen-amsterdam": {
    practicality: "poor",
    trainPt: "Long IC — incompatible with daily Randstad office for most.",
    bike: "Not applicable.",
    car: "Not a sustainable daily pattern.",
  },
  "groningen-rotterdam": {
    practicality: "poor",
    trainPt: "Very long journey — planning model treats as poor daily fit.",
    bike: "Not applicable.",
    car: "Not daily.",
  },
  "groningen-utrecht": {
    practicality: "poor",
    trainPt: "Long IC — not daily-viable for typical office jobs.",
    bike: "Not applicable.",
    car: "Rare daily.",
  },
  "groningen-the-hague": {
    practicality: "poor",
    trainPt: "Cross-country length — poor daily practicality.",
    bike: "Not applicable.",
    car: "Not daily.",
  },
  "groningen-eindhoven": {
    practicality: "long",
    trainPt: "Long intercity — tiring if attempted daily.",
    bike: "Not daily.",
    car: "Long drive; hybrid only.",
  },

  "haarlem-amsterdam": {
    practicality: "excellent",
    trainPt: "Short train hop — one of the busiest commuter flows into Amsterdam.",
    bike: "Possible for strong riders; wind and rain matter.",
    car: "Amsterdam-side parking is usually the pain point.",
    ...HAARLEM_AMS_ENRICH,
  },
  "delft-rotterdam": {
    practicality: "excellent",
    trainPt: "Very short hop — frequent daily commuters.",
    bike: "Popular daily option for many.",
    car: "Short; parking varies.",
  },
  "leiden-the-hague": {
    practicality: "excellent",
    trainPt: "Sprinter — easy regional commute.",
    bike: "Doable for enthusiasts.",
    car: "Short when parking arranged.",
  },
};

const DEFAULT_CELL: CommuteMatrixCell = {
  practicality: "long",
  trainPt: "Intercity-dependent — plug your exact stations into NS or 9292 before you decide.",
  bike: "Usually not a realistic daily mode at this distance.",
  car: "Possible but fuel, parking, and time erode rent savings.",
  corridorDisruption: NS_DISRUPTION,
};

type ModeKey = "train_pt" | "bike" | "car";

const CLASS_DEFAULT_METRICS: Record<CommutePracticalityClass, Record<ModeKey, CommuteModeMetricStrings>> = {
  excellent: {
    train_pt: {
      typicalOneWay: "≈20–45 min door-to-door in many cases",
      reliability: "Usually steady; rush hour means full vehicles, not always delays.",
      costRough: "Often €40–130/mo for a few office days with local passes (illustrative).",
    },
    bike: {
      typicalOneWay: "≈15–35 min when the route is bike-friendly",
      reliability: "Weather and detours; no timetable surprises like rail cancellations.",
      costRough: "Usually small once you own the bike.",
    },
    car: {
      typicalOneWay: "≈20–50 min off-peak plus parking search",
      reliability: "Traffic spikes and event detours near city cores.",
      costRough: "Rough €140–420+/mo fuel + parking if driving most workdays (very indicative).",
    },
  },
  good: {
    train_pt: {
      typicalOneWay: "≈35–60 min door-to-door typical",
      reliability: "Occasional NS delays; crowded peak trains.",
      costRough: "Rough €80–220/mo for hybrid commuting (illustrative).",
    },
    bike: {
      typicalOneWay: "≈25–55 min when distance is realistic; often combined with a train leg",
      reliability: "Train segment still subject to delays; bike adds weather risk.",
      costRough: "Train spend as above; bike upkeep low.",
    },
    car: {
      typicalOneWay: "≈40–75 min depending on motorway and ring traffic",
      reliability: "Accidents and rush-hour queues.",
      costRough: "Often €200–480+/mo fuel + parking (rough).",
    },
  },
  workable: {
    train_pt: {
      typicalOneWay: "≈50–85 min door-to-door typical",
      reliability: "Delays compound on longer legs; standing room common.",
      costRough: "Rough €100–270/mo for several office days (illustrative).",
    },
    bike: {
      typicalOneWay: "Rarely the whole trip — usually bike + train or not daily.",
      reliability: "—",
      costRough: "—",
    },
    car: {
      typicalOneWay: "≈55–100 min on a decent day; worse in peaks",
      reliability: "Motorway + city approach both congest.",
      costRough: "Often €240–560+/mo fuel + parking (rough).",
    },
  },
  long: {
    train_pt: {
      typicalOneWay: "≈75–120+ min door-to-door",
      reliability: "High fatigue risk; small delays become big problems.",
      costRough: "Expensive if frequent — often worth negotiating hybrid work or moving closer.",
    },
    bike: {
      typicalOneWay: "Not a realistic daily commute for most.",
      reliability: "—",
      costRough: "—",
    },
    car: {
      typicalOneWay: "≈80–130+ min real-world",
      reliability: "Concentration and weather; hard to sustain five days.",
      costRough: "Fuel and parking stack quickly (rough €300–700+/mo if daily).",
    },
  },
  poor: {
    train_pt: {
      typicalOneWay: "Often 2 h+ or not worth counting on daily",
      reliability: "Too fragile to anchor housing decisions on.",
      costRough: "If you must do it, budget like a part-time job.",
    },
    bike: {
      typicalOneWay: "Not applicable.",
      reliability: "—",
      costRough: "—",
    },
    car: {
      typicalOneWay: "Typically unsustainable as a daily pattern",
      reliability: "Fatigue and cost dominate.",
      costRough: "Usually prohibitive if truly five days a week.",
    },
  },
};

const DEFAULT_CORRIDOR: Record<CommutePracticalityClass, string> = {
  excellent: "Local diversions during upgrades; rush-hour crowding even when trains or trams run on time.",
  good: NS_DISRUPTION,
  workable: NS_DISRUPTION,
  long: NS_DISRUPTION,
  poor: NS_DISRUPTION,
};

function buildModeBlock(
  cell: CommuteMatrixCell,
  mode: ModeKey,
  title: string,
  narrative: string
): CommuteModeInsightBlock {
  const base = CLASS_DEFAULT_METRICS[cell.practicality][mode];
  const o = cell.metrics?.[mode];
  return {
    title,
    narrative,
    typicalOneWay: o?.typicalOneWay ?? base.typicalOneWay,
    reliability: o?.reliability ?? base.reliability,
    costRough: o?.costRough ?? base.costRough,
  };
}

export function officeCityDisplayName(office: ColCity): string {
  const labels: Record<ColCity, string> = {
    amsterdam: "Amsterdam",
    rotterdam: "Rotterdam",
    "the-hague": "The Hague",
    utrecht: "Utrecht",
    eindhoven: "Eindhoven",
    haarlem: "Haarlem",
    delft: "Delft",
    leiden: "Leiden",
    groningen: "Groningen",
    other: "your office city",
  };
  return labels[office] ?? office;
}

export function getCommuteInsightsBundle(
  homeId: CityComparisonId,
  office: ColCity,
  modePref: CommuteModePref
): CommuteInsightsBundle {
  const home = getNormalizedCityProfile(homeId).colProxy;
  const hub = matrixOfficeHub(office);
  const cell: CommuteMatrixCell =
    home === "other" ? { ...DEFAULT_CELL, practicality: "workable" } : getMatrixCell(home, hub);

  return {
    practicality: cell.practicality,
    officeDisplayName: officeCityDisplayName(office),
    modes: {
      train_pt: buildModeBlock(cell, "train_pt", "Train & public transport", cell.trainPt),
      bike: buildModeBlock(cell, "bike", "Cycling", cell.bike),
      car: buildModeBlock(cell, "car", "Car", cell.car),
    },
    corridorDisruption: cell.corridorDisruption ?? DEFAULT_CORRIDOR[cell.practicality],
    preferredMode: modePref,
    preferredSummary:
      modePref === "mixed" ? `${cell.trainPt} ${cell.bike}`.trim() : modeNote(cell, modePref),
  };
}

function pairKey(home: HomeKey, officeHub: ColCity): string {
  return `${home}-${officeHub}`;
}

/** Direct pair, else reverse (same practicality class for symmetric city pairs), else default. */
function getMatrixCell(home: ColCity, officeHub: ColCity): CommuteMatrixCell {
  if (home === officeHub) {
    return (
      PAIRS[pairKey(home, officeHub)] ?? {
        practicality: "excellent",
        trainPt: "Same metro hub — local transit and bike dominate.",
        bike: "Typically practical within the urban area.",
        car: "Depends on workplace parking.",
      }
    );
  }
  const forward = PAIRS[pairKey(home, officeHub)];
  if (forward) return forward;
  const rev = PAIRS[pairKey(officeHub, home)];
  if (rev) return rev;
  return DEFAULT_CELL;
}

function modeNote(cell: CommuteMatrixCell, pref: CommuteModePref): string {
  switch (pref) {
    case "train_pt":
      return cell.trainPt;
    case "bike":
      return cell.bike;
    case "car":
      return cell.car;
    case "mixed":
      return `${cell.trainPt} ${cell.bike}`;
    default:
      return cell.trainPt;
  }
}

export function resolveCommutePracticality(
  homeId: CityComparisonId,
  office: ColCity,
  modePref: CommuteModePref
): { practicality: CommutePracticalityClass; note: string } {
  const home = getNormalizedCityProfile(homeId).colProxy;
  const hub = matrixOfficeHub(office);

  if (home === "other") {
    return {
      practicality: "workable",
      note: "Generic NL proxy — pick specific cities for meaningful commute scoring.",
    };
  }

  const cell = getMatrixCell(home, hub);
  return { practicality: cell.practicality, note: modeNote(cell, modePref) };
}
