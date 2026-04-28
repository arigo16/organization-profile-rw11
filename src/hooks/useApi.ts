// ============================================================
// React Query Hooks - Portal RW 011 Desa Sukamantri
// ============================================================

import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  pengurusApi,
  rwInfoApi,
  galleryApi,
  beritaApi,
  dokumenApi,
  transactionApi,
} from "@/services/api";
import type {
  PengurusParams,
  GalleryParams,
  BeritaParams,
  DokumenParams,
  TransactionParams,
  TransactionSummaryParams,
} from "@/types/api";

// --- Query Keys ---
export const queryKeys = {
  pengurus: {
    all: ["pengurus"] as const,
    list: (params?: PengurusParams) => ["pengurus", "list", params] as const,
    byBidang: () => ["pengurus", "by-bidang"] as const,
  },
  rwInfo: {
    all: ["rw-info"] as const,
    byKey: (key: string) => ["rw-info", key] as const,
  },
  gallery: {
    all: ["gallery"] as const,
    list: (params?: GalleryParams) => ["gallery", "list", params] as const,
    detail: (id: number) => ["gallery", "detail", id] as const,
  },
  berita: {
    all: ["berita"] as const,
    list: (params?: BeritaParams) => ["berita", "list", params] as const,
    detail: (slug: string) => ["berita", "detail", slug] as const,
  },
  dokumen: {
    all: ["dokumen"] as const,
    list: (params?: DokumenParams) => ["dokumen", "list", params] as const,
  },
  transaction: {
    all: ["transaction"] as const,
    balance: () => ["transaction", "balance"] as const,
    summary: (params?: TransactionSummaryParams) => ["transaction", "summary", params] as const,
    list: (params?: TransactionParams) => ["transaction", "list", params] as const,
    types: () => ["transaction", "types"] as const,
  },
};

// ============================================================
// Pengurus Hooks
// ============================================================

export function usePengurus(params?: PengurusParams) {
  return useQuery({
    queryKey: queryKeys.pengurus.list(params),
    queryFn: () => pengurusApi.getAll(params),
  });
}

export function usePengurusInfinite(params?: Omit<PengurusParams, "page">) {
  return useInfiniteQuery({
    queryKey: queryKeys.pengurus.list(params),
    queryFn: ({ pageParam = 1 }) =>
      pengurusApi.getAll({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page < lastPage.meta.last_page) {
        return lastPage.meta.current_page + 1;
      }
      return undefined;
    },
  });
}

export function usePengurusByBidang() {
  return useQuery({
    queryKey: queryKeys.pengurus.byBidang(),
    queryFn: () => pengurusApi.getByBidang(),
  });
}

// ============================================================
// RW Info Hooks
// ============================================================

export function useRwInfo() {
  return useQuery({
    queryKey: queryKeys.rwInfo.all,
    queryFn: () => rwInfoApi.getAll(),
    staleTime: 1000 * 60 * 60, // 1 hour - info jarang berubah
  });
}

export function useRwInfoByKey(key: string) {
  return useQuery({
    queryKey: queryKeys.rwInfo.byKey(key),
    queryFn: () => rwInfoApi.getByKey(key),
    enabled: !!key,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}

// ============================================================
// Gallery Hooks
// ============================================================

export function useGallery(params?: GalleryParams) {
  return useQuery({
    queryKey: queryKeys.gallery.list(params),
    queryFn: () => galleryApi.getAll(params),
  });
}

export function useGalleryInfinite(params?: Omit<GalleryParams, "page">) {
  return useInfiniteQuery({
    queryKey: queryKeys.gallery.list(params),
    queryFn: ({ pageParam = 1 }) =>
      galleryApi.getAll({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page < lastPage.meta.last_page) {
        return lastPage.meta.current_page + 1;
      }
      return undefined;
    },
  });
}

export function useGalleryDetail(id: number) {
  return useQuery({
    queryKey: queryKeys.gallery.detail(id),
    queryFn: () => galleryApi.getById(id),
    enabled: !!id,
  });
}

// ============================================================
// Berita Hooks
// ============================================================

export function useBerita(params?: BeritaParams) {
  return useQuery({
    queryKey: queryKeys.berita.list(params),
    queryFn: () => beritaApi.getAll(params),
  });
}

export function useBeritaInfinite(params?: Omit<BeritaParams, "page">) {
  return useInfiniteQuery({
    queryKey: queryKeys.berita.list(params),
    queryFn: ({ pageParam = 1 }) =>
      beritaApi.getAll({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page < lastPage.meta.last_page) {
        return lastPage.meta.current_page + 1;
      }
      return undefined;
    },
  });
}

export function useBeritaDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.berita.detail(slug),
    queryFn: () => beritaApi.getBySlug(slug),
    enabled: !!slug,
  });
}

// ============================================================
// Dokumen Hooks
// ============================================================

export function useDokumen(params?: DokumenParams) {
  return useQuery({
    queryKey: queryKeys.dokumen.list(params),
    queryFn: () => dokumenApi.getAll(params),
  });
}

export function useDokumenInfinite(params?: Omit<DokumenParams, "page">) {
  return useInfiniteQuery({
    queryKey: queryKeys.dokumen.list(params),
    queryFn: ({ pageParam = 1 }) =>
      dokumenApi.getAll({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page < lastPage.meta.last_page) {
        return lastPage.meta.current_page + 1;
      }
      return undefined;
    },
  });
}

// ============================================================
// Transaction Hooks
// ============================================================

export function useTransactionBalance() {
  return useQuery({
    queryKey: queryKeys.transaction.balance(),
    queryFn: () => transactionApi.getBalance(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useTransactionSummary(params?: TransactionSummaryParams) {
  return useQuery({
    queryKey: queryKeys.transaction.summary(params),
    queryFn: () => transactionApi.getSummary(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useTransactions(params?: TransactionParams) {
  return useQuery({
    queryKey: queryKeys.transaction.list(params),
    queryFn: () => transactionApi.getAll(params),
  });
}

export function useTransactionsInfinite(params?: Omit<TransactionParams, "page">) {
  return useInfiniteQuery({
    queryKey: queryKeys.transaction.list(params),
    queryFn: ({ pageParam = 1 }) =>
      transactionApi.getAll({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page < lastPage.meta.last_page) {
        return lastPage.meta.current_page + 1;
      }
      return undefined;
    },
  });
}

export function useTransactionTypes() {
  return useQuery({
    queryKey: queryKeys.transaction.types(),
    queryFn: () => transactionApi.getTypes(),
    staleTime: 1000 * 60 * 60, // 1 hour - types rarely change
  });
}
