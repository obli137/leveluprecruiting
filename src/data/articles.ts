import data from './articles.json';

export type Block = { type: 'p' | 'h2' | 'li'; text: string };

export type Article = {
  slug: string;
  edition: string;
  title: string;
  date: string;
  original: string;
  body: Block[];
};

const omitted = new Set(['some-ideas-also-need-to-be-seen']);

export const articles = (data as Article[]).filter((article) => !omitted.has(article.slug));

export const AUTHOR_LINKEDIN = 'https://www.linkedin.com/in/marianoobligado/';

export function articleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function excerpt(article: Article) {
  const first = article.body.find((block) => block.type === 'p')?.text ?? '';
  if (first.length <= 180) return first;
  return `${first.slice(0, 180).replace(/\s+\S*$/, '')}…`;
}
