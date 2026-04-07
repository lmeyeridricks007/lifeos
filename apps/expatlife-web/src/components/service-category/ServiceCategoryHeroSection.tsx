import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { SiteFramedHero } from "@/components/site/SiteFramedHero";
import { siteHubHeroSectionClass } from "@/lib/ui/site-shell-identity";

/** Breadcrumb + `ServiceCategoryHero` inside the site framed hero (matches Moving NL / hub chrome). */
export function ServiceCategoryHeroSection({ children }: { children: ReactNode }) {
  return (
    <section className={siteHubHeroSectionClass}>
      <Container className="w-full max-w-screen-2xl">
        <SiteFramedHero>{children}</SiteFramedHero>
      </Container>
    </section>
  );
}
