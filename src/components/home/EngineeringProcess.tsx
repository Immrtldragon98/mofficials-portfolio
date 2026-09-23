const process = [
  {
    step: "01",
    title: "Problem",
    description:
      "Every project begins with identifying a real problem worth solving.",
  },
  {
    step: "02",
    title: "Research",
    description:
      "Study existing solutions, understand limitations, and define requirements.",
  },
  {
    step: "03",
    title: "Prototype",
    description:
      "Build the smallest working version to validate the idea quickly.",
  },
  {
    step: "04",
    title: "Engineer",
    description:
      "Design architecture, implement features, and iterate continuously.",
  },
  {
    step: "05",
    title: "Learn",
    description:
      "Document lessons, improve weaknesses, and prepare the next version.",
  },
];

export default function EngineeringProcess() {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-28">

        <p className="text-5xl font-bold text-neutral-200">
          04
        </p>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Engineering Process
        </p>

        <h2 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">
          Every product follows the
          same disciplined process.
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-5">
          {process.map((item) => (
            <div key={item.step}>
              <p className="text-6xl font-bold text-neutral-200">
                {item.step}
              </p>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}