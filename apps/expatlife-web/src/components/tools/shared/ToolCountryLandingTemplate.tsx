import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { ToolCountryContextBlock } from "./ToolCountryContextBlock";
import type { CountryLandingContext } from "@/src/lib/tools/shared/toolCountryContext";
import type { ToolRelatedGuide } from "@/src/lib/tools/shared/toolPageContent";
import { CardLink } from "@/components/ui/card-link";
import { ToolLandingPageTemplate } from "@/components/page/page-templates";
import { PageHero, SectionBlock } from "@/components/page/pillar-template";
import { getSiteOrigin } from "@/lib/site-origin";
import { movingNlPathPrimaryCtaClass, movingNlSidebarSecondaryRowClass } from "@/lib/ui/moving-nl-pillar-identity";

export type ToolCountryLandingTemplateProps = {
  toolName: string;
  toolPath: string;
  toolDescription: string;
  countrySlug: string;
  countryLabel: string;
  /** Intro, whatOftenMatters, documentConsiderations, etc. from country landing content */
  context: CountryLandingContext;
  relatedGuides: ToolRelatedGuide[];
  /** e.g. "Build my checklist" */
  ctaLabel: string;
  /** Optional FAQ for this landing page */
  faq?: Array<{ id: string; question: string; answer: string }>;
};

/**
 * Shared template for origin-country tool landing pages (e.g. Moving Checklist from South Africa).
 */
export function ToolCountryLandingTemplate({
  toolName,
  toolPath,
  toolDescription,
  countrySlug,
  countryLabel,
  context,
  relatedGuides,
  ctaLabel,
  faq,
}: ToolCountryLandingTemplateProps) {
  const toolUrlWithFrom = `${toolPath}?from=${countrySlug}`;
  const shareUrl = new URL(toolPath, getSiteOrigin()).toString();

  return (
    <ToolLandingPageTemplate
      movingClusterHero
      hero={
        <PageHero
          movingPillarIdentity
          eyebrow={`Tool · From ${countryLabel}`}
          title={`${toolName} for the Netherlands — from ${countryLabel}`}
          subtitle={toolDescription}
          shareUrl={shareUrl}
          pageId={toolPath}
          afterSubtitle={
            <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={toolUrlWithFrom} className={movingNlPathPrimaryCtaClass}>
                {ctaLabel}
              </Link>
              <Link href={toolPath} className={movingNlSidebarSecondaryRowClass}>
                Use tool without prefill
              </Link>
            </div>
          }
        />
      }
      helpsWith={
        <Container>
          <div className="pb-4 pt-4 sm:pt-5 md:pb-6">
            <ToolCountryContextBlock context={context} variant="copilot" />
          </div>
        </Container>
      }
      surface={
        <Container>
          <SectionBlock compact title="Use the tool" className="pt-4 md:pt-6">
            <div className="rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.06] md:p-6">
              <p className="text-copilot-text-secondary">
                The tool will prefill your origin as <strong className="text-copilot-text-primary">{countryLabel}</strong>{" "}
                so you get tailored tasks and tips. You can change this and other options inside the tool.
              </p>
              <Link href={toolUrlWithFrom} className={cn(movingNlPathPrimaryCtaClass, "mt-4 inline-flex")}>
                {ctaLabel}
              </Link>
            </div>
          </SectionBlock>
        </Container>
      }
      howToUse={
        faq?.length ? (
          <Container>
            <SectionBlock compact title="Frequently asked questions" className="pt-4 md:pt-6">
              <div className="rounded-2xl border-0 bg-copilot-bg-soft/90 p-5 shadow-expatos-sm ring-1 ring-copilot-primary/10 md:p-6">
                <ul className="space-y-4">
                  {faq.map((item) => (
                    <li key={item.id}>
                      <h3 className="font-semibold text-copilot-text-primary">{item.question}</h3>
                      <p className="mt-1 text-sm text-copilot-text-secondary">{item.answer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBlock>
          </Container>
        ) : undefined
      }
      relatedGuides={
        relatedGuides.length > 0 ? (
          <Container>
            <SectionBlock compact title="Related guides" className="pt-4 md:pt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGuides.slice(0, 6).map((guide) => (
                  <CardLink
                    key={guide.href}
                    href={guide.href}
                    title={guide.title}
                    description={guide.description}
                    className="border-l-[3px] border-l-copilot-primary/70 bg-copilot-surface ring-1 ring-copilot-primary/10 hover:border-l-copilot-primary"
                  />
                ))}
              </div>
            </SectionBlock>
          </Container>
        ) : undefined
      }
    />
  );
}
