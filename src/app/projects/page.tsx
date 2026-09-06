import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function ProjectsPage() {
  const completed = projects.filter((p) => p.status === "Completed");
  const building = projects.filter((p) => p.status === "Building");
  const planned = projects.filter((p) => p.status === "Planned");

  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section className="border-b border-neutral-200 bg-neutral-50 py-24">
          <Container>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
              Portfolio
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-[-0.055em] sm:text-6xl md:text-7xl">
              Engineering Projects
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Every project begins with an idea, evolves through research,
              architecture, development, AI-assisted workflows, and ends as a
              deployable product. This page documents that journey.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="rounded-xl border bg-white px-5 py-4">
                <p className="text-3xl font-bold">{projects.length}</p>
                <p className="text-sm text-neutral-500">Projects</p>
              </div>

              <div className="rounded-xl border bg-white px-5 py-4">
                <p className="text-3xl font-bold">{completed.length}</p>
                <p className="text-sm text-neutral-500">Completed</p>
              </div>

              <div className="rounded-xl border bg-white px-5 py-4">
                <p className="text-3xl font-bold">{building.length}</p>
                <p className="text-sm text-neutral-500">Building</p>
              </div>

              <div className="rounded-xl border bg-white px-5 py-4">
                <p className="text-3xl font-bold">{planned.length}</p>
                <p className="text-sm text-neutral-500">Planned</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Completed */}
        <section className="py-24">
          <Container>

            <h2 className="text-4xl font-bold">
              Completed Products
            </h2>

            <p className="mt-3 text-neutral-600">
              Production-ready applications and engineering tools.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {completed.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </Container>
        </section>

        {/* Building */}
        <section className="bg-neutral-50 py-24">
          <Container>

            <h2 className="text-4xl font-bold">
              Currently Building
            </h2>

            <p className="mt-3 text-neutral-600">
              Projects under active development.
            </p>

            <div className="mt-12 grid gap-8">
              {building.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </Container>
        </section>

        {/* Upcoming */}
        <section className="py-24">
          <Container>

            <h2 className="text-4xl font-bold">
              Upcoming Ideas
            </h2>

            <p className="mt-3 text-neutral-600">
              Research concepts that will become future products.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {planned.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </Container>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 bg-black py-24 text-white">
          <Container>

            <h2 className="text-5xl font-bold">
              Interested in how these products were built?
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-neutral-300">
              Every project includes architecture, frontend, backend,
              AI workflow, technical decisions, milestones, GitHub,
              deployment links, and lessons learned.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-neutral-200"
            >
              Get in Touch
            </Link>

          </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}
