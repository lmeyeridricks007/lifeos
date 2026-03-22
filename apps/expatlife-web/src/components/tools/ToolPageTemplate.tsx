import { Section } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { CardLink } from "@/components/ui/card-link";
import { InfoBox } from "@/components/ui/info-box";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { ToolIntroSection } from "@/src/components/tools/shared/ToolIntroSection";
import { ToolInfographicBlock } from "@/src/components/tools/shared/ToolInfographicBlock";
import type { ReactNode } from "react";

export type ToolExplanatorySection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

export type ToolPageTemplateProps = {
  /** Hero section (H1, subtitle, CTAs) - typically ToolHero */
  hero: ReactNode;
  /** SEO intro copy - visible before interaction */
  intro?: ReactNode;
  /** Disclosure or legal note */
  disclosure?: string;
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
  /** Related guide cards */
  relatedGuides?: Array<{ href: string; title: string; description: string }>;
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
  /** When set, render this section above the main content section (same width/alignment) */
  primarySectionTitle?: string;
  /** Content for the primary section (e.g. Check your document readiness block) */
  primarySectionContent?: ReactNode;
  /** When set, overrides the default "Build your checklist" title for the main content section. */
  mainSectionTitle?: string;
};

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
}: ToolPageTemplateProps) {
  const sectionSurfaceClass = "rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6";
  const hasSidebar = Boolean(sidebar);
  const faqAccordionItems =
    faqItems?.map((item) => ({
      id: item.id,
      title: item.question,
      content: <p className="text-sm text-slate-600">{item.answer}</p>,
    })) ?? [];

  const mainContent = (
    <>
      {(intro || disclosure) ? (
        <Section className="pb-4 md:pb-6">
          <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-sky-50/30 p-5 shadow-sm md:p-6">
            <div className="space-y-6">
              {intro ? (
                <div className="relative pl-4 prose prose-slate max-w-none text-slate-600 prose-p:leading-relaxed md:pl-5">
                  <span className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-brand-600/40" aria-hidden />
                  {intro}
                </div>
              ) : null}
              {disclosure ? (
                <InfoBox title="Disclaimer" variant="warn" className="shadow-sm">
                  {disclosure}
                </InfoBox>
              ) : null}
            </div>
          </div>
        </Section>
      ) : null}

      {primarySectionTitle && primarySectionContent ? (
        <Section id="tool-inputs" title={primarySectionTitle} className="pt-4 md:pt-6 scroll-mt-24" contained={true}>
          {primarySectionContent}
        </Section>
      ) : null}

      {(examplesSection || children) ? (
        <Section title={mainSectionTitle ?? "Build your checklist"} className="pt-4 md:pt-6">
          {examplesSection ? (
            <div id={hasSidebar ? "example-scenarios" : undefined} className="mb-6">
              <CollapsiblePanel
                title="Example scenarios"
                defaultOpen={false}
                titleClassName="text-base font-semibold text-slate-800"
                triggerClassName="cursor-pointer rounded-t-xl bg-sky-50/80 text-sky-800 hover:bg-sky-100/90 hover:text-sky-900"
                className="border-sky-200/80 bg-sky-50/40"
              >
                <div className={sectionSurfaceClass}>{examplesSection}</div>
              </CollapsiblePanel>
            </div>
          ) : null}
          {children}
        </Section>
      ) : null}

      {infographic ? (
        <Section title="Visual overview" className="pt-4 md:pt-6">
          <ToolInfographicBlock
            src={infographic.src}
            alt={infographic.alt}
            caption={infographic.caption}
          />
        </Section>
      ) : null}

      {recommendedLawyersSection ? (
        <div id={hasSidebar ? "recommended-immigration-lawyers" : undefined} className="pt-4 md:pt-6 scroll-mt-24">
          {recommendedLawyersSection}
        </div>
      ) : null}

      {recommendedServices ? (
        <Section id={hasSidebar ? "recommended-services" : undefined} title="Recommended services" contained={true} className="pt-4 md:pt-6">
          {recommendedServices}
        </Section>
      ) : null}

      {explanatorySections?.length ? (
        <Section id={hasSidebar ? "how-the-tool-works" : undefined} title="More about this tool" contained={true} className="pt-4 md:pt-6">
          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
            {explanatorySections.map((section, index) => {
              const variants = [
                "rounded-2xl border border-brand-200/90 bg-gradient-to-br from-brand-50/90 to-white p-5 shadow-sm md:p-6 border-l-4 border-l-brand-500",
                "rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50/80 to-white p-5 shadow-sm md:p-6 border-l-4 border-l-sky-500",
                "rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 to-white p-5 shadow-sm md:p-6 border-l-4 border-l-amber-500",
                "rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 to-white p-5 shadow-sm md:p-6 border-l-4 border-l-emerald-500",
              ];
              const cardClass = variants[index % variants.length];
              return (
                <div key={section.id} className={cardClass}>
                  <ToolIntroSection
                    section={{
                      id: section.id,
                      title: section.title,
                      body: section.body ?? [],
                      bullets: section.bullets,
                    }}
                    className="prose-headings:text-slate-900"
                  />
                </div>
              );
            })}
          </div>
        </Section>
      ) : null}

      {seoContent ? (
        <Section id={hasSidebar ? "seo-content" : undefined} title={seoContentSectionTitle} contained={true} className="pt-4 md:pt-6">
          {seoContent}
        </Section>
      ) : null}

      {faqAccordionItems.length > 0 ? (
        <Section id={hasSidebar ? "faq" : undefined} title="Frequently asked questions" contained={true}>
          <div className={sectionSurfaceClass}>
            <Accordion items={faqAccordionItems} />
          </div>
        </Section>
      ) : null}

      {relatedGuides && relatedGuides.length > 0 ? (
        <Section title="Related guides" contained={true}>
          <div className="rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50/60 to-slate-50/80 p-5 shadow-sm md:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((guide) => (
                <CardLink
                  key={guide.href}
                  href={guide.href}
                  title={guide.title}
                  description={guide.description}
                  className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-brand-300 hover:bg-sky-50/50 hover:border-l-brand-600"
                />
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {extraSection ? (
        <Section contained={true}>
          {extraSection}
        </Section>
      ) : null}

      {internalLinkStrip ? (
        <Section contained={true}>
          <div className={sectionSurfaceClass}>{internalLinkStrip}</div>
        </Section>
      ) : null}
    </>
  );

  return (
    <main>
      {hero}
      {hasSidebar ? (
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
            <div className="min-w-0">{mainContent}</div>
            <aside className="hidden lg:block" aria-label="On this page and tools">
              <div className="sticky top-24 space-y-6 py-6">{sidebar}</div>
            </aside>
          </div>
        </div>
      ) : (
        mainContent
      )}
    </main>
  );
}
