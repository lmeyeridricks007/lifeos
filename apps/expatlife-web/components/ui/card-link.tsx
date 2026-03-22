import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CardLinkProps = {
  href: string;
  title: string;
  description: string;
  icon?: ReactNode;
  meta?: string;
  badge?: ReactNode;
  status?: "coming_soon";
  className?: string;
};

function CardContent({
  icon,
  badge,
  status,
  title,
  description,
  meta,
}: {
  icon?: ReactNode;
  badge?: ReactNode;
  status?: "coming_soon";
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {icon ? (
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">{icon}</div>
          ) : null}
          {badge ? (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">{badge}</span>
          ) : null}
          {status === "coming_soon" ? (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">Coming soon</span>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
        {meta ? <p className="text-xs font-medium text-slate-500">{meta}</p> : null}
      </div>
      {status !== "coming_soon" ? (
        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-700" />
      ) : null}
    </div>
  );
}

export function CardLink({ href, title, description, icon, meta, badge, status, className }: CardLinkProps) {
  const isComingSoon = status === "coming_soon";
  const baseClass = cn(
    "group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow",
    isComingSoon && "cursor-default opacity-90",
    className
  );
  const content = (
    <CardContent icon={icon} badge={badge} status={status} title={title} description={description} meta={meta} />
  );
  if (isComingSoon) {
    return <div className={baseClass}>{content}</div>;
  }
  return (
    <Link href={href} className={baseClass}>
      {content}
    </Link>
  );
}
