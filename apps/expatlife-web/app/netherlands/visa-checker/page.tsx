import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { VisaCheckerClient } from "@/src/components/tools/visa-checker/VisaCheckerClient";
import { RecommendedImmigrationLawyersSection } from "@/src/components/tools/shared/RecommendedImmigrationLawyersSection";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import {
  VISA_CHECKER_RELATED_GUIDES,
  VISA_CHECKER_RELATED_TOOLS,
} from "@/src/lib/tools/shared/toolInternalLinks";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import { PillarTOC } from "@/components/content/PillarTOC";

export const revalidate = 3600;

const canonical = "/netherlands/visa-checker/";
const BASE = "/netherlands";

export const metadata: Metadata = {
  title: "Netherlands Visa Checker: Find the Best Visa for Your Situation",
  description:
    "Answer a few questions to see which Netherlands visa routes may fit your situation, compare options, and get a personalized relocation plan.",
  alternates: { canonical },
  openGraph: {
    title: "Netherlands Visa Checker: Find the Best Visa for Your Situation",
    description:
      "Answer a few questions to see which Netherlands visa routes may fit your situation, compare options, and get a personalized relocation plan.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands Visa Checker: Find the Best Visa for Your Situation",
    description:
      "Answer a few questions to see which Netherlands visa routes may fit your situation, compare options, and get a personalized relocation plan.",
  },
};

const FAQ_ITEMS = [
  {
    id: "easiest-visa",
    question: "Which visa is easiest for moving to the Netherlands?",
    answer:
      "It depends on your situation. EU/EEA/Swiss citizens generally do not need a visa. For non-EU citizens, the “easiest” route is the one that fits your profile: if you have a job offer from a recognized sponsor, the Highly Skilled Migrant route is common; if you are a US citizen and self-employed, DAFT may be an option; if you are joining a partner, the partner visa applies. Use the visa checker to see which routes may fit you.",
  },
  {
    id: "without-job",
    question: "Can I move to the Netherlands without a job offer?",
    answer:
      "Yes, but you need another basis for residence. Options include the self-employed route (or DAFT for US citizens), the student visa if you are admitted to qualifying education, or the partner/family visa if you have a sponsor in the Netherlands. Work-based routes like Highly Skilled Migrant and EU Blue Card typically require a job offer.",
  },
  {
    id: "best-with-job",
    question: "What visa is best if I have a job offer?",
    answer:
      "If you have a job offer from a Dutch employer that is (or can become) a recognized IND sponsor, the Highly Skilled Migrant permit is one of the most common routes. The EU Blue Card is an alternative with different salary and framework rules. Use the visa checker and compare both guides to see which fits your offer and goals.",
  },
  {
    id: "best-self-employed",
    question: "What visa is best if I am self-employed?",
    answer:
      "US citizens can consider the Dutch-American Friendship Treaty (DAFT) route for self-employment. Non-US citizens use the general self-employed residence permit, which has viability and profit requirements. Use the visa checker and read the DAFT and self-employed visa guides to compare.",
  },
  {
    id: "student-move",
    question: "Can I move as a student?",
    answer:
      "Yes. Non-EU students admitted to qualifying Dutch education typically apply for a study residence permit; the institution usually submits the application. You will need to meet financial and document requirements. See the student visa guide for details.",
  },
  {
    id: "join-partner",
    question: "Can I move to join my partner?",
    answer:
      "Yes. The partner or family residence permit allows you to join a spouse, registered partner, or family member who lives legally in the Netherlands. The sponsor must meet income and other requirements. See the partner & family visa guide for full details.",
  },
  {
    id: "daft-only-us",
    question: "Is DAFT only for Americans?",
    answer:
      "Yes. The Dutch-American Friendship Treaty (DAFT) route is only for US citizens who want to live in the Netherlands as self-employed persons. Other nationalities use the general self-employed residence permit.",
  },
  {
    id: "hsm-vs-blue-card",
    question: "What is the difference between Highly Skilled Migrant and EU Blue Card?",
    answer:
      "Both are work-based residence permits for qualified non-EU employees. The Highly Skilled Migrant permit is a Dutch scheme with its own salary thresholds and sponsor rules. The EU Blue Card is an EU-wide framework with different salary and eligibility rules. Some employers and roles fit one better than the other; compare both guides and use the visa checker to see which may fit your situation.",
  },
  {
    id: "legally-binding",
    question: "Are the results from this tool legally binding?",
    answer:
      "No. This tool gives planning guidance only, not legal advice. Eligibility and approval depend on the IND and your full circumstances. Always confirm with official sources or a qualified adviser before making decisions.",
  },
  {
    id: "after-finding-visa",
    question: "What should I do after finding my likely visa?",
    answer:
      "Read the full guide for each recommended route, confirm requirements and fees on the IND website, then use the relocation cost estimator, moving checklist, and first 90 days planner to build a practical move plan. If your situation is complex, consider advice from an immigration professional.",
  },
];

const EXAMPLE_SCENARIOS = [
  {
    id: "india-hsm" as const,
    title: "Software engineer from India with job offer",
    summary: "Non-EU professional with a Dutch job offer from a recognized sponsor; compare HSM and EU Blue Card.",
  },
  {
    id: "us-daft" as const,
    title: "US freelancer exploring DAFT",
    summary: "American planning to work as self-employed in the Netherlands.",
  },
  {
    id: "uk-student" as const,
    title: "Student relocating from the UK",
    summary: "Non-EU student with or expecting admission to Dutch education.",
  },
  {
    id: "partner-join" as const,
    title: "Partner joining spouse in the Netherlands",
    summary: "Moving to join a partner or spouse who already lives in the Netherlands.",
  },
  {
    id: "consultant-exploring" as const,
    title: "Consultant without employer sponsor",
    summary: "Considering self-employment or exploring options without a job offer.",
  },
  {
    id: "family-work" as const,
    title: "Family relocating through work route",
    summary: "Non-EU professional with job offer; family may join via partner/family route.",
  },
];

const RECOMMENDED_SERVICES: Array<{
  name: string;
  useFor: string;
  url: string;
  logo?: { src: string; alt: string };
}> = [
  { name: "Wise", useFor: "International transfers when moving money to the Netherlands.", url: "https://wise.com", logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" } },
  { name: "bunq", useFor: "Dutch banking after arrival; app-based onboarding.", url: "https://www.bunq.com", logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" } },
  { name: "HousingAnywhere", useFor: "Temporary housing before securing a long-term rental.", url: "https://www.housinganywhere.com", logo: { src: "/images/affiliates/logos/housinganywhere.svg", alt: "HousingAnywhere logo" } },
  { name: "Simyo", useFor: "Mobile setup and SIM after arrival.", url: "https://www.simyo.nl", logo: { src: "/images/affiliates/logos/simyo.svg", alt: "Simyo logo" } },
  { name: "Independer", useFor: "Compare Dutch health and other insurance.", url: "https://www.independer.nl", logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" } },
  { name: "Everaert Immigration Lawyers", useFor: "Complex immigration and route comparison advice; tailored advice for work, DAFT, self-employed, and family routes.", url: "https://www.everaert.nl/" },
  { name: "ACCESS NL", useFor: "Information and support for international residents in the Netherlands; expat support and referrals.", url: "https://www.access-nl.org/" },
];

const OFFICIAL_SOURCES = [
  { label: "IND – Residence permits overview", href: "https://ind.nl/en/residence-permits" },
  { label: "IND – Work permits", href: "https://ind.nl/en/residence-permits/work" },
  { label: "IND – Study permits", href: "https://ind.nl/en/residence-permits/study" },
  { label: "IND – Family and partner permits", href: "https://ind.nl/en/residence-permits/family-and-partner" },
  { label: "Business.gov.nl – Self-employed / startup", href: "https://business.gov.nl/regulations/work-permit-self-employed-professionals/" },
  { label: "Government.nl – Migration", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
];

type PageProps = { searchParams?: { scenario?: string } };

export default async function VisaCheckerPage(props: PageProps) {
  const searchParams = props.searchParams ?? {};
  const initialScenario = typeof searchParams.scenario === "string" ? searchParams.scenario : undefined;
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Visa Checker", url: canonical },
  ];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Visa Checker",
    description:
      "Answer a few questions to see which Dutch visa or residence routes may fit your situation, compare likely options, and get a practical plan for your move.",
    url: canonical,
    applicationCategory: "WebApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  const intro = (
    <>
      <p className="mb-3">
        Moving to the Netherlands requires the right visa or residence route if you are not covered by free movement rules.
        The best route depends on your citizenship, job offer, salary, study plans, partner or family status, or business plans.
      </p>
      <p className="mb-3">
        This tool gives a practical first recommendation and points you to the right visa pages and planning tools.
        Major routes include the{" "}
        <Link href={`${BASE}/visa/highly-skilled-migrant/`} className="font-medium text-brand-600 hover:text-brand-700">Highly Skilled Migrant</Link>
        {" "}permit,{" "}
        <Link href={`${BASE}/visa/eu-blue-card/`} className="font-medium text-brand-600 hover:text-brand-700">EU Blue Card</Link>
        ,{" "}
        <Link href={`${BASE}/visa/dutch-american-friendship-treaty/`} className="font-medium text-brand-600 hover:text-brand-700">DAFT</Link>
        {" "}for US entrepreneurs, the{" "}
        <Link href={`${BASE}/visa/self-employed-visa/`} className="font-medium text-brand-600 hover:text-brand-700">self-employed</Link>
        {" "}route,{" "}
        <Link href={`${BASE}/visa/student-visa/`} className="font-medium text-brand-600 hover:text-brand-700">student</Link>
        {" "}visa, and the{" "}
        <Link href={`${BASE}/visa/partner-family-visa/`} className="font-medium text-brand-600 hover:text-brand-700">partner & family</Link>
        {" "}visa.
      </p>
    </>
  );

  const explanatorySections = [
    { id: "what-tool-does", title: "What this tool does", body: ["Recommends Dutch visa or residence routes based on your situation."] },
    { id: "what-it-checks", title: "What it checks", body: ["Citizenship, work, salary, study, partner/family status, and business plans."] },
    { id: "what-you-get", title: "What you get", body: ["Suggested visa options, comparison, next steps, and links to the right guides and tools."] },
  ];

  const examplesSection = (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Click &quot;Use this example&quot; to scroll to the tool. You can then adjust answers to see how recommendations change.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {EXAMPLE_SCENARIOS.map((scenario) => (
          <div
            key={scenario.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-200 hover:bg-brand-50/30"
          >
            <h4 className="font-medium text-slate-900">{scenario.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{scenario.summary}</p>
            <Link
              href={`${canonical}?scenario=${scenario.id}#tool-inputs`}
              className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              Use this example →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <p>
        The right visa depends on why you are moving. Work routes (Highly Skilled Migrant, EU Blue Card) suit people with a job offer from a qualifying or recognized employer. Study routes suit students admitted to Dutch education. Partner and family routes suit those joining someone already living in the Netherlands. Entrepreneur routes (DAFT for US citizens, self-employed permit for others) suit people who will work for themselves.
      </p>
      <p>
        Your country of origin matters: EU/EEA/Swiss citizens generally do not need a visa. US citizens have access to the DAFT route for self-employment; others use the general self-employed permit. Non-EU nationals need a residence permit for work, study, or family reunification.
      </p>
      <p>
        Having a job offer changes everything for work-based moves. With a recognized sponsor and a salary that meets the threshold, the Highly Skilled Migrant route is one of the most common. The EU Blue Card is an alternative with slightly different salary and EU-wide mobility rules; compare both if you have an offer.
      </p>
      <p>
        US entrepreneurs should compare DAFT with the general self-employed permit. DAFT has a lower capital requirement (e.g. €4,500 for common business forms) and is designed for Americans; the self-employed permit has viability and profit criteria that apply to all nationalities.
      </p>
      <p>
        Students and family movers need different planning. Students rely on their institution to submit the application and must show proof of funds. Partner and family applicants need a sponsor in the Netherlands who meets income and housing requirements. Use the visa checker to see which route may fit, then read the full guide and use the relocation cost estimator and moving checklist to plan.
      </p>
    </div>
  );

  const officialSourcesSection = (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Official sources and further reading</h3>
      <p className="mt-1 text-sm text-slate-600">
        For current rules, forms, and fees, refer to the IND and Dutch government.
      </p>
      <ul className="mt-4 space-y-2">
        {OFFICIAL_SOURCES.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const relatedGuides = VISA_CHECKER_RELATED_GUIDES.map((g) => ({
    href: g.href,
    title: g.title,
    description: g.description,
  }));

  const recommendedServicesSection = (
    <section className="rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-5 md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Recommended services</h3>
      <p className="mt-1 text-sm text-slate-600">
        These services may help with different parts of the relocation process. Pricing and suitability vary by route and provider.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-16 shrink-0 items-center justify-center rounded-lg bg-slate-50/80 px-3">
                {service.logo ? (
                  <img
                    src={service.logo.src}
                    alt={service.logo.alt}
                    width={120}
                    height={48}
                    className="max-h-12 w-full object-contain object-center"
                  />
                ) : (
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600"
                    aria-hidden
                  >
                    {initials}
                  </span>
                )}
              </div>
              <p className="mt-3 font-semibold text-slate-900">{service.name}</p>
              <p className="mt-1 text-sm text-slate-600">{service.useFor}</p>
              <span className="mt-2 inline-block text-xs font-medium text-brand-600">Visit site →</span>
            </a>
          );
        })}
      </div>
    </section>
  );

  const recommendedLawyersSection = <RecommendedImmigrationLawyersSection />;

  const sidebarOnThisPage = [
    { id: "example-scenarios", label: "Example scenarios" },
    { id: "tool-inputs", label: "Start the visa check" },
    { id: "recommended-immigration-lawyers", label: "Immigration lawyers" },
    { id: "recommended-services", label: "Services" },
    { id: "how-the-tool-works", label: "How the tool works" },
    { id: "seo-content", label: "How to choose the right visa" },
    { id: "faq", label: "FAQ" },
    { id: "official-sources", label: "Official sources" },
  ];

  const sidebar = (
    <>
      <PillarTOC items={sidebarOnThisPage} />
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tools</p>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="#tool-inputs" className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Start visa check</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/visa/highly-skilled-migrant/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Compare visa types</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Estimate relocation cost</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/moving/tools/moving-checklist/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Generate moving checklist</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <ToolPageTemplate
        hero={
          <ToolHero
            eyebrow="VISA TOOL"
            title="Find the Best Visa for Moving to the Netherlands"
            subtitle="Answer a few questions to see which Dutch visa or residence routes may fit your situation, compare likely options, and get a practical plan for your move."
            primaryCtaLabel="Start visa check"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Compare all visa types"
            secondaryCtaHref={`${BASE}/visa/compare-visas/`}
            image={{ src: "/images/heroes/netherlands-visa-checker.png", alt: "A person planning an international move to the Netherlands at a wooden desk by a window overlooking a Dutch canal. On the desk, a laptop displays a European map with a route, alongside documents titled 'Move to the Netherlands Plan' and 'BUSINESS PLAN', a notebook, and a passport, symbolizing detailed relocation and visa planning." }}
          />
        }
        intro={intro}
        disclosure="This tool gives planning guidance, not legal advice."
        explanatorySections={explanatorySections}
        examplesSection={examplesSection}
        faqItems={FAQ_ITEMS}
        relatedGuides={relatedGuides}
        recommendedLawyersSection={recommendedLawyersSection}
        recommendedServices={recommendedServicesSection}
        sidebar={sidebar}
        seoContent={seoContent}
        seoContentSectionTitle="How to choose the right visa for moving to the Netherlands"
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related">
            {VISA_CHECKER_RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {VISA_CHECKER_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
        extraSection={
          <>
            <Section title="Related tools" contained={true} className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {VISA_CHECKER_RELATED_TOOLS.map((t) => (
                  <CardLink
                    key={t.href}
                    href={t.href}
                    title={t.label}
                    description={t.description}
                    className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-brand-300 hover:bg-sky-50/50"
                  />
                ))}
              </div>
            </Section>
            <Section id="official-sources" title="Official sources" contained={true} className="pt-6">
              {officialSourcesSection}
            </Section>
          </>
        }
      >
        <VisaCheckerClient
          initialScenario={initialScenario}
          visaCheckerHref={canonical}
          compareAllHref={`${BASE}/visa/compare-visas/`}
          relocationCostHref={`${BASE}/moving/tools/relocation-cost-estimator/`}
          movingChecklistHref={`${BASE}/moving/tools/moving-checklist/`}
          first90Href={`${BASE}/moving/tools/first-90-days/`}
          documentReadinessHref={`${BASE}/moving/tools/document-readiness/`}
          arrivalPlannerHref={`${BASE}/moving/tools/arrival-planner/`}
          recommendedServicesSection={recommendedServicesSection}
          recommendedLawyersSection={recommendedLawyersSection}
        />
      </ToolPageTemplate>
    </>
  );
}
