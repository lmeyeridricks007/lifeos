import type { Metadata } from "next";
import Link from "next/link";
import { MoveHero } from "@/components/page/move-shell";
import { CardLink } from "@/components/ui/card-link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { BANK_COMPARISON_TOOL_PATH, BankingCostEstimatorToolClient } from "@/src/components/tools/banking-cost";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { BEST_BANK_ZZP_PATH } from "@/src/components/money/best-bank-zzp/bestBankZzpPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { getBankingCostAssumptions } from "@/src/lib/banking/bankingCostEstimator";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";

export const revalidate = CONTENT_REVALIDATE;

const CANONICAL = "/netherlands/tools/banking-cost-estimator/" as const;
const BASE = "/netherlands";
const HERO_IMAGE = "/images/heroes/netherlands-banking-cost-estimator-hero.png";

const META_TITLE = "Banking Cost Estimator for Expats in the Netherlands | ExpatCopilot";
const META_DESCRIPTION =
  "Estimate your likely banking costs in the Netherlands, including account fees, card costs, ATM usage, international transfers, FX costs, premium plans, joint accounts, and ZZP/business banking extras.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "banking cost estimator netherlands",
    "bank account fees calculator netherlands",
    "expat banking costs netherlands",
    "international transfer cost estimate netherlands",
    "cheapest bank account cost netherlands",
    "Dutch bank fees estimate",
    "expat banking budget Netherlands",
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
        alt: "Photorealistic home office desk with laptop, euro coins, and notepad for expat banking budget planning in the Netherlands — editorial photo, not live bank prices.",
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

const TRADITIONAL_VS_DIGITAL_PATH = `${BASE}/money/banking/traditional-vs-digital/` as const;
const INTERNATIONAL_TRANSFERS_PATH = `${BASE}/money/banking/international-transfers/` as const;
const HOW_PAYMENTS_PATH = `${BASE}/money/banking/how-payments-work/` as const;

const FAQ_ITEMS = [
  {
    id: "bce-faq-exact-quote",
    question: "Is this an exact quote?",
    answer:
      "No. The tool outputs editorial planning bands in euros, not live prices from any bank. Tariffs, waivers, and FX tables change — use your result as a sanity check, then read each provider’s official price list for the week you apply.",
  },
  {
    id: "bce-faq-why-range",
    question: "Why use a range?",
    answer:
      "Your real bill depends on how often you send money, which currencies you touch, whether you upgrade a package, and one-off events like replacing a card. A low–high band reflects that uncertainty instead of pretending one number fits every month.",
  },
  {
    id: "bce-faq-what-costs-most",
    question: "What costs the most?",
    answer:
      "It varies by person. For many expats, visible monthly packages stay modest while international transfers and FX markups quietly dominate — especially when “free transfer” headlines hide a weak exchange rate. The estimator’s breakdown highlights the categories that moved your band.",
  },
  {
    id: "bce-faq-digital-cheaper",
    question: "Are digital banks cheaper?",
    answer:
      "Sometimes on headline monthly fees, not always on total cost. App-first banks can add paid tiers, card limits, or FX spreads that matter if you travel or send money abroad. Traditional banks can bundle more in a package — or charge more for extras. Compare your own usage pattern, not the brand label.",
  },
  {
    id: "bce-faq-transfers-cost",
    question: "How do international transfers affect cost?",
    answer:
      "Each send can carry a stated fee plus an exchange-rate markup. The markup often matters more than the fee. We model transfers and FX as separate risk bands so you remember to compare how much money actually arrives, not only “€0 transfer” marketing lines.",
  },
  {
    id: "bce-faq-freelancer-higher",
    question: "Should freelancers expect higher banking costs?",
    answer:
      "Often a little higher in the model: business or ZZP packages, invoicing tools, extra cards, and separating personal and business flows can add fixed lines. The upside is cleaner books and fewer surprises at tax time — see our freelancer banking guide for what to verify on each tariff.",
  },
  {
    id: "bce-faq-reduce-costs",
    question: "Can I reduce banking costs?",
    answer:
      "Yes, in principle: fewer paid tiers you do not use, a transfer path with a better all-in rate for your corridor, less cash-machine reliance abroad, and avoiding duplicate accounts you forget about. The estimator’s warnings and next steps point at the usual levers — still confirm every change on the bank’s own site.",
  },
  {
    id: "bce-advice",
    question: "Is this personal financial advice?",
    answer:
      "No. ExpatCopilot offers general planning help, not advice tailored to your contract, taxes, or immigration status. The ranges come from editorial assumptions plus your answers — always confirm pricing on each provider’s official site.",
  },
  {
    id: "bce-affiliate",
    question: "Do affiliate links change the estimate?",
    answer: `${AFFILIATE_LINKS_SCORING_DISCLAIMER} This estimator does not read affiliate metadata; your inputs are combined only with our documented planning bands.`,
  },
  {
    id: "bce-storage",
    question: "Do you store my answers?",
    answer:
      "No account is required and we do not save your questionnaire on our servers. If you copy a summary, it only exists where you paste it.",
  },
] as const;

/** Curated “read next” — order matches on-page “Guides to read next” section + tool. */
const BANKING_GUIDES_NEXT_RAW = [
  {
    href: BANKING_FEES_PAGE_PATH,
    title: "Banking fees & costs",
    description: "Framework for what Dutch banks often charge — pair with this estimate, then open each PDF.",
  },
  {
    href: CHEAPEST_BANK_ACCOUNTS_PATH,
    title: "Cheapest bank accounts",
    description: "Low-cost patterns without a fake single “cheapest bank” headline.",
  },
  {
    href: BEST_BANKS_EXPATS_PATH,
    title: "Best banks for expats",
    description: "Editorial shortlist aligned with the bank comparison tool roster.",
  },
  {
    href: TRADITIONAL_VS_DIGITAL_PATH,
    title: "Traditional vs digital banks",
    description: "Choose a setup style before you fixate on one brand or one monthly fee.",
  },
  {
    href: INTERNATIONAL_TRANSFERS_PATH,
    title: "International transfers from the Netherlands",
    description: "Fees, FX, and when a transfer specialist sits next to a Dutch account.",
  },
  {
    href: BEST_BANK_ZZP_PATH,
    title: "Best bank for freelancers (ZZP)",
    description: "Business vs personal separation, packages, and what to verify on tariffs.",
  },
  {
    href: BANK_COMPARISON_TOOL_PATH,
    title: "Bank comparison tool",
    description: "Scores banks on how you live — use after you have a rough cost envelope from this page.",
  },
] as const;

const RELATED_GUIDES_RAW = [
  ...BANKING_GUIDES_NEXT_RAW,
  { href: `${BASE}/money/banking/types-of-accounts/`, title: "Types of bank accounts", description: "Current, joint, student, business — plain English." },
  { href: HOW_PAYMENTS_PATH, title: "How payments work", description: "iDEAL, SEPA, and Dutch payment habits." },
  { href: BANKING_HUB_PATH, title: "Banking hub", description: "All banking guides in one place." },
  { href: `${BASE}/money/`, title: "Money hub", description: "Taxes, tools, and banking context." },
  { href: `${BASE}/tools/`, title: "Netherlands tools hub", description: "Salary, housing, and planning calculators." },
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

function resolveBankingGuidesNext() {
  const out: Array<{ href: string; title: string; description: string; status?: "coming_soon" }> = [];
  for (const g of BANKING_GUIDES_NEXT_RAW) {
    const st = getRouteStatus(g.href);
    if (st === "hidden") continue;
    if (st === "coming-soon") out.push({ ...g, status: "coming_soon" });
    else out.push({ ...g });
  }
  return out;
}

export default function BankingCostEstimatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const bankingGuidesNext = resolveBankingGuidesNext();
  const assumptions = getBankingCostAssumptions();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tools", url: "/netherlands/tools/" },
    { name: "Banking cost estimator", url: CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Banking Cost Estimator for Expats in the Netherlands",
    description:
      "Planning-only monthly and yearly euro bands for expat banking in NL — account fees, cards, ATM use, transfers, FX, premium plans, joint and ZZP extras. Not live provider quotes.",
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
            title="Banking Cost Estimator for Expats"
            subtitle="Estimate your likely monthly and yearly banking costs in the Netherlands — including account fees, cards, ATM usage, international transfers, FX costs, premium plans, joint accounts, and freelancer/ZZP banking extras."
            introBullets={[
              "Estimate fixed and usage-based banking costs",
              "See how international transfers and FX can change the real price",
              "Compare simple, digital, traditional, and hybrid banking setups",
              "Get practical next steps before opening or switching accounts",
            ]}
            primaryCtaLabel="Estimate banking costs"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Compare banks first"
            secondaryCtaHref={BANK_COMPARISON_TOOL_PATH}
            image={{
              src: HERO_IMAGE,
              alt: "Photorealistic desk scene: laptop, euro coins, pen, and notepad for banking cost planning in the Netherlands — editorial photo, not a bank fee quote.",
            }}
            imageFallback={{
              src: HERO_IMAGE,
              alt: "Banking cost estimator hero: bright workspace with laptop and budgeting items.",
            }}
            shareUrl={shareUrl}
            pageId={CANONICAL}
          />
        }
        intro={
          <div className="space-y-3 text-sm leading-relaxed text-copilot-text-secondary md:text-[0.9375rem]">
            <p>
              Answer five short steps. We add up transparent monthly euro <span className="text-copilot-text-primary">planning bands</span> from our documented assumptions — not live prices scraped from bank sites. International transfer and FX outcomes can still land outside the range for large or exotic-currency payments.
            </p>
            <p className="text-copilot-text-primary">
              Use the result as a budget sanity check, then pair it with the{" "}
              <Link href={BANK_COMPARISON_TOOL_PATH} className="text-brand-600 hover:underline">
                Bank comparison tool
              </Link>
              , our{" "}
              <Link href={BANKING_FEES_PAGE_PATH} className="text-brand-600 hover:underline">
                {"Banking fees & costs"}
              </Link>
              ,{" "}
              <Link href={CHEAPEST_BANK_ACCOUNTS_PATH} className="text-brand-600 hover:underline">
                Cheapest bank accounts
              </Link>
              ,{" "}
              <Link href={INTERNATIONAL_TRANSFERS_PATH} className="text-brand-600 hover:underline">
                International transfers
              </Link>
              , and{" "}
              <Link href={BEST_BANKS_EXPATS_PATH} className="text-brand-600 hover:underline">
                Best banks for expats
              </Link>{" "}
              — then confirm every euro on each bank’s official tariff PDF.
            </p>
            <p className="text-xs text-copilot-text-muted">
              Assumption snapshot: {assumptions.documented.lastChecked} ({assumptions.documented.sourceKey}).
            </p>
            <BankingCompareFitEstimateCostCta className="pt-2" showFeesCrossline={false} />
          </div>
        }
        disclosure="This page is for planning only — not legal, tax, immigration, or personal financial advice. Estimates are editorial ranges; provider pricing changes frequently. International transfers and FX can vary significantly. Affiliate links on other pages do not affect this calculator. Always confirm provider pricing and terms on official channels."
        primarySectionTitle="Banking cost estimator"
        primarySectionContent={<BankingCostEstimatorToolClient shareUrl={shareUrl} />}
        mainSectionTitle="Extra detail"
        explanatorySectionsOuterTitle="How this estimator works"
        explanatorySections={[
          {
            id: "bce-bands",
            title: "Uses ranges, not single numbers",
            body: [
              "Each answer maps to a low–high euro band per cost category from our documented assumptions. We sum categories into a monthly range and show yearly by multiplying by twelve. Treat it as a planning envelope — not a quote from any bank.",
            ],
          },
          {
            id: "bce-usage",
            title: "Fixed costs vs usage costs",
            bullets: [
              "Packages, premium tiers, joint extras, and ZZP business lines behave like recurring fixed-style costs in the model.",
              "ATM withdrawals abroad, how often you send internationally, and FX on card spend behave like usage — the high end is a stress test, not what you pay every month.",
            ],
          },
          {
            id: "bce-transfers-fx",
            title: "Why transfers and FX can dominate",
            body: [
              "A modest monthly account fee can look “cheap” while exchange-rate markups or corridor pricing eat more than the visible transfer fee. The estimator keeps transfer and FX risk visible so you compare money received, not only headline “free” sends.",
            ],
          },
        ]}
        seoContentSectionTitle="Planning context for Dutch banking costs"
        seoContent={
          <div className="space-y-10 text-sm leading-relaxed text-copilot-text-secondary md:text-[0.9375rem]">
            <MoveClusterToolPostValueBlock preset="servicesBanksHubSoftCta" />

            <section id="bce-what-affects-costs" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">What affects banking costs most</h3>
              <p className="mt-3 max-w-3xl">
                The estimator mirrors the same buckets we explain in our{" "}
                <Link href={BANKING_FEES_PAGE_PATH} className="text-brand-600 hover:underline">
                  {"Banking fees & costs"}
                </Link>{" "}
                guide. In practice, a few categories usually move the needle:
              </p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5">
                <li>
                  <span className="text-copilot-text-primary">Account fees:</span> monthly packages, quiet-account rules, and whether you need a second product.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Card fees:</span> extra debit or credit cards, replacement cards, and paid tiers that unlock better limits.
                </li>
                <li>
                  <span className="text-copilot-text-primary">International transfers:</span> per-send fees plus corridor pricing — see{" "}
                  <Link href={INTERNATIONAL_TRANSFERS_PATH} className="text-brand-600 hover:underline">
                    international transfers from the Netherlands
                  </Link>
                  .
                </li>
                <li>
                  <span className="text-copilot-text-primary">FX:</span> markups on card spend abroad or when you move money between currencies; often larger than the line item called “fee”.
                </li>
                <li>
                  <span className="text-copilot-text-primary">ATM and travel:</span> non-euro cash machines, weekend liquidity, and how often you rely on cash abroad.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Business and family extras:</span> ZZP packages, export rules, joint account bundles, and extra cards for partners or kids.
                </li>
              </ul>
            </section>

            <section id="bce-cheapest-not-best" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">Cheapest is not always best</h3>
              <p className="mt-3 max-w-3xl">
                The lowest headline monthly fee can still be an expensive fit if everyday Dutch life does not work smoothly — or if hidden usage costs stack up. Before you optimise for price alone, sanity-check a few non-negotiables:
              </p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5">
                <li>
                  <span className="text-copilot-text-primary">Local payment fit:</span> salary, rent, and subscriptions should match how{" "}
                  <Link href={HOW_PAYMENTS_PATH} className="text-brand-600 hover:underline">
                    payments in the Netherlands
                  </Link>{" "}
                  actually work for your employer and landlord.
                </li>
                <li>
                  <span className="text-copilot-text-primary">iDEAL and direct debits:</span> confirm the account product you plan to use is accepted where you shop and pay bills — not only marketing words like “EU account”.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Support:</span> English chat, dispute handling, and whether you need branch access for your situation.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Transfer costs:</span> if you send money abroad often, compare all-in outcomes, not only the monthly line — our{" "}
                  <Link href={INTERNATIONAL_TRANSFERS_PATH} className="text-brand-600 hover:underline">
                    transfer guide
                  </Link>{" "}
                  walks through that lens.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Premium plan creep:</span> upgrading for one feature can reset your fee baseline — read renewal rules before you tick add-ons.
                </li>
              </ul>
              <p className="mt-4 max-w-3xl">
                For the traditional-versus-app trade-off, read{" "}
                <Link href={TRADITIONAL_VS_DIGITAL_PATH} className="text-brand-600 hover:underline">
                  traditional vs digital banks
                </Link>
                , then use the{" "}
                <Link href={BANK_COMPARISON_TOOL_PATH} className="text-brand-600 hover:underline">
                  bank comparison tool
                </Link>{" "}
                to stress-test fit, not only cost.
              </p>
            </section>

            <section id="bce-read-next" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">Guides to read next</h3>
              <p className="mt-3 max-w-3xl">
                These pages go deeper on the same fee lines as the calculator. If a route is not ready yet, the card shows as coming soon.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {bankingGuidesNext.map((guide) => (
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
              <p className="mt-6 max-w-3xl text-xs text-copilot-text-muted">
                Hub:{" "}
                <Link href={BANKING_HUB_PATH} className="text-brand-600 hover:underline">
                  Banking hub
                </Link>
                .
              </p>
            </section>
          </div>
        }
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={[...FAQ_ITEMS]}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related hubs">
            <Link href={BANKING_HUB_PATH} className="text-brand-600 hover:text-brand-700">
              Banking hub
            </Link>
            <Link href={BANKING_FEES_PAGE_PATH} className="text-brand-600 hover:text-brand-700">
              {"Banking fees & costs"}
            </Link>
            <Link href={BANK_COMPARISON_TOOL_PATH} className="text-brand-600 hover:text-brand-700">
              Bank comparison tool
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
