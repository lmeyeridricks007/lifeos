import type { ReactNode } from "react";
import { GuideAtAGlance } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlShellAtGlanceClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarGuideAtGlanceRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

export function PillarGuideAtGlanceRegion({ shellClassName, className, children }: PillarGuideAtGlanceRegionProps) {
  return (
    <GuideAtAGlance className={cn(shellClassName ?? movingNlShellAtGlanceClass, className)}>
      {children}
    </GuideAtAGlance>
  );
}
