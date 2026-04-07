"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck2,
  CheckSquare,
  ClipboardCheck,
  FileText,
  Globe,
  Home,
  Landmark,
  Map,
  MapPinned,
  Plane,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { NlPortalContent } from "@expatlife/content";
import { useOriginCountry } from "@/hooks/use-origin-country";
import { originToChecklistRoute, originToCountryRoute } from "@/lib/origin";
import { Button } from "@/components/ui/button";
import { CardLink } from "@/components/ui/card-link";
import { Container } from "@/components/ui/container";
import { InfoBox } from "@/components/ui/info-box";
import { Section } from "@/components/ui/section";
import { PillarMainStack } from "@/components/page/pillar-template";
import { SiteFramedHero } from "@/components/site/SiteFramedHero";
import { siteHubHeroSectionClass } from "@/lib/ui/site-shell-identity";
import { Select } from "@/components/ui/input";

function toFlagEmoji(code: string) {
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  map: Map,
  mapPinned: MapPinned,
  calendarCheck2: CalendarCheck2,
  checkSquare: CheckSquare,
  fileText: FileText,
  plane: Plane,
  home: Home,
  briefcase: Briefcase,
};

function getIcon(iconKey: string) {
  const Icon = ICON_MAP[iconKey] ?? ArrowRight;
  return <Icon className="h-4 w-4" />;
}

function resolveHref(
  cta: { href?: string; hrefKey?: string },
  originSlug: string
): string {
  if (cta.href) return cta.href;
  if (cta.hrefKey === "checklist") return originToChecklistRoute(originSlug);
  return "/netherlands/moving-to-the-netherlands";
}

function resolveToolHref(
  item: { href?: string; hrefKey?: string },
  originSlug: string
): string {
  if (item.href) return item.href;
  if (item.hrefKey === "checklist") return originToChecklistRoute(originSlug);
  if (item.hrefKey === "documentReadiness")
    return `/netherlands/moving/tools/document-readiness?from=${originSlug}`;
  if (item.hrefKey === "first90Days")
    return `/netherlands/moving/tools/first-90-days?from=${originSlug}`;
  return "#";
}

const WHY_ICONS: Array<[React.ComponentType<{ className?: string }>, string]> = [
  [Sparkles, "text-sky-600"],
  [ClipboardCheck, "text-teal-600"],
  [Landmark, "text-amber-600"],
];

export function PortalNetherlandsTemplate({ content }: { content: NlPortalContent }) {
  const { origin, origins, setOrigin } = useOriginCountry();

  const primaryCtaHref = resolveHref(content.hero.primaryCta, origin.slug);
  const secondaryCtaHref = resolveHref(content.hero.secondaryCta, origin.slug);

  const toolsWithHref = content.executionTools.items.map((item) => ({
    ...item,
    href: resolveToolHref(item, origin.slug),
  }));

  return (
    <>
      <section className={siteHubHeroSectionClass}>
        <Container>
          <SiteFramedHero>
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copilot-primary">
                {content.hero.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-copilot-text-primary md:text-5xl">
                {content.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-copilot-text-secondary md:text-lg">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={primaryCtaHref}>
                  <Button className="min-w-[220px] justify-center gap-2">
                    {content.hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={secondaryCtaHref}>
                  <Button variant="secondary" className="min-w-[220px] justify-center">
                    {content.hero.secondaryCta.label}
                  </Button>
                </Link>
              </div>
              <div className="pt-4">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {content.hero.quickRoutesLabel}
                </p>
                <div className="flex flex-wrap gap-3">
                  {origins.slice(0, 4).map((o) => (
                    <Link
                      key={o.code}
                      href={originToCountryRoute(o.slug)}
                      className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      {o.label} → Netherlands
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {content.whyExpatLife.eyebrow}
              </p>
              <ul className="mt-6 space-y-4" role="list">
                {content.whyExpatLife.items.map((item, i) => {
                  const [Icon, colorClass] = WHY_ICONS[i] ?? [Sparkles, "text-sky-600"];
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm"
                    >
                      <Icon className={`h-5 w-5 shrink-0 ${colorClass}`} />
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          </SiteFramedHero>
        </Container>
      </section>

      <PillarMainStack className="mt-6 space-y-0 sm:mt-7 sm:space-y-0 md:space-y-0">
      <Section
        eyebrow={content.personalizedEntry.eyebrow}
        title={content.personalizedEntry.title}
        subtitle={content.personalizedEntry.subtitle}
        className="rounded-3xl bg-gradient-to-r from-cyan-50/70 via-white to-brand-50/70"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="grid gap-4 md:grid-cols-[minmax(260px,420px)_minmax(170px,auto)_minmax(170px,auto)] md:items-end">
            <div className="max-w-[420px]">
              <p className="mb-2 text-sm font-medium text-slate-700">
                {content.personalizedEntry.originLabel}
              </p>
              <Select value={origin.slug} onChange={(e) => setOrigin(e.target.value)} className="w-full">
                {origins.map((o) => (
                  <option key={o.code} value={o.slug}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </div>
            <Link href={originToCountryRoute(origin.slug)}>
              <Button variant="secondary" className="w-full min-w-[170px] justify-center">
                {content.personalizedEntry.seeCountryRouteLabel}
              </Button>
            </Link>
            <Link href={originToChecklistRoute(origin.slug)}>
              <Button className="w-full min-w-[170px] justify-center">
                {content.personalizedEntry.getChecklistLabel}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={content.quickStart.eyebrow}
        title={content.quickStart.title}
        subtitle={content.quickStart.subtitle}
        className="rounded-3xl bg-gradient-to-r from-brand-50/75 to-violet-50/45"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.quickStart.items.map((item) => (
            <CardLink
              key={item.href}
              href={item.href}
              title={item.title}
              description={item.description}
              icon={getIcon(item.icon)}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={content.popularGuides.eyebrow}
        title={content.popularGuides.title}
        subtitle={content.popularGuides.subtitle}
        className="rounded-3xl bg-gradient-to-r from-sky-50/70 to-white"
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {content.popularGuides.items.map((guide) => (
            <CardLink
              key={guide.href}
              href={guide.href}
              title={guide.title}
              description={content.popularGuides.defaultDescription}
              icon={<ArrowRight className="h-4 w-4" />}
              meta={guide.readTime}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={content.movingCluster.eyebrow}
        title={content.movingCluster.title}
        subtitle={content.movingCluster.subtitle}
        className="rounded-3xl bg-gradient-to-r from-indigo-50/70 to-cyan-50/60"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="max-w-3xl text-slate-600">{content.movingCluster.body}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/netherlands/moving-to-the-netherlands">
              <Button>{content.movingCluster.openHubLabel}</Button>
            </Link>
            <Link href="/netherlands/moving/tools/moving-checklist">
              <Button variant="secondary">Generate moving checklist</Button>
            </Link>
          </div>
          <InfoBox title={content.movingCluster.infoBoxTitle} className="mt-5">
            <ul className="list-disc space-y-1 pl-4">
              {content.movingCluster.infoBoxItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </InfoBox>
        </div>
      </Section>

      <Section
        eyebrow={content.executionTools.eyebrow}
        title={content.executionTools.title}
        subtitle={content.executionTools.subtitle}
        className="rounded-3xl bg-gradient-to-r from-emerald-50/65 to-white"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {toolsWithHref.map((tool) => (
            <div
              key={tool.href + tool.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                {getIcon(tool.icon)}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{tool.title}</h3>
              <p className="mt-1 flex-1 text-sm text-slate-600">{tool.description}</p>
              <Link href={tool.href} className="mt-4">
                <Button variant="secondary" className="gap-2 text-sm">
                  {content.executionTools.openToolLabel} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={content.countryRoutes.eyebrow}
        title={content.countryRoutes.title}
        subtitle={content.countryRoutes.subtitle}
        className="rounded-3xl bg-gradient-to-r from-amber-50/65 to-brand-50/40"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {origins.slice(0, 12).map((o) => (
            <Link
              key={o.code}
              href={originToCountryRoute(o.slug)}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xl" aria-hidden="true">
                {toFlagEmoji(o.code)}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{o.label} → Netherlands</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={content.nextSteps.eyebrow}
        title={content.nextSteps.title}
        subtitle={content.nextSteps.subtitle}
        className="rounded-3xl bg-gradient-to-r from-violet-50/55 to-sky-50/50"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {content.nextSteps.cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
            >
              <div
                className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                  i === 0 ? "bg-sky-50 text-sky-700" : "bg-amber-50 text-amber-700"
                }`}
              >
                {getIcon(card.icon)}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.description}</p>
              <Link href={card.href} className="mt-4 inline-block">
                <Button variant="secondary">{card.buttonLabel}</Button>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        subtitle={content.about.subtitle}
        className="rounded-3xl bg-gradient-to-r from-slate-50 to-brand-50/35"
      >
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600">{content.about.body}</p>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
            <p className="text-sm text-slate-600">{content.about.disclaimer}</p>
          </div>
          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            {content.about.bullets.map((bullet, i) => (
              <p key={i} className="inline-flex items-center gap-2">
                {i === 0 ? (
                  <Globe className="h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />
                ) : (
                  <Wrench className="h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />
                )}{" "}
                {bullet}
              </p>
            ))}
          </div>
        </div>
      </Section>
      </PillarMainStack>
    </>
  );
}
