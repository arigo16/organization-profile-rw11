"use client";

import { useGallery } from "@/hooks/useApi";
import { galeriKegiatan } from "@/data/rw011";
import { getImageUrl } from "@/utils/storage";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";

function GaleriSkeleton() {
  return (
    <div className="row g-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="col-xl-4 col-lg-6 col-md-6">
          <div className="news-card-items">
            <div
              style={{
                height: 250,
                background: "#e0e0e0",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <div className="news-content p-3">
              <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, marginBottom: 8 }} />
              <div style={{ height: 20, background: "#e0e0e0", borderRadius: 4, width: "80%" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const GaleriPage = () => {
  const { data, isLoading, isError } = useGallery({ per_page: 50 });

  // Transform API data atau fallback ke data lokal
  const galleryItems = isError || !data?.data
    ? galeriKegiatan.map((item, index) => ({
        id: index,
        nama_event: item.judul,
        tanggal_event: item.tanggal,
        lokasi: "",
        deskripsi: "",
        photos: [{ id: index, foto: item.foto, caption: item.judul, sequence: 1, gallery_event_id: index }],
        kategori: item.kategori,
      }))
    : data.data;

  return (
    <DanboxLayout>
      <PageBanner pageName="Galeri Kegiatan" />
      <section className="news-grid-section section-padding">
        <div className="container">
          {isLoading ? (
            <GaleriSkeleton />
          ) : (
            <div className="row g-4">
              {galleryItems.map((item, index) => {
                const firstPhoto = item.photos?.[0];
                const photoUrl = firstPhoto
                  ? (firstPhoto.foto.startsWith("/") ? firstPhoto.foto : getImageUrl(firstPhoto.foto))
                  : "/assets/img/placeholder.jpg";
                const kategori = 'kategori' in item ? item.kategori : "Kegiatan";

                return (
                  <div
                    key={item.id}
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.2 + (index % 3) * 0.1}s`}
                  >
                    <Link href={`/galeri/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <div className="news-card-items" style={{ cursor: "pointer" }}>
                        <div className="news-image" style={{ position: "relative" }}>
                          <Image
                            width={400}
                            height={250}
                            sizes="100vw"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }}
                            src={photoUrl}
                            alt={item.nama_event}
                            unoptimized={photoUrl.startsWith("http")}
                          />
                          <div
                            className="post-box"
                            style={{
                              position: "absolute",
                              top: 15,
                              left: 15,
                              background: "var(--theme-2, #e63946)",
                              color: "#fff",
                              padding: "6px 14px",
                              borderRadius: 4,
                              fontSize: 12,
                              fontWeight: 600,
                              zIndex: 10,
                            }}
                          >
                            <span>{kategori}</span>
                          </div>
                          {item.photos && item.photos.length > 1 && (
                            <div
                              className="position-absolute"
                              style={{
                                bottom: 10,
                                right: 10,
                                background: "rgba(0,0,0,0.7)",
                                color: "#fff",
                                padding: "4px 10px",
                                borderRadius: 4,
                                fontSize: 12,
                              }}
                            >
                              <i className="fas fa-images me-1" />
                              {item.photos.length} foto
                            </div>
                          )}
                        </div>
                        <div className="news-content">
                          <div className="post-date">
                            <i className="fal fa-calendar-alt" /> {item.tanggal_event}
                          </div>
                          <h3>{item.nama_event}</h3>
                          {item.lokasi && (
                            <p className="text-muted mb-0">
                              <i className="fal fa-map-marker-alt me-1" />
                              {item.lokasi}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination jika ada */}
          {data?.meta && data.meta.last_page > 1 && (
            <div className="d-flex justify-content-center mt-5">
              <nav>
                <ul className="pagination">
                  {Array.from({ length: data.meta.last_page }, (_, i) => i + 1).map((page) => (
                    <li
                      key={page}
                      className={`page-item ${page === data.meta.current_page ? "active" : ""}`}
                    >
                      <button className="page-link">{page}</button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </section>
    </DanboxLayout>
  );
};

export default GaleriPage;
