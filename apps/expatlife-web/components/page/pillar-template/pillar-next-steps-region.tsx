import type { ReactNode } from "react";
import { HubRelatedNextSteps } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlNextStepsAccentClass, movingNlShellNextStepsClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarNextStepsRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

/** Related / next steps contract region — momentum shell + top accent + `NextSteps`. */
export function PillarNextStepsRegion({ shellClassName, className, children }: PillarNextStepsRegionProps) {
  return (
    <HubRelatedNextSteps className={cn(shellClassName ?? movingNlShellNextStepsClass, className)}>
      <div className={movingNlNextStepsAccentClass} aria-hidden />
      <div className="relative z-10">{children}</div>
    </HubRelatedNextSteps>
  );
}
