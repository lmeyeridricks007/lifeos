import Link from "next/link";
import type { RequirementCard } from "@/src/lib/service-category/types";

export function RequirementAlertBox({ cards }: { cards: RequirementCard[] }) {
  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            {card.description}
          </p>
          {card.whoItAppliesTo ? (
            <p className="mt-2 text-xs text-slate-500">
              <span className="font-medium">Applies to:</span> {card.whoItAppliesTo}
            </p>
          ) : null}
          {card.link ? (
            card.link.href.startsWith("http") ? (
              <a
                href={card.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-brand-700 hover:text-brand-800 underline"
              >
                {card.link.label}
                <span className="ml-1" aria-hidden>→</span>
              </a>
            ) : (
              <Link
                href={card.link.href}
                className="mt-3 inline-block text-sm font-medium text-brand-700 hover:text-brand-800 underline"
              >
                {card.link.label}
                <span className="ml-1" aria-hidden>→</span>
              </Link>
            )
          ) : null}
        </div>
      ))}
    </div>
  );
}
