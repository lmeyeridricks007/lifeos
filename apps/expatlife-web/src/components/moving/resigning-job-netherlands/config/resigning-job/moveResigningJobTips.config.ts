import type { MoveResigningJobTipsConfig } from "./moveResigningJobNl.config.types";
import { moveResigningJobNlRoutes as ROUTES } from "./moveResigningJobNl.routes";

export const moveResigningJobTips: MoveResigningJobTipsConfig = {
  reassurance: [
    {
      title: "You do not need every answer tonight",
      body:
        "Treat this as **sequencing**, not a cram session: name what could move (**contract, stay, cash, life**), then ask **one desk** a **specific** question. This page maps the terrain — **HR, payroll, IND, and advisers** still own the binding answers.",
      bestFor: "When the decision is emotional but the calendar still needs facts.",
    },
  ],
  reassuranceFooter:
    "One clear question, one realistic calculator, and **one** next guide is enough for today — come back after you have employer or official wording.",
  confidenceChecklist: [
    "You can name **which clock** you are worried about: **notice**, **stay**, **last pay**, **rent**, or **coverage**.",
    "You know **contract sections** to skim before notice — not only gross salary.",
    "You will **not** assume resignation is “only HR” if **permits, landlord letters, or family** depend on this job.",
    "You leave with **one** intentional next step — not a guilt pile of every link on the site.",
  ],
  practicalCallouts: [
    {
      id: "one-desk-per-email",
      title: "One desk, one question per thread",
      intro: "Bundling **permit, payroll, and housing** into the same vague email slows everyone down. Split threads; keep each **factual** and **dated**.",
      keyPoints: ["**HR** — notice, last day, leave, letters", "**Mobility** — stay steps tied to employment", "**Payroll** — final pay and benefit end dates"],
    },
    {
      id: "export-before-last-week",
      title: "Export while access still works",
      intro: "Payslips, reviews, and portal PDFs are **boring until they are gone**. Pull what a **landlord, insurer, or next employer** might ask for **before** the account turns off.",
      internalLinks: [
        { label: "Document readiness", href: ROUTES.documentReadiness, description: "Structured paperwork pass" },
        { label: "First 90 days planner", href: ROUTES.first90Days, description: "If exit overlaps settling-in tasks" },
      ],
    },
  ],
};
