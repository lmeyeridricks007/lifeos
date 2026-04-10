import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { CardLink } from "@/components/ui/card-link";
import { cn } from "@/lib/cn";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

export type MovePillarJourneyBridgeLink = {
  href: string;
  label: string;
  description: string;
  meta?: string;
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  links: readonly MovePillarJourneyBridgeLink[];
  className?: string;
};

/**
 * “How this fits the Move pillar” band — SectionBlock + CardLink grid, reused on Move orientation pages.
 */
export function MovePillarJourneyBridge({ id, eyebrow, title, intro, links, className }: Props) {
  return (
    <SectionBlock id={id} className={cn(SECTION_SCROLL_MARGIN, className)} compact eyebrow={eyebrow} title={title}>
      <BoldParagraph
        text={intro}
        className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
      />
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <CardLink key={l.href} href={l.href} title={l.label} description={l.description} meta={l.meta} />
        ))}
      </div>
    </SectionBlock>
  );
}
