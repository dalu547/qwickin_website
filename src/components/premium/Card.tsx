import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "solid" | "outline" | "glass";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  hover?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
  solid: "border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]",
  outline: "border border-slate-200 bg-white/80",
  glass: "border border-white/20 bg-white/10 backdrop-blur-md text-white",
};

export const Card = ({ children, className, variant = "solid", hover = true, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 md:p-7",
        variantClasses[variant],
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
