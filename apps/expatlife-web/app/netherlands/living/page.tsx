import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { absoluteUrlFromPath, pageMetadataTitle, sharePreviewTitle } from "@/lib/seo/metadata";

/**
 * Living pillar root is currently an entry alias for the Survival Guide hub.
 * Intents are conceptually distinct (cluster hub vs first-weeks field guide); we do not
 * merge content further here—only position metadata so the alias is not a second
 * “Survival Guide” SERP twin if crawlers evaluate this URL before following the redirect.
 */
const SURVIVAL_GUIDE_PATH = "/netherlands/living/survival-guide";

const META_TITLE = "Living in the Netherlands for expats";
const META_DESCRIPTION =
  "Daily-life orientation for expats in the Netherlands: transport, apps, payments, shopping, and practical routines—start from the Living Survival Guide hub.";
const SHARE_TITLE = sharePreviewTitle(META_TITLE);

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
  description: META_DESCRIPTION,
  // Alias URL: prefer the survival-guide document in the index while the redirect remains.
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  alternates: { canonical: SURVIVAL_GUIDE_PATH },
  openGraph: {
    title: SHARE_TITLE,
    description: META_DESCRIPTION,
    url: absoluteUrlFromPath(SURVIVAL_GUIDE_PATH),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: META_DESCRIPTION,
  },
};

/** Canonical Living pillar entry is the Survival Guide hub. */
export default function NetherlandsLivingRedirectPage() {
  permanentRedirect(SURVIVAL_GUIDE_PATH);
}
