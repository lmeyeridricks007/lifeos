import type { Metadata } from "next";
import Link from "next/link";
import { MoveHero } from "@/components/page/move-shell";
import { CardLink } from "@/components/ui/card-link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { TransferCostCalculatorToolClient, TransferCostWorkflowCta } from "@/src/components/tools/transfer-cost";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { TRANSFER_COST_CALCULATOR_ASSUMPTIONS } from "@/src/data/tools/transferCostCalculatorAssumptions";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";

export const revalidate = CONTENT_REVALIDATE;

const CANONICAL = TRANSFER_COST_CALCULATOR_PATH;
const BASE = "/netherlands";
const HERO_IMAGE = "/images/heroes/netherlands-transfer-cost-calculator-hero.webp";

const META_TITLE = "International Transfer Cost Calculator | ExpatCopilot";
const META_DESCRIPTION =
  "Rough guide to sending money from the Netherlands: send fees, exchange-rate cost (FX), and how much may reach the other person. Uses simple ranges for planning — not live bank prices.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "international transfer cost calculator Netherlands",
    "send money abroad fees Netherlands",
    "FX markup transfer estimate",
    "expat transfer calculator EUR",
  ],
  openGraph: {
    type: "website",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    images: [
      {
        url: HERO_IMAGE,
        width: 1536,
        height: 1024,
        alt: "Photorealistic home office desk with laptop, euro notes, and passport — planning international transfer costs from the Netherlands, not a live bank quote.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

const FAQ_ITEMS = [
  {
    id: "tcc-live-fx",
    question: "Does this use live exchange rates?",
    answer:
      "No. We use simple fee ranges and simple exchange-rate cost ranges from our own notes — not the live rate. Rates change all the time. Before you send, always check the number in each bank or app while you are logged in.",
  },
  {
    id: "tcc-recipient-amount",
    question: "Is the “recipient value” the exact foreign currency amount?",
    answer:
      "No. We show a rough value in euros after the costs we model on your side. The real amount in dollars, pounds, or another currency still depends on that day’s rate and the other person’s bank. Check both on the official screen before you confirm.",
  },
  {
    id: "tcc-why-ranges",
    question: "Why ranges instead of one number?",
    answer:
      "Real fees and exchange costs change by route, customer type, and product. A low–high range is honest: it shows we do not know your exact price without checking each provider.",
  },
  {
    id: "tcc-banks-ranked",
    question: "Are banks or Wise ranked as winners here?",
    answer:
      "No. We do not pick a winner. The provider list is fixed for reading order only, with links where we have them. The three path cards describe common patterns — not a scoreboard.",
  },
  {
    id: "tcc-advice",
    question: "Is this personal financial advice?",
    answer:
      "No. This site gives general education only. Read each bank or app’s own terms and price list before you send money.",
  },
  {
    id: "tcc-affiliate",
    question: "Do affiliate links change the estimate?",
    answer: `${AFFILIATE_LINKS_SCORING_DISCLAIMER} The numbers here use only your answers and our simple planning ranges.`,
  },
  {
    id: "tcc-storage",
    question: "Do you store my answers?",
    answer: "You do not need an account. We do not save your answers on our servers. If you copy a summary, it only exists where you paste it.",
  },
] as const;

const GUIDES_NEXT_RAW = [
  {
    href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
    title: "International transfers from the Netherlands",
    description: "Fees, exchange rates, timing, and how to compare what arrives — full guide.",
  },
  {
    href: `${BASE}/money/banking/fees/`,
    title: "Banking fees & costs",
    description: "What Dutch banks often charge — helpful next to transfer tools.",
  },
  {
    href: `${BASE}/money/banking/traditional-vs-digital/`,
    title: "Traditional vs digital banks",
    description: "When a branch bank, app-only bank, or both may fit your daily money.",
  },
  {
    href: BANK_COMPARISON_TOOL_PATH,
    title: "Bank comparison tool",
    description: "Short questions about everyday Dutch banking — not transfer prices.",
  },
  {
    href: BANKING_COST_ESTIMATOR_PATH,
    title: "Banking cost estimator",
    description: "Rough monthly and yearly costs for accounts, cards, and cash machines.",
  },
  {
    href: CHEAPEST_BANK_ACCOUNTS_PATH,
    title: "Cheapest bank accounts",
    description: "What “cheap” can mean for Dutch accounts — ideas, not one live winner.",
  },
  {
    href: BANKING_HUB_PATH,
    title: "Banking hub",
    description: "All banking guides in one place.",
  },
] as const;

const RELATED_GUIDES_RAW = [
  ...GUIDES_NEXT_RAW,
  { href: `${BASE}/money/`, title: "Money hub", description: "Taxes, banking, and tools for expats." },
  { href: `${BASE}/tools/`, title: "Netherlands tools hub", description: "Calculators and planners across topics." },
] as const;

function resolveRelatedGuides() {
  const out: Array<{ href: string; title: string; description: string; status?: "coming_soon" }> = [];
  for (const g of RELATED_GUIDES_RAW) {
    const st = getRouteStatus(g.href);
    if (st === "hidden") continue;
    if (st === "coming-soon") out.push({ ...g, status: "coming_soon" });
    else out.push({ ...g });
  }
  return out;
}

function resolveGuidesNext() {
  const out: Array<{ href: string; title: string; description: string; status?: "coming_soon" }> = [];
  for (const g of GUIDES_NEXT_RAW) {
    const st = getRouteStatus(g.href);
    if (st === "hidden") continue;
    if (st === "coming-soon") out.push({ ...g, status: "coming_soon" });
    else out.push({ ...g });
  }
  return out;
}

export default function TransferCostCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const guidesNext = resolveGuidesNext();
  const assumptions = TRANSFER_COST_CALCULATOR_ASSUMPTIONS;

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tools", url: "/netherlands/tools/" },
    { name: "International Transfer Cost Calculator", url: CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "International Transfer Cost Calculator",
    description:
      "Planning tool for send costs from the Netherlands: simple fee ranges plus exchange-rate cost ranges — not live prices from providers.",
    url: CANONICAL,
    applicationCategory: "WebApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        sectionTitleExtraClassName="font-normal"
        monetizationPageType="tool"
        introDisclaimerId="before-you-start"
        hero={
          <MoveHero
            variant="tool"
            titleClassName="font-normal"
            eyebrow="TOOL · BANKING"
            title="International Transfer Cost Calculator"
            subtitle="Get a rough picture before you send: send fees, exchange-rate cost (FX), and how much may reach the other person."
            introBullets={[
              "See three common ways people send (bank, app bank, transfer company)",
              "See why the exchange rate can cost more than the fee line",
              "See a simple total range before you check each app",
              "Use it to avoid surprises on international transfers",
            ]}
            primaryCtaLabel="Calculate transfer cost"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Compare transfer options"
            secondaryCtaHref={INTERNATIONAL_TRANSFERS_FROM_NL_PATH}
            image={{
              src: HERO_IMAGE,
              alt: "Home office desk with laptop, euro banknotes, and passport — planning international transfer costs from the Netherlands, not a live bank quote.",
            }}
            imageFallback={{
              src: HERO_IMAGE,
              alt: "Transfer cost calculator hero — desk, laptop, and travel money planning scene.",
            }}
            shareUrl={shareUrl}
            pageId={CANONICAL}
          />
        }
        intro={
          <div className="space-y-3 text-sm leading-relaxed text-copilot-text-secondary md:text-[0.9375rem]">
            <p>
              Answer four short steps. We mix your send size and the other person’s currency with <span className="text-copilot-text-primary">simple fee ranges and exchange-rate cost ranges</span> from our notes — not live prices from any bank or app. Use the result as a first check, then copy the real numbers from each provider’s own screen.
            </p>
            <TransferCostWorkflowCta variant="card" />
            <p className="text-copilot-text-primary">
              Pair this tool with the{" "}
              <Link href={BANK_COMPARISON_TOOL_PATH} className="text-brand-600 hover:underline">
                Bank comparison tool
              </Link>
              , the{" "}
              <Link href={BANKING_COST_ESTIMATOR_PATH} className="text-brand-600 hover:underline">
                Banking cost estimator
              </Link>
              , the{" "}
              <Link href={INTERNATIONAL_TRANSFERS_FROM_NL_PATH} className="text-brand-600 hover:underline">
                International transfers guide
              </Link>
              , and{" "}
              <Link href={CHEAPEST_BANK_ACCOUNTS_PATH} className="text-brand-600 hover:underline">
                Cheapest bank accounts
              </Link>{" "}
              — then double-check every euro on the official sites.
            </p>
            <p className="text-xs text-copilot-text-muted">
              Last review of our planning notes: {assumptions.documented.lastChecked} ({assumptions.documented.sourceKey}).
            </p>
          </div>
        }
        disclosure="This page is for planning only. It is not legal, tax, immigration, or personal financial advice. The ranges are our editorial planning bands — real prices and rates change all the time. Always confirm how much arrives on each provider’s official screen. Affiliate links on other pages do not change how this tool counts."
        primarySectionTitle="Use the calculator"
        primarySectionContent={<TransferCostCalculatorToolClient shareUrl={shareUrl} />}
        mainSectionTitle="Read more"
        explanatorySectionsOuterTitle="What this calculator does"
        explanatorySections={[
          {
            id: "tcc-fee-fx",
            title: "Fees and exchange rate, together",
            body: [
              "We add a simple send-fee range and a simple exchange-rate cost range on your amount. That matches real life: a “low fee” can still mean less money arrives if the rate is weak.",
            ],
          },
          {
            id: "tcc-paths",
            title: "Three common ways to send",
            bullets: [
              "Traditional bank: in our model, often higher fee and exchange-cost ranges.",
              "Digital bank: in our model, often in the middle — still check your plan and route in the app.",
              "Transfer company: in our model, often lower ranges for many non-euro sends — paying by card can add extra cost.",
            ],
          },
          {
            id: "tcc-not-ranking",
            title: "We do not pick a winner",
            body: [
              "Later you will see a short list of names for reading order, with links where we have them. This tool does not read partner data and does not change numbers for affiliate income.",
            ],
          },
        ]}
        seoContentSectionTitle="Before you send money abroad"
        seoContent={
          <div className="space-y-10 text-sm leading-relaxed text-copilot-text-secondary md:text-[0.9375rem]">
            <MoveClusterToolPostValueBlock preset="servicesBanksHubSoftCta" />

            <section id="tcc-what-to-compare" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">What to compare before you send</h3>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5">
                <li>
                  <span className="text-copilot-text-primary">How much arrives:</span> on each site, use the same send amount, same payout type, and the same time of day when you compare.
                </li>
                <li>
                  <span className="text-copilot-text-primary">The exchange rate:</span> compare the rate you are offered with a rate you trust online. A small gap on the rate grows with the send size.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Speed vs cost:</span> very fast options can cost more or use a weaker rate on some routes.
                </li>
                <li>
                  <span className="text-copilot-text-primary">How you pay in:</span> paying by card can cost more than paying from your bank account — read the fee lines before you confirm.
                </li>
              </ul>
            </section>

            <section id="tcc-read-next" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">Guides to read next</h3>
              <p className="mt-3 max-w-3xl">These pages explain fees and exchange rates in more detail than this tool.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {guidesNext.map((guide) => (
                  <CardLink
                    key={guide.href}
                    href={guide.href}
                    title={guide.title}
                    description={guide.description}
                    status={guide.status}
                    className="border-l-4 border-l-copilot-primary/45 bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.08]"
                  />
                ))}
              </div>
            </section>
          </div>
        }
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={[...FAQ_ITEMS]}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related hubs">
            <Link href={INTERNATIONAL_TRANSFERS_FROM_NL_PATH} className="text-brand-600 hover:text-brand-700">
              International transfers guide
            </Link>
            <Link href={BANK_COMPARISON_TOOL_PATH} className="text-brand-600 hover:text-brand-700">
              Bank comparison tool
            </Link>
            <Link href={BANKING_COST_ESTIMATOR_PATH} className="text-brand-600 hover:text-brand-700">
              Banking cost estimator
            </Link>
            <Link href={CHEAPEST_BANK_ACCOUNTS_PATH} className="text-brand-600 hover:text-brand-700">
              Cheapest bank accounts
            </Link>
            <Link href={BANKING_HUB_PATH} className="text-brand-600 hover:text-brand-700">
              Banking hub
            </Link>
            <Link href={`${BASE}/money/`} className="text-brand-600 hover:text-brand-700">
              Money hub
            </Link>
            <Link href={`${BASE}/tools/`} className="text-brand-600 hover:text-brand-700">
              Tools hub
            </Link>
          </nav>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
