import test from "node:test";
import assert from "node:assert/strict";
import { computeCityComparison, sanitizeCityComparisonInput } from "../engine";
import { CITY_COMPARISON_REGRESSION_FIXTURES } from "./__fixtures__/regressionProfiles";

function rankIndex(
  ranking: { cityId: string }[],
  cityId: string
): number {
  const i = ranking.findIndex((r) => r.cityId === cityId);
  assert.ok(i >= 0, `city ${cityId} missing from ranking`);
  return i;
}

for (const fx of CITY_COMPARISON_REGRESSION_FIXTURES) {
  test(`regression: ${fx.id}`, () => {
    const input = sanitizeCityComparisonInput({ ...fx.partial });
    const result = computeCityComparison(input);
    const { ranking } = result;
    const exp = fx.expect;

    if (exp.rankingLength != null) {
      assert.equal(ranking.length, exp.rankingLength, fx.tendency);
    }

    if (exp.firstCityId != null) {
      assert.equal(ranking[0]!.cityId, exp.firstCityId, fx.tendency);
    }

    if (exp.amsterdamRanksBelow != null) {
      const ia = rankIndex(ranking, "amsterdam");
      const ib = rankIndex(ranking, exp.amsterdamRanksBelow);
      assert.ok(ia > ib, `${fx.tendency} (expected ${exp.amsterdamRanksBelow} before amsterdam)`);
    }

    if (exp.lowerOutflowThan != null) {
      const [cheaperId, pricierId] = exp.lowerOutflowThan;
      const cheaper = ranking.find((r) => r.cityId === cheaperId);
      const pricier = ranking.find((r) => r.cityId === pricierId);
      assert.ok(cheaper && pricier, "both cities present");
      assert.ok(
        cheaper.cost.totalMonthlyOutflowEur < pricier.cost.totalMonthlyOutflowEur,
        `${cheaperId} outflow should be < ${pricierId}`
      );
    }

    if (exp.commutePracticalityAllNull) {
      assert.ok(
        ranking.every((r) => r.commutePracticality == null),
        "remote / suppressed commute class"
      );
    }
  });
}
