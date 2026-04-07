import type { ReactNode } from "react";
import { HubWhatThisHelpsWith } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlShellAtGlanceClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarAtGlanceRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

/** Purpose / at-a-glance contract region — wraps `AtGlanceCard` (or equivalent summary module). */
export function PillarAtGlanceRegion({ shellClassName, className, children }: PillarAtGlanceRegionProps) {
  return (
    <HubWhatThisHelpsWith className={cn(shellClassName ?? movingNlShellAtGlanceClass, className)}>
      {children}
    </HubWhatThisHelpsWith>
  );
}
