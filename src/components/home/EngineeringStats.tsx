import Container from "@/components/layout/Container";
import {
  completedProjects,
  buildingProjects,
  plannedProjects,
} from "@/lib/projects";

const stats = [
  {
    value: completedProjects.length.toString().padStart(2, "0"),
    label: "Completed",
    detail: "Products shipped",
  },
  {
    value: buildingProjects.length.toString().padStart(2, "0"),
    label: "Building",
    detail: "Active systems",
  },
  {
    value: plannedProjects.length.toString().padStart(2, "0"),
    label: "Planned",
    detail: "Ideas in queue",
  },
  {
    value: "∞",
    label: "Learning",
    detail: "Always in progress",
  },
];

export default function EngineeringStats() {
  return (
    <section className="px-4 pb-14 md:px-10 lg:px-12 lg:pb-20">
      <Container>
        <div className="overflow-hidden rounded-[20px] border border-neutral-200 bg-white">
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">
              Engineering Status
            </p>

            <p className="font-mono text-[10px] text-neutral-400">
              SYSTEM / 2026
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-5 md:p-8 ${
                  index % 2 === 1 ? "border-l border-neutral-200" : ""
                } ${index >= 2 ? "border-t border-neutral-200" : ""} ${
                  index > 0 ? "md:border-l md:border-neutral-200" : "md:border-l-0"
                } md:border-t-0`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-4xl font-bold tracking-[-0.05em] md:text-5xl">
                    {stat.value}
                  </span>

                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em]">
                  {stat.label}
                </p>

                <p className="mt-1 text-xs text-neutral-400">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
