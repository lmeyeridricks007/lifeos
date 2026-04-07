"use client";

import Image from "next/image";
import { useState } from "react";
import { isCloudinaryDeliverUrl, optimizeRemoteImageSrc } from "@/src/lib/images/cloudinary";

export type ToolHeroImageProps = {
  src: string;
  alt: string;
  /** If main src fails to load, try this (e.g. PNG fallback when WebP missing). */
  fallbackSrc?: string;
  fallbackAlt?: string;
  className?: string;
  /** When true, skip the image optimizer (local or remote). */
  unoptimized?: boolean;
  /** LCP: eager fetch + high priority (tool page heroes). */
  priority?: boolean;
};

/**
 * Hero image for tool pages: stable aspect box (reduces CLS), next/image, optional Cloudinary transforms.
 */
export function ToolHeroImage({
  src,
  alt,
  fallbackSrc,
  fallbackAlt,
  className = "",
  unoptimized = false,
  priority = false,
}: ToolHeroImageProps) {
  const [error, setError] = useState(false);
  const [fallbackUsed, setFallbackUsed] = useState(false);
  const rawEffective = fallbackUsed && fallbackSrc ? fallbackSrc : src;
  const effectiveAlt = fallbackUsed && fallbackAlt ? fallbackAlt : alt;
  const showPlaceholder = !rawEffective || error;

  const handleError = () => {
    if (fallbackSrc && !fallbackUsed) setFallbackUsed(true);
    else setError(true);
  };

  if (showPlaceholder) {
    return (
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-card border border-border bg-surface-muted ${className}`}
        aria-hidden
      >
        <div className="flex h-full min-h-[14rem] items-center justify-center">
          <span className="text-sm text-foreground-muted">Image unavailable</span>
        </div>
      </div>
    );
  }

  const isLocal = rawEffective.startsWith("/");
  const effectiveSrc = isLocal ? rawEffective : optimizeRemoteImageSrc(rawEffective, { maxWidth: 1200 });
  const unoptimizedLocalDev = process.env.NODE_ENV === "development" && isLocal;
  const allowNextOptimizerRemote = isCloudinaryDeliverUrl(effectiveSrc);
  const shouldUnoptimize =
    unoptimized || unoptimizedLocalDev || (!isLocal && !allowNextOptimizerRemote);

  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-card border border-border bg-surface-muted ${className}`}
    >
      <Image
        src={effectiveSrc}
        alt={effectiveAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 28rem"
        priority={priority}
        unoptimized={shouldUnoptimize}
        onError={handleError}
      />
    </div>
  );
}
