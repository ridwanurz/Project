import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

export default function FloatingCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <a
        href="https://wa.me/6281299344550?text=Halo%20Lentera%20Kamera%2C%20saya%20ingin%20menyewa%20unit."
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-ink-850/90 border border-ink-700 px-4 py-2.5 text-sm text-ink-200 shadow-lift backdrop-blur hover:border-brand-500/50 hover:text-brand-300 transition-colors"
      >
        <Icon name="whatsapp" className="w-4 h-4 text-brand-400" />
        <span className="hidden sm:inline">Butuh bantuan?</span>
      </a>
      <a
        href="https://wa.me/6281299344550?text=Halo%20Lentera%20Kamera%2C%20saya%20ingin%20menyewa%20unit."
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="grid place-items-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 text-ink-950 shadow-[0_16px_36px_-14px_rgba(245,181,68,0.9)] hover:scale-105 transition-transform duration-200"
      >
        <Icon name="whatsapp" className="w-7 h-7" />
      </a>
    </div>
  )
}
