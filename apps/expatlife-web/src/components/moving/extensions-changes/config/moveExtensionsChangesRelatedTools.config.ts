import type { MoveVisaResidencyRelatedTools } from "../../visas-residency/config/moveVisaResidency.types";
import { moveExtensionsChangesRoutes as R } from "./moveExtensionsChanges.routes";

const HUB = R.hub;
const VISAS = R.visasResidency;
const PERMITS = R.residencePermits;

export const moveExtensionsChangesRelatedTools = {
  journeyIntro:
    "**Move** (hub, visas, permits, planners) holds the **status** thread; **Work & pay** + **Money** turn changes into **numbers**; **Housing & living** covers **rent, zorg, rhythm**. Pick **one** block per visit.",
  sections: [
    {
      eyebrow: "Move & immigration",
      description: "Same entry points as the Moving hub helpful-tools band — start here when dates or sponsors are in play.",
      items: [
        { title: "Moving pillar hub", description: "Full Move guide: stages, scenarios, tools.", href: HUB },
        { title: "Visas & residency orientation", description: "Route map before you lock onto one permit name.", href: VISAS },
        { title: "Residence permits in the Netherlands", description: "Renewal band, purpose, and after approval.", href: PERMITS },
        {
          title: "Status changes in the Netherlands",
          description: "Companion guide when the basis of stay itself may be shifting.",
          href: "/netherlands/moving/status-changes/",
        },
        { title: "Move & immigration tools", description: "Checklists, document readiness, first 90 days, arrival.", href: "/netherlands/moving/tools/" },
        { title: "First 90 days planner", description: "Re-sequence tasks after a life change.", href: "/netherlands/moving/tools/first-90-days/" },
        { title: "Arrival planner", description: "Reorder first-week admin when your flow changes.", href: "/netherlands/moving/tools/arrival-planner/" },
        { title: "Document readiness", description: "What to gather when circumstances shift.", href: "/netherlands/moving/tools/document-readiness/" },
      ],
    },
    {
      eyebrow: "Work & pay",
      description: "When job, employer, or contract changes are part of the story.",
      items: [
        { title: "Job offer comparison", description: "Compare offers — not only gross salary.", href: "/netherlands/work/tools/job-offer-comparison/" },
        { title: "Employment contract risk scanner", description: "Clause checks before you sign.", href: "/netherlands/work/tools/employment-contract-risk-scanner/" },
        { title: "Working in the Netherlands", description: "Employment and contracts when your job situation is changing.", href: "/netherlands/moving/working-in-the-netherlands/" },
        { title: "Dutch salary (net) calculator", description: "Rough take-home when pay changes.", href: "/netherlands/taxes/tools/dutch-salary-net-calculator/" },
        { title: "30% ruling calculator", description: "Planning check for the expat tax benefit.", href: "/netherlands/taxes/tools/30-ruling-calculator/" },
      ],
    },
    {
      eyebrow: "Money & household",
      description: "Budgeting and family costs alongside permit uncertainty.",
      items: [
        { title: "Cost of living calculator", description: "Rough monthly costs by city.", href: "/netherlands/money/tools/cost-of-living-calculator/" },
        { title: "Healthcare allowance estimator", description: "Rough toeslag estimate from income and rent.", href: "/netherlands/taxes/tools/healthcare-allowance-estimator/" },
        { title: "Childcare cost estimator", description: "Family logistics when situations change.", href: "/netherlands/family/tools/childcare-cost-estimator/" },
      ],
    },
    {
      eyebrow: "Housing & living",
      description: "Registration, rent, healthcare, and day-to-day rhythm.",
      items: [
        { title: "Rent affordability calculator", description: "When income or household size shifts.", href: "/netherlands/housing/tools/rent-affordability-calculator/" },
        { title: "Healthcare basics", description: "Insurance and care when circumstances move.", href: "/netherlands/living/healthcare-basics/" },
        { title: "Netherlands Survival Guide", description: "Apps, payments, groceries — life between admin sprints.", href: "/netherlands/living/survival-guide/" },
      ],
    },
  ],
} satisfies MoveVisaResidencyRelatedTools;
