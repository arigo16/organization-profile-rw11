import { layananCepat } from "@/data/rw011";
import Link from "next/link";

export const Service1 = () => {
  return (
    <section className="service-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="fas fa-th-large" />
            Akses Cepat
          </span>
          <h2 className="mt-char-animation">
            Layanan Portal <br />
            RW 011
          </h2>
        </div>
        <div className="row">
          {layananCepat.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + i * 0.1}s`}
            >
              <div className="service-card-items">
                <div
                  className="service-content"
                  style={{ padding: "30px 25px" }}
                >
                  <div className="mb-3">
                    <i
                      className={item.icon}
                      style={{ fontSize: "40px", color: "var(--theme-color)" }}
                    />
                  </div>
                  <h3>
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  <Link
                    href={item.link}
                    className="theme-btn transparent-btn-2 mt-3"
                  >
                    Selengkapnya <i className="fas fa-arrow-right" />
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
