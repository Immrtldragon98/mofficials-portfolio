import { Project } from "@/types/project";

interface EngineeringNotesProps {
  project: Project;
}

export default function EngineeringNotes({
  project,
}: EngineeringNotesProps) {
  return (
    <section className="border-t border-neutral-200 py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">
            Engineering Notes
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
            What was learned.
          </h2>

          <div className="mt-8 space-y-3">
            {(project.lessons ?? []).map((lesson, index) => (
              <div
                key={lesson}
                className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-[60px_1fr]"
              >
                <span className="font-mono text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-neutral-600">
                  {lesson}
                </p>
              </div>
            ))}
          </div>

          {project.challenges && project.challenges.length > 0 && (
            <div className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600">
                Challenges
              </p>

              <div className="mt-4 space-y-3">
                {project.challenges.map((challenge) => (
                  <p
                    key={challenge}
                    className="rounded-xl bg-neutral-100 p-4 text-sm text-neutral-600"
                  >
                    {challenge}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}