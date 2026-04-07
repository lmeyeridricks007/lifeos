import type { ReactNode } from "react";
import { InfoBox } from "@/components/ui/info-box";
import { cn } from "@/lib/cn";
import { movingNlPathwaysBackdropClass, movingNlShellPathwaysClass } from "@/lib/ui/moving-nl-pillar-identity";

export type MoveIntroSurfaceProps = {
  children: ReactNode;
  /** Short disclaimer / planning notice below intro copy */
  disclaimer?: string;
  disclaimerTitle?: string;
  className?: string;
  /** Optional anchor for in-page navigation (e.g. sticky TOC “Before you start”). */
  id?: string;
};

/**
 * First block after Move hero: pathways shell + copilot prose + optional disclaimer (replaces ad-hoc tool intro boxes).
 */
export function MoveIntroSurface({
  children,
  disclaimer,
  disclaimerTitle = "Before you start",
  className,
  id,
}: MoveIntroSurfaceProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        id ? "scroll-mt-28 md:scroll-mt-32" : null,
        movingNlShellPathwaysClass,
        className
      )}
    >
      <div className={movingNlPathwaysBackdropClass} aria-hidden />
      <div className="relative z-[2] space-y-4 px-1 py-1 sm:px-0">
        <div className="max-w-none text-sm leading-relaxed text-copilot-text-secondary md:text-base [&_p]:mb-3 [&_p:last-child]:mb-0">
          {children}
        </div>
        {disclaimer ? (
          <InfoBox variant="warn" title={disclaimerTitle} className="border-copilot-primary/15 bg-copilot-bg-soft/80 shadow-expatos-sm">
            <p className="text-sm text-copilot-text-secondary">{disclaimer}</p>
          </InfoBox>
        ) : null}
      </div>
    </div>
  );
}
