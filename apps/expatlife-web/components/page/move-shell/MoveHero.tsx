import type { ReactNode } from "react";
import type { EditorialContentHeaderProps } from "@/src/components/content/EditorialContentHeader";
import { ContentActionBar } from "@/src/components/content/ContentActionBar";
import { ContentHeroMedia } from "@/src/components/content/ContentHeroMedia";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHero, PillarGuideHeroRegion } from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import {
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { MoveHeroToolCtas } from "./MoveHeroToolCtas";

export type MoveHeroDefaultProps = {
  variant: "default";
} & Omit<EditorialContentHeaderProps, "heroLayout">;

export type MoveHeroToolProps = {
  variant: "tool";
  title: string;
  subtitle: string;
  eyebrow?: string;
  introBullets?: string[];
  primaryCtaLabel: string;
  primaryCtaHref?: string;
  primaryCtaScrollToId?: string;
  primaryCtaOnClick?: () => void;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image?: { src: string; alt: string };
  imageFallback?: { src: string; alt: string };
  shareUrl?: string;
  pageId?: string;
  className?: string;
};

export type MoveHeroMinimalProps = {
  variant: "minimal";
  title: string;
  subtitle?: string;
  eyebrow?: string;
  shareUrl?: string;
  pageId?: string;
  afterSubtitle?: ReactNode;
  className?: string;
};

export type MoveHeroCityProps = {
  variant: "city";
  /** Renders above the framed title block (e.g. breadcrumb row). */
  breadcrumb?: ReactNode;
} & Omit<EditorialContentHeaderProps, "heroLayout">;

export type MoveHeroProps = MoveHeroDefaultProps | MoveHeroToolProps | MoveHeroMinimalProps | MoveHeroCityProps;

function toEditorialImage(image?: { src: string; alt: string }): EditorialHeroImage | null {
  if (!image?.src) return null;
  return {
    src: image.src,
    alt: image.alt,
    priority: true,
    width: 1200,
    height: 630,
  };
}

/**
 * Single ExpatCopilot hero system for Move cluster: framed shell + pillar typography.
 * Tool variant stacks copy and CTAs above the hero image (city-style), not side-by-side.
 */
export function MoveHero(props: MoveHeroProps) {
  if (props.variant === "default") {
    const { variant: _v, className, ...rest } = props;
    return (
      <PillarGuideHeroRegion className={className}>
        <PageHero heroLayout="reference" movingPillarIdentity {...rest} />
      </PillarGuideHeroRegion>
    );
  }

  if (props.variant === "city") {
    const { variant: _v, breadcrumb, className, ...rest } = props;
    return (
      <PillarGuideHeroRegion className={className}>
        {breadcrumb ? (
          <div className="w-full min-w-0">
            <div className={sitePillarFramedHeroTopBandClass}>{breadcrumb}</div>
          </div>
        ) : null}
        <PageHero heroLayout="reference" movingPillarIdentity {...rest} />
      </PillarGuideHeroRegion>
    );
  }

  if (props.variant === "minimal") {
    const { variant: _v, title, subtitle, eyebrow, shareUrl, pageId, afterSubtitle, className } = props;
    const showBar = Boolean(shareUrl && pageId);
    return (
      <PillarGuideHeroRegion className={className}>
        <div className={cn(sitePillarFramedHeroGutterXClass, "pb-5 pt-4 sm:pb-6 sm:pt-5 md:pt-6")}>
          {eyebrow ? (
            <Eyebrow className="mb-2 text-copilot-primary sm:mb-2.5">{eyebrow}</Eyebrow>
          ) : null}
          <h1 className="text-balance text-3xl font-bold tracking-tight text-copilot-text-primary sm:text-4xl md:text-[2.5rem] md:leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-copilot-text-secondary sm:mt-3 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {afterSubtitle ? <div className="mt-3 sm:mt-4">{afterSubtitle}</div> : null}
        </div>
        {showBar ? (
          <div
            className={cn(
              "border-t border-slate-200/90 bg-white/70 backdrop-blur-sm",
              sitePillarFramedHeroGutterXClass,
              "mt-3 py-3 sm:mt-4 sm:py-3.5"
            )}
          >
            <ContentActionBar
              url={shareUrl!}
              title={title}
              pageId={pageId!}
              variant="top"
              referenceChrome
              inverseChrome={false}
            />
          </div>
        ) : null}
      </PillarGuideHeroRegion>
    );
  }

  const {
    title,
    subtitle,
    eyebrow = "TOOL",
    introBullets,
    primaryCtaLabel,
    primaryCtaHref,
    primaryCtaScrollToId,
    primaryCtaOnClick,
    secondaryCtaLabel,
    secondaryCtaHref,
    image,
    imageFallback,
    shareUrl,
    pageId,
    className,
  } = props;

  const editorial = toEditorialImage(image) ?? toEditorialImage(imageFallback);
  const showBar = Boolean(shareUrl && pageId && shareUrl !== "");

  // Mirrors `EditorialContentHeader` reference + `movingPillarIdentity` + `heroTitleDensity="tight"`
  // (same stack as `CityHubTemplate` → `PageHero`): top band, padded title/CTA block, full-bleed media, share row.
  const toolSubtitleClass = cn(
    "w-full max-w-none text-base leading-relaxed text-copilot-text-secondary sm:text-lg sm:leading-[1.65]",
    "mt-2 sm:mt-2.5"
  );
  const toolMediaMarginClass = "mt-6 w-full min-w-0 sm:mt-7 md:mt-8";

  return (
    <PillarGuideHeroRegion className={className}>
      <div className="w-full min-w-0">
        <header className={cn("relative z-10 w-full", !showBar && "pb-5 sm:pb-6 md:pb-7")}>
          <div className={sitePillarFramedHeroTopBandClass}>
            <Eyebrow className="text-copilot-primary">{eyebrow}</Eyebrow>
          </div>
          <div className={cn(sitePillarFramedHeroGutterXClass, "pt-3 sm:pt-3.5 md:pt-4")}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-copilot-text-primary sm:text-5xl md:text-[3.25rem] md:leading-[1.06] lg:text-[3.5rem]">
              {title}
            </h1>
            <p className={toolSubtitleClass}>{subtitle}</p>
            {introBullets && introBullets.length > 0 ? (
              <ul className="mt-3 space-y-2.5 sm:mt-4">
                {introBullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-copilot-text-secondary md:text-[0.9375rem]">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-3 sm:mt-4">
              <MoveHeroToolCtas
                className="mt-0 sm:mt-0"
                primaryLabel={primaryCtaLabel}
                primaryHref={primaryCtaHref}
                primaryScrollToId={primaryCtaScrollToId}
                primaryOnClick={primaryCtaOnClick}
                secondaryLabel={secondaryCtaLabel}
                secondaryHref={secondaryCtaHref}
              />
            </div>
          </div>
          {editorial ? (
            <div className={toolMediaMarginClass}>
              <ContentHeroMedia
                image={editorial}
                presentation="editorial"
                squareCorners
                cinematic={false}
              />
            </div>
          ) : null}
          {showBar ? (
            <div
              className={cn(
                "border-t border-slate-200/90 bg-white/70 backdrop-blur-sm",
                sitePillarFramedHeroGutterXClass,
                "mt-4 py-3 sm:mt-5 sm:py-3.5"
              )}
            >
              <ContentActionBar
                url={shareUrl!}
                title={title}
                pageId={pageId!}
                variant="top"
                referenceChrome
                inverseChrome={false}
              />
            </div>
          ) : null}
        </header>
      </div>
    </PillarGuideHeroRegion>
  );
}
