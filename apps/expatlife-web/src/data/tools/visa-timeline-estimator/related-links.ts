/**
 * Related guides, tools, and next-step links for the Visa Timeline Estimator.
 */

const BASE = "/netherlands";

export const TIMELINE_ESTIMATOR_RELATED_GUIDES = [
  { href: `${BASE}/visa/highly-skilled-migrant/`, label: "Highly Skilled Migrant" },
  { href: `${BASE}/visa/eu-blue-card/`, label: "EU Blue Card" },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, label: "DAFT" },
  { href: `${BASE}/visa/self-employed-visa/`, label: "Self-Employed Visa" },
  { href: `${BASE}/visa/student-visa/`, label: "Student Visa" },
  { href: `${BASE}/visa/partner-family-visa/`, label: "Partner & Family Visa" },
  { href: `${BASE}/moving-to-the-netherlands/`, label: "Moving to the Netherlands" },
];

export const TIMELINE_ESTIMATOR_RECOMMENDED_TOOLS = [
  { href: `${BASE}/visa-checker/`, label: "Visa Checker" },
  { href: `${BASE}/document-readiness-checker/`, label: "Document Readiness Checker" },
  { href: `${BASE}/visa-application-plan/`, label: "Visa Application Plan" },
  { href: `${BASE}/visa-cost-calculator/`, label: "Visa Cost Calculator" },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, label: "Relocation Cost Estimator" },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist" },
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 Days Planner" },
];

export const NEXT_STEP_TOOLS = [
  { label: "Check my documents", href: `${BASE}/document-readiness-checker/` },
  { label: "Build my visa plan", href: `${BASE}/visa-application-plan/` },
  { label: "Estimate visa costs", href: `${BASE}/visa-cost-calculator/` },
];

export function getRecommendedGuidesForRoute(route: string): Array<{ label: string; href: string }> {
  const byRoute: Record<string, string> = {
    "highly-skilled-migrant": `${BASE}/visa/highly-skilled-migrant/`,
    "eu-blue-card": `${BASE}/visa/eu-blue-card/`,
    daft: `${BASE}/visa/dutch-american-friendship-treaty/`,
    "self-employed": `${BASE}/visa/self-employed-visa/`,
    student: `${BASE}/visa/student-visa/`,
    "partner-family": `${BASE}/visa/partner-family-visa/`,
  };
  const href = byRoute[route];
  if (href) {
    const label = route === "partner-family" ? "Partner & Family Visa" : route.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return [{ label, href }, ...TIMELINE_ESTIMATOR_RELATED_GUIDES.filter((g) => g.href !== href)];
  }
  return TIMELINE_ESTIMATOR_RELATED_GUIDES;
}
