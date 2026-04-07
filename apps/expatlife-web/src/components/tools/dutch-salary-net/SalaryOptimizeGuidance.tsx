"use client";

import Image from "next/image";
import Link from "next/link";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";

export type SalaryOptimizeGuidanceProps = {
  taxAdvisors: PageRecommendedProviderCard[];
  payrollServices: PageRecommendedProviderCard[];
  relocationSpecialists: PageRecommendedProviderCard[];
  banks: PageRecommendedProviderCard[];
  bankComparisonHref: string;
  servicesDirectoryHref: string;
};

function initials(name: string): string {
  return (
    name
      .split(/[\s-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0])
      .join("")
      .toUpperCase() || name.slice(0, 2).toUpperCase()
  );
}

function CompactProviderRows({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: PageRecommendedProviderCard[];
}) {
  if (!items.length) return null;
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
      <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>
      <ul className="mt-3 space-y-1">
        {items.map((p) => (
          <li key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg border border-transparent px-2 py-2 transition hover:border-slate-200/90 hover:bg-white"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                {p.logo ? (
                  <Image src={p.logo.src} alt={p.logo.alt} width={36} height={36} className="h-7 w-7 object-contain" />
                ) : (
                  <span className="text-[10px] font-bold text-slate-500" aria-hidden>
                    {initials(p.name)}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-sm font-medium text-slate-900 group-hover:text-brand-700">{p.name}</span>
                <span className="mt-0.5 block text-xs leading-snug text-slate-600 line-clamp-2">{p.useFor}</span>
              </div>
              <span className="shrink-0 text-slate-300 group-hover:text-brand-500" aria-hidden>
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BestPickList({
  label,
  items,
}: {
  label: string;
  items: PageRecommendedProviderCard[];
}) {
  if (!items.length) return null;
  return (
    <div className="rounded-xl bg-white/60 p-4 ring-1 ring-slate-200/60">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <ol className="mt-3 space-y-2.5">
        {items.map((p, i) => (
          <li key={p.name} className="flex gap-2 text-sm">
            <span className="w-5 shrink-0 font-medium text-slate-400">{i + 1}.</span>
            <div className="min-w-0">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-900 underline decoration-slate-200 underline-offset-2 hover:text-brand-700 hover:decoration-brand-300"
              >
                {p.name}
              </a>
              {p.priceRange ? <p className="mt-0.5 text-xs text-slate-500">{p.priceRange}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Value-first monetization: appears after results only; guidance tone, no banner ads.
 */
export function SalaryOptimizeGuidance({
  taxAdvisors,
  payrollServices,
  relocationSpecialists,
  banks,
  bankComparisonHref,
  servicesDirectoryHref,
}: SalaryOptimizeGuidanceProps) {
  const taxTop = taxAdvisors.slice(0, 3);
  const payrollTop = payrollServices.slice(0, 3);
  const relocTop = relocationSpecialists.slice(0, 3);
  const banksTop = banks.slice(0, 3);

  return (
    <aside
      id="optimize-salary-setup"
      className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-sm ring-1 ring-slate-200/40 md:scroll-mt-32 md:p-6"
      aria-labelledby="optimize-salary-setup-heading"
    >
      <h3 id="optimize-salary-setup-heading" className="text-base font-semibold text-slate-900">
        Optimize your salary setup
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
        Once you have an indicative net figure, the next step is often payroll setup, banking, and a quick professional sanity check — especially
        with ruling or cross-border pay.
      </p>

      <p className="mt-4 text-sm text-slate-700">
        Not sure if your offer is optimized?{" "}
        <Link href={servicesDirectoryHref} className="font-medium text-brand-700 underline-offset-2 hover:underline">
          Get a second opinion
        </Link>{" "}
        from a tax advisor or relocation specialist — we list editorial and registry-backed options below.
      </p>

      <div className="mt-6 grid gap-8 border-t border-slate-200/80 pt-6 md:grid-cols-3">
        <CompactProviderRows
          title="Tax advisors"
          subtitle="Filing, ruling context, and salary structure questions."
          items={taxTop}
        />
        <CompactProviderRows
          title="Payroll services"
          subtitle="Employer-side setup and international payroll support."
          items={payrollTop}
        />
        <CompactProviderRows
          title="Relocation specialists"
          subtitle="Timing, housing, and family logistics around a new role."
          items={relocTop}
        />
      </div>

      <div className="mt-6 border-t border-slate-200/80 pt-5">
        <p className="text-sm text-slate-700">
          <Link
            href={bankComparisonHref}
            className="font-semibold text-brand-700 underline-offset-2 hover:underline"
          >
            Compare banks for salary deposits
          </Link>
          <span className="text-slate-600"> — fees, English apps, and everyday banking for incoming net pay.</span>
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-800">Editorial shortlists</h4>
        <p className="mt-1 text-xs text-slate-500">Registry-backed order — not pay-to-rank; confirm fit and pricing yourself.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <BestPickList label="Tax advisors (shortlist)" items={taxTop} />
          <BestPickList label="Banks (shortlist)" items={banksTop} />
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-slate-500">
        ExpatCopilot may earn a commission from some partners on other pages. Links here are for planning convenience — always verify services
        directly before you engage.
      </p>
    </aside>
  );
}
