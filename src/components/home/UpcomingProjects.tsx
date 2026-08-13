import Link from "next/link";

const upcoming = [
  {
    number: "01",
    title: "Agentic AI Design Engineer",
    category: "AI / Engineering",
    status: "Upcoming",
  },
  {
    number: "02",
    title: "Risk Analysis for Indian Stock Market",
    category: "Finance / AI",
    status: "Upcoming",
  },
  {
    number: "03",
    title: "How Babies Are Made",
    category: "Interactive / Education",
    status: "Idea",
  },
];

export default function UpcomingProjects() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-12">
      <div className="mb-8 flex items-end justify-between border-b border-neutral-200 pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-orange-600">
            Future Work / 02
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-5xl">
            Upcoming & Ideas
          </h2>
        </div>

        <span className="hidden text-xs text-neutral-400 sm:block">
          Things worth building next.
        </span>
      </div>

      <div>
        {upcoming.map((project) => (
          <div
            key={project.number}
            className="group grid items-center gap-5 border-b border-neutral-200 py-7 transition-colors hover:bg-white lg:grid-cols-[80px_1fr_220px_120px]"
          >
            <span className="font-mono text-sm text-neutral-400">
              {project.number}
            </span>

            <h3 className="text-2xl font-bold tracking-[-0.03em] md:text-3xl">
              {project.title}
            </h3>

            <p className="text-sm text-neutral-500">
              {project.category}
            </p>

            <span className="text-xs uppercase tracking-[0.18em] text-neutral-400 lg:text-right">
              {project.status}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/roadmap"
        className="mt-8 inline-flex rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-black"
      >
        View Roadmap →
      </Link>
    </section>
  );
}