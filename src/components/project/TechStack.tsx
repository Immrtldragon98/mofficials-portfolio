import { Project } from "@/types/project";

export default function TechStack({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24 lg:px-12">

        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Technology
        </p>

        <div className="mt-10 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (
            <span
              key={tech}
            className="rounded-lg border px-4 py-2 text-sm sm:px-5"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}
