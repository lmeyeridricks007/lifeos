import test from "node:test";
import assert from "node:assert/strict";
import { parseContractText, runContractScan } from "@/src/lib/tools/contract-scanner/parser";
import type { ContractChecklistAnswers } from "@/src/lib/tools/contract-scanner/types";

const PERMANENT_SAMPLE = `
Employment Agreement — indefinite term (onbepaalde tijd)
The Employee will receive a gross monthly salary of EUR 5.500.
Holiday allowance (vakantiegeld) of 8% is included as required.
Probation period (proeftijd): 2 months.
Notice period: 1 month for the employee after probation.
Pension via Stichting Pensioenfonds.
`;

const FIXED_PROBATION = `
Fixed-term employment for bepaalde tijd until 31 December 2027.
Proeftijd of one month applies.
`;

const BROAD_NON_COMPETE = `
After termination, the Employee shall not compete with the Employer anywhere in the world for any business activity.
This is a concurrentiebeding without geographic or time limitation in this excerpt.
`;

const RELOCATION_30 = `
Relocation costs of EUR 10.000 will be reimbursed. If the Employee resigns within 24 months, relocation must be repaid in full.
The Employer will apply for the 30% ruling where eligible.
`;

const HANDBOOK = `
The Employee Handbook and all policies as amended from time to time are incorporated by reference and form part of this agreement.
`;

const OFFER_SPARSE = `
Offer letter — we are pleased to offer you a role. Start date: 1 June. Salary discussed verbally.
Please sign and return. This paragraph is padding so the document has enough characters for missing-topic
heuristics to run meaningfully for short offer-style text without full contract sections attached.
We look forward to welcoming you to the team and will follow up with the formal agreement in due course.
`;

const RELOCATION_FULL_REPAY = `
Relocation allowance of EUR 8.000. If you resign within 18 months, full repayment in full without proration applies.
`;

const THIRTY_DISCRETIONARY = `
Salary is agreed in gross terms. The 30%-regeling will be applied naar goeddunken van de werkgever; no guarantee of approval.
`;

const POLICY_ONLY = `
PERSONNEL POLICIES
Your employment is subject to the employee policies on the intranet, including rules on overtime, illness, and disciplinary sanctions.
No salary, notice, or pension terms are set out in this excerpt; details are only in the policy library referenced above.
This paragraph adds length so missing-item logic runs: the company may update policies from time to time without further notice to you.
`;

const CONFIDENTIALITY_BROAD = `
The Employee shall keep confidential all information obtained during employment without limitation after termination.
`;

test("permanent contract detects salary, holiday, probation, notice, pension", () => {
  const r = parseContractText(PERMANENT_SAMPLE);
  assert.equal(r.contractType, "permanent");
  assert.ok(r.findings.some((f) => f.subcategory.includes("Probation")));
  assert.ok(r.findings.some((f) => f.subcategory.includes("Notice")));
  assert.ok(r.findings.some((f) => f.subcategory.includes("Holiday")));
  assert.ok(r.findings.some((f) => f.subcategory.includes("Pension")));
});

test("runContractScan attaches free-tier pipeline metadata for paste", () => {
  const r = runContractScan({ mode: "paste", text: PERMANENT_SAMPLE });
  assert.equal(r.insightLevel, "basic");
  assert.equal(r.documentInputSource, "paste_text");
  assert.equal(r.extractionMethod, "none");
  assert.equal(r.ocrAvailable, false);
  assert.equal(r.ocrRecommended, false);
});

test("runContractScan uses documentProcessing for OCR flags when provided", () => {
  const r = runContractScan({
    mode: "pdf",
    text: "short",
    documentProcessing: {
      extractedText: "short",
      extractionQuality: "poor",
      extractionWarnings: [],
      textLength: 5,
      pageCount: 2,
      documentInputSource: "pdf_scanned",
      extractionMethod: "pdf_text",
      likelyScannedDocument: true,
      ocrRecommended: true,
      ocrAvailable: false,
    },
  });
  assert.equal(r.ocrRecommended, true);
  assert.equal(r.documentInputSource, "pdf_scanned");
});

test("fixed-term with probation flags contract type", () => {
  const r = parseContractText(FIXED_PROBATION);
  assert.equal(r.contractType, "fixed_term");
  assert.ok(r.findings.some((f) => f.id.includes("probation") || f.subcategory.toLowerCase().includes("probation")));
});

test("broad non-compete elevates restrictive signal", () => {
  const r = parseContractText(BROAD_NON_COMPETE);
  const nc = r.findings.find((f) => f.subcategory.includes("Non-compete"));
  assert.ok(nc);
  assert.equal(nc?.category, "restrictive_clauses");
  assert.ok(nc?.riskLabel === "potentially_restrictive" || nc?.appearsBroad);
});

test("relocation repayment and 30% ruling detected", () => {
  const r = parseContractText(RELOCATION_30);
  assert.ok(r.findings.some((f) => f.subcategory.includes("relocation") || f.subcategory.includes("Relocation")));
  assert.ok(r.findings.some((f) => f.subcategory.includes("30%")));
});

test("handbook incorporation flagged as policy dependency", () => {
  const r = parseContractText(HANDBOOK);
  assert.ok(r.findings.some((f) => f.category === "policy_data"));
});

test("sparse offer triggers missing items", () => {
  const r = parseContractText(OFFER_SPARSE);
  assert.ok(r.missingItems.length >= 2);
});

test("relocation full repayment without proration elevates risk", () => {
  const r = parseContractText(RELOCATION_FULL_REPAY);
  const rel = r.findings.find((f) => f.subcategory.includes("Relocation repayment"));
  assert.ok(rel);
  assert.equal(rel?.riskLabel, "review_before_signing");
});

test("30% discretionary wording is detected and deduped vs generic 30% match", () => {
  const r = parseContractText(THIRTY_DISCRETIONARY);
  const disc = r.findings.filter((f) => f.id.startsWith("thirty-percent-discretionary"));
  const generic = r.findings.filter((f) => f.id.startsWith("thirty-percent-") && !f.id.startsWith("thirty-percent-discretionary"));
  assert.ok(disc.length >= 1);
  assert.equal(generic.length, 0);
  assert.ok(disc[0]?.riskLabel === "worth_confirming" || disc[0]?.questionToAsk.includes("30%"));
});

test("policy-only text flags handbook and material terms finding when overtime or discipline referenced", () => {
  const r = parseContractText(POLICY_ONLY);
  assert.ok(r.findings.some((f) => f.id.startsWith("handbook-incorporation") || f.category === "policy_data"));
  assert.ok(
    r.findings.some((f) => f.id.startsWith("handbook-material-terms")) ||
      r.topConcerns.some((c) => /polic/i.test(c))
  );
});

test("broad confidentiality all-information wording raises concern", () => {
  const r = parseContractText(CONFIDENTIALITY_BROAD);
  const c = r.findings.find((f) => f.subcategory.includes("Confidentiality"));
  assert.ok(c);
  assert.ok(c?.appearsBroad || c?.riskLabel === "worth_confirming");
});

test("checklist mode returns result with HR questions", () => {
  const answers: ContractChecklistAnswers = {
    contractType: "fixed_term",
    salaryPresent: "yes",
    holidayAllowance: "unknown",
    pension: "no",
    bonusVariable: "unknown",
    probation: "yes",
    noticePeriod: "yes",
    nonCompete: "yes",
    sideJobRestriction: "unknown",
    overtimeClause: "no",
    handbookReference: "yes",
    relocationRepayment: "yes",
    visaSponsor: "yes",
    thirtyPercentRuling: "yes",
    remoteHybrid: "unknown",
  };
  const r = runContractScan({ mode: "checklist", text: "", checklist: answers });
  assert.equal(r.mode, "checklist");
  assert.ok(r.hrQuestions.length >= 4);
  assert.ok(r.findings.some((f) => f.subcategory.includes("Non-compete")));
});

test("poor text length still parses without throw", () => {
  const r = parseContractText("ok");
  assert.ok(r.normalizedTextLength < 10);
});
