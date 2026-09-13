/**
 * Drift guard: partner/family + self-employed IND amounts must come from the
 * shared statutory module, and official-figures must mirror the same values.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it } from "node:test";
import { PARTNER_FAMILY_VISA } from "@/src/content/visas/partner-family-visa";
import { SELF_EMPLOYED_VISA } from "@/src/content/visas/self-employed-visa";
import { officialFiguresRows } from "@/src/components/official-figures/officialFigures2026";
import {
  IND_REQUIRED_AMOUNTS,
  PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_DISPLAY,
  PARTNER_FAMILY_SPONSOR_INCL_HOLIDAY_DISPLAY,
  SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY,
} from "@/src/lib/statutory/indRequiredAmounts";
import { partnerFamilyToGuideData, selfEmployedToGuideData } from "@/src/lib/visas/visaToGuideData";

const STALE_H1_2026 = ["2,294.40", "2,477.95", "1,734.57", "2294.40", "2477.95", "1734.57"] as const;

const GUARDED_SOURCE_FILES = [
  "src/content/visas/partner-family-visa.ts",
  "src/content/visas/self-employed-visa.ts",
  "src/lib/visas/visaToGuideData.ts",
  "src/components/official-figures/officialFigures2026.ts",
] as const;

function readAppSource(relativePath: string): string {
  return readFileSync(resolve(__dirname, "../../..", relativePath), "utf8");
}

describe("IND required-amount statutory spine", () => {
  it("exposes the H2 2026 IND partner and self-employed figures", () => {
    assert.equal(IND_REQUIRED_AMOUNTS.partnerFamilySponsorExclHoliday.value, 2337);
    assert.equal(IND_REQUIRED_AMOUNTS.partnerFamilySponsorInclHoliday.value, 2523.96);
    assert.equal(IND_REQUIRED_AMOUNTS.selfEmployedMonthlyProfit.value, 1766.77);
  });

  it("partner-family visa content uses shared display amounts only", () => {
    const amounts = (PARTNER_FAMILY_VISA.incomeRequirements ?? []).map((row) => row.amount);
    assert.deepEqual(amounts, [
      PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_DISPLAY,
      PARTNER_FAMILY_SPONSOR_INCL_HOLIDAY_DISPLAY,
    ]);
    assert.ok(PARTNER_FAMILY_VISA.faq.some((item) => item.a.includes(PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_DISPLAY)));
  });

  it("self-employed visa content uses shared display amount only", () => {
    assert.equal(SELF_EMPLOYED_VISA.incomeRequirements?.[0]?.amount, SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY);
    assert.ok(SELF_EMPLOYED_VISA.faq.some((item) => item.a.includes(SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY)));
  });

  it("guide adapters surface the shared amounts and official-figures links", () => {
    const partner = partnerFamilyToGuideData(PARTNER_FAMILY_VISA);
    const selfEmployed = selfEmployedToGuideData(SELF_EMPLOYED_VISA);

    const partnerIncome = partner.sections.find((s) => s.id === "income-requirements");
    assert.ok(partnerIncome?.table?.rows?.some((row) => row.includes(PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_DISPLAY)));
    assert.ok(partnerIncome?.links?.some((l) => l.href.includes("/netherlands/official-figures")));

    const fee = selfEmployed.sections.find((s) => s.id === "fee-figures");
    assert.ok(fee?.table?.rows?.some((row) => row.includes(SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY)));
    assert.ok(fee?.links?.some((l) => l.href.includes("/netherlands/official-figures")));
    assert.ok(selfEmployed.quickAnswers?.some((q) => q.value.includes(SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY)));
  });

  it("official-figures rows mirror the statutory module values", () => {
    const excl = officialFiguresRows.find((r) => r.id === IND_REQUIRED_AMOUNTS.partnerFamilySponsorExclHoliday.id);
    const incl = officialFiguresRows.find((r) => r.id === IND_REQUIRED_AMOUNTS.partnerFamilySponsorInclHoliday.id);
    const profit = officialFiguresRows.find((r) => r.id === IND_REQUIRED_AMOUNTS.selfEmployedMonthlyProfit.id);

    assert.ok(excl?.figure.includes(PARTNER_FAMILY_SPONSOR_EXCL_HOLIDAY_DISPLAY));
    assert.ok(incl?.figure.includes(PARTNER_FAMILY_SPONSOR_INCL_HOLIDAY_DISPLAY));
    assert.ok(profit?.figure.includes(SELF_EMPLOYED_MONTHLY_PROFIT_DISPLAY));
    assert.ok(excl?.relatedGuideHref?.includes("partner-family-visa"));
    assert.ok(profit?.relatedGuideHref?.includes("self-employed-visa"));
  });

  it("does not leave H1-2026 stale literals in guarded source files", () => {
    for (const file of GUARDED_SOURCE_FILES) {
      const source = readAppSource(file);
      for (const stale of STALE_H1_2026) {
        assert.equal(source.includes(stale), false, `${file} still contains stale ${stale}`);
      }
    }
  });

  it("keeps partner/self-employed numeric literals only in the statutory module", () => {
    const moduleSource = readAppSource("src/lib/statutory/indRequiredAmounts.ts");
    assert.match(moduleSource, /2337/);
    assert.match(moduleSource, /2523\.96/);
    assert.match(moduleSource, /1766\.77/);

    for (const file of GUARDED_SOURCE_FILES) {
      const source = readAppSource(file);
      assert.equal(source.includes("2337"), false, `${file} should not hardcode 2337`);
      assert.equal(source.includes("2523.96"), false, `${file} should not hardcode 2523.96`);
      assert.equal(source.includes("1766.77"), false, `${file} should not hardcode 1766.77`);
    }
  });
});
