import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { ExtensionsChangesView } from "@/src/components/moving/extensions-changes/ExtensionsChangesView";
import { EXTENSIONS_CHANGES_CANONICAL, PAGE_HERO_SUBTITLE } from "@/src/components/moving/extensions-changes/extensionsChangesContent";

export const revalidate = CONTENT_REVALIDATE;

/** Short title only — root layout applies `%s | ExpatCopilot`. */
const META_TITLE = "Extensions & Changes in the Netherlands";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: PAGE_HERO_SUBTITLE.replace(/\*\*/g, ""),
    path: EXTENSIONS_CHANGES_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "residence permit extension netherlands expat",
    "change of status netherlands expat",
    "extending stay netherlands guide",
    "permit renewal netherlands practical guide",
    "job change residence status netherlands",
  ],
};

export default function NetherlandsMovingExtensionsChangesPage() {
  return <ExtensionsChangesView />;
}
