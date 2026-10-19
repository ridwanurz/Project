import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CameraArt from '../components/CameraArt.jsx'
import Icon from '../components/Icon.jsx'
import { gallery, clients, testimonials } from '../data/testimonials.js'

const CASE_STUDY = [
  { value: '2 hari', label: 'Waktu produksi', detail: 'Katalog 12 varian produk' },
  { value: '4K 60p', label: 'Format rekaman', detail: '10-bit 4:2:2 RAW internal' },
  { value: '18%', label: 'Efisiensi biaya', detail: 'Dibanding sewa unit terpisah' },
]

export default function Portfolio() {
  const cats = useMemo(() => ['Semua', ...new Set(gallery.map((g) => g.cat))], [])
  const [active, setActive] = useState('Semua')
  const [selected, setSelected] = useState(null)

  const items = useMemo(
    () => (active === 'Semua' ? gallery : gallery.filter((g) => g.cat === active)),
    [active],
  )

  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title={<>Hasil kerja yang <span className="text-gradient">bisa Anda reka</span>.</>}
        desc="Sebagian besar proyek kami bersifat rahasia, tapi ini cuplikan yang boleh kami tampilkan — dari commercial, wedding, sampai dokumenter."
        art="lens"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/contact" className="btn btn-primary px-6 py-3">
            Buat Proyek Serupa
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
          <Link to="/services" className="btn btn-ghost px-6 py-3">
            Lihat Katalog
          </Link>
        </div>
      </PageHero>

      {/* GALLERY */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    active === c
                      ? 'bg-brand-500 text-ink-950 border-brand-500 font-semibold'
                      : 'border-ink-700 text-ink-300 hover:border-brand-500/40 hover:text-ink-100'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <p className="text-sm text-ink-500">{items.length} proyek ditampilkan</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelected(g)}
                className={`group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900 hover:border-brand-500/40 transition-all duration-300 animate-fade-up ${
                  g.span || ''
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[220px] w-full">
                  <CameraArt
                    variant={g.art}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <span className="text-[11px] uppercase tracking-wider text-brand-400">
                    {g.cat}
                  </span>
                  <h3 className="mt-1 font-display text-sm md:text-base font-semibold text-ink-100">
                    {g.title}
                  </h3>
                </div>
                <span className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-full bg-ink-950/70 border border-ink-700 text-ink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="play" className="w-3.5 h-3.5" filled />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 md:py-24 bg-ink-900/40 border-y border-ink-800">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Studi Kasus"
              title="Katalog produk skincare dalam 2 hari"
              desc="Sebuah brand skincare lokal membutuhkan 12 varian produk dalam format untuk website dan media sosial. Kami menangani unit, lighting, crew, sampai color grading dalam satu paket."
            />
            <ul className="mt-7 space-y-3">
              {[
                '2 unit Sony A7 IV + 2 Aputure 60D sebagai fill light',
                '1 lighting assistant untuk setup plexiglass',
                'Transfer rushes 4K dalam 48 jam setelah shooting',
                'Revisi minor gratis untuk 7 hari setelah file diterima',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink-300">
                  <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-brand-500/15 text-brand-300 shrink-0">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {CASE_STUDY.map((c) => (
              <div key={c.label} className="card-surface rounded-2xl p-6">
                <p className="font-display text-2xl font-bold text-brand-300">{c.value}</p>
                <p className="mt-1 text-sm font-medium text-ink-200">{c.label}</p>
                <p className="mt-2 text-xs text-ink-500 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KLIEN */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Klien"
            title="Perusahaan dan kreator yang mempercayakan kebutuhan mereka"
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <div
                key={c}
                className="group flex items-center justify-center rounded-2xl border border-ink-800 bg-ink-900/50 px-5 py-7 text-center font-display text-sm font-semibold text-ink-400 hover:text-brand-300 hover:border-brand-500/35 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="py-20 md:pb-24 bg-ink-900/40 border-y border-ink-800">
        <div className="container-page">
          <SectionHeading eyebrow="Testimoni" title="Cerita dari balik layar" />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="card-surface rounded-2xl p-7 flex gap-4 hover:border-brand-500/40 transition-colors duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Icon name="quote" className="w-7 h-7 shrink-0 text-brand-500/40" filled />
                <div>
                  <blockquote className="text-sm text-ink-300 leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span
                      className={`grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br ${t.color} text-ink-950 font-display font-bold text-xs`}
                    >
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink-100">{t.name}</span>
                      <span className="block text-xs text-ink-500">{t.role}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center p-4 bg-ink-950/85 backdrop-blur-sm animate-fade-up"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-ink-700 bg-ink-900"
            onClick={(e) => e.stopPropagation()}
          >
            <CameraArt variant={selected.art} className="w-full" />
            <div className="flex items-center justify-between gap-4 border-t border-ink-800 px-5 py-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brand-400">
                  {selected.cat}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink-100">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="grid place-items-center w-10 h-10 rounded-xl border border-ink-700 text-ink-300 hover:text-ink-100 hover:border-brand-500/40 transition-colors"
                aria-label="Tutup"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
