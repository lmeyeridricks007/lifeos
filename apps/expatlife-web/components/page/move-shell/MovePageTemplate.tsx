import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { siteGuideColumnPadYClass } from "@/lib/ui/site-shell-identity";

/** Same column shell as city hubs (`Container` + tool main) — hero must sit in this too or the framed card spans the viewport. */
export const moveToolPageWrapClass =
  "mx-auto w-full min-w-0 max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-10";

export type MovePageTemplateVariant = "editorial" | "tool" | "city" | "hub";

export type MovePageTemplateProps = {
  variant: MovePageTemplateVariant;
  /** When true, render a sticky sidebar column (lg+) matching tool/guide rails. */
  showSidebar?: boolean;
  sidebar?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Main column wrapper (e.g. extra min-width). */
  mainClassName?: string;
  /**
   * When true (editorial/hub), apply the same vertical padding band as `GuidePageTemplate` wrapContent.
   * Tool variant uses horizontal alignment only; vertical rhythm comes from `PillarMainStack` inside.
   */
  withGuideColumnPadding?: boolean;
};

/**
 * Shared max-width + sidebar grid for ExpatCopilot Move cluster (tools, guides, hubs).
 * Aligns main column width with `/netherlands/moving-to-the-netherlands/` (`max-w-screen-2xl` + Container padding).
 */
export function MovePageTemplate({
  variant,
  showSidebar,
  sidebar,
  children,
  className,
  mainClassName,
  withGuideColumnPadding = false,
}: MovePageTemplateProps) {
  const pad =
    (variant === "editorial" || variant === "hub") && withGuideColumnPadding
      ? siteGuideColumnPadYClass
      : "";

  const body = showSidebar ? (
    <div
      className={cn(
        // Default grid `align-items: stretch` so the sidebar column is as tall as the main column;
        // otherwise `items-start` shrinks the aside to content height and `position: sticky` never tracks scroll.
        "lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 lg:items-stretch",
        variant === "tool" && "lg:gap-10"
      )}
    >
      <div className={cn("min-w-0", mainClassName)}>{children}</div>
      {sidebar != null ? (
        <aside
          className="hidden min-h-0 lg:block lg:self-stretch"
          aria-label="On this page"
        >
          <div className="sticky top-24 space-y-6 py-1 lg:space-y-8">{sidebar}</div>
        </aside>
      ) : null}
    </div>
  ) : (
    children
  );

  if (variant === "tool") {
    return (
      <div className={cn(moveToolPageWrapClass, pad, className)}>
        {body}
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-screen-2xl", pad, className)}>
      {body}
    </div>
  );
}
