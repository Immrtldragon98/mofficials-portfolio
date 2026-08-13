import { Project } from "@/types/project";

export default function ProjectOverview({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">

        <div className="lg:col-span-3">

          <p className="text-sm uppercase tracking-[0.35em] text-blue-600">
            Overview
          </p>

        </div>

        <div className="lg:col-span-9">

          <p className="text-xl leading-9 text-neutral-700">
            {project.description}
          </p>

        </div>

      </div>
    </section>
  );
}