import { CardLink } from "@/components/ui/card-link";
import type { GuideData } from "@/src/lib/guides/types";

type FeaturedToolsBlockProps = {
  items: NonNullable<GuideData["featuredTools"]>;
};

export function FeaturedToolsBlock({ items }: FeaturedToolsBlockProps) {
  if (!items?.length) return null;

  return (
    <div className="grid w-full gap-5 sm:grid-cols-2">
      {items.map((tool) => (
        <CardLink
          key={tool.href}
          href={tool.href}
          title={tool.label}
          description=""
          badge="Tool"
        />
      ))}
    </div>
  );
}
