import type { Metadata } from "next";
import Link from "next/link";
import { MoveHero } from "@/components/page/move-shell";
import { CardLink } from "@/components/ui/card-link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { BankComparisonToolClient } from "@/src/components/tools/bank-comparison/BankComparisonToolClient";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const CANONICAL = "/netherlands/tools/bank-comparison/" as const;
const BASE = "/netherlands";
const HERO_IMAGE = "/images/heroes/netherlands-bank-comparison-tool-hero.png";

const META_TITLE = "Bank Comparison Tool for Expats in the Netherlands | ExpatCopilot";
const META_DESCRIPTION =
  "Pick a Dutch bank that fits how you live: salary, rent, shopping with iDEAL, sending money abroad, or freelancing. Simple scores from your answers — not live prices. Partner links do not change the scores. Always check each bank’s own website before you sign.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "bank comparison netherlands expats",
    "compare banks netherlands",
    "best bank account netherlands expats",
    "digital vs traditional bank netherlands",
    "expat banking tool netherlands",
    "ING vs bunq Netherlands",
    "Dutch bank account comparison",
    "iDEAL bank account Netherlands",
    "expat freelancer bank Netherlands ZZP",
    "Wise vs Dutch bank account",
    "bank fees Netherlands expat",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Person at a desk with a laptop and notes, planning everyday banking in the Netherlands — photo for illustration, not live prices.",
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
    id: "bc-financial-advice",
    question: "Is this financial advice?",
    answer:
      "No. We offer general planning help, not personal financial advice. This tool mixes your answers with our own simple ratings for each bank. It cannot know your contract, employer rules, taxes, or future fee changes — always confirm products and prices on each bank’s official website.",
  },
  {
    id: "bc-affiliate-results",
    question: "Are results affected by affiliate links?",
    answer: `${AFFILIATE_LINKS_SCORING_DISCLAIMER} Scores and setup ideas use only your answers and our ratings — not whether we have a partner deal.`,
  },
  {
    id: "bc-banks-included",
    question: "Which banks are included?",
    answer:
      "We compare a short list: ING, ABN AMRO, and Rabobank (classic Dutch banks); bunq, Revolut, and N26 (app-first banks); and Wise for sending money abroad. In step 5 you can turn groups on or off. Names and products change — treat this as a starting map, then check each bank’s site.",
  },
  {
    id: "bc-hybrid-why",
    question: "Why do you recommend a hybrid setup?",
    answer:
      "Sometimes you care both about everyday Dutch banking (salary, rent, iDEAL) and about apps or travel money abroad. Many people use one main Dutch account plus a second app or account for other currencies or trips. That is only a planning idea — your employer, landlord, and tax rules still decide what you can use.",
  },
  {
    id: "bc-fee-compare-frequency",
    question: "How often should I compare bank fees?",
    answer:
      "At least when you are about to open or switch, and again before a yearly package renews. Banks change prices and card bundles often — this page does not pull live numbers, so use the checklist as a reminder to read the bank’s own price list on the day you choose.",
  },
  {
    id: "bc-without-bsn",
    question: "Can I use this without a BSN?",
    answer:
      "Yes. We ask about your BSN so we can stress “easy to open” and everyday Dutch banking where that matters. You can use the tool before you have a BSN; still check each bank’s current rules and papers, because they change.",
  },
  {
    id: "bc-storage",
    question: "Do you store my answers?",
    answer:
      "You do not need an account, and we do not save your answers on our servers. If you copy a summary, it only exists where you paste it.",
  },
] as const;

/** Curated “read next” banking guides — same list appears in SEO content and related-guide cards. */
const BANKING_GUIDES_NEXT_RAW = [
  { href: BEST_BANKS_EXPATS_PATH, title: "Best banks for expats in the Netherlands", description: "Our short list and bank-by-bank notes — the same names you see in this tool." },
  { href: `${BASE}/money/banking/cheapest-accounts/`, title: "Cheapest bank accounts", description: "What “cheap” really means when you pick an account as an expat." },
  { href: `${BASE}/money/banking/fees/`, title: "Banking fees & costs", description: "Monthly packages, cards, cash machines, and paying abroad — in plain language." },
  { href: `${BASE}/money/banking/types-of-accounts/`, title: "Types of bank accounts", description: "Current, savings, joint, student, and business accounts explained simply." },
  { href: `${BASE}/money/banking/how-payments-work/`, title: "How payments work", description: "iDEAL, direct debits, and paying in shops — what expats actually use." },
  { href: `${BASE}/money/banking/international-transfers/`, title: "International transfers from the Netherlands", description: "Exchange rates, fees, and when to use a transfer app next to a Dutch account." },
  { href: `${BASE}/money/banking/best-bank-zzp/`, title: "Best bank for freelancers (ZZP)", description: "Keeping business and personal money apart and what to check on business fees." },
] as const;

const RELATED_GUIDES_RAW = [
  ...BANKING_GUIDES_NEXT_RAW,
  { href: `${BASE}/money/banking/traditional-vs-digital/`, title: "Traditional vs digital banks", description: "Understand the difference before you pick one name." },
  { href: BANKING_HUB_PATH, title: "Banking hub", description: "All our banking guides in one place." },
  { href: `${BASE}/money/`, title: "Money hub", description: "Taxes, tools, and banking help for expats." },
  { href: `${BASE}/money/tools/cost-of-living-calculator/`, title: "Cost of living calculator", description: "See if your rent and monthly costs fit your budget before you pick a fee level." },
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

const TRADITIONAL_VS_DIGITAL_PATH = `${BASE}/money/banking/traditional-vs-digital/` as const;

export default function BankComparisonToolPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const bankingGuidesNext = resolveBankingGuidesNext();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tools", url: "/netherlands/tools/" },
    { name: "Bank comparison tool", url: CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Bank Comparison Tool for Expats in the Netherlands",
    description:
      "Questionnaire plus simple 1–5 ratings per bank topic; your answers set how much each topic matters. Not live prices, not pay-to-rank, not personal financial advice.",
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
        monetizationPageType="comparison"
        introDisclaimerId="before-you-start"
        hero={
          <MoveHero
            variant="tool"
            titleClassName="font-normal"
            eyebrow="TOOL · BANKING"
            title="Bank Comparison Tool for Expats"
            subtitle="See how classic Dutch banks, app-first banks, and money-transfer services line up with how you live — salary, rent, sending money abroad, fees, freelancing, family life, and day-to-day spending."
            introBullets={[
              "Compare banks for your situation, not a one-size-fits-all “best” list",
              "See whether a classic bank, an app bank, or both might suit you",
              "Spot extra costs such as transfers, exchange rates, cards, cash abroad, and paid plans",
              "Get a short checklist before you open an account",
            ]}
            primaryCtaLabel="Start comparison"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Read best banks guide"
            secondaryCtaHref={BEST_BANKS_EXPATS_PATH}
            image={{
              src: HERO_IMAGE,
              alt: "Photograph of a professional at a bright desk comparing banking options on a laptop — planning context for the Netherlands bank comparison tool, not live fees.",
            }}
            imageFallback={{
              src: HERO_IMAGE,
              alt: "Bank comparison tool hero: desk with laptop and notebook for expat banking planning.",
            }}
            shareUrl={shareUrl}
            pageId={CANONICAL}
          />
        }
        intro={
          <div className="space-y-3 text-sm leading-relaxed text-copilot-text-secondary md:text-[0.9375rem]">
            <p>
              Answer five short steps. We mix what matters to you with our simple 1–5 ratings for each bank on everyday topics. You can see how much each topic counted. Partner deals do not change the math, and we do not pull live prices from bank websites.
            </p>
            <p className="text-copilot-text-primary">Read the score as a planning hint — not as the single “best” bank.</p>
          </div>
        }
        disclosure="This page is for planning only — not legal, tax, immigration, or personal financial advice. Scores are rough guides; prices and product names change. Always read each bank’s own documents before you open an account or send money. Partner relationships do not change how we score banks here."
        primarySectionTitle="Bank comparison"
        primarySectionContent={<BankComparisonToolClient shareUrl={shareUrl} />}
        mainSectionTitle="Extra detail"
        explanatorySectionsOuterTitle="How scoring works"
        explanatorySections={[
          {
            id: "bc-weights",
            title: "What we count from your answers",
            body: [
              "Each answer gently shifts how much we care about topics such as everyday Dutch banking, getting the account open, cost, sending money abroad, freelance or business use, family accounts, help from the bank, apps, and long-term use. The shares add up to 100% and appear in your results so you can see what moved the order.",
            ],
          },
          {
            id: "bc-catalog",
            title: "Which banks and how we rate them",
            bullets: [
              "We keep a fixed short list with a simple 1–5 score per topic for each bank, plus yes / no / “depends” notes for things like iDEAL, joint accounts, and business accounts.",
              "ING, ABN AMRO, Rabobank, bunq, Revolut, and N26 match the names we use elsewhere on the site; Wise is included mainly for sending money abroad.",
            ],
          },
          {
            id: "bc-not-live",
            title: "Not live prices",
            body: [
              "The “typical fees” lines in your results describe patterns — they are not price quotes. Check every euro on the bank’s own price list or calculator before you decide.",
            ],
          },
          {
            id: "bc-filters",
            title: "When we hide a bank",
            bullets: [
              "If you tick a need a bank clearly cannot meet, we drop that bank from the list so you are not misled.",
              "If something is marked “depends”, we may nudge the score down a little when you said that need is strict — your own read of the terms still matters more.",
            ],
          },
        ]}
        seoContentSectionTitle="Planning context for Dutch banking"
        seoContent={
          <div className="space-y-10 text-sm leading-relaxed text-copilot-text-secondary md:text-[0.9375rem]">
            <MoveClusterToolPostValueBlock preset="servicesBanksHubSoftCta" />

            <section id="how-bank-comparison-works" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">How this tool compares banks</h3>
              <p className="mt-3">
                The number you see is a planning score from 0 to 100. It shows how closely a bank matches what you said matters, using our fixed simple ratings per topic. It is not a “best bank in the Netherlands” list, not live prices, and not a promise that your employer or landlord will accept a given account.
              </p>
              <p className="mt-3">
                The percentages in your results come only from your answers (needs, how long you stay, BSN timing, how you feel about cost, how you like to get help, and so on). They show what moved the list — you can disagree and still use the shortlist as a reason to read each bank’s own pages.
              </p>
            </section>

            <section id="before-opening-dutch-account" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">What to check before opening an account</h3>
              <p className="mt-3">Use this as a checklist on each bank’s site — especially if salary, rent, or your business depend on the account.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="text-copilot-text-primary">Fees:</span> monthly packages, new cards, cash machines abroad, quiet accounts, and upgrades — read the price list for the week you apply.
                </li>
                <li>
                  <span className="text-copilot-text-primary">iDEAL and local payments:</span> check the exact account name works for your shops, landlord, and employer — not only words like “EU account” on a poster.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Papers to open the account:</span> ID, proof of address, job or school letters, and BSN timing — lists change; save a copy of the checklist you used.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Sending money abroad:</span> compare how much money really arrives (fee plus exchange rate), not only “free transfer” headlines — see our{" "}
                  <Link href={`${BASE}/money/banking/international-transfers/`} className="text-brand-600 hover:underline">
                    international transfers guide
                  </Link>
                  .
                </li>
                <li>
                  <span className="text-copilot-text-primary">Help from the bank:</span> English chat versus phone hours, how complaints work, and whether you can walk into a branch for your type of account.
                </li>
                <li>
                  <span className="text-copilot-text-primary">Business or shared accounts:</span> read business prices, export rules, joint packages, and extra-card fees before one account carries all household bills.
                </li>
              </ul>
            </section>

            <section id="traditional-digital-hybrid-banking" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">Traditional, digital, or hybrid?</h3>
              <p className="mt-3">
                <span className="text-copilot-text-primary">Classic Dutch banks</span> are the big names most landlords and employers know. They often offer phone or branch help and many products — usually as a monthly package.
              </p>
              <p className="mt-3">
                <span className="text-copilot-text-primary">App-first banks</span> are built around your phone. They can be quick to open and handy in English or with several currencies — but you should still check iDEAL, direct debits, and employer rules on the exact Dutch product.
              </p>
              <p className="mt-3">
                A <span className="text-copilot-text-primary">hybrid</span> setup means a normal Dutch account for daily life plus a second account or app for travel, other currencies, or invoices abroad. Many expats do this — it is not automatically right for your contract or taxes.
              </p>
              <p className="mt-4">
                <Link href={TRADITIONAL_VS_DIGITAL_PATH} className="text-brand-600 hover:underline">
                  Read the Traditional vs digital banks guide
                </Link>{" "}
                for a fuller picture, then return to the tool above to choose which types of bank you want in your short list.
              </p>
            </section>

            <section id="banking-guides-read-next" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-normal text-copilot-text-primary">Banking guides to read next</h3>
              <p className="mt-3 max-w-3xl">
                These guides go deeper on the same ideas as the questionnaire — fees, paying in shops, account types, freelancing, and sending money abroad. If a page is not ready yet, the card will show as coming soon.
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
              <p className="mt-6 text-xs text-copilot-text-muted">
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
            <Link href="/netherlands/tools/banking-cost-estimator/" className="text-brand-600 hover:text-brand-700">
              Banking cost estimator
            </Link>
            <Link href={`${BASE}/money/`} className="text-brand-600 hover:text-brand-700">
              Money hub
            </Link>
            <Link href={`${BASE}/tools/`} className="text-brand-600 hover:text-brand-700">
              Tools hub
            </Link>
            <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="text-brand-600 hover:text-brand-700">
              Cost of living calculator
            </Link>
            <Link href={`${BASE}/tools/city-comparison/`} className="text-brand-600 hover:text-brand-700">
              City comparison tool
            </Link>
          </nav>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
