import { useState } from 'react'
import ThemeToggle from '../common/ThemeToggle'
import { cn } from '../../utils/cn'
import type { Theme, NavLink } from '../../types'

interface HeaderProps {
  theme: Theme
  toggleTheme: () => void
}

const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Curso' },
  { href: '#projects', label: 'Modulos' },
  { href: '#contact', label: 'Contato' },
]

function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#hero" className="header__logo" aria-label="Back to top">
          <span className="header__logo-text">S</span>
        </a>

        <nav
          className={cn('header__nav', menuOpen && 'header__nav--open')}
          aria-label="Main navigation"
        >
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="header__nav-item">
                <a
                  href={link.href}
                  className="header__nav-link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className={cn('header__burger', menuOpen && 'header__burger--active')}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="header__burger-line" />
            <span className="header__burger-line" />
            <span className="header__burger-line" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
