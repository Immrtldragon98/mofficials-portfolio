const journey = [
  {
    year: "2023",
    title: "Mechanical Engineering",
    description:
      "Built a strong foundation in engineering design, analysis and problem solving.",
  },
  {
    year: "2024",
    title: "Programming",
    description:
      "Started learning C++, Python and software engineering fundamentals.",
  },
  {
    year: "2025",
    title: "Financial Products",
    description:
      "Designed simulators and productivity tools focused on finance and learning.",
  },
  {
    year: "2026",
    title: "Artificial Intelligence",
    description:
      "Building AI-powered engineering systems and agentic workflows.",
  },
];
export default function EngineeringJourney() {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-28">

        <p className="text-5xl font-bold text-neutral-200">
          03
        </p>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Journey
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Learning by building.
        </h2>

        <div className="mt-20 space-y-14">

          {journey.map((step) => (
            <div
              key={step.year}
              className="grid gap-8 border-l-2 border-neutral-200 pl-8 md:grid-cols-[140px_1fr]"
            >
              <div>
                <p className="text-2xl font-bold">
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