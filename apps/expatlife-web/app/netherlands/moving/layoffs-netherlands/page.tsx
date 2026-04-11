import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LayoffsNetherlandsView } from "@/src/components/moving/layoffs-netherlands/LayoffsNetherlandsView";
import {
  LAYOFFS_NETHERLANDS_CANONICAL,
  LAYOFFS_NETHERLANDS_SEO_DESCRIPTION,
} from "@/src/components/moving/layoffs-netherlands/layoffsNetherlandsContent";

export const revalidate = CONTENT_REVALIDATE;

/** Short title — root layout `template` adds `| ExpatCopilot` (avoid double suffix). */
const META_TITLE = "Layoffs in the Netherlands";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: LAYOFFS_NETHERLANDS_SEO_DESCRIPTION,
    path: LAYOFFS_NETHERLANDS_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "layoffs netherlands expat",
    "made redundant netherlands expat guide",
    "losing job netherlands permit salary housing",
    "layoff netherlands practical guide",
    "employment ending netherlands expat",
  ],
};

export default function NetherlandsMovingLayoffsPage() {
  return <LayoffsNetherlandsView />;
}
