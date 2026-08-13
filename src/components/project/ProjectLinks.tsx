import { Project } from "@/types/project";

export default function ProjectLinks({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-20">

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="rounded-full bg-black px-6 py-3 text-white"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="rounded-full border px-6 py-3"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}