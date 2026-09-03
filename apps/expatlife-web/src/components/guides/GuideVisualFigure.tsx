/**
 * Shared helper for local `VisualFigure` blocks on cornerstone guides.
 * Returns null when the PNG is not in `public/` so HTML does not emit broken `<img>` tags.
 * Direct URL requests for missing paths are still rewritten in middleware to a fallback PNG.
 */
import Image from "next/image";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { publicImageExists } from "@/src/data/site/publicImageManifest";
import type { GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";

export function GuideVisualFigure({
  visual,
  className,
}: {
  visual: GuidePremiumVisual;
  className?: string;
}) {
  if (!publicImageExists(visual.src)) return null;

  return (
    <figure
      className={cn(
        "relative isolate w-full overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 shadow-expatos-xl ring-1 ring-slate-900/[0.05]",
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[4/3] w-full min-h-[240px] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft sm:min-h-[320px]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-contain p-2 drop-shadow-sm sm:p-3"
        />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
    </figure>
  );
}
