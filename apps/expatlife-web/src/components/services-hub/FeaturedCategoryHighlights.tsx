"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FeaturedCategoryHighlight } from "@/src/lib/services-hub/types";
import { filterLiveInternalLinks, isRouteLive } from "@/src/lib/routes/routeStatus";
import { trackCtaClick, trackServiceClick } from "@/lib/analytics/track";

export function FeaturedCategoryHighlights({
  highlights,
}: {
  highlights: FeaturedCategoryHighlight[];
}) {
  const pathname = usePathname();
  const rows = highlights.filter((h) => isRouteLive(h.href));
  return (
    <div className="space-y-6">
      {rows.map((h) => (
        <div
          key={h.slug}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900">{h.title}</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{h.intro}</p>
          <p className="mt-2 text-xs text-slate-500">
            Popular providers in this category may include: {h.providerExamples.join(", ")}.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Link
              href={h.href}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
              onClick={() =>
                trackServiceClick({
                  service_name: h.title,
                  service_slug: h.slug,
                  source_page: pathname ?? "",
                  section_name: "featured_category_highlights",
                  card_type: "featured_category",
                })
              }
            >
              Compare options →
            </Link>
            {filterLiveInternalLinks(h.guideLinks ?? []).map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                onClick={() =>
                  trackCtaClick({
                    cta_name: g.label,
                    page_context: pathname ?? "",
                    destination_href: g.href,
                  })
                }
              >
                {g.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
