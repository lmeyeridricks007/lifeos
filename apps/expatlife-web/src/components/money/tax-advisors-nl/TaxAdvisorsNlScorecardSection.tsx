import Link from "next/link";
import { cn } from "@/lib/cn";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

type ScorecardComplexityKey = "tools_first" | "worth_checking" | "consider_advice";

export type TaxAdvisorsScorecardRowModel = {
  id: string;
  situation: string;
  complexityKey: ScorecardComplexityKey;
  complexityLabel: string;
  toolsFirst: readonly { href: string; label: string }[];
  advisorWhen: string;
};

type TaxAdvisorsNlScorecardSectionProps = {
  section: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    footnote: string;
    rows: readonly TaxAdvisorsScorecardRowModel[];
  };
  className?: string;
};

function complexityBadgeClass(key: ScorecardComplexityKey): string {
  switch (key) {
    case "tools_first":
      return "border-emerald-200/80 bg-emerald-50/90 text-emerald-900 ring-emerald-100";
    case "worth_checking":
      return "border-amber-200/80 bg-amber-50/90 text-amber-950 ring-amber-100";
    case "consider_advice":
      return "border-copilot-primary/25 bg-copilot-bg-soft/90 text-copilot-text-primary ring-copilot-primary/12";
    default:
      return "border-border bg-surface-muted text-foreground";
  }
}

export function TaxAdvisorsNlScorecardSection({ section, className }: TaxAdvisorsNlScorecardSectionProps) {
  return (
    <SectionBlock
      id={section.id}
      className={className}
      eyebrow={section.eyebrow}
      title={section.title}
      subtitle={section.subtitle}
      subtitleMarkdown
    >
      {/* Stacked cards below `lg` — avoids horizontal scroll on tablets */}
      <div className="mt-5 space-y-3 lg:hidden" role="list">
        {section.rows.map((row) => (
          <article
            key={row.id}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10",
              movingNlCardMicroLiftClass
            )}
            role="listitem"
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex flex-wrap items-start justify-between gap-2 pt-0.5">
              <h3 className="min-w-0 flex-1 text-sm font-semibold leading-snug text-foreground">
                <BoldParagraph text={row.situation} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
              </h3>
              <span
                className={cn(
                  "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ring-1",
                  complexityBadgeClass(row.complexityKey)
                )}
              >
                {row.complexityLabel}
              </span>
            </div>
            <div className="mt-3 border-t border-border/60 pt-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Tools to use first</p>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm" role="list">
                {row.toolsFirst.map((t) => (
                  <li key={`${row.id}-${t.href}`} className="min-w-0">
                    <Link href={t.href} className="font-semibold text-link break-words hover:underline">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 border-t border-border/60 pt-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">When advisor may help</p>
              <BoldParagraph
                text={row.advisorWhen}
                className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Wide layout only at `lg+` — table never shown on narrow viewports */}
      <div className="mt-5 hidden lg:block lg:overflow-x-auto lg:rounded-2xl lg:ring-1 lg:ring-border/50">
        <table className="w-full min-w-[52rem] max-w-full border-collapse text-left text-sm">
          <caption className="sr-only">Practical scorecard: situation, complexity, tools to use first, when advisor may help</caption>
          <thead>
            <tr className="border-b border-border bg-surface-muted/60">
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted">
                Situation
              </th>
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted">
                Complexity level
              </th>
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted">
                Tools to use first
              </th>
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted">
                When advisor may help
              </th>
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row.id} className="border-b border-border/80 bg-surface-raised/80 last:border-b-0">
                <th scope="row" className="align-top px-4 py-3.5 font-semibold text-foreground">
                  <BoldParagraph text={row.situation} className="text-sm [&_strong]:font-semibold [&_strong]:text-foreground" />
                </th>
                <td className="align-top px-4 py-3.5">
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ring-1",
                      complexityBadgeClass(row.complexityKey)
                    )}
                  >
                    {row.complexityLabel}
                  </span>
                </td>
                <td className="align-top px-4 py-3.5 text-foreground-muted">
                  <ul className="flex flex-col gap-1.5" role="list">
                    {row.toolsFirst.map((t) => (
                      <li key={`${row.id}-${t.href}`}>
                        <Link href={t.href} className="font-semibold text-link hover:underline">
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="align-top px-4 py-3.5 text-foreground-muted">
                  <BoldParagraph
                    text={row.advisorWhen}
                    className="text-sm leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 rounded-xl border border-border/70 bg-surface-muted/40 px-4 py-3 text-xs leading-relaxed text-foreground-muted ring-1 ring-border/40 sm:text-sm">
        <BoldParagraph text={section.footnote} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
      </p>
    </SectionBlock>
  );
}
