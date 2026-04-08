import type { JobOfferComparisonFormState, JobOfferInput, UserPriorities } from "./types";

export const BALANCED_PRIORITIES: UserPriorities = {
  highestNetPay: "medium",
  strongestLongTermUpside: "medium",
  stabilitySecurity: "medium",
  bestBenefits: "medium",
  visaExpatFriendliness: "medium",
  lowestContractRisk: "medium",
  bestWorkLifeBalance: "medium",
  lowestCommuteBurden: "medium",
  bestAffordabilityAfterLivingCosts: "medium",
  bestTotalPackage: "high",
};

export function emptyOffer(): JobOfferInput {
  return {
    employerName: "",
    roleTitle: "",
    city: "Amsterdam",
    workMode: "hybrid",
    officeCity: "",
    contractType: "permanent",
    expectedStartDate: "",
    salaryInputBasis: "annual",
    grossSalary: 70_000,
    holidayAllowance: "not_sure",
    bonusType: "none",
    bonusPercent: 0,
    bonusAmountAnnual: 0,
    signOnBonus: 0,
    relocationBonus: 0,
    hasThirteenthMonth: false,
    equityNotes: "",
    pensionEmployerDescription: "",
    travelAllowanceMonthly: 0,
    wfhAllowanceMonthly: 0,
    equipmentProvided: "not_sure",
    trainingBudgetAnnual: 0,
    extraLeaveDays: 0,
    healthWellnessAnnual: 0,
    mobilityAllowanceMonthly: 0,
    sickPayBeyondStandard: "not_sure",
    parentalFamilySupport: "not_sure",
    visaSponsorship: "not_sure",
    thirtyPercentSupport: "not_mentioned",
    relocationSupport: "none",
    relocationRepayment: "not_sure",
    taxFilingSupport: "not_sure",
    temporaryHousingSupport: "not_sure",
    movingBudget: "not_sure",
    probationMonths: 2,
    noticeMonthsEmployee: 1,
    nonCompetePresent: "not_sure",
    sideJobRestrictions: "not_sure",
    overtimeIncludedInSalary: "not_sure",
    fixedTermRenewalLikely: "not_sure",
    handbookHeavy: "not_sure",
    hybridPolicyFixed: "not_sure",
    homeOrTargetCity: "",
    commuteDaysPerWeek: 2,
    commuteMode: "public_transport",
    useCityRentAssumptions: true,
    targetRentBudgetMonthly: null,
    uploadedOfferLetterText: "",
    uploadedOfferLetterFileName: "",
  };
}

export function defaultFormState(): JobOfferComparisonFormState {
  const base = emptyOffer();
  return {
    mode: "compare_two",
    includeOfferC: false,
    offers: {
      A: { id: "A", label: "Offer A", expanded: true, offer: { ...base, employerName: "Employer A" } },
      B: { id: "B", label: "Offer B", expanded: true, offer: { ...base, employerName: "Employer B", city: "Rotterdam", grossSalary: 62_000 } },
      C: { id: "C", label: "Offer C", expanded: false, offer: { ...base, employerName: "Employer C" } },
    },
    priorities: { ...BALANCED_PRIORITIES },
  };
}
