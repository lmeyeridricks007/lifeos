import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { movingNlEssentialsSurfaceClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarEssentialsSurfaceProps = {
  className?: string;
  children: ReactNode;
};

/** Light gradient shell around practical essentials (`SectionBlock` + `PracticalEssentials`). */
export function PillarEssentialsSurface({ className, children }: PillarEssentialsSurfaceProps) {
  return <div className={cn(movingNlEssentialsSurfaceClass, className)}>{children}</div>;
}
