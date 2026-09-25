import { CONTACT_EMAIL } from '../content';
import { onNav } from '../lib/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="page flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display font-semibold">levelUp · Direct hire for IT</p>
        <div className="flex gap-6 text-sm text-cream/70">
          <a href="/about" onClick={onNav} className="hover:text-cream">
            About
          </a>
          <a href="/articles" onClick={onNav} className="hover:text-cream">
            Articles
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cream">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
