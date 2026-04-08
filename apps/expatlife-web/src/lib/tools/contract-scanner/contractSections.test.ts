import test from "node:test";
import assert from "node:assert/strict";
import { splitContractSections, sectionContainingIndex } from "@/src/lib/tools/contract-scanner/contractSections";

test("splitContractSections detects article, numbered, annex, and all-caps headings", () => {
  const text = `PREAMBLE LINE
ARTICLE 3 — SALARY
Gross monthly salary applies.

4.1 Probation
Proeftijd van twee maanden.

BIJLAGE A — VOORWAARDEN
Extra terms here.

**Bold PDF Title**
Body under bold.

THIS IS AN ALL CAPS CLAUSE TITLE FOR TESTING PURPOSES
More text.`;
  const sections = splitContractSections(text);
  const headings = sections.map((s) => s.heading).filter(Boolean);
  assert.ok(headings.some((h) => /ARTICLE\s+3/i.test(h ?? "")));
  assert.ok(headings.some((h) => /4\.1\s+Probation/i.test(h ?? "")));
  assert.ok(headings.some((h) => /BIJLAGE\s+A/i.test(h ?? "")));
  assert.ok(headings.some((h) => /Bold PDF Title/i.test(h ?? "")));
  assert.ok(headings.some((h) => /ALL CAPS CLAUSE TITLE/i.test(h ?? "")));
});

test("sectionContainingIndex returns section covering offset", () => {
  const text = `Article 1\nIntro\n\n2. Salary\nEUR 5000 gross.`;
  const sections = splitContractSections(text);
  const salaryIdx = text.indexOf("EUR");
  const sec = sectionContainingIndex(sections, salaryIdx);
  assert.ok(sec);
  assert.match(sec?.heading ?? "", /2\.\s+Salary/i);
});
