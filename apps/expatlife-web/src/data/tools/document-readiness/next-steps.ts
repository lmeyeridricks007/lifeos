/**
 * Next-step templates by route and context for the Document Readiness Checker results.
 */

import type { PrimaryRoute } from "./document-categories";

export type NextStepItem = {
  label: string;
  href?: string;
  description?: string;
};

export type NextStepsTemplate = {
  route: PrimaryRoute;
  steps: NextStepItem[];
};

const BASE = "/netherlands";

export const NEXT_STEPS_TEMPLATES: NextStepsTemplate[] = [
  {
    route: "highly-skilled-migrant",
    steps: [
      { label: "Confirm route with employer / sponsor", href: `${BASE}/visa/highly-skilled-migrant/` },
      { label: "Collect signed contract and salary proof" },
      { label: "Check identity and civil documents" },
      { label: "Estimate relocation cost", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
      { label: "Plan your first 90 days", href: `${BASE}/moving/tools/first-90-days/` },
    ],
  },
  {
    route: "eu-blue-card",
    steps: [
      { label: "Confirm route with employer / sponsor", href: `${BASE}/visa/eu-blue-card/` },
      { label: "Collect signed contract and salary proof" },
      { label: "Check identity and civil documents" },
      { label: "Estimate relocation cost", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
      { label: "Plan your first 90 days", href: `${BASE}/moving/tools/first-90-days/` },
    ],
  },
  {
    route: "self-employed",
    steps: [
      { label: "Prepare business and identity documents", href: `${BASE}/visa/self-employed-visa/` },
      { label: "Check route-specific proof requirements" },
      { label: "Plan KVK / setup timing" },
      { label: "Build relocation budget", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
      { label: "Plan your first 90 days", href: `${BASE}/moving/tools/first-90-days/` },
    ],
  },
  {
    route: "daft",
    steps: [
      { label: "Prepare business and identity documents", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
      { label: "Check DAFT proof and investment requirements" },
      { label: "Plan KVK / setup timing" },
      { label: "Build relocation budget", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
      { label: "Plan your first 90 days", href: `${BASE}/moving/tools/first-90-days/` },
    ],
  },
  {
    route: "student",
    steps: [
      { label: "Confirm admission documents", href: `${BASE}/visa/student-visa/` },
      { label: "Prepare financial proof" },
      { label: "Start housing planning" },
      { label: "Plan first 90 days", href: `${BASE}/moving/tools/first-90-days/` },
      { label: "Estimate relocation cost", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
    ],
  },
  {
    route: "partner-family",
    steps: [
      { label: "Collect relationship and sponsor documents", href: `${BASE}/visa/partner-family-visa/` },
      { label: "Check civil-status and apostille complexity" },
      { label: "Plan municipality and arrival steps", href: `${BASE}/first-30-days-netherlands/` },
      { label: "Estimate relocation cost", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
      { label: "Plan your first 90 days", href: `${BASE}/moving/tools/first-90-days/` },
    ],
  },
  {
    route: "not-sure",
    steps: [
      { label: "Find your best visa first", href: `${BASE}/visa-checker/` },
      { label: "Then check document requirements for that route", href: `${BASE}/document-readiness-checker/` },
      { label: "Estimate relocation cost", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
      { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
      { label: "Plan your first 90 days", href: `${BASE}/moving/tools/first-90-days/` },
    ],
  },
];

export function getNextStepsForRoute(route: PrimaryRoute): NextStepItem[] {
  const template = NEXT_STEPS_TEMPLATES.find((t) => t.route === route);
  return template?.steps ?? NEXT_STEPS_TEMPLATES.find((t) => t.route === "not-sure")!.steps;
}
