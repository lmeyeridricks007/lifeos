import Link from "next/link";
import type { LegalMatterCard } from "@/src/lib/service-category/types";

export function LegalMattersGrid({ matters }: { matters: LegalMatterCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {matters.map((m) => (
        <div
          key={m.id}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">{m.title}</h3>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">{m.description}</p>
          {m.whenComplex ? (
            <p className="mt-2 text-xs text-slate-500">
              <span className="font-medium">When it becomes more complex:</span> {m.whenComplex}
            </p>
          ) : null}
          {m.link ? (
            <Link
              href={m.link.href}
              className="mt-3 inline-block text-sm font-medium text-brand-700 hover:text-brand-800 underline"
            >
              {m.link.label}
            </Link>
          ) : null}
        </div>
      ))}
    </div>
  );
}
