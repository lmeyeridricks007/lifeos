import { CardLink } from "@/components/ui/card-link";
import type { LivingComingNextItem } from "@/src/components/living/livingPillarContent";

/**
 * Editorial teasers for Living depth — `CardLink` with `coming_soon` renders a non-link tile (no broken hrefs).
 */
export function LivingComingNextSection({ items }: { items: LivingComingNextItem[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <CardLink
          key={item.title}
          href="#"
          title={item.title}
          description={item.description}
          status="coming_soon"
          meta="Roadmap teaser"
        />
      ))}
    </div>
  );
}
