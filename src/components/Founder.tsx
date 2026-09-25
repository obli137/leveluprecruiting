import { CONTACT_EMAIL } from '../content';

export default function Founder() {
  return (
    <section className="py-24">
      <div className="page grid items-center gap-12 lg:grid-cols-2">
        <figure className="max-w-md">
          <img
            src="/assets/perfil.jpeg"
            alt="Mariano Obligado speaking at the Argentine HR Congress"
            className="aspect-[3/4] w-full rounded-3xl object-cover object-[center_42%]"
          />
          <figcaption className="mt-4 text-sm text-cream/60">Argentine HR Congress</figcaption>
        </figure>
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            You work with Mariano.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
            LinkedIn Top Voice in Talent Acquisition, and a speaker at the Argentine HR Congress.
            Fifteen years hiring technical teams. The person who calibrates the role owns the search.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-block font-medium text-gold underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
