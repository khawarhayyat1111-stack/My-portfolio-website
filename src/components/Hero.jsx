import { profile, stats } from '../data/content'
import Avatar3D from './Avatar3D'

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-10 pb-10 sm:pt-20 sm:pb-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Khawar Hayyat
          </h1>
          <p className="mt-6 font-display text-2xl leading-snug font-medium tracking-tight text-accent sm:text-3xl">
            Content that ranks. Software that works.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Senior content writer and QA tester. I write SEO content, case
            studies, and books for clients across industries, and I test web
            and mobile apps so bugs reach me before they reach your users.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
            >
              See my work
            </a>
            <a
              href={profile.samples}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line bg-card px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Writing samples
            </a>
          </div>
        </div>
        <div className="order-first justify-self-center lg:order-none lg:justify-self-end">
          <Avatar3D />
        </div>
      </div>
      <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-4 md:mt-12 md:gap-8 md:pt-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-4xl font-medium text-ink">
              {stat.value}
            </dd>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Hero
