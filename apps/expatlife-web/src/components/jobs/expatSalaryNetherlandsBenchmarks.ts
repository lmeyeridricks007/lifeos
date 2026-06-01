/**
 * Expat salary orientation bands — reuses maintainable average-salary benchmark tables.
 * Not payroll output, not CBS microdata, and not offer guarantees.
 */

export {
  AVERAGE_SALARY_BENCHMARKS_AS_OF,
  AVERAGE_SALARY_BENCHMARKS_DISCLAIMER,
  averageSalaryNetherlandsBenchmarks,
  type SalaryBenchmarkRow,
  type SalaryBenchmarkSection,
} from "@/src/components/taxes/averageSalaryNetherlandsBenchmarks";

export const EXPAT_SALARY_BENCHMARKS_DISCLAIMER =
  "Expat salary ranges vary widely by industry, city, employer and tax setup. Figures below are gross (bruto) planning bands for orientation — not guarantees, not IND minimums unless labelled, and not individual payroll outcomes. Verify immigration thresholds on ind.nl and wage statistics on cbs.nl." as const;
