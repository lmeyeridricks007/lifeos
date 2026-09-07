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
  EDUCATION_HUB_PATH,
  educationNetherlandsHubPage as page,
  type EducationHubLink,
} from "./educationNetherlandsHubPageModel";

function liveLinks(links: readonly EducationHubLink[]): EducationHubLink[] {
  return filterLiveInternalLinks(
    links.filter((l) => l.status !== "comingSoon").map((l) => ({ ...l, href: l.href }))
  );
}

function soonLinks(links: readonly EducationHubLink[]): EducationHubLink[] {
  return links.filter((l) => l.status === "comingSoon");
}

export function EducationNetherlandsHubView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: absoluteUrlFromPath("/netherlands/") },
    { name: "Education", item: absoluteUrlFromPath(EDUCATION_HUB_PATH) },
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
                    <li className="font-semibold text-copilot-text-primary">Education</li>
                  </ol>
                </nav>
              }
              shareUrl={absoluteUrlFromPath(EDUCATION_HUB_PATH)}
              pageId={EDUCATION_HUB_PATH}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack>
            <section className="space-y-4" aria-labelledby="education-hub-overview">
              <h2 id="education-hub-overview" className="text-lg font-semibold text-copilot-text-primary sm:text-xl">
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
              const soon = soonLinks(section.links);
              if (!links.length && !soon.length) return null;
              return (
                <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4 md:scroll-mt-32">
                  <div>
                    <h2 className="text-lg font-semibold text-copilot-text-primary sm:text-xl">{section.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{section.intro}</p>
                  </div>
                  {links.length ? (
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
                  ) : null}
                  {soon.length ? (
                    <ul className="space-y-2 rounded-2xl border border-dashed border-copilot-primary/20 bg-copilot-bg-soft/60 p-4 text-sm text-copilot-text-secondary">
                      {soon.map((item) => (
                        <li key={item.href}>
                          <span className="font-semibold text-copilot-text-primary">{item.label}</span>
                          <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                            Coming soon
                          </span>
                          <p className="mt-1">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              );
            })}

            <section id="education-hub-faq" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
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
              {isRouteLive("/netherlands/health") ? (
                <>
                  Planning healthcare too?{" "}
                  <Link href="/netherlands/health" className="font-semibold text-brand-600 hover:underline">
                    Healthcare hub
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
