import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import { PageHero, PillarGuideHeroRegion, PillarJourneyStack } from "@/components/page/pillar-template";
import { Container } from "@/components/ui/container";
import { CardLink } from "@/components/ui/card-link";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { TAX_GUIDE_FOR_EXPATS_PATH } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { EXPAT_TAXES_NL_PATH } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { siteGuideColumnPadYClass } from "@/lib/ui/site-shell-identity";
import { MoneyTaxLearningPath } from "@/src/components/money/tax-cluster/MoneyTaxLearningPath";

export const revalidate = CONTENT_REVALIDATE;

const CANONICAL = "/netherlands/money/" as const;
const META_TITLE = "Money in the Netherlands for Expats | ExpatCopilot";
const META_DESCRIPTION =
  "Start here for Dutch banking, taxes, and calculators: links to the banking hub, money tools, tax guides, and banking planning tools — editorial planning only.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const HUB_LINKS = [
  {
    href: BANKING_HUB_PATH,
    title: "Banking in the Netherlands",
    description: "Accounts, payments, fees, transfers, and tools — confirm products on each bank’s site.",
  },
  {
    href: "/netherlands/money/banking/security/",
    title: "Banking safety & fraud",
    description: "Practical habits for phishing, payment requests, marketplace scams, and what to do if something looks wrong.",
  },
  {
    href: "/netherlands/money/banking/account-rejection/",
    title: "Bank account rejected or delayed",
    description: "When Dutch bank onboarding is stuck or declined — what to check and what to do next.",
  },
  {
    href: "/netherlands/money/tools/",
    title: "Money & tax tools",
    description: "Calculators and planners: salary, cost of living, bank comparison, banking cost estimator, and more.",
  },
  {
    href: TAX_GUIDE_FOR_EXPATS_PATH,
    title: "Netherlands Tax Guide for Expats",
    description: "How payroll, withholding, and the annual return connect — orientation, not filing advice.",
  },
  {
    href: EXPAT_TAXES_NL_PATH,
    title: "Expat Taxes in the Netherlands",
    description: "Scenario-led map of common expat tax questions next to banking and payslip context.",
  },
  {
    href: "/netherlands/tools/",
    title: "Netherlands tools hub",
    description: "All tool categories: move, money, housing, family, and more.",
  },
] as const;

export default function NetherlandsMoneyHubPage() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Money", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <WebPageJsonLd name={META_TITLE} description={META_DESCRIPTION} urlPath={CANONICAL} datePublished="2026-05-01" />
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
              eyebrow="Netherlands · Money"
              title="Money in the Netherlands"
              subtitle="Editorial hub between everyday banking, tax orientation, and calculators. Nothing here replaces official bank, tax, or government sources."
              afterSubtitle={
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-copilot-text-secondary">
                  Use the banking hub for accounts and fees, the tax guides when payroll meets the return, and the tools hub when you want calculators in one place.
                </p>
              }
              shareUrl={new URL(CANONICAL, baseUrl).toString()}
              pageId={CANONICAL}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack>
            <section className="space-y-6" aria-labelledby="money-hub-next">
              <BankingCompareFitEstimateCostCta id="money-hub-banking-tools" />
              <div>
                <h2 id="money-hub-next" className="text-lg font-semibold text-copilot-text-primary sm:text-xl">
                  Where to go next
                </h2>
                <p className="mt-2 text-sm text-copilot-text-secondary">
                  Cards below jump to the main money sections we link from tools and guides.
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
                <MoneyTaxLearningPath id="tax-learning-path" variant="compact" className="mt-8 scroll-mt-28 md:scroll-mt-32" />
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
