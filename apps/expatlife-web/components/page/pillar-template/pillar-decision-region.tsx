import type { ReactNode } from "react";
import { HubPathways } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlPathwaysBackdropClass, movingNlShellPathwaysClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarDecisionRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

/** Pathways / decision engine region — backdrop wash + `ChooseYourPath` (scenario cards). */
export function PillarDecisionRegion({ shellClassName, className, children }: PillarDecisionRegionProps) {
  return (
    <HubPathways className={cn(shellClassName ?? movingNlShellPathwaysClass, className)}>
      <div className={movingNlPathwaysBackdropClass} aria-hidden />
      <div className="relative z-10">{children}</div>
    </HubPathways>
  );
}
