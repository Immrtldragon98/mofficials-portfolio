import Link from "next/link";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

export default function ProjectDashboard() {
  return (
    <section className="py-32 bg-neutral-50">
      <Container>

        <div className="flex items-end justify-between">

          <div>
            <p className="uppercase tracking-[0.3em] text-blue-600 text-sm font-semibold">
              Engineering Dashboard
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Current Product Portfolio
            </h2>
          </div>

          <Link
            href="/projects"
            className="font-semibold text-blue-600 hover:underline"
          >
            View All →
          </Link>

        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-neutral-200 bg-white">

          <table className="w-full">

            <thead className="bg-neutral-100">

              <tr>

                <th className="p-5 text-left">Project</th>

                <th className="text-left">Version</th>

                <th className="text-left">Status</th>

                <th className="text-left">Tech</th>

              </tr>

            </thead>

            <tbody>

              {projects.map((project) => (

                <tr
                  key={project.id}
                  className="border-t hover:bg-neutral-50"
                >

                  <td className="p-5">

                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-semibold hover:text-blue-600"
                    >
                      {project.title}
                    </Link>

                  </td>

                  <td>{project.version}</td>

                  <td>{project.status}</td>

                  <td>{project.technologies.join(", ")}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Container>
    </section>
  );
}