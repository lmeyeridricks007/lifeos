import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  movingNlGuideSectionShellClass,
  movingNlGuideSectionTopAccentClass,
} from "@/lib/ui/moving-nl-pillar-identity";

/** Premium panel wrapper for JSON Move guide sections (ExpatCopilot main column). */
export function MoveGuideSectionPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", movingNlGuideSectionShellClass, className)}>
      <div className={movingNlGuideSectionTopAccentClass} aria-hidden />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
