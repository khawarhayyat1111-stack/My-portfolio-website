import { profile } from '../data/content'
import ThemeToggle from './ThemeToggle'
import ContactMenu from './ContactMenu'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
]

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.shortName}
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <ContactMenu />
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <ContactMenu />
        </div>
      </nav>
    </header>
  )
}

export default Nav
