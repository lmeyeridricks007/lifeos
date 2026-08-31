import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import {
  OFFICIAL_FIGURES_AS_OF_LABEL,
  OFFICIAL_FIGURES_LAST_REVIEWED,
  OFFICIAL_FIGURES_TAX_YEAR,
  officialFiguresChangelog,
  officialFiguresDisclaimer,
  officialFiguresIntro,
  officialFiguresRelatedGuides,
  officialFiguresRows,
  officialFiguresSources,
} from "./officialFigures2026";
import { GuideHeroTrustMeta } from "@/src/components/guides/GuideHeroTrustMeta";

const HERO_OFFICIAL_SOURCES = officialFiguresSources.slice(0, 4).map((s) => ({
  label: s.label,
  href: s.href,
}));

function SectionCard({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-28 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function OfficialFiguresView() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Official figures 2026"
      eyebrow="Netherlands · citation asset"
      title={`Netherlands official figures ${OFFICIAL_FIGURES_TAX_YEAR}`}
      subtitle="Dated HSM floors, IND fees, 30% norms and cap, adult minimum wage, eigen risico and typical basic-premium band — with official source URLs. Not a calculator."
      extraHeroContent={
        <div className="mt-1 space-y-2">
          <p className="text-sm text-foreground-muted">{OFFICIAL_FIGURES_AS_OF_LABEL}</p>
          <GuideHeroTrustMeta lastReviewed={OFFICIAL_FIGURES_LAST_REVIEWED} sources={HERO_OFFICIAL_SOURCES} />
        </div>
      }
    >
      <SectionCard id="about" heading="What this page is">
        {officialFiguresIntro.map((p) => (
          <p key={p} className="mt-3 text-slate-700 leading-relaxed first:mt-0">
            {p}
          </p>
        ))}
        <p className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm leading-relaxed text-slate-800">
          <strong className="font-semibold text-slate-900">Disclaimer.</strong> {officialFiguresDisclaimer}
        </p>
      </SectionCard>

      <SectionCard id="figures-table" heading={`${OFFICIAL_FIGURES_TAX_YEAR} figures (dated table)`}>
        <p className="text-sm leading-relaxed text-slate-600">
          Amounts are pulled from ExpatCopilot domain modules that already power HSM, 30%, minimum-wage and visa-fee surfaces. Re-check the linked authority when amounts index mid-year.
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[880px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/90">
                <th scope="col" className="px-4 py-3 font-bold text-slate-900">
                  Topic
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-brand-strong">
                  Figure
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-slate-900">
                  Effective
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-slate-900">
                  Notes / provenance
                </th>
                <th scope="col" className="px-4 py-3 font-bold text-slate-900">
                  Official source
                </th>
              </tr>
            </thead>
            <tbody>
              {officialFiguresRows.map((row, index) => (
                <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                  <th scope="row" className="px-4 py-3.5 align-top font-semibold text-slate-900">
                    {row.topic}
                    {row.relatedGuideHref ? (
                      <div className="mt-1.5 font-normal">
                        <Link
                          href={row.relatedGuideHref}
                          className="text-xs font-medium text-brand-600 hover:underline"
                        >
                          {row.relatedGuideLabel ?? "Related guide"}
                        </Link>
                      </div>
                    ) : null}
                  </th>
                  <td className="px-4 py-3.5 align-top font-semibold tabular-nums text-brand-strong">{row.figure}</td>
                  <td className="px-4 py-3.5 align-top text-slate-700">{row.effective}</td>
                  <td className="px-4 py-3.5 align-top leading-relaxed text-slate-600">{row.notes}</td>
                  <td className="px-4 py-3.5 align-top">
                    <a
                      href={row.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1 font-medium text-brand-600 hover:underline"
                    >
                      <span>{row.sourceLabel}</span>
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard id="official-sources" heading="Official source URLs">
        <p className="text-sm leading-relaxed text-slate-600">
          Prefer these authority pages over secondary media when citing 2026 thresholds. Secondary articles sometimes retain prior-year 30% amounts (€46,660 / €35,468 / €246,000 cap).
        </p>
        <ul className="mt-4 space-y-3">
          {officialFiguresSources.map((s) => (
            <li key={s.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:underline"
              >
                {s.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
              <p className="mt-1 text-sm text-slate-600">{s.covers}</p>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard id="changelog" heading="Changelog">
        <ol className="space-y-4">
          {officialFiguresChangelog.map((entry) => (
            <li key={entry.date} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{entry.date}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{entry.summary}</p>
            </li>
          ))}
        </ol>
      </SectionCard>

      <RelatedTrustLinks links={[...officialFiguresRelatedGuides]} heading="Related guides and tools" />
    </TrustPageLayout>
  );
}
