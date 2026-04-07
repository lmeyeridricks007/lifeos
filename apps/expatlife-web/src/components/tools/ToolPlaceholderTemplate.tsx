import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { SignupCTA } from "@/src/components/tools/SignupCTA";
import { ToolLandingPageTemplate } from "@/components/page/page-templates";
import { PageHero, PillarGuideHeroRegion, SectionBlock } from "@/components/page/pillar-template";
import { EDITORIAL_HERO_PLACEHOLDER } from "@/src/lib/content/editorialTypes";
import { cn } from "@/lib/cn";
import { transitionSurface } from "@/lib/ui/interaction";
import type { ToolRecord } from "@/src/lib/tools/loadToolRegistry";

const pageContainerClass = "w-full max-w-screen-2xl";

const insetPanelClass =
  "rounded-card border border-border bg-surface-raised p-5 text-sm leading-relaxed text-foreground shadow-card ring-1 ring-border/10";

type ToolPlaceholderTemplateProps = {
  tool: ToolRecord;
  relatedTools: ToolRecord[];
  shareUrl: string;
  pageId: string;
};

export function ToolPlaceholderTemplate({ tool, relatedTools, shareUrl, pageId }: ToolPlaceholderTemplateProps) {
  return (
    <ToolLandingPageTemplate
      hero={
        <PillarGuideHeroRegion>
          <Container className={pageContainerClass}>
            <PageHero
              movingPillarIdentity
              eyebrow="Netherlands · Tool"
              title={tool.title}
              subtitle={tool.summary}
              heroImage={EDITORIAL_HERO_PLACEHOLDER}
              shareUrl={shareUrl}
              pageId={pageId}
              afterSubtitle={<ComingSoonBadge emphasis className="mt-1" label="Coming soon" />}
            />
          </Container>
        </PillarGuideHeroRegion>
      }
      helpsWith={
        <Container className={pageContainerClass}>
          <SectionBlock compact title="What this tool will do">
            <div className={insetPanelClass}>
              This tool is designed to provide practical, structured outputs you can act on quickly. It will be fully
              data-driven and integrated with related guides and tool flows.
            </div>
          </SectionBlock>
        </Container>
      }
      surface={
        <Container className={pageContainerClass}>
          <div className="flex flex-col gap-6">
            <SectionBlock compact title="Example inputs">
              <ul className={cn("list-disc space-y-2 pl-9", insetPanelClass)}>
                {(tool.exampleInputs ?? ["Your profile details", "Timing and constraints", "Current status"]).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </SectionBlock>
            <SectionBlock compact title="Example outputs">
              <ul className={cn("list-disc space-y-2 pl-9", insetPanelClass)}>
                {(tool.exampleOutputs ?? ["Actionable recommendations", "Prioritized next steps", "Relevant links"]).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </SectionBlock>
          </div>
        </Container>
      }
      howToUse={
        <Container className={pageContainerClass}>
          <SectionBlock compact title="Why this tool is useful">
            <p className={insetPanelClass}>
              {tool.mostUsefulFor ??
                "It helps reduce uncertainty by turning broad relocation questions into concrete and trackable steps."}
            </p>
          </SectionBlock>
        </Container>
      }
      relatedGuides={
        <Container className={pageContainerClass}>
          <div className="flex flex-col gap-6">
            <SectionBlock compact title="Related guides">
              <ul className="grid gap-3 sm:grid-cols-2">
                {tool.relatedGuides.map((href) => (
                  <li key={href}>
                    <Link href={href} className="text-sm font-medium text-link hover:text-link-hover hover:underline">
                      {href}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock compact title="Related tools">
              <div className="grid gap-4 md:grid-cols-2">
                {relatedTools.map((relatedTool) => (
                  <Link
                    key={relatedTool.id}
                    href={relatedTool.route}
                    className={cn(
                      transitionSurface,
                      "block rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 ease-out hover:border-border-strong hover:shadow-card-hover motion-reduce:hover:shadow-card"
                    )}
                  >
                    <p className="text-sm font-semibold text-foreground">{relatedTool.title}</p>
                    <p className="mt-1 text-sm text-foreground-muted">{relatedTool.summary}</p>
                  </Link>
                ))}
              </div>
            </SectionBlock>

            {tool.affiliateCategories && tool.affiliateCategories.length > 0 ? (
              <div className="rounded-card border border-border bg-surface-muted/80 p-4 text-sm leading-relaxed text-foreground-muted ring-1 ring-border/15">
                Later, this tool may connect you to optional partner offers for: {tool.affiliateCategories.join(", ")}.
              </div>
            ) : null}
          </div>
        </Container>
      }
      faqOrTrust={
        <Container className={pageContainerClass}>
          <SignupCTA
            title="Get notified when this tool launches"
            subtitle="Create a free account to get launch access and save your planning context."
            bullets={["Early launch notification", "Save your preferences", "Access new tools faster"]}
            primaryCtaLabel="Create free account"
            primaryCtaHref="/signup"
            secondaryCtaLabel="Get notified"
            secondaryCtaHref="/signup"
            variant="panel"
          />
        </Container>
      }
    />
  );
}
