/**
 * Re-exports for `page.tsx` metadata and SEO.
 * Source of truth: `./config/` (assembled page meta + `config/content/*.config.ts` modules)
 */
import { moveResidencePermitsPageMeta } from "./config";

const meta = moveResidencePermitsPageMeta;

export const RESIDENCE_PERMITS_CANONICAL = meta.canonicalPath;
export const PAGE_HERO_SUBTITLE = meta.hero.subtitle;
