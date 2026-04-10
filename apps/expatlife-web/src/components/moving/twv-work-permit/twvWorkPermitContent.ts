import { twvWorkPermitPageMeta } from "./config/twvWorkPermit.config";

const meta = twvWorkPermitPageMeta;
const plainHeroSubtitle = meta.hero.subtitle.replace(/\*\*/g, "");

export const TWV_WORK_PERMIT_CANONICAL = meta.canonicalPath;
export const PAGE_HERO_SUBTITLE = plainHeroSubtitle;
