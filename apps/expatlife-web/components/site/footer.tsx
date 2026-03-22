import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CookieSettingsLink } from "@/src/components/cookies/CookieSettingsLink";
import { FOOTER_GROUPS } from "@/src/data/site/footer-links";

type FooterProps = {
  contentVersion: string;
};

export function Footer({ contentVersion }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <Container className="py-8 sm:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{FOOTER_GROUPS.company.title}</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600" suppressHydrationWarning>
              {FOOTER_GROUPS.company.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block min-h-[44px] rounded-md py-2.5 leading-snug hover:text-slate-900 sm:min-h-0 sm:py-0"
                >
                  {link.label}
                </Link>
              ))}
              <CookieSettingsLink className="block min-h-[44px] rounded-md py-2.5 text-left leading-snug hover:text-slate-900 sm:min-h-0 sm:py-0">
                Cookie settings
              </CookieSettingsLink>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Public relocation guidance. Confirm legal and tax requirements with official sources.
            </p>
            <p className="mt-3 text-xs text-slate-500">Content version: {contentVersion}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{FOOTER_GROUPS.trust.title}</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600" suppressHydrationWarning>
              {FOOTER_GROUPS.trust.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block min-h-[44px] rounded-md py-2.5 leading-snug hover:text-slate-900 sm:min-h-0 sm:py-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{FOOTER_GROUPS.legal.title}</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600" suppressHydrationWarning>
              {FOOTER_GROUPS.legal.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block min-h-[44px] rounded-md py-2.5 leading-snug hover:text-slate-900 sm:min-h-0 sm:py-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{FOOTER_GROUPS.explore.title}</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600" suppressHydrationWarning>
              {FOOTER_GROUPS.explore.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block min-h-[44px] rounded-md py-2.5 leading-snug hover:text-slate-900 sm:min-h-0 sm:py-0"
                >
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
