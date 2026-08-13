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

            <h1 className="mt-6 text-6xl font-black tracking-[-0.06em] md:text-8xl">
              Let&apos;s build
              <br />
              something useful.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-500">
              Open to conversations around software, AI, finance and product
              engineering.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[24px] border border-neutral-200 bg-white p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Start here
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-between rounded-xl border border-neutral-200 px-5 py-4 transition hover:border-black"
                >
                  <span className="font-medium">Email</span>
                  <span>→</span>
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-neutral-200 px-5 py-4 transition hover:border-black"
                >
                  <span className="font-medium">GitHub</span>
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