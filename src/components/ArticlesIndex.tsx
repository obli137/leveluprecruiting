import { useEffect, useMemo, useState } from 'react';
import ArticleTags from './ArticleTags';
import AuthorLink from './AuthorLink';
import { tagsFor, themes, type Theme } from '../data/articleTags';
import { articles, excerpt, type Article } from '../data/articles';
import { onNav } from '../lib/navigation';

const newestFirst = [...articles].reverse();

function matches(article: Article, query: string, theme: Theme | null) {
  const tags = tagsFor(article.slug);
  if (theme && !tags.themes.includes(theme)) return false;
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  const haystack = [article.title, excerpt(article), ...tags.themes, ...tags.contributions].join(' ').toLowerCase();
  return haystack.includes(needle);
}

function Byline() {
  return (
    <p className="mt-3 text-sm text-ink/60">
      By <AuthorLink />
    </p>
  );
}

export default function ArticlesIndex() {
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    document.title = "The Recruiter's Logbook — levelUp";
  }, []);
  const filtering = query.trim().length > 0 || theme !== null;

  const visible = useMemo(
    () => newestFirst.filter((article) => matches(article, query, theme)),
    [query, theme],
  );

  const lead = newestFirst[0];
  const featured = newestFirst.find((article) => article.slug === 'what-is-a-forward-deployed-engineer');
  const alongside = newestFirst.find(
    (article) => article.slug !== lead.slug && article.slug !== featured?.slug,
  );
  const secondary = [featured, alongside].filter((article): article is Article => Boolean(article));
  const shown = new Set([lead.slug, ...secondary.map((article) => article.slug)]);
  const rest = newestFirst.filter((article) => !shown.has(article.slug));

  return (
    <section className="bg-cream pb-24 pt-28 text-ink">
      <div className="page">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple">The Recruiter's Logbook</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          Writing on recruiting
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">Processes, metrics, and applied AI.</p>

        <form
          className="mt-10"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="article-search" className="text-sm font-medium">
            Search by theme
          </label>
          <input
            id="article-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="AI, metrics, interviews, checklist…"
            className="mt-2 w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-ink outline-none focus:border-purple focus:ring-2 focus:ring-purple/20"
          />
        </form>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Themes">
          <button
            type="button"
            onClick={() => setTheme(null)}
            className={`rounded-full px-3 py-1 text-sm ${theme === null ? 'bg-ink text-cream' : 'bg-ink/5 text-ink/70'}`}
            aria-pressed={theme === null}
          >
            All
          </button>
          {themes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTheme(item)}
              className={`rounded-full px-3 py-1 text-sm ${theme === item ? 'bg-ink text-cream' : 'bg-ink/5 text-ink/70'}`}
              aria-pressed={theme === item}
            >
              {item}
            </button>
          ))}
        </div>

        {filtering ? (
          <div className="mt-12">
            <p className="text-sm text-ink/50">
              {visible.length} {visible.length === 1 ? 'piece' : 'pieces'}
            </p>
            {visible.length === 0 ? (
              <p className="mt-8 font-display text-3xl font-semibold">No pieces match that search.</p>
            ) : (
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {visible.map((article) => (
                  <li key={article.slug} className="grid gap-4 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
                    <a href={`/articles/${article.slug}`} onClick={onNav} className="block overflow-hidden rounded-xl">
                      <img src={`/articles/${article.slug}.png`} alt="" className="aspect-video w-full object-cover" />
                    </a>
                    <div>
                      <time className="text-sm text-ink/50">{article.date}</time>
                      <a
                        href={`/articles/${article.slug}`}
                        onClick={onNav}
                        className="mt-1 block font-display text-2xl font-semibold tracking-tight hover:text-purple"
                      >
                        {article.title}
                      </a>
                      <ArticleTags slug={article.slug} onTheme={setTheme} />
                      <Byline />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="mt-14">
            <article className="grid items-start gap-8 border-t border-ink/15 pt-8 lg:grid-cols-12">
              <a href={`/articles/${lead.slug}`} onClick={onNav} className="block overflow-hidden rounded-3xl lg:col-span-7">
                <img src={`/articles/${lead.slug}.png`} alt="" className="aspect-video w-full object-cover" />
              </a>
              <div className="lg:col-span-5">
                <time className="text-sm text-ink/50">{lead.date}</time>
                <a
                  href={`/articles/${lead.slug}`}
                  onClick={onNav}
                  className="mt-3 block font-display text-4xl font-semibold leading-tight tracking-tight hover:text-purple md:text-5xl"
                >
                  {lead.title}
                </a>
                <p className="mt-4 text-lg text-ink/70">{excerpt(lead)}</p>
                <ArticleTags slug={lead.slug} onTheme={setTheme} />
                <Byline />
              </div>
            </article>

            <div className="mt-10 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-2">
              {secondary.map((article) => (
                <article key={article.slug}>
                  <a href={`/articles/${article.slug}`} onClick={onNav} className="block overflow-hidden rounded-2xl">
                    <img src={`/articles/${article.slug}.png`} alt="" className="aspect-video w-full object-cover" />
                  </a>
                  <time className="mt-4 block text-sm text-ink/50">{article.date}</time>
                  <a
                    href={`/articles/${article.slug}`}
                    onClick={onNav}
                    className="mt-2 block font-display text-2xl font-semibold tracking-tight hover:text-purple"
                  >
                    {article.title}
                  </a>
                  <p className="mt-3 text-ink/70">{excerpt(article)}</p>
                  <ArticleTags slug={article.slug} onTheme={setTheme} />
                  <Byline />
                </article>
              ))}
            </div>

            <ul className="mt-10 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-2">
              {rest.map((article) => (
                <li key={article.slug}>
                  <a href={`/articles/${article.slug}`} onClick={onNav} className="block overflow-hidden rounded-2xl">
                    <img src={`/articles/${article.slug}.png`} alt="" className="aspect-video w-full object-cover" />
                  </a>
                  <time className="mt-4 block text-sm text-ink/50">{article.date}</time>
                  <a
                    href={`/articles/${article.slug}`}
                    onClick={onNav}
                    className="mt-2 block font-display text-2xl font-semibold tracking-tight hover:text-purple"
                  >
                    {article.title}
                  </a>
                  <ArticleTags slug={article.slug} onTheme={setTheme} />
                  <Byline />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
