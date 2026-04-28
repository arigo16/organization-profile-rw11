"use client";

import { useGallery } from "@/hooks/useApi";
import { galeriKegiatan } from "@/data/rw011";
import { getImageUrl } from "@/utils/storage";
import Image from "next/image";
import Link from "next/link";

function GallerySkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="gallery-wrappper">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="gallery-image"
          style={{
            width: 300,
            height: 200,
            background: "#e0e0e0",
            borderRadius: 8,
          }}
        />
      ))}
    </div>
  );
}

export const Gallery1 = () => {
  const { data, isLoading, isError } = useGallery({ per_page: 5 });

  // Fallback ke data statis lokal
  const localGallery = [
    { img: "/assets/img/gallery/gallery-6.jpg", delay: ".2s" },
    { img: "/assets/img/gallery/gallery-7.jpg", delay: ".4s" },
    { img: "/assets/img/gallery/gallery-8.jpg", delay: ".6s" },
    { img: "/assets/img/gallery/gallery-9.jpg", delay: ".8s" },
    { img: "/assets/img/gallery/gallery-10.jpg", delay: ".9s" },
  ];

  // Transform API data atau fallback ke data lokal
  const galleryData: { img: string; delay: string; caption?: string }[] = isError || !data?.data
    ? localGallery
    : data.data.slice(0, 5).map((event, i) => ({
        img: event.photos?.[0]?.foto
          ? getImageUrl(event.photos[0].foto)
          : "/assets/img/placeholder.jpg",
        delay: `${0.2 + i * 0.2}s`,
        caption: event.nama_event,
      }));

  return (
    <div className="gallery-section fix section-padding pt-0">
      <div className="container-fluid">
        {isLoading ? (
          <GallerySkeleton count={5} />
        ) : (
          <div className="gallery-wrappper">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className="gallery-image wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <Image
                  width={300}
                  height={200}
                  sizes="100vw"
                  style={{ width: "300px", height: "auto" }}
                  src={item.img}
                  alt={item.caption || "Gallery"}
                  unoptimized={item.img.startsWith("http")}
                />
                <div className="gallery-content">
                  <a href={item.img} className="img-popup">
                    <i className="far fa-search text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-4">
          <Link href="/galeri" className="theme-btn">
            Lihat Semua Galeri
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Gallery2 = () => {
  const { data, isLoading, isError } = useGallery({ per_page: 5 });

  // Fallback ke data statis lokal
  const localGalleryItems = galeriKegiatan.slice(0, 5).map((item) => ({
    image: item.foto,
    category: item.kategori,
    title: item.judul,
  }));

  // Transform API data atau fallback ke data lokal
  const galleryItems = isError || !data?.data
    ? localGalleryItems
    : data.data.slice(0, 5).map((event) => ({
        image: event.photos?.[0]?.foto
          ? getImageUrl(event.photos[0].foto)
          : "/assets/img/placeholder.jpg",
        category: "Kegiatan",
        title: event.nama_event,
      }));

  return (
    <div className="gallery-section fix section-padding">
      <div className="container-fluid">
        {isLoading ? (
          <GallerySkeleton count={5} />
        ) : (
          <div className="gallery-wrappper">
            {galleryItems.map((item, index) => {
              const delay = (0.2 + index * 0.2).toFixed(1) + "s";
              return (
                <div
                  key={index}
                  className="gallery-image wow fadeInUp"
                  data-wow-delay={delay}
                >
                  <Image
                    width={320}
                    height={200}
                    sizes="100vw"
                    style={{ width: "320px", height: "auto" }}
                    src={item.image}
                    alt={item.title}
                    unoptimized={item.image.startsWith("http")}
                  />
                  <div className="gallery-content">
                    <p>{item.category}</p>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
