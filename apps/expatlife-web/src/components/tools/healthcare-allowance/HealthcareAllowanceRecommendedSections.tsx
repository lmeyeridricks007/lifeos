"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  HealthcareAllowanceServiceBundles,
  PageRecommendedProviderCard,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";

function ServiceGrid({ title, description, cards }: { title: string; description?: string; cards: PageRecommendedProviderCard[] }) {
  if (!cards.length) return null;
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold tracking-tight text-copilot-text-primary">{title}</h3>
      {description ? <p className="text-sm text-copilot-text-secondary">{description}</p> : null}
      <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((service) => (
          <a
            key={service.name}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col rounded-xl border border-copilot-primary/[0.1] bg-copilot-surface p-4 shadow-expatos-sm transition hover:border-copilot-primary/25 hover:shadow-expatos-md sm:p-5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft p-2">
                {service.logo ? (
                  <Image
                    src={service.logo.src}
                    alt={service.logo.alt}
                    width={44}
                    height={44}
                    sizes="44px"
                    className="h-7 w-auto object-contain"
                  />
                ) : (
                  <span className="text-xs font-semibold text-copilot-text-secondary" aria-hidden>
                    {service.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-copilot-text-primary group-hover:text-copilot-primary">{service.name}</p>
                <p className="mt-0.5 text-sm text-copilot-text-secondary">{service.useFor}</p>
              </div>
            </div>
            <p className="mt-2 border-t border-copilot-primary/[0.08] pt-2 text-xs font-medium text-copilot-text-primary">
              {service.priceRange ?? "Check provider for current pricing."}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

const BUDGET_TOOL_LINKS = [
  {
    href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
    title: "Dutch salary → net",
    body: "Ground income assumptions before you test zorgtoeslag ceilings.",
  },
  {
    href: "/netherlands/money/tools/cost-of-living-calculator/",
    title: "Cost of living",
    body: "Monthly budget bands next to insurance and allowance planning.",
  },
  {
    href: "/netherlands/housing/tools/rent-affordability-calculator/",
    title: "Rent affordability",
    body: "Stress-test housing cash flow alongside net premium after allowance.",
  },
  {
    href: "/netherlands/taxes/tools/30-ruling-calculator/",
    title: "30% ruling planner",
    body: "Separate expat tax facility check — not a substitute for toeslagen rules.",
  },
] as const;

function BudgetToolsOnSite() {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold tracking-tight text-copilot-text-primary">Budget tools on ExpatCopilot</h3>
      <p className="text-sm text-copilot-text-secondary">
        Use these together with this page: none of them replace Dienst Toeslagen, but they help you keep income, rent, and monthly spend consistent in one planning story.
      </p>
      <div className="grid min-w-0 gap-3 sm:grid-cols-2">
        {BUDGET_TOOL_LINKS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex min-w-0 flex-col rounded-xl border border-copilot-primary/[0.12] bg-copilot-surface p-4 shadow-expatos-sm transition hover:border-copilot-primary/25 hover:shadow-expatos-md sm:p-5"
          >
            <span className="font-semibold text-copilot-text-primary group-hover:text-copilot-primary">{t.title} →</span>
            <span className="mt-1 text-sm text-copilot-text-secondary">{t.body}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HealthcareAllowanceRecommendedSections({ bundles }: { bundles: HealthcareAllowanceServiceBundles }) {
  return (
    <div className="space-y-10">
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        Shortlists for common next steps after you estimate allowance: <strong>compare Dutch basic insurance</strong>, get <strong>tax or benefits context</strong>, book{" "}
        <strong>relocation help</strong>, or open a <strong>bank account</strong> for premiums and rent. Ordering is editorial — not pay-to-rank. Some links use affiliate or referral programs; they do not change this tool&apos;s math.
      </p>
      <ServiceGrid
        title="Dutch health insurer comparison & providers"
        description="Compare gross premiums and cover; then treat zorgtoeslag as a separate planning line until the government confirms your award."
        cards={bundles.health}
      />
      <ServiceGrid
        title="Tax advisors & benefits context"
        description="When income, payroll, cross-border pay, or household type are unclear, a qualified adviser beats any online calculator."
        cards={bundles.tax}
      />
      <ServiceGrid
        title="Relocation help"
        description="Coordinated moves, housing search, schools, and employer-sponsored arrivals — confirm scope and city coverage."
        cards={bundles.relocation}
      />
      <ServiceGrid title="Bank setup" description="Current accounts for salary, landlord deposits, and insurer direct debits." cards={bundles.banks} />
      <BudgetToolsOnSite />
      <div className="rounded-xl border border-dashed border-copilot-primary/20 bg-copilot-bg-soft/60 p-4 text-sm leading-relaxed text-copilot-text-secondary md:p-5">
        <p>
          Arrival timing affects insurance months and allowance proration — see{" "}
          <Link href="/netherlands/moving-to-the-netherlands/" className="font-semibold text-copilot-primary hover:underline">
            Moving to the Netherlands
          </Link>
          ,{" "}
          <Link href="/netherlands/settling-in-netherlands/" className="font-semibold text-copilot-primary hover:underline">
            Settling in the Netherlands
          </Link>
          , and{" "}
          <Link href="/netherlands/bsn-registration/" className="font-semibold text-copilot-primary hover:underline">
            BSN registration
          </Link>{" "}
          for first-year context alongside this estimator.
        </p>
      </div>
    </div>
  );
}
