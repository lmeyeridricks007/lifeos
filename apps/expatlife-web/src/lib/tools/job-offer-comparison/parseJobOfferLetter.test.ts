import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseEurAmount, parseJobOfferLetterFromText } from "./parseJobOfferLetter";

describe("parseEurAmount", () => {
  it("parses Dutch thousands with dots", () => {
    assert.equal(parseEurAmount("70.000"), 70_000);
    assert.equal(parseEurAmount("85.000"), 85_000);
  });
  it("parses small decimals", () => {
    assert.equal(parseEurAmount("5.50"), 5.5);
  });
});

describe("parseJobOfferLetterFromText", () => {
  it("extracts common Dutch/English offer fields", () => {
    const text = `
Acme Solutions B.V.

Dear Jane,

We offer you the position of Senior Engineer, based in Amsterdam.
The gross annual salary is € 85.000 per year, exclusive of 8% vakantiegeld.
Your contract is onbepaalde tijd. Hybrid working applies.
Start date: 2026-09-01.
Probation: 2 months. Notice period: 1 month.

We will support your 30% ruling application.

Signing bonus: € 5.000.
`;
    const { fields, filledKeys } = parseJobOfferLetterFromText(text);
    assert.ok(fields.employerName?.includes("Acme"));
    assert.match(fields.roleTitle ?? "", /engineer/i);
    assert.equal(fields.city, "Amsterdam");
    assert.equal(fields.officeCity, "Amsterdam");
    assert.equal(fields.grossSalary, 85_000);
    assert.equal(fields.salaryInputBasis, "annual");
    assert.equal(fields.holidayAllowance, "separate");
    assert.equal(fields.contractType, "permanent");
    assert.equal(fields.workMode, "hybrid");
    assert.equal(fields.expectedStartDate, "2026-09-01");
    assert.equal(fields.probationMonths, 2);
    assert.equal(fields.noticeMonthsEmployee, 1);
    assert.equal(fields.thirtyPercentSupport, "best_efforts");
    assert.equal(fields.signOnBonus, 5_000);
    assert.ok(filledKeys.length >= 8);
  });

  it("detects monthly gross", () => {
    const text = `
TechCorp B.V.
Functie: Developer in Rotterdam.
Bruto maandloon: € 6.200 per maand (inclusief vakantiegeld).
`;
    const { fields } = parseJobOfferLetterFromText(text);
    assert.equal(fields.grossSalary, 6200);
    assert.equal(fields.salaryInputBasis, "monthly");
    assert.equal(fields.city, "Rotterdam");
    assert.equal(fields.holidayAllowance, "included");
  });

  it("parses Dutch EUR 12.731,50 gross per month (PDF line break after EUR)", () => {
    assert.equal(parseEurAmount("12.731,50"), 12731.5);
    const text = `On commencement of the employment contract, the Employee's salary shall be EUR
12.731,50, - gross per month, based on 40 hours a week.`;
    const { fields } = parseJobOfferLetterFromText(text);
    assert.equal(fields.salaryInputBasis, "monthly");
    assert.equal(fields.grossSalary, 12731.5);
  });
});
