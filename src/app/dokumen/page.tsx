"use client";

import { useState, useMemo } from "react";
import { useDokumen } from "@/hooks/useApi";
import { dokumenPublik } from "@/data/rw011";
import { getDocumentUrl, formatFileSize, getFileIcon, getFileTypeColor } from "@/utils/storage";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";

function TableSkeleton() {
  return (
    <tbody>
      {Array.from({ length: 5 }).map((_, i) => (
        <tr key={i}>
          <td><div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: 20 }} /></td>
          <td><div style={{ height: 16, background: "#e0e0e0", borderRadius: 4 }} /></td>
          <td><div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: 80 }} /></td>
          <td><div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: 100 }} /></td>
          <td><div style={{ height: 28, background: "#e0e0e0", borderRadius: 4, width: 70 }} /></td>
        </tr>
      ))}
    </tbody>
  );
}

const DokumenPage = () => {
  const [selectedKategori, setSelectedKategori] = useState<string>("Semua");
  const { data, isLoading, isError } = useDokumen({ per_page: 100 });

  // Transform API data atau fallback ke data lokal
  const dokumenList = useMemo(() => {
    if (isError || !data?.data) {
      return dokumenPublik.map((doc, i) => ({
        id: i,
        nama: doc.nama,
        kategori: doc.kategori,
        deskripsi: "",
        file_path: doc.fileUrl,
        file_type: "pdf",
        file_size: 0,
        is_public: true,
        created_at: doc.tanggal,
        updated_at: doc.tanggal,
        tanggal: doc.tanggal,
        uploader: { id: 1, name: "Admin" },
      }));
    }
    return data.data.map((doc) => ({
      ...doc,
      tanggal: new Date(doc.created_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    }));
  }, [data, isError]);

  // Get unique categories
  const kategoris = useMemo(() => {
    const cats = new Set(dokumenList.map((d) => d.kategori));
    return ["Semua", ...Array.from(cats)];
  }, [dokumenList]);

  // Filter documents by category
  const filteredDokumen = useMemo(() => {
    if (selectedKategori === "Semua") return dokumenList;
    return dokumenList.filter((d) => d.kategori === selectedKategori);
  }, [dokumenList, selectedKategori]);

  // Count by category
  const getCategoryCount = (kategori: string) => {
    if (kategori === "Semua") return dokumenList.length;
    return dokumenList.filter((d) => d.kategori === kategori).length;
  };

  return (
    <DanboxLayout>
      <PageBanner pageName="Dokumen Publik" />
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Sidebar Kategori */}
            <div className="col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Kategori Dokumen</h3>
                  </div>
                  <div className="widget_categories">
                    <ul>
                      {kategoris.map((kat, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => setSelectedKategori(kat)}
                            className={`w-100 text-start border-0 bg-transparent ${
                              selectedKategori === kat ? "fw-bold text-primary" : ""
                            }`}
                            style={{ cursor: "pointer" }}
                          >
                            {kat} <span>{getCategoryCount(kat)}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Informasi</h3>
                  </div>
                  <p>
                    Dokumen yang tersedia di halaman ini merupakan dokumen publik
                    yang dapat diakses oleh seluruh warga RW 011 Desa
                    Sukamantri. Hubungi sekretariat RW jika Anda membutuhkan
                    dokumen tambahan.
                  </p>
                </div>
              </div>
            </div>

            {/* Daftar Dokumen */}
            <div className="col-lg-8">
              <div className="section-title mb-4">
                <h2 className="mt-char-animation">Daftar Dokumen</h2>
                {selectedKategori !== "Semua" && (
                  <p className="text-muted">
                    Menampilkan dokumen kategori: <strong>{selectedKategori}</strong>
                  </p>
                )}
              </div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: "50px" }}>No</th>
                      <th>Nama Dokumen</th>
                      <th>Kategori</th>
                      <th>Tanggal</th>
                      <th style={{ width: "120px" }}>Aksi</th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <TableSkeleton />
                  ) : (
                    <tbody>
                      {filteredDokumen.map((doc, i) => {
                        const fileIcon = getFileIcon(doc.file_type);
                        const fileColor = getFileTypeColor(doc.file_type);
                        const downloadUrl = getDocumentUrl(doc.file_path);

                        return (
                          <tr key={doc.id} className="wow fadeInUp" data-wow-delay=".1s">
                            <td>{i + 1}</td>
                            <td>
                              <i className={`${fileIcon} ${fileColor} me-2`} />
                              <span>{doc.nama}</span>
                              {doc.file_size > 0 && (
                                <small className="text-muted d-block">
                                  {formatFileSize(doc.file_size)}
                                </small>
                              )}
                            </td>
                            <td>
                              <span className="badge bg-secondary">
                                {doc.kategori}
                              </span>
                            </td>
                            <td>{doc.tanggal}</td>
                            <td>
                              {downloadUrl ? (
                                <a
                                  href={downloadUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="theme-btn"
                                  style={{
                                    padding: "5px 15px",
                                    fontSize: "13px",
                                  }}
                                >
                                  <i className="fas fa-download me-1" /> Unduh
                                </a>
                              ) : (
                                <span className="text-muted">-</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                      {filteredDokumen.length === 0 && (
                        <tr>
                          <td colSpan={5} className="text-center py-4 text-muted">
                            Tidak ada dokumen untuk kategori ini
                          </td>
                        </tr>
                      )}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default DokumenPage;
