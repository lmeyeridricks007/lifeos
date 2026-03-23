import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  Briefcase,
  Rocket,
  Flag,
  GraduationCap,
  Heart,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import { ContentTable, ContentTableRow, ContentTableCell } from "@/components/ui/content-table";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import {
  ROUTE_COMPARISON_ENTRIES,
  COMPARISON_EXAMPLE_SCENARIOS,
  COMPARISON_RELATED_TOOLS,
  COMPARISON_SERVICES,
  COMPARISON_OFFICIAL_SOURCES,
  COMPARISON_SITUATION_CARDS,
} from "@/src/data/visa-comparison";
import type { SituationCard } from "@/src/data/visa-comparison/situation-cards";
import { PillarTOC } from "@/components/content/PillarTOC";
import { RecommendedImmigrationLawyersSection } from "@/src/components/tools/shared/RecommendedImmigrationLawyersSection";
import { CompareVisasFilterChips } from "./CompareVisasFilterChips";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

/** Icon and accent style per situation card id for the "Compare by your situation" section. */
const SITUATION_CARD_STYLES: Record<
  string,
  { Icon: React.ComponentType<{ className?: string }>; borderClass: string; iconBgClass: string; iconColorClass: string }
> = {
  "job-offer": {
    Icon: Briefcase,
    borderClass: "border-l-4 border-l-blue-500",
    iconBgClass: "bg-blue-100",
    iconColorClass: "text-blue-600",
  },
  "freelance-business": {
    Icon: Rocket,
    borderClass: "border-l-4 border-l-emerald-500",
    iconBgClass: "bg-emerald-100",
    iconColorClass: "text-emerald-600",
  },
  "us-entrepreneur": {
    Icon: Flag,
    borderClass: "border-l-4 border-l-amber-500",
    iconBgClass: "bg-amber-100",
    iconColorClass: "text-amber-600",
  },
  study: {
    Icon: GraduationCap,
    borderClass: "border-l-4 border-l-violet-500",
    iconBgClass: "bg-violet-100",
    iconColorClass: "text-violet-600",
  },
  "join-partner": {
    Icon: Heart,
    borderClass: "border-l-4 border-l-rose-500",
    iconBgClass: "bg-rose-100",
    iconColorClass: "text-rose-600",
  },
  "not-sure": {
    Icon: HelpCircle,
    borderClass: "border-l-4 border-l-slate-400",
    iconBgClass: "bg-slate-100",
    iconColorClass: "text-slate-600",
  },
};

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/visa/compare-visas/";
const BASE = "/netherlands";

export const metadata: Metadata = {
  title: "Compare Netherlands Visas | Costs, Timelines, Requirements, Best Uses",
  description:
    "Compare the main visa and residence routes for moving to the Netherlands, including work, student, partner, entrepreneur, and family options, with practical guidance on costs, timing, and best fit.",
  alternates: { canonical },
  openGraph: {
    title: "Compare Netherlands Visas | Costs, Timelines, Requirements, Best Uses",
    description:
      "Compare the main visa and residence routes for moving to the Netherlands, including work, student, partner, entrepreneur, and family options, with practical guidance on costs, timing, and best fit.",
    url: canonical,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Netherlands Visas | Costs, Timelines, Requirements, Best Uses",
    description:
      "Compare the main visa and residence routes for moving to the Netherlands, including work, student, partner, entrepreneur, and family options, with practical guidance on costs, timing, and best fit.",
  },
};

const FAQ_ITEMS = [
  {
    id: "easiest-visa",
    question: "What is the easiest visa for moving to the Netherlands?",
    answer:
      "It depends on your situation. There is no single “easiest” route for everyone. EU/EEA/Swiss citizens generally do not need a visa. For non-EU citizens, the route that is often easiest is the one that fits your profile: if you have a job offer from a recognized sponsor, the Highly Skilled Migrant route is common; if you are a US citizen and self-employed, DAFT may be an option; if you are joining a partner, the partner visa applies. Use the visa checker to see which routes may fit you.",
  },
  {
    id: "best-with-job",
    question: "What is the best visa if I have a job offer?",
    answer:
      "If you have a job offer from a Dutch employer that is (or can become) a recognized IND sponsor, the Highly Skilled Migrant permit is one of the most common routes. The EU Blue Card is an alternative with different salary and framework rules. Compare both guides and use the visa checker to see which fits your offer and goals.",
  },
  {
    id: "hsm-vs-blue-card",
    question: "What is the difference between Highly Skilled Migrant and EU Blue Card?",
    answer:
      "Both are work-based residence permits for qualified non-EU employees. The Highly Skilled Migrant permit is a Dutch scheme with its own salary thresholds and sponsor rules. The EU Blue Card is an EU-wide framework with different salary and eligibility rules. Some employers and roles fit one better than the other; compare both guides and use the visa checker to see which may fit your situation.",
  },
  {
    id: "daft-vs-self-employed",
    question: "What is the difference between DAFT and the Self-Employed route?",
    answer:
      "DAFT (Dutch-American Friendship Treaty) is only for US citizens who want to live in the Netherlands as self-employed persons; it has a lower capital requirement (e.g. €4,500). The self-employed residence permit is for all nationalities and has viability and profit criteria set by the IND. If you are American, compare both; otherwise the self-employed route applies.",
  },
  {
    id: "move-without-job",
    question: "Can I move to the Netherlands without a job?",
    answer:
      "Yes, but you need another basis for residence. Options include the self-employed route (or DAFT for US citizens), the student visa if you are admitted to qualifying education, or the partner/family visa if you have a sponsor in the Netherlands. Work-based routes like Highly Skilled Migrant and EU Blue Card typically require a job offer.",
  },
  {
    id: "best-student",
    question: "Which visa is best for students?",
    answer:
      "Non-EU students admitted to qualifying Dutch education typically apply for a study residence permit; the institution usually submits the application. You will need to meet financial and document requirements. See the student visa guide for details.",
  },
  {
    id: "best-partner",
    question: "Which visa is best for joining a partner?",
    answer:
      "The partner or family residence permit allows you to join a spouse, registered partner, or family member who lives legally in the Netherlands. The sponsor must meet income and other requirements. See the partner & family visa guide for full details.",
  },
  {
    id: "permanent",
    question: "Are all visa routes permanent?",
    answer:
      "No. Most residence permits are issued for a limited period (e.g. one to five years) and can be extended. Permanent residence or naturalisation depends on your route, duration of stay, and meeting other conditions. Check the IND and the specific visa guide for your route.",
  },
  {
    id: "compare-first",
    question: "Which visa should I compare first if I am not sure?",
    answer:
      "Start with this comparison page to see the main routes side by side, then use the Visa Checker to answer a few questions and get a personalized recommendation. From there, read the full guide for each route that may fit.",
  },
  {
    id: "checker-vs-page",
    question: "Should I use the Visa Checker or this comparison page?",
    answer:
      "This page helps you compare route types, costs, timing, and “best for” at a glance. The Visa Checker asks about your situation and recommends specific routes. Use this page to understand the landscape; use the Visa Checker when you want a tailored recommendation and next steps.",
  },
];

const RELATED_GUIDES = [
  { href: `${BASE}/visa/highly-skilled-migrant/`, title: "Highly Skilled Migrant Visa", description: "Salary, sponsor, costs, and process." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card", description: "Salary thresholds, costs, and comparison with HSM." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "DAFT", description: "US entrepreneur route: investment, process, and tools." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa", description: "Fees, viability, and process for non-DAFT entrepreneurs." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa", description: "Costs, study amounts, and timeline for the study route." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa", description: "Requirements, income, and application steps." },
  { href: `${BASE}/moving-to-the-netherlands/`, title: "Moving to the Netherlands", description: "Full relocation guide and planning context." },
  { href: `${BASE}/move-to-netherlands-without-job/`, title: "Move without a job offer", description: "Routes when you don't have a job offer yet." },
  { href: `${BASE}/eu-vs-non-eu-moving-to-netherlands/`, title: "EU vs non-EU moving", description: "How citizenship affects your visa options." },
];

export default function CompareVisasPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: `${BASE}/` },
    { name: "Visa", url: `${BASE}/visa/` },
    { name: "Compare visas", url: canonical },
  ];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  const intro = (
    <div className="space-y-4">
      <p className="text-slate-600">
        The Netherlands does not have one single “move visa.” The right route depends on why you are moving: work, study, business, or partner/family. Some routes require employer sponsorship; others are tied to nationality or relationship status. Some are typically easier to apply for than others depending on your profile. This page helps you compare the main route types—including{" "}
        <Link href={`${BASE}/visa/highly-skilled-migrant/`} className="font-medium text-brand-600 hover:text-brand-700">Highly Skilled Migrant</Link>,{" "}
        <Link href={`${BASE}/visa/eu-blue-card/`} className="font-medium text-brand-600 hover:text-brand-700">EU Blue Card</Link>,{" "}
        <Link href={`${BASE}/visa/dutch-american-friendship-treaty/`} className="font-medium text-brand-600 hover:text-brand-700">DAFT</Link>,{" "}
        <Link href={`${BASE}/visa/self-employed-visa/`} className="font-medium text-brand-600 hover:text-brand-700">self-employed</Link>,{" "}
        <Link href={`${BASE}/visa/student-visa/`} className="font-medium text-brand-600 hover:text-brand-700">student</Link>, and{" "}
        <Link href={`${BASE}/visa/partner-family-visa/`} className="font-medium text-brand-600 hover:text-brand-700">partner/family</Link>—before diving into full visa pages or tools.
      </p>
    </div>
  );

  const explanatorySections = [
    { id: "what-this-page-does", title: "What this page does", body: ["Compares the main visa and residence routes for moving to the Netherlands."] },
    { id: "what-you-can-compare", title: "What you can compare", body: ["Best use case, sponsorship, complexity, timing, work rights, and planning costs."] },
    { id: "best-next-step", title: "Best next step", body: ["Use the Visa Checker if you want a personalized recommendation."] },
  ];

  const primarySectionContent = (
    <>
      <div className="mb-6">
        <CompareVisasFilterChips />
      </div>
      <div id="master-comparison-table" className="scroll-mt-24">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">Master comparison table</h3>

        {/* Mobile: card per route (stacked, touch-friendly) */}
        <div className="space-y-4 md:hidden">
          {ROUTE_COMPARISON_ENTRIES.map((route) => (
            <article
              key={route.routeId}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h4 className="font-semibold text-slate-900">{route.title}</h4>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Best for</dt>
                  <dd className="mt-0.5 text-slate-700">{route.bestFor}</dd>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Sponsor</dt>
                    <dd className="mt-0.5 text-slate-700">{route.sponsorNeededLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Complexity</dt>
                    <dd className="mt-0.5 text-slate-700">{route.typicalComplexity}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Timeline</dt>
                    <dd className="mt-0.5 text-slate-700">{route.timelineLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Fee</dt>
                    <dd className="mt-0.5 text-slate-700">{route.officialFeeLabel}</dd>
                  </div>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Work rights</dt>
                  <dd className="mt-0.5 text-slate-700">{route.workRightsLabel}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Best next step</dt>
                  <dd className="mt-0.5 text-slate-600">{route.bestNextStep}</dd>
                </div>
              </dl>
              <Link
                href={route.guideHref}
                className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
              >
                View full guide
              </Link>
            </article>
          ))}
        </div>

        {/* Desktop: full table */}
        <div className="hidden md:block overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <ContentTable
            headers={["Route", "Best for", "Sponsor needed?", "Typical complexity", "Typical timeline", "Typical official fee", "Work rights", "Best next step", "Full guide"]}
            minWidth="920px"
          >
            {ROUTE_COMPARISON_ENTRIES.map((route) => (
              <ContentTableRow key={route.routeId}>
                <ContentTableCell emphasis className="font-medium text-slate-800">
                  {route.title}
                </ContentTableCell>
                <ContentTableCell>{route.bestFor}</ContentTableCell>
                <ContentTableCell>{route.sponsorNeededLabel}</ContentTableCell>
                <ContentTableCell>{route.typicalComplexity}</ContentTableCell>
                <ContentTableCell>{route.timelineLabel}</ContentTableCell>
                <ContentTableCell>{route.officialFeeLabel}</ContentTableCell>
                <ContentTableCell>{route.workRightsLabel}</ContentTableCell>
                <ContentTableCell className="text-sm text-slate-600">{route.bestNextStep}</ContentTableCell>
                <ContentTableCell>
                  <Link href={route.guideHref} className="font-medium text-brand-600 hover:text-brand-700">
                    View guide
                  </Link>
                </ContentTableCell>
              </ContentTableRow>
            ))}
          </ContentTable>
        </div>
      </div>
    </>
  );

  const situationSection = (
    <div id="compare-by-situation" className="scroll-mt-24 space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Compare by your situation</h2>
        <p className="mt-1 text-sm text-slate-600">Pick the scenario closest to you and see which routes to compare.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {COMPARISON_SITUATION_CARDS.map((card: SituationCard) => {
          const style = SITUATION_CARD_STYLES[card.id] ?? SITUATION_CARD_STYLES["not-sure"];
          const IconComponent = style.Icon;
          return (
            <div
              key={card.id}
              className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md ${style.borderClass}`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.iconBgClass} ${style.iconColorClass}`} aria-hidden>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.reasoning}</p>
                  {card.routes.length > 0 ? (
                    <div className="mt-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Recommended routes</p>
                      <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                        {card.routes.map((r) => (
                          <li key={r.href}>
                            <Link href={r.href} className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-400">
                              {r.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <Link
                    href={card.visaCheckerHref}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3.5 py-2 text-sm font-medium text-slate-800 transition hover:bg-brand-100 hover:text-brand-700"
                  >
                    Use the Visa Checker
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const bestVisaItems: Array<{ id: string; title: string; body: ReactNode }> = [
    {
      id: "job-offer",
      title: "Best visa if you have a Dutch job offer",
      body: (
        <>
          The Highly Skilled Migrant permit is often the best fit when you have an offer from a recognized IND sponsor and the salary meets the threshold. The EU Blue Card is a common alternative with different salary and EU-wide mobility rules.{" "}
          <Link href={`${BASE}/visa-checker/`} className="font-medium text-brand-600 hover:text-brand-700">Use the Visa Checker</Link> and read the <Link href={`${BASE}/visa/highly-skilled-migrant/`} className="font-medium text-brand-600 hover:text-brand-700">HSM</Link> and <Link href={`${BASE}/visa/eu-blue-card/`} className="font-medium text-brand-600 hover:text-brand-700">EU Blue Card</Link> guides to compare.
        </>
      ),
    },
    {
      id: "freelance-business",
      title: "Best visa for entrepreneurs and freelancers",
      body: (
        <>
          US citizens can consider DAFT; others use the general self-employed residence permit. Both require a business plan and meeting IND criteria.{" "}
          <Link href={`${BASE}/visa-checker/`} className="font-medium text-brand-600 hover:text-brand-700">Visa Checker</Link>, <Link href={`${BASE}/visa/dutch-american-friendship-treaty/`} className="font-medium text-brand-600 hover:text-brand-700">DAFT guide</Link>, and <Link href={`${BASE}/visa/self-employed-visa/`} className="font-medium text-brand-600 hover:text-brand-700">self-employed guide</Link>.
        </>
      ),
    },
    {
      id: "us-entrepreneur",
      title: "Best visa for US citizens starting a business",
      body: (
        <>
          DAFT is typically suited to US citizens who want to run a business or work as self-employed in the Netherlands. Compare with the self-employed route for requirements and timeline.{" "}
          <Link href={`${BASE}/visa/dutch-american-friendship-treaty/`} className="font-medium text-brand-600 hover:text-brand-700">DAFT guide</Link> and <Link href={`${BASE}/visa/self-employed-visa/`} className="font-medium text-brand-600 hover:text-brand-700">self-employed guide</Link>.
        </>
      ),
    },
    {
      id: "study",
      title: "Best visa for students",
      body: (
        <>
          Non-EU students admitted to qualifying Dutch education apply for a study residence permit; the institution usually submits the application.{" "}
          <Link href={`${BASE}/visa/student-visa/`} className="font-medium text-brand-600 hover:text-brand-700">Student visa guide</Link> and <Link href={`${BASE}/visa-checker/`} className="font-medium text-brand-600 hover:text-brand-700">Visa Checker</Link>.
        </>
      ),
    },
    {
      id: "join-partner",
      title: "Best visa for joining a partner or family",
      body: (
        <>
          The partner or family residence permit allows you to join a spouse or partner who lives legally in the Netherlands. The sponsor must meet income and housing requirements.{" "}
          <Link href={`${BASE}/visa/partner-family-visa/`} className="font-medium text-brand-600 hover:text-brand-700">Partner & family visa guide</Link> and <Link href={`${BASE}/visa-checker/`} className="font-medium text-brand-600 hover:text-brand-700">Visa Checker</Link>.
        </>
      ),
    },
    {
      id: "not-sure",
      title: "Best visa if you are still exploring",
      body: (
        <>
          Use the <Link href={`${BASE}/visa-checker/`} className="font-medium text-brand-600 hover:text-brand-700">Visa Checker</Link> to answer a few questions and get a personalized recommendation, then compare the suggested routes on this page and read the full guides.
        </>
      ),
    },
  ];

  const bestVisaSections = (
    <div id="best-visa-for" className="mt-10 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Best visa for your situation</h2>
        <p className="mt-1 text-sm text-slate-600">Short guidance per scenario with links to the right guides and tools.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {bestVisaItems.map((item) => {
          const style = SITUATION_CARD_STYLES[item.id] ?? SITUATION_CARD_STYLES["not-sure"];
          const IconComponent = style.Icon;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md ${style.borderClass}`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.iconBgClass} ${style.iconColorClass}`} aria-hidden>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const examplesSection = (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Click below to open the Visa Checker with a scenario; you can then adjust answers to see how recommendations change.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {COMPARISON_EXAMPLE_SCENARIOS.map((scenario) => (
          <div
            key={scenario.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-200 hover:bg-brand-50/30"
          >
            <h4 className="font-medium text-slate-900">{scenario.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{scenario.explanation}</p>
            <p className="mt-2 text-xs font-medium text-slate-500">Recommended: {scenario.recommendedRoutes.join(", ")}</p>
            <Link href={scenario.ctaHref} className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700">
              {scenario.ctaLabel} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const relatedToolsSection = (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {COMPARISON_RELATED_TOOLS.map((tool) => (
        <CardLink
          key={tool.href}
          href={tool.href}
          title={tool.label}
          description={tool.description}
          className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-brand-300 hover:bg-sky-50/50"
        />
      ))}
    </div>
  );

  const recommendedServicesSection = (
    <section className="rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-5 md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Recommended services</h3>
      <p className="mt-1 text-sm text-slate-600">
        These services may help at different stages of your move depending on the visa route you choose.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPARISON_SERVICES.map((service) => {
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600" aria-hidden>
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

  const officialSourcesSection = (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
      <h3 className="text-lg font-semibold text-slate-900">Official sources and further reading</h3>
      <p className="mt-1 text-sm text-slate-600">For current rules, forms, and fees, refer to the IND and Dutch government.</p>
      <ul className="mt-4 space-y-2">
        {COMPARISON_OFFICIAL_SOURCES.map((source) => (
          <li key={source.href}>
            <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:text-brand-700">
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <p>
        Choosing the right visa for moving to the Netherlands depends on your purpose of move. Work routes are different from study and family routes; sponsorship matters for many work and family options; entrepreneur routes are different from employer-sponsored routes. Nationality can matter too—for example, the Dutch-American Friendship Treaty (DAFT) is only for US citizens. There is no universal “best” visa; the best route depends on your situation. Comparing costs, timing, and document requirements before deciding helps you plan realistically.
      </p>
      <p>
        If you have a job offer from a recognized sponsor and your salary meets the threshold, the Highly Skilled Migrant permit is one of the most common work routes. The EU Blue Card offers an alternative with different salary and EU-wide mobility rules. If you are self-employed, US citizens often consider DAFT; others use the general self-employed residence permit. Students need admission and proof of funds; partner and family applicants need a sponsor in the Netherlands who meets income and housing requirements.
      </p>
      <p>
        Sponsorship is a key differentiator: work routes like HSM and EU Blue Card typically require an employer to apply or be recognized; the partner visa requires a sponsor in the Netherlands. Self-employed and DAFT routes do not require an employer sponsor but have their own viability and investment criteria. Comparing these dimensions—sponsor needed, typical complexity, timeline, and official fees—helps you see which routes are often best for your profile.
      </p>
      <p>
        Use this comparison page to see the main Dutch visa and residence routes side by side. When you are unsure which route fits, the Visa Checker is the best next step: answer a few questions to get a personalized recommendation, then read the full visa guides and use the document readiness checker, cost calculator, and relocation cost estimator to build a practical move plan.
      </p>
    </div>
  );

  const sidebarOnThisPage = [
    { id: "tool-inputs", label: "Compare routes" },
    { id: "compare-by-situation", label: "Compare by situation" },
    { id: "best-visa-for", label: "Best visa for..." },
    { id: "example-scenarios", label: "Example scenarios" },
    { id: "recommended-immigration-lawyers", label: "Immigration lawyers" },
    { id: "recommended-services", label: "Services" },
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
            <Link href={`${BASE}/visa-checker/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Use the Visa Checker</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/document-readiness-checker/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Check my documents</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/visa-cost-calculator/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Estimate visa costs</span>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <ToolPageTemplate
        hero={
          <ToolHero
            eyebrow="VISA HUB"
            title="Compare Netherlands Visas: Which Route Fits Your Situation?"
            subtitle="Compare the main Dutch visa and residence routes side by side — including work, entrepreneur, student, and partner options — and find the best next step for your move."
            primaryCtaLabel="Use the Visa Checker"
            primaryCtaHref={`${BASE}/visa-checker/`}
            secondaryCtaLabel="Browse all visa guides"
            secondaryCtaHref={`${BASE}/visa/highly-skilled-migrant/`}
            image={{ src: "/images/heroes/netherlands-visa-comparison.png", alt: "Man comparing Netherlands visa options on a laptop at a desk with a passport, notebook, and relocation planning books, overlooking a Dutch canal." }}
          />
        }
        intro={intro}
        disclosure="Planning guidance only — confirm exact eligibility and requirements with official sources."
        explanatorySections={explanatorySections}
        primarySectionTitle="Compare routes"
        primarySectionContent={primarySectionContent}
        mainSectionTitle="Compare by situation and next steps"
        examplesSection={examplesSection}
        faqItems={FAQ_ITEMS}
        relatedGuides={RELATED_GUIDES}
        recommendedLawyersSection={<RecommendedImmigrationLawyersSection intro="For complex route comparison or tailored advice on work, DAFT, self-employed, or family routes, these immigration law firms specialise in Dutch residence permits and visa options." />}
        recommendedServices={recommendedServicesSection}
        seoContent={seoContent}
        seoContentSectionTitle="How to choose the right visa for moving to the Netherlands"
        sidebar={sidebar}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related">
            {RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            <Link href={`${BASE}/visa-checker/`} className="font-medium text-brand-600 hover:text-brand-700">
              Visa Checker
            </Link>
          </nav>
        }
        extraSection={
          <>
            <Section id="related-tools" title="Related tools" contained={true} className="pt-6">
              {relatedToolsSection}
            </Section>
            <Section id="official-sources" title="Official sources" contained={true} className="pt-6">
              {officialSourcesSection}
            </Section>
          </>
        }
      >
        {situationSection}
        {bestVisaSections}
      </ToolPageTemplate>
    </>
  );
}
