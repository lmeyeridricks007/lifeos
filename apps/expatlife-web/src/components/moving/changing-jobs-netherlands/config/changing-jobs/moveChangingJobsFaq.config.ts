import type { PillarFaqItem } from "@expatlife/content";
import { moveChangingJobsNlRoutes as ROUTES } from "./moveChangingJobsNl.routes";

export const moveChangingJobsFaq: PillarFaqItem[] = [
  {
    q: "What should I check before changing jobs in the Netherlands?",
    a: "Run the **four layers**: **contract/career**, **stay or work auth** (if it could be employer-linked), **money**, **life admin** (housing, health, family). Then read **exit and entry** together and confirm binding points with **HR, payroll, or official sources**.",
    links: [
      { label: "Start here (three phases)", href: "#start-here" },
      { label: "What a job change can affect", href: "#what-job-change-affects" },
    ],
  },
  {
    q: "Can changing jobs affect my permit or status?",
    a: "It can — **sometimes** it is only payroll, **sometimes** sponsorship, notifications, timing, or route context matter. Do not copy someone else’s story. Use **Residence permits**, **Extensions & changes**, **Status changes**, or **TWV** for framing, then confirm with **your employer and IND** (or an adviser when stakes are high).",
    links: [
      { label: "Residence permits", href: ROUTES.residencePermits },
      { label: "Extensions & changes", href: ROUTES.extensions },
      { label: "Status changes", href: ROUTES.statusChanges },
      { label: "TWV work permit", href: ROUTES.twvWorkPermit },
    ],
  },
  {
    q: "How should I compare two Dutch job offers?",
    a: "Beyond gross: **net pay**, **pension and leave**, **holiday pay timing**, **contract type and probation**, **commute/city**, and **employer-owned admin** (permits, relocation support). The **job offer comparison** and **salary net** tools help once you have real figures.",
    links: [
      { label: "Job offer comparison tool", href: ROUTES.jobOffer },
      { label: "Dutch salary net calculator", href: ROUTES.salaryNet },
    ],
  },
  {
    q: "What must I review in my current contract before I resign?",
    a: "**Notice** (and garden leave / PILON), **fixed-term or probation** dates, **non-compete / side-work / confidentiality**, **repayment clauses**, and **benefits that end** when employment ends. That list protects your **timeline** for the next role.",
    links: [{ label: "Contracts & notice (this guide)", href: "#contracts-notice" }],
  },
  {
    q: "How do salary, tax, rent, and benefits fit together after a switch?",
    a: "They land in **one monthly budget**: take-home, **rent and commute**, **childcare**, and **allowance or tax** questions you confirm with payroll or Belastingdienst. Use **net salary**, **cost of living**, and **rent affordability** as a **set**, not three separate guesses.",
    links: [
      { label: "Salary, tax & cost of living (this guide)", href: "#salary-tax-col" },
      { label: "Dutch salary net calculator", href: ROUTES.salaryNet },
      { label: "Cost of living calculator", href: ROUTES.costOfLiving },
      { label: "Rent affordability calculator", href: ROUTES.rentAffordability },
    ],
  },
  {
    q: "What if there is a gap between my old job and my new one?",
    a: "Plan **cash, insurance, and any permit-related sequencing** on paper — short gaps still cause stress. If stay is employment-shaped, align the gap with **employer and IND** guidance; do not assume continuity.",
    links: [
      { label: "Permits & status (this guide)", href: "#permits-status" },
      { label: "Practical life impact", href: "#practical-life" },
    ],
  },
  {
    q: "What parts of daily life often move with a job change?",
    a: "**Housing proofs and rent math**, **commute and childcare geography**, **health insurance** through employer changes, **registration or documents**, and **partner or family** files that reference your employment.",
    links: [
      { label: "Practical life impact (this guide)", href: "#practical-life" },
      { label: "Municipality registration guide", href: ROUTES.municipalityRegistration },
      { label: "Healthcare basics", href: ROUTES.healthcareBasics },
    ],
  },
  {
    q: "Is this page legal, tax, or immigration advice?",
    a: "No — it is **orientation** to help you **ask and sequence**. For outcomes, use **official sites, your employer, and professionals** when you need binding answers.",
    links: [{ label: "Official sources (this page)", href: "#official-sources" }],
  },
];
