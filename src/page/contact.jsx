import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icon.jsx'
import { categories } from '../data/equipment.js'

const RENTAL_TYPES = [
  'Sewa Kamera & Lensa',
  'Sewa Kamera + Operator',
  'Paket Produksi Lengkap',
  'Event & Multi-Camera',
  'Jasa Drone Aerial',
  'Jasa Syuting & Konten',
]

const INFO = [
  {
    icon: 'pin',
    label: 'Studio Utama',
    value: 'Jl. Kaliurang KM 5 No. 12, Jakarta Selatan 12560',
    href: 'https://maps.google.com/?q=Kaliurang+KM+5+Jakarta+Selatan',
  },
  {
    icon: 'phone',
    label: 'WhatsApp',
    value: '+62 812-9934-4550',
    href: 'https://wa.me/6281299344550',
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'hello@lenterakamera.id',
    href: 'mailto:hello@lenterakamera.id',
  },
  {
    icon: 'clock',
    label: 'Jam Operasional',
    value: 'Senin - Sabtu, 09.00 - 20.00 WIB',
  },
]

const SOCIALS = [
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
  { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com' },
  { name: 'TikTok', icon: 'tiktok', url: 'https://tiktok.com' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    type: RENTAL_TYPES[0],
    date: '',
    duration: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (key) => (ev) => {
    setForm((prev) => ({ ...prev, [key]: ev.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Nama wajib diisi.'
    if (!form.contact.trim()) e.contact = 'Email atau nomor WhatsApp wajib diisi.'
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact) &&
      !/^[\d+\-\s()]{8,}$/.test(form.contact)
    )
      e.contact = 'Gunakan format email atau nomor telepon yang valid.'
    if (!form.date) e.date = 'Pilih rencana tanggal shooting.'
    if (!form.message.trim()) e.message = 'Ceritakan kebutuhan Anda, minimal satu kalimat.'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) setSubmitted(true)
  }

  const fieldClass = (key) =>
    `w-full rounded-xl px-4 py-3 bg-ink-900 border text-ink-100 placeholder:text-ink-500 outline-none transition-all focus:ring-2 focus:ring-brand-500/40 ${
      errors[key] ? 'border-rose-brand/70' : 'border-ink-700 focus:border-brand-500/60'
    }`

  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title={<>Ceritakan kebutuhannya, <span className="text-gradient">kami siapkan</span> unitnya.</>}
        desc="Isi form atau hubungi kami langsung. Rata-rata kami membalas dalam 15 menit pada jam kerja."
        art="gimbal"
      />

      <section className="pb-20 md:pb-24">
        <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          {/* INFO */}
          <div className="space-y-4">
            {INFO.map((i) => (
              <div key={i.label} className="card-surface rounded-2xl p-5 flex gap-4">
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-brand-500/12 text-brand-300">
                  <Icon name={i.icon} className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-ink-500">{i.label}</p>
                  {i.href ? (
                    <a
                      href={i.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block mt-1 text-sm font-medium text-ink-100 hover:text-brand-300 transition-colors"
                    >
                      {i.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-ink-100">{i.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card-surface rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-ink-500 mb-3">Media Sosial</p>
              <div className="flex gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="grid place-items-center w-11 h-11 rounded-xl border border-ink-700 text-ink-300 hover:text-brand-300 hover:border-brand-500/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon name={s.icon} className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mini map */}
            <div className="rounded-2xl overflow-hidden border border-ink-800 relative h-44">
              <div className="absolute inset-0 grid-glow opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-6">
                  <span className="mx-auto grid place-items-center w-11 h-11 rounded-full bg-brand-500/15 text-brand-300 border border-brand-500/30">
                    <Icon name="pin" className="w-5 h-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink-100">Lentera Kamera Studio</p>
                  <p className="text-xs text-ink-500">Jakarta Selatan</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Kaliurang+KM+5+Jakarta+Selatan"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 btn btn-ghost px-3 py-1.5 text-xs"
              >
                Buka Maps
                <Icon name="arrowRight" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="card-surface rounded-3xl p-6 md:p-8">
            {submitted ? (
              <div className="h-full min-h-[420px] grid place-items-center text-center">
                <div>
                  <span className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-400">
                    <Icon name="check" className="w-8 h-8" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold text-ink-100">
                    Permintaan diterima
                  </h2>
                  <p className="mt-3 text-ink-400 max-w-sm leading-relaxed">
                    Terima kasih, {form.name.split(' ')[0]}. Tim kami akan menghubungi Anda di{' '}
                    {form.contact} untuk konfirmasi ketersediaan unit dan detail harga.
                  </p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setForm({
                          name: '',
                          contact: '',
                          type: RENTAL_TYPES[0],
                          date: '',
                          duration: '',
                          message: '',
                        })
                      }}
                      className="btn btn-ghost px-6 py-3"
                    >
                      Kirim Permintaan Lain
                    </button>
                    <Link to="/services" className="btn btn-primary px-6 py-3">
                      Lihat Katalog
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink-100">
                    Form Permintaan Sewa
                  </h2>
                  <p className="mt-1.5 text-sm text-ink-400">
                    Isi bagian yang Anda ketahui. Field bertanda * wajib diisi.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-200 mb-2">
                      Nama <span className="text-rose-brand">*</span>
                    </label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={handleChange('name')}
                      placeholder="Nama lengkap"
                      className={fieldClass('name')}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-brand">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-ink-200 mb-2">
                      Email / WhatsApp <span className="text-rose-brand">*</span>
                    </label>
                    <input
                      id="contact"
                      value={form.contact}
                      onChange={handleChange('contact')}
                      placeholder="nama@email.com atau 0812xxxx"
                      className={fieldClass('contact')}
                    />
                    {errors.contact && (
                      <p className="mt-1.5 text-xs text-rose-brand">{errors.contact}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-ink-200 mb-2">
                    Jenis Layanan
                  </label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={handleChange('type')}
                    className={`${fieldClass('type')} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236d7488' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    {RENTAL_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-ink-900">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-ink-200 mb-2">
                      Rencana Tanggal <span className="text-rose-brand">*</span>
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange('date')}
                      className={`${fieldClass('date')} [color-scheme:dark]`}
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-xs text-rose-brand">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-ink-200 mb-2">
                      Durasi
                    </label>
                    <select
                      id="duration"
                      value={form.duration}
                      onChange={handleChange('duration')}
                      className={`${fieldClass('duration')} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236d7488' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                    >
                      <option value="" className="bg-ink-900">
                        Pilih durasi
                      </option>
                      <option value="1 hari" className="bg-ink-900">
                        1 hari
                      </option>
                      <option value="2-3 hari" className="bg-ink-900">
                        2 - 3 hari
                      </option>
                      <option value="1 minggu" className="bg-ink-900">
                        1 minggu
                      </option>
                      <option value="lebih dari 1 minggu" className="bg-ink-900">
                        Lebih dari 1 minggu
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-200 mb-2">
                    Detail Kebutuhan <span className="text-rose-brand">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Contoh: syuting wedding 400 tamu di-ballroom hotel, butuh 2 kamera, 1 drone, dan 2 lighting, tanggal 12 Mei."
                    className={`${fieldClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-brand">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-full py-3.5">
                  Kirim Permintaan
                  <Icon name="arrowRight" className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-ink-500">
                  Data Anda hanya digunakan untuk proses penawaran sewa.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* kategori cepat */}
      <section className="pb-20 md:pb-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Cari Unit"
            title="Atau langsung pilih dari katalog"
            desc="Belum yakin unit mana yang cocok? Lihat daftar lengkap unit dan harga sewa harian kami."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories
              .filter((c) => c !== 'Semua')
              .map((c) => (
                <Link
                  key={c}
                  to="/services"
                  className="px-4 py-2 rounded-full text-sm border border-ink-700 text-ink-300 hover:text-brand-300 hover:border-brand-500/40 transition-all duration-200"
                >
                  {c}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
