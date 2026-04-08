import type { AffordabilityBand, CityComparisonId, CityComparisonInput } from "../types";
import type { CityDimensionScores100, CommutePracticalityClass, NormalizedCityProfile } from "./types";

/** Plain-language “who picks this city” — one card, one story (not score jargon). */
const CITY_WHY_PEOPLE_CHOOSE: Record<CityComparisonId, string> = {
  amsterdam:
    "People chasing big employers, lots of English in daily life, and busy cafés and culture — and who accept that rent and flat-hunting will eat energy.",
  utrecht:
    "Families and commuters who want a small, lively core and trains everywhere — but they’re ready to move fast when a decent flat appears.",
  "the-hague":
    "Folks tied to government, courts, NGOs, or international schools who like a calmer coast city — it’s not Amsterdam’s nightlife, and that’s often the point.",
  rotterdam:
    "People who enjoy modern architecture, port and logistics work, and a younger urban edge — often a bit more room in the budget than Amsterdam, still a real city.",
  eindhoven:
    "Tech and manufacturing roles who like biking distance to most things — typical costs are often gentler than the Randstad big four.",
  haarlem:
    "Anyone who wants village-y charm with Amsterdam one train away — you’re still in a commuter orbit or paying for proximity.",
  leiden:
    "University, science, and biotech circles who like a compact historic center — evenings are quieter than Rotterdam or Amsterdam.",
  delft:
    "Engineers and students who split time between The Hague and Rotterdam — great on a bike, not a late-night party capital.",
  groningen:
    "Students, creatives, and remote workers who like northern energy and usually lower rent — daily Randstad office commutes are rarely realistic.",
  amstelveen:
    "Families who want green, space, and international schools near Amsterdam — life is suburban; metro, bus, or bike matter for your exact street.",
  rotterdam_commuter_belt:
    "Households prioritising lower rent and accepting a train or car into Rotterdam — the right street vs station changes everything.",
  the_hague_commuter_belt:
    "Families stretching the budget while working in The Hague or Rotterdam — nail door-to-door time before you commit to a town.",
  other:
    "A rough stand-in when your municipality isn’t listed — pick concrete cities above to get advice that matches your shortlist.",
};

/** Main friction for tighter markets — distinct per city so cards don’t copy-paste. */
const CITY_MAIN_HOUSING_FRICTION: Partial<Record<CityComparisonId, string>> = {
  amsterdam:
    "Flat hunt reality: crowded viewings, picky landlords, and quick decisions — the monthly total here won’t show how many weeks you’ll spend searching.",
  utrecht:
    "Housing moves fast: commuters and families compete for the same stock — expect to react quickly when something decent shows up.",
  "the-hague":
    "Still a tight market for houses and family-sized rentals near good schools — calmer than Amsterdam, not effortless.",
  rotterdam:
    "Popular districts fill up — you’ll still budget time for search and bidding, just usually with slightly softer rents than Amsterdam.",
  eindhoven:
    "Growing demand from tech hiring can still mean queues for nice flats — easier than the Randstad peak, not automatic.",
  haarlem:
    "Desirable for Amsterdam commuters — nice streets get expensive or snapped up; weigh rent vs train minutes carefully.",
  leiden:
    "Compact city, finite stock — students and professionals can still clash over the best-connected neighborhoods.",
  delft:
    "Student and tech demand in a small footprint — the right neighborhood beats guessing from averages alone.",
  groningen:
    "Lower pressure than the west, but the nicest central stock still turns over quickly when students return.",
  amstelveen:
    "Suburban demand plus Amsterdam proximity — family homes and good-school catchments can still spark bidding.",
};

/** “Weaker fit when” for high-rent-profile cities — completes the section heading in the UI. */
const CITY_WEAKER_FIT_HIGH_RENT: Partial<Record<CityComparisonId, string>> = {
  amsterdam:
    "You need the lowest possible rent with minimal stress — competition and prices are among the toughest in the country.",
  utrecht:
    "You want a cheap, easy rental with no rush — popularity and commuter demand rarely make that realistic.",
  "the-hague":
    "You want big-city clubbing every night — evenings are more restrained than Amsterdam or Rotterdam.",
  rotterdam:
    "You hate urban grit and port-industrial edges — Rotterdam leans modern and busy, not village-cute.",
  eindhoven:
    "You need a huge international services scene on day one — it’s friendly, but smaller than the Randstad hubs.",
  haarlem:
    "You refuse any commute rhythm toward Amsterdam — many people here still orbit the capital for work.",
  leiden:
    "You want a sprawling nightlife strip — the center is compact and academic, not club-heavy.",
  delft:
    "You need a loud, late-night city center — it’s quieter and smaller than neighbors.",
  groningen:
    "You must be in the Randstad several days a week — distance and travel time add up fast.",
  amstelveen:
    "You want city-center buzz on foot every evening — you’re trading that for space, green, and family calm.",
};

export type PeerCitySnapshot = {
  cityId: string;
  displayName: string;
  affordabilityScore: number;
  lifestyleScore: number;
  commuteScore: number;
  totalOutflowEur: number;
  netRemainingEur: number;
};

/** Per-city slice for “vs your other picks” copy (deterministic, planning-only wording). */
export type ExplanationPeerSlice = {
  cityId: string;
  displayName: string;
  totalOutflowEur: number;
  netRemainingEur: number;
  peers: PeerCitySnapshot[];
};

/**
 * Deterministic explanation lines (why this city fits the sliders).
 * Peer slice adds relative cues vs other selected cities — still directional, not market truth.
 */
export function buildExplanationBullets(
  input: CityComparisonInput,
  profile: NormalizedCityProfile,
  dims: CityDimensionScores100,
  practicality: CommutePracticalityClass | null,
  affordabilityBand: AffordabilityBand,
  remote: boolean,
  peerSlice?: ExplanationPeerSlice
): string[] {
  const out: string[] = [];

  if (peerSlice && peerSlice.peers.length > 1) {
    const { peers, cityId, totalOutflowEur, netRemainingEur } = peerSlice;
    const minOut = Math.min(...peers.map((p) => p.totalOutflowEur));
    const maxOut = Math.max(...peers.map((p) => p.totalOutflowEur));
    const maxNet = Math.max(...peers.map((p) => p.netRemainingEur));
    if (totalOutflowEur === minOut) {
      out.push(
        "Among your picks, typical monthly costs (rent + living) are lowest here — based on average benchmarks, not what you’ll see on Funda today."
      );
    }
    if (netRemainingEur === maxNet && input.monthlyNetSalary > 0) {
      out.push(
        "You’d have the most money left over each month in this set — still sanity-check with rents and a lifestyle you’d actually choose."
      );
    }
    const delta = maxOut - minOut;
    if (delta >= 75 && totalOutflowEur < maxOut) {
      const priciest = peers.find((p) => p.totalOutflowEur === maxOut);
      if (priciest && priciest.cityId !== cityId) {
        out.push(
          `About €${Math.round(delta)}/mo separates the cheapest and priciest city in your list — ${priciest.displayName} is the expensive end here.`
        );
      }
    }
  }

  if (input.familySchoolImportance === "high" && dims.family >= 74) {
    out.push(
      "Fits your family focus in this comparison — still check schools, space, and commute for your situation."
    );
  }
  if (input.internationalPref === "high" && dims.expatEase >= 76) {
    out.push(
      "Strong on day-to-day international / English-friendly feel in our city snapshot — your employer and neighbourhood still matter."
    );
  }
  if (input.careerPriority === "high" && dims.career >= 76) {
    out.push(
      "Lines up with your career priority — worth confirming your industry and role types are really clustered here."
    );
  }
  if (input.budgetSensitivity === "high" && dims.affordability >= 72) {
    out.push(
      "Looks like a stronger budget fit than your other picks with your current settings."
    );
  }
  if (input.nightlifePref === "high" && profile.nightlife >= 7) {
    out.push("Matches your preference for going out and city energy — taste is still personal.");
  }
  if (input.natureCalmPref === "high" && profile.calmNature >= 7) {
    out.push("Quieter, greener vibe matches your calm preference in this comparison.");
  }
  if (!remote && (practicality === "excellent" || practicality === "good")) {
    out.push(
      "Commute looks solid for your office location — plug a real route into NS or 9292 before you decide."
    );
  }
  if (affordabilityBand === "comfortable" && input.monthlyNetSalary > 0) {
    out.push("Comfortable slack in your budget at these estimated costs — not a promise; use it as a first pass.");
  }

  if (out.length === 0) {
    out.push(
      "Balanced picture: nothing dominates — handy when your trade-offs are close or your sliders are in the middle."
    );
  }
  return out.slice(0, 6);
}

/**
 * Deterministic warnings (trade-offs, weak dimensions).
 */
export function buildWarningBullets(
  input: CityComparisonInput,
  dims: CityDimensionScores100,
  practicality: CommutePracticalityClass | null,
  affordabilityBand: AffordabilityBand,
  remote: boolean,
  peerCommutes?: { cityId: string; displayName: string; commuteDim: number }[]
): string[] {
  const out: string[] = [];

  if (!remote && (practicality === "long" || practicality === "poor")) {
    out.push(
      "Commute could be a real drag for daily office days from here — hybrid or living closer to work might suit you better."
    );
  }
  if (affordabilityBand === "strained" || affordabilityBand === "stretch") {
    out.push(
      "Budget may feel tight — small rent or lifestyle changes add up fast; check real asking rents before you count on it."
    );
  }
  if (input.familySchoolImportance === "high" && dims.family < 62) {
    out.push(
      "You care a lot about family life, but this city scores weaker on that here — dig into schools, space, and commute."
    );
  }
  if (input.careerPriority === "high" && dims.career < 62) {
    out.push(
      "Career matters a lot to you, but this city looks softer for that in this comparison — check employers and your sector locally."
    );
  }

  if (peerCommutes && peerCommutes.length > 1 && !remote) {
    const minC = Math.min(...peerCommutes.map((p) => p.commuteDim));
    if (dims.commute === minC && minC < 62) {
      out.push(
        "Weakest commute in your list for this office setup — double-check door-to-door time (e.g. NS / 9292)."
      );
    }
  }

  if (out.length === 0 && dims.commute < 58 && !remote) {
    out.push("Commute looks weaker — try a real journey time before you fix where you’ll live.");
  }
  return out.slice(0, 6);
}

/**
 * Whole-comparison notes (show once in the UI, not per city). Avoids misleading “compromises” that
 * are identical on every card.
 */
export function buildComparisonContextNotes(args: {
  monthlyNetSalary: number;
  monthlyGrossSalary: number | null;
  affordabilityScoreSpread: number;
}): string[] {
  const notes: string[] = [];
  if (args.monthlyGrossSalary == null) {
    notes.push(
      "We only use your take-home (net) pay for affordability. Gross salary is optional and doesn’t change these results."
    );
  }
  if (args.monthlyNetSalary >= 6000 && args.affordabilityScoreSpread < 12) {
    notes.push(
      "Across your picks, estimated affordability is very close at your income — tiny score gaps there won’t pick the winner; commute, lifestyle, family, and career matter more."
    );
  }
  return notes;
}

const DIM_LABELS: Record<keyof CityDimensionScores100, string> = {
  affordability: "budget / money left over",
  commute: "commute for your office",
  family: "family life fit",
  expatEase: "international day-to-day ease",
  lifestyle: "lifestyle match to your sliders",
  career: "career opportunities (broad snapshot)",
};

/**
 * One-line trade-off callout combining profile + weakest dimension vs user priorities.
 */
export function buildTradeoffCallout(
  input: CityComparisonInput,
  profile: NormalizedCityProfile,
  dims: CityDimensionScores100,
  remote: boolean
): string {
  const n = profile.displayName;
  if (input.budgetSensitivity === "high" && profile.rentLevel >= 8) {
    return `${n}: Rent eats a big slice here — if every euro matters, keep other cities in play until the numbers feel survivable.`;
  }
  if (!remote && dims.commute < 55) {
    return `${n}: Commute is the shaky leg — if you’re in the office most days, run a real door-to-door test before you lease.`;
  }
  if (input.familySchoolImportance === "high" && dims.family < 68) {
    return `${n}: Schools and space need a closer look — your family sliders are high but this pick is only mid-pack on that axis.`;
  }
  if (input.nightlifePref === "high" && profile.nightlife <= 5) {
    return `${n}: You want buzzy nights; this place winds down earlier — check you’re okay with calmer evenings.`;
  }
  if (profile.rentLevel >= 8) {
    const friction = CITY_MAIN_HOUSING_FRICTION[profile.id];
    if (friction) return friction;
    return `${n}: Rents sit in a tight band — expect real search time (and maybe competition) beyond what the monthly line shows.`;
  }
  return `${n}: Every choice trades something — cash left over, commute minutes, or vibe. A short visit beats any score.`;
}

/** One-line “who picks this” — city-specific copy so cards don’t read like the same template. */
export function buildWhyPeopleChooseLine(profile: NormalizedCityProfile): string {
  return CITY_WHY_PEOPLE_CHOOSE[profile.id];
}

/** Default “worse fit when” when higher-priority branches in computeRanking don’t fire. */
export function buildWorseFitWhenTail(
  input: CityComparisonInput,
  profile: NormalizedCityProfile,
  dims: CityDimensionScores100,
  remote: boolean
): string {
  if (profile.rentLevel >= 8) {
    return (
      CITY_WEAKER_FIT_HIGH_RENT[profile.id] ??
      `You need very low rent with almost no competition — ${profile.displayName} still sees steady demand.`
    );
  }
  if (!remote && dims.commute < 58) {
    return "You’re on the train or road most days and the trip is wearing thin — a closer base might matter more than the score.";
  }
  if (profile.nightlife <= 5 && input.nightlifePref === "high") {
    return "You want a big going-out scene several nights a week — nights here taper earlier than in the biggest cities.";
  }
  if (profile.calmNature <= 5 && input.natureCalmPref === "high") {
    return "You want green and quiet on the doorstep — this place stays fairly urban and busy.";
  }
  return "Your priorities drift — budget, commute, or schools — and this city’s strengths no longer line up with what you need.";
}

/** Which dimensions the leading city wins outright (or ties for top) within the selection. */
export function dimensionLeadSummary(
  best: { cityId: string; dimensions: CityDimensionScores100 },
  ranking: { cityId: string; dimensions: CityDimensionScores100 }[]
): string[] {
  const keys = Object.keys(DIM_LABELS) as (keyof CityDimensionScores100)[];
  const lines: string[] = [];
  for (const k of keys) {
    const max = Math.max(...ranking.map((r) => r.dimensions[k]));
    if (best.dimensions[k] < max) continue;
    const tied = ranking.filter((r) => r.dimensions[k] === max);
    const label = DIM_LABELS[k];
    if (tied.length === 1) {
      lines.push(label);
    } else {
      lines.push(`${label} (tied for strongest in this comparison)`);
    }
  }
  return lines;
}

export function fitLabelFromDimensions(
  dims: CityDimensionScores100,
  peers: PeerCitySnapshot[],
  cityId: string
): string {
  const topNet = peers.reduce((a, b) => (b.netRemainingEur > a.netRemainingEur ? b : a));
  const topLife = [...peers].sort((a, b) => b.lifestyleScore - a.lifestyleScore)[0];
  const topComm = [...peers].sort((a, b) => b.commuteScore - a.commuteScore)[0];
  /** Budget tag follows real euros (most left after costs), not only the affordability score. */
  if (topNet.cityId === cityId && dims.affordability >= 62) return "Most money left over";
  if (topLife?.cityId === cityId && dims.lifestyle >= 76) return "Strong lifestyle match";
  if (topComm?.cityId === cityId && dims.commute >= 82) return "Commute-practical pick";
  if (dims.career >= 80 && dims.expatEase >= 78) return "Strong for international careers";
  if (dims.family >= 78) return "Strong family fit";
  return "Balanced trade-offs";
}
