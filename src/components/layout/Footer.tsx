import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-8 sm:px-6 sm:pb-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden bg-black text-white sm:rounded-[28px]">

        {/* Closing CTA */}
        <div className="grid gap-7 px-6 py-10 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-14">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
              End of Log
            </p>

            <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,10vw,7rem)] font-black leading-[0.9] tracking-[-0.055em]">
              Let&apos;s build something useful.
            </h2>
          </div>

          <div className="flex flex-col justify-between">

            <p className="max-w-sm text-sm leading-6 text-white/70">
              Products, experiments and ideas are always evolving.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/45 bg-transparent px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black sm:w-fit"
            >
              <span>Start a conversation</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>

          </div>
        </div>

        {/* Footer navigation */}
        <div className="border-t border-white/10 px-6 py-5 sm:px-10 lg:px-14">

          <div className="grid gap-5 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-10">

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-mono text-xs font-bold tracking-[0.26em] text-white">
                LOGBOOK
              </span>

              <span className="text-xs text-white/55">
                Engineering Journal
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
              <Link href="/projects" className="transition hover:text-white">Projects</Link>
              <Link href="/roadmap" className="transition hover:text-white">Journal</Link>
              <Link href="/about" className="transition hover:text-white">About</Link>
              <Link href="/contact" className="transition hover:text-white">Contact</Link>
            </nav>

            <a
              href="https://github.com/Immrtldragon98"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/70 transition hover:text-white"
            >
              GitHub ↗
            </a>

          </div>
        </div>

        {/* Bottom meta */}
        <div className="border-t border-white/10 px-6 py-4 sm:px-10 lg:px-14">
          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>Version 2.1</span>
            <span>Built through iteration</span>
            <span>© 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
