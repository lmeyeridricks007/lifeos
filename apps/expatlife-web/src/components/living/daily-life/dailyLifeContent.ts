/**
 * Back-compat re-exports for modules that predate the config split.
 * Prefer importing from `./config/livingDailyLife.config` in new code.
 */

export type { LivingDailyLifeFaqItem as DailyLifeFaqItem } from "./config/livingDailyLife.types";
import {
  livingDailyLifeFaq as DAILY_LIFE_FAQ_ITEMS,
  livingDailyLifeMeta,
  livingDailyLifeSectionNav,
} from "./config/livingDailyLife.config";

export { DAILY_LIFE_FAQ_ITEMS, livingDailyLifeMeta };
export { livingDailyLifeSectionNav as DAILY_LIFE_SECTION_NAV };

export const DAILY_LIFE_DATE_MODIFIED = livingDailyLifeMeta.dateModified;
