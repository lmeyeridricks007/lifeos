import type { ReactNode } from "react";
import { HubTools } from "@/components/page-families";
import { SectionBlock, type SectionBlockProps } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlShellToolsClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarToolsSectionProps = Pick<SectionBlockProps, "id" | "title" | "subtitle" | "compact"> & {
  shellClassName?: string;
  className?: string;
  /** Override default responsive tool grid. */
  gridClassName?: string;
  children: ReactNode;
};

const defaultToolGridClass = "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3";

/**
 * Tools contract region: shell + `SectionBlock` + responsive grid for `ToolCard` children.
 */
export function PillarToolsSection({
  shellClassName,
  className,
  gridClassName,
  id,
  title,
  subtitle,
  compact,
  children,
}: PillarToolsSectionProps) {
  return (
    <HubTools className={cn(shellClassName ?? movingNlShellToolsClass, className)}>
      <SectionBlock compact={compact} id={id} title={title} subtitle={subtitle}>
        <div className={cn(defaultToolGridClass, gridClassName)}>{children}</div>
      </SectionBlock>
    </HubTools>
  );
}
