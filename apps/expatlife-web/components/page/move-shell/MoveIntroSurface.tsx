import type { ReactNode } from "react";
import { InfoBox } from "@/components/ui/info-box";
import { cn } from "@/lib/cn";
import { movingNlPathwaysBackdropClass, movingNlShellPathwaysClass } from "@/lib/ui/moving-nl-pillar-identity";

export type MoveIntroSurfaceProps = {
  children: ReactNode;
  /** Short disclaimer / planning notice below intro copy (string or richer layout). */
  disclaimer?: string | ReactNode;
  disclaimerTitle?: string;
  className?: string;
  /** Optional anchor for in-page navigation (e.g. sticky TOC “Before you start”). */
  id?: string;
  /** Optional anchor on the disclaimer `InfoBox` (when TOC should jump to the warning, not the whole intro). */
  disclaimerAnchorId?: string;
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
  disclaimerAnchorId,
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
          <InfoBox
            id={disclaimerAnchorId}
            variant="warn"
            title={disclaimerTitle}
            className={cn(
              "border-copilot-primary/15 bg-copilot-bg-soft/80 shadow-expatos-sm",
              disclaimerAnchorId ? "scroll-mt-28 md:scroll-mt-32" : null
            )}
          >
            {typeof disclaimer === "string" ? (
              <p className="text-sm text-copilot-text-secondary">{disclaimer}</p>
            ) : (
              disclaimer
            )}
          </InfoBox>
        ) : null}
      </div>
    </div>
  );
}
