import type { BestCitiesLevel, CitiesBestForExpatsScenarioPick } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

/**
 * Optional structured detail for shortlist cards: where families land, schools,
 * money framing, and day-to-day life — planning copy, not live listings.
 */
export type FamiliesCityFamilyLens = {
  neighbourhoods: string;
  schools: string;
  pricing: string;
  activities: string;
};

/**
 * Single source of truth for family-guide cities.
 * Shortlists, scenarios, and tooling resolve `href` / display names from here.
 */
export type FamiliesCityRegistryEntry = {
  id: string;
  name: string;
  href: string;
  tagline: string;
  bestFor: string;
  watchOuts: string;
  /** Cost pressure signal (shortlist + comparison semantics). */
  costLevel: BestCitiesLevel;
  /** Family-fit signal on shortlist cards. */
  familyFit: BestCitiesLevel;
  tags: string[];
  /** Rich shortlist-only blocks (neighbourhoods, schools, pricing, activities). */
  familyLens?: FamiliesCityFamilyLens;
  /** When the primary CTA should not be “Open {name} guide”. */
  ctaLabel?: string;
};

export const citiesFamiliesCities: FamiliesCityRegistryEntry[] = [
  {
    id: "utrecht",
    name: "Utrecht",
    href: "/netherlands/utrecht/",
    tagline:
      "Compact powerhouse — strong jobs, excellent train hub, family services — with gentler sprawl than Amsterdam.",
    bestFor:
      "Two working parents, bike-first weeks, and households that want city energy without the hardest rent squeeze.",
    watchOuts: "Rent is still serious; central family-sized stock competes hard — widen radius early.",
    familyLens: {
      neighbourhoods:
        "Families often compare the compact centre, leafier pockets toward Overveen and Bloemendaal, and post-war rows toward Spaarnwoude — each changes school catchments, bike-school distance, and weekend quiet. If Amsterdam employers matter, sanity-check rush-hour trains and parking at Haarlem station, not Sunday maps alone.",
      schools:
        "Solid Dutch schools across the city; international-school families still plan placement and transport early. Check how after-school care lines up with two commutes before you assume \"small city = simple logistics\".",
      pricing:
        "Usually still premium Randstad territory — expect serious rent for family-sized homes near the centre or dunes. Compare total month (rent + travel + childcare) against Amsterdam-side finalists, not headline m² alone.",
      activities:
        "Dunes and coast on easy weekends, strong local clubs and pools, and Amsterdam culture when you want it — good balance if outdoor time is a family priority.",
    },
    costLevel: "high",
    familyFit: "high",
    tags: ["Main pick", "Hub", "Two careers", "Trains"],
  },
  {
    id: "haarlem",
    name: "Haarlem",
    href: "/netherlands/haarlem/",
    tagline: "Coastal calm + Amsterdam reach — village pace with easy trips west when you need them.",
    bestFor:
      "Families who want green + sea proximity, shorter emotional distance to Amsterdam employers, and walkable centres.",
    watchOuts: "Housing competition is real; international school placement still needs a plan.",
    familyLens: {
      neighbourhoods:
        "Centre and stationsbuurt for walk-everything weeks; quieter family streets often sit a few minutes out by bike toward Bennebroek or Overveen depending on budget. Coastal access is the emotional win — model rainy Tuesday pickups, not only sunny dunes.",
      schools:
        "Good Dutch primaries; international routes exist but capacity and transport deserve a written plan. If one parent crosses toward Schiphol or Amsterdam often, test school hours against real crowding on peak trains.",
      pricing:
        "Coastal premium is real — three-bedroom family rent is rarely \"gentle\" even when it beats inner Amsterdam on paper. Stack rent, two OV seasons, and childcare on the same spreadsheet as Utrecht or Amstelveen finalists.",
      activities:
        "Beach and dune loops, youth sport clubs, and quick Amsterdam museum days — strong weekend rhythm if you protect weeknight downtime.",
    },
    costLevel: "high",
    familyFit: "high",
    tags: ["Main pick", "Coast", "Amsterdam orbit", "Walkable"],
  },
  {
    id: "leiden",
    name: "Leiden",
    href: "/netherlands/leiden/",
    tagline: "University city scale — human-sized centre, strong cycling, The Hague / Schiphol angles for work.",
    bestFor:
      "University and research parents, bike-first routines, and households that like historic + young energy.",
    watchOuts: "Student demand overlaps with family housing in pockets — scout neighbourhoods deliberately.",
    familyLens: {
      neighbourhoods:
        "Historic core versus newer belts (Vlietzone, Merenwijk-style edges) changes bike-school distance and night noise. If The Hague or Schiphol is in the mix, pick two candidate postcodes and test morning crowding, not averages.",
      schools:
        "Strong Dutch schools; international families often weigh Leiden versus The Hague for seat depth and commute symmetry. Ask schools and daycares about waiting lists on realistic start dates, not \"someday\".",
      pricing:
        "Mid-to-high Randstad for family-sized rent — often a bit easier than peak Amsterdam if you accept a smaller historic footprint. Still model three-bedroom rent plus two OV zones before you call it a bargain.",
      activities:
        "Canals, museums, sailing clubs nearby, and easy Hague beach days — compact weeknight life with bigger-city options a short hop away.",
    },
    costLevel: "medium",
    familyFit: "high",
    tags: ["Main pick", "University", "Research", "West NL"],
  },
  {
    id: "delft",
    name: "Delft",
    href: "/netherlands/delft/",
    tagline: "Small-city calm between The Hague and Rotterdam — strong for tech-adjacent and academic rhythms.",
    bestFor:
      "Quiet streets, canal-town charm, and parents who accept nearby hubs for specialist work days.",
    watchOuts: "Tighter housing stock; some careers still orbit Rotterdam or The Hague daily.",
    familyLens: {
      neighbourhoods:
        "Canal-centre charm versus Voorhof-style post-war rows and newer edges — each shifts parking, school catchments, and bike lanes toward TU or employers. If Rotterdam or The Hague is frequent, test door-to-door on Thursday evening, not Google optimistic mode.",
      schools:
        "Reliable Dutch primaries; international families sometimes pivot toward The Hague corridor for depth. Confirm after-school care and holiday coverage against both parents' office days.",
      pricing:
        "Often a touch gentler than Amsterdam centre for similar bedrooms, but still serious Randstad money. Compare total housing + commute + childcare against Leiden or The Hague if one parent anchors west.",
      activities:
        "Green wedges, strong local sport, quick big-city museums in Rotterdam or The Hague — good if you want calm streets with occasional city hits.",
    },
    costLevel: "medium",
    familyFit: "high",
    tags: ["Main pick", "Tech", "Quiet", "Near big cities"],
  },
  {
    id: "amstelveen",
    name: "Amstelveen",
    href: "/netherlands/amstelveen/",
    tagline:
      "Purpose-built suburb south of Amsterdam — green, international-facing, and built around car-light family blocks.",
    bestFor:
      "International families prioritising space, schools, and Amsterdam employer proximity without inner-ring chaos.",
    watchOuts: "Premium positioning; still model real travel weeks into Amsterdam centre.",
    familyLens: {
      neighbourhoods:
        "Keizer Karelpark and newer southern belts often anchor international families; Westwijk and older pockets vary on bike-school distance. Green buffers and international-school clusters are the draw — still map rainy-week pickups to Zuidas or inner Amsterdam honestly.",
      schools:
        "Dense international-school ecosystem relative to size; Dutch tracks are strong too. Waiting lists and holiday camps deserve the same spreadsheet row as rent — do not assume a seat because the postcode looks leafy.",
      pricing:
        "Premium suburb pricing — family rent is often comparable to serious Amsterdam outer-ring options once you add quality m². If budget is tight, compare Amstelveen against Haarlem or Utrecht with identical childcare hours, not headline rent alone.",
      activities:
        "Amsterdamse Bos next door, local pools and clubs, easy cultural weekends in Amsterdam without nightly city noise — strong if evenings in the garden matter as much as museums.",
    },
    costLevel: "high",
    familyFit: "high",
    tags: ["Main pick", "International schools", "Space", "Amsterdam orbit"],
  },
  {
    id: "amersfoort",
    name: "Amersfoort",
    href: R.cityComparison,
    tagline: "Historic walled-town charm on the Utrecht–Amsterdam train line — growing expat family favourite.",
    bestFor:
      "Calm core, rail links, and households that want breathing room without going fully rural.",
    watchOuts: "No dedicated city guide on ExpatCopilot yet — model in the city comparison tool next to finalists.",
    familyLens: {
      neighbourhoods:
        "Historic core inside the canals versus newer Vathorst-style edges and villages a short cycle out — edges often win on bedrooms per euro while keeping schools reachable. If Utrecht or Amsterdam is frequent, model door-to-door on intercity days, not weekend timetables.",
      schools:
        "Solid Dutch schools; fewer international seats than the big western hubs — bilingual families should confirm tracks and waiting lists early. Partner employers in Breda-Tilburg-Eindhoven triangle deserve an honest map before you optimise for charm alone.",
      pricing:
        "Often softer than inner Randstad cores for similar bedrooms — still not \"cheap\" nationally. Use the same rent + childcare + two-zone travel assumptions you use for Utrecht or Rotterdam finalists.",
      activities:
        "Compact historic centre, regional parks, easy weekend hops toward Zeeland or Rotterdam — good if you want calm streets with occasional bigger-city culture.",
    },
    costLevel: "medium",
    familyFit: "high",
    tags: ["Also consider", "Trains", "Calm", "Compare-first"],
    ctaLabel: "Model Amersfoort vs finalists",
  },
  {
    id: "breda",
    name: "Breda",
    href: "/netherlands/breda/",
    tagline: "Southern balance — gentler rent than inner Amsterdam for many, with Rotterdam / Antwerp reach.",
    bestFor: "Space-first families, cross-border angles (where permitted), and quieter urban weekends.",
    watchOuts: "Job depth varies; partner markets outside regional hubs need honesty.",
    familyLens: {
      neighbourhoods:
        "Centre and Princenhage versus greener belts toward Ginneken — each shifts noise, parking, and school walks. Cross-border Belgium shopping is a perk for some households; still prioritise school catchment and partner job radius over weekend vibes alone.",
      schools:
        "Good Dutch landscape; international options thinner than Amsterdam or The Hague — verify language support and bus routes if kids arrive mid-track. If one parent targets Rotterdam or Antwerp corridors, rehearse pickup handoffs on paper.",
      pricing:
        "Often more house per euro than Amsterdam or Utrecht cores for comparable bedrooms — not a secret discount market once you add two cars or heavy train seasons. Compare totals with Eindhoven or Rotterdam if tech work is in play.",
      activities:
        "Historic centre events, strong local sport, easy drives toward Zeeland beaches or Antwerp culture — strong if outdoor weekends outweigh nightly big-city energy.",
    },
    costLevel: "medium",
    familyFit: "medium",
    tags: ["Also consider", "South", "Space", "Budget"],
  },
  {
    id: "eindhoven",
    name: "Eindhoven",
    href: "/netherlands/eindhoven/",
    tagline: "Tech and industry hub — compact region with solid local pay and family-friendly suburbs close in.",
    bestFor:
      "Engineering-led households who want fewer forced trips west and strong schools in the belt.",
    watchOuts: "Demand for well-located family homes is real; not a secret discount market.",
    familyLens: {
      neighbourhoods:
        "Gestel and Stratum belt versus newer Veldhoven-Meerhoven-style suburbs — suburbs shorten tech-campus commutes but change evening culture. Brainport employers cluster tightly; still test school waiting lists in the exact postcode you can afford.",
      schools:
        "Strong Dutch schools near tech campuses; international depth is lighter than Amsterdam — map language support and bus links if kids switch systems mid-year. International School Eindhoven exists but seats need early, realistic contact.",
      pricing:
        "Local salaries often help versus western Randstad headline rent, yet well-located family homes still compete. Model three-bedroom rent against savings rate and westward train tickets if HQ days spike later.",
      activities:
        "Tech festivals, strong youth sport, Genneper Parks-style green wedges, and weekend trips toward Veluwe or south — compact weeknight life with high engineering-job density.",
    },
    costLevel: "medium",
    familyFit: "high",
    tags: ["Also consider", "Tech", "Tech region", "Jobs"],
  },
  {
    id: "groningen",
    name: "Groningen",
    href: "/netherlands/groningen/",
    tagline:
      "Northern flagship — rent that often feels easier than the busiest western cores, bike-first, strong student/family services.",
    bestFor: "Remote-heavy parents, university-linked work, and families who like tight urban cores.",
    watchOuts: "Distance to western head offices — if office days spike, train time becomes the boss variable.",
    familyLens: {
      neighbourhoods:
        "Helpman and southern belts versus student-heavy inner east — scout school streets on weekday afternoons, not rankings alone. If Schiphol or Randstad HQ days exist, model monthly train hours as a family tax before you celebrate lower rent.",
      schools:
        "Good Dutch schools with university-town energy; international seats are limited versus western hubs — confirm tracks if teens need English-first diplomas. After-school coverage can be tighter around academic holidays.",
      pricing:
        "Often the gentlest family rent on this page for comparable bedrooms — still rising with popularity. Compare saved rent against extra train tickets, hotel nights after missed connections, and partner job options.",
      activities:
        "Compact cultural life, strong cycling culture, northern nature within an hour — excellent if remote-heavy weeks dominate and you protect one western travel day per month, not five.",
    },
    costLevel: "lower",
    familyFit: "medium",
    tags: ["Also consider", "North", "Remote", "Bike-first"],
  },
  {
    id: "arnhem-nijmegen",
    name: "Arnhem / Nijmegen belt",
    href: "/netherlands/arnhem/",
    tagline: "Gelderland pair — green, space, and rail toward Utrecht/Amsterdam without inner-core rent.",
    bestFor:
      "Outdoors-forward families, hybrid employers, and two-parent logistics that value calm evenings.",
    watchOuts: "Peak crowding toward Amsterdam on some lines — model the brutal weeks, not one ideal Tuesday.",
    familyLens: {
      neighbourhoods:
        "Arnhem: southern Veluwe-facing belts and Rijkerswoerd-style newer rows for space; Nijmegen: leafy Oost and Waalsprong newer edges versus compact historic centre — each shifts bike-school distance and evening quiet. If Amsterdam is frequent, rehearse Arnhem–Utrecht–Schiphol chains on Thursday evenings, not Sunday maps.",
      schools:
        "Solid Dutch schools across both cores; international depth is thinner than Amsterdam or The Hague — bilingual families should confirm tracks early. Hybrid employers in Arnhem–Nijmegen–Wageningen triangle deserve an honest two-parent map.",
      pricing:
        "Often meaningfully softer than Amsterdam or Utrecht for similar bedrooms — trade is travel time when western office days spike. Stack rent savings against season tickets and occasional hotel nights after late trains.",
      activities:
        "Veluwe forests, Rhine/Waal waterfront loops, strong local sport — strong outdoors rhythm if you accept that \"close to Amsterdam\" still means real train hours on busy weeks.",
    },
    costLevel: "medium",
    familyFit: "high",
    tags: ["Also consider", "Green", "Hybrid", "Rail"],
    ctaLabel: "Open Arnhem guide (belt anchor)",
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    href: "/netherlands/amsterdam/",
    tagline:
      "Most choices — deepest jobs, widest English-friendly services, shortest travel if your office is there.",
    bestFor:
      "International-heavy families, two careers in the western corridor, and households that value density and choice.",
    watchOuts: "Rent and competition bite hardest; childcare and space stress show up in real weekly calendars.",
    familyLens: {
      neighbourhoods:
        "Oud-Zuid, Rivierenbuurt, and Apollobuurt remain premium family bets for schools, parks, and metro links; IJburg and Noord newer builds trade charm for elevators and water views; De Pijp and centre rings are vibrant but noisier with tighter storage. Many international families still choose Amstelveen, Diemen, or Haarlem for space while keeping Amsterdam employers — compare door-to-door school runs, not postcard distance.",
      schools:
        "Huge Dutch-school choice plus concentrated international schools (ISA, Amity, British School of Amsterdam in region, etc.) — waiting lists and lottery-style intake are normal. Daycare hours rarely align magically with two Zuidas commutes; model August intake, holiday camps, and sick-day coverage on the same page as rent.",
      pricing:
        "Among the steepest family rents in the country — three-bedroom homes in family-favoured postcodes often land well above €2,000/month in 2025–2026 planning conversations, with inner-ring premiums higher. Parking, second OV card, and occasional taxi after late trains belong in the same monthly picture as childcare.",
      activities:
        "World-class museums, Vondelpark-scale green, canals, swim clubs, and every youth sport imaginable — unbeatable variety if you accept crowds, bike traffic, and tourist pressure on sunny Saturdays. Honest trade-off: stimulation versus headspace on ordinary Wednesdays.",
    },
    costLevel: "high",
    familyFit: "mixed",
    tags: ["Edge case", "International", "Jobs", "Premium"],
  },
  {
    id: "rotterdam",
    name: "Rotterdam",
    href: "/netherlands/rotterdam/",
    tagline: "Port-city scale — diverse, entrepreneurial, and more space per euro than Amsterdam in many pockets.",
    bestFor: "Logistics / maritime / creative families and those who like urban grit with waterfront life.",
    watchOuts: "Neighbourhood variance is wide — school and safety feel need street-level research, not stereotypes.",
    familyLens: {
      neighbourhoods:
        "Kralingen, Hillegersberg-Schiebroek, and Blijdorp are long-standing family favourites for green, schools, and calmer streets; Kop van Zuid and Lloydkwartier suit waterfront lovers who tolerate wind and cranes. Southern districts vary block by block — walk school routes at 15:30 on a rainy Wednesday before you trust a headline label.",
      schools:
        "Mix of strong Dutch schools and several international options (Wolfert van Borselen, Harbour International, etc.) with different catchment rules — bilingual families should confirm language support and bus links. Neighbourhood reputation rarely equals your exact street; ask local parents about after-school care density.",
      pricing:
        "Often more square metres per euro than comparable Amsterdam postcodes, especially east of the centre — still serious city rent once you add water-taxi whimsy or second car costs. Compare three-bedroom totals with Utrecht or The Hague finalists using identical childcare hours.",
      activities:
        "Euromast visits, Rotterdam Zoo, municipal pools, massive sport clubs, and quick beach days at Hoek van Holland — high-energy kid culture with real port-city grit. Honest trade-off: excitement versus sensory load on tight weeknights.",
    },
    costLevel: "medium",
    familyFit: "mixed",
    tags: ["Context", "Port", "Diverse", "Space value"],
  },
  {
    id: "the-hague",
    name: "The Hague",
    href: "/netherlands/the-hague/",
    tagline: "Government + NGOs — diplomatic and international services with coastal family pockets.",
    bestFor: "Diplomatic / NGO / legal households and families who want international school density outside Amsterdam.",
    watchOuts: "Commute honesty to partner offices — model both Scheveningen and inland rhythms.",
    costLevel: "high",
    familyFit: "high",
    tags: ["International", "Schools", "Coast", "NGO"],
  },
];

const familiesCityById = new Map(citiesFamiliesCities.map((c) => [c.id, c]));

export function familiesCityOrThrow(id: string): FamiliesCityRegistryEntry {
  const c = familiesCityById.get(id);
  if (!c) {
    throw new Error(`[citiesFamiliesCities] Unknown city id: "${id}"`);
  }
  return c;
}

/** Scenario pick: resolve from registry, or pass a one-off link (e.g. external tool). */
export type FamiliesScenarioPickDef =
  | { cityId: string; why: string; /** Override display name in scenario list */ name?: string; highlights?: string[] }
  | { name: string; href: string; why: string; highlights?: string[] };

export function familiesResolveScenarioPick(p: FamiliesScenarioPickDef): CitiesBestForExpatsScenarioPick {
  if ("cityId" in p) {
    const c = familiesCityOrThrow(p.cityId);
    return {
      name: p.name ?? c.name,
      href: c.href,
      why: p.why,
      ...(p.highlights?.length ? { highlights: [...p.highlights] } : {}),
    };
  }
  return {
    name: p.name,
    href: p.href,
    why: p.why,
    ...(p.highlights?.length ? { highlights: [...p.highlights] } : {}),
  };
}
