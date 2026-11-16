import BackButton from "@/components/shared/BackButton";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24 lg:px-12 lg:py-28">

        <BackButton fallback="/projects" label="All projects" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          {project.status} · {project.version}
        </p>

        <h1 className="mt-6 max-w-5xl break-words text-[clamp(2.6rem,12vw,4.5rem)] font-black leading-[0.95] tracking-[-0.05em]">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-2xl">
          {project.tagline}
        </p>

        {project.releaseNote && <p className="mt-6 max-w-3xl rounded-xl border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-600">{project.releaseNote}</p>}
      </div>
    </section>
  );
}
