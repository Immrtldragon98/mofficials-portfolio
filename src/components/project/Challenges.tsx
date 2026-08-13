import { Project } from "@/types/project";
import Section from "@/components/shared/Section";

interface Props {
  project: Project;
}

export default function Challenges({ project }: Props) {
  if (!project.challenges?.length) return null;

  return (
    <section className="border-t border-neutral-200 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <Section
          number="06"
          label="Challenges"
          title="Engineering Challenges"
        />

        <div className="space-y-6">
          {project.challenges.map((challenge) => (
            <div
              key={challenge}
              className="rounded-2xl border border-neutral-200 p-8"
            >
              {challenge}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}