import Link from "next/link";
import { Container } from "@/components/premium/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Container className="flex flex-col items-center gap-6 py-24 text-center">
        <img
          src="/logo/qwickin_logo_transparent_fixed.png"
          alt="QwickIn"
          className="h-10 w-auto bg-transparent object-contain mix-blend-multiply"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">404</p>
          <h1 className="mt-3 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl">Page not found</h1>
          <p className="mt-4 max-w-md text-base text-[#555555]">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-[4px] bg-[#7CBD5E] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-all duration-200 hover:bg-[#9ed885] hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-[4px] border border-[#E5E5E5] bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors duration-200 hover:border-[#7CBD5E]/40 hover:bg-[#F8F9FA]"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
}
