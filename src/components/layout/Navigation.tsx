import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/qwickin_logo.png";
import { cn } from "@/lib/utils";
import { Container } from "@/components/premium/Container";

const menuItems = [
  { label: "Platform", to: "/services#platform" },
  { label: "Solutions", to: "/services" },
  { label: "Resources", to: "/about#resources" },
  { label: "Company", to: "/about" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-300",
        isScrolled ? "bg-[#0a0b14]/95" : "bg-[#0a0b14]/70"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Qwickin logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-white">QWICKIN</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="link-underline text-sm text-[#b8b8b8] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
            style={{ background: "var(--gradient-primary)", boxShadow: "0 0 30px rgba(157, 78, 221, 0.35)" }}
          >
            Get a Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#0a0b14]/95 lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="link-underline text-base text-[#b8b8b8] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              Get a Demo
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
};
