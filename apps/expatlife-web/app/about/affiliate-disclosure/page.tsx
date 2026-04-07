import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = {
  title: String("Affiliate disclosure | ExpatCopilot"),
  description: String("How we use affiliate links and what that means for you."),
  alternates: { canonical: String("/about/affiliate-disclosure") },
};

const relatedLinks = [
  { label: "Full affiliate disclosure", href: "/affiliate-disclosure/" },
  { label: "How we rank services", href: "/how-we-rank-services/" },
  { label: "Editorial policy", href: "/editorial-policy/" },
  { label: "Contact", href: "/contact/" },
];

export default function AboutAffiliateDisclosurePage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Affiliate disclosure"
      title="Affiliate disclosure"
      subtitle="How we use affiliate links and what that means for you."
    >
      <div className="space-y-4 text-sm text-foreground-muted">
        <p>
          Some links on ExpatCopilot are affiliate links. If you sign up or buy through these links, we may earn a
          commission at no extra cost to you. We only recommend services we believe are useful for people moving or
          living abroad.
        </p>
        <p>
          Our recommendations are based on what expats commonly use (e.g. banking, housing, insurance). We do not
          guarantee any provider or outcome. Always check official sources for legal, tax, or immigration requirements.
        </p>
        <p>If you have questions about how we use affiliate links, please contact us.</p>
      </div>

      <p className="mt-8">
        <Link href="/netherlands/moving-to-the-netherlands" className="font-medium text-link hover:text-link-hover hover:underline">
          ← Back to Moving to the Netherlands
        </Link>
      </p>

      <RelatedTrustLinks links={relatedLinks} heading="Related pages" />
    </TrustPageLayout>
  );
}
