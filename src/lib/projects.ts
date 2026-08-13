import { projects } from "@/data/projects";

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const completedProjects = projects.filter(
  (project) => project.status === "Completed"
);

export const buildingProjects = projects.filter(
  (project) => project.status === "Building"
);

export const plannedProjects = projects.filter(
  (project) => project.status === "Planned"
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}