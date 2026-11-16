"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, isActiveRoute } from "@/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const closeOnResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeWithEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeWithEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [open]);
  return (
    <div ref={root} className="md:hidden">
      <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-300 bg-white text-xl">
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-neutral-200 bg-white px-4 pb-5 pt-3 shadow-xl">
        {navigation.map((link) => <Link key={link.href} href={link.href} aria-current={isActiveRoute(pathname, link.href) ? "page" : undefined} onClick={() => setOpen(false)}
          className={`flex min-h-12 items-center justify-between border-b border-neutral-100 px-3 text-base ${isActiveRoute(pathname, link.href) ? "bg-neutral-100 font-bold" : "font-medium"}`}>
          {link.name}<span aria-hidden="true">→</span>
        </Link>)}
        <a href="https://github.com/Immrtldragon98" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-3 flex min-h-12 items-center justify-between rounded-xl bg-black px-4 font-medium text-white">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      </nav>}
    </div>
  );
}
