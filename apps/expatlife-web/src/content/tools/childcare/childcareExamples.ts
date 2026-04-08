import { DEFAULT_CHILDCARE_INPUT, sanitizeChildcareInput } from "@/src/lib/tools/childcare/childcareValidation";
import type { ChildcareChildInput, ChildcareEstimatorInput } from "@/src/types/tools/childcare";

export type ChildcareWorkedExample = {
  id: string;
  title: string;
  description: string;
  input: ChildcareEstimatorInput;
};

function child(p: Partial<ChildcareChildInput> & Pick<ChildcareChildInput, "id" | "label">): ChildcareChildInput {
  return sanitizeChildcareInput({
    ...DEFAULT_CHILDCARE_INPUT,
    children: [{ ...DEFAULT_CHILDCARE_INPUT.children[0], ...p }],
  }).children[0]!;
}

function scenario(partial: Partial<ChildcareEstimatorInput> & { children: ChildcareChildInput[] }): ChildcareEstimatorInput {
  return sanitizeChildcareInput({ ...DEFAULT_CHILDCARE_INPUT, ...partial });
}

export const CHILDCARE_WORKED_EXAMPLES: ChildcareWorkedExample[] = [
  {
    id: "ams-toddler-3d",
    title: "Amsterdam — toddler, 3 days daycare",
    description:
      "Typical expat starter pattern: couple, standard model tier, cap-aware benefit. Pair with the Dutch net salary calculator to see if gross offers still work once childcare is net of subsidy.",
    input: scenario({
      city: "amsterdam",
      children: [
        child({
          id: "c1",
          label: "Toddler",
          ageBand: "1-3",
          schoolAge: false,
          careType: "daycare",
          rateMode: "model",
          daysPerWeek: 3,
          registrationFeeEur: 100,
          mealsSuppliesMonthlyEur: 25,
        }),
      ],
      benefit: {
        ...DEFAULT_CHILDCARE_INPUT.benefit,
        annualHouseholdIncomeEur: 92_000,
        workingParentsCount: 2,
        workingParentsStatus: "both",
      },
    }),
  },
  {
    id: "utrecht-5d",
    title: "Utrecht — toddler, 5 days daycare",
    description:
      "Full-week cover: watch monthly hours approach the 230 h/mo reimbursable ceiling in the model. Compare cities with the Netherlands city comparison tool if commute or rent trade-offs matter.",
    input: scenario({
      city: "utrecht",
      children: [
        child({
          id: "c1",
          label: "Toddler",
          ageBand: "1-3",
          careType: "daycare",
          daysPerWeek: 5,
          registrationFeeEur: 50,
        }),
      ],
      benefit: { ...DEFAULT_CHILDCARE_INPUT.benefit, annualHouseholdIncomeEur: 110_000 },
    }),
  },
  {
    id: "hague-two-kids-daycare-bso",
    title: "The Hague — daycare + BSO siblings",
    description:
      "Younger child in daycare, older in after-school BSO with school-week hours. Good template for mixed-age families; holiday weeks often need extra planning beyond flat monthly hours.",
    input: scenario({
      city: "the-hague",
      children: [
        child({
          id: "c1",
          label: "Younger",
          ageBand: "1-3",
          careType: "daycare",
          daysPerWeek: 4,
          registrationFeeEur: 75,
        }),
        child({
          id: "c2",
          label: "School-age",
          ageBand: "8-12",
          schoolAge: true,
          careType: "bso",
          daysPerWeek: 4,
          scheduleMode: "school_weeks_only",
          registrationFeeEur: 50,
          mealsSuppliesMonthlyEur: 15,
          holidayCareReserveMonthlyEur: 40,
        }),
      ],
      benefit: { ...DEFAULT_CHILDCARE_INPUT.benefit, annualHouseholdIncomeEur: 105_000 },
    }),
  },
  {
    id: "hague-daycare-3d-model",
    title: "The Hague — 3 days daycare (model rate)",
    description:
      "Load this and the gastouder example below to compare the same city and schedule with a different care type and official hourly cap. Net out-of-pocket matters more than gross invoice alone.",
    input: scenario({
      city: "the-hague",
      children: [
        child({
          id: "c1",
          label: "Toddler",
          ageBand: "1-3",
          careType: "daycare",
          rateMode: "model",
          daysPerWeek: 3,
          registrationFeeEur: 60,
        }),
      ],
      benefit: { ...DEFAULT_CHILDCARE_INPUT.benefit, annualHouseholdIncomeEur: 68_000 },
    }),
  },
  {
    id: "hague-gastouder-3d-manual",
    title: "The Hague — 3 days gastouder (quoted hourly)",
    description:
      "Manual hourly rate from a gastouder quote. Compare to the 3-day daycare preset: caps and anchors differ. Always confirm contract hours and agency rules with your provider.",
    input: scenario({
      city: "the-hague",
      children: [
        child({
          id: "c1",
          label: "Toddler",
          ageBand: "1-3",
          careType: "gastouder",
          rateMode: "manual",
          manualHourlyRateEur: 8.2,
          daysPerWeek: 3,
          registrationFeeEur: 60,
        }),
      ],
      benefit: { ...DEFAULT_CHILDCARE_INPUT.benefit, annualHouseholdIncomeEur: 68_000 },
    }),
  },
  {
    id: "utrecht-4d-daycare",
    title: "Utrecht — 4 days daycare (extra work day)",
    description:
      "Illustrates adding another contracted day when one parent moves from three to four office days. Gross rises, but estimated benefit and net cash move too — run scenario comparison in the tool.",
    input: scenario({
      city: "utrecht",
      children: [
        child({
          id: "c1",
          label: "Toddler",
          ageBand: "1-3",
          careType: "daycare",
          rateMode: "model",
          daysPerWeek: 4,
          registrationFeeEur: 85,
          mealsSuppliesMonthlyEur: 20,
        }),
      ],
      benefit: {
        ...DEFAULT_CHILDCARE_INPUT.benefit,
        annualHouseholdIncomeEur: 88_000,
        workingParentsCount: 2,
        workingParentsStatus: "both",
      },
    }),
  },
  {
    id: "school-transition-bso",
    title: "School-age — BSO after daycare years",
    description:
      "Child in primary-school ages on BSO during school weeks, with a small holiday reserve. Hourly caps are lower than daycare, but camps and closures can still bite — this is a planning baseline only.",
    input: scenario({
      city: "amsterdam",
      children: [
        child({
          id: "c1",
          label: "Primary + BSO",
          ageBand: "4-7",
          schoolAge: true,
          careType: "bso",
          daysPerWeek: 4,
          scheduleMode: "school_weeks_only",
          registrationFeeEur: 45,
          mealsSuppliesMonthlyEur: 12,
          holidayCareReserveMonthlyEur: 55,
          backupCareReserveMonthlyEur: 20,
        }),
      ],
      benefit: { ...DEFAULT_CHILDCARE_INPUT.benefit, annualHouseholdIncomeEur: 96_000 },
    }),
  },
  {
    id: "second-parent-work",
    title: "Second parent returning to work",
    description:
      "Both parents working with household net filled in for budget share hints. Cross-check eligibility assumptions if hours are still in flux — benefit rules are strict about work or study time.",
    input: scenario({
      city: "amsterdam",
      workDecision: {
        householdNetMonthlyEur: 5_200,
        secondParentReturningToWork: true,
        comfortLevel: "balanced",
      },
      children: [
        child({
          id: "c1",
          label: "Baby / toddler",
          ageBand: "0-1",
          careType: "daycare",
          daysPerWeek: 4,
          registrationFeeEur: 125,
          mealsSuppliesMonthlyEur: 20,
          backupCareReserveMonthlyEur: 25,
        }),
      ],
      benefit: { ...DEFAULT_CHILDCARE_INPUT.benefit, annualHouseholdIncomeEur: 118_000 },
    }),
  },
];
