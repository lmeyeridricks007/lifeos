"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { movingNlPathPrimaryCtaClass, movingNlSidebarSecondaryRowClass } from "@/lib/ui/moving-nl-pillar-identity";

export type MoveHeroToolCtasProps = {
  primaryLabel: string;
  primaryHref?: string;
  primaryScrollToId?: string;
  primaryOnClick?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function MoveHeroToolCtas({
  primaryLabel,
  primaryHref,
  primaryScrollToId,
  primaryOnClick,
  secondaryLabel,
  secondaryHref,
  className,
}: MoveHeroToolCtasProps) {
  const scrollToTarget = () => {
    if (primaryOnClick) {
      primaryOnClick();
      return;
    }
    if (primaryScrollToId && typeof document !== "undefined") {
      document.getElementById(primaryScrollToId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={cn(
        "mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center",
        className
      )}
    >
      {primaryHref ? (
        <Link href={primaryHref} className={cn(movingNlPathPrimaryCtaClass, "inline-flex w-full justify-center sm:w-auto")}>
          {primaryLabel}
        </Link>
      ) : primaryScrollToId && !primaryOnClick ? (
        <Link
          href={`#${primaryScrollToId}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget();
          }}
          className={cn(movingNlPathPrimaryCtaClass, "inline-flex w-full justify-center sm:w-auto")}
        >
          {primaryLabel}
        </Link>
      ) : (
        <button type="button" onClick={scrollToTarget} className={cn(movingNlPathPrimaryCtaClass, "w-full sm:w-auto")}>
          {primaryLabel}
        </button>
      )}
      {secondaryLabel && secondaryHref ? (
        <Link
          href={secondaryHref}
          className={cn(movingNlSidebarSecondaryRowClass, "inline-flex w-full justify-center sm:w-auto")}
        >
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}
