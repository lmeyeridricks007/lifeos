import Link from "next/link";
import { UtilitiesServicesMethodology } from "./UtilitiesServicesMethodology";

const BASE = "/netherlands";

const sectionClass =
  "scroll-mt-28 rounded-2xl border border-copilot-primary/10 bg-copilot-surface/80 p-5 shadow-expatos-sm md:scroll-mt-32 md:p-6";

const h2Class = "text-lg font-semibold text-copilot-text-primary";

export function UtilitiesServicesGuideContent() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-copilot-text-secondary">
      <p>
        This page pairs a <strong className="text-copilot-text-primary">calculator</strong> with practical Netherlands context. Use it when
        you are budgeting a move, comparing cities, or reading a lease that says “exclusive” or “inclusive” without spelling out every line
        item. For mandatory{" "}
        <Link href={`${BASE}/health-insurance-netherlands/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
          basic health insurance
        </Link>
        , see our dedicated guide — this tool focuses on household utilities and related services.
      </p>

      <section id="utilities-choose-yourself" className={sectionClass}>
        <h2 className={h2Class}>What utilities you usually choose yourself</h2>
        <p className="mt-3">
          In many Dutch rentals you contract <strong className="text-copilot-text-primary">electricity</strong> and often{" "}
          <strong className="text-copilot-text-primary">gas</strong> (unless the home is all-electric or on district/block heat).{" "}
          <strong className="text-copilot-text-primary">Home internet</strong> and <strong className="text-copilot-text-primary">mobile</strong>{" "}
          are typically consumer markets: you compare speed tiers, contract length, and hardware. Optional{" "}
          <strong className="text-copilot-text-primary">contents (inboedel)</strong> and{" "}
          <strong className="text-copilot-text-primary">liability (aansprakelijkheid)</strong> insurance are also shopped like other retail
          products — cheap premiums can hide tight limits.
        </p>
        <p className="mt-3">
          Start from the{" "}
          <Link href={`${BASE}/living/utilities/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            utilities in the Netherlands
          </Link>{" "}
          hub, then use the calculator above for numeric bands.
        </p>
      </section>

      <section id="utilities-local-fixed" className={sectionClass}>
        <h2 className={h2Class}>What charges are usually local or fixed</h2>
        <p className="mt-3">
          <strong className="text-copilot-text-primary">Drinking water and wastewater</strong> typically run through your regional water
          company — not something you “switch” like energy. <strong className="text-copilot-text-primary">Gemeente-linked household charges</strong>{" "}
          (waste collection, sewer contributions, and similar) follow local rules and your situation; letters often arrive on their own
          schedule. The municipality line in the tool is a <em>monthly planning band</em>, not your assessment notice.
        </p>
        <p className="mt-3">
          Use the{" "}
          <Link href={`${BASE}/tools/city-comparison/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Netherlands city comparison tool
          </Link>{" "}
          for rent and lifestyle context; pair it with this planner when you are choosing where to live.
        </p>
      </section>

      <section id="utilities-landlord-questions" className={sectionClass}>
        <h2 className={h2Class}>What to ask your landlord or housing association (VvE)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Which utilities are included in rent or service costs (energy, water, internet, heat)?</li>
          <li>Whether you sign supplier contracts yourself or the building has a bulk deal.</li>
          <li>How district or block heat is metered and billed if applicable.</li>
          <li>Whether you need permission for fiber installation or drilling for a modem location.</li>
          <li>How gemeente or water charges are passed through — direct to you or via the landlord.</li>
        </ul>
        <p className="mt-3">
          Cross-check with our{" "}
          <Link href={`${BASE}/living/rental-market/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            rental market guide
          </Link>{" "}
          and{" "}
          <Link href={`${BASE}/housing/tools/rent-affordability-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            rent affordability calculator
          </Link>{" "}
          so rent + utilities stay realistic.
        </p>
      </section>

      <section id="utilities-first-month-higher" className={sectionClass}>
        <h2 className={h2Class}>Why first-month setup costs are higher</h2>
        <p className="mt-3">
          Even when recurring monthly lines look stable, month one often stacks <strong className="text-copilot-text-primary">activation</strong>
          , <strong className="text-copilot-text-primary">installation visits</strong>, <strong className="text-copilot-text-primary">router or modem</strong>{" "}
          costs, <strong className="text-copilot-text-primary">overlapping leases</strong>, and{" "}
          <strong className="text-copilot-text-primary">misaligned first invoices</strong>. The calculator splits these into explicit buckets so
          you can align them with your{" "}
          <Link href={`${BASE}/moving/tools/moving-checklist/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            moving checklist
          </Link>{" "}
          and{" "}
          <Link href={`${BASE}/moving/tools/first-90-days/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            first 90 days planner
          </Link>
          .
        </p>
      </section>

      <section id="utilities-contract-checklist" className={sectionClass}>
        <h2 className={h2Class}>What to compare before signing a contract</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-copilot-text-primary">Energy:</strong> tariff type (fixed vs variable), contract length, green mix, and
            exit fees — after you confirm you are the contracting party.
          </li>
          <li>
            <strong className="text-copilot-text-primary">Internet:</strong> speed vs upload, technology at the address, install lead time,
            and whether hardware is rental or purchase.
          </li>
          <li>
            <strong className="text-copilot-text-primary">Mobile:</strong> data ceiling, EU roaming if you travel, and handset vs SIM-only.
          </li>
          <li>
            <strong className="text-copilot-text-primary">Insurance:</strong> deductibles, theft-away-from-home limits, and liability exclusions
            (sports, drones, etc.).
          </li>
        </ul>
        <p className="mt-3">
          For mobile and broadband shortlists, see{" "}
          <Link href={`${BASE}/services/mobile-connectivity/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            mobile &amp; internet services
          </Link>
          ; for basic health cover, see{" "}
          <Link href={`${BASE}/services/health-insurance/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            health insurance comparison
          </Link>
          .
        </p>
      </section>

      <section id="utilities-move-budget" className={sectionClass}>
        <h2 className={h2Class}>How utilities fit your total move budget</h2>
        <p className="mt-3">
          Treat this tool as one layer of cash-flow planning. Most people combine it with{" "}
          <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            cost of living
          </Link>
          ,{" "}
          <Link href={`${BASE}/housing/tools/rent-affordability-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            rent affordability
          </Link>
          , and — when relevant —{" "}
          <Link href={`${BASE}/family/tools/childcare-cost-estimator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            childcare costs
          </Link>{" "}
          or{" "}
          <Link href={`${BASE}/taxes/tools/healthcare-allowance-estimator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            healthcare allowance (toeslag)
          </Link>
          . If you are negotiating salary, add the{" "}
          <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Dutch salary (net) calculator
          </Link>{" "}
          to translate income into breathing room after rent and household lines.
        </p>
        <p className="mt-3">
          Explore cities systematically via the{" "}
          <Link href={`${BASE}/cities/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Netherlands cities hub
          </Link>{" "}
          and pillar guides under{" "}
          <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            moving to the Netherlands
          </Link>
          .
        </p>
      </section>

      <section id="how-we-estimate-guide" className={sectionClass}>
        <h2 className={h2Class}>How we estimate</h2>
        <p className="mt-3">
          The planner uses <strong className="text-copilot-text-primary">transparent coefficients</strong> (housing, city, usage, heating,
          and setup numerics) — not live supplier APIs. Every category card in your results lists the assumptions string so you can see what
          moved the number. Below is the technical outline for readers who want the full picture.
        </p>
        <div className="mt-4 border-t border-copilot-primary/10 pt-4">
          <UtilitiesServicesMethodology />
        </div>
      </section>

      <section id="what-surprises-expats-guide" className={sectionClass}>
        <h2 className={h2Class}>What often surprises expats (planning view)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-copilot-text-primary">Double contracts:</strong> signing energy or internet while the landlord already
            bundles them in rent or service charges.
          </li>
          <li>
            <strong className="text-copilot-text-primary">Mail you never see:</strong> yearly gemeente or water assessments missed because
            forwarding was not set up.
          </li>
          <li>
            <strong className="text-copilot-text-primary">Building beats postcode:</strong> two flats on the same street can have very
            different energy use because of insulation and systems.
          </li>
          <li>
            <strong className="text-copilot-text-primary">Fiber lead times:</strong> availability is address-specific; the best promo is
            useless if installation slips past your move-in week.
          </li>
          <li>
            <strong className="text-copilot-text-primary">First-month pile-up:</strong> activation and overlap feel like a second deposit even
            when steady-state monthly costs look fine.
          </li>
        </ul>
        <p className="mt-3 text-xs text-copilot-text-secondary">
          Your personalized results include a shorter, dynamic version of this list after you calculate — both sections are complementary.
        </p>
      </section>
    </div>
  );
}
