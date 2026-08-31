import { publications } from '../data/content'

function Publication() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-5 md:py-8">
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        Published books
      </h2>
      <p className="mt-3 max-w-xl text-muted">
        Two books on communication and the craft of writing.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:mt-8">
        {publications.map((book) => (
          <article
            key={book.title}
            className="flex gap-5 rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div
              aria-hidden="true"
              className="flex h-28 w-20 shrink-0 items-center justify-center rounded-md border border-line border-l-4 border-l-accent bg-paper"
            >
              <span className="font-display text-3xl font-medium text-accent">
                {book.title.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl leading-snug font-medium tracking-tight text-ink sm:text-2xl">
                {book.title}
              </h3>
              {book.year && (
                <p className="mt-2 text-sm font-medium text-accent">
                  {book.year}
                </p>
              )}
              {book.description && (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {book.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Publication
