import Link from "next/link";

export type TrustLinkItem = { label: string; href: string };

const DEFAULT_TRUST_LINKS: TrustLinkItem[] = [
  { label: "Editorial policy", href: "/editorial-policy/" },
  { label: "How we rank services", href: "/how-we-rank-services/" },
  { label: "Methodology", href: "/methodology/" },
  { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
];

/**
 * Reusable block of trust/methodology links for service category pages and guides.
 * Use at the bottom of content to surface editorial policy, ranking, methodology, and affiliate disclosure.
 */
type Props = {
  /** Override default links if needed. */
  links?: TrustLinkItem[];
  /** Optional heading. */
  heading?: string;
  className?: string;
};

export function TrustLinksBlock({
  links = DEFAULT_TRUST_LINKS,
  heading,
  className = "",
}: Props) {
  return (
    <section
      className={`mt-8 border-t border-slate-200 pt-6 ${className}`}
      aria-label="Trust and methodology"
    >
      {heading ? (
        <h2 className="text-sm font-semibold text-slate-700">{heading}</h2>
      ) : null}
      <p className={`text-sm text-slate-600 ${heading ? "mt-2" : ""}`}>
        {links.map((link, i) => (
          <span key={link.href}>
            {i > 0 && " · "}
            <Link
              href={link.href}
              className="font-medium text-slate-700 hover:text-slate-900 hover:underline"
            >
              {link.label}
            </Link>
          </span>
        ))}
      </p>
    </section>
  );
}
