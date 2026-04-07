export {
  GUIDE_SECTION_IDS,
  TOOL_SECTION_IDS,
  HUB_SECTION_IDS,
  ARTICLE_SECTION_IDS,
  type PageFamilyKind,
} from "./contract-ids";
export { PageFamilyRegion, type PageFamilyRegionProps } from "./PageFamilyRegion";

export {
  GuidePageRoot,
  GuideHero,
  GuideAtAGlance,
  GuideKeySections,
  GuideToolsRegion,
  GuideScenario,
  GuideRelatedNextSteps,
  GuideFaq,
} from "./guide-contract";

export {
  ToolPageRoot,
  ToolHero,
  ToolHelpsWith,
  ToolSurface,
  ToolHowToUse,
  ToolWhatHappensNext,
  ToolFaqOrTrust,
} from "./tool-contract";

export {
  HubPageRoot,
  HubHero,
  HubWhatThisHelpsWith,
  HubPathways,
  HubCategoriesOrComparisons,
  HubTools,
  HubRelatedNextSteps,
  HubFaq,
} from "./hub-contract";

export {
  ArticlePageRoot,
  ArticleHero,
  ArticleSummary,
  ArticleBody,
  ArticleContextualTools,
  ArticleRelated,
  ArticleFaq,
} from "./article-contract";
