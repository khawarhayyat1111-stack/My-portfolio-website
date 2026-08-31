import { profile, work } from '../data/content'

function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Published writing across five sites: classifieds, food, marketing,
            and agency case studies.
          </p>
        </div>
        <a
          href={profile.samples}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Browse all writing samples
        </a>
      </div>

      <div className="border-t border-line">
        {work.map((item, index) => (
          <article
            key={item.title}
            className="group grid gap-4 border-b border-line py-6 transition-colors md:grid-cols-[3.5rem_1fr_auto] md:gap-8"
          >
            <span className="font-display text-sm text-muted">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                  {item.title}
                </h3>
                <span className="rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-muted">
                  {item.tag}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-muted">{item.blurb}</p>
              <p className="mt-2 max-w-2xl text-muted">
                <span className="font-medium text-ink">What I wrote: </span>
                {item.contributions}
              </p>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="self-start text-sm font-medium whitespace-nowrap text-accent underline-offset-4 group-hover:underline"
            >
              Visit site <span aria-hidden="true">&#8599;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
