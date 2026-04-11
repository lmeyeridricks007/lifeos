import type {
  MoveExtensionsChangesOtherContextsRegion,
  MoveExtensionsChangesWorkSection,
} from "./moveExtensionsChanges.contentTypes";
import { moveExtensionsChangesRoutes as R } from "./moveExtensionsChanges.routes";

const VISAS = R.visasResidency;
const PERMITS = R.residencePermits;

/** Work-related route category + study/family/ZZP/mixed clusters. */
export const moveExtensionsChangesSections = {
  work: {
    id: "work-changes",
    eyebrow: "Work-linked stays",
    title: "Work-related changes and extensions",
    subtitle:
      "If your stay is **tied to a job**, the **employer, contract, and sometimes salary band** can matter — not just the job title. **Orientation here**; **HR, IND, or an adviser** for your case.",
    intro:
      "New employer, new contract, end of contract, or a different arrangement (secondment, fewer hours, a gap) can each need **different immigration follow-up**. The useful move is to **ask before signatures**, not after dates have moved.",
    keyPoints: [
      "**New employer** often means more than a payroll code change — check **sponsor and permit rules** early.",
      "**Job or contract loss** can start a **clock** on options — early clarity helps **income, rent, and insurance** planning.",
      "**Hours, permanence, and role** can affect how your stay is framed — one calm question while things are flexible.",
      "From HR: **permit type**, any **IND notification**, and **what they need from you** before the change is final.",
      "Use **offer, contract, and net-pay** tools so choices stay **grounded in numbers**.",
    ],
    pairedToolsEyebrow: "Work & pay tools that pair with job changes",
    pairedTools: [
      {
        label: "Job offer comparison",
        href: "/netherlands/work/tools/job-offer-comparison/",
        description: "— compare two offers on pay, pension, and leave — not only gross salary.",
      },
      {
        label: "Employment contract risk scanner",
        href: "/netherlands/work/tools/employment-contract-risk-scanner/",
        description: "— spot important clauses before you sign a new contract.",
      },
      {
        label: "Working in the Netherlands",
        href: "/netherlands/moving/working-in-the-netherlands/",
        description: "— employment, contracts, and broader work context when your situation shifts.",
      },
      {
        label: "Changing jobs in the Netherlands",
        href: "/netherlands/moving/changing-jobs-netherlands/",
        description: "— practical checklist across contracts, permits, salary, housing, and admin timing.",
      },
      {
        label: "Resigning a job in the Netherlands",
        href: "/netherlands/moving/resigning-job-netherlands/",
        description: "— exit planning when employment may end and permit or household timing still matters.",
      },
      {
        label: "Layoffs in the Netherlands",
        href: "/netherlands/moving/layoffs-netherlands/",
        description: "— involuntary employment ending: permits, salary continuity, housing, and admin.",
      },
      {
        label: "Dutch salary (net) calculator",
        href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        description: "— rough take-home when income or employer changes.",
      },
      {
        label: "30% ruling calculator",
        href: "/netherlands/taxes/tools/30-ruling-calculator/",
        description: "— rough planning check if the expat tax benefit might apply.",
      },
    ],
  } satisfies MoveExtensionsChangesWorkSection,

  otherContexts: {
    id: "study-family-changes",
    eyebrow: "Beyond a single employer",
    title: "Study, family, self-employed, and other common changes",
    subtitle: "Four clusters — **who**, **next focus**, and **links** — same rhythm as the cards above.",
    blocks: [
      {
        id: "study",
        letter: "A",
        title: "Study changes",
        whoItAffects: "**Students** finishing, pausing, switching schools, or planning **after graduation**.",
        keyPoints: [],
        whatMattersNext:
          "Clarify **what the permit assumes today**, **what happens when study ends**, and **insurance and timing** for whatever comes next.",
        relatedLinks: [
          { label: "Student visa guide", href: "/netherlands/visa/student-visa/" },
          { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
          { label: "First 90 days planner", href: "/netherlands/moving/tools/first-90-days/" },
        ],
      },
      {
        id: "partner",
        letter: "B",
        title: "Partner / family changes",
        whoItAffects: "**Partners and families** where **relationship or household** facts underpin the permit.",
        keyPoints: [],
        whatMattersNext:
          "**Proof and next steps** — often **gemeente**, **housing**, and **schools** in the same month as immigration questions.",
        relatedLinks: [
          { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
          { label: "Childcare cost estimator", href: "/netherlands/family/tools/childcare-cost-estimator/" },
          { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        ],
      },
      {
        id: "zzp",
        letter: "C",
        title: "Self-employed / entrepreneur changes",
        whoItAffects: "**Freelancers and founders** on a **business- or self-employment-based** stay.",
        keyPoints: [],
        whatMattersNext:
          "**Cashflow, continuity, and paperwork** — usually more moving parts than one employer and one payslip.",
        relatedLinks: [
          { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
          { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
          { label: "Cost of living calculator", href: "/netherlands/money/tools/cost-of-living-calculator/" },
        ],
      },
      {
        id: "mixed",
        letter: "D",
        title: "Other / mixed changes",
        whoItAffects: "**Several shifts at once** or uncertainty whether a change is **big enough** to matter.",
        keyPoints: [],
        whatMattersNext:
          "List **dates**, your **current basis**, and **what changed**. Use our pages for **shape**; use **official sources or advisers** when the stakes are high.",
        relatedLinks: [
          { label: "Visas & residency", href: VISAS },
          { label: "Residence permits", href: PERMITS },
          { label: "Document readiness", href: "/netherlands/moving/tools/document-readiness/" },
        ],
      },
    ],
  } satisfies MoveExtensionsChangesOtherContextsRegion,
};
