"use client";

import { useCallback, useState, useEffect } from "react";
import { Bookmark, BookmarkCheck, FileDown, Link2 } from "lucide-react";
import { copyLinkToClipboard, resolveShareUrlForSocial, type ShareTarget } from "@/src/lib/share";
import { isPageSaved, toggleSavedPage } from "@/src/lib/bookmark";
import { ShareButtons } from "@/src/components/content/ShareButtons";
import { cn } from "@/lib/cn";

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

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3",
        isBottom && "rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3",
        className
      )}
      role="group"
      aria-label={isBottom ? "Share or save this guide" : "Share and save"}
    >
      {showBookmark && (
        <button
          type="button"
          onClick={handleBookmark}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1"
          aria-pressed={saved}
          aria-label={saved ? "Saved for later" : "Save for later"}
        >
          {saved ? (
            <BookmarkCheck className="h-4 w-4 text-brand-600" aria-hidden />
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
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1"
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
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1"
          aria-label="Download checklist as PDF"
        >
          <FileDown className="h-4 w-4" aria-hidden />
          <span>Download PDF</span>
        </a>
      )}
      <span className="text-slate-400" aria-hidden>
        |
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
        Share
      </span>
      <ShareButtons url={url} title={title} targets={shareTargets} variant="default" />
    </div>
  );
}
