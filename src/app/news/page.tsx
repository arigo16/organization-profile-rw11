"use client";

import { useBerita } from "@/hooks/useApi";
import { beritaList } from "@/data/rw011";
import { getImageUrl } from "@/utils/storage";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Link from "next/link";

function NewsSkeleton() {
  return (
    <div className="blog-posts">
      {Array.from({ length: 3 }).map((_, i) => (
        <div className="single-blog-post" key={i}>
          <div
            className="post-featured-thumb"
            style={{ background: "#e0e0e0", height: 300 }}
          />
          <div className="post-content">
            <div style={{ height: 20, background: "#e0e0e0", borderRadius: 4, width: 80, marginBottom: 16 }} />
            <div style={{ height: 28, background: "#e0e0e0", borderRadius: 4, marginBottom: 12 }} />
            <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, marginBottom: 16 }} />
            <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: "90%" }} />
            <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: "80%", marginTop: 8 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const NewsPage = () => {
  const { data, isLoading, isError } = useBerita({ per_page: 20 });

  // Transform API data atau fallback ke data lokal
  const newsItems = isError || !data?.data
    ? beritaList.map((item) => ({
        id: item.id,
        judul: item.judul,
        slug: item.id,
        kategori: item.kategori,
        ringkasan: item.ringkasan,
        konten: item.konten,
        thumbnail: item.foto,
        published_at: item.tanggal,
        author: { id: 1, name: item.penulis },
        is_published: true,
        created_at: item.tanggal,
        updated_at: item.tanggal,
      }))
    : data.data;

  // Format date helper
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <DanboxLayout>
      <PageBanner pageName="Berita & Artikel" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              {isLoading ? (
                <NewsSkeleton />
              ) : (
                <div className="blog-posts">
                  {newsItems.map((item, index) => {
                    const imageUrl = item.thumbnail
                      ? (item.thumbnail.startsWith("/") ? item.thumbnail : getImageUrl(item.thumbnail))
                      : "/assets/img/placeholder.jpg";

                    return (
                      <div className="single-blog-post" key={item.id || index}>
                        <div
                          className="post-featured-thumb bg-cover"
                          style={{
                            backgroundImage: `url(${imageUrl})`,
                          }}
                        />
                        <div className="post-content">
                          <div className="post-cat">
                            <Link href={`/news?kategori=${item.kategori}`}>{item.kategori}</Link>
                          </div>
                          <h2>
                            <Link href={`/news/${item.slug}`}>{item.judul}</Link>
                          </h2>
                          <div className="post-meta">
                            <span>
                              <i className="fal fa-calendar-alt" />
                              {formatDate(item.published_at)}
                            </span>
                            <span>
                              <i className="fal fa-user" />
                              {item.author?.name || "Admin"}
                            </span>
                          </div>
                          <p>{item.ringkasan}</p>
                          <div className="d-flex justify-content-between align-items-center mt-30">
                            <div className="post-link">
                              <Link href={`/news/${item.slug}`}>
                                <i className="fal fa-arrow-right" /> Baca Selengkapnya
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {data?.meta && data.meta.last_page > 1 && (
                <div className="d-flex justify-content-center mt-4">
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
            <BlogSidebar />
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default NewsPage;
