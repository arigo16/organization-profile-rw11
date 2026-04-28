// ============================================================
// API Service - Portal RW 011 Desa Sukamantri
// ============================================================

import axios from "axios";
import type {
  ApiResponse,
  PaginatedResponse,
  Pengurus,
  PengurusParams,
  PengurusByBidang,
  RwInfoData,
  RwInfoSingle,
  GalleryEvent,
  GalleryParams,
  Berita,
  BeritaParams,
  Dokumen,
  DokumenParams,
  Transaction,
  TransactionParams,
  TransactionBalance,
  TransactionSummary,
  TransactionSummaryParams,
  TransactionType,
} from "@/types/api";

// --- Axios Instance ---
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.rw11sukamantri.id/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// --- Pengurus API ---
export const pengurusApi = {
  getAll: async (params?: PengurusParams) => {
    const response = await api.get<PaginatedResponse<Pengurus>>("/public/pengurus", { params });
    return response.data;
  },

  getByBidang: async () => {
    const response = await api.get<ApiResponse<PengurusByBidang>>("/public/pengurus/by-bidang");
    return response.data;
  },
};

// --- RW Info API ---
export const rwInfoApi = {
  getAll: async () => {
    const response = await api.get<ApiResponse<RwInfoData>>("/public/rw-info");
    return response.data;
  },

  getByKey: async (key: string) => {
    const response = await api.get<ApiResponse<RwInfoSingle>>(`/public/rw-info/${key}`);
    return response.data;
  },
};

// --- Gallery API ---
export const galleryApi = {
  getAll: async (params?: GalleryParams) => {
    const response = await api.get<PaginatedResponse<GalleryEvent>>("/public/gallery", { params });
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<ApiResponse<GalleryEvent>>(`/public/gallery/${id}`);
    return response.data;
  },
};

// --- Berita API ---
export const beritaApi = {
  getAll: async (params?: BeritaParams) => {
    const response = await api.get<PaginatedResponse<Berita>>("/public/berita", { params });
    return response.data;
  },

  getBySlug: async (slug: string) => {
    const response = await api.get<ApiResponse<Berita>>(`/public/berita/${slug}`);
    return response.data;
  },
};

// --- Dokumen API ---
export const dokumenApi = {
  getAll: async (params?: DokumenParams) => {
    const response = await api.get<PaginatedResponse<Dokumen>>("/public/dokumen", { params });
    return response.data;
  },
};

// --- Transaction API ---
export const transactionApi = {
  getBalance: async () => {
    const response = await api.get<ApiResponse<TransactionBalance>>("/public/transactions/balance");
    return response.data;
  },

  getSummary: async (params?: TransactionSummaryParams) => {
    const response = await api.get<ApiResponse<TransactionSummary>>("/public/transactions/summary", { params });
    return response.data;
  },

  getAll: async (params?: TransactionParams) => {
    const response = await api.get<PaginatedResponse<Transaction>>("/public/transactions", { params });
    return response.data;
  },

  getTypes: async () => {
    const response = await api.get<ApiResponse<TransactionType[]>>("/public/transaction-types");
    return response.data;
  },
};

// --- Export all APIs ---
export const publicApi = {
  pengurus: pengurusApi,
  rwInfo: rwInfoApi,
  gallery: galleryApi,
  berita: beritaApi,
  dokumen: dokumenApi,
  transaction: transactionApi,
};

export default api;
