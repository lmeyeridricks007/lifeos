import type { CitiesCheapestCityCard } from "./citiesCheapest.types";
import { citiesBestForExpatsRoutes as R } from "../../best-cities-for-expats/config/citiesBestForExpats.routes";

/**
 * Canonical cheapest-city rows — shortlist + optional `profile` for decision cards.
 * Order = shortlist order on the page.
 */
export const citiesCheapestCityCards: CitiesCheapestCityCard[] = [
  {
    id: "groningen",
    name: "Groningen",
    costLevel: "low",
    tagline: "Strong student and northern jobs base — often lower rent pressure than the busy western cities.",
    tags: ["Northern NL", "Students", "Rent", "Compact core"],
    bestFor: ["Remote-friendly teams", "University-linked work", "Households that like a compact northern core"],
    tradeoffs: ["Long train times to western employers — check before you assume “anywhere in NL” is fine."],
    links: [{ href: "/netherlands/groningen/", label: "Open Groningen guide", isPrimary: true }],
    profile: {
      intro: "Northern compact city — rent often softer than Amsterdam-style pressure, with a full student-town service layer.",
      bestFor: ["Households who like bike-first cores and can accept distance to head offices in the west."],
      tradeoffs: ["Long-distance office weeks get expensive in time and tickets."],
      nextLinks: [
        { href: R.costOfLiving, label: "Cost of living calculator" },
        { href: R.cityComparison, label: "City comparison tool" },
      ],
    },
  },
  {
    id: "enschede",
    name: "Enschede",
    costLevel: "low",
    tagline: "Twente / eastern NL — typically gentler rent than major hubs for similar-sized housing.",
    tags: ["Twente", "Eastern NL", "Rent", "Hybrid-friendly"],
    bestFor: ["Twente employers", "Hybrid workers with few western office days", "Budget-first households"],
    tradeoffs: ["Smaller international day-to-day scene; partner job markets can be narrower."],
    links: [{ href: R.cityComparison, label: "Model Twente in comparison tool", isPrimary: true }],
  },
  {
    id: "tilburg",
    name: "Tilburg",
    costLevel: "medium-low",
    tagline: "Brabant city with Brussels or western NL angles depending on sector — rent often softer than core hubs.",
    tags: ["Brabant", "Southern NL", "Logistics", "Families"],
    bestFor: ["Logistics-adjacent roles", "Southern NL bases", "Families wanting Brabant pace"],
    tradeoffs: ["Some careers still orbit Eindhoven or Rotterdam — validate commute before signing."],
    links: [{ href: "/netherlands/tilburg/", label: "Open Tilburg guide", isPrimary: true }],
    profile: {
      intro: "Brabant workhorse — often moderate rent with links toward Rotterdam and Eindhoven corridors.",
      bestFor: ["Southern NL bases who want urban life without Amsterdam sticker shock."],
      tradeoffs: ["Job depth varies — check partner and specialist hiring locally."],
      nextLinks: [
        { href: R.rentAffordability, label: "Rent affordability calculator" },
        { href: R.housingHub, label: "Housing hub" },
      ],
    },
  },
  {
    id: "breda",
    name: "Breda",
    costLevel: "medium-low",
    tagline: "Southern charm with Rotterdam / Antwerp reach — balance of rent and reach for many households.",
    tags: ["Southern NL", "Cross-border", "Weekend access", "Historic centre"],
    bestFor: ["Cross-border commuters (where permitted)", "Quieter urban life with weekend city access"],
    tradeoffs: ["Not a deep discount on every housing type; competition still exists for best-located stock."],
    links: [{ href: "/netherlands/breda/", label: "Open Breda guide", isPrimary: true }],
    profile: {
      intro: "Historic southern city — balance of rent, reach, and weekend quality for many expats.",
      bestFor: ["Households splitting time between quieter home weeks and occasional big-city bursts."],
      tradeoffs: ["Competition for best-connected neighbourhoods still exists."],
      nextLinks: [
        { href: R.costOfLiving, label: "Cost of living calculator" },
        { href: "/netherlands/rotterdam/", label: "Rotterdam guide (commute context)" },
      ],
    },
  },
  {
    id: "arnhem",
    name: "Arnhem",
    costLevel: "medium-low",
    tagline: "Gelderland hub — often moderate rent vs Utrecht/Amsterdam with rail links to both corridors.",
    tags: ["Gelderland", "Green space", "Rail", "Families"],
    bestFor: ["Families", "Green-space priorities", "Workers who can anchor in Arnhem/Nijmegen belt"],
    tradeoffs: ["Peak-direction trains toward Amsterdam can fill; time your realistic commute week."],
    links: [{ href: "/netherlands/arnhem/", label: "Open Arnhem guide", isPrimary: true }],
    profile: {
      intro: "Gelderland hub — green access and rail toward Utrecht/Amsterdam without inner-core rent.",
      bestFor: ["Families and outdoors-forward households with hybrid-friendly employers."],
      tradeoffs: ["Peak crowding toward Amsterdam — model realistic months, not one ideal Tuesday."],
      nextLinks: [
        { href: R.cityComparison, label: "City comparison tool" },
        { href: R.movingChecklist, label: "Moving checklist" },
      ],
    },
  },
  {
    id: "zwolle",
    name: "Zwolle",
    costLevel: "low",
    tagline: "Central-eastern city — often lower rent on the ad than the busiest western cities for similar homes.",
    tags: ["Central-east", "Remote-heavy", "Calm pace", "Rent"],
    bestFor: ["Households centred in the region", "Remote-heavy roles", "Calm-pace preference"],
    tradeoffs: ["Fewer head offices locally; western office days need honest train time and pass costs."],
    links: [{ href: R.cityComparison, label: "Compare Zwolle vs finalists", isPrimary: true }],
  },
  {
    id: "maastricht",
    name: "Maastricht",
    costLevel: "medium-low",
    tagline: "Euroregion city — rent can be more forgiving than Amsterdam while lifestyle stays distinctive.",
    tags: ["Euroregion", "Lifestyle", "Education", "Cross-border"],
    bestFor: ["Life sciences / education paths", "Cross-border angles", "Slower historic-centre rhythm"],
    tradeoffs: ["Eindhoven or Belgian work patterns can dominate logistics — map the real week."],
    links: [{ href: "/netherlands/maastricht/", label: "Open Maastricht guide", isPrimary: true }],
    profile: {
      intro: "Euroregion edge city — distinct lifestyle with rent often kinder than inner Amsterdam-style cores.",
      bestFor: ["Cross-border and university-linked paths who value southern pace."],
      tradeoffs: ["Some careers orbit Eindhoven or Liège-area logistics — map the real calendar."],
      nextLinks: [
        { href: R.costOfLiving, label: "Cost of living calculator" },
        { href: R.utilities, label: "Utilities comparison" },
      ],
    },
  },
  {
    id: "eindhoven",
    name: "Eindhoven",
    costLevel: "medium-low",
    specialNote: "Borderline “mid-tier” on rent — strong jobs can prop up demand.",
    tagline: "Brainport gravity — not the cheapest in this list, but often better value if your job is local.",
    tags: ["Brainport", "Tech", "Engineering", "Value"],
    bestFor: ["Tech and engineering employers in the region", "Families wanting compact Brainport access"],
    tradeoffs: ["Demand for well-located stock is real; partner markets outside tech can be thinner."],
    links: [{ href: "/netherlands/eindhoven/", label: "Open Eindhoven guide", isPrimary: true }],
    profile: {
      intro: "Tech and industry anchor — mid rent for NL but strong local pay stories for tech roles.",
      bestFor: ["Engineering-led households who want fewer forced trips west."],
      tradeoffs: ["Not the lowest rent in the country — value shows when work is truly local."],
      nextLinks: [
        { href: R.costOfLiving, label: "Cost of living calculator" },
        { href: R.cityComparison, label: "City comparison tool" },
      ],
    },
  },
  {
    id: "almere",
    name: "Almere",
    costLevel: "medium-low",
    specialNote: "Special case: newer homes and Amsterdam travel — totals depend on train passes + rent.",
    tagline: "Planned city with lots of modern housing supply — sometimes lower rent than inner Amsterdam with a commute trade.",
    tags: ["New builds", "Amsterdam commute", "Planned city", "Near Amsterdam"],
    bestFor: ["Amsterdam employers who accept train life", "Households wanting newer builds"],
    tradeoffs: [
      "Busy commuter trains toward Amsterdam; do not assume “cheap” without peak fares + rent on one sheet.",
    ],
    links: [{ href: R.cityComparison, label: "Compare Almere vs Amsterdam-area", isPrimary: true }],
  },
];
