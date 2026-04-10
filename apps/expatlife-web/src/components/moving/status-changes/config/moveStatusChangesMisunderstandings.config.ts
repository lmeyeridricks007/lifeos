import type { MoveVisaResidencyMisunderstanding } from "../../visas-residency/config/moveVisaResidency.types";

export const moveStatusChangesMisunderstandings = [
  {
    id: "not-extension",
    title: "A status change is not always the same thing as an extension",
    body:
      "Extending a permit date and **changing the basis of stay** can be two very different questions, even when they happen around the same period.",
  },
  {
    id: "before-expiry",
    title: "Life changes can matter before permit expiry becomes the main issue",
    body:
      "People often focus on the expiry date and miss the fact that **work, study, family, or business facts changed earlier**.",
  },
  {
    id: "already-here",
    title: "Already living in the Netherlands does not make status-change questions disappear",
    body:
      "Being settled, employed, or registered does not automatically mean your **current basis of stay still matches reality**.",
  },
  {
    id: "multiple-areas",
    title: "Work, family, and study changes can affect more than one admin area at once",
    body:
      "Residence questions can quickly spill into **payroll, rent, insurance, municipality admin, childcare, and tax planning**.",
  },
  {
    id: "plan-ahead",
    title: "People often underestimate the need to plan ahead when the reason for stay changes",
    body: "Last-minute stress is often caused by **delayed awareness**, not only by legal complexity.",
  },
  {
    id: "generic-summaries",
    title: "Generic internet summaries rarely explain the practical knock-on effects well",
    body:
      "They may tell you that a route exists, but not what to think about for **timing, continuity, work, housing, or healthcare** in real life.",
  },
] satisfies readonly MoveVisaResidencyMisunderstanding[];
