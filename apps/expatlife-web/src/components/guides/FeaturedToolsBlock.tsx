import { ToolCard } from "@/components/page/pillar-template";
import type { GuideData } from "@/src/lib/guides/types";

type FeaturedToolsBlockProps = {
  items: NonNullable<GuideData["featuredTools"]>;
};

export function FeaturedToolsBlock({ items }: FeaturedToolsBlockProps) {
  if (!items?.length) return null;

  return (
    <>
      {items.map((tool) => (
        <ToolCard
          key={tool.href}
          title={tool.label}
          description={tool.description?.trim() || "Practical planning tool for your Netherlands move."}
          href={tool.href}
          ctaLabel="Open tool"
          compact
        />
      ))}
    </>
  );
}
