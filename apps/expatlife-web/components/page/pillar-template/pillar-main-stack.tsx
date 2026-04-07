import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type PillarMainStackProps = {
  className?: string;
  children: ReactNode;
};

/** Vertical rhythm between major pillar sections below the hero. */
export function PillarMainStack({ className, children }: PillarMainStackProps) {
  return (
    <div className={cn("mt-4 space-y-5 sm:mt-5 sm:space-y-6 md:space-y-7", className)}>{children}</div>
  );
}
