import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-slate-600">
          The page you were looking for may have moved or may not exist.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Go to homepage
          </Link>
          <Link
            href="/netherlands/after-arriving-netherlands/"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Explore Netherlands guides
          </Link>
          <Link
            href="/netherlands/services/"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Browse services
          </Link>
          <Link
            href="/netherlands/cities/"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Browse cities
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </div>
  );
}
