import { Accordion } from "@/components/ui/accordion";

export type FaqItem = { id: string; question: string; answer: string };

export type ToolFAQSectionProps = {
  title?: string;
  items: FaqItem[];
  className?: string;
};

/**
 * FAQ accordion section. Renders crawlable HTML; use with FAQPage schema.
 */
export function ToolFAQSection({
  title = "Frequently asked questions",
  items,
  className = "",
}: ToolFAQSectionProps) {
  if (!items?.length) return null;
  const accordionItems = items.map((item) => ({
    id: item.id,
    title: item.question,
    content: <p className="text-sm text-slate-600">{item.answer}</p>,
  }));
  return (
    <section className={className} aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="mb-4 text-xl font-semibold text-slate-900">
        {title}
      </h2>
      <Accordion items={accordionItems} />
    </section>
  );
}
