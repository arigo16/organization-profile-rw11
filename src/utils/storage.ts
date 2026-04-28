// ============================================================
// Storage Utilities - Portal RW 011 Desa Sukamantri
// ============================================================

const STORAGE_URL =
  process.env.NEXT_PUBLIC_STORAGE_URL || "https://api.rw11sukamantri.id/storage";

/**
 * Get full URL for storage files (images, documents)
 * @param path - Path dari API response (e.g., "pengurus/budi.jpg" atau "http://...")
 * @param placeholder - Fallback image jika path kosong
 */
export function getStorageUrl(
  path: string | null | undefined,
  placeholder = "/assets/img/placeholder.jpg"
): string {
  if (!path) return placeholder;

  // Jika sudah full URL, return as-is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Jika local asset (dimulai dengan /assets/), return as-is
  if (path.startsWith("/assets/")) {
    return path;
  }

  // Hapus leading slash jika ada untuk menghindari double slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Gabungkan dengan storage URL (Next.js Image akan handle encoding otomatis)
  return `${STORAGE_URL}/${cleanPath}`;
}

/**
 * Get image URL with optional placeholder
 */
export function getImageUrl(
  path: string | null | undefined,
  placeholder = "/assets/img/placeholder.jpg"
): string {
  return getStorageUrl(path, placeholder);
}

/**
 * Get document download URL
 */
export function getDocumentUrl(path: string | null | undefined): string | null {
  if (!path) return null;

  // Jika sudah full URL, return as-is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Hapus leading slash jika ada
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${STORAGE_URL}/${cleanPath}`;
}

/**
 * Format file size to human readable
 * @param bytes - File size in bytes
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1073741824) return `${(bytes / 1048576).toFixed(1)} MB`;
  return `${(bytes / 1073741824).toFixed(1)} GB`;
}

/**
 * Get file icon based on file type
 */
export function getFileIcon(fileType: string): string {
  const icons: Record<string, string> = {
    pdf: "fas fa-file-pdf",
    doc: "fas fa-file-word",
    docx: "fas fa-file-word",
    xls: "fas fa-file-excel",
    xlsx: "fas fa-file-excel",
    ppt: "fas fa-file-powerpoint",
    pptx: "fas fa-file-powerpoint",
    jpg: "fas fa-file-image",
    jpeg: "fas fa-file-image",
    png: "fas fa-file-image",
    gif: "fas fa-file-image",
    zip: "fas fa-file-archive",
    rar: "fas fa-file-archive",
  };
  return icons[fileType.toLowerCase()] || "fas fa-file";
}

/**
 * Get file type color class
 */
export function getFileTypeColor(fileType: string): string {
  const colors: Record<string, string> = {
    pdf: "text-danger",
    doc: "text-primary",
    docx: "text-primary",
    xls: "text-success",
    xlsx: "text-success",
    ppt: "text-warning",
    pptx: "text-warning",
  };
  return colors[fileType.toLowerCase()] || "text-secondary";
}
