import Image from "next/image";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { publicImageExists } from "@/src/data/site/publicImageManifest";

export type GuidePremiumVisual = {
  src: string;
  alt: string;
  caption: string;
};

type GuidePremiumVisualFigureProps = {
  visual: GuidePremiumVisual;
  className?: string;
  tone?: "default" | "onDark";
};

/**
 * Full-width premium infographic for pillar guides — single column, below intro copy.
 * Prefer {@link guidePremiumVisualAfterIntroClass} for spacing after the first text block.
 *
 * E4: keep `unoptimized` (avoids large `srcset` strings in HTML). Prefer omitting figures on
 * closing FAQ/sources/related sections in heavy pillar views instead of mounting every PNG twice.
 *
 * Ahrefs: skip rendering when the asset is not in `public/` (middleware still rewrites direct
 * URL hits for missing paths to a fallback PNG).
 */
export function GuidePremiumVisualFigure({
  visual,
  className,
  tone = "default",
}: GuidePremiumVisualFigureProps) {
  if (!publicImageExists(visual.src)) return null;

  const onDark = tone === "onDark";

  return (
    <figure
      className={cn(
        "relative isolate w-full overflow-hidden rounded-[2rem] border shadow-expatos-xl ring-1",
        onDark
          ? "border-white/10 bg-white/5 ring-white/10"
          : "border-slate-200/90 bg-white/95 ring-slate-900/[0.05]",
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      {!onDark ? (
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-200/25 blur-3xl" aria-hidden />
      ) : null}
      <div
        className={cn(
          "relative aspect-[16/10] w-full bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft",
          "min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]",
          onDark && "from-slate-900 via-slate-900 to-slate-950"
        )}
      >
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          unoptimized
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-contain p-2 drop-shadow-sm sm:p-3 lg:p-4"
        />
      </div>
      <figcaption
        className={cn(
          "border-t px-4 py-3 text-sm leading-relaxed sm:px-5",
          onDark
            ? "border-white/10 bg-white/5 text-slate-300"
            : "border-slate-200/80 bg-slate-50/90 text-foreground-muted"
        )}
      >
        {visual.caption}
      </figcaption>
    </figure>
  );
}
