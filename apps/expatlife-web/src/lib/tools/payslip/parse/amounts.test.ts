import test from "node:test";
import assert from "node:assert/strict";
import {
  findMoneyTokensInLine,
  parseEuropeanMoneyToken,
  extractTrailingAmount,
} from "@/src/lib/tools/payslip/parse/amounts";

test("parseEuropeanMoneyToken handles Dutch thousands dot and decimal comma", () => {
  assert.equal(parseEuropeanMoneyToken("4.250,75"), 4250.75);
  assert.equal(parseEuropeanMoneyToken("4250,75"), 4250.75);
});

test("parseEuropeanMoneyToken handles space thousands and euro strip", () => {
  assert.equal(parseEuropeanMoneyToken("4 250,75"), 4250.75);
  assert.equal(parseEuropeanMoneyToken("€ 4.250,75"), 4250.75);
});

test("parseEuropeanMoneyToken handles negatives and parentheses", () => {
  assert.equal(parseEuropeanMoneyToken("-1.125,50"), -1125.5);
  assert.equal(parseEuropeanMoneyToken("(500,00)"), -500);
});

test("parseEuropeanMoneyToken handles US-style decimals", () => {
  assert.equal(parseEuropeanMoneyToken("5000.00"), 5000);
});

test("findMoneyTokensInLine finds trailing amount on typical payslip line", () => {
  const line = "Bruto loon                    € 4.250,75";
  const t = findMoneyTokensInLine(line);
  assert.ok(t.length >= 1);
  assert.equal(t[t.length - 1].value, 4250.75);
});

test("extractTrailingAmount returns last money token", () => {
  const ex = extractTrailingAmount("Netto loon 3.200,00 en iets 10,00");
  assert.ok(ex);
  assert.equal(ex!.value, 10);
});
