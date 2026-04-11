import type { MoveLayoffsTipsConfig } from "../moveLayoffsNl.content.model";
import { moveLayoffsNlRoutes as ROUTES } from "./moveLayoffsNl.routes";

export const moveLayoffsTips = {
  reassurance: [
    {
      title: "Take it step by step",
      body:
        "Losing a role is stressful, and admin can pile up. This page helps you see the basics clearly: what might change (job, right to stay, money, daily life), what is already certain, and the next small step. You do not need to fix everything today.",
    },
  ],
  reassuranceFooter: "One clear question, one saved document, or one linked page is often enough for today.",
  confidenceChecklist: [
    "You can describe in one short sentence what could change for you if the role ends — not only the job title.",
    "You know what your employer has confirmed in writing and what is still open.",
    "You have one simple next step for this week (a question to HR, one PDF saved, or one calculator opened).",
    "You use this site for orientation — not instead of your employer, **IND** (immigration service), or **Belastingdienst** (tax office).",
    "You accept that only urgent items need answers in the first days; the rest can wait until facts are clear.",
  ],
  practicalCallouts: [
    {
      id: "layoff-one-thread-per-desk",
      title: "Contact the right team for each topic",
      intro:
        "Try not to mix right to stay, pay, and housing in one long email. Short, dated messages to one owner (HR, mobility, or payroll) are easier for everyone.",
      keyPoints: [
        "HR — last day, notice period, leave balance, references",
        "Immigration / sponsor — steps linked to your work permit, if you have one",
        "Payroll — final pay dates, benefits ending, pension summary",
      ],
    },
    {
      id: "layoff-export-early",
      title: "Save documents before work access ends",
      intro:
        "Download payslips, permits, and any portal summaries you may need for a landlord, insurer, or future employer while you can still log in.",
      internalLinks: [
        { label: "Document readiness", href: ROUTES.documentReadiness, description: "Paperwork checklist under pressure." },
        { label: "Residence permits", href: ROUTES.residencePermits, description: "If your stay is tied to your job." },
      ],
    },
  ],
} satisfies MoveLayoffsTipsConfig;
