import Link from "next/link";
import { projects } from "@/data/projects";

const upcomingSlugs = [
  "personal-finance-ai",
  "genetics-lab",
  "passing-game-mobile",
  "custom-vpn-firewall",
  "public-signal-search",
];

const upcoming = upcomingSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

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
          Research first. Build deliberately.
        </span>
      </div>

      <div>
        {upcoming.map((project, index) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="group grid items-start gap-5 border-b border-neutral-200 py-7 transition-colors hover:bg-white lg:grid-cols-[80px_1fr_220px_120px]"
          >
            <span className="font-mono text-sm text-neutral-400">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
                {project.tagline}
              </p>
            </div>
            <p className="text-sm text-neutral-500">{project.category}</p>
            <span className="text-xs uppercase tracking-[0.18em] text-neutral-400 lg:text-right">
              {project.version}
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-8 inline-flex rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-black"
      >
        View full project pipeline →
      </Link>
    </section>
  );
}
