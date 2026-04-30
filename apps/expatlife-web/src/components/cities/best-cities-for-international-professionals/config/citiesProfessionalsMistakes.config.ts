import type { CitiesBestForExpatsMisunderstandingConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";

export const citiesProfessionalsMistakes: CitiesBestForExpatsMisunderstandingConfig[] = [
  {
    id: "salary-only",
    title: "Chasing salary only",
    body:
      "Salary before tax hides rent, tax quirks, and travel time. Model take-home + housing + travel on the same sheet before you celebrate an offer.",
    tags: ["Salary", "Net pay"],
  },
  {
    id: "ignore-rent",
    title: "Ignoring rent pressure",
    body:
      "A winning salary can still be a lifestyle loss if housing competition forces compromises you hate. Pair every finalist city with rent affordability assumptions.",
    tags: ["Rent", "Housing"],
  },
  {
    id: "commute-underestimate",
    title: "Underestimating commute variability",
    body:
      "Model delays, rush hour, and fixed office days — not only the sunny Tuesday when maps look kind.",
    tags: ["Commute", "Hybrid"],
  },
  {
    id: "amsterdam-default",
    title: "Assuming Amsterdam is always best",
    body:
      "Amsterdam wins on choices — not on automatic career ease for every person. Many professionals deliberately trade pace and cost once weeks are honest.",
    tags: ["Amsterdam", "Trade-offs"],
  },
  {
    id: "lifestyle-skip",
    title: "Skipping lifestyle fit",
    body:
      "Rest, evenings, and partner happiness decide how long you stay more than brunch options. Picture the week, not the LinkedIn stereotype.",
    tags: ["Lifestyle", "Recovery"],
  },
  {
    id: "no-net-model",
    title: "Not calculating real take-home",
    body:
      "Run salary net, 30% ruling (if relevant), COL, and rent tools on identical assumptions across finalists — then compare.",
    tags: ["Tools", "Net income"],
  },
];
