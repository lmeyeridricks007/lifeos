import type { PermitBasicsCard } from "../moveResidencePermits.types";

/** Start-here permit basics — three anchor cards. */
export const moveResidencePermitBasicsCards: PermitBasicsCard[] = [
  {
    id: "why-purpose",
    iconKey: "purpose",
    visualKey: "purpose",
    title: "Your reason for staying shapes the rules",
    intro:
      "A residence permit usually ties you to **one main reason**—work, study, family, or self-employment. That reason runs through forms, dates, and what you need to keep true later.",
    bullets: [
      "Different reasons mean **different to-do lists**—even in the same city.",
      "Start from **your situation**, not a permit name you overheard once.",
    ],
  },
  {
    id: "bigger-setup",
    iconKey: "setup",
    visualKey: "setup",
    title: "The permit isn’t the whole move",
    intro:
      "**BSN, address, bank, insurance, and payroll** often need to happen in the same few weeks as immigration—not “whenever.”",
    bullets: [
      "Ask early whether you need an **address you can register at** or **BSN** first.",
      "School and commute plans often run **next to** permit steps, not only after them.",
    ],
  },
  {
    id: "changes-later",
    iconKey: "change",
    visualKey: "change",
    title: "Life changes can change your next step",
    intro:
      "Jobs, studies, relationships, and businesses change. **Renewals and switching route** are real processes—worth a calendar note before the last minute.",
    bullets: [
      "**End dates** deserve a buffer—gather proof while life is calm.",
      "**Already in NL** doesn’t make the next application automatic.",
    ],
  },
];
