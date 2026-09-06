import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/shared/BackButton";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-12 md:px-10 lg:px-12 lg:pt-16">
          <BackButton />

          <div className="mt-16 max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              About / 01
            </p>

            <h1 className="mt-6 max-w-5xl text-6xl font-black tracking-[-0.065em] md:text-8xl">
              Engineering ideas
              <br />
              into useful products.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
              I am a mechanical maintenance engineer moving deeper into software
              and AI/ML by building real products. This portfolio connects plant
              knowledge, C++ and DSA foundations, backend engineering, and a
              growing set of deployed systems.
            </p>
          </div>
        </section>

        <section className="border-y border-neutral-200">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
            <div className="grid lg:grid-cols-3">
              <div className="border-b border-neutral-200 p-8 lg:border-b-0 lg:border-r">
                <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                  Focus
                </p>

                <h2 className="mt-6 text-3xl font-black">
                  Product Engineering
                </h2>

                <p className="mt-4 text-sm leading-6 text-neutral-500">
                  Turning concepts into functioning products with clear
                  architecture and deliberate iteration.
                </p>
              </div>

              <div className="border-b border-neutral-200 p-8 lg:border-b-0 lg:border-r">
                <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                  Interests
                </p>

                <h2 className="mt-6 text-3xl font-black">
                  AI · Backend · Industrial
                </h2>

                <p className="mt-4 text-sm leading-6 text-neutral-500">
                  Building where engineering judgement, reliable software,
                  intelligent systems, and real operational problems intersect.
                </p>
              </div>

              <div className="p-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                  Method
                </p>

                <h2 className="mt-6 text-3xl font-black">
                  Build · Learn · Improve
                </h2>

                <p className="mt-4 text-sm leading-6 text-neutral-500">
                  Each version is treated as another experiment rather than
                  a final destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Working principle
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
              A strong product is not defined by the first version. It is
              defined by how deliberately the next version is built.
            </p>

            <Link
              href="/projects"
              className="mt-10 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Explore the work →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
