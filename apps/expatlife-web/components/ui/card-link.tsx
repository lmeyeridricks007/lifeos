"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { BoldInline } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import { transitionInteractive, transitionTransform } from "@/lib/ui/interaction";

type CardLinkProps = {
  href: string;
  title: string;
  description: string;
  /** When true, `description` may use `**bold**` segments (rendered as `<strong>`). */
  descriptionMarkdown?: boolean;
  icon?: ReactNode;
  meta?: string;
  badge?: ReactNode;
  status?: "coming_soon";
  className?: string;
  /** Fires before navigation (e.g. analytics). */
  onClick?: () => void;
};

function CardContent({
  icon,
  badge,
  status,
  title,
  description,
  descriptionMarkdown,
  meta,
}: {
  icon?: ReactNode;
  badge?: ReactNode;
  status?: "coming_soon";
  title: string;
  description: string;
  descriptionMarkdown?: boolean;
  meta?: string;
}) {
  return (
    <div className="flex min-w-0 items-start justify-between gap-3">
      <div className="min-w-0 flex-1 space-y-2 break-words">
        <div className="flex flex-wrap items-center gap-2">
          {icon ? (
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-strong">
              {icon}
            </div>
          ) : null}
          {badge ? (
            typeof badge === "string" ? (
              <Badge variant="outline" className="font-medium">
                {badge}
              </Badge>
            ) : (
              badge
            )
          ) : null}
          {status === "coming_soon" ? (
            <Badge variant="emphasis" className="font-semibold">
              Coming soon
            </Badge>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-foreground-muted">
          {descriptionMarkdown ? <BoldInline text={description} /> : description}
        </p>
        {meta ? <p className="text-xs font-medium text-foreground-faint">{meta}</p> : null}
      </div>
      {status !== "coming_soon" ? (
        <ArrowRight
          className={cn(
            "mt-1 h-4 w-4 shrink-0 text-foreground-faint ease-out group-hover:text-brand-strong",
            transitionTransform,
            "motion-reduce:group-hover:translate-x-0 group-hover:translate-x-0.5"
          )}
        />
      ) : null}
    </div>
  );
}

export function CardLink({
  href,
  title,
  description,
  descriptionMarkdown,
  icon,
  meta,
  badge,
  status,
  className,
  onClick,
}: CardLinkProps) {
  const isComingSoon = status === "coming_soon";
  const baseClass = cn(
    transitionInteractive,
    "group block rounded-card border border-border bg-surface-raised p-card-pad shadow-card ease-out hover:border-border-strong hover:shadow-card-hover motion-reduce:hover:shadow-card active:brightness-[0.995] motion-reduce:active:brightness-100",
    isComingSoon && "cursor-default opacity-90",
    className
  );
  const content = (
    <CardContent
      icon={icon}
      badge={badge}
      status={status}
      title={title}
      description={description}
      descriptionMarkdown={descriptionMarkdown}
      meta={meta}
    />
  );
  if (isComingSoon) {
    return <div className={baseClass}>{content}</div>;
  }
  return (
    <Link href={href} className={baseClass} onClick={onClick}>
      {content}
    </Link>
  );
}
