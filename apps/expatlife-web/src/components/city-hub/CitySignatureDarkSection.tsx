import Link from "next/link";
import type { CityHubPageData } from "@/src/lib/city-hub/types";
import { StructuredCard } from "@/components/page/cards";
import { cn } from "@/lib/cn";
import {
  movingNlDarkStagesAtmosphereClass,
  movingNlDarkStagesBandClass,
  movingNlDarkStagesVignetteClass,
  movingNlSectionH2OnDarkClass,
  movingNlSectionSubtitleOnDarkClass,
} from "@/lib/ui/moving-nl-pillar-identity";

const linkOnDarkClass =
  "text-sm font-semibold text-cyan-200 underline-offset-2 transition hover:text-white hover:underline";

export type CitySignatureDarkSectionProps = {
  cityName: string;
  first30Days: CityHubPageData["first30Days"];
};

/**
 * Single signature dark band per city hub — “first 30 days” roadmap with premium contrast.
 * Wired from shared city data (`first30Days`); no per-city JSX duplication.
 */
export function CitySignatureDarkSection({ cityName, first30Days }: CitySignatureDarkSectionProps) {
  const { heading, weeks, internalLinks } = first30Days;
  const subtitle = `A practical week-by-week lens for ${cityName}: documents, registration, and daily life.`;

  return (
    <section
      id="first-30-days"
      aria-labelledby="first-30-days-heading"
      className="scroll-mt-24 pt-2 sm:pt-3"
    >
      <div className={cn(movingNlDarkStagesBandClass, "relative isolate")}>
        <div className={movingNlDarkStagesAtmosphereClass} aria-hidden />
        <div className={movingNlDarkStagesVignetteClass} aria-hidden />
        <div className="relative z-[1]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-accent">Setup path</p>
          <h2 id="first-30-days-heading" className={`${movingNlSectionH2OnDarkClass} mt-2`}>
            {heading}
          </h2>
          <p className={`${movingNlSectionSubtitleOnDarkClass} mt-2 max-w-3xl`}>{subtitle}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5 md:mt-8">
            {weeks.map((w, i) => (
              <StructuredCard key={i} label={w.week} tone="onDark">
                <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
                  {w.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </StructuredCard>
            ))}
          </div>

          {internalLinks.length ? (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6 md:mt-7">
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkOnDarkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
