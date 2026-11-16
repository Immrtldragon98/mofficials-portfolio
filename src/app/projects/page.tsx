import { projects } from "@/data/projects";
import ProjectExplorer from "@/components/project/ProjectExplorer";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ category?: string; status?: string }> }) {
  const params = await searchParams;
  const category = projects.some(p => p.category === params.category) ? params.category : "All";
  const status = ["Built", "Building", "Planned"].includes(params.status ?? "") ? params.status : "All";
  return <><Navbar /><main>
    <section className="border-b border-neutral-200 bg-neutral-50 py-14 md:py-20"><Container>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Portfolio / Updated 16 November 2026</p>
      <h1 className="mt-6 text-5xl font-black tracking-[-0.055em] sm:text-6xl md:text-7xl">Projects & experiments</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">Software, mobile companions, AI systems and market tools. Explore the problem, architecture and current milestone behind each project.</p>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-600">Built means a working milestone was delivered. Building means active development; Planned means a research concept. Each case study notes known testing or release gaps.</p>
    </Container></section>
    <section className="py-10 md:py-16"><Container><ProjectExplorer key={`${category}-${status}`} initialCategory={category} initialStatus={status} /></Container></section>
  </main><Footer /></>;
}
