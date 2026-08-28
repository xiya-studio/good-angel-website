import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "dark" | "outline" | "text";
  arrow?: "up" | "right" | "none";
  className?: string;
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  arrow = "up",
  className = "",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-between gap-8 overflow-hidden px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-500";

  const variants = {
    primary: "bg-[#c7d98f] text-brand-900 hover:bg-[#dbe8b4]",

    dark: "bg-brand-900 text-ivory hover:bg-brand-800",

    outline: "border border-current text-current hover:border-gold",

    text: "border-b border-brand-900 px-0 py-2 text-brand-900 hover:border-gold hover:text-brand-600",
  };

  const arrowSymbol = arrow === "up" ? "↗" : arrow === "right" ? "→" : null;

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>

      {arrowSymbol && (
        <span
          aria-hidden="true"
          className={`transition-transform duration-300 ${
            arrow === "up"
              ? "group-hover:-translate-y-1 group-hover:translate-x-1"
              : "group-hover:translate-x-1"
          }`}
        >
          {arrowSymbol}
        </span>
      )}
    </Link>
  );
}
