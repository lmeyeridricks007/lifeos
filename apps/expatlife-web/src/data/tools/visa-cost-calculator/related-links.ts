/**
 * Related tools, guides, and next steps for the Visa Cost Calculator.
 */

const BASE = "/netherlands";

export const RELATED_TOOLS = [
  { href: `${BASE}/visa-checker/`, title: "Visa Checker", description: "Find the best route for your situation." },
  { href: `${BASE}/document-readiness-checker/`, title: "Document Readiness Checker", description: "Check if your documents are ready." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, title: "Relocation Cost Estimator", description: "Estimate your full relocation budget." },
  { href: `${BASE}/moving/tools/moving-checklist/`, title: "Moving Checklist", description: "Turn this into a practical checklist." },
  { href: `${BASE}/moving/tools/first-90-days/`, title: "First 90 Days Planner", description: "Plan your first weeks after arrival." },
  { href: `${BASE}/visa-application-plan/`, title: "Visa Application Plan", description: "Build your application roadmap." },
];

export const NEXT_STEP_LINKS_BY_ROUTE: Record<string, Array<{ label: string; href: string }>> = {
  "highly-skilled-migrant": [
    { label: "Highly Skilled Migrant guide", href: `${BASE}/visa/highly-skilled-migrant/` },
    { label: "Check your documents", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ],
  "eu-blue-card": [
    { label: "EU Blue Card guide", href: `${BASE}/visa/eu-blue-card/` },
    { label: "Check your documents", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ],
  "self-employed": [
    { label: "Self-employed visa guide", href: `${BASE}/visa/self-employed-visa/` },
    { label: "Check your documents", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ],
  daft: [
    { label: "DAFT guide", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
    { label: "Check your documents", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ],
  student: [
    { label: "Student visa guide", href: `${BASE}/visa/student-visa/` },
    { label: "Check your documents", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ],
  "partner-family": [
    { label: "Partner & family visa guide", href: `${BASE}/visa/partner-family-visa/` },
    { label: "Check your documents", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ],
  "not-sure": [
    { label: "Find my visa", href: `${BASE}/visa-checker/` },
    { label: "Document readiness checker", href: `${BASE}/document-readiness-checker/` },
    { label: "Relocation cost estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ],
};
