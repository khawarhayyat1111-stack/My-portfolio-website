import { experience } from '../data/content'

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-5 md:py-8"
    >
      <h2 className="mb-6 font-display text-3xl font-medium tracking-tight sm:text-4xl md:mb-8">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={`${job.role}-${job.company}`}
            className="grid gap-4 border-t border-line pt-6 md:grid-cols-[9rem_1fr] md:gap-8"
          >
            <div className="text-sm text-muted">
              <p>{job.period}</p>
              <p className="mt-1">{job.location}</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                {job.role}
              </h3>
              <p className="mt-1 font-medium text-accent">{job.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
