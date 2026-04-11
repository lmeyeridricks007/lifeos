import type {
  MoveResigningJobMisunderstandingCardConfig,
  MoveResigningJobMisunderstandingsRegionConfig,
} from "./moveResigningJobNl.config.types";

export const moveResigningJobMisunderstandingsRegion = {
  eyebrow: "Reality check",
  title: "What people often misunderstand",
  subtitle:
    "Resigning feels like **one conversation**; administratively it is **several systems** updating on **different** timelines.",
} satisfies MoveResigningJobMisunderstandingsRegionConfig;

export const moveResigningJobMisunderstandings: readonly MoveResigningJobMisunderstandingCardConfig[] = [
  {
    id: "not-only-notice",
    title: "Notice length is not the whole story",
    body:
      "**Weeks of notice** do not automatically answer **clauses, last pay, coverage, or proofs**. Those threads often decide whether the exit feels **clean** or **chaotic**.",
  },
  {
    id: "contract-plus-plan",
    title: "Exit terms and “the month after” belong in one frame",
    body:
      "Read **contract** and **household cash** together. Resigning without a **gap plan** is how **rent and insurance** quietly become the main character.",
  },
  {
    id: "early-status",
    title: "Status questions are a timing game, not a courage game",
    body:
      "If stay is **employment-shaped**, waiting until the **final week** to ask **who files what** burns leverage. Some steps are **easier while you still have payroll and mobility access**.",
  },
  {
    id: "simple-emotion-complex-admin",
    title: "The decision can be clear while the paperwork is still messy",
    body:
      "You can be **emotionally done** and still need **payslips, landlord letters, and exports** handled calmly. **Boring admin** is how you protect future-you.",
  },
  {
    id: "costs-dont-pause",
    title: "Fixed costs do not care that you gave notice",
    body:
      "**Rent, childcare, and premiums** keep going. Model **at least one lean month** even if you expect a fast hire — markets do not read your optimism.",
  },
  {
    id: "paper-vs-life",
    title: "A polite letter is not a substitute for access",
    body:
      "**Written dates** help; they do not keep **portals, references, or mobility** open. Pull what you need **before** accounts and goodwill thin out.",
  },
  {
    id: "no-automatic-continuity",
    title: "Continuity is earned, not assumed",
    body:
      "Some setups quietly assumed **stable employment** for **proofs or allowances**. That can **reopen questions** — normal bureaucracy, not a personal failing.",
  },
];
