import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { CitiesGuidePhotoTile } from "./citiesGuideVisuals.types";

type CitiesGuideCityPhotoStripProps = {
  /** Omit or pass empty string to hide (section heading may sit below the strip). */
  eyebrow?: string;
  title?: string;
  items: readonly CitiesGuidePhotoTile[];
  className?: string;
};

export function CitiesGuideCityPhotoStrip({ eyebrow, title, items, className }: CitiesGuideCityPhotoStripProps) {
  const cols = items.length <= 5 ? "sm:grid-cols-3 md:grid-cols-5" : "sm:grid-cols-3 lg:grid-cols-6";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-copilot-primary/[0.1] bg-copilot-surface p-4 shadow-sm ring-1 ring-copilot-primary/[0.08] sm:p-5",
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      {eyebrow ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">{eyebrow}</p>
      ) : null}
      {title ? (
        <h3 className={cn("text-base font-bold tracking-tight text-copilot-text-primary sm:text-lg", eyebrow ? "mt-1" : "")}>
          {title}
        </h3>
      ) : null}
      <div className={cn("grid grid-cols-2 gap-2 sm:gap-3", eyebrow || title ? "mt-3" : "", cols)}>
        {items.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group relative isolate aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate-900/[0.08] transition-shadow hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2"
          >
            <Image
              src={c.src}
              alt={c.alt}
              fill
              className="object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 14vw"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-2 pb-2 pt-6 text-center text-[11px] font-bold text-white sm:text-xs">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
