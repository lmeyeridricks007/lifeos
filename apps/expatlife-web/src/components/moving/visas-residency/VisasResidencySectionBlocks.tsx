import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import type { MoveVisaResidencyRouteCard, MoveVisaResidencySection } from "./config/moveVisaResidency.types";

const CHIP_BADGE =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/20";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

function JourneySectionDivider() {
  return (
    <div
      className="mx-auto hidden h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-border/80 to-transparent sm:block"
      aria-hidden
    />
  );
}

export function VisasResidencySectionBlocks({ sections }: { sections: readonly MoveVisaResidencySection[] }) {
  return (
    <>
      {sections.map((section, idx) => (
        <Fragment key={section.id}>
          {idx > 0 ? <JourneySectionDivider /> : null}
          {section.kind === "workRoutes" ? (
            <SectionBlock
              id={section.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={section.eyebrow}
              title={section.title}
              subtitle={section.subtitle}
            >
              <ul className="space-y-3 text-sm leading-relaxed text-foreground-muted" role="list">
                {section.keyPoints.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <BoldParagraph text={line} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-card border border-border bg-surface-muted/50 p-5 ring-1 ring-border/10">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.pairedToolsEyebrow}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {section.pairedTools.map((t) => (
                    <li key={t.href}>
                      <Link href={t.href} className="font-semibold text-link hover:underline">
                        {t.label}
                      </Link>{" "}
                      {t.description}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBlock>
          ) : null}

          {section.kind === "studyFamily" ? (
            <SectionBlock
              id={section.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={section.eyebrow}
              title={section.title}
              subtitle={section.subtitle}
            >
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {section.blocks.map((s) => (
                  <div
                    key={s.id}
                    className="relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5"
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-0.5 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={CHIP_BADGE}>{s.chip}</span>
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">{s.title}</h3>
                    </div>
                    <BoldParagraph
                      text={s.intro}
                      className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <Link
                      href={s.nextStep.href}
                      className="mt-3 inline-flex min-h-[40px] items-center text-sm font-semibold text-link hover:text-link-hover hover:underline"
                    >
                      {s.nextStep.ctaLabel} →
                    </Link>
                  </div>
                ))}
              </div>
            </SectionBlock>
          ) : null}

          {section.kind === "afterArrival" ? (
            <SectionBlock
              id={section.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={section.eyebrow}
              title={section.title}
              subtitle={section.subtitle}
            >
              <div className="max-w-3xl space-y-3">
                <BoldParagraph
                  text={section.intro}
                  className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
                <p className="text-sm leading-relaxed text-foreground-muted">
                  <span className="font-semibold text-foreground">{section.openNextLabel}</span>
                  {section.openNextLinks.map((l, i) => (
                    <span key={l.href}>
                      {i > 0 ? <span aria-hidden> · </span> : null}
                      <Link href={l.href} className="font-semibold text-link hover:underline">
                        {l.label}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {section.phases.map((ph) => (
                  <div
                    key={ph.label}
                    className="rounded-xl border border-border/80 bg-surface-muted/60 px-4 py-3 ring-1 ring-inset ring-border/10"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{ph.label}</p>
                    <BoldParagraph
                      text={ph.text}
                      className="mt-1 text-[13px] leading-snug text-foreground sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 max-w-3xl space-y-2">
                <BoldParagraph
                  text={section.moreNote}
                  className="text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
                <p className="text-sm text-foreground-muted">
                  {section.docLinks.map((l, i) => (
                    <span key={l.href}>
                      {i > 0 ? <span aria-hidden> · </span> : null}
                      <Link href={l.href} className="font-semibold text-link hover:underline">
                        {l.label}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-6 rounded-card border border-border bg-surface-muted/40 p-4 ring-1 ring-border/10 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">First weeks — quick links</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {section.primaryCtas.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className="group rounded-card border border-border bg-surface-raised px-4 py-3 text-sm font-semibold text-foreground shadow-card ring-1 ring-border/10 transition-colors hover:border-border-strong hover:shadow-card-hover"
                    >
                      {cta.label}
                      <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
                        Open <ArrowRight className="h-3 w-3 shrink-0" aria-hidden />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </SectionBlock>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}

/** Route doorway grid — separate export so parent controls placement next to `routeCardRenderer` slot. */
export function VisasResidencyRouteDoorwayGrid({
  startHereRegion,
  routeCards,
}: {
  startHereRegion: { id: string; eyebrow: string; title: string; subtitle: string };
  routeCards: readonly MoveVisaResidencyRouteCard[];
}) {
  return (
    <SectionBlock
      id={startHereRegion.id}
      className={cn(SECTION_SCROLL_MARGIN, "!pt-2 sm:!pt-3 md:!pt-4")}
      eyebrow={startHereRegion.eyebrow}
      title={startHereRegion.title}
      subtitle={startHereRegion.subtitle}
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {routeCards.map((d) => (
          <article
            key={d.id}
            className={cn(
              "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-copilot-primary/[0.07] bg-copilot-surface p-4 shadow-expatos-md sm:p-5",
              movingNlCardShadowHoverClass,
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <h3 className="pt-1 text-[0.9375rem] font-bold leading-snug tracking-tight text-copilot-text-primary sm:text-base">{d.title}</h3>
            <p className="mt-2 text-[13px] leading-snug text-copilot-text-secondary sm:text-sm sm:leading-relaxed">{d.intro}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Route tags">
              {d.chips.map((c) => (
                <li key={c}>
                  <span className={CHIP_BADGE}>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-lg bg-copilot-bg-soft/80 px-3 py-2 ring-1 ring-copilot-primary/[0.06]">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Best for</p>
              <p className="mt-0.5 text-[13px] font-medium leading-snug text-copilot-text-primary sm:text-sm">{d.bestFor}</p>
            </div>
            <div className="mt-auto pt-4">
              <Link
                href={d.nextStep.href}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-copilot-primary hover:text-copilot-primary-strong hover:underline"
              >
                {d.nextStep.ctaLabel}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
