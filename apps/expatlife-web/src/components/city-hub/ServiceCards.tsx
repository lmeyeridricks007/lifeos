"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CityServiceCard } from "@/src/lib/city-hub/types";
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink";
import { trackServiceClick } from "@/lib/analytics/track";

function ServiceLogo({ src, alt }: { src: string; alt: string }) {
  const isExternal = src.startsWith("http");
  const boxClass = "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm";
  return (
    <div className={boxClass} title={alt}>
      {isExternal ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} width={48} height={48} className="h-10 w-10 object-contain" />
      ) : (
        <Image src={src} alt={alt} width={48} height={48} className="h-10 w-10 object-contain" />
      )}
    </div>
  );
}

export function ServiceCards({
  services,
  byCategory = true,
}: {
  services: CityServiceCard[];
  byCategory?: boolean;
}) {
  const pathname = usePathname();
  if (!services?.length) return null;

  const onInternalGuideClick = (s: CityServiceCard) => {
    trackServiceClick({
      service_name: s.name,
      service_slug: s.id,
      source_page: pathname ?? "",
      section_name: "city_hub_services",
      card_type: "city_service_guide",
    });
  };

  const groups = byCategory
    ? services.reduce<Record<string, CityServiceCard[]>>((acc, s) => {
        (acc[s.category] = acc[s.category] || []).push(s);
        return acc;
      }, {})
    : { "": services };

  return (
    <div className="space-y-8">
      {Object.entries(groups).map(([category, items]) => (
        <div key={category || "all"}>
          {category ? (
            <h3 className="mb-4 text-base font-semibold text-slate-900">{category}</h3>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <article
                key={s.id}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    {s.logo?.src ? <ServiceLogo src={s.logo.src} alt={s.logo.alt} /> : null}
                    <h4 className="text-base font-semibold text-slate-900">{s.name}</h4>
                  </div>
                  {s.isOfficial ? (
                    <span className="shrink-0 rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                      Official
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.description}</p>
                {s.bestFor ? (
                  <p className="mt-2 text-xs text-slate-600">
                    <span className="font-medium">Best for:</span> {s.bestFor}
                  </p>
                ) : null}
                {s.costNote ? (
                  <p className="mt-1 text-xs text-slate-500">{s.costNote}</p>
                ) : null}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  {s.url.startsWith("http") ? (
                    <TrackedExternalLink
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      linkType={s.isOfficial ? "official_source" : "provider"}
                      linkText={`Visit ${s.name}`}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                    >
                      {`Visit ${s.name}`}
                      <span className="ml-1" aria-hidden>→</span>
                    </TrackedExternalLink>
                  ) : (
                    <Link
                      href={s.url}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                      onClick={() => onInternalGuideClick(s)}
                    >
                      Read guide
                      <span className="ml-1" aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
