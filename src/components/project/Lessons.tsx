import { Project } from "@/types/project";
import Section from "@/components/shared/Section";

interface Props {
  project: Project;
}

export default function Lessons({ project }: Props) {
  if (!project.lessons?.length) return null;

  return (
    <section className="border-t border-neutral-200 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <Section
          number="07"
          label="Lessons"
          title="Lessons Learned"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {project.lessons.map((lesson) => (
            <div
              key={lesson}
              className="rounded-2xl bg-neutral-50 p-8"
            >
              {lesson}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}