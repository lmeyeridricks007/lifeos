/**
 * Related guides, tools, and next-step links for the Visa Application Plan.
 */

const BASE = "/netherlands";

export const ROUTE_GUIDE_HREFS: Record<string, string> = {
  "highly-skilled-migrant": `${BASE}/visa/highly-skilled-migrant/`,
  "eu-blue-card": `${BASE}/visa/eu-blue-card/`,
  "self-employed": `${BASE}/visa/self-employed-visa/`,
  daft: `${BASE}/visa/dutch-american-friendship-treaty/`,
  student: `${BASE}/visa/student-visa/`,
  "partner-family": `${BASE}/visa/partner-family-visa/`,
  "not-sure": `${BASE}/visa-checker/`,
};

export const RECOMMENDED_TOOLS = [
  { label: "Visa Checker", href: `${BASE}/visa-checker/`, description: "Find your best route" },
  { label: "Document Readiness Checker", href: `${BASE}/document-readiness-checker/`, description: "See whether your documents are ready" },
  { label: "Relocation Cost Estimator", href: `${BASE}/moving/tools/relocation-cost-estimator/`, description: "Estimate first-year costs" },
  { label: "Moving Checklist", href: `${BASE}/moving/tools/moving-checklist/`, description: "Turn this plan into a checklist" },
  { label: "First 90 Days Planner", href: `${BASE}/moving/tools/first-90-days/`, description: "Organize your first weeks" },
  { label: "Arrival Planner", href: `${BASE}/moving/tools/arrival-planner/`, description: "Plan your arrival" },
];

export const RECOMMENDED_GUIDES_BY_ROUTE: Record<string, Array<{ label: string; href: string }>> = {
  "highly-skilled-migrant": [
    { label: "Highly Skilled Migrant", href: `${BASE}/visa/highly-skilled-migrant/` },
    { label: "Documents needed", href: `${BASE}/documents-needed-to-move-netherlands/` },
    { label: "Moving to the Netherlands", href: `${BASE}/moving-to-the-netherlands/` },
  ],
  "eu-blue-card": [
    { label: "EU Blue Card", href: `${BASE}/visa/eu-blue-card/` },
    { label: "Documents needed", href: `${BASE}/documents-needed-to-move-netherlands/` },
  ],
  student: [
    { label: "Student Visa", href: `${BASE}/visa/student-visa/` },
    { label: "Documents needed", href: `${BASE}/documents-needed-to-move-netherlands/` },
  ],
  "partner-family": [
    { label: "Partner & Family Visa", href: `${BASE}/visa/partner-family-visa/` },
    { label: "Documents needed", href: `${BASE}/documents-needed-to-move-netherlands/` },
  ],
  daft: [
    { label: "DAFT", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
    { label: "Business and relocation", href: `${BASE}/moving-to-the-netherlands/` },
  ],
  "self-employed": [
    { label: "Self-Employed Visa", href: `${BASE}/visa/self-employed-visa/` },
    { label: "Documents needed", href: `${BASE}/documents-needed-to-move-netherlands/` },
  ],
  "not-sure": [
    { label: "Visa Checker", href: `${BASE}/visa-checker/` },
    { label: "Moving to the Netherlands", href: `${BASE}/moving-to-the-netherlands/` },
  ],
};

export const NEXT_BEST_ACTION_TOOLS = [
  { label: "Check my documents", href: `${BASE}/document-readiness-checker/` },
  { label: "Estimate relocation cost", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  { label: "Generate moving checklist", href: `${BASE}/moving/tools/moving-checklist/` },
];
