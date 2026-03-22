import Link from "next/link";
import type { ServicesHubPageData } from "@/src/lib/services-hub/types";
import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";

export function ServicesIntro({ intro }: { intro: ServicesHubPageData["intro"] }) {
  const introLinks = filterLiveInternalLinks(intro.links);
  return (
    <section id="intro" className="scroll-mt-24 space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {intro.heading}
      </h2>
      {intro.paragraphs.map((p, i) => (
        <p key={i} className="text-slate-700 leading-relaxed">
          {p}
        </p>
      ))}
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
        {introLinks.map((link, i) => (
          <span key={link.href} className="flex items-center gap-x-3">
            {i > 0 ? <span className="text-slate-300" aria-hidden>·</span> : null}
            <Link
              href={link.href}
              className="font-medium text-brand-700 hover:text-brand-800 underline"
            >
              {link.label}
            </Link>
          </span>
        ))}
      </p>
      {intro.disclaimer ? (
        <p className="text-sm text-slate-500 italic">{intro.disclaimer}</p>
      ) : null}
    </section>
  );
}
