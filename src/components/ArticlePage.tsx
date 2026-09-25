import { useEffect } from 'react';
import ArticleTags from './ArticleTags';
import AuthorLink from './AuthorLink';
import RichText from './RichText';
import { articleBySlug, type Block } from '../data/articles';
import { onNav } from '../lib/navigation';

function groupBlocks(body: Block[]) {
  const grouped: Array<{ type: 'p' | 'h2'; text: string } | { type: 'ul'; items: string[] }> = [];
  let items: string[] = [];

  const flush = () => {
    if (items.length === 0) return;
    grouped.push({ type: 'ul', items });
    items = [];
  };

  body.forEach((block) => {
    if (block.type === 'li') {
      items.push(block.text);
      return;
    }
    flush();
    grouped.push({ type: block.type === 'h2' ? 'h2' : 'p', text: block.text });
  });
  flush();
  return grouped;
}

export default function ArticlePage({ slug }: { slug: string }) {
  const article = articleBySlug(slug);

  useEffect(() => {
    document.title = article ? `${article.title} — levelUp` : 'Article — levelUp';
  }, [article]);

  if (!article) {
    return (
      <section className="bg-cream pb-24 pt-32 text-ink">
        <div className="page max-w-2xl">
          <h1 className="font-display text-4xl font-semibold">This piece isn’t here.</h1>
          <a href="/articles" onClick={onNav} className="mt-6 inline-block underline underline-offset-4">
            Back to the blog
          </a>
        </div>
      </section>
    );
  }

  const blocks = groupBlocks(article.body);

  return (
    <article className="bg-cream pb-24 pt-28 text-ink">
      <div className="page max-w-2xl">
        <a href="/articles" onClick={onNav} className="text-sm text-ink/60 hover:text-ink">
          The Recruiter's Logbook
        </a>
        <img
          src={`/articles/${article.slug}.png`}
          alt=""
          className="mt-8 aspect-video w-full rounded-3xl object-cover"
        />
        <p className="mt-8 text-sm text-ink/50">{article.date}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">{article.title}</h1>
        <p className="mt-6 text-ink/70">
          By <AuthorLink />
        </p>
        <ArticleTags slug={article.slug} />
        <div className="mt-12 space-y-6 text-lg leading-relaxed">
          {blocks.map((block, index) => {
            if (block.type === 'h2') {
              return (
                <h2 key={index} className="pt-6 font-display text-2xl font-semibold tracking-tight">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'ul') {
              return (
                <ul key={index} className="space-y-3">
                  {block.items.map((item, itemIndex) => (
                    <li key={`${item}-${itemIndex}`} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" aria-hidden="true" />
                      <span>
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
