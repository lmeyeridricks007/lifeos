import type { ReactNode } from "react";
import { BoldInline } from "@/components/content/PillarContentBlocks";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import { EDITORIAL_HERO_PLACEHOLDER } from "@/src/lib/content/editorialTypes";
import { ContentHeroMedia } from "@/src/components/content/ContentHeroMedia";
import { ContentActionBar } from "@/src/components/content/ContentActionBar";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

export type EditorialContentHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** When true, `subtitle` may use `**bold**` segments (rendered as `<strong>`). */
  subtitleMarkdown?: boolean;
  /** Hero image; optional. Uses placeholder when omitted. */
  heroImage?: EditorialHeroImage | null;
  /** Canonical URL for share/copy (e.g. from meta or window.location.origin + path) */
  shareUrl: string;
  /** Stable id for bookmark (e.g. pathname or slug) */
  pageId: string;
  /** Extra content after subtitle, before action row (e.g. badges) */
  afterSubtitle?: ReactNode;
  /** Optional PDF download (e.g. checklist pages) – shown next to Share */
  pdfDownload?: { href: string; filename: string };
  className?: string;
  /**
   * `reference` (default) = pilot layout: title/subtitle rhythm, editorial hero media, share row below media.
   * `standard` = legacy order (share row above media); use only when you need the older stack.
   */
  heroLayout?: "standard" | "reference";
  /** Moving NL hub: stronger hierarchy, cinematic hero, grouped share chrome */
  movingPillarIdentity?: boolean;
  /**
   * Vertical rhythm under breadcrumbs (moving pillar vs city guides).
   * `tight` = city hubs: slightly denser than pillar but still breathable (not flush).
   * Only applies with `movingPillarIdentity` + reference layout.
   */
  heroTitleDensity?: "default" | "compact" | "tight";
  /**
   * Horizontal inset for title / CTAs / share row when hero media stays full-bleed in the frame
   * (e.g. city page breadcrumb sits in matching padded band above `PageHero`).
   */
  contentGutterClassName?: string;
  /**
   * With `movingPillarIdentity` + `eyebrow`, renders the label in this band below the frame accent
   * (same rhythm as city hub breadcrumb row). Use `sitePillarFramedHeroTopBandClass` from `@/lib/ui/site-shell-identity`.
   */
  eyebrowBandClassName?: string;
  /** Renders above the eyebrow inside the top band (e.g. breadcrumbs). */
  heroTopBandSlot?: ReactNode;
  /** Replaces default hero image / placeholder (e.g. custom illustration grid). */
  heroMediaSlot?: ReactNode;
};

const titleClass = "max-w-5xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl";
const subtitleClass = "mt-3 max-w-5xl text-base text-foreground-muted md:text-lg";

const referenceTitleClass =
  "max-w-[52rem] text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]";
const referenceSubtitleClass =
  "mt-4 max-w-[40rem] text-base leading-[1.65] text-foreground-muted sm:text-[1.0625rem] sm:leading-relaxed";

/**
 * Editorial header: eyebrow, title, subtitle, hero media, share row (reference layout by default).
 * Use at the top of guide, pillar, article, and placeholder tool pages for a consistent look.
 */
export function EditorialContentHeader({
  eyebrow,
  title,
  subtitle,
  subtitleMarkdown,
  heroImage,
  shareUrl,
  pageId,
  afterSubtitle,
  pdfDownload,
  className,
  heroLayout = "reference",
  movingPillarIdentity = false,
  heroTitleDensity = "default",
  contentGutterClassName,
  eyebrowBandClassName,
  heroTopBandSlot,
  heroMediaSlot,
}: EditorialContentHeaderProps) {
  const reference = heroLayout === "reference";
  const titleTight = heroTitleDensity === "tight" && movingPillarIdentity;
  const titleCompact =
    (heroTitleDensity === "compact" || heroTitleDensity === "tight") && movingPillarIdentity;
  const showHeroTopBand = Boolean(
    reference &&
      movingPillarIdentity &&
      eyebrowBandClassName &&
      (heroTopBandSlot != null || (eyebrow && eyebrow.trim() !== ""))
  );
  const chromeTight = titleTight || showHeroTopBand;
  const image = heroImage?.src ? heroImage : EDITORIAL_HERO_PLACEHOLDER;

  const media = (
    <div
      className={cn(
        "w-full",
        reference ? "mt-8 sm:mt-10" : "mt-6",
        /** Match title block: horizontal inset comes from parent `Container` only */
        movingPillarIdentity &&
          (chromeTight ? "mt-4 sm:mt-5 md:mt-6" : titleCompact ? "mt-3 sm:mt-4" : "mt-4 sm:mt-5")
      )}
    >
      {heroMediaSlot != null ? (
        heroMediaSlot
      ) : (
        <ContentHeroMedia
          image={image}
          presentation={reference ? "editorial" : "default"}
          cinematic={reference && !movingPillarIdentity}
          movingPillarFrame={false}
          squareCorners={movingPillarIdentity}
        />
      )}
    </div>
  );

  const actionBar =
    shareUrl != null && shareUrl !== "" ? (
      <ContentActionBar
        url={shareUrl}
        title={title}
        pageId={pageId}
        variant="top"
        pdfDownload={pdfDownload}
        referenceChrome={reference}
        inverseChrome={false}
        className={reference ? "" : "mt-4"}
      />
    ) : null;

  if (reference) {
    const titleClass = referenceTitleClass;
    const subClass = movingPillarIdentity
      ? cn(
          "w-full max-w-none text-base leading-relaxed text-copilot-text-secondary sm:text-lg sm:leading-[1.65]",
          chromeTight ? "mt-2 sm:mt-2.5" : titleCompact ? "mt-2 sm:mt-2.5" : "mt-3 sm:mt-4"
        )
      : referenceSubtitleClass;

    return (
      <header className={cn("relative z-10", className)}>
        {showHeroTopBand ? (
          <div className={eyebrowBandClassName}>
            {heroTopBandSlot}
            {eyebrow && eyebrow.trim() !== "" ? (
              <Eyebrow className={cn("text-copilot-primary", heroTopBandSlot ? "mt-3 sm:mt-3.5" : undefined)}>
                {eyebrow}
              </Eyebrow>
            ) : null}
          </div>
        ) : null}
        <div
          className={cn(
            movingPillarIdentity && contentGutterClassName,
            /** No extra horizontal padding — avoids stair-step vs hero media when parent is already `Container` */
            movingPillarIdentity &&
              (showHeroTopBand
                ? "pt-3 sm:pt-3.5 md:pt-4"
                : titleTight
                  ? "pt-3 sm:pt-3.5 md:pt-4"
                  : titleCompact
                    ? "pt-2 sm:pt-3 md:pt-4"
                    : "pt-4 sm:pt-5 md:pt-6")
          )}
        >
          {movingPillarIdentity ? (
            <>
              {!showHeroTopBand && eyebrow ? (
                <Eyebrow
                  className={cn(
                    "text-copilot-primary",
                    titleTight ? "mb-1.5 sm:mb-2" : titleCompact ? "mb-1 sm:mb-1.5" : "mb-2 sm:mb-3"
                  )}
                >
                  {eyebrow}
                </Eyebrow>
              ) : null}
              <h1 className="text-balance text-4xl font-bold tracking-tight text-copilot-text-primary sm:text-5xl md:text-[3.25rem] md:leading-[1.06] lg:text-[3.5rem]">
                {title}
              </h1>
              {subtitle ? (
                <p className={subClass}>
                  {subtitleMarkdown ? <BoldInline text={subtitle} /> : subtitle}
                </p>
              ) : null}
              {afterSubtitle ? (
                <div
                  className={
                    chromeTight ? "mt-3 sm:mt-4" : titleCompact ? "mt-2.5 sm:mt-3" : "mt-3 sm:mt-4"
                  }
                >
                  {afterSubtitle}
                </div>
              ) : null}
            </>
          ) : (
            <>
              {eyebrow ? <Eyebrow className="mb-3 sm:mb-4">{eyebrow}</Eyebrow> : null}
              <h1 className={titleClass}>{title}</h1>
              {subtitle ? (
                <p className={subClass}>
                  {subtitleMarkdown ? <BoldInline text={subtitle} /> : subtitle}
                </p>
              ) : null}
              {afterSubtitle ? <div className="mt-4">{afterSubtitle}</div> : null}
            </>
          )}
        </div>
        {media}
        {actionBar ? (
          <div
            className={cn(
              movingPillarIdentity
                ? cn(
                    "border-t border-slate-200/90 bg-white/70 backdrop-blur-sm",
                    contentGutterClassName ?? "px-0",
                    chromeTight ? "mt-4 py-3 sm:mt-5 sm:py-3.5" : titleCompact ? "mt-3 py-3 sm:mt-4 sm:py-3.5" : "mt-4 py-3 sm:mt-5 sm:py-3.5"
                  )
                : "mt-8 border-t border-border/60 pt-6 sm:mt-9 sm:pt-7"
            )}
          >
            {actionBar}
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header className={cn("space-y-6", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1 className={titleClass}>{title}</h1>
      {subtitle ? (
        <p className={subtitleClass}>
          {subtitleMarkdown ? <BoldInline text={subtitle} /> : subtitle}
        </p>
      ) : null}
      {afterSubtitle ? <div className="mt-2">{afterSubtitle}</div> : null}
      {actionBar}
      {media}
    </header>
  );
}
