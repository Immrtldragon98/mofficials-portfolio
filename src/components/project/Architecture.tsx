import { Project } from "@/types/project";

interface ArchitectureProps {
  project: Project;
}

export default function Architecture({
  project,
}: ArchitectureProps) {
  return (
    <section className="border-t border-neutral-200 py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">
            Architecture
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
            How {project.title} is structured.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-500">
            {project.architecture ??
              "The project architecture is documented as the product evolves."}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.technologies.slice(0, 3).map((technology, index) => (
              <div
                key={technology}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="font-mono text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-6 text-sm font-semibold">
                  {technology}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}