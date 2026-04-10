import type { MoveExtensionsChangesLifecycle } from "./moveExtensionsChanges.contentTypes";

/** Timing + practical life-impact lifecycle cards. */
export const moveExtensionsChangesLifecycle = {
  timing: {
    id: "timing-expiry",
    eyebrow: "Calm planning",
    title: "Timing, expiry, and why waiting too long creates stress",
    subtitle: "**Practical**, not scary: most stress is **finding limits late**, not mysterious rules.",
    cards: [
      {
        id: "why-track",
        title: "Why timeline awareness matters",
        intro:
          "Renewals and many changes need **slots, documents, and sometimes a sponsor**. Early starts keep you in **choice mode**, not **firefighting**.",
      },
      {
        id: "what-track",
        title: "What to track early",
        intro:
          "**Permit end**, **contract / study end**, **probation or project ends**, **big moves**. If it shifts **income, address, or household**, note it.",
      },
      {
        id: "stress",
        title: "Why last-minute admin spills into life",
        intro: "Tight timelines stack **rent, insurance, and work** in the same weeks. **Buffer** buys calmer decisions.",
      },
      {
        id: "months-ahead",
        title: "Think in months ahead, not days before",
        intro:
          "Quarterly: **skim dates and roles**. If something moved — **one** official page and **one** guide today. Repeat later.",
      },
    ],
  },
  lifeImpact: {
    id: "life-impact",
    eyebrow: "Whole-life picture",
    title: "Practical life impact: work, housing, healthcare, registration, and admin",
    subtitle: "Permit questions rarely sit alone. Use this as a **short checklist** — not a panic list.",
    cards: [
      {
        id: "immediate",
        title: "What can be affected immediately",
        intro:
          "**Payroll timing**, **landlord or bank confidence**, **insurance**, and **gemeente / BSN** when **address or household** changes.",
        relatedLinks: [
          { label: "Rent affordability calculator", href: "/netherlands/housing/tools/rent-affordability-calculator/" },
          { label: "Healthcare basics", href: "/netherlands/living/healthcare-basics/" },
          { label: "BSN registration", href: "/netherlands/bsn-registration/" },
        ],
      },
      {
        id: "if-ignored",
        title: "What often becomes stressful if ignored",
        intro:
          "**Insurance gaps**, **address drift**, **paperwork waiting on you** at work or school, and assuming **presence = finished**.",
        relatedLinks: [
          { label: "Healthcare allowance estimator", href: "/netherlands/taxes/tools/healthcare-allowance-estimator/" },
          { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner/" },
          { label: "Survival Guide", href: "/netherlands/living/survival-guide/" },
        ],
      },
      {
        id: "open-next",
        title: "Which pages and tools to open next",
        intro:
          "Match **salary / COL / allowance**, **work offers and contracts**, **family costs**, and **move planners** to **your** change — one block per sitting.",
        relatedLinks: [
          { label: "Cost of living calculator", href: "/netherlands/money/tools/cost-of-living-calculator/" },
          { label: "Move & immigration tools", href: "/netherlands/moving/tools/" },
          { label: "Working in the Netherlands", href: "/netherlands/work/working-in-netherlands/" },
        ],
      },
    ],
  },
} satisfies MoveExtensionsChangesLifecycle;
