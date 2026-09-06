import Container from "@/components/layout/Container";

export default function Signature() {
  return (
    <section className="py-40">

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <p className="uppercase tracking-[0.3em] text-neutral-500">
            Engineering Journal
          </p>

          <h2 className="mt-8 text-7xl font-black leading-tight">

            Every Product
            <br />

            Starts As
            <br />

            A Question.

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-neutral-600">

            This portfolio isn&apos;t a collection of screenshots.

            It&apos;s a record of ideas becoming products through engineering,
            experimentation and continuous iteration.

          </p>

        </div>

      </Container>

    </section>
  );
}
