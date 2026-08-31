import { skills } from '../data/content'

function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-8">
      <h2 className="mb-8 font-display text-3xl font-medium tracking-tight sm:text-4xl">
        Skills
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.group}
            className="rounded-2xl border border-line bg-card p-6"
          >
            <h3 className="font-display text-xl font-medium tracking-tight text-ink">
              {skill.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
