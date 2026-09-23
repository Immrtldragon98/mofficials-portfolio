import { Project } from "@/types/project";

interface FeatureListProps {
  project: Project;
}

export default function FeatureList({
  project,
}: FeatureListProps) {
  return (
    <section className="border-t border-neutral-200 py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Features
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
            What it does.
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="flex gap-5 rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="font-mono text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}