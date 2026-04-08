import { cn } from "@/lib/cn";
import { Accordion } from "@/components/ui/accordion";
import { CardLink } from "@/components/ui/card-link";
import { Container } from "@/components/ui/container";
import { InfoBox } from "@/components/ui/info-box";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { ToolIntroSection } from "@/src/components/tools/shared/ToolIntroSection";
import { ToolInfographicBlock } from "@/src/components/tools/shared/ToolInfographicBlock";
import {
  ToolFaqOrTrust,
  ToolHelpsWith,
  ToolHowToUse,
  ToolPageRoot,
  ToolSurface,
  ToolWhatHappensNext,
} from "@/components/page-families";
import { MoveIntroSurface, MovePageTemplate, moveToolPageWrapClass } from "@/components/page/move-shell";
import { PillarMainStack, SectionBlock } from "@/components/page/pillar-template";
import {
  guideFaqSurfaceClass,
  toolIntroSurfaceClass,
  toolMainSurfaceClass,
} from "@/lib/ui/page-family";
import type { ReactNode } from "react";
import type { MonetizationPageType } from "@/src/lib/monetization/pageTypePolicy";
import { toolTemplateAllowsPreFaqMonetization } from "@/src/lib/monetization/pageTypePolicy";

export type ToolExplanatorySection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

export type ToolPageTemplateProps = {
  /** Hero section (H1, subtitle, CTAs) — use `MoveHero` variant="tool" with `movingClusterHero` for NL Move cluster. */
  hero: ReactNode;
  /** SEO intro copy - visible before interaction */
  intro?: ReactNode;
  /** Disclosure or legal note */
  disclosure?: string | ReactNode;
  /** Optional indexable explanatory sections (e.g. What this tool covers, Who it's for) */
  explanatorySections?: ToolExplanatorySection[];
  /** Optional infographic image (one per tool max) */
  infographic?: { src: string; alt: string; caption?: string };
  /** Main tool UI: inputs + results + affiliate + signup CTA (client component) */
  children: ReactNode;
  /** Example scenarios section */
  examplesSection?: ReactNode;
  /** FAQ accordion items: { id, question, answer } */
  faqItems?: Array<{ id: string; question: string; answer: string }>;
  /** Related guide cards — use `status: "coming_soon"` for placeholder routes (renders non-clickable card). */
  relatedGuides?: Array<{ href: string; title: string; description: string; status?: "coming_soon" }>;
  /** Internal link strip (e.g. hub, pillar, tools) */
  internalLinkStrip?: ReactNode;
  /** Optional recommended immigration lawyers block (rendered above recommendedServices when both present) */
  recommendedLawyersSection?: ReactNode;
  /** Optional recommended services block (e.g. for relocation cost estimator) */
  recommendedServices?: ReactNode;
  /** Optional long-form SEO content block */
  seoContent?: ReactNode;
  /** Optional title for the SEO content section (rendered as section heading, e.g. H2) */
  seoContentSectionTitle?: string;
  /** Optional extra section (e.g. origin country guides) */
  extraSection?: ReactNode;
  /** Optional sticky sidebar (e.g. On this page nav + CTAs) */
  sidebar?: ReactNode;
  /** Rendered immediately before the FAQ accordion (e.g. soft planning CTA). */
  beforeFaq?: ReactNode;
  /** After the main tool UI (and example scenarios), before “What happens next” / FAQ — for post-value soft CTAs. */
  postToolValue?: ReactNode;
  /** Default `tool`: suppresses `beforeFaq` unless `allowPreFaqMonetization` or a non-tool type (e.g. `comparison`). */
  monetizationPageType?: MonetizationPageType;
  /** Force-enable `beforeFaq` on tool pages (normally deferred until after the main tool). */
  allowPreFaqMonetization?: boolean;
  /** When set, render this section above the main content section (same width/alignment) */
  primarySectionTitle?: string;
  /** Content for the primary section (e.g. Check your document readiness block) */
  primarySectionContent?: ReactNode;
  /** When set, overrides the default "Build your checklist" title for the main content section. */
  mainSectionTitle?: string;
  /**
   * `default`: intro/disclosure, then optional primary block, then tool (examples + children).
   * `tool-first`: primary block, then tool, then intro/disclosure — for action-first tool pages.
   */
  contentOrder?: "default" | "tool-first";
  /** Overrides the "Related guides" section heading (default: "What happens next"). */
  relatedGuidesSectionTitle?: string;
  /** Optional section id for in-page navigation (e.g. sidebar TOC). */
  relatedGuidesSectionId?: string;
  /** Overrides the H2 above the explanatory section cards (default: "How to use it"). */
  explanatorySectionsOuterTitle?: string;
  /** Passed to `PillarMainStack` below the hero (vertical rhythm between tool contract regions). */
  mainStackClassName?: string;
  /** Wraps the tool hero in `PillarGuideHeroRegion` + max-width container (Moving NL cluster tools). */
  movingClusterHero?: boolean;
  /** Optional anchor on the intro / disclaimer surface (`MoveIntroSurface`) for TOC links. */
  introSurfaceId?: string;
  /** Optional anchor on the disclaimer `InfoBox` only (e.g. TOC “Before you start” when intro cards sit above it). */
  introDisclaimerId?: string;
  /** When true, the example scenarios collapsible panel starts expanded (sidebar TOC still works). */
  examplesCollapsibleDefaultOpen?: boolean;
};

const explanatoryCardVariants = [
  "rounded-card border border-brand/20 bg-gradient-to-br from-brand-muted/40 to-surface-raised p-5 shadow-card ring-1 ring-border/15 md:p-6 border-l-[3px] border-l-brand",
  "rounded-card border border-border bg-surface-muted/70 p-5 shadow-card ring-1 ring-border/15 md:p-6 border-l-[3px] border-l-accent",
  "rounded-card border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/15 md:p-6 border-l-[3px] border-l-border-strong",
] as const;

/** Move NL tools (`movingClusterHero`): match JSON guide / pillar copilot cards */
const movingClusterExplanatoryCardVariants = [
  "rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] md:p-6 border-l-4 border-l-copilot-primary/50",
  "rounded-2xl border-0 bg-copilot-bg-soft/90 p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.07] md:p-6 border-l-4 border-l-copilot-accent/50",
  "rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.06] md:p-6 border-l-4 border-l-blue-500/40",
] as const;

export function ToolPageTemplate({
  hero,
  intro,
  disclosure,
  explanatorySections,
  infographic,
  children,
  examplesSection,
  faqItems,
  relatedGuides,
  internalLinkStrip,
  recommendedLawyersSection,
  recommendedServices,
  seoContent,
  seoContentSectionTitle,
  extraSection,
  sidebar,
  primarySectionTitle,
  primarySectionContent,
  mainSectionTitle,
  contentOrder = "default",
  relatedGuidesSectionTitle = "What happens next",
  relatedGuidesSectionId,
  explanatorySectionsOuterTitle = "How to use it",
  mainStackClassName,
  movingClusterHero = false,
  introSurfaceId,
  introDisclaimerId,
  examplesCollapsibleDefaultOpen = false,
  beforeFaq,
  monetizationPageType = "tool",
  allowPreFaqMonetization,
  postToolValue,
}: ToolPageTemplateProps) {
  const hasSidebar = Boolean(sidebar);
  const faqAnswerClass = movingClusterHero
    ? "text-sm leading-relaxed text-copilot-text-secondary"
    : "text-sm text-foreground-muted";
  const faqAccordionItems =
    faqItems?.map((item) => ({
      id: item.id,
      title: item.question,
      content: <p className={faqAnswerClass}>{item.answer}</p>,
    })) ?? [];

  const introSection =
    intro || disclosure ? (
      <div className="pb-4 pt-4 sm:pt-5 md:pb-6">
        {movingClusterHero ? (
          <MoveIntroSurface
            id={introSurfaceId}
            disclaimerAnchorId={introDisclaimerId}
            disclaimer={disclosure}
            disclaimerTitle="Before you start"
          >
            {intro}
          </MoveIntroSurface>
        ) : (
          <div className={toolIntroSurfaceClass}>
            <div className="space-y-6">
              {intro ? (
                <div className="relative pl-4 prose prose-slate max-w-none text-foreground-muted prose-p:leading-relaxed md:pl-5 prose-headings:text-foreground">
                  <span className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-brand/50" aria-hidden />
                  {intro}
                </div>
              ) : null}
              {disclosure ? (
                <InfoBox title="Disclaimer" variant="warn" className="shadow-card">
                  {typeof disclosure === "string" ? (
                    <p className="text-sm text-foreground-muted">{disclosure}</p>
                  ) : (
                    disclosure
                  )}
                </InfoBox>
              ) : null}
            </div>
          </div>
        )}
      </div>
    ) : null;

  const primarySection =
    primarySectionTitle && primarySectionContent ? (
      <Container>
        <SectionBlock
          id="tool-inputs"
          title={primarySectionTitle}
          compact
          className="scroll-mt-24 pt-4 md:pt-6"
        >
          {primarySectionContent}
        </SectionBlock>
      </Container>
    ) : null;

  const toolSection =
    examplesSection || children ? (
      <Container>
        <SectionBlock compact title={mainSectionTitle ?? "Build your checklist"} className="pt-4 md:pt-6">
          {children}
          {examplesSection ? (
            <div id={hasSidebar ? "example-scenarios" : undefined} className="mt-5">
              <CollapsiblePanel
                title="Example scenarios"
                defaultOpen={examplesCollapsibleDefaultOpen}
                titleClassName="text-base font-semibold text-foreground"
                triggerClassName="cursor-pointer rounded-t-xl bg-surface-muted/90 text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                className="border-border bg-surface-muted/40"
              >
                <div className={toolMainSurfaceClass}>{examplesSection}</div>
              </CollapsiblePanel>
            </div>
          ) : null}
          {postToolValue ? (
            <div className="mt-8 border-t border-border pt-8">{postToolValue}</div>
          ) : null}
        </SectionBlock>
      </Container>
    ) : null;

  const surfaceBlocks = (
    <>
      {primarySection}
      {toolSection}
    </>
  );

  const toolStackClass = "flex flex-col gap-4 md:gap-5";

  const leadBlocks =
    contentOrder === "tool-first" ? (
      <>
        <ToolSurface className={toolStackClass}>{surfaceBlocks}</ToolSurface>
        <ToolHelpsWith>{introSection}</ToolHelpsWith>
      </>
    ) : (
      <>
        <ToolHelpsWith>{introSection}</ToolHelpsWith>
        <ToolSurface className={toolStackClass}>{surfaceBlocks}</ToolSurface>
      </>
    );

  const hasHowToBlock =
    Boolean(infographic) ||
    Boolean(recommendedLawyersSection) ||
    Boolean(recommendedServices) ||
    Boolean(explanatorySections?.length) ||
    Boolean(seoContent);

  const hasWhatNextBlock =
    Boolean(relatedGuides?.length) || Boolean(extraSection) || Boolean(internalLinkStrip);

  const mainStackRhythm = "mt-2 space-y-4 sm:mt-3 sm:space-y-5 md:space-y-6";

  const resolvedBeforeFaq =
    beforeFaq && toolTemplateAllowsPreFaqMonetization(monetizationPageType, allowPreFaqMonetization)
      ? beforeFaq
      : null;

  const mainContent = (
    <PillarMainStack className={mainStackClassName ?? mainStackRhythm}>
      {leadBlocks}

      {hasHowToBlock ? (
        <ToolHowToUse className="flex flex-col gap-4 md:gap-5">
          {infographic ? (
            <Container>
              <SectionBlock compact title="Visual overview" className="pt-4 md:pt-6">
                <ToolInfographicBlock
                  src={infographic.src}
                  alt={infographic.alt}
                  caption={infographic.caption}
                />
              </SectionBlock>
            </Container>
          ) : null}

          {recommendedLawyersSection ? (
            <div id={hasSidebar ? "recommended-immigration-lawyers" : undefined} className="pt-3 md:pt-4 scroll-mt-24">
              {recommendedLawyersSection}
            </div>
          ) : null}

          {recommendedServices ? (
            <Container>
              <SectionBlock
                id={hasSidebar ? "recommended-services" : undefined}
                title="Recommended services"
                compact
                className="pt-3 md:pt-4"
              >
                {recommendedServices}
              </SectionBlock>
            </Container>
          ) : null}

          {explanatorySections?.length ? (
            <Container>
              <SectionBlock
                id={hasSidebar ? "how-the-tool-works" : undefined}
                title={explanatorySectionsOuterTitle}
                compact
                className="pt-3 md:pt-4"
              >
                <div
                  className={
                    explanatorySections.length === 1
                      ? "grid gap-4"
                      : "grid gap-4 sm:grid-cols-1 lg:grid-cols-2"
                  }
                >
                  {explanatorySections.map((section, index) => {
                    const cardClass = movingClusterHero
                      ? movingClusterExplanatoryCardVariants[
                          index % movingClusterExplanatoryCardVariants.length
                        ]
                      : explanatoryCardVariants[index % explanatoryCardVariants.length];
                    return (
                      <div key={section.id} id={section.id} className={cn(cardClass, "scroll-mt-28 md:scroll-mt-32")}>
                        <ToolIntroSection
                          section={{
                            id: section.id,
                            title: section.title,
                            body: section.body ?? [],
                            bullets: section.bullets,
                          }}
                          className={
                            movingClusterHero
                              ? "prose-headings:text-copilot-text-primary [&_p]:text-copilot-text-secondary [&_li]:text-copilot-text-secondary"
                              : "prose-headings:text-foreground"
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </SectionBlock>
            </Container>
          ) : null}

          {seoContent ? (
            <Container>
              <SectionBlock
                id={hasSidebar ? "seo-content" : undefined}
                title={seoContentSectionTitle ?? "Details"}
                compact
                className="pt-3 md:pt-4"
              >
                {seoContent}
              </SectionBlock>
            </Container>
          ) : null}
        </ToolHowToUse>
      ) : null}

      {hasWhatNextBlock ? (
        <ToolWhatHappensNext className="flex flex-col gap-4 md:gap-5">
          {relatedGuides && relatedGuides.length > 0 ? (
            <Container>
              <SectionBlock
                id={relatedGuidesSectionId}
                compact
                title={relatedGuidesSectionTitle}
                className="scroll-mt-28 py-4 sm:py-5 md:scroll-mt-32"
              >
                <div
                  className={
                    movingClusterHero
                      ? "rounded-2xl border-0 bg-copilot-bg-soft/85 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] md:p-6"
                      : "rounded-card border border-border bg-gradient-to-br from-brand-muted/30 to-surface-muted/40 p-5 shadow-card ring-1 ring-border/15 md:p-6"
                  }
                >
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedGuides.map((guide) => (
                      <CardLink
                        key={`${guide.title}-${guide.href}`}
                        href={guide.href}
                        title={guide.title}
                        description={guide.description}
                        status={guide.status}
                        className={
                          movingClusterHero
                            ? "border-l-4 border-l-copilot-primary/45 bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.08]"
                            : "border-l-[3px] border-l-brand/80 bg-surface-raised"
                        }
                      />
                    ))}
                  </div>
                </div>
              </SectionBlock>
            </Container>
          ) : null}

          {extraSection ? (
            <Container>
              <div className="space-y-6 py-4 sm:py-5">{extraSection}</div>
            </Container>
          ) : null}

          {internalLinkStrip ? (
            <Container>
              <div className="py-4 sm:py-5">
                <div className={toolMainSurfaceClass}>{internalLinkStrip}</div>
              </div>
            </Container>
          ) : null}
        </ToolWhatHappensNext>
      ) : null}

      {resolvedBeforeFaq || faqAccordionItems.length > 0 ? (
        <ToolFaqOrTrust>
          <Container>
            {resolvedBeforeFaq ? <div className="py-4 sm:pb-2 sm:pt-5">{resolvedBeforeFaq}</div> : null}
            {faqAccordionItems.length > 0 ? (
              <SectionBlock
                id={hasSidebar ? "faq" : undefined}
                title="Frequently asked questions"
                compact
                className={resolvedBeforeFaq ? "py-2 sm:py-5" : "py-4 sm:py-5"}
              >
                {movingClusterHero ? (
                  <div className="mt-1 rounded-2xl bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-slate-900/[0.05] sm:p-5">
                    <Accordion density="comfortable" tone="copilot" items={faqAccordionItems} />
                  </div>
                ) : (
                  <div className={guideFaqSurfaceClass}>
                    <Accordion items={faqAccordionItems} />
                  </div>
                )}
              </SectionBlock>
            ) : null}
          </Container>
        </ToolFaqOrTrust>
      ) : null}
    </PillarMainStack>
  );

  return (
    <ToolPageRoot>
      <div className={moveToolPageWrapClass}>{hero}</div>
      <MovePageTemplate variant="tool" showSidebar={hasSidebar} sidebar={sidebar}>
        {mainContent}
      </MovePageTemplate>
    </ToolPageRoot>
  );
}
