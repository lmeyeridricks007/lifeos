import type { ReactNode } from "react";
import { GuideRelatedNextSteps } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlNextStepsAccentClass, movingNlShellNextStepsClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarGuideNextStepsRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

export function PillarGuideNextStepsRegion({ shellClassName, className, children }: PillarGuideNextStepsRegionProps) {
  return (
    <GuideRelatedNextSteps className={cn(shellClassName ?? movingNlShellNextStepsClass, className)}>
      <div className={movingNlNextStepsAccentClass} aria-hidden />
      <div className="relative z-10">{children}</div>
    </GuideRelatedNextSteps>
  );
}
