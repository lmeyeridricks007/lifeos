/**
 * Related tools for the Netherlands visa comparison page.
 * Links to visa checker, document readiness, cost calculator, etc.
 */

export type RelatedTool = {
  href: string;
  label: string;
  description: string;
};

const BASE = "/netherlands";

export const COMPARISON_RELATED_TOOLS: RelatedTool[] = [
  { href: `${BASE}/visa-checker/`, label: "Visa Checker", description: "Find the best route for your profile." },
  { href: `${BASE}/document-readiness-checker/`, label: "Document Readiness Checker", description: "See if your documents are ready." },
  { href: `${BASE}/visa-application-plan/`, label: "Personalized Visa Application Plan", description: "Build a step-by-step plan." },
  { href: `${BASE}/visa-cost-calculator/`, label: "Visa Cost Calculator", description: "Estimate official and prep costs." },
  { href: `${BASE}/visa-timeline-estimator/`, label: "Visa Timeline Estimator", description: "Estimate your timeline." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, label: "Relocation Cost Estimator", description: "Estimate full move costs." },
];
