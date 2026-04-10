/**
 * Guided pillar / hub template: composes page-family contract regions with moving-NL identity shells
 * plus the `moving-pillar` content primitives (hero, at-a-glance, scenarios, tools, stages, essentials, next steps, FAQ).
 *
 * Import from here on pillar-style pages to avoid duplicating shell markup and hub wrappers.
 */

export { PillarPageCanvas, type PillarPageCanvasProps } from "./pillar-page-canvas";
export { PillarHeroRegion, type PillarHeroRegionProps } from "./pillar-hero-region";
export { PillarAtGlanceRegion, type PillarAtGlanceRegionProps } from "./pillar-at-glance-region";
export { PillarDecisionRegion, type PillarDecisionRegionProps } from "./pillar-decision-region";
export { PillarToolsSection, type PillarToolsSectionProps } from "./pillar-tools-section";
export {
  PillarJourneyStack,
  type PillarJourneyStackDensity,
  type PillarJourneyStackProps,
} from "./pillar-journey-stack";
export { PillarDarkStagesBand, type PillarDarkStagesBandProps } from "./pillar-dark-stages-band";
export { PillarEssentialsSurface, type PillarEssentialsSurfaceProps } from "./pillar-essentials-surface";
export { PillarNextStepsRegion, type PillarNextStepsRegionProps } from "./pillar-next-steps-region";
export { PillarFaqRegion, type PillarFaqRegionProps } from "./pillar-faq-region";
export { PillarMainStack, type PillarMainStackProps } from "./pillar-main-stack";

export { PillarGuideHeroRegion, type PillarGuideHeroRegionProps } from "./pillar-guide-hero-region";
export { PillarGuideAtGlanceRegion, type PillarGuideAtGlanceRegionProps } from "./pillar-guide-at-glance-region";
export { PillarGuideScenarioRegion, type PillarGuideScenarioRegionProps } from "./pillar-guide-scenario-region";
export { PillarGuideToolsSection, type PillarGuideToolsSectionProps } from "./pillar-guide-tools-section";
export { PillarGuideNextStepsRegion, type PillarGuideNextStepsRegionProps } from "./pillar-guide-next-steps-region";
export { PillarGuideFaqRegion, type PillarGuideFaqRegionProps } from "./pillar-guide-faq-region";

export {
  PageHero,
  AtGlanceCard,
  ChooseYourPath,
  SectionBlock,
  StageCards,
  ScenarioSelector,
  ToolCard,
  NextSteps,
  FAQBlock,
  MoveGuideSectionPanel,
  PracticalEssentials,
  EssentialsCards,
  PillarEssentialCard,
  type AtGlanceCardProps,
  type ChooseYourPathProps,
  type SectionBlockProps,
  type StageCardsProps,
  type ToolCardProps,
  type NextStepsProps,
  type FAQBlockProps,
  type PracticalEssentialsProps,
  type EssentialsCardsProps,
  type PillarEssentialCardProps,
} from "@/components/page/moving-pillar";
