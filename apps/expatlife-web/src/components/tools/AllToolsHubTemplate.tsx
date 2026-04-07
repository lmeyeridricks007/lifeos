import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { ToolCategory, ToolRecord } from "@/src/lib/tools/loadToolRegistry";
import { ClusterHubPageTemplate } from "@/components/page/page-templates";
import { PageHero, PillarGuideHeroRegion, SectionBlock } from "@/components/page/pillar-template";
import { sitePillarFramedHeroGutterXClass } from "@/lib/ui/site-shell-identity";
import {
  hubOrientPanelClass,
  hubPathwayCardClass,
  hubToolStatusLiveClass,
  hubToolStatusSoonClass,
} from "@/lib/ui/page-family";
import { getSiteOrigin } from "@/lib/site-origin";
import { toolsHubHeroImage } from "@/src/lib/tools/toolsHubHeroImage";

const hubContainerClass = "w-full max-w-screen-2xl";
const ALL_TOOLS_PATH = "/netherlands/tools/";

type AllToolsHubTemplateProps = {
  categories: ToolCategory[];
  featuredTools: ToolRecord[];
};

export function AllToolsHubTemplate({ categories, featuredTools }: AllToolsHubTemplateProps) {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(ALL_TOOLS_PATH, baseUrl).toString();

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
            title="All Netherlands expat tools"
            subtitle="A data-driven catalog of calculators, planners, checkers and comparisons across moving, money, work and daily life."
            heroImage={toolsHubHeroImage}
            shareUrl={shareUrl}
            pageId={ALL_TOOLS_PATH}
          />
        </PillarGuideHeroRegion>
      }
      atAGlance={
        <Container className={hubContainerClass}>
          <div className={hubOrientPanelClass}>
            <strong className="font-semibold text-foreground">Choose a category</strong> to see every tool in that topic
            (live and upcoming), or jump straight to{" "}
            <strong className="font-semibold text-foreground">Featured tools</strong> below if you already know what you
            need.
          </div>
        </Container>
      }
      pathways={
        <Container className={hubContainerClass}>
          <SectionBlock
            compact
            title="Browse by category"
            subtitle="Each category hub lists live and upcoming tools in one place."
          >
            <div className="grid grid-cols-1 gap-4 sm:gap-gap-grid sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link key={category.id} href={category.route} className={hubPathwayCardClass}>
                  <h3 className="text-base font-semibold text-foreground">{category.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{category.description}</p>
                  <p className="mt-4 text-sm font-semibold text-link transition-colors duration-150 group-hover:text-link-hover">
                    Open category tools →
                  </p>
                </Link>
              ))}
            </div>
          </SectionBlock>
        </Container>
      }
      tools={
        <Container className={hubContainerClass}>
          <SectionBlock compact title="Featured tools" subtitle="High-utility tools expats use first.">
            <div className="grid grid-cols-1 gap-4 sm:gap-gap-grid sm:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <Link key={tool.id} href={tool.route} className={hubPathwayCardClass}>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">{tool.title}</h3>
                    <span
                      className={`shrink-0 rounded-pill px-2 py-0.5 text-xs font-semibold ${
                        tool.status === "live" ? hubToolStatusLiveClass : hubToolStatusSoonClass
                      }`}
                    >
                      {tool.status === "live" ? "Live" : "Coming soon"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{tool.summary}</p>
                </Link>
              ))}
            </div>
          </SectionBlock>
        </Container>
      }
    />
  );
}
