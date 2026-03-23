import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Citizenship Tool (Coming Soon)",
  description: "Tool page for citizenship and long-term stay planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("citizenship");
}

export default async function CitizenshipToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("citizenship", slug);
}
