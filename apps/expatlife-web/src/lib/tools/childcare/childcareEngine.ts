import { childcareSetupAssumptions } from "@/src/lib/tools/childcare/config";
import {
  benefitEligibilityMultiplier,
  buildChildcareFirstMonthBreakdown,
  calculateChildcareSalaryComfortBand,
  CHILDCARE_DEFAULT_INCOME_WHEN_MISSING_EUR,
  clampReimbursableHours,
  computeOverCapLoss,
  estimateChildcareBenefitForChild,
  getChildcareOfficialCap,
  getChildcareReimbursementPercent,
  resolveMonthlyCareHours,
  resolveProviderHourlyRateEur,
  roundMoney,
} from "@/src/lib/tools/childcare/childcareHelpers";
import type {
  ChildcareChildInput,
  ChildcareEstimateInsightFlags,
  ChildcareEstimateResult,
  ChildcareEstimatorInput,
  ChildcarePerChildBreakdown,
} from "@/src/types/tools/childcare";

export function calculateChildcareEstimate(input: ChildcareEstimatorInput): ChildcareEstimateResult {
  const insights: string[] = [];
  const engineWarnings: string[] = [];

  const rawIncome = input.benefit.annualHouseholdIncomeEur;
  const uncertainIncomeInput = !Number.isFinite(rawIncome) || rawIncome <= 0;
  const annualHouseholdIncomeUsedEur = uncertainIncomeInput ? CHILDCARE_DEFAULT_INCOME_WHEN_MISSING_EUR : rawIncome;
  if (uncertainIncomeInput) {
    engineWarnings.push(
      `Household income was missing or not positive — using a conservative high-income default (€${CHILDCARE_DEFAULT_INCOME_WHEN_MISSING_EUR.toLocaleString("en-NL")}/yr) so the planning model assumes a lower subsidy rate. Enter your real income for a tighter estimate.`
    );
  }

  const eligMult = benefitEligibilityMultiplier(
    input.benefit.workingParentsCount,
    input.benefit.workingParentsStatus
  );
  const capAware = input.benefit.useOfficialCapAwareEstimate;
  const reimbursementPercentFirst = getChildcareReimbursementPercent(
    input.taxYear,
    annualHouseholdIncomeUsedEur,
    0,
    input.householdType
  );

  const perChild: ChildcarePerChildBreakdown[] = [];
  let grossMonthly = 0;
  let totalBenefit = 0;
  let anyOverCap = false;

  input.children.forEach((child, childIndex) => {
    const { rate: providerRateRaw, note: rateNote } = resolveProviderHourlyRateEur({
      rateMode: child.rateMode,
      manualHourlyRateEur: child.manualHourlyRateEur,
      city: input.city,
      tier: input.providerCostTier,
      careType: child.careType,
    });
    const providerRate = roundMoney(Math.max(0, providerRateRaw));
    const monthlyHours = resolveMonthlyCareHours(child);
    const officialCap = getChildcareOfficialCap(input.taxYear, child.careType);
    const reimbursableHours = clampReimbursableHours(monthlyHours, input.taxYear);
    const reimbursableRate = capAware ? Math.min(providerRate, officialCap) : providerRate;
    const reimbursableBase = roundMoney(reimbursableRate * reimbursableHours);

    const variableGross = roundMoney(providerRate * monthlyHours);
    const fixedExtras = roundMoney(
      Math.max(0, child.mealsSuppliesMonthlyEur) +
        Math.max(0, child.holidayCareReserveMonthlyEur) +
        Math.max(0, child.backupCareReserveMonthlyEur)
    );
    const providerBillMonthly = variableGross + fixedExtras;

    const { overCapLoss, hourlyOverCapComponent, hoursOverCapComponent } = computeOverCapLoss({
      capAware,
      providerRate,
      monthlyHours,
      officialCap,
      reimbursableHours,
    });
    if (providerRate > officialCap && capAware) anyOverCap = true;

    const reimbursementPercent = getChildcareReimbursementPercent(
      input.taxYear,
      annualHouseholdIncomeUsedEur,
      childIndex,
      input.householdType
    );

    const estimatedBenefit = estimateChildcareBenefitForChild({
      capAware,
      providerBillMonthly,
      reimbursableBase,
      reimbursementPercent,
      eligibilityMultiplier: eligMult,
    });

    const outOfPocket = roundMoney(providerBillMonthly - estimatedBenefit);

    const notes: string[] = [];
    if (rateNote) notes.push(rateNote);
    if (providerRate > officialCap && capAware) {
      notes.push(
        `Provider rate €${providerRate.toFixed(2)}/h exceeds ${input.taxYear} official max €${officialCap.toFixed(2)}/h for this care type — extra hourly cost is not in the reimbursable slice.`
      );
    }
    if (monthlyHours > reimbursableHours && capAware) {
      notes.push(
        `Hours (${monthlyHours.toFixed(1)}/mo) exceed reimbursable cap (${reimbursableHours}/mo) — excess billed at provider rate is not in the reimbursable base.`
      );
    }
    if (childIndex > 0) {
      notes.push(
        `Planning % for child ${childIndex + 1} uses the “additional child” bracket (${(reimbursementPercent * 100).toFixed(1)}% before eligibility weighting).`
      );
    }

    perChild.push({
      childId: child.id,
      label: child.label,
      ageBand: child.ageBand,
      careType: child.careType,
      childIndex,
      monthlyHours,
      providerHourlyRateEur: providerRate,
      officialHourlyCapEur: officialCap,
      providerBillMonthly,
      reimbursableRate,
      reimbursableHours,
      reimbursableBase,
      estimatedBenefit,
      outOfPocket,
      overCapLoss,
      hourlyOverCapComponent,
      hoursOverCapComponent,
      notes,
    });

    grossMonthly += providerBillMonthly;
    totalBenefit += estimatedBenefit;

    if (providerRate > officialCap && capAware) {
      insights.push(
        `${child.label}: hourly rate (€${providerRate.toFixed(2)}) is above the ${input.taxYear} reimbursable cap (€${officialCap.toFixed(2)}/h) for this care type — extra cost stays out of pocket in this model.`
      );
    }
    if (monthlyHours >= reimbursableHours - 1 && capAware) {
      insights.push(
        `${child.label}: hours are at or near the ${reimbursableHours} h/mo reimbursable ceiling — verify real invoices and contract hours.`
      );
    }
  });

  grossMonthly = roundMoney(grossMonthly);
  totalBenefit = roundMoney(totalBenefit);
  const netMonthly = roundMoney(grossMonthly - totalBenefit);
  const annualNet = roundMoney(netMonthly * 12);

  let registrationTotal = 0;
  for (const c of input.children) {
    registrationTotal += Math.max(0, c.registrationFeeEur);
  }

  const firstMonthBreakdown = buildChildcareFirstMonthBreakdown({
    netMonthlyChildcare: netMonthly,
    grossMonthlyProvider: grossMonthly,
    registrationTotal,
    setup: input.setupFirstMonth,
  });
  const firstMonth = firstMonthBreakdown.totalEur;

  const totalSetupCash = roundMoney(
    (input.setupFirstMonth.includeRegistrationFees ? registrationTotal : 0) +
      (input.setupFirstMonth.includeAdvanceDeposit
        ? roundMoney(grossMonthly * childcareSetupAssumptions.advanceDepositMonths)
        : 0)
  );

  if (input.setupFirstMonth.includeRegistrationFees || input.setupFirstMonth.includeAdvanceDeposit) {
    insights.push(
      "First-month cash often includes registration, deposits, or overlapping invoices — recurring monthly net is usually lower once you are settled."
    );
  }
  if (input.children.some((c) => c.careType === "bso")) {
    insights.push(
      "BSO is often a smaller hourly ticket than daycare, but school holidays and study days can add separate costs not fully captured in a flat monthly hour model."
    );
  }
  if (eligMult < 0.9) {
    insights.push(
      "Benefit is discounted in this estimate when both parents are not clearly working/studying — real toeslag rules are strict; confirm with Belastingdienst."
    );
  }
  if (input.workDecision.secondParentReturningToWork) {
    insights.push(
      "If a second parent increases hours, update working-parent assumptions — childcare benefit eligibility and net hours needed may both change."
    );
  }

  const comfort = calculateChildcareSalaryComfortBand({
    netMonthlyChildcare: netMonthly,
    householdNetMonthlyEur: input.workDecision.householdNetMonthlyEur,
    comfortLevel: input.workDecision.comfortLevel,
  });

  const netIn = input.workDecision.householdNetMonthlyEur;
  const insightFlags: ChildcareEstimateInsightFlags = {
    hasOverCapRate: anyOverCap,
    hasMultipleChildren: input.children.length > 1,
    highMonthlyChildcareBurden:
      netMonthly >= 1200 ||
      (netIn != null && netIn > 0 && netMonthly / netIn >= 0.22),
    highFirstMonthCash: firstMonth > Math.max(4000, netMonthly * 1.8),
    uncertainIncomeInput,
    schoolAgeMix: computeSchoolAgeMix(input.children),
    likelyWorkDecisionSensitive:
      input.workDecision.secondParentReturningToWork ||
      input.children.length > 1 ||
      (netIn != null && netIn > 0 && netMonthly / netIn >= 0.12) ||
      netMonthly >= 900,
  };

  return {
    grossMonthlyProviderCostEur: grossMonthly,
    estimatedMonthlyBenefitEur: totalBenefit,
    estimatedMonthlyNetChildcareCostEur: netMonthly,
    annualNetChildcareCostEur: annualNet,
    firstMonthChildcareCashEur: firstMonth,
    firstMonthBreakdown,
    totalSetupCashEur: totalSetupCash,
    reimbursementPercentApplied: reimbursementPercentFirst,
    benefitEligibilityMultiplier: eligMult,
    annualHouseholdIncomeUsedEur,
    insightFlags,
    engineWarnings,
    perChild,
    childcareShareOfNetPercent: comfort.childcareShareOfNetPercent,
    budgetImpactLabel: comfort.budgetImpactLabel,
    additionalNetForComfortEur: comfort.additionalNetForComfortEur,
    salaryTargetNarrative: comfort.salaryTargetNarrative,
    insights: dedupeInsights(insights),
  };
}

function computeSchoolAgeMix(children: ChildcareChildInput[]): boolean {
  if (children.length < 2) return false;
  const flags = children.map((c) => c.schoolAge);
  return flags.some(Boolean) && flags.some((x) => !x);
}

function dedupeInsights(items: string[]): string[] {
  return Array.from(new Set(items));
}
