# Lentera Kamera — Company Profile

Website company profile untuk **Lentera Kamera**, perusahaan penyewaan kamera profesional.
Dibangun dengan React 19 + Vite + Tailwind CSS v4 (React Router untuk routing).

## Menjalankan Project

```bash
npm install
npm run dev      # server pengembangan
npm run build    # build ke folder dist/
npm run preview  # preview hasil build
npm run lint     # eslint
```

## Struktur

```
src/
├── components/
│   ├── CameraArt.jsx      # ilustrasi SVG kamera (10 varian, tanpa file gambar eksternal)
│   ├── Card.jsx           # permukaan kartu standar
│   ├── EquipmentCard.jsx  # kartu unit sewa di katalog
│   ├── FloatingCta.jsx    # tombol WhatsApp mengambang
│   ├── Footer.jsx
│   ├── Icon.jsx           # set ikon SVG inline
│   ├── Navbar.jsx         # navigasi responsif + menu mobile
│   ├── PageHero.jsx       # hero halaman dalam
│   ├── ScrollToTop.jsx    # scroll ke atas saat pindah route
│   └── SectionHeading.jsx
├── data/
│   ├── equipment.js       # katalog unit + kategori
│   ├── packages.js        # paket sewa harian/mingguan/bulanan + add-on
│   ├── services.js        # layanan & alur kerja
│   ├── team.js            # profil tim & sejarah perusahaan
│   └── testimonials.js    # testimoni, daftar klien, galeri
├── page/
│   ├── layout.jsx         # navbar + outlet + footer
│   ├── home.jsx
│   ├── about.jsx
│   ├── services.jsx       # katalog + filter + paket + FAQ
│   ├── portfolio.jsx      # galeri + filter + lightbox
│   ├── contact.jsx        # form permintaan sewa + validasi
│   └── notfound.jsx       # 404
├── App.jsx                # definisi route
├── index.css              # tema Tailwind v4 + utilitas kustom
└── main.jsx
```

## Halaman

| Route | Isi |
| --- | --- |
| `/` | Hero, statistik, keunggulan, layanan, katalog, alur kerja, testimoni, CTA |
| `/about` | Profil perusahaan, visi & misi, nilai, linimasa, profil tim |
| `/services` | Daftar layanan, katalog 16 unit dengan filter kategori, paket harga, add-on, FAQ |
| `/portfolio` | Galeri dengan filter + lightbox, studi kasus, daftar klien, testimoni |
| `/contact` | Info studio, form permintaan sewa (validasi), peta, cepat akses katalog |
| `*` | Halaman 404 |

## Catatan

- Seluruh ilustrasi dibuat sebagai SVG inline (`CameraArt.jsx`) sehingga tidak ada file gambar
  eksternal yang bisa rusak — tinggal ganti `<CameraArt variant="..." />` dengan `<img>` bila
  foto asli sudah tersedia.
- Tema warna & tipografi diatur di `src/index.css` pada blok `@theme` (namespace `ink`, `brand`,
  `accent`).
- Dukungan `prefers-reduced-motion` sudah aktif untuk diakses pengguna yang sensitif terhadap
  animasi.
- Data klien, harga, dan kontak masih berupa data contoh — ganti isi file di `src/data/`.
