import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppClientShell } from "@/app/AppClientShell";
import { getContentVersion } from "@/lib/content-version";
import { cloneSafeMetadata } from "@/lib/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { SiteWideStructuredData } from "@/components/seo/SiteWideStructuredData";

const inter = Inter({ subsets: ["latin"] });

const twitterSite = process.env.NEXT_PUBLIC_TWITTER_SITE?.trim();
const twitterCreator = process.env.NEXT_PUBLIC_TWITTER_CREATOR?.trim();

const rootMeta: Metadata = {
  title: { default: "ExpatCopilot", template: "%s | ExpatCopilot" },
  description:
    "Practical relocation guides, tools, and service discovery for expats moving to the Netherlands — visas, housing, banking, and settling in.",
  applicationName: "ExpatCopilot",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ExpatCopilot",
    title: "ExpatCopilot",
    description:
      "Practical relocation guides, tools, and service discovery for expats moving to the Netherlands — visas, housing, banking, and settling in.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpatCopilot",
    description:
      "Practical relocation guides, tools, and service discovery for expats moving to the Netherlands — visas, housing, banking, and settling in.",
    ...(twitterSite ? { site: twitterSite } : {}),
    ...(twitterCreator ? { creator: twitterCreator } : {}),
  },
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "ExpatCopilot", statusBarStyle: "default" },
  other: { "theme-color": "#0ea5e9" },
};

const cloned = cloneSafeMetadata(rootMeta);

/**
 * `metadataBase` makes relative `openGraph.url` and image paths absolute for crawlers.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://www.expatcopilot.com).
 * Default share image: `app/opengraph-image.tsx` (1200×630 PNG).
 */
export const metadata: Metadata = {
  ...cloned,
  metadataBase: new URL(`${getSiteOrigin()}/`),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contentVersion = await getContentVersion();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Google tag (gtag.js) — match Google’s install snippet verbatim (not next/script). */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F2H1CJD5ES" />
        <script
          // eslint-disable-next-line @next/next/next-script-for-ga, react/no-danger -- Google gtag bootstrap
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F2H1CJD5ES');
`,
          }}
        />
        <SiteWideStructuredData />
      </head>
      <body className={`min-h-screen antialiased ${inter.className}`}>
        <AppClientShell contentVersion={contentVersion}>{children}</AppClientShell>
      </body>
    </html>
  );
}
