"use client";

import { useCallback, useState } from "react";
import { Instagram, Check } from "lucide-react";
import { FacebookIcon, LinkedinIcon, WhatsappIcon, XIcon } from "react-share";
import { openShare, shareToInstagram, type ShareTarget } from "@/src/lib/share";
import { cn } from "@/lib/cn";
import { transitionInteractive } from "@/lib/ui/interaction";

export type ShareButtonsProps = {
  url: string;
  title: string;
  targets?: ShareTarget[];
  /** Compact icon-only buttons */
  variant?: "default" | "compact";
  /** `surface` = semantic tokens (guide reference hero); `inverse` = dark hero glass; `legacy` = slate/chrome */
  tone?: "legacy" | "surface" | "inverse";
  className?: string;
};

const SHARE_LABELS: Record<ShareTarget, string> = {
  x: "Share on X (Twitter)",
  facebook: "Share on Facebook",
  linkedin: "Share on LinkedIn",
  whatsapp: "Share on WhatsApp",
  instagram: "Copy link for Instagram",
};

const ICON_SIZE = 18;

/**
 * Social targets use explicit share URLs (e.g. Facebook `sharer.php?u=…`) via `openShare`, which
 * opens a **new tab** — not `react-share`’s sized popup, which often redirects to Facebook’s empty
 * `share_channel` composer. URLs go through `resolveShareUrlForSocial` so localhost matches the
 * current tab port (e.g. :3001 vs default :3000 from `getSiteOrigin`).
 */
export function ShareButtons({
  url,
  title,
  targets = ["x", "facebook", "linkedin", "instagram"],
  variant = "default",
  tone = "legacy",
  className,
}: ShareButtonsProps) {
  const [instagramFeedback, setInstagramFeedback] = useState(false);

  const handleInstagram = useCallback(async () => {
    const ok = await shareToInstagram(url);
    if (ok) {
      setInstagramFeedback(true);
      setTimeout(() => setInstagramFeedback(false), 2000);
    }
  }, [url]);

  const btnClass = cn(
    transitionInteractive,
    "inline-flex items-center justify-center rounded-lg ease-out active:brightness-[0.96] motion-reduce:active:brightness-100",
    tone === "surface"
      ? "border border-border/80 bg-surface-raised text-foreground-muted hover:border-border hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      : tone === "inverse"
        ? "border border-white/25 bg-white/10 text-slate-100 hover:border-white/40 hover:bg-white/18 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1",
    variant === "compact" ? "h-9 w-9" : "h-9 w-9 px-0"
  );

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)} role="group" aria-label="Share">
      {targets.map((target) => {
        if (target === "instagram") {
          const showFeedback = instagramFeedback;
          return (
            <button
              key={target}
              type="button"
              onClick={handleInstagram}
              className={btnClass}
              aria-label={showFeedback ? "Link copied—paste in Instagram" : SHARE_LABELS.instagram}
            >
              {showFeedback ? (
                <Check
                  className={cn(
                    "h-4 w-4",
                    tone === "surface" || tone === "inverse" ? "text-emerald-400" : "text-emerald-600"
                  )}
                  aria-hidden
                />
              ) : (
                <Instagram className="h-4 w-4" aria-hidden />
              )}
            </button>
          );
        }

        const icon =
          target === "facebook" ? (
            <FacebookIcon size={ICON_SIZE} round />
          ) : target === "linkedin" ? (
            <LinkedinIcon size={ICON_SIZE} round />
          ) : target === "whatsapp" ? (
            <WhatsappIcon size={ICON_SIZE} round />
          ) : target === "x" ? (
            <XIcon size={ICON_SIZE} round />
          ) : null;

        return (
          <button
            key={target}
            type="button"
            className={btnClass}
            aria-label={SHARE_LABELS[target]}
            onClick={() => openShare(target, url, title)}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
}
