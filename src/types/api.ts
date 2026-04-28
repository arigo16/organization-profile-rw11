// ============================================================
// API Types - Portal RW 011 Desa Sukamantri
// ============================================================

// --- Base Response Types ---
export interface ApiResponse<T> {
  status: boolean | string; // API returns "success" or true/false
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  status: boolean | string; // API returns "success" or true/false
  message: string;
  data: T[];
  meta: PaginationMeta;
  links: PaginationLinks;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from?: number;
  to?: number;
}

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

// --- Pengurus Types ---
export interface Pengurus {
  id: number;
  nama: string;
  jabatan: string;
  bidang: string;
  periode: string;
  foto: string | null;
  sequence: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PengurusParams {
  bidang?: string;
  is_active?: boolean;
  search?: string;
  per_page?: number;
  page?: number;
}

export type PengurusByBidang = Record<string, Pengurus[]>;

// --- RW Info Types ---
export interface RwInfoData {
  nama_rw: string;
  alamat: string;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  provinsi: string;
  kode_pos: string;
  telepon: string;
  email: string;
  whatsapp: string;
  visi: string;
  misi: string[];
  sejarah: string;
  logo: string;
  hero_image: string;
  social_media: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  maps_embed: string;
  jam_pelayanan: string;
}

export interface RwInfoSingle {
  key: string;
  value: string | string[] | Record<string, string>;
}

// --- Gallery Types ---
export interface GalleryPhoto {
  id: number;
  gallery_event_id: number;
  foto: string;
  caption: string;
  sequence: number;
}

export interface GalleryEvent {
  id: number;
  nama_event: string;
  deskripsi: string;
  tanggal_event: string;
  lokasi: string;
  created_at: string;
  updated_at: string;
  photos: GalleryPhoto[];
}

export interface GalleryParams {
  search?: string;
  per_page?: number;
  page?: number;
}

// --- Berita Types ---
export interface BeritaAuthor {
  id: number;
  name: string;
}

export interface Berita {
  id: number;
  judul: string;
  slug: string;
  konten: string;
  ringkasan: string;
  thumbnail: string | null;
  kategori: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  author: BeritaAuthor;
}

export interface BeritaParams {
  kategori?: string;
  search?: string;
  per_page?: number;
  page?: number;
}

// --- Dokumen Types ---
export interface DokumenUploader {
  id: number;
  name: string;
}

export interface Dokumen {
  id: number;
  nama: string;
  kategori: string;
  deskripsi: string;
  file_path: string;
  file_type: string;
  file_size: number;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  uploader: DokumenUploader;
}

export interface DokumenParams {
  kategori?: string;
  search?: string;
  per_page?: number;
  page?: number;
}

// --- Transaction Types ---
export interface TransactionType {
  id: number;
  name: string;
}

export interface Transaction {
  id: number;
  id_settlement: string;
  mutation: "IN" | "OUT";
  type: TransactionType;
  type_id?: number;
  amount: number | string; // API returns string like "100000.00"
  balance_after: number | string;
  transaction_date: string;
  description: string | null;
  formatted_amount?: string;
}

export interface TransactionBalance {
  balance: number;
  formatted_balance: string;
  last_updated: string;
}

export interface TransactionSummary {
  total_in: number;
  total_out: number;
  count_in: number;
  count_out: number;
  net: number;
  current_balance: number;
  formatted: {
    total_in: string;
    total_out: string;
    net: string;
    current_balance: string;
  };
}

export interface TransactionParams {
  mutation?: "IN" | "OUT";
  type_id?: number;
  start_date?: string;
  end_date?: string;
  month?: number;
  year?: number;
  per_page?: number;
  page?: number;
}

export interface TransactionSummaryParams {
  month?: number;
  year?: number;
}
