export default function Coverage() {
  return (
    <section className="bg-cream py-24 text-ink">
      <div className="page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Latin America. US hours.
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            Argentina, Brazil, Chile, Colombia, Costa Rica, and Mexico. Overlap with your workday is
            part of the brief.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl bg-ink">
          <img
            src="/assets/mapa.png"
            alt="Map of Latin America with talent in Mexico City, San José, Bogotá, São Paulo, Rio de Janeiro, Santiago, and Buenos Aires"
            className="h-80 w-full object-cover object-[78%_center] md:h-[28rem]"
          />
        </div>
      </div>
    </section>
  );
}
