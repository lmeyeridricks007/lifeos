import type { CitiesBestForExpatsScenarioConfig } from "./citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "./citiesBestForExpats.routes";

/** Scenario-based city shortlist seeds. */
export const citiesBestForExpatsScenarios: CitiesBestForExpatsScenarioConfig[] = [
  {
    id: "international-professionals",
    title: "Best for international professionals",
    tags: ["Career", "English", "Travel"],
    intro:
      "Dense hiring, English-default services, and easy trains / Schiphol when you need them — the cities below are strong when career options and travel links matter as much as rent.",
    bestFor: "Corporate paths, frequent travel, English-first services.",
    tradeoffs: ["Randstad convenience ↔ rent; Eindhoven nightlife scale ↔ sector depth."],
    picks: [
      {
        name: "Amsterdam",
        href: "/netherlands/amsterdam/",
        why: "Largest employer pool in the country — finance, tech, scale-ups, and agencies used to visa-heavy hiring. English works in many workplaces and day-to-day services. Schiphol and intercity rail make weekly travel realistic, but rent competition is the usual offset.",
      },
      {
        name: "The Hague",
        href: "/netherlands/the-hague/",
        why: "Heavy institutions, legal, policy, and NGO hiring plus a big international resident share. English is common in those clusters. Good Randstad connectivity without always paying Amsterdam-centre premiums — still pricey in popular family pockets.",
      },
      {
        name: "Rotterdam",
        href: "/netherlands/rotterdam/",
        why: "Port, logistics, energy transition, and creative sectors hire at scale; the city is used to foreign talent and rebuild-era housing variety. Often more space per euro than central Amsterdam for similar roles — check commute direction if your office sits elsewhere in the Randstad.",
      },
      {
        name: "Eindhoven",
        href: "/netherlands/eindhoven/",
        why: "Brainport (semiconductors, medtech, automotive software) is deeper here than in generic “tech” lists — networking is sector-specific, not a mirror of Amsterdam finance. Smaller metro with strong local hiring; nightlife and partner job breadth are the usual trade-offs vs Randstad.",
      },
    ],
    toolHint: { href: R.cityComparison, label: "Compare cities in the tool" },
  },
  {
    id: "families",
    title: "Best for families",
    tags: ["Schools", "Space", "Commute"],
    intro:
      "Space, schools, childcare logistics — not only the city with the best reputation. Each pick below scores on practical family rhythm (school runs, green space, predictable commutes) rather than Instagram views.",
    bestFor: "Space, schools, and predictable commutes for school runs.",
    tradeoffs: [
      "Schools & childcare queue everywhere — start lists early; model rent + childcare together.",
    ],
    picks: [
      {
        name: "Amstelveen",
        href: "/netherlands/amstelveen/",
        why: "Leafy suburb with detached and family-sized stock that is hard to find in central Amsterdam. International-school and expat-family flows are well trodden. Sprinter / metro links keep Amsterdam employers reachable — you trade urban buzz for space and calm.",
      },
      {
        name: "Haarlem",
        href: "/netherlands/haarlem/",
        why: "Compact, walkable centre with a village feel and strong schools; many families treat it as “Amsterdam quality of life without living in Amsterdam.” Frequent trains make Amsterdam/Schiphol commutes doable — competition for houses near the station is real.",
      },
      {
        name: "Utrecht",
        href: "/netherlands/utrecht/",
        why: "Single coherent city — school runs and activities tend to stay within bike distance of the core, while NS hub access covers the country. Childcare and international streams exist at scale. Offset: rent pressure rivals western Randstad in popular neighbourhoods.",
      },
      {
        name: "Breda",
        href: "/netherlands/breda/",
        why: "Mid-size Brabant city: often better €/m² than Haarlem or inner Utrecht for similar house types, with less frantic centre crowds. Works well when one parent is hybrid or both roles sit south / central NL — less ideal if Amsterdam is five days a week.",
      },
    ],
    toolHint: { href: R.childcare, label: "Childcare cost estimator" },
  },
  {
    id: "students-early-career",
    title: "Best for students / early-career",
    tags: ["Housing", "Social", "Internships"],
    intro:
      "Rooms near campus, internships, and social density — timing beats prestige. These cities help when you need peers, housing turnover, and employers used to short contracts.",
    bestFor: "Student housing, internships, and social density.",
    tradeoffs: ["Term starts spike competition — plan move-in dates, not only the city name."],
    picks: [
      {
        name: "Utrecht",
        href: "/netherlands/utrecht/",
        why: "Huge student share (HU, UU, HKU) and dense internship market within cycling distance. Central rail makes weekend work or interviews elsewhere easy. Room scarcity spikes before term — start SSH / DUO / landlord channels early.",
      },
      {
        name: "Groningen",
        href: "/netherlands/groningen/",
        why: "RUG-dominated student city — nightlife and associations are built around student life, and cycling covers almost everything. Rent is often softer than Randstad if you live locally; long-distance commuting to the west rarely pencils out.",
      },
      {
        name: "Leiden",
        href: "/netherlands/leiden/",
        why: "Research-heavy (Leiden University, LUMC) with PhD and lab internships plus short hops to The Hague organisations and Randstad employers. Quieter than Utrecht’s club row — good if you want college town over mega student city.",
      },
      {
        name: "Maastricht",
        href: "/netherlands/maastricht/",
        why: "Maastricht University runs many English-language programmes; student body is highly international. Border location (Belgium / Germany) suits Euregional internships. Smaller local job market than Randstad — plan if you stay after graduation.",
      },
    ],
    toolHint: { href: R.costOfLiving, label: "Cost of living calculator" },
  },
  {
    id: "affordability-conscious",
    title: "Best for affordability-conscious expats",
    tags: ["Budget", "Total cost", "Commute"],
    intro:
      "Optimize rent + travel + car need + overlap — not a headline monthly from one listing. Below, each city notes where savings are real versus commute tax.",
    bestFor: "Total monthly burn including commute and overlap costs.",
    tradeoffs: ["Cheap rent + daily Randstad commute can erase savings — model door-to-door."],
    picks: [
      {
        name: "Groningen",
        href: "/netherlands/groningen/",
        why: "Rent and general cost of living are typically below western Randstad when your job is in the north — the city is self-contained. If you still commute west most days, train time + peak fares eat the advantage fast.",
      },
      {
        name: "Breda",
        href: "/netherlands/breda/",
        why: "Mid-size housing market: you often get more square metres than in inner-ring western cities for the same monthly. Strong if work sits Brabant / Zeeland / southern Randstad; weaker if Amsterdam is five-day mandatory.",
      },
      {
        name: "Eindhoven",
        href: "/netherlands/eindhoven/",
        why: "Tech salaries can offset rent, but neighbourhood spreads are wide — newer outer estates vs inner ring. Car-lite living is possible if work and school align; two-car households add parking and tax fast.",
      },
      {
        name: "Rotterdam",
        href: "/netherlands/rotterdam/",
        why: "Within the Randstad, Rotterdam often offers more varied (and sometimes cheaper) housing stock than Amsterdam for similar gross salaries in port, logistics, and corporate HQs. Central neighbourhoods still pinch — compare postcode to office.",
      },
    ],
    toolHint: { href: R.rentAffordability, label: "Rent affordability calculator" },
  },
  {
    id: "quieter-connected",
    title: "Best for a quieter but connected lifestyle",
    tags: ["Calm", "Connected", "Hybrid"],
    intro:
      "Small-city or suburban calm without feeling cut off from jobs or culture — the picks below keep evening quiet while preserving realistic commutes to larger labour markets.",
    bestFor: "Calm daily life with fast links to bigger job markets.",
    tradeoffs: [
      "You may trade evening buzz for sleep & space — test a weekday, not only a weekend visit.",
    ],
    picks: [
      {
        name: "Haarlem",
        href: "/netherlands/haarlem/",
        why: "Historic centre feels like a small city after dark, while Sprinters put Amsterdam Zuid / Sloterdijk in roughly 20–30 minutes for office days. You live quieter evenings but keep big-city salary pools reachable.",
      },
      {
        name: "Delft",
        href: "/netherlands/delft/",
        why: "Canal-scale town with TU density — daily life is walking and cycling. Intercity trains split easily toward Rotterdam Centraal or Den Haag HS for work. Ideal when partners split south Randstad vs government cluster.",
      },
      {
        name: "Leiden",
        href: "/netherlands/leiden/",
        why: "University-town rhythm — museums, water, and compact neighbourhoods — with IC trains to Schiphol, Amsterdam, and Rotterdam. Strong for hybrid schedules; rush-hour parking near the station is still painful if you drive.",
      },
      {
        name: "Amstelveen",
        href: "/netherlands/amstelveen/",
        why: "Forest parks and wide streets read suburban, while metro + bus keep Amsterdam accessible for work and culture. Best when you want kids on bikes and quiet nights, not café density outside the Stadshart.",
      },
    ],
    toolHint: { href: R.utilities, label: "Utilities & services comparison" },
  },
  {
    id: "international-infrastructure",
    title: "Best if you want strong international infrastructure",
    tags: ["Services", "Welcome desks", "Hiring"],
    intro:
      "Expat centres, English-first services, and dense international hiring — these cities invest in onboarding infrastructure (information, networks, and employers used to 30% ruling / IND timelines).",
    bestFor: "Welcome desks, English-first services, dense international hiring.",
    tradeoffs: ["High international share can slow early Dutch immersion — schedule learning if that matters."],
    picks: [
      {
        name: "Amsterdam",
        href: "/netherlands/amsterdam/",
        why: "Largest concentration of international employers, relocation agencies, and English-speaking medical and school options. IND appointments and expat meetups are easiest to schedule here — at the cost of crowding and rent.",
      },
      {
        name: "The Hague",
        href: "/netherlands/the-hague/",
        why: "Embassies, courts, NGOs, and IOs create a steady pipeline of foreign hires; Hague International Centre bundles registration orientation. English is default in many workplaces — useful for trailing partners hunting first roles.",
      },
      {
        name: "Rotterdam",
        href: "/netherlands/rotterdam/",
        why: "Rotterdam International Centre plus port and corporate HQs that recruit internationally. Housing stock is more varied than in canal-belt Amsterdam, which can lower friction for newly arrived households.",
      },
      {
        name: "Utrecht",
        href: "/netherlands/utrecht/",
        why: "Utrecht International Centre sits beside a national rail hub, which helps when you are still comparing cities or partners commute in different directions. Large student and tech scenes keep English common in daily services.",
      },
    ],
  },
  {
    id: "smaller-city-feel",
    title: "Best if you want a smaller-city feel",
    tags: ["Local", "Neighbourhoods", "Character"],
    intro:
      "Shorter distances, recognizable neighbourhoods, and local character — daily life runs on bikes and short hops, not anonymous mega-city blocks. These picks still need a job-market reality check (see trade-offs).",
    bestFor: "Recognizable neighbourhoods and local character over mega-city scale.",
    tradeoffs: ["Fewer alternate employers if a job ends — keep a realistic plan B."],
    picks: [
      {
        name: "Groningen",
        href: "/netherlands/groningen/",
        why: "A true regional capital of ~230k: everything feels like one city — work, cafés, culture, and friends sit inside cycling distance. Strong student energy keeps it lively without Randstad tourist pressure. Northern labour market is the ceiling if you need many backup employers in one commute shed.",
      },
      {
        name: "Maastricht",
        href: "/netherlands/maastricht/",
        why: "Compact Limburg centre with hills, cafés, and a distinct border-town rhythm (Liège / Aachen day trips). Maastricht University brings international faces without Amsterdam scale. Best when you value walkable charm and cross-border life — partner job breadth is narrower than Randstad.",
      },
      {
        name: "Breda",
        href: "/netherlands/breda/",
        why: "Mid-size Brabant (~180k): a historic centre you can cross on foot, human-scale nightlife, and enough employers in logistics, food, and services for local careers. International community is growing but less dense than Amsterdam — integration can feel more Dutch-forward sooner.",
      },
      {
        name: "Delft",
        href: "/netherlands/delft/",
        why: "Canal-town scale (~100k in the municipality) with TU-driven energy — daily life is quiet streets and markets, not skyscrapers. Intercity trains put Rotterdam and The Hague job markets ~15 minutes away, so you keep small-city evenings with big-city pay bands if commutes align.",
      },
    ],
  },
];
