import Button from "@/components/ui/Button";
import {
  completedProjects,
  buildingProjects,
} from "@/lib/projects";

const areas = [
  {
    number: "01",
    title: "Crypto & Stocks",
    description:
      "Market tools, simulations, research and financial systems.",
  },
  {
    number: "02",
    title: "AI Systems",
    description:
      "AI workflows, intelligent products and agentic systems.",
  },
  {
    number: "03",
    title: "Manufacturing & Industrial Design",
    description:
      "Engineering systems, industrial workflows, dashboards and design.",
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Web applications, mobile products, backends and complete digital systems.",
  },
];

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-4 md:px-10 lg:px-12">

        {/* Top line */}
        <div className="hidden items-center justify-between border-b border-white/10 py-5 md:flex">
          <div>
            <p className="font-mono text-sm font-bold tracking-[0.35em]">
              MOFFICIALS
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/30">
              Product & Engineering Studio
            </p>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            2026 / Studio 01
          </span>
        </div>

        {/* Hero composition */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left statement */}
          <div className="border-b border-white/10 py-14 lg:border-b-0 lg:border-r lg:py-16 lg:pr-16">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              We Build Your Dreams.
            </p>

            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,14vw,8.8rem)] font-black leading-[0.88] tracking-[-0.065em]">
              MOFFICIALS
              <br />
              BUILDS.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              I turn ideas into useful digital and engineering products —
              from concept and architecture to software, intelligent systems
              and industrial solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/40">
              <span>Idea</span>
              <span>→</span>
              <span>Design</span>
              <span>→</span>
              <span>Engineering</span>
              <span>→</span>
              <span>Deploy</span>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/projects" variant="primary">
                Explore my work →
              </Button>

              <Button href="/about" variant="secondary">
                My journey
              </Button>
            </div>
          </div>

          {/* Right studio panel */}
          <div className="flex flex-col">

            {/* Studio statement */}
            <div className="border-b border-white/10 p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                What We Do
              </p>

              <p className="mt-6 max-w-md text-2xl font-semibold leading-tight tracking-[-0.03em] text-white/80">
                We combine engineering, software and design to turn ambitious
                ideas into working systems.
              </p>
            </div>

            {/* Capability list */}
            <div className="flex-1">
              {areas.map((area) => (
                <div
                  key={area.number}
                  className="group border-b border-white/10 px-6 py-6 transition-colors hover:bg-white/[0.03] sm:px-8 lg:px-10"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[10px] text-white/55">
                      {area.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-5">
                        <h2 className="text-lg font-semibold text-white/85">
                          {area.title}
                        </h2>

                        <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/55">
                          ↗
                        </span>
                      </div>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Studio footer */}
            <div className="grid grid-cols-2 border-t border-white/10">

              {/* Completed */}
              <div className="p-6">
                <p className="font-mono text-3xl font-bold tracking-[-0.04em]">
                  {completedProjects.length
                    .toString()
                    .padStart(2, "0")}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Completed
                </p>
              </div>

              {/* Building */}
              <div className="border-l border-white/10 p-6">
                <p className="font-mono text-3xl font-bold tracking-[-0.04em]">
                  {buildingProjects.length
                    .toString()
                    .padStart(2, "0")}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Building
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom studio philosophy */}
        <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
          {[
            "Think",
            "Design",
            "Engineer",
            "Ship",
          ].map((item, index) => (
            <div
              key={item}
              className={`px-5 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 sm:px-7 ${
                index !== 0 ? "border-l border-white/10" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
