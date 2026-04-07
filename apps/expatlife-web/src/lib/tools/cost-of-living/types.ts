export type {
  ColCity,
  ColInput,
  ColLineItem,
  ColNeighborhood,
  ColResult,
  ColCurrency,
} from "@/src/lib/calculators/cost-of-living/types";

import type { ColInput, ColLineItem, ColResult } from "@/src/lib/calculators/cost-of-living/types";

/** @deprecated Prefer ColInput from calculators. */
export type CostOfLivingInput = ColInput;
/** @deprecated Prefer ColResult. */
export type CostOfLivingResult = ColResult;
/** @deprecated Prefer ColLineItem. */
export type CostOfLivingLineItem = ColLineItem;
