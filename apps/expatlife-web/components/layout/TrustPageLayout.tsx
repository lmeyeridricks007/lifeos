import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export type TrustPageLayoutProps = {
  /** Breadcrumb label (e.g. "Editorial policy", "Contact") */
  breadcrumbLabel: string;
  /** Page title (h1) */
  title: string;
  /** Subtitle below the title */
  subtitle: string;
  /** Optional uppercase eyebrow above title */
  eyebrow?: string;
  /** Optional content below subtitle (e.g. Last updated) */
  extraHeroContent?: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Shared layout for trust, legal, and company pages (about, contact, editorial policy, etc.).
 * Matches the About page: hero with gradient + radial accent, then body in Container > max-w-6xl (left-aligned).
 */
export function TrustPageLayout({
  breadcrumbLabel,
  title,
  subtitle,
  eyebrow,
  extraHeroContent,
  children,
}: TrustPageLayoutProps) {
  return (
    <div className="min-h-screen min-w-0 bg-white">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-brand-50/30 to-white py-8 sm:py-12 md:py-16">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_-20%,rgba(59,130,246,0.08),transparent)] pointer-events-none"
          aria-hidden
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-5 min-w-0 text-sm text-slate-600 sm:mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 break-words">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">
                /
              </li>
              <li className="font-medium text-slate-900" aria-current="page">
                {breadcrumbLabel}
              </li>
            </ol>
          </nav>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 max-w-4xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">{subtitle}</p>
          {extraHeroContent ? <div className="mt-2">{extraHeroContent}</div> : null}
        </Container>
      </section>

      <Section contained={false} className="py-10 md:py-14">
        <Container>
          <div className="max-w-6xl">{children}</div>
        </Container>
      </Section>
    </div>
  );
}
