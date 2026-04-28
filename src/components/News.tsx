"use client";

import { useBerita } from "@/hooks/useApi";
import { beritaList } from "@/data/rw011";
import { getImageUrl } from "@/utils/storage";
import Image from "next/image";
import Link from "next/link";

function NewsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="row">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="col-xl-4 col-lg-6 col-md-6">
          <div className="single-news-items-2">
            <div
              className="news-image"
              style={{ background: "#e0e0e0", height: 280, borderRadius: 8 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export const News1 = () => {
  const { data, isLoading, isError } = useBerita({ per_page: 3 });

  // Transform API data atau fallback ke data lokal
  const latestNews = isError || !data?.data
    ? beritaList.slice(0, 3).map((item) => ({
        id: item.id,
        judul: item.judul,
        slug: item.id,
        kategori: item.kategori,
        ringkasan: item.ringkasan,
        thumbnail: item.foto,
        published_at: item.tanggal,
        hari: item.hari,
        bulan: item.bulan,
        author: { id: 1, name: item.penulis },
      }))
    : data.data.map((item) => {
        const date = new Date(item.published_at);
        return {
          ...item,
          hari: date.getDate().toString().padStart(2, "0"),
          bulan: date.toLocaleDateString("id-ID", { month: "short" }),
        };
      });

  return (
    <section className="news-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-newspaper" />
            Berita &amp; Artikel
          </span>
          <h2 className="mt-char-animation">Berita Terbaru</h2>
        </div>
        {isLoading ? (
          <NewsSkeleton count={3} />
        ) : (
          <div className="row">
            {latestNews.map((item, index) => {
              const imageUrl = item.thumbnail
                ? (item.thumbnail.startsWith("/") ? item.thumbnail : getImageUrl(item.thumbnail))
                : "/assets/img/placeholder.jpg";

              return (
                <div
                  key={item.id || index}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.2}s`}
                >
                  <div
                    className={`single-news-items-2 ${index === 1 ? "active" : ""}`}
                  >
                    <div
                      className="news-image bg-cover"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                      <div className="post-date">
                        <h5>{item.hari}</h5>
                        <span>{item.bulan}</span>
                      </div>
                      <div className="news-content">
                        <div className="icon">
                          <i className="fal fa-tag" />
                          <span>{item.kategori}</span>
                        </div>
                        <h4>
                          <Link href={`/news/${item.slug}`}>{item.judul}</Link>
                        </h4>
                        <ul className="post-list">
                          <li>
                            <i className="far fa-user" />
                            <span>{item.author?.name || "Admin"}</span>
                          </li>
                          <li>
                            <Link href={`/news/${item.slug}`}>
                              <i className="fas fa-long-arrow-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="text-center mt-4">
          <Link href="/news" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
};

export const News2 = () => {
  const { data, isLoading, isError } = useBerita({ per_page: 3 });

  // Transform API data atau fallback ke data lokal
  const newsData = isError || !data?.data
    ? beritaList.slice(0, 3).map((item) => ({
        id: item.id,
        judul: item.judul,
        slug: item.id,
        kategori: item.kategori,
        ringkasan: item.ringkasan,
        thumbnail: item.foto,
        published_at: item.tanggal,
        hari: item.hari,
        bulan: item.bulan,
        author: { id: 1, name: item.penulis },
      }))
    : data.data.map((item) => {
        const date = new Date(item.published_at);
        return {
          ...item,
          hari: date.getDate().toString().padStart(2, "0"),
          bulan: date.toLocaleDateString("id-ID", { month: "short" }),
        };
      });

  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-newspaper" />
            Berita Terkini
          </span>
          <h2 className="mt-char-animation">Berita & Artikel</h2>
        </div>
        {isLoading ? (
          <NewsSkeleton count={3} />
        ) : (
          <div className="row">
            {newsData.map((item, index) => {
              const imageUrl = item.thumbnail
                ? (item.thumbnail.startsWith("/") ? item.thumbnail : getImageUrl(item.thumbnail))
                : "/assets/img/placeholder.jpg";

              return (
                <div
                  key={item.id || index}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.2}s`}
                >
                  <div className="news-card-items-2">
                    <div className="news-image">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src={imageUrl}
                        alt={item.judul}
                      />
                      <div className="post-date">
                        <h3>
                          {item.hari} <br />
                          <span>{item.bulan}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="news-content">
                      <ul>
                        <li>
                          <i className="far fa-user" /> {item.author?.name || "Admin"}
                        </li>
                        <li>
                          <i className="far fa-tag" /> {item.kategori}
                        </li>
                      </ul>
                      <h4>
                        <Link href={`/news/${item.slug}`}>{item.judul}</Link>
                      </h4>
                      <Link href={`/news/${item.slug}`} className="link-btn">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
