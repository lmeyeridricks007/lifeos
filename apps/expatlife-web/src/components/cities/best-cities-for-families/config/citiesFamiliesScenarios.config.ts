import type { CitiesBestForExpatsScenarioConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";
import { familiesResolveScenarioPick, type FamiliesScenarioPickDef } from "./citiesFamiliesCities.config";

function picks(defs: FamiliesScenarioPickDef[]) {
  return defs.map(familiesResolveScenarioPick);
}

export const citiesFamiliesScenarios: CitiesBestForExpatsScenarioConfig[] = [
  {
    id: "international",
    title: "International families",
    intro:
      "The Amsterdam–The Hague corridor packs international schools, familiar services, and parent networks. You pay in rent per m², waitlists, and school-run traffic — put rent, tuition, wraparound care, and both commutes on one monthly sheet, not only a vibe check.",
    tags: ["Schools", "Services", "Community"],
    picks: picks([
      {
        cityId: "amsterdam",
        why: "Most school and service options — lock neighbourhood and rent only after you map real commutes.",
        highlights: [
          "Schools families compare: AICS in town, ISA (Amstelveen) and BSN with busing — check intake ages, siblings rules, and morning crowding.",
          "Areas on repeat shortlists: Oud-Zuid / Rivierenbuurt, IJburg and Noord for space, De Pijp for walkability (noisier).",
          "Budget a €2,000+ three-bed planning figure, then add clubs, culture, and parking so totals match Haarlem or Amstelveen finalists.",
        ],
      },
      {
        cityId: "the-hague",
        why: "Embassy and NGO gravity plus a wide international school landscape — map both parents’ offices against school buses.",
        highlights: [
          "Pockets families name: Statenkwartier, Benoordenhout, Archipelbuurt — quieter streets, still in bus range.",
          "School mix includes ASH, ESH, Lycée Français, and strong Dutch streams — compare seats and routes, not Sunday drives alone.",
          "Weekend upside: Scheveningen and dunes — trade-off is peak runs toward Rotterdam or Schiphol weeks.",
        ],
      },
      {
        cityId: "amstelveen",
        why: "ISA in the middle of town — many shortlists pair it with green edges and an honest Amsterdam commute test.",
        highlights: [
          "Neighbourhoods that keep appearing: Keizer Karelpark, Westwijk, belts toward Amsterdamse Bos for bike-to-school rhythm.",
          "Most households still commute to Amsterdam Zuid — model rainy Thursday OV and office bike parking, not only sunny maps.",
          "More m² per euro than inner Amsterdam, still premium — add tuition, bilingual daycare, and a second OV if one parent aims at Utrecht.",
        ],
      },
    ]),
    tradeoffs: [
      "Split-age families can land in two different school zones — plot primary and secondary drop-offs before you sign a lease.",
      "International tuition plus naschoolse opvang (TOC) often dwarfs the rent gap between cities — model school fees, bus passes, and childcare on the same monthly sheet as rent.",
      "International school runs can dominate mornings — map both parents' offices, not only home-to-school.",
      "Sticker shock is normal — pair every finalist with rent + childcare on one sheet.",
    ],
    toolHint: { href: R.childcare, label: "Childcare cost estimator" },
  },
  {
    id: "balanced",
    title: "Balanced family life",
    intro:
      "When you want city culture + manageable scale + credible two-parent commutes — these are frequent “goldilocks” finalists.",
    tags: ["Commute", "Pace", "Schools"],
    picks: picks([
      {
        cityId: "utrecht",
        why: "National rail hub with city energy — strong on two-career commutes and school-age logistics without Amsterdam’s inner-ring squeeze.",
        highlights: [
          "Commute — Frequent trains to Schiphol, Amsterdam, Rotterdam, and the east — sanity-check your line at rush hour, not the timetable alone.",
          "Pace — Big-enough centre for culture and clubs, still bike-first for many school runs — less sprawl than the capital to learn.",
          "Schools — Solid Dutch primaries across the city; international routes exist but deserve an early placement + transport plan.",
        ],
      },
      {
        cityId: "haarlem",
        why: "Smaller core plus dunes and sea close by — many families trade a bit of housing hunt friction for calmer weeks and Amsterdam still on the train.",
        highlights: [
          "Commute — Zuidtangent and rail into Amsterdam — model both parents’ platforms and parking if one leg is car-heavy.",
          "Pace — Walkable centre, village-style neighbourhoods outward — strong fit if you want green weekends without giving up Randstad reach.",
          "Schools — Good Dutch schools; international options need the same waitlist and bus honesty as anywhere in the corridor.",
        ],
      },
      {
        cityId: "leiden",
        why: "Compact historic city — gentle daily rhythm with The Hague, Schiphol, and Amsterdam still in play for the right office pattern.",
        highlights: [
          "Commute — Short hops west by train — overlap with student housing in pockets, so pick postcodes with school + work crowding in mind.",
          "Pace — Human-scale canals and short bike distances — less “big city buzz” than Utrecht, more breathing room than inner Amsterdam.",
          "Schools — Strong Dutch track record; weigh Leiden vs The Hague for international streams and seat depth before you fall in love with a street.",
        ],
      },
    ]),
    tradeoffs: [
      "None are cheap in absolute terms — “balance” means trade-offs you can live with, not a free win.",
    ],
    toolHint: { href: R.cityComparison, label: "City comparison tool" },
  },
  {
    id: "space-affordability",
    title: "Space + affordability",
    intro:
      "When more room and quieter evenings lead — you usually buy them with longer trips to some employers or fewer specialist contacts nearby.",
    tags: ["House", "Garden", "Budget"],
    picks: picks([
      {
        cityId: "breda",
        why: "Brabant scale — often more house and garden per euro than the western triangle if your employers tolerate the distance.",
        highlights: [
          "House and garden — Family-sized rows and edges toward the green belt — compare total commute weeks, not only m² on Funda.",
          "Budget — Lower headline stress than Randstad peaks for many setups — still model two OV seasons if one parent works west.",
          "Trade-off — Fewer specialist international touches than Amsterdam–Utrecht — worth it when space and quieter evenings lead.",
        ],
      },
      {
        cityId: "arnhem-nijmegen",
        name: "Arnhem",
        why: "Veluwe on the doorstep — green evenings with Arnhem–Nijmegen–Utrecht rail if you split work between regions.",
        highlights: [
          "House and garden — Leafier belts and post-war stock — often easier to find a third bedroom than in tight western cores.",
          "Budget — Serious value vs peak Randstad for some households — add peak-train truth if Schiphol or Zuid is often on the calendar.",
          "Commute — Direction matters — morning crowding toward Utrecht/Amsterdam differs by line; test Tuesday, not Sunday.",
        ],
      },
      {
        cityId: "groningen",
        why: "Northern compact core — strong local services and community; the west is a flight or long train day, not a daily hop.",
        highlights: [
          "House and garden — More room per euro for many — excellent if both careers are truly northern or remote-heavy.",
          "Budget — Often gentler monthly pressure than Randstad — offset by fewer same-day options to Amsterdam clients.",
          "Trade-off — International school density is thinner — validate realistic tracks before you assume “move north = easy win”.",
        ],
      },
    ]),
    tradeoffs: [
      "International school placement is not automatic — check realistic options per municipality.",
    ],
    toolHint: { href: R.rentAffordability, label: "Rent affordability calculator" },
  },
  {
    id: "tech-professional",
    title: "Tech & professional families",
    intro:
      "When at least one parent works in tech, engineering, or consulting in the west — put job options first, then family fit.",
    tags: ["Jobs", "Hybrid", "Tech region"],
    picks: picks([
      {
        cityId: "eindhoven",
        why: "Brainport tech and manufacturing depth — best when your contract is really there, not a stepping stone to weekly Amsterdam.",
        highlights: [
          "Jobs — ASML-scale employers and a dense SME tech layer — shorter commutes inside the region than forcing a Randstad flat share.",
          "Hybrid — Many teams anchor locally — fewer “must be in Zuid Tuesday” weeks than Amsterdam-orbit households see.",
          "Family fit — International school and expat services exist; housing pressure is real but often less absurd than inner Amsterdam.",
        ],
      },
      {
        cityId: "utrecht",
        why: "Consulting and HQ gravity in the middle of the country — great when one parent is national-travel heavy and the other wants city services.",
        highlights: [
          "Jobs — Finance, tech, and public-sector hubs — check which side of the station your office sits on before you pick a postcode.",
          "Hybrid — Strong trains every direction — good for split offices (Randstad + east) if you protect childcare handovers.",
          "Housing — Family-sized stock competes hard — widen radius early so rent does not erase the commute win.",
        ],
      },
      {
        cityId: "amsterdam",
        why: "When clients, HQs, and on-sites cluster in the capital — high rent can still be rational if it buys dozens of saved hours a month.",
        highlights: [
          "Jobs — Dense interview and conference rhythm — strongest when both careers actually need the city, not only the brand.",
          "Hybrid — Inner ring shines for short hops; outer belts trade rent for OV time — model school pickups on both patterns.",
          "Trade-off — Sticker rent plus smaller m² — pair with childcare and TOC so the spreadsheet matches Haarlem or Amstelveen finalists.",
        ],
      },
    ]),
    tradeoffs: [
      "Two-career tech households often underestimate on-call weeks — childcare backup is part of the city choice.",
    ],
    toolHint: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
  {
    id: "calm-connected",
    title: "Calm but connected",
    intro:
      "When you want quiet streets and predictable weeks — smaller cores and historic towns shine if your travel window allows.",
    tags: ["Pace", "Kids", "Trains"],
    picks: picks([
      {
        cityId: "amersfoort",
        name: "Amersfoort (compare)",
        why: "Fortress city on fast rail — compare directly with Utrecht when you want quiet streets but still need Zuid some weeks.",
        highlights: [
          "Pace — Compact centre, easy bike school runs — evenings feel smaller than Utrecht without going fully rural.",
          "Trains — Quick hops toward Amsterdam and Utrecht — validate standing-room peaks if one parent does daily returns.",
          "Kids — Growing family demand — scout listings early; treat it as a deliberate alternative, not a cheap clone of Utrecht.",
        ],
      },
      {
        cityId: "delft",
        why: "Canal-town calm between Rotterdam and The Hague with TU Delft on the doorstep — gentle weeks if your jobs sit south-west.",
        highlights: [
          "Pace — Walkable historic core — strong when you want museum-quiet streets more than big-city nightlife.",
          "Trains — Frequent toward Rotterdam CS and The Hague — short enough for many two-office households in the triangle.",
          "Housing — Stock is tight — the “calm” win is rhythm, not automatic bargains; model rent vs slightly larger Rotterdam belts.",
        ],
      },
      {
        cityId: "haarlem",
        why: "Beach and forest without giving up Randstad reach — calm label still needs honest Tuesday-train modelling.",
        highlights: [
          "Pace — Village-style pockets outward from a walkable centre — strong weekend-outdoor families.",
          "Trains — Into Amsterdam Zuid in many setups — school-run + platform crowding deserve a dry run.",
          "Kids — Same international-school homework as the corridor — calm city ≠ automatic short waitlists.",
        ],
      },
    ]),
    tradeoffs: [
      "Calm can mean thinner evening spontaneity — visit midweek before you romanticise weekends only.",
    ],
  },
  {
    id: "academic",
    title: "Academic families",
    intro:
      "When universities, research institutes, or international schools anchor your calendar — these cities show up repeatedly on shortlists.",
    tags: ["Research", "Schools", "Culture"],
    picks: picks([
      {
        cityId: "leiden",
        why: "Leiden University anchors research, spin-offs, and international school demand — compact core with Hague and Schiphol still reachable.",
        highlights: [
          "Research — Dense academic and R&D employers for a city this size — good when grants or faculty contracts set the clock.",
          "Schools — Strong Dutch schools; international families often compare seat depth with The Hague before committing.",
          "Culture — Museums, choirs, and student energy — overlap with student housing in pockets; pick neighbourhoods with eyes open.",
        ],
      },
      {
        cityId: "delft",
        why: "TU Delft next door — engineering and deep-tech employers in a walkable town between Rotterdam and The Hague.",
        highlights: [
          "Research — Campus-to-lab commutes can be minutes by bike — strong for dual-academic or spin-off households.",
          "Schools — International streams exist; still map realistic Dutch tracks if you need backup options.",
          "Culture — Small-city concerts and cafes — quieter evenings than Rotterdam with big-city trips when you want them.",
        ],
      },
      {
        cityId: "groningen",
        why: "RUG and a lively student city — outsized research and cultural life for the north if your contracts are truly there.",
        highlights: [
          "Research — Strong university hospital and faculties — excellent when both careers are northern or remote-first.",
          "Schools — Good services relative to size — thinner international density than the west; validate tracks early.",
          "Culture — Young city energy and festivals — distance to Randstad HQs is the honest trade for many households.",
        ],
      },
    ]),
    tradeoffs: [
      "Academic contracts can be shorter than corporate ones — keep housing flexibility in view.",
    ],
    toolHint: { href: R.cityComparison, label: "Compare finalists" },
  },
];
