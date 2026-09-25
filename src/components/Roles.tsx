import { nearbyRoles, roles } from '../content';

export default function Roles() {
  return (
    <section id="roles" className="scroll-mt-24 bg-cream pb-24 text-ink">
      <div className="page">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">The roles we fill</h2>
          <p className="mt-4 text-lg text-ink/70">
            Technology hiring, with a bias toward AI and the people who ship around it.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {roles.map((role) => (
            <li key={role} className="rounded-2xl border border-ink/10 bg-white px-5 py-6 font-medium">
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm font-medium text-ink/50">Around the team</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {nearbyRoles.map((role) => (
            <li key={role} className="rounded-full bg-ink px-3 py-1 text-sm text-cream">
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
