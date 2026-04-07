import type { ReactNode } from "react";
import { GuideFaq } from "@/components/page-families";
import { cn } from "@/lib/cn";
import { movingNlShellFaqClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarGuideFaqRegionProps = {
  shellClassName?: string;
  className?: string;
  children: ReactNode;
};

export function PillarGuideFaqRegion({ shellClassName, className, children }: PillarGuideFaqRegionProps) {
  return <GuideFaq className={cn(shellClassName ?? movingNlShellFaqClass, className)}>{children}</GuideFaq>;
}
