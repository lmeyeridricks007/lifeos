import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import { PageHero, PillarGuideHeroRegion, PillarJourneyStack } from "@/components/page/pillar-template";
import { Container } from "@/components/ui/container";
import { CardLink } from "@/components/ui/card-link";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { siteGuideColumnPadYClass } from "@/lib/ui/site-shell-identity";
import {
  COMMUNITY_BASICS_NETHERLANDS_PATH,
  CITIES_HUB_PATH,
  DUTCH_CULTURE_PATH,
  FAMILY_LIFE_PATH,
  LANGUAGE_LEARNING_PATH,
  LIVING_CULTURE_ETIQUETTE_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  SURVIVAL_GUIDE_PATH,
  VOLUNTEERING_PATH,
} from "@/src/components/life/communityBasicsNetherlandsPageModel";
import { DUTCH_SOCIAL_NORMS_PATH } from "@/src/components/life/dutchSocialNormsPageModel";
import { DATING_NETHERLANDS_PATH } from "@/src/components/life/datingNetherlandsPageModel";
import { DUTCH_HOLIDAYS_TRADITIONS_PATH } from "@/src/components/life/dutchHolidaysTraditionsPageModel";

export const revalidate = CONTENT_REVALIDATE;

const CANONICAL = "/netherlands/life/" as const;
const META_TITLE = "Life in the Netherlands | Expat Community & Integration Hub";
const META_DESCRIPTION =
  "Editorial hub for expat life in the Netherlands: community basics, culture, language, family settling, volunteering and links to the wider Living survival guides.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const HUB_LINKS = [
  {
    href: COMMUNITY_BASICS_NETHERLANDS_PATH,
    title: "Community Basics in the Netherlands",
    description: "Making friends, neighbors, clubs, volunteering, events and practical integration strategies.",
  },
  {
    href: DUTCH_CULTURE_PATH,
    title: "Dutch Culture",
    description: "Flagship guide to Dutch values, traditions, communication, work culture, food, holidays and regional life.",
  },
  {
    href: DUTCH_SOCIAL_NORMS_PATH,
    title: "Dutch Social Norms",
    description: "Everyday etiquette, greetings, birthdays, punctuality, neighbour culture and unwritten social rules.",
  },
  {
    href: DATING_NETHERLANDS_PATH,
    title: "Dating in the Netherlands",
    description: "Dutch dating culture, apps, singles events, sports clubs, active holidays and practical ways to meet people.",
  },
  {
    href: DUTCH_HOLIDAYS_TRADITIONS_PATH,
    title: "Dutch Holidays & Traditions",
    description: "King's Day, Sinterklaas, Christmas, public holidays, school breaks and regional celebrations.",
  },
  {
    href: SURVIVAL_GUIDE_PATH,
    title: "Netherlands Survival Guide",
    description: "Day-one through month-one Living hub: transport, apps, payments, groceries and first-week sequencing.",
  },
  {
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    title: "Dutch Culture & Etiquette",
    description: "Directness, invitations, public etiquette and neighbor norms in daily Dutch life.",
  },
  {
    href: MOVING_TO_NETHERLANDS_PATH,
    title: "Moving to the Netherlands",
    description: "Relocation timeline connecting registration, housing and settling-in community life.",
  },
  {
    href: CITIES_HUB_PATH,
    title: "Dutch Cities Guide",
    description: "Compare cities for international population, neighborhoods and social opportunities.",
  },
  {
    href: LANGUAGE_LEARNING_PATH,
    title: "Learning Dutch (planned)",
    description: "Planned language-learning hub for courses, apps and municipal programs.",
  },
  {
    href: FAMILY_LIFE_PATH,
    title: "Family Life Netherlands (planned)",
    description: "Planned family settling guide for schools, parent networks and community routes.",
  },
  {
    href: VOLUNTEERING_PATH,
    title: "Volunteering Netherlands (planned)",
    description: "Planned guide to volunteer portals, municipal listings and integration through giving back.",
  },
] as const;

export default function NetherlandsLifeHubPage() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Life in the Netherlands", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <WebPageJsonLd name={META_TITLE} description={META_DESCRIPTION} urlPath={CANONICAL} datePublished="2026-10-22" />
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
              eyebrow="Netherlands · Life"
              title="Life in the Netherlands"
              subtitle="Editorial hub for community life, integration, culture and settling in after relocation. Start with community basics or jump to the wider Living survival guides."
              afterSubtitle={
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-copilot-text-secondary">
                  This hub connects social integration with cities, language, family life and volunteering — orientation only, not legal or immigration advice.
                </p>
              }
              shareUrl={new URL(CANONICAL, baseUrl).toString()}
              pageId={CANONICAL}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack>
            <section className="space-y-6" aria-labelledby="life-hub-next">
              <div>
                <h2 id="life-hub-next" className="text-lg font-semibold text-copilot-text-primary sm:text-xl">
                  Where to go next
                </h2>
                <p className="mt-2 text-sm text-copilot-text-secondary">
                  Cards below link to community integration guides and related Life topics.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {HUB_LINKS.map((card) => (
                    <CardLink
                      key={card.href}
                      href={card.href}
                      title={card.title}
                      description={card.description}
                      className="border-l-4 border-l-copilot-primary/45 bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.08]"
                    />
                  ))}
                </div>
                <p className="mt-6 text-sm text-copilot-text-secondary">
                  <Link href="/netherlands/" className="font-semibold text-brand-600 hover:underline">
                    ← Netherlands hub
                  </Link>
                </p>
              </div>
            </section>
          </PillarJourneyStack>
        }
      />
    </>
  );
}
