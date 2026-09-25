import { clients } from '../content';

const REPEAT = 4;

function LogoRow({ copy }: { copy: number }) {
  const logos = Array.from({ length: REPEAT }, () => clients).flat();

  return (
    <ul className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={copy > 0 || undefined}>
      {logos.map((client, index) => (
        <li key={`${copy}-${client.name}-${index}`} className="shrink-0">
          <div className="flex h-16 w-36 items-center justify-center rounded-xl bg-white px-4">
            <img
              src={client.src}
              alt={copy === 0 && index < clients.length ? client.name : ''}
              className="max-h-9 max-w-full object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function LogoCarousel() {
  return (
    <section className="bg-cream py-14 text-ink" aria-label="Teams that already work with levelUp">
      <div className="page mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Teams that already work with levelUp
        </h2>
      </div>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max">
          <LogoRow copy={0} />
          <LogoRow copy={1} />
        </div>
      </div>
    </section>
  );
}
