import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/premium/Container";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    const subject = encodeURIComponent("Newsletter subscription request");
    const body = encodeURIComponent(`Please subscribe this email to the Qwickin newsletter: ${trimmedEmail}`);
    window.location.href = `mailto:info@qwickin.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="border-t border-white/10 bg-[#212121] py-16">
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
          <form className="mt-3 flex gap-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-xl border border-white/20 bg-[#1A1A1A] px-3 py-2 text-sm text-white placeholder:text-[#8a8a8a]"
            />
            <button
              type="submit"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              Join
            </button>
          </form>
        </div>
      </Container>

      <Container className="mt-10 border-t border-white/10 pt-6 text-sm text-[#8f8f8f]">
        © 2026 Qwickin IT Services. All rights reserved.
      </Container>
    </footer>
  );
};
