import Link from "next/link";
import { Project } from "@/types/project";
import StatusBadge from "./StatusBadge";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-[24px] border border-neutral-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl sm:p-6 md:p-8 lg:p-10"
    >
      <StatusBadge status={project.status} />

      <h3 className="mt-6 break-words text-2xl font-bold tracking-[-0.035em] sm:mt-7 sm:text-3xl">
        {project.title}
      </h3>

      <p className="mt-3 text-blue-600">
        {project.tagline}
      </p>

      <p className="mt-6 line-clamp-3 leading-7 text-neutral-600 sm:mt-8 sm:leading-8">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-8 font-semibold text-blue-600 sm:mt-10">
        View Case Study →
      </p>
    </Link>
  );
}
