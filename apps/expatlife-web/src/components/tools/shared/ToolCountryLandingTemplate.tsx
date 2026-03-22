import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ToolCountryContextBlock } from "./ToolCountryContextBlock";
import type { CountryLandingContext } from "@/src/lib/tools/shared/toolCountryContext";
import type { ToolRelatedGuide } from "@/src/lib/tools/shared/toolPageContent";
import { CardLink } from "@/components/ui/card-link";

export type ToolCountryLandingTemplateProps = {
  toolName: string;
  toolPath: string;
  toolDescription: string;
  countrySlug: string;
  countryLabel: string;
  /** Intro, whatOftenMatters, documentConsiderations, etc. from country landing content */
  context: CountryLandingContext;
  relatedGuides: ToolRelatedGuide[];
  /** e.g. "Build my checklist" */
  ctaLabel: string;
  /** Optional FAQ for this landing page */
  faq?: Array<{ id: string; question: string; answer: string }>;
};

/**
 * Shared template for origin-country tool landing pages (e.g. Moving Checklist from South Africa).
 */
export function ToolCountryLandingTemplate({
  toolName,
  toolPath,
  toolDescription,
  countryLabel,
  context,
  relatedGuides,
  ctaLabel,
  faq,
}: ToolCountryLandingTemplateProps) {
  const toolUrlWithFrom = `${toolPath}?from=${context.countrySlug}`;

  return (
    <main>
      <section className="border-b border-slate-200/60 bg-gradient-to-br from-brand-50/70 via-sky-50/50 to-white py-8 sm:py-10 md:py-14">
        <Container className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-4 border-brand-600/80 pl-4 md:pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Tool</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {toolName} for the Netherlands — from {countryLabel}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">{toolDescription}</p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
              <Link
                href={toolUrlWithFrom}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:from-brand-700 hover:to-cyan-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-50"
              >
                {ctaLabel}
              </Link>
              <Link href={toolPath}>
                <span className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Use tool without prefill
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section className="pb-4 md:pb-6">
        <ToolCountryContextBlock context={context} />
      </Section>

      <Section title="Use the tool" className="pt-4 md:pt-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
          <p className="text-slate-600">
            The tool will prefill your origin as <strong>{countryLabel}</strong> so you get tailored tasks and tips. You can change this and other options inside the tool.
          </p>
          <Link
            href={toolUrlWithFrom}
            className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow transition hover:from-brand-700 hover:to-cyan-700"
          >
            {ctaLabel}
          </Link>
        </div>
      </Section>

      {faq?.length ? (
        <Section title="Frequently asked questions" contained={true}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
            <ul className="space-y-4">
              {faq.map((item) => (
                <li key={item.id}>
                  <h3 className="font-semibold text-slate-900">{item.question}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      {relatedGuides.length > 0 ? (
        <Section title="Related guides" contained={true}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.slice(0, 6).map((guide) => (
              <CardLink
                key={guide.href}
                href={guide.href}
                title={guide.title}
                description={guide.description}
                className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-l-brand-600"
              />
            ))}
          </div>
        </Section>
      ) : null}
    </main>
  );
}
