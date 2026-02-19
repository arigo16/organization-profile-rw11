import { beritaList } from "@/data/rw011";
import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";

const NewsDetailsPage = () => {
  const berita = beritaList[0]; // Default: berita pertama

  return (
    <DanboxLayout>
      <PageBanner pageName="Detail Berita" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details border-wrap">
                <div className="single-blog-post post-details">
                  <div className="post-content">
                    <div className="post-cat">
                      <Link href="/news">{berita.kategori}</Link>
                    </div>
                    <h2>{berita.judul}</h2>
                    <div className="post-meta">
                      <span>
                        <i className="fal fa-calendar-alt" />
                        {berita.tanggal}
                      </span>
                      <span>
                        <i className="fal fa-user" />
                        {berita.penulis}
                      </span>
                    </div>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ height: "auto", width: "100%" }}
                      src={berita.foto}
                      alt={berita.judul}
                      className="mb-4"
                    />
                    <p>{berita.konten}</p>
                    <p>{berita.ringkasan}</p>
                  </div>
                </div>
                <div className="row tag-share-wrap">
                  <div className="col-lg-8 col-12">
                    <h4>Tag Terkait</h4>
                    <div className="tagcloud">
                      <Link href="/news">{berita.kategori}</Link>
                      <Link href="/news">RW 011</Link>
                      <Link href="/news">Warga</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                    <h4>Bagikan</h4>
                    <div className="social-share">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default NewsDetailsPage;
