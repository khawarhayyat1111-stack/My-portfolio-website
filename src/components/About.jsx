import { about } from '../data/content'

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-8">
      <div className="grid gap-8 md:grid-cols-[11rem_1fr] md:gap-10">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          About
        </h2>
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
