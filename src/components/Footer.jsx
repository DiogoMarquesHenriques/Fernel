import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Início' },
  { to: '/tratores', label: 'Tratores' },
  { to: '/sobre-nos', label: 'Sobre Nós' },
  { to: '/contacto', label: 'Contacto' },
]

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.373-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'https://youtube.com', label: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-agrix-yellow rounded">
              <img
                src="/fernel-agrix-logo.png"
                alt="FERNEL AGRIX"
                className="h-12 w-auto object-contain object-left"
                style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
              />
            </Link>
            <p className="mt-3 text-sm">
              Potência Inteligente. Maquinaria agrícola de referência para o agricultor moderno.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm transition-colors hover:text-agrix-yellow focus:outline-none focus:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Rua da Indústria, 123</li>
              <li>2000-000 Santarém</li>
              <li>
                <a href="tel:+351123456789" className="hover:text-agrix-yellow transition-colors">+351 123 456 789</a>
              </li>
              <li>
                <a href="mailto:geral@agrix.pt" className="hover:text-agrix-yellow transition-colors">geral@agrix.pt</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Redes sociais</h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-agrix-yellow transition-colors focus:outline-none focus:ring-2 focus:ring-agrix-yellow rounded"
                  aria-label={label}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AGRIX. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
