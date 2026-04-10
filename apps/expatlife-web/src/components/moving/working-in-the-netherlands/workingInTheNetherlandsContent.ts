import { workingInTheNetherlandsPageMeta } from "./config/workingInTheNetherlands.config";

const meta = workingInTheNetherlandsPageMeta;
const plainHeroSubtitle = meta.hero.subtitle.replace(/\*\*/g, "");

export const WORKING_IN_THE_NETHERLANDS_CANONICAL = meta.canonicalPath;
export const PAGE_HERO_SUBTITLE = plainHeroSubtitle;
