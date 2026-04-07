import Image from "next/image";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import { isCloudinaryDeliverUrl, optimizeRemoteImageSrc } from "@/src/lib/images/cloudinary";
import { cn } from "@/lib/cn";

export type ContentHeroMediaProps = {
  image: EditorialHeroImage;
  className?: string;
  /** Aspect ratio container: default 16/9 on desktop, taller on mobile */
  aspectClass?: string;
  /** Applied to the image layer (e.g. `object-[50%_40%]` to nudge focal point when using cover) */
  imageClassName?: string;
  /** `editorial` = premium frame + cinematic ratio for guide reference pages */
  presentation?: "default" | "editorial";
  /** Subtle vignette + depth on the image (Moving NL pillar hero, etc.) */
  cinematic?: boolean;
  /** Full-width band inside dark hero: no top radius, stronger depth */
  movingPillarFrame?: boolean;
  /** No border-radius on the frame (e.g. moving pillar light hero) */
  squareCorners?: boolean;
};

const DEFAULT_ASPECT = "aspect-video md:aspect-[21/9]";
const EDITORIAL_ASPECT = "aspect-[4/3] sm:aspect-[16/10] md:aspect-[2.4/1]";
/** Slightly taller / wider for moving pillar — more immersive */
const EDITORIAL_ASPECT_CINEMATIC = "aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.55/1]";

export function ContentHeroMedia({
  image,
  className,
  aspectClass,
  imageClassName,
  presentation = "default",
  cinematic = false,
  movingPillarFrame = false,
  squareCorners = false,
}: ContentHeroMediaProps) {
  const { src: rawSrc, alt, caption, priority = false, width = 1200, height = 630 } = image;
  const isLocal = rawSrc.startsWith("/");
  const src = isLocal ? rawSrc : optimizeRemoteImageSrc(rawSrc, { maxWidth: 1920 });
  /** Allow Next.js optimizer for Cloudinary; keep other remotes unoptimized unless allowlisted in next.config. */
  const unoptimized = !isLocal && !isCloudinaryDeliverUrl(src);
  const sizes = priority
    ? "100vw"
    : "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, min(1200px, 85vw)";
  const resolvedAspect =
    aspectClass ??
    (presentation === "editorial"
      ? cinematic
        ? EDITORIAL_ASPECT_CINEMATIC
        : EDITORIAL_ASPECT
      : DEFAULT_ASPECT);
  const frameClass =
    presentation === "editorial"
      ? cn(
          squareCorners
            ? "rounded-none border-0 bg-transparent shadow-none ring-0"
            : movingPillarFrame
              ? "bg-slate-950/40"
              : "bg-slate-900/5",
          !squareCorners &&
            (cinematic && movingPillarFrame
              ? "rounded-none border-0 shadow-expatos-xl ring-0"
              : cinematic
                ? "rounded-lg border-0 shadow-md ring-0"
                : "rounded-card border border-border/50 ring-1 ring-border/20 shadow-card")
        )
      : "rounded-2xl border border-border bg-surface-muted ring-1 ring-border/15";

  return (
    <figure className={cn("w-full min-w-0 overflow-hidden", frameClass, className)}>
      {/* fill + aspect box reserves space before decode → less CLS than intrinsic width/height in a ratio wrapper */}
      <div className={cn("relative w-full", resolvedAspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", imageClassName)}
          sizes={sizes}
          priority={priority}
          unoptimized={unoptimized}
        />
        {cinematic ? (
          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              movingPillarFrame
                ? "bg-gradient-to-b from-copilot-bg-dark/50 via-[rgb(15_23_42/0.55)] to-copilot-bg-dark/90"
                : "bg-gradient-to-b from-[rgb(15_23_42/0.3)] to-[rgb(15_23_42/0.7)]"
            )}
            aria-hidden
          />
        ) : null}
        {cinematic && movingPillarFrame ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-copilot-primary/25 via-copilot-accent/10 to-transparent"
            aria-hidden
          />
        ) : null}
      </div>
      {caption ? (
        <figcaption className="mt-2 px-1 text-sm text-foreground-muted md:mt-3 md:text-center">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
