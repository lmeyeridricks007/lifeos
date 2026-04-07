import type { ReactNode } from "react";
import { GuideHero } from "@/components/page-families";
import { SiteFramedHero } from "@/components/site/SiteFramedHero";
import { cn } from "@/lib/cn";
import { sitePillarGuideHeroBandClass } from "@/lib/ui/site-shell-identity";

export type PillarGuideHeroRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

/** Guide contract hero + site framed shell (Moving NL pillar chrome). */
export function PillarGuideHeroRegion({ shellClassName, className, children }: PillarGuideHeroRegionProps) {
  return (
    <GuideHero className={cn(sitePillarGuideHeroBandClass, className)}>
      <SiteFramedHero className={shellClassName} withInnerPadding={false}>
        {children}
      </SiteFramedHero>
    </GuideHero>
  );
}
