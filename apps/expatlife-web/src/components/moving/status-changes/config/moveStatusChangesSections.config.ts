import { moveStatusChangesRoutes as R } from "./moveStatusChanges.routes";
import type { MoveStatusChangesRouteCategorySection, MoveStatusChangesWorkSection } from "./moveStatusChanges.types";

const VISAS = R.visasResidency;
const PERMITS = R.residencePermits;
const EXTENSIONS = R.extensionsChanges;

const workSection = {
  id: "work-changes",
  eyebrow: "Work-linked changes",
  title: "Work-related status changes",
  subtitle:
    "If your stay is tied to work, the real question is rarely just **“Can I take this job?”** It is usually **employer + contract setup + continuity + timing** together.",
  intro:
    "Changing employer, changing contract structure, losing a job, or moving into a different work model can all raise **status questions**. The useful move is to clarify the **permit or sponsor angle early**, while dates, contracts, payroll, rent, and insurance are still flexible enough to plan around.",
  scenarioCards: [
    {
      id: "employer-change",
      chip: "Employer change",
      iconKey: "jobChange",
      title: "Changing employers",
      intro: "A new job can bring a **new sponsor setup**, new paperwork, and a different timing window from the one you had before.",
      whoItAffects: "Workers whose stay is linked to a job, sponsor, or employer change.",
      keyPoints: [
        "Ask whether your current stay is tied to a **specific recognised sponsor** or employment setup.",
        "Check who needs to notify whom and **when**.",
        "Use job and contract tools so the move is not judged on **salary alone**.",
      ],
      whatMattersNext:
        "Clarify sponsor and timing before contracts are final, then pressure-test the practical side of the switch with work and pay tools.",
      relatedLinks: [
        { label: "Job offer comparison", href: "/netherlands/work/tools/job-offer-comparison/" },
        { label: "Employment contract risk scanner", href: "/netherlands/work/tools/employment-contract-risk-scanner/" },
      ],
    },
    {
      id: "contract-structure",
      chip: "Contract structure",
      iconKey: "jobChange",
      title: "Contract structure changes",
      intro:
        "Permanent vs temporary, payroll vs contractor, hours, secondment, and role design can all matter for how your stay works in practice.",
      whoItAffects: "People whose work arrangement is changing even if the employer name stays the same.",
      keyPoints: [
        "Look at the **whole arrangement**, not just job title.",
        "Clarify whether the new structure changes **continuity** or documentation.",
        "Stress-test the switch with the **employment type** and **salary** tools.",
      ],
      whatMattersNext:
        "Check whether the structure change alters the legal or sponsor story, then use scenario tools before assuming the admin path stays identical.",
      relatedLinks: [
        { label: "Employment type scenario tool", href: "/netherlands/work/tools/employment-type-scenario-tool/" },
        { label: "Dutch salary (net) calculator", href: "/netherlands/taxes/tools/dutch-salary-net-calculator/" },
      ],
    },
    {
      id: "job-ending",
      chip: "Job ending",
      iconKey: "continuity",
      title: "Job loss or work ending",
      intro: "When work stops, people often focus on the job shock first and only later realise the residency and admin clock is moving too.",
      whoItAffects: "Workers whose contract is ending, whose role has ended, or who may need a new basis of stay quickly.",
      keyPoints: [
        "Do not wait until the final week to ask what your next route could be.",
        "Plan for **income**, **rent**, and **insurance** at the same time.",
        "Use ExpatCopilot to map the options, then confirm the official rules for your case.",
      ],
      whatMattersNext:
        "Treat the change as both a residency and household-planning issue so income, insurance, and housing do not get separated from the legal timeline.",
      relatedLinks: [
        { label: "Extensions & changes", href: EXTENSIONS },
        { label: "Cost of living calculator", href: "/netherlands/money/tools/cost-of-living-calculator/" },
      ],
    },
    {
      id: "hr-questions",
      chip: "HR early",
      iconKey: "timing",
      title: "What to clarify with HR early",
      intro: "A short conversation while contracts are still flexible often saves a lot of later admin stress.",
      whoItAffects: "Anyone discussing an offer, contract revision, transfer, or employer-backed move.",
      keyPoints: [
        "Which **permit type** or sponsor category is relevant?",
        "What documents or updates do they need from you before the change is final?",
        "How does the timeline interact with notice periods, start dates, and payroll?",
      ],
      whatMattersNext: "Get clear on the work setup while dates can still move, not after notice periods and start dates are already locked.",
      relatedLinks: [
        { label: "Working in the Netherlands", href: "/netherlands/work/working-in-netherlands/" },
        { label: "30% ruling calculator", href: "/netherlands/taxes/tools/30-ruling-calculator/" },
      ],
    },
  ],
  pairedToolsEyebrow: "What pages and tools to use next",
  pairedTools: [
    {
      label: "Job offer comparison",
      href: "/netherlands/work/tools/job-offer-comparison/",
      description: "Compare options on pay, pension, leave, and trade-offs before you switch employers.",
    },
    {
      label: "Employment contract risk scanner",
      href: "/netherlands/work/tools/employment-contract-risk-scanner/",
      description: "Pressure-test clauses before you sign a new contract or arrangement.",
    },
    {
      label: "Dutch salary (net) calculator",
      href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
      description: "Turn a work change into a realistic take-home estimate.",
    },
    {
      label: "30% ruling calculator",
      href: "/netherlands/taxes/tools/30-ruling-calculator/",
      description: "Use for rough planning when your employment context may be changing.",
    },
    {
      label: "Working in the Netherlands",
      href: "/netherlands/work/working-in-netherlands/",
      description: "Context on contracts, payroll, and work realities around status-sensitive changes.",
    },
  ],
} satisfies MoveStatusChangesWorkSection;

const routeCategories = {
  id: "study-family-self-employed",
  eyebrow: "Other change contexts",
  title: "Study, family, self-employed, and other status changes",
  subtitle:
    "Not every status question starts with an employer. These four blocks cover the other common patterns people usually need to orient around first.",
  blocks: [
    {
      id: "study",
      letter: "A",
      iconKey: "studyToWork",
      title: "Study-to-work or study ending",
      intro:
        "For people finishing a degree, ending an exchange, or changing study arrangements and trying to understand what their next basis of stay could be.",
      whoItAffects: "**Students** who can see the current study-based setup starting to end or shift.",
      keyPoints: [
        "Track when the study-based setup ends and when the next route needs to begin.",
        "Do not separate work planning from insurance and housing timing.",
        "Use route-comparison pages before you lock in contracts or travel assumptions.",
      ],
      whatMattersNext:
        "Map the hand-off between **study ending** and **what comes next**, especially if work, insurance, and housing plans are already moving.",
      relatedLinks: [
        { label: "Student visa guide", href: "/netherlands/visa/student-visa/" },
        { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
        { label: "Status-change situations", href: "#common-situations" },
      ],
    },
    {
      id: "family",
      letter: "B",
      iconKey: "familyChange",
      title: "Partner / family changes",
      intro:
        "For people whose residence picture depends on relationship, household, or family facts that are no longer the same as before.",
      whoItAffects: "**Partners, families, and caregivers** whose home situation is changing and who need to understand what that could trigger next.",
      keyPoints: [
        "Residence and household admin often move together here.",
        "Address registration, childcare, and school planning can become part of the same decision.",
        "Budgeting and insurance continuity are usually easier to manage when checked early.",
      ],
      whatMattersNext:
        "Check both the **residence angle** and the **household setup**: address registration, childcare, school decisions, insurance, and budgeting often move together.",
      relatedLinks: [
        { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
        { label: "Moving with family", href: "/netherlands/moving-to-netherlands-with-family/" },
        { label: "Childcare cost estimator", href: "/netherlands/family/tools/childcare-cost-estimator/" },
      ],
    },
    {
      id: "self-employed",
      letter: "C",
      iconKey: "selfEmployed",
      title: "Self-employed / entrepreneur changes",
      intro: "For freelancers, founders, and small-business owners moving into or reshaping a business-based stay.",
      whoItAffects: "**ZZP workers, founders, and future entrepreneurs** whose basis of stay may need to align with business activity instead of employment or study.",
      keyPoints: [
        "Business-based stay usually needs earlier planning than people expect.",
        "Continuity, paperwork, and how the activity is described all matter.",
        "Financial runway matters just as much as route research.",
      ],
      whatMattersNext:
        "Complexity can be higher here because continuity, paperwork, and how the activity is described all matter. Plan earlier than feels necessary.",
      relatedLinks: [
        { label: "Self-employed visa guide", href: "/netherlands/visa/self-employed-visa/" },
        { label: "Employment type scenario tool", href: "/netherlands/work/tools/employment-type-scenario-tool/" },
        { label: "Cost of living calculator", href: "/netherlands/money/tools/cost-of-living-calculator/" },
      ],
    },
    {
      id: "mixed",
      letter: "D",
      iconKey: "routeSwitch",
      title: "Other / mixed changes",
      intro:
        "For people already in the Netherlands who are no longer sure whether their current real-life setup still matches the old status story.",
      whoItAffects: "**Anyone saying “I’m already here, but…”** and trying to understand whether a life change is small admin or something more structural.",
      keyPoints: [
        "List what changed, when it changed, and what your current basis is supposed to be.",
        "You do not need the full answer before you open the right sibling guide.",
        "Mixed cases usually become clearer once the timeline and current basis are written down.",
      ],
      whatMattersNext:
        "List what changed, when it changed, and what your current basis of stay is supposed to be. That is often enough to know which page or official source to open next.",
      relatedLinks: [
        { label: "Visas & residency orientation", href: VISAS },
        { label: "Residence permits", href: PERMITS },
        { label: "Extensions & changes", href: EXTENSIONS },
      ],
    },
  ],
} satisfies MoveStatusChangesRouteCategorySection;

export const moveStatusChangesSections = {
  workSection,
  routeCategories,
};
