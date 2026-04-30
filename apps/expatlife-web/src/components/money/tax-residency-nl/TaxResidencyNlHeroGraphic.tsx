import Image from "next/image";
import { cn } from "@/lib/cn";

const TAX_RESIDENCY_NL_HERO_SRC = "/images/heroes/netherlands-tax-residency-nl-hero.webp";

const DEFAULT_ALT =
  "Bright Netherlands home office: laptop, documents, and coffee on a wooden desk by a window — editorial hero for tax residency orientation on ExpatCopilot.";

/**
 * Money-pillar hero: unique photorealistic editorial image (also used for OG metadata).
 */
export function TaxResidencyNlHeroGraphic({ className, alt = DEFAULT_ALT }: { className?: string; alt?: string }) {
  return (
    <figure
      className={cn(
        "relative isolate m-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-card ring-1 ring-slate-900/[0.04]",
        "aspect-[1200/630] max-h-[min(340px,50vh)] w-full sm:max-h-none sm:min-h-[220px] sm:max-h-[min(100%,320px)] md:aspect-[16/10] md:max-h-none",
        className
      )}
    >
      <Image
        src={TAX_RESIDENCY_NL_HERO_SRC}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        className="object-cover object-center"
        priority
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-slate-900/10"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap gap-1 p-2.5 sm:p-3">
        {["NL base", "Filing scope", "Cross-border"].map((k) => (
          <span
            key={k}
            className="rounded-full border border-white/40 bg-white/85 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]"
          >
            {k}
          </span>
        ))}
      </div>
    </figure>
  );
}
