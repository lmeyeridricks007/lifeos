"use client";

import Link from "next/link";
import type { InternalLink } from "@/src/lib/routes/routeStatus";

type Props = {
  query: string;
  recoveryLinks: InternalLink[];
};

export function SearchEmptyState({ query, recoveryLinks }: Props) {
  return (
    <div
      className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-8 text-center sm:px-8"
      role="status"
      aria-live="polite"
    >
      <h2 className="text-lg font-semibold text-slate-900">No results found</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
        We couldn&apos;t find anything matching{" "}
        <span className="font-medium text-slate-800">&ldquo;{query}&rdquo;</span>. Try a shorter word
        (e.g. &ldquo;bank&rdquo;, &ldquo;visa&rdquo;, &ldquo;Amsterdam&rdquo;) or browse the hubs below.
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:mx-auto sm:max-w-md">
        {recoveryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-800"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
