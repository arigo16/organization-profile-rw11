"use client";

import { useParams } from "next/navigation";
import { useBeritaDetail, useBerita } from "@/hooks/useApi";
import { beritaList, type Berita as LocalBerita } from "@/data/rw011";
import { getImageUrl } from "@/utils/storage";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";

function DetailSkeleton() {
  return (
    <div className="blog-post-details border-wrap">
      <div className="single-blog-post post-details">
        <div className="post-content">
          <div style={{ height: 24, background: "#e0e0e0", borderRadius: 4, width: 100, marginBottom: 16 }} />
          <div style={{ height: 32, background: "#e0e0e0", borderRadius: 4, marginBottom: 16 }} />
          <div style={{ height: 20, background: "#e0e0e0", borderRadius: 4, width: 200, marginBottom: 24 }} />
          <div style={{ height: 400, background: "#e0e0e0", borderRadius: 8, marginBottom: 24 }} />
          <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, marginBottom: 8 }} />
          <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, marginBottom: 8 }} />
          <div style={{ height: 16, background: "#e0e0e0", borderRadius: 4, width: "80%", marginBottom: 8 }} />
        </div>
      </div>
    </div>
  );
}

const NewsDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const { data, isLoading, isError } = useBeritaDetail(slug);
  const { data: relatedData } = useBerita({ per_page: 3 });

  // Fallback ke data lokal jika API error
  const localBerita: LocalBerita | undefined = beritaList.find((b) => b.id === slug) || beritaList[0];

  // Transform data untuk konsistensi
  const article = !isError && data?.data
    ? {
        id: data.data.id,
        judul: data.data.judul,
        slug: data.data.slug,
        kategori: data.data.kategori,
        konten: data.data.konten,
        ringkasan: data.data.ringkasan,
        foto: data.data.thumbnail ? getImageUrl(data.data.thumbnail) : "/assets/img/placeholder.jpg",
        tanggal: new Date(data.data.published_at).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        penulis: data.data.author?.name || "Admin RW",
      }
    : {
        id: localBerita.id,
        judul: localBerita.judul,
        slug: localBerita.id,
        kategori: localBerita.kategori,
        konten: localBerita.konten,
        ringkasan: localBerita.ringkasan,
        foto: localBerita.foto,
        tanggal: localBerita.tanggal,
        penulis: localBerita.penulis,
      };

  // Related news
  const relatedNews = relatedData?.data
    ? relatedData.data
        .filter((item) => item.slug !== slug)
        .slice(0, 2)
        .map((item) => ({
          id: item.id,
          judul: item.judul,
          slug: item.slug,
          foto: item.thumbnail ? getImageUrl(item.thumbnail) : "/assets/img/placeholder.jpg",
          tanggal: new Date(item.published_at).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        }))
    : beritaList
        .filter((b: LocalBerita) => b.id !== slug)
        .slice(0, 2)
        .map((b: LocalBerita) => ({
          id: b.id,
          judul: b.judul,
          slug: b.id,
          foto: b.foto,
          tanggal: b.tanggal,
        }));

  return (
    <DanboxLayout>
      <PageBanner pageName="Detail Berita" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              {isLoading ? (
                <DetailSkeleton />
              ) : (
                <div className="blog-post-details border-wrap">
                  <div className="single-blog-post post-details">
                    <div className="post-content">
                      <div className="post-cat">
                        <Link href="/news">{article.kategori}</Link>
                      </div>
                      <h2>{article.judul}</h2>
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          {article.tanggal}
                        </span>
                        <span>
                          <i className="fal fa-user" />
                          {article.penulis}
                        </span>
                      </div>
                      <Image
                        width={800}
                        height={450}
                        sizes="100vw"
                        style={{ height: "auto", width: "100%" }}
                        src={article.foto}
                        alt={article.judul}
                        className="mb-4"
                        unoptimized={article.foto.startsWith("http")}
                      />
                      {/* Render HTML content from API */}
                      <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: article.konten }}
                      />
                      {article.ringkasan && (
                        <blockquote className="mt-4">
                          <p>{article.ringkasan}</p>
                        </blockquote>
                      )}
                    </div>
                  </div>

                  {/* Tags & Share */}
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Tag Terkait</h4>
                      <div className="tagcloud">
                        <Link href="/news">{article.kategori}</Link>
                        <Link href="/news">RW 011</Link>
                        <Link href="/news">Warga</Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Bagikan</h4>
                      <div className="social-share">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(article.judul)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(article.judul + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Related Posts */}
                  {relatedNews.length > 0 && (
                    <div className="related-posts mt-5">
                      <h3 className="mb-4">Berita Terkait</h3>
                      <div className="row">
                        {relatedNews.map((item) => (
                          <div key={item.id} className="col-md-6">
                            <div className="related-post-item mb-4">
                              <Image
                                width={400}
                                height={180}
                                sizes="100vw"
                                style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }}
                                src={item.foto}
                                alt={item.judul}
                                unoptimized={item.foto.startsWith("http")}
                              />
                              <div className="mt-3">
                                <span className="text-muted small">
                                  <i className="fal fa-calendar-alt me-1" />
                                  {item.tanggal}
                                </span>
                                <h5 className="mt-2">
                                  <Link href={`/news/${item.slug}`}>{item.judul}</Link>
                                </h5>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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

export default NewsDetailPage;
