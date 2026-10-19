import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icon.jsx'
import CameraArt from '../components/CameraArt.jsx'
import { team, timeline } from '../data/team.js'

const VISI_MISI = [
  {
    label: 'Visi',
    title: 'Menjadi partner produksi paling dipercaya di Indonesia',
    desc: 'Menyediakan akses ke perangkat sinematik kelas dunia bagi kreator, brand, dan production house dari kelas menengah hingga besar.',
    icon: 'target',
  },
  {
    label: 'Misi',
    title: 'Memberi akses yang adil, transparan, dan hassle-free',
    desc: 'Unit terawat, harga jelas di depan, dukungan teknis responsif, dan proses sewa yang singkat namun aman untuk kedua pihak.',
    icon: 'sparkle',
  },
]

const VALUES = [
  { icon: 'shield', title: 'Integritas', desc: 'Condition report jujur, tanpa kerusakan yang disembunyikan.' },
  { icon: 'clock', title: 'Ketepatan', desc: 'Unit tiba di lokasi sesuai jadwal yang disepakati.' },
  { icon: 'headset', title: 'Responsif', desc: 'Balasan WhatsApp rata-rata di bawah 15 menit.' },
  { icon: 'star', title: 'Kualitas', desc: 'Kualitas gambar dan pengalaman bagi kedua tim sama.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title={<>Rental yang terasa seperti <span className="text-gradient">partner produksi</span>, bukan sekadar penyewa barang.</>}
        desc="Lentera Kamera berdiri pada 2016 dari sebuah ruang kecil dengan empat kamera. Hari ini kami mengoperasikan lebih dari 60 unit dan memiliki tim yang siap mendukung shoot di seluruh Jabodetabek."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/contact" className="btn btn-primary px-6 py-3">
            Ajukan Kerja Sama
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
          <Link to="/portfolio" className="btn btn-ghost px-6 py-3">
            Lihat Hasil Kerja
          </Link>
        </div>
      </PageHero>

      {/* PROFIL */}
      <section className="py-20 md:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <SectionHeading
              align="left"
              eyebrow="Profil Perusahaan"
              title="Dibangun oleh orang yang terlalu sering pinjam kamera"
              desc="Pemilik kami memulai bisnis ini setelah bertahun-tahun sebagai videografer freelance dan sering kesulitan mencari unit yang kondisinya benar-benar siap pakai. Keyakinan kami sederhana: unit yang terawat dapat diandalkan, dan orang yang dapat diandalkan adalah aset paling berharga dalam industri ini."
            />
            <p className="mt-5 text-ink-300 leading-relaxed">
              Selama hampir satu dekade kami membangun hubungan jangka panjang dengan 180+
              kreator, brand, dan production house. Sebagian besar klien kami kembali untuk
              proyek berikutnya, dan sebagian besar unit kami disewa kembali dalam 72 jam.
            </p>

            <div className="mt-9 grid sm:grid-cols-2 gap-4">
              {VISI_MISI.map((v) => (
                <div
                  key={v.label}
                  className="card-surface rounded-2xl p-6 hover:border-brand-500/40 transition-colors duration-300"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-500/12 text-brand-300">
                    <Icon name={v.icon} className="w-5 h-5" />
                  </span>
                  <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">
                    {v.label}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink-100 leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '120ms' }}>
            <div className="rounded-[2rem] overflow-hidden border border-ink-700 bg-ink-900">
              <div className="relative aspect-[4/3]">
                <CameraArt variant="dslr" className="w-full h-full" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                { v: '10+', l: 'Tahun pengalaman' },
                { v: '180+', l: 'Klien aktif' },
                { v: '3', l: 'Studio di Jabodetabek' },
                { v: '24/7', l: 'Dukungan teknis' },
              ].map((s) => (
                <div key={s.l} className="card-surface rounded-2xl px-5 py-4">
                  <p className="font-display text-2xl font-bold text-brand-300">{s.v}</p>
                  <p className="mt-1 text-xs text-ink-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NILAI */}
      <section className="py-20 md:py-28 bg-ink-900/40 border-y border-ink-800">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Empat hal yang tidak kami kompromikan"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="group card-surface rounded-2xl p-6 hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-ink-800 border border-ink-700 text-brand-300 group-hover:border-brand-500/50 transition-colors">
                  <Icon name={v.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-100">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Perjalanan"
            title="Dari 4 unit ke armada 60+ unit"
            desc="Setiap tahap membawa kami satu langkah lebih siap melayani production house."
          />

          <div className="mt-14 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-ink-700 to-transparent md:left-1/2" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  <span className="absolute left-0 top-1 grid place-items-center w-10 h-10 rounded-full border border-brand-500/40 bg-ink-900 text-brand-300 text-xs font-bold md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                    {t.year.slice(2)}
                  </span>
                  <div
                    className={`card-surface rounded-2xl p-6 md:max-w-md ${
                      i % 2 === 0
                        ? 'md:col-start-1 md:justify-self-end md:mr-8'
                        : 'md:col-start-2 md:justify-self-start md:ml-8'
                    }`}
                  >
                    <h3 className="font-display text-lg font-semibold text-ink-100">{t.title}</h3>
                    <p className="mt-2 text-sm text-ink-400 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIM */}
      <section className="py-20 md:py-28 bg-ink-900/40 border-y border-ink-800">
        <div className="container-page">
          <SectionHeading
            eyebrow="Tim Kami"
            title="Orang-orang di balik unit yang Anda sewa"
            desc="Tim operasional, teknis, dan kreatif yang menjaga armada serta hasil kerja Anda tetap maksimal."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="group card-surface rounded-2xl p-6 hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} text-ink-950 font-display font-bold text-lg`}
                  >
                    {m.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-100">{m.name}</h3>
                    <p className="text-sm text-brand-400">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-400 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink-700 bg-ink-900 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-500/12 blur-[100px]" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100 leading-tight">
                Punya unit yang terstruktur dan crew yang siap?
              </h2>
              <p className="mt-3 text-ink-300 max-w-lg">
                Kirim brief Anda, kami balas dengan rekomendasi unit, estimasi biaya, dan jadwal
                dalam 1 jam kerja.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary px-7 py-3.5 shrink-0">
              Mulai Konsultasi
              <Icon name="arrowRight" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
