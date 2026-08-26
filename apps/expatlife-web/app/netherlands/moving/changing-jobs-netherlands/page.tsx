import type { Metadata } from "next";
import { pageMetadataTitle, buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { ChangingJobsNetherlandsView } from "@/src/components/moving/changing-jobs-netherlands/ChangingJobsNetherlandsView";
import {
  CHANGING_JOBS_NETHERLANDS_CANONICAL,
  PAGE_HERO_SUBTITLE,
} from "@/src/components/moving/changing-jobs-netherlands/changingJobsNetherlandsContent";
import { HSM_JOB_LOSS_CLUSTER_PUBLISH_DATE } from "@/src/components/moving/work-permits-job-changes-cluster/hsmJobLossClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Changing Jobs in the Netherlands";
const META_DESCRIPTION = PAGE_HERO_SUBTITLE;

export const metadata: Metadata = buildSocialMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  path: CHANGING_JOBS_NETHERLANDS_CANONICAL,
  ogType: "article",
  publishGate: { publish: true, publishDate: HSM_JOB_LOSS_CLUSTER_PUBLISH_DATE },
});

export default function NetherlandsMovingChangingJobsPage() {
  return <ChangingJobsNetherlandsView />;
}
