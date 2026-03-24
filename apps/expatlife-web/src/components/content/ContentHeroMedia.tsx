import Image from "next/image";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import { cn } from "@/lib/cn";

export type ContentHeroMediaProps = {
  image: EditorialHeroImage;
  className?: string;
  /** Aspect ratio container: default 16/9 on desktop, taller on mobile */
  aspectClass?: string;
  /** Applied to the image layer (e.g. `object-[50%_40%]` to nudge focal point when using cover) */
  imageClassName?: string;
};

const DEFAULT_ASPECT = "aspect-video md:aspect-[21/9]";

export function ContentHeroMedia({
  image,
  className,
  aspectClass = DEFAULT_ASPECT,
  imageClassName,
}: ContentHeroMediaProps) {
  const { src, alt, caption, priority = false, width = 1200, height = 630 } = image;
  const isLocal = src.startsWith("/");

  return (
    <figure className={cn("w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100", className)}>
      {/* fill + aspect box reserves space before decode → less CLS than intrinsic width/height in a ratio wrapper */}
      <div className={cn("relative w-full", aspectClass)}>
        {isLocal ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={cn("object-cover", imageClassName)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, min(1200px, 85vw)"
            priority={priority}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn("absolute inset-0 h-full w-full object-cover", imageClassName)}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-2 px-1 text-sm text-slate-500 md:mt-3 md:text-center">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
