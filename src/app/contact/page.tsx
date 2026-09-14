import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Contact
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-[-0.06em] sm:text-6xl md:text-8xl">
              Let&apos;s build
              <br />
              something useful.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-500">
              Open to backend, AI/ML, industrial software, finance technology,
              and product engineering opportunities.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Start here
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:vyvsyadav98@proton.me?subject=Portfolio%20conversation"
                  className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-neutral-200 px-4 py-4 transition hover:border-black sm:px-5"
                >
                  <span className="min-w-0">
                    <span className="block font-medium">Email</span>
                    <span className="mt-1 block break-all text-xs text-neutral-500">
                      vyvsyadav98@proton.me
                    </span>
                  </span>
                  <span>→</span>
                </a>

                <a
                  href="https://github.com/Immrtldragon98"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-neutral-200 px-5 py-4 transition hover:border-black"
                >
                  <span>
                    <span className="block font-medium">GitHub</span>
                    <span className="mt-1 block text-xs text-neutral-500">
                      @Immrtldragon98
                    </span>
                  </span>
                  <span>↗</span>
                </a>

                <Link
                  href="/projects"
                  className="flex items-center justify-between rounded-xl bg-black px-5 py-4 font-medium text-white transition hover:bg-blue-600"
                >
                  <span>View Projects</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
