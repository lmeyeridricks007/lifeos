import type { MoveStatusChangesLifecycleRegion } from "./moveStatusChanges.types";

const timingRegion = {
  id: "timing-continuity",
  eyebrow: "Timing & continuity",
  title: "Timing, continuity, and what can be affected",
  subtitle:
    "This is the practical core of the page: status changes usually become stressful when people notice them **late**, not only when the rules are difficult.",
  cards: [
    {
      id: "continuity",
      title: "Why continuity matters",
      intro:
        "A status question is often really a **continuity question**: can your legal basis, work setup, and everyday systems keep moving without a messy gap?",
      visualKey: "continuity",
      keyPoints: [
        "Think in terms of **hand-off**, not just one deadline.",
        "Look for dependencies between residence, income, insurance, and address setup.",
        "The smoother transition is usually the one planned before it feels urgent.",
      ],
    },
    {
      id: "track-early",
      title: "What to track early",
      intro:
        "You do not need every rule memorised. You do need a short list of dates, documents, employer or household facts, and the reason your stay currently rests on.",
      visualKey: "timing",
      keyPoints: [
        "Permit end dates and contract dates",
        "Who sponsors or supports the current setup",
        "What is changing first: work, study, family, or business activity",
      ],
    },
    {
      id: "timing",
      title: "Why timing matters before deadlines feel close",
      intro:
        "People often wait until the permit date feels emotionally loud. By then, housing, payroll, travel, and family plans may already be tangled together.",
      visualKey: "timing",
      keyPoints: [
        "Early awareness creates more options.",
        "Late awareness usually creates more pressure.",
        "A modest planning pass now can prevent a last-minute scramble later.",
      ],
    },
    {
      id: "spread",
      title: "Why uncertainty spreads if ignored",
      intro:
        "When status questions stay fuzzy, uncertainty tends to leak into the rest of life: work decisions, rent confidence, healthcare choices, and family admin all get harder.",
      visualKey: "continuity",
      keyPoints: [
        "That does not mean panic.",
        "It means separate the unknowns early and work through them one thread at a time.",
      ],
    },
  ],
} satisfies MoveStatusChangesLifecycleRegion;

const lifeImpactRegion = {
  id: "life-impact",
  eyebrow: "Practical life impact",
  title: "Work, housing, healthcare, registration, and admin",
  subtitle:
    "Status changes are not only immigration questions. They can quickly become **work, rent, insurance, BSN, tax, and family-admin** questions as well.",
  cards: [
    {
      id: "affected-quickly",
      title: "What can be affected quickly",
      intro:
        "Work and payroll, landlord confidence, health insurance continuity, gemeente tasks, banking, childcare, and routine admin can all react faster than people expect.",
      visualKey: "lifeImpact",
      keyPoints: [
        "A job shift can change **income planning** and **rent timing**.",
        "A family shift can change **registration**, **childcare**, and **school** decisions.",
        "A change in legal basis can send you back to check several systems, not just one permit page.",
      ],
      links: [
        { label: "Dutch salary (net) calculator", href: "/netherlands/taxes/tools/dutch-salary-net-calculator/" },
        { label: "Rent affordability calculator", href: "/netherlands/housing/tools/rent-affordability-calculator/" },
        { label: "Healthcare basics", href: "/netherlands/living/healthcare-basics/" },
      ],
    },
    {
      id: "stressful",
      title: "What often becomes stressful if ignored",
      intro:
        "People usually underestimate the combined stress of a status shift plus ordinary life obligations that are already on the calendar.",
      visualKey: "lifeImpact",
      keyPoints: [
        "Employer changes plus lease renewals",
        "Family changes plus registration or school planning",
        "Study ending plus income, insurance, and housing decisions all at once",
      ],
      links: [
        { label: "First 90 days planner", href: "/netherlands/moving/tools/first-90-days/" },
        { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      ],
    },
    {
      id: "open-next",
      title: "Which pages and tools to open next",
      intro:
        "Pick the block that matches the pressure you are feeling first: work, money, housing, family, or admin. You do not need to solve all of it in one sitting.",
      visualKey: "lifeImpact",
      keyPoints: [
        "Use Move guides for orientation.",
        "Use tools for concrete numbers and sequencing.",
        "Use official pages for binding answers.",
      ],
      links: [
        { label: "Status-change tools & guides", href: "#helpful-tools" },
        { label: "How to use this page", href: "#what-next" },
        { label: "Official sources", href: "#official-sources" },
      ],
    },
  ],
} satisfies MoveStatusChangesLifecycleRegion;

export const moveStatusChangesLifecycle = {
  timingRegion,
  lifeImpactRegion,
};
