import Container from "@/components/layout/Container";

const stats = [
  ["03", "Completed"],
  ["02", "Building"],
  ["03", "Planned"],
  ["∞", "Learning"],
];

export default function HeroStats() {
  return (
    <section className="pb-24">

      <Container>

        <div className="grid gap-6 md:grid-cols-4">

          {stats.map(([value, label]) => (

            <div
              key={label}
              className="rounded-3xl border border-neutral-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-5xl font-black">
                {value}
              </h2>

              <p className="mt-3 uppercase tracking-widest text-sm text-neutral-500">
                {label}
              </p>
            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}