import { Link } from "react-router-dom";
import { Container } from "@/components/premium/Container";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#151621] py-16">
      <Container className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Qwickin</h3>
          <p className="text-sm text-[#b8b8b8]">
            IT solutions, cybersecurity, and custom applications for Melbourne businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#b8b8b8]">
            <li>
              <Link className="link-underline" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link-underline" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="link-underline" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#b8b8b8]">
            <li>
              <a className="link-underline" href="tel:+61424127808">
                +61 424 127 808
              </a>
            </li>
            <li>
              <a className="link-underline" href="mailto:info@qwickin.com">
                info@qwickin.com
              </a>
            </li>
            <li>Melbourne, Victoria, Australia</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Newsletter</h4>
          <p className="mt-4 text-sm text-[#b8b8b8]">Get updates on services and case studies.</p>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-white/20 bg-[#0a0b14] px-3 py-2 text-sm text-white placeholder:text-[#8a8a8a]"
            />
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              Join
            </button>
          </div>
        </div>
      </Container>

      <Container className="mt-10 border-t border-white/10 pt-6 text-sm text-[#8f8f8f]">
        © 2026 Qwickin IT Services. All rights reserved.
      </Container>
    </footer>
  );
};
