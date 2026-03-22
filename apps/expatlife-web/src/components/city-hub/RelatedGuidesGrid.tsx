import Link from "next/link";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import {
  mapRelatedGuideLinks,
  type RenderableInternalLink,
} from "@/src/lib/routes/routeStatus";

function linkRowKey(link: RenderableInternalLink, index: number): string {
  return link.kind === "live" ? link.href : `${link.label}-${index}`;
}

export function RelatedGuidesGrid({ blocks }: { blocks: CityRelatedGuideBlock[] }) {
  if (!blocks?.length) return null;

  const visible = blocks
    .map((block, i) => ({
      block,
      items: mapRelatedGuideLinks(block.links ?? []),
      key: `${block.title}-${i}`,
    }))
    .filter(({ block }) => (block.links ?? []).length > 0);

  if (!visible.length) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map(({ block, items, key }) => (
        <div
          key={key}
          className={cn(
            "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
            "flex flex-col"
          )}
        >
          <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
          <ul className="mt-4 flex flex-1 flex-col gap-2">
            {items.map((link, j) => (
              <li key={linkRowKey(link, j)}>
                {link.kind === "live" ? (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="inline-flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span>{link.label}</span>
                    <ComingSoonBadge />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Heading + grid; omits the whole block when every category has zero links. */
export function RelatedGuidesSection({
  id,
  title,
  blocks,
  className,
}: {
  id?: string;
  title: string;
  blocks: CityRelatedGuideBlock[];
  className?: string;
}) {
  if (!blocks?.some((b) => (b.links ?? []).length > 0)) return null;
  return (
    <section id={id} className={cn("scroll-mt-24 mt-12 space-y-6", className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <RelatedGuidesGrid blocks={blocks} />
    </section>
  );
}
