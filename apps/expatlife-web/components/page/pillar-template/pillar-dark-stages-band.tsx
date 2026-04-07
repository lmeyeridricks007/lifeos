import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  movingNlDarkStagesAtmosphereClass,
  movingNlDarkStagesBandClass,
  movingNlDarkStagesSheenClass,
  movingNlDarkStagesVignetteClass,
  movingNlHeroGlowPrimaryClass,
  movingNlHeroGlowSecondaryClass,
  movingNlHeroTopAccentClass,
} from "@/lib/ui/moving-nl-pillar-identity";

export type PillarDarkStagesBandProps = {
  className?: string;
  children: ReactNode;
};

/** Dark “system” band: atmosphere layers + content (`SectionBlock` + `StageCards` with `tone="onDark"`). */
export function PillarDarkStagesBand({ className, children }: PillarDarkStagesBandProps) {
  return (
    <div className={cn(movingNlDarkStagesBandClass, "mt-1 sm:mt-0", className)}>
      <div className={movingNlDarkStagesVignetteClass} aria-hidden />
      <div className={movingNlDarkStagesAtmosphereClass} aria-hidden />
      <div className={movingNlHeroGlowPrimaryClass} aria-hidden />
      <div className={movingNlHeroGlowSecondaryClass} aria-hidden />
      <div className={movingNlDarkStagesSheenClass} aria-hidden />
      <div className={movingNlHeroTopAccentClass} aria-hidden />
      {children}
    </div>
  );
}
