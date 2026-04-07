import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  /** Optional link to global disclosure page */
  disclosurePageHref?: string;
  /** Align with Netherlands moving-guide surfaces */
  variant?: "default" | "copilot";
};

export function AffiliateDisclosure({
  text,
  disclosurePageHref = "/about/affiliate-disclosure",
  variant = "default",
}: Props) {
  const copilot = variant === "copilot";
  return (
    <p className={cn("mt-4 text-xs", copilot ? "text-copilot-text-muted" : "text-slate-500")}>
      {text}
      {disclosurePageHref ? (
        <>
          {" "}
          <Link
            href={disclosurePageHref}
            className={
              copilot
                ? "font-semibold text-copilot-primary underline hover:text-copilot-primary-strong"
                : "underline hover:text-slate-700"
            }
          >
            Learn more
          </Link>
        </>
      ) : null}
    </p>
  );
}
