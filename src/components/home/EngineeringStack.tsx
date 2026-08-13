import Container from "@/components/layout/Container";

const stats = [
  ["Products Built", "4"],
  ["Upcoming Ideas", "3"],
  ["Languages", "C++ • Python • TypeScript"],
  ["AI Assisted Workflows", "Every Project"],
];

export default function EngineeringStats() {
  return (
    <section className="bg-black py-24 text-white">

      <Container>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map(([title, value]) => (
            <div
              key={title}
              className="rounded-3xl border border-neutral-700 p-8"
            >
              <p className="text-neutral-400">
                {title}
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                {value}
              </h2>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}