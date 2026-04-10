import type { MoveVisaResidencyRelatedTools } from "../../visas-residency/config/moveVisaResidency.types";
import { moveStatusChangesRoutes as R } from "./moveStatusChanges.routes";

const HUB = R.hub;
const VISAS = R.visasResidency;
const PERMITS = R.residencePermits;
const EXTENSIONS = R.extensionsChanges;

export const moveStatusChangesRelatedTools = {
  journeyIntro:
    "**Move** gives you the route picture. **Work, Money, Housing, Family, and Living** help you plan the practical impact. Use one category at a time, not everything at once.",
  sections: [
    {
      eyebrow: "Move & immigration",
      description: "The best first stops when you think your basis of stay may be changing.",
      items: [
        { title: "Moving pillar hub", description: "Full Move guide: scenarios, stages, and planners.", href: HUB },
        { title: "Visas & residency orientation", description: "Route doorway page for work, study, family, and self-employment.", href: VISAS },
        { title: "Residence permits in the Netherlands", description: "Permit purpose, renewal, and after-approval logic.", href: PERMITS },
        { title: "Extensions & changes in the Netherlands", description: "Renewals, timing, and after-arrival change planning.", href: EXTENSIONS },
        { title: "First 90 days planner", description: "Useful when a shift reorders your admin sequence.", href: "/netherlands/moving/tools/first-90-days/" },
        { title: "Arrival planner", description: "Re-sequence gemeente, insurance, and bank tasks.", href: "/netherlands/moving/tools/arrival-planner/" },
        { title: "Document readiness", description: "Gather what you may need before deadlines feel loud.", href: "/netherlands/moving/tools/document-readiness/" },
      ],
    },
    {
      eyebrow: "Work & pay",
      description: "When the status question is tied to an employer, contract, or income change.",
      items: [
        { title: "Job offer comparison", description: "Compare options beyond gross salary.", href: "/netherlands/work/tools/job-offer-comparison/" },
        { title: "Employment contract risk scanner", description: "Pressure-test clauses before signing.", href: "/netherlands/work/tools/employment-contract-risk-scanner/" },
        { title: "Employment type scenario tool", description: "Employee vs contractor vs ZZP trade-offs.", href: "/netherlands/work/tools/employment-type-scenario-tool/" },
        { title: "Dutch salary (net) calculator", description: "Rough take-home when work changes.", href: "/netherlands/taxes/tools/dutch-salary-net-calculator/" },
        { title: "30% ruling calculator", description: "Useful for rough planning around job changes.", href: "/netherlands/taxes/tools/30-ruling-calculator/" },
      ],
    },
    {
      eyebrow: "Money, housing, and family",
      description: "Translate uncertainty into real household planning.",
      items: [
        { title: "Cost of living calculator", description: "Estimate ongoing monthly pressure by city.", href: "/netherlands/money/tools/cost-of-living-calculator/" },
        { title: "Healthcare allowance estimator", description: "Check rough allowance expectations from income and rent.", href: "/netherlands/taxes/tools/healthcare-allowance-estimator/" },
        { title: "Rent affordability calculator", description: "Stress-test housing decisions during a transition.", href: "/netherlands/housing/tools/rent-affordability-calculator/" },
        { title: "Childcare cost estimator", description: "Useful when family change and budget planning overlap.", href: "/netherlands/family/tools/childcare-cost-estimator/" },
        { title: "Healthcare basics", description: "Insurance and care continuity in plain language.", href: "/netherlands/living/healthcare-basics/" },
        { title: "Netherlands Survival Guide", description: "Payments, apps, groceries, and daily-life admin rhythm.", href: "/netherlands/living/survival-guide/" },
      ],
    },
  ],
} satisfies MoveVisaResidencyRelatedTools;
