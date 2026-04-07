"use client";

import { useCallback, useState, useEffect } from "react";
import { Bookmark, BookmarkCheck, FileDown, Link2 } from "lucide-react";
import { copyLinkToClipboard, resolveShareUrlForSocial, type ShareTarget } from "@/src/lib/share";
import { isPageSaved, toggleSavedPage } from "@/src/lib/bookmark";
import { ShareButtons } from "@/src/components/content/ShareButtons";
import { cn } from "@/lib/cn";
import { toolbarControlClass, toolbarControlInverseClass, toolbarControlQuietClass } from "@/lib/ui/chrome";

export type ContentActionBarProps = {
  /** Page canonical URL for share/copy */
  url: string;
  /** Page title for share text */
  title: string;
  /** Stable id for bookmark (e.g. path or slug) */
  pageId: string;
  showBookmark?: boolean;
  showCopyLink?: boolean;
  /** X (Twitter), Facebook, LinkedIn, Instagram. WhatsApp optional. */
  shareTargets?: ShareTarget[];
  /** "top" = compact under title; "bottom" = optional CTA line */
  variant?: "top" | "bottom";
  /** Optional PDF download link (e.g. checklist pages) */
  pdfDownload?: { href: string; filename: string };
  className?: string;
  /** Quieter controls + share chrome for guide reference hero */
  referenceChrome?: boolean;
  /** Dark hero (moving pillar): light controls on glass */
  inverseChrome?: boolean;
};

/**
 * Reusable action bar: Save, Copy link, Share buttons.
 * Composes ShareButtons for social sharing (Facebook, LinkedIn, X, Instagram).
 */
export function ContentActionBar({
  url,
  title,
  pageId,
  showBookmark = true,
  showCopyLink = true,
  shareTargets = ["x", "facebook", "linkedin", "instagram"],
  variant = "top",
  pdfDownload,
  className,
  referenceChrome = false,
  inverseChrome = false,
}: ContentActionBarProps) {
  const [saved, setSaved] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  useEffect(() => {
    setSaved(isPageSaved(pageId));
  }, [pageId]);

  const handleBookmark = useCallback(() => {
    const next = toggleSavedPage(pageId);
    setSaved(next);
  }, [pageId]);

  const handleCopyLink = useCallback(async () => {
    const ok = await copyLinkToClipboard(resolveShareUrlForSocial(url));
    if (ok) {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  }, [url]);

  const isBottom = variant === "bottom";
  const ctrl = inverseChrome
    ? toolbarControlInverseClass
    : referenceChrome
      ? toolbarControlQuietClass
      : toolbarControlClass;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2",
        referenceChrome && !inverseChrome && !isBottom && "text-foreground-muted",
        inverseChrome && !isBottom && "text-slate-200",
        isBottom && "rounded-card border border-border bg-surface-muted/90 px-4 py-3 shadow-none",
        className
      )}
      role="group"
      aria-label={isBottom ? "Share or save this guide" : "Share and save"}
    >
      {showBookmark && (
        <button
          type="button"
          onClick={handleBookmark}
          className={ctrl}
          aria-pressed={saved}
          aria-label={saved ? "Saved for later" : "Save for later"}
        >
          {saved ? (
            <BookmarkCheck
              className={cn("h-4 w-4", inverseChrome ? "text-copilot-accent" : "text-brand")}
              aria-hidden
            />
          ) : (
            <Bookmark className="h-4 w-4" aria-hidden />
          )}
          <span>{saved ? "Saved" : "Save"}</span>
        </button>
      )}
      {showCopyLink && (
        <button
          type="button"
          onClick={handleCopyLink}
          className={ctrl}
          aria-label="Copy link"
        >
          <Link2 className="h-4 w-4" aria-hidden />
          <span>{copyFeedback ? "Copied!" : "Copy link"}</span>
        </button>
      )}
      {pdfDownload && (
        <a
          href={pdfDownload.href}
          download={pdfDownload.filename}
          className={ctrl}
          aria-label="Download checklist as PDF"
        >
          <FileDown className="h-4 w-4" aria-hidden />
          <span>Download PDF</span>
        </a>
      )}
      <span
        className={cn(
          "hidden h-4 w-px shrink-0 bg-border sm:block",
          inverseChrome && "bg-white/25",
          referenceChrome && !inverseChrome && "bg-border/70"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground-muted",
          inverseChrome && "text-slate-300",
          referenceChrome && !inverseChrome && "text-foreground-faint"
        )}
      >
        Share
      </span>
      <ShareButtons
        url={url}
        title={title}
        targets={shareTargets}
        variant="default"
        tone={inverseChrome ? "inverse" : referenceChrome ? "surface" : "legacy"}
      />
    </div>
  );
}
