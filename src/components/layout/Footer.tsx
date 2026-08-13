import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 pb-5 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-black text-white">

        {/* Closing CTA */}
        <div className="grid gap-12 p-8 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-14">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
              End of Log
            </p>

            <h2 className="mt-6 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.82] tracking-[-0.07em]">
              Let&apos;s build
              <br />
              something
              <br />
              useful.
            </h2>
          </div>

          <div className="flex flex-col justify-between">

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Products, experiments and ideas are always evolving.
            </p>

            <Link
              href="/contact"
              className="group mt-10 inline-flex h-12 w-fit items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
            >
              Start a conversation
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>

        {/* Footer navigation */}
        <div className="border-t border-white/10 px-8 py-5 sm:px-10 lg:px-14">

          <div className="grid gap-5 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-10">

            <div className="flex items-center gap-5">
              <span className="font-mono text-xs font-bold tracking-[0.3em] text-white">
                LOGBOOK
              </span>

              <span className="text-xs text-white/35">
                Engineering Journal
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45">
              <Link
                href="/projects"
                className="transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/roadmap"
                className="transition hover:text-white"
              >
                Journal
              </Link>

              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </nav>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/45 transition hover:text-white"
            >
              GitHub ↗
            </a>

          </div>

        </div>

        {/* Bottom meta */}
        <div className="border-t border-white/10 px-8 py-4 sm:px-10 lg:px-14">

          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <span>Version 2.0</span>
            <span>Built through iteration</span>
            <span>© 2026</span>
          </div>

        </div>

      </div>
    </footer>
  );
}