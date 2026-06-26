const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@expatlife/content"],
  experimental: {
    serverComponentsExternalPackages: ["pdfkit", "pdf-parse"],
    /** Static files under public/ are CDN-served; do not bundle image trees into serverless functions. */
    outputFileTracingExcludes: {
      "*": ["./public/images/**"],
    },
  },
  async redirects() {
    return [
      {
        source: "/netherlands/taxes/expat-taxes-netherlands",
        destination: "/netherlands/money/expat-taxes-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/expat-taxes-netherlands/",
        destination: "/netherlands/money/expat-taxes-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/how-taxes-work-netherlands",
        destination: "/netherlands/money/how-taxes-work-in-the-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/how-taxes-work-netherlands/",
        destination: "/netherlands/money/how-taxes-work-in-the-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/tax-residency-netherlands",
        destination: "/netherlands/money/tax-residency-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/tax-residency-netherlands/",
        destination: "/netherlands/money/tax-residency-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/tax-return-netherlands",
        destination: "/netherlands/money/tax-return-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/tax-return-netherlands/",
        destination: "/netherlands/money/tax-return-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/30-percent-ruling",
        destination: "/netherlands/money/taxes/30-percent-ruling/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/30-percent-ruling/",
        destination: "/netherlands/money/taxes/30-percent-ruling/",
        permanent: true,
      },
      {
        source: "/netherlands/best/banks-for-expats",
        destination: "/netherlands/money/banking/best-banks-expats/",
        permanent: true,
      },
      {
        source: "/netherlands/best/banks-for-expats/",
        destination: "/netherlands/money/banking/best-banks-expats/",
        permanent: true,
      },
      {
        source: "/netherlands/living/transport-basics",
        destination: "/netherlands/living/getting-around/",
        permanent: true,
      },
      {
        source: "/netherlands/living/transport-basics/",
        destination: "/netherlands/living/getting-around/",
        permanent: true,
      },
      {
        source: "/netherlands/living/utilities",
        destination: "/netherlands/utilities/utilities-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/utilities/",
        destination: "/netherlands/utilities/utilities-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/energy-and-water",
        destination: "/netherlands/utilities/energy-and-water-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/energy-and-water/",
        destination: "/netherlands/utilities/energy-and-water-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/internet-and-mobile",
        destination: "/netherlands/utilities/internet-and-mobile-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/internet-and-mobile/",
        destination: "/netherlands/utilities/internet-and-mobile-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/municipality-services",
        destination: "/netherlands/practical-life/municipality-services-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/municipality-services/",
        destination: "/netherlands/practical-life/municipality-services-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/registering-your-address",
        destination: "/netherlands/practical-life/registering-your-address-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/registering-your-address/",
        destination: "/netherlands/practical-life/registering-your-address-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/practical-life/address-registration-netherlands",
        destination: "/netherlands/practical-life/registering-your-address-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/practical-life/address-registration-netherlands/",
        destination: "/netherlands/practical-life/registering-your-address-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/register-address-netherlands",
        destination: "/netherlands/practical-life/registering-your-address-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/register-address-netherlands/",
        destination: "/netherlands/practical-life/registering-your-address-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/waste-and-recycling",
        destination: "/netherlands/practical-life/waste-and-recycling-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/waste-and-recycling/",
        destination: "/netherlands/practical-life/waste-and-recycling-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/parking-and-local-permits",
        destination: "/netherlands/practical-life/parking-and-local-permits-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/parking-and-local-permits/",
        destination: "/netherlands/practical-life/parking-and-local-permits-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/subscriptions-and-cancellations",
        destination: "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/subscriptions-and-cancellations/",
        destination: "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/privacy-and-safety-basics",
        destination: "/netherlands/practical-life/privacy-and-safety-basics-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/privacy-and-safety-basics/",
        destination: "/netherlands/practical-life/privacy-and-safety-basics-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/housing-costs",
        destination: "/netherlands/housing/housing-costs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/housing-costs/",
        destination: "/netherlands/housing/housing-costs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/rental-contracts-and-deposits",
        destination: "/netherlands/housing/rental-contracts-and-deposits-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/rental-contracts-and-deposits/",
        destination: "/netherlands/housing/rental-contracts-and-deposits-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/community-basics",
        destination: "/netherlands/life/community-basics-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/community-basics/",
        destination: "/netherlands/life/community-basics-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/living/housing",
        destination: "/netherlands/housing/",
        permanent: true,
      },
      {
        source: "/netherlands/living/housing/",
        destination: "/netherlands/housing/",
        permanent: true,
      },
      {
        source: "/netherlands/utilities-in-netherlands",
        destination: "/netherlands/utilities/utilities-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/utilities-in-netherlands/",
        destination: "/netherlands/utilities/utilities-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/housing/tools/utilities-services-comparison-tool",
        destination: "/netherlands/living/tools/utilities-services-comparison/",
        permanent: true,
      },
      {
        source: "/netherlands/housing/tools/utilities-services-comparison-tool/",
        destination: "/netherlands/living/tools/utilities-services-comparison/",
        permanent: true,
      },
      {
        source: "/netherlands/work/tools/job-offer-comparison-tool",
        destination: "/netherlands/work/tools/job-offer-comparison/",
        permanent: true,
      },
      {
        source: "/netherlands/work/tools/job-offer-comparison-tool/",
        destination: "/netherlands/work/tools/job-offer-comparison/",
        permanent: true,
      },
      {
        source: "/netherlands/work/twv-work-permit",
        destination: "/netherlands/moving/twv-work-permit/",
        permanent: true,
      },
      {
        source: "/netherlands/work/twv-work-permit/",
        destination: "/netherlands/moving/twv-work-permit/",
        permanent: true,
      },
      {
        source: "/netherlands/work/changing-jobs-netherlands",
        destination: "/netherlands/moving/changing-jobs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/changing-jobs-netherlands/",
        destination: "/netherlands/moving/changing-jobs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/resigning-job-netherlands",
        destination: "/netherlands/moving/resigning-job-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/resigning-job-netherlands/",
        destination: "/netherlands/moving/resigning-job-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/layoffs-netherlands",
        destination: "/netherlands/moving/layoffs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/layoffs-netherlands/",
        destination: "/netherlands/moving/layoffs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/average-salary-netherlands",
        destination: "/netherlands/taxes/average-salary-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/average-salary-netherlands/",
        destination: "/netherlands/taxes/average-salary-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/salary-negotiation-netherlands",
        destination: "/netherlands/jobs/salary-negotiation-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/salary-negotiation-netherlands/",
        destination: "/netherlands/jobs/salary-negotiation-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/minimum-wage-netherlands",
        destination: "/netherlands/jobs/minimum-wage-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/minimum-wage-netherlands/",
        destination: "/netherlands/jobs/minimum-wage-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/expat-salary-netherlands",
        destination: "/netherlands/jobs/expat-salary-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/expat-salary-netherlands/",
        destination: "/netherlands/jobs/expat-salary-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/employee-benefits-netherlands",
        destination: "/netherlands/jobs/employee-benefits-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/employee-benefits-netherlands/",
        destination: "/netherlands/jobs/employee-benefits-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/finding-jobs-netherlands",
        destination: "/netherlands/jobs/finding-jobs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/finding-jobs-netherlands/",
        destination: "/netherlands/jobs/finding-jobs-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/employment-contract-netherlands",
        destination: "/netherlands/jobs/employment-contract-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/employment-contract-netherlands/",
        destination: "/netherlands/jobs/employment-contract-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/probation-period-netherlands",
        destination: "/netherlands/jobs/probation-period-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/probation-period-netherlands/",
        destination: "/netherlands/jobs/probation-period-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/notice-period-netherlands",
        destination: "/netherlands/jobs/notice-period-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/notice-period-netherlands/",
        destination: "/netherlands/jobs/notice-period-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/employee-rights-netherlands",
        destination: "/netherlands/jobs/employee-rights-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/employee-rights-netherlands/",
        destination: "/netherlands/jobs/employee-rights-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/work-culture-netherlands",
        destination: "/netherlands/jobs/dutch-workplace-culture/",
        permanent: true,
      },
      {
        source: "/netherlands/work/work-culture-netherlands/",
        destination: "/netherlands/jobs/dutch-workplace-culture/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-directness-at-work",
        destination: "/netherlands/jobs/dutch-directness-at-work/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-directness-at-work/",
        destination: "/netherlands/jobs/dutch-directness-at-work/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-social-norms",
        destination: "/netherlands/life/dutch-social-norms/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-social-norms/",
        destination: "/netherlands/life/dutch-social-norms/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dating-in-the-netherlands",
        destination: "/netherlands/life/dating-in-the-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dating-in-the-netherlands/",
        destination: "/netherlands/life/dating-in-the-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/making-dutch-friends",
        destination: "/netherlands/life/making-dutch-friends/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/making-dutch-friends/",
        destination: "/netherlands/life/making-dutch-friends/",
        permanent: true,
      },
      {
        source: "/netherlands/living/making-dutch-friends",
        destination: "/netherlands/life/making-dutch-friends/",
        permanent: true,
      },
      {
        source: "/netherlands/living/making-dutch-friends/",
        destination: "/netherlands/life/making-dutch-friends/",
        permanent: true,
      },
      {
        source: "/netherlands/life/making-friends",
        destination: "/netherlands/life/making-dutch-friends/",
        permanent: true,
      },
      {
        source: "/netherlands/life/making-friends/",
        destination: "/netherlands/life/making-dutch-friends/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-holidays-and-traditions",
        destination: "/netherlands/life/dutch-holidays-and-traditions/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-holidays-and-traditions/",
        destination: "/netherlands/life/dutch-holidays-and-traditions/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-birthday-traditions",
        destination: "/netherlands/life/dutch-birthday-traditions/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-birthday-traditions/",
        destination: "/netherlands/life/dutch-birthday-traditions/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-etiquette",
        destination: "/netherlands/life/dutch-etiquette/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-etiquette/",
        destination: "/netherlands/life/dutch-etiquette/",
        permanent: true,
      },
      {
        source: "/netherlands/living/culture-etiquette",
        destination: "/netherlands/life/dutch-etiquette/",
        permanent: true,
      },
      {
        source: "/netherlands/living/culture-etiquette/",
        destination: "/netherlands/life/dutch-etiquette/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-humour",
        destination: "/netherlands/life/dutch-humour/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-humour/",
        destination: "/netherlands/life/dutch-humour/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-culture",
        destination: "/netherlands/life/dutch-culture/",
        permanent: true,
      },
      {
        source: "/netherlands/culture/dutch-culture/",
        destination: "/netherlands/life/dutch-culture/",
        permanent: true,
      },
      {
        source: "/netherlands/work/freelancing-netherlands",
        destination: "/netherlands/jobs/freelancing-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/freelancing-netherlands/",
        destination: "/netherlands/jobs/freelancing-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/contractor-vs-employee-netherlands",
        destination: "/netherlands/jobs/contractor-vs-employee-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/contractor-vs-employee-netherlands/",
        destination: "/netherlands/jobs/contractor-vs-employee-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/zzp-netherlands",
        destination: "/netherlands/business/zzp-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/zzp-netherlands/",
        destination: "/netherlands/business/zzp-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/pension-netherlands",
        destination: "/netherlands/jobs/pension-netherlands-expats/",
        permanent: true,
      },
      {
        source: "/netherlands/work/pension-netherlands/",
        destination: "/netherlands/jobs/pension-netherlands-expats/",
        permanent: true,
      },
      {
        source: "/netherlands/work/holiday-allowance-netherlands",
        destination: "/netherlands/jobs/holiday-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/holiday-allowance-netherlands/",
        destination: "/netherlands/jobs/holiday-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/bonus-tax-netherlands",
        destination: "/netherlands/taxes/bonus-tax-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/bonus-tax-netherlands/",
        destination: "/netherlands/taxes/bonus-tax-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/healthcare-allowance",
        destination: "/netherlands/taxes/healthcare-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/healthcare-allowance/",
        destination: "/netherlands/taxes/healthcare-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/rent-allowance",
        destination: "/netherlands/taxes/rent-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/rent-allowance/",
        destination: "/netherlands/taxes/rent-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/childcare-allowance",
        destination: "/netherlands/taxes/childcare-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/taxes/childcare-allowance/",
        destination: "/netherlands/taxes/childcare-allowance-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/buying-house-netherlands",
        destination: "/netherlands/housing/buying-a-house-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/buying-house-netherlands/",
        destination: "/netherlands/housing/buying-a-house-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/mortgage-netherlands-expats",
        destination: "/netherlands/housing/mortgages-netherlands-expats/",
        permanent: true,
      },
      {
        source: "/netherlands/mortgage-netherlands-expats/",
        destination: "/netherlands/housing/mortgages-netherlands-expats/",
        permanent: true,
      },
      {
        source: "/netherlands/property-tax-netherlands",
        destination: "/netherlands/taxes/property-tax-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/property-tax-netherlands/",
        destination: "/netherlands/taxes/property-tax-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/buy-vs-rent-netherlands",
        destination: "/netherlands/housing/buy-vs-rent-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/buy-vs-rent-netherlands/",
        destination: "/netherlands/housing/buy-vs-rent-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/double-taxation-netherlands",
        destination: "/netherlands/taxes/double-taxation-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/double-taxation-netherlands/",
        destination: "/netherlands/taxes/double-taxation-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/average-salary-netherlands",
        destination: "/netherlands/taxes/average-salary-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/average-salary-netherlands/",
        destination: "/netherlands/taxes/average-salary-netherlands/",
        permanent: true,
      },
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
        source: "/netherlands/health/tools/healthcare-allowance-estimator",
        destination: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
        permanent: true,
      },
      {
        source: "/netherlands/health/tools/healthcare-allowance-estimator/",
        destination: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
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
        source: "/netherlands/visas-residency",
        destination: "/netherlands/moving/visas-residency/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/",
        destination: "/netherlands/moving/visas-residency/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/residence-permits",
        destination: "/netherlands/moving/residence-permits/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/residence-permits/",
        destination: "/netherlands/moving/residence-permits/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/extensions-changes",
        destination: "/netherlands/moving/extensions-changes/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/extensions-changes/",
        destination: "/netherlands/moving/extensions-changes/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/status-changes",
        destination: "/netherlands/moving/status-changes/",
        permanent: true,
      },
      {
        source: "/netherlands/visas-residency/status-changes/",
        destination: "/netherlands/moving/status-changes/",
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
        source: "/netherlands/work/work-permit-netherlands",
        destination: "/netherlands/work/working-in-netherlands/",
        permanent: true,
      },
      {
        source: "/netherlands/work/work-permit-netherlands/",
        destination: "/netherlands/work/working-in-netherlands/",
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

module.exports = process.env.EXPATOS_SKIP_CONTENTLAYER === "true" ? nextConfig : withContentlayer(nextConfig);
