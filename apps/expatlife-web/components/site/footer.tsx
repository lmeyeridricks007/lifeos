import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CookieSettingsLink } from "@/src/components/cookies/CookieSettingsLink";
import { FOOTER_GROUPS } from "@/src/data/site/footer-links";
import { cn } from "@/lib/cn";

type FooterProps = {
  contentVersion: string;
};

const footerLinkClass =
  "block min-h-[44px] rounded-lg py-2.5 text-sm text-foreground-muted transition-colors duration-150 hover:bg-surface-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 sm:min-h-0 sm:py-1.5";

const footerHeadingClass =
  "text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong";

export function Footer({ contentVersion }: FooterProps) {
  return (
    <footer className="border-t border-border bg-surface-muted/40">
      <Container className="py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-10">
          <div className="min-w-0">
            <h3 className={footerHeadingClass}>{FOOTER_GROUPS.company.title}</h3>
            <div className="mt-4 space-y-1" suppressHydrationWarning>
              {FOOTER_GROUPS.company.links.map((link) => (
                <Link key={link.href} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
              <CookieSettingsLink className={cn(footerLinkClass, "w-full text-left")}>Cookie settings</CookieSettingsLink>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground-muted">
              Public relocation guidance. Confirm legal and tax requirements with official sources.
            </p>
            <p className="mt-4 text-xs text-foreground-faint">Content version: {contentVersion}</p>
          </div>
          <div className="min-w-0">
            <h3 className={footerHeadingClass}>{FOOTER_GROUPS.trust.title}</h3>
            <div className="mt-4 space-y-1" suppressHydrationWarning>
              {FOOTER_GROUPS.trust.links.map((link) => (
                <Link key={link.href} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h3 className={footerHeadingClass}>{FOOTER_GROUPS.legal.title}</h3>
            <div className="mt-4 space-y-1" suppressHydrationWarning>
              {FOOTER_GROUPS.legal.links.map((link) => (
                <Link key={link.href} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h3 className={footerHeadingClass}>{FOOTER_GROUPS.explore.title}</h3>
            <div className="mt-4 space-y-1" suppressHydrationWarning>
              {FOOTER_GROUPS.explore.links.map((link) => (
                <Link key={link.href} href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
