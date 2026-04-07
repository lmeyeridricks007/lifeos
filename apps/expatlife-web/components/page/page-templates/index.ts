/**
 * Page archetype composers: consistent assembly for hubs, guides, tools, and support articles.
 * Pass `ReactNode` slots; optional sections are omitted when `undefined` / `null`.
 *
 * Visual shells (`PillarHeroRegion`, `PillarToolsSection`, `movingNlPageCanvasClass`, dark bands, etc.)
 * are supplied by the page inside each slot — templates own structure, spacing rhythm, and contract regions only.
 */

export { ClusterHubPageTemplate, type ClusterHubPageTemplateProps } from "./cluster-hub-page-template";
export { GuidePageTemplate, type GuidePageTemplateProps } from "./guide-page-template";
export { ToolLandingPageTemplate, type ToolLandingPageTemplateProps } from "./tool-landing-page-template";
export { ArticleSupportPageTemplate, type ArticleSupportPageTemplateProps } from "./article-support-page-template";
