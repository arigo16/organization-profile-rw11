import { galeriKegiatan } from "@/data/rw011";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";
import Image from "next/image";

const GaleriPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Galeri Kegiatan" />
      <section className="news-grid-section section-padding">
        <div className="container">
          <div className="row g-4">
            {galeriKegiatan.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 3) * 0.1}s`}
              >
                <div className="news-card-items">
                  <div className="news-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                      src={item.foto}
                      alt={item.judul}
                    />
                    <div className="post-box">
                      <span>{item.kategori}</span>
                    </div>
                  </div>
                  <div className="news-content">
                    <div className="post-date">
                      <i className="fal fa-calendar-alt" /> {item.tanggal}
                    </div>
                    <h3>{item.judul}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default GaleriPage;
