import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'

const LINKS = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Kontak' },
]

function LogoMark({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd98a" />
          <stop offset="100%" stopColor="#d99a2b" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="14" fill="url(#lg-mark)" />
      <path
        d="M13 20a2 2 0 0 1 2-2h4.4l1.6-2.4h7.6L30 18h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2z"
        fill="#0c0e14"
      />
      <circle cx="24" cy="25" r="5" fill="url(#lg-mark)" />
      <circle cx="24" cy="25" r="2.4" fill="#0c0e14" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <LogoMark className="w-10 h-10 transition-transform duration-300 group-hover:rotate-6" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-ink-100">
              Lentera <span className="text-brand-400">Kamera</span>
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Rental Studio
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-brand-300 bg-brand-500/10'
                    : 'text-ink-300 hover:text-ink-100 hover:bg-white/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/6281299344550"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost px-4 py-2 text-sm"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            <span>+62 812-9934-4550</span>
          </a>
          <Link to="/contact" className="btn btn-primary px-5 py-2.5 text-sm">
            Sewa Sekarang
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-11 h-11 rounded-xl border border-ink-700 bg-ink-850/80 text-ink-100"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page pb-6">
          <nav className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-brand-300 bg-brand-500/10 border border-brand-500/25'
                      : 'text-ink-200 border border-transparent'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/6281299344550"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost w-full py-3"
            >
              <Icon name="whatsapp" className="w-4 h-4" /> Chat via WhatsApp
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full py-3">
              Sewa Sekarang <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
