import Link from "next/link";
import type { LinkRegistry } from "@expatlife/content";
import { FileText, Home, Landmark } from "lucide-react";
import { BoldParagraph, ParagraphWithLinks } from "@/components/content/PillarContentBlocks";
import { InfoBox } from "@/components/ui/info-box";
import { cn } from "@/lib/cn";

/** First N complete sentences, no mid-word cuts. */
function excerptSentences(text: string | undefined, maxSentences: number): string {
  if (!text?.trim()) return "";
  const plain = text.replace(/\*\*/g, "").trim();
  const parts = plain.split(/(?<=[.!?])\s+/).filter(Boolean);
  return parts.slice(0, maxSentences).join(" ");
}

const COLUMN_STYLES = [
  "border-l-sky-500 bg-gradient-to-b from-sky-50/80 to-white",
  "border-l-amber-500 bg-gradient-to-b from-amber-50/50 to-white",
  "border-l-violet-500 bg-gradient-to-b from-violet-50/40 to-white",
] as const;

export type EssentialsCardsProps = {
  documents: {
    introMarkdown: string;
    toolLinkLabel: string;
    toolHref: string;
  };
  housing: {
    introParagraph: string;
    registrationWarning?: string;
  };
  banking: {
    introParagraph: string;
    paragraph: string;
    paragraphLinkKeys?: string[];
  };
  linkRegistry: LinkRegistry;
};

export function EssentialsCards({ documents, housing, banking, linkRegistry }: EssentialsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
      {/* Documents */}
      <article
        className={cn(
          "flex min-h-0 flex-col rounded-2xl border border-slate-200/90 border-l-4 p-5 shadow-sm",
          COLUMN_STYLES[0]
        )}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 ring-1 ring-sky-200/60">
            <FileText className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">Documents</h3>
            <div className="mt-2 text-sm leading-relaxed text-slate-700">
              <BoldParagraph text={documents.introMarkdown} className="text-slate-700" />
            </div>
            <Link
              href={documents.toolHref}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800 hover:underline"
            >
              {documents.toolLinkLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </article>

      {/* Housing */}
      <article
        className={cn(
          "flex min-h-0 flex-col rounded-2xl border border-slate-200/90 border-l-4 p-5 shadow-sm",
          COLUMN_STYLES[1]
        )}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 ring-1 ring-amber-200/60">
            <Home className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">Housing</h3>
            {housing.registrationWarning ? (
              <InfoBox variant="warn" title="Registration" className="mt-3 text-sm">
                {housing.registrationWarning}
              </InfoBox>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {excerptSentences(housing.introParagraph, 2)}
            </p>
          </div>
        </div>
      </article>

      {/* Banking */}
      <article
        className={cn(
          "flex min-h-0 flex-col rounded-2xl border border-slate-200/90 border-l-4 p-5 shadow-sm",
          COLUMN_STYLES[2]
        )}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-800 ring-1 ring-violet-200/60">
            <Landmark className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">Banking</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              {excerptSentences(banking.introParagraph, 2)}
            </p>
            {banking.paragraphLinkKeys?.length ? (
              <div className="mt-4 rounded-lg bg-white/80 px-3 py-3 text-sm ring-1 ring-slate-200/80">
                <ParagraphWithLinks
                  paragraph={banking.paragraph}
                  linkKeys={banking.paragraphLinkKeys}
                  linkRegistry={linkRegistry}
                  linkClassName="font-semibold text-brand-700 hover:underline"
                  className="text-slate-700"
                />
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-700">{banking.paragraph}</p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
