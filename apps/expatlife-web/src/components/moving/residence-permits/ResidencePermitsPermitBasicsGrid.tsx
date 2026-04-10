import { Compass, GitBranch, Layers } from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { PermitBasicsCard } from "./config/moveResidencePermits.types";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const ICONS = {
  purpose: Compass,
  setup: Layers,
  change: GitBranch,
} as const;

export function ResidencePermitsPermitBasicsGrid({
  id,
  eyebrow,
  title,
  subtitle,
  cards,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: readonly PermitBasicsCard[];
}) {
  return (
    <SectionBlock id={id} className={SECTION_SCROLL_MARGIN} eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
        {cards.map((c) => {
          const Icon = ICONS[c.iconKey];
          return (
            <article
              key={c.id}
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                movingNlCardMicroLiftClass
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="flex items-start gap-3 pt-0.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-copilot-primary ring-1 ring-copilot-primary/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
                  <BoldParagraph
                    text={c.intro}
                    className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </div>
              </div>
              <ul className="mt-4 space-y-2 border-t border-border/70 pt-3 text-[13px] leading-snug text-foreground-muted sm:text-sm" role="list">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <BoldInline text={b} className="text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionBlock>
  );
}
