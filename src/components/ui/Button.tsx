import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-transparent text-white border border-white/45 hover:border-white hover:bg-white/10",
    secondary:
      "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
    dark:
      "bg-black text-white border border-black hover:bg-neutral-800 hover:border-neutral-800",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-lg px-7 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:w-auto ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
