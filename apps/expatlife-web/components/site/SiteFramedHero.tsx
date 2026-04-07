import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  siteHeroFramedShellClass,
  siteHeroInnerPadClass,
  siteHeroTopAccentClass,
} from "@/lib/ui/site-shell-identity";

export type SiteFramedHeroProps = {
  children: ReactNode;
  className?: string;
  /**
   * Moving pillar applies title padding inside `EditorialContentHeader` (`movingPillarIdentity`);
   * use `false` there to avoid double padding. Hubs and service pages default to `true`.
   */
  withInnerPadding?: boolean;
};

/** White framed hero card with gradient top accent — matches Moving NL pillar chrome. */
export function SiteFramedHero({
  children,
  className,
  withInnerPadding = true,
}: SiteFramedHeroProps) {
  return (
    <div className={cn(siteHeroFramedShellClass, "relative", className)}>
      <div className={siteHeroTopAccentClass} aria-hidden />
      {withInnerPadding ? (
        <div className={cn(siteHeroInnerPadClass, "relative z-[2]")}>{children}</div>
      ) : (
        <div className="relative z-[2]">{children}</div>
      )}
    </div>
  );
}
