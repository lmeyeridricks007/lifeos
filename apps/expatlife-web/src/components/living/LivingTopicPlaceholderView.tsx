import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuidePageRoot } from "@/components/page-families";
import { PillarMainStack } from "@/components/page/pillar-template";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getSiteOrigin } from "@/lib/site-origin";
import { siteGuideColumnPadYClass } from "@/lib/ui/site-shell-identity";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { LIVING_SURVIVAL_GUIDE_PATH } from "@/src/components/living/livingPillarContent";
import type { LivingTopicPlaceholderSpec } from "@/src/components/living/livingTopicPlaceholders";

type Props = { content: LivingTopicPlaceholderSpec };

export function LivingTopicPlaceholderView({ content }: Props) {
  const baseUrl = getSiteOrigin();
  const hubUrl = new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString();
  const pageUrl = new URL(content.path, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Living in the Netherlands", item: hubUrl },
    { name: content.breadcrumbLabel, item: pageUrl },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <GuidePageRoot>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <PillarMainStack className="mt-0 space-y-6 pt-6 sm:space-y-7 sm:pt-7 md:space-y-8 md:pt-8">
            <nav aria-label="Breadcrumbs" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span className="text-foreground-faint" aria-hidden>
                /
              </span>
              <Link href="/netherlands/" className="transition-colors hover:text-foreground">
                Netherlands
              </Link>
              <span className="text-foreground-faint" aria-hidden>
                /
              </span>
              <Link href={LIVING_SURVIVAL_GUIDE_PATH} className="transition-colors hover:text-foreground">
                Living in the Netherlands
              </Link>
              <span className="text-foreground-faint" aria-hidden>
                /
              </span>
              <span className="text-foreground">{content.breadcrumbLabel}</span>
            </nav>

            <header className="max-w-3xl">
              <Eyebrow className="text-brand-strong">Living in the Netherlands</Eyebrow>
              <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.35rem] md:leading-tight">
                {content.h1}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">{content.intro}</p>
            </header>

            <div
              className="max-w-3xl rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-muted/80 via-surface-raised to-accent-muted/40 p-5 shadow-card ring-1 ring-border/20 sm:p-6"
              role="status"
              aria-live="polite"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-surface-raised px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-strong">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Expanding soon
                </span>
                <span className="text-xs font-medium text-foreground-muted">Interim page · full guide in progress</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                You’re on a real route—we’re fleshing out long-form guidance, examples, and official references. Until then,
                use the Survival Guide and the links below so nothing feels like a dead end.
              </p>
            </div>

            <section className="max-w-3xl" aria-labelledby="living-placeholder-outline">
              <h2 id="living-placeholder-outline" className="text-lg font-semibold tracking-tight text-foreground">
                What this guide will cover
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground-muted" role="list">
                {content.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="min-w-0" aria-labelledby="living-placeholder-next">
              <h2 id="living-placeholder-next" className="text-lg font-semibold tracking-tight text-foreground">
                Helpful next steps
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2" role="list">
                {content.relatedLinks.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="flex h-full flex-col rounded-2xl border border-border/80 bg-surface-raised p-4 text-left shadow-card ring-1 ring-inset ring-border/10 transition-colors hover:border-brand/25 hover:bg-surface-muted"
                    >
                      <span className="font-semibold text-foreground">{r.label}</span>
                      <span className="mt-1.5 text-sm text-foreground-muted">{r.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-wrap gap-3 border-t border-border/70 pt-6">
              <Link
                href={LIVING_SURVIVAL_GUIDE_PATH}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Survival Guide
              </Link>
              <Link
                href="/netherlands/tools/"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Open tools hub
              </Link>
              <Link
                href="/netherlands/moving-to-the-netherlands/"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Moving to the Netherlands
              </Link>
            </div>
          </PillarMainStack>
        </Container>
      </GuidePageRoot>
    </>
  );
}
