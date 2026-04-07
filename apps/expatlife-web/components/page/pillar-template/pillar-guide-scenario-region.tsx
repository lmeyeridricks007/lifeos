import type { ReactNode } from "react";
import { GuideScenario } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlPathwaysBackdropClass, movingNlShellPathwaysClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarGuideScenarioRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

/** Decision / scenario band under guide contract (`ChooseYourPath`, etc.). */
export function PillarGuideScenarioRegion({ shellClassName, className, children }: PillarGuideScenarioRegionProps) {
  return (
    <GuideScenario className={cn(shellClassName ?? movingNlShellPathwaysClass, className)}>
      <div className={movingNlPathwaysBackdropClass} aria-hidden />
      <div className="relative z-10">{children}</div>
    </GuideScenario>
  );
}
