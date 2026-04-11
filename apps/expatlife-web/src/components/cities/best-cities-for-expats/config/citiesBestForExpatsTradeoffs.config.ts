import type { CitiesBestForExpatsTradeoffCalloutConfig } from "./citiesBestForExpats.types";

/** Dark-band trade-off callouts (reality check). */
export const citiesBestForExpatsTradeoffs: CitiesBestForExpatsTradeoffCalloutConfig[] = [
  {
    id: "cost-convenience",
    title: "Cost vs convenience",
    tags: ["Rent", "Commute", "Dual career"],
    body: "High rent can **win** if it cuts **commute, dual-career pain, or peak-train fatigue**. Cheap rent far out often adds **tickets, time, and stress** — model **total month**, not rent line only.",
  },
  {
    id: "commute-vibe",
    title: "Commute vs city vibe",
    tags: ["Time", "Social", "Energy"],
    body: "Buzz is wasted if you are **never home in daylight**. Quiet is hard if you need **random social density** — pick the mismatch you can live with.",
  },
  {
    id: "family-energy",
    title: "Family fit vs urban energy",
    tags: ["Kids", "Nightlife", "Horizon"],
    body: "Singles overweight **nightlife**; parents overweight **school brands** without testing **school runs & childcare**. Choose for **2–3 years**, not a fantasy forever-home.",
  },
  {
    id: "international-local",
    title: "International ease vs local feel",
    tags: ["Dutch", "Friction", "Setup"],
    body: "Big hubs = **less friction week one**, slower **Dutch** unless you push. Smaller cities = **faster local feel**, more intentional setup. Neither is “better” — match your goals.",
  },
];
