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
    <div className="overflow-hidden rounded-xl border border-brand/25 bg-gradient-to-br from-brand-muted/70 to-surface-raised shadow-sm ring-1 ring-brand/15">
      <div className="border-l-4 border-brand bg-brand-muted/40 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand-strong">
            <MapPin className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-foreground-muted">
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
                    "flex items-center gap-2 rounded-lg border border-border/80 bg-surface-raised/80 px-4 py-3",
                    "text-foreground-muted"
                  )}
                >
                  <MapPin className="h-4 w-4 shrink-0 text-foreground-faint" aria-hidden />
                  <span className="font-medium">{link.label}</span>
                  <span className="ml-auto rounded bg-surface-muted/80 px-2 py-0.5 text-xs font-medium text-foreground-muted">
                    Soon
                  </span>
                </span>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border border-brand/25 bg-surface-raised px-4 py-3",
                    "font-medium text-foreground shadow-sm transition",
                    "hover:border-brand/35 hover:bg-brand-muted/45 hover:shadow"
                  )}
                >
                  <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span>{link.label}</span>
                  <span className="ml-auto text-brand" aria-hidden>→</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
