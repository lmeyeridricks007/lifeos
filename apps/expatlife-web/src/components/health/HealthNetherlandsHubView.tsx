import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { CardLink } from "@/components/ui/card-link";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import { PageHero, PillarGuideHeroRegion, PillarJourneyStack } from "@/components/page/pillar-template";
import { absoluteUrlFromPath } from "@/lib/seo/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { filterLiveInternalLinks, isRouteLive } from "@/src/lib/routes/routeStatus";
import { siteGuideColumnPadYClass } from "@/lib/ui/site-shell-identity";
import {
  HEALTH_HUB_PATH,
  healthNetherlandsHubPage as page,
  type HealthHubLink,
} from "./healthNetherlandsHubPageModel";

function liveLinks(links: readonly HealthHubLink[]): HealthHubLink[] {
  return filterLiveInternalLinks(links.map((l) => ({ ...l, href: l.href })));
}

export function HealthNetherlandsHubView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: absoluteUrlFromPath("/netherlands/") },
    { name: "Healthcare", item: absoluteUrlFromPath(HEALTH_HUB_PATH) },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <GuidePageTemplate
        mainStackClassName="mt-2 space-y-4 sm:mt-3 sm:space-y-5 md:space-y-6"
        wrapContent={(inner) => (
          <Container className={siteGuideColumnPadYClass}>
            <MovePageTemplate variant="hub" showSidebar={false}>
              {inner}
            </MovePageTemplate>
          </Container>
        )}
        hero={
          <PillarGuideHeroRegion>
            <PageHero
              movingPillarIdentity
              heroTitleDensity="tight"
              eyebrow={page.hero.eyebrow}
              title={page.hero.pageTitle}
              subtitle={page.hero.subtitle}
              afterSubtitle={
                <nav aria-label="Breadcrumb" className="mt-4 text-sm text-copilot-text-secondary">
                  <ol className="flex flex-wrap items-center gap-1.5">
                    <li>
                      <Link href="/netherlands/" className="font-medium text-brand-600 hover:underline">
                        Netherlands
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="font-semibold text-copilot-text-primary">Healthcare</li>
                  </ol>
                </nav>
              }
              shareUrl={absoluteUrlFromPath(HEALTH_HUB_PATH)}
              pageId={HEALTH_HUB_PATH}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack>
            <section className="space-y-4" aria-labelledby="health-hub-overview">
              <h2 id="health-hub-overview" className="text-lg font-semibold text-copilot-text-primary sm:text-xl">
                How this cluster works
              </h2>
              {page.overview.map((p) => (
                <p key={p.slice(0, 48)} className="text-sm leading-relaxed text-copilot-text-secondary md:text-[0.9375rem]">
                  {p}
                </p>
              ))}
            </section>

            {page.journeySections.map((section) => {
              const links = liveLinks(section.links);
              if (!links.length) return null;
              return (
                <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4 md:scroll-mt-32">
                  <div>
                    <h2 className="text-lg font-semibold text-copilot-text-primary sm:text-xl">{section.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{section.intro}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {links.map((card) => (
                      <CardLink
                        key={card.href}
                        href={card.href}
                        title={card.label}
                        description={card.description}
                        className="border-l-4 border-l-copilot-primary/45 bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.08]"
                      />
                    ))}
                  </div>
                </section>
              );
            })}

            <section id="health-hub-faq" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <h2 className="text-lg font-semibold text-copilot-text-primary sm:text-xl">Quick answers</h2>
              <Accordion
                items={page.faqs.map((f) => ({
                  id: f.q,
                  title: f.q,
                  content: <p className="text-sm leading-relaxed text-copilot-text-secondary">{f.a}</p>,
                }))}
              />
            </section>

            <p className="text-sm text-copilot-text-secondary">
              {isRouteLive("/netherlands/education") ? (
                <>
                  Planning schools too?{" "}
                  <Link href="/netherlands/education" className="font-semibold text-brand-600 hover:underline">
                    Education & childcare hub
                  </Link>
                  {" · "}
                </>
              ) : null}
              <Link href="/netherlands/" className="font-semibold text-brand-600 hover:underline">
                ← Netherlands hub
              </Link>
            </p>
          </PillarJourneyStack>
        }
      />
    </>
  );
}
