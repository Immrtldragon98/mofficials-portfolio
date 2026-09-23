import { Project } from "@/types/project";

export default function ProjectOverview({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-12">

        <div className="lg:col-span-3">

          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
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
