import type { MoveResidencePermitLifecycle } from "../moveResidencePermits.types";

/** Renewal / continuity + after-approval practical phases. */
export const moveResidencePermitLifecycle: MoveResidencePermitLifecycle = {
  renewal: {
    id: "renewal-changes",
    eyebrow: "Time and changes",
    title: "How long it lasts, renewals, and when life changes",
    subtitle: "Permits have end dates. **Plan ahead** so you’re not rushing when things shift.",
    cards: [
      {
        id: "expiry",
        visualKey: "expiry",
        title: "Use the end date as your planning anchor",
        intro: "Count **back from the deadline**—leave time for papers, appointments, and your employer or school.",
      },
      {
        id: "life",
        visualKey: "life-event",
        title: "Life changes can change what you need",
        intro:
          "**New job, finished studies, new family situation, new business direction**—sometimes you need a new process, not the same renewal as last time.",
      },
      {
        id: "before-urgent",
        visualKey: "early",
        title: "Earlier is calmer than last-minute",
        intro: "Read **IND renewal notes** for your permit type while life is quiet; update IDs and proofs before the rush.",
      },
      {
        id: "already-nl",
        visualKey: "present-nl",
        title: "Living here doesn’t skip the rules",
        intro: "You still need **correct information and on-time steps**. If unsure, check **official guidance** or get help.",
      },
    ],
  },
  afterApproval: {
    id: "after-approval",
    eyebrow: "After approval",
    title: "After approval: register, sort admin, and settle in",
    subtitle:
      "The permit letter is **one step**. **Gemeente, BSN, bank, insurance, and a home you can register** usually still need sorting—in a sensible order.",
    intro:
      "Split it into chunks: **first days** (get by), **first weeks** (stabilise), **first months** (adjust money and routines). You won’t finish everything in week one—**some deadlines still matter**.",
    openNextLabel: "Open next: ",
    openNextLinks: [
      { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "BSN", href: "/netherlands/bsn-registration/" },
      { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
    ],
    phases: [
      {
        label: "First days",
        text: "After approval or arrival: sort **where you can register**, keep **ID and rental or host papers** handy, and check what your **employer or school** still needs.",
      },
      {
        label: "First weeks",
        text: "Move **BSN**, **bank**, and **insurance that fits your status** forward, and sketch **commute or childcare** if you have family.",
      },
      {
        label: "First months",
        text: "Match **rent and bills to real income**, add **DigiD** when you can, and line up **school or daycare**—use calculators when numbers help.",
      },
    ],
    moreNote:
      "Read our **documents** and **after arrival** guides (links below). When pay starts, **payslip** and **salary** tools help you see what hits your account.",
    docLinks: [
      { label: "Documents overview", href: "/netherlands/documents-needed-to-move-netherlands/" },
      { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Extensions & changes", href: "/netherlands/moving/extensions-changes/" },
      { label: "Status changes", href: "/netherlands/moving/status-changes/" },
      { label: "First 90 days (planner)", href: "/netherlands/moving/tools/first-90-days/" },
    ],
    primaryCtas: [
      {
        label: "Extensions & changes in the Netherlands",
        href: "/netherlands/moving/extensions-changes/",
        description: "When dates, jobs, or family context shift after you’re already here.",
      },
      {
        label: "Arrival planner",
        href: "/netherlands/moving/tools/arrival-planner/",
        description: "Sequence gemeente, BSN, bank, and insurance in a sensible order.",
      },
      {
        label: "Status changes in the Netherlands",
        href: "/netherlands/moving/status-changes/",
        description: "Orientation when the reason for stay itself may be shifting.",
      },
      {
        label: "Survival Guide",
        href: "/netherlands/living/survival-guide/",
        description: "Day-to-day living basics once your permit route is underway.",
      },
      {
        label: "DigiD awareness",
        href: "/netherlands/digid-awareness/",
        description: "When digital ID matters and how people usually get started.",
      },
    ],
  },
};
