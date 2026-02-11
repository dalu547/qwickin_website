import { Link } from "react-router-dom";
import logo from "@/assets/qwickin_logo.png";
import { Container } from "@/components/premium/Container";
import { ImagePlaceholder } from "@/components/premium/ImagePlaceholder";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-16">
      <Container className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="Qwickin logo" className="h-8 w-auto" />
            <span className="text-base font-semibold text-slate-900">QWICKIN</span>
          </Link>
          <p className="text-sm text-slate-600">
            Technology and digital solutions that help businesses move faster, operate smarter, and stay secure.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Pages</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <a href="tel:+61424127808">+61 424 127 808</a>
            </li>
            <li>
              <a href="mailto:info@qwickin.com">info@qwickin.com</a>
            </li>
            <li>Melbourne, Victoria, Australia</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Social</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <ImagePlaceholder label="Social Icon: LinkedIn" ratio="1/1" height={74} rounded="rounded-2xl" />
            <ImagePlaceholder label="Social Icon: Instagram" ratio="1/1" height={74} rounded="rounded-2xl" />
            <ImagePlaceholder label="Social Icon: YouTube" ratio="1/1" height={74} rounded="rounded-2xl" />
          </div>
        </div>
      </Container>

      <Container className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>&copy; 2026 Qwickin IT Services. All rights reserved.</p>
      </Container>
    </footer>
  );
};
