import type { ReactNode } from "react";
import { HubHero } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlHeroShellClass, movingNlHeroTopAccentClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarHeroRegionProps = {
  /** Defaults to moving NL hero shell (framed surface + share row rhythm). */
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Hero contract region: hub semantic wrapper + signature top accent + hero content (`PageHero` / `EditorialContentHeader`).
 */
export function PillarHeroRegion({ shellClassName, className, children }: PillarHeroRegionProps) {
  return (
    <HubHero className={cn(shellClassName ?? movingNlHeroShellClass, className)}>
      <div className={movingNlHeroTopAccentClass} aria-hidden />
      {children}
    </HubHero>
  );
}
