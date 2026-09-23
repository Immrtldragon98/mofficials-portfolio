const journey = [
  {
    year: "Foundation",
    title: "Mechanical maintenance & plant engineering",
    description:
      "Built practical judgement around equipment, maintenance, reliability, plant workflows and the people who operate them.",
  },
  {
    year: "Learn",
    title: "C++, DSA, Python & backend systems",
    description:
      "Moved from engineering problems into software fundamentals, APIs, databases and production-minded architecture.",
  },
  {
    year: "First ship",
    title: "WealthPlay became the first app",
    description:
      "Turned financial learning into an interactive product, then expanded into Market Memory, dashboards and browser games.",
  },
  {
    year: "Now · 2026",
    title: "Local agents, adaptive learning & mobile products",
    description:
      "Shipped DumbBots, Workforce Hub Lite, Detox Space and Nook; now developing Market Lens, the Economy Learning Dashboard and reusable industrial backend and AI logic.",
  },
];
export default function EngineeringJourney() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24 lg:px-12">

        <p className="text-4xl font-bold text-neutral-200 md:text-5xl">
          03
        </p>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Journey
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
          From plant floor to product studio.
        </h2>

        <div className="mt-12 space-y-10 md:mt-20 md:space-y-14">

          {journey.map((step) => (
            <div
              key={step.year}
              className="grid gap-4 border-l-2 border-neutral-200 pl-5 md:grid-cols-[160px_1fr] md:gap-8 md:pl-8"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-neutral-500 md:text-base">
                  {step.year}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-3xl leading-8 text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
