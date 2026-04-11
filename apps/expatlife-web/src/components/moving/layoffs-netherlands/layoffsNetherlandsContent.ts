import { layoffsNlPageMeta } from "./config/layoffsNetherlands.config";

const meta = layoffsNlPageMeta;
const plainHeroSubtitle = meta.hero.subtitle.replace(/\*\*/g, "");

export const LAYOFFS_NETHERLANDS_CANONICAL = meta.canonicalPath;
export const LAYOFFS_NETHERLANDS_SEO_DESCRIPTION =
  "If your Dutch role may end, map exit, stay, money, and life admin calmly: what to clarify early, what to confirm in writing, and which ExpatCopilot Move guides and tools to open next.";
export const PAGE_HERO_SUBTITLE = plainHeroSubtitle;
