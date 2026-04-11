import type { MoveVisaResidencyRelatedTools } from "../../../visas-residency/config/moveVisaResidency.types";
import { RESIDENCE_PERMITS_HUB, RESIDENCE_PERMITS_VISAS } from "../moveResidencePermitConstants";

export const moveResidencePermitRelatedTools: MoveVisaResidencyRelatedTools = {
  journeyIntro:
    "**Move** (hub, planners, arrival) → **Work & money** (job offer, contract, net pay, 30% rule, cost of living, allowance) → **Housing** (rent check) → **Living** (survival guide, healthcare basics). Same order as Visas & residency—open the block that fits your week.",
  sections: [
    {
      eyebrow: "Move & immigration",
      description: "Big-picture guides, checklists, and timelines next to your permit questions.",
      items: [
        { title: "Moving pillar hub", description: "Full Moving guide: stages, scenarios, and tools.", href: RESIDENCE_PERMITS_HUB },
        { title: "Visas & residency orientation", description: "Overview before the terminology piles up.", href: RESIDENCE_PERMITS_VISAS },
        {
          title: "Extensions & changes in the Netherlands",
          description: "After arrival: expiries, renewals, and life shifts next to permit logic.",
          href: "/netherlands/moving/extensions-changes/",
        },
        {
          title: "Status changes in the Netherlands",
          description: "When the basis of stay may be changing across work, study, family, or self-employment.",
          href: "/netherlands/moving/status-changes/",
        },
        {
          title: "Move & immigration tools",
          description: "Checklists, documents, first 90 days, arrival help.",
          href: "/netherlands/moving/tools/",
        },
        {
          title: "First 90 days planner",
          description: "Week-by-week after landing.",
          href: "/netherlands/moving/tools/first-90-days/",
        },
      ],
    },
    {
      eyebrow: "Work & pay",
      description: "When your job is the main reason you’re here.",
      items: [
        {
          title: "Changing jobs in the Netherlands",
          description: "Whole-life checklist when switching employers: contracts, permits, salary, housing, admin.",
          href: "/netherlands/moving/changing-jobs-netherlands/",
        },
        {
          title: "Resigning a job in the Netherlands",
          description: "Exit planning: notice, contract review, permits, and monthly life before you resign.",
          href: "/netherlands/moving/resigning-job-netherlands/",
        },
        {
          title: "Layoffs in the Netherlands",
          description: "When employment may end involuntarily — stay, payroll, rent, and family admin together.",
          href: "/netherlands/moving/layoffs-netherlands/",
        },
        {
          title: "Job offer comparison",
          description: "Compare two offers on pay, pension, and leave.",
          href: "/netherlands/work/tools/job-offer-comparison/",
        },
        {
          title: "Employment contract risk scanner",
          description: "Important clauses before you sign.",
          href: "/netherlands/work/tools/employment-contract-risk-scanner/",
        },
        {
          title: "Dutch salary (net) calculator",
          description: "Gross to net for realistic take-home.",
          href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        },
        {
          title: "30% ruling calculator",
          description: "Rough planning check for the tax benefit.",
          href: "/netherlands/taxes/tools/30-ruling-calculator/",
        },
      ],
    },
    {
      eyebrow: "Money & household",
      description: "Budgets, allowances, and family costs once you know income and rent better.",
      items: [
        {
          title: "Cost of living calculator",
          description: "Rough monthly bands by city and household.",
          href: "/netherlands/money/tools/cost-of-living-calculator/",
        },
        {
          title: "Healthcare allowance estimator",
          description: "Estimate toeslag from income and rent.",
          href: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
        },
        {
          title: "Childcare cost estimator",
          description: "Family moves: daycare and timing.",
          href: "/netherlands/family/tools/childcare-cost-estimator/",
        },
        {
          title: "Rent affordability calculator",
          description: "Stress-test rent against net pay.",
          href: "/netherlands/housing/tools/rent-affordability-calculator/",
        },
      ],
    },
    {
      eyebrow: "Living & daily setup",
      description: "After the main immigration steps: travel, apps, care, and daily life.",
      items: [
        {
          title: "Netherlands Survival Guide",
          description: "Day-one clarity for life in NL.",
          href: "/netherlands/living/survival-guide/",
        },
        {
          title: "Healthcare basics",
          description: "How care and insurance fit together.",
          href: "/netherlands/living/healthcare-basics/",
        },
        {
          title: "Utilities & household services",
          description: "Compare setup and monthly bands.",
          href: "/netherlands/living/tools/utilities-services-comparison/",
        },
      ],
    },
  ],
};
