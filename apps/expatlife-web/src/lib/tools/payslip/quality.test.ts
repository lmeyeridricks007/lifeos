import test from "node:test";
import assert from "node:assert/strict";
import { assessExtractionQuality, printableRatio } from "@/src/lib/tools/payslip/quality";

test("printableRatio is high for normal payroll text", () => {
  const t = "Bruto loon 4500,00\nNetto uitbetaling 3100,00\nLoonheffing 900,00";
  assert.ok(printableRatio(t) > 0.7);
});

test("assessExtractionQuality: good for rich Dutch payroll sample", () => {
  const text = `
    Loonstrook januari 2026
    Bruto loon 5.000,00
    Loonheffing 1.400,00
    Pensioen werknemer 300,00
    Vakantiegeld reservering 400,00
    Netto uitbetaling 2.900,00
    Belastbaar loon 4.800,00
    SV loon 4.900,00
  `.repeat(2);
  const q = assessExtractionQuality(text);
  assert.equal(q.level, "good");
  assert.match(q.label, /Good extraction/i);
});

test("assessExtractionQuality: poor for empty / garbage", () => {
  const q1 = assessExtractionQuality("");
  assert.equal(q1.level, "poor");
  const q2 = assessExtractionQuality("@@@@@%%%%%");
  assert.equal(q2.level, "poor");
});

test("assessExtractionQuality: partial for longer text with few payroll keywords", () => {
  const q = assessExtractionQuality("Some note 123,45 and more text without dutch labels ".repeat(18));
  assert.equal(q.level, "partial");
});
