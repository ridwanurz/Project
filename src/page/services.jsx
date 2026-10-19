import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EquipmentCard from '../components/EquipmentCard.jsx'
import Icon from '../components/Icon.jsx'
import { equipment, categories } from '../data/equipment.js'
import { services } from '../data/services.js'
import { packages, extras } from '../data/packages.js'

const FAQS = [
  {
    q: 'Berapa minimal durasi sewa?',
    a: 'Minimal satu hari untuk sewa unit. Untuk paket produksi dan sewa mingguan, kami bisa mengatur jadwal khusus dengan DP di awal.',
  },
  {
    q: 'Apakah sudah termasuk operator dan lighting?',
    a: 'Bisa. Setiap paket sudah bisa ditambah operator, SP, lighting assistant, hingga drone pilot. Tambahan ini dihitung per hari dan diperinci dalam penawaran kami.',
  },
  {
    q: 'Bagaimana bila unit bermasalah saat syuting?',
    a: 'Kami menyediakan unit cadangan yang sama persis dan teknisi on-site. Jika ada kendala, proses penggantian hanya perlu beberapa menit.',
  },
  {
    q: 'Apakah bisa sewa untuk shooting di luar kota?',
    a: 'Bisa, dengan biaya transport dan akomodasi yang dihitung terpisah serta diinformasikan sejak awal agar tidak ada kejutan biaya.',
  },
  {
    q: 'Berapa cara pembayaran?',
    a: 'DP 30% untuk konfirmasi booking, pelunasan paling lambat saat serah terima unit. Pembayaran bisa via transfer bank atau QRIS.',
  },
  {
    q: 'Apakah unit diasuransikan?',
    a: 'Setiap sewa sudah termasuk proteksi unit. Untuk produksi bernilai tinggi, kami menyediakan opsi all-risk coverage bersama mitra asuransi.',
  },
]

export default function Services() {
  const [active, setActive] = useState('Semua')
  const [openFaq, setOpenFaq] = useState(0)

  const filtered = useMemo(
    () => (active === 'Semua' ? equipment : equipment.filter((e) => e.category === active)),
    [active],
  )

  return (
    <>
      <PageHero
        eyebrow="Layanan & Katalog"
        title={<>Semua yang Anda butuhkan untuk <span className="text-gradient">shoot yang rapi</span>.</>}
        desc="Sewa unit dengan harga harian yang jelas, atau serahkan produksi dari A sampai Z pada tim kami. Semua opsi di bawah bisa dikombinasikan."
        art="cinema"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/6281299344550?text=Halo%20Lentera%20Kamera%2C%20saya%20mau%20tanya%20harga%20sewa%20kamera."
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary px-6 py-3"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            Tanya Harga
          </a>
          <Link to="/contact" className="btn btn-ghost px-6 py-3">
            Buat Permintaan Sewa
          </Link>
        </div>
      </PageHero>

      {/* LAYANAN */}
      <section className="pb-8">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="group card-surface rounded-2xl p-6 hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-500/12 text-brand-300 group-hover:scale-110 transition-transform duration-300">
                <Icon name={s.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-100">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KATALOG */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Katalog Sewa"
            title="Pilih unit sesuai kebutuhan shoot"
            desc="Harga sudah termasuk aksesori standar. Ketersediaan unit dikonfirmasi setelah tanggal Anda kunci."
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
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

          <div className="mt-8 flex items-center justify-between text-sm text-ink-400">
            <p>
              Menampilkan <span className="text-ink-100 font-semibold">{filtered.length}</span> unit
            </p>
            <p className="hidden sm:block">Harga tertera sudah termasuk pajak</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <EquipmentCard key={item.id} item={item} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* PAKET HARGA */}
      <section className="py-20 md:py-24 bg-ink-900/40 border-y border-ink-800">
        <div className="container-page">
          <SectionHeading
            eyebrow="Paket Sewa"
            title="Paket hemat sesuai durasi"
            desc="Harga sudah termasuk aksesori standar, unit terawat, dan dukungan teknis selama masa sewa."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
            {packages.map((p, i) => (
              <div
                key={p.id}
                className={`relative rounded-3xl p-7 flex flex-col animate-fade-up ${
                  p.popular
                    ? 'bg-gradient-to-b from-brand-500/12 to-ink-900 border border-brand-500/40 shadow-[0_30px_80px_-40px_rgba(245,181,68,0.6)] lg:-mt-6 lg:pb-9'
                    : 'card-surface'
                }`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 px-3.5 py-1 text-[11px] font-bold text-ink-950">
                    PALING POPULER
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink-100">{p.name}</h3>
                <p className="mt-1.5 text-sm text-ink-400">{p.tagline}</p>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-3xl font-extrabold text-ink-100">
                    Rp {p.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-brand-400">{p.unit}</p>
                <p className="mt-1 text-xs text-ink-500">{p.minOrder}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-300">
                      <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281299344550?text=${encodeURIComponent(
                    `Halo Lentera Kamera, saya tertarik dengan paket ${p.name}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn w-full py-3 mt-7 ${
                    p.popular ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  Pilih Paket Ini
                  <Icon name="arrowRight" className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-16">
            <h3 className="font-display text-xl font-semibold text-ink-100 mb-6">
              Tambahan layanan
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extras.map((e) => (
                <div
                  key={e.name}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-ink-800 bg-ink-900/60 px-5 py-4 hover:border-brand-500/30 transition-colors"
                >
                  <span className="text-sm text-ink-200">{e.name}</span>
                  <span className="text-sm font-semibold text-brand-300 whitespace-nowrap">
                    +Rp {e.price}
                    <span className="text-ink-500 font-normal">/{e.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pertanyaan Umum"
              title="Yang paling sering ditanyakan"
              desc="Belum menemukan jawabannya? Tim kami siap membantu via WhatsApp pada jam kerja."
            />
            <a
              href="https://wa.me/6281299344550"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost mt-8 px-6 py-3"
            >
              <Icon name="whatsapp" className="w-4 h-4" />
              Tanya Langsung
            </a>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen ? 'border-brand-500/35 bg-ink-850' : 'border-ink-800 bg-ink-900/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-ink-100 text-sm md:text-base">{f.q}</span>
                    <span
                      className={`grid place-items-center w-7 h-7 shrink-0 rounded-full border border-ink-700 text-ink-300 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 border-brand-500/50 text-brand-300' : ''
                      }`}
                    >
                      <Icon name="chevronDown" className="w-4 h-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-ink-400 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-500/25 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 p-10 md:p-14 text-center">
            <div className="absolute inset-0 grid-glow opacity-50" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100">
                Sudah ketemu unit yang cocok?
              </h2>
              <p className="mt-4 text-ink-300 max-w-lg mx-auto">
                Kirim nama unit dan tanggal rencana shooting. Kami konfirmasi ketersediaan dalam
                1 jam kerja.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn btn-primary px-7 py-3.5">
                  Buat Permintaan
                  <Icon name="arrowRight" className="w-5 h-5" />
                </Link>
                <Link to="/about" className="btn btn-ghost px-7 py-3.5">
                  Kenali Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
