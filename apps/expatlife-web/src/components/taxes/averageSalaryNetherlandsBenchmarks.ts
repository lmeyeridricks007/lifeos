/**
 * Indicative gross salary ranges for editorial planning on the average salary guide.
 * Not payroll output, not CBS microdata, and not offer guarantees.
 *
 * Last validated: June 2026 against CBS wage statistics (2024 full-time cohort),
 * CPB modal income 2026, IND HSM thresholds, and IT sector guides (e.g. ICT Recruiter 2026).
 * Macro national figures reflect all workers; industry/role/city bands skew toward
 * employed knowledge workers and expat-heavy sectors (often above national median).
 */
export const AVERAGE_SALARY_BENCHMARKS_AS_OF = "2026" as const;

export const AVERAGE_SALARY_BENCHMARKS_DISCLAIMER =
  "Ranges are gross (bruto) annual salaries for employed professionals unless noted otherwise. Figures exclude holiday allowance (vakantiegeld) unless explicitly included. They are orientation bands for expats comparing offers — not CBS guarantees, not market surveys, and not individual payroll outcomes.";

export type SalaryBenchmarkRow = {
  id: string;
  label: string;
  grossAnnualMin: number;
  grossAnnualMax: number;
  grossMonthlyMin?: number;
  grossMonthlyMax?: number;
  indicativeNetAnnualMin?: number;
  indicativeNetAnnualMax?: number;
  note?: string;
};

export type SalaryBenchmarkSection = {
  title: string;
  subtitle?: string;
  rows: SalaryBenchmarkRow[];
};

/** CBS-oriented national anchors (full-time employee gross, rounded planning bands). */
export const nationalSalaryBenchmarks: SalaryBenchmarkSection = {
  title: "Netherlands salary snapshot (national)",
  subtitle: "Macro anchors from official wage statistics and common labour-market references. Median is usually more representative than mean.",
  rows: [
    {
      id: "median-full-time",
      label: "Median gross (full-time employee)",
      grossAnnualMin: 44_000,
      grossAnnualMax: 49_000,
      grossMonthlyMin: 3_670,
      grossMonthlyMax: 4_080,
      indicativeNetAnnualMin: 29_000,
      indicativeNetAnnualMax: 34_000,
      note: "CBS median ~€43.5k (2023); CPB modal ~€48k/yr incl. holiday pay — compare like-for-like on your contract.",
    },
    {
      id: "average-full-time",
      label: "Average gross (full-time employee)",
      grossAnnualMin: 52_000,
      grossAnnualMax: 58_000,
      grossMonthlyMin: 4_330,
      grossMonthlyMax: 4_830,
      indicativeNetAnnualMin: 33_000,
      indicativeNetAnnualMax: 40_000,
      note: "CBS full-time standardized income ~€53k (2024), rising with wage growth — mean is pulled up by top earners.",
    },
    {
      id: "minimum-wage-ft",
      label: "Minimum wage (full-time equivalent)",
      grossAnnualMin: 29_000,
      grossAnnualMax: 33_000,
      grossMonthlyMin: 2_420,
      grossMonthlyMax: 2_750,
      indicativeNetAnnualMin: 23_000,
      indicativeNetAnnualMax: 27_000,
      note: "~€14.71/hr (21+) in 2026; amounts vary by age and hours. Professional roles sit well above this.",
    },
    {
      id: "holiday-allowance",
      label: "Holiday allowance (typical add-on)",
      grossAnnualMin: 0,
      grossAnnualMax: 0,
      note: "Often ~8% on top of annual salary if not already included in the offer figure — confirm contract wording.",
    },
  ],
};

export const experienceSalaryBenchmarks: SalaryBenchmarkSection = {
  title: "Gross salary by experience level",
  subtitle: "Typical employed professional bands in the Netherlands. Niche skills, English-language roles and international employers often pay toward the top of a band.",
  rows: [
    {
      id: "entry",
      label: "Entry-level (0–2 years)",
      grossAnnualMin: 36_000,
      grossAnnualMax: 50_000,
      indicativeNetAnnualMin: 26_000,
      indicativeNetAnnualMax: 35_000,
      note: "Tech and engineering starters in Randstad often land €42k–€55k+ gross (excl. holiday pay).",
    },
    {
      id: "mid-junior",
      label: "Junior / mid (2–5 years)",
      grossAnnualMin: 45_000,
      grossAnnualMax: 65_000,
      indicativeNetAnnualMin: 32_000,
      indicativeNetAnnualMax: 44_000,
    },
    {
      id: "mid",
      label: "Mid-level (5–8 years)",
      grossAnnualMin: 55_000,
      grossAnnualMax: 80_000,
      indicativeNetAnnualMin: 38_000,
      indicativeNetAnnualMax: 52_000,
    },
    {
      id: "senior",
      label: "Senior (8–12 years)",
      grossAnnualMin: 72_000,
      grossAnnualMax: 105_000,
      indicativeNetAnnualMin: 46_000,
      indicativeNetAnnualMax: 66_000,
    },
    {
      id: "manager",
      label: "Manager / lead",
      grossAnnualMin: 85_000,
      grossAnnualMax: 130_000,
      indicativeNetAnnualMin: 52_000,
      indicativeNetAnnualMax: 78_000,
      note: "Team scope, bonus and pension design move outcomes materially.",
    },
    {
      id: "director",
      label: "Director / specialist expert",
      grossAnnualMin: 110_000,
      grossAnnualMax: 175_000,
      indicativeNetAnnualMin: 62_000,
      indicativeNetAnnualMax: 102_000,
      note: "Top packages often include bonus, equity and expat-specific benefits.",
    },
  ],
};

export const industrySalaryBenchmarks: SalaryBenchmarkSection = {
  title: "Gross salary by industry",
  subtitle: "Mid-career employed professional orientation bands. Sales and consulting may include variable pay on top of base salary.",
  rows: [
    { id: "tech", label: "Technology & software", grossAnnualMin: 60_000, grossAnnualMax: 105_000, indicativeNetAnnualMin: 38_000, indicativeNetAnnualMax: 64_000, note: "Medior developers often €58k–€76k+; seniors and Amsterdam intl. firms higher." },
    { id: "engineering", label: "Engineering & manufacturing", grossAnnualMin: 52_000, grossAnnualMax: 92_000, indicativeNetAnnualMin: 36_000, indicativeNetAnnualMax: 56_000 },
    { id: "finance", label: "Finance & fintech", grossAnnualMin: 58_000, grossAnnualMax: 120_000, indicativeNetAnnualMin: 38_000, indicativeNetAnnualMax: 70_000 },
    { id: "consulting", label: "Consulting & professional services", grossAnnualMin: 55_000, grossAnnualMax: 100_000, indicativeNetAnnualMin: 36_000, indicativeNetAnnualMax: 62_000 },
    { id: "healthcare", label: "Healthcare (qualified roles)", grossAnnualMin: 48_000, grossAnnualMax: 82_000, indicativeNetAnnualMin: 32_000, indicativeNetAnnualMax: 52_000, note: "CAO scales and public employers can cap negotiation flexibility." },
    { id: "education", label: "Education & research", grossAnnualMin: 40_000, grossAnnualMax: 62_000, indicativeNetAnnualMin: 28_000, indicativeNetAnnualMax: 42_000 },
    { id: "logistics", label: "Logistics & supply chain", grossAnnualMin: 42_000, grossAnnualMax: 72_000, indicativeNetAnnualMin: 30_000, indicativeNetAnnualMax: 48_000 },
    { id: "marketing", label: "Marketing & creative", grossAnnualMin: 45_000, grossAnnualMax: 78_000, indicativeNetAnnualMin: 31_000, indicativeNetAnnualMax: 50_000 },
    { id: "sales", label: "Sales (base salary)", grossAnnualMin: 48_000, grossAnnualMax: 85_000, indicativeNetAnnualMin: 32_000, indicativeNetAnnualMax: 54_000, note: "OTE / commission can sit on top of base." },
    { id: "legal", label: "Legal & compliance", grossAnnualMin: 58_000, grossAnnualMax: 110_000, indicativeNetAnnualMin: 38_000, indicativeNetAnnualMax: 68_000 },
  ],
};

export const citySalaryBenchmarks: SalaryBenchmarkSection = {
  title: "Gross salary by city",
  subtitle: "Knowledge-worker orientation bands (not city-wide averages). Compare with local rent using cost-of-living and rent tools.",
  rows: [
    { id: "amsterdam", label: "Amsterdam", grossAnnualMin: 58_000, grossAnnualMax: 100_000, indicativeNetAnnualMin: 38_000, indicativeNetAnnualMax: 62_000, note: "Often +5–15% vs national for knowledge workers; housing absorbs much of the premium." },
    { id: "rotterdam", label: "Rotterdam", grossAnnualMin: 48_000, grossAnnualMax: 82_000, indicativeNetAnnualMin: 32_000, indicativeNetAnnualMax: 52_000 },
    { id: "the-hague", label: "The Hague", grossAnnualMin: 50_000, grossAnnualMax: 86_000, indicativeNetAnnualMin: 34_000, indicativeNetAnnualMax: 54_000, note: "Government, NGOs and international organisations are strong locally." },
    { id: "utrecht", label: "Utrecht", grossAnnualMin: 52_000, grossAnnualMax: 90_000, indicativeNetAnnualMin: 35_000, indicativeNetAnnualMax: 56_000 },
    { id: "eindhoven", label: "Eindhoven", grossAnnualMin: 52_000, grossAnnualMax: 95_000, indicativeNetAnnualMin: 35_000, indicativeNetAnnualMax: 58_000, note: "Brainport tech/semiconductor roles; strong medior engineering pay." },
    { id: "leiden", label: "Leiden", grossAnnualMin: 48_000, grossAnnualMax: 82_000, indicativeNetAnnualMin: 32_000, indicativeNetAnnualMax: 52_000 },
    { id: "delft", label: "Delft", grossAnnualMin: 48_000, grossAnnualMax: 85_000, indicativeNetAnnualMin: 32_000, indicativeNetAnnualMax: 54_000 },
  ],
};

export const roleSalaryBenchmarks: SalaryBenchmarkSection = {
  title: "Gross salary by role (common expat jobs)",
  rows: [
    { id: "swe", label: "Software engineer", grossAnnualMin: 60_000, grossAnnualMax: 95_000, indicativeNetAnnualMin: 38_000, indicativeNetAnnualMax: 58_000, note: "Medior (3–7 yrs) market often €60k–€80k base; Amsterdam intl. firms higher." },
    { id: "data", label: "Data analyst / scientist", grossAnnualMin: 58_000, grossAnnualMax: 95_000, indicativeNetAnnualMin: 38_000, indicativeNetAnnualMax: 58_000 },
    { id: "pm", label: "Product manager", grossAnnualMin: 65_000, grossAnnualMax: 100_000, indicativeNetAnnualMin: 40_000, indicativeNetAnnualMax: 62_000 },
    { id: "fin-analyst", label: "Financial analyst", grossAnnualMin: 52_000, grossAnnualMax: 80_000, indicativeNetAnnualMin: 34_000, indicativeNetAnnualMax: 52_000 },
    { id: "mech-eng", label: "Mechanical / industrial engineer", grossAnnualMin: 52_000, grossAnnualMax: 82_000, indicativeNetAnnualMin: 36_000, indicativeNetAnnualMax: 54_000 },
    { id: "ux", label: "UX / product designer", grossAnnualMin: 48_000, grossAnnualMax: 78_000, indicativeNetAnnualMin: 32_000, indicativeNetAnnualMax: 50_000 },
    { id: "consultant", label: "Management consultant", grossAnnualMin: 58_000, grossAnnualMax: 100_000, indicativeNetAnnualMin: 38_000, indicativeNetAnnualMax: 62_000 },
    { id: "account-mgr", label: "Account manager (B2B)", grossAnnualMin: 45_000, grossAnnualMax: 72_000, indicativeNetAnnualMin: 30_000, indicativeNetAnnualMax: 48_000 },
    { id: "research", label: "Researcher / postdoc (university)", grossAnnualMin: 38_000, grossAnnualMax: 58_000, indicativeNetAnnualMin: 28_000, indicativeNetAnnualMax: 40_000, note: "University scales differ from corporate tech pay." },
    { id: "devops", label: "DevOps / platform engineer", grossAnnualMin: 65_000, grossAnnualMax: 100_000, indicativeNetAnnualMin: 40_000, indicativeNetAnnualMax: 62_000 },
  ],
};

export const goodSalaryBenchmarks: SalaryBenchmarkSection = {
  title: "What counts as a “good” gross salary?",
  subtitle: "Household comfort bands — gross annual, before tax. Same number can feel different in Amsterdam vs Groningen.",
  rows: [
    {
      id: "single-randstad",
      label: "Single professional (Amsterdam / Randstad)",
      grossAnnualMin: 60_000,
      grossAnnualMax: 82_000,
      indicativeNetAnnualMin: 38_000,
      indicativeNetAnnualMax: 52_000,
      note: "Many singles target €60k+ gross for workable private rental in Amsterdam without extreme budgeting.",
    },
    {
      id: "single-other",
      label: "Single professional (other cities)",
      grossAnnualMin: 45_000,
      grossAnnualMax: 62_000,
      indicativeNetAnnualMin: 30_000,
      indicativeNetAnnualMax: 42_000,
    },
    {
      id: "couple",
      label: "Couple (one primary earner)",
      grossAnnualMin: 70_000,
      grossAnnualMax: 100_000,
      indicativeNetAnnualMin: 44_000,
      indicativeNetAnnualMax: 62_000,
      note: "Dual income lowers pressure; housing size still dominates.",
    },
    {
      id: "family",
      label: "Family with children (Randstad)",
      grossAnnualMin: 90_000,
      grossAnnualMax: 130_000,
      indicativeNetAnnualMin: 54_000,
      indicativeNetAnnualMax: 78_000,
      note: "Childcare and school choices often matter more than small gross differences.",
    },
  ],
};

export const scenarioSalaryBenchmarks: SalaryBenchmarkSection = {
  title: "Common salary scenarios",
  rows: [
    {
      id: "40k",
      label: "€40,000 gross",
      grossAnnualMin: 40_000,
      grossAnnualMax: 40_000,
      grossMonthlyMin: 3_330,
      grossMonthlyMax: 3_330,
      indicativeNetAnnualMin: 29_000,
      indicativeNetAnnualMax: 33_000,
      note: "Workable for some singles outside core Randstad; tight in Amsterdam once rent is included.",
    },
    {
      id: "50k",
      label: "€50,000 gross",
      grossAnnualMin: 50_000,
      grossAnnualMax: 50_000,
      grossMonthlyMin: 4_170,
      grossMonthlyMax: 4_170,
      indicativeNetAnnualMin: 34_000,
      indicativeNetAnnualMax: 39_000,
      note: "Near national median gross; comfort depends heavily on city and housing.",
    },
    {
      id: "70k",
      label: "€70,000 gross",
      grossAnnualMin: 70_000,
      grossAnnualMax: 70_000,
      grossMonthlyMin: 5_830,
      grossMonthlyMax: 5_830,
      indicativeNetAnnualMin: 46_000,
      indicativeNetAnnualMax: 52_000,
      note: "Solid for many single professionals in Amsterdam; families still need wider budget planning.",
    },
    {
      id: "100k",
      label: "€100,000 gross",
      grossAnnualMin: 100_000,
      grossAnnualMax: 100_000,
      grossMonthlyMin: 8_330,
      grossMonthlyMax: 8_330,
      indicativeNetAnnualMin: 60_000,
      indicativeNetAnnualMax: 70_000,
      note: "Senior / specialist territory; compare total compensation, not base alone.",
    },
  ],
};

/** IND highly skilled migrant minimums (gross monthly, excluding holiday allowance) — verify on ind.nl. */
export const hsmSalaryThresholds: SalaryBenchmarkSection = {
  title: "Highly skilled migrant minimum salaries (IND)",
  subtitle: "Legal minimum gross monthly thresholds for the route — not market rates. With 8% holiday allowance, multiply annual equivalents by ~1.08.",
  rows: [
    {
      id: "hsm-30plus",
      label: "Age 30 and over",
      grossAnnualMin: 71_300,
      grossAnnualMax: 71_300,
      grossMonthlyMin: 5_942,
      grossMonthlyMax: 5_942,
      note: "Minimum only — many tech and finance offers are higher.",
    },
    {
      id: "hsm-under30",
      label: "Under 30",
      grossAnnualMin: 52_300,
      grossAnnualMax: 52_300,
      grossMonthlyMin: 4_357,
      grossMonthlyMax: 4_357,
    },
    {
      id: "hsm-reduced",
      label: "Reduced criterion (specific cases)",
      grossAnnualMin: 37_500,
      grossAnnualMax: 37_500,
      grossMonthlyMin: 3_122,
      grossMonthlyMax: 3_122,
      note: "Applies only when official conditions are met.",
    },
  ],
};

export const averageVsMedianBenchmarks: SalaryBenchmarkSection = {
  title: "Average vs median (national)",
  subtitle: "Why two “national averages” can tell different stories.",
  rows: [
    {
      id: "avg",
      label: "Mean (average) gross",
      grossAnnualMin: 52_000,
      grossAnnualMax: 58_000,
      note: "Sensitive to executives and high earners in the calculation.",
    },
    {
      id: "med",
      label: "Median gross",
      grossAnnualMin: 44_000,
      grossAnnualMax: 49_000,
      note: "Half of workers earn less, half earn more — often better for “typical” comparisons.",
    },
    {
      id: "gap",
      label: "Typical gap (avg − median)",
      grossAnnualMin: 5_000,
      grossAnnualMax: 10_000,
      note: "If the gap is large, headline “average salary” articles may overstate what most people earn.",
    },
  ],
};

export const averageSalaryNetherlandsBenchmarks = {
  asOf: AVERAGE_SALARY_BENCHMARKS_AS_OF,
  disclaimer: AVERAGE_SALARY_BENCHMARKS_DISCLAIMER,
  national: nationalSalaryBenchmarks,
  experience: experienceSalaryBenchmarks,
  industry: industrySalaryBenchmarks,
  cities: citySalaryBenchmarks,
  roles: roleSalaryBenchmarks,
  goodSalary: goodSalaryBenchmarks,
  scenarios: scenarioSalaryBenchmarks,
  hsm: hsmSalaryThresholds,
  averageVsMedian: averageVsMedianBenchmarks,
} as const;
