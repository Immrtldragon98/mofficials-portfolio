import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import FeatureList from "@/components/project/FeatureList";
import Architecture from "@/components/project/Architecture";
import EngineeringNotes from "@/components/project/EngineeringNotes";
import TechStack from "@/components/project/TechStack";
import FutureRoadmap from "@/components/project/FutureRoadmap";
import ProjectLinks from "@/components/project/ProjectLinks";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>

        <ProjectHero project={project} />

        <ProjectOverview project={project} />

        <FeatureList project={project} />

        <Architecture project={project} />

        <EngineeringNotes project={project} />

        <TechStack project={project} />

        <FutureRoadmap project={project} />

        <ProjectLinks project={project} />

      </main>

      <Footer />
    </>
  );
}