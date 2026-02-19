import { beritaList } from "@/data/rw011";
import Image from "next/image";
import Link from "next/link";

export const News1 = () => {
  const latestNews = beritaList.slice(0, 3);

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
        <div className="row">
          {latestNews.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <div
                className={`single-news-items-2 ${index === 1 ? "active" : ""}`}
              >
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: `url(${item.foto})` }}
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
                      <Link href="/news">{item.judul}</Link>
                    </h4>
                    <ul className="post-list">
                      <li>
                        <i className="far fa-user" />
                        <span>{item.penulis}</span>
                      </li>
                      <li>
                        <Link href="/news">
                          <i className="fas fa-long-arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
  const newsData = beritaList.slice(0, 3);
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
        <div className="row">
          {newsData.map((item, index) => (
            <div
              key={index}
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
                    src={item.foto}
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
                      <i className="far fa-user" /> {item.penulis}
                    </li>
                    <li>
                      <i className="far fa-tag" /> {item.kategori}
                    </li>
                  </ul>
                  <h4>
                    <Link href="/news">{item.judul}</Link>
                  </h4>
                  <Link href="/news" className="link-btn">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
