import type { CitiesBestForExpatsScenarioConfig } from "./citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "./citiesBestForExpats.routes";

/** Scenario-based city shortlist seeds. */
export const citiesBestForExpatsScenarios: CitiesBestForExpatsScenarioConfig[] = [
  {
    id: "international-professionals",
    title: "Best for international professionals",
    tags: ["Career", "English", "Travel"],
    intro:
      "**Dense hiring**, English-default services, and **easy trains / Schiphol** when you need them.",
    bestFor: "Corporate paths, frequent travel, English-first services.",
    tradeoffs: ["Randstad **convenience ↔ rent**; Eindhoven **nightlife scale ↔ sector depth**."],
    picks: [
      { name: "Amsterdam", href: "/netherlands/amsterdam/", why: "Widest employer and service surface." },
      { name: "The Hague", href: "/netherlands/the-hague/", why: "Institutions, law, NGOs, policy." },
      { name: "Rotterdam", href: "/netherlands/rotterdam/", why: "Port, trade, creative industries." },
      { name: "Eindhoven", href: "/netherlands/eindhoven/", why: "Deep tech / hardware — different network than Randstad." },
    ],
    toolHint: { href: R.cityComparison, label: "Compare cities in the tool" },
  },
  {
    id: "families",
    title: "Best for families",
    tags: ["Schools", "Space", "Commute"],
    intro: "**Space, schools, childcare logistics** — not only the city with the best reputation.",
    bestFor: "Space, schools, and predictable commutes for school runs.",
    tradeoffs: [
      "**Schools & childcare** queue everywhere — start lists early; model **rent + childcare** together.",
    ],
    picks: [
      {
        name: "Amstelveen",
        href: "/netherlands/amstelveen/",
        why: "Space + Amsterdam reach; familiar international-school flows.",
      },
      { name: "Haarlem", href: "/netherlands/haarlem/", why: "Atmosphere; short hop to Amsterdam." },
      { name: "Utrecht", href: "/netherlands/utrecht/", why: "Compact core, strong amenities, central rail." },
      { name: "Breda", href: "/netherlands/breda/", why: "Often more space per euro vs western cores." },
    ],
    toolHint: { href: R.childcare, label: "Childcare cost estimator" },
  },
  {
    id: "students-early-career",
    title: "Best for students / early-career",
    tags: ["Housing", "Social", "Internships"],
    intro: "**Rooms near campus**, internships, and **social density** — timing beats prestige.",
    bestFor: "Student housing, internships, and social density.",
    tradeoffs: ["**Term starts** spike competition — plan move-in dates, not only the city name."],
    picks: [
      { name: "Utrecht", href: "/netherlands/utrecht/", why: "Big student pool + central travel." },
      { name: "Groningen", href: "/netherlands/groningen/", why: "Student-heavy; often gentler rent than Randstad." },
      { name: "Leiden", href: "/netherlands/leiden/", why: "Research city; Randstad reach." },
      { name: "Maastricht", href: "/netherlands/maastricht/", why: "International student mix; border-town vibe." },
    ],
    toolHint: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
  {
    id: "affordability-conscious",
    title: "Best for affordability-conscious expats",
    tags: ["Budget", "Total cost", "Commute"],
    intro: "Optimize **rent + travel + car need + overlap** — not a headline monthly from one listing.",
    bestFor: "Total monthly burn including commute and overlap costs.",
    tradeoffs: ["Cheap rent + **daily Randstad commute** can erase savings — model **door-to-door**."],
    picks: [
      { name: "Groningen", href: "/netherlands/groningen/", why: "Softer rent vs west — if work is local." },
      { name: "Breda", href: "/netherlands/breda/", why: "Mid-size; space-value for some profiles." },
      { name: "Eindhoven", href: "/netherlands/eindhoven/", why: "Check neighbourhood spreads vs salary bands." },
      { name: "Rotterdam", href: "/netherlands/rotterdam/", why: "Often more room than Amsterdam for similar roles." },
    ],
    toolHint: { href: R.rentAffordability, label: "Rent affordability calculator" },
  },
  {
    id: "quieter-connected",
    title: "Best for a quieter but connected lifestyle",
    tags: ["Calm", "Connected", "Hybrid"],
    intro: "**Small-city or suburban calm** without feeling cut off from jobs or culture.",
    bestFor: "Calm daily life with fast links to bigger job markets.",
    tradeoffs: [
      "You may trade **evening buzz** for **sleep & space** — test a weekday, not only a weekend visit.",
    ],
    picks: [
      { name: "Haarlem", href: "/netherlands/haarlem/", why: "Historic core; fast Amsterdam links." },
      { name: "Delft", href: "/netherlands/delft/", why: "Between Rotterdam and The Hague by train." },
      { name: "Leiden", href: "/netherlands/leiden/", why: "University town; intercity access." },
      { name: "Amstelveen", href: "/netherlands/amstelveen/", why: "Green suburb; Amsterdam proximity." },
    ],
    toolHint: { href: R.utilities, label: "Utilities & services comparison" },
  },
  {
    id: "international-infrastructure",
    title: "Best if you want strong international infrastructure",
    tags: ["Services", "Welcome desks", "Hiring"],
    intro: "**Expat centres**, English-first services, and **dense international hiring**.",
    bestFor: "Welcome desks, English-first services, dense international hiring.",
    tradeoffs: ["High international share can **slow early Dutch immersion** — schedule learning if that matters."],
    picks: [
      { name: "Amsterdam", href: "/netherlands/amsterdam/", why: "Maximum scale: employers + services." },
      { name: "The Hague", href: "/netherlands/the-hague/", why: "IOs, legal cluster, Hague International Centre." },
      { name: "Rotterdam", href: "/netherlands/rotterdam/", why: "Rotterdam International Center + diverse industry." },
      { name: "Utrecht", href: "/netherlands/utrecht/", why: "Utrecht International Center + rail hub." },
    ],
  },
  {
    id: "smaller-city-feel",
    title: "Best if you want a smaller-city feel",
    tags: ["Local", "Neighbourhoods", "Character"],
    intro: "**Shorter distances**, recognizable neighbourhoods, **local character**.",
    bestFor: "Recognizable neighbourhoods and local character over mega-city scale.",
    tradeoffs: ["Fewer **alternate employers** if a job ends — keep a realistic plan B."],
    picks: [
      { name: "Groningen", href: "/netherlands/groningen/", why: "One coherent northern hub." },
      { name: "Maastricht", href: "/netherlands/maastricht/", why: "Compact; border culture." },
      { name: "Breda", href: "/netherlands/breda/", why: "Mid-size Brabant; growing international community." },
      { name: "Delft", href: "/netherlands/delft/", why: "Small core; big cities one train away." },
    ],
  },
];
