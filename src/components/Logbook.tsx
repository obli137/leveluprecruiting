import { articles } from '../data/articles';
import { onNav } from '../lib/navigation';

const latest = [...articles].reverse().slice(0, 3);

export default function Logbook() {
  return (
    <section id="logbook" className="scroll-mt-24 py-24">
      <div className="page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">The Recruiter's Logbook</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              From the logbook
            </h2>
            <p className="mt-4 text-lg text-cream/75">
              Field notes on hiring in Latin America. Process, cost, and the roles US teams are opening.
            </p>
          </div>
          <a href="/articles" onClick={onNav} className="btn-light w-fit shrink-0">
            Read the blog
          </a>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <li key={article.slug}>
              <a href={`/articles/${article.slug}`} onClick={onNav} className="group block">
                <img
                  src={`/articles/${article.slug}.png`}
                  alt=""
                  className="aspect-video w-full rounded-2xl object-cover"
                />
                <time className="mt-4 block text-sm text-cream/50">{article.date}</time>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight group-hover:text-gold">
                  {article.title}
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
