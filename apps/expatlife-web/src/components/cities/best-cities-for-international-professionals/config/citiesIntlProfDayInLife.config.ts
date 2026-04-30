export type IntlProfDayInLifeScenario = {
  id: string;
  title: string;
  subtitle: string;
  morning: string;
  work: string;
  commute: string;
  evening: string;
  honestTradeoff: string;
};

/** Morning → work → commute → evening — example professional weeks. */
export const citiesIntlProfDayInLife: IntlProfDayInLifeScenario[] = [
  {
    id: "amsterdam-pro",
    title: "Professional in Amsterdam",
    subtitle: "High opportunity · high cost · often shorter commute",
    morning:
      "07:30 — short bike or tram to the office; second coffee is optional because meetings start early. Rain gear lives by the door.",
    work:
      "Packed calendars — clients, interviews, and cross-team work are walking or metro distance. You get lots of choice — and lots of interruptions.",
    commute:
      "Often the win — if your employer is truly Amsterdam-centric, you claw back evenings versus long intercity lives. If your job drifts Rotterdam/Utrecht, the story changes fast.",
    evening:
      "18:30 — groceries on foot; events and dinners are easy to say yes to. You trade square metres and quiet for time and networks.",
    honestTradeoff:
      "Money + pace stress is real. If you chase Amsterdam for salary bragging rights but your life needs space and calm, the numbers can still say no — listen to them.",
  },
  {
    id: "utrecht-pro",
    title: "Professional in Utrecht",
    subtitle: "Balanced scale · central access · serious but moderated cost",
    morning:
      "07:45 — bike to station or office; trains to Randstad hubs feel normal, not heroic, on the good days.",
    work:
      "Strong mix of big companies, scale-ups, and near-government work — enough depth to build a career without only living in inner-city chaos.",
    commute:
      "Hybrid honesty matters — Utrecht’s hub role can mean crowded platforms at peak. Model the brutal weeks, not one ideal Tuesday.",
    evening:
      "19:00 — dinner at home is realistic most nights; you still have culture and meetups when you want them — just not infinite choice.",
    honestTradeoff:
      "Not a discount Amsterdam — housing still bites. The trade is usually pace + practicality, not a free lunch on rent.",
  },
  {
    id: "eindhoven-breda-pro",
    title: "Professional in Eindhoven / Breda",
    subtitle: "Lower cost pressure · calmer rhythm · longer hops to some clients",
    morning:
      "08:00 — bike-first routine; many locals treat rain as normal, not a crisis. Car-light weeks are common when neighbourhoods fit.",
    work:
      "Local job pull can be excellent (especially Eindhoven’s tech belt for engineering) — fewer forced trips west if your role is truly anchored there.",
    commute:
      "When head-office days spike, train time becomes the boss variable — especially for two-career households with mismatched cities.",
    evening:
      "18:45 — quieter evenings and easier recovery; weekends feel human-scaled — fewer spontaneous collisions, more intentional planning.",
    honestTradeoff:
      "Career ceilings are sector-dependent — brilliant for some paths, thin for others. If you need weekly serendipity, be honest before you romanticise calm.",
  },
];
