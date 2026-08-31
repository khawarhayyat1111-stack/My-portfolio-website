import { certifications, education } from '../data/content'

function Education() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-5 md:py-8">
      <h2 className="mb-6 font-display text-3xl font-medium tracking-tight sm:text-4xl md:mb-8">
        Education and certifications
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-medium tracking-widest text-muted uppercase">
            Education
          </h3>
          <ul className="space-y-6">
            {education.map((entry) => (
              <li key={entry.degree} className="border-t border-line pt-4">
                <p className="font-display text-xl font-medium tracking-tight text-ink">
                  {entry.degree}
                </p>
                <p className="mt-1 text-muted">{entry.school}</p>
                <p className="mt-1 text-sm text-muted">
                  {entry.period}
                  {entry.note ? ` · ${entry.note}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium tracking-widest text-muted uppercase">
            Certifications
          </h3>
          <ul className="space-y-6">
            {certifications.map((cert) => (
              <li key={cert.name} className="border-t border-line pt-4">
                <p className="font-display text-xl font-medium tracking-tight text-ink">
                  {cert.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {cert.org} · {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
