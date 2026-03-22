import Link from "next/link";
import {
  resolveLinkFromRegistry,
  type LinkRegistry,
  type PillarSectionsJson,
  type PillarMeta,
  type PillarTimelineStage,
  type PillarToolItem,
  type PillarTocItem,
  type PillarFaqItem,
} from "@expatlife/content";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { EditorialContentHeader } from "@/src/components/content/EditorialContentHeader";
import { ContentActionBar } from "@/src/components/content/ContentActionBar";
import { CardLink } from "@/components/ui/card-link";
import { InfoBox } from "@/components/ui/info-box";
import { Accordion } from "@/components/ui/accordion";
import { PillarTOC } from "@/components/content/PillarTOC";
import { PillarToolsStrip } from "@/components/content/PillarToolsStrip";
import { PillarChecklistTabs } from "@/components/content/PillarChecklistTabs";
import { PillarScenarioSection } from "@/components/content/PillarScenarioSection";
import { RelocationTimelineSection } from "@/components/content/RelocationTimelineSection";
import { MovingTimelineSection } from "@/components/content/MovingTimelineSection";
import { ChecklistAtAGlanceSection } from "@/components/content/ChecklistAtAGlanceSection";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";
import {
  IntroSegments,
  ParagraphWithLinks,
  BoldParagraph,
} from "@/components/content/PillarContentBlocks";
import type { AffiliateProvider as LegacyAffiliateProvider } from "@/lib/affiliates";
import { AffiliateSectionBlock } from "@/components/affiliate/AffiliateSectionBlock";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import type { AffiliatePlacement, AffiliateProvider } from "@/src/lib/affiliates/types";
import { getToolBySlug } from "@/src/lib/tools/getToolBySlug";

function pillarHeroToEditorial(raw: string | null | undefined): EditorialHeroImage | null {
  if (raw == null || raw === "") return null;
  return { src: raw, alt: "", priority: true };
}

export type AffiliateBlockData = {
  title: string;
  providers: LegacyAffiliateProvider[];
};

export type AffiliateSlotData = {
  afterSectionId: string;
  blocks: AffiliateBlockData[];
};

export type PillarTemplateProps = {
  /** Breadcrumb entries for JSON-LD and optional UI */
  breadcrumbCrumbs: Array<{ name: string; item: string }>;
  /** Page meta for JSON-LD (title, description, canonical, lastUpdated) */
  meta: PillarMeta;
  /** Raw FAQ items for FAQPage JSON-LD */
  faq: PillarFaqItem[];
  /** Pre-built accordion items for the FAQ section (id, title, content) */
  faqAccordionItems: Array<{ id: string; title: string; content: React.ReactNode }>;
  /** Section copy and structure from content (sections.*) */
  sections: PillarSectionsJson;
  /** Timeline stages for the timeline section */
  timelineStages: PillarTimelineStage[];
  /** Optional intro sentence for the moving timeline section */
  timelineIntro?: string;
  /** Optional section-level CTA below timeline cards */
  timelineSectionCta?: { label: string; href: string };
  /** Tools for the tools strip */
  toolsStrip: PillarToolItem[];
  /** TOC entries for sidebar */
  tocItems: PillarTocItem[];
  /** Checklist tabs (before / after / 90 days) */
  checklistTabs: Array<{ key: string; label: string; items: Array<{ label: string; href: string }> }>;
  /** Scenarios with resolved links (from resolveScenarios) */
  resolvedScenarios: ResolvedScenario[];
  /** Link registry for resolving link keys in content */
  linkRegistry: LinkRegistry;
  /** Optional: pre-fetched affiliate blocks per section (page fetches from placements + providers) */
  affiliateSlots?: AffiliateSlotData[];
  /** Origin country for placement-based affiliate blocks (?from= slug) */
  originCountry?: string;
  /** Pre-loaded placement-based affiliate blocks (from loadPlacementWithProviders). */
  affiliateBlockData?: {
    banking?: { placement: AffiliatePlacement; items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }> };
    housing?: { placement: AffiliatePlacement; items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }> };
    sidebar?: { placement: AffiliatePlacement; items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }> };
    nextSteps?: { placement: AffiliatePlacement; items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }> };
    endResources?: { placement: AffiliatePlacement; items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }> };
    scenario?: { placement: AffiliatePlacement; items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }> };
  };
  /** Full canonical URL for share/copy (e.g. siteUrl + meta.canonicalPath). */
  canonicalUrl: string;
  /** Optional content to render above the moving timeline section (e.g. country guide grid). */
  slotBeforeTimeline?: React.ReactNode;
};

/**
 * Reusable pillar page template. Use the same structure for any pillar (e.g. moving, visas, housing).
 * Pass content from your pillar loader; ensure sections/timeline/tools/toc/faq/scenarios match this shape.
 */
export function PillarPageTemplate({
  breadcrumbCrumbs,
  meta,
  faq,
  faqAccordionItems,
  sections,
  timelineStages,
  timelineIntro,
  timelineSectionCta,
  toolsStrip,
  tocItems,
  checklistTabs,
  resolvedScenarios,
  linkRegistry,
  affiliateSlots = [],
  originCountry,
  affiliateBlockData,
  canonicalUrl,
  slotBeforeTimeline,
}: PillarTemplateProps) {
  const beforeMoveTool = getToolBySlug("moving-checklist", { categoryId: "move-immigration" });
  const afterArrivalTool = getToolBySlug("arrival-planner", { categoryId: "move-immigration" });
  const first90DaysTool = getToolBySlug("first-90-days", { categoryId: "move-immigration" });
  const documentsTool = getToolBySlug("document-readiness", { categoryId: "move-immigration" });

  const renderToolCta = (
    tool: ReturnType<typeof getToolBySlug> | undefined,
    descriptionOverride?: string
  ) => {
    if (!tool) return null;
    const description = descriptionOverride ?? tool.summary;
    return (
      <div className="mt-5 rounded-r-2xl border border-slate-200 border-l-4 border-l-brand-600 bg-brand-50/50 p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">Recommended tool</p>
        <h3 className="mt-1 text-base font-semibold text-slate-900">{tool.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
        <Link href={tool.route} className="mt-3 inline-block text-sm font-semibold text-slate-800 hover:underline">
          Open tool →
        </Link>
      </div>
    );
  };

  /** Soft accent colors for section wrappers */
  const sectionAccent = {
    before: "border-l-sky-500 bg-sky-50/40",
    after: "border-l-teal-500 bg-teal-50/40",
    first90: "border-l-amber-500 bg-amber-50/40",
    documents: "border-l-emerald-500 bg-emerald-50/40",
    banking: "border-l-violet-500 bg-violet-50/40",
    housing: "border-l-rose-500 bg-rose-50/40",
  } as const;

  const {
    pageHeader,
    intro,
    overview,
    whoThisGuideFor,
    beforeYouMove,
    afterArrival,
    first90Days,
    documents,
    banking,
    housing,
    gotchas,
    chooseYourSituation,
    sectionTitles,
    shareable,
    related,
    sidebar,
  } = sections;

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={meta.seo.title}
        description={meta.seo.description}
        dateModified={meta.lastUpdated}
        urlPath={meta.canonicalPath}
      />
      <FaqPageJsonLd items={faq.map((i) => ({ q: i.q, a: i.a }))} />

      <Container className="py-8">
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-10">
          <main className="min-w-0">
            <EditorialContentHeader
              eyebrow={pageHeader.eyebrow}
              title={pageHeader.title}
              subtitle={pageHeader.subtitle}
              heroImage={pillarHeroToEditorial(pageHeader.heroImage)}
              shareUrl={canonicalUrl}
              pageId={meta.canonicalPath}
            />

            <div className="mt-8">
              <IntroSegments segments={intro.segments} linkRegistry={linkRegistry} />
            </div>

            {/* Start here — compact action block */}
            {(() => {
              const actions = sidebar.startHereActions ?? sidebar.links.map((linkKey) => ({ label: resolveLinkFromRegistry(linkRegistry, linkKey)?.title ?? linkKey, linkKey }));
              return actions.length > 0 ? (
                <Section contained={false} className="pt-6">
                  <div className="rounded-xl border-l-4 border-l-brand-600 bg-sky-50/60 px-4 py-4 sm:px-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                      {sidebar.startHereLabel}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {actions.map((action, i) => {
                        const link = resolveLinkFromRegistry(linkRegistry, action.linkKey);
                        return link ? (
                          <Link
                            key={i}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200/80 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-brand-300 hover:bg-white hover:shadow"
                          >
                            {action.label}
                            {!String(action.label).trim().endsWith("→") ? (
                              <span aria-hidden>→</span>
                            ) : null}
                          </Link>
                        ) : null;
                      })}
                      <a
                        href={sidebar.scenariosJumpAnchor}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200/80 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-brand-300 hover:bg-white hover:shadow"
                      >
                        {sidebar.scenariosJumpLabel}
                        {!String(sidebar.scenariosJumpLabel).trim().endsWith("→") ? (
                          <span aria-hidden>→</span>
                        ) : null}
                      </a>
                    </div>
                  </div>
                </Section>
              ) : null;
            })()}

            <Section contained={false} className="pt-8">
              <div className="rounded-r-2xl border-l-4 border-l-amber-500 bg-amber-50/50 pl-5 pr-5 py-5">
                <h2 id="overview" className="text-2xl font-semibold tracking-tight text-slate-900">
                  {overview.sectionTitle}
                </h2>
                {"overviewParagraph" in overview && overview.overviewParagraph ? (
                  <p className="mt-3 text-slate-700">{overview.overviewParagraph}</p>
                ) : null}
                <div className="mt-4 rounded-xl border border-amber-200/80 bg-white px-4 py-4 shadow-sm">
                  <p className="font-semibold text-amber-900">{overview.collapsibleTitle}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                    {overview.disclaimerItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            <RelocationTimelineSection id="your-move-in-3-stages" />

            <ChecklistAtAGlanceSection />

            <Section contained={false}>
              <h2 id="who-this-is-for" className="text-2xl font-semibold tracking-tight text-slate-900">
                {whoThisGuideFor.sectionTitle}
              </h2>
              {whoThisGuideFor.audiences && whoThisGuideFor.audiences.length > 0 ? (
                <>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {whoThisGuideFor.audiences.map((audience) => (
                      <span
                        key={audience}
                        className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-slate-600">{whoThisGuideFor.paragraph}</p>
                </>
              ) : (
                <p className="mt-2 text-slate-600">{whoThisGuideFor.paragraph}</p>
              )}
            </Section>

            <PillarScenarioSection
              sectionTitle={sectionTitles.scenarios}
              chooseYourSituation={chooseYourSituation}
              scenarios={resolvedScenarios}
              situationDefaultOpen={true}
            />

            {sections.stepByStepSummary ? (
              <Section contained={false}>
                <h2 id="step-by-step-summary" className="text-2xl font-semibold tracking-tight text-slate-900">
                  {sections.stepByStepSummary.sectionTitle}
                </h2>
                <p className="mt-2 text-slate-600">{sections.stepByStepSummary.introParagraph}</p>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
                  {sections.stepByStepSummary.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </Section>
            ) : null}

            {slotBeforeTimeline ?? null}

            <MovingTimelineSection
              id="timeline"
              title={sectionTitles.timeline}
              intro={timelineIntro}
              stages={timelineStages}
              sectionCta={timelineSectionCta}
              contained={false}
            />

            <Section contained={false}>
              <div className={`rounded-r-2xl border-l-4 pl-5 pr-5 py-5 ${sectionAccent.before}`}>
              <h2 id="before-you-move" className="text-2xl font-semibold tracking-tight text-slate-900">
                {beforeYouMove.sectionTitle}
              </h2>
              <h3 className="mt-4 text-lg font-medium text-slate-900">{beforeYouMove.prepareHeading}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-600">
                {beforeYouMove.prepareList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-lg font-medium text-slate-900">{beforeYouMove.takesLongerHeading}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-600">
                {beforeYouMove.takesLongerList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 space-y-4">
                {beforeYouMove.examples.map((ex, i) => (
                  <InfoBox key={i} variant="info" title={ex.title}>
                    {ex.body}
                  </InfoBox>
                ))}
              </div>
              <p className="mt-4 text-slate-600">
                <ParagraphWithLinks
                  paragraph={beforeYouMove.closingText}
                  linkKeys={beforeYouMove.closingLinkKeys}
                  linkRegistry={linkRegistry}
                  linkClassName="font-medium text-slate-800 hover:underline"
                />
              </p>
              {renderToolCta(beforeMoveTool, beforeYouMove.toolCtaDescription)}
              {affiliateSlots
                .filter((s) => s.afterSectionId === "before-you-move")
                .flatMap((s) => s.blocks)
                .map((block, i) => (
                  <AffiliateSectionBlock
                    key={`before-${i}-${block.title}`}
                    title={block.title}
                    providers={block.providers}
                    sectionId={`affiliate-before-you-move-${i}`}
                  />
                ))}
              </div>
            </Section>

            <Section contained={false}>
              <div className={`rounded-r-2xl border-l-4 pl-5 pr-5 py-5 ${sectionAccent.after}`}>
              <h2 id="after-arrival" className="text-2xl font-semibold tracking-tight text-slate-900">
                {afterArrival.sectionTitle}
              </h2>
              <ul className="mt-4 list-disc space-y-1 pl-4 text-slate-600">
                {afterArrival.itemBlocks.map((block, i) => (
                  <li key={i}>
                    <ParagraphWithLinks
                      paragraph={block.paragraph}
                      linkKeys={block.linkKeys}
                      linkRegistry={linkRegistry}
                    />
                  </li>
                ))}
              </ul>
              {renderToolCta(afterArrivalTool, afterArrival.toolCtaDescription)}
              </div>
            </Section>

            <Section contained={false}>
              <div className={`rounded-r-2xl border-l-4 pl-5 pr-5 py-5 ${sectionAccent.first90}`}>
              <h2 id="first-90-days" className="text-2xl font-semibold tracking-tight text-slate-900">
                {first90Days.sectionTitle}
              </h2>
              <p className="mt-3 text-slate-600">
                <strong>Before you move:</strong> documents, visa/residence prep, address planning, and travel.{" "}
                <strong>After arrival:</strong> registration, BSN, banking, and insurance.{" "}
                <strong>First 90 days:</strong> DigiD, GP, transport, recurring payments, and settling into routines.
              </p>
              <div className="mt-4">
                <PillarChecklistTabs tabs={checklistTabs} />
              </div>
              <p className="mt-4 text-slate-600">
                <ParagraphWithLinks
                  paragraph={first90Days.ctaParagraph}
                  linkKeys={[first90Days.ctaLinkKey]}
                  linkRegistry={linkRegistry}
                />
              </p>
              {renderToolCta(first90DaysTool, first90Days.toolCtaDescription)}
              {affiliateBlockData?.nextSteps && (
                <div className="mt-6">
                  <AffiliateBlockView placement={affiliateBlockData.nextSteps.placement} items={affiliateBlockData.nextSteps.items} />
                </div>
              )}
              </div>
            </Section>

            <Section contained={false}>
              <div className={`rounded-r-2xl border-l-4 pl-5 pr-5 py-5 ${sectionAccent.documents}`}>
              <h2 id="documents" className="text-2xl font-semibold tracking-tight text-slate-900">
                {documents.sectionTitle}
              </h2>
              <BoldParagraph text={documents.introParagraph} className="mt-2" />
              <p className="mt-4 text-slate-600">
                Use the{" "}
                <Link
                  href={resolveLinkFromRegistry(linkRegistry, documents.toolLinkKey)?.href ?? "#"}
                  className="font-medium text-slate-800 hover:underline"
                >
                  {documents.toolLinkLabel}
                </Link>{" "}
                to see what&apos;s often needed for your situation.
              </p>
              <div className="mt-4">
                <InfoBox variant="success" title={documents.exampleTitle}>
                  {documents.exampleBody}
                </InfoBox>
              </div>
              {renderToolCta(documentsTool, documents.toolCtaDescription)}
              </div>
            </Section>

            <Section contained={false}>
              <div className={`rounded-r-2xl border-l-4 pl-5 pr-5 py-5 ${sectionAccent.banking}`}>
              <h2 id="banking" className="text-2xl font-semibold tracking-tight text-slate-900">
                {banking.sectionTitle}
              </h2>
              {banking.introParagraph && (
                <p className="mt-2 text-slate-600">{banking.introParagraph}</p>
              )}
              <p className={banking.introParagraph ? "mt-3 text-slate-600" : "mt-2 text-slate-600"}>
                {banking.paragraphLinkKeys && banking.paragraphLinkKeys.length > 0 ? (
                  <ParagraphWithLinks
                    paragraph={banking.paragraph}
                    linkKeys={banking.paragraphLinkKeys}
                    linkRegistry={linkRegistry}
                  />
                ) : (
                  banking.paragraph
                )}
              </p>
              {affiliateBlockData?.banking && (
                <div className="mt-6">
                  <AffiliateBlockView placement={affiliateBlockData.banking.placement} items={affiliateBlockData.banking.items} />
                </div>
              )}
              {affiliateSlots
                .filter((s) => s.afterSectionId === "banking")
                .flatMap((s) => s.blocks)
                .map((block, i) => (
                  <AffiliateSectionBlock
                    key={`banking-${i}-${block.title}`}
                    title={block.title}
                    providers={block.providers}
                    sectionId={`affiliate-banking-${i}`}
                  />
                ))}
              </div>
            </Section>

            <Section contained={false}>
              <div className={`rounded-r-2xl border-l-4 pl-5 pr-5 py-5 ${sectionAccent.housing}`}>
              <h2 id="housing" className="text-2xl font-semibold tracking-tight text-slate-900">
                {housing.sectionTitle}
              </h2>
              {housing.registrationWarning && (
                <InfoBox variant="warn" title="Registrable address matters" className="mt-2">
                  {housing.registrationWarning}
                </InfoBox>
              )}
              <p className={housing.registrationWarning ? "mt-3 text-slate-600" : "mt-2 text-slate-600"}>
                {housing.paragraphLinkKeys && housing.paragraphLinkKeys.length > 0 ? (
                  <ParagraphWithLinks
                    paragraph={housing.paragraph}
                    linkKeys={housing.paragraphLinkKeys}
                    linkRegistry={linkRegistry}
                  />
                ) : (
                  housing.paragraph
                )}
              </p>
              {affiliateBlockData?.housing && (
                <div className="mt-6">
                  <AffiliateBlockView placement={affiliateBlockData.housing.placement} items={affiliateBlockData.housing.items} />
                </div>
              )}
              {affiliateSlots
                .filter((s) => s.afterSectionId === "housing")
                .flatMap((s) => s.blocks)
                .map((block, i) => (
                  <AffiliateSectionBlock
                    key={`housing-${i}-${block.title}`}
                    title={block.title}
                    providers={block.providers}
                    sectionId={`affiliate-housing-${i}`}
                  />
                ))}
              </div>
            </Section>

            <Section contained={false}>
              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/30 p-5">
                <h2 id="gotchas" className="text-2xl font-semibold tracking-tight text-slate-900">
                  {gotchas.sectionTitle}
                </h2>
                <ContentTable
                  headers={["Gotcha", "What to do instead"]}
                  minWidth="500px"
                >
                  {gotchas.rows.map((row, i) => {
                    const fixLink = row.fixLinkKey ? resolveLinkFromRegistry(linkRegistry, row.fixLinkKey) : null;
                    return (
                      <ContentTableRow key={i}>
                        <ContentTableCell emphasis>{row.gotcha}</ContentTableCell>
                        <ContentTableCell>
                          {fixLink ? (
                            <Link href={fixLink.href} className="font-medium text-brand-700 hover:underline">
                              {row.fix}
                            </Link>
                          ) : (
                            row.fix
                          )}
                        </ContentTableCell>
                      </ContentTableRow>
                    );
                  })}
                </ContentTable>
              </div>
            </Section>

            <Section contained={false}>
              <h2 id="tools" className="text-2xl font-semibold tracking-tight text-slate-900">
                {sectionTitles.tools}
              </h2>
              <div className="mt-4">
                <PillarToolsStrip tools={toolsStrip} />
              </div>
            </Section>

            {affiliateBlockData?.scenario && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900">Often used for this situation</h3>
                <p className="mt-1 text-sm text-slate-600">
                  For the work / solo scenario above, many expats use these services to get started.
                </p>
                <div className="mt-4">
                  <AffiliateBlockView placement={affiliateBlockData.scenario.placement} items={affiliateBlockData.scenario.items} />
                </div>
              </div>
            )}

            <Section contained={false}>
              <h2 id="useful-services" className="text-2xl font-semibold tracking-tight text-slate-900">
                Useful services
              </h2>
              {affiliateBlockData?.endResources && (
                <div className="mt-4">
                  <AffiliateBlockView placement={affiliateBlockData.endResources.placement} items={affiliateBlockData.endResources.items} />
                </div>
              )}
              <p className="mt-4 text-sm text-slate-600">
                Some links are affiliate links. If you use them, we may earn a commission at no extra cost to you.
              </p>
            </Section>

            <Section contained={false}>
              <h2 id="related" className="text-2xl font-semibold tracking-tight text-slate-900">
                {related.sectionTitle}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.cards
                  .filter((card) => card.linkKey !== "hub")
                  .map((card, i) => {
                    const link = resolveLinkFromRegistry(linkRegistry, card.linkKey);
                    if (!link) return null;
                    const guideAccent = ["border-l-sky-400 bg-sky-50/30", "border-l-teal-400 bg-teal-50/30", "border-l-amber-400 bg-amber-50/30", "border-l-emerald-400 bg-emerald-50/30", "border-l-violet-400 bg-violet-50/30"][i % 5];
                    return (
                      <CardLink
                        key={i}
                        href={link.href}
                        title={link.title}
                        description={card.description}
                        className={`rounded-r-2xl border-l-4 ${guideAccent}`}
                      />
                    );
                  })}
              </div>
            </Section>

            <Section contained={false}>
              <h2 id="shareable" className="text-2xl font-semibold tracking-tight text-slate-900">
                {shareable.sectionTitle}
              </h2>
              <p className="mt-2 text-slate-600">{shareable.introParagraph}</p>
              <ul className="mt-4 list-disc space-y-1 pl-4 text-slate-600">
                {shareable.items.map((item, i) => {
                  const link = resolveLinkFromRegistry(linkRegistry, item.linkKey);
                  const suffixLink = item.suffixLinkKey
                    ? resolveLinkFromRegistry(linkRegistry, item.suffixLinkKey)
                    : null;
                  if (!link) return <li key={i}>{item.label}</li>;
                  const dashIndex = item.label.indexOf(" — ");
                  const linkLabel = dashIndex >= 0 ? item.label.slice(0, dashIndex) : item.label;
                  const afterLink = dashIndex >= 0 ? item.label.slice(dashIndex) : "";
                  return (
                    <li key={i}>
                      <Link href={link.href} className="font-medium text-brand-700 hover:underline">
                        {linkLabel}
                      </Link>
                      {afterLink}
                      {item.suffixLinkKey && item.suffixLabel && suffixLink && (
                        <>
                          {" and "}
                          <Link href={suffixLink.href} className="font-medium text-brand-700 hover:underline">
                            {suffixLink.title}
                          </Link>
                          {item.suffixLabel.includes(" — ") ? ` — ${item.suffixLabel.split(" — ").slice(1).join(" — ")}` : item.suffixLabel}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm text-slate-500">{shareable.footerParagraph}</p>
            </Section>

            <Section contained={false}>
              <ContentActionBar
                url={canonicalUrl}
                title={pageHeader.title}
                pageId={meta.canonicalPath}
                variant="bottom"
                className="mb-8"
              />
              <h2 id="faq" className="text-2xl font-semibold tracking-tight text-slate-900">
                {sectionTitles.faq}
              </h2>
              <div className="mt-4">
                <Accordion items={faqAccordionItems} />
              </div>
            </Section>
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <PillarTOC items={tocItems} />
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {sidebar.startHereLabel}
                </p>
                {(sidebar.startHereActions ?? sidebar.links.map((key) => ({ label: resolveLinkFromRegistry(linkRegistry, key)?.title ?? key, linkKey: key }))).length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {(sidebar.startHereActions ?? sidebar.links.map((key) => ({ label: resolveLinkFromRegistry(linkRegistry, key)?.title ?? key, linkKey: key }))).map((action, i) => {
                      const link = resolveLinkFromRegistry(linkRegistry, action.linkKey);
                      return link ? (
                        <li key={i}>
                          <Link href={link.href} className="block rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 hover:text-brand-700">
                            {action.label}
                            {!String(action.label).trim().endsWith("→") ? (
                              <span aria-hidden className="ml-1">→</span>
                            ) : null}
                          </Link>
                        </li>
                      ) : null;
                    })}
                    <li>
                      <a
                        href={sidebar.scenariosJumpAnchor}
                        className="block rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 hover:text-brand-700"
                      >
                        {sidebar.scenariosJumpLabel}
                        {!String(sidebar.scenariosJumpLabel).trim().endsWith("→") ? (
                          <span aria-hidden className="ml-1">→</span>
                        ) : null}
                      </a>
                    </li>
                  </ul>
                ) : (
                  <>
                    {(() => {
                      const ctaLink = resolveLinkFromRegistry(linkRegistry, sidebar.ctaLinkKey);
                      return ctaLink ? (
                        <Link
                          href={ctaLink.href}
                          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                          {sidebar.ctaLabel}
                          {!String(sidebar.ctaLabel).trim().endsWith("→") ? (
                            <span aria-hidden>→</span>
                          ) : null}
                        </Link>
                      ) : null;
                    })()}
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                      {sidebar.links.map((key, i) => {
                        const link = resolveLinkFromRegistry(linkRegistry, key);
                        return link ? (
                          <li key={i}>
                            <Link href={link.href} className="text-sm font-medium text-brand-700 hover:underline">
                              {link.title}
                            </Link>
                          </li>
                        ) : null;
                      })}
                    </ul>
                    <p className="mt-4 text-xs text-slate-500">{sidebar.scenariosPrompt}</p>
                    <a href={sidebar.scenariosJumpAnchor} className="mt-1 block text-sm font-medium text-brand-700 hover:underline">
                      {sidebar.scenariosJumpLabel}
                    </a>
                  </>
                )}
              </div>
              {affiliateBlockData?.sidebar && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <AffiliateBlockView placement={affiliateBlockData.sidebar.placement} items={affiliateBlockData.sidebar.items} />
                </div>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
