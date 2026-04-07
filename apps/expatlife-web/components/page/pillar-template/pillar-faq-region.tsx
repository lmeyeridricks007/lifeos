import type { ReactNode } from "react";
import { HubFaq } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlShellFaqClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarFaqRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

/** FAQ contract region — calmer support shell + `FAQBlock`. */
export function PillarFaqRegion({ shellClassName, className, children }: PillarFaqRegionProps) {
  return <HubFaq className={cn(shellClassName ?? movingNlShellFaqClass, className)}>{children}</HubFaq>;
}
