"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectStatus } from "@/types/project";
import ProjectCard from "@/components/shared/ProjectCard";

export default function ProjectExplorer({ initialCategory = "All", initialStatus = "All" }: { initialCategory?: string; initialStatus?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [status, setStatus] = useState(initialStatus);
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const statuses: (ProjectStatus | "All")[] = ["All", "Built", "Building", "Planned"];
  const visible = projects.filter(p => (status === "All" || p.status === status) &&
    (category === "All" || p.category === category) &&
    `${p.title} ${p.tagline} ${p.description} ${p.technologies.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  const reset = () => { setQuery(""); setCategory("All"); setStatus("All"); };
  return <>
    <div className="grid gap-5 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7">
      <div className="grid gap-4 md:grid-cols-[1fr_260px]">
        <div><label htmlFor="project-search" className="block text-sm font-semibold">Search projects</label>
          <input id="project-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Name, topic or technology" className="mt-2 min-h-12 w-full rounded-lg border border-neutral-300 px-4" /></div>
        <div><label htmlFor="project-category" className="block text-sm font-semibold">Category</label>
          <select id="project-category" value={category} onChange={e => setCategory(e.target.value)} className="mt-2 min-h-12 w-full rounded-lg border border-neutral-300 bg-white px-4">
            {categories.map(c => <option key={c} value={c}>{c === "All" ? "All categories" : c}</option>)}
          </select></div>
      </div>
      <div role="group" aria-label="Project status" className="flex flex-wrap gap-2">
        {statuses.map(s => <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(s)} className={`min-h-11 rounded-lg border px-4 text-sm font-semibold transition ${status === s ? "border-black bg-black text-white" : "border-neutral-300 hover:border-black hover:bg-neutral-100"}`}>
          {s} <span className={status === s ? "text-white/70" : "text-neutral-500"}>({projects.filter(p => s === "All" || p.status === s).length})</span>
        </button>)}
        {(query || status !== "All" || category !== "All") && <button type="button" onClick={reset} className="min-h-11 rounded-lg px-4 text-sm font-semibold underline underline-offset-4">Clear filters</button>}
      </div>
    </div>
    <p role="status" aria-live="polite" aria-atomic="true" className="my-6 text-sm text-neutral-600">{visible.length} of {projects.length} projects{category !== "All" ? ` · ${category}` : ""}{status !== "All" ? ` · ${status}` : ""}</p>
    {visible.length ? <div className="grid gap-6 lg:grid-cols-2">{visible.map(p => <ProjectCard key={p.slug} project={p} />)}</div> :
      <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center"><h2 className="text-2xl font-bold">No matching projects</h2><p className="mt-3 text-neutral-600">Try a different name, technology or category.</p><button type="button" onClick={reset} className="mt-6 min-h-12 rounded-lg bg-black px-6 font-semibold text-white">Show all projects</button></div>}
  </>;
}
