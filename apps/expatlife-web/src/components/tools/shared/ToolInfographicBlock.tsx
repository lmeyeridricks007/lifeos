"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

export type ToolInfographicBlockProps = {
  src: string;
  alt: string;
  /** Optional caption below the image. */
  caption?: string;
  className?: string;
  width?: number;
  height?: number;
};

/**
 * Optional infographic block (1 per tool max). Lazy-load friendly.
 * When the image is missing or fails to load, shows a visible placeholder so the spot is reserved.
 */
export function ToolInfographicBlock({
  src,
  alt,
  caption,
  className = "",
  width = 800,
  height = 450,
}: ToolInfographicBlockProps) {
  const [error, setError] = useState(false);
  const showPlaceholder = !src || error;

  if (showPlaceholder) {
    return (
      <figure className={`my-6 max-w-2xl mx-auto ${className}`}>
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-card border-2 border-dashed border-border bg-surface-muted/80 py-16 text-foreground-muted"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <ImageOff className="h-12 w-12 shrink-0" aria-hidden />
          <p className="mt-3 text-sm font-medium text-foreground-muted">
            {alt || "Infographic"}
          </p>
          <p className="mt-1 text-xs text-foreground-muted/80">Placeholder — add image when ready</p>
        </div>
        {caption ? (
          <figcaption className="mt-2 text-center text-sm text-foreground-muted">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  const isLocal = src.startsWith("/");

  return (
    <figure className={`my-6 max-w-2xl mx-auto ${className}`}>
      <div className="relative overflow-hidden rounded-card border border-border bg-surface-muted">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full object-contain"
          sizes="(max-width: 768px) 100vw, 672px"
          loading="lazy"
          unoptimized={!isLocal}
          onError={() => setError(true)}
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-sm text-foreground-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
