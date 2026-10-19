import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const NAV = [
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan & Katalog' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Kontak' },
]

const SERVICE_LINKS = [
  { to: '/services', label: 'Sewa Kamera & Lensa' },
  { to: '/services', label: 'Sewa + Operator' },
  { to: '/services', label: 'Paket Produksi' },
  { to: '/services', label: 'Event & Multi-Camera' },
  { to: '/services', label: 'Jasa Drone Aerial' },
]

const SOCIALS = [
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com' },
  { name: 'TikTok', icon: 'tiktok', url: 'https://tiktok.com' },
  { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/6281299344550' },
]

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-ink-800 bg-ink-950">
      <div className="absolute inset-0 grid-glow opacity-40 pointer-events-none" />
      <div className="relative container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-300 to-brand-600 text-ink-950">
                <Icon name="camera" className="w-6 h-6" />
              </span>
              <span className="font-display text-lg font-bold text-ink-100">
                Lentera <span className="text-brand-400">Kamera</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink-400 max-w-xs">
              Perusahaan penyewaan kamera profesional di Jabodetabek. Unit terawat, operator
              berpengalaman, harga transparan.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid place-items-center w-10 h-10 rounded-xl border border-ink-700 text-ink-300 hover:text-brand-300 hover:border-brand-500/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon name={s.icon} className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-200 mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-400 hover:text-brand-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-200 mb-5">
              Layanan
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-400 hover:text-brand-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-200 mb-5">
              Studio & Kontak
            </h3>
            <ul className="space-y-4 text-sm text-ink-400">
              <li className="flex gap-3">
                <Icon name="pin" className="w-5 h-5 shrink-0 text-brand-500" />
                <span>
                  Jl. Kaliurang KM 5 No. 12
                  <br />
                  Jakarta Selatan 12560, Indonesia
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="w-5 h-5 shrink-0 text-brand-500" />
                <a
                  href="https://wa.me/6281299344550"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-300 transition-colors"
                >
                  +62 812-9934-4550
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="w-5 h-5 shrink-0 text-brand-500" />
                <a
                  href="mailto:hello@lenterakamera.id"
                  className="hover:text-brand-300 transition-colors"
                >
                  hello@lenterakamera.id
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="w-5 h-5 shrink-0 text-brand-500" />
                <span>Senin - Sabtu, 09.00 - 20.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <p>&copy; {new Date().getFullYear()} Lentera Kamera. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-5">
            <Link to="/about" className="hover:text-ink-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/contact" className="hover:text-ink-300 transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
