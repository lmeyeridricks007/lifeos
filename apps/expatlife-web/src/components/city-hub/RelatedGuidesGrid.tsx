import Link from "next/link";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import {
  mapRelatedGuideLinks,
  type RenderableInternalLink,
} from "@/src/lib/routes/routeStatus";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      {visible.map(({ block, items, key }) => (
        <article
          key={key}
          className={cn(
            "relative flex min-h-0 flex-col overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.07]",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="relative z-[1] text-base font-bold text-copilot-text-primary">{block.title}</h3>
          <ul className="relative z-[1] mt-4 flex flex-1 flex-col gap-2">
            {items.map((link, j) => (
              <li key={linkRowKey(link, j)}>
                {link.kind === "live" ? (
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-copilot-primary hover:text-copilot-primary-strong hover:underline"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="inline-flex flex-wrap items-center gap-2 text-sm text-copilot-text-muted">
                    <span>{link.label}</span>
                    <ComingSoonBadge />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </article>
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
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <RelatedGuidesGrid blocks={blocks} />
    </section>
  );
}
