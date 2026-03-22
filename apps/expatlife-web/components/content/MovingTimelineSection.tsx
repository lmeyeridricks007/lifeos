import Link from "next/link";
import { FileText, Building2, CalendarCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import type { PillarTimelineStage } from "@expatlife/content";
import { cn } from "@/lib/cn";

const STAGE_ICONS = [FileText, Building2, CalendarCheck] as const;

export type MovingTimelineSectionProps = {
  /** Section id for anchor */
  id?: string;
  /** Section title */
  title?: string;
  /** Intro sentence above the cards */
  intro?: string;
  /** Timeline stages (max 3 for layout) */
  stages: PillarTimelineStage[];
  /** Section-level CTA below the cards */
  sectionCta?: { label: string; href: string };
  /** When false, align with adjacent sections that use contained={false} */
  contained?: boolean;
};

export function MovingTimelineSection({
  id = "timeline",
  title = "The moving timeline",
  intro,
  stages,
  sectionCta,
  contained = false,
}: MovingTimelineSectionProps) {
  const displayStages = stages.slice(0, 3);
  const bulletsPerStage = 4;
  const linksPerStage = 3;

  return (
    <Section
      id={id}
      contained={contained}
      className={!contained ? "pl-5" : undefined}
      title={title}
      subtitle={intro}
    >
      <div className="relative">
        {/* Desktop: horizontal connector line between cards */}
        <div
          className="absolute left-0 right-0 top-9 hidden h-0.5 bg-slate-200 md:block"
          aria-hidden
        />
        <div className="grid gap-6 md:grid-cols-3">
          {displayStages.map((stage, i) => {
            const Icon = STAGE_ICONS[i] ?? FileText;
            const stepLabel = stage.stepLabel ?? `${i + 1}. ${stage.label.toUpperCase()}`;
            const bullets = stage.actions.slice(0, bulletsPerStage);
            const links = stage.links.slice(0, linksPerStage);

            return (
              <div key={stage.id} className="relative flex flex-col">
                {/* Step marker: number + icon */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-sm font-semibold text-slate-700"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                </div>

                <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {stepLabel}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {stage.label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {stage.goal}
                  </p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-slate-700">
                    {bullets.map((action, j) => (
                      <li key={j}>{action}</li>
                    ))}
                  </ul>

                  {links.length > 0 && (
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Useful guides
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="text-sm font-medium text-brand-700 hover:underline"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {stage.cta && (
                    <div className="mt-4">
                      <Link
                        href={stage.cta.href}
                        className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
                      >
                        {stage.cta.label}
                        {!String(stage.cta.label).trim().endsWith("→") ? " →" : null}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {sectionCta && (
          <p className={cn("mt-8 text-center")}>
            <Link
              href={sectionCta.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline"
            >
              {sectionCta.label}
              {!String(sectionCta.label).trim().endsWith("→") ? " →" : null}
            </Link>
          </p>
        )}
      </div>
    </Section>
  );
}
