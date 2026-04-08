const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@expatlife/content"],
  experimental: {
    serverComponentsExternalPackages: ["pdfkit", "pdf-parse"],
  },
  async redirects() {
    return [
      {
        source: "/netherlands/money/tools/30-ruling-calculator",
        destination: "/netherlands/taxes/tools/30-ruling-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/30-ruling-calculator/",
        destination: "/netherlands/taxes/tools/30-ruling-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/dutch-salary-net-calculator",
        destination: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/dutch-salary-net-calculator/",
        destination: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/double-tax-awareness-tool",
        destination: "/netherlands/taxes/tools/double-tax-awareness-tool/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/double-tax-awareness-tool/",
        destination: "/netherlands/taxes/tools/double-tax-awareness-tool/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/expat-cost-of-living-calculator",
        destination: "/netherlands/money/tools/cost-of-living-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/expat-cost-of-living-calculator/",
        destination: "/netherlands/money/tools/cost-of-living-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/cost-of-living-calculator",
        destination: "/netherlands/money/tools/cost-of-living-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/cost-of-living-calculator/",
        destination: "/netherlands/money/tools/cost-of-living-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/rent-affordability-calculator",
        destination: "/netherlands/housing/tools/rent-affordability-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/money/tools/rent-affordability-calculator/",
        destination: "/netherlands/housing/tools/rent-affordability-calculator/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/student-residence-permit",
        destination: "/netherlands/visa/student-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/student-residence-permit/",
        destination: "/netherlands/visa/student-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/study-visa",
        destination: "/netherlands/visa/student-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/study-visa/",
        destination: "/netherlands/visa/student-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/european-blue-card",
        destination: "/netherlands/visa/eu-blue-card/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/european-blue-card/",
        destination: "/netherlands/visa/eu-blue-card/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/daft-visa",
        destination: "/netherlands/visa/dutch-american-friendship-treaty/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/daft-visa/",
        destination: "/netherlands/visa/dutch-american-friendship-treaty/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/partner-family",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/partner-family/",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/partner-visa",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/partner-visa/",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/family-reunification",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/family-reunification/",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/spouse-visa",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/spouse-visa/",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/family-permit",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/family-permit/",
        destination: "/netherlands/visa/partner-family-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/self-employed-residence-permit",
        destination: "/netherlands/visa/self-employed-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/self-employed-residence-permit/",
        destination: "/netherlands/visa/self-employed-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/entrepreneur-visa",
        destination: "/netherlands/visa/self-employed-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/entrepreneur-visa/",
        destination: "/netherlands/visa/self-employed-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/freelancer-visa",
        destination: "/netherlands/visa/self-employed-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/visa/freelancer-visa/",
        destination: "/netherlands/visa/self-employed-visa/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/moving-to-netherlands-from/us",
        destination: "/netherlands/moving/moving-to-netherlands-from/united-states/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/moving-to-netherlands-from/us/",
        destination: "/netherlands/moving/moving-to-netherlands-from/united-states/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/moving-to-netherlands-from/uk",
        destination: "/netherlands/moving/moving-to-netherlands-from/united-kingdom/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/moving-to-netherlands-from/uk/",
        destination: "/netherlands/moving/moving-to-netherlands-from/united-kingdom/",
        permanent: true,
      },
      // Country guides live under /moving/.../{slug}/; the browse hub is only at /moving-to-netherlands-from/.
      {
        source: "/netherlands/moving/moving-to-netherlands-from",
        destination: "/netherlands/moving-to-netherlands-from/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/moving-to-netherlands-from/",
        destination: "/netherlands/moving-to-netherlands-from/",
        permanent: true,
      },
      {
        source: "/moving-to-netherlands-from",
        destination: "/netherlands/moving-to-netherlands-from/",
        permanent: true,
      },
      {
        source: "/moving-to-netherlands-from/",
        destination: "/netherlands/moving-to-netherlands-from/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/tools/visa-eligibility-checker",
        destination: "/netherlands/visa-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/tools/visa-eligibility-checker/",
        destination: "/netherlands/visa-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/tools/document-readiness",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/tools/document-readiness/",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/documents-needed-to-move-netherlands",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/documents-needed-to-move-netherlands/",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/moving-documents-checklist",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/moving-documents-checklist/",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/visa-documents-netherlands",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/visa-documents-netherlands/",
        destination: "/netherlands/document-readiness-checker/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/tools/residence-permit-timeline-estimator",
        destination: "/netherlands/visa-timeline-estimator/",
        permanent: true,
      },
      {
        source: "/netherlands/moving/tools/residence-permit-timeline-estimator/",
        destination: "/netherlands/visa-timeline-estimator/",
        permanent: true,
      },
      {
        source: "/netherlands/settling-in-netherlands",
        destination: "/netherlands/after-arriving-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/settling-in-netherlands/",
        destination: "/netherlands/after-arriving-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/can-i-open-bank-account-before-bsn",
        destination: "/netherlands/open-bank-account-netherlands/#bsn",
        permanent: true,
      },
      {
        source: "/netherlands/can-i-open-bank-account-before-bsn/",
        destination: "/netherlands/open-bank-account-netherlands/#bsn",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // `domains` is read reliably on Next 13.5; `remotePatterns` pathname must match the URL path
    // (e.g. `/s2/favicons` alone does not match pattern `/s2/favicons/**`).
    domains: [
      "logo.clearbit.com",
      "logos-api.apistemic.com",
      "www.google.com",
      "res.cloudinary.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com", pathname: "/**" },
      { protocol: "https", hostname: "logos-api.apistemic.com", pathname: "/**" },
      { protocol: "https", hostname: "www.google.com", pathname: "/**" },
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
    ],
  },
  async headers() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/_next/static/:path*",
          headers: [{ key: "Cache-Control", value: "no-store" }],
        },
      ];
    }

    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
