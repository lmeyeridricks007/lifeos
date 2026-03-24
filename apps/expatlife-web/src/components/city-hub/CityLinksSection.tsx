import Link from "next/link";
import { MapPin } from "lucide-react";
import type { CityHubPageData } from "@/src/lib/city-hub/types";
import { isRouteLive } from "@/src/lib/routes/routeStatus";
import { cn } from "@/lib/cn";

function isAbsoluteExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href.trim());
}

export function CityLinksSection({ data }: { data: CityHubPageData }) {
  const links = (data.cityLinks || []).map((link) =>
    isAbsoluteExternalHref(link.href)
      ? link
      : {
          ...link,
          comingSoon: Boolean(link.comingSoon) || !isRouteLive(link.href),
        }
  );
  if (!links.length) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-sky-200/80 bg-gradient-to-br from-sky-50/70 to-white shadow-sm ring-1 ring-sky-100/50">
      <div className="border-l-4 border-sky-500 bg-sky-50/40 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-700">
            <MapPin className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-slate-600">
              Explore more expat city hubs across the Netherlands.
            </p>
          </div>
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              {link.comingSoon ? (
                <span
                  className={cn(
                    "flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/80 px-4 py-3",
                    "text-slate-500"
                  )}
                >
                  <MapPin className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                  <span className="font-medium">{link.label}</span>
                  <span className="ml-auto rounded bg-slate-200/80 px-2 py-0.5 text-xs font-medium text-slate-600">
                    Soon
                  </span>
                </span>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border border-sky-200/80 bg-white px-4 py-3",
                    "font-medium text-slate-800 shadow-sm transition",
                    "hover:border-sky-300 hover:bg-sky-50/50 hover:shadow"
                  )}
                >
                  <MapPin className="h-4 w-4 shrink-0 text-sky-600" aria-hidden />
                  <span>{link.label}</span>
                  <span className="ml-auto text-sky-500" aria-hidden>→</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
