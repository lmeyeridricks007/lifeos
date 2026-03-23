import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
export const metadata: Metadata = {
  title: String("Affiliate disclosure | ExpatCopilot"),
  description: String("How we use affiliate links and what that means for you."),
  alternates: { canonical: String("/about/affiliate-disclosure") },
};

export default function AffiliateDisclosurePage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Affiliate disclosure
        </h1>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <p>
            Some links on ExpatCopilot are affiliate links. If you sign up or buy through these links,
            we may earn a commission at no extra cost to you. We only recommend services we believe
            are useful for people moving or living abroad.
          </p>
          <p>
            Our recommendations are based on what expats commonly use (e.g. banking, housing,
            insurance). We do not guarantee any provider or outcome. Always check official sources
            for legal, tax, or immigration requirements.
          </p>
          <p>
            If you have questions about how we use affiliate links, please contact us.
          </p>
        </div>
        <p className="mt-8">
          <Link href="/netherlands/moving-to-the-netherlands" className="font-medium text-brand-700 hover:underline">
            ← Back to Moving to the Netherlands
          </Link>
        </p>
      </div>
    </Container>
  );
}
