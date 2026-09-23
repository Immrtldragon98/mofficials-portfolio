import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu";

const navigation = [
  {
    href: "/projects",
    label: "Work",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/roadmap",
    label: "Journal",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-[72px] md:px-10 lg:px-12">

        {/* Brand */}
        <Link
          href="/"
          className="group flex min-h-11 flex-col justify-center"
        >
          <span className="font-mono text-[13px] font-bold tracking-[0.28em] text-black sm:text-sm sm:tracking-[0.35em]">
            MOFFICIALS
          </span>

          <span className="mt-0.5 text-[7px] uppercase tracking-[0.16em] text-neutral-500 transition-colors group-hover:text-neutral-500 sm:text-[8px] sm:tracking-[0.2em]">
            Product & Engineering Studio
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://github.com/Immrtldragon98"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-600 transition-colors hover:text-black"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Contact */}
        <Link
          href="/contact"
          className="hidden h-10 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 md:inline-flex"
        >
          Contact →
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
