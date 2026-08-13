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
      "bg-white text-black border border-white hover:bg-blue-500 hover:border-blue-500 hover:text-white",
    secondary:
      "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
    dark:
      "bg-black text-white border border-black hover:bg-blue-600 hover:border-blue-600",
  };

  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}