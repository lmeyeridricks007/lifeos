import type { ReactNode } from "react";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import { EDITORIAL_HERO_PLACEHOLDER } from "@/src/lib/content/editorialTypes";
import { ContentHeroMedia } from "@/src/components/content/ContentHeroMedia";
import { ContentActionBar } from "@/src/components/content/ContentActionBar";
import { cn } from "@/lib/cn";

export type EditorialContentHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
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
};

const titleClass = "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl max-w-5xl";
const subtitleClass = "mt-3 max-w-5xl text-base text-slate-600 md:text-lg";

/**
 * Standard editorial header: eyebrow, title, subtitle, action row, hero image.
 * Use at the top of guide, pillar, and article pages for a consistent look.
 */
export function EditorialContentHeader({
  eyebrow,
  title,
  subtitle,
  heroImage,
  shareUrl,
  pageId,
  afterSubtitle,
  pdfDownload,
  className,
}: EditorialContentHeaderProps) {
  return (
    <header className={cn("space-y-6", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className={titleClass}>{title}</h1>
      {subtitle ? <p className={subtitleClass}>{subtitle}</p> : null}
      {afterSubtitle ? <div className="mt-2">{afterSubtitle}</div> : null}

      {shareUrl ? (
        <ContentActionBar
          url={shareUrl}
          title={title}
          pageId={pageId}
          variant="top"
          pdfDownload={pdfDownload}
          className="mt-4"
        />
      ) : null}

      <div className="mt-6 w-full">
        <ContentHeroMedia image={heroImage?.src ? heroImage : EDITORIAL_HERO_PLACEHOLDER} />
      </div>
    </header>
  );
}
