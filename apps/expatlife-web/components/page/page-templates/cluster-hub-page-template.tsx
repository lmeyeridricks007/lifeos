import type { ReactNode } from "react";
import {
  HubCategoriesOrComparisons,
  HubFaq,
  HubHero,
  HubPageRoot,
  HubPathways,
  HubRelatedNextSteps,
  HubTools,
  HubWhatThisHelpsWith,
} from "@/components/page-families";
import { PillarMainStack } from "@/components/page/pillar-template";
import { moveToolPageWrapClass } from "@/components/page/move-shell";
import { cn } from "@/lib/cn";

export type ClusterHubPageTemplateProps = {
  /** Optional classes on the hub root (page canvas is usually applied globally on `<main>` via `sitePageCanvasClass`). */
  rootClassName?: string;
  /** Override vertical rhythm between stacked regions (defaults to `PillarMainStack`). */
  mainStackClassName?: string;
  className?: string;
  hero: ReactNode;
  /** Short orientation / at-a-glance. */
  atAGlance?: ReactNode;
  /** Scenario clusters, entry paths, decision cards. */
  pathways?: ReactNode;
  /** Contextual tools grid or strip. */
  tools?: ReactNode;
  /** Topic grids, comparisons, stage bands. */
  categories?: ReactNode;
  nextSteps?: ReactNode;
  faq?: ReactNode;
  /**
   * Optional dark “system” band — rendered after `tools`, before `categories` when both exist;
   * if `categories` is omitted, still renders after `tools`.
   */
  darkSystem?: ReactNode;
};

/**
 * Cluster hub archetype: topic landing pages (`/netherlands/moving`, work, housing, taxes, …).
 * Omitted slots do not render (no empty contract regions).
 */
export function ClusterHubPageTemplate({
  rootClassName,
  mainStackClassName,
  className,
  hero,
  atAGlance,
  pathways,
  tools,
  categories,
  nextSteps,
  faq,
  darkSystem,
}: ClusterHubPageTemplateProps) {
  return (
    <HubPageRoot className={cn(rootClassName, className)}>
      <HubHero>
        {/* Same max-width column as city hubs (`GuidePageTemplate` + `Container`) and Move tools — not full-bleed `main`. */}
        <div className={moveToolPageWrapClass}>{hero}</div>
      </HubHero>
      <PillarMainStack className={cn(mainStackClassName)}>
        {atAGlance != null ? <HubWhatThisHelpsWith>{atAGlance}</HubWhatThisHelpsWith> : null}
        {pathways != null ? <HubPathways>{pathways}</HubPathways> : null}
        {tools != null ? <HubTools>{tools}</HubTools> : null}
        {darkSystem}
        {categories != null ? <HubCategoriesOrComparisons>{categories}</HubCategoriesOrComparisons> : null}
        {nextSteps != null ? <HubRelatedNextSteps>{nextSteps}</HubRelatedNextSteps> : null}
        {faq != null ? <HubFaq>{faq}</HubFaq> : null}
      </PillarMainStack>
    </HubPageRoot>
  );
}
