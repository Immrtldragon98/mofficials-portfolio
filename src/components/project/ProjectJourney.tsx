import { Project } from "@/types/project";

export default function ProjectJourney({ project }: { project: Project }) {
  if (!project.journey?.length) return null;

  return (
    <section className="border-t border-neutral-200 py-14 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">Build journey</p>
          <p className="mt-3 max-w-[190px] text-sm leading-6 text-neutral-500">How the idea became a working product.</p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {project.journey.map((step, index) => (
            <li key={step} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <span className="font-mono text-xs text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-sm leading-7 text-neutral-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
