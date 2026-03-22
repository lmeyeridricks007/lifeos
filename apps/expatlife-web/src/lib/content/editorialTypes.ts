/**
 * Shared types for the editorial content template system (guides, posts, pillars).
 */

export type EditorialHeroImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Use priority for above-the-fold hero to avoid LCP shift */
  priority?: boolean;
  width?: number;
  height?: number;
};

/** Default placeholder shown when no hero image is configured. */
export const EDITORIAL_HERO_PLACEHOLDER: EditorialHeroImage = {
  src: "/images/hero-placeholder.svg",
  alt: "Article",
  priority: true,
  width: 1200,
  height: 630,
};

export type EditorialHeader = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  heroImage?: EditorialHeroImage | null;
};
