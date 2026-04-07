import type { ReactNode } from "react";
import { HubPageRoot } from "@/components/page-families";

export type PillarPageCanvasProps = {
  className?: string;
  children: ReactNode;
};

/** Hub page root — pair with `movingNlPageCanvasClass` (or any canvas tokens) for guided pillar pages. */
export function PillarPageCanvas({ className, children }: PillarPageCanvasProps) {
  return <HubPageRoot className={className}>{children}</HubPageRoot>;
}
