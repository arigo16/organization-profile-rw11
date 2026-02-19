# Portal RW 011 Desa Sukamantri

Website portal resmi RW 011 Desa Sukamantri, Kecamatan Pasar Kemis, Kabupaten Tangerang, Banten.

## Tech Stack

- **Next.js 15.5.5** (App Router + Turbopack)
- **React 19** + TypeScript
- **React Bootstrap 5** + Custom SCSS
- **Swiper** (carousel), **WOW.js** (scroll animation), **CountUp** (counter)

## Menjalankan Project

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build production
npm run build

# Start production server
npm run start
```

## Environment Variables

Salin `.env.example` menjadi `.env.local`, lalu sesuaikan nilainya:

```bash
cp .env.example .env.local
```

## Struktur Halaman

| Halaman | Route |
|---------|-------|
| Beranda | `/` |
| Tentang Kami | `/about` |
| Struktur Pengurus | `/team` |
| Detail Pengurus | `/team-details` |
| Daftar Aset | `/aset` |
| Data Warga & Statistik | `/data-warga` |
| Gambaran Wilayah | `/wilayah` |
| Galeri Kegiatan | `/galeri` |
| Berita & Artikel | `/news` |
| Detail Berita | `/news-details` |
| Dokumen Publik | `/dokumen` |
| Infaq Online | `/infaq` |
| Transparansi Infaq | `/transparansi-infaq` |
| Saran & Masukan | `/saran` |
| Kontak | `/contact` |

## Struktur Folder

```
src/
├── app/            # Halaman (file-based routing)
├── components/     # Komponen React
├── data/           # Data terpusat (rw011.ts)
├── layout/         # Header, Footer, DanboxLayout
└── utility/        # Custom hooks & konfigurasi slider
public/
└── assets/         # CSS, gambar, font
```

## Data & Konten

Semua konten website terpusat di `src/data/rw011.ts` — termasuk info organisasi, pengurus, data warga, aset, berita, galeri, dokumen, dan transaksi infaq. Edit file tersebut untuk mengubah konten.
