import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/premium/Container";

export const CTASection = () => {
  return (
    <section className="py-24">
      <Container>
        <div
          className="rounded-3xl px-8 py-16 text-center md:px-16 md:py-[100px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(157, 78, 221, 0.28) 0%, rgba(76, 201, 240, 0.2) 100%), #151621",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Ready to Transform Your Business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#c3c3c3] md:text-lg">
            Schedule a free consultation with our experts today.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-105"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 0 36px rgba(157, 78, 221, 0.35)" }}
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
