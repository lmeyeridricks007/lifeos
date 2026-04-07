import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArticleSupportPageTemplate } from "@/components/page/page-templates";
import { SiteFramedHero } from "@/components/site/SiteFramedHero";
import { cn } from "@/lib/cn";
import { siteGuideColumnPadYClass, siteHubHeroSectionClass } from "@/lib/ui/site-shell-identity";

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
  extraHeroContent?: ReactNode;
  children: ReactNode;
};

/**
 * Trust, legal, and company pages — uses `ArticleSupportPageTemplate` for article-family contract + stack rhythm.
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
    <ArticleSupportPageTemplate
      rootClassName="min-h-screen min-w-0"
      mainStackClassName="mt-0 space-y-0 sm:mt-0 sm:space-y-0 md:mt-0 md:space-y-0"
      hero={
        <section className={siteHubHeroSectionClass}>
          <Container className="relative">
            <SiteFramedHero>
              <nav aria-label="Breadcrumb" className="mb-5 min-w-0 text-sm text-foreground-muted sm:mb-6">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 break-words">
                  <li>
                    <Link href="/" className="hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden className="text-foreground-faint">
                    /
                  </li>
                  <li className="font-medium text-foreground" aria-current="page">
                    {breadcrumbLabel}
                  </li>
                </ol>
              </nav>
              {eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground-muted">{eyebrow}</p>
              ) : null}
              <h1 className="mt-2 max-w-4xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground-muted sm:mt-4 sm:text-lg">{subtitle}</p>
              {extraHeroContent ? <div className="mt-2">{extraHeroContent}</div> : null}
            </SiteFramedHero>
          </Container>
        </section>
      }
      wrapContent={(stack) => (
        <Section contained={false} className={cn(siteGuideColumnPadYClass)}>
          <Container>
            <div className="max-w-6xl">{stack}</div>
          </Container>
        </Section>
      )}
      body={children}
    />
  );
}
