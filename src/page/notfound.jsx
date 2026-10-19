import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center pt-32 pb-20 px-5 overflow-hidden">
      <div className="absolute inset-0 grid-glow opacity-60" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-[360px] rounded-full bg-brand-500/10 blur-[110px]" />

      <div className="relative text-center max-w-lg">
        <p className="font-display text-[6rem] md:text-[9rem] font-extrabold leading-none text-gradient">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl md:text-3xl font-bold text-ink-100">
          Frame ini tidak ditemukan
        </h1>
        <p className="mt-4 text-ink-400 leading-relaxed">
          Halaman yang Anda cari sudah dipindah atau tidak pernah ada. Mari kembali ke katalog
          dan temukan unit yang Anda butuhkan.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-primary px-6 py-3">
            <Icon name="arrowLeft" className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link to="/services" className="btn btn-ghost px-6 py-3">
            Lihat Katalog
          </Link>
        </div>
      </div>
    </section>
  )
}
