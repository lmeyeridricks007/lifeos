import Link from "next/link";
import { SectionBlock } from "@/components/page/pillar-template";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { isRouteLive } from "@/src/lib/routes/routeStatus";
import { AffiliateSection } from "./AffiliateSection";
import { SalaryExamples } from "./SalaryExamples";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";

type Props = {
  basePath: string;
  taxAdvisorCards: PageRecommendedProviderCard[];
  payrollCards: PageRecommendedProviderCard[];
  relocationCards: PageRecommendedProviderCard[];
  officialSources: readonly { label: string; href: string }[];
};

/**
 * Below-the-fold tool sections (examples, affiliate grid, official links).
 * Lazy-loaded from the page route to keep the initial RSC payload smaller.
 */
export default function SalaryNetBelowFold({
  basePath,
  taxAdvisorCards,
  payrollCards,
  relocationCards,
  officialSources,
}: Props) {
  const servicesHub = `${basePath}/services/`;
  const payslipDecoderHref = `${basePath}/work/tools/payslip-decoder/`;
  const payslipDecoderLive = isRouteLive(payslipDecoderHref);

  return (
    <>
      <SectionBlock id="example-scenarios" title="Example scenarios" compact className="scroll-mt-24 pt-2">
        <p className="mb-4 text-sm text-slate-600">
          Use these as mental models — plug similar numbers into the calculator to see how the indicative net moves.
        </p>
        <SalaryExamples />
      </SectionBlock>

      <SectionBlock id="recommended-services" title="Need help understanding your salary?" compact className="scroll-mt-24 pt-2">
        <p className="mb-6 text-sm text-slate-600">
          After compare and download, the tool shows a compact <strong>Optimize your salary setup</strong> strip (tax, payroll, relocation,
          banks). Below is the same theme with larger cards if you want to dig deeper — confirm scope and fees with any provider.
        </p>
        <AffiliateSection
          taxAdvisorCards={taxAdvisorCards}
          payrollCards={payrollCards}
          relocationCards={relocationCards}
          servicesHubHref={servicesHub}
        />
      </SectionBlock>

      <SectionBlock id="official-sources" title="Official sources" className="scroll-mt-24">
        <LastUpdated date="April 2026" className="mb-4 text-slate-600" />
        <p className="mb-4 text-sm text-slate-600">
          This calculator does not read your tax file or employer systems — it applies public planning parameters only.
        </p>
        <ul className="space-y-2">
          {officialSources.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-brand-600 hover:underline"
              >
                {s.label} →
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-600">
          Related on ExpatCopilot:{" "}
          <Link href={`${basePath}/taxes/`} className="font-medium text-brand-600 hover:underline">
            Dutch taxes hub
          </Link>
          {" · "}
          <Link href={`${basePath}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:underline">
            30% ruling calculator
          </Link>
          {" · "}
          {payslipDecoderLive ? (
            <Link href={payslipDecoderHref} className="font-medium text-brand-600 hover:underline">
              Payslip decoder
            </Link>
          ) : (
            <span className="text-slate-500">Payslip decoder (coming soon)</span>
          )}
          {" · "}
          <Link href={`${basePath}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:underline">
            Moving to the Netherlands
          </Link>
          .
        </p>
      </SectionBlock>
    </>
  );
}
