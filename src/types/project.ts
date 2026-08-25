export type ProjectStatus =
  | "Completed"
  | "Building"
  | "Planned";

export type ProjectCategory =
  | "AI"
  | "Finance"
  | "Software"
  | "Education"
  | "Mechanical"
  | "Research"
  | "Industrial Software"
  | "Manufacturing & Industrial"
  | "AI · Finance";

export interface Project {
  // Identity
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;

  // Classification
  category: ProjectCategory;
  status: ProjectStatus;
  version: string;
  year: number;

  // Engineering Story
  problem: string;
  solution: string;
  architecture?: string;

  // Content
  features: string[];
  technologies: string[];
  challenges?: string[];
  lessons?: string[];
  futurePlans?: string[];
  roadmap?: string[];

  // Metrics
  duration?: string;
  team?: string;
  role?: string;

  // Media
  coverImage?: string;
  gallery?: string[];
  architectureImage?: string;
  screenshots?: string[];

  // Links
  github?: string;
  live?: string;
  documentation?: string;

  // Portfolio
  featured?: boolean;
}