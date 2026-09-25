export default function Hero() {
  return (
    <section id="top" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="page max-w-3xl">
        <p className="eyebrow mb-6">Direct hire for IT</p>
        <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          Hire the engineer.
          <span className="mt-2 block text-gold">Pay when they start.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
          AI, machine learning, data, and the product engineers around them. One search, run by
          Mariano Obligado, LinkedIn Top Voice in Talent Acquisition.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a href="#start" className="btn-light">
            Start a search
          </a>
          <a href="#how" className="text-sm font-medium text-cream/80 underline-offset-4 hover:underline">
            See how it works
          </a>
        </div>
        <p className="mt-6 text-sm text-cream/55">No fee until your hire starts.</p>
      </div>
    </section>
  );
}
