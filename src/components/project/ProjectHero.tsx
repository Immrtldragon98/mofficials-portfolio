import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24 lg:px-12 lg:py-28">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          {project.status} · {project.version}
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-2xl">
          {project.tagline}
        </p>

      </div>
    </section>
  );
}
