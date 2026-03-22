"use client";

import Image from "next/image";
import { useState } from "react";

export type ToolHeroImageProps = {
  src: string;
  alt: string;
  /** If main src fails to load, try this (e.g. PNG fallback when WebP missing). */
  fallbackSrc?: string;
  fallbackAlt?: string;
  /** Optional width for next/image (default 448). */
  width?: number;
  /** Optional height for next/image (default 336). */
  height?: number;
  className?: string;
  /** When true, use img for external or non-optimized paths. */
  unoptimized?: boolean;
};

/**
 * Hero image for tool pages. Uses next/image when src is local; falls back to img for placeholders or external URLs.
 * Optimized for WebP; tries fallbackSrc if main src fails; fails gracefully if both missing.
 */
export function ToolHeroImage({
  src,
  alt,
  fallbackSrc,
  fallbackAlt,
  width = 448,
  height = 336,
  className = "",
  unoptimized = false,
}: ToolHeroImageProps) {
  const [error, setError] = useState(false);
  const [fallbackUsed, setFallbackUsed] = useState(false);
  const effectiveSrc = fallbackUsed && fallbackSrc ? fallbackSrc : src;
  const effectiveAlt = fallbackUsed && fallbackAlt ? fallbackAlt : alt;
  const showPlaceholder = !effectiveSrc || error;

  const handleError = () => {
    if (fallbackSrc && !fallbackUsed) setFallbackUsed(true);
    else setError(true);
  };

  if (showPlaceholder) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 ${className}`}
        style={{ minHeight: 280 }}
        aria-hidden
      >
        <span className="text-sm text-slate-400">Image unavailable</span>
      </div>
    );
  }

  const isLocal = effectiveSrc.startsWith("/");
  // Dev: skip /_next/image for local files — avoids optimizer IPC + AbortError spam (HMR/Strict Mode)
  // and noisy logs when hero PNGs are not yet in public/images/heroes/.
  const unoptimizedLocalDev =
    process.env.NODE_ENV === "development" && isLocal;

  if (isLocal && !unoptimized) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${className}`}
      >
        <Image
          src={effectiveSrc}
          alt={effectiveAlt}
          width={width}
          height={height}
          className="h-56 w-full object-cover object-center sm:h-64 lg:h-80"
          sizes="(max-width: 1024px) 100vw, 28rem"
          unoptimized={unoptimizedLocalDev}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={effectiveSrc}
        alt={effectiveAlt}
        width={width}
        height={height}
        className="h-56 w-full object-cover object-center sm:h-64 lg:h-80"
        onError={handleError}
      />
    </div>
  );
}
