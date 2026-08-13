export default function FeaturedWork() {
  return (
    <div className="flex h-full flex-col rounded-[32px] border border-neutral-200 bg-neutral-50 p-10">

      <div className="flex items-center justify-between">

        <span className="uppercase tracking-[0.25em] text-sm text-blue-600">
          Featured Project
        </span>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm">
          Completed
        </span>

      </div>

      <div className="mt-12">

        <h2 className="text-6xl font-black">
          WealthPlay
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Interactive financial simulator designed to teach wealth creation,
          investing, saving and long-term financial planning.
        </p>

      </div>

      <div className="mt-14 grid grid-cols-3 gap-5">

        <div className="rounded-2xl bg-white p-6">
          <p className="text-sm text-neutral-500">
            Stack
          </p>

          <h3 className="mt-2 font-semibold">
            Next.js
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-6">
          <p className="text-sm text-neutral-500">
            Language
          </p>

          <h3 className="mt-2 font-semibold">
            Python
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-6">
          <p className="text-sm text-neutral-500">
            Version
          </p>

          <h3 className="mt-2 font-semibold">
            v1.0
          </h3>
        </div>

      </div>

      <div className="mt-auto pt-16">

        <a
          href="/projects/wealthplay"
          className="text-xl font-semibold hover:text-blue-600"
        >
          View Engineering Case Study →
        </a>

      </div>

    </div>
  );
}