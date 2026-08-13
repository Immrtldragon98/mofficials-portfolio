import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-12 md:px-10 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-black px-7 py-14 text-white md:px-12 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
              Build Log / End
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              Interested in how these products were built?
            </h2>
          </div>

          <div>
            <p className="max-w-md text-sm leading-6 text-white/50">
              Every project includes architecture, frontend, backend, AI
              workflows, technical decisions, milestones, deployment details,
              and lessons learned.
            </p>

            <Link
              href="/projects"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
            >
              Explore Project Logs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}