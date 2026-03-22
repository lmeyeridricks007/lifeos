import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { DocumentReadinessCheckerClient } from "@/src/components/tools/document-readiness-checker/DocumentReadinessCheckerClient";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { EXAMPLE_SCENARIOS } from "@/src/data/tools/document-readiness/example-scenarios";
import {
  DOCUMENT_READINESS_CHECKER_RELATED_GUIDES,
  DOCUMENT_READINESS_CHECKER_RELATED_TOOLS,
} from "@/src/lib/tools/shared/toolInternalLinks";

export const revalidate = 3600;

const canonical = "/netherlands/document-readiness-checker/";
const BASE = "/netherlands";

export const metadata: Metadata = {
  title: "Netherlands Document Readiness Checker: See What Documents You Still Need",
  description:
    "Check which document categories may matter for your move to the Netherlands, see what is missing, and get a personalized readiness summary with next steps.",
  alternates: { canonical },
  openGraph: {
    title: "Netherlands Document Readiness Checker: See What Documents You Still Need",
    description:
      "Check which document categories may matter for your move to the Netherlands, see what is missing, and get a personalized readiness summary with next steps.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands Document Readiness Checker: See What Documents You Still Need",
    description:
      "Check which document categories may matter for your move to the Netherlands, see what is missing, and get a personalized readiness summary with next steps.",
  },
};

const FAQ_ITEMS = [
  {
    id: "what-docs-needed",
    question: "What documents do I need to move to the Netherlands?",
    answer:
      "It depends on your visa or residence route. Common categories include passport, employment contract or job offer (work routes), university admission (student route), business documents (self-employed/DAFT), birth and marriage certificates (partner/family), proof of funds, proof of housing, and health insurance awareness. Use this tool to see which categories likely apply to you and what may still be missing.",
  },
  {
    id: "same-docs-every-visa",
    question: "Does every visa require the same documents?",
    answer:
      "No. Different routes require different document sets. For example, the Highly Skilled Migrant route focuses on passport, employment contract, and salary proof; the student route on admission and proof of funds; the partner route on relationship and sponsor documents. This checker adapts to your chosen route and household.",
  },
  {
    id: "translated-legalized",
    question: "Do I need translated or legalized documents?",
    answer:
      "Some documents from your country of origin may need apostille, legalization, or certified translation before they are accepted in the Netherlands. This varies by document type and country. The tool flags when translation, apostille, or legalization may add time; always confirm exact requirements with the IND or official source for your route.",
  },
  {
    id: "no-birth-certificate",
    question: "What if I do not have my birth certificate yet?",
    answer:
      "Order it as early as possible from your country’s civil authority. Processing can take weeks or months in some countries. If the tool marks it as missing, plan to request it and allow time for apostille or legalization if required for your route.",
  },
  {
    id: "partner-visa-docs",
    question: "What documents are usually needed for a partner visa?",
    answer:
      "Typically: passport, marriage or partnership certificate, proof of relationship, sponsor’s income and employment proof, and sometimes housing and registration details. Requirements vary; use this tool for a tailored list and read the partner & family visa guide for full details.",
  },
  {
    id: "work-visa-docs",
    question: "What documents are usually needed for a work visa?",
    answer:
      "For routes like Highly Skilled Migrant or EU Blue Card: passport, signed employment contract or job offer, salary proof, and often birth certificate and proof of address. The employer or sponsor usually submits the application. Use this tool and the specific visa guide for your route.",
  },
  {
    id: "student-visa-docs",
    question: "What documents are usually needed for a student visa?",
    answer:
      "Typically: passport, proof of admission or enrollment, proof of funds (study amount), and sometimes birth certificate and housing proof. The institution often submits the application. Use this tool and the student visa guide for the full list.",
  },
  {
    id: "not-sure-visa",
    question: "Can I still use this tool if I am not sure which visa I need?",
    answer:
      "Yes. Choose “Not sure yet” for the route and you will get broad document guidance. For better results, use the Visa Checker first to find your likely route, then return here to check document readiness for that route.",
  },
  {
    id: "legally-binding",
    question: "Are the results legally binding?",
    answer:
      "No. This tool gives planning guidance only, not legal advice. It does not replace official IND or municipality requirements. Always confirm exact document lists and procedures with official sources or a qualified adviser.",
  },
  {
    id: "after-checking",
    question: "What should I do after checking my readiness?",
    answer:
      "Use the missing-document list and next steps to prioritize what to gather. Confirm requirements on the IND website or your visa guide. Then use the relocation cost estimator, moving checklist, and first 90 days planner to build your full move plan.",
  },
];

const VALUE_CARDS = [
  {
    id: "what-tool-does",
    title: "What this tool does",
    description: "Shows which document categories may matter for your move and how ready you are.",
  },
  {
    id: "what-it-checks",
    title: "What it checks",
    description: "Visa route, citizenship, work, study, family, and business-related document categories.",
  },
  {
    id: "what-you-get",
    title: "What you get",
    description: "A readiness score, missing-document list, risk flags, and practical next steps.",
  },
];

const RELATED_TOOLS_FOR_PAGE = [
  { href: `${BASE}/visa-checker/`, title: "Visa Checker", description: "Find your best visa route." },
  { href: `${BASE}/visa-application-plan/`, title: "Visa Application Plan", description: "Get a step-by-step application roadmap." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, title: "Relocation Cost Estimator", description: "Estimate costs for your move." },
  { href: `${BASE}/moving/tools/moving-checklist/`, title: "Moving Checklist", description: "Build a step-by-step relocation checklist." },
  { href: `${BASE}/moving/tools/first-90-days/`, title: "First 90 Days Planner", description: "Plan your first weeks after arrival." },
  { href: `${BASE}/moving/tools/arrival-planner/`, title: "Arrival Planner", description: "Plan your first days after landing." },
];

const RECOMMENDED_SERVICES: Array<{
  name: string;
  useFor: string;
  href: string;
  logo?: { src: string; alt: string };
  costEstimate: string;
}> = [
  {
    name: "Everaert Immigration Lawyers",
    useFor: "Complex route and document interpretation.",
    href: "https://www.everaert.nl/",
    logo: { src: "/images/affiliates/logos/everaert.svg", alt: "Everaert Advocaten logo" },
    costEstimate: "Consultation approx. €150–350; application support by hourly rate (e.g. €150–300/hr). Confirm current fees with the firm.",
  },
  {
    name: "Wise",
    useFor: "Financial setup / moving money.",
    href: "https://wise.com",
    logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
    costEstimate: "Low fees; typical transfer fee ~0.5–1% + small fixed amount. Free to hold multi-currency. Check wise.com for current rates.",
  },
  {
    name: "bunq",
    useFor: "Dutch banking after arrival.",
    href: "https://www.bunq.com",
    logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
    costEstimate: "Free and paid plans; paid from approx. €8.99/month. Check bunq.com for current tiers.",
  },
  {
    name: "HousingAnywhere",
    useFor: "Temporary housing while arranging arrival.",
    href: "https://www.housinganywhere.com",
    logo: { src: "/images/affiliates/logos/housinganywhere.svg", alt: "HousingAnywhere logo" },
    costEstimate: "Rent and service fee vary by listing and stay length. Landlord may charge deposit. Check listing for prices.",
  },
  {
    name: "Simyo",
    useFor: "Mobile setup.",
    href: "https://www.simyo.nl",
    logo: { src: "/images/affiliates/logos/simyo.svg", alt: "Simyo logo" },
    costEstimate: "SIM from a few euros; monthly plans from approx. €10–25. Check simyo.nl for current bundles.",
  },
  {
    name: "Independer",
    useFor: "Insurance comparison.",
    href: "https://www.independer.nl",
    logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    costEstimate: "Comparison free. Premiums depend on insurer and profile; Independer may receive commission from providers.",
  },
  {
    name: "ACCESS NL",
    useFor: "Expat support and information.",
    href: "https://www.access-nl.org/",
    costEstimate: "Membership and services may have a fee; some resources free. Check access-nl.org for current options.",
  },
];

const OFFICIAL_SOURCES = [
  { label: "IND – Residence permits overview", href: "https://ind.nl/en/residence-permits" },
  { label: "IND – Work permits", href: "https://ind.nl/en/residence-permits/work" },
  { label: "IND – Study permits", href: "https://ind.nl/en/residence-permits/study" },
  { label: "IND – Family and partner permits", href: "https://ind.nl/en/residence-permits/family-and-partner" },
  { label: "Business.gov.nl – Self-employed", href: "https://business.gov.nl/regulations/work-permit-self-employed-professionals/" },
  { label: "Government.nl – Migration", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
];

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

export default async function DocumentReadinessCheckerPage(props: PageProps) {
  const searchParams = await Promise.resolve(props.searchParams ?? {}).catch(() => ({}));
  const scenarioId = typeof searchParams.scenario === "string" ? searchParams.scenario : undefined;
  const scenario = scenarioId ? EXAMPLE_SCENARIOS.find((s) => s.id === scenarioId) : undefined;
  const initialPrefill = scenario?.prefilledAnswers;
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Document Readiness Checker", url: canonical },
  ];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Visa Document Readiness Checker",
    description:
      "Check which document categories may matter for your move to the Netherlands, see what is missing, and get a personalized readiness summary with next steps.",
    url: canonical,
    applicationCategory: "PlanningApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  const intro = (
    <>
      <p className="mb-3">
        Different Dutch visa and residence routes require different document sets. Your country of origin, family status, work route, study route, or business route all affect what you should prepare.
      </p>
      <p className="mb-3">
        This tool helps you identify likely document categories, missing items, and extra complexity such as translation, apostille, or legalization. It does not replace official source checks or legal advice.
      </p>
      <p className="mb-3">
        Common categories include: <strong>passport</strong>, <strong>employment contract</strong>, <strong>university admission</strong>, <strong>birth certificate</strong>, <strong>marriage or partnership proof</strong>, <strong>business documents</strong>, <strong>income proof</strong>, and <strong>housing / address documents</strong>. Answer a few questions to see which apply to you and how ready you are.
      </p>
    </>
  );

  const valueCardVariants = [
    "rounded-2xl border border-brand-200/90 bg-gradient-to-br from-brand-50/90 to-white p-5 shadow-sm border-l-4 border-l-brand-500",
    "rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50/80 to-white p-5 shadow-sm border-l-4 border-l-sky-500",
    "rounded-2xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/70 to-white p-5 shadow-sm border-l-4 border-l-cyan-500",
  ];
  const valueCardsSection = (
    <div className="grid gap-4 sm:grid-cols-3">
      {VALUE_CARDS.map((card, i) => (
        <div key={card.id} className={valueCardVariants[i % valueCardVariants.length]}>
          <h3 className="font-semibold text-slate-900">{card.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{card.description}</p>
        </div>
      ))}
    </div>
  );

  const exampleScenariosBlock = (
    <div id="example-scenarios" className="scroll-mt-24 mb-6">
      <CollapsiblePanel
        title="Example scenarios"
        defaultOpen={false}
        titleClassName="text-base font-semibold text-slate-800"
        triggerClassName="cursor-pointer rounded-t-xl bg-sky-50/80 text-sky-800 hover:bg-sky-100/90 hover:text-sky-900"
        className="border-sky-200/80 bg-sky-50/40 rounded-2xl border border-sky-200/80"
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
          <p className="mb-4 text-sm text-slate-600">
            Click &quot;Use this example&quot; to prefill the tool with that scenario. You can then adjust answers and see your readiness.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {EXAMPLE_SCENARIOS.map((scenario) => (
              <ExampleScenarioCard
                key={scenario.id}
                scenario={{
                  id: scenario.id,
                  title: scenario.title,
                  summary: scenario.summary,
                  documentFocus: scenario.documentFocus,
                }}
              />
            ))}
          </div>
        </div>
      </CollapsiblePanel>
    </div>
  );

  const primarySectionContent = (
    <div className="space-y-6">
      {exampleScenariosBlock}
      <div className="mb-6">{valueCardsSection}</div>
      <div>
        <DocumentReadinessCheckerClient
          key={scenarioId ?? "default"}
          initialPrefill={initialPrefill}
        />
      </div>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <ToolPageTemplate
        hero={
          <ToolHero
            eyebrow="TOOL"
            title="Netherlands Visa Document Readiness Checker"
            subtitle="Answer a few questions to see which document categories may matter for your move, how ready you are, what is missing, and what to prepare next."
            primaryCtaLabel="Check my documents"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Find the best visa first"
            secondaryCtaHref={`${BASE}/visa-checker/`}
            image={{
              src: "/images/heroes/netherlands-document-readiness-hero.png",
              alt: "Person at a desk by a window overlooking a Dutch canal, checking off a physical Document Checklist while a laptop shows a Document Readiness dashboard at 72% completion. Desk includes a Dutch flag, passport, Visa Application Documents notebook, and books labeled Passport, Employment Contract, and Civil Documents.",
            }}
            imageFallback={{
              src: "/images/heroes/netherlands-document-readiness-hero.png",
              alt: "Person at a desk by a window overlooking a Dutch canal, checking off a physical Document Checklist while a laptop shows a Document Readiness dashboard. Desk includes a Dutch flag, passport, and document-category books.",
            }}
          />
        }
        intro={intro}
        disclosure="Planning guidance only — always confirm exact requirements with official sources."
        explanatorySections={[
          { id: "what-tool-does", title: "What this tool does", body: ["Shows which document categories may matter for your move and how ready you are."] },
          { id: "what-it-checks", title: "What it checks", body: ["Visa route, citizenship, work, study, family, and business-related document categories."] },
          { id: "what-you-get", title: "What you get", body: ["A readiness score, missing-document list, risk flags, and practical next steps."] },
        ]}
        sidebar={
          <nav className="space-y-4" aria-label="On this page">
            <div className="text-sm font-semibold text-slate-800">On this page</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#tool-inputs" className="hover:text-brand-600">Check your readiness</a></li>
              <li><a href="#example-scenarios" className="hover:text-brand-600">Example situations</a></li>
              <li><a href="#recommended-services" className="hover:text-brand-600">Services</a></li>
              <li><a href="#faq" className="hover:text-brand-600">FAQ</a></li>
              <li><a href="#official-sources" className="hover:text-brand-600">Official sources</a></li>
            </ul>
            <div className="pt-4 space-y-2">
              <Link href="#tool-inputs" className="block text-sm font-medium text-brand-600 hover:underline">Check my documents</Link>
              <Link href={`${BASE}/visa-checker/`} className="block text-sm font-medium text-brand-600 hover:underline">Find my visa</Link>
              <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="block text-sm font-medium text-brand-600 hover:underline">Estimate relocation cost</Link>
              <Link href={`${BASE}/moving/tools/moving-checklist/`} className="block text-sm font-medium text-brand-600 hover:underline">Generate moving checklist</Link>
            </div>
          </nav>
        }
        relatedGuides={DOCUMENT_READINESS_CHECKER_RELATED_GUIDES}
        recommendedServices={
          <div id="recommended-services" className="scroll-mt-24 rounded-2xl border-2 border-brand-200/80 bg-gradient-to-br from-brand-50/80 via-white to-sky-50/50 p-6 shadow-md md:p-8">
            <p className="mb-5 text-sm text-slate-600">
              These services may help with different parts of your move and document planning. Estimated costs are indicative for planning—confirm current rates and suitability with each provider.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {RECOMMENDED_SERVICES.map((service) => {
                const initials = service.name
                  .split(/[\s-]+/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((p) => p[0])
                  .join("")
                  .toUpperCase() || service.name.slice(0, 2).toUpperCase();
                return (
                  <a
                    key={service.name}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2 group-hover:bg-brand-50">
                        {service.logo ? (
                          <Image
                            src={service.logo.src}
                            alt={service.logo.alt}
                            width={80}
                            height={48}
                            className="h-10 w-auto max-w-[72px] object-contain"
                          />
                        ) : (
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-sm font-semibold text-slate-600"
                            aria-hidden
                          >
                            {initials}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</p>
                        <p className="mt-0.5 text-sm text-slate-600">{service.useFor}</p>
                      </div>
                    </div>
                    <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-medium text-slate-700">
                      {service.costEstimate}
                    </p>
                    <span className="mt-2 inline-block text-xs font-medium text-brand-600 group-hover:text-brand-700">Visit site →</span>
                  </a>
                );
              })}
            </div>
          </div>
        }
        seoContentSectionTitle="What documents do you usually need to move to the Netherlands?"
        seoContent={
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              Document planning depends on your visa route. Identity documents (passport, copies) are needed for almost every route. Work routes such as Highly Skilled Migrant and EU Blue Card typically require an employment contract or job offer and salary proof. Study routes require admission proof and proof of funds. Partner and family routes centre on relationship and civil-status documents (marriage certificate, birth certificates). Self-employed and DAFT routes focus on business documents and proof of funds.
            </p>
            <p>
              Your country of origin matters. Some countries’ civil documents need apostille or legalization before they are accepted in the Netherlands. Translation may be required for documents not in Dutch or English. Replacement or certified copies can take longer in some countries — plan early.
            </p>
            <p>
              Families often need more documents and earlier planning: birth certificates for children, marriage or partnership proof, and sometimes custody or parental authority evidence. Connecting this tool with the visa checker and moving checklist helps you see the full picture: which route fits, which documents you need, and what to do next.
            </p>
            <p>
              Document readiness affects your timeline and first-week admin. Missing or uncertified documents can delay registration, banking, or permit processing. Use this checker to see what is likely required, what you already have, and what still needs work — then confirm with official IND and municipality sources before you apply.
            </p>
          </div>
        }
        primarySectionTitle="Check your document readiness"
        primarySectionContent={primarySectionContent}
        faqItems={FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related guides and tools">
            {DOCUMENT_READINESS_CHECKER_RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {DOCUMENT_READINESS_CHECKER_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
        extraSection={
          <>
            <Section title="Related tools" contained={true}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {RELATED_TOOLS_FOR_PAGE.map((t) => (
                  <CardLink
                    key={t.href}
                    href={t.href}
                    title={t.title}
                    description={t.description}
                    className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-brand-300 hover:bg-sky-50/50"
                  />
                ))}
              </div>
            </Section>

            <Section id="official-sources" title="Official sources" className="scroll-mt-24" contained={true}>
              <p className="mb-4 text-sm text-slate-600">
                Confirm exact document and application requirements with these official resources.
              </p>
              <ul className="space-y-2">
                {OFFICIAL_SOURCES.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-600 hover:underline"
                    >
                      {s.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          </>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

function ExampleScenarioCard({
  scenario,
}: {
  scenario: { id: string; title: string; summary: string; documentFocus: string };
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-200 hover:bg-brand-50/30">
      <h4 className="font-medium text-slate-900">{scenario.title}</h4>
      <p className="mt-1 text-sm text-slate-600">{scenario.summary}</p>
      <p className="mt-1 text-xs text-slate-500">Focus: {scenario.documentFocus}</p>
      <Link
        href={`${canonical}?scenario=${encodeURIComponent(scenario.id)}#tool-inputs`}
        className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        Use this example →
      </Link>
    </div>
  );
}
