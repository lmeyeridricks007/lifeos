export type FamiliesDayInLifeScenario = {
  id: string;
  title: string;
  subtitle: string;
  morning: string;
  school: string;
  work: string;
  evening: string;
  honestTradeoff: string;
};

/** Morning → school → work → evening — three example family weeks side by side. */
export const citiesFamiliesDayInLife: FamiliesDayInLifeScenario[] = [
  {
    id: "amsterdam",
    title: "Family in central Amsterdam",
    subtitle: "Smaller flat · higher rent · often a shorter commute",
    morning:
      "07:00 — one parent bikes the kids to a nearby school in about 12 minutes; the other walks to the tram for work in the city centre in under 20. Rain gear stays by the door.",
    school:
      "08:30–15:00 — after-school care fills the gaps; you either got on waiting lists early or you pay for flexibility. Friends and playdates are usually a short walk away.",
    work:
      "Shorter travel is the upside; the downside is finding quiet for calls in a small flat unless you set clear boundaries.",
    evening:
      "18:00 — groceries on foot; parks are busy but good. You trade floor space for time and choice — weekends can feel big even when the flat feels tight.",
    honestTradeoff:
      "Money pressure is real (rent + childcare + parking). If one job moves to Rotterdam or Utrecht, the “easy commute” story can change quickly — plan as a couple, not as two solo routes.",
  },
  {
    id: "utrecht-haarlem",
    title: "Family in Utrecht or Haarlem",
    subtitle: "Mid-sized city · workable commute · steady weekly rhythm",
    morning:
      "07:15 — bike to school or a 10-minute walk; the other parent takes a regional or intercity train on days the office is further west.",
    school:
      "The school week feels steady — clubs and sports without big-city logistics. International options exist but are less automatic than in Amsterdam.",
    work:
      "Hybrid works when office days are realistic — Utrecht can mean busy platforms at rush hour; Haarlem can mean planned days into Amsterdam.",
    evening:
      "18:30 — dinner at home most nights; green space (coast or forest near Haarlem, parks in Utrecht) saves weekends. Housing is still pricey, but the pace feels gentler for many families.",
    honestTradeoff:
      "This is not a “cheap” story — family-sized homes are still hard to find. The win is pace, services, and honest commutes for teams that do not need Amsterdam’s maximum density.",
  },
  {
    id: "breda-arnhem",
    title: "Family in Breda or the Arnhem area",
    subtitle: "More house · some long commute days · calmer evenings",
    morning:
      "07:00 — more car or longer train if one parent often works in the Randstad west; older kids may do more bus or bike legs over time.",
    school:
      "Local schools are often mainly Dutch — that can work very well, but parent Dutch still helps for smooth years.",
    work:
      "Heavy office weeks hurt more here — count train time and ticket cost in the same sheet as lower rent.",
    evening:
      "19:00 — a bigger table, maybe a garden or a quiet street; the community can feel smaller but warmer once you settle in.",
    honestTradeoff:
      "Space helps evenings; long commute weeks add stress. If both parents need different job hubs, check that carefully before you fall in love with the garden alone.",
  },
];
