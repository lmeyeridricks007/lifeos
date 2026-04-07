import { cn } from "@/lib/cn";

/** Whole-line `**Title**` from merged guide sections — render as h3, not literal asterisks. */
const MERGED_SUBHEADING = /^\*\*(.+)\*\*$/s;

type GuideBodyParagraphsProps = {
  body?: string[];
  paragraphClassName?: string;
  subheadingClassName?: string;
};

export function GuideBodyParagraphs({
  body,
  paragraphClassName = "text-sm leading-relaxed text-copilot-text-secondary md:text-base",
  subheadingClassName = "text-lg font-bold tracking-tight text-copilot-text-primary",
}: GuideBodyParagraphsProps) {
  if (!body?.length) return null;
  return (
    <>
      {body.map((para, i) => {
        const t = para.trim();
        const m = t.match(MERGED_SUBHEADING);
        if (m) {
          return (
            <h3 key={i} className={cn(subheadingClassName)}>
              {m[1]}
            </h3>
          );
        }
        return (
          <p key={i} className={paragraphClassName}>
            {para}
          </p>
        );
      })}
    </>
  );
}
