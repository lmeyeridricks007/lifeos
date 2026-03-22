import Link from "next/link";
import { Scale } from "lucide-react";

type Props = {
  heading: string;
  paragraphs: string[];
  points: string[];
  links?: Array<{ label: string; href: string }>;
};

export function TenantRightsBlock({ heading, paragraphs, points, links }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-slate-50/80 p-6 shadow-sm ring-1 ring-emerald-100/50 sm:p-7">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-400" aria-hidden />
      <h3 className="flex items-center gap-3 text-lg font-semibold text-slate-900">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
          <Scale className="h-5 w-5" aria-hidden />
        </span>
        {heading}
      </h3>
      {paragraphs.map((p, i) => (
        <p key={i} className={`text-sm text-slate-700 leading-relaxed ${i > 0 ? "mt-3" : "mt-2"}`}>
          {p}
        </p>
      ))}
      <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-slate-700">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      {links && links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-3 rounded-lg border border-emerald-200/60 bg-white/60 p-3">
          {links.map((link) => {
            const isInternal = link.href.startsWith("/");
            return isInternal ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
