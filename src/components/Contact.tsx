import { useForm } from '@formspree/react';
import { FormEvent, useState } from 'react';
import { CONTACT_EMAIL } from '../content';

const FORM_ID = 'xlgwoelr';

type Fields = {
  name: string;
  email: string;
  company: string;
  role: string;
  note: string;
};

const empty: Fields = { name: '', email: '', company: '', role: '', note: '' };

const labels: Record<keyof Fields, string> = {
  name: 'Name',
  email: 'Work email',
  company: 'Company',
  role: 'Role you are hiring',
  note: 'Anything we should know',
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [state, handleSubmit] = useForm(FORM_ID);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const nextErrors: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) nextErrors.name = 'Add your name.';
    if (!isEmail(fields.email.trim())) nextErrors.email = 'Use a work email.';
    if (!fields.company.trim()) nextErrors.company = 'Add your company.';
    if (!fields.role.trim()) nextErrors.role = 'Tell us the role.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      return;
    }
    handleSubmit(event);
  }

  return (
    <section
      id="start"
      className="scroll-mt-24 bg-cover bg-center py-24"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(16,12,20,0.55), rgba(16,12,20,0.72)), url(/assets/fondo1.png)',
      }}
    >
      <div className="page grid items-start gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Tell us who you need.
          </h2>
          <p className="mt-4 max-w-md text-lg text-cream/75">We reply within one business day.</p>
        </div>

        <div className="rounded-3xl bg-cream p-6 text-ink md:p-8">
          {state.succeeded ? (
            <p className="text-lg">
              We received your search. We reply within one business day. If you need to write again, use{' '}
              <a className="font-medium underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-4">
              <input type="hidden" name="_subject" value={`New search — ${fields.company.trim()}`} />
              {(Object.keys(labels) as (keyof Fields)[]).map((key) => (
                <label key={key} className="grid gap-1.5 text-sm font-medium">
                  {labels[key]}
                  {key === 'note' ? (
                    <textarea
                      className="field min-h-28 resize-y"
                      name="message"
                      value={fields.note}
                      onChange={(event) => update('note', event.target.value)}
                    />
                  ) : (
                    <input
                      className="field"
                      name={key}
                      type={key === 'email' ? 'email' : 'text'}
                      autoComplete={
                        key === 'email' ? 'email' : key === 'name' ? 'name' : key === 'company' ? 'organization' : 'off'
                      }
                      value={fields[key]}
                      onChange={(event) => update(key, event.target.value)}
                      aria-invalid={Boolean(errors[key])}
                      aria-describedby={errors[key] ? `${key}-error` : undefined}
                    />
                  )}
                  {errors[key] && (
                    <span id={`${key}-error`} className="text-sm font-normal text-red-800">
                      {errors[key]}
                    </span>
                  )}
                </label>
              ))}
              {state.errors && (
                <p className="text-sm text-red-800" role="alert">
                  We couldn’t send that. Write to{' '}
                  <a className="font-medium underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
              <button type="submit" className="btn-dark mt-2" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Start a search'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
