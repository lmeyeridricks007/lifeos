import { Building2, Layers3, Smartphone } from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type BankingTradDigPatternColumn = {
  columnEyebrow: string;
  title: string;
  /** Optional bullet list (BoldInline per item) — traditional / digital columns. */
  bullets?: readonly string[];
  /** Optional prose block (e.g. hybrid note) when bullets are absent or in addition. */
  bodyMarkdown?: string;
};

export type BankingTraditionalDigitalPatternGridProps = {
  className?: string;
  traditional: BankingTradDigPatternColumn;
  digital: BankingTradDigPatternColumn;
  hybrid: BankingTradDigPatternColumn;
};

function ColumnIcon({ variant }: { variant: "traditional" | "digital" | "hybrid" }) {
  if (variant === "traditional") {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-900 ring-1 ring-emerald-400/35" aria-hidden>
        <Building2 className="h-5 w-5" />
      </span>
    );
  }
  if (variant === "digital") {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-500/12 text-sky-900 ring-1 ring-sky-400/35" aria-hidden>
        <Smartphone className="h-5 w-5" />
      </span>
    );
  }
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-900 ring-1 ring-violet-400/35" aria-hidden>
      <Layers3 className="h-5 w-5" />
    </span>
  );
}

const EYEBROW_TONE: Record<"traditional" | "digital" | "hybrid", string> = {
  traditional: "text-emerald-900/80",
  digital: "text-sky-900/80",
  hybrid: "text-violet-900/80",
};

function PatternColumn({
  variant,
  column,
  shellClass,
}: {
  variant: "traditional" | "digital" | "hybrid";
  column: BankingTradDigPatternColumn;
  shellClass: string;
}) {
  return (
    <article className={cn("relative overflow-hidden p-5 shadow-sm", shellClass, movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <ColumnIcon variant={variant} />
        <div className="min-w-0">
          <p className={cn("text-[10px] font-bold uppercase tracking-[0.12em]", EYEBROW_TONE[variant])}>{column.columnEyebrow}</p>
          <h3 className="mt-1 text-base font-bold tracking-tight text-foreground">{column.title}</h3>
        </div>
      </div>
      {column.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted">
          {column.bullets.map((p) => (
            <li key={p}>
              <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
            </li>
          ))}
        </ul>
      ) : null}
      {column.bodyMarkdown ? (
        <BoldParagraph
          text={column.bodyMarkdown}
          className="mt-4 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      ) : null}
    </article>
  );
}

/**
 * Three-column “traditional / digital / hybrid” explainer — same visual system as Banking Fees & Costs.
 */
export function BankingTraditionalDigitalPatternGrid({ className, traditional, digital, hybrid }: BankingTraditionalDigitalPatternGridProps) {
  return (
    <div className={cn("mt-4 grid gap-4 lg:grid-cols-3", className)}>
      <PatternColumn variant="traditional" column={traditional} shellClass="rounded-2xl border border-emerald-200/80 bg-emerald-50/45 ring-1 ring-emerald-100/50" />
      <PatternColumn variant="digital" column={digital} shellClass="rounded-2xl border border-sky-200/80 bg-sky-50/45 ring-1 ring-sky-100/50" />
      <PatternColumn variant="hybrid" column={hybrid} shellClass="rounded-2xl border border-violet-200/80 bg-violet-50/45 ring-1 ring-violet-100/50 lg:col-span-1" />
    </div>
  );
}
