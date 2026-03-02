import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/tratores', label: 'Tratores' },
  { to: '/sobre-nos', label: 'Sobre Nós' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header
      className="sticky top-0 z-50 w-full bg-agrix-green shadow-md transition-shadow duration-300"
      role="banner"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <Link
          to="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-agrix-yellow focus:ring-offset-2 focus:ring-offset-agrix-green rounded"
          aria-label="FERNEL AGRIX — Início"
        >
          <img
            src="/fernel-agrix-logo.png"
            alt="FERNEL AGRIX — Potência Inteligente"
            className="h-12 sm:h-16 w-auto object-contain object-left"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-medium transition-colors rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-agrix-yellow focus:ring-offset-2 focus:ring-offset-agrix-green ${
                  location.pathname === to
                    ? 'text-agrix-yellow'
                    : 'text-white hover:text-agrix-yellow'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/tratores" className="btn-primary text-agrix-green bg-agrix-yellow text-sm py-2 px-4">
              Ver Tratores
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-agrix-yellow"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">{mobileOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="border-t border-white/20 bg-agrix-green-dark px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                  location.pathname === to ? 'text-agrix-yellow bg-white/10' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/tratores"
              className="btn-primary w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Ver Tratores
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
