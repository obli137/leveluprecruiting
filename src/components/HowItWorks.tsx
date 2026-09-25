import { steps } from '../content';

export default function HowItWorks() {
  return (
    <section id="how" className="how-bg relative scroll-mt-24 overflow-hidden py-24">
      <div className="page relative">
        <h2 className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Three steps. Then a start date.
        </h2>
        <ol className="mt-14 grid max-w-3xl gap-10 lg:max-w-none lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="font-display text-sm font-semibold text-gold">{step.number}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-cream/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
