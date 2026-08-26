import type { Metadata } from "next";
import { pageMetadataTitle, buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LayoffsNetherlandsView } from "@/src/components/moving/layoffs-netherlands/LayoffsNetherlandsView";
import {
  LAYOFFS_NETHERLANDS_CANONICAL,
  LAYOFFS_NETHERLANDS_SEO_DESCRIPTION,
} from "@/src/components/moving/layoffs-netherlands/layoffsNetherlandsContent";
import { HSM_JOB_LOSS_CLUSTER_PUBLISH_DATE } from "@/src/components/moving/work-permits-job-changes-cluster/hsmJobLossClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

/** Short title — root layout `template` adds `| ExpatCopilot` (avoid double suffix). */
const META_TITLE = "Layoffs in the Netherlands";

export const metadata: Metadata = buildSocialMetadata({
  title: META_TITLE,
  description: LAYOFFS_NETHERLANDS_SEO_DESCRIPTION,
  path: LAYOFFS_NETHERLANDS_CANONICAL,
  ogType: "article",
  publishGate: { publish: true, publishDate: HSM_JOB_LOSS_CLUSTER_PUBLISH_DATE },
});

export default function NetherlandsMovingLayoffsPage() {
  return <LayoffsNetherlandsView />;
}
