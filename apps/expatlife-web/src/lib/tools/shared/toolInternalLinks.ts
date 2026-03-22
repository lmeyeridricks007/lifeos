/**
 * Centralized internal linking for the 4 Netherlands relocation tools.
 * Use for relatedGuides, internalLinkStrip, and task-level links.
 */

import type { ToolRelatedGuide, ToolRelatedTool } from "./toolPageContent";

const BASE = "/netherlands";

export const MOVING_HUB = `${BASE}/moving/`;
export const PILLAR = `${BASE}/moving-to-the-netherlands/`;

/** Links from Moving Checklist. */
export const MOVING_CHECKLIST_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/after-arriving-netherlands/`, title: "After arriving in the Netherlands", description: "Post-arrival hub: registration, BSN, DigiD, insurance, banking, first-week setup." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Timeline, checklist & documents guide." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "Dutch-American Friendship Treaty (DAFT)", description: "Entrepreneur route for US citizens: process, documents, and tools." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card in the Netherlands", description: "Salary, costs, and process for the EU Blue Card work route." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa in the Netherlands", description: "Costs, study amounts, documents, and timeline for the study route." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa Netherlands", description: "Requirements, income, costs, and application steps for partner and family reunification." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa in the Netherlands", description: "Official fees, profit requirements, business setup, and relocation tools for the self-employed route." },
  { href: `${BASE}/moving-requirements-netherlands/`, title: "Moving to the Netherlands: key requirements", description: "Documents, housing, arrival admin, and first months." },
  { href: `${BASE}/moving-documents-checklist/`, title: "Moving documents checklist", description: "Identity, civil, employment, housing, and backup document categories." },
  { href: `${BASE}/moving-to-netherlands-timeline/`, title: "Moving timeline", description: "Week-by-week planning." },
  { href: `${BASE}/documents-needed-to-move-netherlands/`, title: "Documents needed", description: "What to gather before you go." },
  { href: `${BASE}/first-30-days-netherlands/`, title: "First 30 days", description: "What to do after arrival." },
];

export const MOVING_CHECKLIST_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/visa-application-plan/`, label: "Visa Application Plan", description: "Get a step-by-step application roadmap." },
  { href: `${BASE}/document-readiness-checker/`, label: "Document Readiness Checker", description: "Check which documents to prepare." },
  { href: `${BASE}/moving/tools/arrival-planner/`, label: "Arrival Planner", description: "Plan your first days after arrival." },
];

/** Links from Arrival Planner. */
export const ARRIVAL_PLANNER_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/after-arriving-netherlands/`, title: "After arriving in the Netherlands", description: "Arrival overview and what depends on registration." },
  { href: `${BASE}/municipality-registration-netherlands/`, title: "Municipality registration in the Netherlands", description: "Register with the municipality, BRP, BSN, documents, and timing." },
  { href: `${BASE}/open-bank-account-netherlands/`, title: "Open a bank account in the Netherlands", description: "Banking setup for your first weeks." },
  { href: `${BASE}/health-insurance-netherlands/`, title: "Health insurance in the Netherlands for expats", description: "Timing, comparison, and first-month setup." },
  { href: `${BASE}/first-30-days-netherlands/`, title: "First 30 days in the Netherlands", description: "Practical month-one sequence." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Pillar guide with full planning context." },
  { href: `${BASE}/moving/`, title: "Moving to the Netherlands", description: "All guides and tools for your relocation." },
];

export const ARRIVAL_PLANNER_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 Days Planner", description: "Week 2 to month 3 settlement roadmap." },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist", description: "Pre-move preparation checklist." },
];

/** Links from First 90 Days. */
export const FIRST_90_DAYS_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/first-30-days-netherlands/`, title: "First 30 days in the Netherlands", description: "Priority tasks for your first month." },
  { href: `${BASE}/first-60-days-netherlands/`, title: "First 60 days in the Netherlands", description: "Stabilizing your setup in month one and two." },
  { href: `${BASE}/first-90-days-netherlands/`, title: "First 90 days in the Netherlands", description: "Settlement roadmap and routines." },
  { href: `${BASE}/after-arriving-netherlands/`, title: "After arriving in the Netherlands", description: "Post-arrival hub: registration, BSN, DigiD, insurance, banking, first-week setup." },
  { href: `${BASE}/open-bank-account-netherlands/`, title: "Open a bank account in the Netherlands", description: "Banking and DigiD setup." },
  { href: `${BASE}/health-insurance-netherlands/`, title: "Health insurance in the Netherlands", description: "Mandatory insurance and comparison." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Pillar guide with the big-picture plan." },
  { href: `${BASE}/moving/`, title: "Moving to the Netherlands", description: "All moving guides and tools." },
];

export const FIRST_90_DAYS_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/moving/tools/arrival-planner/`, label: "Arrival Planner", description: "First days and first weeks after arrival." },
  { href: `${BASE}/document-readiness-checker/`, label: "Document Readiness Checker", description: "Documents and requirements awareness." },
];

/** Links from Document Readiness. */
export const DOCUMENT_READINESS_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/documents-needed-to-move-netherlands/`, title: "Documents needed", description: "Core records to gather before and after your move." },
  { href: `${BASE}/moving-documents-checklist/`, title: "Moving documents checklist", description: "Identity, civil, employment, housing categories." },
  { href: `${BASE}/visa-documents-netherlands/`, title: "Visa documents for the Netherlands", description: "Document categories for long-stay visa and residence." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa Netherlands", description: "Requirements, documents, and application steps for partner and family reunification." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa in the Netherlands", description: "Fees, profit requirements, business setup, and documents for the self-employed route." },
  { href: `${BASE}/document-translation-netherlands/`, title: "Document translation in the Netherlands", description: "When translation may be required." },
  { href: `${BASE}/document-legalization-netherlands/`, title: "Document legalization in the Netherlands", description: "When legalization may matter." },
  { href: `${BASE}/document-legalization-netherlands/`, title: "Document legalization in the Netherlands", description: "Apostille and legalisation for foreign documents." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Pillar guide with planning context." },
  { href: `${BASE}/moving/`, title: "Moving to the Netherlands", description: "All moving guides and tools." },
];

export const DOCUMENT_READINESS_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist", description: "Pre-move and travel preparation." },
  { href: `${BASE}/moving/tools/arrival-planner/`, label: "Arrival Planner", description: "First days and admin sequencing." },
];

/** Links for the canonical Document Readiness Checker page (/netherlands/document-readiness-checker). */
export const DOCUMENT_READINESS_CHECKER_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/visa/highly-skilled-migrant/`, title: "Highly Skilled Migrant", description: "Salary, sponsor, documents, and process." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card", description: "Salary thresholds and process for the EU Blue Card route." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "DAFT", description: "US entrepreneur route: documents and process." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa", description: "Business documents and requirements." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa", description: "Admission and proof of funds." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa", description: "Relationship and sponsor documents." },
  { href: `${BASE}/documents-needed-to-move-netherlands/`, title: "Documents needed", description: "Core records to gather." },
  { href: `${BASE}/moving-documents-checklist/`, title: "Moving documents checklist", description: "Identity, civil, employment, housing." },
  { href: `${BASE}/visa-documents-netherlands/`, title: "Visa documents", description: "Document categories for long-stay visa." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Pillar guide with planning context." },
];

export const DOCUMENT_READINESS_CHECKER_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/visa-checker/`, label: "Visa Checker", description: "Find your best visa route." },
  { href: `${BASE}/visa-timeline-estimator/`, label: "Visa Timeline Estimator", description: "Estimate how long your route may take." },
  { href: `${BASE}/visa-cost-calculator/`, label: "Visa Cost Calculator", description: "Estimate visa and move costs for your route." },
  { href: `${BASE}/visa-application-plan/`, label: "Visa Application Plan", description: "Get a step-by-step application roadmap." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, label: "Relocation Cost Estimator", description: "Estimate costs for your move." },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist", description: "Pre-move and travel preparation." },
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 Days Planner", description: "Plan your first weeks after arrival." },
  { href: `${BASE}/moving/tools/arrival-planner/`, label: "Arrival Planner", description: "First days and admin sequencing." },
];

/** Links from Relocation Cost Estimator. */
export const RELOCATION_COST_ESTIMATOR_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/moving-to-netherlands-cost/`, title: "Cost of Moving to the Netherlands", description: "What to budget for: travel, documents, housing, shipping, and first-month setup." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "Dutch-American Friendship Treaty (DAFT)", description: "Entrepreneur route for US citizens: costs, investment, and relocation planning." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card in the Netherlands", description: "Salary thresholds, costs, and process for the EU Blue Card work route." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa in the Netherlands", description: "Application fee, study amounts, and timeline for the study route." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa Netherlands", description: "Requirements, income, costs, and application steps for partner and family reunification." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa in the Netherlands", description: "Official fees, profit requirements, business setup, and relocation tools for the self-employed route." },
  { href: `${BASE}/documents-needed-to-move-netherlands/`, title: "Documents Needed to Move", description: "Document categories and how to organize your document pack." },
  { href: `${BASE}/first-90-days-netherlands/`, title: "First 90 Days in the Netherlands", description: "Settlement roadmap and first months after arrival." },
  { href: `${BASE}/first-30-days-netherlands/`, title: "First 30 Days in the Netherlands", description: "First month priorities and admin steps." },
  { href: `${BASE}/open-bank-account-netherlands/`, title: "Open a Bank Account in the Netherlands", description: "Banking setup for your first weeks." },
  { href: `${BASE}/bringing-pets-to-netherlands/`, title: "Bringing Pets to the Netherlands", description: "What to prepare when relocating with pets." },
  { href: `${BASE}/moving-to-netherlands-with-family/`, title: "Moving to the Netherlands With Family", description: "Documents, housing, school, and registration for families." },
  { href: `${BASE}/moving-to-netherlands-with-kids/`, title: "Moving to the Netherlands With Kids", description: "Schooling, housing, and admin when relocating with children." },
  { href: `${BASE}/moving-checklist-netherlands/`, title: "Moving Checklist for the Netherlands", description: "Practical checklist of common relocation steps." },
];

export const RELOCATION_COST_ESTIMATOR_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/visa-timeline-estimator/`, label: "Visa Timeline Estimator", description: "Estimate how long your route may take." },
  { href: `${BASE}/visa-cost-calculator/`, label: "Visa Cost Calculator", description: "Estimate visa fees and document costs before full relocation budget." },
  { href: `${BASE}/visa-application-plan/`, label: "Visa Application Plan", description: "Get a step-by-step application roadmap." },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist", description: "Generate a personalized checklist." },
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 Days Planner", description: "Plan your first 90 days after arrival." },
];

/** Links from Visa Checker. */
export const VISA_CHECKER_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/visa/compare-visas/`, title: "Compare Netherlands Visas", description: "Compare work, entrepreneur, student, and partner routes side by side." },
  { href: `${BASE}/visa/highly-skilled-migrant/`, title: "Highly Skilled Migrant Visa", description: "Salary, sponsor, costs, and process for the HSM route." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card", description: "Salary thresholds, costs, and comparison with HSM." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "DAFT", description: "US entrepreneur route: investment, process, and tools." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa", description: "Fees, viability, and process for non-DAFT entrepreneurs." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa", description: "Costs, study amounts, and timeline for the study route." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa", description: "Requirements, income, and application steps." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Full relocation guide and planning context." },
  { href: `${BASE}/move-to-netherlands-without-job/`, title: "Move without a job offer", description: "Routes when you don't have a job offer yet." },
  { href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/`, title: "EU vs non-EU moving", description: "How citizenship affects your visa options." },
];

export const VISA_CHECKER_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/visa-timeline-estimator/`, label: "Visa Timeline Estimator", description: "Estimate how long your route may take." },
  { href: `${BASE}/visa-cost-calculator/`, label: "Visa Cost Calculator", description: "Estimate fees, documents, and move costs for your route." },
  { href: `${BASE}/visa-application-plan/`, label: "Visa Application Plan", description: "Get a step-by-step application roadmap for your route." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, label: "Relocation Cost Estimator", description: "Estimate costs for your recommended route." },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist", description: "Build a checklist for your likely visa route." },
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 Days Planner", description: "Plan your first weeks after arrival." },
  { href: `${BASE}/document-readiness-checker/`, label: "Document Readiness Checker", description: "Check which documents to prepare." },
  { href: `${BASE}/moving/tools/arrival-planner/`, label: "Arrival Planner", description: "Plan your first days after landing." },
];

/** Links from Visa Application Plan. */
export const VISA_APPLICATION_PLAN_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/visa/highly-skilled-migrant/`, title: "Highly Skilled Migrant", description: "Salary, sponsor, documents, and process." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card", description: "Salary thresholds and process for the EU Blue Card route." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "DAFT", description: "US entrepreneur route: documents and process." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa", description: "Business documents and requirements." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa", description: "Admission and proof of funds." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa", description: "Relationship and sponsor documents." },
  { href: `${BASE}/documents-needed-to-move-netherlands/`, title: "Documents needed", description: "Core records to gather." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Pillar guide with planning context." },
];

export const VISA_APPLICATION_PLAN_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/visa-checker/`, label: "Visa Checker", description: "Find your best visa route." },
  { href: `${BASE}/visa-timeline-estimator/`, label: "Visa Timeline Estimator", description: "Estimate how long your route may take." },
  { href: `${BASE}/visa-cost-calculator/`, label: "Visa Cost Calculator", description: "Estimate visa and move costs for your route." },
  { href: `${BASE}/document-readiness-checker/`, label: "Document Readiness Checker", description: "Check which documents to prepare." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, label: "Relocation Cost Estimator", description: "Estimate costs for your move." },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist", description: "Turn this plan into a checklist." },
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 Days Planner", description: "Plan your first weeks after arrival." },
  { href: `${BASE}/moving/tools/arrival-planner/`, label: "Arrival Planner", description: "Plan your first days after landing." },
];

/** Links from Visa Timeline Estimator. */
export const VISA_TIMELINE_ESTIMATOR_RELATED_GUIDES: ToolRelatedGuide[] = [
  { href: `${BASE}/visa/highly-skilled-migrant/`, title: "Highly Skilled Migrant", description: "Salary, sponsor, documents, and process." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card", description: "Salary thresholds and process." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "DAFT", description: "US entrepreneur route: process and documents." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa", description: "Business documents and requirements." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa", description: "Admission and proof of funds." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa", description: "Requirements and application steps." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Full relocation guide." },
  { href: `${BASE}/move-to-netherlands-without-job/`, title: "Move without a job offer", description: "Routes when you don't have a job offer." },
  { href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/`, title: "EU vs non-EU moving", description: "How citizenship affects your options." },
];

export const VISA_TIMELINE_ESTIMATOR_RELATED_TOOLS: ToolRelatedTool[] = [
  { href: `${BASE}/visa-checker/`, label: "Visa Checker", description: "Find the right route." },
  { href: `${BASE}/document-readiness-checker/`, label: "Document Readiness Checker", description: "Check document readiness." },
  { href: `${BASE}/visa-application-plan/`, label: "Visa Application Plan", description: "Build a step-by-step roadmap." },
  { href: `${BASE}/visa-cost-calculator/`, label: "Visa Cost Calculator", description: "Budget your route." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, label: "Relocation Cost Estimator", description: "Estimate full move costs." },
  { href: `${BASE}/moving/tools/moving-checklist/`, label: "Moving Checklist", description: "Turn timing into action." },
  { href: `${BASE}/moving/tools/first-90-days/`, label: "First 90 Days Planner", description: "Plan your first weeks after arrival." },
  { href: `${BASE}/moving/tools/arrival-planner/`, label: "Arrival Planner", description: "Plan your first days after landing." },
];
