import { Project } from "@/types/project";

export default function ProjectLinks({
  project,
}: {
  project: Project;
}) {
  if (!project.live && !project.github && !project.documentation) {
    return null;
  }

  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto grid max-w-[1440px] gap-3 px-4 py-12 sm:flex sm:flex-wrap sm:gap-4 md:px-10 md:py-16 lg:px-12">

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-black"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}

        {project.documentation && (
          <a
            href={project.documentation}
            target="_blank"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-black"
            rel="noreferrer"
          >
            Documentation
          </a>
        )}
      </div>
    </section>
  );
}
