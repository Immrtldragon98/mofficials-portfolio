import { Project } from "@/types/project";

export default function TechStack({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-sm uppercase tracking-[0.35em] text-blue-600">
          Technology
        </p>

        <div className="mt-10 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-5 py-2"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}