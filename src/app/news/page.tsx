import { beritaList } from "@/data/rw011";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Link from "next/link";

const NewsPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Berita & Artikel" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-posts">
                {beritaList.map((item, index) => (
                  <div className="single-blog-post" key={index}>
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: `url(${item.foto})`,
                      }}
                    />
                    <div className="post-content">
                      <div className="post-cat">
                        <Link href="/news">{item.kategori}</Link>
                      </div>
                      <h2>
                        <Link href="/news-details">{item.judul}</Link>
                      </h2>
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          {item.tanggal}
                        </span>
                        <span>
                          <i className="fal fa-user" />
                          {item.penulis}
                        </span>
                      </div>
                      <p>{item.ringkasan}</p>
                      <div className="d-flex justify-content-between align-items-center mt-30">
                        <div className="post-link">
                          <Link href="/news-details">
                            <i className="fal fa-arrow-right" /> Baca
                            Selengkapnya
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default NewsPage;
