/**
 * Social sharing metadata (Open Graph + Twitter / X) helpers.
 * Use with root `metadataBase` in `app/layout.tsx` so relative `url` / `images` resolve to absolute https URLs in prod (`NEXT_PUBLIC_SITE_URL`).
 */

import type { Metadata } from "next";
import { cloneSafeMetadata } from "@/lib/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";

/** Default OG/Twitter image route (see `app/opengraph-image.tsx`). */
export const DEFAULT_SHARE_IMAGE_PATH = "/opengraph-image";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export type SocialPageMetaInput = {
  title: string;
  description: string;
  /** Canonical path, e.g. `/netherlands/amsterdam/` */
  path: string;
  /** Override default share image (path starting with `/`, or absolute https URL). */
  imagePath?: string;
  ogType?: "website" | "article";
  /**
   * When true, `metadata.title` uses `{ absolute: title }` so the root `%s | ExpatCopilot` template is not applied.
   * Use for the homepage or any title that already includes the full branded string.
   */
  absoluteTitle?: boolean;
  /**
   * When the page is not yet publicly visible (scheduled `publishDate` in production), set `robots` noindex
   * so crawlers that reach the URL do not index it before the sitemap includes it.
   */
  publishGate?: { publish?: boolean; publishDate?: string };
};

function normalizePath(path: string): string {
  let p = path.trim();
  if (!p.startsWith("/")) p = `/${p}`;
  return p;
}

/** Absolute URL for a path on this deployment (social crawlers require absolute URLs). */
export function absoluteUrlFromPath(path: string): string {
  const p = normalizePath(path);
  return new URL(p, `${getSiteOrigin()}/`).toString();
}

function resolveImageUrl(imagePath?: string): string {
  if (!imagePath) return absoluteUrlFromPath(DEFAULT_SHARE_IMAGE_PATH);
  if (imagePath.startsWith("https://") || imagePath.startsWith("http://")) return imagePath;
  return absoluteUrlFromPath(imagePath);
}

/** Crawler-facing title: add brand suffix when the page title is the short form (HTML title adds suffix via layout template). */
export function sharePreviewTitle(pageTitle: string): string {
  const t = pageTitle.trim();
  if (!t) return "ExpatCopilot";
  if (/expatcopilot/i.test(t)) return t;
  return `${t} | ExpatCopilot`;
}

export function buildOpenGraphFields(input: SocialPageMetaInput) {
  const path = normalizePath(input.path);
  const title = input.title.trim();
  const description = input.description.trim();
  const imageUrl = resolveImageUrl(input.imagePath);
  const ogTitle = sharePreviewTitle(title);
  return {
    title: ogTitle,
    description,
    type: input.ogType ?? ("website" as const),
    url: absoluteUrlFromPath(path),
    siteName: "ExpatCopilot",
    locale: "en_US" as const,
    images: [
      {
        url: imageUrl,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: ogTitle,
      },
    ],
  };
}

export function buildTwitterFields(input: SocialPageMetaInput) {
  const title = input.title.trim();
  const description = input.description.trim();
  const imageUrl = resolveImageUrl(input.imagePath);
  const twTitle = sharePreviewTitle(title);
  const site = process.env.NEXT_PUBLIC_TWITTER_SITE?.trim();
  const creator = process.env.NEXT_PUBLIC_TWITTER_CREATOR?.trim();
  return {
    card: "summary_large_image" as const,
    title: twTitle,
    description,
    images: [imageUrl],
    ...(site ? { site } : {}),
    ...(creator ? { creator } : {}),
  };
}

/**
 * Full page metadata for sharing: title, description, canonical, Open Graph, Twitter.
 * Clone-safe for Next.js metadata merging (no URL objects / non-JSON values).
 */
export function buildSocialMetadata(input: SocialPageMetaInput): Metadata {
  const path = normalizePath(input.path);
  const t = input.title.trim();
  const d = input.description.trim();
  const normalized: SocialPageMetaInput = { ...input, path, title: t, description: d };
  const titleField = input.absoluteTitle ? { absolute: t } : t;
  const gate = input.publishGate;
  const robots =
    gate != null && !isPubliclyVisible(gate.publish, gate.publishDate, new Date())
      ? ({ index: false, follow: false } as const)
      : undefined;
  return cloneSafeMetadata({
    title: titleField,
    description: d,
    alternates: { canonical: path },
    openGraph: buildOpenGraphFields(normalized),
    twitter: buildTwitterFields(normalized),
    ...(robots ? { robots } : {}),
  });
}
