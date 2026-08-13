export default function CurrentFocus() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-28">

        <p className="text-5xl font-bold text-neutral-200">
          05
        </p>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Current Focus
        </p>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-5xl font-bold leading-tight">
            Agentic AI
            <br />
            Design Engineer
          </h2>

          <p className="mt-8 text-xl leading-8 text-neutral-600">
            Building an AI engineering assistant capable of understanding
            engineering drawings, assemblies, manufacturing workflows,
            and generating CAD-ready outputs.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Building
            </span>

            <span className="rounded-full border px-4 py-2 text-sm">
              Multi-Agent AI
            </span>

            <span className="rounded-full border px-4 py-2 text-sm">
              CAD
            </span>

            <span className="rounded-full border px-4 py-2 text-sm">
              Manufacturing
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}