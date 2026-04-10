import { CardLink } from "@/components/ui/card-link";
import type { LivingTopicCard } from "@/src/components/living/livingPillarContent";

export function LivingTopicCardGrid({ topics }: { topics: LivingTopicCard[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
      {topics.map((t) => (
        <CardLink
          key={t.href}
          href={t.href}
          title={t.title}
          description={t.description}
          icon={<t.icon className="h-4 w-4" aria-hidden />}
          meta={t.cta ?? "View topic"}
        />
      ))}
    </div>
  );
}
