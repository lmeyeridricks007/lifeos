import { CardLink } from "@/components/ui/card-link";
import type { LivingContinueCard } from "@/src/components/living/livingPillarContent";

export function LivingContinuePillarGrid({ cards }: { cards: LivingContinueCard[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {cards.map((c) => (
        <CardLink key={c.href} href={c.href} title={c.title} description={c.description} meta={c.meta} />
      ))}
    </div>
  );
}
