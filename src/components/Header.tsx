import { useEffect, useState } from 'react';
import { onNav, usePath } from '../lib/navigation';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#roles', label: 'Roles' },
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePath();
  const onHome = path === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const hrefFor = (href: string) => (href.startsWith('#') && !onHome ? `/${href}` : href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open || !onHome ? 'bg-ink/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="page flex h-16 items-center justify-between">
        <a href="/" onClick={onNav} className="flex items-center gap-2.5">
          <img src="/assets/logo-icon.png" alt="" className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight">levelUp</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={hrefFor(link.href)}
              onClick={onNav}
              className="text-sm text-cream/80 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a href={onHome ? '#start' : '/#start'} onClick={onNav} className="btn-light">
            Start a search
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-sm font-medium"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="page flex flex-col gap-4 pb-6 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={hrefFor(link.href)} onClick={onNav} className="text-lg">
              {link.label}
            </a>
          ))}
          <a href={onHome ? '#start' : '/#start'} onClick={onNav} className="btn-light w-fit">
            Start a search
          </a>
        </nav>
      )}
    </header>
  );
}
