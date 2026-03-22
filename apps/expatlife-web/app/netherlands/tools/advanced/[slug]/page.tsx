import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

export const revalidate = 3600;
export const metadata = {
  title: "Advanced AI Tool (Coming Soon)",
  description: "Advanced AI tool page for future premium ExpatCopilot experiences.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("premium-later");
}

export default async function AdvancedToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("premium-later", slug);
}
