import Link from "next/link";

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
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-12">

        {/* Brand */}
        <Link
          href="/"
          className="group flex flex-col"
        >
          <span className="font-mono text-sm font-bold tracking-[0.35em] text-black">
            mofficals
          </span>

          <span className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-neutral-400 transition-colors group-hover:text-blue-600">
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
            href="https://github.com/"
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
          className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Contact →
        </Link>
      </div>
    </header>
  );
}