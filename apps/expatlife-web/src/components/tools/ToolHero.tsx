"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
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
        "relative overflow-hidden border-b border-copilot-primary/[0.08] bg-gradient-to-br from-copilot-bg-light via-copilot-surface to-copilot-bg-soft py-10 sm:py-11 md:py-14",
        className
      )}
    >
      <Container className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative order-1 border-l-[3px] border-copilot-primary pl-4 md:pl-6">
            {eyebrow ? <Eyebrow className="text-copilot-text-muted md:text-[0.8125rem]">{eyebrow}</Eyebrow> : null}
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-copilot-text-primary sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-copilot-text-secondary md:text-lg">{subtitle}</p>
            ) : null}
            {introBullets && introBullets.length > 0 ? (
              <ul className="mt-5 space-y-2.5">
                {introBullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-copilot-text-secondary md:text-[0.9375rem]">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              {primaryCtaHref ? (
                <Link href={primaryCtaHref} className="inline-flex shrink-0">
                  <Button className="min-h-[44px] px-6 shadow-card">{primaryCtaLabel}</Button>
                </Link>
              ) : primaryCtaScrollToId && !primaryCtaOnClick ? (
                <Link
                  href={`#${primaryCtaScrollToId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTool();
                  }}
                  className="inline-flex shrink-0"
                >
                  <Button className="min-h-[44px] px-6 shadow-card">{primaryCtaLabel}</Button>
                </Link>
              ) : (
                <Button type="button" onClick={scrollToTool} className="min-h-[44px] px-6 shadow-card">
                  {primaryCtaLabel}
                </Button>
              )}
              {secondaryCtaLabel && secondaryCtaHref ? (
                <Link href={secondaryCtaHref} className="inline-flex shrink-0">
                  <Button variant="secondary" className="min-h-[44px] shadow-card">
                    {secondaryCtaLabel}
                  </Button>
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
                priority
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
