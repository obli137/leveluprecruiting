import { AUTHOR_LINKEDIN } from '../data/articles';

export default function AuthorLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={AUTHOR_LINKEDIN}
      target="_blank"
      rel="noreferrer"
      className={`font-medium underline decoration-current/30 underline-offset-4 hover:decoration-current ${className}`}
    >
      Mariano Obligado
    </a>
  );
}
