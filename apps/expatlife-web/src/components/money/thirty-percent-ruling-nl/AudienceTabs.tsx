"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";

export type AudienceTabBlock = {
  id: string;
  title: string;
  body: string;
};

export type AudienceToolLink = {
  href: string;
  label: string;
};

export type AudienceTabsProps = {
  employeeTabLabel: string;
  employerTabLabel: string;
  employeeSections: readonly AudienceTabBlock[];
  employeeToolLinks: readonly AudienceToolLink[];
  /** Shown at the top of the employer tab — must include obligation wording. */
  employerObligationDisclaimer: string;
  employerSections: readonly AudienceTabBlock[];
  /** Optional note below both tabs (shared context). */
  footNote?: string;
};

function AudienceBlock({ block }: { block: AudienceTabBlock }) {
  return (
    <section className="scroll-mt-28 rounded-xl border border-border/70 bg-surface-muted/30 p-4 ring-1 ring-border/40 sm:p-5" aria-labelledby={`aud-${block.id}`}>
      <h4 id={`aud-${block.id}`} className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong">
        {block.title}
      </h4>
      <BoldParagraph
        text={block.body}
        className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
      />
    </section>
  );
}

/**
 * Employee vs employer audience tabs — stacked blocks on small screens, scrollable tab labels on narrow viewports.
 */
export function AudienceTabs({
  employeeTabLabel,
  employerTabLabel,
  employeeSections,
  employeeToolLinks,
  employerObligationDisclaimer,
  employerSections,
  footNote,
}: AudienceTabsProps) {
  const linkChipClass =
    "inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-brand/20 bg-brand/5 px-3 py-2.5 text-center text-sm font-semibold text-brand-strong shadow-sm ring-1 ring-brand/10 transition-colors hover:bg-brand/10 sm:w-auto sm:min-w-0 sm:shrink-0";

  return (
    <div className="space-y-4">
      <Tabs
        className="overflow-hidden"
        defaultTab="employee"
        tabs={[
          {
            key: "employee",
            label: employeeTabLabel,
            content: (
              <div className="space-y-4 sm:space-y-5">
                {employeeSections.map((block) => (
                  <AudienceBlock key={block.id} block={block} />
                ))}
                <div className="rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/60 p-4 ring-1 ring-copilot-primary/[0.08] sm:p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Tools to use</p>
                  <p className="mt-1 text-xs text-copilot-text-secondary sm:text-sm">Open in order that matches your stage — each tool states its own limits.</p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    {employeeToolLinks.map((t) => (
                      <Link key={t.href} href={t.href} className={linkChipClass}>
                        {t.label}
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "employer",
            label: employerTabLabel,
            content: (
              <div className="space-y-4 sm:space-y-5">
                <div
                  className="rounded-xl border border-border/80 bg-surface-muted/60 px-4 py-3.5 text-sm leading-relaxed text-foreground shadow-sm ring-1 ring-border/40 sm:px-5 sm:py-4"
                  role="note"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Employer / payroll note</p>
                  <p className="mt-2 font-medium text-foreground">{employerObligationDisclaimer}</p>
                </div>
                {employerSections.map((block) => (
                  <AudienceBlock key={block.id} block={block} />
                ))}
              </div>
            ),
          },
        ]}
      />
      {footNote ? (
        <div className="rounded-xl border border-border/80 bg-surface-muted/50 px-4 py-3 ring-1 ring-border/40">
          <BoldParagraph
            text={footNote}
            className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
          />
        </div>
      ) : null}
    </div>
  );
}
