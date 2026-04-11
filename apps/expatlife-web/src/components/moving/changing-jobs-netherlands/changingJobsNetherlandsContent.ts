import { changingJobsNlPageMeta } from "./config/changingJobsNetherlands.config";

const meta = changingJobsNlPageMeta;
const plainHeroSubtitle = meta.hero.subtitle.replace(/\*\*/g, "");

export const CHANGING_JOBS_NETHERLANDS_CANONICAL = meta.canonicalPath;
export const PAGE_HERO_SUBTITLE = plainHeroSubtitle;
