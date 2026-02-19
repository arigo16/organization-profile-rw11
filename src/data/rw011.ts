// ============================================================
// Data Terpusat Portal RW 011 Desa Sukamantri
// Kecamatan Pasar Kemis, Kabupaten Tangerang
// ============================================================

// --- Informasi Organisasi ---
export const orgInfo = {
  name: "RW 011",
  fullName: "RW 011 Desa Sukamantri",
  desa: "Desa Sukamantri",
  kecamatan: "Kecamatan Pasar Kemis",
  kabupaten: "Kabupaten Tangerang",
  provinsi: "Banten",
  alamat:
    "Sekretariat RW 011, Desa Sukamantri, Kec. Pasar Kemis, Kab. Tangerang, Banten",
  telepon: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "rw011sukamantri@gmail.com",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.6062493641003!2d106.5518995125581!3d-6.159831221360605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff0041586bf5%3A0x38d05456db9e25af!2sGSG%20RW011!5e0!3m2!1sid!2sid!4v1771488692468!5m2!1sid!2sidhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.1311142818213!2d106.55201028934435!3d-6.159185950086078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff0041586bf5%3A0x38d05456db9e25af!2sGSG%20RW011!5e0!3m2!1sid!2sid!4v1771488767228!5m2!1sid!2sid",
  socialMedia: {
    facebook: "https://facebook.com/rw011sukamantri",
    instagram: "https://instagram.com/rw011sukamantri",
    youtube: "https://youtube.com/@rw011sukamantri",
  },
};

// --- Tentang RW ---
export const tentangRW = {
  about: `RW 011 merupakan salah satu rukun warga di Desa Sukamantri, Kecamatan Pasar Kemis, Kabupaten Tangerang, Provinsi Banten. Wilayah RW 011 terdiri dari 11 RT yang mencakup beberapa klaster perumahan, antara lain Taman Merpati PuriJaya, Puri Kasuari, Puri Cendrawasih, dan Puri Pelican.`,
  visi: "Mewujudkan lingkungan RW 011 yang aman, nyaman, bersih, tertib, dan sejahtera berlandaskan semangat gotong royong.",
  misi: [
    "Meningkatkan keamanan dan ketertiban lingkungan melalui sistem keamanan lingkungan (Siskamling)",
    "Membangun solidaritas dan gotong royong antar warga melalui kegiatan sosial kemasyarakatan",
    "Mendorong partisipasi aktif warga dalam pembangunan dan pemeliharaan fasilitas umum",
    "Meningkatkan kebersihan dan keindahan lingkungan secara berkelanjutan",
    "Memfasilitasi pelayanan administrasi kependudukan bagi warga",
    "Mengembangkan kegiatan keagamaan dan pembinaan generasi muda",
  ],
  sambutanKetuaRW: `Assalamu'alaikum Warahmatullahi Wabarakatuh.

Puji syukur kita panjatkan kehadirat Allah SWT atas segala rahmat dan karunia-Nya. Selamat datang di portal resmi RW 011 Desa Sukamantri.

Portal ini kami hadirkan sebagai sarana informasi dan komunikasi antara pengurus RW dengan seluruh warga. Melalui portal ini, warga dapat mengakses berbagai informasi seputar kegiatan, data kependudukan, dokumen publik, serta menyampaikan saran dan masukan untuk kemajuan lingkungan kita bersama.

Kami mengajak seluruh warga untuk berpartisipasi aktif dalam setiap kegiatan dan pembangunan di lingkungan RW 011. Mari bersama-sama kita wujudkan lingkungan yang aman, nyaman, bersih, dan sejahtera.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.`,
};

// --- Hero Slides ---
export const heroSlides = [
  {
    img: "/assets/img/header/home-1.jpg",
    tagline: "Portal Resmi RW 011",
    heading: "Desa Sukamantri\nPasar Kemis, Tangerang",
  },
  {
    img: "/assets/img/header/home-2.jpg",
    tagline: "Gotong Royong & Kebersamaan",
    heading: "Membangun Lingkungan\nYang Lebih Baik",
  },
  {
    img: "/assets/img/header/home-3.jpg",
    tagline: "Transparan & Amanah",
    heading: "Bersama Wujudkan\nKesejahteraan Warga",
  },
];

// --- Statistik ---
export const statistik = {
  totalRT: 11,
  totalKK: 420,
  totalWarga: 1500,
};

// --- Pengurus RW ---
export interface Pengurus {
  nama: string;
  jabatan: string;
  bidang: string;
  periode: string;
}

export const bidangOrder = [
  "Pengurus Inti",
  "Kasepuhan & Kerukunan Masyarakat",
  "Pemberdayaan Sumber Daya, Ekonomi & Informasi Teknologi",
  "Hubungan Masyarakat",
  "Keamanan & Ketertiban Masyarakat",
  "Kepemudaan & Olahraga",
  "Utilitas & Aset",
  "Ketua RT",
];

export const pengurusRW: Pengurus[] = [
  // Pengurus Inti
  { nama: "Sungkono", jabatan: "Ketua RW", bidang: "Pengurus Inti", periode: "2024–2029" },
  { nama: "Ferly Noviandri, ST", jabatan: "Sekretaris", bidang: "Pengurus Inti", periode: "2024–2029" },
  { nama: "Dewanda Reza Remaldi", jabatan: "Sekretaris", bidang: "Pengurus Inti", periode: "2024–2029" },
  { nama: "Komarudin, S.Kom.", jabatan: "Bendahara", bidang: "Pengurus Inti", periode: "2024–2029" },
  // Kasepuhan & Kerukunan Masyarakat
  { nama: "Nurkolis, S.T", jabatan: "Kasepuhan & Kerukunan Masyarakat", bidang: "Kasepuhan & Kerukunan Masyarakat", periode: "2024–2029" },
  { nama: "Prastyoko", jabatan: "Kasepuhan & Kerukunan Masyarakat", bidang: "Kasepuhan & Kerukunan Masyarakat", periode: "2024–2029" },
  // Pemberdayaan Sumber Daya, Ekonomi & Informasi Teknologi
  { nama: "Dany Hermawan, S.T.", jabatan: "Pemberdayaan SDaya, Ekonomi & IT", bidang: "Pemberdayaan Sumber Daya, Ekonomi & Informasi Teknologi", periode: "2024–2029" },
  { nama: "Adi Setiawan, S.Kom", jabatan: "Pemberdayaan SDaya, Ekonomi & IT", bidang: "Pemberdayaan Sumber Daya, Ekonomi & Informasi Teknologi", periode: "2024–2029" },
  { nama: "Arigo, S.Kom., M.TI", jabatan: "Pemberdayaan SDaya, Ekonomi & IT", bidang: "Pemberdayaan Sumber Daya, Ekonomi & Informasi Teknologi", periode: "2024–2029" },
  // Hubungan Masyarakat
  { nama: "Yansah", jabatan: "Hubungan Masyarakat", bidang: "Hubungan Masyarakat", periode: "2024–2029" },
  { nama: "Ryan Ristianto", jabatan: "Hubungan Masyarakat", bidang: "Hubungan Masyarakat", periode: "2024–2029" },
  { nama: "Joko Sulistiyono", jabatan: "Hubungan Masyarakat", bidang: "Hubungan Masyarakat", periode: "2024–2029" },
  // Keamanan & Ketertiban Masyarakat
  { nama: "Tugimanto", jabatan: "Keamanan & Ketertiban Masyarakat", bidang: "Keamanan & Ketertiban Masyarakat", periode: "2024–2029" },
  { nama: "Sutahar", jabatan: "Keamanan & Ketertiban Masyarakat", bidang: "Keamanan & Ketertiban Masyarakat", periode: "2024–2029" },
  { nama: "Pendi Sugara", jabatan: "Keamanan & Ketertiban Masyarakat", bidang: "Keamanan & Ketertiban Masyarakat", periode: "2024–2029" },
  // Kepemudaan & Olahraga
  { nama: "Dimas Sidiq Adhi Saputro, S.Par.", jabatan: "Kepemudaan & Olahraga", bidang: "Kepemudaan & Olahraga", periode: "2024–2029" },
  { nama: "Zenal Mustopa", jabatan: "Kepemudaan & Olahraga", bidang: "Kepemudaan & Olahraga", periode: "2024–2029" },
  { nama: "Edy Siswanto", jabatan: "Kepemudaan & Olahraga", bidang: "Kepemudaan & Olahraga", periode: "2024–2029" },
  // Utilitas & Aset
  { nama: "Irwan", jabatan: "Utilitas & Aset", bidang: "Utilitas & Aset", periode: "2024–2029" },
  { nama: "Mario", jabatan: "Utilitas & Aset", bidang: "Utilitas & Aset", periode: "2024–2029" },
  { nama: "Supri", jabatan: "Utilitas & Aset", bidang: "Utilitas & Aset", periode: "2024–2029" },
  // Ketua RT
  { nama: "Abu Kahar", jabatan: "Ketua RT 01", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "M. Martin", jabatan: "Ketua RT 02", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Dadang Suryana", jabatan: "Ketua RT 03", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Hamdan", jabatan: "Ketua RT 04", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Basuki", jabatan: "Ketua RT 05", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Rihat Immadudin", jabatan: "Ketua RT 06", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Edi Eko Purwoko", jabatan: "Ketua RT 07", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Sri Haryanto", jabatan: "Ketua RT 08", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Hernando Buana", jabatan: "Ketua RT 09", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Dodi Wibowo", jabatan: "Ketua RT 10", bidang: "Ketua RT", periode: "2024–2029" },
  { nama: "Widiyantoro", jabatan: "Ketua RT 11", bidang: "Ketua RT", periode: "2024–2029" },
];

// --- Data RT ---
export interface RTData {
  nomorRT: string;
  ketuaRT: string;
}

export const dataRT: RTData[] = [
  { nomorRT: "01", ketuaRT: "Abu Kahar" },
  { nomorRT: "02", ketuaRT: "M. Martin" },
  { nomorRT: "03", ketuaRT: "Dadang Suryana" },
  { nomorRT: "04", ketuaRT: "Hamdan" },
  { nomorRT: "05", ketuaRT: "Basuki" },
  { nomorRT: "06", ketuaRT: "Rihat Immadudin" },
  { nomorRT: "07", ketuaRT: "Edi Eko Purwoko" },
  { nomorRT: "08", ketuaRT: "Sri Haryanto" },
  { nomorRT: "09", ketuaRT: "Hernando Buana" },
  { nomorRT: "10", ketuaRT: "Dodi Wibowo" },
  { nomorRT: "11", ketuaRT: "Widiyantoro" },
];

// --- Daftar Aset ---
export interface Aset {
  nama: string;
  kategori: "Bangunan" | "Keamanan" | "Ibadah" | "Sarana Umum";
  kondisi: number;
  deskripsi: string;
  foto: string;
}

export const daftarAset: Aset[] = [
  {
    nama: "Balai Warga RW 011",
    kategori: "Bangunan",
    kondisi: 85,
    deskripsi:
      "Balai pertemuan warga untuk kegiatan musyawarah, rapat pengurus, dan acara kemasyarakatan.",
    foto: "/assets/img/aset/balai-warga.jpg",
  },
  {
    nama: "Pos Kamling RT 001",
    kategori: "Keamanan",
    kondisi: 75,
    deskripsi:
      "Pos keamanan lingkungan untuk kegiatan ronda malam dan koordinasi keamanan.",
    foto: "/assets/img/aset/pos-kamling-1.jpg",
  },
  {
    nama: "Pos Kamling RT 003",
    kategori: "Keamanan",
    kondisi: 70,
    deskripsi:
      "Pos keamanan lingkungan RT 003 yang digunakan untuk ronda dan jaga malam.",
    foto: "/assets/img/aset/pos-kamling-3.jpg",
  },
  {
    nama: "Musholla Al-Ikhlas",
    kategori: "Ibadah",
    kondisi: 90,
    deskripsi:
      "Musholla yang digunakan untuk kegiatan ibadah harian dan pengajian rutin warga.",
    foto: "/assets/img/aset/musholla.jpg",
  },
  {
    nama: "Masjid Jami' RW 011",
    kategori: "Ibadah",
    kondisi: 95,
    deskripsi:
      "Masjid utama RW 011 untuk sholat berjamaah, sholat Jumat, dan kegiatan keagamaan besar.",
    foto: "/assets/img/aset/masjid.jpg",
  },
  {
    nama: "Taman Bermain Anak",
    kategori: "Sarana Umum",
    kondisi: 65,
    deskripsi:
      "Area bermain anak-anak yang dilengkapi dengan ayunan, perosotan, dan jungkat-jungkit.",
    foto: "/assets/img/aset/taman-bermain.jpg",
  },
  {
    nama: "Lapangan Serbaguna",
    kategori: "Sarana Umum",
    kondisi: 80,
    deskripsi:
      "Lapangan terbuka yang digunakan untuk olahraga, upacara, dan kegiatan warga.",
    foto: "/assets/img/aset/lapangan.jpg",
  },
  {
    nama: "Gapura Utama RW 011",
    kategori: "Bangunan",
    kondisi: 88,
    deskripsi:
      "Gapura masuk utama kawasan RW 011 sebagai identitas wilayah.",
    foto: "/assets/img/aset/gapura.jpg",
  },
];

// --- Wilayah ---
export const wilayahInfo = {
  batasUtara: "RW 010 Desa Sukamantri",
  batasSelatan: "RW 012 Desa Sukamantri",
  batasTimur: "Jalan Raya Pasar Kemis",
  batasBarat: "Sungai Cisadane",
  luasWilayah: "± 12 Hektar",
  jumlahRT: 8,
  masterplanImage: "/assets/img/wilayah/masterplan.jpg",
  aerialPhoto: "/assets/img/wilayah/aerial.jpg",
  sitePlan: "/assets/img/wilayah/siteplan.jpg",
  petaLokasi: "/assets/img/wilayah/peta-lokasi.jpg",
};

// --- Galeri Kegiatan ---
export interface GaleriItem {
  judul: string;
  foto: string;
  tanggal: string;
  kategori: string;
}

export const galeriKegiatan: GaleriItem[] = [
  {
    judul: "Perayaan HUT RI ke-79",
    foto: "/assets/img/gallery/gallery-1.jpg",
    tanggal: "17 Agustus 2024",
    kategori: "Peringatan",
  },
  {
    judul: "Kerja Bakti Bersama",
    foto: "/assets/img/gallery/gallery-2.jpg",
    tanggal: "5 Januari 2025",
    kategori: "Sosial",
  },
  {
    judul: "Pengajian Rutin Bulanan",
    foto: "/assets/img/gallery/gallery-3.jpg",
    tanggal: "12 Januari 2025",
    kategori: "Keagamaan",
  },
  {
    judul: "Posyandu Balita",
    foto: "/assets/img/gallery/gallery-4.jpg",
    tanggal: "20 Desember 2024",
    kategori: "Kesehatan",
  },
  {
    judul: "Turnamen Badminton Antar RT",
    foto: "/assets/img/gallery/gallery-5.jpg",
    tanggal: "15 November 2024",
    kategori: "Olahraga",
  },
  {
    judul: "Santunan Anak Yatim",
    foto: "/assets/img/gallery/gallery-6.jpg",
    tanggal: "1 Muharram 1446 H",
    kategori: "Keagamaan",
  },
  {
    judul: "Penanaman Pohon",
    foto: "/assets/img/gallery/gallery-7.jpg",
    tanggal: "28 November 2024",
    kategori: "Lingkungan",
  },
  {
    judul: "Musyawarah Warga Tahunan",
    foto: "/assets/img/gallery/gallery-8.jpg",
    tanggal: "10 Januari 2025",
    kategori: "Musyawarah",
  },
  {
    judul: "Lomba Mewarnai Anak-Anak",
    foto: "/assets/img/gallery/gallery-9.jpg",
    tanggal: "17 Agustus 2024",
    kategori: "Peringatan",
  },
];

// --- Berita ---
export interface Berita {
  id: string;
  judul: string;
  tanggal: string;
  bulan: string;
  hari: string;
  kategori: string;
  ringkasan: string;
  konten: string;
  foto: string;
  penulis: string;
}

export const beritaList: Berita[] = [
  {
    id: "musyawarah-warga-2025",
    judul: "Musyawarah Warga Tahunan RW 011 Tahun 2025",
    tanggal: "10 Januari 2025",
    hari: "10",
    bulan: "Jan",
    kategori: "Musyawarah",
    ringkasan:
      "Musyawarah tahunan membahas program kerja 2025, laporan keuangan, dan rencana pembangunan fasilitas warga.",
    konten:
      "Musyawarah warga tahunan RW 011 telah dilaksanakan pada tanggal 10 Januari 2025 bertempat di Balai Warga RW 011. Acara ini dihadiri oleh seluruh pengurus RW, ketua RT, serta perwakilan warga dari masing-masing RT. Dalam musyawarah ini dibahas laporan pertanggungjawaban pengurus tahun 2024, rencana program kerja tahun 2025, serta pembahasan anggaran untuk pembangunan dan pemeliharaan fasilitas umum.",
    foto: "/assets/img/berita/musyawarah.jpg",
    penulis: "Admin RW 011",
  },
  {
    id: "kerja-bakti-januari-2025",
    judul: "Kerja Bakti Bersama Menyambut Tahun Baru 2025",
    tanggal: "5 Januari 2025",
    hari: "05",
    bulan: "Jan",
    kategori: "Kegiatan",
    ringkasan:
      "Warga RW 011 mengadakan kerja bakti bersama membersihkan lingkungan dan selokan.",
    konten:
      "Dalam rangka menyambut tahun baru 2025, warga RW 011 mengadakan kegiatan kerja bakti bersama. Kegiatan ini diikuti oleh ratusan warga dari seluruh RT. Fokus kegiatan meliputi pembersihan selokan, penataan taman, pengecatan pos kamling, dan pemasangan lampu jalan baru.",
    foto: "/assets/img/berita/kerja-bakti.jpg",
    penulis: "Admin RW 011",
  },
  {
    id: "posyandu-desember-2024",
    judul: "Kegiatan Posyandu Rutin Bulan Desember 2024",
    tanggal: "20 Desember 2024",
    hari: "20",
    bulan: "Des",
    kategori: "Kesehatan",
    ringkasan:
      "Posyandu rutin melayani pemeriksaan balita dan ibu hamil dengan dukungan puskesmas.",
    konten:
      "Kegiatan Posyandu rutin bulan Desember 2024 telah dilaksanakan di Balai Warga RW 011. Sebanyak 45 balita dan 12 ibu hamil mendapatkan pelayanan pemeriksaan kesehatan. Kegiatan ini didukung oleh petugas dari Puskesmas Pasar Kemis serta kader posyandu RW 011.",
    foto: "/assets/img/berita/posyandu.jpg",
    penulis: "Admin RW 011",
  },
  {
    id: "turnamen-badminton-2024",
    judul: "Turnamen Badminton Antar RT Memeriahkan Akhir Tahun",
    tanggal: "15 November 2024",
    hari: "15",
    bulan: "Nov",
    kategori: "Olahraga",
    ringkasan:
      "Turnamen badminton antar RT diikuti 16 tim dari 8 RT di lingkungan RW 011.",
    konten:
      "Turnamen badminton antar RT telah sukses digelar selama 3 hari di Lapangan Serbaguna RW 011. Sebanyak 16 tim dari 8 RT berpartisipasi dalam turnamen ini. Pertandingan final dimenangkan oleh tim RT 003 yang mengalahkan tim RT 007 dengan skor 21-18, 19-21, 21-15.",
    foto: "/assets/img/berita/turnamen.jpg",
    penulis: "Admin RW 011",
  },
  {
    id: "hut-ri-79",
    judul: "Perayaan HUT RI ke-79 Meriah di RW 011",
    tanggal: "17 Agustus 2024",
    hari: "17",
    bulan: "Ags",
    kategori: "Peringatan",
    ringkasan:
      "Berbagai lomba dan kegiatan memeriahkan perayaan kemerdekaan RI ke-79.",
    konten:
      "Perayaan HUT Kemerdekaan RI ke-79 di lingkungan RW 011 berlangsung meriah. Rangkaian kegiatan dimulai dengan upacara bendera, dilanjutkan dengan berbagai lomba untuk anak-anak dan dewasa. Lomba yang diadakan antara lain lomba makan kerupuk, balap karung, tarik tambang, dan lomba mewarnai untuk anak-anak.",
    foto: "/assets/img/berita/hut-ri.jpg",
    penulis: "Admin RW 011",
  },
  {
    id: "santunan-yatim-2024",
    judul: "Santunan Anak Yatim Menyambut Tahun Baru Islam",
    tanggal: "8 Juli 2024",
    hari: "08",
    bulan: "Jul",
    kategori: "Keagamaan",
    ringkasan:
      "RW 011 menyantuni 25 anak yatim dalam rangka peringatan 1 Muharram.",
    konten:
      "Dalam rangka memperingati tahun baru Islam 1 Muharram 1446 H, pengurus RW 011 bersama warga mengadakan kegiatan santunan untuk 25 anak yatim di lingkungan RW 011. Masing-masing anak yatim menerima bantuan berupa paket sembako dan uang santunan.",
    foto: "/assets/img/berita/santunan.jpg",
    penulis: "Admin RW 011",
  },
];

// --- Dokumen Publik ---
export interface Dokumen {
  nama: string;
  kategori: "Surat Keputusan" | "Peraturan" | "Surat Edaran" | "Laporan" | "Lainnya";
  tanggal: string;
  fileUrl: string;
}

export const dokumenPublik: Dokumen[] = [
  {
    nama: "SK Pengurus RW 011 Periode 2024–2029",
    kategori: "Surat Keputusan",
    tanggal: "1 Januari 2024",
    fileUrl: "#",
  },
  {
    nama: "SK Pengurus RT 001–008 Periode 2024–2029",
    kategori: "Surat Keputusan",
    tanggal: "15 Januari 2024",
    fileUrl: "#",
  },
  {
    nama: "Peraturan Tata Tertib Lingkungan RW 011",
    kategori: "Peraturan",
    tanggal: "1 Februari 2024",
    fileUrl: "#",
  },
  {
    nama: "Jadwal Ronda Malam Semester I 2025",
    kategori: "Surat Edaran",
    tanggal: "2 Januari 2025",
    fileUrl: "#",
  },
  {
    nama: "Laporan Keuangan RW 011 Tahun 2024",
    kategori: "Laporan",
    tanggal: "31 Desember 2024",
    fileUrl: "#",
  },
  {
    nama: "Surat Edaran Iuran Bulanan 2025",
    kategori: "Surat Edaran",
    tanggal: "5 Januari 2025",
    fileUrl: "#",
  },
  {
    nama: "Laporan Kegiatan HUT RI ke-79",
    kategori: "Laporan",
    tanggal: "25 Agustus 2024",
    fileUrl: "#",
  },
  {
    nama: "Peraturan Penggunaan Balai Warga",
    kategori: "Peraturan",
    tanggal: "1 Maret 2024",
    fileUrl: "#",
  },
];

// --- Infaq ---
export const infaqInfo = {
  namaBank: "Bank Syariah Indonesia (BSI)",
  nomorRekening: "7182930456",
  atasNama: "RW 011 Desa Sukamantri",
  qrCodeImage: "/assets/img/infaq/qr-code.png",
  nominalPreset: [10000, 25000, 50000, 100000, 200000, 500000],
};

// --- Transaksi Infaq ---
export interface TransaksiInfaq {
  tanggal: string;
  keterangan: string;
  jenis: "masuk" | "keluar";
  jumlah: number;
}

export const transaksiInfaq: TransaksiInfaq[] = [
  {
    tanggal: "2025-01-05",
    keterangan: "Infaq warga RT 001 bulan Januari",
    jenis: "masuk",
    jumlah: 750000,
  },
  {
    tanggal: "2025-01-05",
    keterangan: "Infaq warga RT 002 bulan Januari",
    jenis: "masuk",
    jumlah: 680000,
  },
  {
    tanggal: "2025-01-06",
    keterangan: "Infaq warga RT 003 bulan Januari",
    jenis: "masuk",
    jumlah: 720000,
  },
  {
    tanggal: "2025-01-06",
    keterangan: "Infaq warga RT 004 bulan Januari",
    jenis: "masuk",
    jumlah: 650000,
  },
  {
    tanggal: "2025-01-07",
    keterangan: "Infaq warga RT 005 bulan Januari",
    jenis: "masuk",
    jumlah: 700000,
  },
  {
    tanggal: "2025-01-07",
    keterangan: "Infaq warga RT 006 bulan Januari",
    jenis: "masuk",
    jumlah: 690000,
  },
  {
    tanggal: "2025-01-08",
    keterangan: "Infaq warga RT 007 bulan Januari",
    jenis: "masuk",
    jumlah: 710000,
  },
  {
    tanggal: "2025-01-08",
    keterangan: "Infaq warga RT 008 bulan Januari",
    jenis: "masuk",
    jumlah: 660000,
  },
  {
    tanggal: "2025-01-10",
    keterangan: "Pembelian perlengkapan musholla",
    jenis: "keluar",
    jumlah: 350000,
  },
  {
    tanggal: "2025-01-12",
    keterangan: "Biaya operasional kebersihan Januari",
    jenis: "keluar",
    jumlah: 500000,
  },
  {
    tanggal: "2025-01-15",
    keterangan: "Perbaikan lampu jalan RT 002",
    jenis: "keluar",
    jumlah: 275000,
  },
  {
    tanggal: "2025-01-18",
    keterangan: "Bantuan warga terkena musibah",
    jenis: "keluar",
    jumlah: 500000,
  },
  {
    tanggal: "2025-01-20",
    keterangan: "Infaq Jumat Masjid Jami'",
    jenis: "masuk",
    jumlah: 1250000,
  },
  {
    tanggal: "2025-01-25",
    keterangan: "Pembelian cat untuk pos kamling",
    jenis: "keluar",
    jumlah: 180000,
  },
  {
    tanggal: "2025-01-28",
    keterangan: "Honor petugas kebersihan Januari",
    jenis: "keluar",
    jumlah: 600000,
  },
];

// --- Program & Inovasi ---
export interface ProgramInovasi {
  nama: string;
  slug: string;
  icon: string;
  deskripsi: string;
  fitur: string[];
  portalUrl: string;
  foto: string;
}

export const programInovasi: ProgramInovasi[] = [
  {
    nama: "Wifi Warga",
    slug: "wifi-warga",
    icon: "fas fa-wifi",
    deskripsi:
      "Layanan internet gratis dan terjangkau untuk seluruh warga RW 011. Program ini bertujuan mengurangi kesenjangan digital dan mendukung aktivitas belajar, bekerja, serta berwirausaha dari rumah.",
    fitur: [
      "Internet cepat & stabil untuk warga",
      "Harga terjangkau dengan subsidi RW",
      "Hotspot tersebar di area publik RW 011",
      "Dukungan teknis yang responsif untuk warga",
    ],
    portalUrl: "#",
    foto: "/assets/img/program/wifi-warga.jpg",
  },
  {
    nama: "Koperasi",
    slug: "koperasi",
    icon: "fas fa-store",
    deskripsi:
      "Koperasi warga yang menyediakan kebutuhan pokok dengan harga bersaing, menyediakan jasa, modal usaha / simpan pinjam, serta pemberdayaan ekonomi warga melalui usaha bersama.",
    fitur: [
      "Penyediaan sembako harga terjangkau",
      "Penyediaan jasa, Simpan Pinjam untuk anggota (Coming Soon)",
      "Program pemberdayaan UMKM warga",
      "Bagi hasil keuntungan untuk anggota",
    ],
    portalUrl: "#",
    foto: "/assets/img/program/koperasi.jpg",
  },
  {
    nama: "Sidigi RT",
    slug: "sidigi-rt",
    icon: "fas fa-laptop-code",
    deskripsi:
      "Sistem Digitalisasi RT — platform digital untuk mempermudah administrasi dan pelayanan di tingkat RT. Warga bisa mengurus surat, lapor kegiatan, dan akses informasi RT secara online.",
    fitur: [
      "Pengajuan surat pengantar online",
      "Data warga digital per RT",
      "Laporan kegiatan & keuangan RT",
      "Notifikasi informasi penting via WhatsApp",
    ],
    portalUrl: "#",
    foto: "/assets/img/program/sidigi-rt.jpg",
  },
];

// --- Navigasi ---
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navMenu: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  {
    label: "Informasi",
    href: "#",
    children: [
      { label: "Struktur Pengurus", href: "/team" },
      { label: "Data Warga & Statistik", href: "/data-warga" },
      { label: "Daftar Aset", href: "/aset" },
      { label: "Gambaran Wilayah", href: "/wilayah" },
    ],
  },
  {
    label: "Kegiatan",
    href: "#",
    children: [
      { label: "Galeri Kegiatan", href: "/galeri" },
      { label: "Berita & Artikel", href: "/news" },
    ],
  },
  {
    label: "Layanan",
    href: "#",
    children: [
      { label: "Program & Inovasi", href: "/program" },
      { label: "Dokumen Publik", href: "/dokumen" },
      { label: "Infaq Online", href: "/infaq" },
      { label: "Transparansi Infaq", href: "/transparansi-infaq" },
      { label: "Saran & Masukan", href: "/saran" },
    ],
  },
  { label: "Kontak", href: "/contact" },
];

// --- Layanan Cepat (untuk homepage) ---
export const layananCepat = [
  {
    icon: "fas fa-users",
    title: "Struktur Pengurus",
    description: "Lihat susunan pengurus RW dan RT",
    link: "/team",
  },
  {
    icon: "fas fa-clipboard-list",
    title: "Data Warga",
    description: "Statistik dan informasi warga per RT",
    link: "/data-warga",
  },
  {
    icon: "fas fa-images",
    title: "Galeri Kegiatan",
    description: "Dokumentasi foto dan video kegiatan warga",
    link: "/galeri",
  },
  {
    icon: "fas fa-file-alt",
    title: "Dokumen Publik",
    description: "Unduh dokumen resmi dan surat edaran",
    link: "/dokumen",
  },
  {
    icon: "fas fa-hand-holding-heart",
    title: "Infaq Online",
    description: "Salurkan infaq secara mudah dan transparan",
    link: "/infaq",
  },
  {
    icon: "fas fa-comment-dots",
    title: "Saran & Masukan",
    description: "Sampaikan aspirasi untuk kemajuan bersama",
    link: "/saran",
  },
];
