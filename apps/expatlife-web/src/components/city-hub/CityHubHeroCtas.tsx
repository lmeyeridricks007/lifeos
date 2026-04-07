import Link from "next/link";
import type { CityHubHero } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";
import { movingNlPathPrimaryCtaClass, movingNlSidebarSecondaryRowClass } from "@/lib/ui/moving-nl-pillar-identity";

/**
 * Primary + secondary CTAs for `PageHero` `afterSubtitle` on city guide pages.
 * Two-column grid from `sm` up so both buttons stay the same width regardless of label length.
 */
export function CityHubHeroCtas({ hero }: { hero: CityHubHero }) {
  const primaryCtas = hero.ctas.filter((c) => c.primary);
  const secondaryCtas = hero.ctas.filter((c) => !c.primary);
  const total = primaryCtas.length + secondaryCtas.length;
  const equalPairLayout = total === 2 && primaryCtas.length >= 1 && secondaryCtas.length >= 1;

  return (
    <div
      className={cn(
        "grid w-full min-w-0 grid-cols-1 gap-3",
        equalPairLayout ? "sm:grid-cols-2 sm:gap-3" : "sm:max-w-xl"
      )}
    >
      {primaryCtas.map((cta) => (
        <Link
          key={cta.href}
          href={cta.href}
          className={cn(
            movingNlPathPrimaryCtaClass,
            "!flex min-h-[48px] w-full flex-col items-center justify-center gap-0.5 text-balance px-2 py-3 text-center text-[13px] leading-snug sm:min-h-[52px] sm:px-3 sm:text-sm"
          )}
        >
          <span>
            {cta.label}
            <span className="ml-0.5 shrink-0 whitespace-nowrap" aria-hidden>
              →
            </span>
          </span>
        </Link>
      ))}
      {secondaryCtas.map((cta) => (
        <Link
          key={cta.href}
          href={cta.href}
          className={cn(
            movingNlSidebarSecondaryRowClass,
            "!flex min-h-[48px] w-full flex-col items-center justify-center text-balance px-2 py-3 text-center text-[13px] leading-snug sm:min-h-[52px] sm:px-3 sm:text-sm"
          )}
        >
          {cta.label}
        </Link>
      ))}
    </div>
  );
}
