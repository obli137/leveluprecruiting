export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('http') ? (
          <a
            key={`${part}-${index}`}
            href={part}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            {part.replace(/^https?:\/\//, '')}
          </a>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}
