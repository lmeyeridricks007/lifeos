import Image from "next/image";
import Link from "next/link";
import type { AffiliateProvider } from "@/lib/affiliates";

const AFFILIATE_DISCLOSURE = "We may earn a commission if you use this link.";

type AffiliateInlineCardProps = {
  provider: AffiliateProvider;
};

export function AffiliateInlineCard({ provider }: AffiliateInlineCardProps) {
  const outHref = `/out/${provider.id}`;

  return (
    <article
      className="rounded-xl border border-blue-200 bg-blue-50 p-6"
      aria-labelledby={`affiliate-${provider.id}-title`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        {provider.logo ? (
          <div className="relative h-12 w-24 shrink-0">
            <Image
              src={provider.logo}
              alt=""
              width={96}
              height={48}
              className="object-contain object-left"
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h3 id={`affiliate-${provider.id}-title`} className="text-lg font-semibold text-slate-900">
            {provider.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{provider.description}</p>
          {provider.features?.length ? (
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
              {provider.features.map((f, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="text-blue-600" aria-hidden>
                    •
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-4">
            <Link
              href={outHref}
              rel="sponsored"
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 hover:border-blue-300"
            >
              Visit {provider.name}
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">{AFFILIATE_DISCLOSURE}</p>
    </article>
  );
}
