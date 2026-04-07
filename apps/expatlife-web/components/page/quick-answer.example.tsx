/**
 * Copy-paste reference for `QuickAnswer`. Not imported by production routes.
 * Remove this file if you prefer examples only in JSDoc on `quick-answer.tsx`.
 */
import { QuickAnswer } from "./quick-answer";

export function QuickAnswerExample() {
  return (
    <QuickAnswer
      title="At a glance"
      summary="Use this page to compare options before you commit to a timeline or budget."
      appliesTo={["First-time movers", "EU and non-EU"]}
      timeline="Often 4–12 weeks depending on route"
      costRange="Fees and living costs vary by municipality and employer"
      firstSteps={["Read the overview below", "Note questions for your employer or advisor"]}
      note="Numbers are illustrative; check official sources for your situation."
      primaryCta={{ label: "Start with the hub", href: "/netherlands/moving/hub/" }}
      secondaryCta={{ label: "Methodology", href: "/methodology/" }}
    />
  );
}
