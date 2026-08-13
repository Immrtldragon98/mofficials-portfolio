import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-28">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          {project.status} · {project.version}
        </p>

        <h1 className="mt-6 max-w-5xl text-7xl font-bold leading-none">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-2xl text-neutral-600">
          {project.tagline}
        </p>

      </div>
    </section>
  );
}