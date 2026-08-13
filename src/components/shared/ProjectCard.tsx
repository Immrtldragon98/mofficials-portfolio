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
      className="group block rounded-3xl border border-neutral-200 p-10 transition hover:border-black hover:shadow-lg"
    >
      <StatusBadge status={project.status} />

      <h3 className="mt-8 text-3xl font-bold">
        {project.title}
      </h3>

      <p className="mt-3 text-blue-600">
        {project.tagline}
      </p>

      <p className="mt-8 line-clamp-3 leading-8 text-neutral-600">
        {project.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-10 font-semibold text-blue-600">
        View Case Study →
      </p>
    </Link>
  );
}