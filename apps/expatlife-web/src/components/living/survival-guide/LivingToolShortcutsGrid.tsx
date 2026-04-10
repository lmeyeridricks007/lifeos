import { CardLink } from "@/components/ui/card-link";
import type { LivingToolShortcut } from "@/src/components/living/livingPillarContent";

export function LivingToolShortcutsGrid({ tools }: { tools: LivingToolShortcut[] }) {
  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
      {tools.map((t) => (
        <CardLink
          key={t.href}
          href={t.href}
          title={t.title}
          description={t.description}
          meta={t.meta ?? "Open tool"}
        />
      ))}
    </div>
  );
}
