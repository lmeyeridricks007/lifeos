import type { ReactNode } from "react";
import { GuideKeySections, HubCategoriesOrComparisons } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlShellStagesEssentialsClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarJourneyStackDensity = "default" | "compact";

export type PillarJourneyStackProps = {
  className?: string;
  /** `hub` = categories contract; `guide` = key-sections contract (moving pillar on `GuidePageTemplate`). */
  variant?: "hub" | "guide";
  /**
   * `compact` = smaller gaps between children (Living long-form guides with many `SectionBlock`s).
   * Default keeps moving-NL hub rhythm.
   */
  density?: PillarJourneyStackDensity;
  children: ReactNode;
};

/**
 * Stages + practical essentials stack with moving-NL vertical rhythm.
 * Children are typically `PillarDarkStagesBand` + optional `PillarEssentialsSurface`.
 */
export function PillarJourneyStack({
  className,
  children,
  variant = "hub",
  density = "default",
}: PillarJourneyStackProps) {
  const stackClass =
    density === "compact"
      ? cn("flex flex-col gap-3 py-0 sm:gap-4 md:gap-5", className)
      : cn("flex flex-col gap-8 sm:gap-9 md:gap-10", movingNlShellStagesEssentialsClass, className);
  if (variant === "guide") {
    return <GuideKeySections className={stackClass}>{children}</GuideKeySections>;
  }
  return <HubCategoriesOrComparisons className={stackClass}>{children}</HubCategoriesOrComparisons>;
}
