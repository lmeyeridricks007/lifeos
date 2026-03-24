import Link from "next/link";
import Image from "next/image";
import type {
  GuideData,
  GuideSection,
  GuideSectionService,
  GuideSectionServiceResolved,
  GuideBankComparison,
  GuideInsurerComparison,
  GuideDocumentTranslationCountryExample,
  GuideDocumentTranslationDocumentType,
  GuideDocumentTranslationCostItem,
  GuideDocumentTranslationTranslatorResource,
  GuideSalaryComparisonExample,
  GuideSalaryComparisonBarMarker,
} from "@/src/lib/guides/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { Accordion } from "@/components/ui/accordion";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { AffiliateCompactList } from "@/src/components/affiliates/AffiliateCompactList";
import type { AffiliatePlacement, AffiliateProvider } from "@/src/lib/affiliates/types";
import { FeaturedToolsBlock } from "@/src/components/guides/FeaturedToolsBlock";
import { ExampleScenarioCards } from "@/src/components/guides/ExampleScenarioCards";
import { EditorialContentHeader } from "@/src/components/content/EditorialContentHeader";
import { ContentActionBar } from "@/src/components/content/ContentActionBar";
import { PillarTOC } from "@/components/content/PillarTOC";
import { cn } from "@/lib/cn";
import { resolveGuideSectionServices } from "@/src/lib/guides/resolveGuideSectionServices";

/** Slugs that support "Download PDF" (checklist-style guides). */
const CHECKLIST_PDF_SLUGS = ["moving-checklist-netherlands", "documents-needed-to-move-netherlands"] as const;

export type GuidePageTemplateProps = {
  data: GuideData;
  /** Pre-loaded affiliate blocks by placement id (from loadPlacementWithProviders). */
  affiliateBlocks?: Record<
    string,
    {
      placement: AffiliatePlacement;
      items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
    }
  >;
  /** Full canonical URL for share/copy. */
  canonicalUrl?: string;
};

const pageContainerClass = "w-full max-w-screen-2xl";

/** Shared card-styled block for section services (Week 2, Week 3, etc.). Same layout and styling everywhere. */
function GuideSectionServicesCards({ services }: { services: GuideSectionService[] }) {
  if (!services.length) return null;
  const resolved: GuideSectionServiceResolved[] = resolveGuideSectionServices(services);
  return (
    <div
      className={cn(
        "mt-6 rounded-2xl border border-slate-200/60 bg-slate-50/60 p-6 md:p-8",
        "relative overflow-hidden",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-cyan-500 before:opacity-80"
      )}
    >
      <div className="relative pl-2">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          Services often used in this step
        </h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {resolved.map((s, i) => {
            const parts = s.name.split(/[\s-]+/).filter(Boolean);
            const initials =
              parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : s.name.slice(0, 2).toUpperCase();
            return (
              <article
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
              >
                <div className="flex gap-4">
                  {s.logo?.src ? (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white">
                      {s.logo.src.startsWith("/") ? (
                        <img
                          src={s.logo.src}
                          alt={s.logo.alt || s.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 object-contain p-1"
                        />
                      ) : (
                        <Image
                          src={s.logo.src}
                          alt={s.logo.alt || s.name}
                          width={48}
                          height={48}
                          className="object-contain p-1"
                        />
                      )}
                    </div>
                  ) : (
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 font-semibold text-xs"
                      aria-hidden
                    >
                      {initials}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-slate-900">{s.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
                    {s.indicativeCost ? (
                      <p className="mt-1 text-xs text-slate-500">{s.indicativeCost}</p>
                    ) : null}
                    {s.reason ? (
                      <p className="mt-1 text-xs text-slate-500">{s.reason}</p>
                    ) : null}
                    <div className="mt-4">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
                      >
                        View {s.name}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
}

/** Bank comparison cards: overview, features, pros, cons, typical costs, website link, logo. */
function GuideSectionBankComparisons({
  id,
  heading,
  body,
  bankComparisons,
}: {
  id: string;
  heading: string;
  body?: string[];
  bankComparisons: GuideBankComparison[];
}) {
  const typeLabel: Record<GuideBankComparison["type"], string> = {
    traditional: "Traditional bank",
    digital: "Digital bank",
    platform: "Financial platform",
  };
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {bankComparisons.map((bank) => (
          <article
            key={bank.name}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
          >
            <div className="flex items-start gap-4">
              {bank.logo?.src ? (
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-white p-1">
                  {bank.logo.src.startsWith("/") ? (
                    <img
                      src={bank.logo.src}
                      alt={bank.logo.alt || bank.name}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <Image
                      src={bank.logo.src}
                      alt={bank.logo.alt || bank.name}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  )}
                </div>
              ) : null}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{bank.name}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {typeLabel[bank.type]}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">{bank.overview}</p>
            {bank.typicalCosts ? (
              <p className="mt-2 text-sm font-medium text-slate-800">Typical costs: {bank.typicalCosts}</p>
            ) : null}
            {bank.features?.length ? (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Features</p>
                <ul className="mt-1.5 space-y-1 text-sm text-slate-700">
                  {bank.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-500" aria-hidden>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {bank.pros?.length ? (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pros</p>
                <ul className="mt-1.5 space-y-1 text-sm text-slate-700">
                  {bank.pros.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-500" aria-hidden>+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {bank.cons?.length ? (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Cons</p>
                <ul className="mt-1.5 space-y-1 text-sm text-slate-600">
                  {bank.cons.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-500" aria-hidden>−</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <a
                href={bank.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100"
              >
                Visit {bank.name}
                <span className="ml-1" aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-slate-500">
        Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}

/** Health insurer directory cards: overview, features, costs, expat note, website link, logo. */
function GuideSectionInsurerComparisons({
  id,
  heading,
  body,
  insurerComparisons,
}: {
  id: string;
  heading: string;
  body?: string[];
  insurerComparisons: GuideInsurerComparison[];
}) {
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {insurerComparisons.map((insurer) => (
          <article
            key={insurer.name}
            className={cn(
              "flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm",
              "transition hover:border-slate-300 hover:shadow-md"
            )}
          >
            {/* Card header: logo + name + parent */}
            <div className="flex items-center gap-4 p-5 pb-3 sm:p-6 sm:pb-4">
              {insurer.logo?.src ? (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50/80 p-2">
                  {insurer.logo.src.startsWith("/") ? (
                    <img
                      src={insurer.logo.src}
                      alt={insurer.logo.alt || insurer.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={insurer.logo.src}
                      alt={insurer.logo.alt || insurer.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
              ) : (
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 text-sm font-bold"
                  aria-hidden
                >
                  {insurer.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">{insurer.name}</h3>
                {insurer.parentGroup ? (
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {insurer.parentGroup}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Body: overview + expat note */}
            <div className="px-5 sm:px-6">
              <p className="text-sm leading-relaxed text-slate-700">{insurer.overview}</p>
              {insurer.expatNote ? (
                <p className="mt-2.5 rounded-lg bg-slate-50/80 px-3 py-2 text-sm italic leading-snug text-slate-600">
                  {insurer.expatNote}
                </p>
              ) : null}
            </div>

            {/* Cost band */}
            {insurer.typicalCosts ? (
              <div className="mx-5 mt-4 sm:mx-6">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800/90">
                    Typical costs
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-emerald-900">{insurer.typicalCosts}</p>
                </div>
              </div>
            ) : null}

            {/* Features / pros / cons */}
            {(insurer.features?.length || insurer.pros?.length || insurer.cons?.length) ? (
              <div className="mt-4 space-y-3 px-5 sm:px-6">
                {insurer.features?.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Features</p>
                    <ul className="mt-1.5 space-y-1 text-sm text-slate-700">
                      {insurer.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-emerald-500" aria-hidden>✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {insurer.pros?.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pros</p>
                    <ul className="mt-1.5 space-y-1 text-sm text-slate-700">
                      {insurer.pros.map((p, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-emerald-500" aria-hidden>+</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {insurer.cons?.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Cons</p>
                    <ul className="mt-1.5 space-y-1 text-sm text-slate-600">
                      {insurer.cons.map((c, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-amber-500" aria-hidden>−</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 bg-slate-50/50 px-5 py-4 sm:px-6">
              <a
                href={insurer.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                Visit {insurer.name}
                <span className="ml-1.5 text-slate-300" aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-slate-500">
        Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}

/** Visual timeline for priority checklists (e.g. first priorities after arrival). */
function GuideSectionNumberedSteps({
  id,
  heading,
  body,
  steps,
  ctaBlock,
  links,
}: {
  id: string;
  heading: string;
  body?: string[];
  steps: string[];
  ctaBlock?: GuideSection["ctaBlock"];
  links?: GuideSection["links"];
}) {
  return (
    <div className="w-full space-y-6">
      <h2
        id={id}
        className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900"
      >
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <div className="relative">
        {/* Vertical timeline track - muted */}
        <div
          className="absolute left-[22px] top-6 bottom-12 w-0.5 rounded-full bg-slate-200/80"
          aria-hidden
        />
        <ol className="list-none space-y-0">
          {steps.map((step, index) => {
            const accents = [
              "border-l-blue-500 bg-blue-50/80",
              "border-l-teal-500 bg-teal-50/80",
              "border-l-amber-500 bg-amber-50/80",
              "border-l-blue-500 bg-blue-50/80",
            ] as const;
            const nodeAccents = [
              "border-blue-400 bg-blue-50 text-blue-700",
              "border-teal-400 bg-teal-50 text-teal-700",
              "border-amber-400 bg-amber-50 text-amber-700",
              "border-blue-400 bg-blue-50 text-blue-700",
            ] as const;
            const acc = accents[index % accents.length];
            const nodeAcc = nodeAccents[index % nodeAccents.length];
            return (
              <li
                key={index}
                className="relative flex items-stretch gap-5 pb-6 last:pb-0"
              >
                {/* Timeline node - muted accent */}
                <span
                  className={cn(
                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold shadow-sm ring-4 ring-white",
                    nodeAcc
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                {/* Step card - same palette as quick-answer cards */}
                <div
                  className={cn(
                    "min-w-0 flex-1 rounded-xl border border-slate-200/80 border-l-4 py-3.5 px-4 shadow-sm transition hover:shadow",
                    acc
                  )}
                >
                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    {step}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {ctaBlock ? (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-900">{ctaBlock.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{ctaBlock.supportingText}</p>
          <div className="mt-4">
            <Link
              href={ctaBlock.primaryHref}
              className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              {ctaBlock.primaryLabel}
              <span aria-hidden className="ml-1">→</span>
            </Link>
          </div>
        </div>
      ) : null}
      {links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-700 hover:text-brand-800 underline">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Three-phase timeline (Before move / Arrival week / First 90 days) for country guide sections. */
function GuideSectionTimeline({
  id,
  heading,
  body,
  stages,
}: {
  id: string;
  heading: string;
  body?: string[];
  stages: { beforeMove: string[]; arrivalWeek: string[]; first90Days: string[] };
}) {
  const phases = [
    { key: "before" as const, label: "Before move", items: stages.beforeMove, accent: "border-l-blue-500 bg-blue-50/40" },
    { key: "arrival" as const, label: "Arrival week", items: stages.arrivalWeek, accent: "border-l-teal-500 bg-teal-50/40" },
    { key: "first90" as const, label: "First 90 days", items: stages.first90Days, accent: "border-l-amber-500 bg-amber-50/40" },
  ];
  return (
    <div className="w-full space-y-6">
      <h2
        id={id}
        className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900"
      >
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <article
            key={phase.key}
            className={cn(
              "relative rounded-xl border border-slate-200/80 p-5 shadow-sm",
              "border-l-4",
              phase.accent
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-white"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-slate-900">{phase.label}</h3>
            </div>
            <ul className="mt-4 space-y-2 pl-0">
              {phase.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Visa and route awareness section with colored cards per route type. */
function GuideSectionVisaRoutes({
  section,
}: {
  section: GuideSection & { visaRoutes: { commonRoutes: string[]; notes: string[] }; callout?: GuideSection["callout"]; links?: GuideSection["links"] };
}) {
  const { id, heading, body, visaRoutes, callout, links } = section;
  const accents = [
    "border-l-blue-500 bg-blue-50/60",
    "border-l-teal-500 bg-teal-50/60",
    "border-l-amber-500 bg-amber-50/60",
    "border-l-violet-500 bg-violet-50/60",
  ] as const;
  const routeItems = visaRoutes.commonRoutes.map((s) => {
    const dash = s.indexOf(" — ");
    if (dash >= 0) {
      return { name: s.slice(0, dash).trim(), description: s.slice(dash + 3).trim() };
    }
    return { name: s, description: "" };
  });
  const calloutVariant = callout?.type === "warning" ? "warn" : callout?.type === "tip" ? "success" : "info";

  return (
    <div className="w-full space-y-6">
      <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routeItems.map((item, i) => (
          <article
            key={item.name}
            className={cn(
              "rounded-xl border border-slate-200/80 p-4 shadow-sm",
              "border-l-4",
              accents[i % accents.length]
            )}
          >
            <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
            {item.description ? (
              <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">{item.description}</p>
            ) : null}
          </article>
        ))}
      </div>
      {visaRoutes.notes?.length ? (
        <ul className="space-y-1 text-sm text-slate-600">
          {visaRoutes.notes.map((note) => (
            <li key={note} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {callout ? (
        <InfoBox variant={calloutVariant} title={callout.title}>
          <p>{callout.text}</p>
          {callout.href ? (
            <p className="mt-2">
              <a
                href={callout.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-700 underline hover:text-sky-800"
              >
                {callout.linkLabel ?? "View source"}
              </a>
            </p>
          ) : null}
        </InfoBox>
      ) : null}
      {links?.length ? (
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-700 hover:text-brand-800 underline">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Country-specific translation/legalisation workflow examples (document translation guide). */
function GuideSectionCountryExamples({
  id,
  heading,
  body,
  examples,
  disclaimer,
}: {
  id: string;
  heading: string;
  body?: string[];
  examples: GuideDocumentTranslationCountryExample[];
  disclaimer: string;
}) {
  const accents = [
    "border-l-blue-500 bg-blue-50/60",
    "border-l-teal-500 bg-teal-50/60",
    "border-l-amber-500 bg-amber-50/60",
    "border-l-violet-500 bg-violet-50/60",
  ] as const;
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <div className="grid gap-6 sm:grid-cols-2">
        {examples.map((ex, i) => (
          <article
            key={ex.countryCode}
            className={cn(
              "rounded-xl border border-slate-200/80 p-5 shadow-sm",
              "border-l-4",
              accents[i % accents.length]
            )}
          >
            <h3 className="text-lg font-semibold text-slate-900">{ex.country}</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">{ex.summary}</p>
            {ex.note ? (
              <p className="mt-2 text-xs text-slate-600">{ex.note}</p>
            ) : null}
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              {ex.workflow.map((step, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <a
                href={ex.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
              >
                Official steps for {ex.country}
                <span aria-hidden> →</span>
              </a>
            </p>
          </article>
        ))}
      </div>
      <p className="rounded-lg border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm text-amber-900">
        {disclaimer}
      </p>
    </div>
  );
}

/** Document types that often need translation (document translation guide). */
function GuideSectionDocumentTypes({
  id,
  heading,
  body,
  documentTypes,
}: {
  id: string;
  heading: string;
  body?: string[];
  documentTypes: GuideDocumentTranslationDocumentType[];
}) {
  const cardAccents = [
    "border-l-blue-500 bg-gradient-to-br from-blue-50/90 to-white",
    "border-l-teal-500 bg-gradient-to-br from-teal-50/90 to-white",
    "border-l-amber-500 bg-gradient-to-br from-amber-50/90 to-white",
    "border-l-violet-500 bg-gradient-to-br from-violet-50/90 to-white",
  ] as const;
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <ul className="grid gap-5 sm:grid-cols-2">
        {documentTypes.map((doc, index) => (
          <li
            key={doc.id}
            className={cn(
              "flex flex-col rounded-xl border border-slate-200/90 border-l-4 p-5 shadow-sm transition hover:shadow-md",
              cardAccents[index % cardAccents.length]
            )}
          >
            <h3 className="text-base font-semibold text-slate-900">{doc.label}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {doc.whereUsed.map((use) => (
                <span
                  key={use}
                  className="rounded-md bg-slate-200/70 px-2 py-0.5 text-xs font-medium text-slate-700"
                >
                  {use}
                </span>
              ))}
            </div>
            {doc.legalisationRelevant ? (
              <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-600">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
                Legalisation may also apply
              </p>
            ) : null}
            {doc.relatedGuideHref && doc.relatedGuideLabel ? (
              <Link
                href={doc.relatedGuideHref}
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
              >
                {doc.relatedGuideLabel}
                <span className="text-slate-400" aria-hidden>→</span>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Sworn translator resources / agencies (document translation guide). */
function GuideSectionTranslatorResources({
  resources,
}: {
  resources: GuideDocumentTranslationTranslatorResource[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((r) => {
        const initials = r.name
          .split(/[\s/]+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((w) => w[0])
          .join("")
          .toUpperCase() || "?";
        return (
          <article
            key={r.id}
            className={cn(
              "flex flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:shadow-md",
              r.isOfficialRegister && "border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50/50 to-white"
            )}
          >
            <div className="flex items-start gap-4">
              {r.logo?.src ? (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white">
                  {r.logo.src.startsWith("/") ? (
                    <img
                      src={r.logo.src}
                      alt={r.logo.alt}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain p-1"
                    />
                  ) : (
                    <Image
                      src={r.logo.src}
                      alt={r.logo.alt}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain p-1"
                    />
                  )}
                </div>
              ) : (
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold",
                    r.isOfficialRegister
                      ? "border border-blue-200 bg-blue-50 text-blue-700"
                      : "border border-slate-200 bg-slate-100 text-slate-600"
                  )}
                  aria-hidden
                >
                  {initials}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-slate-900">{r.name}</h3>
                {r.isOfficialRegister ? (
                  <span className="mt-0.5 inline-block text-xs font-medium uppercase tracking-wide text-blue-600">
                    Official register
                  </span>
                ) : null}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{r.description}</p>
            {r.costNote ? (
              <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
                {r.costNote}
              </p>
            ) : null}
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
            >
              Visit website
              <span className="text-slate-400" aria-hidden>→</span>
            </a>
          </article>
        );
      })}
    </div>
  );
}

/** Cost and timing ranges (document translation guide). */
function GuideSectionTranslationCosts({
  id,
  heading,
  body,
  costRanges,
  timing,
  disclaimer,
}: {
  id: string;
  heading: string;
  body?: string[];
  costRanges: GuideDocumentTranslationCostItem[];
  timing?: Array<{ label: string; range: string }>;
  disclaimer?: string;
}) {
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      {body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <ContentTable headers={["Item", "Indicative range", "Note"]} minWidth="360px">
          {costRanges.map((row) => (
            <ContentTableRow key={row.id}>
              <ContentTableCell emphasis>{row.label}</ContentTableCell>
              <ContentTableCell>{row.range}</ContentTableCell>
              <ContentTableCell>{row.note ?? "—"}</ContentTableCell>
            </ContentTableRow>
          ))}
        </ContentTable>
      </div>
      {timing?.length ? (
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            Turnaround
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {timing.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-xl border border-slate-200/90 p-4",
                  i === 0
                    ? "border-l-4 border-l-teal-500 bg-gradient-to-br from-teal-50/80 to-white"
                    : "border-l-4 border-l-amber-500 bg-gradient-to-br from-amber-50/80 to-white"
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{t.range}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {disclaimer ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-4">
          <p className="text-sm text-slate-700 leading-relaxed">{disclaimer}</p>
        </div>
      ) : null}
    </div>
  );
}

function QuickAnswersRow({ items }: { items: GuideData["quickAnswers"] }) {
  if (!items?.length) return null;
  const cardStyles = [
    "rounded-xl border border-slate-200/80 border-l-4 border-l-blue-500 bg-blue-50/80 p-4 shadow-sm",
    "rounded-xl border border-slate-200/80 border-l-4 border-l-teal-500 bg-teal-50/80 p-4 shadow-sm",
    "rounded-xl border border-slate-200/80 border-l-4 border-l-amber-500 bg-amber-50/80 p-4 shadow-sm",
  ];
  const labelStyles = [
    "text-xs font-semibold uppercase tracking-wide text-blue-700",
    "text-xs font-semibold uppercase tracking-wide text-teal-700",
    "text-xs font-semibold uppercase tracking-wide text-amber-700",
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => {
        const styleIndex = i % 3;
        return (
          <div key={i} className={cardStyles[styleIndex]}>
            <p className={labelStyles[styleIndex]}>{item.label}</p>
            <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}

const salaryEurFormatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function formatSalaryEur(value: number): string {
  return salaryEurFormatter.format(value);
}

const markerBarByVariant: Record<GuideSalaryComparisonBarMarker["variant"], string> = {
  violet: "bg-violet-600",
  sky: "bg-sky-600",
  amber: "bg-amber-600",
};

const badgeToneStyles = {
  positive: "border-emerald-200 bg-emerald-50/90 text-emerald-900",
  negative: "border-rose-200 bg-rose-50/90 text-rose-900",
  neutral: "border-slate-200 bg-slate-50 text-slate-800",
} as const;

const markerLabelClasses: Record<GuideSalaryComparisonBarMarker["variant"], string> = {
  violet: "text-violet-900",
  sky: "text-sky-950",
  amber: "text-amber-950",
};

function SalaryComparisonBar({
  salaryEur,
  barMaxEur,
  markers,
}: {
  salaryEur: number;
  barMaxEur: number;
  markers: GuideSalaryComparisonBarMarker[];
}) {
  const max = Math.max(barMaxEur, salaryEur, ...markers.map((m) => m.amountEur));
  const pct = (v: number) => `${Math.min(100, Math.max(0, (v / max) * 100))}%`;

  return (
    <div className="mt-4 space-y-3">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Salary vs typical IND floors (illustrative)</p>
      <div
        className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100/90 p-4 shadow-inner"
        role="img"
        aria-label={`Gross salary ${formatSalaryEur(salaryEur)} compared to threshold markers up to ${formatSalaryEur(max)}`}
      >
        <div className="relative mx-auto mt-2 h-9 w-full max-w-2xl">
          <div className="absolute bottom-2 left-0 right-0 h-2.5 rounded-full bg-slate-200/90 shadow-sm">
            {markers.map((m, i) => (
              <span
                key={i}
                className={`absolute top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full shadow-sm ring-2 ring-white ${markerBarByVariant[m.variant]}`}
                style={{ left: pct(m.amountEur), marginLeft: "-1px" }}
                title={`${m.label}: ${formatSalaryEur(m.amountEur)}`}
              />
            ))}
            <span
              className="absolute top-1/2 z-10 flex h-6 min-w-[2.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border-2 border-slate-900 bg-white px-1.5 text-[10px] font-bold leading-none text-slate-900 shadow-md sm:text-xs"
              style={{ left: pct(salaryEur) }}
            >
              You
            </span>
          </div>
        </div>
        <div className="mx-auto mt-1 flex max-w-2xl justify-between text-[10px] font-medium tabular-nums text-slate-500 sm:text-xs">
          <span>€0</span>
          <span>Scale max {formatSalaryEur(max)}</span>
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
        <li className="font-medium text-slate-800">
          Your offer: <span className="tabular-nums text-slate-900">{formatSalaryEur(salaryEur)}</span> / month
        </li>
        {markers.map((m, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span
              className={`inline-block h-2 w-2 shrink-0 rounded-full ring-2 ring-white ${markerBarByVariant[m.variant]}`}
              aria-hidden
            />
            <span className={markerLabelClasses[m.variant]}>
              {m.label}: <span className="tabular-nums font-medium text-slate-900">{formatSalaryEur(m.amountEur)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GuideSalaryComparisonExamples({ examples }: { examples: GuideSalaryComparisonExample[] }) {
  return (
    <div className="mt-8 grid gap-6">
      {examples.map((ex, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-100"
        >
          <div className="flex flex-col gap-1 border-b border-slate-100 bg-slate-50/80 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Example {index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{ex.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{ex.profile}</p>
            </div>
          </div>
          <div className="px-5 py-5">
            {ex.visualization.type === "bar" ? (
              <SalaryComparisonBar
                salaryEur={ex.visualization.salaryEur}
                barMaxEur={ex.visualization.barMaxEur}
                markers={ex.visualization.markers}
              />
            ) : (
              <div className="mt-1 space-y-3">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Reduced gross floors (context-specific only)
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                {ex.visualization.columns.map((col, ci) => (
                  <div
                    key={ci}
                    className="rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50/90 to-white p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-800/90">{col.title}</p>
                    <p className="mt-2 text-2xl font-semibold tabular-nums text-slate-900">{col.amount}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{col.note}</p>
                  </div>
                ))}
                </div>
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {ex.badges.map((b, bi) => (
                <div
                  key={bi}
                  className={`inline-flex max-w-full flex-col rounded-lg border px-3 py-2 text-sm shadow-sm ${badgeToneStyles[b.tone]}`}
                >
                  <span className="font-semibold">{b.route}</span>
                  {b.caption ? <span className="mt-0.5 text-xs opacity-90">{b.caption}</span> : null}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-700">{ex.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionContent({
  section,
  affiliateBlock,
}: {
  section: GuideSection;
  affiliateBlock?: {
    placement: AffiliatePlacement;
    items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
  };
}) {
  const calloutVariant =
    section.callout?.type === "warning"
      ? "warn"
      : section.callout?.type === "tip"
        ? "success"
        : "info";

  return (
    <div className="w-full space-y-6">
      <h2
        id={section.id}
        className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900"
      >
        {section.heading}
      </h2>
      {section.body?.map((para, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}
      {section.salaryComparisonExamples?.length ? (
        <GuideSalaryComparisonExamples examples={section.salaryComparisonExamples} />
      ) : null}
      {section.bullets?.length ? (
        <ul className="list-inside list-disc space-y-1 text-slate-700">
          {section.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.table?.headers?.length && section.table.rows?.length ? (
        <ContentTable headers={section.table.headers} minWidth="360px">
          {section.table.rows.map((row, ri) => (
            <ContentTableRow key={ri}>
              {row.map((cell, ci) => {
                const isLinkColumn =
                  section.tableLinkColumnIndex !== undefined &&
                  ci === section.tableLinkColumnIndex &&
                  section.tableLinkUrl;
                return (
                  <ContentTableCell key={ci} emphasis={ci === 0}>
                    {isLinkColumn ? (
                      <a
                        href={section.tableLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:text-brand-800 underline"
                      >
                        {cell}
                        <span aria-hidden>→</span>
                      </a>
                    ) : (
                      cell
                    )}
                  </ContentTableCell>
                );
              })}
            </ContentTableRow>
          ))}
        </ContentTable>
      ) : null}
      {section.summaryBox ? (
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50/80 p-4 sm:p-5">
          <p className="text-sm font-semibold text-amber-900">{section.summaryBox.title}</p>
          <p className="mt-1 text-lg font-medium text-amber-900">{section.summaryBox.value}</p>
          {section.summaryBox.note ? (
            <p className="mt-2 text-sm text-amber-800/90">{section.summaryBox.note}</p>
          ) : null}
        </div>
      ) : null}
      {section.image?.src ? (
        <figure className="space-y-2">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
            {section.image.src.startsWith("/images/") ? (
              <img
                src={section.image.src}
                alt={section.image.alt}
                width={800}
                height={450}
                className="w-full object-cover object-center"
              />
            ) : (
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={800}
                height={450}
                className="w-full object-cover object-center"
              />
            )}
          </div>
          {section.image.caption ? (
            <figcaption className="text-sm text-slate-600">{section.image.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}
      {section.callout ? (
        <InfoBox
          variant={calloutVariant}
          title={section.callout.title}
        >
          <p>{section.callout.text}</p>
          {section.callout.href ? (
            <p className="mt-2">
              <a
                href={section.callout.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-700 underline hover:text-sky-800"
              >
                {section.callout.linkLabel ?? "View source"}
              </a>
            </p>
          ) : null}
        </InfoBox>
      ) : null}
      {section.ctaBlock ? (
        <div className="mt-6 rounded-xl border-2 border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-900">{section.ctaBlock.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{section.ctaBlock.supportingText}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {section.ctaBlock.primaryHref.startsWith("http") ? (
              <a
                href={section.ctaBlock.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                {section.ctaBlock.primaryLabel}
                <span aria-hidden className="ml-1">→</span>
              </a>
            ) : (
              <Link
                href={section.ctaBlock.primaryHref}
                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                {section.ctaBlock.primaryLabel}
                <span aria-hidden className="ml-1">→</span>
              </Link>
            )}
            {section.ctaBlock.secondaryLabel && section.ctaBlock.secondaryHref ? (
              section.ctaBlock.secondaryHref.startsWith("http") ? (
                <a
                  href={section.ctaBlock.secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {section.ctaBlock.secondaryLabel}
                </a>
              ) : (
                <Link
                  href={section.ctaBlock.secondaryHref}
                  className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {section.ctaBlock.secondaryLabel}
                </Link>
              )
            ) : null}
          </div>
        </div>
      ) : null}
      {section.internalCta ? (
        <div className="pt-2">
          <Link
            href={section.internalCta.href}
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            {section.internalCta.label}
          </Link>
        </div>
      ) : null}
      {section.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
          {section.links.map((link, i) => (
            <Link key={i} href={link.href} className="text-sm font-medium text-brand-700 hover:text-brand-800 underline">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
      {section.personaExample ? (
        <div className="rounded-xl border border-red-200/80 border-l-4 border-l-red-400 bg-red-50/70 p-4">
          <p className="text-sm font-semibold text-red-900">
            {section.personaExample.title}
          </p>
          <p className="mt-2 text-sm text-red-800/90 leading-relaxed">
            {section.personaExample.text}
          </p>
        </div>
      ) : null}
      {affiliateBlock && affiliateBlock.items.length > 0 ? (
        <div className="pt-4">
          <AffiliateBlockView
            placement={affiliateBlock.placement}
            items={affiliateBlock.items}
          />
        </div>
      ) : null}
      {section.services?.length ? (
        <GuideSectionServicesCards services={section.services} />
      ) : null}
    </div>
  );
}

function GuideSidebar({
  data,
  affiliateBlocks,
}: {
  data: GuideData;
  affiliateBlocks?: GuidePageTemplateProps["affiliateBlocks"];
}) {
  const { internalLinks, toolCtas } = data;
  const resourcesBlock = data.resourcesAffiliatePlacementId
    ? affiliateBlocks?.[data.resourcesAffiliatePlacementId]
    : null;

  const startLinks = data.sidebarStartLinks?.length
    ? data.sidebarStartLinks
    : [
        { label: internalLinks.hub.label, href: internalLinks.hub.href },
        { label: internalLinks.pillar.label, href: internalLinks.pillar.href },
      ];

  return (
    <aside className="min-w-0 space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Start here
        </p>
        <ul className="mt-2 space-y-2">
          {startLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-brand-700 underline hover:text-brand-800"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {toolCtas?.length ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Tools
          </p>
          <ul className="mt-3 space-y-1">
            {toolCtas.map((cta) => (
              <li key={cta.key ?? cta.href}>
                <Link
                  href={cta.href}
                  className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm"
                >
                  <span className="min-w-0 truncate">{cta.label}</span>
                  <span className="shrink-0 text-slate-400" aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {resourcesBlock && resourcesBlock.items.length > 0 ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Useful services
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-900">
            {resourcesBlock.placement.title}
          </h3>
          {resourcesBlock.placement.intro ? (
            <p className="mt-1 text-xs text-slate-600">{resourcesBlock.placement.intro}</p>
          ) : null}
          <div className="mt-3">
            <AffiliateCompactList
              items={resourcesBlock.items.map((i) => ({ provider: i.provider, reason: i.reason }))}
            />
          </div>
          <p className="mt-3 text-[10px] leading-snug text-slate-500">
            {resourcesBlock.placement.disclosure}
          </p>
        </div>
      ) : null}
    </aside>
  );
}

export function GuidePageTemplate({ data, affiliateBlocks = {}, canonicalUrl }: GuidePageTemplateProps) {
  const faqAccordionItems =
    data.faq?.map((item, i) => ({
      id: `faq-${i}`,
      title: item.q,
      content: item.a,
    })) ?? [];

  const shareUrl = canonicalUrl ?? "";
  const pageId = data.path || data.slug;
  const showActionBar = Boolean(shareUrl);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10 md:py-14">
        <Container className={pageContainerClass}>
          <EditorialContentHeader
            eyebrow={data.hero?.eyebrow}
            title={data.title}
            subtitle={data.subtitle ?? data.description}
            heroImage={
              data.hero?.image
                ? {
                    src: data.hero.image.src,
                    alt: data.hero.image.alt,
                    caption: data.hero.image.caption,
                    priority: data.hero.image.priority,
                  }
                : null
            }
            shareUrl={shareUrl}
            pageId={pageId}
            afterSubtitle={
              data.hero?.badges?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.hero.badges.map((badge, i) => (
                    <span
                      key={`badge-${i}-${String(badge).slice(0, 20)}`}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : undefined
            }
            pdfDownload={
              CHECKLIST_PDF_SLUGS.includes(data.slug as (typeof CHECKLIST_PDF_SLUGS)[number])
                ? {
                    href: `/api/checklist-pdf/${data.slug}`,
                    filename:
                      data.slug === "moving-checklist-netherlands"
                        ? "moving-checklist-netherlands.pdf"
                        : "documents-needed-to-move-netherlands.pdf",
                  }
                : undefined
            }
          />
          {data.heroCta ? (
            <div className="mt-8 rounded-xl border-2 border-brand-200 bg-brand-50/80 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">{data.heroCta.title}</h2>
              <p className="mt-2 text-slate-700">{data.heroCta.supportingText}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={data.heroCta.primaryCtaHref}
                  className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  {data.heroCta.primaryCtaLabel}
                  {!String(data.heroCta.primaryCtaLabel).trim().endsWith("→") ? (
                    <span aria-hidden className="ml-1">→</span>
                  ) : null}
                </Link>
                {data.heroCta.secondaryCtas?.length
                  ? data.heroCta.secondaryCtas.map((cta) => (
                      <Link
                        key={cta.href}
                        href={cta.href}
                        className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {cta.label}
                      </Link>
                    ))
                  : data.heroCta.secondaryCtaHref && data.heroCta.secondaryCtaLabel
                    ? (
                      <Link
                        href={data.heroCta.secondaryCtaHref}
                        className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {data.heroCta.secondaryCtaLabel}
                      </Link>
                    )
                    : null}
              </div>
              {data.heroCta.supportingLinks?.length ? (
                <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                  {data.heroCta.supportingLinks.map((link, i) => (
                    <span key={link.href} className="flex items-center gap-x-3">
                      {i > 0 ? <span className="text-slate-300" aria-hidden>·</span> : null}
                      <Link href={link.href} className="font-medium text-brand-700 hover:text-brand-800 underline">
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </p>
              ) : null}
              {!data.heroCta.supportingLinks?.length && data.heroCta.tertiaryCtaHref && data.heroCta.tertiaryCtaLabel ? (
                <p className="mt-4">
                  <Link
                    href={data.heroCta.tertiaryCtaHref}
                    className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                  >
                    {data.heroCta.tertiaryCtaLabel}
                  </Link>
                </p>
              ) : null}
              {!data.heroCta.supportingLinks?.length && data.heroCta.helperLinkHref && data.heroCta.helperLinkLabel ? (
                <p className="mt-2">
                  <Link
                    href={data.heroCta.helperLinkHref}
                    className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                  >
                    {data.heroCta.helperLinkLabel}
                  </Link>
                </p>
              ) : null}
            </div>
          ) : null}
        </Container>
      </section>

      <Section contained={false} className="py-8 md:py-12">
        <Container className={pageContainerClass}>
          {data.quickAnswersTitle ? (
            <h2 className="mb-4 scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
              {data.quickAnswersTitle}
            </h2>
          ) : null}
          {data.quickAnswers?.length ? (
            <div className="mb-10">
              <QuickAnswersRow items={data.quickAnswers} />
            </div>
          ) : null}
          {data.progressionStages && data.progressionStages.length >= 3 ? (
            <div className="mb-10">
              <h2 id="progression" className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                From first month setup to second-month stability
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {data.progressionStages.slice(0, 3).map((stage, i) => (
                  <div
                    key={stage.label}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {i === 0 ? "Phase 1" : i === 1 ? "Phase 2" : "Phase 3"}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {stage.label}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{stage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(360px,1fr)]">
            <main className="min-w-0 w-full">
              {/* Sidebar on mobile: compact block near top */}
              <div className="mb-8 lg:hidden">
                <GuideSidebar data={data} affiliateBlocks={affiliateBlocks} />
              </div>

              <article className="w-full max-w-full space-y-12">
                {data.sections.map((section) => (
                  <section key={section.id} className="w-full">
                    {section.id === "visa-route" && section.visaRoutes ? (
                      <GuideSectionVisaRoutes
                        section={
                          section as GuideSection & {
                            visaRoutes: { commonRoutes: string[]; notes: string[] };
                            callout?: GuideSection["callout"];
                            links?: GuideSection["links"];
                          }
                        }
                      />
                    ) : section.id === "timeline" && section.timelineStages ? (
                      <GuideSectionTimeline
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        stages={section.timelineStages}
                      />
                    ) : section.steps?.length ? (
                      <GuideSectionNumberedSteps
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        steps={section.steps}
                        ctaBlock={section.ctaBlock}
                        links={section.links}
                      />
                    ) : section.insurerComparisons?.length ? (
                      <GuideSectionInsurerComparisons
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        insurerComparisons={section.insurerComparisons}
                      />
                    ) : section.bankComparisons?.length ? (
                      <GuideSectionBankComparisons
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        bankComparisons={section.bankComparisons}
                      />
                    ) : section.id === "example-budgets" && data.exampleBudgets?.length ? (
                      <>
                        <h2
                          id={section.id}
                          className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900"
                        >
                          {section.heading}
                        </h2>
                        <p className="mt-4 text-slate-700">
                          The following are illustrative example budgets for planning only. Your actual relocation costs will depend on your situation.
                        </p>
                        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {data.exampleBudgets.map((budget, i) => (
                            <li key={i} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                              <h3 className="text-base font-semibold text-slate-900">{budget.title}</h3>
                              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
                                {budget.items.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                              <p className="mt-4 text-sm font-semibold text-slate-900">Estimated total: {budget.totalRange}</p>
                              {budget.note ? (
                                <p className="mt-2 text-xs text-slate-600">{budget.note}</p>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : section.id === "country-examples" && data.documentLegalizationCountryExamples?.length ? (
                      <GuideSectionCountryExamples
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        examples={data.documentLegalizationCountryExamples}
                        disclaimer="These are examples only. Always check the official Netherlands Worldwide page for the country that issued your document."
                      />
                    ) : section.id === "country-examples" && data.documentTranslationCountryExamples?.length ? (
                      <GuideSectionCountryExamples
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        examples={data.documentTranslationCountryExamples}
                        disclaimer="These are examples only. Always check the country-specific legalisation page for the country that issued your document."
                      />
                    ) : section.id === "document-types" && data.documentTranslationDocumentTypes?.length ? (
                      <GuideSectionDocumentTypes
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        documentTypes={data.documentTranslationDocumentTypes}
                      />
                    ) : section.id === "find-translator" && data.documentTranslationTranslatorResources?.length ? (
                      <div className="w-full space-y-6">
                        <h2 id={section.id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
                          {section.heading}
                        </h2>
                        {section.body?.map((para, i) => (
                          <p key={i} className="text-slate-700 leading-relaxed">
                            {para}
                          </p>
                        ))}
                        {section.bullets?.length ? (
                          <ul className="list-inside list-disc space-y-1 text-slate-700">
                            {section.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                        <GuideSectionTranslatorResources resources={data.documentTranslationTranslatorResources} />
                        <p className="text-xs text-slate-500">
                          Included for reference. Verify current services and pricing on each provider&apos;s website.
                        </p>
                        {section.links?.length ? (
                          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
                            {section.links.map((link) => (
                              <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-700 hover:text-brand-800 underline">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : section.id === "costs" && data.documentTranslationCostRanges?.length ? (
                      <GuideSectionTranslationCosts
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        costRanges={data.documentTranslationCostRanges}
                        timing={data.documentTranslationTiming}
                        disclaimer={data.documentTranslationCostDisclaimer}
                      />
                    ) : (
                      <SectionContent
                        section={section}
                        affiliateBlock={
                          section.affiliatePlacementId
                            ? affiliateBlocks[section.affiliatePlacementId]
                            : undefined
                        }
                      />
                    )}
                    {data.midPageCta &&
                      data.midPageCtaAfterSectionId === section.id ? (
                      <div className="mt-12 w-full rounded-xl border-2 border-slate-200 bg-slate-50 p-6 sm:p-8">
                        {data.midPageCta.badge ? (
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{data.midPageCta.badge}</p>
                        ) : null}
                        <h2 className="mt-1 text-xl font-semibold text-slate-900">{data.midPageCta.title}</h2>
                        <p className="mt-2 text-slate-700">{data.midPageCta.description}</p>
                        <Link
                          href={data.midPageCta.ctaHref}
                          className="mt-4 inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                        >
                          {data.midPageCta.ctaLabel}
                          {!String(data.midPageCta.ctaLabel).trim().endsWith("→") ? (
                            <span aria-hidden className="ml-1">→</span>
                          ) : null}
                        </Link>
                      </div>
                    ) : null}
                  </section>
                ))}
              </article>

              {data.midPageCta && !data.midPageCtaAfterSectionId ? (
                <div className="mt-12 w-full rounded-xl border-2 border-slate-200 bg-slate-50 p-6 sm:p-8">
                  {data.midPageCta.badge ? (
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{data.midPageCta.badge}</p>
                  ) : null}
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">{data.midPageCta.title}</h2>
                  <p className="mt-2 text-slate-700">{data.midPageCta.description}</p>
                  <Link
                    href={data.midPageCta.ctaHref}
                    className="mt-4 inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                  >
                    {data.midPageCta.ctaLabel}
                    {!String(data.midPageCta.ctaLabel).trim().endsWith("→") ? (
                      <span aria-hidden className="ml-1">→</span>
                    ) : null}
                  </Link>
                </div>
              ) : null}

              {data.toolCtas?.length ? (
                <Section id="tools" title="Tools" contained={false} className="mt-12 w-full scroll-mt-24">
                  <p className="mt-1 text-slate-600">
                    Use these tools to plan your move step by step.
                  </p>
                  <div className={`mt-6 grid w-full gap-5 sm:grid-cols-2 ${data.toolCtas.length >= 3 ? "lg:grid-cols-3" : ""}`}>
                    {data.toolCtas.map((cta) => (
                      <CardLink
                        key={cta.key ?? cta.href}
                        href={cta.href}
                        title={cta.label}
                        description={cta.description ?? ""}
                        badge="Tool"
                      />
                    ))}
                  </div>
                </Section>
              ) : null}

              {data.toolsCtaBand ? (
                <div className="mt-12 w-full rounded-xl border-2 border-brand-200 bg-brand-50/80 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900">{data.toolsCtaBand.title}</h2>
                  <p className="mt-2 text-slate-700">{data.toolsCtaBand.body}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={data.toolsCtaBand.primaryHref}
                      className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800"
                    >
                      {data.toolsCtaBand.primaryLabel}
                      {!String(data.toolsCtaBand.primaryLabel).trim().endsWith("→") ? (
                        <span aria-hidden className="ml-1">→</span>
                      ) : null}
                    </Link>
                    {data.toolsCtaBand.secondaryHref && data.toolsCtaBand.secondaryLabel ? (
                      <Link
                        href={data.toolsCtaBand.secondaryHref}
                        className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {data.toolsCtaBand.secondaryLabel}
                      </Link>
                    ) : null}
                    {data.toolsCtaBand.tertiaryHref && data.toolsCtaBand.tertiaryLabel ? (
                      <Link
                        href={data.toolsCtaBand.tertiaryHref}
                        className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {data.toolsCtaBand.tertiaryLabel}
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {data.featuredTools?.length ? (
                <Section title="Featured tools" contained={false} className="mt-12 w-full">
                  <FeaturedToolsBlock items={data.featuredTools} />
                </Section>
              ) : null}

              {data.exampleScenarios?.length ? (
                <Section
                  id="example-scenarios"
                  contained={false}
                  className="mt-12 w-full scroll-mt-24"
                >
                  <h2 className="mb-2 text-2xl font-semibold tracking-tight text-slate-900 scroll-mt-24">
                    {data.scenariosSectionTitle ?? "Example scenarios"}
                  </h2>
                  {data.scenariosSectionIntro ? (
                    <p className="mb-6 text-slate-700 leading-relaxed">{data.scenariosSectionIntro}</p>
                  ) : null}
                  <ExampleScenarioCards items={data.exampleScenarios} />
                </Section>
              ) : null}

              {(showActionBar || CHECKLIST_PDF_SLUGS.includes(data.slug as (typeof CHECKLIST_PDF_SLUGS)[number])) ? (
                <div className="mt-12 w-full">
                  <ContentActionBar
                    url={shareUrl}
                    title={data.title}
                    pageId={pageId}
                    variant="bottom"
                    pdfDownload={
                      CHECKLIST_PDF_SLUGS.includes(data.slug as (typeof CHECKLIST_PDF_SLUGS)[number])
                        ? {
                            href: `/api/checklist-pdf/${data.slug}`,
                            filename:
                              data.slug === "moving-checklist-netherlands"
                                ? "moving-checklist-netherlands.pdf"
                                : "documents-needed-to-move-netherlands.pdf",
                          }
                        : undefined
                    }
                    className="mb-6"
                  />
                </div>
              ) : null}
              {data.faq?.length ? (
                <Section id="faq" title="FAQ" contained={false} className="mt-12 w-full scroll-mt-24">
                  <Accordion items={faqAccordionItems} />
                </Section>
              ) : null}

              {data.resourcesAffiliatePlacementId &&
              affiliateBlocks[data.resourcesAffiliatePlacementId]?.items.length ? (
                <section id="useful-services" className="mt-12 w-full scroll-mt-24">
                  {data.servicesSectionTitle ? (
                    <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900 scroll-mt-24">
                      {data.servicesSectionTitle}
                    </h2>
                  ) : null}
                  {data.servicesIntro ? (
                    <p className="mb-4 text-slate-700">{data.servicesIntro}</p>
                  ) : null}
                  <AffiliateBlockView
                    placement={affiliateBlocks[data.resourcesAffiliatePlacementId].placement}
                    items={affiliateBlocks[data.resourcesAffiliatePlacementId].items}
                  />
                </section>
              ) : null}

              {data.internalLinks?.related?.length ? (
                <Section
                  id="related-guides"
                  title={data.relatedGuidesSectionTitle ?? "Related guides"}
                  contained={false}
                  className="mt-12 w-full scroll-mt-24"
                >
                  <ul className="grid w-full gap-3 sm:grid-cols-2">
                    {data.internalLinks.related.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-medium text-brand-700 underline hover:text-brand-800"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Section>
              ) : null}

              {data.endCta ? (
                <div className="mt-12 w-full rounded-xl border-2 border-brand-200 bg-brand-50/80 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900">{data.endCta.title}</h2>
                  <p className="mt-2 text-slate-700">{data.endCta.supportingText}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={data.endCta.ctaHref}
                      className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
                    >
                      {data.endCta.ctaLabel}
                      {!String(data.endCta.ctaLabel).trim().endsWith("→") ? (
                        <span aria-hidden className="ml-1">→</span>
                      ) : null}
                    </Link>
                    {data.endCta.secondaryCtaLabel && data.endCta.secondaryCtaHref ? (
                      <Link
                        href={data.endCta.secondaryCtaHref}
                        className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {data.endCta.secondaryCtaLabel}
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {data.exploreNextCards?.length ? (
                <Section
                  id="explore-next"
                  title="Plan your move further"
                  contained={false}
                  className="mt-12 w-full scroll-mt-24"
                >
                  <div className="mt-2 grid w-full gap-5 sm:grid-cols-2">
                    {data.exploreNextCards.map((card) => (
                      <CardLink
                        key={card.ctaHref}
                        href={card.ctaHref}
                        title={card.title}
                        description={card.description}
                        badge="Next step"
                      />
                    ))}
                  </div>
                </Section>
              ) : null}

              {data.disclosure ? (
                <p className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
                  {data.disclosure}
                </p>
              ) : null}
              {data.lastUpdated ? (
                <p className="mt-2 text-xs text-slate-500">{data.lastUpdated}</p>
              ) : null}
            </main>

            <aside
              className="hidden w-full lg:block"
              aria-label="Page navigation and tools"
            >
              <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-8 py-1">
                {data.tocItems?.length ? (
                  <PillarTOC items={data.tocItems} />
                ) : null}
                <GuideSidebar data={data} affiliateBlocks={affiliateBlocks} />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}
