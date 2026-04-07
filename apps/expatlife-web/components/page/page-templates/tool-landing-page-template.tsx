import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import {
  ToolFaqOrTrust,
  ToolHelpsWith,
  ToolHero,
  ToolHowToUse,
  ToolPageRoot,
  ToolSurface,
  ToolWhatHappensNext,
} from "@/components/page-families";
import { PillarGuideHeroRegion, PillarMainStack } from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";

export type ToolLandingPageTemplateProps = {
  rootClassName?: string;
  mainStackClassName?: string;
  className?: string;
  hero: ReactNode;
  /** Purpose / what it helps with. */
  helpsWith?: ReactNode;
  /** Inputs and interactive surface. */
  surface: ReactNode;
  /** Examples, outcomes, infographics, “how it works” depth. */
  howToUse?: ReactNode;
  /** Related guides, recommended follow-ups. */
  relatedGuides?: ReactNode;
  /** FAQ, trust, disclaimers. */
  faqOrTrust?: ReactNode;
  /** Wraps the hero in `PillarGuideHeroRegion` + max-width container (moving-cluster tool landings). */
  movingClusterHero?: boolean;
};

/**
 * Interactive tool landing archetype: planners, calculators, checklists under `/tools/...`.
 * Inner regions already no-op when optional children are omitted (`ToolHelpsWith`, etc.).
 */
export function ToolLandingPageTemplate({
  rootClassName,
  mainStackClassName,
  className,
  hero,
  helpsWith,
  surface,
  howToUse,
  relatedGuides,
  faqOrTrust,
  movingClusterHero = false,
}: ToolLandingPageTemplateProps) {
  const heroRegion = movingClusterHero ? (
    <PillarGuideHeroRegion>
      <Container className="w-full max-w-screen-2xl">
        <ToolHero>{hero}</ToolHero>
      </Container>
    </PillarGuideHeroRegion>
  ) : (
    <ToolHero>{hero}</ToolHero>
  );

  return (
    <ToolPageRoot className={cn(rootClassName, className)}>
      {heroRegion}
      <PillarMainStack className={mainStackClassName}>
        <ToolHelpsWith>{helpsWith}</ToolHelpsWith>
        <ToolSurface>{surface}</ToolSurface>
        <ToolHowToUse>{howToUse}</ToolHowToUse>
        <ToolWhatHappensNext>{relatedGuides}</ToolWhatHappensNext>
        <ToolFaqOrTrust>{faqOrTrust}</ToolFaqOrTrust>
      </PillarMainStack>
    </ToolPageRoot>
  );
}
