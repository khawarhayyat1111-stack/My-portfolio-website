import { profile } from '../data/content'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-card">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Need a writer, a tester, or both?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          I reply to email fastest. You can also find me on LinkedIn, read my
          blog, or browse my writing samples on Google Drive.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-card px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
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
        <p className="mt-8 text-sm text-muted">
          Freelance services on Upwork:{' '}
          {profile.upwork.map((service, index) => (
            <span key={service.label}>
              <a
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {service.label}
              </a>
              {index < profile.upwork.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-muted">
          <p>
            &copy; 2026 {profile.name} · {profile.location}
          </p>
          <div className="flex gap-6">
            <a
              href={profile.phoneHref}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:text-ink hover:underline"
            >
              WhatsApp: {profile.phoneDisplay}
            </a>
            <a
              href={profile.blog}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:text-ink hover:underline"
            >
              Blog
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
