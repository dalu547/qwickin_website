import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/qwickin_logo.png";
import { Button } from "@/components/premium/Button";
import { Container } from "@/components/premium/Container";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Qwickin logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-white">QWICKIN</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn("text-sm text-slate-300 transition-colors hover:text-white", isActive && "text-white")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Talk to Us
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("text-sm text-slate-300 transition-colors hover:text-white", isActive && "text-white")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" className="w-full">
              Talk to Us
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
};
