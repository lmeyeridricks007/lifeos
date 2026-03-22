"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { ToolHeroImage } from "@/src/components/tools/shared/ToolHeroImage";

export type ToolHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  introBullets?: string[];
  primaryCtaLabel: string;
  /** If set, primary CTA links to this URL (e.g. /netherlands/visa-checker/). Takes precedence over scroll. */
  primaryCtaHref?: string;
  /** If set, primary CTA scrolls to this id (e.g. #tool-inputs). Ignored if primaryCtaHref or primaryCtaOnClick is set. */
  primaryCtaScrollToId?: string;
  primaryCtaOnClick?: () => void;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image?: { src: string; alt: string };
  /** Fallback image if main image fails (e.g. PNG when WebP missing). */
  imageFallback?: { src: string; alt: string };
  toolIdRef?: React.RefObject<HTMLElement | null>;
  className?: string;
};

export function ToolHero({
  eyebrow,
  title,
  subtitle,
  introBullets,
  primaryCtaLabel,
  primaryCtaHref,
  primaryCtaScrollToId,
  primaryCtaOnClick,
  secondaryCtaLabel,
  secondaryCtaHref,
  image,
  imageFallback,
  toolIdRef,
  className,
}: ToolHeroProps) {
  const scrollToTool = () => {
    if (primaryCtaOnClick) {
      primaryCtaOnClick();
      return;
    }
    if (primaryCtaScrollToId && typeof document !== "undefined") {
      const el = document.getElementById(primaryCtaScrollToId);
      el?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    toolIdRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand-50/70 via-sky-50/50 to-white py-8 sm:py-10 md:py-14",
        "border-b border-slate-200/60",
        className
      )}
    >
      <Container className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative order-1 border-l-4 border-brand-600/80 pl-4 md:pl-5">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">{subtitle}</p>
            ) : null}
            {introBullets && introBullets.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {introBullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-brand-600 shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
              {primaryCtaHref ? (
                <Link
                  href={primaryCtaHref}
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-50",
                    "border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow hover:-translate-y-0.5 hover:from-brand-700 hover:to-cyan-700"
                  )}
                >
                  {primaryCtaLabel}
                </Link>
              ) : primaryCtaScrollToId && !primaryCtaOnClick ? (
              <Link
                href={`#${primaryCtaScrollToId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTool();
                }}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-50",
                  "border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow hover:-translate-y-0.5 hover:from-brand-700 hover:to-cyan-700"
                )}
              >
                {primaryCtaLabel}
              </Link>
            ) : (
              <Button type="button" onClick={scrollToTool}>
                {primaryCtaLabel}
              </Button>
            )}
              {secondaryCtaLabel && secondaryCtaHref ? (
                <Link href={secondaryCtaHref}>
                  <Button variant="secondary">{secondaryCtaLabel}</Button>
                </Link>
              ) : null}
            </div>
          </div>
          {image?.src ? (
            <div className="order-2 w-full lg:order-none lg:w-[28rem]">
              <ToolHeroImage
                src={image.src}
                alt={image.alt}
                fallbackSrc={imageFallback?.src}
                fallbackAlt={imageFallback?.alt}
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
