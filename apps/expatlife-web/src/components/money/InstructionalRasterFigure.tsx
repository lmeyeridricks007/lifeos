import Image from "next/image";
import { cn } from "@/lib/cn";

export type InstructionalRaster = { src: string; alt: string };

/**
 * Shared instructional WebP/PNG figure (tax, banking, etc.) — high-contrast frame on copilot panels.
 */
export function InstructionalRasterFigure({
  raster,
  caption,
  className,
  label = "Diagram",
}: {
  raster: InstructionalRaster;
  caption: string;
  className?: string;
  /** Small uppercase badge above the image (default: Diagram). */
  label?: string;
}) {
  return (
    <figure className={cn("mt-4 overflow-hidden rounded-xl border-2 border-slate-200 bg-slate-50 p-2 shadow-inner sm:p-3", className)}>
      <div className="mb-1.5 px-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</span>
      </div>
      <div className="relative mx-auto mt-1 aspect-[16/9] w-full max-h-[min(440px,58vh)] sm:max-h-[min(600px,72vh)] overflow-hidden rounded-lg border border-slate-200/90 bg-white">
        <Image
          src={raster.src}
          alt={raster.alt}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, min(1200px, 92vw)"
        />
      </div>
      <figcaption className="mt-2 px-1 text-center text-xs leading-snug text-slate-600 sm:text-sm">{caption}</figcaption>
    </figure>
  );
}
