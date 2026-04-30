import type { CitiesBestForExpatsMisunderstandingConfig } from "../../best-cities-for-expats/config/citiesBestForExpats.types";

export const citiesFamiliesMistakes: CitiesBestForExpatsMisunderstandingConfig[] = [
  {
    id: "rent-only",
    title: "Choosing only by rent",
    body:
      "Cheap rent with a brutal school run or impossible daycare triangle becomes expensive in time fast. Hold rent + childcare + travel on one page before you celebrate a listing.",
    tags: ["Rent", "Childcare", "Commute"],
  },
  {
    id: "ignore-childcare",
    title: "Ignoring childcare until after housing",
    body:
      "Waitlists can gate your work restart. Start parallel enquiries in every finalist city — a “perfect flat” in the wrong triangle is a trap.",
    tags: ["Childcare", "Housing", "Planning"],
  },
  {
    id: "commute-ideal",
    title: "Underestimating commute variability",
    body:
      "Model rain, sick days, and peak crowding — not only the sunny Tuesday when Google Maps looks kind.",
    tags: ["Commute", "Realism"],
  },
  {
    id: "amsterdam-default",
    title: "Assuming Amsterdam is automatically best",
    body:
      "Amsterdam wins on choices — not on automatic family ease. Many households trade space and calm on purpose once weekly life is honest.",
    tags: ["Amsterdam", "Trade-offs"],
  },
  {
    id: "logistics-handwave",
    title: "Hand-waving daily logistics",
    body:
      "Pickup windows, GP access, and who covers sick days decide stress more than brunch options. Interview the week, not the neighbourhood Instagram.",
    tags: ["Logistics", "Family week"],
  },
  {
    id: "total-cost",
    title: "Not modelling total monthly pressure",
    body:
      "Rent + childcare + energy + transport + insurance move together. Use cost of living + childcare + rent tools on the same household assumptions across finalists.",
    tags: ["Cost", "Tools"],
  },
];
