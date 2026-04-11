import { resigningJobNlPageMeta } from "./config/resigningJobsNetherlands.config";

const meta = resigningJobNlPageMeta;
const plainHeroSubtitle = meta.hero.subtitle.replace(/\*\*/g, "");

export const RESIGNING_JOB_NETHERLANDS_CANONICAL = meta.canonicalPath;
export const PAGE_HERO_SUBTITLE = plainHeroSubtitle;

/** Short meta / Open Graph description (hero subtitle is longer and richer on-page). */
export const RESIGNING_JOB_NETHERLANDS_SEO_DESCRIPTION =
  "Notice, contract, stay, pay, rent, and coverage — sequence what to check before you resign from a job in the Netherlands. Move-pillar guide with tools and next links.";
