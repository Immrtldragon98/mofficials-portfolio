"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import { navigation, isActiveRoute } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-[72px] md:px-10 lg:px-12">
        <Link href="/" aria-label="MOFFICIALS home" className="group flex min-h-11 flex-col justify-center">
          <span className="font-mono text-[13px] font-bold tracking-[0.28em] sm:text-sm sm:tracking-[0.35em]">MOFFICIALS</span>
          <span className="mt-0.5 text-[7px] uppercase tracking-[0.16em] text-neutral-500 sm:text-[8px]">Product & Engineering Studio</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActiveRoute(pathname, item.href) ? "page" : undefined}
              className={`inline-flex min-h-11 items-center text-sm transition hover:text-black ${isActiveRoute(pathname, item.href) ? "font-bold text-black underline underline-offset-8" : "text-neutral-600"}`}>
              {item.name}
            </Link>
          ))}
          <a href="https://github.com/Immrtldragon98" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm text-neutral-600 hover:text-black">GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a>
        </nav>
        <MobileMenu key={pathname} />
      </div>
    </header>
  );
}
