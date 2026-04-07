import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { PageFamilyKind } from "./contract-ids";

export type PageFamilyRegionProps = {
  as?: ElementType;
  family: PageFamilyKind;
  contractSection: string;
  id?: string;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "id" | "className" | "children">;

/**
 * Minimal semantic wrapper: stable `data-page-family` + `data-contract-section` for composition and tooling.
 * Does not impose layout; pair with existing Section/Container as needed.
 */
export function PageFamilyRegion({
  as,
  family,
  contractSection,
  id,
  className,
  children,
  ...rest
}: PageFamilyRegionProps) {
  const Comp = (as ?? "section") as ElementType;
  return (
    <Comp
      id={id}
      data-page-family={family}
      data-contract-section={contractSection}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
