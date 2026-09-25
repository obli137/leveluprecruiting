import { inclusions } from '../content';

export default function Includes() {
  return (
    <section className="bg-cream py-24 text-ink">
      <div className="page">
        <h2 className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          What every search includes
        </h2>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {inclusions.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-purple" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-3xl bg-ink px-8 py-8 text-cream md:px-10">
          <p className="eyebrow">90 days</p>
          <p className="mt-3 max-w-3xl text-lg text-cream/80">
            If they leave in the first three months over performance or fit for the role, we run the
            search again at no extra fee.
          </p>
        </div>
      </div>
    </section>
  );
}
