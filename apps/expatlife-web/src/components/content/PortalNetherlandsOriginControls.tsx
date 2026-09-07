"use client";

import Link from "next/link";
import type { NlPortalContent } from "@expatlife/content";
import { useOriginCountry } from "@/hooks/use-origin-country";
import { originToChecklistRoute, originToCountryRoute } from "@/lib/origin";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/input";

type Props = {
  content: NlPortalContent["personalizedEntry"];
};

/**
 * Origin select + CTAs — the only interactive island required on the Netherlands hub.
 * Keeps the rest of PortalNetherlandsTemplate as a Server Component.
 */
export function PortalNetherlandsOriginControls({ content }: Props) {
  const { origin, origins, setOrigin } = useOriginCountry();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 md:grid-cols-[minmax(260px,420px)_minmax(170px,auto)_minmax(170px,auto)] md:items-end">
        <div className="max-w-[420px]">
          <p className="mb-2 text-sm font-medium text-slate-700">{content.originLabel}</p>
          <Select value={origin.slug} onChange={(e) => setOrigin(e.target.value)} className="w-full">
            {origins.map((o) => (
              <option key={o.code} value={o.slug}>
                {o.label}
              </option>
            ))}
          </Select>
        </div>
        <Link href={originToCountryRoute(origin.slug)}>
          <Button variant="secondary" className="w-full min-w-[170px] justify-center">
            {content.seeCountryRouteLabel}
          </Button>
        </Link>
        <Link href={originToChecklistRoute(origin.slug)}>
          <Button className="w-full min-w-[170px] justify-center">{content.getChecklistLabel}</Button>
        </Link>
      </div>
    </div>
  );
}
