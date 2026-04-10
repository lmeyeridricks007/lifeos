import type { ReactNode } from "react";
import { GuideToolsRegion } from "@/components/page-families";
import { SectionBlock, type SectionBlockProps } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlShellToolsClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PillarGuideToolsSectionProps = Pick<
  SectionBlockProps,
  "id" | "title" | "subtitle" | "subtitleMarkdown" | "compact"
> & {
  shellClassName?: string;
  className?: string;
  gridClassName?: string;
  children: ReactNode;
};

const defaultToolGridClass = "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3";

export function PillarGuideToolsSection({
  shellClassName,
  className,
  gridClassName,
  id,
  title,
  subtitle,
  subtitleMarkdown,
  compact,
  children,
}: PillarGuideToolsSectionProps) {
  return (
    <GuideToolsRegion className={cn(shellClassName ?? movingNlShellToolsClass, className)}>
      <SectionBlock compact={compact} id={id} title={title} subtitle={subtitle} subtitleMarkdown={subtitleMarkdown}>
        <div className={cn(defaultToolGridClass, gridClassName)}>{children}</div>
      </SectionBlock>
    </GuideToolsRegion>
  );
}
