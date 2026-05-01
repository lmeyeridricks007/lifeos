import { cn } from "@/lib/cn";
import type { ScoreDimension } from "@/src/lib/tools/bank-comparison/types";

/** Shared tool card chrome — matches bank comparison / copilot tool surfaces */
export const BANK_TOOL_CARD =
  "rounded-2xl border border-copilot-primary/12 bg-white p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] sm:p-6";

export const BANK_TOOL_LABEL = "text-xs font-normal uppercase tracking-[0.12em] text-copilot-text-muted";

export const BANK_TOOL_FIELD = "mt-2";

export const bankToolCardClass = (extra?: string) => cn(BANK_TOOL_CARD, extra);

export const DIM_LABELS: Record<ScoreDimension, string> = {
  localIntegrationScore: "Everyday banking in the Netherlands",
  onboardingScore: "Getting the account open",
  costScore: "Typical monthly cost",
  internationalTransferScore: "Sending money abroad",
  freelancerScore: "Freelance or small business",
  familyScore: "Family or shared accounts",
  supportScore: "Getting help from the bank",
  digitalExperienceScore: "App and online banking",
  longTermFitScore: "Staying long term",
};

export const WEIGHT_LABELS: Record<string, string> = {
  localIntegration: "Salary, rent, and iDEAL in the Netherlands",
  onboarding: "How easy it is to open",
  cost: "Monthly cost",
  internationalTransfer: "Sending money abroad and currencies",
  freelancer: "Freelance or business banking",
  family: "Family or joint accounts",
  support: "Phone, branch, or English help",
  digitalExperience: "Banking on your phone",
  longTermFit: "Staying with one bank for years",
};
