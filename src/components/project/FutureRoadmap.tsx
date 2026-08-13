import { Project } from "@/types/project";

interface FutureRoadmapProps {
  project: Project;
}

export default function FutureRoadmap({
  project,
}: FutureRoadmapProps) {
  const items =
    project.futurePlans?.length
      ? project.futurePlans
      : project.roadmap ?? [];

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-neutral-200 py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-600">
            Roadmap
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
            What comes next.
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="font-mono text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-8 text-sm font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}