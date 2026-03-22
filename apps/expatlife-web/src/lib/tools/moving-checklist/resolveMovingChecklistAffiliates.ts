/**
 * Resolve affiliate context and stage-aware title for the moving checklist.
 * Used by the API or client to request the right placement and show a contextual block title.
 */

import type { MovingChecklistInputExtended } from "./types";

export type AffiliateMappingConfig = {
  rules?: Array<{
    condition: Record<string, string | boolean>;
    prioritiseCategories?: string[];
    allowCategories?: string[];
    emphasise?: string;
    note?: string;
  }>;
  stageAwareTitles?: Record<string, string>;
};

export type ResolvedAffiliateContext = {
  /** Categories to prioritise for this user (e.g. international-transfer, housing) */
  prioritiseCategories: string[];
  /** Categories to allow (e.g. banking for job-offer) */
  allowCategories: string[];
  /** Optional emphasis hint (e.g. document and relocation support) */
  emphasise?: string;
  /** Block title for the current stage */
  blockTitle: string;
  /** Simple context for API: arrivalStage, household, jobStatus, nationalityRegion */
  apiContext: {
    arrivalStage?: string;
    household?: string;
    jobStatus?: string;
    nationalityRegion?: string;
    largeMoneyTransfer?: boolean;
    housingReadiness?: string;
  };
};

const DEFAULT_TITLES: Record<string, string> = {
  "before-move": "Before you move: useful services",
  "arriving-soon": "Your next practical prep steps",
  "already-arrived": "Next steps after arrival",
};

/**
 * Build affiliate context and block title from input and affiliate-mapping config.
 */
export function resolveMovingChecklistAffiliates(
  input: MovingChecklistInputExtended,
  config: AffiliateMappingConfig
): ResolvedAffiliateContext {
  const prioritiseCategories: string[] = [];
  const allowCategories: string[] = [];
  let emphasise: string | undefined;

  const rules = config.rules ?? [];
  for (const rule of rules) {
    let match = true;
    for (const [key, value] of Object.entries(rule.condition)) {
      const inputVal = (input as Record<string, unknown>)[key];
      if (inputVal !== value) {
        match = false;
        break;
      }
    }
    if (!match) continue;

    if (rule.prioritiseCategories?.length) prioritiseCategories.push(...rule.prioritiseCategories);
    if (rule.allowCategories?.length) allowCategories.push(...rule.allowCategories);
    if (rule.emphasise) emphasise = rule.emphasise;
  }

  const stageTitles = config.stageAwareTitles ?? DEFAULT_TITLES;
  const blockTitle = stageTitles[input.stage] ?? DEFAULT_TITLES["before-move"];

  const stageMap: Record<string, string> = {
    "before-move": "before",
    "arriving-soon": "after",
    "already-arrived": "after",
  };

  return {
    prioritiseCategories: Array.from(new Set(prioritiseCategories)),
    allowCategories: Array.from(new Set(allowCategories)),
    emphasise,
    blockTitle,
    apiContext: {
      arrivalStage: stageMap[input.stage],
      household: input.household,
      jobStatus: input.employment,
      nationalityRegion: input.region,
      largeMoneyTransfer: input.largeMoneyTransfer,
      housingReadiness: input.housingReadiness,
    },
  };
}
