import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";

export type CommercialCardProps = {
  title: string;
  description: string;
  footer: ReactNode;
  badge?: ReactNode;
  leading?: ReactNode;
  className?: string;
};

/**
 * Provider / service listing tile — logo slot, title, body, consistent CTA row.
 */
export function CommercialCard({ title, description, footer, badge, leading, className }: CommercialCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.07] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-expatos-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-5",
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {leading}
          <h4 className="text-base font-bold tracking-tight text-copilot-text-primary">{title}</h4>
        </div>
        {badge}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{description}</p>
      <div className="mt-4 border-t border-copilot-primary/10 pt-3">{footer}</div>
    </article>
  );
}
