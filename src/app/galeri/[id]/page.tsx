"use client";

import { useParams } from "next/navigation";
import { useGalleryDetail } from "@/hooks/useApi";
import { galeriKegiatan } from "@/data/rw011";
import { getImageUrl } from "@/utils/storage";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function DetailSkeleton() {
  return (
    <div>
      <div className="mb-4">
        <div style={{ height: 32, background: "#e0e0e0", borderRadius: 4, width: "60%", marginBottom: 16 }} />
        <div style={{ height: 20, background: "#e0e0e0", borderRadius: 4, width: 200, marginBottom: 8 }} />
        <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: 300 }} />
      </div>
      <div className="row g-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="col-md-4 col-sm-6">
            <div style={{ height: 200, background: "#e0e0e0", borderRadius: 8 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LightboxModal({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  isOpen: boolean;
  photos: { foto: string; caption?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];
  const photoUrl = currentPhoto.foto.startsWith("/")
    ? currentPhoto.foto
    : getImageUrl(currentPhoto.foto);

  return (
    <div
      className="lightbox-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.95)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: 32,
          cursor: "pointer",
          zIndex: 10001,
        }}
      >
        <i className="fas fa-times" />
      </button>

      {/* Prev button */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          style={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            fontSize: 24,
            padding: "15px 20px",
            cursor: "pointer",
            borderRadius: 8,
          }}
        >
          <i className="fas fa-chevron-left" />
        </button>
      )}

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "90%", maxHeight: "85vh", textAlign: "center" }}
      >
        <Image
          src={photoUrl}
          alt={currentPhoto.caption || "Gallery photo"}
          width={1200}
          height={800}
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
            borderRadius: 8,
          }}
          unoptimized={photoUrl.startsWith("http")}
        />
        {currentPhoto.caption && (
          <p style={{ color: "#fff", marginTop: 16, fontSize: 16 }}>
            {currentPhoto.caption}
          </p>
        )}
        <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 8, fontSize: 14 }}>
          {currentIndex + 1} / {photos.length}
        </p>
      </div>

      {/* Next button */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            fontSize: 24,
            padding: "15px 20px",
            cursor: "pointer",
            borderRadius: 8,
          }}
        >
          <i className="fas fa-chevron-right" />
        </button>
      )}
    </div>
  );
}

const GalleryDetailPage = () => {
  const params = useParams();
  const id = Number(params?.id);

  const { data, isLoading, isError } = useGalleryDetail(id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Fallback ke data lokal jika API error
  const localItem = galeriKegiatan[id] || galeriKegiatan[0];
  const gallery = isError || !data?.data
    ? {
        id: id,
        nama_event: localItem?.judul || "Gallery Event",
        tanggal_event: localItem?.tanggal || "",
        lokasi: "",
        deskripsi: "",
        photos: localItem
          ? [{ id: 0, foto: localItem.foto, caption: localItem.judul, sequence: 1, gallery_event_id: id }]
          : [],
      }
    : data.data;

  const photos = gallery.photos || [];

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <DanboxLayout>
      <PageBanner pageName="Detail Galeri" />
      <section className="section-padding">
        <div className="container">
          {isLoading ? (
            <DetailSkeleton />
          ) : (
            <>
              {/* Event Info */}
              <div className="mb-5">
                <Link
                  href="/galeri"
                  className="text-muted d-inline-flex align-items-center mb-3"
                >
                  <i className="fas fa-arrow-left me-2" />
                  Kembali ke Galeri
                </Link>
                <h2 className="mb-3">{gallery.nama_event}</h2>
                <div className="d-flex flex-wrap gap-3 text-muted mb-3">
                  {gallery.tanggal_event && (
                    <span>
                      <i className="fal fa-calendar-alt me-2" />
                      {new Date(gallery.tanggal_event).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  )}
                  {gallery.lokasi && (
                    <span>
                      <i className="fal fa-map-marker-alt me-2" />
                      {gallery.lokasi}
                    </span>
                  )}
                  <span>
                    <i className="fal fa-images me-2" />
                    {photos.length} foto
                  </span>
                </div>
                {gallery.deskripsi && (
                  <p className="lead">{gallery.deskripsi}</p>
                )}
              </div>

              {/* Photo Grid */}
              {photos.length === 0 ? (
                <div className="text-center py-5">
                  <i className="fas fa-images fa-3x text-muted mb-3" />
                  <p className="text-muted">Belum ada foto untuk event ini</p>
                </div>
              ) : (
                <div className="row g-3">
                  {photos.map((photo, index) => {
                    const photoUrl = photo.foto.startsWith("/")
                      ? photo.foto
                      : getImageUrl(photo.foto);

                    return (
                      <div
                        key={photo.id || index}
                        className="col-lg-4 col-md-6 col-sm-6"
                      >
                        <div
                          className="gallery-item"
                          style={{ cursor: "pointer", position: "relative" }}
                          onClick={() => openLightbox(index)}
                        >
                          <Image
                            src={photoUrl}
                            alt={photo.caption || `Photo ${index + 1}`}
                            width={400}
                            height={300}
                            style={{
                              width: "100%",
                              height: 250,
                              objectFit: "cover",
                              borderRadius: 8,
                              transition: "transform 0.3s ease",
                            }}
                            unoptimized={photoUrl.startsWith("http")}
                          />
                          <div
                            className="gallery-overlay"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "rgba(0,0,0,0.4)",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              borderRadius: 8,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = "0";
                            }}
                          >
                            <i
                              className="fas fa-search-plus"
                              style={{ color: "#fff", fontSize: 28 }}
                            />
                          </div>
                          {photo.caption && (
                            <p
                              className="mt-2 mb-0 text-center text-muted"
                              style={{ fontSize: 14 }}
                            >
                              {photo.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        photos={photos}
        currentIndex={currentPhotoIndex}
        onClose={closeLightbox}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </DanboxLayout>
  );
};

export default GalleryDetailPage;
