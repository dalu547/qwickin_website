import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  to?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_10px_24px_rgba(16,185,129,0.3)]",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

export const Button = ({ children, className, variant = "primary", to, type = "button", ...props }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={cn(baseClasses, variantClasses[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
};
