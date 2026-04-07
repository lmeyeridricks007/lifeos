import { Accordion } from "@/components/ui/accordion";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import Link from "next/link";
import type { PillarFaqItem } from "@expatlife/content";
import { cn } from "@/lib/cn";
import { movingNlFaqCardInnerClass, movingNlSectionH2Class } from "@/lib/ui/moving-nl-pillar-identity";

export type FAQBlockProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  items: PillarFaqItem[];
  /** Hard cap for scan-friendly FAQ. */
  maxItems?: number;
};

export function FAQBlock({ id, eyebrow = "Support", title = "FAQ", items, maxItems = 5 }: FAQBlockProps) {
  const slice = items.slice(0, maxItems);
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className="min-w-0">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">{eyebrow}</p>
      <h2 id={headingId} className={cn(movingNlSectionH2Class, "mt-2")}>
        {title}
      </h2>
      <div className={cn("mt-5 sm:mt-6", movingNlFaqCardInnerClass)}>
        <Accordion
          density="comfortable"
          tone="copilot"
          items={slice.map((item, i) => ({
            id: `faq-${i}`,
            title: item.q,
            content: (
              <div className="space-y-3">
                <BoldParagraph
                  text={item.a}
                  className="text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                />
                {item.links?.length ? (
                  <ul className="flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm font-bold text-copilot-primary hover:text-copilot-primary-strong hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
