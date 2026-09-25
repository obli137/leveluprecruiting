import { tagsFor, type Theme } from '../data/articleTags';

export default function ArticleTags({
  slug,
  onTheme,
}: {
  slug: string;
  onTheme?: (theme: Theme) => void;
}) {
  const tags = tagsFor(slug);

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.themes.map((theme) =>
        onTheme ? (
          <button
            key={theme}
            type="button"
            onClick={() => onTheme(theme)}
            className="rounded-full bg-purple/10 px-2.5 py-1 text-xs font-semibold text-purple hover:bg-purple hover:text-cream"
          >
            {theme}
          </button>
        ) : (
          <span key={theme} className="rounded-full bg-purple/10 px-2.5 py-1 text-xs font-semibold text-purple">
            {theme}
          </span>
        ),
      )}
      {tags.contributions.map((contribution) => (
        <span key={contribution} className="rounded-full border border-ink/15 px-2.5 py-1 text-xs text-ink/60">
          {contribution}
        </span>
      ))}
    </div>
  );
}
