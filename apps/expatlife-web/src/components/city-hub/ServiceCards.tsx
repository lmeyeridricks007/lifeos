"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CityServiceCard } from "@/src/lib/city-hub/types";
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink";
import { CommercialCard } from "@/components/page/cards";
import { trackServiceClick } from "@/lib/analytics/track";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";

function ServiceLogo({ src, alt }: { src: string; alt: string }) {
  const resolved = normalizeExternalProviderLogoSrc(src);
  const isExternal = resolved.startsWith("http");
  const boxClass =
    "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border-0 bg-copilot-bg-soft/90 shadow-expatos-sm ring-1 ring-copilot-primary/10";
  return (
    <div className={boxClass} title={alt}>
      <Image
        src={resolved}
        alt={alt}
        width={48}
        height={48}
        className="h-10 w-10 object-contain"
        unoptimized={isExternal}
      />
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
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-copilot-text-muted">{category}</h3>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {items.map((s) => (
              <CommercialCard
                key={s.id}
                title={s.name}
                description={s.description}
                leading={s.logo?.src ? <ServiceLogo src={s.logo.src} alt={s.logo.alt} /> : undefined}
                badge={
                  s.isOfficial ? (
                    <span className="shrink-0 rounded-full bg-copilot-primary/10 px-2 py-0.5 text-xs font-semibold text-copilot-primary ring-1 ring-copilot-primary/15">
                      Official
                    </span>
                  ) : undefined
                }
                footer={
                  <>
                    {s.bestFor ? (
                      <p className="mb-3 text-xs text-copilot-text-secondary">
                        <span className="font-semibold text-copilot-text-primary">Best for:</span> {s.bestFor}
                      </p>
                    ) : null}
                    {s.costNote ? <p className="mb-3 text-xs text-copilot-text-muted">{s.costNote}</p> : null}
                    {s.url.startsWith("http") ? (
                      <TrackedExternalLink
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        linkType={s.isOfficial ? "official_source" : "provider"}
                        linkText={`Visit ${s.name}`}
                        className="inline-flex items-center rounded-xl bg-copilot-primary px-3 py-2 text-sm font-semibold text-white shadow-expatos-sm hover:bg-copilot-primary-strong"
                      >
                        {`Visit ${s.name}`}
                        <span className="ml-1" aria-hidden>
                          →
                        </span>
                      </TrackedExternalLink>
                    ) : (
                      <Link
                        href={s.url}
                        className="inline-flex items-center rounded-xl bg-copilot-primary px-3 py-2 text-sm font-semibold text-white shadow-expatos-sm hover:bg-copilot-primary-strong"
                        onClick={() => onInternalGuideClick(s)}
                      >
                        Read guide
                        <span className="ml-1" aria-hidden>
                          →
                        </span>
                      </Link>
                    )}
                  </>
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
