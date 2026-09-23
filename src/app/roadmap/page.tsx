import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/shared/BackButton";

const logs = [
  {
    id: "01",
    title: "Building the portfolio",
    type: "Build Log",
    description:
      "Refining the portfolio into a clearer system for presenting products and engineering work.",
  },
  {
    id: "02",
    title: "From idea to product",
    type: "Engineering Note",
    description:
      "How experimentation, architecture and iteration shape a product.",
  },
  {
    id: "03",
    title: "Learning through versions",
    type: "Reflection",
    description:
      "A product does not need to be perfect to be worth building.",
  },
];

export default function JournalPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-12 md:px-10 lg:px-12">
          <BackButton />

          <div className="mt-16 max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Journal / 01
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-[-0.065em] sm:text-6xl md:text-8xl">
              Engineering Log.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
              Short notes about building products, exploring ideas,
              experimenting with systems and learning from each version.
            </p>
          </div>
        </section>

        <section className="border-y border-neutral-200">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
            {logs.map((log) => (
              <article
                key={log.id}
                className="grid gap-6 border-b border-neutral-200 py-10 last:border-b-0 lg:grid-cols-[120px_1fr_220px]"
              >
                <span className="font-mono text-sm text-neutral-400">
                  {log.id}
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {log.type}
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                    {log.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
                    {log.description}
                  </p>
                </div>

                <div className="lg:text-right">
                  <span className="text-xs text-neutral-400">
                    Engineering note
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-12">
          <Link
            href="/projects"
            className="inline-flex rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Explore Products →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
