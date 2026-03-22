import Link from "next/link";

type Props = {
  text: string;
  /** Optional link to global disclosure page */
  disclosurePageHref?: string;
};

export function AffiliateDisclosure({ text, disclosurePageHref = "/about/affiliate-disclosure" }: Props) {
  return (
    <p className="mt-4 text-xs text-slate-500">
      {text}
      {disclosurePageHref ? (
        <>
          {" "}
          <Link href={disclosurePageHref} className="underline hover:text-slate-700">
            Learn more
          </Link>
        </>
      ) : null}
    </p>
  );
}
