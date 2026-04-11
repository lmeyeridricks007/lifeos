import type { CitiesBestForExpatsMisunderstandingConfig } from "./citiesBestForExpats.types";

/** “What people get wrong” cards. */
export const citiesBestForExpatsMisunderstandings: CitiesBestForExpatsMisunderstandingConfig[] = [
  {
    id: "headline-rent",
    title: "Choosing only by **headline rent**",
    tags: ["Budget", "Hidden cost"],
    body: "Add **commute, car need, childcare, overlap** — otherwise you “save” on paper and bleed monthly.",
  },
  {
    id: "commute-reality",
    title: "Ignoring **commute reality**",
    tags: ["Trains", "Peaks"],
    body: "One smooth interview trip ≠ **a year of peak trains**. Test **Tuesday AM**, not Sunday.",
  },
  {
    id: "amsterdam-default",
    title: "Assuming **Amsterdam is best for everyone**",
    tags: ["Fit", "Alternatives"],
    body: "Default for a reason — but **Utrecht, Rotterdam, The Hague, Eindhoven** often win on **fit**, not fame.",
  },
  {
    id: "family-stage",
    title: "Underestimating **family-stage** needs",
    tags: ["Schools", "Childcare"],
    body: "Schools, childcare, evening rhythm change “livable” — optimize **your stage**, not your old city.",
  },
  {
    id: "major-city",
    title: "Overestimating how much you need a **major city**",
    tags: ["Satellite", "Commute"],
    body: "**Haarlem, Delft, Amstelveen, Breda** work when **door-to-door** is honest.",
  },
  {
    id: "total-cost",
    title: "Not checking **total monthly cost**",
    tags: ["Calculators", "Assumptions"],
    body: "Stack **rent + cost of living + utilities** on the **same** assumptions — avoid winning one calc, losing another.",
  },
  {
    id: "tourism-vs-life",
    title: "Confusing **tourism appeal** with **daily life**",
    tags: ["Groceries", "GP", "Commute"],
    body: "Weekend charm ≠ **Tuesday admin**. Prioritize **groceries, GP, commute arc**.",
  },
];
