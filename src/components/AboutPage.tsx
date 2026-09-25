import { useEffect } from 'react';
import { AUTHOR_LINKEDIN } from '../data/articles';
import { onNav } from '../lib/navigation';

const team = [
  {
    name: 'Mercedes Guevara Lynch',
    role: 'Technical Recruiter',
    photo: '/assets/mechi.jpeg',
    position: 'object-[32%_22%]',
    bio: 'Finds the engineers and holds the first conversation.',
  },
  {
    name: 'Martin Narvaja',
    role: 'Recruiting Lead',
    photo: '/assets/tincho.jpeg',
    position: 'object-[center_28%]',
    bio: 'Owns the search with the hiring manager, from the brief to the offer.',
  },
  {
    name: 'Maria Vivequin',
    role: 'Technical Recruiter',
    photo: '/assets/meri.jpeg',
    position: 'object-[center_62%]',
    bio: 'Screens for the work the team actually needs done.',
  },
] as const;

const points = [
  'Which country for which role, before outreach starts.',
  'The real cost of the hire: salary, benefits, and markup.',
  'AI, data, cloud, and the product engineers around them.',
  'Direct hire. No fee until they start.',
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About us — levelUp';
  }, []);

  return (
    <section className="bg-cream pb-24 pt-28 text-ink">
      <div className="page">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple">About us</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Built to hire in Latin America
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          levelUp helps US companies build engineering hubs in the region. Before the search starts,
          we decide which country fits the role and what the talent actually costs.
        </p>

        <div className="mt-16 grid items-center gap-12 border-t border-ink/15 pt-16 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <figure>
            <img
              src="/assets/perfil.jpeg"
              alt="Mariano Obligado speaking at the Argentine HR Congress"
              className="aspect-[3/4] w-full rounded-3xl object-cover object-[center_42%]"
            />
            <figcaption className="mt-4 text-sm text-ink/50">Argentine HR Congress</figcaption>
          </figure>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple">Founder</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              <a
                href={AUTHOR_LINKEDIN}
                className="hover:text-purple"
                target="_blank"
                rel="noreferrer"
              >
                Mariano Obligado
              </a>
            </h2>
            <p className="mt-2 text-sm text-ink/55">
              Founder of levelUp · LinkedIn Top Voice · Talent Acquisition
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Mariano Obligado has spent fifteen years hiring technical teams in Latin America. US
              companies work with him when they are opening a hub and need a read on the market:
              which country has depth for the role, which seniority is realistic, and what a strong
              hire costs once salary, benefits, and contractor markup are included.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/75">
              He is a LinkedIn Top Voice in Talent Acquisition and a speaker at the Argentine HR
              Congress. The person who calibrates the role owns the search, including the country,
              the level, and the budget.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="rounded-2xl border border-ink/10 bg-white px-5 py-4">
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-20 border-t border-ink/15 pt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">The team</h2>
          <p className="mt-4 max-w-xl text-lg text-ink/70">
            The search is run by the people on this page. They work the Latin America market every day.
          </p>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <img
                  src={person.photo}
                  alt={person.name}
                  className={`aspect-[4/5] w-full rounded-3xl object-cover ${person.position}`}
                />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-purple">
                  {person.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{person.name}</h3>
                <p className="mt-3 text-ink/70">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 rounded-3xl bg-ink px-8 py-10 text-cream md:px-12">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Opening a hub, or one role?
          </h2>
          <p className="mt-4 max-w-xl text-cream/75">
            Tell us the work. We’ll recommend the country, the level, and a cost range, then bring
            people worth interviewing.
          </p>
          <a href="/#start" onClick={onNav} className="btn-light mt-8">
            Start a search
          </a>
        </div>
      </div>
    </section>
  );
}
