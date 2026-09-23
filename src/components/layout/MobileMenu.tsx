"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/roadmap", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-300 bg-white text-xl"
      >
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-[64px] border-b border-neutral-200 bg-white px-4 pb-5 pt-3 shadow-xl"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between border-b border-neutral-100 px-3 text-base font-medium last:border-b-0"
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
          <a
            href="https://github.com/Immrtldragon98"
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex min-h-12 items-center justify-between rounded-xl bg-black px-4 text-base font-medium text-white"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      )}
    </div>
  );
}
