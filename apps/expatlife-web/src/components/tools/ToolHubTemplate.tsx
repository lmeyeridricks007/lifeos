import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SignupCTA } from "@/src/components/tools/SignupCTA";
import type { ToolCategory, ToolRecord } from "@/src/lib/tools/loadToolRegistry";
import { ClusterHubPageTemplate } from "@/components/page/page-templates";
import { PageHero, PillarGuideHeroRegion, SectionBlock } from "@/components/page/pillar-template";
import { sitePillarFramedHeroGutterXClass } from "@/lib/ui/site-shell-identity";
import {
  hubOrientPanelClass,
  hubPathwayCardClass,
  hubToolStatusLiveClass,
  hubToolStatusSoonClass,
  toolMainSurfaceClass,
} from "@/lib/ui/page-family";
import { getSiteOrigin } from "@/lib/site-origin";
import { toolsHubHeroImage } from "@/src/lib/tools/toolsHubHeroImage";

const hubContainerClass = "w-full max-w-screen-2xl";

type ToolHubTemplateProps = {
  category: ToolCategory;
  liveTools: ToolRecord[];
  comingSoonTools: ToolRecord[];
  relatedGuides: string[];
};

function ToolCard({ tool }: { tool: ToolRecord }) {
  const badgeClass = tool.status === "live" ? hubToolStatusLiveClass : hubToolStatusSoonClass;

  return (
    <Link href={tool.route} className={hubPathwayCardClass}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold text-foreground">{tool.title}</p>
        <span className={`shrink-0 rounded-pill px-2 py-0.5 text-xs font-semibold ${badgeClass}`}>
          {tool.status === "live" ? "Live" : "Coming soon"}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{tool.summary}</p>
      {tool.mostUsefulFor ? (
        <p className="mt-3 text-xs text-foreground-faint">Most useful for: {tool.mostUsefulFor}</p>
      ) : null}
      <p className="mt-4 text-sm font-semibold text-link transition-colors duration-150 group-hover:text-link-hover">
        Open tool →
      </p>
    </Link>
  );
}

function guideTitleFromHref(href: string): string {
  try {
    const last = href.replace(/\/$/, "").split("/").pop() ?? href;
    return last.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return href;
  }
}

export function ToolHubTemplate({ category, liveTools, comingSoonTools, relatedGuides }: ToolHubTemplateProps) {
  const hasAffiliateCategories = [...liveTools, ...comingSoonTools].some(
    (tool) => (tool.affiliateCategories?.length ?? 0) > 0
  );
  const allToolsOrdered = [...liveTools, ...comingSoonTools];
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(category.route.startsWith("/") ? category.route : `/${category.route}`, baseUrl).toString();

  return (
    <ClusterHubPageTemplate
      mainStackClassName="mt-0 space-y-0 sm:mt-0 sm:space-y-0 md:mt-0 md:space-y-0"
      hero={
        <PillarGuideHeroRegion>
          <PageHero
            movingPillarIdentity
            heroTitleDensity="tight"
            contentGutterClassName={sitePillarFramedHeroGutterXClass}
            eyebrow="Netherlands · Tools"
            title={category.label}
            subtitle={category.description}
            heroImage={toolsHubHeroImage}
            shareUrl={shareUrl}
            pageId={category.route}
          />
        </PillarGuideHeroRegion>
      }
      atAGlance={
        <Container className={hubContainerClass}>
          <div className={hubOrientPanelClass}>
            Pick a tool below to go straight into planning. Live tools work today; coming-soon entries show what we are
            building so you can align your timeline.
          </div>
        </Container>
      }
      tools={
        <Container className={hubContainerClass}>
          <SectionBlock
            compact
            title="Tools in this category"
            subtitle={
              liveTools.length > 0
                ? "Live tools first, then planned releases."
                : "Planned tools for this category—live listings appear here first."
            }
          >
            {allToolsOrdered.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:gap-gap-grid sm:grid-cols-2 lg:grid-cols-3">
                {allToolsOrdered.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="rounded-card border border-dashed border-border-strong bg-surface-muted/30 p-8 text-center text-sm text-foreground-muted">
                No tools in this category yet. Join the waitlist to get notified first.
              </div>
            )}
          </SectionBlock>
        </Container>
      }
      nextSteps={
        <Container className={hubContainerClass}>
          <div className="flex flex-col gap-6 md:gap-8">
            <SectionBlock compact title="Related guides" subtitle="Deeper context to use alongside these tools.">
              <ul className="grid gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2">
                {relatedGuides.map((href) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm font-medium text-link transition-colors duration-150 hover:text-link-hover hover:underline"
                    >
                      {guideTitleFromHref(href)}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            {hasAffiliateCategories ? (
              <SectionBlock
                compact
                title="Planning support"
                subtitle="Some tools in this category may later include optional partner recommendations."
              >
                <div className={toolMainSurfaceClass}>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    Affiliate-connected recommendations are optional and will be context-aware where relevant.
                  </p>
                </div>
              </SectionBlock>
            ) : null}

            <div className="pb-2">
              <SignupCTA
                title="Get notified when new tools go live"
                subtitle="Create a free account to save your plan and receive new-tool updates for this category."
                bullets={["Get launch notifications", "Save your tool history", "Unlock deeper planning experiences"]}
                primaryCtaLabel="Create free account"
                primaryCtaHref="/signup"
                secondaryCtaLabel="Browse all tools"
                secondaryCtaHref="/netherlands/tools/"
                variant="panel"
              />
            </div>
          </div>
        </Container>
      }
    />
  );
}
