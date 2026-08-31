import {
  DUTCH_CITIZENSHIP_PATH,
  INBURGERING_PATH,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

/** Shared routes for the HSM job-loss / job-search cluster (no standalone URL). */
export const HSM_VISA_GUIDE_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const HSM_JOB_LOSS_SECTION_ID = "if-you-lose-your-hsm-job" as const;
export const HSM_JOB_LOSS_ANCHOR = `#${HSM_JOB_LOSS_SECTION_ID}` as const;
export const HSM_VISA_JOB_LOSS_HREF = `${HSM_VISA_GUIDE_PATH}${HSM_JOB_LOSS_ANCHOR}` as const;

export const LAYOFFS_NL_PATH = "/netherlands/moving/layoffs-netherlands/" as const;
export const CHANGING_JOBS_NL_PATH = "/netherlands/moving/changing-jobs-netherlands/" as const;
export const VISA_CHECKER_PATH = "/netherlands/visa-checker/" as const;
export const FIRST_90_DAYS_TOOL_PATH = "/netherlands/moving/tools/first-90-days/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;

/** Editorial go-live for the IND 22 May 2026 job-search cluster refresh. */
export const HSM_JOB_LOSS_CLUSTER_PUBLISH_DATE = "2026-08-30" as const;

export const hsmJobLossNextSteps = [
  {
    href: CHANGING_JOBS_NL_PATH,
    label: "Changing jobs in the Netherlands",
    description: "When you have a new sponsor offer — contracts, timing, and admin.",
  },
  {
    href: VISA_CHECKER_PATH,
    label: "Visa checker",
    description: "If you need a different route while searching.",
  },
  {
    href: FIRST_90_DAYS_TOOL_PATH,
    label: "First 90 days planner",
    description: "Stabilise admin if your search overlaps with first-month setup.",
  },
  {
    href: THIRTY_PERCENT_RULING_PATH,
    label: "30% ruling guide",
    description: "Employer change can affect payroll and ruling continuity — verify with HR.",
  },
  {
    href: PERMANENT_RESIDENCE_PATH,
    label: "Permanent residence guide",
    description: "How lawful HSM years can count toward a separate IND permanent residence application.",
  },
  {
    href: INBURGERING_PATH,
    label: "Inburgering guide",
    description: "Integration exams and civic requirements before PR or citizenship.",
  },
  {
    href: DUTCH_CITIZENSHIP_PATH,
    label: "Dutch citizenship guide",
    description: "Naturalisation vs option after qualifying lawful stay.",
  },
] as const;
