import Link from "next/link";
import type { CityHubPageData } from "@/src/lib/city-hub/types";

export function OverviewIntro({ data }: { data: CityHubPageData }) {
  const { overview } = data;
  if (!overview.paragraphs?.length) return null;

  return (
    <div className="space-y-4">
      {overview.paragraphs.map((p, i) => (
        <p key={i} className="text-copilot-text-secondary leading-relaxed">
          {p}
        </p>
      ))}
      {overview.links?.length ? (
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-copilot-text-muted">
          {overview.links.map((link, i) => (
            <span key={link.href} className="flex items-center gap-x-3">
              {i > 0 ? <span className="text-copilot-primary/25" aria-hidden>·</span> : null}
              <Link
                href={link.href}
                className="font-semibold text-copilot-primary hover:text-copilot-primary-strong hover:underline"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}
