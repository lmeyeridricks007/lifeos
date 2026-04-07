import type {
  MonthlyLivingCostLine,
  RaComputation,
  RaInputs,
  RaMoneyLine,
  RaScenarioRow,
} from "@/src/types/tools/rent-affordability";
import {
  affordableBandsToMaxRentBand,
  evaluateRentAffordabilityCore,
  estimateMonthlyLivingCosts,
  modelLinesOnly,
  modelNonRentTotalEur,
} from "./calculateRentAffordability";
import { mergeRaInputs } from "./defaultInputs";
import { normalizeRentAffordabilityInput } from "./normalizeInput";
import { generateComparisonScenarios } from "./scenarios";

function monthlyLineToRaMoneyLine(l: MonthlyLivingCostLine): RaMoneyLine {
  return { id: l.id, label: l.label, group: l.group, amountEur: l.amountEur, note: l.note };
}

export function computeRentAffordability(input: RaInputs): RaComputation | null {
  const normalized = normalizeRentAffordabilityInput(input);
  const core = evaluateRentAffordabilityCore(normalized);
  if (!core) return null;

  const modelMonthly = estimateMonthlyLivingCosts(normalized, 0);
  const nonRentLines: RaMoneyLine[] = modelLinesOnly(modelMonthly).map(monthlyLineToRaMoneyLine);
  const nonRentTotalEur = modelNonRentTotalEur(modelMonthly);

  const maxRent = affordableBandsToMaxRentBand(core.affordabilityBands);

  const allScenarioRows = generateComparisonScenarios(normalized).map((r) => ({
    id: r.id,
    label: r.label,
    whyItMatters: r.whyItMatters,
    monthlyTotalEur: r.monthlyTotalEur,
    setupTotalEur: r.setupTotalEur,
    recommendedRentEur: r.recommendedRentEur,
    balancedGrossSalaryMonthlyEur: r.balancedGrossSalaryMonthlyEur,
  }));
  const scenarios: RaScenarioRow[] = input.compareScenariosEnabled
    ? allScenarioRows
    : allScenarioRows.filter((r) => r.id === "current");

  const selectedLandlordCheck =
    core.landlordScreening.checks.find((c) => c.multiplier === core.landlordScreening.selectedMultiplier) ??
    core.landlordScreening.checks[1];

  return {
    inputs: mergeRaInputs(input),
    income: core.income,
    incomeWithoutRuling: core.incomeWithoutRuling,
    nonRent: { lines: nonRentLines, totalEur: nonRentTotalEur },
    fixedObligationsEur: core.fixedObligationsEur,
    modelRentColdEur: core.modelRentColdEur,
    effectiveRentEur: core.effectiveRentEur,
    rentForComparisonEur: core.rentForComparisonEur,
    landlordScreeningGrossUsedEur: core.landlordScreeningGrossUsedEur,
    landlordChecks: core.landlordScreening.checks,
    selectedLandlordCheck,
    maxRent,
    maxRentWithoutRulingSameGross: core.maxRentWithoutRulingSameGross,
    salaryNetTargets: core.salaryTargetsNet,
    salaryGrossMonthlyTargets: core.salaryTargetsGrossMonthly,
    reverse: core.reverse,
    remainingAfterRentEur: core.remainingAfterRentEur,
    affordabilityStatus: core.affordabilityStatus,
    setup: {
      lines: core.setup.lines.map((l) => ({ id: l.id, label: l.label, amountEur: l.amountEur, note: l.note })),
      totalEur: core.setup.totalEur,
      firstMonthCashEur: core.setup.firstMonthCashEur,
      savingsBufferEur: core.setup.savingsBufferEur,
    },
    scenarios,
    narrative: {
      biggestCostDriver: core.insights.biggestCostDriver,
      landlordIssue: core.insights.landlordIssue,
      reduceCosts: core.insights.reduceCosts,
      monthlyVsSetup: core.insights.monthlyVsSetup,
      childcareImpact: core.insights.childcareImpact,
      rulingImpact: core.insights.rulingImpact,
      commuterBeltOpportunity: core.insights.commuterBeltOpportunity,
    },
    meta: {
      warnings: core.warnings,
      disclaimers: core.disclaimers,
      incomeIndicativeNote: core.incomeIndicativeNote,
      childcareSummary: {
        included: core.monthlyLiving.lines.some((l) => l.id === "childcare" && l.amountEur > 0),
        model:
          input.fixedChildcare > 0 && !input.includeChildcarePlaceholder
            ? "manual"
            : input.includeChildcarePlaceholder
              ? "placeholder"
              : "none",
        schoolReserveIncluded: input.includeSchoolCostReserve && input.childrenCount > 0,
      },
      landlordContextNotes: core.warnings.filter(
        (w) => w.includes("Landlord screening") || w.includes("Foreign income")
      ),
    },
  };
}
