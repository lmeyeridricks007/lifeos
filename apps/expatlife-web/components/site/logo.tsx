import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/netherlands" className="inline-flex items-center gap-3">
      <Image src="/brand/logo-mark.svg" alt="ExpatCopilot" width={34} height={34} priority />
      <span className="text-lg font-semibold tracking-tight text-slate-900">ExpatCopilot</span>
    </Link>
  );
}
