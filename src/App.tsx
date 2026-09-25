import { useEffect } from 'react';
import AboutPage from './components/AboutPage';
import ArticlePage from './components/ArticlePage';
import ArticlesIndex from './components/ArticlesIndex';
import Contact from './components/Contact';
import Coverage from './components/Coverage';
import Footer from './components/Footer';
import Founder from './components/Founder';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Includes from './components/Includes';
import Logbook from './components/Logbook';
import LogoCarousel from './components/LogoCarousel';
import Roles from './components/Roles';
import { usePath } from './lib/navigation';

function Home() {
  useEffect(() => {
    document.title = 'levelUp — Hire the engineer. Pay when they start.';
    const hash = window.location.hash;
    if (hash) {
      window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
      return;
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <LogoCarousel />
      <Roles />
      <HowItWorks />
      <Coverage />
      <Founder />
      <Includes />
      <Logbook />
      <Contact />
    </>
  );
}

export default function App() {
  const path = usePath();
  const articleSlug = path.startsWith('/articles/') ? decodeURIComponent(path.slice('/articles/'.length)) : '';

  useEffect(() => {
    if (path !== '/') window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <a
        href="#start"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Start a search
      </a>
      <Header />
      <main>
        {path === '/about' && <AboutPage />}
        {path === '/articles' && <ArticlesIndex />}
        {articleSlug && <ArticlePage slug={articleSlug} />}
        {path !== '/about' && path !== '/articles' && !articleSlug && <Home />}
      </main>
      <Footer />
    </>
  );
}
