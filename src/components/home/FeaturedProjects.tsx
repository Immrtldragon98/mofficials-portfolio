import Link from "next/link";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredSlugs = [
    "wealthplay",
    "industrial-reliability-twin",
    "pokemon-simulator",
  ];

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  const featured = featuredProjects[0];
  const secondary = featuredProjects.slice(1);

  return (
    <section className="px-4 py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between border-b border-neutral-200 pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-600">
              Selected Work / 01
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] md:text-5xl lg:text-6xl">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium transition hover:bg-black hover:text-white sm:inline-flex"
          >
            View all →
          </Link>
        </div>

        {featured && (
          <Link
            href={`/projects/${featured.slug}`}
            className="group block"
          >
            <article className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
              <div className="grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700">
                        {featured.status}
                      </span>

                      <span className="font-mono text-[10px] text-neutral-400">
                        {featured.year}
                      </span>
                    </div>

                    <p className="mt-7 text-xs uppercase tracking-[0.2em] text-blue-600">
                      {featured.tagline}
                    </p>

                    <h3 className="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-5xl md:text-6xl">
                      {featured.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
                      {featured.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-5">
                    <div className="flex flex-wrap gap-2">
                      {featured.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] text-neutral-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <span className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-1 group-hover:bg-blue-600">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#efefec] p-4 sm:p-8">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />

                  <div className="relative w-full max-w-[500px] rounded-2xl border border-black/10 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition duration-500 group-hover:-translate-y-2 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">
                        {featured.title}
                      </span>

                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="mt-8 space-y-3">
                      {featured.features.slice(0, 4).map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3 rounded-xl bg-neutral-50 px-4 py-3">
                          <span className="font-mono text-[10px] text-blue-600">0{index + 1}</span>
                          <span className="text-sm font-medium text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">{featured.version}</span>
                      <span className="text-xs font-semibold text-emerald-600">{featured.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        )}

        {secondary.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {secondary.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group"
              >
                <article className="flex min-h-[230px] flex-col justify-between rounded-[20px] border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl md:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600">
                        0{index + 2} / {project.status}
                      </p>

                      <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">
                        {project.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                        {project.description}
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition group-hover:bg-black group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] text-neutral-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        <Link
          href="/projects"
          className="mt-5 block rounded-full border border-neutral-300 py-3 text-center text-xs font-medium sm:hidden"
        >
          View all projects →
        </Link>
      </Container>
    </section>
  );
}
