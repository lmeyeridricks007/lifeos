import Link from "next/link";
import type { CityHubPageData } from "@/src/lib/city-hub/types";

export function OverviewIntro({ data }: { data: CityHubPageData }) {
  const { overview } = data;
  if (!overview.paragraphs?.length) return null;

  return (
    <div className="space-y-4">
      {overview.paragraphs.map((p, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {p}
        </p>
      ))}
      {overview.links?.length ? (
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
          {overview.links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-x-3">
              {i > 0 ? <span className="text-slate-300" aria-hidden>·</span> : null}
              <Link href={link.href} className="font-medium text-brand-700 hover:text-brand-800 underline">
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}
