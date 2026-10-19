import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import CameraArt from '../components/CameraArt.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EquipmentCard from '../components/EquipmentCard.jsx'
import { services, steps } from '../data/services.js'
import { equipment } from '../data/equipment.js'
import { testimonials, clients } from '../data/testimonials.js'

const STATS = [
  { value: '480+', label: 'Proyek dilayani', icon: 'camera' },
  { value: '60+', label: 'Unit siap sewa', icon: 'package' },
  { value: '4.9/5', label: 'Rating klien', icon: 'star' },
  { value: '3', label: 'Lokasi studio', icon: 'pin' },
]

const FEATURES = [
  {
    icon: 'shield',
    title: 'Unit Terawat & Tercek',
    desc: 'Setiap unit melewati 12 titik pemeriksaan sebelum dan sesudah masa sewa.',
  },
  {
    icon: 'truck',
    title: 'Antar-Jemput Gratis',
    desc: 'On-site shoot di area Jabodetabek tanpa biaya transport tambahan.',
  },
  {
    icon: 'headset',
    title: 'Support Teknis 24/7',
    desc: 'Tim teknisi stand by selama masa sewa untuk troubleshooting kendala di lokasi.',
  },
  {
    icon: 'target',
    title: 'Harga Transparan',
    desc: 'Tidak ada biaya tersembunyi. Semua paket dan add-on dijelaskan di depan.',
  },
]

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-glow opacity-70" />
        <div className="absolute -top-40 -right-24 w-[620px] h-[620px] rounded-full bg-brand-500/12 blur-[140px]" />
        <div className="absolute -bottom-52 -left-32 w-[560px] h-[560px] rounded-full bg-accent-500/10 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

        <div className="relative container-page grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 mb-6">
              <Icon name="sparkle" className="w-4 h-4" />
              Rental Kamera &amp; Desain Produksi
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.03] text-ink-100">
              Sewa kamera <span className="text-gradient">profesional</span>
              <br />
              tanpa drama dan tanpa kompromi.
            </h1>

            <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-xl">
              Dari DSLR harian sampai cinema camera, drone, lighting, dan audio — kami siap
              mendukung shoot Anda dengan unit terawat, operator berpengalaman, dan harga yang jelas di
              depan.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link to="/services" className="btn btn-primary px-7 py-3.5">
                Lihat Katalog Sewa
                <Icon name="arrowRight" className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/6281299344550?text=Halo%20Lentera%20Kamera%2C%20saya%20ingin%20bertanya%20tentang%20sewa%20kamera."
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost px-7 py-3.5"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                Chat WhatsApp
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl md:text-3xl font-bold text-brand-300">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-ink-400 uppercase tracking-wider">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="relative rounded-[2rem] overflow-hidden border border-ink-700 bg-ink-900/80 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-accent-500/10" />
              <div className="relative aspect-[4/3]">
                <CameraArt variant="cinema" className="1w-full h-full" />
              </div>
              <div className="relative grid grid-cols-3 divide-x divide-ink-800 border-t border-ink-800 bg-ink-950/70">
                {[
                  { k: 'Resa', v: '24 jam' },
                  { k: 'Kondisi', v: 'A+' },
                  { k: 'Garansi', v: '7 hari' },
                ].map((b) => (
                  <div key={b.k} className="px-4 py-4 text-center">
                    <p className="font-display text-sm font-semibold text-ink-100">{b.v}</p>
                    <p className="text-[11px] uppercase tracking-wider text-ink-500">{b.k}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex absolute -left-6 top-16 items-center gap-3 rounded-2xl border border-ink-700 bg-ink-850/95 px-4 py-3 shadow-lift animate-float">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400">
                <Icon name="check" className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-100">Unit terverifikasi</p>
                <p className="text-xs text-ink-400">Cek 12 titik sebelum sewa</p>
              </div>
            </div>

            <div
              className="hidden sm:flex absolute -right-5 -bottom-10 items-center gap-3 rounded-2xl border border-ink-700 bg-ink-850/95 px-4 py-3 shadow-lift animate-float"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-500/15 text-brand-300">
                <Icon name="users" className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-100">Operator siap</p>
                <p className="text-xs text-ink-400">Bisa ditambahkan ke paket</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <section className="relative py-6 border-y border-ink-800 bg-ink-900/50 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {clients.map((c) => (
                <span
                  key={`${dup}-${c}`}
                  className="px-8 font-display text-lg font-semibold text-ink-500 whitespace-nowrap"
                >
                  {c}
                </span>
              ))}
              <span className="px-8 text-brand-500/50">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- KEUNGGULAN ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Kenapa Lentera"
            title="Sewa kamera tanpa drama soal teknis"
            desc="Kami ambil serius soal kondisi unit dan dukungan tim, karena hasil shoot yang bagus adalah prioritas Anda."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="group card-surface rounded-2xl p-6 hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-500/12 text-brand-300 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                  <Icon name={f.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-100">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-ink-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LAYANAN ---------- */}
      <section className="py-20 md:py-28 bg-ink-900/40 border-y border-ink-800">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Layanan Kami"
              title="Satu partner, dari sewa unit sampai produksi penuh"
              desc="Butuh sekadar unit, atau butuh tim lengkap? Semua ada di satu tempat."
            />
            <Link to="/services" className="btn btn-ghost px-6 py-3 shrink-0">
              Semua layanan
              <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to="/services"
                className="group relative card-surface rounded-2xl p-7 overflow-hidden hover:border-brand-500/40 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand-500/8 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300" />
                <span className="relative grid place-items-center w-12 h-12 rounded-xl bg-ink-800 border border-ink-700 text-brand-300 group-hover:border-brand-500/50 transition-colors">
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-ink-100 group-hover:text-brand-300 transition-colors">
                  {s.title}
                </h3>
                <p className="relative mt-2.5 text-sm text-ink-400 leading-relaxed">{s.desc}</p>
                <ul className="relative mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-ink-500">
                      <Icon name="check" className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- KATALOG ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Katalog Unit"
              title="Unit paling dicari bulan ini"
              desc="Harga sudah termasuk aksesori standar. Detail spesifikasi dan ketersediaan dikirim setelah konfirmasi."
            />
            <Link to="/services" className="btn btn-ghost px-6 py-3 shrink-0">
              Lihat semua unit
              <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.slice(0, 6).map((item, i) => (
              <EquipmentCard key={item.id} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROSES ---------- */}
      <section className="py-20 md:py-28 bg-ink-900/40 border-y border-ink-800">
        <div className="container-page">
          <SectionHeading
            eyebrow="Cara Kerja"
            title="Lima langkah, tanpa ribet"
            desc="Alur kerja yang kami jalankan untuk setiap transaksi sewa, dari obrolan pertama sampai unit kembali."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div
                key={s.no}
                className="relative card-surface rounded-2xl p-6 hover:border-brand-500/40 transition-colors duration-300"
              >
                <span className="font-display text-4xl font-extrabold text-brand-500/25">
                  {s.no}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-ink-100">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-400 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute right-[-13px] top-1/2 -translate-y-1/2 text-ink-700">
                    <Icon name="arrowRight" className="w-5 h-5" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONI ---------- */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Kata Mereka"
            title="Kepercayaan yang kami jaga"
            desc="Puluhan brand, production house, dan creative agency mempercayakan kebutuhan syuting mereka kepada kami."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="group card-surface rounded-2xl p-6 flex flex-col hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Icon name="quote" className="w-8 h-8 text-brand-500/40" filled />
                <blockquote className="mt-4 flex-1 text-sm text-ink-300 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-800 pt-5">
                  <span
                    className={`grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br ${t.color} text-ink-950 font-display font-bold text-sm`}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-100">{t.name}</span>
                    <span className="block text-xs text-ink-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="pb-24 md:pb-32">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-500/25 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 p-10 md:p-16 text-center">
            <div className="absolute inset-0 grid-glow opacity-50" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[300px] rounded-full bg-brand-500/18 blur-[110px]" />
            <div className="relative">
              <span className="eyebrow justify-center mb-5">
                <span className="h-px w-8 bg-brand-500/60" />
                Siap syuting
                <span className="h-px w-8 bg-brand-500/60" />
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-ink-100 max-w-3xl mx-auto leading-tight">
                Ceritakan kebutuhan shoot Anda, kami siapkan unit yang tepat.
              </h2>
              <p className="mt-5 text-ink-300 max-w-xl mx-auto">
                Tanpa biaya tersembunyi — konsultasi gratis dan rekomendasi unit dalam 1 jam.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn btn-primary px-7 py-3.5">
                  Konsultasi Gratis
                  <Icon name="arrowRight" className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn btn-ghost px-7 py-3.5">
                  Lihat Katalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
